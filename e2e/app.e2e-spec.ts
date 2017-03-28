import { TestCsvTojsonPage } from './app.po';

describe('test-csv-tojson App', () => {
  let page: TestCsvTojsonPage;

  beforeEach(() => {
    page = new TestCsvTojsonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
