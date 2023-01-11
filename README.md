<details>
  <summary>Make sure to delete this collapsed template detail</summary>

## Getting started with the development
Please use install the `cli-tools` and create new module from template for getting started.

```sh
$ npm i -g @blackprint/cli-tools
$ blackprint create
```

If you're using VSCode this template also contain a code snippets on `.vscode` folder, make sure to check the prefix on how to trigger the code snippet's template.

---

The template contain an example that can be used for reference developing new Blackprint Module for Browser, Node.js, or Deno with ScarletsFrame compiler. Make sure you have modify the config file and remove the unused code when developing. An node example on `/src/FeatureName` folder can also be deleted if you're already familiar with Blackprint.

In the `src`, you may find file that has extension below:
 - `*.sf`: to be exported for Browser only
 - `*.js`: to be exported for Browser/Node.js/Deno

## Note
Currently this template is not using ES6 modules import system, you will need to use CDN link to load a library. if you're prefer to use ES6 module import, then TypeScript template should be your choice.

If Blackprint have an breaking changes (v0.\*.0), make sure to visit this template again to see what was changed 😉

---

## Versioning Note
The versioning should follow this format v`MAJOR.MINOR.PATCH` when reach `v1.0.0`.

- **MAJOR version** when the nodes have breaking changes.<br>
- **MINOR version** when you add has new feature.<br>
- **PATCH version** when you do bug fixes that backwards compatible.<br>

Changes that are considered as breaking (case-sensitive):
 - Change on port name `(output -> Output)`
 - Port data type changes `Number -> String`
   - If it was changed to `Any` or `Union` that contain original data type, it's not a breaking changes (as the cable can still be connected)
 - Deleted node or renamed node `(Clear/Cahce -> Clear/Cache)`
   - Only for name registered with `.registerNode(...)`
 - Interface function changes (API changes)
   - Only if you provide an documentation to call that function when obtaining the nodes with
   - `iface.call = ... -> iface.trigger = ...`
   - For private function please add "\_" underscore as first character
 - Function inside Node class is considered as private/internal function
   - `node.call = ... -> node.trigger = ...` = not breaking changes

The example for `Interface function changes`.
```js
// Let's assume you have created 'call' function and rename it to 'trigger'
// in .registerInterface('...')
let button = engine.iface['iface-id'];

// This will breaking due to changes
button.call(); // -> button.trigger()
```

---

If you think it will have design changes or many breaking changes. The versioning increment should follow the format below.

- **MAJOR version** always zero "0".<br>
- **MINOR version** when you add has new feature, or possible breaking changes.<br>
- **PATCH version** when you do bug fixes or add new feature that backwards compatible.<br>

---

Alright, let's remove the message above and start with the template below for the `README.md`.

If you're distributing multiple different compiled file you need to specify the module's `source` path in `blackprint` field from the `package.json` because it will being parsed by Blackprint Editor to easily view source of your nodes. If you need example, you can view [@blackprint/nodes](https://github.com/Blackprint/nodes/blob/master/package.json#L27).

---

Feel free to change the LICENSE from this template, as this template is just a template for your new project.

</details>

[![NPM](https://img.shields.io/npm/v/bp-your-module-name.svg)](https://www.npmjs.com/package/bp-your-module-name) [![Build Status](https://github.com/blackprint/template-js/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/blackprint/template-js/actions/workflows/build.yml)

## Your project name
Description here

## Import this nodes from URL
Please specify the version to avoid breaking changes.

```js
Blackprint.loadModuleFromURL([
  'https://cdn.jsdelivr.net/npm/bp-your-module-name@0.0.1/dist/nodes-rename-me.mjs'
], {
  // Turn this on if you want to load .sf.mjs, and .sf.css
  // only with single .mjs
  loadBrowserInterface: true // set to "false" for Node.js/Deno
});
```

## Development URL
You can use this link to load unpublished nodes and still under development on GitHub.
https://cdn.jsdelivr.net/gh/blackprint/template-js@dist/nodes-rename-me.mjs

Replace `dist` with your latest commit hash (from `dist` branch) to avoid cache from CDN.

## Local module server for development
```sh
$ cd /your/project/folder
$ git clone --depth 1 --recurse-submodules https://github.com/blackprint/nodes-rename-me.git .
$ pnpm i
$ npm start
 >> [Browsersync] Access URLs:
 >> -----------------------------------
 >> Local: http://localhost:6789
 >> -----------------------------------
```

Copy the `http://localhost:6789` URL and go to online Blackprint Editor. <br>
Go to development mode, and paste it to remote module server. Then refresh the page, after that you can modify the code from your favorite text editor. The compiler will watch every changes inside this folder by following the configuration in `blackprint.config.js`.

Before opening `.sf` file, please install the [syntax highlighter](https://github.com/StefansArya/scarletsframe-compiler/tree/master/syntax-highlighter) for your text editor.

> BPIC = Blackprint Interface Component

![brave_7NcrWUt66n](https://user-images.githubusercontent.com/11073373/159176092-7271f980-2a70-4e38-8830-e9746170426d.png)

### License
MIT