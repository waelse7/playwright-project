import { BrowserContext } from "playwright"


const httpRequest = async <T>(url:string, data:T, context:BrowserContext) =>{
    const response = await context.request.post(
        url, 
        {data: data, headers: {"content-type": "application/json"}}
        )
    const state = await context.storageState()
    const updatedcontext = await context.browser()?.newContext({ storageState: state })
    return { response, updatedcontext }
}

export { httpRequest }


