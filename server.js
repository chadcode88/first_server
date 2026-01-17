require("dotenv").config();

const express = require("express");
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 3000;
// app.set('PORT', (process.env.PORT || 3030));

app.get('/', (Request, response) => {
    response.send('hello sahil');
});

app.get('/login', (req, res) =>{
    res.send('user ' + req.params.id);
});

app.post('/Post', (req,res)=> {
    res.send('kaisa hai bidu');
});


app.listen(PORT, () => {
    console.log('app is running on ' ,PORT);
});