(this.webpackJsonptestapp=this.webpackJsonptestapp||[]).push([[0],{21:function(e,a,t){e.exports=t(34)},26:function(e,a,t){},27:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),c=t.n(l),o=(t(26),t(11)),m=t(6),i=(t(27),t(3)),u=t(1);function s(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement("h1",null,"Logistics Management"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(i.b,{to:"/signup"},r.a.createElement("button",{className:"HomeBtn"},"Sign Up")),r.a.createElement("br",null),r.a.createElement(i.b,{to:"/login"},r.a.createElement("button",{className:"HomeBtn"},"Log in")))}function g(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(""),u=Object(m.a)(o,2),s=u[0],g=u[1],d=Object(n.useState)("no"),E=Object(m.a)(d,2),p=E[0],b=E[1],h=0,f=0,N=0;return r.a.createElement("div",{className:"SignUp"},r.a.createElement("h2",{style:{textAlign:"center"}},"Sign up"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{style:{marginLeft:"40px"}},r.a.createElement("span",null,"NO.")," ",r.a.createElement("input",{className:"SignUpNumber",type:"number",onChange:function(e){c(e.target.value)}}),5!=l.length?r.a.createElement("p",{id:"numberSignup",style:{color:"red",fontSize:"12px"}},"the number must be with 5 digits."):r.a.createElement("p",{id:"numberSignup"}," "),r.a.createElement("span",null,"FullName")," ",r.a.createElement("input",{onChange:function(e){g(e.target.value)}}),r.a.createElement("br",null),function(e){for(var a=0;a<e.length;a++)e.charAt(a)>="0"&&e.charAt(a)<="9"?h++:" "==e.charAt(a)?f++:(e.charAt(a)>"z"||e.charAt(a)<"a"&&e.charAt(a)>"Z"||e.charAt(a)<"A")&&N++;return 0!=h||e.length<5||0!=N||" "==e.charAt(0)||" "==e.charAt(1)||" "==e.charAt(2)||" "==e.charAt(3)||0==f?r.a.createElement("p",{id:"nameSignup",style:{color:"red",fontSize:"12px"}},"the name must contain minimum 4 characters."):r.a.createElement("p",{id:"nameSignup"}," ")}(s),r.a.createElement("p",null,"Forklift truck"),r.a.createElement("input",{className:"SignRadio",type:"radio",name:"1",onClick:function(){b("yes")}}),r.a.createElement("input",{className:"SignRadio",type:"radio",defaultChecked:!0,name:"1",onClick:function(){b("no")}}),r.a.createElement("br",null),r.a.createElement("span",{className:"SignSpan"},"yes"),r.a.createElement("span",{className:"SignSpan"},"no"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(i.b,{to:"/"},r.a.createElement("button",{className:"PrimeBtn",style:{marginLeft:"40px"},onClick:function(){var a=0;if(!(0==h&&s.length>4&&0!=f&&5==l.length&&0==N&&" "!=s.charAt(0)&&" "!=s.charAt(1)&&" "!=s.charAt(2)&&" "!=s.charAt(3)))return alert("Error");e.worker.map((function(e){e.number==l&&a++})),0==a?e.addWorker(l,s,p,0,0):alert("Error")}},"Create"))))}var d=t(20);function E(e){var a=Object(n.useState)("login"),t=Object(m.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(""),u=Object(m.a)(o,2),s=u[0],g=u[1];return r.a.createElement("div",null,r.a.createElement("h1",null,"login"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,"NO.")," ",r.a.createElement("input",{style:{marginRight:"25px"},onChange:function(e){g(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,void("99999"==s&&(c("manager"),g(null)))),r.a.createElement(i.b,{to:"/".concat(l)},r.a.createElement("button",{className:"PrimeBtn",onClick:function(){var a=0,t=0;null==s||(e.worker.map((function(n,r){n.number==s&&(a++,t=r,e.Changeindex(t))})),0!=a?(e.LoginCounter(t),e.changeFlag(!0)):alert("worker ".concat(s," do not exist")))}},"Enter")))}function p(e){return r.a.createElement("div",{className:"Login"},r.a.createElement("h1",null,"Welcome ",e.worker[e.index].name),r.a.createElement("div",{style:{textAlign:"left",display:"inline"}},r.a.createElement("p",null,"Details:"),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"LoginDD"},"Full Name:"),r.a.createElement("h6",{className:"LoginD"},e.worker[e.index].name)),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"LoginDD"},"NO. :"),r.a.createElement("h6",{className:"LoginD"},e.worker[e.index].number)),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"LoginDD"},"Forklift truck license:"),r.a.createElement("h6",{style:{marginRight:"30px"},className:"LoginD"},e.worker[e.index].drive),r.a.createElement("div",{className:"col-9"})),r.a.createElement("h6",null,"List of products")),e.Products.map((function(a,t){if(0==a.inplace)return r.a.createElement("div",{className:"Products"},r.a.createElement("p",null,"NO.",a.number),r.a.createElement("br",null),r.a.createElement("p",null,"Name: ",a.box," Box"),r.a.createElement("br",null),r.a.createElement("p",null,"Need forklift truck: ",a.malgeza),r.a.createElement("button",{className:"PrimeBtn",style:{width:"90px",height:"25px",fontSize:"12px",marginLeft:"150px",marginBottom:"4px"},onClick:function(){!function(a){"no"==e.Products[a].malgeza||"yes"==e.Products[a].malgeza&&"yes"==e.worker[e.index].drive?(e.changePlace(a),e.ProductsMoved(e.index)):alert("Need Forklift Truck..")}(t)}},"Update"))})),r.a.createElement(i.b,{to:"/"},r.a.createElement("button",{className:"PrimeBtn",style:{width:"90px",height:"25px",fontSize:"12px"},onClick:function(){e.changeFlag2(!1)}},"Log Out")))}function b(e){return r.a.createElement("div",{className:"Login"},0==e.flag?r.a.createElement(E,Object(d.a)({LoginCounter:e.LoginCounter,changeFlag:e.changeFlag,worker:e.worker,addWorker:e.addWorker,index:e.index,Changeindex:e.Changeindex},"changeFlag",e.changeFlag)):r.a.createElement(p,{ProductsMoved:e.ProductsMoved,changePlace:e.changePlace,Products:e.Products,changeFlag2:e.changeFlag,index:e.index,worker:e.worker}))}function h(e){return r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:"col-12",style:{marginTop:"20px"}},"Manager"),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"TableHeader"},"NO."),r.a.createElement("td",{className:"TableHeader"},"Name"),r.a.createElement("td",{className:"TableHeader"},"NumLogin"),r.a.createElement("td",{className:"TableHeader"},"NumProductsMoved")),e.worker.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.number),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.login),r.a.createElement("td",null,e.movedProducts))}))),r.a.createElement("div",{className:"col-9"}),r.a.createElement(i.b,{className:"col-3",to:"/"},r.a.createElement("button",{className:"PrimeBtn",style:{width:"90px",height:"25px",fontSize:"12px",marginRight:"25px"}},"Log Out")))}t(33);var f=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([{number:"11122",box:"green",malgeza:"no",inplace:!1},{number:"22554",box:"green",malgeza:"no",inplace:!1},{number:"66698",box:"blue",malgeza:"yes",inplace:!1},{number:"78544",box:"red",malgeza:"no",inplace:!1},{number:"69875",box:"red",malgeza:"no",inplace:!1}]),d=Object(m.a)(c,2),E=d[0],p=d[1],f=Object(n.useState)(!1),N=Object(m.a)(f,2),x=N[0],v=N[1],k=Object(n.useState)(0),w=Object(m.a)(k,2),O=w[0],S=w[1],P=function(e,a,n,r,c){l([].concat(Object(o.a)(t),[{number:e,name:a,drive:n,login:r,movedProducts:c}]))},j=function(e){S(e)},y=function(e){v(e)},L=function(e){var a=Object(o.a)(E);a[e].inplace=!0,p(a)},A=function(e){var a=Object(o.a)(t);a[e].login=a[e].login+1,l(a)},C=function(e){var a=Object(o.a)(t);a[e].movedProducts=a[e].movedProducts+1,l(a)};return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:function(){return r.a.createElement(s,null)}}),r.a.createElement(u.a,{exact:!0,path:"/signup",component:function(){return r.a.createElement(g,{worker:t,addWorker:P})}}),r.a.createElement(u.a,{exact:!0,path:"/login",component:function(){return r.a.createElement(b,{ProductsMoved:C,LoginCounter:A,changePlace:L,Products:E,worker:t,index:O,Changeindex:j,changeFlag:y,flag:x})}}),r.a.createElement(u.a,{exact:!0,path:"/manager",component:function(){return r.a.createElement(h,{worker:t})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.1e485456.chunk.js.map