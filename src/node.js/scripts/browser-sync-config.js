const path = require("path");
const { expressPort, browserSyncPort, browserSyncUIPort } = require(path.join(
  __dirname,
  "..",
  "config",
  "config"
));
const browserSync = require("browser-sync");

browserSync.init({
  proxy: `localhost:${expressPort}`,
  // Ensure the path to the public directory is correct
  files: [path.join(__dirname, "..", "public", "**", "*.*")],
  port: browserSyncPort,
  ui: { port: browserSyncUIPort },
  notify: false,
});
