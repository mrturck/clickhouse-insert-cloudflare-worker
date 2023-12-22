import { createClient } from "@clickhouse/client-web"; // or '@clickhouse/client-web'

export interface Env {
  CLICKHOUSE_HOST: string;
  CLICKHOUSE_USER: string;
  CLICKHOUSE_PASS: string;
  CLICKHOUSE_TABLE: string;
}

interface DummyTableValue {
  fruit: string;
  color: string;
  animal: string;
  ts: Date;
}

const samplesFruits = ["apple", "banana", "cherries"];
const samplesColors = ["red", "yellow", "blue"];
const samplesAnimals = ["cat", "dog", "mouse"];

/**
 * Generates dummy data
 * @returns {DummyTableValue} a random request value
 */
const makeRequest = (): DummyTableValue => ({
  fruit: samplesFruits[Math.floor(Math.random() * samplesFruits.length)],
  color: samplesColors[Math.floor(Math.random() * samplesColors.length)],
  animal: samplesAnimals[Math.floor(Math.random() * samplesAnimals.length)],
  ts: new Date(),
});

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    // TODO: Add your auth and validation logic here

    const client = createClient({
      host: env.CLICKHOUSE_HOST,
      username: env.CLICKHOUSE_USER,
      password: env.CLICKHOUSE_PASS,
    });

    await client.insert({
      table: env.CLICKHOUSE_TABLE,
      // structure should match the desired format, JSONEachRow in this example
      values: [makeRequest()],
      format: "JSONEachRow",
    });
    return new Response("Hello World!");
  },
};
