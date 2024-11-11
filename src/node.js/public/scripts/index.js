const { GraphFramework, GraphEditor, DefaultPack } = MobjectGraphUi;
const { VisionPack } = MobjectGraphUiVisionPack;
const { IecDatatypesPack } = MobjectGraphUiIecDatatypesPack;

import { ApiConnection } from "./fetch-rpc-api-connection.js";

const graphFramework = new GraphFramework();
graphFramework.install(new DefaultPack());
graphFramework.install(new IecDatatypesPack());
graphFramework.install(new VisionPack());

const apiConnection = new ApiConnection();
const graphEditor = new GraphEditor("my-editor", apiConnection);

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
