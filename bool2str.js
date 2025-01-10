'use strict';

const mustBe = require('typechecks-pmb/must-be.js');

function validateArgs(y, n, t) {
  const w = ' argument for bool2str @ ' + (t || '(no trace hint)');
  mustBe.str('The "then"' + w, y);
  mustBe.str('The "else"' + w, n);
  return w;
}

function precurried(y, n, t, c) {
  return (mustBe.bool('The condition' + t, c) ? y : n);
}

const EX = function bool2str(c, y, n, t) {
  return precurried(y, n, validateArgs(y, n, t), c);
};


EX.c = function curry(y, n, t) {
  return precurried.bind(null, y, n, validateArgs(y, n, t));
};
EX.curry = EX.c;




module.exports = EX;
