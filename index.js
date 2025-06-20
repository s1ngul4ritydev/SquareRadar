import { Client, GatewayIntentBits } from 'discord.js';
import { checkStatus } from './squareStatus/checkAppStatus.js';
import config from './config.json' assert { type: 'json' };
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

// ✅️ Suporte a __dirname com ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// 🚀 Carregar eventos da pasta squareEvents
const eventsPath = path.join(__dirname, 'squareEvents');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = await import(`file://${filePath}`);
  if (event.default && typeof event.default === 'function') {
    event.default(client);
  }
}

client.once("ready", () => {
  console.log(`🚀 | Aplicação iniciada como ${client.user.tag}`);

  // 🤖 Executa checagem inicial
  checkStatus(config, client);

  // 🔄 Faz checagens periódicas
  setInterval(() => {
    checkStatus(config, client);
  }, config.checkInterval);
});

client.login(config.discordToken);
