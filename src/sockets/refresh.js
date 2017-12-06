const { BitValorService, } = require('./services');
const { log, } = require('./helpers');

const socketRefresh = async (socket) => {
  try {
    const exchanges = await BitValorService.fetch();
  } catch(e) {
    log('Error while refresh data!');
  }

  socket.emit('refresh', exchanges);
  log('emitted: refresh');
}

module.exports = socketRefresh;
