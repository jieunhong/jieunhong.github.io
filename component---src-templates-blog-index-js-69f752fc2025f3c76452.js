(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{EYWl:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("TJpk"),o=n.n(l),i=n("Wbzz");function c(e){let{meta:t,image:n,title:a,description:l,slug:c,lang:s="en"}=e;return r.a.createElement(i.StaticQuery,{query:"336482444",render:e=>{const{siteMetadata:i}=e.site,m=l||i.description,u=n?i.siteUrl+"/"+n:null,d=""+i.siteUrl+c;return r.a.createElement(o.a,Object.assign({htmlAttributes:{lang:s}},a?{titleTemplate:"%s — "+i.title,title:a}:{title:i.title+" — A blog by jieun hong"},{meta:[{name:"description",content:m},{property:"og:url",content:d},{property:"og:title",content:a||i.title},{property:"og:description",content:m},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.social.twitter},{name:"twitter:title",content:a||i.title},{name:"twitter:description",content:m}].concat(u?[{property:"og:image",content:u},{name:"twitter:image",content:u}]:[]).concat(t)}))}})}c.defaultProps={meta:[],title:"",slug:""},t.a=c},JLKy:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=function(e){let{children:t,style:n={}}=e;return r.a.createElement("p",{style:{fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all",...n}},t)}},JwsL:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),l=n.n(r),o=n("p3AD");let i=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return l.a.createElement("footer",{style:{marginTop:Object(o.a)(2.5),paddingTop:Object(o.a)(1)}},l.a.createElement("div",{style:{float:"right"}}),l.a.createElement("a",{href:"javascript:alert('막아둠..');"},"github")," ","•"," ",l.a.createElement("a",{href:"javascript:alert('막아둠..');"},"portfolio"))},t}(l.a.Component);t.a=i},L6NH:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return l}));var a=n("KQm4");function r(e){let t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function l(e,t){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);const r=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=e).toLocaleDateString.apply(n,Object(a.a)(r))}},ODHz:function(e,t,n){e.exports=n.p+"static/profile-pic-5a801cf67bb6b2b3181e38f18c89933b.jpeg"},SbOt:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),l=n.n(r),o=n("ODHz"),i=n.n(o),c=n("p3AD");let s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return l.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(1)}},l.a.createElement("a",{href:"/profile",className:"profile"},l.a.createElement("img",{src:i.a,alt:"jieunhong",style:{marginRight:Object(c.a)(.5),marginBottom:0,width:Object(c.a)(2),height:Object(c.a)(2),borderRadius:"50%"}})),l.a.createElement("p",{style:{maxWidth:310}},"Personal blog by Jieun Hong.",l.a.createElement("br",null)," Hello JIEUN World !"))},t}(l.a.Component);t.a=s},TshS:function(e,t,n){"use strict";n.r(t);var a=n("JX7q"),r=n("dI71"),l=n("Wbzz"),o=n("L6NH"),i=n("SbOt"),c=n("JwsL"),s=n("7oih"),m=n("JLKy"),u=n("q1tI"),d=n.n(u),p=n("EYWl"),g=n("mwIZ"),f=n.n(g),y=n("p3AD");n("zLBv");let b=function(e){function t(t){var n;return(n=e.call(this,t)||this).changeCategory=n.changeCategory.bind(Object(a.a)(n)),n.state={active:!1},n}Object(r.a)(t,e);var n=t.prototype;return n.toggleClass=function(e){document.getElementsByClassName("clicked")[0].classList.remove("clicked"),e.target.className="clicked";const t=e.target.text;"전체"!=t?(document.querySelectorAll(".article").forEach(e=>e.classList.add("none")),document.querySelectorAll("."+t).forEach(e=>e.classList.remove("none"))):document.querySelectorAll(".article").forEach(e=>e.classList.remove("none"))},n.changeCategory=function(){document.getElementsByClassName("clicked")[0].classList.remove("clicked")},n.render=function(){const e=f()(this,"props.data.site.siteMetadata.title"),t=this.props.pageContext.langKey,n=f()(this,"props.data.allMarkdownRemark.edges");var a=["전체"];return n.map(e=>a.push(f()(e,"node.frontmatter.category"))),a=Array.from(new Set(a)),d.a.createElement(s.a,{location:this.props.location,title:e},d.a.createElement(p.a,null),d.a.createElement("aside",null,d.a.createElement(i.a,null)),d.a.createElement("main",null,"en"!==t&&"ru"!==t&&d.a.createElement(m.a,null,"These articles have been"," ",d.a.createElement("a",{href:"https://github.com/gaearon/overreacted.io#contributing-translations",target:"_blank",rel:"noopener noreferrer"},"translated by the community"),"."),d.a.createElement("div",{style:{marginBottom:"-1rem",color:"var(--textTitle)",display:"flex"}},a.map(e=>{let t="전체"==e?"clicked":"";return d.a.createElement("a",{key:e,className:t,onClick:this.toggleClass,style:{padding:"0 15px",border:"0.1rem solid",borderRadius:"15px",textAlign:"center",marginRight:"20px"}},e)})),n.map(e=>{let{node:n}=e;const a=f()(n,"frontmatter.title")||n.fields.slug,r=f()(n,"frontmatter.category")||n.fields.slug;return d.a.createElement("article",{key:n.fields.slug,class:r+" article"},d.a.createElement("header",null,d.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(y.a)(1),marginBottom:Object(y.a)(1/4)}},d.a.createElement(l.Link,{style:{boxShadow:"none"},to:n.fields.slug,rel:"bookmark"},a)),d.a.createElement("small",null,Object(o.a)(n.frontmatter.date,t)," • "+Object(o.b)(n.timeToRead))),d.a.createElement("p",{dangerouslySetInnerHTML:{__html:n.frontmatter.spoiler}}))})),d.a.createElement(c.a,null))},t}(d.a.Component);t.default=b},zLBv:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-69f752fc2025f3c76452.js.map