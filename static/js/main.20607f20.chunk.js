(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(4),o=n.n(a),u=(n(11),n(12),n(5)),i=n(1),l=n(2),s=function(e){var t=e.name,n=e.isChecked,r=e.changeChecked;return c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",checked:n,onChange:function(e){r(e,t)}})," ",t))};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var O=function(){var e=Object(r.useState)(),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)([]),O=Object(l.a)(o,2),b=O[0],p=O[1];Object(r.useEffect)((function(){var e=localStorage.getItem("TO_DO_LIST");e&&p(JSON.parse(e))}),[]),Object(r.useEffect)((function(){localStorage.setItem("TO_DO_LIST",JSON.stringify(b))}),[b]);var m=function(e,t){var n=Object(i.a)(b),r=e.target.checked;n=n.map((function(e){return e.name===t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{isChecked:r}):e})),p(n)};return c.a.createElement("div",null,b.map((function(e){return c.a.createElement(s,{name:e.name,key:e.name,isChecked:e.isChecked,changeChecked:m})})),c.a.createElement("input",{onChange:function(e){return a(e.target.value)}}),c.a.createElement("button",{onClick:function(){!function(e){var t=Object(i.a)(e);t.find((function(e){return e.name===n}))?alert("The task is already available in your list"):n&&(t.push({name:n,isChecked:!1}),p(t))}(b)}},"Add a task"))},b=function(){return c.a.createElement(O,null)};o.a.render(c.a.createElement(b,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.20607f20.chunk.js.map