"use strict";(self.webpackChunk_rjsf_docs=self.webpackChunk_rjsf_docs||[]).push([[1156],{3636:(e,n,t)=>{t.d(n,{Iu:()=>m,yg:()=>h});var i=t(5668);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return t?i.createElement(h,l(l({ref:n},m),{},{components:t})):i.createElement(h,l({ref:n},m))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[u]="string"==typeof e?e:a,l[1]=r;for(var p=2;p<o;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1132:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var i=t(5307),a=(t(5668),t(3636));const o={},l="uiSchema",r={unversionedId:"api-reference/uiSchema",id:"api-reference/uiSchema",title:"uiSchema",description:"JSON Schema is limited for describing how a given data type should be rendered as a form input component. That's why this library introduces the concept of uiSchema.",source:"@site/docs/api-reference/uiSchema.md",sourceDirName:"api-reference",slug:"/api-reference/uiSchema",permalink:"/react-jsonschema-form/docs/api-reference/uiSchema",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/docs/api-reference/uiSchema.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Semantic-UI Customization",permalink:"/react-jsonschema-form/docs/api-reference/themes/semantic-ui/uiSchema"},next:{title:"RJSF utility functions, constants and types",permalink:"/react-jsonschema-form/docs/api-reference/utility-functions"}},s={},p=[{value:"Exceptions to the equivalence",id:"exceptions-to-the-equivalence",level:2},{value:"ui:globalOptions",id:"uiglobaloptions",level:3},{value:"ui:rootFieldId",id:"uirootfieldid",level:3},{value:"ui:field",id:"uifield",level:3},{value:"ui:fieldReplacesAnyOrOneOf",id:"uifieldreplacesanyoroneof",level:3},{value:"ui:options",id:"uioptions",level:3},{value:"ui:XXX or ui:options.XXX",id:"uixxx-or-uioptionsxxx",level:2},{value:"widget",id:"widget",level:3},{value:"classNames",id:"classnames",level:3},{value:"style",id:"style",level:3},{value:"autocomplete",id:"autocomplete",level:3},{value:"autofocus",id:"autofocus",level:3},{value:"description",id:"description",level:3},{value:"disabled",id:"disabled",level:3},{value:"emptyValue",id:"emptyvalue",level:3},{value:"enumDisabled",id:"enumdisabled",level:3},{value:"enumNames",id:"enumnames",level:3},{value:"filePreview",id:"filepreview",level:3},{value:"help",id:"help",level:3},{value:"hideError",id:"hideerror",level:3},{value:"inputType",id:"inputtype",level:3},{value:"label",id:"label",level:3},{value:"order",id:"order",level:3},{value:"placeholder",id:"placeholder",level:3},{value:"readonly",id:"readonly",level:3},{value:"rows",id:"rows",level:3},{value:"title",id:"title",level:3},{value:"submitButtonOptions",id:"submitbuttonoptions",level:3},{value:"<code>norender</code> option",id:"norender-option",level:4},{value:"<code>submitText</code> option",id:"submittext-option",level:4},{value:"<code>props</code> section",id:"props-section",level:4},{value:"<code>disabled</code> prop",id:"disabled-prop",level:5},{value:"<code>className</code> prop",id:"classname-prop",level:5},{value:"<code>duplicateKeySuffixSeparator</code> option",id:"duplicatekeysuffixseparator-option",level:2},{value:"Using uiSchema with oneOf, anyOf",id:"using-uischema-with-oneof-anyof",level:2},{value:"anyOf",id:"anyof",level:3},{value:"oneOf",id:"oneof",level:3},{value:"Theme Options",id:"theme-options",level:2}],m={toc:p},u="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,i.c)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"uischema"},"uiSchema"),(0,a.yg)("p",null,"JSON Schema is limited for describing how a given data type should be rendered as a form input component. That's why this library introduces the concept of uiSchema."),(0,a.yg)("p",null,"A UI schema is basically an object literal providing information on ",(0,a.yg)("strong",{parentName:"p"},"how")," the form should be rendered, while the JSON schema tells ",(0,a.yg)("strong",{parentName:"p"},"what"),"."),(0,a.yg)("p",null,"The uiSchema object follows the tree structure of the form field hierarchy, and defines how each property should be rendered."),(0,a.yg)("p",null,"Note that almost every property within uiSchema can be rendered in one of two ways: ",(0,a.yg)("inlineCode",{parentName:"p"},'{"ui:options": {[property]: [value]}}'),", or ",(0,a.yg)("inlineCode",{parentName:"p"},'{"ui:[property]": value}'),"."),(0,a.yg)("p",null,"In other words, the following ",(0,a.yg)("inlineCode",{parentName:"p"},"uiSchema"),"s are equivalent:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "ui:title": "Title",\n  "ui:description": "Description",\n  "ui:classNames": "my-class",\n  "ui:submitButtonOptions": {\n    "props": {\n      "disabled": false,\n      "className": "btn btn-info"\n    },\n    "norender": false,\n    "submitText": "Submit"\n  }\n}\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "ui:options": {\n    "title": "Title",\n    "description": "Description",\n    "classNames": "my-class",\n    "submitButtonOptions": {\n      "props": {\n        "disabled": false,\n        "className": "btn btn-info"\n      },\n      "norender": false,\n      "submitText": "Submit"\n    }\n  }\n}\n')),(0,a.yg)("p",null,"For a full list of what is supported in the ",(0,a.yg)("inlineCode",{parentName:"p"},"uiSchema")," see the ",(0,a.yg)("inlineCode",{parentName:"p"},"UiSchema")," type in ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form/blob/main/packages/utils/src/types.ts"},"@rjsf/utils/types.ts"),".\nBe sure to pay attention to the hierarchical intersection to these other types: ",(0,a.yg)("inlineCode",{parentName:"p"},"UIOptionsBaseType")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"TemplatesType"),"."),(0,a.yg)("h2",{id:"exceptions-to-the-equivalence"},"Exceptions to the equivalence"),(0,a.yg)("p",null,"There are 4 properties that exist in a ",(0,a.yg)("inlineCode",{parentName:"p"},"UiSchema")," that will not be found in an inner ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:options")," object."),(0,a.yg)("h3",{id:"uiglobaloptions"},"ui:globalOptions"),(0,a.yg)("p",null,"The set of globally relevant ",(0,a.yg)("inlineCode",{parentName:"p"},"UiSchema")," options that are read from the root-level ",(0,a.yg)("inlineCode",{parentName:"p"},"UiSchema")," and stored in the ",(0,a.yg)("inlineCode",{parentName:"p"},"registry")," for use everywhere."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"import { UiSchema } from '@rjsf/utils';\n\nconst uiSchema: UiSchema = {\n  'ui:globalOptions': { copyable: true },\n};\n")),(0,a.yg)("h3",{id:"uirootfieldid"},"ui:rootFieldId"),(0,a.yg)("p",null,"By default, this library will generate ids unique to the form for all rendered widgets.\nIf you plan on using multiple instances of the ",(0,a.yg)("inlineCode",{parentName:"p"},"Form")," component in a same page, it's wise to declare a root prefix for these, using the ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:rootFieldId")," uiSchema directive:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"import { UiSchema } from '@rjsf/utils';\n\nconst uiSchema: UiSchema = {\n  'ui:rootFieldId': 'myform',\n};\n")),(0,a.yg)("p",null,"This will make all widgets have an id prefixed with ",(0,a.yg)("inlineCode",{parentName:"p"},"myform"),"."),(0,a.yg)("h3",{id:"uifield"},"ui:field"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:field")," property overrides the ",(0,a.yg)("inlineCode",{parentName:"p"},"Field")," implementation used for rendering any field in the form's hierarchy.\nSpecify either the name of a field that is used to look up an implementation from the ",(0,a.yg)("inlineCode",{parentName:"p"},"fields")," list or an actual one-off ",(0,a.yg)("inlineCode",{parentName:"p"},"Field")," component implementation itself."),(0,a.yg)("p",null,"See ",(0,a.yg)("a",{parentName:"p",href:"/react-jsonschema-form/docs/advanced-customization/custom-widgets-fields#custom-field-components"},"Custom Widgets and Fields")," for more information about how to use this property."),(0,a.yg)("h3",{id:"uifieldreplacesanyoroneof"},"ui:fieldReplacesAnyOrOneOf"),(0,a.yg)("p",null,"By default, any field that is rendered for an ",(0,a.yg)("inlineCode",{parentName:"p"},"anyOf"),"/",(0,a.yg)("inlineCode",{parentName:"p"},"oneOf")," schema will be wrapped inside the ",(0,a.yg)("inlineCode",{parentName:"p"},"AnyOfField")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"OneOfField")," component.\nThis default behavior may be undesirable if your custom field already handles behavior related to choosing one or more subschemas contained in the ",(0,a.yg)("inlineCode",{parentName:"p"},"anyOf"),"/",(0,a.yg)("inlineCode",{parentName:"p"},"oneOf")," schema.\nBy providing a ",(0,a.yg)("inlineCode",{parentName:"p"},"true")," value for this flag in association with a custom ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:field"),", the wrapped components will be omitted, so just one instance of the custom field will be rendered.\nIf the flag is omitted or set to ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),", your custom field will be wrapped by ",(0,a.yg)("inlineCode",{parentName:"p"},"AnyOfField"),"/",(0,a.yg)("inlineCode",{parentName:"p"},"OneOfField"),"."),(0,a.yg)("h3",{id:"uioptions"},"ui:options"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:options")," property cannot be nested inside itself and thus is the last exception."),(0,a.yg)("h2",{id:"uixxx-or-uioptionsxxx"},"ui:XXX or ui:options.XXX"),(0,a.yg)("p",null,"All the properties that follow can be specified in the ",(0,a.yg)("inlineCode",{parentName:"p"},"uiSchema")," in either of the two equivalent ways."),(0,a.yg)("p",null,"NOTE: The properties specific to array items can be found ",(0,a.yg)("a",{parentName:"p",href:"/react-jsonschema-form/docs/json-schema/arrays#array-item-uiSchema-options"},"here")),(0,a.yg)("h3",{id:"widget"},"widget"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:widget")," property overrides the ",(0,a.yg)("inlineCode",{parentName:"p"},"Widget")," implementation used for rendering any field in the form's hierarchy.\nSpecify either the name of a widget that is used to look up an implementation from the ",(0,a.yg)("inlineCode",{parentName:"p"},"widgets")," list or an actual one-off ",(0,a.yg)("inlineCode",{parentName:"p"},"Widget")," component implementation itself."),(0,a.yg)("p",null,"See ",(0,a.yg)("a",{parentName:"p",href:"/react-jsonschema-form/docs/advanced-customization/custom-widgets-fields"},"Custom Widgets and Fields")," for more information about how to use this property."),(0,a.yg)("h3",{id:"classnames"},"classNames"),(0,a.yg)("p",null,"The uiSchema object accepts a ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:classNames")," property for each field of the schema:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { UiSchema } from '@rjsf/utils';\n\nconst uiSchema = {\n  title: {\n    'ui:classNames': 'task-title foo-bar',\n  },\n};\n")),(0,a.yg)("p",null,"Will result in:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<div class="field field-string task-title foo-bar">\n  <label>\n    <span>Title*</span>\n    <input value="My task" required="" type="text" />\n  </label>\n</div>\n')),(0,a.yg)("h3",{id:"style"},"style"),(0,a.yg)("p",null,"The uiSchema object accepts a ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:style")," property for each field of the schema:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { UiSchema } from '@rjsf/utils';\n\nconst uiSchema = {\n  title: {\n    'ui:style': { color: 'red' },\n  },\n};\n")),(0,a.yg)("p",null,"Will result in:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<div class="field field-string task-title" style={{ color: "red" }}>\n  <label>\n    <span>Title*</span>\n    <input value="My task" required="" type="text">\n  </label>\n</div>\n')),(0,a.yg)("h3",{id:"autocomplete"},"autocomplete"),(0,a.yg)("p",null,"If you want to mark a text input, select or textarea input to use the HTML autocomplete feature, set the ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:autocomplete")," uiSchema directive to a valid ",(0,a.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values"},"HTML autocomplete value"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\n\nconst schema: RJSFSchema = { type: 'string' };\nconst uiSchema: UiSchema = {\n  'ui:widget': 'textarea',\n  'ui:autocomplete': 'on',\n};\n")),(0,a.yg)("h3",{id:"autofocus"},"autofocus"),(0,a.yg)("p",null,"If you want to automatically focus on a text input or textarea input, set the ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:autofocus")," uiSchema directive to ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\n\nconst schema: RJSFSchema = { type: 'string' };\nconst uiSchema: UiSchema = {\n  'ui:widget': 'textarea',\n  'ui:autofocus': true,\n};\n")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"Sometimes it's convenient to change the description of a field. This is the purpose of the ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:description")," uiSchema directive:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\n\nconst schema: RJSFSchema = { type: 'string' };\nconst uiSchema: UiSchema = {\n  'ui:widget': 'password',\n  'ui:description': 'The best password',\n};\n")),(0,a.yg)("h3",{id:"disabled"},"disabled"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:disabled")," uiSchema directive will disable all child widgets from a given field."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Note: If you're wondering about the difference between a ",(0,a.yg)("inlineCode",{parentName:"p"},"disabled")," field and a ",(0,a.yg)("inlineCode",{parentName:"p"},"readonly")," one: Marking a field as read-only will render it greyed out, but its text value will be selectable. Disabling it will prevent its value to be selected at all.")),(0,a.yg)("h3",{id:"emptyvalue"},"emptyValue"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:emptyValue")," uiSchema directive provides the default value to use when an input for a field is empty"),(0,a.yg)("h3",{id:"enumdisabled"},"enumDisabled"),(0,a.yg)("p",null,"To disable an option, use the ",(0,a.yg)("inlineCode",{parentName:"p"},"enumDisabled")," property in uiSchema."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\n\nconst schema: RJSFSchema = {\n  type: 'string',\n  enum: ['one', 'two', 'three'],\n};\n\nconst uiSchema: UiSchema = {\n  'ui:enumDisabled': ['two'],\n};\n")),(0,a.yg)("h3",{id:"enumnames"},"enumNames"),(0,a.yg)("p",null,"Allows a user to provide a list of labels for enum values in the schema."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\n\nconst schema: RJSFSchema = {\n  type: 'number',\n  enum: [1, 2, 3],\n};\nconst uiSchema: UiSchema = {\n  'ui:enumNames': ['one', 'two', 'three'],\n};\n")),(0,a.yg)("h3",{id:"filepreview"},"filePreview"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"FileWidget")," can be configured to show a preview of an image or a download link for non-images using this flag."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\n\nconst schema: RJSFSchema = {\n  type: 'string',\n  format: 'data-url',\n};\nconst uiSchema: UiSchema = {\n  'ui:options': {\n    filePreview: true,\n  },\n};\n")),(0,a.yg)("h3",{id:"help"},"help"),(0,a.yg)("p",null,"Sometimes it's convenient to add text next to a field to guide the end user filling it. This is the purpose of the ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:help")," uiSchema directive:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\n\nconst schema: RJSFSchema = { type: 'string' };\nconst uiSchema: UiSchema = {\n  'ui:widget': 'password',\n  'ui:help': 'Hint: Make it strong!',\n};\n")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://i.imgur.com/scJUuZo.png",alt:null})),(0,a.yg)("p",null,"Help texts work for any kind of field at any level, and will always be rendered immediately below the field component widget(s) (after contextualized errors, if any)."),(0,a.yg)("h3",{id:"hideerror"},"hideError"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:hideError")," uiSchema directive will, if set to ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),", hide the default error display for the given field AND all of its child fields in the hierarchy."),(0,a.yg)("p",null,"If you need to enable the default error display of a child in the hierarchy after setting ",(0,a.yg)("inlineCode",{parentName:"p"},"hideError: true")," on the parent field, simply set ",(0,a.yg)("inlineCode",{parentName:"p"},"hideError: false")," on the child."),(0,a.yg)("p",null,"This is useful when you have a custom field or widget that utilizes either the ",(0,a.yg)("inlineCode",{parentName:"p"},"rawErrors")," or the ",(0,a.yg)("inlineCode",{parentName:"p"},"errorSchema")," to manipulate and/or show the error(s) for the field/widget itself."),(0,a.yg)("h3",{id:"inputtype"},"inputType"),(0,a.yg)("p",null,"To change the input type (for example, ",(0,a.yg)("inlineCode",{parentName:"p"},"tel")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"email"),") you can specify the ",(0,a.yg)("inlineCode",{parentName:"p"},"inputType")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:options")," uiSchema directive."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\n\nconst schema: RJSFSchema = { type: 'string' };\nconst uiSchema: UiSchema = {\n  'ui:options': {\n    inputType: 'tel',\n  },\n};\n")),(0,a.yg)("h3",{id:"label"},"label"),(0,a.yg)("p",null,"Field labels are rendered by default.\nLabels may be omitted on a per-field by setting the ",(0,a.yg)("inlineCode",{parentName:"p"},"label")," option to ",(0,a.yg)("inlineCode",{parentName:"p"},"false")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:options")," uiSchema directive."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { Form } from '@rjsf/core';\nimport { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = { type: 'string' };\nconst uiSchema: UiSchema = {\n  'ui:options': {\n    label: false,\n  },\n};\n\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")),(0,a.yg)("p",null,"They can also be omitted globally by setting the ",(0,a.yg)("inlineCode",{parentName:"p"},"label")," option to ",(0,a.yg)("inlineCode",{parentName:"p"},"false")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:globalOptions")," uiSchema directive."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { Form } from '@rjsf/core';\nimport { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = { type: 'string' };\nconst uiSchema: UiSchema = {\n  'ui:globalOptions': {\n    label: false,\n  },\n};\n\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")),(0,a.yg)("h3",{id:"order"},"order"),(0,a.yg)("p",null,"This property allows you to reorder the properties that are shown for a particular object. See ",(0,a.yg)("a",{parentName:"p",href:"/react-jsonschema-form/docs/json-schema/objects"},"Objects")," for more information."),(0,a.yg)("h3",{id:"placeholder"},"placeholder"),(0,a.yg)("p",null,"You can add placeholder text to an input by using the ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:placeholder")," uiSchema directive:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { Form } from '@rjsf/core';\nimport { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = { type: 'string', format: 'uri' };\nconst uiSchema: UiSchema = {\n  'ui:placeholder': 'http://',\n};\n\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")),(0,a.yg)("p",null,"Fields using ",(0,a.yg)("inlineCode",{parentName:"p"},"enum")," can also use ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:placeholder"),". The value will be used as the text for the empty option in the select widget."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { Form } from '@rjsf/core';\nimport { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = { type: 'string', enum: ['First', 'Second'] };\nconst uiSchema: UiSchema = {\n  'ui:placeholder': 'Choose an option',\n};\n\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")),(0,a.yg)("h3",{id:"readonly"},"readonly"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:readonly")," uiSchema directive will mark all child widgets from a given field as read-only. This is equivalent to setting the ",(0,a.yg)("inlineCode",{parentName:"p"},"readOnly")," property in the schema."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Note: If you're wondering about the difference between a ",(0,a.yg)("inlineCode",{parentName:"p"},"disabled")," field and a ",(0,a.yg)("inlineCode",{parentName:"p"},"readonly")," one: Marking a field as read-only will render it greyed out, but its text value will be selectable. Disabling it will prevent its value to be selected at all.")),(0,a.yg)("h3",{id:"rows"},"rows"),(0,a.yg)("p",null,"You can set the initial height of a textarea widget by specifying ",(0,a.yg)("inlineCode",{parentName:"p"},"rows")," option."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { Form } from '@rjsf/core';\nimport { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = { type: 'string' };\nconst uiSchema: UiSchema = {\n  'ui:options': {\n    widget: 'textarea',\n    rows: 15,\n  },\n};\n\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")),(0,a.yg)("h3",{id:"title"},"title"),(0,a.yg)("p",null,"Sometimes it's convenient to change a field's title. This is the purpose of the ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:title")," uiSchema directive:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\n\nconst schema: RJSFSchema = { type: 'string' };\nconst uiSchema: UiSchema = {\n  'ui:widget': 'password',\n  'ui:title': 'Your password',\n};\n")),(0,a.yg)("h3",{id:"submitbuttonoptions"},"submitButtonOptions"),(0,a.yg)("p",null,"Sometimes it's convenient to change the behavior of the submit button for the form. This is the purpose of the ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:submitButtonOptions")," uiSchema directive:"),(0,a.yg)("p",null,"You can pass any other prop to the submit button if you want, by default, this library will set the following options / props mentioned below for all submit buttons:"),(0,a.yg)("h4",{id:"norender-option"},(0,a.yg)("inlineCode",{parentName:"h4"},"norender")," option"),(0,a.yg)("p",null,"You can set this property to ",(0,a.yg)("inlineCode",{parentName:"p"},"true")," to remove the submit button completely from the form. Nice option, if the form is just for viewing purposes."),(0,a.yg)("h4",{id:"submittext-option"},(0,a.yg)("inlineCode",{parentName:"h4"},"submitText")," option"),(0,a.yg)("p",null,'You can use this option to change the text of the submit button. Set to "Submit" by default.'),(0,a.yg)("h4",{id:"props-section"},(0,a.yg)("inlineCode",{parentName:"h4"},"props")," section"),(0,a.yg)("p",null,"You can pass any other prop to the submit button if you want, via this section."),(0,a.yg)("h5",{id:"disabled-prop"},(0,a.yg)("inlineCode",{parentName:"h5"},"disabled")," prop"),(0,a.yg)("p",null,"You can use this option to disable the submit button."),(0,a.yg)("h5",{id:"classname-prop"},(0,a.yg)("inlineCode",{parentName:"h5"},"className")," prop"),(0,a.yg)("p",null,"You can use this option to specify a class name for the submit button."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { UiSchema } from '@rjsf/utils';\n\nconst uiSchema: UiSchema = {\n  'ui:submitButtonOptions': {\n    props: {\n      disabled: false,\n      className: 'btn btn-info',\n    },\n    norender: false,\n    submitText: 'Submit',\n  },\n};\n")),(0,a.yg)("h2",{id:"duplicatekeysuffixseparator-option"},(0,a.yg)("inlineCode",{parentName:"h2"},"duplicateKeySuffixSeparator")," option"),(0,a.yg)("p",null,"When using ",(0,a.yg)("inlineCode",{parentName:"p"},"additionalProperties"),", key collision is prevented by appending a unique integer suffix to the duplicate key.\nFor example, when you add a key named ",(0,a.yg)("inlineCode",{parentName:"p"},"myKey")," to a form where ",(0,a.yg)("inlineCode",{parentName:"p"},"myKey")," is already defined, then your new key will become ",(0,a.yg)("inlineCode",{parentName:"p"},"myKey-1"),".\nYou can use ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:duplicateKeySuffixSeparator")," to override the default separator, ",(0,a.yg)("inlineCode",{parentName:"p"},'"-"')," with a string of your choice on a per-field basis."),(0,a.yg)("p",null,"You can also set this in the ",(0,a.yg)("inlineCode",{parentName:"p"},"ui:globalOptions")," to have the same separator used everywhere."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"import { UiSchema } from '@rjsf/utils';\n\nconst uiSchema = {\n  'ui:globalOptions': {\n    duplicateKeySuffixSeparator: '_',\n  },\n};\n")),(0,a.yg)("h2",{id:"using-uischema-with-oneof-anyof"},"Using uiSchema with oneOf, anyOf"),(0,a.yg)("h3",{id:"anyof"},"anyOf"),(0,a.yg)("p",null,"The uiSchema will work with elements inside an ",(0,a.yg)("inlineCode",{parentName:"p"},"anyOf")," as long as the uiSchema defines the ",(0,a.yg)("inlineCode",{parentName:"p"},"anyOf")," key at the same level as the ",(0,a.yg)("inlineCode",{parentName:"p"},"anyOf")," within the ",(0,a.yg)("inlineCode",{parentName:"p"},"schema"),".\nBecause the ",(0,a.yg)("inlineCode",{parentName:"p"},"anyOf")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"schema")," is an array, so must be the one in the ",(0,a.yg)("inlineCode",{parentName:"p"},"uiSchema"),".\nIf you want to override the titles of the first two elements within the ",(0,a.yg)("inlineCode",{parentName:"p"},"anyOf")," list you would do the following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\n\nconst schema: RJSFSchema = {\n  type: 'object',\n  anyOf: [\n    {\n      title: 'Strings',\n      type: 'string',\n    },\n    {\n      title: 'Numbers',\n      type: 'number',\n    },\n    {\n      title: 'Booleans',\n      type: 'boolean',\n    },\n  ],\n};\n\nconst uiSchema: UiSchema = {\n  anyOf: [\n    {\n      'ui:title': 'Custom String Title',\n    },\n    {\n      'ui:title': 'Custom Number Title',\n    },\n  ],\n};\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"NOTE: Because the third element in the ",(0,a.yg)("inlineCode",{parentName:"p"},"schema")," does not have an associated element in the ",(0,a.yg)("inlineCode",{parentName:"p"},"uiSchema"),", it will keep its original title.")),(0,a.yg)("h3",{id:"oneof"},"oneOf"),(0,a.yg)("p",null,"The uiSchema will work with elements inside an ",(0,a.yg)("inlineCode",{parentName:"p"},"oneOf")," as long as the uiSchema defines the ",(0,a.yg)("inlineCode",{parentName:"p"},"oneOf")," key at the same level as the ",(0,a.yg)("inlineCode",{parentName:"p"},"oneOf")," within the ",(0,a.yg)("inlineCode",{parentName:"p"},"schema"),".\nBecause the ",(0,a.yg)("inlineCode",{parentName:"p"},"oneOf")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"schema")," is an array, so must be the one in the ",(0,a.yg)("inlineCode",{parentName:"p"},"uiSchema"),".\nIf you want to override the titles of the first two elements within the ",(0,a.yg)("inlineCode",{parentName:"p"},"oneOf")," list you would do the following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\n\nconst schema: RJSFSchema = {\n  type: 'object',\n  oneOf: [\n    {\n      title: 'Strings',\n      type: 'string',\n    },\n    {\n      title: 'Numbers',\n      type: 'number',\n    },\n    {\n      title: 'Booleans',\n      type: 'boolean',\n    },\n  ],\n};\n\nconst uiSchema: UiSchema = {\n  oneOf: [\n    {\n      'ui:title': 'Custom String Title',\n    },\n    {\n      'ui:title': 'Custom Number Title',\n    },\n  ],\n};\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"NOTE: Because the third element in the ",(0,a.yg)("inlineCode",{parentName:"p"},"schema")," does not have an associated element in the ",(0,a.yg)("inlineCode",{parentName:"p"},"uiSchema"),", it will keep its original title.")),(0,a.yg)("h2",{id:"theme-options"},"Theme Options"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/react-jsonschema-form/docs/api-reference/themes/antd/uiSchema"},"AntD Customization")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/react-jsonschema-form/docs/api-reference/themes/chakra-ui/uiSchema"},"Chakra-UI Customization")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/react-jsonschema-form/docs/api-reference/themes/semantic-ui/uiSchema"},"Semantic-UI Customization"))))}c.isMDXComponent=!0}}]);