const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');                       


//set-up ваме сямия експрес, предаваме инстанция през функции
module.exports = (app) => {
    
    //TODO: Setup the view engine
    
    //app.set('views', './views')
    app.engine('.hbs', handlebars({
            extname: '.hbs'
        }));
        app.set('view engine', '.hbs');
    //TODO: Setup the body parser

    //TODO: Setup the static files - зареждаме css + images
    app.use('/static', express.static('static'))
};