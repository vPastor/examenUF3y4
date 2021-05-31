require("dotenv").config();
const port = process.env.SERVER_PORT || 6000;
var express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  server = require("http").createServer(app),
  io = require('socket.io')(server),
  path = require("path");

server.listen(port, (err, res) => {
  if (err) console.log(`ERROR: Connecting APP ${err}`);
  else console.log(`Server is running on port ${port}`);
});
//Connect to mongodb://devroot:devroot@mongo:27017/alquiler?authSource=admin
mongoose.connect(
  `mongodb://devroot:devroot@mongo:27017/alquiler?authSource=admin`,
  { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true },
  (err, res) => {
    if (err) console.log(`ERROR: connecting to Database.  ${err}`);
    else console.log(`Database Online: ${process.env.MONGO_DB}`);
  }
);

// Import routes of our app

var routes = require("./app/routes/app");
var api = require("./app/routes/api");
var handlerError = require("./app/routes/handler");
const { Socket } = require("dgram");

// view engine setup and other configurations
app.set("views", path.join(__dirname,"app","views"));
app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Define routes using URL path
app.get('/', function(req, res) {
  res.render("test");
})
/*Rutas */

/*Socket functions */

io.sockets.on('connection', function(socket){
    console.log('conectado a socket');
}); 
socket.on('all',function(data){
  socket.broadcast.emit('newMessage',{msg:data});
});
socket.on('1',function(data){
  socket.broadcast.emit('1',{msg:data});
});
socket.on('2',function(data){
  socket.broadcast.emit('2',{msg:data});
});
socket.on('3',function(data){
  socket.broadcast.emit('3',{msg:data});
});
module.exports = app;
