(this.webpackJsonpnew_project=this.webpackJsonpnew_project||[]).push([[0],{102:function(n,e,t){"use strict";t.r(e);var r,i,c,a,o,s=t(10),d=t.n(s),j=t(54),l=t(29),u=t(58),b=t(57),x=t.n(b),p=t(70),h=t(0),m=t(40),O=t(130),f=t(22),g=t(23),v=g.a.div(r||(r=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  font-family: Arial, Helvetica, sans-serif;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 20px;\n\n  div {\n    flex: 1;\n  }\n\n  .information {\n    display: flex;\n    justify-content: space-between;\n  }\n  buttons {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  Button {\n    background-color: darkorange;\n  }\n\n  img {\n    max-width: 80px;\n    object-fit: cover;\n    margin-left: 40px;\n  }\n"]))),C=t(4),y=function(n){var e=n.item,t=n.addToCart,r=n.removeFromCart;return Object(C.jsxs)(v,{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:e.title}),Object(C.jsxs)("div",{className:"information",children:[Object(C.jsxs)("p",{children:["Price: $",e.price]}),Object(C.jsxs)("p",{children:["Total: $",(e.amount*e.price).toFixed(2)]})]}),Object(C.jsxs)("div",{className:"buttons",children:[Object(C.jsx)(O.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return r(e.id)},children:"-"}),Object(C.jsx)("p",{children:e.amount}),Object(C.jsx)(O.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return t(e)},children:"+"})]})]}),Object(C.jsx)("img",{src:e.image,alt:e.title})]})},w=g.a.aside(i||(i=Object(f.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 20px;\n  width: 500px;\n\n  p {\n    text-align: center;\n  }\n"]))),k=function(n){var e,t=n.cartItems,r=n.addToCart,i=n.removeFromCart;return Object(C.jsxs)(w,{children:[Object(C.jsx)("h2",{children:"Your Shopping Cart"}),0===t.length?Object(C.jsx)("p",{children:"No items in cart!"}):null,t.map((function(n){return Object(C.jsx)(y,{item:n,addToCart:r,removeFromCart:i},n.id)})),Object(C.jsxs)("h2",{children:["Total: $",(e=t,e.reduce((function(n,e){return n+e.amount*e.price}),0)).toFixed(2)]})]})},T=g.a.div(c||(c=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  width: 90%;\n  border: 1px solid lightgray;\n  border-radius: 20px;\n  height: 100%;\n\n  Button {\n    border-radius: 12px;\n    background-color: darkorange;\n  }\n\n  img {\n    max-height: 250px;\n    object-fit: cover;\n    border-radius: 20px 20px 0 0;\n  }\n\n  div {\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 1rem;\n    height: 100%;\n  }\n"]))),A=function(n){var e=n.item,t=n.handleAddToCart;return Object(C.jsxs)(T,{children:[Object(C.jsx)("img",{src:e.image,alt:e.title}),Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:e.title}),Object(C.jsx)("p",{children:e.description}),Object(C.jsxs)("h3",{children:["$",e.price]})]}),Object(C.jsx)(O.a,{onClick:function(){return t(e)},children:"Add to cart"})]})},F=t(137),S=t(134),$=t(136),z=t(74),B=t.n(z),E=t(135),H=t(133),I=g.a.div(a||(a=Object(f.a)(["\n  margin: 40px;\n"]))),N=Object(g.a)(H.a)(o||(o=Object(f.a)(["\n  position: fixed;\n  z-index: 100;\n  right: 20px;\n  top: 20px;\n"]))),Q=function(){var n=Object(p.a)(x.a.mark((function n(){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://fakestoreapi.com/products");case 2:return n.next=4,n.sent.json();case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),J=function(){var n=Object(h.useState)(!1),e=Object(u.a)(n,2),t=e[0],r=e[1],i=Object(h.useState)([]),c=Object(u.a)(i,2),a=c[0],o=c[1],s=Object(m.useQuery)("products",Q),d=s.data,b=s.isLoading,x=s.error;console.log(d);var p,O=function(n){o((function(e){return e.find((function(e){return e.id===n.id}))?e.map((function(e){return e.id===n.id?Object(l.a)(Object(l.a)({},e),{},{amount:e.amount+1}):e})):[].concat(Object(j.a)(e),[Object(l.a)(Object(l.a)({},n),{},{amount:1})])}))};return b?Object(C.jsx)(S.a,{}):x?Object(C.jsx)("div",{children:"Something went wrong!..."}):Object(C.jsxs)(I,{children:[Object(C.jsx)(F.a,{anchor:"right",open:t,onClose:function(){return r(!1)},children:Object(C.jsx)(k,{cartItems:a,addToCart:O,removeFromCart:function(n){o((function(e){return e.reduce((function(e,t){return t.id===n?1===t.amount?e:[].concat(Object(j.a)(e),[Object(l.a)(Object(l.a)({},t),{},{amount:t.amount-1})]):[].concat(Object(j.a)(e),[t])}),[])}))}})}),Object(C.jsx)(N,{onClick:function(){return r(!0)},children:Object(C.jsx)(E.a,{badgeContent:(p=a,p.reduce((function(n,e){return n+e.amount}),0)),color:"error",children:Object(C.jsx)(B.a,{})})}),Object(C.jsx)($.a,{container:!0,spacing:3,children:null===d||void 0===d?void 0:d.map((function(n){return Object(C.jsx)($.a,{item:!0,xs:12,sm:4,children:Object(C.jsx)(A,{item:n,handleAddToCart:O})},n.id)}))})]})},P=new m.QueryClient;d.a.render(Object(C.jsx)(m.QueryClientProvider,{client:P,children:Object(C.jsx)(J,{})}),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.442332c8.chunk.js.map