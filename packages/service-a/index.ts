import { createClient } from "redis";
import { example } from "test-utility";

export async function main() {
  const client = createClient();
  await client.connect();
  example(client);
}
