import { KendoUiChartAxisIssuesPage } from './app.po';

describe('kendo-ui-chart-axis-issues App', () => {
  let page: KendoUiChartAxisIssuesPage;

  beforeEach(() => {
    page = new KendoUiChartAxisIssuesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
