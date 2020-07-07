//Harmanpreet kaur
// ID- 103725198

const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser') 
const app = express();
require('dotenv').config({path:"./config/sendgrid.env"});
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//loads the static resources
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))

//load controllers
const generalcontroller = require('./controllers/general');
/*const productcontroller= require('./controllers/product');*/

app.use("/",generalcontroller);
/*app.use("/product",productcontroller);*/
const PORT=3000;


app.listen(PORT, ()=>{
        console.log(`The webserver is working properly!`);
})

