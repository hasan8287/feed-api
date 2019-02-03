require('dotenv').config();
const express = require('express');

const feedRoute = require('./../src/feed/routes');

describe('Test INtegration', () => {
  before(async () => {
    await require('./../src/index')
  });

  describe('Test Integration', () => {
    require('./integration/feed.spec');
  });
});
