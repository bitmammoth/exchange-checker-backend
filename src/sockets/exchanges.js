const { BitValorService } = require('../services');
const { log, } = require('../helpers');

const socketExchanges = async (socket) => {
  try {
    const exchanges = await BitValorService.fetch();
    socket.emit('exchanges', exchanges);
    log('emitted: exchanges');
  } catch(e) {
    log('Error while fetching data!');
  }

}

module.exports = socketExchanges;
