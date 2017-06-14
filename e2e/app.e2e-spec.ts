import { HnPwaPage } from './app.po';

describe('hn-pwa App', () => {
  let page: HnPwaPage;

  beforeEach(() => {
    page = new HnPwaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
