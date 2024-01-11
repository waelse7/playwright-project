import { Locator , Page } from 'playwright';
import BasePage from './basePage';
export class HomePage extends BasePage {
   
  private loginBtn : Locator
  private greeting : Locator
  private women : Locator
  private men : Locator
  private kids : Locator
  private wishlist : Locator
  private cart : Locator
  private loading : Locator
  
  constructor(page:Page) {
    super(page);
    this.loginBtn = page.locator('//a[@data-test-id="qa-header-login-button"]')
    this.greeting = page.locator('//span[text()=" הי, "]')
    this.women = page.locator('//a[@href="women"]')
    this.men = page.locator('//a[@href="men"]')
    this.kids = page.locator('//a[@href="kids"]')
    this.wishlist = page.locator("//a[@class='tx-link-a link_2L32 link-wishlist_1lmB tx-link_29YD']")
    this.cart = page.locator("//a[@class='tx-link-a link_2L32 link-minicart_2nwP tx-link_29YD']")
    this.loading = page.locator("//div[@class='loading-bar_Y1Jw']/img")
  }
  
  gotoLogin = async () => await this.loginBtn.click()
  gotoWomen = async () => await this.women.click()
  gotoMen = async () => await this.men.click()
  gotoKids = async () => await this.kids.click()
  gotoWishlist = async () => await this.wishlist.click()
  gotoCart = async () => this.cart.click()
  
}
