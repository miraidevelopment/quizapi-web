const express = require('express');
const app = express();
const firebase = require('firebase')

firebase.initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
})

const db = firebase.database()

app.get("/:category/:id", async (req, res) => {

    let { category, id } = req.params;

    let data = await db.ref(`api/${category}/${id}`).once('value')
        data = data.val()

    if(data) return res.json({ questao: data.questao, alternativas: data.alternativas, resposta: data.resposta })
    if(!data) return res.json({ err: true, message: "Sorry, this category or question doesn't exist :(" })

    res.json({ err: true, message: "error" })

})

app.listen(80, () => {
    console.log('[ QuizApi - Web ] Servidor web api online!')
})
