if(false){ // Avoid executing line below when this file being compiled
// You can just copy and paste code below as a template for creating nodes

Blackprint.registerNode("YourLibraryName/FeatureName/Empty",
class EmptyNode extends Blackprint.Node {
	constructor(instance){
		super(instance);

		let iface = this.setInterface();
		iface.title = "Empty";

		this.input = {};
		this.output = {};
	}
});

Blackprint.registerInterface('BPIC/YourLibraryName/FeatureName/Empty',
Context.IFace.Empty = class EmptyIFace extends Blackprint.Interface{
	constructor(node){
		super(node);

		// Add some properties for this object
	}
});

Blackprint.Sketch.registerInterface('BPIC/YourLibraryName/FeatureName/Empty', {
	template: null
}, Context.IFace.Empty);


}