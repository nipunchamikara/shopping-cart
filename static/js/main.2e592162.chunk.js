(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),i=n.n(r),a=n(3),s=n(0);function o(e){var t=e.item.qty;function n(e){c(parseInt(e?t+1:Math.max(t-1,0)))}function c(t){var n=e.items.map((function(n,c){return c===e.index&&(n.qty=t),n}));e.updateItems(n)}return Object(s.jsxs)("div",{className:"item rounded",children:[Object(s.jsxs)("h4",{children:["Name: ",e.item.name]}),Object(s.jsxs)("h5",{children:["Price: ",e.item.price.toLocaleString("en-US",{style:"currency",currency:"USD"})]}),Object(s.jsx)("h5",{children:"Quantity:"}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("button",{className:"btn btn-primary col-2 left",onClick:function(){return n(!1)},children:"-1"}),Object(s.jsx)("input",{className:"col-8 qty",value:t,onChange:function(e){!function(e){(""===e||e<0)&&(e=0),c(e=parseInt(e))}(e.target.value)}}),Object(s.jsx)("button",{className:"btn btn-primary col-2 right",onClick:function(){return n(!0)},children:"+1"})]}),Object(s.jsxs)("h4",{children:["Total: ",(e.item.price*t).toLocaleString("en-US",{style:"currency",currency:"USD"})]})]})}function u(){var e=Object(c.useState)([{name:"Taco Seasoning",price:2.25,qty:0},{name:"Pinto Beans",price:1.99,qty:0},{name:"Sour Cream",price:3.5,qty:0}]),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(0),u=Object(a.a)(i,2),l=u[0],d=u[1];function j(e){r(e),function(){var e=n.reduce((function(e,t){return e+t.price*t.qty}),0);d(e)}()}var m=n.map((function(e,t){return Object(s.jsx)(o,{index:t,item:e,items:n,updateItems:j},t)}));return Object(s.jsxs)("div",{id:"ItemList",className:"col-lg-6 offset-lg-3 col-md-8 offset-md-2 rounded",children:[Object(s.jsx)("h2",{id:"heading",children:"Shopping Cart"}),m,Object(s.jsxs)("h3",{id:"GrandTotal",children:["Grand Total = ",l.toLocaleString("en-US",{style:"currency",currency:"USD"})]})]})}n(10);i.a.render(Object(s.jsx)(u,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.2e592162.chunk.js.map