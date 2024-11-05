# Web Server (frontend)

## Getting started

### TwinCAT

To use this project you will need cloud-vision-toolkit running in TwinCAT on the local system.

### Web Server

1. Install node dependencies

```
npm install
```

2. Run the UI

```
npm start
```

## Handling Library Development

There may be a need to modify NPM packages for this application which you will want to test first before raising a pull request on the package.

The workflow below has been created to assist with this process. For the sake of this example we shall use mobject-graph-ui as the library being modified and tested, but this will apply to any of the dependent packages.

### Workflow

1. **Clone and link the library:**

   If you haven't already, clone the `mobject-graph-ui` library to your local machine. Navigate into the library's directory and use `npm link` to create a global symlink:

   ```bash
   # mobject-graph-ui project

   cd path/to/mobject-graph-ui
   npm link
   ```

2. **Link the library to your app:**

   In your application's directory, link the globally symlinked mobject-graph-ui library to your local project:

   ```bash
   # cloud-vision-toolkit frontend project

   cd path/to/cloud-vision-toolkit/src/node.js/
   npm link mobject-graph-ui
   ```

   This will replace the npm-installed package with a symlink to your local version of mobject-graph-ui.

3. **Make changes and test:**

   Now, you can make your desired changes to the mobject-graph-ui library. Since your app is linked to your local version of the library, you can test these changes in real-time.

   Remember to rebuild the library if it's pre-compiled or if any build step is required after making changes:

   ```bash
   # mobject-graph-ui project

   npm run build
   ```

   Once you build the library files, these will automatically be used by the cloud-vision-toolkit.

   This still will repeat as many times as needed to develop and test.

4. **Unlink and prepare for production:**
   Once you are satisfied with the changes and testing:

   - First, unlink the library in your app's directory and reinstall the original:

   ```bash
   # cloud-vision-toolkit frontend project

   npm unlink mobject-graph-ui
   npm install
   ```

   - Then, unlink globally in your library directory:

   ```bash
   # mobject-graph-ui project

   npm unlink --no-save
   ```

5. **Finished**

   Your cloud-vision-toolkit is now using the original package and you are free to follow your other workflows for creating pull request on the library.
