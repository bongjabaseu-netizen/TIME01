const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

const SITE_ID = 'b1d1c858-d0c0-41eb-bb5c-d6f5379a0a16';
const TOKEN = 'nfp_gJxnD7zZj65SvnaPeQ3UHZqmCez8QzJcf29e';
const DIST = './dist';

function getFiles(dir, base) {
  base = base || '';
  let results = {};
  const items = fs.readdirSync(dir);
  for (const f of items) {
    const full = path.join(dir, f);
    const rel = '/' + path.posix.join(base, f);
    if (fs.statSync(full).isDirectory()) {
      Object.assign(results, getFiles(full, path.posix.join(base, f)));
    } else {
      const hash = crypto.createHash('sha1').update(fs.readFileSync(full)).digest('hex');
      results[rel] = hash;
    }
  }
  return results;
}

async function deploy() {
  const files = getFiles(DIST);
  console.log('Files to deploy:', Object.keys(files).length);
  Object.keys(files).forEach(f => console.log(' ', f));

  // Create deploy
  const body = JSON.stringify({ files });

  const deployRes = await new Promise((resolve, reject) => {
    const opts = {
      hostname: 'api.netlify.com',
      path: '/api/v1/sites/' + SITE_ID + '/deploys',
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + TOKEN,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
      }
    };
    const req = https.request(opts, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(JSON.parse(data)));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });

  console.log('Deploy ID:', deployRes.id);
  console.log('State:', deployRes.state);
  const required = deployRes.required || [];
  console.log('Files to upload:', required.length);

  // Build hash -> path map
  const hashToPath = {};
  for (const [p, h] of Object.entries(files)) {
    hashToPath[h] = p;
  }

  // Upload each required file
  for (let i = 0; i < required.length; i++) {
    const hash = required[i];
    const filePath = hashToPath[hash];
    const fullPath = path.join(DIST, filePath);
    const fileData = fs.readFileSync(fullPath);

    await new Promise((resolve, reject) => {
      const opts = {
        hostname: 'api.netlify.com',
        path: '/api/v1/deploys/' + deployRes.id + '/files' + filePath,
        method: 'PUT',
        headers: {
          'Authorization': 'Bearer ' + TOKEN,
          'Content-Type': 'application/octet-stream',
          'Content-Length': fileData.length
        }
      };
      const req = https.request(opts, res => {
        let d = '';
        res.on('data', c => d += c);
        res.on('end', () => {
          console.log('Uploaded (' + (i+1) + '/' + required.length + '):', filePath);
          resolve();
        });
      });
      req.on('error', reject);
      req.write(fileData);
      req.end();
    });
  }

  console.log('\nDeploy complete!');
  console.log('URL: https://jovial-griffin-0797b2.netlify.app');
}

deploy().catch(e => console.error('Error:', e));
