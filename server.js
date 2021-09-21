// set up express boiler
const express = require('express');
const app = express();
const port = 3000;

// same as the lab earlier
app.get('/greeting/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

// calculate tip set to a variable and run maths through res.send. cross fingers.
app.get('/tip/:total/:tippercentage', (req, res) => {
    let totalTip = (parseInt(req.params.total) * (parseInt(req.params.tippercentage) / 100));
    res.send(`Total tip is ${totalTip}`);
});

// set array to variable
let magicBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

// create two variable
app.get('/magic/:input', (req, res) => {
    // input in url    
    let question = (`${req.params.input}`);
    // random string by length    
    let answer = (magicBall[Math.floor(Math.random() * magicBall.length)]);
    // plug into html on page
    res.send(`<html>
        <body>
            <h1> What is your question? <br> 
            ${question}? 
            <br>
            Magic 8 Ball says... <br>
             ${answer} </h1>
        </body>
    </html>`);
});



app.listen(port, () => {
    console.log('listening on port', port);
});