/**
 * @jest-environment node
 */

let window = globalThis;
require("@blackprint/engine");

let instance = null;
test('Blackprint does exist on window', async () => {
	expect(window.Blackprint).toBeDefined();

	// Create an instance where we can create nodes or import JSON
	instance = new Blackprint.Engine();
});

jest.setTimeout(60e3); // 1 minute

// If you're ready to create unit test for your module
// Please change `test.only()` into `test()`

// This may took longer to finish if also loading additional modules
test.only("Load required modules", async () => {
	// Force it as Node.js environment
	Blackprint.Environment.isBrowser = false;
	Blackprint.Environment.isNode = true;

	// Alternative for Blackprint.loadModuleFromURL(...);
	await import("../dist/nodes-rename-me.mjs"); // For Browser/Node.js

	// Wait and avoid Jest's test environment being torn down
	await Blackprint.getContext('LibraryName');
	await new Promise(resolve => setTimeout(resolve, 1000));

	// Check if the nodes has been registered
	expect(Blackprint.nodes['LibraryName']).toBeDefined();
});

test("Create a node", async () => {
	instance.createNode('LibraryName/FeatureName/Template', {id: 'The_ID'});
	expect(instance.iface.The_ID).toBeDefined();
});