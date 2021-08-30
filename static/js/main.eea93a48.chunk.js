(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var a=c(1),o=c.n(a),s=c(15),l=c.n(s),n=(c(22),c(7)),i=(c(23),c(0));function r(){var e=Object(a.useState)({backgroundColor:"black",color:"white",border:" 2px solid pink"}),t=Object(n.a)(e,2),c=t[0],o=t[1],s=Object(a.useState)("Enable Light Mode"),l=Object(n.a)(s,2),r=l[0],d=l[1];return Object(i.jsxs)("div",{className:"container",style:c,children:[Object(i.jsx)("h1",{className:"container my-3",children:"About Us"}),Object(i.jsxs)("div",{class:"accordion accordion-flush",id:"accordionFlushExample",children:[Object(i.jsxs)("div",{class:"accordion-item",children:[Object(i.jsx)("h2",{class:"accordion-header",id:"flush-headingOne",children:Object(i.jsx)("button",{class:"accordion-button collapsed",type:"button",style:c,"data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"flush-collapseOne",class:"accordion-collapse collapse","aria-labelledby":"flush-headingOne","data-bs-parent":"#accordionFlushExample",children:Object(i.jsxs)("div",{class:"accordion-body",style:c,children:["Placeholder content for this accordion, which is intended to demonstrate the ",Object(i.jsx)("code",{children:".accordion-flush"})," class. This is the first item's accordion body."]})})]}),Object(i.jsxs)("div",{class:"accordion-item",children:[Object(i.jsx)("h2",{class:"accordion-header",id:"flush-headingTwo",children:Object(i.jsx)("button",{class:"accordion-button collapsed",type:"button",style:c,"data-bs-toggle":"collapse","data-bs-target":"#flush-collapseTwo","aria-expanded":"false","aria-controls":"flush-collapseTwo",children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"flush-collapseTwo",class:"accordion-collapse collapse","aria-labelledby":"flush-headingTwo","data-bs-parent":"#accordionFlushExample",children:Object(i.jsxs)("div",{class:"accordion-body",style:c,children:["Placeholder content for this accordion, which is intended to demonstrate the ",Object(i.jsx)("code",{children:".accordion-flush"})," class. This is the second item's accordion body. Let's imagine this being filled with some actual content."]})})]}),Object(i.jsxs)("div",{class:"accordion-item",children:[Object(i.jsx)("h2",{class:"accordion-header",id:"flush-headingThree",children:Object(i.jsx)("button",{class:"accordion-button collapsed",type:"button",style:c,"data-bs-toggle":"collapse","data-bs-target":"#flush-collapseThree","aria-expanded":"false","aria-controls":"flush-collapseThree",children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"flush-collapseThree",class:"accordion-collapse collapse","aria-labelledby":"flush-headingThree","data-bs-parent":"#accordionFlushExample",children:Object(i.jsxs)("div",{class:"accordion-body",style:c,children:["Placeholder content for this accordion, which is intended to demonstrate the ",Object(i.jsx)("code",{children:".accordion-flush"})," class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application."]})})]})]}),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("button",{type:"button",onClick:function(){"white"===c.color?(o({color:"black",backgroundColor:"white"}),d("Enable Dark Mode")):(o({color:"white",backgroundColor:"black"}),d("Enable Light Mode"))},className:"btn btn-dark",children:r})})]})}var d=c(9);function b(e){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(d.b,{className:"navbar-brand",to:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(d.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(i.jsxs)("form",{className:"d-flex",children:[Object(i.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(i.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}),Object(i.jsxs)("div",{class:"form-check form-switch mx-3  text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.toogleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark/Light Mode "})]})]})]})})})}function h(e){var t=Object(a.useState)(""),c=Object(n.a)(t,2),o=c[0],s=c[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container ",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsxs)("label",{htmlFor:"myBox",className:"form-label",children:[" ",Object(i.jsx)("h2",{children:e.heading})," "]}),Object(i.jsx)("textarea",{className:"form-control",value:o,onChange:function(e){console.log("Onchange button clicked"),s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"white":"grey",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})]}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("Upper Case button clicked"+o);var e=o.toUpperCase();s(e)},children:"Convert to Uppercase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("Upper Case button clicked"+o);var e=o.toLowerCase();s(e)},children:"Convert to Lowercase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){s("Enter Text here")},children:"Clear Text"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value),console.log("handlecopyclick execute")},children:"Copy Text"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("Inside extra space");var e=o.split(/[ ]+/);s(e.join(" "))},children:"Remove Extra Spaces"})]}),Object(i.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(i.jsx)("h2",{children:"Your text summary"}),Object(i.jsxs)("p",{children:[o.split(" ").length," words and ",o.length," character"]}),Object(i.jsxs)("p",{children:[.008*o.split(" ").length," minutes reads"]}),Object(i.jsx)("h3",{children:"Preview"}),Object(i.jsx)("p",{children:o.length>0?o:"Enter the text to preview"})]})]})}var j=c(2);var u=function(){var e=Object(a.useState)("light"),t=Object(n.a)(e,2),c=t[0],o=t[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(d.a,{children:[Object(i.jsx)(b,{title:"TextUtils",aboutText:"About Us",mode:c,toogleMode:function(){"light"===c?(o("dark"),document.body.style.backgroundColor="#042743 ",document.title="TextUtils - Dark Mode",setInterval((function(){document.title="TextUtils is amazing"}),2e3),setInterval((function(){document.title="Install TextUtils"}),1500)):(o("light"),document.body.style.backgroundColor="white",document.title="TextUtils - Light Mode")}}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{exacat:!0,path:"/about",children:Object(i.jsx)(r,{})}),Object(i.jsx)(j.a,{exact:!0,path:"/",children:Object(i.jsx)(h,{heading:"Enter the Text to Analyse",mode:c})})]})})]})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),a(e),o(e),s(e),l(e)}))};l.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),m()}},[[30,1,2]]]);
//# sourceMappingURL=main.eea93a48.chunk.js.map