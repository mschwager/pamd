import { AppPage } from './app.po';

describe('pamd App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Pluggable Authentication Modules');
  });
});
