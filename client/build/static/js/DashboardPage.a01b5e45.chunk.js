(this["webpackJsonpantd-demo"]=this["webpackJsonpantd-demo"]||[]).push([[6],{301:function(e,t,a){"use strict";a.d(t,"a",(function(){return P})),a.d(t,"b",(function(){return E}));var n=a(6),r=a(0),c=a(1),s="OPEN_MODAL",o="CLOSE_MODAL",i="OPEN_ADVANCED_BOX",l="CLOSE_ADVANCED_BOX",u="OPEN_EDIT_BOX",d="CLOSE_EDIT_BOX",j="OPEN_PANEL",p="CLOSE_PANEL",O="COLLAPSE_PANEL",b="OPEN_BOX",x="CLOSE_BOX",h="COLLAPSE_BOX",f="OPEN_READ_BOX",v="CLOSE_READ_BOX",g="COLLAPSE_READ_BOX",m={isModalOpen:!1,isPanelCollapsed:!1,isBoxCollapsed:!1,isReadBoxOpen:!0,isAdvancedBoxOpen:!1,isEditBoxOpen:!1};function y(e,t){switch(t.type){case s:return Object(c.a)(Object(c.a)({},e),{},{isModalOpen:!0});case o:return Object(c.a)(Object(c.a)({},e),{},{isModalOpen:!1});case j:return Object(c.a)(Object(c.a)({},e),{},{isPanelCollapsed:!1});case p:return Object(c.a)(Object(c.a)({},e),{},{isPanelCollapsed:!0});case O:return Object(c.a)(Object(c.a)({},e),{},{isPanelCollapsed:!e.isPanelCollapsed});case b:return Object(c.a)(Object(c.a)({},e),{},{isBoxCollapsed:!0});case x:return Object(c.a)(Object(c.a)({},e),{},{isBoxCollapsed:!1});case h:return Object(c.a)(Object(c.a)({},e),{},{isBoxCollapsed:!e.isBoxCollapsed});case f:return Object(c.a)(Object(c.a)({},e),{},{isAdvancedBoxOpen:!1,isEditBoxOpen:!1,isReadBoxOpen:!0});case v:return Object(c.a)(Object(c.a)({},e),{},{isReadBoxOpen:!1});case i:return Object(c.a)(Object(c.a)({},e),{},{isReadBoxOpen:!1,isEditBoxOpen:!1,isAdvancedBoxOpen:!0});case l:return Object(c.a)(Object(c.a)({},e),{},{isAdvancedBoxOpen:!1});case u:return Object(c.a)(Object(c.a)({},e),{},{isReadBoxOpen:!1,isAdvancedBoxOpen:!1,isEditBoxOpen:!0});case d:return Object(c.a)(Object(c.a)({},e),{},{isEditBoxOpen:!1});case g:return Object(c.a)(Object(c.a)({},e),{},{isReadBoxOpen:!e.isReadBoxOpen});default:throw new Error("Unhandled action type: ".concat(t.type))}}var C=function(e){return{modal:{open:function(){e({type:s})},close:function(){e({type:o})}},advancedBox:{open:function(){e({type:i})},close:function(){e({type:l})}},editBox:{open:function(){e({type:u})},close:function(){e({type:d})}},panel:{open:function(){e({type:j})},close:function(){e({type:p})},collapse:function(){e({type:O})}},collapsedBox:{open:function(){e({type:b})},close:function(){e({type:x})},collapse:function(){e({type:h})}},readBox:{open:function(){e({type:f}),console.log("readBox open")},close:function(){e({type:v}),console.log("readBox close")},collapse:function(){e({type:g})}}}},w=function(e){return{isModalOpen:function(){return e.isModalOpen},isPanelOpen:function(){return e.isPanelOpen},isBoxOpen:function(){return e.isBoxOpen}}},B=a(5),N=Object(r.createContext)();function P(e){var t=e.children,a=Object(r.useReducer)(y,m),c=Object(n.a)(a,2),s=c[0],o=c[1],i=Object(r.useMemo)((function(){return[s,o]}),[s]);return Object(B.jsx)(N.Provider,{value:i,children:t})}function E(){var e=Object(r.useContext)(N);if(void 0===e)throw new Error("useCrudContext must be used within a CrudContextProvider");var t=Object(n.a)(e,2),a=t[0],c=t[1];return{state:a,crudContextAction:C(c),crudContextSelector:w(a)}}},309:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(36),r=a(1),c=a(4),s=a(21),o=a.n(s),i=a(132),l=a.n(i),u=a(84),d=a(59),j=a(133),p=a(134),O=Object(c.a)({},u.a,d.c.get()),b=l.a.create({baseURL:u.b,timeout:3e4,headers:Object(r.a)({},O)}),x={create:function(){var e=Object(n.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.defaults.headers=Object(r.a)({},O),console.log("jsonData",a),e.prev=2,e.next=5,b.post(t+"/create",a);case 5:return n=e.sent,e.abrupt("return",Object(p.a)(n));case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",Object(j.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,a){return e.apply(this,arguments)}}(),read:function(){var e=Object(n.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.defaults.headers=Object(r.a)({},O),e.prev=1,e.next=4,b.get(t+"/read/"+a);case 4:return n=e.sent,e.abrupt("return",Object(p.a)(n));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(j.a)(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}(),update:function(){var e=Object(n.a)(o.a.mark((function e(t,a,n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.defaults.headers=Object(r.a)({},O),e.prev=1,e.next=4,b.patch(t+"/update/"+a,n);case 4:return c=e.sent,e.abrupt("return",Object(p.a)(c));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(j.a)(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a,n){return e.apply(this,arguments)}}(),delete:function(){var e=Object(n.a)(o.a.mark((function e(t,a){var n,c=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.length>2&&void 0!==c[2]?c[2]:{},b.defaults.headers=Object(r.a)({},O),e.prev=2,e.next=5,b.delete(t+"/delete/"+a);case 5:return n=e.sent,e.abrupt("return",Object(p.a)(n));case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",Object(j.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,a){return e.apply(this,arguments)}}(),filter:function(){var e=Object(n.a)(o.a.mark((function e(t){var a,n,c,s,i,l=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:{},b.defaults.headers=Object(r.a)({},O),e.prev=2,n=a.filter?"filter="+a.filter:"",c=a.equal?"&equal="+a.equal:"",s="?".concat(n).concat(c),e.next=8,b.get(t+"/filter"+s);case 8:return i=e.sent,e.abrupt("return",Object(p.a)(i));case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",Object(j.a)(e.t0));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),search:function(){var e=Object(n.a)(o.a.mark((function e(t,a){var n,r,s,i,l,O=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=O.length>2&&void 0!==O[2]?O[2]:{},b.defaults.headers=Object(c.a)({},u.a,d.c.get()),e.prev=2,r="",n!=={}&&(s=n.fields?"fields="+n.fields:"",i=n.question?"&q="+n.question:"",r="?".concat(s).concat(i)),e.next=7,b.get(t+"/search"+r,{cancelToken:a.token});case 7:return l=e.sent,e.abrupt("return",Object(p.a)(l));case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",Object(j.a)(e.t0));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,a){return e.apply(this,arguments)}}(),list:function(){var e=Object(n.a)(o.a.mark((function e(t){var a,n,r,s,i,l=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:{},b.defaults.headers=Object(c.a)({},u.a,d.c.get()),console.log(d.c.get()),e.prev=3,n="",a!=={}&&(r=a.page?"page="+a.page:"",s=a.items?"&items="+a.items:"",n="?".concat(r).concat(s)),e.next=8,b.get(t+"/list"+n);case 8:return i=e.sent,e.abrupt("return",Object(p.a)(i));case 12:return e.prev=12,e.t0=e.catch(3),e.abrupt("return",Object(j.a)(e.t0));case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),post:function(){var e=Object(n.a)(o.a.mark((function e(t,a){var n,c=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.length>2&&void 0!==c[2]?c[2]:{},b.defaults.headers=Object(r.a)({},O),e.prev=2,e.next=5,b.post(t,a);case 5:return n=e.sent,e.abrupt("return",Object(p.a)(n));case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",Object(j.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,a){return e.apply(this,arguments)}}(),get:function(){var e=Object(n.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.defaults.headers=Object(r.a)({},O),e.prev=1,e.next=4,b.get(t);case 4:return a=e.sent,e.abrupt("return",Object(p.a)(a));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(j.a)(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),patch:function(){var e=Object(n.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.defaults.headers=Object(r.a)({},O),e.prev=1,e.next=4,b.patch(t,a);case 4:return n=e.sent,e.abrupt("return",Object(p.a)(n));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(j.a)(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}(),source:function(){var e=l.a.CancelToken.source();return e}},h=x},316:function(e,t,a){"use strict";a.d(t,"a",(function(){return v})),a.d(t,"b",(function(){return m}));var n=a(0),r=a(301),c=a(5);var s=function(e){var t=e.children;return Object(c.jsx)(r.a,{children:t})},o=a(6),i=a(288),l=a(563),u=a(544),d=a(545),j=function(e){var t=e.onChange,a=e.title;return Object(c.jsx)("div",{className:"collapseBoxHeader",onClick:t,children:a})},p=function(e){var t=e.isOpen,a=e.children,n=t?{display:"block",opacity:1}:{display:"none",opacity:0};return Object(c.jsx)("div",{className:"TopCollapseBox",children:Object(c.jsx)("div",{style:n,children:Object(c.jsx)(u.a,{children:Object(c.jsxs)(d.a,{span:24,children:[" ",a]})})})})},O=function(e){var t=e.isOpen,a=e.children,n=t?{display:"none",opacity:0}:{display:"block",opacity:1};return Object(c.jsx)("div",{className:"BottomCollapseBox",children:Object(c.jsx)("div",{style:n,children:Object(c.jsx)(u.a,{children:Object(c.jsxs)(d.a,{span:24,children:[" ",a]})})})})};function b(e){var t=e.topContent,a=e.bottomContent,n=e.buttonTitle,r=e.isCollapsed,s=e.onCollapse,o=r?"collapsed":"",i=e.isPanelCollapsed?"-400px":"0px";return Object(c.jsxs)("div",{className:"panelBox",style:{width:"400px",marginLeft:i},children:[Object(c.jsx)(p,{isOpen:r,children:t}),Object(c.jsxs)("div",{className:"collapseBox "+o,children:[Object(c.jsx)(j,{title:n,onChange:s}),Object(c.jsx)("div",{className:"whiteBg"}),Object(c.jsx)(O,{isOpen:r,children:a})]})]})}var x=i.a.Sider;function h(e){var t=e.config,a=e.topContent,s=e.bottomContent,i=e.fixHeaderPanel,u=t.ADD_NEW_ENTITY,d=Object(r.b)(),j=d.state,p=d.crudContextAction,O=j.isPanelCollapsed,h=j.isBoxCollapsed,f=p.panel,v=p.collapsedBox,g=Object(n.useState)("0px"),m=Object(o.a)(g,2),y=m[0],C=m[1],w=Object(n.useState)("1"),B=Object(o.a)(w,2),N=B[0],P=B[1];Object(n.useEffect)((function(){O?(C("-400px"),P(0)):(C("0px"),P(1)),setTimeout((function(){C("0px"),P(1)}),300)}),[O]);return Object(c.jsxs)(x,{trigger:Object(c.jsx)(l.a,{className:"trigger"}),width:400,collapsible:!0,collapsed:O,collapsedWidth:"0px",onCollapse:function(){f.collapse()},zeroWidthTriggerStyle:{right:"-60px"},style:{background:"#FFF",left:y,opacity:N},children:[i,Object(c.jsx)(b,{buttonTitle:u,isPanelCollapsed:O,isCollapsed:h,onCollapse:function(){v.collapse()},topContent:a,bottomContent:s})]})}var f=i.a.Content;function v(e){var t=e.children,a=e.config,n=e.sidePanelTopContent,r=e.sidePanelBottomContent,o=e.fixHeaderPanel;return Object(c.jsx)(s,{children:Object(c.jsxs)(i.a,{style:{minHeight:"100vh"},children:[Object(c.jsx)(h,{config:a,topContent:n,bottomContent:r,fixHeaderPanel:o}),Object(c.jsx)(i.a,{className:"site-layout",children:Object(c.jsx)(f,{className:"site-layout-background",style:{padding:"50px 40px",margin:"50px auto",width:"100%",maxWidth:"1000px"},children:t})})]})})}var g=i.a.Content;function m(e){var t=e.children;return Object(c.jsx)(i.a,{className:"site-layout",children:Object(c.jsx)(g,{style:{padding:"20px",width:"100%",maxWidth:"1100px"},children:t})})}},559:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return A}));var n=a(0),r=a(545),c=a(414),s=a(544),o=a(560),i=a(554),l=a(553),u=a(566),d=a(316),j=a(8),p=a(286),O=a(383),b=a(550),x=a(309),h=a(36),f=a(6),v=a(21),g=a.n(v);var m=a(541),y=a(564),C=a(565),w=a(170),B=a(5);function N(e){e.row;return Object(B.jsxs)(p.a,{style:{width:130},children:[Object(B.jsx)(p.a.Item,{icon:Object(B.jsx)(m.a,{}),onClick:function(){},children:"Show"}),Object(B.jsx)(p.a.Item,{icon:Object(B.jsx)(y.a,{}),onClick:function(){},children:"Edit"}),Object(B.jsx)(p.a.Item,{icon:Object(B.jsx)(C.a,{}),onClick:function(){},children:"Delete"})]})}function P(e){var t=Object.assign({},e),a=t.entity,r=t.dataTableColumns;r=[].concat(Object(j.a)(r),[{title:"",render:function(e){return Object(B.jsx)(O.a,{overlay:N({row:e}),trigger:["click"],children:Object(B.jsx)(w.a,{style:{cursor:"pointer",fontSize:"24px"}})})}}]);var c=function(e){var t=Object(n.useState)(null),a=Object(f.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(!1),o=Object(f.a)(s,2),i=o[0],l=o[1],u=Object(n.useState)(!1),d=Object(f.a)(u,2),j=d[0],p=d[1],O=function(){var t=Object(h.a)(g.a.mark((function t(){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),t.next=3,e();case 3:!0===(a=t.sent).success&&(l(!0),c(a.result)),p(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){O()}),[]),{result:r,isSuccess:i,isLoading:j}}((function(){return x.a.list(a)})),s=c.result,o=c.isLoading,i=c.isSuccess;return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(b.a,{columns:r,rowKey:function(e){return e._id},dataSource:i&&(i&&s?s.slice(0,5):[]),pagination:!1,loading:o})})}var E=function(e){var t=e.title,a=e.tagContent,n=e.tagColor,i=e.prefix;return Object(B.jsx)(r.a,{className:"gutter-row",span:6,children:Object(B.jsxs)("div",{className:"whiteBox shadow",style:{color:"#595959",fontSize:13,height:"106px"},children:[Object(B.jsx)("div",{className:"pad15 strong",style:{textAlign:"center",justifyContent:"center"},children:Object(B.jsx)("h3",{style:{color:"#22075e",marginBottom:0},children:t})}),Object(B.jsx)(c.a,{style:{padding:0,margin:0}}),Object(B.jsx)("div",{className:"pad15",children:Object(B.jsxs)(s.a,{gutter:[0,0],children:[Object(B.jsx)(r.a,{className:"gutter-row",span:11,style:{textAlign:"left"},children:Object(B.jsx)("div",{className:"left",children:i})}),Object(B.jsx)(r.a,{className:"gutter-row",span:2,children:Object(B.jsx)(c.a,{style:{padding:"10px 0",justifyContent:"center"},type:"vertical"})}),Object(B.jsx)(r.a,{className:"gutter-row",span:11,style:{display:"flex",justifyContent:"center"},children:Object(B.jsx)(o.a,{color:n,style:{margin:"0 auto",justifyContent:"center"},children:a})})]})})]})})},k=function(e){var t=e.tag,a=e.color,n=e.value,r="#000";switch(a){case"bleu":r="#1890ff";break;case"green":r="#95de64";break;case"red":r="#ff4d4f";break;case"orange":r="#ffa940";break;case"purple":r="#722ed1";break;case"grey":r="#595959";break;case"cyan":r="#13c2c2";break;case"brown":r="#614700"}return Object(B.jsxs)("div",{style:{color:"#595959",marginBottom:5},children:[Object(B.jsx)("div",{className:"left alignLeft",children:t}),Object(B.jsxs)("div",{className:"right alignRight",children:[n," %"]}),Object(B.jsx)(i.a,{percent:n,showInfo:!1,strokeColor:{"0%":r,"100%":r}})]})};function A(){var e=[{title:"Client",dataIndex:"client"},{title:"phone",dataIndex:"phone"},{title:"Status",dataIndex:"status",render:function(e){var t="pending"===e?"volcano":"green";return Object(B.jsx)(o.a,{color:t,children:e.toUpperCase()})}}],t=[{title:"Product Name",dataIndex:"productName"},{title:"Price",dataIndex:"price"},{title:"Status",dataIndex:"status",render:function(e){var t="available"===e?"green":"volcano";return Object(B.jsx)(o.a,{color:t,children:e.toUpperCase()})}}];return Object(B.jsxs)(d.b,{children:[Object(B.jsxs)(s.a,{gutter:[24,24],children:[Object(B.jsx)(E,{title:"Leads",tagColor:"cyan",prefix:"This month",tagContent:"34 000 $"}),Object(B.jsx)(E,{title:"Order",tagColor:"purple",prefix:"This month",tagContent:"34 000 $"}),Object(B.jsx)(E,{title:"Payment",tagColor:"green",prefix:"This month",tagContent:"34 000 $"}),Object(B.jsx)(E,{title:"Due Balance",tagColor:"red",prefix:"Not Paid",tagContent:"34 000 $"})]}),Object(B.jsx)("div",{className:"space30"}),Object(B.jsxs)(s.a,{gutter:[24,24],children:[Object(B.jsx)(r.a,{className:"gutter-row",span:18,children:Object(B.jsx)("div",{className:"whiteBox shadow",style:{height:"380px"},children:Object(B.jsxs)(s.a,{className:"pad10",gutter:[0,0],children:[Object(B.jsx)(r.a,{className:"gutter-row",span:8,children:Object(B.jsxs)("div",{className:"pad15",children:[Object(B.jsx)("h3",{style:{color:"#22075e",marginBottom:15},children:"Lead Preview"}),Object(B.jsx)(k,{tag:"Draft",color:"grey",value:3}),Object(B.jsx)(k,{tag:"Pending",color:"bleu",value:5}),Object(B.jsx)(k,{tag:"Not Paid",color:"orange",value:12}),Object(B.jsx)(k,{tag:"Overdue",color:"red",value:6}),Object(B.jsx)(k,{tag:"Partially Paid",color:"cyan",value:8}),Object(B.jsx)(k,{tag:"Paid",color:"green",value:55})]})}),Object(B.jsxs)(r.a,{className:"gutter-row",span:8,children:[" ",Object(B.jsxs)("div",{className:"pad15",children:[Object(B.jsx)("h3",{style:{color:"#22075e",marginBottom:15},children:"Quote Preview"}),Object(B.jsx)(k,{tag:"Draft",color:"grey",value:3}),Object(B.jsx)(k,{tag:"Pending",color:"bleu",value:5}),Object(B.jsx)(k,{tag:"Not Paid",color:"orange",value:12}),Object(B.jsx)(k,{tag:"Overdue",color:"red",value:6}),Object(B.jsx)(k,{tag:"Partially Paid",color:"cyan",value:8}),Object(B.jsx)(k,{tag:"Paid",color:"green",value:55})]})]}),Object(B.jsxs)(r.a,{className:"gutter-row",span:8,children:[" ",Object(B.jsxs)("div",{className:"pad15",children:[Object(B.jsx)("h3",{style:{color:"#22075e",marginBottom:15},children:"Order Preview"}),Object(B.jsx)(k,{tag:"Draft",color:"grey",value:3}),Object(B.jsx)(k,{tag:"Pending",color:"bleu",value:5}),Object(B.jsx)(k,{tag:"Not Paid",color:"orange",value:12}),Object(B.jsx)(k,{tag:"Overdue",color:"red",value:6}),Object(B.jsx)(k,{tag:"Partially Paid",color:"cyan",value:8}),Object(B.jsx)(k,{tag:"Paid",color:"green",value:55})]})]})]})})}),Object(B.jsx)(r.a,{className:"gutter-row",span:6,children:Object(B.jsx)("div",{className:"whiteBox shadow",style:{height:"380px"},children:Object(B.jsxs)("div",{className:"pad20",style:{textAlign:"center",justifyContent:"center"},children:[Object(B.jsx)("h3",{style:{color:"#22075e",marginBottom:30},children:"Customer Preview"}),Object(B.jsx)(i.a,{type:"dashboard",percent:25,width:148}),Object(B.jsx)("p",{children:"New Customer this Month"}),Object(B.jsx)(c.a,{}),Object(B.jsx)(l.a,{title:"Active Customer",value:11.28,precision:2,valueStyle:{color:"#3f8600"},prefix:Object(B.jsx)(u.a,{}),suffix:"%"})]})})})]}),Object(B.jsx)("div",{className:"space30"}),Object(B.jsxs)(s.a,{gutter:[24,24],children:[Object(B.jsx)(r.a,{className:"gutter-row",span:12,children:Object(B.jsxs)("div",{className:"whiteBox shadow",children:[Object(B.jsx)("div",{className:"pad20",children:Object(B.jsx)("h3",{style:{color:"#22075e",marginBottom:5},children:"Recent Leads"})}),Object(B.jsx)(P,{entity:"lead",dataTableColumns:e})]})}),Object(B.jsx)(r.a,{className:"gutter-row",span:12,children:Object(B.jsxs)("div",{className:"whiteBox shadow",children:[Object(B.jsx)("div",{className:"pad20",children:Object(B.jsx)("h3",{style:{color:"#22075e",marginBottom:5},children:"Recent Products"})}),Object(B.jsx)(P,{entity:"product",dataTableColumns:t})]})})]})]})}}}]);
//# sourceMappingURL=DashboardPage.a01b5e45.chunk.js.map