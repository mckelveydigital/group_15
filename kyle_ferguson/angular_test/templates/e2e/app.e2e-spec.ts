import { TemplatesPage } from './app.po';

describe('templates App', () => {
  let page: TemplatesPage;

  beforeEach(() => {
    page = new TemplatesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
