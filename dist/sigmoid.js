"use strict";

function sigmoid(z) {
  return 1 / (1 + Math.exp(-z));
}

module.exports = sigmoid;