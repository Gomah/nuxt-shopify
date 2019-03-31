const config = require('../fixture/nuxt.config');
const request = require('request-promise-native');
const { Nuxt, Builder } = require('nuxt');

const url = path => `http://localhost:3000${path}`;
const get = path => request(url(path));

jest.setTimeout(10000);

describe('basic', () => {
  let nuxt;

  beforeAll(async () => {
    nuxt = new Nuxt(config);
    await new Builder(nuxt).build();
    await nuxt.listen(3000);
  }, 60000);

  afterAll(async () => {
    await nuxt.close();
  });

  test('render', async () => {
    let html = await get('/');

    console.log('HTML', html);
    expect(html).toContain('Hello');
  });
});
