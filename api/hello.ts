import {
  APIGatewayEvent,
  APIGatewayProxyResult,
  Context,
  APIGatewayProxyEvent,
} from "https://deno.land/x/lambda/mod.ts";

export async function handler(
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: `Welcom to vercel - deno ${Deno.version.deno} 🦕`,
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  };
}
