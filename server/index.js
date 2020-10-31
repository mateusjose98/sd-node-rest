
const express = require("express");

const porta = process.env.PORT || 80;
const app = express();

const bd = [
    {
        nome: "Calabresa",
        foto: "https://media.istockphoto.com/photos/pizza-de-calabresa-picture-id874333030",
        preco: 12.0
    },
    {
        nome: "Portuguesa",
        foto: "https://media.istockphoto.com/photos/pizza-de-calabresa-picture-id874333030",
        preco: 12.0
    },
    {
        nome: "Calabresa",
        foto: "https://media.istockphoto.com/photos/pizza-de-calabresa-picture-id874333030",
        preco: 12.0
    },
]

app.get("/pizzas", (request, response)=>{

    response.send(JSON.stringify(bd));

});



app.listen(porta, () => {
    console.log("servidor executando!")
});