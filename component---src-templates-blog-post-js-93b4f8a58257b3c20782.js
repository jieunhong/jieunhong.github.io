(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"4M6O":function(e,t,n){"use strict";var a=n("mBgD");t.__esModule=!0,t.insertScript=function(e,t,n){var a=window.document.createElement("script");return a.async=!0,a.src=e,a.id=t,n.appendChild(a),a},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var a;return function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var l=this,s=function(){a=null,n||e.apply(l,i)},u=n&&!a;window.clearTimeout(a),a=setTimeout(s,t),u&&e.apply(l,i)}},t.isReactElement=o,t.shallowComparison=function e(t,n){var a,i=new Set(Object.keys(t).concat(Object.keys(n)));return 0!==(a=[]).concat.apply(a,(0,r.default)(i)).filter((function(a){if("object"==typeof t[a]){if(e(t[a],n[a]))return!0}else if(t[a]!==n[a]&&!o(t[a]))return!0;return!1})).length};var r=a(n("ZGFM")),i=a(n("q1tI"));function o(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},EYWl:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("TJpk"),o=n.n(i),l=n("Wbzz");function s(e){var t=e.meta,n=e.image,a=e.title,i=e.description,s=e.slug,u=e.lang,c=void 0===u?"en":u;return r.a.createElement(l.StaticQuery,{query:"336482444",render:function(e){var l=e.site.siteMetadata,u=i||l.description,d=n?l.siteUrl+"/"+n:null,m=""+l.siteUrl+s;return r.a.createElement(o.a,Object.assign({htmlAttributes:{lang:c}},a?{titleTemplate:"%s — "+l.title,title:a}:{title:l.title+" — A blog by jieun hong"},{meta:[{name:"description",content:u},{property:"og:url",content:m},{property:"og:title",content:a||l.title},{property:"og:description",content:u},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.social.twitter},{name:"twitter:title",content:a||l.title},{name:"twitter:description",content:u}].concat(d?[{property:"og:image",content:d},{name:"twitter:image",content:d}]:[]).concat(t)}))}})}s.defaultProps={meta:[],title:"",slug:""},t.a=s},JLKy:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=function(e){var t=e.children,n=e.style,a=void 0===n?{}:n;return r.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},a)},t)}},L6NH:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n("KQm4");function r(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function i(e,t){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var r=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=e).toLocaleDateString.apply(n,Object(a.a)(r))}},MvKu:function(e,t,n){},ODHz:function(e,t,n){e.exports=n.p+"static/profile-pic-5a801cf67bb6b2b3181e38f18c89933b.jpeg"},ORnI:function(e,t,n){"use strict";var a=n("mBgD");t.__esModule=!0,t.default=void 0;var r=a(n("VUT9"));t.Disqus=r.default;var i=a(n("qASQ"));t.CommentCount=i.default;var o=a(n("vAJ3"));t.CommentEmbed=o.default;var l=r.default;t.default=l},SbOt:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),i=n.n(r),o=n("ODHz"),l=n.n(o),s=n("p3AD"),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2)}},i.a.createElement("img",{src:l.a,alt:"jieunhong",style:{marginRight:Object(s.a)(.5),marginBottom:0,width:Object(s.a)(2),height:Object(s.a)(2),borderRadius:"50%"}}),i.a.createElement("p",{style:{maxWidth:310}},"Personal blog by ",i.a.createElement("a",{href:"http://bbubbu.me"},"홍지은"),". I explain with words and code."))},t}(i.a.Component);t.a=u},VUT9:function(e,t,n){"use strict";var a=n("mBgD");t.__esModule=!0,t.default=void 0;var r=a(n("SM4Z")),i=a(n("u0WH")),o=a(n("Rz0W")),l=a(n("q1tI")),s=a(n("17x9")),u=n("4M6O"),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="jieunhong",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,u.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,u.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(a){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);var t=window.document.querySelector('[id^="dsq-app"]');if(t){var n=window.document.getElementById(t.id);n.parentNode.removeChild(n)}},n.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return l.default.createElement("div",(0,r.default)({id:"disqus_thread"},t))},t}(l.default.Component);t.default=c,c.propTypes={config:s.default.shape({identifier:s.default.string,title:s.default.string,url:s.default.string,language:s.default.string,remoteAuthS3:s.default.string,apiKey:s.default.string})}},ZGFM:function(e,t,n){var a=n("Z5Ud"),r=n("4TKZ"),i=n("o/O1"),o=n("VjHQ");e.exports=function(e){return a(e)||r(e)||i(e)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},k7Sn:function(e,t){t.supportedLanguages={en:"English",ru:"Русский",tr:"Türkçe",es:"Español",ko:"한국어",sv:"Svenska",it:"Italiano",id:"Bahasa Indonesia","pt-br":"Português do Brasil",pl:"Polski","zh-hant":"繁體中文","zh-hans":"简体中文",ja:"日本語",fr:"Français",he:"עברית",hu:"Magyar",vi:"Tiếng Việt",th:"ไทย",my:"မြန်မာဘာသာ",sk:"Slovenčina",te:"తెలుగు",uk:"Українська",bg:"Български",cs:"Čeština",de:"Deutsch",nl:"Nederlands",nb:"Norsk",fa:"فارسی",ar:"العربية",sr:"srpski"}},qASQ:function(e,t,n){"use strict";var a=n("mBgD");t.__esModule=!0,t.default=void 0;var r=a(n("SM4Z")),i=a(n("u0WH")),o=a(n("Rz0W")),l=a(n("q1tI")),s=a(n("17x9")),u=n("4M6O"),c=(0,u.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="jieunhong",n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?c():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.className,a=e.placeholder,o=(0,i.default)(e,["config","className","placeholder"]),s="disqus-comment-count"+(n?" "+n:"");return l.default.createElement("span",(0,r.default)({className:s,"data-disqus-identifier":t.identifier,"data-disqus-url":t.url},o),a)},t}(l.default.Component);t.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:s.default.shape({identifier:s.default.string,title:s.default.string,url:s.default.string}),placeholder:s.default.string,className:s.default.string}},vAJ3:function(e,t,n){"use strict";var a=n("mBgD");t.__esModule=!0,t.default=void 0;var r=a(n("SM4Z")),i=a(n("u0WH")),o=a(n("Rz0W")),l=a(n("q1tI")),s=a(n("17x9")),u=function(e){function t(){return e.apply(this,arguments)||this}(0,o.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){var e=this.props,t=(e.commentId,e.showMedia,e.showParentComment,(0,i.default)(e,["commentId","showMedia","showParentComment"]));return l.default.createElement("iframe",(0,r.default)({src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",title:"embedded-comment"},t))},t}(l.default.Component);t.default=u,u.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},u.propTypes={commentId:s.default.oneOfType([s.default.number,s.default.string]).isRequired,width:s.default.number,height:s.default.number,showMedia:s.default.bool,showParentComment:s.default.bool}},"vPK/":function(e,t,n){},yZlL:function(e,t,n){"use strict";n.r(t);var a=n("dI71"),r=n("q1tI"),i=n.n(r),o=n("Wbzz"),l=n("mwIZ"),s=n.n(l),u=(n("vPK/"),n("SbOt")),c=n("7oih"),d=n("EYWl"),m=(n("MvKu"),i.a.Component,n("JLKy")),p=n("L6NH"),f=n("p3AD"),h=n("k7Sn"),g={"https://reactjs.org":{"pt-br":"https://pt-br.reactjs.org"}},b=function(e){return h.supportedLanguages[e].replace(/ /g," ")},w=n("ORnI"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.translations,n=e.lang,a=e.languageLink,r=e.editUrl,l=t.filter((function(e){return"ru"!==e})),s=-1!==t.indexOf("ru");return i.a.createElement("div",{className:"translations"},i.a.createElement(m.a,{style:{fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",\n    "Droid Sans", "Helvetica Neue", sans-serif'}},t.length>0&&i.a.createElement("span",null,s&&i.a.createElement("span",null,"Originally written in:"," ","en"===n?i.a.createElement("b",null,b("en")):i.a.createElement(o.Link,{to:a("en")},"English")," • ","ru"===n?i.a.createElement("b",null,"Русский (авторский перевод)"):i.a.createElement(o.Link,{to:a("ru")},"Русский (авторский перевод)"),i.a.createElement("br",null),i.a.createElement("br",null)),i.a.createElement("span",null,"Translated by readers into: "),l.map((function(e,t){return i.a.createElement(i.a.Fragment,{key:e},e===n?i.a.createElement("b",null,b(e)):i.a.createElement(o.Link,{to:a(e)},b(e)),t===l.length-1?"":" • ")}))),"en"!==n&&i.a.createElement(i.a.Fragment,null,i.a.createElement("br",null),i.a.createElement("br",null),"ru"!==n&&i.a.createElement(i.a.Fragment,null,i.a.createElement(o.Link,{to:a("en")},"Read the original")," • ",i.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},"Improve this translation")," • "),i.a.createElement(o.Link,{to:"/"+n},"View all translated posts")," ")))},t}(i.a.Component),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=s()(this.props,"data.site.siteMetadata.title"),a=this.props.pageContext,r=a.previous,l=a.next,m=a.slug,y=a.translations,E=a.translatedLinks,S=e.fields.langKey,I={identifier:e.frontmatter.title,title:e.frontmatter.title},k=e.html;k=function(e,t){var n=e.match(/https?:\/\/(www)?[^\/\s)"?]+/gm);return n&&h.supportedLanguages[t]?(n.forEach((function(n){g[n]&&g[n][t]&&(e=e.replace(n,g[n][t]))})),e):e}(k,S),E.forEach((function(e){var t="/"+S+e;k=k.replace(new RegExp('"'+(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+'"'),"g"),'"'+t+'"')})),(y=y.slice()).sort((function(e,t){return b(e)<b(t)?-1:1})),function(e){switch(e){case"ru":case"bg":Promise.all([n.e(0),n.e(6)]).then(n.t.bind(null,"EsZP",7)),Promise.all([n.e(0),n.e(4)]).then(n.t.bind(null,"s85H",7));break;case"uk":Promise.all([n.e(0),n.e(6)]).then(n.t.bind(null,"EsZP",7)),Promise.all([n.e(0),n.e(4)]).then(n.t.bind(null,"s85H",7)),Promise.all([n.e(0),n.e(7)]).then(n.t.bind(null,"Mq6Z",7)),Promise.all([n.e(0),n.e(5)]).then(n.t.bind(null,"e/YJ",7));break;case"cs":case"da":case"de":case"es":case"fi":case"fr":case"he":case"hu":case"it":case"nl":case"no":case"pl":case"pt-br":case"sk":case"sr":case"sq":case"sv":case"tr":Promise.all([n.e(0),n.e(7)]).then(n.t.bind(null,"Mq6Z",7)),Promise.all([n.e(0),n.e(5)]).then(n.t.bind(null,"e/YJ",7));break;case"vi":Promise.all([n.e(0),n.e(20)]).then(n.t.bind(null,"Vjog",7)),Promise.all([n.e(0),n.e(19)]).then(n.t.bind(null,"Pf5Y",7));break;case"fa":Promise.all([n.e(0),n.e(18)]).then(n.t.bind(null,"BiVN",7));break;case"ar":Promise.all([n.e(0),n.e(17)]).then(n.t.bind(null,"xpFW",7))}}(S);var q=function(e,t){var n=e.replace(t+"/","");return function(e){return"en"===e?n:"/"+e+n}}(m,S),j=q("en"),C="https://github.com/gaearon/overreacted.io/edit/master/src/pages/"+j.slice(1,j.length-1)+"/index"+("en"===S?"":"."+S)+".md";encodeURIComponent("https://overreacted.io"+j);return i.a.createElement(c.a,{location:this.props.location,title:t},i.a.createElement(d.a,{lang:S,title:e.frontmatter.title,description:e.frontmatter.spoiler,slug:e.fields.slug}),i.a.createElement("main",null,i.a.createElement("article",null,i.a.createElement("header",null,i.a.createElement("h1",{style:{color:"var(--textTitle)"}},e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(f.b)(-.2),{display:"block",marginBottom:Object(f.a)(1),marginTop:Object(f.a)(-.8)})},Object(p.a)(e.frontmatter.date,S)," • "+Object(p.b)(e.timeToRead)),y.length>0&&i.a.createElement(v,{translations:y,editUrl:C,languageLink:q,lang:S})),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:k}}),i.a.createElement("footer",null,i.a.createElement(w.Disqus,{config:I})))),i.a.createElement("aside",null,i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:Object(f.a)(.25)}},i.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--pink)"},to:"/"},"지은이의 개발 Blog")),i.a.createElement(u.a,null),i.a.createElement("nav",null,i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,r&&i.a.createElement(o.Link,{to:r.fields.slug,rel:"prev",style:{marginRight:20}},"← ",r.frontmatter.title)),i.a.createElement("li",null,l&&i.a.createElement(o.Link,{to:l.fields.slug,rel:"next"},l.frontmatter.title," →"))))))},t}(i.a.Component);t.default=y}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-93b4f8a58257b3c20782.js.map