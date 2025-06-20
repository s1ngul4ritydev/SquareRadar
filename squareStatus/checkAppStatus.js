import fetch from 'node-fetch';
import { EmbedBuilder } from 'discord.js';

let lastStatus = null;
let lastCommit = null;

export async function checkStatus(config, client) {
  try {
    const response = await fetch(`https://api.squarecloud.app/v2/apps/${config.applicationId}`, {
      headers: { Authorization: config.squarecloudToken }
    });

    if (!response.ok) throw new Error("Erro ao acessar a API da Squarecloud");

    const data = await response.json();
    const channel = await client.channels.fetch(config.channelId);

    if (!channel) return;

    const embed = new EmbedBuilder()
      .setTitle("🔍 Squarecloud - Status da Aplicação")
      .setURL(`https://squarecloud.app/dashboard/app/${config.applicationId}`)
      .setColor(data.running ? 0x57F287 : 0xED4245)
      .setTimestamp()
      .setFooter({ text: "Monitoramento de Aplicação Squarecloud - Sistema Desenvolvido com ❤️ pelo s1ngul4rity.dev" })
      .addFields(
        { name: "🆔 App ID", value: `${config.applicationId}`, inline: true },
        { name: "📡 Status", value: data.running ? "🟢 Online" : "🔴 Offline", inline: true },
        { name: "🕒 Última Ação", value: `<t:${Math.floor(data.last_restart / 1000)}:R>`, inline: false }
      );

    // Detecta mudanças no status
    if (lastStatus !== null && lastStatus !== data.running) {
      await channel.send({
        content: `⚠️ | A aplicação **${config.applicationId}** acabou de ${data.running ? "**iniciar**" : "**parar**"}!`,
        embeds: [embed]
      });
    }

    // Detecta novo commit (diferença na hora de restart)
    if (lastCommit !== null && lastCommit !== data.last_restart) {
      const commitEmbed = new EmbedBuilder()
        .setTitle("📦 Novo Commit Detectado")
        .setDescription("A aplicação foi atualizada (provável novo build ou alteração manual).")
        .setColor(0x3498DB)
        .setTimestamp()
        .addFields(
          { name: "🆔 App ID", value: `${config.applicationId}`, inline: true },
          { name: "🕒 Atualizado em", value: `<t:${Math.floor(data.last_restart / 1000)}:F>`, inline: true },
          { name: "🔗 Link", value: `[Dashboard](https://squarecloud.app/dashboard/app/${config.applicationId})` }
        );

      await channel.send({ embeds: [commitEmbed] });
    }

    lastStatus = data.running;
    lastCommit = data.last_restart;

  } catch (err) {
    console.error("🚫 | Erro ao verificar status da aplicação:", err.message);
  }
}
