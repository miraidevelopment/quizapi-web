const express = require('express');
const app = express();
const Discord = require("discord.js")
const fetch = require('node-fetch')

var client
var bot

module.exports = (bota) => {
  
  client = bota.client
  bot    = bota

}

app.get("/esportes", async(req, res) => {

    let esportesTitle = client.datas.esportesTitle;
    let esportesDesc = client.datas.esportesDesc;

    res.json({esportesTitle, esportesDesc})
})

app.get("/esportes/1", async(req, res) => {

    let q1c1 = client.datas.q1c1;
    let a1c1 = client.datas.a1c1;
    let r1c1 = client.datas.a1c1;

    res.json({q1c1, a1c1, r1c1})
})