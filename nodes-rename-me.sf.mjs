!async function(e,t){"use strict";t.exports&&t.exports!==globalThis&&Object.defineProperty(t.exports,"__esModule",{value:!0}),e.templates||(e.templates={});var o=sf.dom||sf.$,a=e.templates;e._sf_internal=e._sf_internal||{body_map:{},_replace(e,t){let a=o(t);return this.body_map[e]&&this.body_map[e].remove(),this.reinitViews&&this.reinitViews(a),this.body_map[e]=a},append(e,t){o(document.body).append(this._replace.apply(this,arguments))},prepend(e,t){o(document.body).prepend(this._replace.apply(this,arguments))}};let s=e.Blackprint.loadScope({url:import.meta.url}),n=sf.$,l=await s.getContext("LibraryName");a["BPIC/LibraryName/FeatureName/Template.sf"]='<div class="node your-class" style="transform: translate({{x}}px, {{y}}px)"><sf-template path="Blackprint/nodes/template/routes.sf"></sf-template><sf-template path="Blackprint/nodes/template/header.sf"></sf-template><div class="content"><div class="design-me">You can design me with CSS</div><div class="left-port"><sf-template path="Blackprint/nodes/template/input-port.sf"></sf-template></div><div class="right-port"><sf-template path="Blackprint/nodes/template/output-port.sf"></sf-template></div></div><sf-template path="Blackprint/nodes/template/other.sf"></sf-template></div>',console.log("Hello from Template.sf");l.PlaceHolder;s.Sketch.registerInterface("BPIC/LibraryName/FeatureName/Template",class extends l.IFace.MyTemplate{constructor(e){super(e),this.keepMe=n("<div>"),this.keepMe.text("Hello world!"),this.keepMe.css({width:"100%",textAlign:"center"}),this.log="123"}init(){this.$el(".content").prepend(this.keepMe);this.node;const{IInput:e,IOutput:t,Input:o,Output:a}=this.ref;a.PortName2=123,this.on("cable.connect",l.EventSlot,(function({port:e,target:t,cable:o}){})),e.PortName1.on("value",l.EventSlot,(function(e){console.log("PortName1:",e)})).on("connect",l.EventSlot,(function({port:e,target:t,cable:o}){})).on("disconnect",l.EventSlot,(function({port:e,target:t,cable:o}){})),t.PortName2.on("connecting",l.EventSlot,(function({port:e,target:t,activate:o}){var a;a=function(e){o(!!e)},setTimeout((()=>a(!0)),1e3),o()}))}hotReload(){console.log("Going to hot reload this object",this),this.hotReloading}hotReloadedHTML(){console.log("Was HTML changed/reloaded",this)}hotReloaded(){console.log("Hot reload active",this),this.init()}})}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:this,"undefined"!=typeof module?module:{exports:this});
//# sourceMappingURL=nodes-rename-me.sf.mjs.map