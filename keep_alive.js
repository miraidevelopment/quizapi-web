const app = require('express')();
const port = 3000 || process.env.PORT;
app.listen(port, () => console.log(`[SERVER] Servidor rodando em http://localhost:${port}`));
