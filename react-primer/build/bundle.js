webpackJsonp([0],{0:/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
function(e,t,n){function r(e,t){a.render(a.createElement("h1",null,"Demo "+e+": "+i[e-1]),document.getElementById("demo-title")),a.render(a.createElement(l,{demo:e}),document.getElementById("source-link")),t&&t.length&&a.render(a.createElement(d,{files:t}),document.getElementById("source-files"))}function o(){var e=a.createClass({displayName:"App",render:function(){return a.createElement("ul",null,i.map(function(e,t){var n=t+1;return a.createElement("li",{key:n},a.createElement("a",{href:"index.html?"+n},"Demo ",n,": ",e))}))}});a.render(a.createElement(e,null),document.getElementById("container")),a.render(a.createElement(l,null),document.getElementById("source-link"))}var a=n(/*! react */1),s=n(/*! react-prism */28).PrismCode;a.initializeTouchEvents(!0);var i=["Components & Properties","JSX","State","Composition, PropTypes, & Event Handlers","Mixins","Top-Down Data Flow & shouldComponentUpdate","Wrapping Children with this.props.children"],c=a.createClass({displayName:"DemoSourceLink",render:function(){var e="https://github.com/BinaryMuse/react-primer",t=e+"/tree/gh-pages/demo"+this.props.demo+"/demo"+this.props.demo+".jsx";return a.createElement("a",a.__spread({},this.props,{href:t}),this.props.children)}}),l=a.createClass({displayName:"LinkComponent",render:function(){if(this.props.demo){{var e="https://github.com/BinaryMuse/react-primer";e+"/tree/gh-pages/demo"+this.props.demo+"/demo"+this.props.demo+".jsx"}return a.createElement("p",null,a.createElement("a",{href:"index.html"},"Back to demo list"),"  ·  ",a.createElement(c,{demo:this.props.demo},"View on GitHub"))}return a.createElement("p",null,"Source code for each demo is available from the root of the ",a.createElement("a",{href:"https://github.com/BinaryMuse/react-primer"},"project repository")," and at the bottom of each demo page.")}}),d=a.createClass({displayName:"SourceCode",propTypes:{files:a.PropTypes.arrayOf(a.PropTypes.shape({name:a.PropTypes.string.isRequired,code:a.PropTypes.string.isRequired}).isRequired)},getInitialState:function(){return{selectedIndex:0}},render:function(){var e={listStyle:"none",paddingLeft:0,marginTop:0};return a.createElement("div",null,a.createElement("h2",null,"Demo Source"),a.createElement("ol",{style:e},this.props.files.map(this.renderSelector)),a.createElement("div",null,this.props.files.map(this.renderFile)))},renderSelector:function(e,t){var n={"float":"left",padding:10,cursor:"pointer",color:this.state.selectedIndex===t?"black":"#999"};return a.createElement("li",{key:e.name,style:n,onClick:this.handleSelectorClick.bind(null,t)},e.name)},renderFile:function(e,t){var n={display:this.state.selectedIndex===t?"block":"none",clear:"both"};return a.createElement("pre",{key:e.name,className:"line-numbers",style:n},a.createElement(s,{className:"language-javascript"},e.code))},handleSelectorClick:function(e){this.setState({selectedIndex:e})}}),m=~~window.location.search.replace(/\?/,"");switch(m){case 1:n.e(1,function(){n(/*! ./demo1/demo1.jsx */3),r(m,[{name:"demo1.jsx",code:n(/*! !raw!./demo1/demo1.jsx */10)}])});break;case 2:n.e(2,function(){n(/*! ./demo2/demo2.jsx */4),r(m,[{name:"demo2.jsx",code:n(/*! !raw!./demo2/demo2.jsx */11)}])});break;case 3:n.e(3,function(){n(/*! ./demo3/demo3.jsx */5),r(m,[{name:"demo3.jsx",code:n(/*! !raw!./demo3/demo3.jsx */12)}])});break;case 4:n.e(4,function(){n(/*! ./demo4/demo4.jsx */6),r(m,[{name:"demo4.jsx",code:n(/*! !raw!./demo4/demo4.jsx */13)}])});break;case 5:n.e(5,function(){n(/*! ./demo5/demo5.jsx */7),r(m,[{name:"demo5.jsx",code:n(/*! !raw!./demo5/demo5.jsx */14)}])});break;case 6:n.e(6,function(){n(/*! ./demo6/demo6.jsx */8);var e=[{name:"demo6.jsx",code:n(/*! !raw!./demo6/demo6.jsx */15)},{name:"store.jsx",code:n(/*! !raw!./demo6/store.jsx */16)},{name:"item.jsx",code:n(/*! !raw!./demo6/item.jsx */17)}];r(m,e)});break;case 7:n.e(7,function(){n(/*! ./demo7/demo7.jsx */9),r(m,[{name:"demo7.jsx",code:n(/*! !raw!./demo7/demo7.jsx */18)}])});break;default:o()}},28:/*!************************************!*\
  !*** ./~/react-prism/lib/index.js ***!
  \************************************/
function(e,t,n){"use strict";t.PrismCode=n(/*! ./PrismCode */67)},67:/*!****************************************!*\
  !*** ./~/react-prism/lib/PrismCode.js ***!
  \****************************************/
function(e,t,n){"use strict";{var r=n(/*! react/addons */1),o=r.addons;o.update}e.exports=r.createClass({displayName:"PrismCode",mixins:[r.addons.PureRenderMixin],propTypes:{async:r.PropTypes.bool},getDefaultProps:function(){return{async:!0}},componentDidMount:function(){this._hightlight()},componentDidUpdate:function(){this._hightlight()},_hightlight:function(){Prism.highlightElement(this.refs.code.getDOMNode(),this.props.async)},render:function(){return this._render(this.props,this.state)},_render:function(e){return r.createElement("code",{ref:"code",className:e.className},e.children)}})}});
//# sourceMappingURL=bundle.js.map