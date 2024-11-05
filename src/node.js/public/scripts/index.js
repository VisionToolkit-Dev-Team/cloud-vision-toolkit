const { GraphFramework, GraphEditor, DefaultPack } = MobjectGraphUi;
const { VisionPack } = MobjectGraphUiVisionPack;
const { IecDatatypesPack } = MobjectGraphUiIecDatatypesPack;

import { ApiConnection } from "./fetch-rpc-api-connection.js";

var graphFramework = new GraphFramework();
graphFramework.install(DefaultPack);
graphFramework.install(IecDatatypesPack);
graphFramework.install(VisionPack);

var apiConnection = new ApiConnection();

new GraphEditor(
  {
    containerSelector: "#my-editor",
    width: 1920,
    height: 1000,
  },
  apiConnection
);

document
  .getElementById("getBlueprintsBtn")
  .addEventListener("click", async () => {
    console.log("api get blueprints");
    try {
      const result = await apiConnection.send("GetBlueprints");
      console.log("api get blueprints reply", result);
      graphFramework.installNodeBlueprints(result.blueprints);
    } catch (error) {
      console.error("RPC call failed:", error);
    }
  });
