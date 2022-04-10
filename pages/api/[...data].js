import db from '../../services/database.js';

export default async function api(req, res) {

    const { data } = req.query

    let dados = await db.ref(`api/${data[0]}/${data[1]}`).once('value')
        dados = dados.val()

    if(!dados) dados = { err: true, message: `Desculpa, não encontrei esse quiz!` };

    res.json(dados)

}