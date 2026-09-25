import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { WebSocketServer } from 'ws';
import { GameServer } from './game.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const envFile = path.join(root, '.env');
if (fs.existsSync(envFile)) process.loadEnvFile(envFile);
const production = process.env.NODE_ENV === 'production' || process.argv.includes('--production');
let vite;
if (!production) {
  const { createServer } = await import('vite');
  vite = await createServer({ root, server: { middlewareMode: true, hmr: { port: Number(process.env.PORT || 5173) } }, appType: 'spa' });
}

const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon' };
const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
    return;
  }
  if (vite) return vite.middlewares(req, res);
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const relative = urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, '');
  const file = path.resolve(root, 'dist', relative);
  if (!file.startsWith(path.resolve(root, 'dist') + path.sep)) { res.writeHead(403); return res.end(); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'content-type': mime[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  });
});

const wss = new WebSocketServer({ noServer: true });
const game = new GameServer();
wss.on('connection', ws => game.connect(ws));
server.on('upgrade', (request, socket, head) => {
  if (new URL(request.url || '/', 'http://localhost').pathname !== '/ws') return socket.destroy();
  wss.handleUpgrade(request, socket, head, ws => wss.emit('connection', ws, request));
});
const port = Number(process.env.PORT || 5173);
server.listen(port, '0.0.0.0', () => console.log(`Heli 1v1 ready on http://localhost:${port}`));
