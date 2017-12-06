const { BitValorService, } = require('../services');
const { log, } = require('../helpers');

const socketRefresh = async (socket) => {
  try {
    const exchanges = await BitValorService.fetch();
    socket.emit('refresh', exchanges);
    log('emitted: refresh');
  } catch(e) {
    log('Error while refresh data!');
  }
}

module.exports = socketRefresh;
