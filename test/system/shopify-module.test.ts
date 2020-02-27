const config = require('../fixture/nuxt.config.js');
const request = require('request-promise-native');
const { Nuxt, Builder } = require('nuxt');

const url = (path: string): string => `http://localhost:3000${path}`;
const get = (path: string) => request(url(path));

jest.setTimeout(10000);

describe('Nuxt Shopify', () => {
  let nuxt;

  beforeAll(async () => {
    nuxt = new Nuxt(config);
    await new Builder(nuxt).build();
    await nuxt.listen(3000);
  }, 60000);

  afterAll(async () => {
    await nuxt.close();
  });

  test('asyncData', async () => {
    const html = await get('/async-data');

    expect(html).toContain('Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzk4OTUyNzYwOTk=');
  });

  test('nuxtServerInit', async () => {
    const html = await get('/nuxt-server-init');
    expect(html).toContain('Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzk4OTUyNzYwOTk=');
  });

  test('mounted', async () => {
    const window = await nuxt.renderAndGetWindow(url('/mounted'));

    window.onNuxtReady(() => {
      const html = window.document.body.innerHTML;
      expect(html).toContain('Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzk4OTUyNzYwOTk=');
    });
  });
});
