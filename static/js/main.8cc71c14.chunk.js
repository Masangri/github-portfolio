(this["webpackJsonpmasangri.github.io"]=this["webpackJsonpmasangri.github.io"]||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(3),i=n(1),a=n(0),r=Object(i.createContext)(),l=function(e){var t=e.children,n=Object(i.useState)("light"),c=Object(s.a)(n,2),l=c[0],o=c[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://masangri.github.io",j="MJ.",b="Mas",h="Software Developer, Technical Artist",d="Focused on coding solutions in the digital media/entertinament & Web3 ecosystem.",u="https://frentity.com/shared/Masaki_Jeffrey_Resume_Web3.pdf",m={linkedin:"https://linkedin.com/in/masakijeffrey/",github:"https://github.com/Masangri/"},f=[{name:"NFT Blender",description:"A growing set of useful tools for Blender that utilizes the full scope of Python 3 beyond just what ships with Blender",stack:["Python","Qt"],sourceCode:"https://github.com/Masangri/nft-blender",livePreview:"https://masangri.github.io/nft-blender/"},{name:"ERC-1155 NFT Project Template for Polygon",description:"Smart contract template project for NFT editions (ERC-1155) with features for Polygon (EVM side-chain).",stack:["Node","Solidity"],sourceCode:"https://github.com/Masangri/erc-1155-nft-project-template-for-polygon",livePreview:"https://testnets.opensea.io/collection/blender-frens"},{name:"Misc. Web3 Bootcamp Projects",description:"Ethereum & Solana testnet projects for various Buildspace coding bootcamps.",stack:["Node","TypeScript","React","Rust","Solidity"],sourceCode:"https://github.com/stars/Masangri/lists/coding-bootcamp-projects",livePreview:"https://buildspace-sol-nft-candymachine-frontend.vercel.app/"}],O=["CSS","Git","HTML","JavaScript","Python","Qt","React","Solidity","TypeScript"],p=["After Effects","Blender","Maya","Nuke","Photoshop","Substance","Unity","Unreal Engine"],x="masaki.jeffrey@frentity.com",g=n(16),k=n.n(g),_=n(14),N=n.n(_),v=n(18),y=n.n(v),w=n(17),C=n.n(w),S=(n(28),function(){var e=Object(i.useContext)(r),t=Object(s.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,l=Object(i.useState)(!1),o=Object(s.a)(l,2),j=o[0],b=o[1],h=function(){return b(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[f.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Projects"})}):null,O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,x?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:h,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(N.a,{}):Object(a.jsx)(k.a,{})}),Object(a.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(C.a,{}):Object(a.jsx)(y.a,{})})]})}),P=(n(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(S,{})]})}),E=n(11),M=n.n(E),T=n(19),R=n.n(T),B=(n(33),function(){var e=b,t=h,n=d,c=u,s=m;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsx)("h2",{children:"Welcome to"}),Object(a.jsx)("h1",{children:Object(a.jsxs)("span",{className:"about__name",children:[e,"' GitHub!"]})}),t&&Object(a.jsx)("h2",{className:"about__role",children:t}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(a.jsxs)(a.Fragment,{children:[s.github&&Object(a.jsx)("a",{href:s.github,target:"_blank",rel:"noreferrer","aria-label":"github",className:"link link--icon",children:Object(a.jsx)(M.a,{})}),s.linkedin&&Object(a.jsx)("a",{href:s.linkedin,target:"_blank",rel:"noreferrer","aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(R.a,{})})]})]})]})}),F=n(7),J=n.n(F),L=n(20),W=n.n(L),A=(n(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},J()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,target:"_blank",rel:"noreferrer","aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(M.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,target:"_blank",rel:"noreferrer","aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(W.a,{})})]})}),z=(n(36),function(){return f.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:f.map((function(e){return Object(a.jsx)(A,{project:e},J()())}))})]}):null}),D=(n(37),function(){return O.length&&p.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("h3",{className:"section__title",children:"Programming"}),Object(a.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},J()())}))}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{className:"section__title",children:"DCC"}),Object(a.jsx)("ul",{className:"skills__list",children:p.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},J()())}))})]}):null}),G=n(21),H=n.n(G),I=(n(38),function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(H.a,{fontSize:"large"})})}):null}),Q=(n(39),function(){return x?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(x),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),U=(n(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/Masangri/masangri.github.io",target:"_blank",rel:"noreferrer",className:"link footer__link",children:"Source Repository"})})}),V=(n(41),function(){var e=Object(i.useContext)(r),t=Object(s.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(P,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(B,{}),Object(a.jsx)(z,{}),Object(a.jsx)(D,{}),Object(a.jsx)(Q,{})]}),Object(a.jsx)(I,{}),Object(a.jsx)(U,{})]})});n(42);Object(c.render)(Object(a.jsx)(l,{children:Object(a.jsx)(V,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.8cc71c14.chunk.js.map