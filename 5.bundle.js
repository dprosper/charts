(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./node_modules/@babel/runtime/helpers/defineProperty.js":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},"./node_modules/@babel/runtime/helpers/extends.js":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},"./node_modules/@babel/runtime/helpers/inheritsLoose.js":function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}},"./node_modules/@babel/runtime/helpers/interopRequireDefault.js":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}},"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},"./node_modules/@rsuite/document-nav/lib/Content.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),u=n("./node_modules/@rsuite/document-nav/lib/NavContext.js"),l=(r=u)&&r.__esModule?r:{default:r};var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.PureComponent),o(t,[{key:"render",value:function(){var e=this.props.children;return i.createElement(l.default.Consumer,null,function(t){return i.createElement("div",{ref:function(e){return t.setContent(e)}},e)})}}]),t}();t.default=a},"./node_modules/@rsuite/document-nav/lib/Nav.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),u=(d(n("./node_modules/prop-types/index.js")),d(n("./node_modules/@rsuite/document-nav/lib/utils/createNavItems.js"))),l=d(n("./node_modules/@rsuite/document-nav/lib/NavItem.js")),a=n("./node_modules/@rsuite/document-nav/lib/constants/index.js"),s=d(n("./node_modules/@rsuite/document-nav/lib/utils/throttle.js")),c=n("./node_modules/@rsuite/document-nav/lib/NavContext.js"),f=d(c);function d(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={anchors:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.PureComponent),o(t,[{key:"getContext",value:function(){var e=this.props,t=e.scrollBar,n=e.fixed,r=e.showOrderNumber,o=this.state,i=o.anchors,u=o.activeAnchor;return{scrollBar:t,activeAnchor:void 0===u?n?i[0]:"":u,showOrderNumber:r}}},{key:"componentWillUpdate",value:function(e,t){var n=this.props.once;n&&!this.props.content&&e.content?this.handelContentMount(e.content):n||this.props.content===e.content||this.handelContentMount(e.content)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener),window.removeEventListener("resize",this.resizeListener),this.pageNav=null}},{key:"setScrollListener",value:function(e,t){var n=this;this.scrollWrap=e;var r=t.map(function(e){return document.getElementById(e)});this.scrollListener&&window.removeEventListener("scroll",this.scrollListener),this.scrollListener=function(){var e=0,o=n.state.activeAnchor;r.find(function(t,n){if(!t)return!1;var r=t.getBoundingClientRect();return e=n,r.top>0});var i=t[e-1]||t[0];if(i!==o&&n.pageNav){n.setState({activeAnchor:i});var u=document.querySelector("a[href='#"+i+"']"),l=n.pageNav;if(u&&l){var s=u.getBoundingClientRect().top-l.getBoundingClientRect().top,c=parseInt(l.clientHeight/u.offsetHeight,10);s+2*a.itemHeight>l.clientHeight&&(l.scrollTop=l.scrollTop+(c-1)*a.itemHeight),s<2*a.itemHeight&&(l.scrollTop=l.scrollTop-(c-1)*a.itemHeight)}}},window.addEventListener("scroll",(0,s.default)(this.scrollListener,300))}},{key:"traverseTitle",value:function(e,t,n){if(!e||!t||!n)return!1;var r=e.tagName;if(/^H[1-6]/.test(r)){var o=e.innerText||"";e.id=o;var i=parseInt(r.replace("H",""),10),u=this.props,l=u.minLevel,a=u.maxLevel;i>=l&&i<=a&&(t.push({title:o,anchor:o,level:i}),n.push(o))}else for(var s=e.children,c=0;c<s.length;c+=1)this.traverseTitle(s[c],t,n)}},{key:"getNavItems",value:function(){var e=[],t=this.props,n=t.children,r=t.scrollBar,o=void 0===r?"left":r,u=this.state.activeAnchor,l=i.Children.map(n,function(t,n){return e.push(t.props.anchor),i.cloneElement(t,{index:""+(n+1),level:1,activeAnchor:u,scrollBar:o,key:n+1+" "+t.props.anchor})});return this.setState({anchors:e}),l}},{key:"handelContentMount",value:function(e){var t=[],n=[],r=this.props,o=r.children,i=r.minLevel,l=r.maxLevel,a=r.fixed;if(o)this.setState({navItems:this.getNavItems()});else{this.traverseTitle(e,t,n),this.setState({anchors:n});var s=t.filter(function(e){return e.level>=i&&e.level<=l}),c=(0,u.default)(s,0);this.setState({navItems:c})}a&&this.setScrollListener(e,n)}},{key:"bindPageNavRef",value:function(e){var t=this;if(!e)return!1;var n=this.props.offset;this.pageNav=e,this.resizeListener&&window.removeEventListener("resize",this.resizeListener);var r=function(){var e=t.pageNav;e&&(e.style.height=a.itemHeight*parseInt((window.innerHeight-(n.top||n.bottom)-60)/a.itemHeight,10)+"px")};window.addEventListener("resize",r),this.resizeListener=r,r()}},{key:"render",value:function(){var e=this,t=this.props,n=t.offset,o=t.width,u=t.fixed,l=this.state.navItems,a=r({width:u?o||250:o||"100%",position:u?"fixed":"relative"},u?n:{});return i.createElement(c.NavItemContext.Provider,{value:this.getContext()},i.createElement("div",{className:"document-nav",style:a,ref:function(t){return e.bindPageNavRef(t)}},l))}}]),t}();p.defaultProps={offset:{top:60,left:"auto"},minLevel:2,maxLevel:4,scrollBar:"right",show:!0,fixed:!0,showOrderNumber:!0,once:!0},p.Item=l.default,t.default=function(e){return i.createElement(f.default.Consumer,null,function(t){return i.createElement(p,r({},e,t))})}},"./node_modules/@rsuite/document-nav/lib/NavContext.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NavItemContext=t.NavContext=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js"));function o(e){var t={Provider:r.Fragment,Consumer:r.Fragment};return r.createContext?r.createContext(e):t}var i=t.NavContext=o({});t.NavItemContext=o({});t.default=i},"./node_modules/@rsuite/document-nav/lib/NavItem.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),l=n("./node_modules/@rsuite/document-nav/lib/utils/createNavItems.js"),a=(r=l)&&r.__esModule?r:{default:r},s=n("./node_modules/@rsuite/document-nav/lib/NavContext.js");var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={active:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.PureComponent),i(t,[{key:"renderSubNavItems",value:function(){var e=this.props,t=e.children,n=e.index,r=e.level,o=e.subItems;return t?u.Children.map(t,function(e,t){return u.cloneElement(e,{index:n+"."+(t+1),level:r+1,key:n+"."+(t+1)+" "+e.props.anchor})}):(0,a.default)(o,r,n)}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.anchor,r=e.subItems,o=e.children,i=e.index,l=e.level,a=this.props,s=a.scrollBar,c=void 0===s?"right":s,f=a.activeAnchor,d=a.showOrderNumber,p=n===f;return u.createElement("div",{className:"nav-item"},u.createElement("a",{href:"#"+n,className:"nav-link "+(p?"active":"")+" scroll-bar-"+c,style:{paddingLeft:20*(l-1)+15+"px"}},d?i+" "+t:t),r||o?u.createElement("div",{className:"sub-nav-item"},this.renderSubNavItems()):null)}}]),t}();t.default=function(e){return u.createElement(s.NavItemContext.Consumer,null,function(t){return u.createElement(c,o({},e,t))})}},"./node_modules/@rsuite/document-nav/lib/NavProvider.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),u=n("./node_modules/@rsuite/document-nav/lib/NavContext.js"),l=(r=u)&&r.__esModule?r:{default:r};var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setContent=function(e){n.setState({content:e})},n.state={content:null},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.PureComponent),o(t,[{key:"getContext",value:function(){return{content:this.state.content,setContent:this.setContent}}},{key:"render",value:function(){return i.createElement(l.default.Provider,{value:this.getContext()},this.props.children)}}]),t}();t.default=a},"./node_modules/@rsuite/document-nav/lib/constants/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.emptyArray=[],t.itemHeight=34},"./node_modules/@rsuite/document-nav/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Content=t.NavItem=t.Nav=t.NavProvider=void 0;var r=l(n("./node_modules/@rsuite/document-nav/lib/NavProvider.js")),o=l(n("./node_modules/@rsuite/document-nav/lib/Nav.js")),i=l(n("./node_modules/@rsuite/document-nav/lib/NavItem.js")),u=l(n("./node_modules/@rsuite/document-nav/lib/Content.js"));function l(e){return e&&e.__esModule?e:{default:e}}t.NavProvider=r.default,t.Nav=o.default,t.NavItem=i.default,t.Content=u.default},"./node_modules/@rsuite/document-nav/lib/utils/createNavItems.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("./node_modules/react/index.js")),i=n("./node_modules/@rsuite/document-nav/lib/NavItem.js"),u=(r=i)&&r.__esModule?r:{default:r},l=n("./node_modules/@rsuite/document-nav/lib/constants/index.js");t.default=function(e,t,n){var r=[];if(1===e.length){var i=e[0];return o.createElement(u.default,{anchor:i.anchor,title:i.title,level:t+1,index:n?n+".1":"1"})}if(0===e.length)return null;for(var a=1,s=0;s<e.length;){for(var c=e[s],f=c.level,d=-1,p=s+1;p<e.length;p+=1)if(e[p].level<=f){d=p;break}if(!(d>0)){var v=e.slice(s+1,e.length),h=n?n+"."+a:""+a;r.push(o.createElement(u.default,{anchor:c.anchor,title:c.title,level:t+1,subItems:0===v.length?l.emptyArray:v,index:h,key:h+" "+c.anchor}));break}var m=e.slice(s+1,d),b=n?n+"."+a:""+a;r.push(o.createElement(u.default,{anchor:c.anchor,title:c.title,level:t+1,subItems:0===m.length?l.emptyArray:m,index:b,key:b+" "+c.anchor})),s=d,a+=1}return r}},"./node_modules/@rsuite/document-nav/lib/utils/throttle.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r,o,i,u=null,l=0,a=Date.now||function(){return(new Date).getTime()};n||(n={});var s=function(){l=!1===n.leading?0:a(),u=null,i=e.apply(r,o),u||(r=o=null)};return function(){var c=a();l||!1!==n.leading||(l=c);var f=t-(c-l);return r=this,o=arguments,f<=0||f>t?(u&&(clearTimeout(u),u=null),l=c,i=e.apply(r,o),u||(r=o=null)):u||!1===n.trailing||(u=setTimeout(s,f)),i}}},"./node_modules/change-emitter/lib/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.createChangeEmitter=function(){var e=[],t=e;function n(){t===e&&(t=e.slice())}return{listen:function(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var r=!0;return n(),t.push(e),function(){if(r){r=!1,n();var o=t.indexOf(e);t.splice(o,1)}}},emit:function(){for(var n=e=t,r=0;r<n.length;r++)n[r].apply(n,arguments)}}}},0:function(e,t,n){e.exports=n("./docs/index.js")}}]);