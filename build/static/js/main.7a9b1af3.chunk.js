(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{20:function(t,e,n){t.exports={link:"Navigation_link__1TrI1",activeLink:"Navigation_activeLink__2gumN Navigation_link__1TrI1"}},26:function(t,e,n){t.exports={container:"Container_container__TK92G",title:"Container_title__V53L_"}},27:function(t,e,n){t.exports={link:"AuthNav_link__1aB9k",activeLink:"AuthNav_activeLink__2lPPG AuthNav_link__1aB9k"}},28:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return U}));var r={};n.r(r),n.d(r,"fetchContacts",(function(){return h})),n.d(r,"addContact",(function(){return p})),n.d(r,"deleteContact",(function(){return O}));var c={};n.r(c),n.d(c,"getContacts",(function(){return g})),n.d(c,"getFilter",(function(){return v})),n.d(c,"getLoading",(function(){return x})),n.d(c,"getVisibleContacts",(function(){return m}));var a={};n.r(a),n.d(a,"changeFilter",(function(){return k}));var u=n(10),i=n.n(u),o=n(15),s=n(4),l=n(13),d=n.n(l);d.a.defaults.baseURL="https://connections-api.herokuapp.com";var j,f,b,h=Object(s.c)("contacts/fetchContacts",function(){var t=Object(o.a)(i.a.mark((function t(e,n){var r,c,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,d.a.get("/contacts");case 4:return c=t.sent,a=c.data,t.abrupt("return",a);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),p=Object(s.c)("contacts/addContact",function(){var t=Object(o.a)(i.a.mark((function t(e,n){var r,c,a,u,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.name,c=e.number,a=n.rejectWithValue,t.prev=2,t.next=5,d.a.post("/contacts",{name:r,number:c});case 5:return u=t.sent,o=u.data,t.abrupt("return",o);case 10:return t.prev=10,t.t0=t.catch(2),t.abrupt("return",a(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,n){return t.apply(this,arguments)}}()),O=Object(s.c)("contacts/deleteContact",function(){var t=Object(o.a)(i.a.mark((function t(e,n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,d.a.delete("/contacts/".concat(e));case 4:return t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),g=function(t){return t.contacts.items},v=function(t){return t.contacts.filter},x=function(t){return t.contacts.loading},m=function(t){var e=g(t),n=v(t).toLowerCase().trim();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},k=Object(s.b)("contacts/filter"),_=n(3),C=n(44),L=n(8),w=Object(s.d)([],(j={},Object(_.a)(j,h.fulfilled,(function(t,e){return e.payload})),Object(_.a)(j,p.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(C.a)(t),[n])})),Object(_.a)(j,O.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),j)),y=Object(s.d)(!1,(f={},Object(_.a)(f,h.pending,(function(){return!0})),Object(_.a)(f,h.fulfilled,(function(){return!1})),Object(_.a)(f,h.rejected,(function(){return!1})),Object(_.a)(f,p.pending,(function(){return!0})),Object(_.a)(f,p.fulfilled,(function(){return!1})),Object(_.a)(f,p.rejected,(function(){return!1})),Object(_.a)(f,O.pending,(function(){return!0})),Object(_.a)(f,O.fulfilled,(function(){return!1})),Object(_.a)(f,O.rejected,(function(){return!1})),f)),I=Object(s.d)("",Object(_.a)({},k,(function(t,e){return e.payload}))),N=Object(s.d)(null,(b={},Object(_.a)(b,h.rejected,(function(t,e){return e.payload})),Object(_.a)(b,h.rejected,(function(){return null})),b)),U=Object(L.b)({items:w,filter:I,loading:y,error:N})},43:function(t,e,n){t.exports={loader:"Loader_loader__3feav"}},7:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"c",(function(){return O})),n.d(e,"b",(function(){return v}));var r=n(10),c=n.n(r),a=n(15),u=n(13),i=n.n(u),o=n(4);i.a.defaults.baseURL="https://connections-api.herokuapp.com";var s,l=function(t){i.a.defaults.headers.common.Authorization="Bearer ".concat(t)},d=function(){i.a.defaults.headers.common.Authorization=""},j=Object(o.c)("auth/register",function(){var t=Object(a.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/users/signup",e);case 3:return n=t.sent,r=n.data,l(r.token),t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),f=Object(o.c)("auth/login",function(){var t=Object(a.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/users/login",e);case 3:return n=t.sent,r=n.data,l(r.token),t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),b=Object(o.c)("auth/logout",Object(a.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/users/logout");case 3:d(),t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))),h=Object(o.c)("auth/refresh",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,u,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.getState(),null!==(a=r.auth.token)){t.next=4;break}return t.abrupt("return",n.rejectWithValue());case 4:return l(a),t.prev=5,t.next=8,i.a.get("/users/current");case 8:return u=t.sent,o=u.data,t.abrupt("return",o);case 13:t.prev=13,t.t0=t.catch(5);case 15:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}()),p={register:j,logIn:f,logOut:b,fetchCurrentUser:h},O={getIsLoggedIn:function(t){return t.auth.isLoggedIn},getUserName:function(t){return t.auth.user.name},getIsFetchingCurrentUser:function(t){return t.auth.isFetchingCurrentUser}},g=n(3),v=Object(o.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFechingCurrentUser:!1},extraReducers:(s={},Object(g.a)(s,p.register.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(g.a)(s,p.logIn.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(g.a)(s,p.logOut.fulfilled,(function(t,e){t.user={name:null,email:null},t.token=null,t.isLoggedIn=!1})),Object(g.a)(s,p.fetchCurrentUser.pending,(function(t,e){t.isFechingCurrentUser=!0})),Object(g.a)(s,p.fetchCurrentUser.fulfilled,(function(t,e){t.user=e.payload,t.isLoggedIn=!0,t.isFechingCurrentUser=!1})),Object(g.a)(s,p.fetchCurrentUser.rejected,(function(t,e){t.isFechingCurrentUser=!1})),s)}).reducer},76:function(t,e,n){},96:function(t,e,n){},97:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(23),u=n.n(a),i=n(14),o=n(38),s=n(6),l=n(4),d=n(40),j=n.n(d),f=n(16),b=n(41),h=n.n(b),p=n(28),O=n(7),g={key:"auth",storage:h.a,whitelist:["token"]},v=Object(l.a)({reducer:{auth:Object(f.g)(g,O.b),contacts:p.c},middleware:function(t){return t({serializableCheck:{ignoredActions:[f.a,f.f,f.b,f.c,f.d,f.e]}}).concat(j.a)},devTools:!1}),x=Object(f.h)(v),m=(n(76),n(2)),k=n(29),_=n(26),C=n.n(_),L=n(1);function w(t){var e=t.title,n=t.children;return Object(L.jsxs)("section",{className:C.a.container,children:[e&&Object(L.jsx)("h2",{className:C.a.title,children:e}),n]})}var y=n(20),I=n.n(y);function N(){var t=Object(s.c)(O.c.getIsLoggedIn);return Object(L.jsxs)("nav",{children:[Object(L.jsx)(i.b,{to:"/",className:function(t){return t.isActive?I.a.activeLink:I.a.link},children:"Home"}),t&&Object(L.jsx)(i.b,{to:"/contacts",className:function(t){return t.isActive?I.a.activeLink:I.a.link},children:"Contacts"})]})}var U=n.p+"static/media/defaultAvatar.45ca501c.png";function F(){var t=Object(s.b)(),e=Object(s.c)(O.c.getUserName),n=U;return Object(L.jsxs)("div",{children:[Object(L.jsx)("img",{src:n,alt:"avatar",width:"28"}),Object(L.jsxs)("span",{children:["Welcome, ","".concat(e,"!")]}),Object(L.jsx)("button",{type:"button",onClick:function(){return t(O.a.logOut())},children:"Logout"})]})}var A=n(27),T=n.n(A),z=function(t){return t.isActive?T.a.activeLink:T.a.link};function B(){return Object(L.jsxs)("nav",{children:[Object(L.jsx)(i.b,{to:"/register",className:z,children:"Sign up"}),Object(L.jsx)(i.b,{to:"/login",className:z,children:"Login"})]})}function V(){var t=Object(s.c)(O.c.getIsLoggedIn);return Object(L.jsxs)("header",{children:[Object(L.jsx)(N,{}),t?Object(L.jsx)(F,{}):Object(L.jsx)(B,{})]})}var S=n(42),W=n.n(S),R=n(43),E=n.n(R),G=function(){return Object(L.jsx)("div",{className:E.a.loader,children:Object(L.jsx)(W.a,{type:"BallTriangle",color:"#00BFFF",height:200,width:200,timeout:3e3})})};n(96);function J(t){var e=t.children,n=t.redirectTo,r=void 0===n?"/":n;return Object(s.c)(O.c.getIsLoggedIn)?e:Object(L.jsx)(m.a,{to:r})}function P(t){var e=t.children,n=t.restricted,r=void 0!==n&&n,c=t.redirectTo,a=void 0===c?"/":c;return Object(s.c)(O.c.getIsLoggedIn)&&r?Object(L.jsx)(m.a,{to:a}):e}var H=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,102))})),K=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,103))})),M=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,104))})),q=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,105))}));var D=function(){var t=Object(s.b)(),e=Object(s.c)(O.c.getIsFetchingCurrentUser);return Object(r.useEffect)((function(){t(O.a.fetchCurrentUser())}),[t]),!e&&Object(L.jsxs)(w,{children:[Object(L.jsx)(V,{}),Object(L.jsx)(r.Suspense,{fallback:Object(L.jsx)(G,{}),children:Object(L.jsxs)(m.d,{children:[Object(L.jsx)(m.b,{path:"/",element:Object(L.jsx)(P,{children:Object(L.jsx)(H,{})})}),Object(L.jsx)(m.b,{path:"/register",element:Object(L.jsx)(P,{restricted:!0,children:Object(L.jsx)(K,{})})}),Object(L.jsx)(m.b,{path:"/login",element:Object(L.jsx)(P,{redirectTo:"/contacts",restricted:!0,children:Object(L.jsx)(M,{})})}),Object(L.jsx)(m.b,{path:"/contacts",element:Object(L.jsx)(J,{redirectTo:"/login",children:Object(L.jsx)(q,{})})})]})}),Object(L.jsx)(k.a,{position:"top-right"})]})};u.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(s.a,{store:v,children:Object(L.jsx)(o.a,{loading:null,persistor:x,children:Object(L.jsx)(i.a,{children:Object(L.jsx)(D,{})})})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.7a9b1af3.chunk.js.map