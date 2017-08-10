import { AngularSafePipePage } from './app.po';

describe('angular-safe-pipe App', () => {
  let page: AngularSafePipePage;

  beforeEach(() => {
    page = new AngularSafePipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
