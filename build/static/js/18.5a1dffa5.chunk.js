(this["webpackJsonpcompetition-system"]=this["webpackJsonpcompetition-system"]||[]).push([[18],{423:function(e,a,t){e.exports={container:"Message_container__HNnLD",collapse:"Message_collapse__xLWBB",msgHeader:"Message_msgHeader__1JwUE",msgDot:"Message_msgDot__2HAMM",msgContent:"Message_msgContent__1Ta5i"}},436:function(e,a,t){"use strict";t.r(a);t(101);var n=t(52),s=(t(421),t(425)),i=t(76),c=t(0),o=t.n(c),r=t(37),m=t(423),l=t.n(m);function g(e){var a=e.isRead,t=e.content;return o.a.createElement("div",{className:l.a.msgHeader},a?null:o.a.createElement("div",{className:l.a.msgDot}),o.a.createElement("div",{className:l.a.msgContent},t))}a.default=function(e){Object(i.a)(e);var a=r.a.useContainer(),t=s.a.Panel;return o.a.createElement(n.a,{spinning:a.loading,wrapperClassName:l.a.container},o.a.createElement(s.a,{bordered:!1,className:l.a.collapse,expandIconPosition:"right"},a.msgList.map((function(e){return o.a.createElement(t,{key:e.id,header:o.a.createElement(g,{isRead:e.isRead,content:e.title}),className:l.a.item},e.title)}))))}}}]);