# clickhouse-insert-cloudflare-worker

This is a barebones Cloudflare worker that shows how to insert data into Clickhouse.

This has been tested with Clickhouse hosted on https://clickhouse.com

To test local, create a secret .dev.vars and add the following env vars:

- CLCKHOUSE_USER
- CLICKHOUSE_TABLE
- CLICKHOUSE_HOST
