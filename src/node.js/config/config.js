const path = require("path");
require("dotenv").config();

module.exports = {
  netId: process.env.NET_ID || "127.0.0.1.1.1",
  rpcServer: {
    address: process.env.RPC_ADDRESS || "Main.server",
    port: 851,
  },
  expressPort: process.env.PORT || 8000,
  browserSyncPort: 5000,
  browserSyncUIPort: 5001,
  staticPaths: [
    "./public",
    "node_modules/mobject-litegraph/dist",
    "node_modules/mobject-graph-ui/dist",
    "node_modules/mobject-graph-ui-iec-datatypes-pack/dist",
    "node_modules/mobject-graph-ui-vision-pack/dist",
  ],
};
