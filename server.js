require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// app.set('PORT', (process.env.PORT || 3030));

app.get('/', (Request, response) => {
    response.send('hello sahil');
});

app.get('/login', (req, res) =>{
    res.send('user ' + req.params.id)
})

app.listen(PORT, () => {
    console.log('app is running on ' ,PORT);
});