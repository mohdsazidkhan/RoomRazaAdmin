(this["webpackJsonpadmin-roomraza-frontend"]=this["webpackJsonpadmin-roomraza-frontend"]||[]).push([[5],{300:function(e,t,n){"use strict";n.d(t,"a",(function(){return B})),n.d(t,"b",(function(){return S}));var a=n(6),r=n(0),c=n(1),o="OPEN_MODAL",s="CLOSE_MODAL",i="OPEN_ADVANCED_BOX",u="CLOSE_ADVANCED_BOX",l="OPEN_EDIT_BOX",p="CLOSE_EDIT_BOX",d="OPEN_PANEL",j="CLOSE_PANEL",b="COLLAPSE_PANEL",f="OPEN_BOX",O="CLOSE_BOX",x="COLLAPSE_BOX",h="OPEN_READ_BOX",m="CLOSE_READ_BOX",y="COLLAPSE_READ_BOX",v={isModalOpen:!1,isPanelCollapsed:!1,isBoxCollapsed:!1,isReadBoxOpen:!0,isAdvancedBoxOpen:!1,isEditBoxOpen:!1};function g(e,t){switch(t.type){case o:return Object(c.a)(Object(c.a)({},e),{},{isModalOpen:!0});case s:return Object(c.a)(Object(c.a)({},e),{},{isModalOpen:!1});case d:return Object(c.a)(Object(c.a)({},e),{},{isPanelCollapsed:!1});case j:return Object(c.a)(Object(c.a)({},e),{},{isPanelCollapsed:!0});case b:return Object(c.a)(Object(c.a)({},e),{},{isPanelCollapsed:!e.isPanelCollapsed});case f:return Object(c.a)(Object(c.a)({},e),{},{isBoxCollapsed:!0});case O:return Object(c.a)(Object(c.a)({},e),{},{isBoxCollapsed:!1});case x:return Object(c.a)(Object(c.a)({},e),{},{isBoxCollapsed:!e.isBoxCollapsed});case h:return Object(c.a)(Object(c.a)({},e),{},{isAdvancedBoxOpen:!1,isEditBoxOpen:!1,isReadBoxOpen:!0});case m:return Object(c.a)(Object(c.a)({},e),{},{isReadBoxOpen:!1});case i:return Object(c.a)(Object(c.a)({},e),{},{isReadBoxOpen:!1,isEditBoxOpen:!1,isAdvancedBoxOpen:!0});case u:return Object(c.a)(Object(c.a)({},e),{},{isAdvancedBoxOpen:!1});case l:return Object(c.a)(Object(c.a)({},e),{},{isReadBoxOpen:!1,isAdvancedBoxOpen:!1,isEditBoxOpen:!0});case p:return Object(c.a)(Object(c.a)({},e),{},{isEditBoxOpen:!1});case y:return Object(c.a)(Object(c.a)({},e),{},{isReadBoxOpen:!e.isReadBoxOpen});default:throw new Error("Unhandled action type: ".concat(t.type))}}var C=function(e){return{modal:{open:function(){e({type:o})},close:function(){e({type:s})}},advancedBox:{open:function(){e({type:i})},close:function(){e({type:u})}},editBox:{open:function(){e({type:l})},close:function(){e({type:p})}},panel:{open:function(){e({type:d})},close:function(){e({type:j})},collapse:function(){e({type:b})}},collapsedBox:{open:function(){e({type:f})},close:function(){e({type:O})},collapse:function(){e({type:x})}},readBox:{open:function(){e({type:h}),console.log("readBox open")},close:function(){e({type:m}),console.log("readBox close")},collapse:function(){e({type:y})}}}},w=function(e){return{isModalOpen:function(){return e.isModalOpen},isPanelOpen:function(){return e.isPanelOpen},isBoxOpen:function(){return e.isBoxOpen}}},E=n(5),k=Object(r.createContext)();function B(e){var t=e.children,n=Object(r.useReducer)(g,v),c=Object(a.a)(n,2),o=c[0],s=c[1],i=Object(r.useMemo)((function(){return[o,s]}),[o]);return Object(E.jsx)(k.Provider,{value:i,children:t})}function S(){var e=Object(r.useContext)(k);if(void 0===e)throw new Error("useCrudContext must be used within a CrudContextProvider");var t=Object(a.a)(e,2),n=t[0],c=t[1];return{state:n,crudContextAction:C(c),crudContextSelector:w(n)}}},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(1),r=n(36),c=n(21),o=n.n(c),s=n(54),i=n(308),u={resetState:function(){return function(){var e=Object(r.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:s.g});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},resetAction:function(e){return function(){var t=Object(r.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:s.f,keyState:e,payload:null});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},currentItem:function(e){return function(){var t=Object(r.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:s.b,payload:Object(a.a)({},e)});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},currentAction:function(e,t){return function(){var n=Object(r.a)(o.a.mark((function n(r){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r({type:s.a,keyState:e,payload:Object(a.a)({},t)});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},list:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(){var n=Object(r.a)(o.a.mark((function n(a){var r,c;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:s.d,keyState:"list",payload:null}),n.next=3,i.a.list(e,{page:t});case 3:!0===(r=n.sent).success?(c={items:r.result,pagination:{current:parseInt(r.pagination.page,10),pageSize:10,total:parseInt(r.pagination.count,10)}},a({type:s.e,keyState:"list",payload:c})):a({type:s.c,keyState:"list",payload:null});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},create:function(e,t){return function(){var n=Object(r.a)(o.a.mark((function n(a){var r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:s.d,keyState:"create",payload:null}),console.log("jsonData action redux",t),n.next=4,i.a.create(e,t);case 4:!0===(r=n.sent).success?(a({type:s.e,keyState:"create",payload:r.result}),a({type:s.b,payload:r.result})):a({type:s.c,keyState:"create",payload:null});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},read:function(e,t){return function(){var n=Object(r.a)(o.a.mark((function n(a){var r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:s.d,keyState:"read",payload:null}),n.next=3,i.a.read(e,t);case 3:!0===(r=n.sent).success?(a({type:s.b,payload:r.result}),a({type:s.e,keyState:"read",payload:r.result})):a({type:s.c,keyState:"read",payload:null});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},update:function(e,t,n){return function(){var a=Object(r.a)(o.a.mark((function a(r){var c;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:s.d,keyState:"update",payload:null}),a.next=3,i.a.update(e,t,n);case 3:!0===(c=a.sent).success?(r({type:s.e,keyState:"update",payload:c.result}),r({type:s.b,payload:c.result})):r({type:s.c,keyState:"update",payload:null});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},delete:function(e,t){return function(){var n=Object(r.a)(o.a.mark((function n(a){var r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:s.d,keyState:"delete",payload:null}),n.next=3,i.a.delete(e,t);case 3:!0===(r=n.sent).success?a({type:s.e,keyState:"delete",payload:r.result}):a({type:s.c,keyState:"delete",payload:null});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},search:function(e,t,n){return function(){var a=Object(r.a)(o.a.mark((function a(r){var c;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:s.d,keyState:"search",payload:null}),t.cancel(),t=i.a.source(),a.next=5,i.a.search(e,t,n);case 5:!0===(c=a.sent).success?r({type:s.e,keyState:"search",payload:c.result}):r({type:s.c,keyState:"search",payload:null});case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}}},302:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"f",(function(){return p}));var a=n(99),r=function(e){return e.crud},c=Object(a.a)([r],(function(e){return e.current})),o=Object(a.a)([r],(function(e){return e.list})),s=function(e){return Object(a.a)(o,(function(t){return t.result.items.find((function(t){return t._id===e}))}))},i=Object(a.a)([r],(function(e){return e.create})),u=Object(a.a)([r],(function(e){return e.update})),l=(Object(a.a)([r],(function(e){return e.read})),Object(a.a)([r],(function(e){return e.delete}))),p=Object(a.a)([r],(function(e){return e.search}))},308:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(36),r=n(1),c=n(4),o=n(21),s=n.n(o),i=n(132),u=n.n(i),l=n(84),p=n(59),d=n(133),j=n(134),b=Object(c.a)({},l.a,p.c.get()),f=u.a.create({baseURL:l.b,timeout:3e4,headers:Object(r.a)({},b)}),O={create:function(){var e=Object(a.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.defaults.headers=Object(r.a)({},b),console.log("jsonData",n),e.prev=2,e.next=5,f.post(t+"/create",n);case 5:return a=e.sent,e.abrupt("return",Object(j.a)(a));case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",Object(d.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}(),read:function(){var e=Object(a.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.defaults.headers=Object(r.a)({},b),e.prev=1,e.next=4,f.get(t+"/read/"+n);case 4:return a=e.sent,e.abrupt("return",Object(j.a)(a));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(d.a)(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),update:function(){var e=Object(a.a)(s.a.mark((function e(t,n,a){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.defaults.headers=Object(r.a)({},b),e.prev=1,e.next=4,f.patch(t+"/update/"+n,a);case 4:return c=e.sent,e.abrupt("return",Object(j.a)(c));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(d.a)(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,a){return e.apply(this,arguments)}}(),delete:function(){var e=Object(a.a)(s.a.mark((function e(t,n){var a,c=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.length>2&&void 0!==c[2]?c[2]:{},f.defaults.headers=Object(r.a)({},b),e.prev=2,e.next=5,f.delete(t+"/delete/"+n);case 5:return a=e.sent,e.abrupt("return",Object(j.a)(a));case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",Object(d.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}(),filter:function(){var e=Object(a.a)(s.a.mark((function e(t){var n,a,c,o,i,u=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},f.defaults.headers=Object(r.a)({},b),e.prev=2,a=n.filter?"filter="+n.filter:"",c=n.equal?"&equal="+n.equal:"",o="?".concat(a).concat(c),e.next=8,f.get(t+"/filter"+o);case 8:return i=e.sent,e.abrupt("return",Object(j.a)(i));case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",Object(d.a)(e.t0));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),search:function(){var e=Object(a.a)(s.a.mark((function e(t,n){var a,r,o,i,u,b=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b.length>2&&void 0!==b[2]?b[2]:{},f.defaults.headers=Object(c.a)({},l.a,p.c.get()),e.prev=2,r="",a!=={}&&(o=a.fields?"fields="+a.fields:"",i=a.question?"&q="+a.question:"",r="?".concat(o).concat(i)),e.next=7,f.get(t+"/search"+r,{cancelToken:n.token});case 7:return u=e.sent,e.abrupt("return",Object(j.a)(u));case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",Object(d.a)(e.t0));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,n){return e.apply(this,arguments)}}(),list:function(){var e=Object(a.a)(s.a.mark((function e(t){var n,a,r,o,i,u=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},f.defaults.headers=Object(c.a)({},l.a,p.c.get()),console.log(p.c.get()),e.prev=3,a="",n!=={}&&(r=n.page?"page="+n.page:"",o=n.items?"&items="+n.items:"",a=""!==a?"?".concat(r).concat(o):""),e.next=8,f.get(t+"/list"+a);case 8:return i=e.sent,e.abrupt("return",Object(j.a)(i));case 12:return e.prev=12,e.t0=e.catch(3),e.abrupt("return",Object(d.a)(e.t0));case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),users:function(){var e=Object(a.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.defaults.headers=Object(c.a)({},l.a,p.c.get()),console.log(p.c.get()),e.prev=2,e.next=5,f.get(t+"/totalCount");case 5:return n=e.sent,e.abrupt("return",Object(j.a)(n));case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",Object(d.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),post:function(){var e=Object(a.a)(s.a.mark((function e(t,n){var a,c=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.length>2&&void 0!==c[2]?c[2]:{},f.defaults.headers=Object(r.a)({},b),e.prev=2,e.next=5,f.post(t,n);case 5:return a=e.sent,e.abrupt("return",Object(j.a)(a));case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",Object(d.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}(),get:function(){var e=Object(a.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.defaults.headers=Object(r.a)({},b),e.prev=1,e.next=4,f.get(t);case 4:return n=e.sent,e.abrupt("return",Object(j.a)(n));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(d.a)(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),patch:function(){var e=Object(a.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.defaults.headers=Object(r.a)({},b),e.prev=1,e.next=4,f.patch(t,n);case 4:return a=e.sent,e.abrupt("return",Object(j.a)(a));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(d.a)(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),source:function(){var e=u.a.CancelToken.source();return e}},x=O},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(0);var a=n(287),r=n(87),c=n(5);function o(e){var t=e.isLoading,n=e.children,o=Object(c.jsx)(r.a,{style:{fontSize:24},spin:!0});return Object(c.jsx)(a.a,{indicator:o,spinning:t,children:n})}},312:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(331);function a(e,t,n){return void 0===n&&(n="|"),t.split(n).map((function(t){return function(e,t){return t.split(".").reduce((function(e,t){return void 0===e||null===e?e:e[t]}),e)}(e,t)})).join(" ")}Object.byString=function(e,t){for(var n=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),a=0,r=n.length;a<r;++a){var c=n[a];if(null===e)return;if(!(c in e))return;e=e[c]}return e}},313:function(e,t,n){"use strict";function a(){var e=String.fromCharCode(Math.floor(25*Math.random()+65));do{var t=Math.floor(25*Math.random()+65);e+=String.fromCharCode(t),e+=Math.floor(99*Math.random())}while(e.length<8);return e}n.d(t,"a",(function(){return a}))},315:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return v}));var a=n(0),r=n(300),c=n(5);var o=function(e){var t=e.children;return Object(c.jsx)(r.a,{children:t})},s=n(6),i=n(288),u=n(557),l=n(541),p=n(542),d=function(e){var t=e.onChange,n=e.title;return Object(c.jsx)("div",{className:"collapseBoxHeader",onClick:t,children:n})},j=function(e){var t=e.isOpen,n=e.children,a=t?{display:"block",opacity:1}:{display:"none",opacity:0};return Object(c.jsx)("div",{className:"TopCollapseBox",children:Object(c.jsx)("div",{style:a,children:Object(c.jsx)(l.a,{children:Object(c.jsxs)(p.a,{span:24,children:[" ",n]})})})})},b=function(e){var t=e.isOpen,n=e.children,a=t?{display:"none",opacity:0}:{display:"block",opacity:1};return Object(c.jsx)("div",{className:"BottomCollapseBox",children:Object(c.jsx)("div",{style:a,children:Object(c.jsx)(l.a,{children:Object(c.jsxs)(p.a,{span:24,children:[" ",n]})})})})};function f(e){var t=e.topContent,n=e.bottomContent,a=e.buttonTitle,r=e.isCollapsed,o=e.onCollapse,s=r?"collapsed":"",i=e.isPanelCollapsed?"-400px":"0px";return Object(c.jsxs)("div",{className:"panelBox",style:{width:"400px",marginLeft:i},children:[Object(c.jsx)(j,{isOpen:r,children:t}),Object(c.jsxs)("div",{className:"collapseBox "+s,children:[Object(c.jsx)(d,{title:a,onChange:o}),Object(c.jsx)("div",{className:"whiteBg"}),Object(c.jsx)(b,{isOpen:r,children:n})]})]})}var O=i.a.Sider;function x(e){var t=e.config,n=e.topContent,o=e.bottomContent,i=e.fixHeaderPanel,l=t.ADD_NEW_ENTITY,p=Object(r.b)(),d=p.state,j=p.crudContextAction,b=d.isPanelCollapsed,x=d.isBoxCollapsed,h=j.panel,m=j.collapsedBox,y=Object(a.useState)("0px"),v=Object(s.a)(y,2),g=v[0],C=v[1],w=Object(a.useState)("1"),E=Object(s.a)(w,2),k=E[0],B=E[1];Object(a.useEffect)((function(){b?(C("-400px"),B(0)):(C("0px"),B(1)),setTimeout((function(){C("0px"),B(1)}),300)}),[b]);return Object(c.jsxs)(O,{trigger:Object(c.jsx)(u.a,{className:"trigger"}),width:400,collapsible:!0,collapsed:b,collapsedWidth:"0px",onCollapse:function(){h.collapse()},zeroWidthTriggerStyle:{right:"-60px"},style:{background:"#FFF",left:g,opacity:k},children:[i,Object(c.jsx)(f,{buttonTitle:l,isPanelCollapsed:b,isCollapsed:x,onCollapse:function(){m.collapse()},topContent:n,bottomContent:o})]})}var h=i.a.Content;function m(e){var t=e.children,n=e.config,a=e.sidePanelTopContent,r=e.sidePanelBottomContent,s=e.fixHeaderPanel;return Object(c.jsx)(o,{children:Object(c.jsxs)(i.a,{style:{minHeight:"100vh"},children:[Object(c.jsx)(x,{config:n,topContent:a,bottomContent:r,fixHeaderPanel:s}),Object(c.jsx)(i.a,{className:"site-layout",children:Object(c.jsx)(h,{className:"site-layout-background",style:{padding:"50px 40px",margin:"50px auto",width:"100%",maxWidth:"1000px"},children:t})})]})})}var y=i.a.Content;function v(e){var t=e.children;return Object(c.jsx)(i.a,{className:"site-layout",children:Object(c.jsx)(y,{style:{padding:"20px",width:"100%",maxWidth:"1100px"},children:t})})}},316:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(1),r=n(6),c=n(0),o=n(67),s=n(301),i=n(300),u=n(302),l=n(548),p=n(285),d=n(311),j=n(5);function b(e){var t=e.config,n=e.formElements,b=t.entity,f=Object(o.b)(),O=Object(o.c)(u.a),x=O.isLoading,h=O.isSuccess,m=Object(i.b)().crudContextAction,y=m.panel,v=m.collapsedBox,g=m.readBox,C=l.a.useForm(),w=Object(r.a)(C,1)[0];return Object(c.useEffect)((function(){h&&(g.open(),v.open(),y.open(),w.resetFields(),f(s.a.resetAction("create")),f(s.a.list(b)))}),[h]),Object(j.jsx)(d.a,{isLoading:x,children:Object(j.jsxs)(l.a,{form:w,layout:"vertical",onFinish:function(e){e&&(e.birthday&&(e=Object(a.a)(Object(a.a)({},e),{},{birthday:e.birthday.format("DD/MM/YYYY")})),e.date&&(e=Object(a.a)(Object(a.a)({},e),{},{date:e.date.format("DD/MM/YYYY")}))),f(s.a.create(b,e))},children:[n,Object(j.jsx)(l.a.Item,{children:Object(j.jsx)(p.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})}},317:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(1),r=n(6),c=n(0),o=n(326),s=n.n(o),i=n(67),u=n(301),l=n(300),p=n(302),d=n(548),j=n(285),b=n(311),f=n(5);function O(e){var t=e.config,n=e.formElements,o=t.entity,O=Object(i.b)(),x=Object(i.c)(p.g),h=x.current,m=x.isLoading,y=x.isSuccess,v=Object(l.b)(),g=v.state,C=v.crudContextAction,w=C.panel,E=C.collapsedBox,k=C.readBox,B=d.a.useForm(),S=Object(r.a)(B,1)[0];Object(c.useEffect)((function(){h&&(h.birthday&&(h.birthday=s()(h.birthday)),h.date&&(h.date=s()(h.date)),S.setFieldsValue(h))}),[h]),Object(c.useEffect)((function(){y&&(k.open(),E.open(),w.open(),S.resetFields(),O(u.a.resetAction("update")),O(u.a.list(o)))}),[y]);var A=g.isEditBoxOpen?{display:"block",opacity:1}:{display:"none",opacity:0};return Object(f.jsx)("div",{style:A,children:Object(f.jsx)(b.a,{isLoading:m,children:Object(f.jsxs)(d.a,{form:S,layout:"vertical",onFinish:function(e){e&&(e.birthday&&(e=Object(a.a)(Object(a.a)({},e),{},{birthday:e.birthday.format("DD/MM/YYYY")})),e.date&&(e=Object(a.a)(Object(a.a)({},e),{},{birthday:e.date.format("DD/MM/YYYY")})));var t=h._id;O(u.a.update(o,t,e))},children:[n,Object(f.jsx)(d.a.Item,{children:Object(f.jsx)(j.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})})}},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(6),r=n(0),c=n(550),o=n(67),s=n(301),i=n(300),u=n(302),l=n(312),p=n(5);function d(e){var t=e.config,n=t.entity,d=t.entityDisplayLabels,j=t.deleteMessage,b=void 0===j?"Do you want delete : ":j,f=t.modalTitle,O=void 0===f?"Remove Item":f,x=Object(o.b)(),h=Object(o.c)(u.c),m=h.current,y=h.isLoading,v=h.isSuccess,g=Object(i.b)(),C=g.state,w=g.crudContextAction,E=C.isModalOpen,k=w.modal,B=Object(r.useState)(""),S=Object(a.a)(B,2),A=S[0],N=S[1];Object(r.useEffect)((function(){if(v&&(k.close(),x(s.a.list(n)),x(s.a.resetAction(n))),m){var e=d.map((function(e){return Object(l.a)(m,e)})).join(" ");N(e)}}),[v,m]);return Object(p.jsx)(c.a,{title:O,visible:E,onOk:function(){var e=m._id;x(s.a.delete(n,e))},onCancel:function(){y||k.close()},confirmLoading:y,children:Object(p.jsxs)("p",{children:[b,A]})})}},319:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(6),r=n(0),c=n(541),o=n(542),s=n(67),i=n(300),u=n(302),l=n(312),p=n(5);function d(e){var t=e.config.readColumns,n=Object(s.c)(u.b).result,d=Object(i.b)().state.isReadBoxOpen,j=Object(r.useState)([]),b=Object(a.a)(j,2),f=b[0],O=b[1],x=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(console.log("currentResult :",n),console.log("readColumns :",t),x.current)x.current=!1;else{var e=[];t.map((function(t){var a=t.dataIndex,r=t.title,c=Object(l.a)(n,a);e.push({propsKey:a,label:r,value:c})})),O(e)}}),[n]);var h=d?{display:"block",opacity:1}:{display:"none",opacity:0},m=f.map((function(e){return Object(p.jsxs)(c.a,{gutter:12,children:[Object(p.jsx)(o.a,{className:"gutter-row",span:8,children:Object(p.jsx)("p",{children:e.label})}),Object(p.jsx)(o.a,{className:"gutter-row",span:2,children:Object(p.jsx)("p",{children:" : "})}),Object(p.jsx)(o.a,{className:"gutter-row",span:14,children:Object(p.jsx)("p",{children:e.value})})]},e.propsKey)}));return console.log("itemsList :",m),Object(p.jsx)("div",{style:h,children:m})}},320:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(6),r=n(0),c=n(544),o=n(531),s=n(361),i=n(67),u=n(301),l=n(308),p=n(300),d=n(302),j=n(81),b=n(5);function f(e){var t=e.config,n=t.entity,f=t.searchConfig,O=f.displayLabels,x=f.searchFields,h=f.outputValue,m=void 0===h?"_id":h,y=Object(i.b)(),v=Object(r.useState)(""),g=Object(a.a)(v,2),C=g[0],w=g[1],E=Object(r.useState)([]),k=Object(a.a)(E,2),B=k[0],S=k[1],A=Object(p.b)().crudContextAction,N=A.panel,T=A.collapsedBox,P=A.readBox,L=l.a.source(),_=Object(i.c)(d.f),D=_.result,I=_.isLoading,M=_.isSuccess,Y=Object(r.useRef)(!1),F=null;Object(r.useEffect)((function(){I&&S([{label:"... Searching"}])}),[I]);return Object(r.useEffect)((function(){var e=[];D.map((function(t){var n=O.map((function(e){return t[e]})).join(" ");e.push({label:n,value:t[m]})})),S(e)}),[D]),Object(b.jsx)(c.a,{value:C,options:B,style:{width:"100%"},onSelect:function(e){var t=D.find((function(t){return t[m]===e}));y(u.a.currentItem(t)),N.open(),T.open(),P.open()},onSearch:function(e){Y.current=!0,clearTimeout(F),F=setTimeout((function(){Y.current&&""!==e&&y(u.a.search(n,L,{question:e,fields:x})),Y.current=!1}),500)},onChange:function(e){var t=B.find((function(t){return t.value===e})),n=t?t.label:e;w(n)},notFoundContent:M?"":Object(b.jsx)(j.a,{}),allowClear:!0,placeholder:"Your Search here",children:Object(b.jsx)(o.a,{suffix:Object(b.jsx)(s.a,{})})})}},322:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(8),r=n(0),c=n(366),o=n(549),s=n(285),i=n(547),u=n(170),l=n(67),p=n(301),d=n(302),j=n(313),b=n(5);function f(e){var t=e.config,n=e.DropDownRowMenu,f=e.AddNewItem,O=t.entity,x=t.dataTableColumns,h=t.dataTableTitle;x=[].concat(Object(a.a)(x),[{title:"",render:function(e){return Object(b.jsx)(c.a,{overlay:n({row:e}),trigger:["click"],children:Object(b.jsx)(u.a,{style:{cursor:"pointer",fontSize:"24px"}})})}}]);var m=Object(l.c)(d.e),y=m.result,v=m.isLoading,g=y.pagination,C=y.items,w=Object(l.b)(),E=Object(r.useCallback)((function(e){w(p.a.list(O,e.current))}),[]);return Object(r.useEffect)((function(){w(p.a.list(O))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.a,{onBack:function(){return window.history.back()},title:h,ghost:!1,extra:[Object(b.jsx)(s.a,{onClick:E,children:"Refresh"},"".concat(Object(j.a)())),Object(b.jsx)(f,{config:t},"".concat(Object(j.a)()))],style:{padding:"20px 0px"}}),Object(b.jsx)(i.a,{columns:x,rowKey:function(e){return e._id},dataSource:C,pagination:g,loading:v,onChange:E})]})}},333:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var a=n(0),r=n(541),c=n(542),o=n(285),s=n(555),i=n(316),u=n(317),l=n(318),p=n(319),d=n(320),j=n(67),b=n(301),f=n(300),O=n(315),x=n(286),h=n(538),m=n(558),y=n(559),v=n(302),g=n(313),C=n(322),w=n(5);function E(e){var t=e.config,n=Object(f.b)().crudContextAction,a=n.collapsedBox,r=n.panel,c=t.ADD_NEW_ENTITY;return Object(w.jsx)(o.a,{onClick:function(){r.open(),a.close()},type:"primary",children:c})}function k(e){var t=e.row,n=Object(j.b)(),a=Object(f.b)().crudContextAction,r=a.panel,c=a.collapsedBox,o=a.modal,s=a.readBox,i=a.editBox,u=Object(j.c)(Object(v.d)(t._id));return Object(w.jsxs)(x.a,{style:{width:130},children:[Object(w.jsx)(x.a.Item,{icon:Object(w.jsx)(h.a,{}),onClick:function(){n(b.a.currentItem(u)),r.open(),c.open(),s.open()},children:"Show"},"".concat(Object(g.a)())),Object(w.jsx)(x.a.Item,{icon:Object(w.jsx)(m.a,{}),onClick:function(){n(b.a.currentAction("update",u)),i.open(),r.open(),c.open()},children:"Edit"},"".concat(Object(g.a)())),Object(w.jsx)(x.a.Item,{icon:Object(w.jsx)(y.a,{}),onClick:function(){n(b.a.currentAction("delete",u)),o.open()},children:"Delete"},"".concat(Object(g.a)()))]})}function B(e){var t=e.config;return Object(w.jsx)(C.a,{config:t,DropDownRowMenu:k,AddNewItem:E})}function S(e){var t=e.config,n=e.formElements;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(p.a,{config:t}),Object(w.jsx)(u.a,{config:t,formElements:n})]})}function A(e){var t=e.config,n=Object(f.b)().crudContextAction.collapsedBox;return Object(w.jsxs)("div",{className:"box",children:[Object(w.jsx)(r.a,{gutter:12,children:Object(w.jsx)(c.a,{className:"gutter-row",span:21,children:Object(w.jsx)("h1",{style:{fontSize:20,marginBottom:20},children:t.panelTitle})})}),Object(w.jsxs)(r.a,{gutter:8,children:[Object(w.jsx)(c.a,{className:"gutter-row",span:21,children:Object(w.jsx)(d.a,{config:t})}),Object(w.jsx)(c.a,{className:"gutter-row",span:3,children:Object(w.jsx)(o.a,{onClick:function(){n.close()},block:!0,icon:Object(w.jsx)(s.a,{})})})]})]})}function N(e){var t=e.config,n=e.createForm,r=e.updateForm,c=Object(j.b)();return Object(a.useLayoutEffect)((function(){c(b.a.resetState())}),[]),Object(w.jsxs)(O.a,{config:t,fixHeaderPanel:Object(w.jsx)(A,{config:t}),sidePanelBottomContent:Object(w.jsx)(i.a,{config:t,formElements:n}),sidePanelTopContent:Object(w.jsx)(S,{config:t,formElements:r}),children:[Object(w.jsx)(B,{config:t}),Object(w.jsx)(l.a,{config:t})]})}},345:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(0);var a=n(548),r=n(531),c=n(5);function o(e){e.isUpdateForm;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(a.a.Item,{label:"company Name",name:"company",rules:[{required:!0,message:"Please input your company name!"}],children:Object(c.jsx)(r.a,{})}),Object(c.jsx)(a.a.Item,{label:"Surname",name:"surname",rules:[{required:!0,message:"Please input your surname!"}],style:{display:"inline-block",width:"calc(50%)",paddingRight:"5px"},children:Object(c.jsx)(r.a,{})}),Object(c.jsx)(a.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your manager name!"}],style:{display:"inline-block",width:"calc(50%)",paddingLeft:"5px"},children:Object(c.jsx)(r.a,{})}),Object(c.jsx)(a.a.Item,{name:"phone",label:"Phone",rules:[{required:!0,message:"Please input your phone!"}],children:Object(c.jsx)(r.a,{})}),Object(c.jsx)(a.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(c.jsx)(r.a,{})})]})}},545:function(e,t,n){"use strict";n.r(t);n(0);var a=n(333),r=n(345),c=n(5);t.default=function(){var e={entity:"client",panelTitle:"Customer Panel",dataTableTitle:"Customers Lists",ENTITY_NAME:"customer",CREATE_ENTITY:"Create customer",ADD_NEW_ENTITY:"Add new customer",UPDATE_ENTITY:"Update customer",DATATABLE_TITLE:"customers List",readColumns:[{title:"Company",dataIndex:"company"},{title:"Manager Surname",dataIndex:"surname"},{title:"Manager Name",dataIndex:"name"},{title:"Email",dataIndex:"email"},{title:"Phone",dataIndex:"phone"}],dataTableColumns:[{title:"Company",dataIndex:"company"},{title:"Manager Surname",dataIndex:"surname"},{title:"Manager Name",dataIndex:"name"},{title:"Email",dataIndex:"email"}],searchConfig:{displayLabels:["company","surname","name"],searchFields:"company,surname,name",outputValue:"_id"},entityDisplayLabels:["company"]};return Object(c.jsx)(a.a,{createForm:Object(c.jsx)(r.a,{}),updateForm:Object(c.jsx)(r.a,{isUpdateForm:!0}),config:e})}}}]);
//# sourceMappingURL=CustomerPage.b6fcada3.chunk.js.map