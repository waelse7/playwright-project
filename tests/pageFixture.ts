import { test as temp } from '@playwright/test'
import { CartComponent } from '../logic/ui/componenets/cartComponent'
import { WishlistPage } from '../logic/ui/pages/wishListPage'
import { LoginComponent } from '../logic/ui/componenets/loginComponent'
import HomePage from '../logic/ui/pages/homePage'
import { ListingPage } from '../logic/ui/pages/listingPage'
import { QuickViewPage } from '../logic/ui/pages/quickViewPage'

export default const test = temp.extend<{homePage: HomePage, loginComponent: LoginComponent,
  cartCompnonent: CartComponent, wishlistPage: WishlistPage, listingPage: ListingPage, quickViewPage: QuickViewPage}>
({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page))
  },
  loginComponent: async ({ page }, use) => {
    await use(new LoginComponent(page))
  },
  wishlistPage: async ({ page }, use) => {
    await use(new WishlistPage(page))
  },
  cartComponent: async ({ page }, use) => {
    await use(new CartComponent(page))
  },
  listingPage: async ({ page }, use) => {
    await use(new ListingPage(page))
  },
  quickViewPage: async ({ page }, use) => {
    await use(new QuickViewPage(page))
  }
})
