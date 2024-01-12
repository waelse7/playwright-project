import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class QuickViewPage extends BasePage {
  
  private price : Locator
  private label : Locator

  constructor(page: Page){
    super(page)
    this.price = page.locator('//div[@data-test-id="qa-pdp-price-final"]')
    this.label = page.locator('//h1[@data-test-id="qa-pdp-name"]')
  }
  
  getPrice = async ():Promise<string | null> => this.price.textContent()
  getLabel = async ():Promise<string | null> => this.label.textContent()

}
