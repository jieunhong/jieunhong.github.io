(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{EYWl:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("TJpk"),i=n.n(o),l=n("Wbzz");function c(e){var t=e.meta,n=e.image,a=e.title,o=e.description,c=e.slug,s=e.lang,m=void 0===s?"en":s;return r.a.createElement(l.StaticQuery,{query:"336482444",render:function(e){var l=e.site.siteMetadata,s=o||l.description,u=n?l.siteUrl+"/"+n:null,p=""+l.siteUrl+c;return r.a.createElement(i.a,Object.assign({htmlAttributes:{lang:m}},a?{titleTemplate:"%s — "+l.title,title:a}:{title:l.title+" — A blog by jieun hong"},{meta:[{name:"description",content:s},{property:"og:url",content:p},{property:"og:title",content:a||l.title},{property:"og:description",content:s},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.social.twitter},{name:"twitter:title",content:a||l.title},{name:"twitter:description",content:s}].concat(u?[{property:"og:image",content:u},{name:"twitter:image",content:u}]:[]).concat(t)}))}})}c.defaultProps={meta:[],title:"",slug:""},t.a=c},JLKy:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=function(e){var t=e.children,n=e.style,a=void 0===n?{}:n;return r.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},a)},t)}},L6NH:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n("KQm4");function r(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function o(e,t){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var r=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=e).toLocaleDateString.apply(n,Object(a.a)(r))}},ODHz:function(e,t,n){e.exports=n.p+"static/profile-pic-5a801cf67bb6b2b3181e38f18c89933b.jpeg"},SbOt:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),o=n.n(r),i=n("ODHz"),l=n.n(i),c=n("p3AD"),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(1)}},o.a.createElement("img",{src:l.a,alt:"jieunhong",style:{marginRight:Object(c.a)(.5),marginBottom:0,width:Object(c.a)(2),height:Object(c.a)(2),borderRadius:"50%"}}),o.a.createElement("p",{style:{maxWidth:310}},"Personal blog by ",o.a.createElement("a",{href:"http://bbubbu.me"},"홍지은"),". I explain with words and code."))},t}(o.a.Component);t.a=s},TshS:function(e,t,n){"use strict";n.r(t);var a=n("JX7q"),r=n("dI71"),o=n("Wbzz"),i=n("L6NH"),l=n("SbOt"),c=n("q1tI"),s=n.n(c),m=n("p3AD"),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return s.a.createElement("footer",{style:{marginTop:Object(m.a)(2.5),paddingTop:Object(m.a)(1)}},s.a.createElement("div",{style:{float:"right"}}),s.a.createElement("a",{href:"https://github.com/jieunhong",target:"_blank",rel:"noopener noreferrer"},"github")," ","•"," ",s.a.createElement("a",{href:"http://bbubbu.me",target:"_blank",rel:"noopener noreferrer"},"portfolio"))},t}(s.a.Component),p=n("7oih"),d=n("JLKy"),g=n("EYWl"),b=n("mwIZ"),f=n.n(b),h=(n("zLBv"),function(e){function t(t){var n;return(n=e.call(this,t)||this).changeCategory=n.changeCategory.bind(Object(a.a)(n)),n.state={active:!1},n}Object(r.a)(t,e);var n=t.prototype;return n.toggleClass=function(e){document.getElementsByClassName("clicked")[0].classList.remove("clicked"),e.target.className="clicked"},n.changeCategory=function(){document.getElementsByClassName("clicked")[0].classList.remove("clicked")},n.render=function(){var e=this,t=f()(this,"props.data.site.siteMetadata.title"),n=this.props.pageContext.langKey,a=f()(this,"props.data.allMarkdownRemark.edges");return s.a.createElement(p.a,{location:this.props.location,title:t},s.a.createElement(g.a,null),s.a.createElement("aside",null,s.a.createElement(l.a,null)),s.a.createElement("main",null,"en"!==n&&"ru"!==n&&s.a.createElement(d.a,null,"These articles have been"," ",s.a.createElement("a",{href:"https://github.com/gaearon/overreacted.io#contributing-translations",target:"_blank",rel:"noopener noreferrer"},"translated by the community"),"."),s.a.createElement("span",null,"카테고리 언젠가는 완성할 예정"),s.a.createElement("div",{style:{marginBottom:"-1rem",color:"var(--textTitle)",display:"flex"}},["전체","개발","일상"].map((function(t){var n="전체"==t?"clicked":"";return s.a.createElement("a",{key:t,className:n,onClick:e.toggleClass,style:{padding:"0 15px",border:"0.1rem solid",borderRadius:"15px",textAlign:"center",marginRight:"20px"}},t)}))),a.map((function(e){var t=e.node,a=f()(t,"frontmatter.title")||t.fields.slug;return s.a.createElement("article",{key:t.fields.slug},s.a.createElement("header",null,s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(m.a)(1),marginBottom:Object(m.a)(1/4)}},s.a.createElement(o.Link,{style:{boxShadow:"none"},to:t.fields.slug,rel:"bookmark"},a)),s.a.createElement("small",null,Object(i.a)(t.frontmatter.date,n)," • "+Object(i.b)(t.timeToRead))),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.spoiler}}))}))),s.a.createElement(u,null))},t}(s.a.Component));t.default=h},zLBv:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-5a1d71ef912f9256375d.js.map