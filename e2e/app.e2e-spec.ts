import { CLGroupAppPage } from './app.po';

describe('cl-group-app App', () => {
  let page: CLGroupAppPage;

  beforeEach(() => {
    page = new CLGroupAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
