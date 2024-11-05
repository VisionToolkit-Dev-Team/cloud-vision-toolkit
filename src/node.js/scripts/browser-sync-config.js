const path = require("path");
const {
  expressPort,
  browserSyncPort,
  browserSyncUIPort,
  staticPaths,
} = require(path.join(__dirname, "..", "config", "config"));
const browserSync = require("browser-sync");

const watchedFiles = staticPaths.map((staticPath) =>
  path.join(__dirname, "..", staticPath, "**", "*.*")
);

browserSync.init({
  proxy: `localhost:${expressPort}`,
  files: watchedFiles,
  port: browserSyncPort,
  ui: { port: browserSyncUIPort },
  notify: false,
});
