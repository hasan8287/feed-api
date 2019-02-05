require('dotenv').config();

describe('Test', () => {
  describe('Unit Test', () => {
    require('./unit/feed.spec');
  });

  describe('Integration Test', () => {
    before(async () => {
      await require('./../src/index');
    });

    require('./integration/feed.spec');
  });
});
