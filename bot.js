/* Fazendo a requisição do dotenv */
require('dotenv/config');
/* Ultilização da aoi.JS */
const Aoijs = require("aoi.js")

//Configurando a Database
const aoifb = require("aoijs.firebase")
const firebase = aoifb.create({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
});

//Configurando o Client da Aoi.js

const bot = new Aoijs.Bot({
    mobilePlatform: false,
    intents: "all",
    token: process.env.token,
    prefix: ["$getServerVar[prefix]", "<@917962601923760139> ", "<@!917962601923760139> "],
    database: firebase,
    sharding: true,
    shardAmount: 2,
    autoUpdate: false,
    fetchInvites: false,
    suppressAllErrors: true,
    debugs:{
      interpreter: true
    },
    events:{
      timeout:true,
      functionError: true,
      music: true
    }
})
 

/* Configuração */

bot.onMessage({
    respondToBots: false,
    guildOnly: true
});
bot.readyCommand({
    channel: "",
    code: `$log[Ligado no usuário $userTag[$clientID]]`
})
require('./src/datas')(bot);
/* require('./questionsAPI.js')(bot) */