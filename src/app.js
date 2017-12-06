const express = require('express');
const {
  socketExchanges,
  socketRefresh,
} = require('./sockets');
const { log, } = require('./helpers');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;

const server = express().listen(PORT, () => console.log(`Listening on ${ PORT }`));
const io = socketIO(server);

const app = async () => {
  let intervals = [];

  io.on('connection', (socket) => {
    console.log('exchange-server-backend: someone just connected!');
    socketExchanges(socket);
    intervals[socket.id] = setInterval(() => socketRefresh(socket), 60000);

    socket.on('disconnect', () => {
      console.log('someone just disconnected!');
      clearInterval(intervals[socket.id]);
      intervals = intervals.filter((v, k) => k === socket.id);
    })
  });

  log('exchange-server-backend: waiting for connections...');
};

module.exports = app;
