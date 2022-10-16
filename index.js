// Imports the Google Cloud client library
const { Logging } = require("@google-cloud/logging");

async function logEntry(LEVEL, LOG_OBJECT) {
  // Creates a client
  // Service account used for GPC instances needs "Logging Admin" role
  const logging = new Logging();

  // Selects the log to write to
  const log = logging.log("custom-log-demo");

  // The metadata associated with the entry
  const metadata = {
    resource: { type: "global" },
    severity: LEVEL,
  };

  // Prepares a log entry
  const entry = log.entry(metadata, LOG_OBJECT);

  async function writeLog() {
    // Writes the log entry
    await log.write(entry);
    console.log(`Logged: ${LOG_OBJECT.message ?? "New Entry"}`);
  }
  writeLog();
}

logEntry("INFO", {
  message: "Test Message",
  customKey: "customValue",
});
