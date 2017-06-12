import { Ang4SimplestTreePage } from './app.po';

describe('ang4-simplest-tree App', () => {
  let page: Ang4SimplestTreePage;

  beforeEach(() => {
    page = new Ang4SimplestTreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
