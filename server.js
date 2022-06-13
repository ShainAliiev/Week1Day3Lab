const express = require('express');
const app = express();
const PORT = 2000;

app.get('/greeting', (req, res) => {
  res.send('Hello, stranger!')
})

app.get('/greeting/:name', (req, res) => {
  res.send(`What's up, ${req.params.name}!`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
  res.send(`<h1>
   ${req.params.total * req.params.tipPercentage / 100} </h1>`)
})

app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req,res) => { 
  
  const array = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

res.send (`<h1> ${array[Math.floor(Math.random() * array.length)]}</h1>`)


})




app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
})




