const questoes = require("./methods/questoes");
const alternativas = require("./methods/alternativas");
const respostas = require("./methods/respostas");
const { initializeApp } = require("firebase/app");

function create(object) {
  try {
    const app = initializeApp(object);
    return {
      questoes: questoes,
      alternativas: alternativas,
      respostas: respostas
    };
  } catch(e) { throw new Error(e) }
}

module.exports = { create };
