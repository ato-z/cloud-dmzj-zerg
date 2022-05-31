import { getBookListByParams } from "./core/get-list"

export async function handleRequest(request: Request): Promise<Response> {
  try {
    const results = await getBookListByParams({})
    console.log(results)
    return new Response(JSON.stringify(results))
  } catch (err: unknown) {
    let msg = '网络异常'
    if (err instanceof Error) msg = err.message
    return new Response(`{"msg": ${msg}, "error_code": 999}`)
  }
}
