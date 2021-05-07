(this.webpackJsonpsmppclient=this.webpackJsonpsmppclient||[]).push([[0],{10:function(e,s,c){},15:function(e,s,c){"use strict";c.r(s);var t=c(1),a=c.n(t),l=c(4),i=c.n(l),o=(c(9),c(10),c(11),c(3),c(12),c.p+"static/media/MelroseLabsLogo.fb9b1930.svg"),n=c.p+"static/media/MelroseLabsLogoWhiteText.d5371e91.svg",r=c(0);var d=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("section",{className:"my-5",children:[Object(r.jsxs)("h1",{children:[Object(r.jsx)("a",{href:"https://melroselabs.com",children:Object(r.jsx)("img",{src:o,alt:"logo",width:"148"})}),"\xa0SMPP Client"]}),Object(r.jsxs)("p",{className:"lead",children:["SMPP v3.x and v5 via Web Sockets to the",Object(r.jsxs)("a",{href:"https://melroselabs.com/services/tyr-sms-gateway",className:"custom-atop",children:["\xa0Tyr SMS Gateway",Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16",children:[Object(r.jsx)("path",{fillRule:"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),Object(r.jsx)("path",{fillRule:"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"})]})]}),"\xa0and SMPP SMS Gateway platforms."]}),Object(r.jsx)("h2",{className:"h4",children:"Account"}),Object(r.jsx)("div",{className:"px-3 py-3 bg-light",children:Object(r.jsxs)("form",{autoComplete:"off",noValidate:!0,children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-md-3 col-6",children:Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{className:"form-label",children:"Host"}),Object(r.jsx)("input",{type:"text",className:"form-control",id:"inputHost",value:"eu-uk.mlsmpp.net",readOnly:!0}),Object(r.jsx)("div",{id:"hostHelp",className:"form-text",children:"IP or hostname of SMSC or SMS gateway"})]})}),Object(r.jsx)("div",{className:"col-md-2 col-6",children:Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{className:"form-label",children:"Port"}),Object(r.jsx)("input",{type:"number",className:"form-control",value:"2775",readOnly:!0})]})}),Object(r.jsx)("div",{className:"col-md-3 col-6",children:Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{className:"form-label",children:"System ID"}),Object(r.jsx)("input",{type:"text",required:!0,className:"form-control"}),Object(r.jsx)("div",{id:"systemIDHelp",className:"form-text",children:"SMPP account system ID"})]})}),Object(r.jsx)("div",{className:"col-md-2 col-6",children:Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{className:"form-label",children:"Password"}),Object(r.jsx)("input",{type:"password",required:!0,className:"form-control",id:"inputPassword"}),Object(r.jsx)("div",{id:"passwordHelp",className:"form-text",children:"SMPP account password"})]})}),Object(r.jsx)("div",{className:"col-md-2 col-6",children:Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{className:"form-label",children:"Version"}),Object(r.jsxs)("select",{className:"form-control",id:"inputVersion",name:"inputVersion",children:[Object(r.jsx)("option",{value:"0",children:"Default (0x00)"}),Object(r.jsx)("option",{value:"51",children:"v3.3 (0x33)"}),Object(r.jsx)("option",{value:"52",defaultValue:!0,children:"v3.4 (0x34)"}),Object(r.jsx)("option",{value:"80",children:"v5 (0x50)"})]}),Object(r.jsx)("div",{id:"versionHelp",className:"form-text",children:"SMPP version"})]})})]}),Object(r.jsx)("button",{id:"connect",type:"button",className:"btn btn-primary",children:"Connect"}),"\xa0",Object(r.jsx)("button",{id:"disconnect",type:"button",className:"btn btn-primary",disabled:!0,children:"Disconnect"}),Object(r.jsxs)("div",{className:"float-right",children:[Object(r.jsx)("h5",{className:"mb-0 text-right",children:"Status"}),Object(r.jsx)("span",{id:"statusbound",className:"custom-text",children:"Unbound"})]})]})}),Object(r.jsx)("h2",{className:"h4 mt-3",children:"Commands"}),Object(r.jsxs)("div",{className:"mt-3 px-3 py-3 bg-light",children:[Object(r.jsxs)("div",{className:"pb-3",children:[Object(r.jsx)("button",{className:"custom-button btn btn-success btn-sm",type:"button","data-toggle":"collapse","data-target":"#collapseSubmitSM","aria-expanded":"false","aria-controls":"collapseSubmitSM",children:"SubmitSM"}),"\xa0",Object(r.jsx)("button",{className:"custom-button btn btn-success btn-sm",type:"button","data-toggle":"collapse","data-target":"#collapseDataSM","aria-expanded":"false","aria-controls":"collapseDataSM",disabled:!0,children:"DataSM"}),"\xa0",Object(r.jsx)("button",{className:"custom-button btn btn-success btn-sm",type:"button","data-toggle":"collapse","data-target":"#collapseCancelSM","aria-expanded":"false","aria-controls":"collapseCancelSM",disabled:!0,children:"CancelSM"}),"\xa0",Object(r.jsx)("button",{className:"custom-button btn btn-success btn-sm",type:"button","data-toggle":"collapse","data-target":"#collapseQuerySM","aria-expanded":"false","aria-controls":"collapseQuerySM",disabled:!0,children:"QuerySM"}),"\xa0",Object(r.jsx)("button",{className:"custom-button btn btn-success btn-sm",type:"button","data-toggle":"collapse","data-target":"#collapseEnquireLink","aria-expanded":"false","aria-controls":"collapseEnquireLink",children:"EnriqueSM"})]}),Object(r.jsx)("div",{className:"collapse",id:"collapseSubmitSM",children:Object(r.jsxs)("div",{className:"mt-1 card card-body",children:[Object(r.jsxs)("div",{className:"row pb-3",children:[Object(r.jsxs)("div",{className:"col-4 mb-0",children:[Object(r.jsx)("label",{className:"mb-0",children:Object(r.jsx)("b",{className:"custom-b",children:"Source Address"})}),Object(r.jsxs)("div",{className:"input-group mb-1",id:"sourceGroup",children:[Object(r.jsx)("div",{className:"col-auto px-0 py-0 my-0",children:Object(r.jsx)("div",{className:"form-group mb-0",children:Object(r.jsxs)("select",{className:"custom-select form-control form-control-sm",id:"sourceTON",name:"sourceTON",children:[Object(r.jsx)("option",{value:"0",children:"Auto"}),Object(r.jsx)("option",{value:"1",defaultValue:!0,children:"Intl"}),Object(r.jsx)("option",{value:"2",children:"Nat"}),Object(r.jsx)("option",{value:"5",children:"Alpha"})]})})}),Object(r.jsx)("div",{className:"col-auto px-0 py-0 my-0",children:Object(r.jsx)("div",{className:"form-group mb-0",children:Object(r.jsxs)("select",{className:"custom-select form-control form-control-sm",id:"sourceNPI",name:"sourceNPI",children:[Object(r.jsx)("option",{value:"0",children:"Auto"}),Object(r.jsx)("option",{value:"1",defaultValue:!0,children:"E164"})]})})}),Object(r.jsx)("div",{className:"col-auto px-0 py-0 my-0",children:Object(r.jsxs)("div",{className:"form-group mb-0",children:[Object(r.jsx)("input",{type:"text",className:"form-control form-control-sm",id:"sourceAddress",name:"sourceAddress",required:!0,placeholder:"source",maxLength:"20"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please provide an address"})]})})]})]}),Object(r.jsxs)("div",{className:"col-4 mb-0",children:[Object(r.jsx)("label",{className:"mb-0",children:Object(r.jsx)("b",{className:"custom-b",children:"Destination Address"})}),Object(r.jsxs)("div",{className:"input-group mb-1",id:"destinationGroup",children:[Object(r.jsx)("div",{className:"col-auto px-0 py-0 my-0",children:Object(r.jsx)("div",{className:"form-group mb-0",children:Object(r.jsxs)("select",{className:"custom-select form-control form-control-sm",id:"destinationTON",name:"destinationTON",children:[Object(r.jsx)("option",{value:"0",children:"Auto"}),Object(r.jsx)("option",{value:"1",defaultValue:!0,children:"Intl"}),Object(r.jsx)("option",{value:"2",children:"Nat"}),Object(r.jsx)("option",{value:"5",children:"Alpha"})]})})}),Object(r.jsx)("div",{className:"col-auto px-0 py-0 my-0",children:Object(r.jsx)("div",{className:"form-group mb-0",children:Object(r.jsxs)("select",{className:"custom-select form-control form-control-sm",id:"destinationNPI",name:"destinationNPI",children:[Object(r.jsx)("option",{value:"0",children:"Auto"}),Object(r.jsx)("option",{value:"1",defaultValue:!0,children:"E164"})]})})}),Object(r.jsx)("div",{className:"col-auto px-0 py-0 my-0",children:Object(r.jsxs)("div",{className:"form-group mb-0",children:[Object(r.jsx)("input",{type:"text",className:"form-control form-control-sm",id:"destinationAddress",name:"destinationAddress",required:!0,placeholder:"destination",maxLength:"20"}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please provide an address"})]})})]})]}),Object(r.jsxs)("div",{className:"col-4 mb-0",children:[Object(r.jsx)("label",{className:"mb-0",children:Object(r.jsx)("b",{className:"custom-b",children:"Registered delivery"})}),Object(r.jsxs)("select",{className:"custom-select form-control form-control-sm",id:"registeredDelivery",name:"registeredDelivery",children:[Object(r.jsx)("option",{value:"0",defaultValue:!0,children:"0: No MC Delivery Receipt"}),Object(r.jsx)("option",{value:"1",children:"1: MC Delivery Receipt"}),Object(r.jsx)("option",{value:"2",children:"2: MC Delivery Receipt on fail"}),Object(r.jsx)("option",{value:"3",children:"3: MC Delivery Receipt on success"}),Object(r.jsx)("option",{value:"16",children:"16: Intermediate notification"}),Object(r.jsx)("option",{value:"17",children:"17: Intermediate + MC Delivery Receipt"}),Object(r.jsx)("option",{value:"18",children:"18: Intermediate + MC Delivery Receipt on fail"}),Object(r.jsx)("option",{value:"19",children:"19: Intermediate + MC Delivery Receipt on success"})]})]})]}),Object(r.jsxs)("div",{className:"row pb-3",children:[Object(r.jsxs)("div",{className:"col-3 mb-0",children:[Object(r.jsx)("label",{className:"mb-0",children:Object(r.jsx)("b",{className:"custom-b",children:"ESM Class"})}),Object(r.jsx)("select",{className:"custom-select form-control form-control-sm",id:"esmClass",readOnly:!0,disabled:!0,children:Object(r.jsx)("option",{value:"0",defaultValue:!0,children:"0: Default mode"})})]}),Object(r.jsxs)("div",{className:"col-3 mb-0",children:[Object(r.jsx)("label",{className:"mb-0",children:Object(r.jsx)("b",{className:"custom-b",children:"Protocol ID"})}),Object(r.jsx)("input",{type:"number",className:"form-control form-control-sm",id:"protocolID",name:"protocolID",required:!0,value:"0",min:"0",max:"255",readOnly:!0,disabled:!0}),Object(r.jsx)("div",{className:"invalid-feedback",children:"Please provide an address"})]}),Object(r.jsxs)("div",{className:"col-3 mb-0",children:[Object(r.jsx)("label",{className:"mb-0",children:Object(r.jsx)("b",{className:"custom-b",children:"Priority flag"})}),Object(r.jsx)("select",{className:"custom-select form-control form-control-sm",id:"priorityFlag",readOnly:!0,disabled:!0,children:Object(r.jsx)("option",{value:"0",defaultValue:!0,children:"0: Non-priority"})})]}),Object(r.jsxs)("div",{className:"col-3 mb-0",children:[Object(r.jsx)("label",{className:"mb-0",children:Object(r.jsx)("b",{className:"custom-b",children:"Data coding"})}),Object(r.jsx)("select",{className:"custom-select form-control form-control-sm",id:"dataCoding",name:"dataCoding",readOnly:!0,disabled:!0,children:Object(r.jsx)("option",{value:"0",defaultValue:!0,children:"0: MC Specific (default)"})})]})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{className:"mb-1",children:Object(r.jsx)("b",{className:"custom-b",children:"Message"})}),Object(r.jsx)("textarea",{className:"form-control from-control-sm",id:"smppMessage",name:"smppMessage",rows:"2"})]}),Object(r.jsx)("button",{id:"submitsm",type:"button",className:"btn btn-primary",disabled:!0,children:"Submit"})]})}),Object(r.jsx)("div",{className:"collapse",id:"collapseEnquireLink",children:Object(r.jsx)("div",{className:"mt-1 card card-body",children:Object(r.jsx)("button",{id:"enquirelink",type:"button",className:"btn btn-primary",children:"Enquire Link"})})})]}),Object(r.jsx)("h2",{className:"h4 mt-3",children:"Log"}),Object(r.jsx)("div",{className:"row mb-1",children:Object(r.jsxs)("div",{className:"col-12",children:[Object(r.jsx)("div",{className:"custom-log bg-light px-3 pt-1 pb-0 mt-2 mb-1",children:Object(r.jsxs)("div",{id:"message-area",className:"custom-message-area",children:[Object(r.jsx)("span",{className:"badge badge-dark",children:"00:54:30"}),"\xa0\xa0Disconnected",Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"row border-bottom",children:[Object(r.jsxs)("div",{className:"col-2",children:[Object(r.jsx)("span",{className:"badge badge-secondary",children:"00:54:10"}),"\xa0\xa0",Object(r.jsx)("span",{className:"badge badge-info text-dark",children:"0001"}),"\xa0"]}),Object(r.jsxs)("div",{className:"col-10 pb-1",children:[Object(r.jsx)("span",{className:"custom-badge badge bg-primary",children:"bind_transceiver_resp"}),"\xa0",Object(r.jsx)("span",{className:"badge badge-danger",children:"ERROR: RBINDFAIL (0x00d)"}),"\xa0\xa0"]})]}),Object(r.jsxs)("div",{className:"row border-bottom",children:[Object(r.jsxs)("div",{className:"col-2",children:[Object(r.jsx)("span",{className:"badge badge-secondary",children:"00:54:09"}),"\xa0\xa0",Object(r.jsx)("span",{className:"badge badge-info text-dark",children:"0001"}),"\xa0"]}),Object(r.jsxs)("div",{className:"col-10 pb-1",children:[Object(r.jsx)("span",{className:"custom-badge badge bg-primary",children:"bind_transceiver"}),"\xa0 system ID:",Object(r.jsx)("code",{}),";system type:",Object(r.jsx)("code",{}),";system range:",Object(r.jsx)("code",{}),";version:",Object(r.jsx)("code",{children:"0x34"}),"\xa0\xa0"]})]}),Object(r.jsx)("span",{className:"badge badge-secondary",children:"00:54:09"}),"\xa0\xa0 Connected",Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"badge badge-dark",children:"00:54:08"}),"\xa0\xa0 Connecting"]})}),Object(r.jsxs)("div",{className:"text-end",children:[Object(r.jsx)("button",{id:"logcompact",type:"button",className:"btn btn-secondary btn-sm",children:"Compact"}),"\xa0",Object(r.jsx)("button",{id:"logexpand",type:"button",className:"btn btn-secondary btn-sm",children:"Expand"}),"\xa0",Object(r.jsx)("button",{id:"logclear",type:"button",className:"btn btn-secondary btn-sm",children:"Clear"})]})]})})]})}),Object(r.jsx)("footer",{id:"footer",className:"footer",children:Object(r.jsx)("div",{className:"footer-top",children:Object(r.jsx)("div",{className:"container container-lg",children:Object(r.jsxs)("div",{className:"row cols-xs-space cols-sm-space cols-md-space",children:[Object(r.jsxs)("div",{className:"col-lg-3 col-md-6 col-6",children:[Object(r.jsx)("h4",{className:"heading heading-xs strong-600 text-uppercase mb-3",children:"SMPP Related Services"}),Object(r.jsxs)("ul",{className:"footer-links mllist",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"custom-a",href:"https://melroselabs.com/services/smsc-simulator/",children:"SMSC Simulator"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"custom-a",href:"https://melroselabs.com/services/smpp-sms-gateway/",children:"SMPP SMS Gateway"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"custom-a",href:"https://melroselabs.com/services/tyr-sms-gateway/",children:"Tyr SMS Gateway"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"custom-a",href:"https://melroselabs.com/services/smpp-testing/",children:"SMPP SMS Gateway"})})]})]}),Object(r.jsxs)("div",{className:"col-lg-2 col-md-6 col-6",children:[Object(r.jsx)("h4",{className:"heading heading-xs strong-600 text-uppercase mb-3",children:"Company"}),Object(r.jsxs)("ul",{className:"footer-links mllist",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"custom-a",href:"https://melroselabs.com/developers/",children:"Developers"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"custom-a",href:"https://melroselabs.com/support/",children:"Support"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"custom-a",href:"https://melroselabs.com/contact/",children:"Contact"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"custom-a",href:"https://melroselabs.com/about/",children:"About"})})]})]}),Object(r.jsxs)("div",{className:"col-lg-2 col-md-6 col-6",children:[Object(r.jsx)("div",{className:"copyright",children:Object(r.jsxs)("p",{className:"pb-0 mb-0",children:["\xa9 2021 Melrose Labs Ltd.",Object(r.jsx)("br",{}),"Todos los derechos reservados."]})}),Object(r.jsx)("br",{}),Object(r.jsxs)("ul",{className:"footer-links",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"custom-a",href:"https://melroselabs.com/privacypolicy.php",children:"Privacy policy"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"custom-a",href:"https://melroselabs.com/legal.php",children:"Legal"})}),Object(r.jsx)("li",{children:"."})]})]}),Object(r.jsx)("div",{className:"col-1",children:"\xa0"}),Object(r.jsxs)("div",{className:"col-lg-4 col-md-6 col-12",children:[Object(r.jsx)("a",{href:"https://melroselabs.com",children:Object(r.jsx)("img",{src:n,alt:"logo2",className:"pb-2",width:"200"})}),Object(r.jsx)("p",{className:"heading-4",children:"Invenci\xf3n, desarrollo y explotacion de servicios de comunicaci\xf3n."}),Object(r.jsx)("p",{children:"Servicios innovadores de comunicaci\xf3n en la nube que hacen que las empresas tengan m\xe1s \xe9xito"})]})]})})})})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(s){var c=s.getCLS,t=s.getFID,a=s.getFCP,l=s.getLCP,i=s.getTTFB;c(e),t(e),a(e),l(e),i(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(d,{})}),document.getElementById("root")),b()},9:function(e,s,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.b20ff9cb.chunk.js.map