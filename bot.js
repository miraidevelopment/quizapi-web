const { keep_alive } = require("./keep_alive.js");
// definindo o aoi.js
const Aoijs = require("aoi.js")
// definindo a firebase do aoi.js
const Aoifb = require("aoijs.firebase")
//configurando a database
const firebase = Aoifb.create({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
});

// client do aoi
const bot = new Aoijs.Bot({
    mobilePlatform: false,
    intents: "all",
    token: process.env.token,
    prefix: ["$getServerVar[prefix]", "<@917962601923760139> ", "<@!917962601923760139> "],
    database: firebase,
    autoUpdate: false,
    fetchInvites: false,
    suppressAllErrors: true,
    debugs: {
      interpreter: true
    },
    events: {
      timeout:true,
      functionError: true,
      music: true
    }
});

// config
bot.loadCommands("./Commands");
bot.onMessage({
  respondToBots: false,
  guildOnly: true
});

bot.readyCommand({
    channel: "",
    code: `$log[Ligado no usuário $userTag[$clientID]]`
})

// server do projeto
require('./webAPI')(bot);
// stats
require('./src/stats')(bot);
// banco de dados
require('./src/datas')(bot);

// Sistema de AFK

bot.command({
  name: "<@",
  aliases: ["<!@"],
  nonPrefixed: true,
  code:`
$if[$getGlobalUserVar[afk;$mentioned[1]]==activated]
$reply[$messageID;😬・$username[$mentioned[1]] está no **modo AFK**. Deu uma saidinha...
> Motivo: \`\`\`$getGlobalUserVar[motivoAfk;$mentioned[1]]\`\`\`{delete:7s};yes]
$endif
`
})
      
bot.command({
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `
$setGlobalUserVar[afk;disabled;$authorID]
$setGlobalUserVar[motivoAfk;não foi passado o motivo 😕;$authorID]
$if[$getGlobalUserVar[afk;$authorID]==activated]
$sendMessage[😉・Seu **modo AFK** foi desativado. Se precisar dar uma saindinha **:3** e ativar de novo peça pra mim usando \`$getServerVar[prefix]afk\`{delete:7s};no]
$onlyIf[$checkContains[$message;$getServerVar[prefix]afk]==false;]
$endif
`
})
