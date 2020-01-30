//to EXPRESS
const app = require("./backend/app");

//debug module of NODE
const debug = require("debug")("node-angular");

//to NODE
const http = require("http");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

//define PORT
// const port = process.env.PORT || 3000;
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

//create the NODE server
const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
//START listener on PORT

// server.listen(port);
server.listen(port, function () {
  console.log('Server is running..');
});

// console.log('server.js');
