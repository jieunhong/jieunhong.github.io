(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{EYWl:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("TJpk"),o=n.n(i),l=n("Wbzz");function c(e){var t=e.meta,n=e.image,a=e.title,i=e.description,c=e.slug,s=e.lang,m=void 0===s?"en":s;return r.a.createElement(l.StaticQuery,{query:"336482444",render:function(e){var l=e.site.siteMetadata,s=i||l.description,u=n?l.siteUrl+"/"+n:null,d=""+l.siteUrl+c;return r.a.createElement(o.a,Object.assign({htmlAttributes:{lang:m}},a?{titleTemplate:"%s — "+l.title,title:a}:{title:l.title+" — A blog by jieun hong"},{meta:[{name:"description",content:s},{property:"og:url",content:d},{property:"og:title",content:a||l.title},{property:"og:description",content:s},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.social.twitter},{name:"twitter:title",content:a||l.title},{name:"twitter:description",content:s}].concat(u?[{property:"og:image",content:u},{name:"twitter:image",content:u}]:[]).concat(t)}))}})}c.defaultProps={meta:[],title:"",slug:""},t.a=c},JLKy:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=function(e){var t=e.children,n=e.style,a=void 0===n?{}:n;return r.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},a)},t)}},L6NH:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n("KQm4");function r(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function i(e,t){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var r=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=e).toLocaleDateString.apply(n,Object(a.a)(r))}},ODHz:function(e,t,n){e.exports=n.p+"static/profile-pic-5a801cf67bb6b2b3181e38f18c89933b.jpeg"},SbOt:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),i=n.n(r),o=n("ODHz"),l=n.n(o),c=n("p3AD"),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(1)}},i.a.createElement("img",{src:l.a,alt:"jieunhong",style:{marginRight:Object(c.a)(.5),marginBottom:0,width:Object(c.a)(2),height:Object(c.a)(2),borderRadius:"50%"}}),i.a.createElement("p",{style:{maxWidth:310}},"Personal blog by Jieun Hong.","I explain with words and code."))},t}(i.a.Component);t.a=s},TshS:function(e,t,n){"use strict";n.r(t);var a=n("JX7q"),r=n("dI71"),i=n("Wbzz"),o=n("L6NH"),l=n("SbOt"),c=n("q1tI"),s=n.n(c),m=n("p3AD"),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return s.a.createElement("footer",{style:{marginTop:Object(m.a)(2.5),paddingTop:Object(m.a)(1)}},s.a.createElement("div",{style:{float:"right"}}),s.a.createElement("a",{href:"javascript:alert('막아둠..');"},"github")," ","•"," ",s.a.createElement("a",{href:"javascript:alert('막아둠..');"},"portfolio"))},t}(s.a.Component),d=n("7oih"),p=n("JLKy"),g=n("EYWl"),f=n("mwIZ"),b=n.n(f),y=(n("zLBv"),function(e){function t(t){var n;return(n=e.call(this,t)||this).changeCategory=n.changeCategory.bind(Object(a.a)(n)),n.state={active:!1},n}Object(r.a)(t,e);var n=t.prototype;return n.toggleClass=function(e){document.getElementsByClassName("clicked")[0].classList.remove("clicked"),e.target.className="clicked"},n.changeCategory=function(){document.getElementsByClassName("clicked")[0].classList.remove("clicked")},n.render=function(){var e=this,t=b()(this,"props.data.site.siteMetadata.title"),n=this.props.pageContext.langKey,a=b()(this,"props.data.allMarkdownRemark.edges");return s.a.createElement(d.a,{location:this.props.location,title:t},s.a.createElement(g.a,null),s.a.createElement("aside",null,s.a.createElement(l.a,null)),s.a.createElement("main",null,"en"!==n&&"ru"!==n&&s.a.createElement(p.a,null,"These articles have been"," ",s.a.createElement("a",{href:"https://github.com/gaearon/overreacted.io#contributing-translations",target:"_blank",rel:"noopener noreferrer"},"translated by the community"),"."),s.a.createElement("span",null,"카테고리 언젠가는 완성할 예정"),s.a.createElement("div",{style:{marginBottom:"-1rem",color:"var(--textTitle)",display:"flex"}},["전체","개발","일상"].map((function(t){var n="전체"==t?"clicked":"";return s.a.createElement("a",{key:t,className:n,onClick:e.toggleClass,style:{padding:"0 15px",border:"0.1rem solid",borderRadius:"15px",textAlign:"center",marginRight:"20px"}},t)}))),a.map((function(e){var t=e.node,a=b()(t,"frontmatter.title")||t.fields.slug;return s.a.createElement("article",{key:t.fields.slug},s.a.createElement("header",null,s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(m.a)(1),marginBottom:Object(m.a)(1/4)}},s.a.createElement(i.Link,{style:{boxShadow:"none"},to:t.fields.slug,rel:"bookmark"},a)),s.a.createElement("small",null,Object(o.a)(t.frontmatter.date,n)," • "+Object(o.b)(t.timeToRead))),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.spoiler}}))}))),s.a.createElement(u,null))},t}(s.a.Component));t.default=y},zLBv:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-df7491d1ed557e1ae6a4.js.map