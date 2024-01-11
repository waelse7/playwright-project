import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "./baseComponent";
import credentials from "../../../config/credentials.json"
export class LoginComponent extends BaseComponent {
  
  private email : Locator
  private password : Locator
  private loginBtn : Locator

  constructor(page: Page){
  super(page)
    this.email = page.locator('//div[@class="login-input_6Yxm"]//input[@name="email"]')
    this.password = page.locator('//div[@class="login-input_6Yxm"]//input[@name="password"]')
    this.loginBtn = page.locator('//button[@data-test-id="qa-login-submit"]')
  }

  login = async() => {
    await this.email.fill(credentials.email)
    await this.password.fill(credentials.password)
    await this.loginBtn.click()
  }
}
