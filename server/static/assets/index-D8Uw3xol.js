(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Km={exports:{}},nc={},Zm={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var na=Symbol.for("react.element"),e_=Symbol.for("react.portal"),t_=Symbol.for("react.fragment"),n_=Symbol.for("react.strict_mode"),i_=Symbol.for("react.profiler"),r_=Symbol.for("react.provider"),s_=Symbol.for("react.context"),o_=Symbol.for("react.forward_ref"),a_=Symbol.for("react.suspense"),l_=Symbol.for("react.memo"),c_=Symbol.for("react.lazy"),bh=Symbol.iterator;function u_(t){return t===null||typeof t!="object"?null:(t=bh&&t[bh]||t["@@iterator"],typeof t=="function"?t:null)}var Qm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jm=Object.assign,eg={};function Ys(t,e,n){this.props=t,this.context=e,this.refs=eg,this.updater=n||Qm}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function tg(){}tg.prototype=Ys.prototype;function ld(t,e,n){this.props=t,this.context=e,this.refs=eg,this.updater=n||Qm}var cd=ld.prototype=new tg;cd.constructor=ld;Jm(cd,Ys.prototype);cd.isPureReactComponent=!0;var Ph=Array.isArray,ng=Object.prototype.hasOwnProperty,ud={current:null},ig={key:!0,ref:!0,__self:!0,__source:!0};function rg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ng.call(e,i)&&!ig.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:na,type:t,key:s,ref:o,props:r,_owner:ud.current}}function f_(t,e){return{$$typeof:na,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fd(t){return typeof t=="object"&&t!==null&&t.$$typeof===na}function d_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lh=/\/+/g;function Ac(t,e){return typeof t=="object"&&t!==null&&t.key!=null?d_(""+t.key):e.toString(36)}function nl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case na:case e_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ac(o,0):i,Ph(r)?(n="",t!=null&&(n=t.replace(Lh,"$&/")+"/"),nl(r,e,n,"",function(u){return u})):r!=null&&(fd(r)&&(r=f_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Lh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ph(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ac(s,a);o+=nl(s,e,n,l,r)}else if(l=u_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ac(s,a++),o+=nl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pa(t,e,n){if(t==null)return t;var i=[],r=0;return nl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function h_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},il={transition:null},p_={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:il,ReactCurrentOwner:ud};function sg(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:pa,forEach:function(t,e,n){pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pa(t,function(){e++}),e},toArray:function(t){return pa(t,function(e){return e})||[]},only:function(t){if(!fd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Ys;Ye.Fragment=t_;Ye.Profiler=i_;Ye.PureComponent=ld;Ye.StrictMode=n_;Ye.Suspense=a_;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p_;Ye.act=sg;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Jm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ud.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ng.call(e,l)&&!ig.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:na,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:s_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:r_,_context:t},t.Consumer=t};Ye.createElement=rg;Ye.createFactory=function(t){var e=rg.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:o_,render:t}};Ye.isValidElement=fd;Ye.lazy=function(t){return{$$typeof:c_,_payload:{_status:-1,_result:t},_init:h_}};Ye.memo=function(t,e){return{$$typeof:l_,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=il.transition;il.transition={};try{t()}finally{il.transition=e}};Ye.unstable_act=sg;Ye.useCallback=function(t,e){return Jt.current.useCallback(t,e)};Ye.useContext=function(t){return Jt.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return Jt.current.useEffect(t,e)};Ye.useId=function(){return Jt.current.useId()};Ye.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return Jt.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};Ye.useRef=function(t){return Jt.current.useRef(t)};Ye.useState=function(t){return Jt.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return Jt.current.useTransition()};Ye.version="18.3.1";Zm.exports=Ye;var be=Zm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_=be,g_=Symbol.for("react.element"),v_=Symbol.for("react.fragment"),__=Object.prototype.hasOwnProperty,x_=m_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y_={key:!0,ref:!0,__self:!0,__source:!0};function og(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)__.call(e,i)&&!y_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:g_,type:t,key:s,ref:o,props:r,_owner:x_.current}}nc.Fragment=v_;nc.jsx=og;nc.jsxs=og;Km.exports=nc;var W=Km.exports,ag={exports:{}},En={},lg={exports:{}},cg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,K){var J=D.length;D.push(K);e:for(;0<J;){var ae=J-1>>>1,ve=D[ae];if(0<r(ve,K))D[ae]=K,D[J]=ve,J=ae;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var K=D[0],J=D.pop();if(J!==K){D[0]=J;e:for(var ae=0,ve=D.length,ee=ve>>>1;ae<ee;){var k=2*(ae+1)-1,F=D[k],$=k+1,ne=D[$];if(0>r(F,J))$<ve&&0>r(ne,F)?(D[ae]=ne,D[$]=J,ae=$):(D[ae]=F,D[k]=J,ae=k);else if($<ve&&0>r(ne,J))D[ae]=ne,D[$]=J,ae=$;else break e}}return K}function r(D,K){var J=D.sortIndex-K.sortIndex;return J!==0?J:D.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,p=null,h=3,g=!1,x=!1,_=!1,c=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var K=n(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=D)i(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function S(D){if(_=!1,v(D),!x)if(n(l)!==null)x=!0,X(b);else{var K=n(u);K!==null&&q(S,K.startTime-D)}}function b(D,K){x=!1,_&&(_=!1,f(C),C=-1),g=!0;var J=h;try{for(v(K),p=n(l);p!==null&&(!(p.expirationTime>K)||D&&!P());){var ae=p.callback;if(typeof ae=="function"){p.callback=null,h=p.priorityLevel;var ve=ae(p.expirationTime<=K);K=t.unstable_now(),typeof ve=="function"?p.callback=ve:p===n(l)&&i(l),v(K)}else i(l);p=n(l)}if(p!==null)var ee=!0;else{var k=n(u);k!==null&&q(S,k.startTime-K),ee=!1}return ee}finally{p=null,h=J,g=!1}}var T=!1,A=null,C=-1,E=5,y=-1;function P(){return!(t.unstable_now()-y<E)}function O(){if(A!==null){var D=t.unstable_now();y=D;var K=!0;try{K=A(!0,D)}finally{K?z():(T=!1,A=null)}}else T=!1}var z;if(typeof m=="function")z=function(){m(O)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,Y=j.port2;j.port1.onmessage=O,z=function(){Y.postMessage(null)}}else z=function(){c(O,0)};function X(D){A=D,T||(T=!0,z())}function q(D,K){C=c(function(){D(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,X(b))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var J=h;h=K;try{return D()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var J=h;h=D;try{return K()}finally{h=J}},t.unstable_scheduleCallback=function(D,K,J){var ae=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ae+J:ae):J=ae,D){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=J+ve,D={id:d++,callback:K,priorityLevel:D,startTime:J,expirationTime:ve,sortIndex:-1},J>ae?(D.sortIndex=J,e(u,D),n(l)===null&&D===n(u)&&(_?(f(C),C=-1):_=!0,q(S,J-ae))):(D.sortIndex=ve,e(l,D),x||g||(x=!0,X(b))),D},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(D){var K=h;return function(){var J=h;h=K;try{return D.apply(this,arguments)}finally{h=J}}}})(cg);lg.exports=cg;var S_=lg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_=be,Mn=S_;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ug=new Set,Uo={};function zr(t,e){Ns(t,e),Ns(t+"Capture",e)}function Ns(t,e){for(Uo[t]=e,t=0;t<e.length;t++)ug.add(e[t])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=Object.prototype.hasOwnProperty,E_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dh={},Ih={};function w_(t){return Lu.call(Ih,t)?!0:Lu.call(Dh,t)?!1:E_.test(t)?Ih[t]=!0:(Dh[t]=!0,!1)}function T_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A_(t,e,n,i){if(e===null||typeof e>"u"||T_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var dd=/[\-:]([a-z])/g;function hd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dd,hd);Vt[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dd,hd);Vt[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dd,hd);Vt[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function pd(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(A_(e,n,r,i)&&(n=null),i||r===null?w_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Pi=M_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ma=Symbol.for("react.element"),us=Symbol.for("react.portal"),fs=Symbol.for("react.fragment"),md=Symbol.for("react.strict_mode"),Du=Symbol.for("react.profiler"),fg=Symbol.for("react.provider"),dg=Symbol.for("react.context"),gd=Symbol.for("react.forward_ref"),Iu=Symbol.for("react.suspense"),Uu=Symbol.for("react.suspense_list"),vd=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy"),hg=Symbol.for("react.offscreen"),Uh=Symbol.iterator;function Qs(t){return t===null||typeof t!="object"?null:(t=Uh&&t[Uh]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Cc;function mo(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var Rc=!1;function bc(t,e){if(!t||Rc)return"";Rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?mo(t):""}function C_(t){switch(t.tag){case 5:return mo(t.type);case 16:return mo("Lazy");case 13:return mo("Suspense");case 19:return mo("SuspenseList");case 0:case 2:case 15:return t=bc(t.type,!1),t;case 11:return t=bc(t.type.render,!1),t;case 1:return t=bc(t.type,!0),t;default:return""}}function Nu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fs:return"Fragment";case us:return"Portal";case Du:return"Profiler";case md:return"StrictMode";case Iu:return"Suspense";case Uu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dg:return(t.displayName||"Context")+".Consumer";case fg:return(t._context.displayName||"Context")+".Provider";case gd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vd:return e=t.displayName||null,e!==null?e:Nu(t.type)||"Memo";case Bi:e=t._payload,t=t._init;try{return Nu(t(e))}catch{}}return null}function R_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nu(e);case 8:return e===md?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function b_(t){var e=pg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ga(t){t._valueTracker||(t._valueTracker=b_(t))}function mg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=pg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fu(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Nh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gg(t,e){e=e.checked,e!=null&&pd(t,"checked",e,!1)}function Ou(t,e){gg(t,e);var n=rr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ku(t,e.type,n):e.hasOwnProperty("defaultValue")&&ku(t,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ku(t,e,n){(e!=="number"||yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var go=Array.isArray;function Ts(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+rr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function zu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Oh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(go(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rr(n)}}function vg(t,e){var n=rr(e.value),i=rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function kh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _g(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_g(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var va,xg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(va=va||document.createElement("div"),va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=va.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function No(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P_=["Webkit","ms","Moz","O"];Object.keys(Eo).forEach(function(t){P_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Eo[e]=Eo[t]})});function yg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Eo.hasOwnProperty(t)&&Eo[t]?(""+e).trim():e+"px"}function Sg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=yg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var L_=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hu(t,e){if(e){if(L_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Vu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gu=null;function _d(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wu=null,As=null,Cs=null;function zh(t){if(t=sa(t)){if(typeof Wu!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=ac(e),Wu(t.stateNode,t.type,e))}}function Mg(t){As?Cs?Cs.push(t):Cs=[t]:As=t}function Eg(){if(As){var t=As,e=Cs;if(Cs=As=null,zh(t),e)for(t=0;t<e.length;t++)zh(e[t])}}function wg(t,e){return t(e)}function Tg(){}var Pc=!1;function Ag(t,e,n){if(Pc)return t(e,n);Pc=!0;try{return wg(t,e,n)}finally{Pc=!1,(As!==null||Cs!==null)&&(Tg(),Eg())}}function Fo(t,e){var n=t.stateNode;if(n===null)return null;var i=ac(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Xu=!1;if(wi)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Xu=!1}function D_(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var wo=!1,Sl=null,Ml=!1,ju=null,I_={onError:function(t){wo=!0,Sl=t}};function U_(t,e,n,i,r,s,o,a,l){wo=!1,Sl=null,D_.apply(I_,arguments)}function N_(t,e,n,i,r,s,o,a,l){if(U_.apply(this,arguments),wo){if(wo){var u=Sl;wo=!1,Sl=null}else throw Error(oe(198));Ml||(Ml=!0,ju=u)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bh(t){if(Br(t)!==t)throw Error(oe(188))}function F_(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Bh(r),t;if(s===i)return Bh(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Rg(t){return t=F_(t),t!==null?bg(t):null}function bg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bg(t);if(e!==null)return e;t=t.sibling}return null}var Pg=Mn.unstable_scheduleCallback,Hh=Mn.unstable_cancelCallback,O_=Mn.unstable_shouldYield,k_=Mn.unstable_requestPaint,Et=Mn.unstable_now,z_=Mn.unstable_getCurrentPriorityLevel,xd=Mn.unstable_ImmediatePriority,Lg=Mn.unstable_UserBlockingPriority,El=Mn.unstable_NormalPriority,B_=Mn.unstable_LowPriority,Dg=Mn.unstable_IdlePriority,ic=null,oi=null;function H_(t){if(oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(ic,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:W_,V_=Math.log,G_=Math.LN2;function W_(t){return t>>>=0,t===0?32:31-(V_(t)/G_|0)|0}var _a=64,xa=4194304;function vo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=vo(a):(s&=o,s!==0&&(i=vo(s)))}else o=n&~r,o!==0?i=vo(o):s!==0&&(i=vo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$n(e),r=1<<n,i|=t[n],e&=~r;return i}function X_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=X_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Yu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ig(){var t=_a;return _a<<=1,!(_a&4194240)&&(_a=64),t}function Lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ia(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function Y_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$n(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function yd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$n(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function Ug(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ng,Sd,Fg,Og,kg,$u=!1,ya=[],Yi=null,$i=null,qi=null,Oo=new Map,ko=new Map,Vi=[],$_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vh(t,e){switch(t){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(e.pointerId)}}function eo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=sa(e),e!==null&&Sd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function q_(t,e,n,i,r){switch(e){case"focusin":return Yi=eo(Yi,t,e,n,i,r),!0;case"dragenter":return $i=eo($i,t,e,n,i,r),!0;case"mouseover":return qi=eo(qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Oo.set(s,eo(Oo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ko.set(s,eo(ko.get(s)||null,t,e,n,i,r)),!0}return!1}function zg(t){var e=wr(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=Cg(n),e!==null){t.blockedOn=e,kg(t.priority,function(){Fg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Gu=i,n.target.dispatchEvent(i),Gu=null}else return e=sa(n),e!==null&&Sd(e),t.blockedOn=n,!1;e.shift()}return!0}function Gh(t,e,n){rl(t)&&n.delete(e)}function K_(){$u=!1,Yi!==null&&rl(Yi)&&(Yi=null),$i!==null&&rl($i)&&($i=null),qi!==null&&rl(qi)&&(qi=null),Oo.forEach(Gh),ko.forEach(Gh)}function to(t,e){t.blockedOn===e&&(t.blockedOn=null,$u||($u=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,K_)))}function zo(t){function e(r){return to(r,t)}if(0<ya.length){to(ya[0],t);for(var n=1;n<ya.length;n++){var i=ya[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Yi!==null&&to(Yi,t),$i!==null&&to($i,t),qi!==null&&to(qi,t),Oo.forEach(e),ko.forEach(e),n=0;n<Vi.length;n++)i=Vi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Vi.length&&(n=Vi[0],n.blockedOn===null);)zg(n),n.blockedOn===null&&Vi.shift()}var Rs=Pi.ReactCurrentBatchConfig,Tl=!0;function Z_(t,e,n,i){var r=rt,s=Rs.transition;Rs.transition=null;try{rt=1,Md(t,e,n,i)}finally{rt=r,Rs.transition=s}}function Q_(t,e,n,i){var r=rt,s=Rs.transition;Rs.transition=null;try{rt=4,Md(t,e,n,i)}finally{rt=r,Rs.transition=s}}function Md(t,e,n,i){if(Tl){var r=qu(t,e,n,i);if(r===null)Hc(t,e,i,Al,n),Vh(t,i);else if(q_(r,t,e,n,i))i.stopPropagation();else if(Vh(t,i),e&4&&-1<$_.indexOf(t)){for(;r!==null;){var s=sa(r);if(s!==null&&Ng(s),s=qu(t,e,n,i),s===null&&Hc(t,e,i,Al,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Hc(t,e,i,null,n)}}var Al=null;function qu(t,e,n,i){if(Al=null,t=_d(i),t=wr(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Al=t,null}function Bg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z_()){case xd:return 1;case Lg:return 4;case El:case B_:return 16;case Dg:return 536870912;default:return 16}default:return 16}}var Xi=null,Ed=null,sl=null;function Hg(){if(sl)return sl;var t,e=Ed,n=e.length,i,r="value"in Xi?Xi.value:Xi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return sl=r.slice(t,1<i?1-i:void 0)}function ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sa(){return!0}function Wh(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Sa:Wh,this.isPropagationStopped=Wh,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),e}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wd=wn($s),ra=_t({},$s,{view:0,detail:0}),J_=wn(ra),Dc,Ic,no,rc=_t({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Td,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(Dc=t.screenX-no.screenX,Ic=t.screenY-no.screenY):Ic=Dc=0,no=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),Xh=wn(rc),ex=_t({},rc,{dataTransfer:0}),tx=wn(ex),nx=_t({},ra,{relatedTarget:0}),Uc=wn(nx),ix=_t({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),rx=wn(ix),sx=_t({},$s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ox=wn(sx),ax=_t({},$s,{data:0}),jh=wn(ax),lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ux[t])?!!e[t]:!1}function Td(){return fx}var dx=_t({},ra,{key:function(t){if(t.key){var e=lx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Td,charCode:function(t){return t.type==="keypress"?ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hx=wn(dx),px=_t({},rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yh=wn(px),mx=_t({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Td}),gx=wn(mx),vx=_t({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),_x=wn(vx),xx=_t({},rc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yx=wn(xx),Sx=[9,13,27,32],Ad=wi&&"CompositionEvent"in window,To=null;wi&&"documentMode"in document&&(To=document.documentMode);var Mx=wi&&"TextEvent"in window&&!To,Vg=wi&&(!Ad||To&&8<To&&11>=To),$h=" ",qh=!1;function Gg(t,e){switch(t){case"keyup":return Sx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function Ex(t,e){switch(t){case"compositionend":return Wg(e);case"keypress":return e.which!==32?null:(qh=!0,$h);case"textInput":return t=e.data,t===$h&&qh?null:t;default:return null}}function wx(t,e){if(ds)return t==="compositionend"||!Ad&&Gg(t,e)?(t=Hg(),sl=Ed=Xi=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vg&&e.locale!=="ko"?null:e.data;default:return null}}var Tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Tx[t.type]:e==="textarea"}function Xg(t,e,n,i){Mg(i),e=Cl(e,"onChange"),0<e.length&&(n=new wd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ao=null,Bo=null;function Ax(t){n0(t,0)}function sc(t){var e=ms(t);if(mg(e))return t}function Cx(t,e){if(t==="change")return e}var jg=!1;if(wi){var Nc;if(wi){var Fc="oninput"in document;if(!Fc){var Zh=document.createElement("div");Zh.setAttribute("oninput","return;"),Fc=typeof Zh.oninput=="function"}Nc=Fc}else Nc=!1;jg=Nc&&(!document.documentMode||9<document.documentMode)}function Qh(){Ao&&(Ao.detachEvent("onpropertychange",Yg),Bo=Ao=null)}function Yg(t){if(t.propertyName==="value"&&sc(Bo)){var e=[];Xg(e,Bo,t,_d(t)),Ag(Ax,e)}}function Rx(t,e,n){t==="focusin"?(Qh(),Ao=e,Bo=n,Ao.attachEvent("onpropertychange",Yg)):t==="focusout"&&Qh()}function bx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sc(Bo)}function Px(t,e){if(t==="click")return sc(e)}function Lx(t,e){if(t==="input"||t==="change")return sc(e)}function Dx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:Dx;function Ho(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Lu.call(e,r)||!Zn(t[r],e[r]))return!1}return!0}function Jh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ep(t,e){var n=Jh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jh(n)}}function $g(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$g(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function qg(){for(var t=window,e=yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yl(t.document)}return e}function Cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ix(t){var e=qg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$g(n.ownerDocument.documentElement,n)){if(i!==null&&Cd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ep(n,s);var o=ep(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ux=wi&&"documentMode"in document&&11>=document.documentMode,hs=null,Ku=null,Co=null,Zu=!1;function tp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zu||hs==null||hs!==yl(i)||(i=hs,"selectionStart"in i&&Cd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Co&&Ho(Co,i)||(Co=i,i=Cl(Ku,"onSelect"),0<i.length&&(e=new wd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=hs)))}function Ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ps={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},Oc={},Kg={};wi&&(Kg=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function oc(t){if(Oc[t])return Oc[t];if(!ps[t])return t;var e=ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Kg)return Oc[t]=e[n];return t}var Zg=oc("animationend"),Qg=oc("animationiteration"),Jg=oc("animationstart"),e0=oc("transitionend"),t0=new Map,np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(t,e){t0.set(t,e),zr(e,[t])}for(var kc=0;kc<np.length;kc++){var zc=np[kc],Nx=zc.toLowerCase(),Fx=zc[0].toUpperCase()+zc.slice(1);ar(Nx,"on"+Fx)}ar(Zg,"onAnimationEnd");ar(Qg,"onAnimationIteration");ar(Jg,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(e0,"onTransitionEnd");Ns("onMouseEnter",["mouseout","mouseover"]);Ns("onMouseLeave",["mouseout","mouseover"]);Ns("onPointerEnter",["pointerout","pointerover"]);Ns("onPointerLeave",["pointerout","pointerover"]);zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ox=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function ip(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,N_(i,e,void 0,t),t.currentTarget=null}function n0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ip(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ip(r,a,u),s=l}}}if(Ml)throw t=ju,Ml=!1,ju=null,t}function at(t,e){var n=e[nf];n===void 0&&(n=e[nf]=new Set);var i=t+"__bubble";n.has(i)||(i0(e,t,2,!1),n.add(i))}function Bc(t,e,n){var i=0;e&&(i|=4),i0(n,t,i,e)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[Ea]){t[Ea]=!0,ug.forEach(function(n){n!=="selectionchange"&&(Ox.has(n)||Bc(n,!1,t),Bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ea]||(e[Ea]=!0,Bc("selectionchange",!1,e))}}function i0(t,e,n,i){switch(Bg(e)){case 1:var r=Z_;break;case 4:r=Q_;break;default:r=Md}n=r.bind(null,e,n,t),r=void 0,!Xu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Hc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=wr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ag(function(){var u=s,d=_d(n),p=[];e:{var h=t0.get(t);if(h!==void 0){var g=wd,x=t;switch(t){case"keypress":if(ol(n)===0)break e;case"keydown":case"keyup":g=hx;break;case"focusin":x="focus",g=Uc;break;case"focusout":x="blur",g=Uc;break;case"beforeblur":case"afterblur":g=Uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=gx;break;case Zg:case Qg:case Jg:g=rx;break;case e0:g=_x;break;case"scroll":g=J_;break;case"wheel":g=yx;break;case"copy":case"cut":case"paste":g=ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Yh}var _=(e&4)!==0,c=!_&&t==="scroll",f=_?h!==null?h+"Capture":null:h;_=[];for(var m=u,v;m!==null;){v=m;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,f!==null&&(S=Fo(m,f),S!=null&&_.push(Go(m,S,v)))),c)break;m=m.return}0<_.length&&(h=new g(h,x,null,n,d),p.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Gu&&(x=n.relatedTarget||n.fromElement)&&(wr(x)||x[Ti]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?wr(x):null,x!==null&&(c=Br(x),x!==c||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(_=Xh,S="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(_=Yh,S="onPointerLeave",f="onPointerEnter",m="pointer"),c=g==null?h:ms(g),v=x==null?h:ms(x),h=new _(S,m+"leave",g,n,d),h.target=c,h.relatedTarget=v,S=null,wr(d)===u&&(_=new _(f,m+"enter",x,n,d),_.target=v,_.relatedTarget=c,S=_),c=S,g&&x)t:{for(_=g,f=x,m=0,v=_;v;v=Gr(v))m++;for(v=0,S=f;S;S=Gr(S))v++;for(;0<m-v;)_=Gr(_),m--;for(;0<v-m;)f=Gr(f),v--;for(;m--;){if(_===f||f!==null&&_===f.alternate)break t;_=Gr(_),f=Gr(f)}_=null}else _=null;g!==null&&rp(p,h,g,_,!1),x!==null&&c!==null&&rp(p,c,x,_,!0)}}e:{if(h=u?ms(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var b=Cx;else if(Kh(h))if(jg)b=Lx;else{b=bx;var T=Rx}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=Px);if(b&&(b=b(t,u))){Xg(p,b,n,d);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&ku(h,"number",h.value)}switch(T=u?ms(u):window,t){case"focusin":(Kh(T)||T.contentEditable==="true")&&(hs=T,Ku=u,Co=null);break;case"focusout":Co=Ku=hs=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,tp(p,n,d);break;case"selectionchange":if(Ux)break;case"keydown":case"keyup":tp(p,n,d)}var A;if(Ad)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else ds?Gg(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Vg&&n.locale!=="ko"&&(ds||C!=="onCompositionStart"?C==="onCompositionEnd"&&ds&&(A=Hg()):(Xi=d,Ed="value"in Xi?Xi.value:Xi.textContent,ds=!0)),T=Cl(u,C),0<T.length&&(C=new jh(C,t,null,n,d),p.push({event:C,listeners:T}),A?C.data=A:(A=Wg(n),A!==null&&(C.data=A)))),(A=Mx?Ex(t,n):wx(t,n))&&(u=Cl(u,"onBeforeInput"),0<u.length&&(d=new jh("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=A))}n0(p,e)})}function Go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Fo(t,n),s!=null&&i.unshift(Go(t,s,r)),s=Fo(t,e),s!=null&&i.push(Go(t,s,r))),t=t.return}return i}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Fo(n,s),l!=null&&o.unshift(Go(n,l,a))):r||(l=Fo(n,s),l!=null&&o.push(Go(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var kx=/\r\n?/g,zx=/\u0000|\uFFFD/g;function sp(t){return(typeof t=="string"?t:""+t).replace(kx,`
`).replace(zx,"")}function wa(t,e,n){if(e=sp(e),sp(t)!==e&&n)throw Error(oe(425))}function Rl(){}var Qu=null,Ju=null;function ef(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tf=typeof setTimeout=="function"?setTimeout:void 0,Bx=typeof clearTimeout=="function"?clearTimeout:void 0,op=typeof Promise=="function"?Promise:void 0,Hx=typeof queueMicrotask=="function"?queueMicrotask:typeof op<"u"?function(t){return op.resolve(null).then(t).catch(Vx)}:tf;function Vx(t){setTimeout(function(){throw t})}function Vc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),zo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);zo(e)}function Ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ap(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qs=Math.random().toString(36).slice(2),ii="__reactFiber$"+qs,Wo="__reactProps$"+qs,Ti="__reactContainer$"+qs,nf="__reactEvents$"+qs,Gx="__reactListeners$"+qs,Wx="__reactHandles$"+qs;function wr(t){var e=t[ii];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ti]||n[ii]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ap(t);t!==null;){if(n=t[ii])return n;t=ap(t)}return e}t=n,n=t.parentNode}return null}function sa(t){return t=t[ii]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function ac(t){return t[Wo]||null}var rf=[],gs=-1;function lr(t){return{current:t}}function ct(t){0>gs||(t.current=rf[gs],rf[gs]=null,gs--)}function st(t,e){gs++,rf[gs]=t.current,t.current=e}var sr={},$t=lr(sr),an=lr(!1),Lr=sr;function Fs(t,e){var n=t.type.contextTypes;if(!n)return sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ln(t){return t=t.childContextTypes,t!=null}function bl(){ct(an),ct($t)}function lp(t,e,n){if($t.current!==sr)throw Error(oe(168));st($t,e),st(an,n)}function r0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,R_(t)||"Unknown",r));return _t({},n,i)}function Pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,Lr=$t.current,st($t,t),st(an,an.current),!0}function cp(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=r0(t,e,Lr),i.__reactInternalMemoizedMergedChildContext=t,ct(an),ct($t),st($t,t)):ct(an),st(an,n)}var _i=null,lc=!1,Gc=!1;function s0(t){_i===null?_i=[t]:_i.push(t)}function Xx(t){lc=!0,s0(t)}function cr(){if(!Gc&&_i!==null){Gc=!0;var t=0,e=rt;try{var n=_i;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}_i=null,lc=!1}catch(r){throw _i!==null&&(_i=_i.slice(t+1)),Pg(xd,cr),r}finally{rt=e,Gc=!1}}return null}var vs=[],_s=0,Ll=null,Dl=0,Cn=[],Rn=0,Dr=null,yi=1,Si="";function _r(t,e){vs[_s++]=Dl,vs[_s++]=Ll,Ll=t,Dl=e}function o0(t,e,n){Cn[Rn++]=yi,Cn[Rn++]=Si,Cn[Rn++]=Dr,Dr=t;var i=yi;t=Si;var r=32-$n(i)-1;i&=~(1<<r),n+=1;var s=32-$n(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,yi=1<<32-$n(e)+r|n<<r|i,Si=s+t}else yi=1<<s|n<<r|i,Si=t}function Rd(t){t.return!==null&&(_r(t,1),o0(t,1,0))}function bd(t){for(;t===Ll;)Ll=vs[--_s],vs[_s]=null,Dl=vs[--_s],vs[_s]=null;for(;t===Dr;)Dr=Cn[--Rn],Cn[Rn]=null,Si=Cn[--Rn],Cn[Rn]=null,yi=Cn[--Rn],Cn[Rn]=null}var yn=null,_n=null,ft=!1,Gn=null;function a0(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function up(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,_n=Ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:yi,overflow:Si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,_n=null,!0):!1;default:return!1}}function sf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function of(t){if(ft){var e=_n;if(e){var n=e;if(!up(t,e)){if(sf(t))throw Error(oe(418));e=Ki(n.nextSibling);var i=yn;e&&up(t,e)?a0(i,n):(t.flags=t.flags&-4097|2,ft=!1,yn=t)}}else{if(sf(t))throw Error(oe(418));t.flags=t.flags&-4097|2,ft=!1,yn=t}}}function fp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function Ta(t){if(t!==yn)return!1;if(!ft)return fp(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ef(t.type,t.memoizedProps)),e&&(e=_n)){if(sf(t))throw l0(),Error(oe(418));for(;e;)a0(t,e),e=Ki(e.nextSibling)}if(fp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=Ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=yn?Ki(t.stateNode.nextSibling):null;return!0}function l0(){for(var t=_n;t;)t=Ki(t.nextSibling)}function Os(){_n=yn=null,ft=!1}function Pd(t){Gn===null?Gn=[t]:Gn.push(t)}var jx=Pi.ReactCurrentBatchConfig;function io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function Aa(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dp(t){var e=t._init;return e(t._payload)}function c0(t){function e(f,m){if(t){var v=f.deletions;v===null?(f.deletions=[m],f.flags|=16):v.push(m)}}function n(f,m){if(!t)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function i(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function r(f,m){return f=er(f,m),f.index=0,f.sibling=null,f}function s(f,m,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<m?(f.flags|=2,m):v):(f.flags|=2,m)):(f.flags|=1048576,m)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,m,v,S){return m===null||m.tag!==6?(m=Kc(v,f.mode,S),m.return=f,m):(m=r(m,v),m.return=f,m)}function l(f,m,v,S){var b=v.type;return b===fs?d(f,m,v.props.children,S,v.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Bi&&dp(b)===m.type)?(S=r(m,v.props),S.ref=io(f,m,v),S.return=f,S):(S=hl(v.type,v.key,v.props,null,f.mode,S),S.ref=io(f,m,v),S.return=f,S)}function u(f,m,v,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Zc(v,f.mode,S),m.return=f,m):(m=r(m,v.children||[]),m.return=f,m)}function d(f,m,v,S,b){return m===null||m.tag!==7?(m=Pr(v,f.mode,S,b),m.return=f,m):(m=r(m,v),m.return=f,m)}function p(f,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Kc(""+m,f.mode,v),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ma:return v=hl(m.type,m.key,m.props,null,f.mode,v),v.ref=io(f,null,m),v.return=f,v;case us:return m=Zc(m,f.mode,v),m.return=f,m;case Bi:var S=m._init;return p(f,S(m._payload),v)}if(go(m)||Qs(m))return m=Pr(m,f.mode,v,null),m.return=f,m;Aa(f,m)}return null}function h(f,m,v,S){var b=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(f,m,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ma:return v.key===b?l(f,m,v,S):null;case us:return v.key===b?u(f,m,v,S):null;case Bi:return b=v._init,h(f,m,b(v._payload),S)}if(go(v)||Qs(v))return b!==null?null:d(f,m,v,S,null);Aa(f,v)}return null}function g(f,m,v,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(v)||null,a(m,f,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ma:return f=f.get(S.key===null?v:S.key)||null,l(m,f,S,b);case us:return f=f.get(S.key===null?v:S.key)||null,u(m,f,S,b);case Bi:var T=S._init;return g(f,m,v,T(S._payload),b)}if(go(S)||Qs(S))return f=f.get(v)||null,d(m,f,S,b,null);Aa(m,S)}return null}function x(f,m,v,S){for(var b=null,T=null,A=m,C=m=0,E=null;A!==null&&C<v.length;C++){A.index>C?(E=A,A=null):E=A.sibling;var y=h(f,A,v[C],S);if(y===null){A===null&&(A=E);break}t&&A&&y.alternate===null&&e(f,A),m=s(y,m,C),T===null?b=y:T.sibling=y,T=y,A=E}if(C===v.length)return n(f,A),ft&&_r(f,C),b;if(A===null){for(;C<v.length;C++)A=p(f,v[C],S),A!==null&&(m=s(A,m,C),T===null?b=A:T.sibling=A,T=A);return ft&&_r(f,C),b}for(A=i(f,A);C<v.length;C++)E=g(A,f,C,v[C],S),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?C:E.key),m=s(E,m,C),T===null?b=E:T.sibling=E,T=E);return t&&A.forEach(function(P){return e(f,P)}),ft&&_r(f,C),b}function _(f,m,v,S){var b=Qs(v);if(typeof b!="function")throw Error(oe(150));if(v=b.call(v),v==null)throw Error(oe(151));for(var T=b=null,A=m,C=m=0,E=null,y=v.next();A!==null&&!y.done;C++,y=v.next()){A.index>C?(E=A,A=null):E=A.sibling;var P=h(f,A,y.value,S);if(P===null){A===null&&(A=E);break}t&&A&&P.alternate===null&&e(f,A),m=s(P,m,C),T===null?b=P:T.sibling=P,T=P,A=E}if(y.done)return n(f,A),ft&&_r(f,C),b;if(A===null){for(;!y.done;C++,y=v.next())y=p(f,y.value,S),y!==null&&(m=s(y,m,C),T===null?b=y:T.sibling=y,T=y);return ft&&_r(f,C),b}for(A=i(f,A);!y.done;C++,y=v.next())y=g(A,f,C,y.value,S),y!==null&&(t&&y.alternate!==null&&A.delete(y.key===null?C:y.key),m=s(y,m,C),T===null?b=y:T.sibling=y,T=y);return t&&A.forEach(function(O){return e(f,O)}),ft&&_r(f,C),b}function c(f,m,v,S){if(typeof v=="object"&&v!==null&&v.type===fs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ma:e:{for(var b=v.key,T=m;T!==null;){if(T.key===b){if(b=v.type,b===fs){if(T.tag===7){n(f,T.sibling),m=r(T,v.props.children),m.return=f,f=m;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Bi&&dp(b)===T.type){n(f,T.sibling),m=r(T,v.props),m.ref=io(f,T,v),m.return=f,f=m;break e}n(f,T);break}else e(f,T);T=T.sibling}v.type===fs?(m=Pr(v.props.children,f.mode,S,v.key),m.return=f,f=m):(S=hl(v.type,v.key,v.props,null,f.mode,S),S.ref=io(f,m,v),S.return=f,f=S)}return o(f);case us:e:{for(T=v.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(f,m.sibling),m=r(m,v.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else e(f,m);m=m.sibling}m=Zc(v,f.mode,S),m.return=f,f=m}return o(f);case Bi:return T=v._init,c(f,m,T(v._payload),S)}if(go(v))return x(f,m,v,S);if(Qs(v))return _(f,m,v,S);Aa(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(f,m.sibling),m=r(m,v),m.return=f,f=m):(n(f,m),m=Kc(v,f.mode,S),m.return=f,f=m),o(f)):n(f,m)}return c}var ks=c0(!0),u0=c0(!1),Il=lr(null),Ul=null,xs=null,Ld=null;function Dd(){Ld=xs=Ul=null}function Id(t){var e=Il.current;ct(Il),t._currentValue=e}function af(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function bs(t,e){Ul=t,Ld=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(Ld!==t)if(t={context:t,memoizedValue:e,next:null},xs===null){if(Ul===null)throw Error(oe(308));xs=t,Ul.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return e}var Tr=null;function Ud(t){Tr===null?Tr=[t]:Tr.push(t)}function f0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ud(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ai(t,i)}function Ai(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hi=!1;function Nd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function d0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ai(t,n)}return r=i.interleaved,r===null?(e.next=e,Ud(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ai(t,n)}function al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yd(t,n)}}function hp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nl(t,e,n,i){var r=t.updateQueue;Hi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,d=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,_=a;switch(h=e,g=n,_.tag){case 1:if(x=_.payload,typeof x=="function"){p=x.call(g,p,h);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,h=typeof x=="function"?x.call(g,p,h):x,h==null)break e;p=_t({},p,h);break e;case 2:Hi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=p):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ur|=o,t.lanes=o,t.memoizedState=p}}function pp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var oa={},ai=lr(oa),Xo=lr(oa),jo=lr(oa);function Ar(t){if(t===oa)throw Error(oe(174));return t}function Fd(t,e){switch(st(jo,e),st(Xo,t),st(ai,oa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bu(e,t)}ct(ai),st(ai,e)}function zs(){ct(ai),ct(Xo),ct(jo)}function h0(t){Ar(jo.current);var e=Ar(ai.current),n=Bu(e,t.type);e!==n&&(st(Xo,t),st(ai,n))}function Od(t){Xo.current===t&&(ct(ai),ct(Xo))}var mt=lr(0);function Fl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function kd(){for(var t=0;t<Wc.length;t++)Wc[t]._workInProgressVersionPrimary=null;Wc.length=0}var ll=Pi.ReactCurrentDispatcher,Xc=Pi.ReactCurrentBatchConfig,Ir=0,gt=null,Rt=null,Nt=null,Ol=!1,Ro=!1,Yo=0,Yx=0;function Gt(){throw Error(oe(321))}function zd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function Bd(t,e,n,i,r,s){if(Ir=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ll.current=t===null||t.memoizedState===null?Zx:Qx,t=n(i,r),Ro){s=0;do{if(Ro=!1,Yo=0,25<=s)throw Error(oe(301));s+=1,Nt=Rt=null,e.updateQueue=null,ll.current=Jx,t=n(i,r)}while(Ro)}if(ll.current=kl,e=Rt!==null&&Rt.next!==null,Ir=0,Nt=Rt=gt=null,Ol=!1,e)throw Error(oe(300));return t}function Hd(){var t=Yo!==0;return Yo=0,t}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?gt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function In(){if(Rt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Nt===null?gt.memoizedState:Nt.next;if(e!==null)Nt=e,Rt=t;else{if(t===null)throw Error(oe(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Nt===null?gt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function $o(t,e){return typeof e=="function"?e(t):e}function jc(t){var e=In(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Rt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Ir&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,gt.lanes|=d,Ur|=d}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Zn(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,Ur|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yc(t){var e=In(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Zn(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function p0(){}function m0(t,e){var n=gt,i=In(),r=e(),s=!Zn(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,Vd(_0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,qo(9,v0.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(oe(349));Ir&30||g0(n,e,r)}return r}function g0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function v0(t,e,n,i){e.value=n,e.getSnapshot=i,x0(e)&&y0(t)}function _0(t,e,n){return n(function(){x0(e)&&y0(t)})}function x0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function y0(t){var e=Ai(t,1);e!==null&&qn(e,t,1,-1)}function mp(t){var e=ti();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},e.queue=t,t=t.dispatch=Kx.bind(null,gt,t),[e.memoizedState,t]}function qo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function S0(){return In().memoizedState}function cl(t,e,n,i){var r=ti();gt.flags|=t,r.memoizedState=qo(1|e,n,void 0,i===void 0?null:i)}function cc(t,e,n,i){var r=In();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,i!==null&&zd(i,o.deps)){r.memoizedState=qo(e,n,s,i);return}}gt.flags|=t,r.memoizedState=qo(1|e,n,s,i)}function gp(t,e){return cl(8390656,8,t,e)}function Vd(t,e){return cc(2048,8,t,e)}function M0(t,e){return cc(4,2,t,e)}function E0(t,e){return cc(4,4,t,e)}function w0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function T0(t,e,n){return n=n!=null?n.concat([t]):null,cc(4,4,w0.bind(null,e,t),n)}function Gd(){}function A0(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function C0(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function R0(t,e,n){return Ir&21?(Zn(n,e)||(n=Ig(),gt.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function $x(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Xc.transition;Xc.transition={};try{t(!1),e()}finally{rt=n,Xc.transition=i}}function b0(){return In().memoizedState}function qx(t,e,n){var i=Ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},P0(t))L0(e,n);else if(n=f0(t,e,n,i),n!==null){var r=Zt();qn(n,t,i,r),D0(n,e,i)}}function Kx(t,e,n){var i=Ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(P0(t))L0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Zn(a,o)){var l=e.interleaved;l===null?(r.next=r,Ud(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=f0(t,e,r,i),n!==null&&(r=Zt(),qn(n,t,i,r),D0(n,e,i))}}function P0(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function L0(t,e){Ro=Ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function D0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yd(t,n)}}var kl={readContext:Dn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},Zx={readContext:Dn,useCallback:function(t,e){return ti().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:gp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,cl(4194308,4,w0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return cl(4,2,t,e)},useMemo:function(t,e){var n=ti();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ti();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=qx.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=ti();return t={current:t},e.memoizedState=t},useState:mp,useDebugValue:Gd,useDeferredValue:function(t){return ti().memoizedState=t},useTransition:function(){var t=mp(!1),e=t[0];return t=$x.bind(null,t[1]),ti().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=ti();if(ft){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Ft===null)throw Error(oe(349));Ir&30||g0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,gp(_0.bind(null,i,s,t),[t]),i.flags|=2048,qo(9,v0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ti(),e=Ft.identifierPrefix;if(ft){var n=Si,i=yi;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Yo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Yx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Qx={readContext:Dn,useCallback:A0,useContext:Dn,useEffect:Vd,useImperativeHandle:T0,useInsertionEffect:M0,useLayoutEffect:E0,useMemo:C0,useReducer:jc,useRef:S0,useState:function(){return jc($o)},useDebugValue:Gd,useDeferredValue:function(t){var e=In();return R0(e,Rt.memoizedState,t)},useTransition:function(){var t=jc($o)[0],e=In().memoizedState;return[t,e]},useMutableSource:p0,useSyncExternalStore:m0,useId:b0,unstable_isNewReconciler:!1},Jx={readContext:Dn,useCallback:A0,useContext:Dn,useEffect:Vd,useImperativeHandle:T0,useInsertionEffect:M0,useLayoutEffect:E0,useMemo:C0,useReducer:Yc,useRef:S0,useState:function(){return Yc($o)},useDebugValue:Gd,useDeferredValue:function(t){var e=In();return Rt===null?e.memoizedState=t:R0(e,Rt.memoizedState,t)},useTransition:function(){var t=Yc($o)[0],e=In().memoizedState;return[t,e]},useMutableSource:p0,useSyncExternalStore:m0,useId:b0,unstable_isNewReconciler:!1};function Bn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function lf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uc={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Ji(t),s=Ei(i,r);s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&(qn(e,t,r,i),al(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Ji(t),s=Ei(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&(qn(e,t,r,i),al(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=Ji(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=Zi(t,r,i),e!==null&&(qn(e,t,i,n),al(e,t,i))}};function vp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ho(n,i)||!Ho(r,s):!0}function I0(t,e,n){var i=!1,r=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(r=ln(e)?Lr:$t.current,i=e.contextTypes,s=(i=i!=null)?Fs(t,r):sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function _p(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&uc.enqueueReplaceState(e,e.state,null)}function cf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Nd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Dn(s):(s=ln(e)?Lr:$t.current,r.context=Fs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&uc.enqueueReplaceState(r,r.state,null),Nl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e){try{var n="",i=e;do n+=C_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function $c(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function uf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ey=typeof WeakMap=="function"?WeakMap:Map;function U0(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Bl||(Bl=!0,yf=i),uf(t,e)},n}function N0(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){uf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){uf(t,e),typeof i!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ey;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=py.bind(null,t,e,n),e.then(t,t))}function yp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,Zi(n,e,1))),n.lanes|=1),t)}var ty=Pi.ReactCurrentOwner,sn=!1;function Kt(t,e,n,i){e.child=t===null?u0(e,null,n,i):ks(e,t.child,n,i)}function Mp(t,e,n,i,r){n=n.render;var s=e.ref;return bs(e,r),i=Bd(t,e,n,i,s,r),n=Hd(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(ft&&n&&Rd(e),e.flags|=1,Kt(t,e,i,r),e.child)}function Ep(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Zd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,F0(t,e,s,i,r)):(t=hl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ho,n(o,i)&&t.ref===e.ref)return Ci(t,e,r)}return e.flags|=1,t=er(s,i),t.ref=e.ref,t.return=e,e.child=t}function F0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ho(s,i)&&t.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,Ci(t,e,r)}return ff(t,e,n,i,r)}function O0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(Ss,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(Ss,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(Ss,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(Ss,vn),vn|=i;return Kt(t,e,r,n),e.child}function k0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ff(t,e,n,i,r){var s=ln(n)?Lr:$t.current;return s=Fs(e,s),bs(e,r),n=Bd(t,e,n,i,s,r),i=Hd(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(ft&&i&&Rd(e),e.flags|=1,Kt(t,e,n,r),e.child)}function wp(t,e,n,i,r){if(ln(n)){var s=!0;Pl(e)}else s=!1;if(bs(e,r),e.stateNode===null)ul(t,e),I0(e,n,i),cf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dn(u):(u=ln(n)?Lr:$t.current,u=Fs(e,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&_p(e,o,i,u),Hi=!1;var h=e.memoizedState;o.state=h,Nl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||an.current||Hi?(typeof d=="function"&&(lf(e,n,d,i),l=e.memoizedState),(a=Hi||vp(e,n,a,i,h,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,d0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Bn(e.type,a),o.props=u,p=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=ln(n)?Lr:$t.current,l=Fs(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||h!==l)&&_p(e,o,i,l),Hi=!1,h=e.memoizedState,o.state=h,Nl(e,i,o,r);var x=e.memoizedState;a!==p||h!==x||an.current||Hi?(typeof g=="function"&&(lf(e,n,g,i),x=e.memoizedState),(u=Hi||vp(e,n,u,i,h,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return df(t,e,n,i,s,r)}function df(t,e,n,i,r,s){k0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&cp(e,n,!1),Ci(t,e,s);i=e.stateNode,ty.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ks(e,t.child,null,s),e.child=ks(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=i.state,r&&cp(e,n,!0),e.child}function z0(t){var e=t.stateNode;e.pendingContext?lp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lp(t,e.context,!1),Fd(t,e.containerInfo)}function Tp(t,e,n,i,r){return Os(),Pd(r),e.flags|=256,Kt(t,e,n,i),e.child}var hf={dehydrated:null,treeContext:null,retryLane:0};function pf(t){return{baseLanes:t,cachePool:null,transitions:null}}function B0(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(mt,r&1),t===null)return of(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=hc(o,i,0,null),t=Pr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=pf(n),e.memoizedState=hf,t):Wd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ny(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=er(a,s):(s=Pr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?pf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hf,i}return s=t.child,t=s.sibling,i=er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Wd(t,e){return e=hc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ca(t,e,n,i){return i!==null&&Pd(i),ks(e,t.child,null,n),t=Wd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ny(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=$c(Error(oe(422))),Ca(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=hc({mode:"visible",children:i.children},r,0,null),s=Pr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ks(e,t.child,null,o),e.child.memoizedState=pf(o),e.memoizedState=hf,s);if(!(e.mode&1))return Ca(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=$c(s,i,void 0),Ca(t,e,o,i)}if(a=(o&t.childLanes)!==0,sn||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ai(t,r),qn(i,t,r,-1))}return Kd(),i=$c(Error(oe(421))),Ca(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=my.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,_n=Ki(r.nextSibling),yn=e,ft=!0,Gn=null,t!==null&&(Cn[Rn++]=yi,Cn[Rn++]=Si,Cn[Rn++]=Dr,yi=t.id,Si=t.overflow,Dr=e),e=Wd(e,i.children),e.flags|=4096,e)}function Ap(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),af(t.return,e,n)}function qc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function H0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ap(t,n,e);else if(t.tag===19)Ap(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Fl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),qc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Fl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}qc(e,!0,n,null,s);break;case"together":qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iy(t,e,n){switch(e.tag){case 3:z0(e),Os();break;case 5:h0(e);break;case 1:ln(e.type)&&Pl(e);break;case 4:Fd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Il,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?B0(t,e,n):(st(mt,mt.current&1),t=Ci(t,e,n),t!==null?t.sibling:null);st(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return H0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,O0(t,e,n)}return Ci(t,e,n)}var V0,mf,G0,W0;V0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mf=function(){};G0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ar(ai.current);var s=null;switch(n){case"input":r=Fu(t,r),i=Fu(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=zu(t,r),i=zu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Rl)}Hu(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Uo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&at("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};W0=function(t,e,n,i){n!==i&&(e.flags|=4)};function ro(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ry(t,e,n){var i=e.pendingProps;switch(bd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return ln(e.type)&&bl(),Wt(e),null;case 3:return i=e.stateNode,zs(),ct(an),ct($t),kd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ta(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(Ef(Gn),Gn=null))),mf(t,e),Wt(e),null;case 5:Od(e);var r=Ar(jo.current);if(n=e.type,t!==null&&e.stateNode!=null)G0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Wt(e),null}if(t=Ar(ai.current),Ta(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ii]=e,i[Wo]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<_o.length;r++)at(_o[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":Nh(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":Oh(i,s),at("invalid",i)}Hu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&wa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wa(i.textContent,a,t),r=["children",""+a]):Uo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(n){case"input":ga(i),Fh(i,s,!0);break;case"textarea":ga(i),kh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Rl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_g(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ii]=e,t[Wo]=i,V0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vu(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<_o.length;r++)at(_o[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":Nh(t,i),r=Fu(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),at("invalid",t);break;case"textarea":Oh(t,i),r=zu(t,i),at("invalid",t);break;default:r=i}Hu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Sg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&No(t,l):typeof l=="number"&&No(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Uo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&pd(t,s,l,o))}switch(n){case"input":ga(t),Fh(t,i,!1);break;case"textarea":ga(t),kh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+rr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ts(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ts(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Rl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)W0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Ar(jo.current),Ar(ai.current),Ta(e)){if(i=e.stateNode,n=e.memoizedProps,i[ii]=e,(s=i.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:wa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ii]=e,e.stateNode=i}return Wt(e),null;case 13:if(ct(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&_n!==null&&e.mode&1&&!(e.flags&128))l0(),Os(),e.flags|=98560,s=!1;else if(s=Ta(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[ii]=e}else Os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else Gn!==null&&(Ef(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Pt===0&&(Pt=3):Kd())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return zs(),mf(t,e),t===null&&Vo(e.stateNode.containerInfo),Wt(e),null;case 10:return Id(e.type._context),Wt(e),null;case 17:return ln(e.type)&&bl(),Wt(e),null;case 19:if(ct(mt),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ro(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fl(t),o!==null){for(e.flags|=128,ro(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Hs&&(e.flags|=128,i=!0,ro(s,!1),e.lanes=4194304)}else{if(!i)if(t=Fl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return Wt(e),null}else 2*Et()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,i=!0,ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=mt.current,st(mt,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return qd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function sy(t,e){switch(bd(e),e.tag){case 1:return ln(e.type)&&bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),ct(an),ct($t),kd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Od(e),null;case 13:if(ct(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(mt),null;case 4:return zs(),null;case 10:return Id(e.type._context),null;case 22:case 23:return qd(),null;case 24:return null;default:return null}}var Ra=!1,Yt=!1,oy=typeof WeakSet=="function"?WeakSet:Set,_e=null;function ys(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function gf(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var Cp=!1;function ay(t,e){if(Qu=Tl,t=qg(),Cd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,p=t,h=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++d===i&&(l=o),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ju={focusedElem:t,selectionRange:n},Tl=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,c=x.memoizedState,f=e.stateNode,m=f.getSnapshotBeforeUpdate(e.elementType===e.type?_:Bn(e.type,_),c);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(S){Mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return x=Cp,Cp=!1,x}function bo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&gf(e,n,s)}r=r.next}while(r!==i)}}function fc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function vf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function X0(t){var e=t.alternate;e!==null&&(t.alternate=null,X0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ii],delete e[Wo],delete e[nf],delete e[Gx],delete e[Wx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function j0(t){return t.tag===5||t.tag===3||t.tag===4}function Rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||j0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _f(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rl));else if(i!==4&&(t=t.child,t!==null))for(_f(t,e,n),t=t.sibling;t!==null;)_f(t,e,n),t=t.sibling}function xf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(xf(t,e,n),t=t.sibling;t!==null;)xf(t,e,n),t=t.sibling}var zt=null,Hn=!1;function Ii(t,e,n){for(n=n.child;n!==null;)Y0(t,e,n),n=n.sibling}function Y0(t,e,n){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(ic,n)}catch{}switch(n.tag){case 5:Yt||ys(n,e);case 6:var i=zt,r=Hn;zt=null,Ii(t,e,n),zt=i,Hn=r,zt!==null&&(Hn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Hn?(t=zt,n=n.stateNode,t.nodeType===8?Vc(t.parentNode,n):t.nodeType===1&&Vc(t,n),zo(t)):Vc(zt,n.stateNode));break;case 4:i=zt,r=Hn,zt=n.stateNode.containerInfo,Hn=!0,Ii(t,e,n),zt=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&gf(n,e,o),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!Yt&&(ys(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Mt(n,e,a)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,Ii(t,e,n),Yt=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function bp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new oy),e.forEach(function(i){var r=gy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,Hn=!1;break e;case 3:zt=a.stateNode.containerInfo,Hn=!0;break e;case 4:zt=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(zt===null)throw Error(oe(160));Y0(s,o,r),zt=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$0(e,t),e=e.sibling}function $0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),ei(t),i&4){try{bo(3,t,t.return),fc(3,t)}catch(_){Mt(t,t.return,_)}try{bo(5,t,t.return)}catch(_){Mt(t,t.return,_)}}break;case 1:Fn(e,t),ei(t),i&512&&n!==null&&ys(n,n.return);break;case 5:if(Fn(e,t),ei(t),i&512&&n!==null&&ys(n,n.return),t.flags&32){var r=t.stateNode;try{No(r,"")}catch(_){Mt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&gg(r,s),Vu(a,o);var u=Vu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],p=l[o+1];d==="style"?Sg(r,p):d==="dangerouslySetInnerHTML"?xg(r,p):d==="children"?No(r,p):pd(r,d,p,u)}switch(a){case"input":Ou(r,s);break;case"textarea":vg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ts(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ts(r,!!s.multiple,s.defaultValue,!0):Ts(r,!!s.multiple,s.multiple?[]:"",!1))}r[Wo]=s}catch(_){Mt(t,t.return,_)}}break;case 6:if(Fn(e,t),ei(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){Mt(t,t.return,_)}}break;case 3:if(Fn(e,t),ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{zo(e.containerInfo)}catch(_){Mt(t,t.return,_)}break;case 4:Fn(e,t),ei(t);break;case 13:Fn(e,t),ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Yd=Et())),i&4&&bp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(u=Yt)||d,Fn(e,t),Yt=u):Fn(e,t),ei(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(_e=t,d=t.child;d!==null;){for(p=_e=d;_e!==null;){switch(h=_e,g=h.child,h.tag){case 0:case 11:case 14:case 15:bo(4,h,h.return);break;case 1:ys(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){Mt(i,n,_)}}break;case 5:ys(h,h.return);break;case 22:if(h.memoizedState!==null){Lp(p);continue}}g!==null?(g.return=h,_e=g):Lp(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=yg("display",o))}catch(_){Mt(t,t.return,_)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(_){Mt(t,t.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Fn(e,t),ei(t),i&4&&bp(t);break;case 21:break;default:Fn(e,t),ei(t)}}function ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(j0(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(No(r,""),i.flags&=-33);var s=Rp(t);xf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Rp(t);_f(t,a,o);break;default:throw Error(oe(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ly(t,e,n){_e=t,q0(t)}function q0(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ra;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Yt;a=Ra;var u=Yt;if(Ra=o,(Yt=l)&&!u)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?Dp(r):l!==null?(l.return=o,_e=l):Dp(r);for(;s!==null;)_e=s,q0(s),s=s.sibling;_e=r,Ra=a,Yt=u}Pp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):Pp(t)}}function Pp(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||fc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&zo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Yt||e.flags&512&&vf(e)}catch(h){Mt(e,e.return,h)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Lp(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Dp(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fc(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{vf(e)}catch(l){Mt(e,s,l)}break;case 5:var o=e.return;try{vf(e)}catch(l){Mt(e,o,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var cy=Math.ceil,zl=Pi.ReactCurrentDispatcher,Xd=Pi.ReactCurrentOwner,Ln=Pi.ReactCurrentBatchConfig,Ke=0,Ft=null,Ct=null,Bt=0,vn=0,Ss=lr(0),Pt=0,Ko=null,Ur=0,dc=0,jd=0,Po=null,nn=null,Yd=0,Hs=1/0,vi=null,Bl=!1,yf=null,Qi=null,ba=!1,ji=null,Hl=0,Lo=0,Sf=null,fl=-1,dl=0;function Zt(){return Ke&6?Et():fl!==-1?fl:fl=Et()}function Ji(t){return t.mode&1?Ke&2&&Bt!==0?Bt&-Bt:jx.transition!==null?(dl===0&&(dl=Ig()),dl):(t=rt,t!==0||(t=window.event,t=t===void 0?16:Bg(t.type)),t):1}function qn(t,e,n,i){if(50<Lo)throw Lo=0,Sf=null,Error(oe(185));ia(t,n,i),(!(Ke&2)||t!==Ft)&&(t===Ft&&(!(Ke&2)&&(dc|=n),Pt===4&&Gi(t,Bt)),cn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Hs=Et()+500,lc&&cr()))}function cn(t,e){var n=t.callbackNode;j_(t,e);var i=wl(t,t===Ft?Bt:0);if(i===0)n!==null&&Hh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hh(n),e===1)t.tag===0?Xx(Ip.bind(null,t)):s0(Ip.bind(null,t)),Hx(function(){!(Ke&6)&&cr()}),n=null;else{switch(Ug(i)){case 1:n=xd;break;case 4:n=Lg;break;case 16:n=El;break;case 536870912:n=Dg;break;default:n=El}n=iv(n,K0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function K0(t,e){if(fl=-1,dl=0,Ke&6)throw Error(oe(327));var n=t.callbackNode;if(Ps()&&t.callbackNode!==n)return null;var i=wl(t,t===Ft?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Vl(t,i);else{e=i;var r=Ke;Ke|=2;var s=Q0();(Ft!==t||Bt!==e)&&(vi=null,Hs=Et()+500,br(t,e));do try{dy();break}catch(a){Z0(t,a)}while(!0);Dd(),zl.current=s,Ke=r,Ct!==null?e=0:(Ft=null,Bt=0,e=Pt)}if(e!==0){if(e===2&&(r=Yu(t),r!==0&&(i=r,e=Mf(t,r))),e===1)throw n=Ko,br(t,0),Gi(t,i),cn(t,Et()),n;if(e===6)Gi(t,i);else{if(r=t.current.alternate,!(i&30)&&!uy(r)&&(e=Vl(t,i),e===2&&(s=Yu(t),s!==0&&(i=s,e=Mf(t,s))),e===1))throw n=Ko,br(t,0),Gi(t,i),cn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:xr(t,nn,vi);break;case 3:if(Gi(t,i),(i&130023424)===i&&(e=Yd+500-Et(),10<e)){if(wl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=tf(xr.bind(null,t,nn,vi),e);break}xr(t,nn,vi);break;case 4:if(Gi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-$n(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*cy(i/1960))-i,10<i){t.timeoutHandle=tf(xr.bind(null,t,nn,vi),i);break}xr(t,nn,vi);break;case 5:xr(t,nn,vi);break;default:throw Error(oe(329))}}}return cn(t,Et()),t.callbackNode===n?K0.bind(null,t):null}function Mf(t,e){var n=Po;return t.current.memoizedState.isDehydrated&&(br(t,e).flags|=256),t=Vl(t,e),t!==2&&(e=nn,nn=n,e!==null&&Ef(e)),t}function Ef(t){nn===null?nn=t:nn.push.apply(nn,t)}function uy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gi(t,e){for(e&=~jd,e&=~dc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),i=1<<n;t[n]=-1,e&=~i}}function Ip(t){if(Ke&6)throw Error(oe(327));Ps();var e=wl(t,0);if(!(e&1))return cn(t,Et()),null;var n=Vl(t,e);if(t.tag!==0&&n===2){var i=Yu(t);i!==0&&(e=i,n=Mf(t,i))}if(n===1)throw n=Ko,br(t,0),Gi(t,e),cn(t,Et()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xr(t,nn,vi),cn(t,Et()),null}function $d(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Hs=Et()+500,lc&&cr())}}function Nr(t){ji!==null&&ji.tag===0&&!(Ke&6)&&Ps();var e=Ke;Ke|=1;var n=Ln.transition,i=rt;try{if(Ln.transition=null,rt=1,t)return t()}finally{rt=i,Ln.transition=n,Ke=e,!(Ke&6)&&cr()}}function qd(){vn=Ss.current,ct(Ss)}function br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Bx(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(bd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bl();break;case 3:zs(),ct(an),ct($t),kd();break;case 5:Od(i);break;case 4:zs();break;case 13:ct(mt);break;case 19:ct(mt);break;case 10:Id(i.type._context);break;case 22:case 23:qd()}n=n.return}if(Ft=t,Ct=t=er(t.current,null),Bt=vn=e,Pt=0,Ko=null,jd=dc=Ur=0,nn=Po=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Tr=null}return t}function Z0(t,e){do{var n=Ct;try{if(Dd(),ll.current=kl,Ol){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ol=!1}if(Ir=0,Nt=Rt=gt=null,Ro=!1,Yo=0,Xd.current=null,n===null||n.return===null){Pt=1,Ko=e,Ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=yp(o);if(g!==null){g.flags&=-257,Sp(g,o,a,s,e),g.mode&1&&xp(s,u,e),e=g,l=u;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){xp(s,u,e),Kd();break e}l=Error(oe(426))}}else if(ft&&a.mode&1){var c=yp(o);if(c!==null){!(c.flags&65536)&&(c.flags|=256),Sp(c,o,a,s,e),Pd(Bs(l,a));break e}}s=l=Bs(l,a),Pt!==4&&(Pt=2),Po===null?Po=[s]:Po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=U0(s,l,e);hp(s,f);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Qi===null||!Qi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=N0(s,a,e);hp(s,S);break e}}s=s.return}while(s!==null)}ev(n)}catch(b){e=b,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function Q0(){var t=zl.current;return zl.current=kl,t===null?kl:t}function Kd(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ft===null||!(Ur&268435455)&&!(dc&268435455)||Gi(Ft,Bt)}function Vl(t,e){var n=Ke;Ke|=2;var i=Q0();(Ft!==t||Bt!==e)&&(vi=null,br(t,e));do try{fy();break}catch(r){Z0(t,r)}while(!0);if(Dd(),Ke=n,zl.current=i,Ct!==null)throw Error(oe(261));return Ft=null,Bt=0,Pt}function fy(){for(;Ct!==null;)J0(Ct)}function dy(){for(;Ct!==null&&!O_();)J0(Ct)}function J0(t){var e=nv(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?ev(t):Ct=e,Xd.current=null}function ev(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sy(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Ct=null;return}}else if(n=ry(n,e,vn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Pt===0&&(Pt=5)}function xr(t,e,n){var i=rt,r=Ln.transition;try{Ln.transition=null,rt=1,hy(t,e,n,i)}finally{Ln.transition=r,rt=i}return null}function hy(t,e,n,i){do Ps();while(ji!==null);if(Ke&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Y_(t,s),t===Ft&&(Ct=Ft=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ba||(ba=!0,iv(El,function(){return Ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var o=rt;rt=1;var a=Ke;Ke|=4,Xd.current=null,ay(t,n),$0(n,t),Ix(Ju),Tl=!!Qu,Ju=Qu=null,t.current=n,ly(n),k_(),Ke=a,rt=o,Ln.transition=s}else t.current=n;if(ba&&(ba=!1,ji=t,Hl=r),s=t.pendingLanes,s===0&&(Qi=null),H_(n.stateNode),cn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Bl)throw Bl=!1,t=yf,yf=null,t;return Hl&1&&t.tag!==0&&Ps(),s=t.pendingLanes,s&1?t===Sf?Lo++:(Lo=0,Sf=t):Lo=0,cr(),null}function Ps(){if(ji!==null){var t=Ug(Hl),e=Ln.transition,n=rt;try{if(Ln.transition=null,rt=16>t?16:t,ji===null)var i=!1;else{if(t=ji,ji=null,Hl=0,Ke&6)throw Error(oe(331));var r=Ke;for(Ke|=4,_e=t.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(_e=u;_e!==null;){var d=_e;switch(d.tag){case 0:case 11:case 15:bo(8,d,s)}var p=d.child;if(p!==null)p.return=d,_e=p;else for(;_e!==null;){d=_e;var h=d.sibling,g=d.return;if(X0(d),d===u){_e=null;break}if(h!==null){h.return=g,_e=h;break}_e=g}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var c=_.sibling;_.sibling=null,_=c}while(_!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,_e=f;break e}_e=s.return}}var m=t.current;for(_e=m;_e!==null;){o=_e;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,_e=v;else e:for(o=m;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fc(9,a)}}catch(b){Mt(a,a.return,b)}if(a===o){_e=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,_e=S;break e}_e=a.return}}if(Ke=r,cr(),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(ic,t)}catch{}i=!0}return i}finally{rt=n,Ln.transition=e}}return!1}function Up(t,e,n){e=Bs(n,e),e=U0(t,e,1),t=Zi(t,e,1),e=Zt(),t!==null&&(ia(t,1,e),cn(t,e))}function Mt(t,e,n){if(t.tag===3)Up(t,t,n);else for(;e!==null;){if(e.tag===3){Up(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qi===null||!Qi.has(i))){t=Bs(n,t),t=N0(e,t,1),e=Zi(e,t,1),t=Zt(),e!==null&&(ia(e,1,t),cn(e,t));break}}e=e.return}}function py(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Bt&n)===n&&(Pt===4||Pt===3&&(Bt&130023424)===Bt&&500>Et()-Yd?br(t,0):jd|=n),cn(t,e)}function tv(t,e){e===0&&(t.mode&1?(e=xa,xa<<=1,!(xa&130023424)&&(xa=4194304)):e=1);var n=Zt();t=Ai(t,e),t!==null&&(ia(t,e,n),cn(t,n))}function my(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tv(t,n)}function gy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),tv(t,n)}var nv;nv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,iy(t,e,n);sn=!!(t.flags&131072)}else sn=!1,ft&&e.flags&1048576&&o0(e,Dl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ul(t,e),t=e.pendingProps;var r=Fs(e,$t.current);bs(e,n),r=Bd(null,e,i,t,r,n);var s=Hd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(i)?(s=!0,Pl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Nd(e),r.updater=uc,e.stateNode=r,r._reactInternals=e,cf(e,i,t,n),e=df(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&Rd(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=_y(i),t=Bn(i,t),r){case 0:e=ff(null,e,i,t,n);break e;case 1:e=wp(null,e,i,t,n);break e;case 11:e=Mp(null,e,i,t,n);break e;case 14:e=Ep(null,e,i,Bn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),ff(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),wp(t,e,i,r,n);case 3:e:{if(z0(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,d0(t,e),Nl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Bs(Error(oe(423)),e),e=Tp(t,e,i,n,r);break e}else if(i!==r){r=Bs(Error(oe(424)),e),e=Tp(t,e,i,n,r);break e}else for(_n=Ki(e.stateNode.containerInfo.firstChild),yn=e,ft=!0,Gn=null,n=u0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Os(),i===r){e=Ci(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return h0(e),t===null&&of(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ef(i,r)?o=null:s!==null&&ef(i,s)&&(e.flags|=32),k0(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&of(e),null;case 13:return B0(t,e,n);case 4:return Fd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ks(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Mp(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(Il,i._currentValue),i._currentValue=o,s!==null)if(Zn(s.value,o)){if(s.children===r.children&&!an.current){e=Ci(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ei(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),af(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),af(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,bs(e,n),r=Dn(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),Ep(t,e,i,r,n);case 15:return F0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),ul(t,e),e.tag=1,ln(i)?(t=!0,Pl(e)):t=!1,bs(e,n),I0(e,i,r),cf(e,i,r,n),df(null,e,i,!0,t,n);case 19:return H0(t,e,n);case 22:return O0(t,e,n)}throw Error(oe(156,e.tag))};function iv(t,e){return Pg(t,e)}function vy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,i){return new vy(t,e,n,i)}function Zd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _y(t){if(typeof t=="function")return Zd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gd)return 11;if(t===vd)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Zd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fs:return Pr(n.children,r,s,e);case md:o=8,r|=8;break;case Du:return t=Pn(12,n,e,r|2),t.elementType=Du,t.lanes=s,t;case Iu:return t=Pn(13,n,e,r),t.elementType=Iu,t.lanes=s,t;case Uu:return t=Pn(19,n,e,r),t.elementType=Uu,t.lanes=s,t;case hg:return hc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fg:o=10;break e;case dg:o=9;break e;case gd:o=11;break e;case vd:o=14;break e;case Bi:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Pn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Pr(t,e,n,i){return t=Pn(7,t,i,e),t.lanes=n,t}function hc(t,e,n,i){return t=Pn(22,t,i,e),t.elementType=hg,t.lanes=n,t.stateNode={isHidden:!1},t}function Kc(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function Zc(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lc(0),this.expirationTimes=Lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Qd(t,e,n,i,r,s,o,a,l){return t=new xy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nd(s),t}function yy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:us,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function rv(t){if(!t)return sr;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(ln(n))return r0(t,n,e)}return e}function sv(t,e,n,i,r,s,o,a,l){return t=Qd(n,i,!0,t,r,s,o,a,l),t.context=rv(null),n=t.current,i=Zt(),r=Ji(n),s=Ei(i,r),s.callback=e??null,Zi(n,s,r),t.current.lanes=r,ia(t,r,i),cn(t,i),t}function pc(t,e,n,i){var r=e.current,s=Zt(),o=Ji(r);return n=rv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Zi(r,e,o),t!==null&&(qn(t,r,o,s),al(t,r,o)),o}function Gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Np(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jd(t,e){Np(t,e),(t=t.alternate)&&Np(t,e)}function Sy(){return null}var ov=typeof reportError=="function"?reportError:function(t){console.error(t)};function eh(t){this._internalRoot=t}mc.prototype.render=eh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));pc(t,e,null,null)};mc.prototype.unmount=eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){pc(null,t,null,null)}),e[Ti]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Og();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vi.length&&e!==0&&e<Vi[n].priority;n++);Vi.splice(n,0,t),n===0&&zg(t)}};function th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fp(){}function My(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Gl(o);s.call(u)}}var o=sv(e,i,t,0,null,!1,!1,"",Fp);return t._reactRootContainer=o,t[Ti]=o.current,Vo(t.nodeType===8?t.parentNode:t),Nr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Gl(l);a.call(u)}}var l=Qd(t,0,!1,null,null,!1,!1,"",Fp);return t._reactRootContainer=l,t[Ti]=l.current,Vo(t.nodeType===8?t.parentNode:t),Nr(function(){pc(e,l,n,i)}),l}function vc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Gl(o);a.call(l)}}pc(e,o,t,r)}else o=My(n,e,t,r,i);return Gl(o)}Ng=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vo(e.pendingLanes);n!==0&&(yd(e,n|1),cn(e,Et()),!(Ke&6)&&(Hs=Et()+500,cr()))}break;case 13:Nr(function(){var i=Ai(t,1);if(i!==null){var r=Zt();qn(i,t,1,r)}}),Jd(t,1)}};Sd=function(t){if(t.tag===13){var e=Ai(t,134217728);if(e!==null){var n=Zt();qn(e,t,134217728,n)}Jd(t,134217728)}};Fg=function(t){if(t.tag===13){var e=Ji(t),n=Ai(t,e);if(n!==null){var i=Zt();qn(n,t,e,i)}Jd(t,e)}};Og=function(){return rt};kg=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Wu=function(t,e,n){switch(e){case"input":if(Ou(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ac(i);if(!r)throw Error(oe(90));mg(i),Ou(i,r)}}}break;case"textarea":vg(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};wg=$d;Tg=Nr;var Ey={usingClientEntryPoint:!1,Events:[sa,ms,ac,Mg,Eg,$d]},so={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wy={bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rg(t),t===null?null:t.stateNode},findFiberByHostInstance:so.findFiberByHostInstance||Sy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{ic=Pa.inject(wy),oi=Pa}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ey;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!th(e))throw Error(oe(200));return yy(t,e,null,n)};En.createRoot=function(t,e){if(!th(t))throw Error(oe(299));var n=!1,i="",r=ov;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Qd(t,1,!1,null,null,n,!1,i,r),t[Ti]=e.current,Vo(t.nodeType===8?t.parentNode:t),new eh(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Rg(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Nr(t)};En.hydrate=function(t,e,n){if(!gc(e))throw Error(oe(200));return vc(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!th(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=ov;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=sv(e,null,t,1,n??null,r,!1,s,o),t[Ti]=e.current,Vo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new mc(e)};En.render=function(t,e,n){if(!gc(e))throw Error(oe(200));return vc(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!gc(t))throw Error(oe(40));return t._reactRootContainer?(Nr(function(){vc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1};En.unstable_batchedUpdates=$d;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!gc(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return vc(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(av)}catch(t){console.error(t)}}av(),ag.exports=En;var Ty=ag.exports,lv,Op=Ty;lv=Op.createRoot,Op.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nh="166",Ay=0,kp=1,Cy=2,cv=1,Ry=2,gi=3,or=0,un=1,Xn=2,tr=0,Ls=1,Wl=2,zp=3,Bp=4,by=5,Mr=100,Py=101,Ly=102,Dy=103,Iy=104,Uy=200,Ny=201,Fy=202,Oy=203,wf=204,Tf=205,ky=206,zy=207,By=208,Hy=209,Vy=210,Gy=211,Wy=212,Xy=213,jy=214,Yy=0,$y=1,qy=2,Xl=3,Ky=4,Zy=5,Qy=6,Jy=7,ih=0,eS=1,tS=2,nr=0,nS=1,iS=2,rS=3,sS=4,oS=5,aS=6,lS=7,uv=300,Vs=301,Gs=302,Af=303,Cf=304,_c=306,Rf=1e3,Cr=1001,bf=1002,on=1003,cS=1004,La=1005,jn=1006,Qc=1007,Rr=1008,Ri=1009,fv=1010,dv=1011,Zo=1012,rh=1013,Fr=1014,si=1015,aa=1016,sh=1017,oh=1018,Ws=1020,hv=35902,pv=1021,mv=1022,Yn=1023,gv=1024,vv=1025,Ds=1026,Xs=1027,ah=1028,lh=1029,_v=1030,ch=1031,uh=1033,pl=33776,ml=33777,gl=33778,vl=33779,Pf=35840,Lf=35841,Df=35842,If=35843,Uf=36196,Nf=37492,Ff=37496,Of=37808,kf=37809,zf=37810,Bf=37811,Hf=37812,Vf=37813,Gf=37814,Wf=37815,Xf=37816,jf=37817,Yf=37818,$f=37819,qf=37820,Kf=37821,_l=36492,Zf=36494,Qf=36495,xv=36283,Jf=36284,ed=36285,td=36286,uS=3200,fS=3201,yv=0,dS=1,Wi="",Vn="srgb",ur="srgb-linear",fh="display-p3",xc="display-p3-linear",jl="linear",lt="srgb",Yl="rec709",$l="p3",Wr=7680,Hp=519,hS=512,pS=513,mS=514,Sv=515,gS=516,vS=517,_S=518,xS=519,Vp=35044,Gp="300 es",Mi=2e3,ql=2001;class Ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=Math.PI/180,nd=180/Math.PI;function la(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function yS(t,e){return(t%e+e)%e}function eu(t,e,n){return(1-n)*t+n*e}function oo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,u){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],d=i[4],p=i[7],h=i[2],g=i[5],x=i[8],_=r[0],c=r[3],f=r[6],m=r[1],v=r[4],S=r[7],b=r[2],T=r[5],A=r[8];return s[0]=o*_+a*m+l*b,s[3]=o*c+a*v+l*T,s[6]=o*f+a*S+l*A,s[1]=u*_+d*m+p*b,s[4]=u*c+d*v+p*T,s[7]=u*f+d*S+p*A,s[2]=h*_+g*m+x*b,s[5]=h*c+g*v+x*T,s[8]=h*f+g*S+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8];return n*o*d-n*a*u-i*s*d+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],p=d*o-a*u,h=a*l-d*s,g=u*s-o*l,x=n*p+i*h+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=p*_,e[1]=(r*u-d*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(d*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=g*_,e[7]=(i*l-u*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(tu.makeScale(e,n)),this}rotate(e){return this.premultiply(tu.makeRotation(-e)),this}translate(e,n){return this.premultiply(tu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tu=new Ge;function Mv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Kl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function SS(){const t=Kl("canvas");return t.style.display="block",t}const Wp={};function Ev(t){t in Wp||(Wp[t]=!0,console.warn(t))}function MS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Xp=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jp=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Da={[ur]:{transfer:jl,primaries:Yl,toReference:t=>t,fromReference:t=>t},[Vn]:{transfer:lt,primaries:Yl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[xc]:{transfer:jl,primaries:$l,toReference:t=>t.applyMatrix3(jp),fromReference:t=>t.applyMatrix3(Xp)},[fh]:{transfer:lt,primaries:$l,toReference:t=>t.convertSRGBToLinear().applyMatrix3(jp),fromReference:t=>t.applyMatrix3(Xp).convertLinearToSRGB()}},ES=new Set([ur,xc]),it={enabled:!0,_workingColorSpace:ur,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ES.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Da[e].toReference,r=Da[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Da[t].primaries},getTransfer:function(t){return t===Wi?jl:Da[t].transfer}};function Is(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function nu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Xr;class wS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xr===void 0&&(Xr=Kl("canvas")),Xr.width=e.width,Xr.height=e.height;const i=Xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Kl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Is(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Is(n[i]/255)*255):n[i]=Is(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TS=0;class wv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=la(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(iu(r[o].image)):s.push(iu(r[o]))}else s=iu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function iu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?wS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AS=0;class Qt extends Ks{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=Cr,r=Cr,s=jn,o=Rr,a=Yn,l=Ri,u=Qt.DEFAULT_ANISOTROPY,d=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=la(),this.name="",this.source=new wv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rf:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case bf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rf:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case bf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=uv;Qt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],d=l[4],p=l[8],h=l[1],g=l[5],x=l[9],_=l[2],c=l[6],f=l[10];if(Math.abs(d-h)<.01&&Math.abs(p-_)<.01&&Math.abs(x-c)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+_)<.1&&Math.abs(x+c)<.1&&Math.abs(u+g+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,S=(g+1)/2,b=(f+1)/2,T=(d+h)/4,A=(p+_)/4,C=(x+c)/4;return v>S&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=A/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=C/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=C/s),this.set(i,r,s,n),this}let m=Math.sqrt((c-x)*(c-x)+(p-_)*(p-_)+(h-d)*(h-d));return Math.abs(m)<.001&&(m=1),this.x=(c-x)/m,this.y=(p-_)/m,this.z=(h-d)/m,this.w=Math.acos((u+g+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CS extends Ks{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new wv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends CS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Tv extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RS extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ca{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],d=i[r+2],p=i[r+3];const h=s[o+0],g=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=d,e[n+3]=p;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=x,e[n+3]=_;return}if(p!==_||l!==h||u!==g||d!==x){let c=1-a;const f=l*h+u*g+d*x+p*_,m=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const b=Math.sqrt(v),T=Math.atan2(b,f*m);c=Math.sin(c*T)/b,a=Math.sin(a*T)/b}const S=a*m;if(l=l*c+h*S,u=u*c+g*S,d=d*c+x*S,p=p*c+_*S,c===1-a){const b=1/Math.sqrt(l*l+u*u+d*d+p*p);l*=b,u*=b,d*=b,p*=b}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],d=i[r+3],p=s[o],h=s[o+1],g=s[o+2],x=s[o+3];return e[n]=a*x+d*p+l*g-u*h,e[n+1]=l*x+d*h+u*p-a*g,e[n+2]=u*x+d*g+a*h-l*p,e[n+3]=d*x-a*p-l*h-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),d=a(r/2),p=a(s/2),h=l(i/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*d*p+u*g*x,this._y=u*g*p-h*d*x,this._z=u*d*x+h*g*p,this._w=u*d*p-h*g*x;break;case"YXZ":this._x=h*d*p+u*g*x,this._y=u*g*p-h*d*x,this._z=u*d*x-h*g*p,this._w=u*d*p+h*g*x;break;case"ZXY":this._x=h*d*p-u*g*x,this._y=u*g*p+h*d*x,this._z=u*d*x+h*g*p,this._w=u*d*p-h*g*x;break;case"ZYX":this._x=h*d*p-u*g*x,this._y=u*g*p+h*d*x,this._z=u*d*x-h*g*p,this._w=u*d*p+h*g*x;break;case"YZX":this._x=h*d*p+u*g*x,this._y=u*g*p+h*d*x,this._z=u*d*x-h*g*p,this._w=u*d*p-h*g*x;break;case"XZY":this._x=h*d*p-u*g*x,this._y=u*g*p-h*d*x,this._z=u*d*x+h*g*p,this._w=u*d*p+h*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],d=n[6],p=n[10],h=i+a+p;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>p){const g=2*Math.sqrt(1+i-a-p);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>p){const g=2*Math.sqrt(1+a-i-p);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+p-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+o*a+r*u-s*l,this._y=r*d+o*l+s*a-i*u,this._z=s*d+o*u+i*l-r*a,this._w=o*d-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),p=Math.sin((1-n)*d)/u,h=Math.sin(n*d)/u;return this._w=o*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),d=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*u+o*p-a*d,this.y=i+l*d+a*u-s*p,this.z=r+l*p+s*d-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ru.copy(this).projectOnVector(e),this.sub(ru)}reflect(e){return this.sub(ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ru=new H,Yp=new ca;class Hr{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ia.copy(i.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),Ua.subVectors(this.max,ao),jr.subVectors(e.a,ao),Yr.subVectors(e.b,ao),$r.subVectors(e.c,ao),Ui.subVectors(Yr,jr),Ni.subVectors($r,Yr),dr.subVectors(jr,$r);let n=[0,-Ui.z,Ui.y,0,-Ni.z,Ni.y,0,-dr.z,dr.y,Ui.z,0,-Ui.x,Ni.z,0,-Ni.x,dr.z,0,-dr.x,-Ui.y,Ui.x,0,-Ni.y,Ni.x,0,-dr.y,dr.x,0];return!su(n,jr,Yr,$r,Ua)||(n=[1,0,0,0,1,0,0,0,1],!su(n,jr,Yr,$r,Ua))?!1:(Na.crossVectors(Ui,Ni),n=[Na.x,Na.y,Na.z],su(n,jr,Yr,$r,Ua))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new H,new H,new H,new H,new H,new H,new H,new H],On=new H,Ia=new Hr,jr=new H,Yr=new H,$r=new H,Ui=new H,Ni=new H,dr=new H,ao=new H,Ua=new H,Na=new H,hr=new H;function su(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){hr.fromArray(t,s);const a=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=e.dot(hr),u=n.dot(hr),d=i.dot(hr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const bS=new Hr,lo=new H,ou=new H;class ua{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):bS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);const n=lo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(lo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(ou)),this.expandByPoint(lo.copy(e.center).sub(ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new H,au=new H,Fa=new H,Fi=new H,lu=new H,Oa=new H,cu=new H;class Av{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,n),di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){au.copy(e).add(n).multiplyScalar(.5),Fa.copy(n).sub(e).normalize(),Fi.copy(this.origin).sub(au);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Fa),a=Fi.dot(this.direction),l=-Fi.dot(Fa),u=Fi.lengthSq(),d=Math.abs(1-o*o);let p,h,g,x;if(d>0)if(p=o*l-a,h=o*a-l,x=s*d,p>=0)if(h>=-x)if(h<=x){const _=1/d;p*=_,h*=_,g=p*(p+o*h+2*a)+h*(o*p+h+2*l)+u}else h=s,p=Math.max(0,-(o*h+a)),g=-p*p+h*(h+2*l)+u;else h=-s,p=Math.max(0,-(o*h+a)),g=-p*p+h*(h+2*l)+u;else h<=-x?(p=Math.max(0,-(-o*s+a)),h=p>0?-s:Math.min(Math.max(-s,-l),s),g=-p*p+h*(h+2*l)+u):h<=x?(p=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+u):(p=Math.max(0,-(o*s+a)),h=p>0?s:Math.min(Math.max(-s,-l),s),g=-p*p+h*(h+2*l)+u);else h=o>0?-s:s,p=Math.max(0,-(o*h+a)),g=-p*p+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(au).addScaledVector(Fa,h),g}intersectSphere(e,n){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),r=di.dot(di)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,n,i,r,s){lu.subVectors(n,e),Oa.subVectors(i,e),cu.crossVectors(lu,Oa);let o=this.direction.dot(cu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,e);const l=a*this.direction.dot(Oa.crossVectors(Fi,Oa));if(l<0)return null;const u=a*this.direction.dot(lu.cross(Fi));if(u<0||l+u>o)return null;const d=-a*Fi.dot(cu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,n,i,r,s,o,a,l,u,d,p,h,g,x,_,c){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,d,p,h,g,x,_,c)}set(e,n,i,r,s,o,a,l,u,d,p,h,g,x,_,c){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=d,f[10]=p,f[14]=h,f[3]=g,f[7]=x,f[11]=_,f[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/qr.setFromMatrixColumn(e,0).length(),s=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=o*d,g=o*p,x=a*d,_=a*p;n[0]=l*d,n[4]=-l*p,n[8]=u,n[1]=g+x*u,n[5]=h-_*u,n[9]=-a*l,n[2]=_-h*u,n[6]=x+g*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,g=l*p,x=u*d,_=u*p;n[0]=h+_*a,n[4]=x*a-g,n[8]=o*u,n[1]=o*p,n[5]=o*d,n[9]=-a,n[2]=g*a-x,n[6]=_+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,g=l*p,x=u*d,_=u*p;n[0]=h-_*a,n[4]=-o*p,n[8]=x+g*a,n[1]=g+x*a,n[5]=o*d,n[9]=_-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,g=o*p,x=a*d,_=a*p;n[0]=l*d,n[4]=x*u-g,n[8]=h*u+_,n[1]=l*p,n[5]=_*u+h,n[9]=g*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*u,x=a*l,_=a*u;n[0]=l*d,n[4]=_-h*p,n[8]=x*p+g,n[1]=p,n[5]=o*d,n[9]=-a*d,n[2]=-u*d,n[6]=g*p+x,n[10]=h-_*p}else if(e.order==="XZY"){const h=o*l,g=o*u,x=a*l,_=a*u;n[0]=l*d,n[4]=-p,n[8]=u*d,n[1]=h*p+_,n[5]=o*d,n[9]=g*p-x,n[2]=x*p-g,n[6]=a*d,n[10]=_*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PS,e,LS)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Oi.crossVectors(i,hn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Oi.crossVectors(i,hn)),Oi.normalize(),ka.crossVectors(hn,Oi),r[0]=Oi.x,r[4]=ka.x,r[8]=hn.x,r[1]=Oi.y,r[5]=ka.y,r[9]=hn.y,r[2]=Oi.z,r[6]=ka.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],d=i[1],p=i[5],h=i[9],g=i[13],x=i[2],_=i[6],c=i[10],f=i[14],m=i[3],v=i[7],S=i[11],b=i[15],T=r[0],A=r[4],C=r[8],E=r[12],y=r[1],P=r[5],O=r[9],z=r[13],j=r[2],Y=r[6],X=r[10],q=r[14],D=r[3],K=r[7],J=r[11],ae=r[15];return s[0]=o*T+a*y+l*j+u*D,s[4]=o*A+a*P+l*Y+u*K,s[8]=o*C+a*O+l*X+u*J,s[12]=o*E+a*z+l*q+u*ae,s[1]=d*T+p*y+h*j+g*D,s[5]=d*A+p*P+h*Y+g*K,s[9]=d*C+p*O+h*X+g*J,s[13]=d*E+p*z+h*q+g*ae,s[2]=x*T+_*y+c*j+f*D,s[6]=x*A+_*P+c*Y+f*K,s[10]=x*C+_*O+c*X+f*J,s[14]=x*E+_*z+c*q+f*ae,s[3]=m*T+v*y+S*j+b*D,s[7]=m*A+v*P+S*Y+b*K,s[11]=m*C+v*O+S*X+b*J,s[15]=m*E+v*z+S*q+b*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],d=e[2],p=e[6],h=e[10],g=e[14],x=e[3],_=e[7],c=e[11],f=e[15];return x*(+s*l*p-r*u*p-s*a*h+i*u*h+r*a*g-i*l*g)+_*(+n*l*g-n*u*h+s*o*h-r*o*g+r*u*d-s*l*d)+c*(+n*u*p-n*a*g-s*o*p+i*o*g+s*a*d-i*u*d)+f*(-r*a*d-n*l*p+n*a*h+r*o*p-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],p=e[9],h=e[10],g=e[11],x=e[12],_=e[13],c=e[14],f=e[15],m=p*c*u-_*h*u+_*l*g-a*c*g-p*l*f+a*h*f,v=x*h*u-d*c*u-x*l*g+o*c*g+d*l*f-o*h*f,S=d*_*u-x*p*u+x*a*g-o*_*g-d*a*f+o*p*f,b=x*p*l-d*_*l-x*a*h+o*_*h+d*a*c-o*p*c,T=n*m+i*v+r*S+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=m*A,e[1]=(_*h*s-p*c*s-_*r*g+i*c*g+p*r*f-i*h*f)*A,e[2]=(a*c*s-_*l*s+_*r*u-i*c*u-a*r*f+i*l*f)*A,e[3]=(p*l*s-a*h*s-p*r*u+i*h*u+a*r*g-i*l*g)*A,e[4]=v*A,e[5]=(d*c*s-x*h*s+x*r*g-n*c*g-d*r*f+n*h*f)*A,e[6]=(x*l*s-o*c*s-x*r*u+n*c*u+o*r*f-n*l*f)*A,e[7]=(o*h*s-d*l*s+d*r*u-n*h*u-o*r*g+n*l*g)*A,e[8]=S*A,e[9]=(x*p*s-d*_*s-x*i*g+n*_*g+d*i*f-n*p*f)*A,e[10]=(o*_*s-x*a*s+x*i*u-n*_*u-o*i*f+n*a*f)*A,e[11]=(d*a*s-o*p*s-d*i*u+n*p*u+o*i*g-n*a*g)*A,e[12]=b*A,e[13]=(d*_*r-x*p*r+x*i*h-n*_*h-d*i*c+n*p*c)*A,e[14]=(x*a*r-o*_*r-x*i*l+n*_*l+o*i*c-n*a*c)*A,e[15]=(o*p*r-d*a*r+d*i*l-n*p*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,d=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,d*a+i,d*l-r*o,0,u*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,d=o+o,p=a+a,h=s*u,g=s*d,x=s*p,_=o*d,c=o*p,f=a*p,m=l*u,v=l*d,S=l*p,b=i.x,T=i.y,A=i.z;return r[0]=(1-(_+f))*b,r[1]=(g+S)*b,r[2]=(x-v)*b,r[3]=0,r[4]=(g-S)*T,r[5]=(1-(h+f))*T,r[6]=(c+m)*T,r[7]=0,r[8]=(x+v)*A,r[9]=(c-m)*A,r[10]=(1-(h+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=qr.set(r[0],r[1],r[2]).length();const o=qr.set(r[4],r[5],r[6]).length(),a=qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const u=1/s,d=1/o,p=1/a;return kn.elements[0]*=u,kn.elements[1]*=u,kn.elements[2]*=u,kn.elements[4]*=d,kn.elements[5]*=d,kn.elements[6]*=d,kn.elements[8]*=p,kn.elements[9]*=p,kn.elements[10]*=p,n.setFromRotationMatrix(kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Mi){const l=this.elements,u=2*s/(n-e),d=2*s/(i-r),p=(n+e)/(n-e),h=(i+r)/(i-r);let g,x;if(a===Mi)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ql)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Mi){const l=this.elements,u=1/(n-e),d=1/(i-r),p=1/(o-s),h=(n+e)*u,g=(i+r)*d;let x,_;if(a===Mi)x=(o+s)*p,_=-2*p;else if(a===ql)x=s*p,_=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const qr=new H,kn=new ut,PS=new H(0,0,0),LS=new H(1,1,1),Oi=new H,ka=new H,hn=new H,$p=new ut,qp=new ca;class ci{constructor(e=0,n=0,i=0,r=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],d=r[9],p=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return $p.makeRotationFromQuaternion(e),this.setFromRotationMatrix($p,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qp.setFromEuler(this),this.setFromQuaternion(qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class dh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DS=0;const Kp=new H,Kr=new ca,hi=new ut,za=new H,co=new H,IS=new H,US=new ca,Zp=new H(1,0,0),Qp=new H(0,1,0),Jp=new H(0,0,1),em={type:"added"},NS={type:"removed"},Zr={type:"childadded",child:null},uu={type:"childremoved",child:null};class vt extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=la(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new H,n=new ci,i=new ca,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ge}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(Zp,e)}rotateY(e){return this.rotateOnAxis(Qp,e)}rotateZ(e){return this.rotateOnAxis(Jp,e)}translateOnAxis(e,n){return Kp.copy(e).applyQuaternion(this.quaternion),this.position.add(Kp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zp,e)}translateY(e){return this.translateOnAxis(Qp,e)}translateZ(e){return this.translateOnAxis(Jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?za.copy(e):za.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(co,za,this.up):hi.lookAt(za,co,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(hi),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(em),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(NS),uu.child=e,this.dispatchEvent(uu),uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(em),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,IS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,US,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),d=o(e.images),p=o(e.shapes),h=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DEFAULT_UP=new H(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new H,pi=new H,fu=new H,mi=new H,Qr=new H,Jr=new H,tm=new H,du=new H,hu=new H,pu=new H;class ri{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),pi.subVectors(i,n),fu.subVectors(e,n);const o=zn.dot(zn),a=zn.dot(pi),l=zn.dot(fu),u=pi.dot(pi),d=pi.dot(fu),p=o*u-a*a;if(p===0)return s.set(0,0,0),null;const h=1/p,g=(u*l-a*d)*h,x=(o*d-a*l)*h;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),pi.subVectors(e,n),zn.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),zn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Qr.subVectors(r,i),Jr.subVectors(s,i),du.subVectors(e,i);const l=Qr.dot(du),u=Jr.dot(du);if(l<=0&&u<=0)return n.copy(i);hu.subVectors(e,r);const d=Qr.dot(hu),p=Jr.dot(hu);if(d>=0&&p<=d)return n.copy(r);const h=l*p-d*u;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Qr,o);pu.subVectors(e,s);const g=Qr.dot(pu),x=Jr.dot(pu);if(x>=0&&g<=x)return n.copy(s);const _=g*u-l*x;if(_<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Jr,a);const c=d*x-g*p;if(c<=0&&p-d>=0&&g-x>=0)return tm.subVectors(s,r),a=(p-d)/(p-d+(g-x)),n.copy(r).addScaledVector(tm,a);const f=1/(c+_+h);return o=_*f,a=h*f,n.copy(i).addScaledVector(Qr,o).addScaledVector(Jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function mu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=yS(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=mu(o,s,e+1/3),this.g=mu(o,s,e),this.b=mu(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vn){const i=Cv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=nu(e.r),this.g=nu(e.g),this.b=nu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return it.fromWorkingColorSpace(jt.copy(this),e),Math.round(rn(jt.r*255,0,255))*65536+Math.round(rn(jt.g*255,0,255))*256+Math.round(rn(jt.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const d=(a+o)/2;if(a===o)l=0,u=0;else{const p=o-a;switch(u=d<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Vn){it.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Vn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+n,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ki),e.getHSL(Ba);const i=eu(ki.h,Ba.h,n),r=eu(ki.s,Ba.s,n),s=eu(ki.l,Ba.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new We;We.NAMES=Cv;let FS=0;class fa extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=la(),this.name="",this.type="Material",this.blending=Ls,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wf,this.blendDst=Tf,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Xl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wf&&(i.blendSrc=this.blendSrc),this.blendDst!==Tf&&(i.blendDst=this.blendDst),this.blendEquation!==Mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Ms extends fa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new H,Ha=new je;class Kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Vp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ev("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ha.fromBufferAttribute(this,n),Ha.applyMatrix3(e),this.setXY(n,Ha.x,Ha.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=oo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=oo(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=oo(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=oo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=oo(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vp&&(e.usage=this.usage),e}}class Rv extends Kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class bv extends Kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Sn extends Kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let OS=0;const An=new ut,gu=new vt,es=new H,pn=new Hr,uo=new Hr,It=new H;class Li extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=la(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mv(e)?bv:Rv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(pn.min,uo.min),pn.expandByPoint(It),It.addVectors(pn.max,uo.max),pn.expandByPoint(It)):(pn.expandByPoint(uo.min),pn.expandByPoint(uo.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)It.fromBufferAttribute(a,u),l&&(es.fromBufferAttribute(e,u),It.add(es)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new H,l[C]=new H;const u=new H,d=new H,p=new H,h=new je,g=new je,x=new je,_=new H,c=new H;function f(C,E,y){u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,E),p.fromBufferAttribute(i,y),h.fromBufferAttribute(s,C),g.fromBufferAttribute(s,E),x.fromBufferAttribute(s,y),d.sub(u),p.sub(u),g.sub(h),x.sub(h);const P=1/(g.x*x.y-x.x*g.y);isFinite(P)&&(_.copy(d).multiplyScalar(x.y).addScaledVector(p,-g.y).multiplyScalar(P),c.copy(p).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(P),a[C].add(_),a[E].add(_),a[y].add(_),l[C].add(c),l[E].add(c),l[y].add(c))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let C=0,E=m.length;C<E;++C){const y=m[C],P=y.start,O=y.count;for(let z=P,j=P+O;z<j;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const v=new H,S=new H,b=new H,T=new H;function A(C){b.fromBufferAttribute(r,C),T.copy(b);const E=a[C];v.copy(E),v.sub(b.multiplyScalar(b.dot(E))).normalize(),S.crossVectors(T,E);const P=S.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,P)}for(let C=0,E=m.length;C<E;++C){const y=m[C],P=y.start,O=y.count;for(let z=P,j=P+O;z<j;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,u=new H,d=new H,p=new H;if(e)for(let h=0,g=e.count;h<g;h+=3){const x=e.getX(h+0),_=e.getX(h+1),c=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,c),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,c),a.add(d),l.add(d),u.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(c,u.x,u.y,u.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const u=a.array,d=a.itemSize,p=a.normalized,h=new u.constructor(l.length*d);let g=0,x=0;for(let _=0,c=l.length;_<c;_++){a.isInterleavedBufferAttribute?g=l[_]*a.data.stride+a.offset:g=l[_]*d;for(let f=0;f<d;f++)h[x++]=u[g++]}return new Kn(h,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Li,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let d=0,p=u.length;d<p;d++){const h=u[d],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let p=0,h=u.length;p<h;p++){const g=u[p];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],p=s[u];for(let h=0,g=p.length;h<g;h++)d.push(p[h].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nm=new ut,pr=new Av,Va=new ua,im=new H,ts=new H,ns=new H,is=new H,vu=new H,Ga=new H,Wa=new je,Xa=new je,ja=new je,rm=new H,sm=new H,om=new H,Ya=new H,$a=new H;class xn extends vt{constructor(e=new Li,n=new Ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ga.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=a[l],p=s[l];d!==0&&(vu.fromBufferAttribute(p,e),o?Ga.addScaledVector(vu,d):Ga.addScaledVector(vu.sub(n),d))}n.add(Ga)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(Va.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Va,im)===null||pr.origin.distanceToSquared(im)>(e.far-e.near)**2))&&(nm.copy(s).invert(),pr.copy(e.ray).applyMatrix4(nm),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,pr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=h.length;x<_;x++){const c=h[x],f=o[c.materialIndex],m=Math.max(c.start,g.start),v=Math.min(a.count,Math.min(c.start+c.count,g.start+g.count));for(let S=m,b=v;S<b;S+=3){const T=a.getX(S),A=a.getX(S+1),C=a.getX(S+2);r=qa(this,f,e,i,u,d,p,T,A,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=c.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),_=Math.min(a.count,g.start+g.count);for(let c=x,f=_;c<f;c+=3){const m=a.getX(c),v=a.getX(c+1),S=a.getX(c+2);r=qa(this,o,e,i,u,d,p,m,v,S),r&&(r.faceIndex=Math.floor(c/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=h.length;x<_;x++){const c=h[x],f=o[c.materialIndex],m=Math.max(c.start,g.start),v=Math.min(l.count,Math.min(c.start+c.count,g.start+g.count));for(let S=m,b=v;S<b;S+=3){const T=S,A=S+1,C=S+2;r=qa(this,f,e,i,u,d,p,T,A,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=c.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let c=x,f=_;c<f;c+=3){const m=c,v=c+1,S=c+2;r=qa(this,o,e,i,u,d,p,m,v,S),r&&(r.faceIndex=Math.floor(c/3),n.push(r))}}}}function kS(t,e,n,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===or,a),l===null)return null;$a.copy(a),$a.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo($a);return u<n.near||u>n.far?null:{distance:u,point:$a.clone(),object:t}}function qa(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,ts),t.getVertexPosition(l,ns),t.getVertexPosition(u,is);const d=kS(t,e,n,i,ts,ns,is,Ya);if(d){r&&(Wa.fromBufferAttribute(r,a),Xa.fromBufferAttribute(r,l),ja.fromBufferAttribute(r,u),d.uv=ri.getInterpolation(Ya,ts,ns,is,Wa,Xa,ja,new je)),s&&(Wa.fromBufferAttribute(s,a),Xa.fromBufferAttribute(s,l),ja.fromBufferAttribute(s,u),d.uv1=ri.getInterpolation(Ya,ts,ns,is,Wa,Xa,ja,new je)),o&&(rm.fromBufferAttribute(o,a),sm.fromBufferAttribute(o,l),om.fromBufferAttribute(o,u),d.normal=ri.getInterpolation(Ya,ts,ns,is,rm,sm,om,new H),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c:u,normal:new H,materialIndex:0};ri.getNormal(ts,ns,is,p.normal),d.face=p}return d}class Un extends Li{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],d=[],p=[];let h=0,g=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sn(u,3)),this.setAttribute("normal",new Sn(d,3)),this.setAttribute("uv",new Sn(p,2));function x(_,c,f,m,v,S,b,T,A,C,E){const y=S/A,P=b/C,O=S/2,z=b/2,j=T/2,Y=A+1,X=C+1;let q=0,D=0;const K=new H;for(let J=0;J<X;J++){const ae=J*P-z;for(let ve=0;ve<Y;ve++){const ee=ve*y-O;K[_]=ee*m,K[c]=ae*v,K[f]=j,u.push(K.x,K.y,K.z),K[_]=0,K[c]=0,K[f]=T>0?1:-1,d.push(K.x,K.y,K.z),p.push(ve/A),p.push(1-J/C),q+=1}}for(let J=0;J<C;J++)for(let ae=0;ae<A;ae++){const ve=h+ae+Y*J,ee=h+ae+Y*(J+1),k=h+(ae+1)+Y*(J+1),F=h+(ae+1)+Y*J;l.push(ve,ee,F),l.push(ee,k,F),D+=6}a.addGroup(g,D,E),g+=D,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=js(t[n]);for(const r in i)e[r]=i[r]}return e}function zS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Pv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const BS={clone:js,merge:qt};var HS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends fa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HS,this.fragmentShader=VS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=zS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Lv extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new H,am=new je,lm=new je;class bn extends Lv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=nd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nd*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,n){return this.getViewBounds(e,am,lm),n.subVectors(lm,am)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Jc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const rs=-90,ss=1;class GS extends vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(rs,ss,e,n);r.layers=this.layers,this.add(r);const s=new bn(rs,ss,e,n);s.layers=this.layers,this.add(s);const o=new bn(rs,ss,e,n);o.layers=this.layers,this.add(o);const a=new bn(rs,ss,e,n);a.layers=this.layers,this.add(a);const l=new bn(rs,ss,e,n);l.layers=this.layers,this.add(l);const u=new bn(rs,ss,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ql)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,d]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(p,h,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Dv extends Qt{constructor(e,n,i,r,s,o,a,l,u,d){e=e!==void 0?e:[],n=n!==void 0?n:Vs,super(e,n,i,r,s,o,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WS extends Or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Dv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:jn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Un(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:tr});s.uniforms.tEquirect.value=n;const o=new xn(r,s),a=n.minFilter;return n.minFilter===Rr&&(n.minFilter=jn),new GS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const _u=new H,XS=new H,jS=new Ge;class yr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=_u.subVectors(i,n).cross(XS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(_u),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||jS.getNormalMatrix(e),r=this.coplanarPoint(_u).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new ua,Ka=new H;class hh{constructor(e=new yr,n=new yr,i=new yr,r=new yr,s=new yr,o=new yr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Mi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],d=r[5],p=r[6],h=r[7],g=r[8],x=r[9],_=r[10],c=r[11],f=r[12],m=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,h-u,c-g,S-f).normalize(),i[1].setComponents(l+s,h+u,c+g,S+f).normalize(),i[2].setComponents(l+o,h+d,c+x,S+m).normalize(),i[3].setComponents(l-o,h-d,c-x,S-m).normalize(),i[4].setComponents(l-a,h-p,c-_,S-v).normalize(),n===Mi)i[5].setComponents(l+a,h+p,c+_,S+v).normalize();else if(n===ql)i[5].setComponents(a,p,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ka.x=r.normal.x>0?e.max.x:e.min.x,Ka.y=r.normal.y>0?e.max.y:e.min.y,Ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Iv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function YS(t){const e=new WeakMap;function n(a,l){const u=a.array,d=a.usage,p=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,d),a.onUploadCallback();let g;if(u instanceof Float32Array)g=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=t.SHORT;else if(u instanceof Uint32Array)g=t.UNSIGNED_INT;else if(u instanceof Int32Array)g=t.INT;else if(u instanceof Int8Array)g=t.BYTE;else if(u instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,u){const d=l.array,p=l._updateRange,h=l.updateRanges;if(t.bindBuffer(u,a),p.count===-1&&h.length===0&&t.bufferSubData(u,0,d),h.length!==0){for(let g=0,x=h.length;g<x;g++){const _=h[g];t.bufferSubData(u,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}p.count!==-1&&(t.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count),p.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class kr extends Li{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,d=l+1,p=e/a,h=n/l,g=[],x=[],_=[],c=[];for(let f=0;f<d;f++){const m=f*h-o;for(let v=0;v<u;v++){const S=v*p-s;x.push(S,-m,0),_.push(0,0,1),c.push(v/a),c.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<a;m++){const v=m+u*f,S=m+u*(f+1),b=m+1+u*(f+1),T=m+1+u*f;g.push(v,S,T),g.push(S,b,T)}this.setIndex(g),this.setAttribute("position",new Sn(x,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.width,e.height,e.widthSegments,e.heightSegments)}}var $S=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,KS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,iM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_M=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wM="gl_FragColor = linearToOutputTexel( gl_FragColor );",TM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,AM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,RM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,BM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,HM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$M=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,i1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,u1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,d1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,h1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,g1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,v1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,E1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,P1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,L1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,D1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,I1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,N1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,O1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,H1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,V1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,j1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_E=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,TE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:$S,alphahash_pars_fragment:qS,alphamap_fragment:KS,alphamap_pars_fragment:ZS,alphatest_fragment:QS,alphatest_pars_fragment:JS,aomap_fragment:eM,aomap_pars_fragment:tM,batching_pars_vertex:nM,batching_vertex:iM,begin_vertex:rM,beginnormal_vertex:sM,bsdfs:oM,iridescence_fragment:aM,bumpmap_pars_fragment:lM,clipping_planes_fragment:cM,clipping_planes_pars_fragment:uM,clipping_planes_pars_vertex:fM,clipping_planes_vertex:dM,color_fragment:hM,color_pars_fragment:pM,color_pars_vertex:mM,color_vertex:gM,common:vM,cube_uv_reflection_fragment:_M,defaultnormal_vertex:xM,displacementmap_pars_vertex:yM,displacementmap_vertex:SM,emissivemap_fragment:MM,emissivemap_pars_fragment:EM,colorspace_fragment:wM,colorspace_pars_fragment:TM,envmap_fragment:AM,envmap_common_pars_fragment:CM,envmap_pars_fragment:RM,envmap_pars_vertex:bM,envmap_physical_pars_fragment:BM,envmap_vertex:PM,fog_vertex:LM,fog_pars_vertex:DM,fog_fragment:IM,fog_pars_fragment:UM,gradientmap_pars_fragment:NM,lightmap_pars_fragment:FM,lights_lambert_fragment:OM,lights_lambert_pars_fragment:kM,lights_pars_begin:zM,lights_toon_fragment:HM,lights_toon_pars_fragment:VM,lights_phong_fragment:GM,lights_phong_pars_fragment:WM,lights_physical_fragment:XM,lights_physical_pars_fragment:jM,lights_fragment_begin:YM,lights_fragment_maps:$M,lights_fragment_end:qM,logdepthbuf_fragment:KM,logdepthbuf_pars_fragment:ZM,logdepthbuf_pars_vertex:QM,logdepthbuf_vertex:JM,map_fragment:e1,map_pars_fragment:t1,map_particle_fragment:n1,map_particle_pars_fragment:i1,metalnessmap_fragment:r1,metalnessmap_pars_fragment:s1,morphinstance_vertex:o1,morphcolor_vertex:a1,morphnormal_vertex:l1,morphtarget_pars_vertex:c1,morphtarget_vertex:u1,normal_fragment_begin:f1,normal_fragment_maps:d1,normal_pars_fragment:h1,normal_pars_vertex:p1,normal_vertex:m1,normalmap_pars_fragment:g1,clearcoat_normal_fragment_begin:v1,clearcoat_normal_fragment_maps:_1,clearcoat_pars_fragment:x1,iridescence_pars_fragment:y1,opaque_fragment:S1,packing:M1,premultiplied_alpha_fragment:E1,project_vertex:w1,dithering_fragment:T1,dithering_pars_fragment:A1,roughnessmap_fragment:C1,roughnessmap_pars_fragment:R1,shadowmap_pars_fragment:b1,shadowmap_pars_vertex:P1,shadowmap_vertex:L1,shadowmask_pars_fragment:D1,skinbase_vertex:I1,skinning_pars_vertex:U1,skinning_vertex:N1,skinnormal_vertex:F1,specularmap_fragment:O1,specularmap_pars_fragment:k1,tonemapping_fragment:z1,tonemapping_pars_fragment:B1,transmission_fragment:H1,transmission_pars_fragment:V1,uv_pars_fragment:G1,uv_pars_vertex:W1,uv_vertex:X1,worldpos_vertex:j1,background_vert:Y1,background_frag:$1,backgroundCube_vert:q1,backgroundCube_frag:K1,cube_vert:Z1,cube_frag:Q1,depth_vert:J1,depth_frag:eE,distanceRGBA_vert:tE,distanceRGBA_frag:nE,equirect_vert:iE,equirect_frag:rE,linedashed_vert:sE,linedashed_frag:oE,meshbasic_vert:aE,meshbasic_frag:lE,meshlambert_vert:cE,meshlambert_frag:uE,meshmatcap_vert:fE,meshmatcap_frag:dE,meshnormal_vert:hE,meshnormal_frag:pE,meshphong_vert:mE,meshphong_frag:gE,meshphysical_vert:vE,meshphysical_frag:_E,meshtoon_vert:xE,meshtoon_frag:yE,points_vert:SE,points_frag:ME,shadow_vert:EE,shadow_frag:wE,sprite_vert:TE,sprite_frag:AE},pe={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ni={basic:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:qt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:qt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:qt([pe.points,pe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:qt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:qt([pe.common,pe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:qt([pe.sprite,pe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:qt([pe.common,pe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:qt([pe.lights,pe.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ni.physical={uniforms:qt([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Za={r:0,b:0,g:0},gr=new ci,CE=new ut;function RE(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,u,d,p=null,h=0,g=null;function x(m){let v=m.isScene===!0?m.background:null;return v&&v.isTexture&&(v=(m.backgroundBlurriness>0?n:e).get(v)),v}function _(m){let v=!1;const S=x(m);S===null?f(a,l):S&&S.isColor&&(f(S,1),v=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function c(m,v){const S=x(v);S&&(S.isCubeTexture||S.mapping===_c)?(d===void 0&&(d=new xn(new Un(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:js(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),gr.copy(v.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(CE.makeRotationFromEuler(gr)),d.material.toneMapped=it.getTransfer(S.colorSpace)!==lt,(p!==S||h!==S.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,p=S,h=S.version,g=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new xn(new kr(2,2),new bi({name:"BackgroundMaterial",uniforms:js(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=it.getTransfer(S.colorSpace)!==lt,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||h!==S.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,p=S,h=S.version,g=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function f(m,v){m.getRGB(Za,Pv(t)),i.buffers.color.setClear(Za.r,Za.g,Za.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(m,v=1){a.set(m),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,f(a,l)},render:_,addToRenderList:c}}function bE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,P,O,z,j){let Y=!1;const X=p(z,O,P);s!==X&&(s=X,u(s.object)),Y=g(y,z,O,j),Y&&x(y,z,O,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,S(y,P,O,z),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function u(y){return t.bindVertexArray(y)}function d(y){return t.deleteVertexArray(y)}function p(y,P,O){const z=O.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let Y=j[P.id];Y===void 0&&(Y={},j[P.id]=Y);let X=Y[z];return X===void 0&&(X=h(l()),Y[z]=X),X}function h(y){const P=[],O=[],z=[];for(let j=0;j<n;j++)P[j]=0,O[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:z,object:y,attributes:{},index:null}}function g(y,P,O,z){const j=s.attributes,Y=P.attributes;let X=0;const q=O.getAttributes();for(const D in q)if(q[D].location>=0){const J=j[D];let ae=Y[D];if(ae===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),J===void 0||J.attribute!==ae||ae&&J.data!==ae.data)return!0;X++}return s.attributesNum!==X||s.index!==z}function x(y,P,O,z){const j={},Y=P.attributes;let X=0;const q=O.getAttributes();for(const D in q)if(q[D].location>=0){let J=Y[D];J===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(J=y.instanceColor));const ae={};ae.attribute=J,J&&J.data&&(ae.data=J.data),j[D]=ae,X++}s.attributes=j,s.attributesNum=X,s.index=z}function _(){const y=s.newAttributes;for(let P=0,O=y.length;P<O;P++)y[P]=0}function c(y){f(y,0)}function f(y,P){const O=s.newAttributes,z=s.enabledAttributes,j=s.attributeDivisors;O[y]=1,z[y]===0&&(t.enableVertexAttribArray(y),z[y]=1),j[y]!==P&&(t.vertexAttribDivisor(y,P),j[y]=P)}function m(){const y=s.newAttributes,P=s.enabledAttributes;for(let O=0,z=P.length;O<z;O++)P[O]!==y[O]&&(t.disableVertexAttribArray(O),P[O]=0)}function v(y,P,O,z,j,Y,X){X===!0?t.vertexAttribIPointer(y,P,O,j,Y):t.vertexAttribPointer(y,P,O,z,j,Y)}function S(y,P,O,z){_();const j=z.attributes,Y=O.getAttributes(),X=P.defaultAttributeValues;for(const q in Y){const D=Y[q];if(D.location>=0){let K=j[q];if(K===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){const J=K.normalized,ae=K.itemSize,ve=e.get(K);if(ve===void 0)continue;const ee=ve.buffer,k=ve.type,F=ve.bytesPerElement,$=k===t.INT||k===t.UNSIGNED_INT||K.gpuType===rh;if(K.isInterleavedBufferAttribute){const ne=K.data,xe=ne.stride,Ce=K.offset;if(ne.isInstancedInterleavedBuffer){for(let we=0;we<D.locationSize;we++)f(D.location+we,ne.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let we=0;we<D.locationSize;we++)c(D.location+we);t.bindBuffer(t.ARRAY_BUFFER,ee);for(let we=0;we<D.locationSize;we++)v(D.location+we,ae/D.locationSize,k,J,xe*F,(Ce+ae/D.locationSize*we)*F,$)}else{if(K.isInstancedBufferAttribute){for(let ne=0;ne<D.locationSize;ne++)f(D.location+ne,K.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ne=0;ne<D.locationSize;ne++)c(D.location+ne);t.bindBuffer(t.ARRAY_BUFFER,ee);for(let ne=0;ne<D.locationSize;ne++)v(D.location+ne,ae/D.locationSize,k,J,ae*F,ae/D.locationSize*ne*F,$)}}else if(X!==void 0){const J=X[q];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(D.location,J);break;case 3:t.vertexAttrib3fv(D.location,J);break;case 4:t.vertexAttrib4fv(D.location,J);break;default:t.vertexAttrib1fv(D.location,J)}}}}m()}function b(){C();for(const y in i){const P=i[y];for(const O in P){const z=P[O];for(const j in z)d(z[j].object),delete z[j];delete P[O]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const O in P){const z=P[O];for(const j in z)d(z[j].object),delete z[j];delete P[O]}delete i[y.id]}function A(y){for(const P in i){const O=i[P];if(O[y.id]===void 0)continue;const z=O[y.id];for(const j in z)d(z[j].object),delete z[j];delete O[y.id]}}function C(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:c,disableUnusedAttributes:m}}function PE(t,e,n){let i;function r(u){i=u}function s(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function o(u,d,p){p!==0&&(t.drawArraysInstanced(i,u,d,p),n.update(d,i,p))}function a(u,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,p);let g=0;for(let x=0;x<p;x++)g+=d[x];n.update(g,i,1)}function l(u,d,p,h){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<u.length;x++)o(u[x],d[x],h[x]);else{g.multiDrawArraysInstancedWEBGL(i,u,0,d,0,h,0,p);let x=0;for(let _=0;_<p;_++)x+=d[_];for(let _=0;_<h.length;_++)n.update(x,i,h[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function LE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Yn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const A=T===aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ri&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==si&&!A)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const p=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),m=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:p,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:_,maxAttributes:c,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:S,maxSamples:b}}function DE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new yr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const g=p.length!==0||h||i!==0||r;return r=h,i=p.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=d(p,h,0)},this.setState=function(p,h,g){const x=p.clippingPlanes,_=p.clipIntersection,c=p.clipShadows,f=t.get(p);if(!r||x===null||x.length===0||s&&!c)s?d(null):u();else{const m=s?0:i,v=m*4;let S=f.clippingState||null;l.value=S,S=d(x,h,v,g);for(let b=0;b!==v;++b)S[b]=n[b];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,h,g,x){const _=p!==null?p.length:0;let c=null;if(_!==0){if(c=l.value,x!==!0||c===null){const f=g+_*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(c===null||c.length<f)&&(c=new Float32Array(f));for(let v=0,S=g;v!==_;++v,S+=4)o.copy(p[v]).applyMatrix4(m,a),o.normal.toArray(c,S),c[S+3]=o.constant}l.value=c,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,c}}function IE(t){let e=new WeakMap;function n(o,a){return a===Af?o.mapping=Vs:a===Cf&&(o.mapping=Gs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Af||a===Cf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new WS(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Uv extends Lv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Es=4,cm=[.125,.215,.35,.446,.526,.582],Er=20,xu=new Uv,um=new We;let yu=null,Su=0,Mu=0,Eu=!1;const Sr=(1+Math.sqrt(5))/2,os=1/Sr,fm=[new H(-Sr,os,0),new H(Sr,os,0),new H(-os,0,Sr),new H(os,0,Sr),new H(0,Sr,-os),new H(0,Sr,os),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){yu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yu,Su,Mu),this._renderer.xr.enabled=Eu,e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:aa,format:Yn,colorSpace:ur,depthBuffer:!1},r=hm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UE(s)),this._blurMaterial=NE(s,e,n)}return r}_compileMaterial(e){const n=new xn(this._lodPlanes[0],e);this._renderer.compile(n,xu)}_sceneToCubeUV(e,n,i,r){const a=new bn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,h=d.toneMapping;d.getClearColor(um),d.toneMapping=nr,d.autoClear=!1;const g=new Ms({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),x=new xn(new Un,g);let _=!1;const c=e.background;c?c.isColor&&(g.color.copy(c),e.background=null,_=!0):(g.color.copy(um),_=!0);for(let f=0;f<6;f++){const m=f%3;m===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):m===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const v=this._cubeSize;Qa(r,m*v,f>2?v:0,v,v),d.setRenderTarget(r),_&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=h,d.autoClear=p,e.background=c}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Vs||e.mapping===Gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new xn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Qa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,xu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=fm[(r-s-1)%fm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new xn(this._lodPlanes[r],u),h=u.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Er-1),_=s/x,c=isFinite(s)?1+Math.floor(d*_):Er;c>Er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${Er}`);const f=[];let m=0;for(let A=0;A<Er;++A){const C=A/_,E=Math.exp(-C*C/2);f.push(E),A===0?m+=E:A<c&&(m+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/m;h.envMap.value=e.texture,h.samples.value=c,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const S=this._sizeLods[r],b=3*S*(r>v-Es?r-v+Es:0),T=4*(this._cubeSize-S);Qa(n,b,T,3*S,2*S),l.setRenderTarget(n),l.render(p,xu)}}function UE(t){const e=[],n=[],i=[];let r=t;const s=t-Es+1+cm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Es?l=cm[o-t+Es-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),d=-u,p=1+u,h=[d,d,p,d,p,p,d,d,p,p,d,p],g=6,x=6,_=3,c=2,f=1,m=new Float32Array(_*x*g),v=new Float32Array(c*x*g),S=new Float32Array(f*x*g);for(let T=0;T<g;T++){const A=T%3*2/3-1,C=T>2?0:-1,E=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];m.set(E,_*x*T),v.set(h,c*x*T);const y=[T,T,T,T,T,T];S.set(y,f*x*T)}const b=new Li;b.setAttribute("position",new Kn(m,_)),b.setAttribute("uv",new Kn(v,c)),b.setAttribute("faceIndex",new Kn(S,f)),e.push(b),r>Es&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function hm(t,e,n){const i=new Or(t,e,n);return i.texture.mapping=_c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function NE(t,e,n){const i=new Float32Array(Er),r=new H(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function pm(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function mm(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function FE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Af||l===Cf,d=l===Vs||l===Gs;if(u||d){let p=e.get(a);const h=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new dm(t)),p=u?n.fromEquirectangular(a,p):n.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const g=a.image;return u&&g&&g.height>0||d&&g&&r(g)?(n===null&&(n=new dm(t)),p=u?n.fromEquirectangular(a):n.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function OE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ev("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kE(t,e,n,i){const r={},s=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const _=h.morphAttributes[x];for(let c=0,f=_.length;c<f;c++)e.remove(_[c])}h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(p){const h=p.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const g=p.morphAttributes;for(const x in g){const _=g[x];for(let c=0,f=_.length;c<f;c++)e.update(_[c],t.ARRAY_BUFFER)}}function u(p){const h=[],g=p.index,x=p.attributes.position;let _=0;if(g!==null){const m=g.array;_=g.version;for(let v=0,S=m.length;v<S;v+=3){const b=m[v+0],T=m[v+1],A=m[v+2];h.push(b,T,T,A,A,b)}}else if(x!==void 0){const m=x.array;_=x.version;for(let v=0,S=m.length/3-1;v<S;v+=3){const b=v+0,T=v+1,A=v+2;h.push(b,T,T,A,A,b)}}else return;const c=new(Mv(h)?bv:Rv)(h,1);c.version=_;const f=s.get(p);f&&e.remove(f),s.set(p,c)}function d(p){const h=s.get(p);if(h){const g=p.index;g!==null&&h.version<g.version&&u(p)}else u(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:d}}function zE(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,g){t.drawElements(i,g,s,h*o),n.update(g,i,1)}function u(h,g,x){x!==0&&(t.drawElementsInstanced(i,g,s,h*o,x),n.update(g,i,x))}function d(h,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,h,0,x);let c=0;for(let f=0;f<x;f++)c+=g[f];n.update(c,i,1)}function p(h,g,x,_){if(x===0)return;const c=e.get("WEBGL_multi_draw");if(c===null)for(let f=0;f<h.length;f++)u(h[f]/o,g[f],_[f]);else{c.multiDrawElementsInstancedWEBGL(i,g,0,s,h,0,_,0,x);let f=0;for(let m=0;m<x;m++)f+=g[m];for(let m=0;m<_.length;m++)n.update(f,i,_[m])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function BE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function HE(t,e,n){const i=new WeakMap,r=new bt;function s(o,a,l){const u=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==p){let y=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var g=y;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,c=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;x===!0&&(S=1),_===!0&&(S=2),c===!0&&(S=3);let b=a.attributes.position.count*S,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*T*4*p),C=new Tv(A,b,T,p);C.type=si,C.needsUpdate=!0;const E=S*4;for(let P=0;P<p;P++){const O=f[P],z=m[P],j=v[P],Y=b*T*4*P;for(let X=0;X<O.count;X++){const q=X*E;x===!0&&(r.fromBufferAttribute(O,X),A[Y+q+0]=r.x,A[Y+q+1]=r.y,A[Y+q+2]=r.z,A[Y+q+3]=0),_===!0&&(r.fromBufferAttribute(z,X),A[Y+q+4]=r.x,A[Y+q+5]=r.y,A[Y+q+6]=r.z,A[Y+q+7]=0),c===!0&&(r.fromBufferAttribute(j,X),A[Y+q+8]=r.x,A[Y+q+9]=r.y,A[Y+q+10]=r.z,A[Y+q+11]=j.itemSize===4?r.w:1)}}h={count:p,texture:C,size:new je(b,T)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let c=0;c<u.length;c++)x+=u[c];const _=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function VE(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return p}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class Nv extends Qt{constructor(e,n,i,r,s,o,a,l,u,d=Ds){if(d!==Ds&&d!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ds&&(i=Fr),i===void 0&&d===Xs&&(i=Ws),super(null,r,s,o,a,l,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Fv=new Qt,gm=new Nv(1,1),Ov=new Tv,kv=new RS,zv=new Dv,vm=[],_m=[],xm=new Float32Array(16),ym=new Float32Array(9),Sm=new Float32Array(4);function Zs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=vm[r];if(s===void 0&&(s=new Float32Array(r),vm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function yc(t,e){let n=_m[e];n===void 0&&(n=new Int32Array(e),_m[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function GE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function XE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function YE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;Sm.set(i),t.uniformMatrix2fv(this.addr,!1,Sm),Dt(n,i)}}function $E(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;ym.set(i),t.uniformMatrix3fv(this.addr,!1,ym),Dt(n,i)}}function qE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;xm.set(i),t.uniformMatrix4fv(this.addr,!1,xm),Dt(n,i)}}function KE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function QE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function JE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function ew(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(gm.compareFunction=Sv,s=gm):s=Fv,n.setTexture2D(e||s,r)}function sw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||kv,r)}function ow(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||zv,r)}function aw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ov,r)}function lw(t){switch(t){case 5126:return GE;case 35664:return WE;case 35665:return XE;case 35666:return jE;case 35674:return YE;case 35675:return $E;case 35676:return qE;case 5124:case 35670:return KE;case 35667:case 35671:return ZE;case 35668:case 35672:return QE;case 35669:case 35673:return JE;case 5125:return ew;case 36294:return tw;case 36295:return nw;case 36296:return iw;case 35678:case 36198:case 36298:case 36306:case 35682:return rw;case 35679:case 36299:case 36307:return sw;case 35680:case 36300:case 36308:case 36293:return ow;case 36289:case 36303:case 36311:case 36292:return aw}}function cw(t,e){t.uniform1fv(this.addr,e)}function uw(t,e){const n=Zs(e,this.size,2);t.uniform2fv(this.addr,n)}function fw(t,e){const n=Zs(e,this.size,3);t.uniform3fv(this.addr,n)}function dw(t,e){const n=Zs(e,this.size,4);t.uniform4fv(this.addr,n)}function hw(t,e){const n=Zs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pw(t,e){const n=Zs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mw(t,e){const n=Zs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gw(t,e){t.uniform1iv(this.addr,e)}function vw(t,e){t.uniform2iv(this.addr,e)}function _w(t,e){t.uniform3iv(this.addr,e)}function xw(t,e){t.uniform4iv(this.addr,e)}function yw(t,e){t.uniform1uiv(this.addr,e)}function Sw(t,e){t.uniform2uiv(this.addr,e)}function Mw(t,e){t.uniform3uiv(this.addr,e)}function Ew(t,e){t.uniform4uiv(this.addr,e)}function ww(t,e,n){const i=this.cache,r=e.length,s=yc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Fv,s[o])}function Tw(t,e,n){const i=this.cache,r=e.length,s=yc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||kv,s[o])}function Aw(t,e,n){const i=this.cache,r=e.length,s=yc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||zv,s[o])}function Cw(t,e,n){const i=this.cache,r=e.length,s=yc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ov,s[o])}function Rw(t){switch(t){case 5126:return cw;case 35664:return uw;case 35665:return fw;case 35666:return dw;case 35674:return hw;case 35675:return pw;case 35676:return mw;case 5124:case 35670:return gw;case 35667:case 35671:return vw;case 35668:case 35672:return _w;case 35669:case 35673:return xw;case 5125:return yw;case 36294:return Sw;case 36295:return Mw;case 36296:return Ew;case 35678:case 36198:case 36298:case 36306:case 35682:return ww;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return Aw;case 36289:case 36303:case 36311:case 36292:return Cw}}class bw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=lw(n.type)}}class Pw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Rw(n.type)}}class Lw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const wu=/(\w+)(\])?(\[|\.)?/g;function Mm(t,e){t.seq.push(e),t.map[e.id]=e}function Dw(t,e,n){const i=t.name,r=i.length;for(wu.lastIndex=0;;){const s=wu.exec(i),o=wu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Mm(n,u===void 0?new bw(a,t,e):new Pw(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new Lw(a),Mm(n,p)),n=p}}}class xl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Dw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Em(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Iw=37297;let Uw=0;function Nw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Fw(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===$l&&n===Yl?i="LinearDisplayP3ToLinearSRGB":e===Yl&&n===$l&&(i="LinearSRGBToLinearDisplayP3"),t){case ur:case xc:return[i,"LinearTransferOETF"];case Vn:case fh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function wm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Nw(t.getShaderSource(e),o)}else return r}function Ow(t,e){const n=Fw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function kw(t,e){let n;switch(e){case nS:n="Linear";break;case iS:n="Reinhard";break;case rS:n="OptimizedCineon";break;case sS:n="ACESFilmic";break;case aS:n="AgX";break;case lS:n="Neutral";break;case oS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function zw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function Bw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Hw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function xo(t){return t!==""}function Tm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Am(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vw=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(t){return t.replace(Vw,Ww)}const Gw=new Map;function Ww(t,e){let n=Ve[e];if(n===void 0){const i=Gw.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return id(n)}const Xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cm(t){return t.replace(Xw,jw)}function jw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===cv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ry?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function $w(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case _c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function Kw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ih:e="ENVMAP_BLENDING_MULTIPLY";break;case eS:e="ENVMAP_BLENDING_MIX";break;case tS:e="ENVMAP_BLENDING_ADD";break}return e}function Zw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Qw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Yw(n),u=$w(n),d=qw(n),p=Kw(n),h=Zw(n),g=zw(n),x=Bw(s),_=r.createProgram();let c,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(xo).join(`
`),c.length>0&&(c+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(xo).join(`
`),f.length>0&&(f+=`
`)):(c=[Rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),f=[Rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==nr?"#define TONE_MAPPING":"",n.toneMapping!==nr?Ve.tonemapping_pars_fragment:"",n.toneMapping!==nr?kw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Ow("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xo).join(`
`)),o=id(o),o=Tm(o,n),o=Am(o,n),a=id(a),a=Tm(a,n),a=Am(a,n),o=Cm(o),a=Cm(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,c=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,f=["#define varying in",n.glslVersion===Gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=m+c+o,S=m+f+a,b=Em(r,r.VERTEX_SHADER,v),T=Em(r,r.FRAGMENT_SHADER,S);r.attachShader(_,b),r.attachShader(_,T),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(P){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(b).trim(),j=r.getShaderInfoLog(T).trim();let Y=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,b,T);else{const q=wm(r,b,"vertex"),D=wm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+q+`
`+D)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||j==="")&&(X=!1);X&&(P.diagnostics={runnable:Y,programLog:O,vertexShader:{log:z,prefix:c},fragmentShader:{log:j,prefix:f}})}r.deleteShader(b),r.deleteShader(T),C=new xl(r,_),E=Hw(r,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,Iw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Uw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}let Jw=0;class eT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new tT(e),n.set(e,i)),i}}class tT{constructor(e){this.id=Jw++,this.code=e,this.usedTimes=0}}function nT(t,e,n,i,r,s,o){const a=new dh,l=new eT,u=new Set,d=[],p=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return u.add(E),E===0?"uv":`uv${E}`}function c(E,y,P,O,z){const j=O.fog,Y=z.geometry,X=E.isMeshStandardMaterial?O.environment:null,q=(E.isMeshStandardMaterial?n:e).get(E.envMap||X),D=q&&q.mapping===_c?q.image.height:null,K=x[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const J=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ae=J!==void 0?J.length:0;let ve=0;Y.morphAttributes.position!==void 0&&(ve=1),Y.morphAttributes.normal!==void 0&&(ve=2),Y.morphAttributes.color!==void 0&&(ve=3);let ee,k,F,$;if(K){const Je=ni[K];ee=Je.vertexShader,k=Je.fragmentShader}else ee=E.vertexShader,k=E.fragmentShader,l.update(E),F=l.getVertexShaderID(E),$=l.getFragmentShaderID(E);const ne=t.getRenderTarget(),xe=z.isInstancedMesh===!0,Ce=z.isBatchedMesh===!0,we=!!E.map,Ne=!!E.matcap,L=!!q,Ze=!!E.aoMap,ie=!!E.lightMap,de=!!E.bumpMap,Z=!!E.normalMap,De=!!E.displacementMap,Te=!!E.emissiveMap,Re=!!E.metalnessMap,R=!!E.roughnessMap,M=E.anisotropy>0,B=E.clearcoat>0,se=E.dispersion>0,le=E.iridescence>0,re=E.sheen>0,Ie=E.transmission>0,me=M&&!!E.anisotropyMap,Se=B&&!!E.clearcoatMap,He=B&&!!E.clearcoatNormalMap,ce=B&&!!E.clearcoatRoughnessMap,ye=le&&!!E.iridescenceMap,$e=le&&!!E.iridescenceThicknessMap,ze=re&&!!E.sheenColorMap,Me=re&&!!E.sheenRoughnessMap,Be=!!E.specularMap,Xe=!!E.specularColorMap,dt=!!E.specularIntensityMap,I=Ie&&!!E.transmissionMap,ue=Ie&&!!E.thicknessMap,Q=!!E.gradientMap,te=!!E.alphaMap,he=E.alphaTest>0,Fe=!!E.alphaHash,qe=!!E.extensions;let wt=nr;E.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(wt=t.toneMapping);const Ot={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:ee,fragmentShader:k,defines:E.defines,customVertexShaderID:F,customFragmentShaderID:$,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Ce,batchingColor:Ce&&z._colorsTexture!==null,instancing:xe,instancingColor:xe&&z.instanceColor!==null,instancingMorph:xe&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ur,alphaToCoverage:!!E.alphaToCoverage,map:we,matcap:Ne,envMap:L,envMapMode:L&&q.mapping,envMapCubeUVHeight:D,aoMap:Ze,lightMap:ie,bumpMap:de,normalMap:Z,displacementMap:h&&De,emissiveMap:Te,normalMapObjectSpace:Z&&E.normalMapType===dS,normalMapTangentSpace:Z&&E.normalMapType===yv,metalnessMap:Re,roughnessMap:R,anisotropy:M,anisotropyMap:me,clearcoat:B,clearcoatMap:Se,clearcoatNormalMap:He,clearcoatRoughnessMap:ce,dispersion:se,iridescence:le,iridescenceMap:ye,iridescenceThicknessMap:$e,sheen:re,sheenColorMap:ze,sheenRoughnessMap:Me,specularMap:Be,specularColorMap:Xe,specularIntensityMap:dt,transmission:Ie,transmissionMap:I,thicknessMap:ue,gradientMap:Q,opaque:E.transparent===!1&&E.blending===Ls&&E.alphaToCoverage===!1,alphaMap:te,alphaTest:he,alphaHash:Fe,combine:E.combine,mapUv:we&&_(E.map.channel),aoMapUv:Ze&&_(E.aoMap.channel),lightMapUv:ie&&_(E.lightMap.channel),bumpMapUv:de&&_(E.bumpMap.channel),normalMapUv:Z&&_(E.normalMap.channel),displacementMapUv:De&&_(E.displacementMap.channel),emissiveMapUv:Te&&_(E.emissiveMap.channel),metalnessMapUv:Re&&_(E.metalnessMap.channel),roughnessMapUv:R&&_(E.roughnessMap.channel),anisotropyMapUv:me&&_(E.anisotropyMap.channel),clearcoatMapUv:Se&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:He&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(E.sheenRoughnessMap.channel),specularMapUv:Be&&_(E.specularMap.channel),specularColorMapUv:Xe&&_(E.specularColorMap.channel),specularIntensityMapUv:dt&&_(E.specularIntensityMap.channel),transmissionMapUv:I&&_(E.transmissionMap.channel),thicknessMapUv:ue&&_(E.thicknessMap.channel),alphaMapUv:te&&_(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Z||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(we||te),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ve,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:wt,decodeVideoTexture:we&&E.map.isVideoTexture===!0&&it.getTransfer(E.map.colorSpace)===lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Xn,flipSided:E.side===un,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:qe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&E.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ot.vertexUv1s=u.has(1),Ot.vertexUv2s=u.has(2),Ot.vertexUv3s=u.has(3),u.clear(),Ot}function f(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)y.push(P),y.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(m(y,E),v(y,E),y.push(t.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function m(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function v(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),E.push(a.mask)}function S(E){const y=x[E.type];let P;if(y){const O=ni[y];P=BS.clone(O.uniforms)}else P=E.uniforms;return P}function b(E,y){let P;for(let O=0,z=d.length;O<z;O++){const j=d[O];if(j.cacheKey===y){P=j,++P.usedTimes;break}}return P===void 0&&(P=new Qw(t,y,E,s),d.push(P)),P}function T(E){if(--E.usedTimes===0){const y=d.indexOf(E);d[y]=d[d.length-1],d.pop(),E.destroy()}}function A(E){l.remove(E)}function C(){l.dispose()}return{getParameters:c,getProgramCacheKey:f,getUniforms:S,acquireProgram:b,releaseProgram:T,releaseShaderCache:A,programs:d,dispose:C}}function iT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function rT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function bm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Pm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,h,g,x,_,c){let f=t[e];return f===void 0?(f={id:p.id,object:p,geometry:h,material:g,groupOrder:x,renderOrder:p.renderOrder,z:_,group:c},t[e]=f):(f.id=p.id,f.object=p,f.geometry=h,f.material=g,f.groupOrder=x,f.renderOrder=p.renderOrder,f.z=_,f.group=c),e++,f}function a(p,h,g,x,_,c){const f=o(p,h,g,x,_,c);g.transmission>0?i.push(f):g.transparent===!0?r.push(f):n.push(f)}function l(p,h,g,x,_,c){const f=o(p,h,g,x,_,c);g.transmission>0?i.unshift(f):g.transparent===!0?r.unshift(f):n.unshift(f)}function u(p,h){n.length>1&&n.sort(p||rT),i.length>1&&i.sort(h||bm),r.length>1&&r.sort(h||bm)}function d(){for(let p=e,h=t.length;p<h;p++){const g=t[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:u}}function sT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Pm,t.set(i,[o])):r>=s.length?(o=new Pm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function oT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new We};break;case"SpotLight":n={position:new H,direction:new H,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function aT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let lT=0;function cT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function uT(t){const e=new oT,n=aT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new H);const r=new H,s=new ut,o=new ut;function a(u){let d=0,p=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let g=0,x=0,_=0,c=0,f=0,m=0,v=0,S=0,b=0,T=0,A=0;u.sort(cT);for(let E=0,y=u.length;E<y;E++){const P=u[E],O=P.color,z=P.intensity,j=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=O.r*z,p+=O.g*z,h+=O.b*z;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],z);A++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,D=n.get(P);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,i.directionalShadow[g]=D,i.directionalShadowMap[g]=Y,i.directionalShadowMatrix[g]=P.shadow.matrix,m++}i.directional[g]=X,g++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(z),X.distance=j,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[_]=X;const q=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,q.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[_]=q.matrix,P.castShadow){const D=n.get(P);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,i.spotShadow[_]=D,i.spotShadowMap[_]=Y,S++}_++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(O).multiplyScalar(z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[c]=X,c++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const q=P.shadow,D=n.get(P);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,D.shadowCameraNear=q.camera.near,D.shadowCameraFar=q.camera.far,i.pointShadow[x]=D,i.pointShadowMap[x]=Y,i.pointShadowMatrix[x]=P.shadow.matrix,v++}i.point[x]=X,x++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(z),X.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[f]=X,f++}}c>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=h;const C=i.hash;(C.directionalLength!==g||C.pointLength!==x||C.spotLength!==_||C.rectAreaLength!==c||C.hemiLength!==f||C.numDirectionalShadows!==m||C.numPointShadows!==v||C.numSpotShadows!==S||C.numSpotMaps!==b||C.numLightProbes!==A)&&(i.directional.length=g,i.spot.length=_,i.rectArea.length=c,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,C.directionalLength=g,C.pointLength=x,C.spotLength=_,C.rectAreaLength=c,C.hemiLength=f,C.numDirectionalShadows=m,C.numPointShadows=v,C.numSpotShadows=S,C.numSpotMaps=b,C.numLightProbes=A,i.version=lT++)}function l(u,d){let p=0,h=0,g=0,x=0,_=0;const c=d.matrixWorldInverse;for(let f=0,m=u.length;f<m;f++){const v=u[f];if(v.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(c),p++}else if(v.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(c),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(c),g++}else if(v.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(c),o.identity(),s.copy(v.matrixWorld),s.premultiply(c),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(c),h++}else if(v.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(c),_++}}}return{setup:a,setupView:l,state:i}}function Lm(t){const e=new uT(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function fT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Lm(t),e.set(r,[a])):s>=o.length?(a=new Lm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class dT extends fa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hT extends fa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gT(t,e,n){let i=new hh;const r=new je,s=new je,o=new bt,a=new dT({depthPacking:fS}),l=new hT,u={},d=n.maxTextureSize,p={[or]:un,[un]:or,[Xn]:Xn},h=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:pT,fragmentShader:mT}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const x=new Li;x.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xn(x,h),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cv;let f=this.type;this.render=function(T,A,C){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||T.length===0)return;const E=t.getRenderTarget(),y=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),O=t.state;O.setBlending(tr),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=f!==gi&&this.type===gi,j=f===gi&&this.type!==gi;for(let Y=0,X=T.length;Y<X;Y++){const q=T[Y],D=q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const K=D.getFrameExtents();if(r.multiply(K),s.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/K.x),r.x=s.x*K.x,D.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/K.y),r.y=s.y*K.y,D.mapSize.y=s.y)),D.map===null||z===!0||j===!0){const ae=this.type!==gi?{minFilter:on,magFilter:on}:{};D.map!==null&&D.map.dispose(),D.map=new Or(r.x,r.y,ae),D.map.texture.name=q.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const J=D.getViewportCount();for(let ae=0;ae<J;ae++){const ve=D.getViewport(ae);o.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),O.viewport(o),D.updateMatrices(q,ae),i=D.getFrustum(),S(A,C,D.camera,q,this.type)}D.isPointLightShadow!==!0&&this.type===gi&&m(D,C),D.needsUpdate=!1}f=this.type,c.needsUpdate=!1,t.setRenderTarget(E,y,P)};function m(T,A){const C=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Or(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,C,h,_,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,C,g,_,null)}function v(T,A,C,E){let y=null;const P=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)y=P;else if(y=C.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=y.uuid,z=A.uuid;let j=u[O];j===void 0&&(j={},u[O]=j);let Y=j[z];Y===void 0&&(Y=y.clone(),j[z]=Y,A.addEventListener("dispose",b)),y=Y}if(y.visible=A.visible,y.wireframe=A.wireframe,E===gi?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:p[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=t.properties.get(y);O.light=C}return y}function S(T,A,C,E,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===gi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const z=e.update(T),j=T.material;if(Array.isArray(j)){const Y=z.groups;for(let X=0,q=Y.length;X<q;X++){const D=Y[X],K=j[D.materialIndex];if(K&&K.visible){const J=v(T,K,E,y);T.onBeforeShadow(t,T,A,C,z,J,D),t.renderBufferDirect(C,null,z,J,T,D),T.onAfterShadow(t,T,A,C,z,J,D)}}}else if(j.visible){const Y=v(T,j,E,y);T.onBeforeShadow(t,T,A,C,z,Y,null),t.renderBufferDirect(C,null,z,Y,T,null),T.onAfterShadow(t,T,A,C,z,Y,null)}}const O=T.children;for(let z=0,j=O.length;z<j;z++)S(O[z],A,C,E,y)}function b(T){T.target.removeEventListener("dispose",b);for(const C in u){const E=u[C],y=T.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function vT(t){function e(){let I=!1;const ue=new bt;let Q=null;const te=new bt(0,0,0,0);return{setMask:function(he){Q!==he&&!I&&(t.colorMask(he,he,he,he),Q=he)},setLocked:function(he){I=he},setClear:function(he,Fe,qe,wt,Ot){Ot===!0&&(he*=wt,Fe*=wt,qe*=wt),ue.set(he,Fe,qe,wt),te.equals(ue)===!1&&(t.clearColor(he,Fe,qe,wt),te.copy(ue))},reset:function(){I=!1,Q=null,te.set(-1,0,0,0)}}}function n(){let I=!1,ue=null,Q=null,te=null;return{setTest:function(he){he?$(t.DEPTH_TEST):ne(t.DEPTH_TEST)},setMask:function(he){ue!==he&&!I&&(t.depthMask(he),ue=he)},setFunc:function(he){if(Q!==he){switch(he){case Yy:t.depthFunc(t.NEVER);break;case $y:t.depthFunc(t.ALWAYS);break;case qy:t.depthFunc(t.LESS);break;case Xl:t.depthFunc(t.LEQUAL);break;case Ky:t.depthFunc(t.EQUAL);break;case Zy:t.depthFunc(t.GEQUAL);break;case Qy:t.depthFunc(t.GREATER);break;case Jy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=he}},setLocked:function(he){I=he},setClear:function(he){te!==he&&(t.clearDepth(he),te=he)},reset:function(){I=!1,ue=null,Q=null,te=null}}}function i(){let I=!1,ue=null,Q=null,te=null,he=null,Fe=null,qe=null,wt=null,Ot=null;return{setTest:function(Je){I||(Je?$(t.STENCIL_TEST):ne(t.STENCIL_TEST))},setMask:function(Je){ue!==Je&&!I&&(t.stencilMask(Je),ue=Je)},setFunc:function(Je,ui,Jn){(Q!==Je||te!==ui||he!==Jn)&&(t.stencilFunc(Je,ui,Jn),Q=Je,te=ui,he=Jn)},setOp:function(Je,ui,Jn){(Fe!==Je||qe!==ui||wt!==Jn)&&(t.stencilOp(Je,ui,Jn),Fe=Je,qe=ui,wt=Jn)},setLocked:function(Je){I=Je},setClear:function(Je){Ot!==Je&&(t.clearStencil(Je),Ot=Je)},reset:function(){I=!1,ue=null,Q=null,te=null,he=null,Fe=null,qe=null,wt=null,Ot=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},d={},p=new WeakMap,h=[],g=null,x=!1,_=null,c=null,f=null,m=null,v=null,S=null,b=null,T=new We(0,0,0),A=0,C=!1,E=null,y=null,P=null,O=null,z=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,X=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=X>=2);let D=null,K={};const J=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),ve=new bt().fromArray(J),ee=new bt().fromArray(ae);function k(I,ue,Q,te){const he=new Uint8Array(4),Fe=t.createTexture();t.bindTexture(I,Fe),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<Q;qe++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ue+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return Fe}const F={};F[t.TEXTURE_2D]=k(t.TEXTURE_2D,t.TEXTURE_2D,1),F[t.TEXTURE_CUBE_MAP]=k(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[t.TEXTURE_2D_ARRAY]=k(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),F[t.TEXTURE_3D]=k(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),$(t.DEPTH_TEST),s.setFunc(Xl),de(!1),Z(kp),$(t.CULL_FACE),Ze(tr);function $(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function ne(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function xe(I,ue){return d[I]!==ue?(t.bindFramebuffer(I,ue),d[I]=ue,I===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ue),I===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ce(I,ue){let Q=h,te=!1;if(I){Q=p.get(ue),Q===void 0&&(Q=[],p.set(ue,Q));const he=I.textures;if(Q.length!==he.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let Fe=0,qe=he.length;Fe<qe;Fe++)Q[Fe]=t.COLOR_ATTACHMENT0+Fe;Q.length=he.length,te=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,te=!0);te&&t.drawBuffers(Q)}function we(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const Ne={[Mr]:t.FUNC_ADD,[Py]:t.FUNC_SUBTRACT,[Ly]:t.FUNC_REVERSE_SUBTRACT};Ne[Dy]=t.MIN,Ne[Iy]=t.MAX;const L={[Uy]:t.ZERO,[Ny]:t.ONE,[Fy]:t.SRC_COLOR,[wf]:t.SRC_ALPHA,[Vy]:t.SRC_ALPHA_SATURATE,[By]:t.DST_COLOR,[ky]:t.DST_ALPHA,[Oy]:t.ONE_MINUS_SRC_COLOR,[Tf]:t.ONE_MINUS_SRC_ALPHA,[Hy]:t.ONE_MINUS_DST_COLOR,[zy]:t.ONE_MINUS_DST_ALPHA,[Gy]:t.CONSTANT_COLOR,[Wy]:t.ONE_MINUS_CONSTANT_COLOR,[Xy]:t.CONSTANT_ALPHA,[jy]:t.ONE_MINUS_CONSTANT_ALPHA};function Ze(I,ue,Q,te,he,Fe,qe,wt,Ot,Je){if(I===tr){x===!0&&(ne(t.BLEND),x=!1);return}if(x===!1&&($(t.BLEND),x=!0),I!==by){if(I!==_||Je!==C){if((c!==Mr||v!==Mr)&&(t.blendEquation(t.FUNC_ADD),c=Mr,v=Mr),Je)switch(I){case Ls:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wl:t.blendFunc(t.ONE,t.ONE);break;case zp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ls:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wl:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case zp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}f=null,m=null,S=null,b=null,T.set(0,0,0),A=0,_=I,C=Je}return}he=he||ue,Fe=Fe||Q,qe=qe||te,(ue!==c||he!==v)&&(t.blendEquationSeparate(Ne[ue],Ne[he]),c=ue,v=he),(Q!==f||te!==m||Fe!==S||qe!==b)&&(t.blendFuncSeparate(L[Q],L[te],L[Fe],L[qe]),f=Q,m=te,S=Fe,b=qe),(wt.equals(T)===!1||Ot!==A)&&(t.blendColor(wt.r,wt.g,wt.b,Ot),T.copy(wt),A=Ot),_=I,C=!1}function ie(I,ue){I.side===Xn?ne(t.CULL_FACE):$(t.CULL_FACE);let Q=I.side===un;ue&&(Q=!Q),de(Q),I.blending===Ls&&I.transparent===!1?Ze(tr):Ze(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const te=I.stencilWrite;o.setTest(te),te&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Te(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?$(t.SAMPLE_ALPHA_TO_COVERAGE):ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function de(I){E!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),E=I)}function Z(I){I!==Ay?($(t.CULL_FACE),I!==y&&(I===kp?t.cullFace(t.BACK):I===Cy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ne(t.CULL_FACE),y=I}function De(I){I!==P&&(Y&&t.lineWidth(I),P=I)}function Te(I,ue,Q){I?($(t.POLYGON_OFFSET_FILL),(O!==ue||z!==Q)&&(t.polygonOffset(ue,Q),O=ue,z=Q)):ne(t.POLYGON_OFFSET_FILL)}function Re(I){I?$(t.SCISSOR_TEST):ne(t.SCISSOR_TEST)}function R(I){I===void 0&&(I=t.TEXTURE0+j-1),D!==I&&(t.activeTexture(I),D=I)}function M(I,ue,Q){Q===void 0&&(D===null?Q=t.TEXTURE0+j-1:Q=D);let te=K[Q];te===void 0&&(te={type:void 0,texture:void 0},K[Q]=te),(te.type!==I||te.texture!==ue)&&(D!==Q&&(t.activeTexture(Q),D=Q),t.bindTexture(I,ue||F[I]),te.type=I,te.texture=ue)}function B(){const I=K[D];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $e(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(I){ve.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),ve.copy(I))}function Me(I){ee.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ee.copy(I))}function Be(I,ue){let Q=l.get(ue);Q===void 0&&(Q=new WeakMap,l.set(ue,Q));let te=Q.get(I);te===void 0&&(te=t.getUniformBlockIndex(ue,I.name),Q.set(I,te))}function Xe(I,ue){const te=l.get(ue).get(I);a.get(ue)!==te&&(t.uniformBlockBinding(ue,te,I.__bindingPointIndex),a.set(ue,te))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},D=null,K={},d={},p=new WeakMap,h=[],g=null,x=!1,_=null,c=null,f=null,m=null,v=null,S=null,b=null,T=new We(0,0,0),A=0,C=!1,E=null,y=null,P=null,O=null,z=null,ve.set(0,0,t.canvas.width,t.canvas.height),ee.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:$,disable:ne,bindFramebuffer:xe,drawBuffers:Ce,useProgram:we,setBlending:Ze,setMaterial:ie,setFlipSided:de,setCullFace:Z,setLineWidth:De,setPolygonOffset:Te,setScissorTest:Re,activeTexture:R,bindTexture:M,unbindTexture:B,compressedTexImage2D:se,compressedTexImage3D:le,texImage2D:ye,texImage3D:$e,updateUBOMapping:Be,uniformBlockBinding:Xe,texStorage2D:He,texStorage3D:ce,texSubImage2D:re,texSubImage3D:Ie,compressedTexSubImage2D:me,compressedTexSubImage3D:Se,scissor:ze,viewport:Me,reset:dt}}function Dm(t,e,n,i){const r=_T(i);switch(n){case pv:return t*e;case gv:return t*e;case vv:return t*e*2;case ah:return t*e/r.components*r.byteLength;case lh:return t*e/r.components*r.byteLength;case _v:return t*e*2/r.components*r.byteLength;case ch:return t*e*2/r.components*r.byteLength;case mv:return t*e*3/r.components*r.byteLength;case Yn:return t*e*4/r.components*r.byteLength;case uh:return t*e*4/r.components*r.byteLength;case pl:case ml:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gl:case vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lf:case If:return Math.max(t,16)*Math.max(e,8)/4;case Pf:case Df:return Math.max(t,8)*Math.max(e,8)/2;case Uf:case Nf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ff:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case zf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Vf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Xf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case jf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Yf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case $f:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case qf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Kf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case _l:case Zf:case Qf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case xv:case Jf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ed:case td:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _T(t){switch(t){case Ri:case fv:return{byteLength:1,components:1};case Zo:case dv:case aa:return{byteLength:2,components:1};case sh:case oh:return{byteLength:2,components:4};case Fr:case rh:case si:return{byteLength:4,components:1};case hv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function xT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new je,d=new WeakMap;let p;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,M){return g?new OffscreenCanvas(R,M):Kl("canvas")}function _(R,M,B){let se=1;const le=Re(R);if((le.width>B||le.height>B)&&(se=B/Math.max(le.width,le.height)),se<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const re=Math.floor(se*le.width),Ie=Math.floor(se*le.height);p===void 0&&(p=x(re,Ie));const me=M?x(re,Ie):p;return me.width=re,me.height=Ie,me.getContext("2d").drawImage(R,0,0,re,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+re+"x"+Ie+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),R;return R}function c(R){return R.generateMipmaps&&R.minFilter!==on&&R.minFilter!==jn}function f(R){t.generateMipmap(R)}function m(R,M,B,se,le=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=M;if(M===t.RED&&(B===t.FLOAT&&(re=t.R32F),B===t.HALF_FLOAT&&(re=t.R16F),B===t.UNSIGNED_BYTE&&(re=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(re=t.R8UI),B===t.UNSIGNED_SHORT&&(re=t.R16UI),B===t.UNSIGNED_INT&&(re=t.R32UI),B===t.BYTE&&(re=t.R8I),B===t.SHORT&&(re=t.R16I),B===t.INT&&(re=t.R32I)),M===t.RG&&(B===t.FLOAT&&(re=t.RG32F),B===t.HALF_FLOAT&&(re=t.RG16F),B===t.UNSIGNED_BYTE&&(re=t.RG8)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(re=t.RG8UI),B===t.UNSIGNED_SHORT&&(re=t.RG16UI),B===t.UNSIGNED_INT&&(re=t.RG32UI),B===t.BYTE&&(re=t.RG8I),B===t.SHORT&&(re=t.RG16I),B===t.INT&&(re=t.RG32I)),M===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(re=t.RGB9_E5),M===t.RGBA){const Ie=le?jl:it.getTransfer(se);B===t.FLOAT&&(re=t.RGBA32F),B===t.HALF_FLOAT&&(re=t.RGBA16F),B===t.UNSIGNED_BYTE&&(re=Ie===lt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function v(R,M){let B;return R?M===null||M===Fr||M===Ws?B=t.DEPTH24_STENCIL8:M===si?B=t.DEPTH32F_STENCIL8:M===Zo&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Fr||M===Ws?B=t.DEPTH_COMPONENT24:M===si?B=t.DEPTH_COMPONENT32F:M===Zo&&(B=t.DEPTH_COMPONENT16),B}function S(R,M){return c(R)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==jn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function b(R){const M=R.target;M.removeEventListener("dispose",b),A(M),M.isVideoTexture&&d.delete(M)}function T(R){const M=R.target;M.removeEventListener("dispose",T),E(M)}function A(R){const M=i.get(R);if(M.__webglInit===void 0)return;const B=R.source,se=h.get(B);if(se){const le=se[M.__cacheKey];le.usedTimes--,le.usedTimes===0&&C(R),Object.keys(se).length===0&&h.delete(B)}i.remove(R)}function C(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const B=R.source,se=h.get(B);delete se[M.__cacheKey],o.memory.textures--}function E(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let le=0;le<M.__webglFramebuffer[se].length;le++)t.deleteFramebuffer(M.__webglFramebuffer[se][le]);else t.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)t.deleteFramebuffer(M.__webglFramebuffer[se]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=R.textures;for(let se=0,le=B.length;se<le;se++){const re=i.get(B[se]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(B[se])}i.remove(R)}let y=0;function P(){y=0}function O(){const R=y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),y+=1,R}function z(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function j(R,M){const B=i.get(R);if(R.isVideoTexture&&De(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const se=R.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(B,R,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function Y(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){ee(B,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function X(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){ee(B,R,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function q(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){k(B,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const D={[Rf]:t.REPEAT,[Cr]:t.CLAMP_TO_EDGE,[bf]:t.MIRRORED_REPEAT},K={[on]:t.NEAREST,[cS]:t.NEAREST_MIPMAP_NEAREST,[La]:t.NEAREST_MIPMAP_LINEAR,[jn]:t.LINEAR,[Qc]:t.LINEAR_MIPMAP_NEAREST,[Rr]:t.LINEAR_MIPMAP_LINEAR},J={[hS]:t.NEVER,[xS]:t.ALWAYS,[pS]:t.LESS,[Sv]:t.LEQUAL,[mS]:t.EQUAL,[_S]:t.GEQUAL,[gS]:t.GREATER,[vS]:t.NOTEQUAL};function ae(R,M){if(M.type===si&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===jn||M.magFilter===Qc||M.magFilter===La||M.magFilter===Rr||M.minFilter===jn||M.minFilter===Qc||M.minFilter===La||M.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,D[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,D[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,D[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,K[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,K[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===on||M.minFilter!==La&&M.minFilter!==Rr||M.type===si&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ve(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b));const se=M.source;let le=h.get(se);le===void 0&&(le={},h.set(se,le));const re=z(M);if(re!==R.__cacheKey){le[re]===void 0&&(le[re]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),le[re].usedTimes++;const Ie=le[R.__cacheKey];Ie!==void 0&&(le[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&C(M)),R.__cacheKey=re,R.__webglTexture=le[re].texture}return B}function ee(R,M,B){let se=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=t.TEXTURE_3D);const le=ve(R,M),re=M.source;n.bindTexture(se,R.__webglTexture,t.TEXTURE0+B);const Ie=i.get(re);if(re.version!==Ie.__version||le===!0){n.activeTexture(t.TEXTURE0+B);const me=it.getPrimaries(it.workingColorSpace),Se=M.colorSpace===Wi?null:it.getPrimaries(M.colorSpace),He=M.colorSpace===Wi||me===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ce=_(M.image,!1,r.maxTextureSize);ce=Te(M,ce);const ye=s.convert(M.format,M.colorSpace),$e=s.convert(M.type);let ze=m(M.internalFormat,ye,$e,M.colorSpace,M.isVideoTexture);ae(se,M);let Me;const Be=M.mipmaps,Xe=M.isVideoTexture!==!0,dt=Ie.__version===void 0||le===!0,I=re.dataReady,ue=S(M,ce);if(M.isDepthTexture)ze=v(M.format===Xs,M.type),dt&&(Xe?n.texStorage2D(t.TEXTURE_2D,1,ze,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,ze,ce.width,ce.height,0,ye,$e,null));else if(M.isDataTexture)if(Be.length>0){Xe&&dt&&n.texStorage2D(t.TEXTURE_2D,ue,ze,Be[0].width,Be[0].height);for(let Q=0,te=Be.length;Q<te;Q++)Me=Be[Q],Xe?I&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Me.width,Me.height,ye,$e,Me.data):n.texImage2D(t.TEXTURE_2D,Q,ze,Me.width,Me.height,0,ye,$e,Me.data);M.generateMipmaps=!1}else Xe?(dt&&n.texStorage2D(t.TEXTURE_2D,ue,ze,ce.width,ce.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,ye,$e,ce.data)):n.texImage2D(t.TEXTURE_2D,0,ze,ce.width,ce.height,0,ye,$e,ce.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xe&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,ze,Be[0].width,Be[0].height,ce.depth);for(let Q=0,te=Be.length;Q<te;Q++)if(Me=Be[Q],M.format!==Yn)if(ye!==null)if(Xe){if(I)if(M.layerUpdates.size>0){const he=Dm(Me.width,Me.height,M.format,M.type);for(const Fe of M.layerUpdates){const qe=Me.data.subarray(Fe*he/Me.data.BYTES_PER_ELEMENT,(Fe+1)*he/Me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,Fe,Me.width,Me.height,1,ye,qe,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,Me.width,Me.height,ce.depth,ye,Me.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,ze,Me.width,Me.height,ce.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,Me.width,Me.height,ce.depth,ye,$e,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,ze,Me.width,Me.height,ce.depth,0,ye,$e,Me.data)}else{Xe&&dt&&n.texStorage2D(t.TEXTURE_2D,ue,ze,Be[0].width,Be[0].height);for(let Q=0,te=Be.length;Q<te;Q++)Me=Be[Q],M.format!==Yn?ye!==null?Xe?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,Me.width,Me.height,ye,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,ze,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?I&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Me.width,Me.height,ye,$e,Me.data):n.texImage2D(t.TEXTURE_2D,Q,ze,Me.width,Me.height,0,ye,$e,Me.data)}else if(M.isDataArrayTexture)if(Xe){if(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,ze,ce.width,ce.height,ce.depth),I)if(M.layerUpdates.size>0){const Q=Dm(ce.width,ce.height,M.format,M.type);for(const te of M.layerUpdates){const he=ce.data.subarray(te*Q/ce.data.BYTES_PER_ELEMENT,(te+1)*Q/ce.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,ce.width,ce.height,1,ye,$e,he)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ye,$e,ce.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ze,ce.width,ce.height,ce.depth,0,ye,$e,ce.data);else if(M.isData3DTexture)Xe?(dt&&n.texStorage3D(t.TEXTURE_3D,ue,ze,ce.width,ce.height,ce.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ye,$e,ce.data)):n.texImage3D(t.TEXTURE_3D,0,ze,ce.width,ce.height,ce.depth,0,ye,$e,ce.data);else if(M.isFramebufferTexture){if(dt)if(Xe)n.texStorage2D(t.TEXTURE_2D,ue,ze,ce.width,ce.height);else{let Q=ce.width,te=ce.height;for(let he=0;he<ue;he++)n.texImage2D(t.TEXTURE_2D,he,ze,Q,te,0,ye,$e,null),Q>>=1,te>>=1}}else if(Be.length>0){if(Xe&&dt){const Q=Re(Be[0]);n.texStorage2D(t.TEXTURE_2D,ue,ze,Q.width,Q.height)}for(let Q=0,te=Be.length;Q<te;Q++)Me=Be[Q],Xe?I&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ye,$e,Me):n.texImage2D(t.TEXTURE_2D,Q,ze,ye,$e,Me);M.generateMipmaps=!1}else if(Xe){if(dt){const Q=Re(ce);n.texStorage2D(t.TEXTURE_2D,ue,ze,Q.width,Q.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,$e,ce)}else n.texImage2D(t.TEXTURE_2D,0,ze,ye,$e,ce);c(M)&&f(se),Ie.__version=re.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function k(R,M,B){if(M.image.length!==6)return;const se=ve(R,M),le=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const re=i.get(le);if(le.version!==re.__version||se===!0){n.activeTexture(t.TEXTURE0+B);const Ie=it.getPrimaries(it.workingColorSpace),me=M.colorSpace===Wi?null:it.getPrimaries(M.colorSpace),Se=M.colorSpace===Wi||Ie===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const He=M.isCompressedTexture||M.image[0].isCompressedTexture,ce=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let te=0;te<6;te++)!He&&!ce?ye[te]=_(M.image[te],!0,r.maxCubemapSize):ye[te]=ce?M.image[te].image:M.image[te],ye[te]=Te(M,ye[te]);const $e=ye[0],ze=s.convert(M.format,M.colorSpace),Me=s.convert(M.type),Be=m(M.internalFormat,ze,Me,M.colorSpace),Xe=M.isVideoTexture!==!0,dt=re.__version===void 0||se===!0,I=le.dataReady;let ue=S(M,$e);ae(t.TEXTURE_CUBE_MAP,M);let Q;if(He){Xe&&dt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,Be,$e.width,$e.height);for(let te=0;te<6;te++){Q=ye[te].mipmaps;for(let he=0;he<Q.length;he++){const Fe=Q[he];M.format!==Yn?ze!==null?Xe?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,Fe.width,Fe.height,ze,Fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,Be,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,Fe.width,Fe.height,ze,Me,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,Be,Fe.width,Fe.height,0,ze,Me,Fe.data)}}}else{if(Q=M.mipmaps,Xe&&dt){Q.length>0&&ue++;const te=Re(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,Be,te.width,te.height)}for(let te=0;te<6;te++)if(ce){Xe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ye[te].width,ye[te].height,ze,Me,ye[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Be,ye[te].width,ye[te].height,0,ze,Me,ye[te].data);for(let he=0;he<Q.length;he++){const qe=Q[he].image[te].image;Xe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,qe.width,qe.height,ze,Me,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,Be,qe.width,qe.height,0,ze,Me,qe.data)}}else{Xe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ze,Me,ye[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Be,ze,Me,ye[te]);for(let he=0;he<Q.length;he++){const Fe=Q[he];Xe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,ze,Me,Fe.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,Be,ze,Me,Fe.image[te])}}}c(M)&&f(t.TEXTURE_CUBE_MAP),re.__version=le.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function F(R,M,B,se,le,re){const Ie=s.convert(B.format,B.colorSpace),me=s.convert(B.type),Se=m(B.internalFormat,Ie,me,B.colorSpace);if(!i.get(M).__hasExternalTextures){const ce=Math.max(1,M.width>>re),ye=Math.max(1,M.height>>re);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,re,Se,ce,ye,M.depth,0,Ie,me,null):n.texImage2D(le,re,Se,ce,ye,0,Ie,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Z(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,le,i.get(B).__webglTexture,0,de(M)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,le,i.get(B).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function $(R,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const se=M.depthTexture,le=se&&se.isDepthTexture?se.type:null,re=v(M.stencilBuffer,le),Ie=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=de(M);Z(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,re,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,re,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ie,t.RENDERBUFFER,R)}else{const se=M.textures;for(let le=0;le<se.length;le++){const re=se[le],Ie=s.convert(re.format,re.colorSpace),me=s.convert(re.type),Se=m(re.internalFormat,Ie,me,re.colorSpace),He=de(M);B&&Z(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,He,Se,M.width,M.height):Z(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He,Se,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Se,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ne(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const se=i.get(M.depthTexture).__webglTexture,le=de(M);if(M.depthTexture.format===Ds)Z(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(M.depthTexture.format===Xs)Z(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function xe(R){const M=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ne(M.__webglFramebuffer,R)}else if(B){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]=t.createRenderbuffer(),$(M.__webglDepthbuffer[se],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),$(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(R,M,B){const se=i.get(R);M!==void 0&&F(se.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&xe(R)}function we(R){const M=R.texture,B=i.get(R),se=i.get(M);R.addEventListener("dispose",T);const le=R.textures,re=R.isWebGLCubeRenderTarget===!0,Ie=le.length>1;if(Ie||(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=M.version,o.memory.textures++),re){B.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[me]=[];for(let Se=0;Se<M.mipmaps.length;Se++)B.__webglFramebuffer[me][Se]=t.createFramebuffer()}else B.__webglFramebuffer[me]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)B.__webglFramebuffer[me]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Ie)for(let me=0,Se=le.length;me<Se;me++){const He=i.get(le[me]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Z(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let me=0;me<le.length;me++){const Se=le[me];B.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[me]);const He=s.convert(Se.format,Se.colorSpace),ce=s.convert(Se.type),ye=m(Se.internalFormat,He,ce,Se.colorSpace,R.isXRRenderTarget===!0),$e=de(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,ye,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,B.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),$(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),ae(t.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)F(B.__webglFramebuffer[me][Se],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se);else F(B.__webglFramebuffer[me],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);c(M)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let me=0,Se=le.length;me<Se;me++){const He=le[me],ce=i.get(He);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),ae(t.TEXTURE_2D,He),F(B.__webglFramebuffer,R,He,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),c(He)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,se.__webglTexture),ae(me,M),M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)F(B.__webglFramebuffer[Se],R,M,t.COLOR_ATTACHMENT0,me,Se);else F(B.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,me,0);c(M)&&f(me),n.unbindTexture()}R.depthBuffer&&xe(R)}function Ne(R){const M=R.textures;for(let B=0,se=M.length;B<se;B++){const le=M[B];if(c(le)){const re=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ie=i.get(le).__webglTexture;n.bindTexture(re,Ie),f(re),n.unbindTexture()}}}const L=[],Ze=[];function ie(R){if(R.samples>0){if(Z(R)===!1){const M=R.textures,B=R.width,se=R.height;let le=t.COLOR_BUFFER_BIT;const re=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ie=i.get(R),me=M.length>1;if(me)for(let Se=0;Se<M.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Se=0;Se<M.length;Se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[Se]);const He=i.get(M[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,He,0)}t.blitFramebuffer(0,0,B,se,0,0,B,se,le,t.NEAREST),l===!0&&(L.length=0,Ze.length=0,L.push(t.COLOR_ATTACHMENT0+Se),R.depthBuffer&&R.resolveDepthBuffer===!1&&(L.push(re),Ze.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ze)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let Se=0;Se<M.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[Se]);const He=i.get(M[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function de(R){return Math.min(r.maxSamples,R.samples)}function Z(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function De(R){const M=o.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function Te(R,M){const B=R.colorSpace,se=R.format,le=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==ur&&B!==Wi&&(it.getTransfer(B)===lt?(se!==Yn||le!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Re(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=P,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=q,this.rebindTextures=Ce,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=F,this.useMultisampledRTT=Z}function yT(t,e){function n(i,r=Wi){let s;const o=it.getTransfer(r);if(i===Ri)return t.UNSIGNED_BYTE;if(i===sh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===oh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===hv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===fv)return t.BYTE;if(i===dv)return t.SHORT;if(i===Zo)return t.UNSIGNED_SHORT;if(i===rh)return t.INT;if(i===Fr)return t.UNSIGNED_INT;if(i===si)return t.FLOAT;if(i===aa)return t.HALF_FLOAT;if(i===pv)return t.ALPHA;if(i===mv)return t.RGB;if(i===Yn)return t.RGBA;if(i===gv)return t.LUMINANCE;if(i===vv)return t.LUMINANCE_ALPHA;if(i===Ds)return t.DEPTH_COMPONENT;if(i===Xs)return t.DEPTH_STENCIL;if(i===ah)return t.RED;if(i===lh)return t.RED_INTEGER;if(i===_v)return t.RG;if(i===ch)return t.RG_INTEGER;if(i===uh)return t.RGBA_INTEGER;if(i===pl||i===ml||i===gl||i===vl)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pf||i===Lf||i===Df||i===If)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Pf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Df)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===If)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Uf||i===Nf||i===Ff)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Uf||i===Nf)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ff)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Of||i===kf||i===zf||i===Bf||i===Hf||i===Vf||i===Gf||i===Wf||i===Xf||i===jf||i===Yf||i===$f||i===qf||i===Kf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Of)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$f)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_l||i===Zf||i===Qf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===_l)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xv||i===Jf||i===ed||i===td)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_l)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Jf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ed)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===td)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class ST extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ja extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MT={type:"move"};class Tu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ja,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ja,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ja,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const c=n.getJointPose(_,i),f=this._getHandJoint(u,_);c!==null&&(f.matrix.fromArray(c.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=c.radius),f.visible=c!==null}const d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],h=d.position.distanceTo(p.position),g=.02,x=.005;u.inputState.pinching&&h>g+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=g-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(MT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ja;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ET=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class TT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Qt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new bi({vertexShader:ET,fragmentShader:wT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xn(new kr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AT extends Ks{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,d=null,p=null,h=null,g=null,x=null;const _=new TT,c=n.getContextAttributes();let f=null,m=null;const v=[],S=[],b=new je;let T=null;const A=new bn;A.layers.enable(1),A.viewport=new bt;const C=new bn;C.layers.enable(2),C.viewport=new bt;const E=[A,C],y=new ST;y.layers.enable(1),y.layers.enable(2);let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let F=v[k];return F===void 0&&(F=new Tu,v[k]=F),F.getTargetRaySpace()},this.getControllerGrip=function(k){let F=v[k];return F===void 0&&(F=new Tu,v[k]=F),F.getGripSpace()},this.getHand=function(k){let F=v[k];return F===void 0&&(F=new Tu,v[k]=F),F.getHandSpace()};function z(k){const F=S.indexOf(k.inputSource);if(F===-1)return;const $=v[F];$!==void 0&&($.update(k.inputSource,k.frame,u||o),$.dispatchEvent({type:k.type,data:k.inputSource}))}function j(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",Y);for(let k=0;k<v.length;k++){const F=S[k];F!==null&&(S[k]=null,v[k].disconnect(F))}P=null,O=null,_.reset(),e.setRenderTarget(f),g=null,h=null,p=null,r=null,m=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(k){u=k},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",j),r.addEventListener("inputsourceschange",Y),c.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const F={antialias:c.antialias,alpha:!0,depth:c.depth,stencil:c.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,F),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),m=new Or(g.framebufferWidth,g.framebufferHeight,{format:Yn,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:c.stencil})}else{let F=null,$=null,ne=null;c.depth&&(ne=c.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,F=c.stencil?Xs:Ds,$=c.stencil?Ws:Fr);const xe={colorFormat:n.RGBA8,depthFormat:ne,scaleFactor:s};p=new XRWebGLBinding(r,n),h=p.createProjectionLayer(xe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),m=new Or(h.textureWidth,h.textureHeight,{format:Yn,type:Ri,depthTexture:new Nv(h.textureWidth,h.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:c.stencil,colorSpace:e.outputColorSpace,samples:c.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(k){for(let F=0;F<k.removed.length;F++){const $=k.removed[F],ne=S.indexOf($);ne>=0&&(S[ne]=null,v[ne].disconnect($))}for(let F=0;F<k.added.length;F++){const $=k.added[F];let ne=S.indexOf($);if(ne===-1){for(let Ce=0;Ce<v.length;Ce++)if(Ce>=S.length){S.push($),ne=Ce;break}else if(S[Ce]===null){S[Ce]=$,ne=Ce;break}if(ne===-1)break}const xe=v[ne];xe&&xe.connect($)}}const X=new H,q=new H;function D(k,F,$){X.setFromMatrixPosition(F.matrixWorld),q.setFromMatrixPosition($.matrixWorld);const ne=X.distanceTo(q),xe=F.projectionMatrix.elements,Ce=$.projectionMatrix.elements,we=xe[14]/(xe[10]-1),Ne=xe[14]/(xe[10]+1),L=(xe[9]+1)/xe[5],Ze=(xe[9]-1)/xe[5],ie=(xe[8]-1)/xe[0],de=(Ce[8]+1)/Ce[0],Z=we*ie,De=we*de,Te=ne/(-ie+de),Re=Te*-ie;F.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Re),k.translateZ(Te),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const R=we+Te,M=Ne+Te,B=Z-Re,se=De+(ne-Re),le=L*Ne/M*R,re=Ze*Ne/M*R;k.projectionMatrix.makePerspective(B,se,le,re,R,M),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function K(k,F){F===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(F.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;_.texture!==null&&(k.near=_.depthNear,k.far=_.depthFar),y.near=C.near=A.near=k.near,y.far=C.far=A.far=k.far,(P!==y.near||O!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,O=y.far,A.near=P,A.far=O,C.near=P,C.far=O,A.updateProjectionMatrix(),C.updateProjectionMatrix(),k.updateProjectionMatrix());const F=k.parent,$=y.cameras;K(y,F);for(let ne=0;ne<$.length;ne++)K($[ne],F);$.length===2?D(y,A,C):y.projectionMatrix.copy(A.projectionMatrix),J(k,y,F)};function J(k,F,$){$===null?k.matrix.copy(F.matrixWorld):(k.matrix.copy($.matrixWorld),k.matrix.invert(),k.matrix.multiply(F.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(F.projectionMatrix),k.projectionMatrixInverse.copy(F.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=nd*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=k)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ae=null;function ve(k,F){if(d=F.getViewerPose(u||o),x=F,d!==null){const $=d.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let ne=!1;$.length!==y.cameras.length&&(y.cameras.length=0,ne=!0);for(let Ce=0;Ce<$.length;Ce++){const we=$[Ce];let Ne=null;if(g!==null)Ne=g.getViewport(we);else{const Ze=p.getViewSubImage(h,we);Ne=Ze.viewport,Ce===0&&(e.setRenderTargetTextures(m,Ze.colorTexture,h.ignoreDepthValues?void 0:Ze.depthStencilTexture),e.setRenderTarget(m))}let L=E[Ce];L===void 0&&(L=new bn,L.layers.enable(Ce),L.viewport=new bt,E[Ce]=L),L.matrix.fromArray(we.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(we.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Ce===0&&(y.matrix.copy(L.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ne===!0&&y.cameras.push(L)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")){const Ce=p.getDepthInformation($[0]);Ce&&Ce.isValid&&Ce.texture&&_.init(e,Ce,r.renderState)}}for(let $=0;$<v.length;$++){const ne=S[$],xe=v[$];ne!==null&&xe!==void 0&&xe.update(ne,F,u||o)}ae&&ae(k,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),x=null}const ee=new Iv;ee.setAnimationLoop(ve),this.setAnimationLoop=function(k){ae=k},this.dispose=function(){}}}const vr=new ci,CT=new ut;function RT(t,e){function n(c,f){c.matrixAutoUpdate===!0&&c.updateMatrix(),f.value.copy(c.matrix)}function i(c,f){f.color.getRGB(c.fogColor.value,Pv(t)),f.isFog?(c.fogNear.value=f.near,c.fogFar.value=f.far):f.isFogExp2&&(c.fogDensity.value=f.density)}function r(c,f,m,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(c,f):f.isMeshToonMaterial?(s(c,f),p(c,f)):f.isMeshPhongMaterial?(s(c,f),d(c,f)):f.isMeshStandardMaterial?(s(c,f),h(c,f),f.isMeshPhysicalMaterial&&g(c,f,S)):f.isMeshMatcapMaterial?(s(c,f),x(c,f)):f.isMeshDepthMaterial?s(c,f):f.isMeshDistanceMaterial?(s(c,f),_(c,f)):f.isMeshNormalMaterial?s(c,f):f.isLineBasicMaterial?(o(c,f),f.isLineDashedMaterial&&a(c,f)):f.isPointsMaterial?l(c,f,m,v):f.isSpriteMaterial?u(c,f):f.isShadowMaterial?(c.color.value.copy(f.color),c.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(c,f){c.opacity.value=f.opacity,f.color&&c.diffuse.value.copy(f.color),f.emissive&&c.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(c.map.value=f.map,n(f.map,c.mapTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,n(f.alphaMap,c.alphaMapTransform)),f.bumpMap&&(c.bumpMap.value=f.bumpMap,n(f.bumpMap,c.bumpMapTransform),c.bumpScale.value=f.bumpScale,f.side===un&&(c.bumpScale.value*=-1)),f.normalMap&&(c.normalMap.value=f.normalMap,n(f.normalMap,c.normalMapTransform),c.normalScale.value.copy(f.normalScale),f.side===un&&c.normalScale.value.negate()),f.displacementMap&&(c.displacementMap.value=f.displacementMap,n(f.displacementMap,c.displacementMapTransform),c.displacementScale.value=f.displacementScale,c.displacementBias.value=f.displacementBias),f.emissiveMap&&(c.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,c.emissiveMapTransform)),f.specularMap&&(c.specularMap.value=f.specularMap,n(f.specularMap,c.specularMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest);const m=e.get(f),v=m.envMap,S=m.envMapRotation;v&&(c.envMap.value=v,vr.copy(S),vr.x*=-1,vr.y*=-1,vr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),c.envMapRotation.value.setFromMatrix4(CT.makeRotationFromEuler(vr)),c.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=f.reflectivity,c.ior.value=f.ior,c.refractionRatio.value=f.refractionRatio),f.lightMap&&(c.lightMap.value=f.lightMap,c.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,c.lightMapTransform)),f.aoMap&&(c.aoMap.value=f.aoMap,c.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,c.aoMapTransform))}function o(c,f){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,f.map&&(c.map.value=f.map,n(f.map,c.mapTransform))}function a(c,f){c.dashSize.value=f.dashSize,c.totalSize.value=f.dashSize+f.gapSize,c.scale.value=f.scale}function l(c,f,m,v){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,c.size.value=f.size*m,c.scale.value=v*.5,f.map&&(c.map.value=f.map,n(f.map,c.uvTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,n(f.alphaMap,c.alphaMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest)}function u(c,f){c.diffuse.value.copy(f.color),c.opacity.value=f.opacity,c.rotation.value=f.rotation,f.map&&(c.map.value=f.map,n(f.map,c.mapTransform)),f.alphaMap&&(c.alphaMap.value=f.alphaMap,n(f.alphaMap,c.alphaMapTransform)),f.alphaTest>0&&(c.alphaTest.value=f.alphaTest)}function d(c,f){c.specular.value.copy(f.specular),c.shininess.value=Math.max(f.shininess,1e-4)}function p(c,f){f.gradientMap&&(c.gradientMap.value=f.gradientMap)}function h(c,f){c.metalness.value=f.metalness,f.metalnessMap&&(c.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,c.metalnessMapTransform)),c.roughness.value=f.roughness,f.roughnessMap&&(c.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,c.roughnessMapTransform)),f.envMap&&(c.envMapIntensity.value=f.envMapIntensity)}function g(c,f,m){c.ior.value=f.ior,f.sheen>0&&(c.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),c.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(c.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,c.sheenColorMapTransform)),f.sheenRoughnessMap&&(c.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,c.sheenRoughnessMapTransform))),f.clearcoat>0&&(c.clearcoat.value=f.clearcoat,c.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(c.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,c.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(c.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&c.clearcoatNormalScale.value.negate())),f.dispersion>0&&(c.dispersion.value=f.dispersion),f.iridescence>0&&(c.iridescence.value=f.iridescence,c.iridescenceIOR.value=f.iridescenceIOR,c.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(c.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,c.iridescenceMapTransform)),f.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),f.transmission>0&&(c.transmission.value=f.transmission,c.transmissionSamplerMap.value=m.texture,c.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(c.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,c.transmissionMapTransform)),c.thickness.value=f.thickness,f.thicknessMap&&(c.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=f.attenuationDistance,c.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(c.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(c.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=f.specularIntensity,c.specularColor.value.copy(f.specularColor),f.specularColorMap&&(c.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,c.specularColorMapTransform)),f.specularIntensityMap&&(c.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,c.specularIntensityMapTransform))}function x(c,f){f.matcap&&(c.matcap.value=f.matcap)}function _(c,f){const m=e.get(f).light;c.referencePosition.value.setFromMatrixPosition(m.matrixWorld),c.nearDistance.value=m.shadow.camera.near,c.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,v){const S=v.program;i.uniformBlockBinding(m,S)}function u(m,v){let S=r[m.id];S===void 0&&(x(m),S=d(m),r[m.id]=S,m.addEventListener("dispose",c));const b=v.program;i.updateUBOMapping(m,b);const T=e.render.frame;s[m.id]!==T&&(h(m),s[m.id]=T)}function d(m){const v=p();m.__bindingPointIndex=v;const S=t.createBuffer(),b=m.__size,T=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function p(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const v=r[m.id],S=m.uniforms,b=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,A=S.length;T<A;T++){const C=Array.isArray(S[T])?S[T]:[S[T]];for(let E=0,y=C.length;E<y;E++){const P=C[E];if(g(P,T,E,b)===!0){const O=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let j=0;for(let Y=0;Y<z.length;Y++){const X=z[Y],q=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,O+j,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,j),j+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(m,v,S,b){const T=m.value,A=v+"_"+S;if(b[A]===void 0)return typeof T=="number"||typeof T=="boolean"?b[A]=T:b[A]=T.clone(),!0;{const C=b[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return b[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function x(m){const v=m.uniforms;let S=0;const b=16;for(let A=0,C=v.length;A<C;A++){const E=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,P=E.length;y<P;y++){const O=E[y],z=Array.isArray(O.value)?O.value:[O.value];for(let j=0,Y=z.length;j<Y;j++){const X=z[j],q=_(X),D=S%b;D!==0&&b-D<q.boundary&&(S+=b-D),O.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=q.storage}}}const T=S%b;return T>0&&(S+=b-T),m.__size=S,m.__cache={},this}function _(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function c(m){const v=m.target;v.removeEventListener("dispose",c);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class PT{constructor(e={}){const{canvas:n=SS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),x=new Int32Array(4);let _=null,c=null;const f=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vn,this.toneMapping=nr,this.toneMappingExposure=1;const v=this;let S=!1,b=0,T=0,A=null,C=-1,E=null;const y=new bt,P=new bt;let O=null;const z=new We(0);let j=0,Y=n.width,X=n.height,q=1,D=null,K=null;const J=new bt(0,0,Y,X),ae=new bt(0,0,Y,X);let ve=!1;const ee=new hh;let k=!1,F=!1;const $=new ut,ne=new H,xe=new bt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function Ne(){return A===null?q:1}let L=i;function Ze(w,U){return n.getContext(w,U)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nh}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",te,!1),n.addEventListener("webglcontextcreationerror",he,!1),L===null){const U="webgl2";if(L=Ze(U,w),L===null)throw Ze(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ie,de,Z,De,Te,Re,R,M,B,se,le,re,Ie,me,Se,He,ce,ye,$e,ze,Me,Be,Xe,dt;function I(){ie=new OE(L),ie.init(),Be=new yT(L,ie),de=new LE(L,ie,e,Be),Z=new vT(L),De=new BE(L),Te=new iT,Re=new xT(L,ie,Z,Te,de,Be,De),R=new IE(v),M=new FE(v),B=new YS(L),Xe=new bE(L,B),se=new kE(L,B,De,Xe),le=new VE(L,se,B,De),$e=new HE(L,de,Re),He=new DE(Te),re=new nT(v,R,M,ie,de,Xe,He),Ie=new RT(v,Te),me=new sT,Se=new fT(ie),ye=new RE(v,R,M,Z,le,h,l),ce=new gT(v,le,de),dt=new bT(L,De,de,Z),ze=new PE(L,ie,De),Me=new zE(L,ie,De),De.programs=re.programs,v.capabilities=de,v.extensions=ie,v.properties=Te,v.renderLists=me,v.shadowMap=ce,v.state=Z,v.info=De}I();const ue=new AT(v,L);this.xr=ue,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=ie.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ie.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(Y,X,!1))},this.getSize=function(w){return w.set(Y,X)},this.setSize=function(w,U,V=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,X=U,n.width=Math.floor(w*q),n.height=Math.floor(U*q),V===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(Y*q,X*q).floor()},this.setDrawingBufferSize=function(w,U,V){Y=w,X=U,q=V,n.width=Math.floor(w*V),n.height=Math.floor(U*V),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,U,V,G){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,U,V,G),Z.viewport(y.copy(J).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(ae)},this.setScissor=function(w,U,V,G){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,U,V,G),Z.scissor(P.copy(ae).multiplyScalar(q).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(w){Z.setScissorTest(ve=w)},this.setOpaqueSort=function(w){D=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(w=!0,U=!0,V=!0){let G=0;if(w){let N=!1;if(A!==null){const fe=A.texture.format;N=fe===uh||fe===ch||fe===lh}if(N){const fe=A.texture.type,ge=fe===Ri||fe===Fr||fe===Zo||fe===Ws||fe===sh||fe===oh,Ee=ye.getClearColor(),Ae=ye.getClearAlpha(),Oe=Ee.r,ke=Ee.g,Ue=Ee.b;ge?(g[0]=Oe,g[1]=ke,g[2]=Ue,g[3]=Ae,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=Oe,x[1]=ke,x[2]=Ue,x[3]=Ae,L.clearBufferiv(L.COLOR,0,x))}else G|=L.COLOR_BUFFER_BIT}U&&(G|=L.DEPTH_BUFFER_BIT),V&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",te,!1),n.removeEventListener("webglcontextcreationerror",he,!1),me.dispose(),Se.dispose(),Te.dispose(),R.dispose(),M.dispose(),le.dispose(),Xe.dispose(),dt.dispose(),re.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Jn),ue.removeEventListener("sessionend",Mh),fr.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=De.autoReset,U=ce.enabled,V=ce.autoUpdate,G=ce.needsUpdate,N=ce.type;I(),De.autoReset=w,ce.enabled=U,ce.autoUpdate=V,ce.needsUpdate=G,ce.type=N}function he(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Fe(w){const U=w.target;U.removeEventListener("dispose",Fe),qe(U)}function qe(w){wt(w),Te.remove(w)}function wt(w){const U=Te.get(w).programs;U!==void 0&&(U.forEach(function(V){re.releaseProgram(V)}),w.isShaderMaterial&&re.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,V,G,N,fe){U===null&&(U=Ce);const ge=N.isMesh&&N.matrixWorld.determinant()<0,Ee=Kv(w,U,V,G,N);Z.setMaterial(G,ge);let Ae=V.index,Oe=1;if(G.wireframe===!0){if(Ae=se.getWireframeAttribute(V),Ae===void 0)return;Oe=2}const ke=V.drawRange,Ue=V.attributes.position;let et=ke.start*Oe,xt=(ke.start+ke.count)*Oe;fe!==null&&(et=Math.max(et,fe.start*Oe),xt=Math.min(xt,(fe.start+fe.count)*Oe)),Ae!==null?(et=Math.max(et,0),xt=Math.min(xt,Ae.count)):Ue!=null&&(et=Math.max(et,0),xt=Math.min(xt,Ue.count));const yt=xt-et;if(yt<0||yt===1/0)return;Xe.setup(N,G,Ee,V,Ae);let fn,tt=ze;if(Ae!==null&&(fn=B.get(Ae),tt=Me,tt.setIndex(fn)),N.isMesh)G.wireframe===!0?(Z.setLineWidth(G.wireframeLinewidth*Ne()),tt.setMode(L.LINES)):tt.setMode(L.TRIANGLES);else if(N.isLine){let Pe=G.linewidth;Pe===void 0&&(Pe=1),Z.setLineWidth(Pe*Ne()),N.isLineSegments?tt.setMode(L.LINES):N.isLineLoop?tt.setMode(L.LINE_LOOP):tt.setMode(L.LINE_STRIP)}else N.isPoints?tt.setMode(L.POINTS):N.isSprite&&tt.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)tt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))tt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Pe=N._multiDrawStarts,kt=N._multiDrawCounts,nt=N._multiDrawCount,Nn=Ae?B.get(Ae).bytesPerElement:1,Vr=Te.get(G).currentProgram.getUniforms();for(let dn=0;dn<nt;dn++)Vr.setValue(L,"_gl_DrawID",dn),tt.render(Pe[dn]/Nn,kt[dn])}else if(N.isInstancedMesh)tt.renderInstances(et,yt,N.count);else if(V.isInstancedBufferGeometry){const Pe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,kt=Math.min(V.instanceCount,Pe);tt.renderInstances(et,yt,kt)}else tt.render(et,yt)};function Ot(w,U,V){w.transparent===!0&&w.side===Xn&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,ha(w,U,V),w.side=or,w.needsUpdate=!0,ha(w,U,V),w.side=Xn):ha(w,U,V)}this.compile=function(w,U,V=null){V===null&&(V=w),c=Se.get(V),c.init(U),m.push(c),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(c.pushLight(N),N.castShadow&&c.pushShadow(N))}),w!==V&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(c.pushLight(N),N.castShadow&&c.pushShadow(N))}),c.setupLights();const G=new Set;return w.traverse(function(N){const fe=N.material;if(fe)if(Array.isArray(fe))for(let ge=0;ge<fe.length;ge++){const Ee=fe[ge];Ot(Ee,V,N),G.add(Ee)}else Ot(fe,V,N),G.add(fe)}),m.pop(),c=null,G},this.compileAsync=function(w,U,V=null){const G=this.compile(w,U,V);return new Promise(N=>{function fe(){if(G.forEach(function(ge){Te.get(ge).currentProgram.isReady()&&G.delete(ge)}),G.size===0){N(w);return}setTimeout(fe,10)}ie.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Je=null;function ui(w){Je&&Je(w)}function Jn(){fr.stop()}function Mh(){fr.start()}const fr=new Iv;fr.setAnimationLoop(ui),typeof self<"u"&&fr.setContext(self),this.setAnimationLoop=function(w){Je=w,ue.setAnimationLoop(w),w===null?fr.stop():fr.start()},ue.addEventListener("sessionstart",Jn),ue.addEventListener("sessionend",Mh),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(U),U=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,A),c=Se.get(w,m.length),c.init(U),m.push(c),$.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix($),F=this.localClippingEnabled,k=He.init(this.clippingPlanes,F),_=me.get(w,f.length),_.init(),f.push(_),ue.enabled===!0&&ue.isPresenting===!0){const fe=v.xr.getDepthSensingMesh();fe!==null&&Mc(fe,U,-1/0,v.sortObjects)}Mc(w,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(D,K),we=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,we&&ye.addToRenderList(_,w),this.info.render.frame++,k===!0&&He.beginShadows();const V=c.state.shadowsArray;ce.render(V,w,U),k===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,N=_.transmissive;if(c.setupLights(),U.isArrayCamera){const fe=U.cameras;if(N.length>0)for(let ge=0,Ee=fe.length;ge<Ee;ge++){const Ae=fe[ge];wh(G,N,w,Ae)}we&&ye.render(w);for(let ge=0,Ee=fe.length;ge<Ee;ge++){const Ae=fe[ge];Eh(_,w,Ae,Ae.viewport)}}else N.length>0&&wh(G,N,w,U),we&&ye.render(w),Eh(_,w,U);A!==null&&(Re.updateMultisampleRenderTarget(A),Re.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,U),Xe.resetDefaultState(),C=-1,E=null,m.pop(),m.length>0?(c=m[m.length-1],k===!0&&He.setGlobalState(v.clippingPlanes,c.state.camera)):c=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Mc(w,U,V,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)c.pushLight(w),w.castShadow&&c.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ee.intersectsSprite(w)){G&&xe.setFromMatrixPosition(w.matrixWorld).applyMatrix4($);const ge=le.update(w),Ee=w.material;Ee.visible&&_.push(w,ge,Ee,V,xe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ee.intersectsObject(w))){const ge=le.update(w),Ee=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),xe.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),xe.copy(ge.boundingSphere.center)),xe.applyMatrix4(w.matrixWorld).applyMatrix4($)),Array.isArray(Ee)){const Ae=ge.groups;for(let Oe=0,ke=Ae.length;Oe<ke;Oe++){const Ue=Ae[Oe],et=Ee[Ue.materialIndex];et&&et.visible&&_.push(w,ge,et,V,xe.z,Ue)}}else Ee.visible&&_.push(w,ge,Ee,V,xe.z,null)}}const fe=w.children;for(let ge=0,Ee=fe.length;ge<Ee;ge++)Mc(fe[ge],U,V,G)}function Eh(w,U,V,G){const N=w.opaque,fe=w.transmissive,ge=w.transparent;c.setupLightsView(V),k===!0&&He.setGlobalState(v.clippingPlanes,V),G&&Z.viewport(y.copy(G)),N.length>0&&da(N,U,V),fe.length>0&&da(fe,U,V),ge.length>0&&da(ge,U,V),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function wh(w,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[G.id]===void 0&&(c.state.transmissionRenderTarget[G.id]=new Or(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?aa:Ri,minFilter:Rr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const fe=c.state.transmissionRenderTarget[G.id],ge=G.viewport||y;fe.setSize(ge.z,ge.w);const Ee=v.getRenderTarget();v.setRenderTarget(fe),v.getClearColor(z),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),we?ye.render(V):v.clear();const Ae=v.toneMapping;v.toneMapping=nr;const Oe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),c.setupLightsView(G),k===!0&&He.setGlobalState(v.clippingPlanes,G),da(w,V,G),Re.updateMultisampleRenderTarget(fe),Re.updateRenderTargetMipmap(fe),ie.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ue=0,et=U.length;Ue<et;Ue++){const xt=U[Ue],yt=xt.object,fn=xt.geometry,tt=xt.material,Pe=xt.group;if(tt.side===Xn&&yt.layers.test(G.layers)){const kt=tt.side;tt.side=un,tt.needsUpdate=!0,Th(yt,V,G,fn,tt,Pe),tt.side=kt,tt.needsUpdate=!0,ke=!0}}ke===!0&&(Re.updateMultisampleRenderTarget(fe),Re.updateRenderTargetMipmap(fe))}v.setRenderTarget(Ee),v.setClearColor(z,j),Oe!==void 0&&(G.viewport=Oe),v.toneMapping=Ae}function da(w,U,V){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,fe=w.length;N<fe;N++){const ge=w[N],Ee=ge.object,Ae=ge.geometry,Oe=G===null?ge.material:G,ke=ge.group;Ee.layers.test(V.layers)&&Th(Ee,U,V,Ae,Oe,ke)}}function Th(w,U,V,G,N,fe){w.onBeforeRender(v,U,V,G,N,fe),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.transparent===!0&&N.side===Xn&&N.forceSinglePass===!1?(N.side=un,N.needsUpdate=!0,v.renderBufferDirect(V,U,G,N,w,fe),N.side=or,N.needsUpdate=!0,v.renderBufferDirect(V,U,G,N,w,fe),N.side=Xn):v.renderBufferDirect(V,U,G,N,w,fe),w.onAfterRender(v,U,V,G,N,fe)}function ha(w,U,V){U.isScene!==!0&&(U=Ce);const G=Te.get(w),N=c.state.lights,fe=c.state.shadowsArray,ge=N.state.version,Ee=re.getParameters(w,N.state,fe,U,V),Ae=re.getProgramCacheKey(Ee);let Oe=G.programs;G.environment=w.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(w.isMeshStandardMaterial?M:R).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",Fe),Oe=new Map,G.programs=Oe);let ke=Oe.get(Ae);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===ge)return Ch(w,Ee),ke}else Ee.uniforms=re.getUniforms(w),w.onBeforeCompile(Ee,v),ke=re.acquireProgram(Ee,Ae),Oe.set(Ae,ke),G.uniforms=Ee.uniforms;const Ue=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=He.uniform),Ch(w,Ee),G.needsLights=Qv(w),G.lightsStateVersion=ge,G.needsLights&&(Ue.ambientLightColor.value=N.state.ambient,Ue.lightProbe.value=N.state.probe,Ue.directionalLights.value=N.state.directional,Ue.directionalLightShadows.value=N.state.directionalShadow,Ue.spotLights.value=N.state.spot,Ue.spotLightShadows.value=N.state.spotShadow,Ue.rectAreaLights.value=N.state.rectArea,Ue.ltc_1.value=N.state.rectAreaLTC1,Ue.ltc_2.value=N.state.rectAreaLTC2,Ue.pointLights.value=N.state.point,Ue.pointLightShadows.value=N.state.pointShadow,Ue.hemisphereLights.value=N.state.hemi,Ue.directionalShadowMap.value=N.state.directionalShadowMap,Ue.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ue.spotShadowMap.value=N.state.spotShadowMap,Ue.spotLightMatrix.value=N.state.spotLightMatrix,Ue.spotLightMap.value=N.state.spotLightMap,Ue.pointShadowMap.value=N.state.pointShadowMap,Ue.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=ke,G.uniformsList=null,ke}function Ah(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=xl.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Ch(w,U){const V=Te.get(w);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Kv(w,U,V,G,N){U.isScene!==!0&&(U=Ce),Re.resetTextureUnits();const fe=U.fog,ge=G.isMeshStandardMaterial?U.environment:null,Ee=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ur,Ae=(G.isMeshStandardMaterial?M:R).get(G.envMap||ge),Oe=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ke=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ue=!!V.morphAttributes.position,et=!!V.morphAttributes.normal,xt=!!V.morphAttributes.color;let yt=nr;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(yt=v.toneMapping);const fn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,tt=fn!==void 0?fn.length:0,Pe=Te.get(G),kt=c.state.lights;if(k===!0&&(F===!0||w!==E)){const Tn=w===E&&G.id===C;He.setState(G,w,Tn)}let nt=!1;G.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==kt.state.version||Pe.outputColorSpace!==Ee||N.isBatchedMesh&&Pe.batching===!1||!N.isBatchedMesh&&Pe.batching===!0||N.isBatchedMesh&&Pe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pe.instancing===!1||!N.isInstancedMesh&&Pe.instancing===!0||N.isSkinnedMesh&&Pe.skinning===!1||!N.isSkinnedMesh&&Pe.skinning===!0||N.isInstancedMesh&&Pe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pe.instancingMorph===!1&&N.morphTexture!==null||Pe.envMap!==Ae||G.fog===!0&&Pe.fog!==fe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==He.numPlanes||Pe.numIntersection!==He.numIntersection)||Pe.vertexAlphas!==Oe||Pe.vertexTangents!==ke||Pe.morphTargets!==Ue||Pe.morphNormals!==et||Pe.morphColors!==xt||Pe.toneMapping!==yt||Pe.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Pe.__version=G.version);let Nn=Pe.currentProgram;nt===!0&&(Nn=ha(G,U,N));let Vr=!1,dn=!1,Ec=!1;const Tt=Nn.getUniforms(),Di=Pe.uniforms;if(Z.useProgram(Nn.program)&&(Vr=!0,dn=!0,Ec=!0),G.id!==C&&(C=G.id,dn=!0),Vr||E!==w){Tt.setValue(L,"projectionMatrix",w.projectionMatrix),Tt.setValue(L,"viewMatrix",w.matrixWorldInverse);const Tn=Tt.map.cameraPosition;Tn!==void 0&&Tn.setValue(L,ne.setFromMatrixPosition(w.matrixWorld)),de.logarithmicDepthBuffer&&Tt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Tt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,dn=!0,Ec=!0)}if(N.isSkinnedMesh){Tt.setOptional(L,N,"bindMatrix"),Tt.setOptional(L,N,"bindMatrixInverse");const Tn=N.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Tt.setValue(L,"boneTexture",Tn.boneTexture,Re))}N.isBatchedMesh&&(Tt.setOptional(L,N,"batchingTexture"),Tt.setValue(L,"batchingTexture",N._matricesTexture,Re),Tt.setOptional(L,N,"batchingIdTexture"),Tt.setValue(L,"batchingIdTexture",N._indirectTexture,Re),Tt.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&Tt.setValue(L,"batchingColorTexture",N._colorsTexture,Re));const wc=V.morphAttributes;if((wc.position!==void 0||wc.normal!==void 0||wc.color!==void 0)&&$e.update(N,V,Nn),(dn||Pe.receiveShadow!==N.receiveShadow)&&(Pe.receiveShadow=N.receiveShadow,Tt.setValue(L,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Di.envMap.value=Ae,Di.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Di.envMapIntensity.value=U.environmentIntensity),dn&&(Tt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&Zv(Di,Ec),fe&&G.fog===!0&&Ie.refreshFogUniforms(Di,fe),Ie.refreshMaterialUniforms(Di,G,q,X,c.state.transmissionRenderTarget[w.id]),xl.upload(L,Ah(Pe),Di,Re)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(xl.upload(L,Ah(Pe),Di,Re),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Tt.setValue(L,"center",N.center),Tt.setValue(L,"modelViewMatrix",N.modelViewMatrix),Tt.setValue(L,"normalMatrix",N.normalMatrix),Tt.setValue(L,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Tn=G.uniformsGroups;for(let Tc=0,Jv=Tn.length;Tc<Jv;Tc++){const Rh=Tn[Tc];dt.update(Rh,Nn),dt.bind(Rh,Nn)}}return Nn}function Zv(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Qv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,U,V){Te.get(w.texture).__webglTexture=U,Te.get(w.depthTexture).__webglTexture=V;const G=Te.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const V=Te.get(w);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,V=0){A=w,b=U,T=V;let G=!0,N=null,fe=!1,ge=!1;if(w){const Ae=Te.get(w);Ae.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(L.FRAMEBUFFER,null),G=!1):Ae.__webglFramebuffer===void 0?Re.setupRenderTarget(w):Ae.__hasExternalTextures&&Re.rebindTextures(w,Te.get(w.texture).__webglTexture,Te.get(w.depthTexture).__webglTexture);const Oe=w.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ge=!0);const ke=Te.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[U])?N=ke[U][V]:N=ke[U],fe=!0):w.samples>0&&Re.useMultisampledRTT(w)===!1?N=Te.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?N=ke[V]:N=ke,y.copy(w.viewport),P.copy(w.scissor),O=w.scissorTest}else y.copy(J).multiplyScalar(q).floor(),P.copy(ae).multiplyScalar(q).floor(),O=ve;if(Z.bindFramebuffer(L.FRAMEBUFFER,N)&&G&&Z.drawBuffers(w,N),Z.viewport(y),Z.scissor(P),Z.setScissorTest(O),fe){const Ae=Te.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ae.__webglTexture,V)}else if(ge){const Ae=Te.get(w.texture),Oe=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.__webglTexture,V||0,Oe)}C=-1},this.readRenderTargetPixels=function(w,U,V,G,N,fe,ge){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){Z.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const Ae=w.texture,Oe=Ae.format,ke=Ae.type;if(!de.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&V>=0&&V<=w.height-N&&L.readPixels(U,V,G,N,Be.convert(Oe),Be.convert(ke),fe)}finally{const Ae=A!==null?Te.get(A).__webglFramebuffer:null;Z.bindFramebuffer(L.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(w,U,V,G,N,fe,ge){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){Z.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const Ae=w.texture,Oe=Ae.format,ke=Ae.type;if(!de.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-G&&V>=0&&V<=w.height-N){const Ue=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.bufferData(L.PIXEL_PACK_BUFFER,fe.byteLength,L.STREAM_READ),L.readPixels(U,V,G,N,Be.convert(Oe),Be.convert(ke),0),L.flush();const et=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await MS(L,et,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,fe)}finally{L.deleteBuffer(Ue),L.deleteSync(et)}return fe}}finally{const Ae=A!==null?Te.get(A).__webglFramebuffer:null;Z.bindFramebuffer(L.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(w,U=null,V=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-V),N=Math.floor(w.image.width*G),fe=Math.floor(w.image.height*G),ge=U!==null?U.x:0,Ee=U!==null?U.y:0;Re.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,ge,Ee,N,fe),Z.unbindTexture()},this.copyTextureToTexture=function(w,U,V=null,G=null,N=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let fe,ge,Ee,Ae,Oe,ke;V!==null?(fe=V.max.x-V.min.x,ge=V.max.y-V.min.y,Ee=V.min.x,Ae=V.min.y):(fe=w.image.width,ge=w.image.height,Ee=0,Ae=0),G!==null?(Oe=G.x,ke=G.y):(Oe=0,ke=0);const Ue=Be.convert(U.format),et=Be.convert(U.type);Re.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const xt=L.getParameter(L.UNPACK_ROW_LENGTH),yt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),fn=L.getParameter(L.UNPACK_SKIP_PIXELS),tt=L.getParameter(L.UNPACK_SKIP_ROWS),Pe=L.getParameter(L.UNPACK_SKIP_IMAGES),kt=w.isCompressedTexture?w.mipmaps[N]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,kt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,kt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ae),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,Oe,ke,fe,ge,Ue,et,kt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,Oe,ke,kt.width,kt.height,Ue,kt.data):L.texSubImage2D(L.TEXTURE_2D,N,Oe,ke,fe,ge,Ue,et,kt),L.pixelStorei(L.UNPACK_ROW_LENGTH,xt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,fn),L.pixelStorei(L.UNPACK_SKIP_ROWS,tt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pe),N===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(w,U,V=null,G=null,N=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0);let fe,ge,Ee,Ae,Oe,ke,Ue,et,xt;const yt=w.isCompressedTexture?w.mipmaps[N]:w.image;V!==null?(fe=V.max.x-V.min.x,ge=V.max.y-V.min.y,Ee=V.max.z-V.min.z,Ae=V.min.x,Oe=V.min.y,ke=V.min.z):(fe=yt.width,ge=yt.height,Ee=yt.depth,Ae=0,Oe=0,ke=0),G!==null?(Ue=G.x,et=G.y,xt=G.z):(Ue=0,et=0,xt=0);const fn=Be.convert(U.format),tt=Be.convert(U.type);let Pe;if(U.isData3DTexture)Re.setTexture3D(U,0),Pe=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Re.setTexture2DArray(U,0),Pe=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const kt=L.getParameter(L.UNPACK_ROW_LENGTH),nt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Nn=L.getParameter(L.UNPACK_SKIP_PIXELS),Vr=L.getParameter(L.UNPACK_SKIP_ROWS),dn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,yt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ke),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Pe,N,Ue,et,xt,fe,ge,Ee,fn,tt,yt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Pe,N,Ue,et,xt,fe,ge,Ee,fn,yt.data):L.texSubImage3D(Pe,N,Ue,et,xt,fe,ge,Ee,fn,tt,yt),L.pixelStorei(L.UNPACK_ROW_LENGTH,kt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,nt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Nn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Vr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,dn),N===0&&U.generateMipmaps&&L.generateMipmap(Pe),Z.unbindTexture()},this.initRenderTarget=function(w){Te.get(w).__webglFramebuffer===void 0&&Re.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Re.setTextureCube(w,0):w.isData3DTexture?Re.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Re.setTexture2DArray(w,0):Re.setTexture2D(w,0),Z.unbindTexture()},this.resetState=function(){b=0,T=0,A=null,Z.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===fh?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===xc?"display-p3":"srgb"}}class mh{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=n,this.far=i}clone(){return new mh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class LT extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class DT extends Qt{constructor(e=null,n=1,i=1,r,s,o,a,l,u=on,d=on,p,h){super(null,o,a,l,u,d,r,s,p,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Im extends Kn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const as=new ut,Um=new ut,el=[],Nm=new Hr,IT=new ut,fo=new xn,ho=new ua;class ir extends xn{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Im(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,IT)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Hr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,as),Nm.copy(e.boundingBox).applyMatrix4(as),this.boundingBox.union(Nm)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ua),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,as),ho.copy(e.boundingSphere).applyMatrix4(as),this.boundingSphere.union(ho)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(fo.geometry=this.geometry,fo.material=this.material,fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ho.copy(this.boundingSphere),ho.applyMatrix4(i),e.ray.intersectsSphere(ho)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,as),Um.multiplyMatrices(i,as),fo.matrixWorld=Um,fo.raycast(e,el);for(let o=0,a=el.length;o<a;o++){const l=el[o];l.instanceId=s,l.object=this,n.push(l)}el.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Im(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new DT(new Float32Array(r*this.count),r,this.count,ah,si));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Us extends Li{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const d=[],p=[],h=[],g=[];let x=0;const _=[],c=i/2;let f=0;m(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new Sn(p,3)),this.setAttribute("normal",new Sn(h,3)),this.setAttribute("uv",new Sn(g,2));function m(){const S=new H,b=new H;let T=0;const A=(n-e)/i;for(let C=0;C<=s;C++){const E=[],y=C/s,P=y*(n-e)+e;for(let O=0;O<=r;O++){const z=O/r,j=z*l+a,Y=Math.sin(j),X=Math.cos(j);b.x=P*Y,b.y=-y*i+c,b.z=P*X,p.push(b.x,b.y,b.z),S.set(Y,A,X).normalize(),h.push(S.x,S.y,S.z),g.push(z,1-y),E.push(x++)}_.push(E)}for(let C=0;C<r;C++)for(let E=0;E<s;E++){const y=_[E][C],P=_[E+1][C],O=_[E+1][C+1],z=_[E][C+1];d.push(y,P,z),d.push(P,O,z),T+=6}u.addGroup(f,T,0),f+=T}function v(S){const b=x,T=new je,A=new H;let C=0;const E=S===!0?e:n,y=S===!0?1:-1;for(let O=1;O<=r;O++)p.push(0,c*y,0),h.push(0,y,0),g.push(.5,.5),x++;const P=x;for(let O=0;O<=r;O++){const j=O/r*l+a,Y=Math.cos(j),X=Math.sin(j);A.x=E*X,A.y=c*y,A.z=E*Y,p.push(A.x,A.y,A.z),h.push(0,y,0),T.x=Y*.5+.5,T.y=X*.5*y+.5,g.push(T.x,T.y),x++}for(let O=0;O<r;O++){const z=b+O,j=P+O;S===!0?d.push(j,j+1,z):d.push(j+1,j,z),C+=3}u.addGroup(f,C,S===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Do extends Us{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Do(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sc extends Li{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),u(i),d(),this.setAttribute("position",new Sn(s,3)),this.setAttribute("normal",new Sn(s.slice(),3)),this.setAttribute("uv",new Sn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const v=new H,S=new H,b=new H;for(let T=0;T<n.length;T+=3)g(n[T+0],v),g(n[T+1],S),g(n[T+2],b),l(v,S,b,m)}function l(m,v,S,b){const T=b+1,A=[];for(let C=0;C<=T;C++){A[C]=[];const E=m.clone().lerp(S,C/T),y=v.clone().lerp(S,C/T),P=T-C;for(let O=0;O<=P;O++)O===0&&C===T?A[C][O]=E:A[C][O]=E.clone().lerp(y,O/P)}for(let C=0;C<T;C++)for(let E=0;E<2*(T-C)-1;E++){const y=Math.floor(E/2);E%2===0?(h(A[C][y+1]),h(A[C+1][y]),h(A[C][y])):(h(A[C][y+1]),h(A[C+1][y+1]),h(A[C+1][y]))}}function u(m){const v=new H;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(m),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function d(){const m=new H;for(let v=0;v<s.length;v+=3){m.x=s[v+0],m.y=s[v+1],m.z=s[v+2];const S=c(m)/2/Math.PI+.5,b=f(m)/Math.PI+.5;o.push(S,1-b)}x(),p()}function p(){for(let m=0;m<o.length;m+=6){const v=o[m+0],S=o[m+2],b=o[m+4],T=Math.max(v,S,b),A=Math.min(v,S,b);T>.9&&A<.1&&(v<.2&&(o[m+0]+=1),S<.2&&(o[m+2]+=1),b<.2&&(o[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function g(m,v){const S=m*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function x(){const m=new H,v=new H,S=new H,b=new H,T=new je,A=new je,C=new je;for(let E=0,y=0;E<s.length;E+=9,y+=6){m.set(s[E+0],s[E+1],s[E+2]),v.set(s[E+3],s[E+4],s[E+5]),S.set(s[E+6],s[E+7],s[E+8]),T.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),C.set(o[y+4],o[y+5]),b.copy(m).add(v).add(S).divideScalar(3);const P=c(b);_(T,y+0,m,P),_(A,y+2,v,P),_(C,y+4,S,P)}}function _(m,v,S,b){b<0&&m.x===1&&(o[v]=m.x-1),S.x===0&&S.z===0&&(o[v]=b/2/Math.PI+.5)}function c(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.vertices,e.indices,e.radius,e.details)}}class Zl extends Sc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Zl(e.radius,e.detail)}}class gh extends Sc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new gh(e.radius,e.detail)}}class vh extends fa{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yv,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bv extends vt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class UT extends Bv{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Au=new ut,Fm=new H,Om=new H;class NT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hh,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Fm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fm),Om.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Om),n.updateMatrixWorld(),Au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Au),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Au)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class FT extends NT{constructor(){super(new Uv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class km extends Bv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new FT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zm=new ut;class OT{constructor(e,n,i=0,r=1/0){this.ray=new Av(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new dh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return zm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zm),this}intersectObject(e,n=!0,i=[]){return rd(e,this,i,n),i.sort(Bm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)rd(e[r],this,i,n);return i.sort(Bm),i}}function Bm(t,e){return t.distance-e.distance}function rd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)rd(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nh);var qm;const xi=(qm=window.Telegram)==null?void 0:qm.WebApp;try{xi==null||xi.ready(),xi==null||xi.expand()}catch{}const Hm=(xi==null?void 0:xi.initData)||"";async function ls(t,e){const n=!e,i=n?`${t}?initData=${encodeURIComponent(Hm)}`:t,r=await fetch(i,{method:n?"GET":"POST",headers:{"Content-Type":"application/json"},body:n?void 0:JSON.stringify({...e,initData:Hm})}),s=await r.json().catch(()=>({ok:!1,error:"Сеть"}));if(!r.ok||s.ok===!1)throw new Error(s.error||"Ошибка сервера");return s}const ws={init:()=>ls("/api/init"),state:()=>ls("/api/state"),tops:()=>ls("/api/tops"),attack:(t,e)=>ls("/api/attack",{tileId:t,unitId:e}),build:(t,e)=>ls("/api/build",{tileId:t,building:e}),openCase:t=>ls("/api/case/open",{server:t})},_h=t=>`/files/${encodeURIComponent(t.server)}/${encodeURIComponent(t.file)}`;let Qn={master:.8,ui:1,amb:.8};try{const t=JSON.parse(localStorage.getItem("snd")||"null");t&&(Qn={...Qn,...t})}catch{}const kT=()=>localStorage.setItem("snd",JSON.stringify(Qn)),Cu={};function Hv(t){if(!Cu[t]){const e=new Audio(`/sounds/${t}.mp3`);e.preload="auto",Cu[t]=e}return Cu[t]}function Vv(t,e){const n=Hv(t);n.volume=Math.max(0,Math.min(1,Qn.master*e)),n.currentTime=0,n.play().catch(()=>{})}const Wn=()=>Vv("click",Qn.ui),zT=()=>Vv("build",Qn.ui),xh=["forest","mountain","sea"],yh={};for(const t of xh){const e=Hv(t);e.loop=!0,yh[t]={el:e,vol:0}}let Vm=!1;function BT(){if(!Vm){Vm=!0;for(const t of xh)yh[t].el.play().catch(()=>{})}}function HT(t){for(const e of xh){const n=Math.max(0,Math.min(1,(t[e]||0)*Qn.master*Qn.amb)),i=yh[e];i.vol+=(n-i.vol)*.25,i.el.volume=Math.max(0,Math.min(1,i.vol))}}const VT=()=>({...Qn});function GT(t){Qn={...Qn,...t},kT()}const ot=800,Ht=600,WT=300,Le={bg:"#071018",border:"rgba(255,255,255,.14)",red:"#ef4444",gold:"#f5c451",green:"#7fd18a",muted:"#6f8277",text:"#e6eee8",textD:"#a9b8ae"},St={meadow:{n:"Луг",e:"🌿",bonus:null,m:1,impassable:!1,top:7319118,side:4683567},forest:{n:"Лес",e:"🌲",bonus:"defense",m:1.22,impassable:!1,top:5607997,side:3695146},hills:{n:"Холмы",e:"⛰️",bonus:"defense",m:1.34,impassable:!1,top:7971915,side:5402676},field:{n:"Поля",e:"🌾",bonus:null,m:1,impassable:!1,top:13482314,side:9667118},swamp:{n:"Болота",e:"🪷",bonus:"air",m:1.18,impassable:!1,top:6787930,side:4482363},mountain:{n:"Высокие горы",e:"🏔️",bonus:"defense",m:1.6,impassable:!0,top:9278090,side:5659735},water:{n:"Море",e:"🌊",bonus:null,m:1,impassable:!0,top:933205,side:933205}},XT={attack:"Атака",defense:"Защита",air:"Воздух"},Gm={attack:"⚔️",defense:"🛡️",air:"🌪️"},Qe=3.4,Ql=ot*Qe,Jl=Ht*Qe,yo=Ql/2,So=Jl/2,Qo=.16,Jo=.06,Gv=.035,Mo=24,sd=64,Io=45,od=320,Ru=240,Wv=50,bu=Math.tan(Wv/2*Math.PI/180),jT=t=>1.48-mn((t-Io)/(od-Io),0,1)*.53,tl=260,ad=794407,Xv=220,jv=2100,cs={barn:{n:"Амбар",i:"🏚️",cost:140,d:"+2 🪙/мин"},medbay:{n:"Медотсек",i:"⛑️",cost:160,d:"+8 HP юнитам/мин"},fort:{n:"Укрепления",i:"🛡️",cost:90,d:"+35% защиты клетки"},mine:{n:"Шахта",i:"⛏️",cost:200,d:"+4 🪙/мин"}},YT={field:["barn","medbay"],meadow:["fort"],hills:["mine"]},Wm=t=>t&&t.charAt(0).toUpperCase()+t.slice(1),mn=(t,e,n)=>Math.max(e,Math.min(n,t)),Yv=t=>{let e=0;for(let n=0;n<t.length;n++)e=e*31+t.charCodeAt(n)>>>0;return e%360/360},Ut=(t,e,n=0)=>{let i=t*374761393+e*668265263+n*69069|0;return i=(i^i>>>13)*1274126177,(i^i>>>16)>>>0},ec=(t,e,n=0)=>Ut(t,e,n)%1e4/1e4,ea=(t,e,n,i)=>{const r=t/n,s=e/n,o=Math.floor(r),a=Math.floor(s),l=r-o,u=s-a,d=l*l*(3-2*l),p=u*u*(3-2*u),h=(g,x)=>ec(g,x,i);return h(o,a)*(1-d)*(1-p)+h(o+1,a)*d*(1-p)+h(o,a+1)*(1-d)*p+h(o+1,a+1)*d*p},$T=(t,e)=>{const n=(e-ot/2)/(ot/2),i=(t-Ht/2)/(Ht/2),r=Math.sqrt(n*n+i*i),s=(ea(t,e,64,777)-.5)*.55+(ea(t,e,23,778)-.5)*.25;return r+s<.92},tc=t=>Qo+t.elev+Jo+Gv,li=(t,e)=>({x:(t+.5)*Qe-yo,z:(e+.5)*Qe-So}),qT=(t,e)=>{const n=ec(t,e,10),i=ec(t,e,22);return n<.11?"forest":n<.18?"field":n<.24?"swamp":n<.34&&i>.42?"hills":"meadow"},KT=(t,e,n)=>{const i=ea(e,n,9,31),r=ea(e,n,23,77);switch(t){case"forest":return .14+i*.18;case"field":return .08+i*.1;case"swamp":return .04+i*.05;case"hills":return .34+i*.42+r*.12;default:return .1+i*.16+r*.06}};function ZT(){const t=[];for(let e=0;e<30;e++){const n=e<16;t.push({sr:18+Ut(e,3,900)%(Ht-36),sc:18+Ut(e,7,901)%(ot-36),ang:Ut(e,11,902)%1e3/1e3*Math.PI,rAlong:n?28+Ut(e,13,903)%48:13+Ut(e,13,903)%15,rAcross:n?7+Ut(e,17,904)%8:11+Ut(e,17,904)%16,peak:(n?1.9:1.6)+Ut(e,19,905)%100/100*(n?1.6:1.4),lobes:2+Ut(e,23,906)%4,phase:Ut(e,29,907)%1e3/1e3*Math.PI*2})}return t}function QT(t,e){const n=Math.max(e.rAlong,e.rAcross)*1.35+4,i=Math.max(1,Math.floor(e.sr-n)),r=Math.min(Ht-2,Math.ceil(e.sr+n)),s=Math.max(1,Math.floor(e.sc-n)),o=Math.min(ot-2,Math.ceil(e.sc+n)),a=Math.cos(e.ang),l=Math.sin(e.ang),u=500+Math.round(e.phase*10);for(let d=i;d<=r;d++){const p=d-e.sr;for(let h=s;h<=o;h++){const g=t[d*ot+h];if(g.type==="water")continue;const x=h-e.sc,_=p*a-x*l,c=p*l+x*a,f=Math.atan2(c,_),m=1+.2*Math.sin(f*e.lobes+e.phase)+.1*Math.sin(f*(e.lobes*2+1)+e.phase*1.7),v=_/(e.rAlong*m),S=c/(e.rAcross*m),b=v*v+S*S;if(b>=1)continue;const T=e.peak*Math.pow(1-b,.68)*(.82+.3*ea(d,h,7,u));T<=.04||T>g.elev&&(g.elev=T,g.type=T>=.42?"mountain":"hills")}}}async function JT(t=()=>{}){const e=Ht*ot,n=new Array(e),i=8e3;for(let s=0;s<e;s+=i){const o=Math.min(e,s+i);for(let a=s;a<o;a++){const l=Math.floor(a/ot),u=a%ot;if(!$T(l,u)){n[a]={id:`${l}_${u}`,row:l,col:u,type:"water",owner:null,level:1,elev:-.5,shade:1};continue}const d=qT(l,u);n[a]={id:`${l}_${u}`,row:l,col:u,type:d,owner:null,level:1,elev:KT(d,l,u),shade:.9+ec(l,u,303)*.16}}t(Math.round(o/e*55)),await new Promise(requestAnimationFrame)}const r=ZT();for(let s=0;s<r.length;s++)QT(n,r[s]),t(55+Math.round((s+1)/r.length*43)),await new Promise(requestAnimationFrame);return t(100),n}const eA=(t,e)=>[[t-1,e],[t+1,e],[t,e-1],[t,e+1]].filter(([n,i])=>n>=0&&n<Ht&&i>=0&&i<ot).map(([n,i])=>`${n}_${i}`);function tA(t){const e=t.filter(r=>r.owner==="me"&&!St[r.type].impassable);if(!e.length)return new Set;const n=new Set,i=new Map(t.map(r=>[r.id,r]));return e.forEach(r=>eA(r.row,r.col).forEach(s=>{const o=i.get(s);o&&o.owner!=="me"&&!St[o.type].impassable&&n.add(s)})),n}function nA(t,e){for(const n of t)n.owner&&(n.owner=null);for(const[n,i]of Object.entries(e||{})){const[r,s]=n.split("_"),o=t[+r*ot+ +s];o&&(o.owner=i==="me"?"me":i)}}const $v=new Un(Qe-.03,1,Qe-.03),iA=new Un(Qe-.16,1,Qe-.16),rA=new Un(Qe-.34,1,Qe-.34),Xm=new vh({color:16777215,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:2}),ht={treeTrunk:new Us(.065,.09,.38,5),treeCrown:new Do(.26,.58,6),rock:new Zl(.24,0),rockSmall:new Zl(.13,0),crop:new Un(.06,.14,.52),bush:new gh(.22,0),reed:new Us(.025,.035,.34,4),flower:new Us(.025,.025,.12,4),ridge:new Un(.68,.18,.22),peak:new Do(.58,1.15,5),peakSmall:new Do(.34,.62,5)},pt=t=>new vh({color:t,flatShading:!0}),gn={meadow:pt(St.meadow.top),forest:pt(St.forest.top),hills:pt(St.hills.top),field:pt(St.field.top),swamp:pt(St.swamp.top),mountain:pt(St.mountain.top),meadowSide:pt(St.meadow.side),forestSide:pt(St.forest.side),hillsSide:pt(St.hills.side),fieldSide:pt(St.field.side),swampSide:pt(St.swamp.side),mountainSide:pt(St.mountain.side),trunk:pt(7031081),leaves:pt(3112246),rock:pt(8160119),rock2:pt(9870221),crop:pt(11970880),bush:pt(5213748),reed:pt(6196039),flower:pt(14078299),ridge:pt(6449249),peak:pt(7304558),snow:pt(15331828),water:new vh({color:866898})};function qv(t,e){const n=t.elev,i=[[t.row-1,t.col],[t.row+1,t.col],[t.row,t.col-1],[t.row,t.col+1]];for(const[r,s]of i)if(r<0||r>=Ht||s<0||s>=ot||e[r*ot+s].elev<n-.02)return!0;return!1}function sA(t,e,n){var a;const i={};for(const l of e)(i[a=l.type]||(i[a]=[])).push(l);const r=new vt,s={},o={};for(const[l,u]of Object.entries(i)){const d=u.length,p=new ir($v,gn[l],d);p.frustumCulled=!1;const h=u.filter(_=>qv(_,n)),g=new ir(iA,gn[l+"Side"],Math.max(1,h.length));g.frustumCulled=!1;const x=new Map;for(let _=0;_<h.length;_++){const c=h[_],f=li(c.col,c.row),m=Qo+c.elev,v=m+1.3;r.position.set(f.x,(m-1.3)/2,f.z),r.scale.set(1,v,1),r.updateMatrix(),g.setMatrixAt(_,r.matrix),x.set(c.id,_)}g.count=h.length,g.instanceMatrix.needsUpdate=!0;for(let _=0;_<d;_++){const c=u[_],f=li(c.col,c.row);r.position.set(f.x,Qo+c.elev+Jo/2,f.z),r.scale.set(1,Jo,1),r.updateMatrix(),p.setMatrixAt(_,r.matrix),s[c.id]={idx:_,top:p,side:g,sideIdx:x.get(c.id)}}p.instanceMatrix.needsUpdate=!0,t.add(g),t.add(p),o[l]={top:p,side:g,arr:u}}return{groups:o,byId:s}}function oA(t,e,n,i){const r=sd,s=Math.max(0,n*r),o=Math.min(Ht,(n+1)*r),a=Math.max(0,i*r),l=Math.min(ot,(i+1)*r),u=[];for(let x=s;x<o;x++)for(let _=a;_<l;_++)u.push(e[x*ot+_]);const d=new vt,p=new ir($v,Xm,u.length);p.frustumCulled=!1,u.forEach((x,_)=>{const c=li(x.col,x.row);d.position.set(c.x,Qo+x.elev+Jo/2-.045,c.z),d.scale.set(1,Jo,1),d.updateMatrix(),p.setMatrixAt(_,d.matrix)}),p.instanceMatrix.needsUpdate=!0;const h=u.filter(x=>qv(x,e)),g=new ir(rA,Xm,Math.max(1,h.length));return g.frustumCulled=!1,h.forEach((x,_)=>{const c=li(x.col,x.row),f=Qo+x.elev,m=f+1.3;d.position.set(c.x,(f-1.3)/2,c.z),d.scale.set(1,m,1),d.updateMatrix(),g.setMatrixAt(_,d.matrix)}),g.count=h.length,g.instanceMatrix.needsUpdate=!0,t.add(p),t.add(g),{far:!0,arr:u,sideArr:h,top:p,side:g}}function jm(t,e,n){const i=new We;t.arr.forEach((r,s)=>{r.id===n?i.setHex(16777215):r.owner==="me"?i.setHex(10314751).multiplyScalar(r.shade||1):r.owner?i.setHex(14243402).multiplyScalar(r.shade||1):e.has(r.id)?i.setHex(St[r.type].top).multiplyScalar((r.shade||1)*1.35):i.setHex(St[r.type].top).multiplyScalar(r.shade||1),t.top.setColorAt(s,i)}),t.sideArr.forEach((r,s)=>{i.setHex(St[r.type].side),t.side.setColorAt(s,i)}),t.top.instanceColor&&(t.top.instanceColor.needsUpdate=!0),t.side.instanceColor&&(t.side.instanceColor.needsUpdate=!0)}function aA(t,e){const n={trees:[],rocks:[],smallRocks:[],fields:[],bushes:[],reeds:[],flowers:[],ridges:[],peaks:[],snows:[]};for(const s of e){if(s.type==="water")continue;const o=Ut(s.row,s.col,777)%100,a=li(s.col,s.row),l=tc(s);if(s.type==="forest")o<42&&n.trees.push([a.x,a.z,l]);else if(s.type==="mountain"){const u=.62+Math.min(2.4,s.elev)*.5,d=(Ut(s.row,s.col,610)%1e3/1e3-.5)*.6,p=(Ut(s.row,s.col,611)%1e3/1e3-.5)*.6;if(n.peaks.push([a.x+d,a.z+p,l+.575*u,u]),s.elev>1.7){const h=u*.46;n.snows.push([a.x+d,a.z+p,l+1.15*u-.31*h+.02,h])}o<50&&n.rocks.push([a.x,a.z,l])}else s.type==="field"?o<38&&n.fields.push([a.x,a.z,l]):s.type==="hills"?(o<30?(n.rocks.push([a.x,a.z,l]),n.smallRocks.push([a.x,a.z,l])):o<52&&n.smallRocks.push([a.x,a.z,l]),o<18&&n.ridges.push([a.x,a.z,l])):s.type==="swamp"?o<40&&n.reeds.push([a.x,a.z,l]):s.type==="meadow"&&(o<8?n.bushes.push([a.x,a.z,l]):o<20&&n.flowers.push([a.x,a.z,l]))}const i=s=>s===ht.treeTrunk?.19:s===ht.treeCrown?.29:s===ht.rock?.22:s===ht.rockSmall?.13:s===ht.crop?.07:s===ht.bush?.14:s===ht.reed?.17:s===ht.flower?.06:s===ht.ridge?.09:.3,r=(s,o,a,l=1,u=1.7)=>{const d=new ir(s,o,Math.max(1,a.length*l));d.frustumCulled=!1;const p=new vt;let h=0;for(let g=0;g<a.length;g++){const x=a[g],_=x.length===4;for(let c=0;c<l;c++){const f=_?0:(Ut(g,c,501+l)%1e3/1e3-.5)*u,m=_?0:(Ut(g,c,502+l)%1e3/1e3-.5)*u,v=_?x[3]:.78+Ut(g,c,503+l)%40/100,S=_?x[2]:x[2]+i(s)*v+Gv;p.position.set(x[0]+f,S,x[1]+m),s===ht.treeTrunk?p.scale.set(1,1,1):p.scale.setScalar(v),p.rotation.y=s===ht.peak||s===ht.peakSmall?Ut(g,c,540+l)%1e3/1e3*Math.PI*2:0,p.updateMatrix(),d.setMatrixAt(h++,p.matrix)}}return d.count=h,d.instanceMatrix.needsUpdate=!0,t.add(d),d};return{treeTrunk:r(ht.treeTrunk,gn.trunk,n.trees,2,1.5),treeCrown:r(ht.treeCrown,gn.leaves,n.trees,2,1.5),rock:r(ht.rock,gn.rock,n.rocks,2,1.45),rockSmall:r(ht.rockSmall,gn.rock2,n.smallRocks,2,1.65),field:r(ht.crop,gn.crop,n.fields,5,1.55),bush:r(ht.bush,gn.bush,n.bushes,2,1.35),reed:r(ht.reed,gn.reed,n.reeds,4,1.55),flower:r(ht.flower,gn.flower,n.flowers,3,1.7),ridge:r(ht.ridge,gn.ridge,n.ridges,1,.9),peak:r(ht.peak,gn.peak,n.peaks,1,0),snow:r(ht.peakSmall,gn.snow,n.snows,1,0)}}const lA=(t,e,n)=>n?`F${t}:${e}`:`${t}:${e}`;function cA(t,e,n,i){const r=Mo,s=Math.max(0,n*r),o=Math.min(Ht,(n+1)*r),a=Math.max(0,i*r),l=Math.min(ot,(i+1)*r),u=[];for(let h=s;h<o;h++)for(let g=a;g<l;g++)u.push(e[h*ot+g]);const d=sA(t,u,e),p=aA(t,u);return{far:!1,territories:u,inst:d,decor:p}}function po(t,e){if(e.far){t.remove(e.top),e.top.dispose(),t.remove(e.side),e.side.dispose();return}for(const n of Object.values(e.inst.groups))t.remove(n.top),n.top.dispose(),t.remove(n.side),n.side.dispose();if(e.decor)for(const n of Object.values(e.decor))n&&(t.remove(n),n.dispose())}function Ym(t,e,n,i){const r=new We;for(let s=0;s<e.length;s++){const o=e[s],a=t.byId[o.id];a&&(o.id===i?r.setHex(16777215):o.owner==="me"?r.setHex(10314751).multiplyScalar(o.shade||1):o.owner?r.setHex(14243402).multiplyScalar(o.shade||1):n.has(o.id)?r.setHex(St[o.type].top).multiplyScalar((o.shade||1)*1.35):r.setHex(St[o.type].top).multiplyScalar(o.shade||1),a.top.setColorAt(a.idx,r))}for(const s of Object.values(t.groups))s.top.instanceColor&&(s.top.instanceColor.needsUpdate=!0)}function uA(){const t=new kr(Ql+7e3,Jl+7e3,140,140),e=new bi({uniforms:{uTime:{value:0},uColor:{value:new We(933205)},uDeep:{value:new We(600636)},uFogColor:{value:new We(ad)},uFogNear:{value:Xv},uFogFar:{value:jv}},vertexShader:"uniform float uTime; varying float vWave; varying float vDepth; void main(){ vec3 p=position; float w=sin(p.x*0.020+uTime*0.60)*0.30+cos(p.y*0.026-uTime*0.42)*0.24+sin((p.x+p.y)*0.011+uTime*0.30)*0.16; p.z+=w; vWave=w; vec4 mv=modelViewMatrix*vec4(p,1.0); vDepth=-mv.z; gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 uColor; uniform vec3 uDeep; uniform vec3 uFogColor; uniform float uFogNear; uniform float uFogFar; varying float vWave; varying float vDepth; void main(){ float k=clamp((vWave+0.70)/1.40,0.0,1.0); vec3 c=mix(uDeep,uColor,k); c+=vec3(0.05,0.08,0.09)*pow(k,3.0); float f=smoothstep(uFogNear,uFogFar,vDepth); c=mix(c,uFogColor,f); gl_FragColor=vec4(c,1.0); }"}),n=new xn(t,e);return n.rotation.x=-Math.PI/2,n.position.y=-.75,n}function fA({territories:t,onSelect:e,selectedId:n,reachable:i,onReady:r,onProgress:s,controlsRef:o,rev:a,borders:l,reach:u,highlightOwner:d,active:p}){const h=be.useRef(null),g=be.useRef({}),x=be.useRef({territories:t,onSelect:e,selectedId:n,reachable:i,onReady:r,onProgress:s,active:p});return be.useEffect(()=>{x.current={territories:t,onSelect:e,selectedId:n,reachable:i,onReady:r,onProgress:s,active:p}}),be.useEffect(()=>{const _=h.current,c=g.current,f=Math.max(2,_.clientWidth||800),m=Math.max(2,_.clientHeight||600),v=new LT;v.background=new We(ad),v.fog=new mh(ad,Xv,jv),c.scene=v;const S=new bn(Wv,f/Math.max(1,m),.1,4200);c.camera=S,c.targetX=0,c.targetZ=0,c.panTargetX=0,c.panTargetZ=0,c.dist=Ru,c.distTarget=Ru,c.yaw=.32,c.pitchOff=0;const b=()=>{const F=Math.cos(c.pitch);S.position.set(c.targetX+Math.sin(c.yaw)*F*c.dist,Math.sin(c.pitch)*c.dist,c.targetZ+Math.cos(c.yaw)*F*c.dist),S.lookAt(c.targetX,0,c.targetZ)};c.updateCameraPose=b,b();const T=new PT({antialias:!0,powerPreference:"high-performance",stencil:!1,depth:!0});T.setSize(f,m),T.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),T.outputColorSpace=Vn,_.appendChild(T.domElement),c.renderer=T;const A=F=>F.preventDefault(),C=()=>{T.setSize(Math.max(2,_.clientWidth),Math.max(2,_.clientHeight)),c.updateProjection(),c.refreshChunks()};T.domElement.addEventListener("webglcontextlost",A,!1),T.domElement.addEventListener("webglcontextrestored",C,!1),v.add(new UT(13625599,2767658,.9));const E=new km(16774088,1.5);E.position.set(-60,120,40),v.add(E);const y=new km(8956671,.25);y.position.set(80,60,-90),v.add(y);const P=uA();v.add(P),c.ocean=P;const O=new xn(new kr(Qe-.09,Qe-.09),new Ms({color:16777215,transparent:!0,opacity:.12,depthWrite:!1,side:Xn}));O.rotation.x=-Math.PI/2,O.visible=!1,v.add(O),c.selection=O,c.chunks=new Map,c.farChunks=new Map,c.chunkQueue=[],c.farQueue=[],c.chunkWanted=new Set,c.farWanted=new Set,c.farMode=!1,c.initialReady=!1,c.raycaster=new OT,c.mouse2D=new je,c.updateProjection=()=>{S.aspect=Math.max(2,_.clientWidth)/Math.max(2,_.clientHeight),S.updateProjectionMatrix()};const z=F=>{const $=F[0]==="F",ne=$?sd:Mo,[xe,Ce]=F.slice($?1:0).split(":").map(Number);return{x:(xe+.5)*ne*Qe-yo,z:(Ce+.5)*ne*Qe-So}},j=F=>{const $=z(F),ne=$.x-c.targetX,xe=$.z-c.targetZ;return ne*ne+xe*xe},Y=F=>{const $=Math.max(2,_.clientWidth),ne=Math.max(2,_.clientHeight),xe=$/ne,Ce=c.dist*bu,we=Ce*xe;if(!isFinite(Ce)||!isFinite(we)||Ce<=0||we<=0)return F?c.farWanted:c.chunkWanted;const Ne=F?sd:Mo,L=Math.max(we,Ce)*(F?1.6:1.4)+Ne*Qe,Ze=Math.max(0,Math.floor((c.targetX+yo-L)/Qe)),ie=Math.min(ot-1,Math.floor((c.targetX+yo+L)/Qe)),de=Math.max(0,Math.floor((c.targetZ+So-L)/Qe)),Z=Math.min(Ht-1,Math.floor((c.targetZ+So+L)/Qe)),De=Math.ceil(ot/Ne),Te=Math.ceil(Ht/Ne);let Re=new Set;for(let M=mn(Math.floor(de/Ne)-1,0,Te-1);M<=mn(Math.floor(Z/Ne)+1,0,Te-1);M++)for(let B=mn(Math.floor(Ze/Ne)-1,0,De-1);B<=mn(Math.floor(ie/Ne)+1,0,De-1);B++)Re.add(lA(M,B,F));const R=F?140:240;if(Re.size>R){const M=[...Re].map(B=>({k:B,d:j(B)})).sort((B,se)=>B.d-se.d);Re=new Set(M.slice(0,R).map(B=>B.k))}return Re};c.refreshChunks=()=>{const F=Y(!0);c.farWanted=F;for(const $ of F)!c.farChunks.has($)&&!c.farQueue.includes($)&&c.farQueue.push($);for(const[$,ne]of c.farChunks)F.has($)||(po(v,ne),c.farChunks.delete($));if(c.farMode){if(c.chunks.size){for(const[$,ne]of c.chunks)po(v,ne),c.chunks.delete($);c.chunkQueue=[]}}else{const $=Y(!1);c.chunkWanted=$;for(const ne of $)!c.chunks.has(ne)&&!c.chunkQueue.includes(ne)&&c.chunkQueue.push(ne);for(const[ne,xe]of c.chunks)$.has(ne)||(po(v,xe),c.chunks.delete(ne))}};const X=()=>{const F=x.current;for(const $ of c.chunks.values())Ym($.inst,$.territories,F.reachable,F.selectedId);for(const $ of c.farChunks.values())jm($,F.reachable,F.selectedId)},q=()=>{var Ne,L,Ze,ie;c.farQueue.sort((de,Z)=>j(de)-j(Z));let F=3;for(;F--&&c.farQueue.length;){const de=c.farQueue.shift();if(!c.farWanted.has(de)||c.farChunks.has(de))continue;const[Z,De]=de.slice(1).split(":").map(Number);c.farChunks.set(de,oA(v,x.current.territories,Z,De))}if(!c.farMode){c.chunkQueue.sort((Z,De)=>j(Z)-j(De));let de=2;for(;de--&&c.chunkQueue.length;){const Z=c.chunkQueue.shift();if(!c.chunkWanted.has(Z)||c.chunks.has(Z))continue;const[De,Te]=Z.split(":").map(Number);c.chunks.set(Z,cA(v,x.current.territories,De,Te))}}(c.farQueue.length||c.chunkQueue.length)&&X();let $=0;for(const de of c.farWanted)c.farChunks.has(de)&&$++;let ne=0;for(const de of c.chunkWanted)c.chunks.has(de)&&ne++;const xe=c.farMode?0:c.chunkWanted.size,Ce=c.farWanted.size+xe,we=$+(c.farMode?0:ne);(L=(Ne=x.current).onProgress)==null||L.call(Ne,60+Math.round(we/Math.max(1,Ce)*40)),!c.initialReady&&we===Ce&&(c.initialReady=!0,X(),(ie=(Ze=x.current).onReady)==null||ie.call(Ze))};c.refreshChunks();let D=0,K=0,J=c.targetX,ae=c.targetZ,ve=c.dist;const ee=()=>{var F,$,ne;if(D=requestAnimationFrame(ee),!!x.current.active){if(c.targetX+=(c.panTargetX-c.targetX)*.18,c.targetZ+=(c.panTargetZ-c.targetZ)*.18,c.dist+=(c.distTarget-c.dist)*.15,c.pitch=mn(jT(c.dist)+(c.pitchOff||0),.92,1.55),b(),!c.farMode&&c.dist>280?(c.farMode=!0,c.refreshChunks()):c.farMode&&c.dist<240&&(c.farMode=!1,c.refreshChunks()),(Math.abs(c.dist-ve)>.5||Math.abs(c.targetX-J)>Mo*Qe*.2||Math.abs(c.targetZ-ae)>Mo*Qe*.2)&&(J=c.targetX,ae=c.targetZ,ve=c.dist,c.refreshChunks()),q(),(ne=($=(F=c.ocean)==null?void 0:F.material)==null?void 0:$.uniforms)!=null&&ne.uTime&&(c.ocean.material.uniforms.uTime.value=performance.now()*.001),c.selection.visible&&(c.selection.material.opacity=.1+.07*Math.sin(performance.now()*.004)),c.reachMesh&&(c.reachMesh.material.opacity=.14+.12*Math.sin(performance.now()*.0035)),c.hlMesh&&(c.hlMesh.material.opacity=.45+.35*Math.sin(performance.now()*.005)),K%12===0){const xe=x.current.territories;if(xe){const Ce=Math.round((c.targetX+yo)/Qe),we=Math.round((c.targetZ+So)/Qe);let Ne=0,L=0,Ze=0,ie=0;for(let De=-6;De<=6;De+=2)for(let Te=-6;Te<=6;Te+=2){const Re=we+De,R=Ce+Te;if(ie++,Re<0||Re>=Ht||R<0||R>=ot){Ze++;continue}const M=xe[Re*ot+R];M.type==="forest"?Ne++:M.type==="mountain"?L++:M.type==="water"&&Ze++}const Z=.15+.85*mn(1-(c.dist-Io)/(od-Io),0,1);HT({forest:Ne/ie*Z,mountain:L/ie*Z,sea:Ze/ie*Z})}}if(K++,K%30===0){const xe=c.dist<170,Ce=c.dist<320;for(const we of c.chunks.values())if(we.decor){for(const Ne of Object.values(we.decor))Ne&&(Ne.visible=xe);for(const Ne of Object.values(we.inst.groups))Ne.side&&(Ne.side.visible=Ce)}}T.render(v,S)}};ee(),c.stop=()=>cancelAnimationFrame(D);const k=()=>{const F=_.clientWidth,$=_.clientHeight;F<50||$<50||(T.setSize(F,$),c.updateProjection(),c.refreshChunks())};return window.addEventListener("resize",k),()=>{c.stop(),window.removeEventListener("resize",k),T.domElement.removeEventListener("webglcontextlost",A),T.domElement.removeEventListener("webglcontextrestored",C);for(const F of c.chunks.values())po(v,F);for(const F of c.farChunks.values())po(v,F);c.chunks.clear(),c.farChunks.clear(),T.dispose(),_.contains(T.domElement)&&_.removeChild(T.domElement)}},[]),be.useEffect(()=>{const _=g.current;if(!_.chunks)return;for(const f of _.chunks.values())Ym(f.inst,f.territories,i,n);for(const f of _.farChunks.values())jm(f,i,n);const c=t.find(f=>f.id===n);if(c){const f=li(c.col,c.row);_.selection.position.set(f.x,tc(c)+.02,f.z),_.selection.visible=!0}else _.selection.visible=!1},[t,i,n,a]),be.useEffect(()=>{const _=g.current;if(!_.scene||(_.borderMesh&&(_.scene.remove(_.borderMesh),_.borderMesh.dispose(),_.borderMesh=null),!l||!l.length))return;_.borderGeo||(_.borderGeo=new Un(1,1,1)),_.borderMat||(_.borderMat=new Ms({transparent:!0,opacity:.95}));const c=new ir(_.borderGeo,_.borderMat,l.length),f=new vt,m=new We;l.forEach((v,S)=>{f.position.set(v.x,v.y,v.z),f.rotation.y=v.vert?Math.PI/2:0,f.scale.set(Qe+.1,.1,.26),f.updateMatrix(),c.setMatrixAt(S,f.matrix),v.owner==="me"?m.setHex(16766814):m.setHSL(Yv(v.owner),.85,.6),c.setColorAt(S,m)}),c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0),_.scene.add(c),_.borderMesh=c},[l]),be.useEffect(()=>{const _=g.current;if(!_.scene||(_.hlMesh&&(_.scene.remove(_.hlMesh),_.hlMesh.dispose(),_.hlMesh=null),!d||!l))return;const c=l.filter(v=>v.owner===d);if(!c.length)return;_.hlGeo||(_.hlGeo=new Un(1,1,1));const f=new ir(_.hlGeo,new Ms({color:16777215,transparent:!0,opacity:.6,blending:Wl,depthWrite:!1}),c.length),m=new vt;c.forEach((v,S)=>{m.position.set(v.x,v.y+.05,v.z),m.rotation.y=v.vert?Math.PI/2:0,m.scale.set(Qe+.3,.16,.4),m.updateMatrix(),f.setMatrixAt(S,m.matrix)}),f.instanceMatrix.needsUpdate=!0,_.scene.add(f),_.hlMesh=f},[d,l]),be.useEffect(()=>{const _=g.current;if(!_.scene||(_.reachMesh&&(_.scene.remove(_.reachMesh),_.reachMesh.dispose(),_.reachMesh=null),!u||!u.length))return;_.reachGeo||(_.reachGeo=new kr(Qe-.25,Qe-.25)),_.reachMat||(_.reachMat=new Ms({color:11466656,transparent:!0,opacity:.2,depthWrite:!1,side:Xn,blending:Wl}));const c=new ir(_.reachGeo,_.reachMat,u.length),f=new vt;u.forEach((m,v)=>{f.position.set(m.x,m.y,m.z),f.rotation.x=-Math.PI/2,f.updateMatrix(),c.setMatrixAt(v,f.matrix)}),c.instanceMatrix.needsUpdate=!0,_.scene.add(c),_.reachMesh=c},[u]),be.useEffect(()=>{const _=h.current,c=g.current;if(!_)return;const f=()=>{const ee=Math.max(2,_.clientWidth)/Math.max(2,_.clientHeight),k=c.distTarget*bu,F=k*ee;c.panTargetX=mn(c.panTargetX,-Math.max(Ql/2+tl-F,0),Math.max(Ql/2+tl-F,0)),c.panTargetZ=mn(c.panTargetZ,-Math.max(Jl/2+tl-k,0),Math.max(Jl/2+tl-k,0))},m=(ee,k)=>{const F=2*c.dist*bu/Math.max(1,_.clientHeight),$=Math.cos(c.yaw),ne=-Math.sin(c.yaw),xe=-Math.sin(c.yaw),Ce=-Math.cos(c.yaw);c.panTargetX+=(-$*ee+xe*k)*F,c.panTargetZ+=(-ne*ee+Ce*k)*F,f()},v=ee=>{c.distTarget=mn(c.distTarget/ee,Io,od),f()};o&&(o.current={zoomBy:v,focus:(ee,k)=>{c.panTargetX=ee,c.panTargetZ=k},resetView:()=>{c.panTargetX=0,c.panTargetZ=0,c.distTarget=Ru,c.yaw=.32,c.pitchOff=0,c.updateCameraPose()}});const S=(ee,k)=>{const F=_.getBoundingClientRect();c.mouse2D.x=(ee-F.left)/F.width*2-1,c.mouse2D.y=-((k-F.top)/F.height)*2+1,c.raycaster.setFromCamera(c.mouse2D,c.camera);const $=[];for(const we of c.chunks.values())for(const Ne of Object.values(we.inst.groups))$.push(Ne.top);for(const we of c.farChunks.values())$.push(we.top);const ne=c.raycaster.intersectObjects($,!1);if(!ne.length||ne[0].instanceId==null)return null;const xe=ne[0].object,Ce=ne[0].instanceId;for(const we of c.chunks.values())for(const Ne of Object.values(we.inst.groups))if(Ne.top===xe)return Ne.arr[Ce];for(const we of c.farChunks.values())if(we.top===xe)return we.arr[Ce];return null},b=(ee,k)=>{const F=S(ee,k);F&&x.current.onSelect(F)};let T=!1,A=!1,C=0,E=0,y=0,P=0,O=!1;const z=ee=>{if(ee.button!==void 0&&ee.button===2){O=!0,A=!1,y=ee.clientX,P=ee.clientY,_.style.cursor="ew-resize";return}ee.button!==void 0&&ee.button!==0||(T=!0,A=!1,C=0,E=performance.now(),y=ee.clientX,P=ee.clientY,_.style.cursor="grabbing")},j=ee=>{const k=ee.clientX-y,F=ee.clientY-P;if(O){c.yaw-=k*.008,c.pitchOff=mn((c.pitchOff||0)-F*.006,-.6,.6),c.updateCameraPose(),y=ee.clientX,P=ee.clientY;return}T&&(C+=Math.abs(k)+Math.abs(F),C>6&&(A=!0),m(k,F),y=ee.clientX,P=ee.clientY)},Y=ee=>{if(O){O=!1,_.style.cursor="grab";return}T&&(!A&&performance.now()-E<700&&b(ee.clientX,ee.clientY),T=!1,_.style.cursor="grab")},X=ee=>{ee.preventDefault(),v(Math.exp(-ee.deltaY*.0012))},q=()=>v(1.5),D=ee=>{if(ee.touches.length===1)c.touch={x:ee.touches[0].clientX,y:ee.touches[0].clientY,m:!1,d:0,t:Date.now()};else if(ee.touches.length>=2){c.touch=null;const k=ee.touches[0].clientX-ee.touches[1].clientX,F=ee.touches[0].clientY-ee.touches[1].clientY;c.pinch=Math.hypot(k,F),c.twoFinger={dx:k,dy:F,cy:(ee.touches[0].clientY+ee.touches[1].clientY)/2}}},K=ee=>{if(ee.preventDefault(),ee.touches.length===1&&c.touch){const k=ee.touches[0].clientX-c.touch.x,F=ee.touches[0].clientY-c.touch.y;c.touch.d+=Math.abs(k)+Math.abs(F),c.touch.d>12&&(c.touch.m=!0),m(k,F),c.touch.x=ee.touches[0].clientX,c.touch.y=ee.touches[0].clientY}else if(ee.touches.length===2){const k=ee.touches[0].clientX-ee.touches[1].clientX,F=ee.touches[0].clientY-ee.touches[1].clientY,$=Math.hypot(k,F);if(c.pinch&&v(Math.exp(($-c.pinch)*.002)),c.twoFinger){const ne=(ee.touches[0].clientY+ee.touches[1].clientY)/2;c.pitchOff=mn((c.pitchOff||0)-(ne-c.twoFinger.cy)*.002,-.6,.6),c.yaw-=(k-c.twoFinger.dx)*.002,c.updateCameraPose()}c.pinch=$,c.twoFinger={dx:k,dy:F,cy:(ee.touches[0].clientY+ee.touches[1].clientY)/2}}},J=()=>{c.touch&&!c.touch.m&&c.touch.d<14&&Date.now()-c.touch.t<700&&b(c.touch.x,c.touch.y),c.touch=null,c.pinch=0,c.twoFinger=null},ae=()=>{T=!1,O=!1,_.style.cursor="grab"},ve=ee=>ee.preventDefault();return _.style.touchAction="none",_.style.cursor="grab",_.addEventListener("mousedown",z),_.addEventListener("mousemove",j),_.addEventListener("mouseup",Y),_.addEventListener("mouseleave",ae),_.addEventListener("wheel",X,{passive:!1}),_.addEventListener("dblclick",q),_.addEventListener("contextmenu",ve),_.addEventListener("touchstart",D,{passive:!0}),_.addEventListener("touchmove",K,{passive:!1}),_.addEventListener("touchend",J),()=>{o&&(o.current=null),_.removeEventListener("mousedown",z),_.removeEventListener("mousemove",j),_.removeEventListener("mouseup",Y),_.removeEventListener("mouseleave",ae),_.removeEventListener("wheel",X),_.removeEventListener("dblclick",q),_.removeEventListener("contextmenu",ve),_.removeEventListener("touchstart",D),_.removeEventListener("touchmove",K),_.removeEventListener("touchend",J)}},[]),W.jsx("div",{style:{position:"relative",width:"100%",height:"100%",background:"#0a1620"},children:W.jsx("div",{ref:h,style:{width:"100%",height:"100%"}})})}function dA({territories:t,overlay:e,onPick:n}){const i=be.useRef(null),r=be.useRef(null);return be.useEffect(()=>{if(!t||r.current)return;const s=document.createElement("canvas");s.width=200,s.height=150;const o=s.getContext("2d"),a=200/ot,l=150/Ht;for(const u of t)o.fillStyle="#"+St[u.type].top.toString(16).padStart(6,"0"),o.fillRect(u.col*a,u.row*l,Math.ceil(a),Math.ceil(l));r.current=s},[t]),be.useEffect(()=>{const s=i.current;if(!s||!r.current)return;const o=s.getContext("2d");o.clearRect(0,0,200,150),o.drawImage(r.current,0,0);const a=200/ot,l=150/Ht;for(const[u,d]of Object.entries(e.owners||{})){const[p,h]=u.split("_").map(Number);o.fillStyle=d==="me"?"#ffd75e":`hsl(${Math.round(Yv(d)*360)},80%,55%)`,o.fillRect(h*a,p*l,Math.ceil(a),Math.ceil(l))}},[e,t]),W.jsx("canvas",{ref:i,width:200,height:150,onClick:s=>{const o=s.target.getBoundingClientRect(),a=Math.floor((s.clientX-o.left)/o.width*ot),l=Math.floor((s.clientY-o.top)/o.height*Ht),u=li(a,l);n(u.x,u.z)},style:{width:"100%",border:"1px solid "+Le.border,background:"#0a1410",cursor:"pointer",imageRendering:"pixelated",display:"block"}})}function ta({onClick:t,disabled:e,variant:n="primary",children:i,style:r}){const s=n==="success"?"btnx green":n==="danger"?"btnx red":n==="ghost"?"btnx":"btnx gold";return W.jsx("button",{className:s,disabled:e,onClick:t,style:{width:"100%",padding:"12px 0",...r},children:i})}function Pu({onClick:t,children:e}){return W.jsx("button",{className:"btnx",onClick:t,style:{width:40,height:40,padding:0,fontSize:16},children:e})}function hA({profile:t,supplyEta:e,now:n,onInv:i,onSound:r}){let s="";if(t.supplies<t.supplyMax&&e){const o=Math.max(0,Math.ceil((e-n)/1e3));s=` ${Math.floor(o/60)}:${String(o%60).padStart(2,"0")}`}return W.jsxs("div",{className:"panelx",style:{position:"absolute",left:12,top:12,display:"flex",gap:10,alignItems:"center",padding:"8px 12px",fontSize:11,letterSpacing:".08em",animation:"fadeIn .4s ease"},children:[W.jsxs("span",{children:["МОНЕТЫ ",W.jsx("b",{style:{color:Le.gold},children:t.coins}),t.income>0&&W.jsxs("b",{style:{color:Le.green},children:[" +",t.income,"/М"]})]}),W.jsxs("span",{children:["ЭНЕРГИЯ ",W.jsxs("b",{children:[t.supplies,"/",t.supplyMax]}),W.jsx("span",{style:{color:Le.muted},children:s})]}),W.jsxs("span",{children:["ЗЕМЛИ ",W.jsxs("b",{children:[t.owned.length,"/",WT]})]}),W.jsx("button",{className:"btnx",onClick:i,style:{padding:"4px 8px"},children:"ЮНИТЫ"}),W.jsx("button",{className:"btnx",onClick:r,style:{padding:"4px 8px"},children:"ЗВУК"})]})}function pA({u:t,sel:e,onClick:n}){const i=t.hp<=0;return W.jsxs("div",{onClick:i?void 0:n,style:{minWidth:88,border:e?"1px solid "+Le.gold:"1px solid "+Le.border,background:i?"#1a1212":"#0b1216",opacity:i?.5:1,textAlign:"center",cursor:i?"not-allowed":"pointer",flexShrink:0,transition:"border-color .15s",padding:8},children:[W.jsx("img",{src:_h(t),onError:r=>r.target.style.display="none",style:{width:44,height:44,objectFit:"cover",display:"block",margin:"0 auto 4px",border:"1px solid "+Le.border}}),W.jsx("div",{style:{fontSize:11,fontWeight:800,whiteSpace:"nowrap",overflow:"hidden"},children:t.name}),W.jsxs("div",{style:{fontSize:9,color:Le.textD},children:["ATK ",Math.max(t.air,t.ground)," · DEF ",t.protection]}),W.jsx("div",{style:{height:4,background:"#1c2c23",marginTop:4},children:W.jsx("div",{style:{height:"100%",width:t.hp+"%",background:t.hp>50?Le.green:t.hp>25?Le.gold:Le.red}})}),i&&W.jsx("div",{style:{fontSize:9,color:Le.red,marginTop:2},children:"РАНЕН"})]})}function Sh({title:t,onClose:e,children:n}){return W.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,.7)",zIndex:50,display:"flex",alignItems:"flex-end",animation:"fadeIn .2s ease"},onClick:e,children:W.jsxs("div",{className:"panelx",style:{padding:18,width:"100%",maxHeight:"80dvh",overflowY:"auto",animation:"sheetUp .3s cubic-bezier(.22,.9,.3,1)",background:"rgba(9,14,18,.92)"},onClick:i=>i.stopPropagation(),children:[W.jsx("div",{style:{fontSize:14,fontWeight:900,letterSpacing:".18em",marginBottom:14,textTransform:"uppercase"},children:t}),n,W.jsx(ta,{variant:"ghost",onClick:e,style:{marginTop:12},children:"Закрыть"})]})})}function mA(t){const{t:e,building:n,profile:i,selUnit:r,setSelUnit:s,onAttack:o,onBuild:a,onClose:l,result:u,canInteract:d,busy:p,freePlace:h,ownerName:g}=t,x=St[e.type],_=e.owner==="me",c=YT[e.type]||[],f=i.units.filter(m=>m.hp>0);return W.jsxs(Sh,{title:`${x.n}${g&&!_?" · "+g:""}`,onClose:l,children:[W.jsxs("div",{style:{fontSize:11,color:Le.textD,letterSpacing:".06em",margin:"-6px 0 12px"},children:[n?`${cs[n.b].n} — ${cs[n.b].d}`:x.bonus?`+${Math.round((x.m-1)*100)}% ${XT[x.bonus]}`:x.impassable?"НЕПРОХОДИМО":"ОБЫЧНАЯ МЕСТНОСТЬ",(e.type==="field"||e.type==="hills")&&W.jsx("span",{style:{color:Le.green},children:" · +1 МОН/МИН"})]}),u&&!u.error&&W.jsxs("div",{style:{padding:12,marginBottom:10,border:`1px solid ${u.win?Le.green:Le.red}`,background:u.win?"rgba(127,209,138,.08)":"rgba(239,68,68,.08)",animation:"fadeIn .3s ease"},children:[W.jsx("b",{style:{letterSpacing:".1em"},children:u.win?"ЗАХВАЧЕНО":"НЕУДАЧА"}),W.jsxs("div",{style:{fontSize:11,color:Le.textD,marginTop:4},children:[Gm[u.atkStat]," ",u.ap," против ",Gm[u.defStat]," ",u.dp," · урон ",u.dmg]})]}),(u==null?void 0:u.error)&&W.jsxs("div",{style:{fontSize:11,color:Le.red,marginBottom:10},children:["! ",u.error]}),_&&!n&&c.length>0&&W.jsxs("div",{style:{marginBottom:12},children:[W.jsx("div",{className:"lblx",style:{marginBottom:6},children:"Строительство"}),c.map(m=>W.jsxs(ta,{disabled:i.coins<cs[m].cost||p,onClick:()=>a(m),style:{marginBottom:6},children:[cs[m].n," — ",cs[m].cost," мон · ",cs[m].d]},m))]}),!_&&!x.impassable&&W.jsxs(W.Fragment,{children:[!d&&W.jsx("div",{style:{fontSize:11,color:Le.muted,marginBottom:8},children:"Клетка не граничит с твоими территориями."}),d&&h&&W.jsx("div",{style:{fontSize:11,color:Le.gold,marginBottom:8},children:"ПЕРВАЯ КЛЕТКА — КУДА УГОДНО"}),d&&W.jsxs(W.Fragment,{children:[W.jsx("div",{className:"lblx",style:{marginBottom:6},children:"Юнит в атаку (−1 энергии)"}),W.jsxs("div",{style:{display:"flex",gap:8,overflowX:"auto",paddingBottom:6,marginBottom:8},children:[f.length===0&&W.jsx("div",{style:{fontSize:11,color:Le.muted},children:"Нет юнитов — открой кейс в меню"}),f.map(m=>W.jsx(pA,{u:m,sel:r===m.uid,onClick:()=>s(m.uid)},m.uid))]}),W.jsx(ta,{variant:"success",disabled:p||!r||f.length===0||i.supplies<1,onClick:()=>o(r),children:p?"АТАКА…":"АТАКОВАТЬ КЛЕТКУ"}),i.supplies<1&&W.jsx("div",{style:{fontSize:10,color:Le.gold,marginTop:6},children:"НЕТ ЭНЕРГИИ — ЖДИ ВОССТАНОВЛЕНИЯ"})]})]})]})}function gA({profile:t,onClose:e}){return W.jsxs(Sh,{title:"Юниты",onClose:e,children:[t.units.length===0&&W.jsx("div",{style:{color:Le.muted,fontSize:12},children:"Пусто. Открой кейс в меню."}),W.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(96px,1fr))",gap:8},children:t.units.map(n=>W.jsxs("div",{style:{background:"#0b1216",border:"1px solid "+Le.border,padding:8,textAlign:"center"},children:[W.jsx("img",{src:_h(n),onError:i=>i.target.style.display="none",style:{width:"100%",aspectRatio:"1",objectFit:"cover",border:"1px solid "+Le.border}}),W.jsx("div",{style:{fontSize:11,fontWeight:800,marginTop:4},children:n.name}),W.jsx("div",{style:{fontSize:9,color:Le.muted},children:n.server}),W.jsxs("div",{style:{fontSize:10,marginTop:2},children:["ATK ",Math.max(n.air,n.ground)," · DEF ",n.protection]}),W.jsxs("div",{style:{fontSize:10,color:n.hp>0?Le.green:Le.red},children:["HP ",n.hp]})]},n.uid))})]})}function vA({onClose:t}){const[e,n]=be.useState(VT()),i=(s,o)=>{const a={...e,[s]:o};n(a),GT(a)},r=({name:s,k:o})=>W.jsxs("div",{style:{marginBottom:14},children:[W.jsxs("div",{style:{fontSize:11,fontWeight:800,letterSpacing:".1em",marginBottom:6},children:[s," — ",Math.round(e[o]*100),"%"]}),W.jsx("input",{type:"range",min:"0",max:"100",value:Math.round(e[o]*100),onChange:a=>i(o,Number(a.target.value)/100),onPointerUp:()=>Wn(),style:{width:"100%"}})]});return W.jsxs(Sh,{title:"Звук",onClose:t,children:[W.jsx(r,{name:"ОБЩАЯ ГРОМКОСТЬ",k:"master"}),W.jsx(r,{name:"ИНТЕРФЕЙС",k:"ui"}),W.jsx(r,{name:"БИОМЫ",k:"amb"}),W.jsx("div",{style:{fontSize:10,color:Le.textD},children:"Сохраняется на устройстве."})]})}function _A({pool:t,winner:e,onDone:n}){const i=be.useRef(null),[r,s]=be.useState(0),[o,a]=be.useState(!1),l=108,u=be.useMemo(()=>{const d=[];for(let p=0;p<50;p++)d.push(t[Math.floor(Math.random()*t.length)]||e);return d[44]=e,d},[t,e]);return be.useEffect(()=>{const d=i.current;if(!d)return;const p=44*l+l/2-d.clientWidth/2+(Math.random()*50-25),h=requestAnimationFrame(()=>requestAnimationFrame(()=>{s(-p),a(!0)})),g=setTimeout(n,5300);return()=>{cancelAnimationFrame(h),clearTimeout(g)}},[]),W.jsxs("div",{ref:i,style:{position:"relative",overflow:"hidden",border:"1px solid "+Le.border,background:"#0a1410",height:132,marginBottom:12},children:[W.jsx("div",{style:{position:"absolute",left:"50%",top:0,bottom:0,width:2,background:Le.gold,zIndex:2,boxShadow:"0 0 12px "+Le.gold}}),W.jsx("div",{style:{display:"flex",gap:12,padding:"12px 0",willChange:"transform",transform:`translateX(${r}px)`,transition:o?"transform 5s cubic-bezier(0.1,0.7,0.15,1)":"none"},children:u.map((d,p)=>W.jsxs("div",{style:{width:96,flexShrink:0,background:"#0b1216",border:"1px solid "+Le.border,padding:6,textAlign:"center"},children:[W.jsx("img",{src:`/files/${encodeURIComponent(d.server||e.server)}/${encodeURIComponent(d.file)}`,onError:h=>h.target.style.display="none",style:{width:"100%",height:64,objectFit:"cover",border:"1px solid "+Le.border}}),W.jsx("div",{style:{fontSize:10,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden"},children:d.name})]},p))})]})}function xA({profile:t,servers:e,pools:n,caseCost:i,onSync:r,territories:s,overlay:o,onPick:a}){const[l,u]=be.useState("cases"),[d,p]=be.useState(null),[h,g]=be.useState("power"),[x,_]=be.useState(null);be.useEffect(()=>{d||ws.tops().then(p).catch(()=>p({coins:[],cards:[],power:[]}))},[]);const c=async()=>{Wn(),_(m=>({...m,rolling:!0,win:null,err:""}));try{const m=await ws.openCase(x.server);r(m.profile),_(v=>({...v,win:m.unit}))}catch(m){_(v=>({...v,rolling:!1,err:m.message}))}},f=(n==null?void 0:n[x==null?void 0:x.server])||[];return W.jsxs("div",{style:{position:"absolute",inset:0,background:"rgba(7,12,16,.96)",color:Le.text,overflowY:"auto",padding:"16px 14px 90px",fontFamily:"-apple-system,system-ui,sans-serif"},children:[W.jsx("div",{style:{fontSize:15,fontWeight:900,letterSpacing:".22em",marginBottom:14},children:"МИР"}),W.jsx("div",{className:"lblx",style:{marginBottom:6},children:"Обзор территории"}),W.jsx(dA,{territories:s,overlay:o,onPick:a}),W.jsx("div",{style:{display:"flex",gap:6,margin:"14px 0"},children:[["cases","КЕЙСЫ"],["tops","ТОПЫ"]].map(([m,v])=>W.jsx("button",{className:"btnx"+(l===m?" gold":""),onClick:()=>{Wn(),u(m)},children:v},m))}),l==="cases"&&W.jsxs(W.Fragment,{children:[W.jsxs("div",{style:{fontSize:11,color:Le.textD,marginBottom:10,letterSpacing:".08em"},children:["МОНЕТЫ ",t.coins," · ЦЕНА ",i]}),e.length===0&&W.jsx("div",{style:{color:Le.muted,fontSize:12},children:"На сервере нет папок с карточками."}),e.map(m=>W.jsxs("button",{className:"btnx",onClick:()=>{Wn(),_({server:m.name})},style:{width:"100%",marginBottom:8,padding:"12px 14px",textAlign:"left",display:"flex",justifyContent:"space-between"},children:[W.jsx("span",{children:Wm(m.name)}),W.jsxs("span",{style:{color:Le.muted},children:[m.count," карт"]})]},m.name))]}),l==="tops"&&W.jsxs(W.Fragment,{children:[W.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:[["power","СИЛА"],["coins","МОНЕТЫ"],["cards","КАРТЫ"]].map(([m,v])=>W.jsx("button",{className:"btnx"+(h===m?" gold":""),onClick:()=>g(m),children:v},m))}),!d&&W.jsx("div",{style:{color:Le.muted,fontSize:12},children:"Загрузка…"}),d&&(d[h]||[]).map((m,v)=>W.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"8px 10px",border:"1px solid "+Le.border,marginBottom:4,fontSize:12,background:v%2?"transparent":"#0b1216",animation:"fadeIn .3s ease"},children:[W.jsxs("span",{style:{fontWeight:700},children:[v+1,". ",m.n]}),W.jsx("span",{style:{color:Le.gold,fontWeight:800},children:m.v})]},v))]}),x&&W.jsx("div",{onClick:x.win?()=>{Wn(),_(null)}:void 0,style:{position:"fixed",inset:0,backdropFilter:"blur(10px)",background:"rgba(4,8,12,.55)",zIndex:40,display:"flex",alignItems:"center",justifyContent:"center",padding:16,animation:"fadeIn .25s ease"},children:W.jsxs("div",{className:"panelx",style:{width:"100%",maxWidth:460,animation:"caseIn .35s cubic-bezier(.22,.9,.3,1)",background:"rgba(9,14,18,.94)",padding:16},children:[W.jsxs("div",{style:{fontSize:13,fontWeight:900,letterSpacing:".16em",marginBottom:10},children:["КЕЙС «",Wm(x.server).toUpperCase(),"»"]}),x.rolling&&x.win&&W.jsx(_A,{pool:f,winner:x.win,onDone:()=>{}}),x.rolling&&!x.win&&W.jsxs("div",{style:{textAlign:"center",padding:20},children:[W.jsx("div",{style:{fontSize:46,animation:"caseIn .4s ease"},children:"▣"}),W.jsx("div",{style:{fontSize:11,color:Le.gold,marginTop:8,letterSpacing:".14em"},children:"ОТКРЫТИЕ…"})]}),x.win&&W.jsxs("div",{style:{textAlign:"center",padding:12,border:"1px solid "+Le.gold,animation:"cardPop .45s ease",background:"rgba(245,196,81,.06)"},children:[W.jsx("img",{src:_h(x.win),onError:m=>m.target.style.display="none",style:{width:96,height:96,objectFit:"cover",border:"1px solid "+Le.border}}),W.jsx("div",{style:{fontSize:15,fontWeight:900,marginTop:6},children:x.win.name}),W.jsxs("div",{style:{fontSize:10,color:Le.textD,letterSpacing:".08em"},children:["ATK ",x.win.air," · GND ",x.win.ground,"/10 · DEF ",x.win.protection,"/10"]}),W.jsx("div",{style:{fontSize:10,color:Le.muted,marginTop:8},children:"ТАПНИ, ЧТОБЫ ВЕРНУТЬСЯ"})]}),x.err&&W.jsxs("div",{style:{color:Le.red,fontSize:11,margin:"8px 0"},children:["! ",x.err]}),!x.rolling&&!x.win&&W.jsxs(W.Fragment,{children:[W.jsx("div",{style:{textAlign:"center",fontSize:54,margin:"10px 0",color:Le.gold,textShadow:"0 0 24px rgba(245,196,81,.4)"},children:"▣"}),W.jsxs(ta,{disabled:t.coins<i,onClick:c,children:["ОТКРЫТЬ ЗА ",i," МОН"]}),W.jsx(ta,{variant:"ghost",onClick:()=>_(null),style:{marginTop:8},children:"Назад"})]})]})})]})}function $m({progress:t,text:e}){const n=mn(t,0,100);return W.jsx("div",{style:{position:"fixed",inset:0,background:"radial-gradient(circle at 50% 35%,#10283a 0%,#071018 72%)",color:"#e6eee8",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"-apple-system,system-ui,sans-serif",zIndex:70},children:W.jsxs("div",{style:{width:"min(440px,84vw)",textAlign:"center"},children:[W.jsx("div",{style:{fontSize:22,fontWeight:900,letterSpacing:".3em"},children:"ЗАГРУЗКА МИРА"}),W.jsx("div",{style:{fontSize:12,color:"#a9b8ae",marginTop:8,minHeight:18,letterSpacing:".08em"},children:e}),W.jsx("div",{style:{height:4,background:"#1c2c23",marginTop:22,border:"1px solid #2b4232"},children:W.jsx("div",{style:{height:"100%",width:`${n}%`,background:"linear-gradient(90deg,#8b5cf6,#c4b5fd)",transition:"width .18s ease"}})}),W.jsxs("div",{style:{fontSize:11,color:"#6f8277",marginTop:8},children:[n,"%"]})]})})}const yA={id:"dev",name:"Dev",coins:1e3,supplies:6,supplyMax:6,supplyNextIn:0,income:0,heal:0,units:[{uid:"u1",name:"Тест",server:"dev",file:"test.png",air:5,ground:6,protection:4,hp:100}],owned:[],buildings:{}};function SA(){const[t,e]=be.useState("map"),[n,i]=be.useState(null),[r,s]=be.useState(0),[o,a]=be.useState(!1),[l,u]=be.useState(60),[d,p]=be.useState(null),[h,g]=be.useState(null),[x,_]=be.useState(0),[c,f]=be.useState(null),[m,v]=be.useState({owners:{},buildings:{},names:{}}),[S,b]=be.useState([]),[T,A]=be.useState({}),[C,E]=be.useState(120),[y,P]=be.useState(0),[O,z]=be.useState(null),[j,Y]=be.useState(null),[X,q]=be.useState(!1),[D,K]=be.useState(Date.now()),[J,ae]=be.useState(null),ve=be.useRef(null);be.useEffect(()=>{let ie=!0;return JT(de=>{ie&&s(de)}).then(de=>{ie&&i(de)}),()=>{ie=!1}},[]);const ee=ie=>{f(ie),P(Date.now()+(ie.supplyNextIn||0)*1e3)},k=ie=>v({owners:ie.owners||{},buildings:ie.buildings||{},names:ie.names||{}});be.useEffect(()=>{ws.init().then(ie=>{ee(ie.profile),k(ie),b(ie.servers),A(ie.pools||{}),E(ie.caseCost||120);const de=ie.profile.units.find(Z=>Z.hp>0);de&&z(de.uid)}).catch(ie=>{console.warn("Сервер недоступен:",ie.message),ee(yA)})},[]),be.useEffect(()=>{n&&(nA(n,m.owners),_(ie=>ie+1))},[n,m]),be.useEffect(()=>{if(!c)return;const ie=setInterval(()=>{ws.state().then(de=>{ee(de.profile),k(de)}).catch(()=>{})},2e4);return()=>clearInterval(ie)},[!!c]),be.useEffect(()=>{const ie=setInterval(()=>K(Date.now()),500);return()=>clearInterval(ie)},[]),be.useEffect(()=>{const ie=()=>{BT(),window.removeEventListener("pointerdown",ie),window.removeEventListener("keydown",ie)};return window.addEventListener("pointerdown",ie),window.addEventListener("keydown",ie),()=>{window.removeEventListener("pointerdown",ie),window.removeEventListener("keydown",ie)}},[]);const F=be.useMemo(()=>n?tA(n):new Set,[n,x]),$=be.useMemo(()=>{if(!n)return[];const ie=[],de=(Z,De)=>Z<0||Z>=Ht||De<0||De>=ot?null:n[Z*ot+De];for(const Z of n){if(!Z.owner)continue;const De=li(Z.col,Z.row),Te=tc(Z)+.06,Re=de(Z.row-1,Z.col),R=de(Z.row+1,Z.col),M=de(Z.row,Z.col-1),B=de(Z.row,Z.col+1);(!Re||Re.owner!==Z.owner)&&ie.push({x:De.x,z:De.z-Qe/2,y:Te,vert:!1,owner:Z.owner}),(!R||R.owner!==Z.owner)&&ie.push({x:De.x,z:De.z+Qe/2,y:Te,vert:!1,owner:Z.owner}),(!M||M.owner!==Z.owner)&&ie.push({x:De.x-Qe/2,z:De.z,y:Te,vert:!0,owner:Z.owner}),(!B||B.owner!==Z.owner)&&ie.push({x:De.x+Qe/2,z:De.z,y:Te,vert:!0,owner:Z.owner})}return ie},[n,x]),ne=be.useMemo(()=>{if(!n)return[];const ie=[];for(const de of n){if(!F.has(de.id))continue;const Z=li(de.col,de.row);ie.push({x:Z.x,z:Z.z,y:tc(de)+.05})}return ie},[n,F,x]),xe=!!c&&c.owned.length===0,Ce=ie=>{if(Wn(),ie.owner&&ie.owner!=="me"){F.has(ie.id)?(ae(null),p(ie),g(null)):(ae(ie.owner),p(null));return}ae(null),p(ie),g(null)},we=async ie=>{if(!(!d||X)){Wn(),q(!0),g(null);try{const de=await ws.attack(d.id,ie);g(de.result),ee(de.profile);const Z=n.find(De=>De.id===d.id);de.owners[d.id]==="me"&&Z&&(Z.owner="me"),_(De=>De+1),p(Z?{...Z}:null)}catch(de){g({error:de.message})}q(!1)}},Ne=async ie=>{if(!(!d||X)){zT(),q(!0);try{const de=await ws.build(d.id,ie);ee(de.profile),v(Z=>({...Z,buildings:{...Z.buildings,[de.building.tileId]:{b:de.building.b,own:"me"}}}))}catch(de){g({error:de.message})}q(!1)}};if(!n)return W.jsx($m,{progress:r,text:r<55?"СОЗДАЁМ КАРТУ":"ВОЗВОДИМ ХРЕБТЫ"});const L=d?xe?!d.owner&&!St[d.type].impassable:F.has(d.id):!1,Ze=()=>{var Z,De,Te;const ie=(Z=c==null?void 0:c.owned)==null?void 0:Z[0],de=ie?n.find(Re=>Re.id===ie):null;if(de){const Re=li(de.col,de.row);(De=ve.current)==null||De.focus(Re.x,Re.z)}else(Te=ve.current)==null||Te.resetView()};return W.jsxs("div",{style:{position:"fixed",inset:0,background:Le.bg,color:Le.text,fontFamily:"-apple-system,system-ui,sans-serif",overflow:"hidden"},children:[W.jsx("style",{children:`
        *{border-radius:0!important}
        .panelx{background:rgba(7,12,16,.66);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(8px)}
        .btnx{background:transparent;border:1px solid rgba(255,255,255,.16);color:#e6eee8;text-transform:uppercase;letter-spacing:.12em;font-size:11px;font-weight:700;padding:10px 14px;cursor:pointer;transition:background .15s,border-color .15s,transform .05s;font-family:inherit}
        .btnx:hover{background:rgba(255,255,255,.08)}
        .btnx:active{transform:translateY(1px)}
        .btnx:disabled{opacity:.4;cursor:not-allowed}
        .btnx.gold{border-color:rgba(245,196,81,.55);color:#f5c451}
        .btnx.green{border-color:rgba(127,209,138,.55);color:#7fd18a}
        .btnx.red{border-color:rgba(239,68,68,.55);color:#ef4444}
        .lblx{font-size:10px;letter-spacing:.16em;color:#6f8277;text-transform:uppercase;font-weight:700}
        @keyframes sheetUp{from{transform:translateY(48px);opacity:0}to{transform:translateY(0);opacity:1}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes caseIn{from{transform:translateX(60px) scale(.9);opacity:0}to{transform:translateX(0) scale(1);opacity:1}}
        @keyframes cardPop{0%{transform:scale(.3) rotateY(90deg);opacity:0}60%{transform:scale(1.12);opacity:1}100%{transform:scale(1)}}
        input[type=range]{-webkit-appearance:none;appearance:none;height:2px;background:rgba(255,255,255,.25);outline:none}
        input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:12px;height:12px;background:#f5c451;cursor:pointer;border-radius:0}
      `}),W.jsxs("div",{style:{position:"absolute",inset:0,transform:t==="map"?"translateX(0)":"translateX(-100%)",transition:"transform .38s cubic-bezier(.22,.9,.3,1)"},children:[W.jsx(fA,{territories:n,reachable:F,selectedId:d==null?void 0:d.id,rev:x,borders:$,reach:ne,highlightOwner:J,active:t==="map",onProgress:u,onReady:()=>{u(100),a(!0)},onSelect:Ce,controlsRef:ve}),!o&&W.jsx($m,{progress:l,text:"ПОДГОТОВКА ОБЛАСТИ"}),c&&W.jsx(hA,{profile:c,supplyEta:y,now:D,onInv:()=>{Wn(),Y("inv")},onSound:()=>{Wn(),Y("sound")}}),J&&W.jsxs("div",{className:"panelx",style:{position:"absolute",top:56,left:"50%",transform:"translateX(-50%)",padding:"6px 14px",fontSize:11,zIndex:45,display:"flex",gap:10,alignItems:"center",whiteSpace:"nowrap",animation:"fadeIn .25s ease",letterSpacing:".08em"},children:["ИГРОК: ",m.names&&m.names[J]||"НЕИЗВЕСТЕН"," — ТЕРРИТОРИЯ ПОДСВЕЧЕНА",W.jsx("button",{className:"btnx red",onClick:()=>ae(null),style:{padding:"2px 8px"},children:"X"})]}),W.jsxs("div",{style:{position:"absolute",right:12,bottom:64,display:"flex",flexDirection:"column",gap:6},children:[W.jsx(Pu,{onClick:()=>{var ie;return(ie=ve.current)==null?void 0:ie.zoomBy(1.35)},children:"+"}),W.jsx(Pu,{onClick:()=>{var ie;return(ie=ve.current)==null?void 0:ie.zoomBy(1/1.35)},children:"−"}),W.jsx(Pu,{onClick:Ze,children:"⌂"})]}),d&&c&&W.jsx(mA,{t:d,building:m.buildings[d.id],profile:c,selUnit:O,setSelUnit:z,onAttack:we,onBuild:Ne,busy:X,onClose:()=>{p(null),g(null)},result:h,canInteract:L,freePlace:xe,ownerName:d.owner?m.names&&m.names[d.owner]||"ИГРОК":null}),j==="inv"&&c&&W.jsx(gA,{profile:c,onClose:()=>Y(null)}),j==="sound"&&W.jsx(vA,{onClose:()=>Y(null)})]}),W.jsx("div",{style:{position:"absolute",inset:0,transform:t==="menu"?"translateX(0)":"translateX(100%)",transition:"transform .38s cubic-bezier(.22,.9,.3,1)"},children:c&&W.jsx(xA,{profile:c,servers:S,pools:T,caseCost:C,onSync:ee,territories:n,overlay:m,onPick:(ie,de)=>{var Z;e("map"),(Z=ve.current)==null||Z.focus(ie,de)}})}),W.jsxs("div",{className:"panelx",style:{position:"absolute",bottom:14,left:"50%",transform:"translateX(-50%)",display:"flex",zIndex:65,background:"rgba(7,12,16,.6)"},children:[W.jsx("button",{className:"btnx",onClick:()=>{Wn(),e("map")},style:{border:"none",padding:"13px 30px",color:t==="map"?Le.gold:Le.text,background:t==="map"?"rgba(245,196,81,.08)":"transparent"},children:"Карта"}),W.jsx("div",{style:{width:1,background:"rgba(255,255,255,.14)"}}),W.jsx("button",{className:"btnx",onClick:()=>{Wn(),e("menu")},style:{border:"none",padding:"13px 30px",color:t==="menu"?Le.gold:Le.text,background:t==="menu"?"rgba(245,196,81,.08)":"transparent"},children:"Меню"}),W.jsx("div",{style:{position:"absolute",bottom:0,height:2,width:"50%",background:Le.gold,left:t==="map"?0:"50%",transition:"left .3s cubic-bezier(.22,.9,.3,1)"}})]})]})}lv(document.getElementById("root")).render(W.jsx(SA,{}));
