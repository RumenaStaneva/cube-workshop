const env = process.env.NODE_ENV || 'development';
//извиква цялата конфигурация на база какъв environment ни се run-ва самия проект, сървър -production or dvelopment
const config = require('./config/config')[env];

//извикваме самия application на express
const express = require('express');
const app = express();

//извикваме да се set up-не целия express, като му подаваме самата истанция
const handlebars = require('express-handlebars');

//извикваме самите Route-ове и подаваме пак инстанцията арр
require('./config/express')(app);
require('./config/routes')(app);


//слушаме на даден порт
app.get('/', (req,res, next) => {
    res.render('home-page')
})

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));