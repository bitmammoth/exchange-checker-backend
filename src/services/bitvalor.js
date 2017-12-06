const axios = require('axios');
const {
  parseExchanges,
  log,
} = require('../helpers');

class BitValorService {
  async fetch() {
    const requestTickers = axios.get('https://api.bitvalor.com/v1/ticker.json');
    const requestExchanges = axios.get('https://api.bitvalor.com/v1/exchanges.json');

    const [ tickersResponse, exchangesResponse ] = await Promise.all([
      requestTickers,
      requestExchanges
    ]);
    const exchanges = parseExchanges(exchangesResponse, tickersResponse); 

    return exchanges;
  }
}

module.exports = new BitValorService();
