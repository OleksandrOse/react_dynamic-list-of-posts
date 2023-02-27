(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{20:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var s=a(12),c=a.n(s),n=a(9),r=a(7),i=a(2),o=a(5),l=a.n(o),d=a(1),j=(a(18),a(19),a(20),a(6)),b=a.n(j),m=a(0),u=function(e){var t=e.posts,a=e.openPost,s=e.handleChoosePost;return Object(m.jsxs)("div",{"data-cy":"PostsList",children:[Object(m.jsx)("p",{className:"title",children:"Posts:"}),Object(m.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{className:"has-background-link-light",children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"Title"}),Object(m.jsx)("th",{children:" "})]})}),Object(m.jsx)("tbody",{children:t.map((function(e){var t=e.id,c=e.title;return Object(m.jsxs)("tr",{"data-cy":"Post",children:[Object(m.jsx)("td",{"data-cy":"PostId",children:t}),Object(m.jsx)("td",{"data-cy":"PostTitle",children:c}),Object(m.jsx)("td",{className:"has-text-right is-vcentered",children:Object(m.jsx)("button",{type:"button","data-cy":"PostButton",className:b()("button is-link",{"is-light":(null===a||void 0===a?void 0:a.id)!==t}),onClick:function(){return s(e)},children:(null===a||void 0===a?void 0:a.id)!==t?"Open":"Close"})})]},t)}))})]})]})},h=(a(22),function(){return Object(m.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(m.jsx)("div",{className:"Loader__content"})})}),O=a(4),x=a(3),p="https://mate.academy/students-api";function f(e){return new Promise((function(t){setTimeout(t,e)}))}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return a&&(s.body=JSON.stringify(a),s.headers={"Content-Type":"application/json; charset=UTF-8"}),f(300).then((function(){return fetch(p+e,s)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var N=function(e){return v(e)},y=function(e,t){return v(e,"POST",t)},g=function(e){return v(e,"DELETE")},w=function(e,t,a){setTimeout((function(){e(t)}),a)},C=function(e){var t=e.postId,a=e.setComments,s=e.setIsHasError,c=Object(d.useState)(!1),o=Object(i.a)(c,2),j=o[0],u=o[1],h="errorName",p="errorEmail",f="errorBody",v=Object(d.useState)({errorName:!1,errorEmail:!1,errorBody:!1}),N=Object(i.a)(v,2),g=N[0],C=N[1],k=g.errorName,S=g.errorBody,E=g.errorEmail,P={postId:t||0,name:"",email:"",body:""},T=Object(d.useState)(P),I=Object(i.a)(T,2),B=I[0],F=I[1],L=B.name,D=B.email,M=B.body,U=function(e){var t=e.target,a=t.name,s=t.value;L&&C(Object(x.a)(Object(x.a)({},g),{},Object(O.a)({},h,!1))),D&&C(Object(x.a)(Object(x.a)({},g),{},Object(O.a)({},p,!1))),M&&C(Object(x.a)(Object(x.a)({},g),{},Object(O.a)({},f,!1))),F(Object(x.a)(Object(x.a)({},B),{},Object(O.a)({},a,s)))},A=function(){var e=Object(r.a)(l.a.mark((function e(t){var c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),L&&D&&M){e.next=4;break}return C(Object(x.a)(Object(x.a)({},g),{},(c={},Object(O.a)(c,h,!L),Object(O.a)(c,p,!D),Object(O.a)(c,f,!M),c))),e.abrupt("return");case 4:return e.prev=4,u(!0),e.next=8,y("/comments",B);case 8:r=e.sent,a((function(e){return[].concat(Object(n.a)(e),[r])})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),s(!0),w(s,!1,3e3);case 16:return e.prev=16,u(!1),"body",F(Object(x.a)(Object(x.a)({},B),{},Object(O.a)({},"body",""))),e.finish(16);case 21:case"end":return e.stop()}}),e,null,[[4,12,16,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:A,onReset:function(e){var t;e.preventDefault(),F(P),C(Object(x.a)(Object(x.a)({},g),{},(t={},Object(O.a)(t,h,!1),Object(O.a)(t,p,!1),Object(O.a)(t,f,!1),t)))},children:[Object(m.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(m.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(m.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(m.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:b()("input",{"is-danger":k}),value:L,onChange:U}),Object(m.jsx)("span",{className:"icon is-small is-left",children:Object(m.jsx)("i",{className:"fas fa-user"})}),k&&Object(m.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(m.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),k&&Object(m.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(m.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(m.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(m.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(m.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:b()("input",{"is-danger":E}),value:D,onChange:U}),Object(m.jsx)("span",{className:"icon is-small is-left",children:Object(m.jsx)("i",{className:"fas fa-envelope"})}),E&&Object(m.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(m.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),E&&Object(m.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(m.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(m.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:b()("textarea",{"is-danger":S}),value:M,onChange:U})}),S&&Object(m.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(m.jsxs)("div",{className:"field is-grouped",children:[Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("button",{type:"submit",className:b()("button is-link",{"is-loading":j}),children:"Add"})}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("button",{type:"reset",className:"button is-link is-light",children:"Clear"})})]})]})},k=function(e){var t=e.post,a=e.comments,s=e.setComments,c=e.isLoaderComments,n=Object(d.useState)(!1),o=Object(i.a)(n,2),j=o[0],b=o[1],u=Object(d.useState)(!1),O=Object(i.a)(u,2),x=O[0],p=O[1],f=function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g("/comments/".concat(t));case 3:s((function(e){return e.filter((function(e){return e.id!==t}))})),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),p(!0),w(p,!1,3e3);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){b(!1)}),[t]),Object(m.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(m.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(m.jsxs)("div",{className:"block",children:[Object(m.jsx)("h2",{"data-cy":"PostTitle",children:"".concat(null===t||void 0===t?void 0:t.id,": ").concat(null===t||void 0===t?void 0:t.title)}),Object(m.jsx)("p",{"data-cy":"PostBody",children:null===t||void 0===t?void 0:t.body})]}),Object(m.jsxs)("div",{className:"block",children:[c&&Object(m.jsx)(h,{}),x&&Object(m.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),!c&&!x&&(a.length?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{className:"title is-4",children:"Comments:"}),a.map((function(e){var t=e.id,a=e.email,s=e.name,c=e.body;return Object(m.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(m.jsxs)("div",{className:"message-header",children:[Object(m.jsx)("a",{href:"mailto:".concat(a),"data-cy":"CommentAuthor",children:s}),Object(m.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return f(t)},children:"delete button"})]}),Object(m.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:c})]},t)}))]}):Object(m.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"})),!c&&!x&&!j&&Object(m.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return b(!0)},children:"Write a comment"})]}),j&&Object(m.jsx)(C,{postId:null===t||void 0===t?void 0:t.id,setComments:s,setIsHasError:p})]})})},S=function(e){var t=e.users,a=e.user,s=e.onSetUser,c=Object(d.useState)(!1),n=Object(i.a)(c,2),r=n[0],o=n[1];return Object(m.jsxs)("div",{"data-cy":"UserSelector",className:b()("dropdown",{"is-active":r}),children:[Object(m.jsx)("div",{className:"dropdown-trigger",children:Object(m.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return o(!0)},children:[Object(m.jsx)("span",{children:(null===a||void 0===a?void 0:a.name)||"Choose a user"}),Object(m.jsx)("span",{className:"icon is-small",children:Object(m.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(m.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(m.jsx)("ul",{className:"dropdown-content",children:t.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#user-".concat(e.id),className:"dropdown-item",onClick:function(){s(e),o(!1)},children:e.name})},e.id)}))})})]})},E=function(){var e=Object(d.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(d.useState)(null),o=Object(i.a)(c,2),j=o[0],O=o[1],x=Object(d.useState)([]),p=Object(i.a)(x,2),f=p[0],v=p[1],y=Object(d.useState)(null),g=Object(i.a)(y,2),C=g[0],E=g[1],P=Object(d.useState)([]),T=Object(i.a)(P,2),I=T[0],B=T[1],F=Object(d.useState)(!1),L=Object(i.a)(F,2),D=L[0],M=L[1],U=Object(d.useState)(!1),A=Object(i.a)(U,2),_=A[0],J=A[1],q=Object(d.useState)(!1),H=Object(i.a)(q,2),W=H[0],G=H[1];return Object(d.useEffect)((function(){B([]),C&&Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,J(!0),e.next=4,a=C.id,N("/comments?postId=".concat(a));case 4:t=e.sent,B((function(e){return[].concat(Object(n.a)(e),Object(n.a)(t))})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),G(!0),w(G,!1,3e3);case 12:return e.prev=12,J(!1),e.finish(12);case 15:case"end":return e.stop()}var a}),e,null,[[0,8,12,15]])})))()}),[C]),Object(d.useEffect)((function(){E(null),j&&Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,M(!0),e.next=4,a=j.id,N("/posts?userId=".concat(a));case 4:t=e.sent,v(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),G(!0),w(G,!1,3e3);case 12:return e.prev=12,M(!1),e.finish(12);case 15:case"end":return e.stop()}var a}),e,null,[[0,8,12,15]])})))()}),[j]),Object(d.useEffect)((function(){Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N("/users");case 3:t=e.sent,s(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),G(!0),w(G,!1,3e3);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),Object(m.jsx)("main",{className:"section",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"tile is-ancestor",children:[Object(m.jsx)("div",{className:"tile is-parent",children:Object(m.jsxs)("div",{className:"tile is-child box is-success",children:[Object(m.jsx)("div",{className:"block",children:Object(m.jsx)(S,{users:a,user:j,onSetUser:O})}),Object(m.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!j&&Object(m.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),D&&Object(m.jsx)(h,{}),W&&Object(m.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),!W&&j&&!D&&(f.length?Object(m.jsx)(u,{posts:f,openPost:C,handleChoosePost:function(e){e.id!==(null===C||void 0===C?void 0:C.id)?E(e):E(null)}}):Object(m.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}))]})]})}),C&&Object(m.jsx)("div",{"data-cy":"Sidebar",className:b()("tile","is-parent","is-8-desktop","Sidebar","Sidebar--open"),children:Object(m.jsx)("div",{className:"tile is-child box is-success ",children:Object(m.jsx)(k,{post:C,comments:I,setComments:B,isLoaderComments:_})})})]})})})};c.a.render(Object(m.jsx)(E,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.88763ce1.chunk.js.map