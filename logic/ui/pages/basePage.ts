import { Page } from 'playwright';

export class BasePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async reload(){
    await this.page.reload()
  }
  go = async (url: string) => await this.page.goto(url)
  
}
