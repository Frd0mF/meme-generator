(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),o=(n(12),n(13),n.p+"static/media/meme-face.041f417d.png"),m=n(0);function s(){return Object(m.jsxs)("nav",{className:"navbar",children:[Object(m.jsx)("img",{src:o,alt:"meme-face"}),Object(m.jsx)("h2",{children:"Meme Generator"})]})}var r=n(3),i=n(2),j=n(4),b=n(1),u=n.n(b),l=n(7),x="http://i.imgflip.com/1bij.jpg";function p(){var e=u.a.useState({topText:"",bottomText:"",randomMeme:"http://i.imgflip.com/1bij.jpg"}),t=Object(j.a)(e,2),n=t[0],a=t[1],c=u.a.useState({}),o=Object(j.a)(c,2),s=o[0],b=o[1];u.a.useEffect((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){return b(e.data.memes)}))}),[]);var p=u.a.useState({topText:"",bottomText:""}),h=Object(j.a)(p,2),O=h[0],f=h[1];function d(e){var t=e.target,n=t.name,a=t.value;f((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(r.a)({},n,a))}))}return Object(m.jsx)("main",{children:Object(m.jsxs)("div",{className:"form",children:[Object(m.jsx)("input",{type:"text",className:"form-input",placeholder:"Top Text",name:"topText",value:O.topText,onChange:d}),Object(m.jsx)("input",{type:"text",className:"form-input",placeholder:"Bottom Text",name:"bottomText",value:O.bottomText,onChange:d}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"meme-btn",onClick:function(){var e=s,t=Math.floor(Math.random()*e.length);return x=e[t].url,a((function(e){return Object(i.a)(Object(i.a)({},e),{},{randomMeme:x})})),x},children:" Get a new meme "}),Object(m.jsx)("img",{className:"meme-img",src:n.randomMeme,alt:"meme"}),Object(m.jsx)("h1",{className:"meme-text top",children:""===O.topText?"Insert top text":O.topText}),Object(m.jsx)("h1",{className:"meme-text bottom",children:""===O.bottomText?"Insert bottom text":O.bottomText}),Object(m.jsx)("input",{className:"download-btn",type:"button",onClick:function(){Object(l.saveAs)(x,"image.jpg")},value:"Download"})]})})}function h(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(s,{}),Object(m.jsx)(p,{})]})}c.a.render(Object(m.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9a966e6e.chunk.js.map