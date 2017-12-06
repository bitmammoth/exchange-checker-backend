const io = require('socket.io')(process.env.APP_PORT);
const {
  socketExchanges,
  socketRefresh,
} = require('./sockets');
const { log, } = require('./helpers');

const app = async () => {
  io.on('connection', (socket) => {
    console.log('exchange-server-backend: someone just connected!');
    socketExchanges(socket);
    setInterval(() => socketRefresh(socket), 60000);
  });
  log('exchange-server-backend: waiting for connections...');
};

module.exports = app;
