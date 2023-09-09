const decimal = (n, scale) => n.toFixed(scale);

const numeric = (n) => parseFloat(n);

const floor = n => Math.floor(n);

const ceiling = n => Math.ceil(n);

module.exports = {
  numeric,
  decimal,
  floor,
  ceiling,
};
