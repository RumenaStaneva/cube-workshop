const env = process.env.NODE_ENV || 'development';
//извиква цялата конфигурация на база какъв environment ни се run-ва самия проект, сървър -production or dvelopment
const config = require('./config/config')[env];

//извикваме самия application на express
const express = require('express');

const indexRouter = require('./routes')
//извикваме да се set up-не целия express, като му подаваме самата истанция
const app = express();

//извикваме самите Route-ове и подаваме пак инстанцията арр
require('./config/express')(app);

app.use('/', indexRouter)

//слушаме на даден порт
app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));