const calculateVariation = ({ last, open }) => (((last / open) - 1) * 100).toFixed(2);

module.exports = calculateVariation;
