(this.webpackJsonp53todoapp=this.webpackJsonp53todoapp||[]).push([[0],{59:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),a=t(28),o=t.n(a),r=t(7),l=t(22),s=t(8),j=t(4),d=t(31);t(50),t(60);d.a.initializeApp({apiKey:"AIzaSyCKgv7ngh_sXHLqLemPL9xXCqqL6rWIUBA",authDomain:"todo-app-3802b.firebaseapp.com",projectId:"todo-app-3802b",storageBucket:"todo-app-3802b.appspot.com",messagingSenderId:"531781333596",appId:"1:531781333596:web:944c00c3ee70f22043ac99"});var b,p,u,O,x,h,f,g,m,v,k,w,C,F,y,D,S,z,E,T,Y,I,H,q,M,A,L,P,N,U,B,W,J,K,X,_,G,Q,R,V,Z,$,ee,ne,te,ce,ie,ae,oe,re,le,se,je=d.a,de=t(2),be=i.a.createContext(),pe=t(3),ue=pe.c.h1(b||(b=Object(j.a)(["\n text-align: center;\n margin-top:10px;\n font-size: 45px;\n width: 100%;\n "]))),Oe=pe.c.div(p||(p=Object(j.a)(["\n display: flex;\n flex-direction: column;\n align-items: center;\n "]))),xe=pe.c.div(u||(u=Object(j.a)(["\n display: flex;\n flex-direction: column;\n padding:10px;\n width: 60%;\n "]))),he=pe.c.input(O||(O=Object(j.a)(["\n padding:5px;\n font-size:20px;\n border:1px solid black;\n "]))),fe=pe.c.div(x||(x=Object(j.a)(["\n display: flex;\n flex-direction: column;\n align-items: center;\n "]))),ge=pe.c.button(h||(h=Object(j.a)(["\n width: 100%;\n margin-top:10px;\n margin-bottom:30px;\n padding:15px;\n font-size:18px;\n border:1px solid black;\n background-color:#00DD00;\n color:white;\n cursor:pointer;pointer;\n :hover{\n     background-color:#CCFFFF;\n     color:black\n }\n "]))),me=pe.c.div(f||(f=Object(j.a)(["\n width: 100%;\n font-size:18px;\n cursor:pointer;\n :hover{\n     color:blue;\n }\n "]))),ve=function(e){var n=e.history,t=Object(c.useState)(""),i=Object(r.a)(t,2),a=i[0],o=i[1],l=Object(c.useState)(""),j=Object(r.a)(l,2),d=j[0],b=j[1];return Object(c.useContext)(be)?Object(de.jsx)(s.a,{to:"/"}):Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(ue,{children:"Login"}),Object(de.jsx)("form",{onSubmit:function(e){e.preventDefault(),je.auth().signInWithEmailAndPassword(a,d).then((function(){n.push("/")})).catch((function(e){console.log(e),alert(e)}))},children:Object(de.jsxs)(Oe,{children:[Object(de.jsxs)(xe,{children:[Object(de.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(de.jsx)(he,{type:"email",id:"email",name:"email",placeholder:"Email",onChange:function(e){o(e.target.value)}})]}),Object(de.jsxs)(xe,{children:[Object(de.jsx)("label",{htmlFor:"password",children:"Password"}),Object(de.jsx)(he,{type:"password",id:"password",name:"password",placeholder:"password",onChange:function(e){b(e.target.value)}})]}),Object(de.jsxs)(fe,{children:[Object(de.jsx)(ge,{type:"submit",children:"Login"}),Object(de.jsx)(me,{onClick:function(){n.push("/signup")},children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u304a\u6301\u3061\u3067\u306a\u3044\u65b9\u306f\u3053\u3061\u3089"})]})]})})]})},ke=pe.c.h1(g||(g=Object(j.a)(["\n text-align: center;\n margin-top:10px;\n font-size: 45px;\n width: 100%;\n "]))),we=pe.c.div(m||(m=Object(j.a)(["\n display: flex;\n flex-direction: column;\n align-items: center;\n "]))),Ce=pe.c.div(v||(v=Object(j.a)(["\n display: flex;\n flex-direction: column;\n padding:10px;\n width: 60%;\n "]))),Fe=pe.c.input(k||(k=Object(j.a)(["\n padding:5px;\n font-size:20px;\n border:1px solid black;\n "]))),ye=pe.c.div(w||(w=Object(j.a)(["\n display: flex;\n flex-direction: column;\n align-items: center;\n "]))),De=pe.c.button(C||(C=Object(j.a)(["\n width: 100%;\n margin-top:10px;\n margin-bottom:30px;\n padding:15px;\n font-size:18px;\n border:1px solid black;\n background-color:#00DD00;\n color:white;\n cursor:pointer;pointer;\n :hover{\n     background-color:#CCFFFF;\n     color:black\n }\n "]))),Se=pe.c.div(F||(F=Object(j.a)(["\n width: 100%;\n font-size:18px;\n cursor:pointer;\n :hover{\n     color:blue;\n }\n "]))),ze=function(e){var n=e.history,t=Object(c.useState)(""),i=Object(r.a)(t,2),a=i[0],o=i[1],l=Object(c.useState)(""),s=Object(r.a)(l,2),j=s[0],d=s[1];return Object(de.jsxs)("div",{children:[Object(de.jsx)(ke,{children:"Sign Up"}),Object(de.jsx)("form",{onSubmit:function(e){e.preventDefault(),je.auth().createUserWithEmailAndPassword(a,j).then((function(){n.push("/")})).catch((function(e){o(""),d(""),alert(e),console.log(e)}))},children:Object(de.jsxs)(we,{children:[Object(de.jsxs)(Ce,{children:[Object(de.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(de.jsx)(Fe,{onChange:function(e){o(e.target.value)},name:"email",type:"email",id:"email",placeholder:"Email"})]}),Object(de.jsxs)(Ce,{children:[Object(de.jsx)("label",{htmlFor:"password",children:"Password"}),Object(de.jsx)(Fe,{onChange:function(e){d(e.target.value)},name:"password",type:"password",id:"password",placeholder:"Password"})]}),Object(de.jsxs)(ye,{children:[Object(de.jsx)(De,{type:"submit",children:"Sign Up"}),Object(de.jsx)(Se,{onClick:function(e){n.push("/login")},children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u304a\u6301\u3061\u306e\u65b9\u306f\u3053\u3061\u3089"})]})]})})]})},Ee=t(25),Te=(t(27),t(23)),Ye=t.n(Te),Ie=pe.c.div(y||(y=Object(j.a)(["\n\n"]))),He=pe.c.div(D||(D=Object(j.a)(["\nwidth:80%;\nfont-size:20px;\nmargin:0 auto;\nmargin-top:10px;\n"]))),qe=pe.c.div(S||(S=Object(j.a)(["\ndisplay:flex;\nflex-direction:column;\n"]))),Me=pe.c.div(z||(z=Object(j.a)(["\nwidth:80%;\nmargin:0 auto;\nmargin-top:10px;\n"]))),Ae=pe.c.div(E||(E=Object(j.a)(["\nwidth:80%;\nmargin:0 auto;\nmargin-top:10px;\n"]))),Le=pe.c.div(T||(T=Object(j.a)(["\nwidth:80%;\nmargin:0 auto;\nmargin-top:10px;\n"]))),Pe=pe.c.textarea(Y||(Y=Object(j.a)(["\nwidth:80%;\nheight:100px;\ndisplay:block;\nmargin:0 auto;\nmargin-top:10px;\nbox-sizing:border-box;\nborder:1px solid black;\n"]))),Ne=pe.c.button(I||(I=Object(j.a)(["\nmargin-top:2px;\ncolor:white;\nbackground-color:#00DD00;\ncursor:pointer;\n    :hover{\n        opacity:0.8;\n        background-color:#CCFFFF;\n        color:black\n    }\n"]))),Ue=pe.c.div(H||(H=Object(j.a)(["\n    margin:0 auto;\n    margin-top:10px;\n    width:80%;\n    display:flex;\n    flex-direction:column;\n\n"]))),Be=function(){var e=Object(s.f)(),n=Object(s.h)().id,t=Object(c.useState)(),i=Object(r.a)(t,2),a=i[0],o=i[1],l=Object(c.useState)(!1),j=Object(r.a)(l,2),d=j[0],b=j[1];Object(c.useEffect)((function(){je.firestore().collection("tasks").doc(n).get().then((function(e){o(e.data())}))}),[]);var p=function(e){e.preventDefault(),je.firestore().collection("tasks").doc(n).update({detail:a.detail}),b(!1)};return Object(de.jsx)(de.Fragment,{children:Object(de.jsxs)(Ie,{children:[Object(de.jsxs)(qe,{children:[Object(de.jsxs)(Me,{children:[Object(de.jsx)("div",{children:"\u30bf\u30b9\u30af\u540d"}),Object(de.jsx)("div",{children:null===a||void 0===a?void 0:a.taskName})]}),Object(de.jsxs)(Ae,{children:[Object(de.jsx)("div",{children:"\u671f\u9650"}),Object(de.jsx)("div",{children:Ye()(null===a||void 0===a?void 0:a.deadline).format("YYYY/MM/DD HH:mm")})]}),Object(de.jsxs)(Le,{children:[Object(de.jsx)("div",{children:"\u304b\u304b\u308b\u6642\u9593"}),Object(de.jsxs)("div",{children:[null===a||void 0===a?void 0:a.requiredTime," min"]})]}),Object(de.jsx)(He,{children:"\u8a73\u7d30"})]}),Object(de.jsx)(Pe,{value:null===a||void 0===a?void 0:a.detail,onChange:function(e){o(Object(Ee.a)(Object(Ee.a)({},a),{},{detail:e.target.value})),b(!0)}}),Object(de.jsxs)(Ue,{children:[Object(de.jsx)(Ne,{onClick:p,children:"\u4fdd\u5b58"}),Object(de.jsx)(Ne,{onClick:function(e){e.preventDefault(),o(Object(Ee.a)(Object(Ee.a)({},a),{},{detail:""})),b(!0)},children:"\u524a\u9664"}),Object(de.jsx)(Ne,{onClick:function(n){n.preventDefault(),d&&window.confirm("\u5185\u5bb9\u306b\u5909\u66f4\u304c\u3042\u308a\u307e\u3059\u3002\u4fdd\u5b58\u3057\u307e\u3059\u304b?")&&p(n),e.push("/")},children:"\u9589\u3058\u308b"})]})]})})},We=t(29),Je=t.n(We),Ke=pe.c.div(q||(q=Object(j.a)(["\n    height:72px;\n    margin-left:20px;\n    pointer:30px;\n    display:flex;\n    font-size:30px;\n    align-items:center;\n"]))),Xe=pe.c.div(M||(M=Object(j.a)(["\n    display:flex;\n    align-items:center;\n    margin-top:30px;\n    background-color:#00CC99;\n    height:70px;\n"]))),_e=pe.c.div(A||(A=Object(j.a)(["\n    height:50px;\n    display:flex;\n    align-items:center;\n    background-color:#CCFFFF;\n    margin-top:5px;\n"]))),Ge=pe.c.div(L||(L=Object(j.a)(["\n    margin-left: 20px;\n"]))),Qe=Object(pe.c)(Ge)(P||(P=Object(j.a)(["\n    width:20%;\n"]))),Re=Object(pe.c)(Ge)(N||(N=Object(j.a)(["\n    width:20%;\n"]))),Ve=Object(pe.c)(Ge)(U||(U=Object(j.a)(["\n    width:35%;\n"]))),Ze=Object(pe.c)(Ge)(B||(B=Object(j.a)(["\n    width:50px;\n    cursor:pointer;\n        :hover{\n            opacity:0.8;\n            color:#0066FF;\n        }\n"]))),$e=Object(pe.c)(Je.a)(W||(W=Object(j.a)(["\n    font-size:18px;\n    cursor:pointer;\n        :hover{\n            opacity:0.8;\n            color:#0066FF;\n\n        }\n"]))),en=function(e){var n=e.getTasks,t=Object(c.useState)([]),i=Object(r.a)(t,2),a=i[0],o=i[1];Object(c.useEffect)((function(){n&&o(n.filter((function(e){return!0===e.isCompleted})))}),[n]),console.log(a),console.log(n);return Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(Ke,{children:"\u5c65\u6b74"}),Object(de.jsxs)(Xe,{children:[Object(de.jsx)(Qe,{children:"\u4ef6\u540d"}),Object(de.jsx)(Re,{children:"\u6240\u8981\u6642\u9593"}),Object(de.jsx)(Ve,{children:"\u671f\u65e5"})]}),Object(de.jsx)("ul",{children:a.map((function(e){return Object(de.jsxs)(_e,{children:[Object(de.jsxs)(Qe,{children:[e.taskName," "]}),Object(de.jsxs)(Re,{children:[e.requiredTime," min"]}),Object(de.jsx)(Ve,{children:Ye()(e.deadline).format("YYYY/MM/DD HH:mm")}),Object(de.jsx)(Ze,{onClick:function(){return n=e.id,void je.firestore().collection("tasks").doc(n).update({isCompleted:!1});var n},children:"\u5fa9\u5143"}),Object(de.jsx)($e,{onClick:function(){return n=e.id,void je.firestore().collection("tasks").doc(n).delete();var n},value:"\u524a\u9664"})]})}))})]})},nn=pe.c.li(J||(J=Object(j.a)(["\n    list-style : none;\n    padding: 0 30px;\n    cursor: pointer;\n\n"]))),tn=pe.c.ul(K||(K=Object(j.a)(["\n    display: flex;\n    justify-content: flex-end;\n    align-items:center;\n    background-color: #99FFCC;\n    height:30px;\n"]))),cn=function(){var e=Object(s.f)(),n=Object(s.g)();return Object(de.jsx)(de.Fragment,{children:"/"===n.pathname||"/taskHistory"===n.pathname?Object(de.jsxs)(tn,{children:[Object(de.jsx)(nn,{onClick:function(){e.push("login")},children:"\u30ed\u30b0\u30a2\u30a6\u30c8"}),"/"===n.pathname?Object(de.jsx)(nn,{onClick:function(){e.push("/taskHistory")},children:"\u5c65\u6b74"}):Object(de.jsx)(nn,{onClick:function(){e.push("/")},children:"\u623b\u308b"})]}):Object(de.jsx)(de.Fragment,{})})},an=t(44),on=t(42),rn=t.n(on),ln=pe.c.div(X||(X=Object(j.a)(["\ndisplay:flex;\njustify-content:space-between;\nmargin-top:20px;\n"]))),sn=pe.c.div(_||(_=Object(j.a)(["\nmargin-left: 20px;\n"]))),jn=pe.c.div(G||(G=Object(j.a)(["\nmargin-left: 20px;\n"]))),dn=pe.c.div(Q||(Q=Object(j.a)(["\nmargin-left: 20px;\n"]))),bn=pe.c.input(R||(R=Object(j.a)(["\nbox-sizing:border-box;\nborder:solid 1px black;\nheight:20px;\n"]))),pn=pe.c.select(V||(V=Object(j.a)(["\nborder:solid 1px black;\nheight:20px;\n"]))),un=pe.c.input(Z||(Z=Object(j.a)(["\nbox-sizing:border-box;\nborder:solid 1px black;\nheight:20px;\n"]))),On=pe.c.div($||($=Object(j.a)(["\ncursor:pointer;\nmargin:auto 0;\nmargin-right:20px;\n"]))),xn=pe.c.div(ee||(ee=Object(j.a)(["\ncolor:",";\n"])),(function(e){return e.isInput?"transparent":"red"})),hn=pe.c.div(ne||(ne=Object(j.a)(["\nwidth: 100%;\n"]))),fn=pe.c.div(te||(te=Object(j.a)(["\ndisplay:flex;\nalign-items:center;\nmargin-top:30px;\nbackground-color:#00CC99;\nheight:70px;\n"]))),gn=pe.c.div(ce||(ce=Object(j.a)(["\nheight:50px;\ndisplay:flex;\nalign-items:center;\nbackground-color:#CCFFFF;\nmargin-top:5px;\n"]))),mn=pe.c.div(ie||(ie=Object(j.a)(["\nmargin-left: 20px;\n"]))),vn=Object(pe.c)(mn)(ae||(ae=Object(j.a)(["\nwidth:20%;\n"]))),kn=Object(pe.c)(mn)(oe||(oe=Object(j.a)(["\nwidth:20%;\n"]))),wn=Object(pe.c)(mn)(re||(re=Object(j.a)(["\nwidth:35%;\n"]))),Cn=Object(pe.c)(mn)(le||(le=Object(j.a)(["\nwidth:50px;\ncursor:pointer;\n    :hover{\n        opacity:0.8;\n        color:#0066FF;\n    }\n"]))),Fn=Object(pe.c)(Je.a)(se||(se=Object(j.a)(["\nfont-size:18px;\ncursor:pointer;\n    :hover{\n        opacity:0.8;\n        color:#0066FF;\n\n    }\n"]))),yn=function(e){var n=e.getTasks,t=Object(s.f)(),i=Object(c.useState)(),a=Object(r.a)(i,2),o=a[0],l=a[1],j=Object(c.useState)(""),d=Object(r.a)(j,2),b=d[0],p=d[1],u=Object(c.useState)("0"),O=Object(r.a)(u,2),x=O[0],h=O[1],f=Object(c.useState)(""),g=Object(r.a)(f,2),m=g[0],v=g[1],k=Object(c.useState)(!0),w=Object(r.a)(k,2),C=w[0],F=w[1],y=Object(c.useState)(!0),D=Object(r.a)(y,2),S=D[0],z=D[1],E=Object(c.useState)(!0),T=Object(r.a)(E,2),Y=T[0],I=T[1];Object(c.useEffect)((function(){n&&(H(n.filter((function(e){return!1===e.isCompleted}))),console.log(n),console.log(o))}),[n]);var H=function(e){var n=(new Date).getTime();null===e||void 0===e||e.forEach((function(e){return e.difference=Date.parse(new Date(e.deadline))-n-6e4*e.requiredTime.slice(0,1)})),console.log(e),null===e||void 0===e||e.sort((function(e,n){return e.difference-n.difference})),l(e)};return console.log(n),console.log(o),Object(de.jsxs)(de.Fragment,{children:[Object(de.jsxs)(ln,{children:[Object(de.jsxs)(sn,{children:[Object(de.jsx)("div",{children:"\u4ef6\u540d"}),Object(de.jsx)(bn,{value:b,placeholder:"Add New Task",onChange:function(e){p(e.target.value)}}),Object(de.jsx)(xn,{isInput:C,children:"\u4ef6\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"})]}),Object(de.jsxs)(jn,{children:[Object(de.jsx)("div",{children:"\u6240\u8981\u6642\u9593"}),Object(de.jsx)(pn,{onChange:function(e){return h(e.target.value)},value:x,children:[{value:"0"},{value:"5"},{value:"10"},{value:"15"},{value:"20"},{value:"30"},{value:"35"},{value:"40"},{value:"45"},{value:"50"},{value:"55"},{value:"60"}].map((function(e){return Object(de.jsx)("option",{children:e.value},e.value)}))})," min",Object(de.jsx)(xn,{isInput:S,children:"\u6240\u8981\u6642\u9593\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"})]}),Object(de.jsxs)(dn,{children:[Object(de.jsx)("div",{children:"\u671f\u65e5"}),Object(de.jsx)(un,{type:"datetime-local",value:m,onChange:function(e){return v(e.target.value)}}),Object(de.jsx)(xn,{isInput:Y,children:"\u671f\u65e5\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})]}),Object(de.jsx)(On,{children:Object(de.jsx)(rn.a,{onClick:function(e){e.preventDefault();var n=Object(an.a)();F(!!b),z("0"!==x),I(!!m),b&&"0"!==x&&m&&(je.firestore().collection("tasks").doc(n).set({taskName:b,deadline:m,requiredTime:x,isCompleted:!1,id:n}),p(""),h(""),v(""),F(!0),z(!0),I(!0))}})})]}),Object(de.jsxs)("ul",{children:[Object(de.jsxs)(fn,{children:[Object(de.jsx)(vn,{children:"\u4ef6\u540d"}),Object(de.jsx)(kn,{children:"\u6240\u8981\u6642\u9593"}),Object(de.jsx)(wn,{children:"\u671f\u65e5"})]}),Object(de.jsx)(hn,{children:null===o||void 0===o?void 0:o.map((function(e){return Object(de.jsxs)(gn,{children:[Object(de.jsxs)(vn,{children:[e.taskName," "]}),Object(de.jsxs)(kn,{children:[e.requiredTime," min"]}),Object(de.jsx)(wn,{children:Ye()(e.deadline).format("YYYY/MM/DD HH:mm")}),Object(de.jsx)(Cn,{onClick:function(){return n=e.id,void t.push("/taskDetail/".concat(n));var n},children:"\u8a73\u7d30"}),Object(de.jsx)(Fn,{onClick:function(){return n=e.id,void je.firestore().collection("tasks").doc(n).update({isCompleted:!0});var n},value:"\u524a\u9664"})]})}))})]})]})},Dn=t(43);var Sn=function(){var e=Object(c.useState)(),n=Object(r.a)(e,2),t=n[0],i=n[1];return Object(c.useEffect)((function(){je.firestore().collection("tasks").onSnapshot((function(e){var n=e.docs.map((function(e){return e.data()}));console.log(n),i(n)}))}),[]),Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)(Dn.a,{}),Object(de.jsxs)(l.a,{children:[Object(de.jsx)(cn,{}),Object(de.jsx)(s.b,{exact:!0,path:"/",children:Object(de.jsx)(yn,{getTasks:t})}),Object(de.jsx)(s.b,{exact:!0,path:"/login",component:ve}),Object(de.jsx)(s.b,{exact:!0,path:"/signup",component:ze}),Object(de.jsx)(s.b,{exact:!0,path:"/taskDetail/:id",children:Object(de.jsx)(Be,{getTasks:t})}),Object(de.jsx)(s.b,{exact:!0,path:"/taskHistory",children:Object(de.jsx)(en,{getTasks:t})}),Object(de.jsx)(s.b,{path:"*",children:Object(de.jsx)(s.a,{to:"/login"})})]})]})};o.a.render(Object(de.jsx)(i.a.StrictMode,{children:Object(de.jsx)(Sn,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.b8181f27.chunk.js.map