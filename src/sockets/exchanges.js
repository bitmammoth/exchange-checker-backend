const { BitValorService } = require('./services');
const { log, } = require('./helpers');

const socketExchanges = async (socket) => {
  try {
    const exchanges = await BitValorService.fetch();
  } catch(e) {
    log('Error while fetching data!');
  }

  socket.emit('exchanges', exchanges);
  log('emitted: exchanges');
}

module.exports = socketExchanges;
