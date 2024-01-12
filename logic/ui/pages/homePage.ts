import { Locator , Page } from 'playwright';
import { BasePage } from './basePage';
export class HomePage extends BasePage {
   
  private loginBtn : Locator
  private greeting : Locator
  private wishlist : Locator
  private cart : Locator
  private loading : Locator
  
  constructor(page:Page) {
    super(page);
    this.loginBtn = page.locator('//a[@data-test-id="qa-header-login-button"]')
    this.greeting = page.locator('//span[text()=" הי, "]')
    this.wishlist = page.locator("//a[@class='tx-link-a link_2L32 link-wishlist_1lmB tx-link_29YD']")
    this.cart = page.locator("//a[@class='tx-link-a link_2L32 link-minicart_2nwP tx-link_29YD']")
    this.loading = page.locator("//div[@class='loading-bar_Y1Jw']/img")
  }
  
  gotoLogin = async ():Promise<void> => await this.loginBtn.click()
  gotoWishlist = async ():Promise<void> => await this.wishlist.click()
  gotoCart = async ():Promise<void> => await this.cart.click()
  confirmLogin = async ():Promise<boolean> => await this.greeting.isVisible()
  confirmLoading = async ():Promise<boolean> => await this.loading.isVisible()
  gotoListingPage = async (cat:string, subCat:string):Promise<void> => {
    await this.page.locator(`//a[@href='/${cat}']`).hover()
    await this.page.locator(`//a[@href='/${subCat}']`).click()
  }
}
