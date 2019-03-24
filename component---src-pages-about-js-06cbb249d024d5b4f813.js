(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(150);t.default=function(){return r.a.createElement("div",{className:"Wrapper-About"},r.a.createElement(o.a,null),r.a.createElement("div",{className:"AboutMe"},r.a.createElement("h2",null,"About me"),r.a.createElement("p",null,r.a.createElement("strong",null,"Nice to meet you Google team!")," My name is Jay and I'm from Bogota Colombia ",r.a.createElement("span",{role:"img","aria-label":"COP"}," 🇨🇴")),r.a.createElement("p",null,"I've been building digital products for ",r.a.createElement("strong",null,"9 years"),". I'm currently working in Mexico City as a Product Designer. Before moving to Mexico city I was a Design Lead in one of the most important online education platforms in Latin America, ",r.a.createElement("a",{href:"https://platzi.com/ux",target:"_blank",rel:"noopener noreferrer",className:"link"},"Platzi"),"."),r.a.createElement("p",null,"Platzi focuses on teaching programming but also on marketing and design. ",r.a.createElement("strong",null," I was responsible for the product")," but at the same time gave 3 different courses about design, wrote articles, youtube tutorials and gave conferences in Mexico, Peru, and Bogota... all this about design."),r.a.createElement("p",null,"Because I was working a lot with the Mexican tech ecosystem, in 2016 I received a job offer to moving to the city and be part of a strategic design studio called 23 design."),r.a.createElement("p",null,"At ",r.a.createElement("a",{href:"https://23.design",target:"_blank",rel:"noopener noreferrer",className:"link"},"23 Design"),", in 3 years I have had the opportunity to work with more than 20 startups and companies in industries such Real state, venture capital, fintech, Mobility, Banking, Music Business, e-commerce, marketplace, artificial intelligence, social."),r.a.createElement("p",null,"At nights also I organize Mexico's city official ",r.a.createElement("a",{href:"https://hellosketch.com?ref=heyjay.me",target:"_blank",rel:"noopener noreferrer",className:"link"},"Sketch meetup")," where designers and developers discuss ideas, new technologies and learn best practices about user interface and interaction design. "),r.a.createElement("p",null,"I'm still giving courses, conferences and writing about design",r.a.createElement("span",{role:"img","aria-label":"COP"}," 💪"),"."),r.a.createElement("div",{className:"Social"},r.a.createElement("a",{href:"https://www.linkedin.com/in/hellmcnamara/",target:"_blank",rel:"noopener noreferrer"},"Linkedin"),r.a.createElement("a",{href:"https://twitter.com/Noyonosoyesa",target:"_blank",rel:"noopener noreferrer"},"Twitter")," -",r.a.createElement("a",{href:"https://dribbble.com/hellmcnamara",target:"_blank",rel:"noopener noreferrer"},"Dribbble")," -",r.a.createElement("a",{href:"https://www.instagram.com/noyonosoyesa/",target:"_blank",rel:"noopener noreferrer"},"Instagram"))))}},147:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(151)),o=n(a(152)),i=n(a(7)),l=n(a(51)),s=n(a(52)),c=n(a(4)),u=n(a(0)),d=a(16),p=a(148);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,s.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,i=void 0===n?this.defaultGetProps:n,l=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=f(a);return u.default.createElement(d.Link,(0,o.default)({to:g,state:c,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,p.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),v(a,{state:c,replace:m})),!0}},h))},t}(u.default.Component);h.propTypes=(0,o.default)({},m,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var g=h;t.default=g;var v=function(e,t){window.___navigate(f(e),t)};t.navigate=v;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(147),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(149),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},149:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},150:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(148);t.a=function(){return r.a.createElement("div",{className:"Nav"},r.a.createElement("div",{className:"Nav_Logo"},r.a.createElement(o.Link,{to:"/"},r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"Sanduche"}," 🥪")))),r.a.createElement("ul",{className:"Nav_Menu"},r.a.createElement("li",null,r.a.createElement(o.Link,{to:"/work"},"Work")),r.a.createElement("li",null,r.a.createElement(o.Link,{to:"about"},"About"))))}},151:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},152:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},153:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(53),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=component---src-pages-about-js-06cbb249d024d5b4f813.js.map