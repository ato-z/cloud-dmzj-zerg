import { getBookListByParams } from "./core/get-list"

export async function handleRequest(request: Request): Promise<Response> {
  
  const results = await getBookListByParams({})

  return new Response(JSON.stringify(results))
}
