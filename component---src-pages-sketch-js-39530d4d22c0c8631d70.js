(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(150);t.default=function(){return r.a.createElement("div",{className:"Wrapper-Worklist"},r.a.createElement(i.a,null),r.a.createElement("div",{className:"FeatureProject"},r.a.createElement("div",{className:"p-feature"},r.a.createElement("h2",null,"Organize Mexico's City official Sketch Meetup"),r.a.createElement("img",{src:a(160),alt:"thumb"}),r.a.createElement("p",null,"Playlists are the new albums – the predominant format in pop music. Spotify is at the vanguard of this transformation, building entire scenes and genres around their human-curated lists.")),r.a.createElement("div",{className:"UseCase-left"},r.a.createElement("div",{className:"UseCase-image-left"},r.a.createElement("img",{src:a(156),alt:"thumb"})),r.a.createElement("div",{className:"UseCase-item-left"},r.a.createElement("p",null,"To fuel their recent strategic pivot from b2c to b2b, we redesigned their brand and website. Our role:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Interaction Design"),r.a.createElement("li",null,"Product Management"),r.a.createElement("li",null,"Visual Design")))),r.a.createElement("div",{className:"UseCase-right"},r.a.createElement("div",{className:"UseCase-item-right"},r.a.createElement("p",null,"We continue to refine and grow the service against its core proposition of highlighting under-appreciated talent and providing cultural context to a dedicated audience of music lovers.")),r.a.createElement("div",{className:"UseCase-image-right"},r.a.createElement("img",{src:a(154),alt:"thumb"}))),r.a.createElement("div",{className:"UseCase-left"},r.a.createElement("div",{className:"UseCase-image-left"},r.a.createElement("img",{src:a(157),alt:"thumb"})),r.a.createElement("div",{className:"UseCase-item-left"},r.a.createElement("p",null,"A flexible system of typefaces, colours, textures and treatments allows the team to create individual posters and moods for each show, while retaining the unmistakable common thread that is so important to stand up in NYC’s cluttered-yet-uniform cultural landscape."))),r.a.createElement("div",{className:"UseCase-right"},r.a.createElement("div",{className:"UseCase-item-right"},r.a.createElement("p",null,"We continue to refine and grow the service against its core proposition of highlighting under-appreciated talent and providing cultural context to a dedicated audience of music lovers.")),r.a.createElement("div",{className:"UseCase-image-right"},r.a.createElement("img",{src:a(155),alt:"thumb"}))),r.a.createElement("div",{className:"related-articles"},r.a.createElement("h3",null,"Articles"),r.a.createElement("p",null,"Una búsqueda obsesiva por la máxima simplificación de cripto")),r.a.createElement("div",{className:"Next"},r.a.createElement("p",null,"Next Project →"))))}},147:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=m,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(151)),i=n(a(152)),s=n(a(7)),l=n(a(51)),o=n(a(52)),c=n(a(4)),u=n(a(0)),d=a(16),p=a(148);function m(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var f={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,o.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,s=void 0===n?this.defaultGetProps:n,l=t.onClick,o=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),f=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=m(a);return u.default.createElement(d.Link,(0,i.default)({to:v,state:c,getProps:s,innerRef:this.handleRef,onMouseEnter:function(e){o&&o(e),___loader.hovering((0,p.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:c,replace:f})),!0}},h))},t}(u.default.Component);h.propTypes=(0,i.default)({},f,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var v=h;t.default=v;var g=function(e,t){window.___navigate(m(e),t)};t.navigate=g;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(m(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(m(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),l=a(147),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(149),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},149:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},150:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(148);t.a=function(){return r.a.createElement("div",{className:"Nav"},r.a.createElement("div",{className:"Nav_title"},r.a.createElement(i.Link,{to:"/"},r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"Sanduche"}," 🥪")))),r.a.createElement("div",{className:"Nav_list"},r.a.createElement(i.Link,{to:"/work"},"Work"),r.a.createElement(i.Link,{to:"about"},"About")))}},151:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},152:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},153:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),l=a(53),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},154:function(e,t,a){e.exports=a.p+"static/example-thumb-6-f25afd8c3f3fdfa774b916b4a33b5421.gif"},155:function(e,t,a){e.exports=a.p+"static/example-thumb-7-ef019c671ed6e96b7521435815852898.gif"},156:function(e,t,a){e.exports=a.p+"static/example-thumb-9-dd3cae390de2dc2e3aaddbb9c81db4d0.jpg"},157:function(e,t,a){e.exports=a.p+"static/example-thumb-8-3c7f6c879c5b3167da89b1ab59a703e4.jpg"},160:function(e,t,a){e.exports=a.p+"static/example-thumb-4-4ebb5b93f96a409e8ee3a3326ea74389.jpg"}}]);
//# sourceMappingURL=component---src-pages-sketch-js-39530d4d22c0c8631d70.js.map