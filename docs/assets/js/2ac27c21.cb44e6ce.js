"use strict";(self.webpackChunk_rjsf_docs=self.webpackChunk_rjsf_docs||[]).push([[8456],{3636:(e,n,r)=>{r.d(n,{Iu:()=>m,yg:()=>y});var t=r(5668);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},m=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(r),u=a,y=p["".concat(i,".").concat(u)]||p[u]||f[u]||o;return r?t.createElement(y,s(s({ref:n},m),{},{components:r})):t.createElement(y,s({ref:n},m))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4132:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(5307),a=(r(5668),r(3636));const o={},s="oneOf, anyOf, and allOf",l={unversionedId:"usage/oneof",id:"version-3.2.1/usage/oneof",title:"oneOf, anyOf, and allOf",description:"react-jsonschema-form supports custom widgets for oneOf, anyOf, and allOf.",source:"@site/versioned_docs/version-3.2.1/usage/oneof.md",sourceDirName:"usage",slug:"/usage/oneof",permalink:"/react-jsonschema-form/docs/version-3.2.1/usage/oneof",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/versioned_docs/version-3.2.1/usage/oneof.md",tags:[],version:"3.2.1",frontMatter:{},sidebar:"docs",previous:{title:"Objects",permalink:"/react-jsonschema-form/docs/version-3.2.1/usage/objects"},next:{title:"Single fields",permalink:"/react-jsonschema-form/docs/version-3.2.1/usage/single"}},i={},c=[{value:"oneOf",id:"oneof",level:2},{value:"anyOf",id:"anyof",level:2},{value:"allOf",id:"allof",level:2}],m={toc:c},p="wrapper";function f(e){let{components:n,...r}=e;return(0,a.yg)(p,(0,t.c)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"oneof-anyof-and-allof"},"oneOf, anyOf, and allOf"),(0,a.yg)("p",null,"react-jsonschema-form supports custom widgets for oneOf, anyOf, and allOf."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"A schema with ",(0,a.yg)("inlineCode",{parentName:"li"},"oneOf")," is valid if ",(0,a.yg)("em",{parentName:"li"},"exactly one")," of the subschemas is valid."),(0,a.yg)("li",{parentName:"ul"},"A schema with ",(0,a.yg)("inlineCode",{parentName:"li"},"anyOf")," is valid if ",(0,a.yg)("em",{parentName:"li"},"at least one")," of the subschemas is valid."),(0,a.yg)("li",{parentName:"ul"},"A schema with ",(0,a.yg)("inlineCode",{parentName:"li"},"allOf")," is valid if ",(0,a.yg)("em",{parentName:"li"},"all")," of the subschemas are valid.")),(0,a.yg)("h2",{id:"oneof"},"oneOf"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n    type: "object",\n    oneOf: [\n      {\n        properties: {\n          lorem: {\n            type: "string",\n          },\n        },\n        required: ["lorem"],\n      },\n      {\n        properties: {\n          ipsum: {\n            type: "string",\n          },\n        },\n        required: ["ipsum"],\n      },\n    ],\n  };\n\nrender((\n  <Form schema={schema} />\n), document.getElementById("app"));\n')),(0,a.yg)("h2",{id:"anyof"},"anyOf"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n    type: "object",\n    anyOf: [\n      {\n        properties: {\n          lorem: {\n            type: "string",\n          },\n        },\n        required: ["lorem"],\n      },\n      {\n        properties: {\n          lorem: {\n            type: "string",\n          },\n          ipsum: {\n            type: "string",\n          },\n        }\n      },\n    ],\n  };\n\nrender((\n  <Form schema={schema} />\n), document.getElementById("app"));\n')),(0,a.yg)("h2",{id:"allof"},"allOf"),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"allOf")," is specified in a schema, react-jsonschema-form uses the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/mokkabonna/json-schema-merge-allof"},"json-schema-merge-allof")," library to merge the specified subschemas to create a combined subschema that is valid. For example, the below schema evaluates to a combined subschema of ",(0,a.yg)("inlineCode",{parentName:"p"},'{type: "boolean"}'),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  title: "Field",\n  allOf: [\n    {\n      type: ["string", "boolean"]\n    },\n    {\n      type: "boolean"\n    },\n  ],\n  };\n\nrender((\n  <Form schema={schema} />\n), document.getElementById("app"));\n')))}f.isMDXComponent=!0}}]);