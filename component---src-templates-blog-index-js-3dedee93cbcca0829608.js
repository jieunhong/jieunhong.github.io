(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{EYWl:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("TJpk"),o=n.n(i),l=n("Wbzz");function c(e){let{meta:t,image:n,title:a,description:i,slug:c,lang:s="en"}=e;return r.a.createElement(l.StaticQuery,{query:"336482444",render:e=>{const{siteMetadata:l}=e.site,m=i||l.description,u=n?l.siteUrl+"/"+n:null,d=""+l.siteUrl+c;return r.a.createElement(o.a,Object.assign({htmlAttributes:{lang:s}},a?{titleTemplate:"%s — "+l.title,title:a}:{title:l.title+" — A blog by jieun hong"},{meta:[{name:"description",content:m},{property:"og:url",content:d},{property:"og:title",content:a||l.title},{property:"og:description",content:m},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.social.twitter},{name:"twitter:title",content:a||l.title},{name:"twitter:description",content:m}].concat(u?[{property:"og:image",content:u},{name:"twitter:image",content:u}]:[]).concat(t)}))}})}c.defaultProps={meta:[],title:"",slug:""},t.a=c},JLKy:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=function(e){let{children:t,style:n={}}=e;return r.a.createElement("p",{style:{fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all",...n}},t)}},L6NH:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n("KQm4");function r(e){let t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function i(e,t){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);const r=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=e).toLocaleDateString.apply(n,Object(a.a)(r))}},ODHz:function(e,t,n){e.exports=n.p+"static/profile-pic-5a801cf67bb6b2b3181e38f18c89933b.jpeg"},SbOt:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),i=n.n(r),o=n("ODHz"),l=n.n(o),c=n("p3AD");let s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(1)}},i.a.createElement("img",{src:l.a,alt:"jieunhong",style:{marginRight:Object(c.a)(.5),marginBottom:0,width:Object(c.a)(2),height:Object(c.a)(2),borderRadius:"50%"}}),i.a.createElement("p",{style:{maxWidth:310}},"Personal blog by Jieun Hong.","I explain with words and code."))},t}(i.a.Component);t.a=s},TshS:function(e,t,n){"use strict";n.r(t);var a=n("JX7q"),r=n("dI71"),i=n("Wbzz"),o=n("L6NH"),l=n("SbOt"),c=n("q1tI"),s=n.n(c),m=n("p3AD");var u=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return s.a.createElement("footer",{style:{marginTop:Object(m.a)(2.5),paddingTop:Object(m.a)(1)}},s.a.createElement("div",{style:{float:"right"}}),s.a.createElement("a",{href:"javascript:alert('막아둠..');"},"github")," ","•"," ",s.a.createElement("a",{href:"javascript:alert('막아둠..');"},"portfolio"))},t}(s.a.Component),d=n("7oih"),p=n("JLKy"),g=n("EYWl"),f=n("mwIZ"),b=n.n(f);n("zLBv");let y=function(e){function t(t){var n;return(n=e.call(this,t)||this).changeCategory=n.changeCategory.bind(Object(a.a)(n)),n.state={active:!1},n}Object(r.a)(t,e);var n=t.prototype;return n.toggleClass=function(e){document.getElementsByClassName("clicked")[0].classList.remove("clicked"),e.target.className="clicked"},n.changeCategory=function(){document.getElementsByClassName("clicked")[0].classList.remove("clicked")},n.render=function(){const e=b()(this,"props.data.site.siteMetadata.title"),t=this.props.pageContext.langKey,n=b()(this,"props.data.allMarkdownRemark.edges");return s.a.createElement(d.a,{location:this.props.location,title:e},s.a.createElement(g.a,null),s.a.createElement("aside",null,s.a.createElement(l.a,null)),s.a.createElement("main",null,"en"!==t&&"ru"!==t&&s.a.createElement(p.a,null,"These articles have been"," ",s.a.createElement("a",{href:"https://github.com/gaearon/overreacted.io#contributing-translations",target:"_blank",rel:"noopener noreferrer"},"translated by the community"),"."),s.a.createElement("span",null,"카테고리 언젠가는 완성할 예정"),s.a.createElement("div",{style:{marginBottom:"-1rem",color:"var(--textTitle)",display:"flex"}},["전체","개발","일상"].map(e=>{let t="전체"==e?"clicked":"";return s.a.createElement("a",{key:e,className:t,onClick:this.toggleClass,style:{padding:"0 15px",border:"0.1rem solid",borderRadius:"15px",textAlign:"center",marginRight:"20px"}},e)})),n.map(e=>{let{node:n}=e;const a=b()(n,"frontmatter.title")||n.fields.slug;return s.a.createElement("article",{key:n.fields.slug},s.a.createElement("header",null,s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(m.a)(1),marginBottom:Object(m.a)(1/4)}},s.a.createElement(i.Link,{style:{boxShadow:"none"},to:n.fields.slug,rel:"bookmark"},a)),s.a.createElement("small",null,Object(o.a)(n.frontmatter.date,t)," • "+Object(o.b)(n.timeToRead))),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:n.frontmatter.spoiler}}))})),s.a.createElement(u,null))},t}(s.a.Component);t.default=y},zLBv:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-3dedee93cbcca0829608.js.map