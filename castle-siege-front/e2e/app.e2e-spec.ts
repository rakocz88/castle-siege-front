import { CastleSiegeFrontPage } from './app.po';

describe('castle-siege-front App', () => {
  let page: CastleSiegeFrontPage;

  beforeEach(() => {
    page = new CastleSiegeFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
