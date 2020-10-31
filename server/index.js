
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

app.use(express.json());
app.get("/" (req, res) => {
    res.send("BEM VINDO AO SISTEMA");
})
app.get("/pizzas/:numPizza", (request, response)=>{
    const numPizza = request.params.numpizza;

    if (numPizza >= 0 && numPizza < bd.length){
        response.send(JSON.stringify(bd[numPizza]));
    } else {
        response.status(404).send();
    }
    

});

app.post("/cadastrar", (req, res) =>{
    const pizza = req.body;


    bd.push(pizza);

    res.send("OK");
})



app.listen(porta, () => {
    console.log("servidor executando!")
});