// BPIC/LibraryName is prefix from blackprint.config.js
// This file is just reference, you can remove unnecessary property/function

// Node will be initialized first by Blackprint Engine
// This should be used for initialize port structure and set the target interface
Blackprint.registerNode('LibraryName/FeatureName/Template',
class MyTemplate extends Blackprint.Node {
	// this == node

	// You can use type data like Number/String or "Blackprint.Port"
	// use "Blackprint.Port.Trigger" if it's callable port
	static input = {
		PortName1: Blackprint.Port.Default(Number, 123)
	};

	// Output only accept 1 type data
	// use "Function" if it's callable port
	static output = {
		PortName2: Number
	};

	constructor(instance){
		super(instance);

		// Interface path
		// Let it empty if you want to use default built-in interface
		// You don't need to '.registerInterface()' if using default interface
		let iface = this.setInterface('BPIC/LibraryName/FeatureName/Template');
		iface.title = 'My Title';
		iface.description = 'My Description';
	}

	// Put logic as minimum as you can in .registerNode
	// You can also put these function on .registerInterface instead
	init(){
		// Called before iface.init()
	}

	// This is more recomended than using event listener "port.value" or "value"
	update(){
		// Triggered when any output value from other node are updated
		// And this node's input connected to that output
	}

	imported(data){
		// When this node was successfully imported
		// iface can also has this function feature, please use one only
	}

	request(port, sourceIface){
		// Triggered when other connected node is requesting
		// output from this node that have empty output
	}

	// Add support for remote sync (this will receive data from .syncOut)
	syncIn(eventName, value){
		if(eventName === 'data.value')
			this.iface.data.value = value;
	}
});

// For Non-sketch interface
// - first parameter is named path must use BPIC prefix
// - second parameter is interface class, should be saved to Context.IFace if you want to access it on '.sf' files, because '.sf' is executed on different context
Blackprint.registerInterface('BPIC/LibraryName/FeatureName/Template',
Context.IFace.MyTemplate = class IMyTemplate extends Blackprint.Interface {
	// this == iface

	constructor(node){
		super(node); // 'node' object from .registerNode

		this.myData = 123;
		this._log = '...';

		// If the data was stored on this, they will be exported as JSON
		// (Property name with _ or $ will be ignored)
		this.data = {
			_iface: this,
			get value(){ return this._value },
			set value(val){
				this._value = val;

				// Add support for remote sync: .syncOut(eventName, value);
				// The data will be received in: syncIn(event, value);
				this._iface.node.syncOut('data.value', val);
			},
		};

		// Creating object data with class is more recommended
		// this.data = new MyDataStructure(this);
	}

	// When importing nodes from JSON, this function will be called
	imported(data){
		// Use object assign to avoid replacing the object reference (that makes our getter/setter gone)
		Object.assign(this.data, data);
	}

	init(){
		// When Engine initializing this scope

		// ====== Port Shortcut ======
		const {
			IInput, IOutput, // Port interface
			Input, Output, // Port value
		} = this.ref;

		// Port interface can be used for registering event listener
		// Port value can be used for get/set the port value

		// this.output === IOutput
		// this.input === IInput
		// this.node.output === Output
		// this.node.input === Input

		// this.output.Test => Port Interface
		// this.node.output.Test => Number value

		// For some event listener please see on ./Template.sf
	}

	// Create custom getter and setter
	get log(){ return this._log }
	set log(val){
		this._log = val
	}
});