window.document.body.innerHTML = require('fs').readFileSync(
  'src/jsdom/__stubs__/index.html'
);

const { incrementCount, data } = require('../main');

describe('incrementCount', () => {
  test('incrementing the count', () => {
    data.count = 0;
    incrementCount();
    expect(data.count).toBe(1);
  });
});
