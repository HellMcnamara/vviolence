(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(150),o=a(148);t.default=function(){return r.a.createElement("div",{className:"Wrapper-Worklist"},r.a.createElement(i.a,null),r.a.createElement("div",{className:"FeatureWork"},r.a.createElement("div",{className:"c-feature"},r.a.createElement(o.Link,{to:"/bitso"},r.a.createElement("img",{src:a(165),alt:"thumb"}),r.a.createElement("p",null,"Introducing an esay way to buy and Sell Bitcoin and criptocurrencies."))),r.a.createElement("div",{className:"c-feature"},r.a.createElement(o.Link,{to:"/500"},r.a.createElement("img",{src:a(158),alt:"thumb"}),r.a.createElement("p",null,"Increasing 500 Latam entrepreneurs' applications for batch 10."))),r.a.createElement("div",{className:"c-feature"},r.a.createElement(o.Link,{to:"/citi"},r.a.createElement("img",{src:a(166),alt:"thumb"}),r.a.createElement("p",null,"Improving first time use for Citibanamex App."))),r.a.createElement("div",{className:"c-feature"},r.a.createElement(o.Link,{to:"/sketch"},r.a.createElement("img",{src:a(167),alt:"thumb"}),r.a.createElement("p",null,"Side project — Organize Mexico's City official Sketch Meetup")))))}},147:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(151)),i=n(a(152)),o=n(a(7)),c=n(a(51)),s=n(a(52)),u=n(a(4)),l=n(a(0)),p=a(16),d=a(148);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:u.default.string,activeStyle:u.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,s.default)((0,c.default)((0,c.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,c.default)((0,c.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,o=void 0===n?this.defaultGetProps:n,c=t.onClick,s=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=f(a);return l.default.createElement(p.Link,(0,i.default)({to:v,state:u,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,d.parsePath)(a).pathname)},onClick:function(t){return c&&c(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),b(a,{state:u,replace:m})),!0}},h))},t}(l.default.Component);h.propTypes=(0,i.default)({},m,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var v=h;t.default=v;var b=function(e,t){window.___navigate(f(e),t)};t.navigate=b;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),g(e)}},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(147),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(149),l=a.n(u);a.d(t,"PageRenderer",function(){return l.a});var p=a(32);a.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},150:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(148);t.a=function(){return r.a.createElement("div",{className:"Nav"},r.a.createElement("div",{className:"Nav_title"},r.a.createElement(i.Link,{to:"/"},r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"Sanduche"}," 🥪")))),r.a.createElement("div",{className:"Nav_list"},r.a.createElement(i.Link,{to:"/work"},"Work"),r.a.createElement(i.Link,{to:"about"},"About")))}},151:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},152:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},153:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(53),s=a(2),u=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},158:function(e,t,a){e.exports=a.p+"static/example-thumb-2-6bb3b4494c220e5c7b87dffa84ee6523.jpg"},165:function(e,t,a){e.exports=a.p+"static/example-thumb-1-e4e782089e914cf011a3c03f1b9b3a44.jpg"},166:function(e,t,a){e.exports=a.p+"static/example-thumb-3-f21b11ba1a16d7484a75794a442ff648.jpg"},167:function(e,t,a){e.exports=a.p+"static/example-thumb-4-d73d769ec036de7c49218d5f11b23605.jpg"}}]);
//# sourceMappingURL=component---src-pages-work-js-c3c586a3808f2d62fa2c.js.map