(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(149),o=a(147);t.default=function(){return r.a.createElement("div",{className:"Wrapper-Worklist"},r.a.createElement(i.a,null),r.a.createElement("div",{className:"FeatureWork"},r.a.createElement("div",{className:"c-feature"},r.a.createElement(o.Link,{to:"/bitso"},r.a.createElement("img",{src:a(164),alt:"thumb"}),r.a.createElement("p",null,"Introducing an esay way to Buy and Sell Bitcoin and  Criptocurrencies."))),r.a.createElement("div",{className:"c-feature"},r.a.createElement(o.Link,{to:"/500"},r.a.createElement("img",{src:a(157),alt:"thumb"}),r.a.createElement("p",null,"Increasing 500 Latam entrepreneurs' applications for batch 10."))),r.a.createElement("div",{className:"c-feature"},r.a.createElement(o.Link,{to:"/citi"},r.a.createElement("img",{src:a(158),alt:"thumb"}),r.a.createElement("p",null,"Improving first time use for Citibanamex App."))),r.a.createElement("div",{className:"c-feature"},r.a.createElement(o.Link,{to:"/sketch"},r.a.createElement("img",{src:a(159),alt:"thumb"}),r.a.createElement("p",null,"Organize Mexico's City official Sketch Meetup")))))}},146:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(150)),i=n(a(151)),o=n(a(7)),s=n(a(51)),c=n(a(52)),u=n(a(4)),l=n(a(0)),p=a(16),d=a(147);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:u.default.string,activeStyle:u.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,c.default)((0,s.default)((0,s.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,o=void 0===n?this.defaultGetProps:n,s=t.onClick,c=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=f(a);return l.default.createElement(p.Link,(0,i.default)({to:v,state:u,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,d.parsePath)(a).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),b(a,{state:u,replace:m})),!0}},h))},t}(l.default.Component);h.propTypes=(0,i.default)({},m,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var v=h;t.default=v;var b=function(e,t){window.___navigate(f(e),t)};t.navigate=b;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),g(e)}},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(146),c=a.n(s);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var u=a(148),l=a.n(u);a.d(t,"PageRenderer",function(){return l.a});var p=a(32);a.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},149:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(147);t.a=function(){return r.a.createElement("div",{className:"Nav"},r.a.createElement("div",{className:"Nav_title"},r.a.createElement(i.Link,{to:"/"},r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"Sanduche"}," 🥪")))),r.a.createElement("div",{className:"Nav_list"},r.a.createElement(i.Link,{to:"/work"},"Work"),r.a.createElement(i.Link,{to:"/"},"About")))}},150:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},151:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},152:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(53),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},157:function(e,t,a){e.exports=a.p+"static/example-thumb-2-6bb3b4494c220e5c7b87dffa84ee6523.jpg"},158:function(e,t,a){e.exports=a.p+"static/example-thumb-3-f21b11ba1a16d7484a75794a442ff648.jpg"},159:function(e,t,a){e.exports=a.p+"static/example-thumb-4-4ebb5b93f96a409e8ee3a3326ea74389.jpg"},164:function(e,t,a){e.exports=a.p+"static/example-thumb-1-fcd7fa6b31f8ca472584da790db6d85d.jpg"}}]);
//# sourceMappingURL=component---src-pages-work-js-f4b3f23681d6e13e57be.js.map