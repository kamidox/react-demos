webpackJsonp([7],{9:/*!*************************!*\
  !*** ./demo7/demo7.jsx ***!
  \*************************/
function(e,t,n){var r=n(/*! react */1),i=r.createClass({displayName:"CodeListing",propTypes:{filename:r.PropTypes.string},getDefaultProps:function(){return{filename:"unnamed file"}},render:function(){var e={backgroundColor:"black",color:"white",padding:5,fontFamily:"monospace"};return r.createElement("div",{style:{border:"1px solid black"}},r.createElement("div",{style:e},this.props.filename),r.createElement("pre",{style:{margin:5}},this.props.children))}}),o=r.createClass({displayName:"Application",render:function(){var e=["React.render(",'  // We pass `"Minerva"` as the `name` property, which is',"  // used in `HelloComponent`'s `render` function.",'  HelloElementFactory({name: "Minerva"}),','  document.getElementById("container")',");"].join("\n");return r.createElement("div",null,r.createElement("p",null,"Here is some code:"),r.createElement(i,{filename:"simple.jsx"},e),r.createElement("p",null,"And some more:"),r.createElement(i,null,'CodeListing with no "filename" property'))}});r.render(r.createElement(o,null),document.getElementById("container"))},18:/*!****************************************!*\
  !*** ./~/raw-loader!./demo7/demo7.jsx ***!
  \****************************************/
function(e){e.exports='var React = require("react");\n\n// Sometimes it\'s useful have a component that can\n// wrap other arbitrary ReactElements. React provides\n// `this.props.children` for this purpose.\n//\n// For example, given the following JSX:\n//\n//   <Component>Inner <strong>text</strong></Component>\n//\n// Inside `Component`, `this.props.children` provides:\n//\n//   Inner <strong>text</strong>\n//\n// In this example, we\'ll create a component that provides\n// a code listing with preformatted text and a label for\n// the filename.\n\nvar CodeListing = React.createClass({\n  propTypes: {\n    filename: React.PropTypes.string\n  },\n\n  getDefaultProps() {\n    return {\n      filename: "unnamed file"\n    };\n  },\n\n  render() {\n    var filenameStyle = {\n      backgroundColor: "black",\n      color: "white",\n      padding: 5,\n      fontFamily: "monospace"\n    };\n\n    return (\n      <div style={{border: "1px solid black"}}>\n        <div style={filenameStyle}>{this.props.filename}</div>\n        <pre style={{margin: 5}}>{this.props.children}</pre>\n      </div>\n    );\n  }\n});\n\nvar Application = React.createClass({\n  render() {\n      var code = [\n        \'React.render(\',\n        \'  // We pass `"Minerva"` as the `name` property, which is\',\n        \'  // used in `HelloComponent`\\\'s `render` function.\',\n        \'  HelloElementFactory({name: "Minerva"}),\',\n        \'  document.getElementById("container")\',\n        \');\'\n      ].join("\\n");\n\n    // We simply wrap whatever we want to show up in the code listing\n    // in a `<CodeListing>` element, and it\'s provided as\n    // `this.props.children` in the `CodeListing` component.\n    return (\n      <div>\n        <p>Here is some code:</p>\n        <CodeListing filename="simple.jsx">{code}</CodeListing>\n        <p>And some more:</p>\n        <CodeListing>CodeListing with no "filename" property</CodeListing>\n      </div>\n    );\n  }\n});\n\nReact.render(\n  <Application />,\n  document.getElementById("container")\n);\n'}});
//# sourceMappingURL=7.bundle.js.map