
const { expect } = require('chai');
const { generatePage } = require('./../../src/feed/controller');

describe('module feed', () => {
  it('should success generate page', () => {
    const dummy = {
      paging: {
        previous: 'https://graph.facebook.com/v3.2/10156282988163547/feed?format=json&since=1549279241&access_token=EAAD27GnyIZAEBALQ6Ej9peN3RiZAh6FZAYjRLFV8ANFCuH7gnZBPiFMelN9vebsXmZBZAQHFGZAqBDal7iI5s29VYtaCZCs35h4QIjXicOzEJUbqi3FzZBO0FzZAZCCGNdaVgNFEXB52iqZANPiZBh3Lx7vaYwub0OYsKsRiSftBb5TbxyqlA9ohluVnbr5GCazFU6tcZD&limit=25&__paging_token=enc_AdAogX3PG8PnvWqOooBdExsfINoPIhFRzzxgucnssTvoj0jhk6Mu35peWEtpaApdi3RpAOQmZAXRgDFsX2kqGPcwU&__previous=1',
        next: 'https://graph.facebook.com/v3.2/10156282988163547/feed?format=json&access_token=EAAD27GnyIZAEBALQ6Ej9peN3RiZAh6FZAYjRLFV8ANFCuH7gnZBPiFMelN9vebsXmZBZAQHFGZAqBDal7iI5s29VYtaCZCs35h4QIjXicOzEJUbqi3FzZBO0FzZAZCCGNdaVgNFEXB52iqZANPiZBh3Lx7vaYwub0OYsKsRiSftBb5TbxyqlA9ohluVnbr5GCazFU6tcZD&limit=25&until=1547467112&__paging_token=enc_AdBVycqoCyBjrVZCMTJhxKfelPtZC3zijRk6UUAa1pZBAdq1i600tMKk2IT49Ajj6FcS64TKa743XqWNiNGbiPrgCOQ',
      },
    };

    expect(generatePage(dummy.paging.previous))
      .to.be.equal('enc_AdAogX3PG8PnvWqOooBdExsfINoPIhFRzzxgucnssTvoj0jhk6Mu35peWEtpaApdi3RpAOQmZAXRgDFsX2kqGPcwU');
    expect(generatePage(dummy.paging.next))
      .to.be.equal('enc_AdBVycqoCyBjrVZCMTJhxKfelPtZC3zijRk6UUAa1pZBAdq1i600tMKk2IT49Ajj6FcS64TKa743XqWNiNGbiPrgCOQ');
  });
});
