import { RedisClientType } from "redis";

export async function example(client: Pick<RedisClientType, "GET">) {
  await client.GET("TEST");
}
