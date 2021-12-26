const express = require('express');
const app = express();
app.get("/", (req, res) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Novo ping em: ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  res.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js")
const fetch = require('node-fetch')

var client
var bot

module.exports = (bota) => {

  client = bota.client
  bot    = bota

}

// Categoria de Questões: (Esportes)

app.get("/esportes", async(req, res) => {

    let esportesTitle = client.variables.esportesTitle
    let esportesDesc = client.variables.esportesDesc

    res.send(`<h1>Categoria [${esportesTitle}]</h1> <h2>${esportesDesc}</h2>`)
})

app.get("/esportes/1", async(req, res) => {

    let q1c1 = client.variables.q1c1
    let a1c1 = client.variables.a1c1
    let r1c1 = client.variables.r1c1

    res.json({questao: q1c1, alternativas: a1c1, resposta: r1c1})
})


// Categoria de Questões: (História)
app.get("/historia", async(req, res) => {

    let historiaTitle = client.variables.historiaTitle
    let historiaDesc = client.variables.historiaDesc

    res.send(`<h1>Categoria [${historiaTitle}]</h1> <h2>${historiaDesc}</h2>`)
})
app.get("/historia/1", async(req, res) => {

    let q1c2= client.variables.q1c2
    let a1c2= client.variables.a1c2
    let r1c2= client.variables.r1c2
  
    res.json({questao: q1c2, alternativas: a1c2, resposta: r1c2})
})