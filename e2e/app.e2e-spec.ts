import { SkyrimPage } from './app.po';

describe('skyrim App', () => {
  let page: SkyrimPage;

  beforeEach(() => {
    page = new SkyrimPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
