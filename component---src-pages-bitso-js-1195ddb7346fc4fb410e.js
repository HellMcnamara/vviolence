(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(149);t.default=function(){return r.a.createElement("div",{className:"Wrapper-Worklist"},r.a.createElement(i.a,null),r.a.createElement("div",{className:"FeatureProject"},r.a.createElement("div",{className:"p-feature"},r.a.createElement("h2",null,"Introducing an easy way to buy and sell criptocurrencies."),r.a.createElement("img",{src:a(160),alt:"thumb"}),r.a.createElement("p",null,"Bitso, the first and leading cryptocurrency exchange platform in Mexico and Latin America, has around 500K users more than 60% of the national market. The company started operations in April of 2014 with the mission of reinventing financial services in Mexico.")),r.a.createElement("div",{className:"UseCase-left"},r.a.createElement("div",{className:"UseCase-image-left"},r.a.createElement("img",{src:a(161),alt:"thumb"})),r.a.createElement("div",{className:"UseCase-item-left"},r.a.createElement("p",null,"In 2017, How to buy Bitcoin ranked third in global trends."),r.a.createElement("p",null,"With the mission to democratize financial services and give access to crypto, Bitso had the challenge to attract new users, especially those who are not experts in the topic. To achieve this, we use mobile apps to simplifying crypto buy in four steps "))),r.a.createElement("div",{className:"UseCase-right"},r.a.createElement("div",{className:"UseCase-item-right"},r.a.createElement("p",null,"By working together, Bitso increased their innovation capabilities. We empowered the team with strategists, designers, and other specialists to launch iOS and Android apps in record time."),r.a.createElement("p",null,"We demonstrate how an external and internal team can work all in all to understand people, their motivations, needs, and fears.")),r.a.createElement("div",{className:"UseCase-image-right"},r.a.createElement("img",{src:a(162),alt:"thumb"}))),r.a.createElement("div",{className:"UseCase-left"},r.a.createElement("div",{className:"UseCase-image-left"},r.a.createElement("img",{src:a(154),alt:"thumb"})),r.a.createElement("div",{className:"UseCase-item-left"},r.a.createElement("p",null,"This collaborative work led us to live a design process full of useful learnings for today and the future. ",r.a.createElement("br",null),"We questioned the existing mental models, we iterated thousands of times the user interface, we did findability and discoverability tests and we validated hypotheses with prototypes, all with the sole purpose of simplifying the crypto experience as much as possible."))),r.a.createElement("div",{className:"UseCase-right"},r.a.createElement("div",{className:"UseCase-item-right"},r.a.createElement("p",null,"Together we managed to reduce the process to four steps:"),r.a.createElement("p",null,"The result impacted the KPIs and the perception of its users and non-users regarding the company.")),r.a.createElement("div",{className:"UseCase-image-right"},r.a.createElement("img",{src:a(153),alt:"thumb"}))),r.a.createElement("div",{className:"p-feature"},r.a.createElement("img",{src:a(163),alt:"thumb"})),r.a.createElement("div",{className:"related-articles"},r.a.createElement("h3",null,"Articles"),r.a.createElement("p",null,"Una búsqueda obsesiva por la máxima simplificación de cripto")),r.a.createElement("div",{className:"Next"},r.a.createElement("p",null,"Next Project →"))))}},146:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(150)),i=n(a(151)),s=n(a(7)),o=n(a(51)),l=n(a(52)),c=n(a(4)),u=n(a(0)),d=a(16),p=a(147);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,l.default)((0,o.default)((0,o.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,s=void 0===n?this.defaultGetProps:n,o=t.onClick,l=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=f(a);return u.default.createElement(d.Link,(0,i.default)({to:v,state:c,getProps:s,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,p.parsePath)(a).pathname)},onClick:function(t){return o&&o(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:c,replace:m})),!0}},h))},t}(u.default.Component);h.propTypes=(0,i.default)({},m,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var v=h;t.default=v;var g=function(e,t){window.___navigate(f(e),t)};t.navigate=g;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(146),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(148),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},148:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},149:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(147);t.a=function(){return r.a.createElement("div",{className:"Nav"},r.a.createElement("div",{className:"Nav_title"},r.a.createElement(i.Link,{to:"/"},r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"Sanduche"}," 🥪")))),r.a.createElement("div",{className:"Nav_list"},r.a.createElement(i.Link,{to:"/work"},"Work"),r.a.createElement(i.Link,{to:"/"},"About")))}},150:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},151:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},152:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(53),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},153:function(e,t,a){e.exports=a.p+"static/example-thumb-6-f25afd8c3f3fdfa774b916b4a33b5421.gif"},154:function(e,t,a){e.exports=a.p+"static/example-thumb-7-ef019c671ed6e96b7521435815852898.gif"},160:function(e,t,a){e.exports=a.p+"static/bitso-hero-313e64869b343dc0688cc31bbbca8c8b.png"},161:function(e,t,a){e.exports=a.p+"static/bitso-exp-1915c89817c35a1898b35a0940e6719d.jpg"},162:function(e,t,a){e.exports=a.p+"static/bitso-team-b9ab0ac5f775f5a687f27bb5f54cbb66.jpg"},163:function(e,t,a){e.exports=a.p+"static/bitso-collaboration-c3754178cb970ec859f0e7209ef8b5ab.jpg"}}]);
//# sourceMappingURL=component---src-pages-bitso-js-1195ddb7346fc4fb410e.js.map