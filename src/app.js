const io = require('socket.io')(process.env.APP_PORT);
const {
  socketExchanges,
  socketRefresh,
} = require('./sockets');

const app = async () => {
  io.on('connection', (socket) => {
    socketExchanges(socket);
    setInterval(() => socketRefresh(socket), 5000);
  });
};

module.exports = app;
