import { ZColocPage } from './app.po';

describe('zcoloc App', () => {
  let page: ZColocPage;

  beforeEach(() => {
    page = new ZColocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
