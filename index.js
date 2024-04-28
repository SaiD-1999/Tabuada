import express from 'express';
const host = '0.0.0.0';
const porta = 3000;
const app = express();

function paginaInicial(requisicao, resposta){
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Tabuada</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    resposta.write('<h1>Página Inicial</h1>');
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
};

app.get("/", paginaInicial);
app.listen(porta, host, () => {
    console.log("Servidor esta executando em http://" + host + ":" + porta);
});