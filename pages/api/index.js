export default async function api(req, res) {

    let dados = { err: true, message: `Você não digitou a categoria, sse as saídas esportes, historia, entretenimento` };

    res.json(dados)

}