const express = require('express');

const app = express()

const port = 3500



// set view engine
app.set('view engine', 'ejs');



app.listen(port, () =>{
    console.log(`app is listening ${port}`)
})

app.use('/', require('./server/Route/index'));
