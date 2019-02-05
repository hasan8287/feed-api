
const chai = require('chai');
const http = require('chai-http');

chai.use(http);

const baseUrl = `${process.env.HOST}:${process.env.PORT}`;

describe('module feed', () => {
  it('should success get data feed', async () => {
    const data = await chai.request(baseUrl)
      .get('/feed')
      .then(res => res.body);

    chai.expect(data).to.be.an('object');
    chai.expect(data.code).to.be.equal(200);
  });

  it('should success next page', async () => {
    const data = await chai.request(baseUrl)
      .get('/feed')
      .then(res => res.body);

    const nextPage = await chai.request(baseUrl)
      .get(`/feed?page=${data.data.next}`)
      .then(res => res.body);

    chai.expect(nextPage.data.next).to.be.not.equal(data.data.next);
  });
});
