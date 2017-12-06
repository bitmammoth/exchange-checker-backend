const io = require('socket.io')(process.env.APP_PORT);
const { BitValorService } = require('./services');

const app = () => {
  console.log('Starting backend!');
}

module.exports = app;
