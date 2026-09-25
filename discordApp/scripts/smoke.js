import WebSocket from 'ws';
import assert from 'node:assert/strict';

const endpoint = process.env.HELI_TEST_WS || 'ws://localhost:5173/ws';
const code = `smoke-${Date.now()}`;
const clients = [new WebSocket(endpoint), new WebSocket(endpoint)];
const messages = [[], []];
try {
  await Promise.all(clients.map((ws, i) => new Promise((resolve, reject) => {
    ws.once('open', () => { ws.send(JSON.stringify({ type: 'join', room: code })); resolve(); });
    ws.once('error', reject);
    ws.on('message', data => messages[i].push(JSON.parse(data.toString())));
  })));
  await new Promise(resolve => setTimeout(resolve, 250));
  for (const list of messages) {
    assert.ok(list.some(m => m.type === 'joined'), 'join acknowledgement');
    assert.ok(list.some(m => m.type === 'state' && m.players.length === 2), 'two players in one room');
    assert.ok(list.some(m => m.type === 'roundStart'), 'round started');
  }
  console.log('WebSocket smoke test passed: two players share one active room.');
} finally {
  clients.forEach(ws => ws.close());
}
