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

app.get("/esportes/:id", async(req, res) => {

    let id   = req.params.id
    let questionC1 = client.variables[`q${id}c1`]
    let alternativeC1 = client.variables[`a${id}c1`]
    let answerC1 = client.variables[`r${id}c1`]

    if(sendError(id, "esportes", res)) {} else {
      
      res.json({questao: questionC1, alternativas: alternativeC1, resposta: answerC1})

    }
  
})


// Categoria de Questões: (História)
app.get("/historia", async(req, res) => {

     
    let historiaTitle = client.variables.historiaTitle
    let historiaDesc = client.variables.historiaDesc

    res.send(`<h1>Categoria [${historiaTitle}]</h1> <h2>${historiaDesc}</h2>`)
})
app.get("/historia/:id", async(req, res) => {

    let id   = req.params.id
    let questionC2 = client.variables[`q${id}c2`]
    let alternativeC2 = client.variables[`a${id}c2`]
    let answerC2 = client.variables[`r${id}c2`]
  
    if(sendError(id, "historia", res)) {} else {
      
      res.json({questao: questionC2, alternativas: alternativeC2, resposta: answerC2})

    }
})

app.get("/*", async(req, res) => {

  res.status(404).json({
    status: 404,
    message: "Esta categoria não existe! Possíveis opções (esportes, historia)"
  })

})

function sendError(id, category, res) {

  if(id < 1 || id > 10) {

    res.status(404).json({
      error: 404,
      message: `Quiz#${category} Não existe uma questão com esse número, por favor selecione uma questão de 1 à 10!`
    })
    return true

  } else {
    return false
  }

}