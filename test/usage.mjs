// -*- coding: utf-8, tab-width: 2 -*-

import eq from 'equal-pmb';

import b2s from '../bool2str.js';

eq(b2s(true, 'yes', 'no', 'simple true test'), 'yes');
eq(b2s(false, 'yes', 'no', 'simple false test'), 'no');

const bool2yesno = b2s.curry('yes', 'no', 'bool2yesno');
eq([true, true, false, true, false].map(bool2yesno),
  ['yes', 'yes', 'no', 'yes', 'no']);

const neitherBoolNorStr = [
  null,
  undefined,
  1,
  {},
  [],
  /regexp/,
  Boolean,
  String,
  0,
  NaN,
];

const notBool = [
  ...neitherBoolNorStr,
  'true', 'True', 'yes',
  'false', 'False', 'no',
  '', 'null', 'undefined', 'NaN',
];
notBool.forEach(function testBadValue(v) {
  eq.err(() => b2s(v, 'y', 'n'), /condition arg/);
  eq.err(bool2yesno, /condition arg/);
});

const notStr = [...neitherBoolNorStr, true, false];
notStr.forEach(function testBadValue(v) {
  eq.err(() => b2s(true, v, 'foo'), /"then" arg/);
  eq.err(() => b2s(false, v, 'bar'), /"then" arg/);
  eq.err(() => b2s(true, 'foo', v), /"else" arg/);
  eq.err(() => b2s(false, 'bar', v), /"else" arg/);
});












console.info('+OK usage test passed.');
