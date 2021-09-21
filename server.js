//set up express boiler
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





app.listen(port, () => {
    console.log('listening on port', port);
});