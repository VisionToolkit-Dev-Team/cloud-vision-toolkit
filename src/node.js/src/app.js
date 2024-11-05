const express = require("express");
const { AdsRpcClient } = require("mobject-client");
const {
  netId,
  rpcServer,
  expressPort,
  staticPaths,
} = require("../config/config.js");

const app = express();
const client = new AdsRpcClient(netId, rpcServer.port, rpcServer.address);

app.use(express.json({ limit: "50mb" }));

// Simplify static file serving
staticPaths.forEach((path) => {
  app.use("/", express.static(require("path").join(__dirname, "../", path)));
});

// RPC route handler
app.post("/rpc/:methodName", async (req, res) => {
  const { methodName } = req.params;
  const params = req.body || {};

  try {
    if (!client.isConnected) {
      await client.connect();
    }
    const result = await client.rpcCall(methodName, params);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

client.connect().catch((error) => {
  console.error("Initial connection to RPC server failed:", error);
});

app.listen(expressPort, () =>
  console.log(`Listening on http://127.0.0.1:${expressPort}`)
);

process.on("SIGINT", async () => {
  console.log("Disconnecting from RPC server...");
  await client.disconnect();
  console.log("Disconnected");
  process.exit(0);
});
