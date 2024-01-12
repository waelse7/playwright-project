import { test } from './pageFixture'
import { expect } from '@playwright/test'
import urls from '../config/urls.json'
import apiCalls from '../logic/api/apiCalls'

test.describe("this is a test suite for add to cart", () => {
  test.use({ storageState: { cookies: [], origins: [] } })
  test.beforeEach(async ({ homePage }) => {
    await homePage.go(urls.base_url)
  })
  test("add to cart test using api", async ({ homePage }) => {
    const context1 = homePage.page.context()
    const [res] = await apiCalls.addToCart(context1, 'W23441000409')
    const jsonBody: AddItemToCartResponse  = await res.json()
    expect(jsonBody.data.addAnyProductsToAnyCart.total_quantity).toBe(1)
  })
})
