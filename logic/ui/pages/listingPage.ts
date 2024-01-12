import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class ListingPage extends BasePage {
  
  private item : Locator

  constructor(page: Page){
    super(page)
    this.item = page.locator('//div[@class="product-list-wrapper_1--3"]//ol//li')
  }
  
  getItemInfo = async (n: number):Promise<{price: string | null, label: string | null}> => {
    const price = await this.item.nth(n)
    .locator("//div[@class='bottom_3-q0']//div[@class='row_2tcG bold_2wBM final-price_8CiX']")
    .textContent()
    const label = await this.item.nth(n)
    .locator("//div[@class='bottom_3-q0']//div[@class='right_1o65']//a")
    .textContent()
    return { price, label }
  }

  gotoQuickView = async (n: number):Promise<void> => {
    await this.item.nth(n).hover()
    await this.item.nth(n).locator("//button[text()='QUICKVIEW']").click()
  }
}
