
const express = require("express");

const porta = process.env.PORT || 3000;
const app = express();

app.get("/", (request, response)=>{

    console.log("teste");

    response.send("resposta do servidor")

});



app.listen(porta, () => {
    console.log("servidor executando!")
});