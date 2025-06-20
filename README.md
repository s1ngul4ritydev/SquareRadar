# 🚀 Squarecloud Radar


---


## 📋 Índice

- [Sobre](#-sobre)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Uso](#-uso)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Créditos](#-créditos)
- [Contato](#-contato)


---


## 🧐 Sobre

O **Squarecloud Radar** é um bot de Discord desenvolvido pela **CodeX Labs** para monitorar suas aplicações hospedadas na Squarecloud com notificações em tempo real!  
Ele avisa quando sua aplicação reinicia, para, volta ao ar ou recebe atualizações, tudo via **embeds** bem estilizados e detalhados no seu servidor Discord.

Feito para trazer mais controle e segurança ao seu desenvolvimento, facilitando o acompanhamento do status da sua aplicação sem sair do Discord!  


---


## ⚙️ Funcionalidades

- 🔥 Monitoramento contínuo da aplicação Squarecloud
- 🚦 Alertas instantâneos via embed para:
  - Reinício da aplicação
  - Queda/offline da aplicação
  - Volta online
  - Novos commits/builds detectados
- 🔗 Links diretos para o dashboard da aplicação
- ⏰ Checagem configurável via intervalo de tempo (default 1m30s)
- 🛠️ Suporte à modificação do `config.json` para customizar bot
- 💬 Logs enviados para canal Discord configurável
- ⚡ Bot leve, rápido e otimizado para rodar 24/7
- 🔄 Estrutura modular para facilitar adição de novos eventos e comandos


---


## 🛠️ Tecnologias

- [Node.js](https://nodejs.org/) - Plataforma JavaScript backend
- [discord.js v14](https://discord.js.org/) - Biblioteca oficial do Discord para bots
- [Axios](https://axios-http.com/) - Cliente HTTP para requisições REST
- [Node-fetch](https://www.npmjs.com/package/node-fetch) - Fetch API para Node.js
- APIs oficiais da Squarecloud para monitoramento


---


## 💻 Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/s1ngul4ritydev/SquareRadar.git

2. Entre na pasta do projeto:

cd squarecloud-radar


3. Instale as dependências:

npm install


4. Configure o arquivo config.json com suas informações (veja abaixo)


5. Inicie o bot:

npm start


---


## 📝 Configuração

Edite o arquivo config.json para definir suas credenciais e preferências:

{
  "discordToken": "SEU_TOKEN_DO_BOT_DISCORD",
  "squarecloudToken": "SEU_TOKEN_DA_SQUARECLOUD",
  "applicationId": "ID_DA_SUA_APLICACAO",
  "channelId": "ID_DO_CANAL_DE_LOGS_DISCORD",
  "checkInterval": 90000
}

discordToken: Token do bot Discord (crie um em Discord Developer Portal)

squarecloudToken: Token da API da Squarecloud para acessar sua aplicação

applicationId: ID da aplicação hospedada na Squarecloud que deseja monitorar

channelId: ID do canal Discord onde as notificações serão enviadas

checkInterval: Intervalo em milissegundos para checar o status da aplicação (90000 = 1 minuto e meio)


---


## 🚀 Uso

Assim que o bot estiver configurado e rodando, ele começará a monitorar automaticamente sua aplicação e enviará notificações no canal configurado no channelId.
Você poderá acompanhar status, reinícios, commits e muito mais diretamente pelo Discord!


---


## 📜 Comandos

> Nota: Atualmente o bot é focado em monitoramento automático, mas futuramente serão adicionados comandos para personalização via Discord.


---


## 🤝 Contribuição

Quer ajudar a melhorar o Squarecloud Radar?
Sinta-se à vontade para:

Abrir issues com bugs ou sugestões

Enviar pull requests com melhorias

Compartilhar feedbacks e ideias no Discord da CodeX Labs


---


## 📄 Licença

Este projeto está licenciado sob a licença customizada CodeX Labs License — consulte o arquivo LICENSE para detalhes completos.


---


## 🙏 Créditos

Desenvolvido com ❤️ pela CodeX Labs
Fundador: S1ngul4rity (Discord: s1ngul4rity.dev)

Agradecimentos especiais à comunidade por apoio e feedbacks constantes!


---


## 📬 Contato

Quer falar conosco?

Discord: s1ngul4rity.dev

Website: https://huggingface.co/spaces/S1ngul4rity/CodeXLabs


---


⭐ Se gostou do projeto, deixe uma ⭐ no GitHub para apoiar!


---


> Este README foi criado para facilitar o uso, configuração e divulgação do bot Squarecloud Radar, garantindo máxima transparência e facilidade para todos os usuários.


---
