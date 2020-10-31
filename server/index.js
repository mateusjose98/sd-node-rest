
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

app.get("/pizzas/:numpizza", (request, response)=>{
    const numPizza = request.params.numpizza;

    if (numPizza >= 0 && numPizza < bd.length){
        response.send(JSON.stringify(bd[numPizza]));
    } else {
        response.status(404).send();
    }
    

});



app.listen(porta, () => {
    console.log("servidor executando!")
});