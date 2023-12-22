# clickhouse-insert-cloudflare-worker

This is a barebones Cloudflare worker that shows how to insert data into Clickhouse.

This has been tested with Clickhouse hosted on https://clickhouse.com

To test local, create a secret .dev.vars and add the following env vars:

- CLICKHOUSE_USER
- CLICKHOUSE_TABLE
- CLICKHOUSE_HOST

After this run `npx wrangler start` to start the worker

When you're ready to deploy, add your production credentials as secrets through wrangler or the cloudflare UI and run `npx wrangler deploy`
