import { AmardeepPage } from './app.po';

describe('amardeep App', () => {
  let page: AmardeepPage;

  beforeEach(() => {
    page = new AmardeepPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
