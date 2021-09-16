// BPIC/LibraryName is prefix from blackprint.config.js
// This file is just reference, you can remove unnecessary property/function

// Node's logic, don't use browser's API or library here
// Data processing or data/type assignment only
Blackprint.registerNode('LibraryName/FeatureName/Template' function(node, iface){
	iface.title = 'title';
	iface.description = 'description';

	// Interface path
	iface.interface = 'BPIC/LibraryName/FeatureName/Template';

	// Unset 'iface.interface' if using default interface -> 'Blackprint/nodes/default'
	// You don't need to '.registerInterface()' if using default interface

	// ToDo: fix comment
	// If you want to use default template but want to '.registerInterface()'
	// Then you must specify 'Blackprint/nodes/default' template when using '.registerInterface()'

	node.output = {
		Test: 123
	};

	// Put logic as minimum as you can in .registerNode
	// You can also put these function on .registerInterface instead
	node.init = function(){
		// Called before iface.init()
	}

	node.update = function(){
		// Triggered when any output value from other node are updated
		// And this node's input connected to that output
	}

	node.request = function(){
		// Triggered when other connected node is requesting
		// output from this node that have empty output
	}

	node.imported = function(){
		// When this node was successfully imported
	}
});

// To be extended by Browser or Engine Interface (Optional)
// Useful if you have similar logic for the browser and engine
class PlaceHolder extends Blackprint.Node{
	static construct(){
		var iface = this;
		console.log('ehlo', iface.title);
	}

	callMe(){
		var iface = this;
		console.log('hello', iface.title);
	}
}

// Make it accessible to Template.sf
Context.PlaceHolder = PlaceHolder;

// For Non-browser (Optional)
// - first parameter is named path
// - second parameter is optional if using different settings
// - third parameter can be placed on second parameter
Blackprint.registerInterface('BPIC/LibraryName/FeatureName/Template', {
	extend: PlaceHolder
}, function(iface, bind){
	/* Assume we're in Node.js or Deno environment */
	// iface == node from .registerNode
	// iface.node == node from .registerNode
	// iface.callMe == extended from PlaceHolder

	iface.init = function(){
		// When Engine initializing this scope
	}

	// Usually (iface.log = 'something') would trigger interface change
	// But Node.js/Deno environment doesn't have browser interface
	// So we need to add callback when the value changes or being retrieved
	// And trigger our API on Node.js or Deno

	var log = '123';
	bind({
		get log(){
			return log
		},
		set log(val){
			log = val
		},
	});

	// ====== Most feature is similar with browser's registerInterface ======
	const {
		IInput, IOutput, IProperty, // Port interface
		Input, Output, Property, // Port value
	} = iface.const;

	var Node = iface.node; // 'node' object from .registerNode
	// ...
});