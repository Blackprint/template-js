<details>
  <summary>Make sure to delete this collapsed template detail</summary>

This template contain an example that can be used for reference developing new Blackprint Module for Browser, Node.js, or Deno with ScarletsFrame compiler. Make sure you have modify the config file and remove the unused code when developing.

You may find file that has extension below:
 - `.sf`: to be exported for Browser only
 - `.js`: to be exported for Browser/Node.js/Deno

## Note
Currently this template is not using ES6 modules import system, you will need to use CDN link to load a library. If you have better idea for the Browser/Node.js/Deno import system, lets discuss it on Blackprint repository :)

If Blackprint have an breaking changes (v0.\*.0), make sure to visit this template again to see what was changed 😉

## Getting started with the development
Let's begin by replacing all placeholder inside of this template with your project name, for the example my project name is Keyboard and the repository is at `https://github.com/Blackprint/nodes-keyboard`.
 - `LibraryName` => `Keyboard`
 - `bp-your-module-name` => `@blackprint/nodes-keyboard`
 - `nodes-rename-me` => `nodes-keyboard`
 - `https://github.com/your/repository.git` => `https://github.com/Blackprint/nodes-keyboard.git`
 - `/gh/blackprint/template-js@dist` => `/gh/Blackprint/nodes-keyboard@dist`

You can also remove `/src/FeatureName` if you already familiar with the template.
---

## Versioning Note
The versioning should follow this format v`MAJOR.MINOR.PATCH` when reach `v1.0.0`.

**MAJOR version** when the nodes have breaking changes.<br>
**MINOR version** when you add has new feature.<br>
**PATCH version** when you do bug fixes that backwards compatible.<br>

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

**MAJOR version** always zero "0".<br>
**MINOR version** when you add has new feature, or possible breaking changes.<br>
**PATCH version** when you do bug fixes or add new feature that backwards compatible.<br>

---

Alright, let's remove the message above and start with the template below for the `README.md`.

If you're distributing multiple different compiled file you need to specify the module's `source` path in `blackprint` field from the `package.json` because it will being parsed by Blackprint Editor to easily view source of your nodes. If you need example, you can view [@Blackprint/nodes](https://github.com/Blackprint/nodes/blob/master/package.json#L27).

---

</details>

[![NPM](https://img.shields.io/npm/v/bp-your-module-name.svg)](https://www.npmjs.com/package/bp-your-module-name)
[![Build Status](https://github.com/blackprint/template-js/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/blackprint/template-js/actions/workflows/build.yml)

## Your project name
Description here

## Import this nodes from URL
Please specify the version to avoid breaking changes.

```js
Blackprint.loadModuleFromURL([
  'https://cdn.jsdelivr.net/npm/bp-your-module-name@0.0.1/dist/nodes-rename-me.mjs'
], {
  // Turn this on if you want to load .sf.js, and .sf.css
  // only with single .mjs
  loadBrowserInterface: true // set to "false" for Node.js/Deno
});
```

## Development URL
You can use this link to load unpublished nodes and still under development on GitHub.
> `https://cdn.jsdelivr.net/gh/blackprint/template-js@dist/nodes-rename-me.mjs?1`

Please append `/url-here?random-number` if your browser still using the cached files after the repository was updated.


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