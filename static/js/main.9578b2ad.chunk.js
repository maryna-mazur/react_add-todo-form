(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(8),i=n.n(a),r=n(5),s=n(2),c=n(7),o=n(1),l=(n(14),n(9)),d=n.n(l),u=n(0),m=function(e){var t=e.todoUser;return Object(u.jsx)("a",{className:"UserInfo",href:t?t.email:void 0,children:t?t.name:void 0})},j=function(e){var t=e.todo,n=t.id,a=t.title,i=t.completed,r=t.user;return Object(u.jsxs)("article",{"data-id":n,className:d()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:a}),Object(u.jsx)(m,{todoUser:r})]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:Object(u.jsx)("ul",{style:{listStyleType:"none",padding:0},children:t.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(j,{todo:e})},e.id)}))})})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];var f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:(t=e.userId,h.find((function(e){return e.id===t}))||null)});var t})),O=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(r.a)(h).map((function(e){return e.name}));i.unshift("Choose a user");var c=Object(o.useState)("0"),l=Object(s.a)(c,2),d=l[0],m=l[1],j=Object(o.useState)(""),O=Object(s.a)(j,2),p=O[0],x=O[1],v=Object(o.useState)(f),y=Object(s.a)(v,2),S=y[0],N=y[1],g=Object(o.useState)(!1),I=Object(s.a)(g,2),C=I[0],T=I[1],_=C&&!n,k=C&&"0"===d,D={id:f.sort((function(e,t){return t.id-e.id}))[0].id+1,title:n,userId:function(){var e=Object(r.a)(h).find((function(e){return e.name===p}));return e?e.id:null}(),completed:!1,user:h.find((function(e){return e.name===p}))};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),C&&!k&&!_){var t=[].concat(Object(r.a)(S),[D]);N(t),a(""),m("0"),T(!1)}},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("label",{children:["Title: ",Object(u.jsx)("input",{type:"text","data-cy":"titleInput",value:n,placeholder:"Enter a title",onChange:function(e){a(e.target.value)}})]}),_&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("label",{children:["User: ",Object(u.jsx)("select",{"data-cy":"userSelect",name:"selectedUser",value:d,onChange:function(e){m(e.target.value),x(e.target.selectedOptions[0].innerText)},children:i.map((function(e){return Object(u.jsx)("option",{value:i.indexOf(e),disabled:0===i.indexOf(e),children:e},e)}))})]}),k&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",onClick:function(){T(!0)},children:"Add"})]}),Object(u.jsx)(b,{todos:S})]})};i.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9578b2ad.chunk.js.map