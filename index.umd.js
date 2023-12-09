(function(E,d){typeof exports=="object"&&typeof module<"u"?d(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],d):(E=typeof globalThis<"u"?globalThis:E||self,d(E["toast-notification"]={},E.React))})(this,function(E,d){"use strict";var Et=Object.defineProperty;var Rt=(E,d,D)=>d in E?Et(E,d,{enumerable:!0,configurable:!0,writable:!0,value:D}):E[d]=D;var Le=(E,d,D)=>(Rt(E,typeof d!="symbol"?d+"":d,D),D);class D{constructor(){Le(this,"listeners",new Map([]))}on(u,m){var l;this.listeners.has(u)||this.listeners.set(u,[]),(l=this.listeners.get(u))==null||l.push(m)}emit(u,m){var l;this.listeners.has(u)&&((l=this.listeners.get(u))==null||l.forEach(R=>R(m)))}removeListener(u,m){const l=this.listeners.get(u);if(!l)return;const R=l.filter(c=>c!==m);this.listeners.set(u,R)}}function $(o){return function(u){if(d.isValidElement(u))return A({content:u,type:o});const{content:m,duration:l}=u;return A({content:m,duration:l,type:o})}}function Ue(o){if(o)return d.isValidElement(o)||typeof o!="object"||Array.isArray(o)?o:JSON.stringify(o)}const ee=new D;function A({duration:o,content:u,type:m}){u=Ue(u),ee.emit("add-toast",{content:u,duration:o,type:m})}A.error=$("error"),A.success=$("success"),A.warn=$("warn"),A.info=$("info"),A.ghost=$("ghost");var te={exports:{}},G={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var de;function Ye(){return de||(de=1,process.env.NODE_ENV!=="production"&&function(){var o=d,u=Symbol.for("react.element"),m=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),C=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),T=Symbol.for("react.offscreen"),j=Symbol.iterator,W="@@iterator";function L(e){if(e===null||typeof e!="object")return null;var t=j&&e[j]||e[W];return typeof t=="function"?t:null}var x=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function b(e){{for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];U("error",e,r)}}function U(e,t,r){{var n=x.ReactDebugCurrentFrame,s=n.getStackAddendum();s!==""&&(t+="%s",r=r.concat([s]));var f=r.map(function(i){return String(i)});f.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,f)}}var ne=!1,Be=!1,Je=!1,ze=!1,Ke=!1,_e;_e=Symbol.for("react.module.reference");function He(e){return!!(typeof e=="string"||typeof e=="function"||e===l||e===c||Ke||e===R||e===P||e===p||ze||e===T||ne||Be||Je||typeof e=="object"&&e!==null&&(e.$$typeof===h||e.$$typeof===w||e.$$typeof===O||e.$$typeof===C||e.$$typeof===v||e.$$typeof===_e||e.getModuleId!==void 0))}function Xe(e,t,r){var n=e.displayName;if(n)return n;var s=t.displayName||t.name||"";return s!==""?r+"("+s+")":r}function ge(e){return e.displayName||"Context"}function k(e){if(e==null)return null;if(typeof e.tag=="number"&&b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case l:return"Fragment";case m:return"Portal";case c:return"Profiler";case R:return"StrictMode";case P:return"Suspense";case p:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case C:var t=e;return ge(t)+".Consumer";case O:var r=e;return ge(r._context)+".Provider";case v:return Xe(e,e.render,"ForwardRef");case w:var n=e.displayName||null;return n!==null?n:k(e.type)||"Memo";case h:{var s=e,f=s._payload,i=s._init;try{return k(i(f))}catch{return null}}}return null}var M=Object.assign,J=0,me,pe,he,be,ye,Ee,Re;function we(){}we.__reactDisabledLog=!0;function Ze(){{if(J===0){me=console.log,pe=console.info,he=console.warn,be=console.error,ye=console.group,Ee=console.groupCollapsed,Re=console.groupEnd;var e={configurable:!0,enumerable:!0,value:we,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}J++}}function Qe(){{if(J--,J===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:M({},e,{value:me}),info:M({},e,{value:pe}),warn:M({},e,{value:he}),error:M({},e,{value:be}),group:M({},e,{value:ye}),groupCollapsed:M({},e,{value:Ee}),groupEnd:M({},e,{value:Re})})}J<0&&b("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var oe=x.ReactCurrentDispatcher,ae;function X(e,t,r){{if(ae===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);ae=n&&n[1]||""}return`
`+ae+e}}var ie=!1,Z;{var qe=typeof WeakMap=="function"?WeakMap:Map;Z=new qe}function xe(e,t){if(!e||ie)return"";{var r=Z.get(e);if(r!==void 0)return r}var n;ie=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var f;f=oe.current,oe.current=null,Ze();try{if(t){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(I){n=I}Reflect.construct(e,[],i)}else{try{i.call()}catch(I){n=I}e.call(i.prototype)}}else{try{throw Error()}catch(I){n=I}e()}}catch(I){if(I&&n&&typeof I.stack=="string"){for(var a=I.stack.split(`
`),y=n.stack.split(`
`),_=a.length-1,g=y.length-1;_>=1&&g>=0&&a[_]!==y[g];)g--;for(;_>=1&&g>=0;_--,g--)if(a[_]!==y[g]){if(_!==1||g!==1)do if(_--,g--,g<0||a[_]!==y[g]){var S=`
`+a[_].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),typeof e=="function"&&Z.set(e,S),S}while(_>=1&&g>=0);break}}}finally{ie=!1,oe.current=f,Qe(),Error.prepareStackTrace=s}var V=e?e.displayName||e.name:"",We=V?X(V):"";return typeof e=="function"&&Z.set(e,We),We}function Ne(e,t,r){return xe(e,!1)}function et(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function Q(e,t,r){if(e==null)return"";if(typeof e=="function")return xe(e,et(e));if(typeof e=="string")return X(e);switch(e){case P:return X("Suspense");case p:return X("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case v:return Ne(e.render);case w:return Q(e.type,t,r);case h:{var n=e,s=n._payload,f=n._init;try{return Q(f(s),t,r)}catch{}}}return""}var q=Object.prototype.hasOwnProperty,Ce={},Te=x.ReactDebugCurrentFrame;function N(e){if(e){var t=e._owner,r=Q(e.type,e._source,t?t.type:null);Te.setExtraStackFrame(r)}else Te.setExtraStackFrame(null)}function tt(e,t,r,n,s){{var f=Function.call.bind(q);for(var i in e)if(f(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var y=Error((n||"React class")+": "+r+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw y.name="Invariant Violation",y}a=e[i](t,i,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(_){a=_}a&&!(a instanceof Error)&&(N(s),b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,i,typeof a),N(null)),a instanceof Error&&!(a.message in Ce)&&(Ce[a.message]=!0,N(s),b("Failed %s type: %s",r,a.message),N(null))}}}var rt=Array.isArray;function se(e){return rt(e)}function nt(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,r=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return r}}function ot(e){try{return Se(e),!1}catch{return!0}}function Se(e){return""+e}function Oe(e){if(ot(e))return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",nt(e)),Se(e)}var z=x.ReactCurrentOwner,at={key:!0,ref:!0,__self:!0,__source:!0},Pe,je,ue;ue={};function it(e){if(q.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==void 0}function st(e){if(q.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function ut(e,t){if(typeof e.ref=="string"&&z.current&&t&&z.current.stateNode!==t){var r=k(z.current.type);ue[r]||(b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',k(z.current.type),e.ref),ue[r]=!0)}}function ft(e,t){{var r=function(){Pe||(Pe=!0,b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}}function ct(e,t){{var r=function(){je||(je=!0,b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}}var lt=function(e,t,r,n,s,f,i){var a={$$typeof:u,type:e,key:t,ref:r,props:i,_owner:f};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:s}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function dt(e,t,r,n,s){{var f,i={},a=null,y=null;r!==void 0&&(Oe(r),a=""+r),st(t)&&(Oe(t.key),a=""+t.key),it(t)&&(y=t.ref,ut(t,s));for(f in t)q.call(t,f)&&!at.hasOwnProperty(f)&&(i[f]=t[f]);if(e&&e.defaultProps){var _=e.defaultProps;for(f in _)i[f]===void 0&&(i[f]=_[f])}if(a||y){var g=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&ft(i,g),y&&ct(i,g)}return lt(e,a,y,s,n,z.current,i)}}var fe=x.ReactCurrentOwner,ke=x.ReactDebugCurrentFrame;function Y(e){if(e){var t=e._owner,r=Q(e.type,e._source,t?t.type:null);ke.setExtraStackFrame(r)}else ke.setExtraStackFrame(null)}var ce;ce=!1;function le(e){return typeof e=="object"&&e!==null&&e.$$typeof===u}function Ie(){{if(fe.current){var e=k(fe.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function vt(e){{if(e!==void 0){var t=e.fileName.replace(/^.*[\\\/]/,""),r=e.lineNumber;return`

Check your code at `+t+":"+r+"."}return""}}var Ae={};function _t(e){{var t=Ie();if(!t){var r=typeof e=="string"?e:e.displayName||e.name;r&&(t=`

Check the top-level render call using <`+r+">.")}return t}}function De(e,t){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var r=_t(t);if(Ae[r])return;Ae[r]=!0;var n="";e&&e._owner&&e._owner!==fe.current&&(n=" It was passed a child from "+k(e._owner.type)+"."),Y(e),b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),Y(null)}}function Fe(e,t){{if(typeof e!="object")return;if(se(e))for(var r=0;r<e.length;r++){var n=e[r];le(n)&&De(n,t)}else if(le(e))e._store&&(e._store.validated=!0);else if(e){var s=L(e);if(typeof s=="function"&&s!==e.entries)for(var f=s.call(e),i;!(i=f.next()).done;)le(i.value)&&De(i.value,t)}}}function gt(e){{var t=e.type;if(t==null||typeof t=="string")return;var r;if(typeof t=="function")r=t.propTypes;else if(typeof t=="object"&&(t.$$typeof===v||t.$$typeof===w))r=t.propTypes;else return;if(r){var n=k(t);tt(r,e.props,"prop",n,e)}else if(t.PropTypes!==void 0&&!ce){ce=!0;var s=k(t);b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",s||"Unknown")}typeof t.getDefaultProps=="function"&&!t.getDefaultProps.isReactClassApproved&&b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function mt(e){{for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if(n!=="children"&&n!=="key"){Y(e),b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),Y(null);break}}e.ref!==null&&(Y(e),b("Invalid attribute `ref` supplied to `React.Fragment`."),Y(null))}}function Me(e,t,r,n,s,f){{var i=He(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var y=vt(s);y?a+=y:a+=Ie();var _;e===null?_="null":se(e)?_="array":e!==void 0&&e.$$typeof===u?(_="<"+(k(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):_=typeof e,b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",_,a)}var g=dt(e,t,r,s,f);if(g==null)return g;if(i){var S=t.children;if(S!==void 0)if(n)if(se(S)){for(var V=0;V<S.length;V++)Fe(S[V],e);Object.freeze&&Object.freeze(S)}else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Fe(S,e)}return e===l?mt(g):gt(g),g}}function pt(e,t,r){return Me(e,t,r,!0)}function ht(e,t,r){return Me(e,t,r,!1)}var bt=ht,yt=pt;G.Fragment=l,G.jsx=bt,G.jsxs=yt}()),G}var B={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve;function Ve(){if(ve)return B;ve=1;var o=d,u=Symbol.for("react.element"),m=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,R=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function O(C,v,P){var p,w={},h=null,T=null;P!==void 0&&(h=""+P),v.key!==void 0&&(h=""+v.key),v.ref!==void 0&&(T=v.ref);for(p in v)l.call(v,p)&&!c.hasOwnProperty(p)&&(w[p]=v[p]);if(C&&C.defaultProps)for(p in v=C.defaultProps,v)w[p]===void 0&&(w[p]=v[p]);return{$$typeof:u,type:C,key:h,ref:T,props:w,_owner:R.current}}return B.Fragment=m,B.jsx=O,B.jsxs=O,B}process.env.NODE_ENV==="production"?te.exports=Ve():te.exports=Ye();var re=te.exports;function K(o){if(!(!o||typeof o!="object"))return o}function H(o){return!o||typeof o!="string"?"":o}const F={"toast-container":"_toast-container_1xwv1_1","animation-message-right-top":"_animation-message-right-top_1xwv1_8","animation-message-right-center":"_animation-message-right-center_1xwv1_9","animation-message-right-bottom":"_animation-message-right-bottom_1xwv1_10",screenRightIn:"_screenRightIn_1xwv1_1","right-top":"_right-top_1xwv1_14","right-center":"_right-center_1xwv1_15","right-bottom":"_right-bottom_1xwv1_16","animation-message-center-top":"_animation-message-center-top_1xwv1_36","animation-message-center-bottom":"_animation-message-center-bottom_1xwv1_37","animation-message-center-center":"_animation-message-center-center_1xwv1_38",screenCenterIn:"_screenCenterIn_1xwv1_1","center-top":"_center-top_1xwv1_42","center-center":"_center-center_1xwv1_43","center-bottom":"_center-bottom_1xwv1_44","animation-message-left-top":"_animation-message-left-top_1xwv1_63","animation-message-left-center":"_animation-message-left-center_1xwv1_64","animation-message-left-bottom":"_animation-message-left-bottom_1xwv1_65",screenLeftIn:"_screenLeftIn_1xwv1_1","left-top":"_left-top_1xwv1_69","left-center":"_left-center_1xwv1_70","left-bottom":"_left-bottom_1xwv1_71","toast-message":"_toast-message_1xwv1_89",success:"_success_1xwv1_114",info:"_info_1xwv1_118",warn:"_warn_1xwv1_123",error:"_error_1xwv1_127",ghost:"_ghost_1xwv1_132","animation-unmount":"_animation-unmount_1xwv1_136",screenOut:"_screenOut_1xwv1_1"};function $e({message:{duration:o=1e3*7,id:u,content:m,type:l},onRemoveMessage:R,classNames:c}){var W,L;const O=(W=c==null?void 0:c.toastMessages)==null?void 0:W["*"],C=(L=c==null?void 0:c.toastMessages)==null?void 0:L[l],[v,P]=d.useState(void 0);function p(){return v?F[v]?F[v]:v:""}function w(x){var U;const b=p();(U=x.currentTarget.classList)!=null&&U.contains(b)&&R(u)}function h(){const x=H(O),b=H(C),U=p(),ne=F[`animation-message-${c==null?void 0:c.toastPosition}`];return`${F["toast-message"]} ${F[l]} ${ne} ${U} ${b} ${x}`.trim()}function T(){return{...K(O),...K(C)}}const j=d.useCallback(()=>{P((c==null?void 0:c.animationUnmount)||"animation-unmount")},[c==null?void 0:c.animationUnmount]);return d.useEffect(()=>{const x=setTimeout(()=>j(),o);return()=>clearTimeout(x)},[R,u,o,j]),re.jsx("span",{tabIndex:0,onAnimationEnd:w,onClick:j,style:T(),className:h(),children:m})}function Ge({classNames:o,defaultDuration:u,position:m="right-top"}){var p,w;const l=(p=o==null?void 0:o.toastContainer)==null?void 0:p["*"],R=(w=o==null?void 0:o.toastContainer)==null?void 0:w[m],[c,O]=d.useState([]);function C(){const h=H(l),T=H(R);return`${F["toast-container"]} ${F[m]} ${T} ${h}`.trim()}function v(){return{...K(l),...K(R)}}const P=d.useCallback(h=>{O(T=>T.filter(j=>j.id!==h))},[]);return d.useEffect(()=>{function h(T){const{content:j,type:W,duration:L=u}=T;O(x=>[...x,{id:crypto.randomUUID(),content:j,duration:L,type:W}])}return ee.on("add-toast",h),()=>{ee.removeListener("add-toast",h)}},[u]),re.jsx("div",{style:v(),className:C(),children:c.map(h=>re.jsx($e,{message:h,onRemoveMessage:P,classNames:{toastPosition:m,toastMessages:o==null?void 0:o.toastMessages,animationUnmount:o==null?void 0:o.animationUnmount}},h.id))})}E.ToastContainer=Ge,E.toast=A,Object.defineProperty(E,Symbol.toStringTag,{value:"Module"})});