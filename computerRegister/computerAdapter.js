"use strict";

function adapt(item) {
  return Object.assign(item, {
    id: +item.id,
    amount: +item.amount,
    price: +item.price,
  });
}

module.exports = { adapt };
