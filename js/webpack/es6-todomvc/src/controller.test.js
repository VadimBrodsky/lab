const Controller = require('./controller');

describe('test', () => {
  it('works', () => {
    expect(true).to.be.true;
  });
  it('works again', () => {
    expect('hi').to.equal('hi');
  });
  it('has a controller', () => {
    expect(Controller).to.exist;
  });
});
