import { GraphFramework, GraphEditor, DefaultPack } from "mobject-graph-ui";
import { VisionPack } from "mobject-graph-ui-vision-pack";
import { IecDatatypesPack } from "mobject-graph-ui-iec-datatypes-pack";
import { ApiConnection } from "./fetch-rpc-api-connection.js";

const graphFramework = new GraphFramework();
graphFramework.install(new DefaultPack());
graphFramework.install(new IecDatatypesPack());
graphFramework.install(new VisionPack());

const apiConnection = new ApiConnection();
window.graph = new GraphEditor("my-editor", apiConnection);
