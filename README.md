# GCP Cloud Logging - Custom Logs

## Example of logging to a custom log in Google Cloud Logging

# Usage

```
npm i
node index.js
```

# Reference

## Index custom fields

Custom fields appear to already be searchable but maybe indexing them makes results faster?

https://cloud.google.com/logging/docs/analyze/custom-index

## Sink logs with Cloud Storage / BigQuery / PubSub

https://cloud.google.com/logging/docs/export/configure_export_v2

## Log Levels

https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logseverity

| LEVEL     | DESCRIPTION                                                                                  |
| --------- | -------------------------------------------------------------------------------------------- |
| DEFAULT   | (0) The log entry has no assigned severity level.                                            |
| DEBUG     | (100) Debug or trace information.                                                            |
| INFO      | (200) Routine information, such as ongoing status or performance.                            |
| NOTICE    | (300) Normal but significant events, such as start up, shut down, or a configuration change. |
| WARNING   | (400) Warning events might cause problems.                                                   |
| ERROR     | (500) Error events are likely to cause problems.                                             |
| CRITICAL  | (600) Critical events cause more severe problems or outages.                                 |
| ALERT     | (700) A person must take an action immediately.                                              |
| EMERGENCY | (800) One or more systems are unusable.                                                      |
