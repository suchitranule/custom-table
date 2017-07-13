import { ApcelaPage } from './app.po';

describe('apcela App', function() {
  let page: ApcelaPage;

  beforeEach(() => {
    page = new ApcelaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
