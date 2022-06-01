
const express = require("express");
const cors = require("cors");
var createError = require('http-errors');
var path = require('path');
var bodyParser = require('body-parser');
const app = express();

const db = require("./app/models");
db.sequelize.sync();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

const lehrerRoute = require('./routes/lehrer.routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
 
// Static directory path
app.use(express.static(path.join(__dirname, 'dist/angular-mean-crud-tutorial')));
 
 
// API root
app.use('/api', lehrerRoute)
 
// PORT
const port = process.env.PORT || 8000;
 
app.listen(port, () => {
  console.log('Listening on port ' + port)
})
 
// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});
 
// Base Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});
 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-mean-crud-tutorial/index.html'));
});
 
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});








 

 
 
