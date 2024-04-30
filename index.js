import express from 'express';
const host = '0.0.0.0';
const porta = 3000;
const app = express();

function paginaInicial(requisicao, resposta){
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Página Inicia</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    resposta.write('<h1>Tabuada</h1>');
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
};

function tabuadas(requisicao, resposta){
    let numero = requisicao.query.numero;
    let sequencia = requisicao.query.sequencia;
    if(!sequencia){
        sequencia = 1;
    }
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Página Inicia</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    if(numero){
        for(let i = 0; i <= sequencia; i++){
            const resultado = numero * i;
            resposta.write('<h1>' + numero + ' X ' + i + ' = ' + resultado + '</h1>');  
        }
    }
    else{
        resposta.write('<h1>Informe o parâmetro numero na url: http://localhost:3000/tabuada?numero=0</h1>');
    }
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
};

app.get("/tabuada", tabuadas);
app.get("/", paginaInicial);
app.listen(porta, host, () => {
    console.log("Servidor esta executando em http://" + host + ":" + porta);
});