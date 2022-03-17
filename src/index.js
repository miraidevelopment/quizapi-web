const express = require('express');
const app = express();
const firebase = require('firebase');

const { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId, measurementId } = process.env;

firebase.initializeApp({
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
});

const db = firebase.database();

app.get("/:category/:id", async (req, res) => {

    let { category, id } = req.params;

    let data = await db.ref(`api/${category}/${id}`).once('value')
        data = data.val()

    if (data) return res.json({ questao: data.questao, alternativas: data.alternativas, resposta: data.resposta })
    if (!data) return res.json({ err: true, message: "Sorry, this category or question doesn't exist :(" })

    res.json({ err: true, message: "error" })
});

app.listen(process.env.PORT, () => console.log('[ QuizApi - Web ] Servidor web api online!') });
