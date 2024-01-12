import { test as setup } from '@playwright/test'
import urls from '../config/urls.json'
import { makeLoginRequest } from '../logic/api/requests/loginRequest'
const authFile = 'playwright/.auth/user.json'

setup('authenticate', async ({ request }) => {
  await request.post(urls.login_url,
    { data: makeLoginRequest(), headers: {"content-type": "application/json"} }
  )
  await request.storageState({ path: authFile });
})
