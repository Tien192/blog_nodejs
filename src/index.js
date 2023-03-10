const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');

const route = require('.\\routers');
const db = require('.\\config\\db');

//commect to DB
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());


//HTTP logger
app.use(morgan('combined'));

//templates engine
app.engine('hbs', engine({
  extname : '.hbs'
}));
app.set('view engine','hbs');
app.set('views',path.join(__dirname, 'resources','views'));


route(app);


app.listen(port, () => {
  console.log(` App listening on port http://127.0.0.1:${port}`);
});