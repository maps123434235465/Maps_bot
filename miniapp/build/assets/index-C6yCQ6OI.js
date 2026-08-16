(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var zm={exports:{}},Xl={},Bm={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jo=Symbol.for("react.element"),H0=Symbol.for("react.portal"),V0=Symbol.for("react.fragment"),G0=Symbol.for("react.strict_mode"),W0=Symbol.for("react.profiler"),X0=Symbol.for("react.provider"),j0=Symbol.for("react.context"),Y0=Symbol.for("react.forward_ref"),$0=Symbol.for("react.suspense"),q0=Symbol.for("react.memo"),K0=Symbol.for("react.lazy"),vh=Symbol.iterator;function Z0(t){return t===null||typeof t!="object"?null:(t=vh&&t[vh]||t["@@iterator"],typeof t=="function"?t:null)}var Hm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vm=Object.assign,Gm={};function zs(t,e,n){this.props=t,this.context=e,this.refs=Gm,this.updater=n||Hm}zs.prototype.isReactComponent={};zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wm(){}Wm.prototype=zs.prototype;function Qf(t,e,n){this.props=t,this.context=e,this.refs=Gm,this.updater=n||Hm}var Jf=Qf.prototype=new Wm;Jf.constructor=Qf;Vm(Jf,zs.prototype);Jf.isPureReactComponent=!0;var xh=Array.isArray,Xm=Object.prototype.hasOwnProperty,ed={current:null},jm={key:!0,ref:!0,__self:!0,__source:!0};function Ym(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xm.call(e,i)&&!jm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:jo,type:t,key:s,ref:o,props:r,_owner:ed.current}}function Q0(t,e){return{$$typeof:jo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function td(t){return typeof t=="object"&&t!==null&&t.$$typeof===jo}function J0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yh=/\/+/g;function mu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?J0(""+t.key):e.toString(36)}function Xa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case jo:case H0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+mu(o,0):i,xh(r)?(n="",t!=null&&(n=t.replace(yh,"$&/")+"/"),Xa(r,e,n,"",function(u){return u})):r!=null&&(td(r)&&(r=Q0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(yh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",xh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+mu(s,a);o+=Xa(s,e,n,l,r)}else if(l=Z0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+mu(s,a++),o+=Xa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ra(t,e,n){if(t==null)return t;var i=[],r=0;return Xa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ev(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},ja={transition:null},tv={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:ja,ReactCurrentOwner:ed};function $m(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:ra,forEach:function(t,e,n){ra(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ra(t,function(){e++}),e},toArray:function(t){return ra(t,function(e){return e})||[]},only:function(t){if(!td(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=zs;Ge.Fragment=V0;Ge.Profiler=W0;Ge.PureComponent=Qf;Ge.StrictMode=G0;Ge.Suspense=$0;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tv;Ge.act=$m;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Vm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ed.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Xm.call(e,l)&&!jm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:jo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:j0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:X0,_context:t},t.Consumer=t};Ge.createElement=Ym;Ge.createFactory=function(t){var e=Ym.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:Y0,render:t}};Ge.isValidElement=td;Ge.lazy=function(t){return{$$typeof:K0,_payload:{_status:-1,_result:t},_init:ev}};Ge.memo=function(t,e){return{$$typeof:q0,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=ja.transition;ja.transition={};try{t()}finally{ja.transition=e}};Ge.unstable_act=$m;Ge.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Ge.useContext=function(t){return Qt.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Ge.useId=function(){return Qt.current.useId()};Ge.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Ge.useRef=function(t){return Qt.current.useRef(t)};Ge.useState=function(t){return Qt.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return Qt.current.useTransition()};Ge.version="18.3.1";Bm.exports=Ge;var He=Bm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv=He,iv=Symbol.for("react.element"),rv=Symbol.for("react.fragment"),sv=Object.prototype.hasOwnProperty,ov=nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,av={key:!0,ref:!0,__self:!0,__source:!0};function qm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)sv.call(e,i)&&!av.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:iv,type:t,key:s,ref:o,props:r,_owner:ov.current}}Xl.Fragment=rv;Xl.jsx=qm;Xl.jsxs=qm;zm.exports=Xl;var te=zm.exports,Km={exports:{}},Sn={},Zm={exports:{}},Qm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,F){var j=D.length;D.push(F);e:for(;0<j;){var Q=j-1>>>1,re=D[Q];if(0<r(re,F))D[Q]=F,D[j]=re,j=Q;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var F=D[0],j=D.pop();if(j!==F){D[0]=j;e:for(var Q=0,re=D.length,de=re>>>1;Q<de;){var I=2*(Q+1)-1,W=D[I],$=I+1,ee=D[$];if(0>r(W,j))$<re&&0>r(ee,W)?(D[Q]=ee,D[$]=j,Q=$):(D[Q]=W,D[I]=j,Q=I);else if($<re&&0>r(ee,j))D[Q]=ee,D[$]=j,Q=$;else break e}}return F}function r(D,F){var j=D.sortIndex-F.sortIndex;return j!==0?j:D.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,p=null,d=3,c=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var F=n(u);F!==null;){if(F.callback===null)i(u);else if(F.startTime<=D)i(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function S(D){if(x=!1,g(D),!v)if(n(l)!==null)v=!0,X(R);else{var F=n(u);F!==null&&K(S,F.startTime-D)}}function R(D,F){v=!1,x&&(x=!1,f(C),C=-1),c=!0;var j=d;try{for(g(F),p=n(l);p!==null&&(!(p.expirationTime>F)||D&&!b());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,d=p.priorityLevel;var re=Q(p.expirationTime<=F);F=t.unstable_now(),typeof re=="function"?p.callback=re:p===n(l)&&i(l),g(F)}else i(l);p=n(l)}if(p!==null)var de=!0;else{var I=n(u);I!==null&&K(S,I.startTime-F),de=!1}return de}finally{p=null,d=j,c=!1}}var A=!1,T=null,C=-1,E=5,y=-1;function b(){return!(t.unstable_now()-y<E)}function z(){if(T!==null){var D=t.unstable_now();y=D;var F=!0;try{F=T(!0,D)}finally{F?k():(A=!1,T=null)}}else A=!1}var k;if(typeof _=="function")k=function(){_(z)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,q=Y.port2;Y.port1.onmessage=z,k=function(){q.postMessage(null)}}else k=function(){m(z,0)};function X(D){T=D,A||(A=!0,k())}function K(D,F){C=m(function(){D(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||c||(v=!0,X(R))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var F=3;break;default:F=d}var j=d;d=F;try{return D()}finally{d=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,F){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var j=d;d=D;try{return F()}finally{d=j}},t.unstable_scheduleCallback=function(D,F,j){var Q=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Q+j:Q):j=Q,D){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=j+re,D={id:h++,callback:F,priorityLevel:D,startTime:j,expirationTime:re,sortIndex:-1},j>Q?(D.sortIndex=j,e(u,D),n(l)===null&&D===n(u)&&(x?(f(C),C=-1):x=!0,K(S,j-Q))):(D.sortIndex=re,e(l,D),v||c||(v=!0,X(R))),D},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(D){var F=d;return function(){var j=d;d=F;try{return D.apply(this,arguments)}finally{d=j}}}})(Qm);Zm.exports=Qm;var lv=Zm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv=He,yn=lv;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jm=new Set,Ao={};function Nr(t,e){Cs(t,e),Cs(t+"Capture",e)}function Cs(t,e){for(Ao[t]=e,t=0;t<e.length;t++)Jm.add(e[t])}var Si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xc=Object.prototype.hasOwnProperty,cv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sh={},Mh={};function fv(t){return xc.call(Mh,t)?!0:xc.call(Sh,t)?!1:cv.test(t)?Mh[t]=!0:(Sh[t]=!0,!1)}function dv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hv(t,e,n,i){if(e===null||typeof e>"u"||dv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var nd=/[\-:]([a-z])/g;function id(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nd,id);Ht[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nd,id);Ht[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nd,id);Ht[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function rd(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hv(e,n,r,i)&&(n=null),i||r===null?fv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ci=uv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=Symbol.for("react.element"),rs=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),sd=Symbol.for("react.strict_mode"),yc=Symbol.for("react.profiler"),eg=Symbol.for("react.provider"),tg=Symbol.for("react.context"),od=Symbol.for("react.forward_ref"),Sc=Symbol.for("react.suspense"),Mc=Symbol.for("react.suspense_list"),ad=Symbol.for("react.memo"),ki=Symbol.for("react.lazy"),ng=Symbol.for("react.offscreen"),Eh=Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=Eh&&t[Eh]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,gu;function lo(t){if(gu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gu=e&&e[1]||""}return`
`+gu+t}var _u=!1;function vu(t,e){if(!t||_u)return"";_u=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{_u=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?lo(t):""}function pv(t){switch(t.tag){case 5:return lo(t.type);case 16:return lo("Lazy");case 13:return lo("Suspense");case 19:return lo("SuspenseList");case 0:case 2:case 15:return t=vu(t.type,!1),t;case 11:return t=vu(t.type.render,!1),t;case 1:return t=vu(t.type,!0),t;default:return""}}function Ec(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ss:return"Fragment";case rs:return"Portal";case yc:return"Profiler";case sd:return"StrictMode";case Sc:return"Suspense";case Mc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tg:return(t.displayName||"Context")+".Consumer";case eg:return(t._context.displayName||"Context")+".Provider";case od:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ad:return e=t.displayName||null,e!==null?e:Ec(t.type)||"Memo";case ki:e=t._payload,t=t._init;try{return Ec(t(e))}catch{}}return null}function mv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ec(e);case 8:return e===sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ig(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gv(t){var e=ig(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function oa(t){t._valueTracker||(t._valueTracker=gv(t))}function rg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ig(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wc(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sg(t,e){e=e.checked,e!=null&&rd(t,"checked",e,!1)}function Tc(t,e){sg(t,e);var n=tr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ac(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ac(t,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Th(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ac(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var uo=Array.isArray;function _s(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+tr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Cc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ah(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(uo(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tr(n)}}function og(t,e){var n=tr(e.value),i=tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ch(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ag(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ag(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var aa,lg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(aa=aa||document.createElement("div"),aa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=aa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_v=["Webkit","ms","Moz","O"];Object.keys(mo).forEach(function(t){_v.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),mo[e]=mo[t]})});function ug(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||mo.hasOwnProperty(t)&&mo[t]?(""+e).trim():e+"px"}function cg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ug(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var vv=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pc(t,e){if(e){if(vv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function bc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lc=null;function ld(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dc=null,vs=null,xs=null;function Rh(t){if(t=qo(t)){if(typeof Dc!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Kl(e),Dc(t.stateNode,t.type,e))}}function fg(t){vs?xs?xs.push(t):xs=[t]:vs=t}function dg(){if(vs){var t=vs,e=xs;if(xs=vs=null,Rh(t),e)for(t=0;t<e.length;t++)Rh(e[t])}}function hg(t,e){return t(e)}function pg(){}var xu=!1;function mg(t,e,n){if(xu)return t(e,n);xu=!0;try{return hg(t,e,n)}finally{xu=!1,(vs!==null||xs!==null)&&(pg(),dg())}}function Ro(t,e){var n=t.stateNode;if(n===null)return null;var i=Kl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Ic=!1;if(Si)try{var js={};Object.defineProperty(js,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{Ic=!1}function xv(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var go=!1,dl=null,hl=!1,Uc=null,yv={onError:function(t){go=!0,dl=t}};function Sv(t,e,n,i,r,s,o,a,l){go=!1,dl=null,xv.apply(yv,arguments)}function Mv(t,e,n,i,r,s,o,a,l){if(Sv.apply(this,arguments),go){if(go){var u=dl;go=!1,dl=null}else throw Error(se(198));hl||(hl=!0,Uc=u)}}function Fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ph(t){if(Fr(t)!==t)throw Error(se(188))}function Ev(t){var e=t.alternate;if(!e){if(e=Fr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ph(r),t;if(s===i)return Ph(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function _g(t){return t=Ev(t),t!==null?vg(t):null}function vg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vg(t);if(e!==null)return e;t=t.sibling}return null}var xg=yn.unstable_scheduleCallback,bh=yn.unstable_cancelCallback,wv=yn.unstable_shouldYield,Tv=yn.unstable_requestPaint,yt=yn.unstable_now,Av=yn.unstable_getCurrentPriorityLevel,ud=yn.unstable_ImmediatePriority,yg=yn.unstable_UserBlockingPriority,pl=yn.unstable_NormalPriority,Cv=yn.unstable_LowPriority,Sg=yn.unstable_IdlePriority,jl=null,ii=null;function Rv(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:Lv,Pv=Math.log,bv=Math.LN2;function Lv(t){return t>>>=0,t===0?32:31-(Pv(t)/bv|0)|0}var la=64,ua=4194304;function co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=co(a):(s&=o,s!==0&&(i=co(s)))}else o=n&~r,o!==0?i=co(o):s!==0&&(i=co(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function Dv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Dv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Nc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mg(){var t=la;return la<<=1,!(la&4194240)&&(la=64),t}function yu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Yo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function Uv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function cd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function Eg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wg,fd,Tg,Ag,Cg,Fc=!1,ca=[],Xi=null,ji=null,Yi=null,Po=new Map,bo=new Map,Bi=[],Nv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lh(t,e){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":Po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(e.pointerId)}}function Ys(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=qo(e),e!==null&&fd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Fv(t,e,n,i,r){switch(e){case"focusin":return Xi=Ys(Xi,t,e,n,i,r),!0;case"dragenter":return ji=Ys(ji,t,e,n,i,r),!0;case"mouseover":return Yi=Ys(Yi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Po.set(s,Ys(Po.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,bo.set(s,Ys(bo.get(s)||null,t,e,n,i,r)),!0}return!1}function Rg(t){var e=Sr(t.target);if(e!==null){var n=Fr(e);if(n!==null){if(e=n.tag,e===13){if(e=gg(n),e!==null){t.blockedOn=e,Cg(t.priority,function(){Tg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Oc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Lc=i,n.target.dispatchEvent(i),Lc=null}else return e=qo(n),e!==null&&fd(e),t.blockedOn=n,!1;e.shift()}return!0}function Dh(t,e,n){Ya(t)&&n.delete(e)}function Ov(){Fc=!1,Xi!==null&&Ya(Xi)&&(Xi=null),ji!==null&&Ya(ji)&&(ji=null),Yi!==null&&Ya(Yi)&&(Yi=null),Po.forEach(Dh),bo.forEach(Dh)}function $s(t,e){t.blockedOn===e&&(t.blockedOn=null,Fc||(Fc=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,Ov)))}function Lo(t){function e(r){return $s(r,t)}if(0<ca.length){$s(ca[0],t);for(var n=1;n<ca.length;n++){var i=ca[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Xi!==null&&$s(Xi,t),ji!==null&&$s(ji,t),Yi!==null&&$s(Yi,t),Po.forEach(e),bo.forEach(e),n=0;n<Bi.length;n++)i=Bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Bi.length&&(n=Bi[0],n.blockedOn===null);)Rg(n),n.blockedOn===null&&Bi.shift()}var ys=Ci.ReactCurrentBatchConfig,gl=!0;function kv(t,e,n,i){var r=tt,s=ys.transition;ys.transition=null;try{tt=1,dd(t,e,n,i)}finally{tt=r,ys.transition=s}}function zv(t,e,n,i){var r=tt,s=ys.transition;ys.transition=null;try{tt=4,dd(t,e,n,i)}finally{tt=r,ys.transition=s}}function dd(t,e,n,i){if(gl){var r=Oc(t,e,n,i);if(r===null)bu(t,e,i,_l,n),Lh(t,i);else if(Fv(r,t,e,n,i))i.stopPropagation();else if(Lh(t,i),e&4&&-1<Nv.indexOf(t)){for(;r!==null;){var s=qo(r);if(s!==null&&wg(s),s=Oc(t,e,n,i),s===null&&bu(t,e,i,_l,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else bu(t,e,i,null,n)}}var _l=null;function Oc(t,e,n,i){if(_l=null,t=ld(i),t=Sr(t),t!==null)if(e=Fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _l=t,null}function Pg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Av()){case ud:return 1;case yg:return 4;case pl:case Cv:return 16;case Sg:return 536870912;default:return 16}default:return 16}}var Gi=null,hd=null,$a=null;function bg(){if($a)return $a;var t,e=hd,n=e.length,i,r="value"in Gi?Gi.value:Gi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return $a=r.slice(t,1<i?1-i:void 0)}function qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fa(){return!0}function Ih(){return!1}function Mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fa:Ih,this.isPropagationStopped=Ih,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fa)},persist:function(){},isPersistent:fa}),e}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pd=Mn(Bs),$o=mt({},Bs,{view:0,detail:0}),Bv=Mn($o),Su,Mu,qs,Yl=mt({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:md,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(Su=t.screenX-qs.screenX,Mu=t.screenY-qs.screenY):Mu=Su=0,qs=t),Su)},movementY:function(t){return"movementY"in t?t.movementY:Mu}}),Uh=Mn(Yl),Hv=mt({},Yl,{dataTransfer:0}),Vv=Mn(Hv),Gv=mt({},$o,{relatedTarget:0}),Eu=Mn(Gv),Wv=mt({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),Xv=Mn(Wv),jv=mt({},Bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yv=Mn(jv),$v=mt({},Bs,{data:0}),Nh=Mn($v),qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Zv[t])?!!e[t]:!1}function md(){return Qv}var Jv=mt({},$o,{key:function(t){if(t.key){var e=qv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:md,charCode:function(t){return t.type==="keypress"?qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ex=Mn(Jv),tx=mt({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fh=Mn(tx),nx=mt({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:md}),ix=Mn(nx),rx=mt({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=Mn(rx),ox=mt({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ax=Mn(ox),lx=[9,13,27,32],gd=Si&&"CompositionEvent"in window,_o=null;Si&&"documentMode"in document&&(_o=document.documentMode);var ux=Si&&"TextEvent"in window&&!_o,Lg=Si&&(!gd||_o&&8<_o&&11>=_o),Oh=" ",kh=!1;function Dg(t,e){switch(t){case"keyup":return lx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ig(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function cx(t,e){switch(t){case"compositionend":return Ig(e);case"keypress":return e.which!==32?null:(kh=!0,Oh);case"textInput":return t=e.data,t===Oh&&kh?null:t;default:return null}}function fx(t,e){if(os)return t==="compositionend"||!gd&&Dg(t,e)?(t=bg(),$a=hd=Gi=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lg&&e.locale!=="ko"?null:e.data;default:return null}}var dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dx[t.type]:e==="textarea"}function Ug(t,e,n,i){fg(i),e=vl(e,"onChange"),0<e.length&&(n=new pd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var vo=null,Do=null;function hx(t){Xg(t,0)}function $l(t){var e=us(t);if(rg(e))return t}function px(t,e){if(t==="change")return e}var Ng=!1;if(Si){var wu;if(Si){var Tu="oninput"in document;if(!Tu){var Bh=document.createElement("div");Bh.setAttribute("oninput","return;"),Tu=typeof Bh.oninput=="function"}wu=Tu}else wu=!1;Ng=wu&&(!document.documentMode||9<document.documentMode)}function Hh(){vo&&(vo.detachEvent("onpropertychange",Fg),Do=vo=null)}function Fg(t){if(t.propertyName==="value"&&$l(Do)){var e=[];Ug(e,Do,t,ld(t)),mg(hx,e)}}function mx(t,e,n){t==="focusin"?(Hh(),vo=e,Do=n,vo.attachEvent("onpropertychange",Fg)):t==="focusout"&&Hh()}function gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $l(Do)}function _x(t,e){if(t==="click")return $l(e)}function vx(t,e){if(t==="input"||t==="change")return $l(e)}function xx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:xx;function Io(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!xc.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function Vh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gh(t,e){var n=Vh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vh(n)}}function Og(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Og(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kg(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function _d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yx(t){var e=kg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Og(n.ownerDocument.documentElement,n)){if(i!==null&&_d(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Gh(n,s);var o=Gh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Sx=Si&&"documentMode"in document&&11>=document.documentMode,as=null,kc=null,xo=null,zc=!1;function Wh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zc||as==null||as!==fl(i)||(i=as,"selectionStart"in i&&_d(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),xo&&Io(xo,i)||(xo=i,i=vl(kc,"onSelect"),0<i.length&&(e=new pd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=as)))}function da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ls={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},Au={},zg={};Si&&(zg=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function ql(t){if(Au[t])return Au[t];if(!ls[t])return t;var e=ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zg)return Au[t]=e[n];return t}var Bg=ql("animationend"),Hg=ql("animationiteration"),Vg=ql("animationstart"),Gg=ql("transitionend"),Wg=new Map,Xh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){Wg.set(t,e),Nr(e,[t])}for(var Cu=0;Cu<Xh.length;Cu++){var Ru=Xh[Cu],Mx=Ru.toLowerCase(),Ex=Ru[0].toUpperCase()+Ru.slice(1);rr(Mx,"on"+Ex)}rr(Bg,"onAnimationEnd");rr(Hg,"onAnimationIteration");rr(Vg,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(Gg,"onTransitionEnd");Cs("onMouseEnter",["mouseout","mouseover"]);Cs("onMouseLeave",["mouseout","mouseover"]);Cs("onPointerEnter",["pointerout","pointerover"]);Cs("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wx=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function jh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Mv(i,e,void 0,t),t.currentTarget=null}function Xg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;jh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;jh(r,a,u),s=l}}}if(hl)throw t=Uc,hl=!1,Uc=null,t}function it(t,e){var n=e[Wc];n===void 0&&(n=e[Wc]=new Set);var i=t+"__bubble";n.has(i)||(jg(e,t,2,!1),n.add(i))}function Pu(t,e,n){var i=0;e&&(i|=4),jg(n,t,i,e)}var ha="_reactListening"+Math.random().toString(36).slice(2);function Uo(t){if(!t[ha]){t[ha]=!0,Jm.forEach(function(n){n!=="selectionchange"&&(wx.has(n)||Pu(n,!1,t),Pu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ha]||(e[ha]=!0,Pu("selectionchange",!1,e))}}function jg(t,e,n,i){switch(Pg(e)){case 1:var r=kv;break;case 4:r=zv;break;default:r=dd}n=r.bind(null,e,n,t),r=void 0,!Ic||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function bu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Sr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}mg(function(){var u=s,h=ld(n),p=[];e:{var d=Wg.get(t);if(d!==void 0){var c=pd,v=t;switch(t){case"keypress":if(qa(n)===0)break e;case"keydown":case"keyup":c=ex;break;case"focusin":v="focus",c=Eu;break;case"focusout":v="blur",c=Eu;break;case"beforeblur":case"afterblur":c=Eu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=Uh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=Vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=ix;break;case Bg:case Hg:case Vg:c=Xv;break;case Gg:c=sx;break;case"scroll":c=Bv;break;case"wheel":c=ax;break;case"copy":case"cut":case"paste":c=Yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=Fh}var x=(e&4)!==0,m=!x&&t==="scroll",f=x?d!==null?d+"Capture":null:d;x=[];for(var _=u,g;_!==null;){g=_;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,f!==null&&(S=Ro(_,f),S!=null&&x.push(No(_,S,g)))),m)break;_=_.return}0<x.length&&(d=new c(d,v,null,n,h),p.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",c=t==="mouseout"||t==="pointerout",d&&n!==Lc&&(v=n.relatedTarget||n.fromElement)&&(Sr(v)||v[Mi]))break e;if((c||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,c?(v=n.relatedTarget||n.toElement,c=u,v=v?Sr(v):null,v!==null&&(m=Fr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(c=null,v=u),c!==v)){if(x=Uh,S="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Fh,S="onPointerLeave",f="onPointerEnter",_="pointer"),m=c==null?d:us(c),g=v==null?d:us(v),d=new x(S,_+"leave",c,n,h),d.target=m,d.relatedTarget=g,S=null,Sr(h)===u&&(x=new x(f,_+"enter",v,n,h),x.target=g,x.relatedTarget=m,S=x),m=S,c&&v)t:{for(x=c,f=v,_=0,g=x;g;g=zr(g))_++;for(g=0,S=f;S;S=zr(S))g++;for(;0<_-g;)x=zr(x),_--;for(;0<g-_;)f=zr(f),g--;for(;_--;){if(x===f||f!==null&&x===f.alternate)break t;x=zr(x),f=zr(f)}x=null}else x=null;c!==null&&Yh(p,d,c,x,!1),v!==null&&m!==null&&Yh(p,m,v,x,!0)}}e:{if(d=u?us(u):window,c=d.nodeName&&d.nodeName.toLowerCase(),c==="select"||c==="input"&&d.type==="file")var R=px;else if(zh(d))if(Ng)R=vx;else{R=gx;var A=mx}else(c=d.nodeName)&&c.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=_x);if(R&&(R=R(t,u))){Ug(p,R,n,h);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Ac(d,"number",d.value)}switch(A=u?us(u):window,t){case"focusin":(zh(A)||A.contentEditable==="true")&&(as=A,kc=u,xo=null);break;case"focusout":xo=kc=as=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,Wh(p,n,h);break;case"selectionchange":if(Sx)break;case"keydown":case"keyup":Wh(p,n,h)}var T;if(gd)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else os?Dg(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Lg&&n.locale!=="ko"&&(os||C!=="onCompositionStart"?C==="onCompositionEnd"&&os&&(T=bg()):(Gi=h,hd="value"in Gi?Gi.value:Gi.textContent,os=!0)),A=vl(u,C),0<A.length&&(C=new Nh(C,t,null,n,h),p.push({event:C,listeners:A}),T?C.data=T:(T=Ig(n),T!==null&&(C.data=T)))),(T=ux?cx(t,n):fx(t,n))&&(u=vl(u,"onBeforeInput"),0<u.length&&(h=new Nh("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=T))}Xg(p,e)})}function No(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ro(t,n),s!=null&&i.unshift(No(t,s,r)),s=Ro(t,e),s!=null&&i.push(No(t,s,r))),t=t.return}return i}function zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ro(n,s),l!=null&&o.unshift(No(n,l,a))):r||(l=Ro(n,s),l!=null&&o.push(No(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Tx=/\r\n?/g,Ax=/\u0000|\uFFFD/g;function $h(t){return(typeof t=="string"?t:""+t).replace(Tx,`
`).replace(Ax,"")}function pa(t,e,n){if(e=$h(e),$h(t)!==e&&n)throw Error(se(425))}function xl(){}var Bc=null,Hc=null;function Vc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,Cx=typeof clearTimeout=="function"?clearTimeout:void 0,qh=typeof Promise=="function"?Promise:void 0,Rx=typeof queueMicrotask=="function"?queueMicrotask:typeof qh<"u"?function(t){return qh.resolve(null).then(t).catch(Px)}:Gc;function Px(t){setTimeout(function(){throw t})}function Lu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Lo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Lo(e)}function $i(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Hs,Fo="__reactProps$"+Hs,Mi="__reactContainer$"+Hs,Wc="__reactEvents$"+Hs,bx="__reactListeners$"+Hs,Lx="__reactHandles$"+Hs;function Sr(t){var e=t[Jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mi]||n[Jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kh(t);t!==null;){if(n=t[Jn])return n;t=Kh(t)}return e}t=n,n=t.parentNode}return null}function qo(t){return t=t[Jn]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Kl(t){return t[Fo]||null}var Xc=[],cs=-1;function sr(t){return{current:t}}function st(t){0>cs||(t.current=Xc[cs],Xc[cs]=null,cs--)}function nt(t,e){cs++,Xc[cs]=t.current,t.current=e}var nr={},Yt=sr(nr),on=sr(!1),Rr=nr;function Rs(t,e){var n=t.type.contextTypes;if(!n)return nr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function yl(){st(on),st(Yt)}function Zh(t,e,n){if(Yt.current!==nr)throw Error(se(168));nt(Yt,e),nt(on,n)}function Yg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,mv(t)||"Unknown",r));return mt({},n,i)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Rr=Yt.current,nt(Yt,t),nt(on,on.current),!0}function Qh(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Yg(t,e,Rr),i.__reactInternalMemoizedMergedChildContext=t,st(on),st(Yt),nt(Yt,t)):st(on),nt(on,n)}var mi=null,Zl=!1,Du=!1;function $g(t){mi===null?mi=[t]:mi.push(t)}function Dx(t){Zl=!0,$g(t)}function or(){if(!Du&&mi!==null){Du=!0;var t=0,e=tt;try{var n=mi;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}mi=null,Zl=!1}catch(r){throw mi!==null&&(mi=mi.slice(t+1)),xg(ud,or),r}finally{tt=e,Du=!1}}return null}var fs=[],ds=0,Ml=null,El=0,An=[],Cn=0,Pr=null,_i=1,vi="";function mr(t,e){fs[ds++]=El,fs[ds++]=Ml,Ml=t,El=e}function qg(t,e,n){An[Cn++]=_i,An[Cn++]=vi,An[Cn++]=Pr,Pr=t;var i=_i;t=vi;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,_i=1<<32-Xn(e)+r|n<<r|i,vi=s+t}else _i=1<<s|n<<r|i,vi=t}function vd(t){t.return!==null&&(mr(t,1),qg(t,1,0))}function xd(t){for(;t===Ml;)Ml=fs[--ds],fs[ds]=null,El=fs[--ds],fs[ds]=null;for(;t===Pr;)Pr=An[--Cn],An[Cn]=null,vi=An[--Cn],An[Cn]=null,_i=An[--Cn],An[Cn]=null}var vn=null,gn=null,lt=!1,Vn=null;function Kg(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,gn=$i(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:_i,overflow:vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,gn=null,!0):!1;default:return!1}}function jc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yc(t){if(lt){var e=gn;if(e){var n=e;if(!Jh(t,e)){if(jc(t))throw Error(se(418));e=$i(n.nextSibling);var i=vn;e&&Jh(t,e)?Kg(i,n):(t.flags=t.flags&-4097|2,lt=!1,vn=t)}}else{if(jc(t))throw Error(se(418));t.flags=t.flags&-4097|2,lt=!1,vn=t}}}function ep(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function ma(t){if(t!==vn)return!1;if(!lt)return ep(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vc(t.type,t.memoizedProps)),e&&(e=gn)){if(jc(t))throw Zg(),Error(se(418));for(;e;)Kg(t,e),e=$i(e.nextSibling)}if(ep(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=$i(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=vn?$i(t.stateNode.nextSibling):null;return!0}function Zg(){for(var t=gn;t;)t=$i(t.nextSibling)}function Ps(){gn=vn=null,lt=!1}function yd(t){Vn===null?Vn=[t]:Vn.push(t)}var Ix=Ci.ReactCurrentBatchConfig;function Ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function ga(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function tp(t){var e=t._init;return e(t._payload)}function Qg(t){function e(f,_){if(t){var g=f.deletions;g===null?(f.deletions=[_],f.flags|=16):g.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=Qi(f,_),f.index=0,f.sibling=null,f}function s(f,_,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<_?(f.flags|=2,_):g):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,g,S){return _===null||_.tag!==6?(_=zu(g,f.mode,S),_.return=f,_):(_=r(_,g),_.return=f,_)}function l(f,_,g,S){var R=g.type;return R===ss?h(f,_,g.props.children,S,g.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ki&&tp(R)===_.type)?(S=r(_,g.props),S.ref=Ks(f,_,g),S.return=f,S):(S=nl(g.type,g.key,g.props,null,f.mode,S),S.ref=Ks(f,_,g),S.return=f,S)}function u(f,_,g,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Bu(g,f.mode,S),_.return=f,_):(_=r(_,g.children||[]),_.return=f,_)}function h(f,_,g,S,R){return _===null||_.tag!==7?(_=Cr(g,f.mode,S,R),_.return=f,_):(_=r(_,g),_.return=f,_)}function p(f,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=zu(""+_,f.mode,g),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case sa:return g=nl(_.type,_.key,_.props,null,f.mode,g),g.ref=Ks(f,null,_),g.return=f,g;case rs:return _=Bu(_,f.mode,g),_.return=f,_;case ki:var S=_._init;return p(f,S(_._payload),g)}if(uo(_)||Xs(_))return _=Cr(_,f.mode,g,null),_.return=f,_;ga(f,_)}return null}function d(f,_,g,S){var R=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:a(f,_,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case sa:return g.key===R?l(f,_,g,S):null;case rs:return g.key===R?u(f,_,g,S):null;case ki:return R=g._init,d(f,_,R(g._payload),S)}if(uo(g)||Xs(g))return R!==null?null:h(f,_,g,S,null);ga(f,g)}return null}function c(f,_,g,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(g)||null,a(_,f,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case sa:return f=f.get(S.key===null?g:S.key)||null,l(_,f,S,R);case rs:return f=f.get(S.key===null?g:S.key)||null,u(_,f,S,R);case ki:var A=S._init;return c(f,_,g,A(S._payload),R)}if(uo(S)||Xs(S))return f=f.get(g)||null,h(_,f,S,R,null);ga(_,S)}return null}function v(f,_,g,S){for(var R=null,A=null,T=_,C=_=0,E=null;T!==null&&C<g.length;C++){T.index>C?(E=T,T=null):E=T.sibling;var y=d(f,T,g[C],S);if(y===null){T===null&&(T=E);break}t&&T&&y.alternate===null&&e(f,T),_=s(y,_,C),A===null?R=y:A.sibling=y,A=y,T=E}if(C===g.length)return n(f,T),lt&&mr(f,C),R;if(T===null){for(;C<g.length;C++)T=p(f,g[C],S),T!==null&&(_=s(T,_,C),A===null?R=T:A.sibling=T,A=T);return lt&&mr(f,C),R}for(T=i(f,T);C<g.length;C++)E=c(T,f,C,g[C],S),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?C:E.key),_=s(E,_,C),A===null?R=E:A.sibling=E,A=E);return t&&T.forEach(function(b){return e(f,b)}),lt&&mr(f,C),R}function x(f,_,g,S){var R=Xs(g);if(typeof R!="function")throw Error(se(150));if(g=R.call(g),g==null)throw Error(se(151));for(var A=R=null,T=_,C=_=0,E=null,y=g.next();T!==null&&!y.done;C++,y=g.next()){T.index>C?(E=T,T=null):E=T.sibling;var b=d(f,T,y.value,S);if(b===null){T===null&&(T=E);break}t&&T&&b.alternate===null&&e(f,T),_=s(b,_,C),A===null?R=b:A.sibling=b,A=b,T=E}if(y.done)return n(f,T),lt&&mr(f,C),R;if(T===null){for(;!y.done;C++,y=g.next())y=p(f,y.value,S),y!==null&&(_=s(y,_,C),A===null?R=y:A.sibling=y,A=y);return lt&&mr(f,C),R}for(T=i(f,T);!y.done;C++,y=g.next())y=c(T,f,C,y.value,S),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?C:y.key),_=s(y,_,C),A===null?R=y:A.sibling=y,A=y);return t&&T.forEach(function(z){return e(f,z)}),lt&&mr(f,C),R}function m(f,_,g,S){if(typeof g=="object"&&g!==null&&g.type===ss&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case sa:e:{for(var R=g.key,A=_;A!==null;){if(A.key===R){if(R=g.type,R===ss){if(A.tag===7){n(f,A.sibling),_=r(A,g.props.children),_.return=f,f=_;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ki&&tp(R)===A.type){n(f,A.sibling),_=r(A,g.props),_.ref=Ks(f,A,g),_.return=f,f=_;break e}n(f,A);break}else e(f,A);A=A.sibling}g.type===ss?(_=Cr(g.props.children,f.mode,S,g.key),_.return=f,f=_):(S=nl(g.type,g.key,g.props,null,f.mode,S),S.ref=Ks(f,_,g),S.return=f,f=S)}return o(f);case rs:e:{for(A=g.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(f,_.sibling),_=r(_,g.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=Bu(g,f.mode,S),_.return=f,f=_}return o(f);case ki:return A=g._init,m(f,_,A(g._payload),S)}if(uo(g))return v(f,_,g,S);if(Xs(g))return x(f,_,g,S);ga(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,g),_.return=f,f=_):(n(f,_),_=zu(g,f.mode,S),_.return=f,f=_),o(f)):n(f,_)}return m}var bs=Qg(!0),Jg=Qg(!1),wl=sr(null),Tl=null,hs=null,Sd=null;function Md(){Sd=hs=Tl=null}function Ed(t){var e=wl.current;st(wl),t._currentValue=e}function $c(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){Tl=t,Sd=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(Sd!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(Tl===null)throw Error(se(308));hs=t,Tl.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var Mr=null;function wd(t){Mr===null?Mr=[t]:Mr.push(t)}function e_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,wd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zi=!1;function Td(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function t_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,wd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function Ka(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cd(t,n)}}function np(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Al(t,e,n,i){var r=t.updateQueue;zi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,h=u=l=null,a=s;do{var d=a.lane,c=a.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:c,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(d=e,c=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){p=v.call(c,p,d);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,d=typeof v=="function"?v.call(c,p,d):v,d==null)break e;p=mt({},p,d);break e;case 2:zi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else c={eventTime:c,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=c,l=p):h=h.next=c,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Lr|=o,t.lanes=o,t.memoizedState=p}}function ip(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Ko={},ri=sr(Ko),Oo=sr(Ko),ko=sr(Ko);function Er(t){if(t===Ko)throw Error(se(174));return t}function Ad(t,e){switch(nt(ko,e),nt(Oo,t),nt(ri,Ko),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rc(e,t)}st(ri),nt(ri,e)}function Ls(){st(ri),st(Oo),st(ko)}function n_(t){Er(ko.current);var e=Er(ri.current),n=Rc(e,t.type);e!==n&&(nt(Oo,t),nt(ri,n))}function Cd(t){Oo.current===t&&(st(ri),st(Oo))}var ht=sr(0);function Cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Iu=[];function Rd(){for(var t=0;t<Iu.length;t++)Iu[t]._workInProgressVersionPrimary=null;Iu.length=0}var Za=Ci.ReactCurrentDispatcher,Uu=Ci.ReactCurrentBatchConfig,br=0,pt=null,At=null,Nt=null,Rl=!1,yo=!1,zo=0,Ux=0;function Vt(){throw Error(se(321))}function Pd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function bd(t,e,n,i,r,s){if(br=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Za.current=t===null||t.memoizedState===null?kx:zx,t=n(i,r),yo){s=0;do{if(yo=!1,zo=0,25<=s)throw Error(se(301));s+=1,Nt=At=null,e.updateQueue=null,Za.current=Bx,t=n(i,r)}while(yo)}if(Za.current=Pl,e=At!==null&&At.next!==null,br=0,Nt=At=pt=null,Rl=!1,e)throw Error(se(300));return t}function Ld(){var t=zo!==0;return zo=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?pt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Dn(){if(At===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Nt===null?pt.memoizedState:Nt.next;if(e!==null)Nt=e,At=t;else{if(t===null)throw Error(se(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Nt===null?pt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Bo(t,e){return typeof e=="function"?e(t):e}function Nu(t){var e=Dn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((br&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,pt.lanes|=h,Lr|=h}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,$n(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,Lr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fu(t){var e=Dn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);$n(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function i_(){}function r_(t,e){var n=pt,i=Dn(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,Dd(a_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Ho(9,o_.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(se(349));br&30||s_(n,e,r)}return r}function s_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function o_(t,e,n,i){e.value=n,e.getSnapshot=i,l_(e)&&u_(t)}function a_(t,e,n){return n(function(){l_(e)&&u_(t)})}function l_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function u_(t){var e=Ei(t,1);e!==null&&jn(e,t,1,-1)}function rp(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:t},e.queue=t,t=t.dispatch=Ox.bind(null,pt,t),[e.memoizedState,t]}function Ho(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function c_(){return Dn().memoizedState}function Qa(t,e,n,i){var r=Zn();pt.flags|=t,r.memoizedState=Ho(1|e,n,void 0,i===void 0?null:i)}function Ql(t,e,n,i){var r=Dn();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&Pd(i,o.deps)){r.memoizedState=Ho(e,n,s,i);return}}pt.flags|=t,r.memoizedState=Ho(1|e,n,s,i)}function sp(t,e){return Qa(8390656,8,t,e)}function Dd(t,e){return Ql(2048,8,t,e)}function f_(t,e){return Ql(4,2,t,e)}function d_(t,e){return Ql(4,4,t,e)}function h_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function p_(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4,4,h_.bind(null,e,t),n)}function Id(){}function m_(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Pd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function g_(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Pd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function __(t,e,n){return br&21?($n(n,e)||(n=Mg(),pt.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function Nx(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=Uu.transition;Uu.transition={};try{t(!1),e()}finally{tt=n,Uu.transition=i}}function v_(){return Dn().memoizedState}function Fx(t,e,n){var i=Zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},x_(t))y_(e,n);else if(n=e_(t,e,n,i),n!==null){var r=Kt();jn(n,t,i,r),S_(n,e,i)}}function Ox(t,e,n){var i=Zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(x_(t))y_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,$n(a,o)){var l=e.interleaved;l===null?(r.next=r,wd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=e_(t,e,r,i),n!==null&&(r=Kt(),jn(n,t,i,r),S_(n,e,i))}}function x_(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function y_(t,e){yo=Rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function S_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cd(t,n)}}var Pl={readContext:Ln,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},kx={readContext:Ln,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:sp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qa(4194308,4,h_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qa(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Fx.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:rp,useDebugValue:Id,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=rp(!1),e=t[0];return t=Nx.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=Zn();if(lt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Ft===null)throw Error(se(349));br&30||s_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,sp(a_.bind(null,i,s,t),[t]),i.flags|=2048,Ho(9,o_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=Ft.identifierPrefix;if(lt){var n=vi,i=_i;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ux++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zx={readContext:Ln,useCallback:m_,useContext:Ln,useEffect:Dd,useImperativeHandle:p_,useInsertionEffect:f_,useLayoutEffect:d_,useMemo:g_,useReducer:Nu,useRef:c_,useState:function(){return Nu(Bo)},useDebugValue:Id,useDeferredValue:function(t){var e=Dn();return __(e,At.memoizedState,t)},useTransition:function(){var t=Nu(Bo)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:i_,useSyncExternalStore:r_,useId:v_,unstable_isNewReconciler:!1},Bx={readContext:Ln,useCallback:m_,useContext:Ln,useEffect:Dd,useImperativeHandle:p_,useInsertionEffect:f_,useLayoutEffect:d_,useMemo:g_,useReducer:Fu,useRef:c_,useState:function(){return Fu(Bo)},useDebugValue:Id,useDeferredValue:function(t){var e=Dn();return At===null?e.memoizedState=t:__(e,At.memoizedState,t)},useTransition:function(){var t=Fu(Bo)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:i_,useSyncExternalStore:r_,useId:v_,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jl={isMounted:function(t){return(t=t._reactInternals)?Fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Zi(t),s=yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=qi(t,s,r),e!==null&&(jn(e,t,r,i),Ka(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Zi(t),s=yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qi(t,s,r),e!==null&&(jn(e,t,r,i),Ka(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=Zi(t),r=yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=qi(t,r,i),e!==null&&(jn(e,t,i,n),Ka(e,t,i))}};function op(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Io(n,i)||!Io(r,s):!0}function M_(t,e,n){var i=!1,r=nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(r=an(e)?Rr:Yt.current,i=e.contextTypes,s=(i=i!=null)?Rs(t,r):nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ap(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Jl.enqueueReplaceState(e,e.state,null)}function Kc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Td(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ln(s):(s=an(e)?Rr:Yt.current,r.context=Rs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jl.enqueueReplaceState(r,r.state,null),Al(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ds(t,e){try{var n="",i=e;do n+=pv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ou(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Hx=typeof WeakMap=="function"?WeakMap:Map;function E_(t,e,n){n=yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ll||(Ll=!0,lf=i),Zc(t,e)},n}function w_(t,e,n){n=yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Zc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zc(t,e),typeof i!="function"&&(Ki===null?Ki=new Set([this]):Ki.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function lp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Hx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ty.bind(null,t,e,n),e.then(t,t))}function up(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yi(-1,1),e.tag=2,qi(n,e,1))),n.lanes|=1),t)}var Vx=Ci.ReactCurrentOwner,rn=!1;function qt(t,e,n,i){e.child=t===null?Jg(e,null,n,i):bs(e,t.child,n,i)}function fp(t,e,n,i,r){n=n.render;var s=e.ref;return Ss(e,r),i=bd(t,e,n,i,s,r),n=Ld(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(lt&&n&&vd(e),e.flags|=1,qt(t,e,i,r),e.child)}function dp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Hd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,T_(t,e,s,i,r)):(t=nl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Io,n(o,i)&&t.ref===e.ref)return wi(t,e,r)}return e.flags|=1,t=Qi(s,i),t.ref=e.ref,t.return=e,e.child=t}function T_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Io(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,wi(t,e,r)}return Qc(t,e,n,i,r)}function A_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(ms,mn),mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(ms,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(ms,mn),mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(ms,mn),mn|=i;return qt(t,e,r,n),e.child}function C_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qc(t,e,n,i,r){var s=an(n)?Rr:Yt.current;return s=Rs(e,s),Ss(e,r),n=bd(t,e,n,i,s,r),i=Ld(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(lt&&i&&vd(e),e.flags|=1,qt(t,e,n,r),e.child)}function hp(t,e,n,i,r){if(an(n)){var s=!0;Sl(e)}else s=!1;if(Ss(e,r),e.stateNode===null)Ja(t,e),M_(e,n,i),Kc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ln(u):(u=an(n)?Rr:Yt.current,u=Rs(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&ap(e,o,i,u),zi=!1;var d=e.memoizedState;o.state=d,Al(e,i,o,r),l=e.memoizedState,a!==i||d!==l||on.current||zi?(typeof h=="function"&&(qc(e,n,h,i),l=e.memoizedState),(a=zi||op(e,n,a,i,d,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,t_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:zn(e.type,a),o.props=u,p=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=an(n)?Rr:Yt.current,l=Rs(e,l));var c=n.getDerivedStateFromProps;(h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||d!==l)&&ap(e,o,i,l),zi=!1,d=e.memoizedState,o.state=d,Al(e,i,o,r);var v=e.memoizedState;a!==p||d!==v||on.current||zi?(typeof c=="function"&&(qc(e,n,c,i),v=e.memoizedState),(u=zi||op(e,n,u,i,d,v,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Jc(t,e,n,i,s,r)}function Jc(t,e,n,i,r,s){C_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Qh(e,n,!1),wi(t,e,s);i=e.stateNode,Vx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=bs(e,t.child,null,s),e.child=bs(e,null,a,s)):qt(t,e,a,s),e.memoizedState=i.state,r&&Qh(e,n,!0),e.child}function R_(t){var e=t.stateNode;e.pendingContext?Zh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zh(t,e.context,!1),Ad(t,e.containerInfo)}function pp(t,e,n,i,r){return Ps(),yd(r),e.flags|=256,qt(t,e,n,i),e.child}var ef={dehydrated:null,treeContext:null,retryLane:0};function tf(t){return{baseLanes:t,cachePool:null,transitions:null}}function P_(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(ht,r&1),t===null)return Yc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nu(o,i,0,null),t=Cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=tf(n),e.memoizedState=ef,t):Ud(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Gx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Qi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Qi(a,s):(s=Cr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?tf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ef,i}return s=t.child,t=s.sibling,i=Qi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ud(t,e){return e=nu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _a(t,e,n,i){return i!==null&&yd(i),bs(e,t.child,null,n),t=Ud(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Gx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ou(Error(se(422))),_a(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nu({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&bs(e,t.child,null,o),e.child.memoizedState=tf(o),e.memoizedState=ef,s);if(!(e.mode&1))return _a(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Ou(s,i,void 0),_a(t,e,o,i)}if(a=(o&t.childLanes)!==0,rn||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ei(t,r),jn(i,t,r,-1))}return Bd(),i=Ou(Error(se(421))),_a(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ny.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,gn=$i(r.nextSibling),vn=e,lt=!0,Vn=null,t!==null&&(An[Cn++]=_i,An[Cn++]=vi,An[Cn++]=Pr,_i=t.id,vi=t.overflow,Pr=e),e=Ud(e,i.children),e.flags|=4096,e)}function mp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),$c(t.return,e,n)}function ku(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function b_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mp(t,n,e);else if(t.tag===19)mp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ku(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ku(e,!0,n,null,s);break;case"together":ku(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ja(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Wx(t,e,n){switch(e.tag){case 3:R_(e),Ps();break;case 5:n_(e);break;case 1:an(e.type)&&Sl(e);break;case 4:Ad(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?P_(t,e,n):(nt(ht,ht.current&1),t=wi(t,e,n),t!==null?t.sibling:null);nt(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return b_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,A_(t,e,n)}return wi(t,e,n)}var L_,nf,D_,I_;L_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nf=function(){};D_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Er(ri.current);var s=null;switch(n){case"input":r=wc(t,r),i=wc(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=Cc(t,r),i=Cc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=xl)}Pc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ao.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ao.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&it("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};I_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Zs(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Xx(t,e,n){var i=e.pendingProps;switch(xd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return an(e.type)&&yl(),Gt(e),null;case 3:return i=e.stateNode,Ls(),st(on),st(Yt),Rd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ma(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(ff(Vn),Vn=null))),nf(t,e),Gt(e),null;case 5:Cd(e);var r=Er(ko.current);if(n=e.type,t!==null&&e.stateNode!=null)D_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Gt(e),null}if(t=Er(ri.current),ma(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Jn]=e,i[Fo]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<fo.length;r++)it(fo[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":wh(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":Ah(i,s),it("invalid",i)}Pc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&pa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&pa(i.textContent,a,t),r=["children",""+a]):Ao.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":oa(i),Th(i,s,!0);break;case"textarea":oa(i),Ch(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=xl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ag(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Jn]=e,t[Fo]=i,L_(t,e,!1,!1),e.stateNode=t;e:{switch(o=bc(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<fo.length;r++)it(fo[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":wh(t,i),r=wc(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),it("invalid",t);break;case"textarea":Ah(t,i),r=Cc(t,i),it("invalid",t);break;default:r=i}Pc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?cg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Co(t,l):typeof l=="number"&&Co(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ao.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&rd(t,s,l,o))}switch(n){case"input":oa(t),Th(t,i,!1);break;case"textarea":oa(t),Ch(t);break;case"option":i.value!=null&&t.setAttribute("value",""+tr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?_s(t,!!i.multiple,s,!1):i.defaultValue!=null&&_s(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=xl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)I_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Er(ko.current),Er(ri.current),ma(e)){if(i=e.stateNode,n=e.memoizedProps,i[Jn]=e,(s=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:pa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Jn]=e,e.stateNode=i}return Gt(e),null;case 13:if(st(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&gn!==null&&e.mode&1&&!(e.flags&128))Zg(),Ps(),e.flags|=98560,s=!1;else if(s=ma(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Jn]=e}else Ps(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else Vn!==null&&(ff(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?Rt===0&&(Rt=3):Bd())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return Ls(),nf(t,e),t===null&&Uo(e.stateNode.containerInfo),Gt(e),null;case 10:return Ed(e.type._context),Gt(e),null;case 17:return an(e.type)&&yl(),Gt(e),null;case 19:if(st(ht),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Zs(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cl(t),o!==null){for(e.flags|=128,Zs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>Is&&(e.flags|=128,i=!0,Zs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Cl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return Gt(e),null}else 2*yt()-s.renderingStartTime>Is&&n!==1073741824&&(e.flags|=128,i=!0,Zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=ht.current,nt(ht,i?n&1|2:n&1),e):(Gt(e),null);case 22:case 23:return zd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function jx(t,e){switch(xd(e),e.tag){case 1:return an(e.type)&&yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ls(),st(on),st(Yt),Rd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cd(e),null;case 13:if(st(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ps()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(ht),null;case 4:return Ls(),null;case 10:return Ed(e.type._context),null;case 22:case 23:return zd(),null;case 24:return null;default:return null}}var va=!1,jt=!1,Yx=typeof WeakSet=="function"?WeakSet:Set,me=null;function ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function rf(t,e,n){try{n()}catch(i){xt(t,e,i)}}var gp=!1;function $x(t,e){if(Bc=gl,t=kg(),_d(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,p=t,d=null;t:for(;;){for(var c;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(c=p.firstChild)!==null;)d=p,p=c;for(;;){if(p===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++h===i&&(l=o),(c=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=c}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hc={focusedElem:t,selectionRange:n},gl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:zn(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){xt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return v=gp,gp=!1,v}function So(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&rf(e,n,s)}r=r.next}while(r!==i)}}function eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function sf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function U_(t){var e=t.alternate;e!==null&&(t.alternate=null,U_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jn],delete e[Fo],delete e[Wc],delete e[bx],delete e[Lx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function N_(t){return t.tag===5||t.tag===3||t.tag===4}function _p(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||N_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function of(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xl));else if(i!==4&&(t=t.child,t!==null))for(of(t,e,n),t=t.sibling;t!==null;)of(t,e,n),t=t.sibling}function af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(af(t,e,n),t=t.sibling;t!==null;)af(t,e,n),t=t.sibling}var zt=null,Bn=!1;function bi(t,e,n){for(n=n.child;n!==null;)F_(t,e,n),n=n.sibling}function F_(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 5:jt||ps(n,e);case 6:var i=zt,r=Bn;zt=null,bi(t,e,n),zt=i,Bn=r,zt!==null&&(Bn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Bn?(t=zt,n=n.stateNode,t.nodeType===8?Lu(t.parentNode,n):t.nodeType===1&&Lu(t,n),Lo(t)):Lu(zt,n.stateNode));break;case 4:i=zt,r=Bn,zt=n.stateNode.containerInfo,Bn=!0,bi(t,e,n),zt=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rf(n,e,o),r=r.next}while(r!==i)}bi(t,e,n);break;case 1:if(!jt&&(ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){xt(n,e,a)}bi(t,e,n);break;case 21:bi(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,bi(t,e,n),jt=i):bi(t,e,n);break;default:bi(t,e,n)}}function vp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Yx),e.forEach(function(i){var r=iy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,Bn=!1;break e;case 3:zt=a.stateNode.containerInfo,Bn=!0;break e;case 4:zt=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(zt===null)throw Error(se(160));F_(s,o,r),zt=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){xt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)O_(e,t),e=e.sibling}function O_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),Kn(t),i&4){try{So(3,t,t.return),eu(3,t)}catch(x){xt(t,t.return,x)}try{So(5,t,t.return)}catch(x){xt(t,t.return,x)}}break;case 1:Nn(e,t),Kn(t),i&512&&n!==null&&ps(n,n.return);break;case 5:if(Nn(e,t),Kn(t),i&512&&n!==null&&ps(n,n.return),t.flags&32){var r=t.stateNode;try{Co(r,"")}catch(x){xt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sg(r,s),bc(a,o);var u=bc(a,s);for(o=0;o<l.length;o+=2){var h=l[o],p=l[o+1];h==="style"?cg(r,p):h==="dangerouslySetInnerHTML"?lg(r,p):h==="children"?Co(r,p):rd(r,h,p,u)}switch(a){case"input":Tc(r,s);break;case"textarea":og(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var c=s.value;c!=null?_s(r,!!s.multiple,c,!1):d!==!!s.multiple&&(s.defaultValue!=null?_s(r,!!s.multiple,s.defaultValue,!0):_s(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fo]=s}catch(x){xt(t,t.return,x)}}break;case 6:if(Nn(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){xt(t,t.return,x)}}break;case 3:if(Nn(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Lo(e.containerInfo)}catch(x){xt(t,t.return,x)}break;case 4:Nn(e,t),Kn(t);break;case 13:Nn(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Od=yt())),i&4&&vp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(u=jt)||h,Nn(e,t),jt=u):Nn(e,t),Kn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(me=t,h=t.child;h!==null;){for(p=me=h;me!==null;){switch(d=me,c=d.child,d.tag){case 0:case 11:case 14:case 15:So(4,d,d.return);break;case 1:ps(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){xt(i,n,x)}}break;case 5:ps(d,d.return);break;case 22:if(d.memoizedState!==null){yp(p);continue}}c!==null?(c.return=d,me=c):yp(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ug("display",o))}catch(x){xt(t,t.return,x)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(x){xt(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Nn(e,t),Kn(t),i&4&&vp(t);break;case 21:break;default:Nn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(N_(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Co(r,""),i.flags&=-33);var s=_p(t);af(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=_p(t);of(t,a,o);break;default:throw Error(se(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qx(t,e,n){me=t,k_(t)}function k_(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||va;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jt;a=va;var u=jt;if(va=o,(jt=l)&&!u)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?Sp(r):l!==null?(l.return=o,me=l):Sp(r);for(;s!==null;)me=s,k_(s),s=s.sibling;me=r,va=a,jt=u}xp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):xp(t)}}function xp(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||eu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ip(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ip(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Lo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}jt||e.flags&512&&sf(e)}catch(d){xt(e,e.return,d)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function yp(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Sp(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{eu(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{sf(e)}catch(l){xt(e,s,l)}break;case 5:var o=e.return;try{sf(e)}catch(l){xt(e,o,l)}}}catch(l){xt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var Kx=Math.ceil,bl=Ci.ReactCurrentDispatcher,Nd=Ci.ReactCurrentOwner,bn=Ci.ReactCurrentBatchConfig,je=0,Ft=null,wt=null,Bt=0,mn=0,ms=sr(0),Rt=0,Vo=null,Lr=0,tu=0,Fd=0,Mo=null,tn=null,Od=0,Is=1/0,pi=null,Ll=!1,lf=null,Ki=null,xa=!1,Wi=null,Dl=0,Eo=0,uf=null,el=-1,tl=0;function Kt(){return je&6?yt():el!==-1?el:el=yt()}function Zi(t){return t.mode&1?je&2&&Bt!==0?Bt&-Bt:Ix.transition!==null?(tl===0&&(tl=Mg()),tl):(t=tt,t!==0||(t=window.event,t=t===void 0?16:Pg(t.type)),t):1}function jn(t,e,n,i){if(50<Eo)throw Eo=0,uf=null,Error(se(185));Yo(t,n,i),(!(je&2)||t!==Ft)&&(t===Ft&&(!(je&2)&&(tu|=n),Rt===4&&Hi(t,Bt)),ln(t,i),n===1&&je===0&&!(e.mode&1)&&(Is=yt()+500,Zl&&or()))}function ln(t,e){var n=t.callbackNode;Iv(t,e);var i=ml(t,t===Ft?Bt:0);if(i===0)n!==null&&bh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&bh(n),e===1)t.tag===0?Dx(Mp.bind(null,t)):$g(Mp.bind(null,t)),Rx(function(){!(je&6)&&or()}),n=null;else{switch(Eg(i)){case 1:n=ud;break;case 4:n=yg;break;case 16:n=pl;break;case 536870912:n=Sg;break;default:n=pl}n=j_(n,z_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function z_(t,e){if(el=-1,tl=0,je&6)throw Error(se(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var i=ml(t,t===Ft?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Il(t,i);else{e=i;var r=je;je|=2;var s=H_();(Ft!==t||Bt!==e)&&(pi=null,Is=yt()+500,Ar(t,e));do try{Jx();break}catch(a){B_(t,a)}while(!0);Md(),bl.current=s,je=r,wt!==null?e=0:(Ft=null,Bt=0,e=Rt)}if(e!==0){if(e===2&&(r=Nc(t),r!==0&&(i=r,e=cf(t,r))),e===1)throw n=Vo,Ar(t,0),Hi(t,i),ln(t,yt()),n;if(e===6)Hi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Zx(r)&&(e=Il(t,i),e===2&&(s=Nc(t),s!==0&&(i=s,e=cf(t,s))),e===1))throw n=Vo,Ar(t,0),Hi(t,i),ln(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:gr(t,tn,pi);break;case 3:if(Hi(t,i),(i&130023424)===i&&(e=Od+500-yt(),10<e)){if(ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Gc(gr.bind(null,t,tn,pi),e);break}gr(t,tn,pi);break;case 4:if(Hi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Xn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Kx(i/1960))-i,10<i){t.timeoutHandle=Gc(gr.bind(null,t,tn,pi),i);break}gr(t,tn,pi);break;case 5:gr(t,tn,pi);break;default:throw Error(se(329))}}}return ln(t,yt()),t.callbackNode===n?z_.bind(null,t):null}function cf(t,e){var n=Mo;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=Il(t,e),t!==2&&(e=tn,tn=n,e!==null&&ff(e)),t}function ff(t){tn===null?tn=t:tn.push.apply(tn,t)}function Zx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hi(t,e){for(e&=~Fd,e&=~tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function Mp(t){if(je&6)throw Error(se(327));Ms();var e=ml(t,0);if(!(e&1))return ln(t,yt()),null;var n=Il(t,e);if(t.tag!==0&&n===2){var i=Nc(t);i!==0&&(e=i,n=cf(t,i))}if(n===1)throw n=Vo,Ar(t,0),Hi(t,e),ln(t,yt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,tn,pi),ln(t,yt()),null}function kd(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(Is=yt()+500,Zl&&or())}}function Dr(t){Wi!==null&&Wi.tag===0&&!(je&6)&&Ms();var e=je;je|=1;var n=bn.transition,i=tt;try{if(bn.transition=null,tt=1,t)return t()}finally{tt=i,bn.transition=n,je=e,!(je&6)&&or()}}function zd(){mn=ms.current,st(ms)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Cx(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(xd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yl();break;case 3:Ls(),st(on),st(Yt),Rd();break;case 5:Cd(i);break;case 4:Ls();break;case 13:st(ht);break;case 19:st(ht);break;case 10:Ed(i.type._context);break;case 22:case 23:zd()}n=n.return}if(Ft=t,wt=t=Qi(t.current,null),Bt=mn=e,Rt=0,Vo=null,Fd=tu=Lr=0,tn=Mo=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Mr=null}return t}function B_(t,e){do{var n=wt;try{if(Md(),Za.current=Pl,Rl){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Rl=!1}if(br=0,Nt=At=pt=null,yo=!1,zo=0,Nd.current=null,n===null||n.return===null){Rt=1,Vo=e,wt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var c=up(o);if(c!==null){c.flags&=-257,cp(c,o,a,s,e),c.mode&1&&lp(s,u,e),e=c,l=u;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){lp(s,u,e),Bd();break e}l=Error(se(426))}}else if(lt&&a.mode&1){var m=up(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),cp(m,o,a,s,e),yd(Ds(l,a));break e}}s=l=Ds(l,a),Rt!==4&&(Rt=2),Mo===null?Mo=[s]:Mo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=E_(s,l,e);np(s,f);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ki===null||!Ki.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=w_(s,a,e);np(s,S);break e}}s=s.return}while(s!==null)}G_(n)}catch(R){e=R,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function H_(){var t=bl.current;return bl.current=Pl,t===null?Pl:t}function Bd(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Ft===null||!(Lr&268435455)&&!(tu&268435455)||Hi(Ft,Bt)}function Il(t,e){var n=je;je|=2;var i=H_();(Ft!==t||Bt!==e)&&(pi=null,Ar(t,e));do try{Qx();break}catch(r){B_(t,r)}while(!0);if(Md(),je=n,bl.current=i,wt!==null)throw Error(se(261));return Ft=null,Bt=0,Rt}function Qx(){for(;wt!==null;)V_(wt)}function Jx(){for(;wt!==null&&!wv();)V_(wt)}function V_(t){var e=X_(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?G_(t):wt=e,Nd.current=null}function G_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jx(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,wt=null;return}}else if(n=Xx(n,e,mn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Rt===0&&(Rt=5)}function gr(t,e,n){var i=tt,r=bn.transition;try{bn.transition=null,tt=1,ey(t,e,n,i)}finally{bn.transition=r,tt=i}return null}function ey(t,e,n,i){do Ms();while(Wi!==null);if(je&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Uv(t,s),t===Ft&&(wt=Ft=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xa||(xa=!0,j_(pl,function(){return Ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bn.transition,bn.transition=null;var o=tt;tt=1;var a=je;je|=4,Nd.current=null,$x(t,n),O_(n,t),yx(Hc),gl=!!Bc,Hc=Bc=null,t.current=n,qx(n),Tv(),je=a,tt=o,bn.transition=s}else t.current=n;if(xa&&(xa=!1,Wi=t,Dl=r),s=t.pendingLanes,s===0&&(Ki=null),Rv(n.stateNode),ln(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ll)throw Ll=!1,t=lf,lf=null,t;return Dl&1&&t.tag!==0&&Ms(),s=t.pendingLanes,s&1?t===uf?Eo++:(Eo=0,uf=t):Eo=0,or(),null}function Ms(){if(Wi!==null){var t=Eg(Dl),e=bn.transition,n=tt;try{if(bn.transition=null,tt=16>t?16:t,Wi===null)var i=!1;else{if(t=Wi,Wi=null,Dl=0,je&6)throw Error(se(331));var r=je;for(je|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(me=u;me!==null;){var h=me;switch(h.tag){case 0:case 11:case 15:So(8,h,s)}var p=h.child;if(p!==null)p.return=h,me=p;else for(;me!==null;){h=me;var d=h.sibling,c=h.return;if(U_(h),h===u){me=null;break}if(d!==null){d.return=c,me=d;break}me=c}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:So(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,me=f;break e}me=s.return}}var _=t.current;for(me=_;me!==null;){o=me;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,me=g;else e:for(o=_;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:eu(9,a)}}catch(R){xt(a,a.return,R)}if(a===o){me=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,me=S;break e}me=a.return}}if(je=r,or(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(jl,t)}catch{}i=!0}return i}finally{tt=n,bn.transition=e}}return!1}function Ep(t,e,n){e=Ds(n,e),e=E_(t,e,1),t=qi(t,e,1),e=Kt(),t!==null&&(Yo(t,1,e),ln(t,e))}function xt(t,e,n){if(t.tag===3)Ep(t,t,n);else for(;e!==null;){if(e.tag===3){Ep(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ki===null||!Ki.has(i))){t=Ds(n,t),t=w_(e,t,1),e=qi(e,t,1),t=Kt(),e!==null&&(Yo(e,1,t),ln(e,t));break}}e=e.return}}function ty(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Bt&n)===n&&(Rt===4||Rt===3&&(Bt&130023424)===Bt&&500>yt()-Od?Ar(t,0):Fd|=n),ln(t,e)}function W_(t,e){e===0&&(t.mode&1?(e=ua,ua<<=1,!(ua&130023424)&&(ua=4194304)):e=1);var n=Kt();t=Ei(t,e),t!==null&&(Yo(t,e,n),ln(t,n))}function ny(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),W_(t,n)}function iy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),W_(t,n)}var X_;X_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,Wx(t,e,n);rn=!!(t.flags&131072)}else rn=!1,lt&&e.flags&1048576&&qg(e,El,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ja(t,e),t=e.pendingProps;var r=Rs(e,Yt.current);Ss(e,n),r=bd(null,e,i,t,r,n);var s=Ld();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,Sl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Td(e),r.updater=Jl,e.stateNode=r,r._reactInternals=e,Kc(e,i,t,n),e=Jc(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&vd(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ja(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=sy(i),t=zn(i,t),r){case 0:e=Qc(null,e,i,t,n);break e;case 1:e=hp(null,e,i,t,n);break e;case 11:e=fp(null,e,i,t,n);break e;case 14:e=dp(null,e,i,zn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Qc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),hp(t,e,i,r,n);case 3:e:{if(R_(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,t_(t,e),Al(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ds(Error(se(423)),e),e=pp(t,e,i,n,r);break e}else if(i!==r){r=Ds(Error(se(424)),e),e=pp(t,e,i,n,r);break e}else for(gn=$i(e.stateNode.containerInfo.firstChild),vn=e,lt=!0,Vn=null,n=Jg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ps(),i===r){e=wi(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return n_(e),t===null&&Yc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Vc(i,r)?o=null:s!==null&&Vc(i,s)&&(e.flags|=32),C_(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&Yc(e),null;case 13:return P_(t,e,n);case 4:return Ad(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=bs(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),fp(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt(wl,i._currentValue),i._currentValue=o,s!==null)if($n(s.value,o)){if(s.children===r.children&&!on.current){e=wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=yi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$c(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),$c(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ss(e,n),r=Ln(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),dp(t,e,i,r,n);case 15:return T_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Ja(t,e),e.tag=1,an(i)?(t=!0,Sl(e)):t=!1,Ss(e,n),M_(e,i,r),Kc(e,i,r,n),Jc(null,e,i,!0,t,n);case 19:return b_(t,e,n);case 22:return A_(t,e,n)}throw Error(se(156,e.tag))};function j_(t,e){return xg(t,e)}function ry(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,i){return new ry(t,e,n,i)}function Hd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sy(t){if(typeof t=="function")return Hd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===od)return 11;if(t===ad)return 14}return 2}function Qi(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Hd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ss:return Cr(n.children,r,s,e);case sd:o=8,r|=8;break;case yc:return t=Pn(12,n,e,r|2),t.elementType=yc,t.lanes=s,t;case Sc:return t=Pn(13,n,e,r),t.elementType=Sc,t.lanes=s,t;case Mc:return t=Pn(19,n,e,r),t.elementType=Mc,t.lanes=s,t;case ng:return nu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case eg:o=10;break e;case tg:o=9;break e;case od:o=11;break e;case ad:o=14;break e;case ki:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Pn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cr(t,e,n,i){return t=Pn(7,t,i,e),t.lanes=n,t}function nu(t,e,n,i){return t=Pn(22,t,i,e),t.elementType=ng,t.lanes=n,t.stateNode={isHidden:!1},t}function zu(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function Bu(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yu(0),this.expirationTimes=yu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vd(t,e,n,i,r,s,o,a,l){return t=new oy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Td(s),t}function ay(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Y_(t){if(!t)return nr;t=t._reactInternals;e:{if(Fr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(an(n))return Yg(t,n,e)}return e}function $_(t,e,n,i,r,s,o,a,l){return t=Vd(n,i,!0,t,r,s,o,a,l),t.context=Y_(null),n=t.current,i=Kt(),r=Zi(n),s=yi(i,r),s.callback=e??null,qi(n,s,r),t.current.lanes=r,Yo(t,r,i),ln(t,i),t}function iu(t,e,n,i){var r=e.current,s=Kt(),o=Zi(r);return n=Y_(n),e.context===null?e.context=n:e.pendingContext=n,e=yi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=qi(r,e,o),t!==null&&(jn(t,r,o,s),Ka(t,r,o)),o}function Ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gd(t,e){wp(t,e),(t=t.alternate)&&wp(t,e)}function ly(){return null}var q_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wd(t){this._internalRoot=t}ru.prototype.render=Wd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));iu(t,e,null,null)};ru.prototype.unmount=Wd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dr(function(){iu(null,t,null,null)}),e[Mi]=null}};function ru(t){this._internalRoot=t}ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ag();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bi.length&&e!==0&&e<Bi[n].priority;n++);Bi.splice(n,0,t),n===0&&Rg(t)}};function Xd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function uy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ul(o);s.call(u)}}var o=$_(e,i,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=o,t[Mi]=o.current,Uo(t.nodeType===8?t.parentNode:t),Dr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ul(l);a.call(u)}}var l=Vd(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=l,t[Mi]=l.current,Uo(t.nodeType===8?t.parentNode:t),Dr(function(){iu(e,l,n,i)}),l}function ou(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ul(o);a.call(l)}}iu(e,o,t,r)}else o=uy(n,e,t,r,i);return Ul(o)}wg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=co(e.pendingLanes);n!==0&&(cd(e,n|1),ln(e,yt()),!(je&6)&&(Is=yt()+500,or()))}break;case 13:Dr(function(){var i=Ei(t,1);if(i!==null){var r=Kt();jn(i,t,1,r)}}),Gd(t,1)}};fd=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=Kt();jn(e,t,134217728,n)}Gd(t,134217728)}};Tg=function(t){if(t.tag===13){var e=Zi(t),n=Ei(t,e);if(n!==null){var i=Kt();jn(n,t,e,i)}Gd(t,e)}};Ag=function(){return tt};Cg=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};Dc=function(t,e,n){switch(e){case"input":if(Tc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Kl(i);if(!r)throw Error(se(90));rg(i),Tc(i,r)}}}break;case"textarea":og(t,n);break;case"select":e=n.value,e!=null&&_s(t,!!n.multiple,e,!1)}};hg=kd;pg=Dr;var cy={usingClientEntryPoint:!1,Events:[qo,us,Kl,fg,dg,kd]},Qs={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fy={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ci.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_g(t),t===null?null:t.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||ly,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ya.isDisabled&&ya.supportsFiber)try{jl=ya.inject(fy),ii=ya}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cy;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xd(e))throw Error(se(200));return ay(t,e,null,n)};Sn.createRoot=function(t,e){if(!Xd(t))throw Error(se(299));var n=!1,i="",r=q_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vd(t,1,!1,null,null,n,!1,i,r),t[Mi]=e.current,Uo(t.nodeType===8?t.parentNode:t),new Wd(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=_g(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return Dr(t)};Sn.hydrate=function(t,e,n){if(!su(e))throw Error(se(200));return ou(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!Xd(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=q_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$_(e,null,t,1,n??null,r,!1,s,o),t[Mi]=e.current,Uo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ru(e)};Sn.render=function(t,e,n){if(!su(e))throw Error(se(200));return ou(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!su(t))throw Error(se(40));return t._reactRootContainer?(Dr(function(){ou(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1};Sn.unstable_batchedUpdates=kd;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!su(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return ou(t,e,n,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function K_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K_)}catch(t){console.error(t)}}K_(),Km.exports=Sn;var dy=Km.exports,Z_,Ap=dy;Z_=Ap.createRoot,Ap.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jd="166",hy=0,Cp=1,py=2,Q_=1,my=2,hi=3,ir=0,un=1,ei=2,Ji=0,Es=1,Rp=2,Pp=3,bp=4,gy=5,xr=100,_y=101,vy=102,xy=103,yy=104,Sy=200,My=201,Ey=202,wy=203,df=204,hf=205,Ty=206,Ay=207,Cy=208,Ry=209,Py=210,by=211,Ly=212,Dy=213,Iy=214,Uy=0,Ny=1,Fy=2,Nl=3,Oy=4,ky=5,zy=6,By=7,Yd=0,Hy=1,Vy=2,er=0,Gy=1,Wy=2,Xy=3,jy=4,Yy=5,$y=6,qy=7,J_=300,Us=301,Ns=302,pf=303,mf=304,au=306,gf=1e3,wr=1001,_f=1002,sn=1003,Ky=1004,Sa=1005,Gn=1006,Hu=1007,Tr=1008,Ti=1009,e0=1010,t0=1011,Go=1012,$d=1013,Ir=1014,ni=1015,Zo=1016,qd=1017,Kd=1018,Fs=1020,n0=35902,i0=1021,r0=1022,Wn=1023,s0=1024,o0=1025,ws=1026,Os=1027,Zd=1028,Qd=1029,a0=1030,Jd=1031,eh=1033,il=33776,rl=33777,sl=33778,ol=33779,vf=35840,xf=35841,yf=35842,Sf=35843,Mf=36196,Ef=37492,wf=37496,Tf=37808,Af=37809,Cf=37810,Rf=37811,Pf=37812,bf=37813,Lf=37814,Df=37815,If=37816,Uf=37817,Nf=37818,Ff=37819,Of=37820,kf=37821,al=36492,zf=36494,Bf=36495,l0=36283,Hf=36284,Vf=36285,Gf=36286,Zy=3200,Qy=3201,u0=0,Jy=1,Vi="",Hn="srgb",ar="srgb-linear",th="display-p3",lu="display-p3-linear",Fl="linear",rt="srgb",Ol="rec709",kl="p3",Br=7680,Lp=519,eS=512,tS=513,nS=514,c0=515,iS=516,rS=517,sS=518,oS=519,Dp=35044,Ip="300 es",xi=2e3,zl=2001;class Vs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vu=Math.PI/180,Wf=180/Math.PI;function Qo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function aS(t,e){return(t%e+e)%e}function Gu(t,e,n){return(1-n)*t+n*e}function Js(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,n=0){Ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,s,o,a,l,u){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],h=i[4],p=i[7],d=i[2],c=i[5],v=i[8],x=r[0],m=r[3],f=r[6],_=r[1],g=r[4],S=r[7],R=r[2],A=r[5],T=r[8];return s[0]=o*x+a*_+l*R,s[3]=o*m+a*g+l*A,s[6]=o*f+a*S+l*T,s[1]=u*x+h*_+p*R,s[4]=u*m+h*g+p*A,s[7]=u*f+h*S+p*T,s[2]=d*x+c*_+v*R,s[5]=d*m+c*g+v*A,s[8]=d*f+c*S+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return n*o*h-n*a*u-i*s*h+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],p=h*o-a*u,d=a*l-h*s,c=u*s-o*l,v=n*p+i*d+r*c;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=p*x,e[1]=(r*u-h*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(h*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=c*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Wu.makeScale(e,n)),this}rotate(e){return this.premultiply(Wu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wu=new Oe;function f0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Bl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function lS(){const t=Bl("canvas");return t.style.display="block",t}const Up={};function d0(t){t in Up||(Up[t]=!0,console.warn(t))}function uS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Np=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fp=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ma={[ar]:{transfer:Fl,primaries:Ol,toReference:t=>t,fromReference:t=>t},[Hn]:{transfer:rt,primaries:Ol,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[lu]:{transfer:Fl,primaries:kl,toReference:t=>t.applyMatrix3(Fp),fromReference:t=>t.applyMatrix3(Np)},[th]:{transfer:rt,primaries:kl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Fp),fromReference:t=>t.applyMatrix3(Np).convertLinearToSRGB()}},cS=new Set([ar,lu]),et={enabled:!0,_workingColorSpace:ar,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!cS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ma[e].toReference,r=Ma[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ma[t].primaries},getTransfer:function(t){return t===Vi?Fl:Ma[t].transfer}};function Ts(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Xu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Hr;class fS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hr===void 0&&(Hr=Bl("canvas")),Hr.width=e.width,Hr.height=e.height;const i=Hr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Hr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ts(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ts(n[i]/255)*255):n[i]=Ts(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dS=0;class h0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ju(r[o].image)):s.push(ju(r[o]))}else s=ju(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ju(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?fS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hS=0;class Zt extends Vs{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=wr,r=wr,s=Gn,o=Tr,a=Wn,l=Ti,u=Zt.DEFAULT_ANISOTROPY,h=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Qo(),this.name="",this.source=new h0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==J_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gf:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case _f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gf:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case _f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=J_;Zt.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],p=l[8],d=l[1],c=l[5],v=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+x)<.1&&Math.abs(v+m)<.1&&Math.abs(u+c+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,S=(c+1)/2,R=(f+1)/2,A=(h+d)/4,T=(p+x)/4,C=(v+m)/4;return g>S&&g>R?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=T/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=C/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=C/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(p-x)*(p-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(p-x)/_,this.z=(d-h)/_,this.w=Math.acos((u+c+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pS extends Vs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new h0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends pS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class p0 extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mS extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3];const d=s[o+0],c=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=h,e[n+3]=p;return}if(a===1){e[n+0]=d,e[n+1]=c,e[n+2]=v,e[n+3]=x;return}if(p!==x||l!==d||u!==c||h!==v){let m=1-a;const f=l*d+u*c+h*v+p*x,_=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const R=Math.sqrt(g),A=Math.atan2(R,f*_);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const S=a*_;if(l=l*m+d*S,u=u*m+c*S,h=h*m+v*S,p=p*m+x*S,m===1-a){const R=1/Math.sqrt(l*l+u*u+h*h+p*p);l*=R,u*=R,h*=R,p*=R}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],h=i[r+3],p=s[o],d=s[o+1],c=s[o+2],v=s[o+3];return e[n]=a*v+h*p+l*c-u*d,e[n+1]=l*v+h*d+u*p-a*c,e[n+2]=u*v+h*c+a*d-l*p,e[n+3]=h*v-a*p-l*d-u*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),h=a(r/2),p=a(s/2),d=l(i/2),c=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*h*p+u*c*v,this._y=u*c*p-d*h*v,this._z=u*h*v+d*c*p,this._w=u*h*p-d*c*v;break;case"YXZ":this._x=d*h*p+u*c*v,this._y=u*c*p-d*h*v,this._z=u*h*v-d*c*p,this._w=u*h*p+d*c*v;break;case"ZXY":this._x=d*h*p-u*c*v,this._y=u*c*p+d*h*v,this._z=u*h*v+d*c*p,this._w=u*h*p-d*c*v;break;case"ZYX":this._x=d*h*p-u*c*v,this._y=u*c*p+d*h*v,this._z=u*h*v-d*c*p,this._w=u*h*p+d*c*v;break;case"YZX":this._x=d*h*p+u*c*v,this._y=u*c*p+d*h*v,this._z=u*h*v-d*c*p,this._w=u*h*p-d*c*v;break;case"XZY":this._x=d*h*p-u*c*v,this._y=u*c*p-d*h*v,this._z=u*h*v+d*c*p,this._w=u*h*p+d*c*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],h=n[6],p=n[10],d=i+a+p;if(d>0){const c=.5/Math.sqrt(d+1);this._w=.25/c,this._x=(h-l)*c,this._y=(s-u)*c,this._z=(o-r)*c}else if(i>a&&i>p){const c=2*Math.sqrt(1+i-a-p);this._w=(h-l)/c,this._x=.25*c,this._y=(r+o)/c,this._z=(s+u)/c}else if(a>p){const c=2*Math.sqrt(1+a-i-p);this._w=(s-u)/c,this._x=(r+o)/c,this._y=.25*c,this._z=(l+h)/c}else{const c=2*Math.sqrt(1+p-i-a);this._w=(o-r)/c,this._x=(s+u)/c,this._y=(l+h)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+o*a+r*u-s*l,this._y=r*h+o*l+s*a-i*u,this._z=s*h+o*u+i*l-r*a,this._w=o*h-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const c=1-n;return this._w=c*o+n*this._w,this._x=c*i+n*this._x,this._y=c*r+n*this._y,this._z=c*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),p=Math.sin((1-n)*h)/u,d=Math.sin(n*h)/u;return this._w=o*p+this._w*d,this._x=i*p+this._x*d,this._y=r*p+this._y*d,this._z=s*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Op.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Op.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),h=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*u+o*p-a*h,this.y=i+l*h+a*u-s*p,this.z=r+l*p+s*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yu.copy(this).projectOnVector(e),this.sub(Yu)}reflect(e){return this.sub(Yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yu=new B,Op=new Jo;class Or{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ea.copy(i.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),wa.subVectors(this.max,eo),Vr.subVectors(e.a,eo),Gr.subVectors(e.b,eo),Wr.subVectors(e.c,eo),Li.subVectors(Gr,Vr),Di.subVectors(Wr,Gr),ur.subVectors(Vr,Wr);let n=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-ur.z,ur.y,Li.z,0,-Li.x,Di.z,0,-Di.x,ur.z,0,-ur.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-ur.y,ur.x,0];return!$u(n,Vr,Gr,Wr,wa)||(n=[1,0,0,0,1,0,0,0,1],!$u(n,Vr,Gr,Wr,wa))?!1:(Ta.crossVectors(Li,Di),n=[Ta.x,Ta.y,Ta.z],$u(n,Vr,Gr,Wr,wa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new B,new B,new B,new B,new B,new B,new B,new B],Fn=new B,Ea=new Or,Vr=new B,Gr=new B,Wr=new B,Li=new B,Di=new B,ur=new B,eo=new B,wa=new B,Ta=new B,cr=new B;function $u(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){cr.fromArray(t,s);const a=r.x*Math.abs(cr.x)+r.y*Math.abs(cr.y)+r.z*Math.abs(cr.z),l=e.dot(cr),u=n.dot(cr),h=i.dot(cr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const gS=new Or,to=new B,qu=new B;class ea{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):gS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const n=to.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(to,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(qu)),this.expandByPoint(to.copy(e.center).sub(qu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new B,Ku=new B,Aa=new B,Ii=new B,Zu=new B,Ca=new B,Qu=new B;class m0{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ku.copy(e).add(n).multiplyScalar(.5),Aa.copy(n).sub(e).normalize(),Ii.copy(this.origin).sub(Ku);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Aa),a=Ii.dot(this.direction),l=-Ii.dot(Aa),u=Ii.lengthSq(),h=Math.abs(1-o*o);let p,d,c,v;if(h>0)if(p=o*l-a,d=o*a-l,v=s*h,p>=0)if(d>=-v)if(d<=v){const x=1/h;p*=x,d*=x,c=p*(p+o*d+2*a)+d*(o*p+d+2*l)+u}else d=s,p=Math.max(0,-(o*d+a)),c=-p*p+d*(d+2*l)+u;else d=-s,p=Math.max(0,-(o*d+a)),c=-p*p+d*(d+2*l)+u;else d<=-v?(p=Math.max(0,-(-o*s+a)),d=p>0?-s:Math.min(Math.max(-s,-l),s),c=-p*p+d*(d+2*l)+u):d<=v?(p=0,d=Math.min(Math.max(-s,-l),s),c=d*(d+2*l)+u):(p=Math.max(0,-(o*s+a)),d=p>0?s:Math.min(Math.max(-s,-l),s),c=-p*p+d*(d+2*l)+u);else d=o>0?-s:s,p=Math.max(0,-(o*d+a)),c=-p*p+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Ku).addScaledVector(Aa,d),c}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(a=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,r,s){Zu.subVectors(n,e),Ca.subVectors(i,e),Qu.crossVectors(Zu,Ca);let o=this.direction.dot(Qu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(Ca.crossVectors(Ii,Ca));if(l<0)return null;const u=a*this.direction.dot(Zu.cross(Ii));if(u<0||l+u>o)return null;const h=-a*Ii.dot(Qu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,n,i,r,s,o,a,l,u,h,p,d,c,v,x,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,h,p,d,c,v,x,m)}set(e,n,i,r,s,o,a,l,u,h,p,d,c,v,x,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=h,f[10]=p,f[14]=d,f[3]=c,f[7]=v,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),o=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=o*h,c=o*p,v=a*h,x=a*p;n[0]=l*h,n[4]=-l*p,n[8]=u,n[1]=c+v*u,n[5]=d-x*u,n[9]=-a*l,n[2]=x-d*u,n[6]=v+c*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*h,c=l*p,v=u*h,x=u*p;n[0]=d+x*a,n[4]=v*a-c,n[8]=o*u,n[1]=o*p,n[5]=o*h,n[9]=-a,n[2]=c*a-v,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*h,c=l*p,v=u*h,x=u*p;n[0]=d-x*a,n[4]=-o*p,n[8]=v+c*a,n[1]=c+v*a,n[5]=o*h,n[9]=x-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*h,c=o*p,v=a*h,x=a*p;n[0]=l*h,n[4]=v*u-c,n[8]=d*u+x,n[1]=l*p,n[5]=x*u+d,n[9]=c*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,c=o*u,v=a*l,x=a*u;n[0]=l*h,n[4]=x-d*p,n[8]=v*p+c,n[1]=p,n[5]=o*h,n[9]=-a*h,n[2]=-u*h,n[6]=c*p+v,n[10]=d-x*p}else if(e.order==="XZY"){const d=o*l,c=o*u,v=a*l,x=a*u;n[0]=l*h,n[4]=-p,n[8]=u*h,n[1]=d*p+x,n[5]=o*h,n[9]=c*p-v,n[2]=v*p-c,n[6]=a*h,n[10]=x*p+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_S,e,vS)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ui.crossVectors(i,dn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ui.crossVectors(i,dn)),Ui.normalize(),Ra.crossVectors(dn,Ui),r[0]=Ui.x,r[4]=Ra.x,r[8]=dn.x,r[1]=Ui.y,r[5]=Ra.y,r[9]=dn.y,r[2]=Ui.z,r[6]=Ra.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],h=i[1],p=i[5],d=i[9],c=i[13],v=i[2],x=i[6],m=i[10],f=i[14],_=i[3],g=i[7],S=i[11],R=i[15],A=r[0],T=r[4],C=r[8],E=r[12],y=r[1],b=r[5],z=r[9],k=r[13],Y=r[2],q=r[6],X=r[10],K=r[14],D=r[3],F=r[7],j=r[11],Q=r[15];return s[0]=o*A+a*y+l*Y+u*D,s[4]=o*T+a*b+l*q+u*F,s[8]=o*C+a*z+l*X+u*j,s[12]=o*E+a*k+l*K+u*Q,s[1]=h*A+p*y+d*Y+c*D,s[5]=h*T+p*b+d*q+c*F,s[9]=h*C+p*z+d*X+c*j,s[13]=h*E+p*k+d*K+c*Q,s[2]=v*A+x*y+m*Y+f*D,s[6]=v*T+x*b+m*q+f*F,s[10]=v*C+x*z+m*X+f*j,s[14]=v*E+x*k+m*K+f*Q,s[3]=_*A+g*y+S*Y+R*D,s[7]=_*T+g*b+S*q+R*F,s[11]=_*C+g*z+S*X+R*j,s[15]=_*E+g*k+S*K+R*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],p=e[6],d=e[10],c=e[14],v=e[3],x=e[7],m=e[11],f=e[15];return v*(+s*l*p-r*u*p-s*a*d+i*u*d+r*a*c-i*l*c)+x*(+n*l*c-n*u*d+s*o*d-r*o*c+r*u*h-s*l*h)+m*(+n*u*p-n*a*c-s*o*p+i*o*c+s*a*h-i*u*h)+f*(-r*a*h-n*l*p+n*a*d+r*o*p-i*o*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],p=e[9],d=e[10],c=e[11],v=e[12],x=e[13],m=e[14],f=e[15],_=p*m*u-x*d*u+x*l*c-a*m*c-p*l*f+a*d*f,g=v*d*u-h*m*u-v*l*c+o*m*c+h*l*f-o*d*f,S=h*x*u-v*p*u+v*a*c-o*x*c-h*a*f+o*p*f,R=v*p*l-h*x*l-v*a*d+o*x*d+h*a*m-o*p*m,A=n*_+i*g+r*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=_*T,e[1]=(x*d*s-p*m*s-x*r*c+i*m*c+p*r*f-i*d*f)*T,e[2]=(a*m*s-x*l*s+x*r*u-i*m*u-a*r*f+i*l*f)*T,e[3]=(p*l*s-a*d*s-p*r*u+i*d*u+a*r*c-i*l*c)*T,e[4]=g*T,e[5]=(h*m*s-v*d*s+v*r*c-n*m*c-h*r*f+n*d*f)*T,e[6]=(v*l*s-o*m*s-v*r*u+n*m*u+o*r*f-n*l*f)*T,e[7]=(o*d*s-h*l*s+h*r*u-n*d*u-o*r*c+n*l*c)*T,e[8]=S*T,e[9]=(v*p*s-h*x*s-v*i*c+n*x*c+h*i*f-n*p*f)*T,e[10]=(o*x*s-v*a*s+v*i*u-n*x*u-o*i*f+n*a*f)*T,e[11]=(h*a*s-o*p*s-h*i*u+n*p*u+o*i*c-n*a*c)*T,e[12]=R*T,e[13]=(h*x*r-v*p*r+v*i*d-n*x*d-h*i*m+n*p*m)*T,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*T,e[15]=(o*p*r-h*a*r+h*i*l-n*p*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,h=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,h*a+i,h*l-r*o,0,u*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,h=o+o,p=a+a,d=s*u,c=s*h,v=s*p,x=o*h,m=o*p,f=a*p,_=l*u,g=l*h,S=l*p,R=i.x,A=i.y,T=i.z;return r[0]=(1-(x+f))*R,r[1]=(c+S)*R,r[2]=(v-g)*R,r[3]=0,r[4]=(c-S)*A,r[5]=(1-(d+f))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(v+g)*T,r[9]=(m-_)*T,r[10]=(1-(d+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Xr.set(r[0],r[1],r[2]).length();const o=Xr.set(r[4],r[5],r[6]).length(),a=Xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const u=1/s,h=1/o,p=1/a;return On.elements[0]*=u,On.elements[1]*=u,On.elements[2]*=u,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=p,On.elements[9]*=p,On.elements[10]*=p,n.setFromRotationMatrix(On),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=xi){const l=this.elements,u=2*s/(n-e),h=2*s/(i-r),p=(n+e)/(n-e),d=(i+r)/(i-r);let c,v;if(a===xi)c=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===zl)c=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=c,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=xi){const l=this.elements,u=1/(n-e),h=1/(i-r),p=1/(o-s),d=(n+e)*u,c=(i+r)*h;let v,x;if(a===xi)v=(o+s)*p,x=-2*p;else if(a===zl)v=s*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-c,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Xr=new B,On=new ot,_S=new B(0,0,0),vS=new B(1,1,1),Ui=new B,Ra=new B,dn=new B,kp=new ot,zp=new Jo;class si{constructor(e=0,n=0,i=0,r=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],h=r[9],p=r[2],d=r[6],c=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,c),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,c),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,c),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,c),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,c));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return zp.setFromEuler(this),this.setFromQuaternion(zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class nh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xS=0;const Bp=new B,jr=new Jo,ci=new ot,Pa=new B,no=new B,yS=new B,SS=new Jo,Hp=new B(1,0,0),Vp=new B(0,1,0),Gp=new B(0,0,1),Wp={type:"added"},MS={type:"removed"},Yr={type:"childadded",child:null},Ju={type:"childremoved",child:null};class Tt extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new B,n=new si,i=new Jo,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Oe}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(Hp,e)}rotateY(e){return this.rotateOnAxis(Vp,e)}rotateZ(e){return this.rotateOnAxis(Gp,e)}translateOnAxis(e,n){return Bp.copy(e).applyQuaternion(this.quaternion),this.position.add(Bp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Hp,e)}translateY(e){return this.translateOnAxis(Vp,e)}translateZ(e){return this.translateOnAxis(Gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Pa.copy(e):Pa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(no,Pa,this.up):ci.lookAt(Pa,no,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),jr.setFromRotationMatrix(ci),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wp),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(MS),Ju.child=e,this.dispatchEvent(Ju),Ju.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wp),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,yS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,SS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),p=o(e.shapes),d=o(e.skeletons),c=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),c.length>0&&(i.animations=c),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new B(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new B,fi=new B,ec=new B,di=new B,$r=new B,qr=new B,Xp=new B,tc=new B,nc=new B,ic=new B;class ti{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),fi.subVectors(i,n),ec.subVectors(e,n);const o=kn.dot(kn),a=kn.dot(fi),l=kn.dot(ec),u=fi.dot(fi),h=fi.dot(ec),p=o*u-a*a;if(p===0)return s.set(0,0,0),null;const d=1/p,c=(u*l-a*h)*d,v=(o*h-a*l)*d;return s.set(1-c-v,v,c)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),fi.subVectors(e,n),kn.cross(fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),kn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;$r.subVectors(r,i),qr.subVectors(s,i),tc.subVectors(e,i);const l=$r.dot(tc),u=qr.dot(tc);if(l<=0&&u<=0)return n.copy(i);nc.subVectors(e,r);const h=$r.dot(nc),p=qr.dot(nc);if(h>=0&&p<=h)return n.copy(r);const d=l*p-h*u;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector($r,o);ic.subVectors(e,s);const c=$r.dot(ic),v=qr.dot(ic);if(v>=0&&c<=v)return n.copy(s);const x=c*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(qr,a);const m=h*v-c*p;if(m<=0&&p-h>=0&&c-v>=0)return Xp.subVectors(s,r),a=(p-h)/(p-h+(c-v)),n.copy(r).addScaledVector(Xp,a);const f=1/(m+x+d);return o=x*f,a=d*f,n.copy(i).addScaledVector($r,o).addScaledVector(qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const g0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},ba={h:0,s:0,l:0};function rc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=aS(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=rc(o,s,e+1/3),this.g=rc(o,s,e),this.b=rc(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const i=g0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=Xu(e.r),this.g=Xu(e.g),this.b=Xu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return et.fromWorkingColorSpace(Xt.copy(this),e),Math.round(nn(Xt.r*255,0,255))*65536+Math.round(nn(Xt.g*255,0,255))*256+Math.round(nn(Xt.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const p=o-a;switch(u=h<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Hn){et.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+n,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ni),e.getHSL(ba);const i=Gu(Ni.h,ba.h,n),r=Gu(Ni.s,ba.s,n),s=Gu(Ni.l,ba.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new ze;ze.NAMES=g0;let ES=0;class ta extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=Es,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=df,this.blendDst=hf,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==df&&(i.blendSrc=this.blendSrc),this.blendDst!==hf&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Hl extends ta{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new B,La=new Ve;class Yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Dp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return d0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)La.fromBufferAttribute(this,n),La.applyMatrix3(e),this.setXY(n,La.x,La.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Js(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Js(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Js(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Js(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Js(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dp&&(e.usage=this.usage),e}}class _0 extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class v0 extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xn extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let wS=0;const wn=new ot,sc=new Tt,Kr=new B,hn=new Or,io=new Or,Dt=new B;class Ri extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(f0(e)?v0:_0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return sc.lookAt(e),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];io.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(hn.min,io.min),hn.expandByPoint(Dt),Dt.addVectors(hn.max,io.max),hn.expandByPoint(Dt)):(hn.expandByPoint(io.min),hn.expandByPoint(io.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Dt.fromBufferAttribute(a,u),l&&(Kr.fromBufferAttribute(e,u),Dt.add(Kr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new B,l[C]=new B;const u=new B,h=new B,p=new B,d=new Ve,c=new Ve,v=new Ve,x=new B,m=new B;function f(C,E,y){u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,E),p.fromBufferAttribute(i,y),d.fromBufferAttribute(s,C),c.fromBufferAttribute(s,E),v.fromBufferAttribute(s,y),h.sub(u),p.sub(u),c.sub(d),v.sub(d);const b=1/(c.x*v.y-v.x*c.y);isFinite(b)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(p,-c.y).multiplyScalar(b),m.copy(p).multiplyScalar(c.x).addScaledVector(h,-v.x).multiplyScalar(b),a[C].add(x),a[E].add(x),a[y].add(x),l[C].add(m),l[E].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,E=_.length;C<E;++C){const y=_[C],b=y.start,z=y.count;for(let k=b,Y=b+z;k<Y;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const g=new B,S=new B,R=new B,A=new B;function T(C){R.fromBufferAttribute(r,C),A.copy(R);const E=a[C];g.copy(E),g.sub(R.multiplyScalar(R.dot(E))).normalize(),S.crossVectors(A,E);const b=S.dot(l[C])<0?-1:1;o.setXYZW(C,g.x,g.y,g.z,b)}for(let C=0,E=_.length;C<E;++C){const y=_[C],b=y.start,z=y.count;for(let k=b,Y=b+z;k<Y;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,c=i.count;d<c;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,h=new B,p=new B;if(e)for(let d=0,c=e.count;d<c;d+=3){const v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(h),l.add(h),u.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,c=n.count;d<c;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,p=a.normalized,d=new u.constructor(l.length*h);let c=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?c=l[x]*a.data.stride+a.offset:c=l[x]*h;for(let f=0;f<h;f++)d[v++]=u[c++]}return new Yn(d,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ri,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let h=0,p=u.length;h<p;h++){const d=u[h],c=e(d,i);l.push(c)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let p=0,d=u.length;p<d;p++){const c=u[p];h.push(c.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let d=0,c=p.length;d<c;d++)h.push(p[d].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jp=new ot,fr=new m0,Da=new ea,Yp=new B,Zr=new B,Qr=new B,Jr=new B,oc=new B,Ia=new B,Ua=new Ve,Na=new Ve,Fa=new Ve,$p=new B,qp=new B,Kp=new B,Oa=new B,ka=new B;class _n extends Tt{constructor(e=new Ri,n=new Hl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ia.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=a[l],p=s[l];h!==0&&(oc.fromBufferAttribute(p,e),o?Ia.addScaledVector(oc,h):Ia.addScaledVector(oc.sub(n),h))}n.add(Ia)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Da.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Da,Yp)===null||fr.origin.distanceToSquared(Yp)>(e.far-e.near)**2))&&(jp.copy(s).invert(),fr.copy(e.ray).applyMatrix4(jp),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,c=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],f=o[m.materialIndex],_=Math.max(m.start,c.start),g=Math.min(a.count,Math.min(m.start+m.count,c.start+c.count));for(let S=_,R=g;S<R;S+=3){const A=a.getX(S),T=a.getX(S+1),C=a.getX(S+2);r=za(this,f,e,i,u,h,p,A,T,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,c.start),x=Math.min(a.count,c.start+c.count);for(let m=v,f=x;m<f;m+=3){const _=a.getX(m),g=a.getX(m+1),S=a.getX(m+2);r=za(this,o,e,i,u,h,p,_,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],f=o[m.materialIndex],_=Math.max(m.start,c.start),g=Math.min(l.count,Math.min(m.start+m.count,c.start+c.count));for(let S=_,R=g;S<R;S+=3){const A=S,T=S+1,C=S+2;r=za(this,f,e,i,u,h,p,A,T,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,c.start),x=Math.min(l.count,c.start+c.count);for(let m=v,f=x;m<f;m+=3){const _=m,g=m+1,S=m+2;r=za(this,o,e,i,u,h,p,_,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function TS(t,e,n,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ir,a),l===null)return null;ka.copy(a),ka.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ka);return u<n.near||u>n.far?null:{distance:u,point:ka.clone(),object:t}}function za(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Zr),t.getVertexPosition(l,Qr),t.getVertexPosition(u,Jr);const h=TS(t,e,n,i,Zr,Qr,Jr,Oa);if(h){r&&(Ua.fromBufferAttribute(r,a),Na.fromBufferAttribute(r,l),Fa.fromBufferAttribute(r,u),h.uv=ti.getInterpolation(Oa,Zr,Qr,Jr,Ua,Na,Fa,new Ve)),s&&(Ua.fromBufferAttribute(s,a),Na.fromBufferAttribute(s,l),Fa.fromBufferAttribute(s,u),h.uv1=ti.getInterpolation(Oa,Zr,Qr,Jr,Ua,Na,Fa,new Ve)),o&&($p.fromBufferAttribute(o,a),qp.fromBufferAttribute(o,l),Kp.fromBufferAttribute(o,u),h.normal=ti.getInterpolation(Oa,Zr,Qr,Jr,$p,qp,Kp,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:l,c:u,normal:new B,materialIndex:0};ti.getNormal(Zr,Qr,Jr,p.normal),h.face=p}return h}class oi extends Ri{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],h=[],p=[];let d=0,c=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xn(u,3)),this.setAttribute("normal",new xn(h,3)),this.setAttribute("uv",new xn(p,2));function v(x,m,f,_,g,S,R,A,T,C,E){const y=S/T,b=R/C,z=S/2,k=R/2,Y=A/2,q=T+1,X=C+1;let K=0,D=0;const F=new B;for(let j=0;j<X;j++){const Q=j*b-k;for(let re=0;re<q;re++){const de=re*y-z;F[x]=de*_,F[m]=Q*g,F[f]=Y,u.push(F.x,F.y,F.z),F[x]=0,F[m]=0,F[f]=A>0?1:-1,h.push(F.x,F.y,F.z),p.push(re/T),p.push(1-j/C),K+=1}}for(let j=0;j<C;j++)for(let Q=0;Q<T;Q++){const re=d+Q+q*j,de=d+Q+q*(j+1),I=d+(Q+1)+q*(j+1),W=d+(Q+1)+q*j;l.push(re,de,W),l.push(de,I,W),D+=6}a.addGroup(c,D,E),c+=D,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=ks(t[n]);for(const r in i)e[r]=i[r]}return e}function AS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function x0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const CS={clone:ks,merge:$t};var RS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends ta{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RS,this.fragmentShader=PS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=AS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class y0 extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new B,Zp=new Ve,Qp=new Ve;class Rn extends y0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wf*2*Math.atan(Math.tan(Vu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,n){return this.getViewBounds(e,Zp,Qp),n.subVectors(Qp,Zp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const es=-90,ts=1;class bS extends Tt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(es,ts,e,n);r.layers=this.layers,this.add(r);const s=new Rn(es,ts,e,n);s.layers=this.layers,this.add(s);const o=new Rn(es,ts,e,n);o.layers=this.layers,this.add(o);const a=new Rn(es,ts,e,n);a.layers=this.layers,this.add(a);const l=new Rn(es,ts,e,n);l.layers=this.layers,this.add(l);const u=new Rn(es,ts,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,d,c),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class S0 extends Zt{constructor(e,n,i,r,s,o,a,l,u,h){e=e!==void 0?e:[],n=n!==void 0?n:Us,super(e,n,i,r,s,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class LS extends Ur{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new S0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new oi(5,5,5),s=new Ai({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Ji});s.uniforms.tEquirect.value=n;const o=new _n(r,s),a=n.minFilter;return n.minFilter===Tr&&(n.minFilter=Gn),new bS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ac=new B,DS=new B,IS=new Oe;class _r{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ac.subVectors(i,n).cross(DS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ac),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||IS.getNormalMatrix(e),r=this.coplanarPoint(ac).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new ea,Ba=new B;class ih{constructor(e=new _r,n=new _r,i=new _r,r=new _r,s=new _r,o=new _r){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=xi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],h=r[5],p=r[6],d=r[7],c=r[8],v=r[9],x=r[10],m=r[11],f=r[12],_=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,d-u,m-c,S-f).normalize(),i[1].setComponents(l+s,d+u,m+c,S+f).normalize(),i[2].setComponents(l+o,d+h,m+v,S+_).normalize(),i[3].setComponents(l-o,d-h,m-v,S-_).normalize(),i[4].setComponents(l-a,d-p,m-x,S-g).normalize(),n===xi)i[5].setComponents(l+a,d+p,m+x,S+g).normalize();else if(n===zl)i[5].setComponents(a,p,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ba.x=r.normal.x>0?e.max.x:e.min.x,Ba.y=r.normal.y>0?e.max.y:e.min.y,Ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function M0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function US(t){const e=new WeakMap;function n(a,l){const u=a.array,h=a.usage,p=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,h),a.onUploadCallback();let c;if(u instanceof Float32Array)c=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?c=t.HALF_FLOAT:c=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)c=t.SHORT;else if(u instanceof Uint32Array)c=t.UNSIGNED_INT;else if(u instanceof Int32Array)c=t.INT;else if(u instanceof Int8Array)c=t.BYTE;else if(u instanceof Uint8Array)c=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)c=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:c,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,u){const h=l.array,p=l._updateRange,d=l.updateRanges;if(t.bindBuffer(u,a),p.count===-1&&d.length===0&&t.bufferSubData(u,0,h),d.length!==0){for(let c=0,v=d.length;c<v;c++){const x=d[c];t.bufferSubData(u,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}p.count!==-1&&(t.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count),p.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Gs extends Ri{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,h=l+1,p=e/a,d=n/l,c=[],v=[],x=[],m=[];for(let f=0;f<h;f++){const _=f*d-o;for(let g=0;g<u;g++){const S=g*p-s;v.push(S,-_,0),x.push(0,0,1),m.push(g/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const g=_+u*f,S=_+u*(f+1),R=_+1+u*(f+1),A=_+1+u*f;c.push(g,S,A),c.push(S,R,A)}this.setIndex(c),this.setAttribute("position",new xn(v,3)),this.setAttribute("normal",new xn(x,3)),this.setAttribute("uv",new xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.widthSegments,e.heightSegments)}}var NS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FS=`#ifdef USE_ALPHAHASH
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
#endif`,OS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HS=`#ifdef USE_AOMAP
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
#endif`,VS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GS=`#ifdef USE_BATCHING
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
#endif`,WS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$S=`#ifdef USE_IRIDESCENCE
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
#endif`,qS=`#ifdef USE_BUMPMAP
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
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rM=`#define PI 3.141592653589793
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
} // validated`,sM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oM=`vec3 transformedNormal = objectNormal;
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
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fM="gl_FragColor = linearToOutputTexel( gl_FragColor );",dM=`
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
}`,hM=`#ifdef USE_ENVMAP
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
#endif`,pM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mM=`#ifdef USE_ENVMAP
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
#endif`,gM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
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
#endif`,vM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MM=`#ifdef USE_GRADIENTMAP
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
}`,EM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AM=`uniform bool receiveShadow;
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
#endif`,CM=`#ifdef USE_ENVMAP
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
#endif`,RM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DM=`PhysicalMaterial material;
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
#endif`,IM=`struct PhysicalMaterial {
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
}`,UM=`
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
#endif`,NM=`#if defined( RE_IndirectDiffuse )
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
#endif`,FM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WM=`#if defined( USE_POINTS_UV )
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
#endif`,XM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$M=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KM=`#ifdef USE_MORPHTARGETS
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
#endif`,ZM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,JM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iE=`#ifdef USE_NORMALMAP
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
#endif`,rE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_E=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xE=`float getShadowMask() {
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
}`,yE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SE=`#ifdef USE_SKINNING
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
#endif`,ME=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EE=`#ifdef USE_SKINNING
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
#endif`,wE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RE=`#ifdef USE_TRANSMISSION
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
#endif`,PE=`#ifdef USE_TRANSMISSION
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
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NE=`uniform sampler2D t2D;
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
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`#include <common>
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
}`,HE=`#if DEPTH_PACKING == 3200
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
}`,VE=`#define DISTANCE
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
}`,GE=`#define DISTANCE
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
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`uniform float scale;
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
}`,YE=`uniform vec3 diffuse;
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
}`,$E=`#include <common>
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
}`,qE=`uniform vec3 diffuse;
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
}`,KE=`#define LAMBERT
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
}`,ZE=`#define LAMBERT
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
}`,QE=`#define MATCAP
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
}`,JE=`#define MATCAP
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
}`,e1=`#define NORMAL
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
}`,t1=`#define NORMAL
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
}`,n1=`#define PHONG
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
}`,i1=`#define PHONG
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
}`,r1=`#define STANDARD
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
}`,s1=`#define STANDARD
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
}`,o1=`#define TOON
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
}`,a1=`#define TOON
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
}`,l1=`uniform float size;
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
}`,u1=`uniform vec3 diffuse;
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
}`,c1=`#include <common>
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
}`,f1=`uniform vec3 color;
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
}`,d1=`uniform float rotation;
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
}`,h1=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:NS,alphahash_pars_fragment:FS,alphamap_fragment:OS,alphamap_pars_fragment:kS,alphatest_fragment:zS,alphatest_pars_fragment:BS,aomap_fragment:HS,aomap_pars_fragment:VS,batching_pars_vertex:GS,batching_vertex:WS,begin_vertex:XS,beginnormal_vertex:jS,bsdfs:YS,iridescence_fragment:$S,bumpmap_pars_fragment:qS,clipping_planes_fragment:KS,clipping_planes_pars_fragment:ZS,clipping_planes_pars_vertex:QS,clipping_planes_vertex:JS,color_fragment:eM,color_pars_fragment:tM,color_pars_vertex:nM,color_vertex:iM,common:rM,cube_uv_reflection_fragment:sM,defaultnormal_vertex:oM,displacementmap_pars_vertex:aM,displacementmap_vertex:lM,emissivemap_fragment:uM,emissivemap_pars_fragment:cM,colorspace_fragment:fM,colorspace_pars_fragment:dM,envmap_fragment:hM,envmap_common_pars_fragment:pM,envmap_pars_fragment:mM,envmap_pars_vertex:gM,envmap_physical_pars_fragment:CM,envmap_vertex:_M,fog_vertex:vM,fog_pars_vertex:xM,fog_fragment:yM,fog_pars_fragment:SM,gradientmap_pars_fragment:MM,lightmap_pars_fragment:EM,lights_lambert_fragment:wM,lights_lambert_pars_fragment:TM,lights_pars_begin:AM,lights_toon_fragment:RM,lights_toon_pars_fragment:PM,lights_phong_fragment:bM,lights_phong_pars_fragment:LM,lights_physical_fragment:DM,lights_physical_pars_fragment:IM,lights_fragment_begin:UM,lights_fragment_maps:NM,lights_fragment_end:FM,logdepthbuf_fragment:OM,logdepthbuf_pars_fragment:kM,logdepthbuf_pars_vertex:zM,logdepthbuf_vertex:BM,map_fragment:HM,map_pars_fragment:VM,map_particle_fragment:GM,map_particle_pars_fragment:WM,metalnessmap_fragment:XM,metalnessmap_pars_fragment:jM,morphinstance_vertex:YM,morphcolor_vertex:$M,morphnormal_vertex:qM,morphtarget_pars_vertex:KM,morphtarget_vertex:ZM,normal_fragment_begin:QM,normal_fragment_maps:JM,normal_pars_fragment:eE,normal_pars_vertex:tE,normal_vertex:nE,normalmap_pars_fragment:iE,clearcoat_normal_fragment_begin:rE,clearcoat_normal_fragment_maps:sE,clearcoat_pars_fragment:oE,iridescence_pars_fragment:aE,opaque_fragment:lE,packing:uE,premultiplied_alpha_fragment:cE,project_vertex:fE,dithering_fragment:dE,dithering_pars_fragment:hE,roughnessmap_fragment:pE,roughnessmap_pars_fragment:mE,shadowmap_pars_fragment:gE,shadowmap_pars_vertex:_E,shadowmap_vertex:vE,shadowmask_pars_fragment:xE,skinbase_vertex:yE,skinning_pars_vertex:SE,skinning_vertex:ME,skinnormal_vertex:EE,specularmap_fragment:wE,specularmap_pars_fragment:TE,tonemapping_fragment:AE,tonemapping_pars_fragment:CE,transmission_fragment:RE,transmission_pars_fragment:PE,uv_pars_fragment:bE,uv_pars_vertex:LE,uv_vertex:DE,worldpos_vertex:IE,background_vert:UE,background_frag:NE,backgroundCube_vert:FE,backgroundCube_frag:OE,cube_vert:kE,cube_frag:zE,depth_vert:BE,depth_frag:HE,distanceRGBA_vert:VE,distanceRGBA_frag:GE,equirect_vert:WE,equirect_frag:XE,linedashed_vert:jE,linedashed_frag:YE,meshbasic_vert:$E,meshbasic_frag:qE,meshlambert_vert:KE,meshlambert_frag:ZE,meshmatcap_vert:QE,meshmatcap_frag:JE,meshnormal_vert:e1,meshnormal_frag:t1,meshphong_vert:n1,meshphong_frag:i1,meshphysical_vert:r1,meshphysical_frag:s1,meshtoon_vert:o1,meshtoon_frag:a1,points_vert:l1,points_frag:u1,shadow_vert:c1,shadow_frag:f1,sprite_vert:d1,sprite_frag:h1},fe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Qn={basic:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:$t([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:$t([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:$t([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:$t([fe.points,fe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:$t([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:$t([fe.common,fe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:$t([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:$t([fe.sprite,fe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:$t([fe.common,fe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:$t([fe.lights,fe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Qn.physical={uniforms:$t([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Ha={r:0,b:0,g:0},hr=new si,p1=new ot;function m1(t,e,n,i,r,s,o){const a=new ze(0);let l=s===!0?0:1,u,h,p=null,d=0,c=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:e).get(g)),g}function x(_){let g=!1;const S=v(_);S===null?f(a,l):S&&S.isColor&&(f(S,1),g=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,g){const S=v(g);S&&(S.isCubeTexture||S.mapping===au)?(h===void 0&&(h=new _n(new oi(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:ks(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),hr.copy(g.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(p1.makeRotationFromEuler(hr)),h.material.toneMapped=et.getTransfer(S.colorSpace)!==rt,(p!==S||d!==S.version||c!==t.toneMapping)&&(h.material.needsUpdate=!0,p=S,d=S.version,c=t.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new _n(new Gs(2,2),new Ai({name:"BackgroundMaterial",uniforms:ks(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=et.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||d!==S.version||c!==t.toneMapping)&&(u.material.needsUpdate=!0,p=S,d=S.version,c=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function f(_,g){_.getRGB(Ha,x0(t)),i.buffers.color.setClear(Ha.r,Ha.g,Ha.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),l=g,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:x,addToRenderList:m}}function g1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,b,z,k,Y){let q=!1;const X=p(k,z,b);s!==X&&(s=X,u(s.object)),q=c(y,k,z,Y),q&&v(y,k,z,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(y,b,z,k),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function u(y){return t.bindVertexArray(y)}function h(y){return t.deleteVertexArray(y)}function p(y,b,z){const k=z.wireframe===!0;let Y=i[y.id];Y===void 0&&(Y={},i[y.id]=Y);let q=Y[b.id];q===void 0&&(q={},Y[b.id]=q);let X=q[k];return X===void 0&&(X=d(l()),q[k]=X),X}function d(y){const b=[],z=[],k=[];for(let Y=0;Y<n;Y++)b[Y]=0,z[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:z,attributeDivisors:k,object:y,attributes:{},index:null}}function c(y,b,z,k){const Y=s.attributes,q=b.attributes;let X=0;const K=z.getAttributes();for(const D in K)if(K[D].location>=0){const j=Y[D];let Q=q[D];if(Q===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor)),j===void 0||j.attribute!==Q||Q&&j.data!==Q.data)return!0;X++}return s.attributesNum!==X||s.index!==k}function v(y,b,z,k){const Y={},q=b.attributes;let X=0;const K=z.getAttributes();for(const D in K)if(K[D].location>=0){let j=q[D];j===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(j=y.instanceColor));const Q={};Q.attribute=j,j&&j.data&&(Q.data=j.data),Y[D]=Q,X++}s.attributes=Y,s.attributesNum=X,s.index=k}function x(){const y=s.newAttributes;for(let b=0,z=y.length;b<z;b++)y[b]=0}function m(y){f(y,0)}function f(y,b){const z=s.newAttributes,k=s.enabledAttributes,Y=s.attributeDivisors;z[y]=1,k[y]===0&&(t.enableVertexAttribArray(y),k[y]=1),Y[y]!==b&&(t.vertexAttribDivisor(y,b),Y[y]=b)}function _(){const y=s.newAttributes,b=s.enabledAttributes;for(let z=0,k=b.length;z<k;z++)b[z]!==y[z]&&(t.disableVertexAttribArray(z),b[z]=0)}function g(y,b,z,k,Y,q,X){X===!0?t.vertexAttribIPointer(y,b,z,Y,q):t.vertexAttribPointer(y,b,z,k,Y,q)}function S(y,b,z,k){x();const Y=k.attributes,q=z.getAttributes(),X=b.defaultAttributeValues;for(const K in q){const D=q[K];if(D.location>=0){let F=Y[K];if(F===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(F=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(F=y.instanceColor)),F!==void 0){const j=F.normalized,Q=F.itemSize,re=e.get(F);if(re===void 0)continue;const de=re.buffer,I=re.type,W=re.bytesPerElement,$=I===t.INT||I===t.UNSIGNED_INT||F.gpuType===$d;if(F.isInterleavedBufferAttribute){const ee=F.data,ge=ee.stride,we=F.offset;if(ee.isInstancedInterleavedBuffer){for(let be=0;be<D.locationSize;be++)f(D.location+be,ee.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let be=0;be<D.locationSize;be++)m(D.location+be);t.bindBuffer(t.ARRAY_BUFFER,de);for(let be=0;be<D.locationSize;be++)g(D.location+be,Q/D.locationSize,I,j,ge*W,(we+Q/D.locationSize*be)*W,$)}else{if(F.isInstancedBufferAttribute){for(let ee=0;ee<D.locationSize;ee++)f(D.location+ee,F.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ee=0;ee<D.locationSize;ee++)m(D.location+ee);t.bindBuffer(t.ARRAY_BUFFER,de);for(let ee=0;ee<D.locationSize;ee++)g(D.location+ee,Q/D.locationSize,I,j,Q*W,Q/D.locationSize*ee*W,$)}}else if(X!==void 0){const j=X[K];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(D.location,j);break;case 3:t.vertexAttrib3fv(D.location,j);break;case 4:t.vertexAttrib4fv(D.location,j);break;default:t.vertexAttrib1fv(D.location,j)}}}}_()}function R(){C();for(const y in i){const b=i[y];for(const z in b){const k=b[z];for(const Y in k)h(k[Y].object),delete k[Y];delete b[z]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const b=i[y.id];for(const z in b){const k=b[z];for(const Y in k)h(k[Y].object),delete k[Y];delete b[z]}delete i[y.id]}function T(y){for(const b in i){const z=i[b];if(z[y.id]===void 0)continue;const k=z[y.id];for(const Y in k)h(k[Y].object),delete k[Y];delete z[y.id]}}function C(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function _1(t,e,n){let i;function r(u){i=u}function s(u,h){t.drawArrays(i,u,h),n.update(h,i,1)}function o(u,h,p){p!==0&&(t.drawArraysInstanced(i,u,h,p),n.update(h,i,p))}function a(u,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,p);let c=0;for(let v=0;v<p;v++)c+=h[v];n.update(c,i,1)}function l(u,h,p,d){if(p===0)return;const c=e.get("WEBGL_multi_draw");if(c===null)for(let v=0;v<u.length;v++)o(u[v],h[v],d[v]);else{c.multiDrawArraysInstancedWEBGL(i,u,0,h,0,d,0,p);let v=0;for(let x=0;x<p;x++)v+=h[x];for(let x=0;x<d.length;x++)n.update(v,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function v1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Wn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const T=A===Zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ti&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ni&&!T)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),c=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=c>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:p,maxTextures:d,maxVertexTextures:c,maxTextureSize:v,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:S,maxSamples:R}}function x1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new _r,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const c=p.length!==0||d||i!==0||r;return r=d,i=p.length,c},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){n=h(p,d,0)},this.setState=function(p,d,c){const v=p.clippingPlanes,x=p.clipIntersection,m=p.clipShadows,f=t.get(p);if(!r||v===null||v.length===0||s&&!m)s?h(null):u();else{const _=s?0:i,g=_*4;let S=f.clippingState||null;l.value=S,S=h(v,d,g,c);for(let R=0;R!==g;++R)S[R]=n[R];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,d,c,v){const x=p!==null?p.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const f=c+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,S=c;g!==x;++g,S+=4)o.copy(p[g]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function y1(t){let e=new WeakMap;function n(o,a){return a===pf?o.mapping=Us:a===mf&&(o.mapping=Ns),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===pf||a===mf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new LS(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class E0 extends y0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const gs=4,Jp=[.125,.215,.35,.446,.526,.582],yr=20,lc=new E0,em=new ze;let uc=null,cc=0,fc=0,dc=!1;const vr=(1+Math.sqrt(5))/2,ns=1/vr,tm=[new B(-vr,ns,0),new B(vr,ns,0),new B(-ns,0,vr),new B(ns,0,vr),new B(0,vr,-ns),new B(0,vr,ns),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class nm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){uc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uc,cc,fc),this._renderer.xr.enabled=dc,e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Us||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Zo,format:Wn,colorSpace:ar,depthBuffer:!1},r=im(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=im(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S1(s)),this._blurMaterial=M1(s,e,n)}return r}_compileMaterial(e){const n=new _n(this._lodPlanes[0],e);this._renderer.compile(n,lc)}_sceneToCubeUV(e,n,i,r){const a=new Rn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(em),h.toneMapping=er,h.autoClear=!1;const c=new Hl({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),v=new _n(new oi,c);let x=!1;const m=e.background;m?m.isColor&&(c.color.copy(m),e.background=null,x=!0):(c.color.copy(em),x=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const g=this._cubeSize;Va(r,_*g,f>2?g:0,g,g),h.setRenderTarget(r),x&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=p,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Us||e.mapping===Ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new _n(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Va(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,lc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=tm[(r-s-1)%tm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new _n(this._lodPlanes[r],u),d=u.uniforms,c=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*c):2*Math.PI/(2*yr-1),x=s/v,m=isFinite(s)?1+Math.floor(h*x):yr;m>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yr}`);const f=[];let _=0;for(let T=0;T<yr;++T){const C=T/x,E=Math.exp(-C*C/2);f.push(E),T===0?_+=E:T<m&&(_+=2*E)}for(let T=0;T<f.length;T++)f[T]=f[T]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-i;const S=this._sizeLods[r],R=3*S*(r>g-gs?r-g+gs:0),A=4*(this._cubeSize-S);Va(n,R,A,3*S,2*S),l.setRenderTarget(n),l.render(p,lc)}}function S1(t){const e=[],n=[],i=[];let r=t;const s=t-gs+1+Jp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-gs?l=Jp[o-t+gs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),h=-u,p=1+u,d=[h,h,p,h,p,p,h,h,p,p,h,p],c=6,v=6,x=3,m=2,f=1,_=new Float32Array(x*v*c),g=new Float32Array(m*v*c),S=new Float32Array(f*v*c);for(let A=0;A<c;A++){const T=A%3*2/3-1,C=A>2?0:-1,E=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];_.set(E,x*v*A),g.set(d,m*v*A);const y=[A,A,A,A,A,A];S.set(y,f*v*A)}const R=new Ri;R.setAttribute("position",new Yn(_,x)),R.setAttribute("uv",new Yn(g,m)),R.setAttribute("faceIndex",new Yn(S,f)),e.push(R),r>gs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function im(t,e,n){const i=new Ur(t,e,n);return i.texture.mapping=au,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Va(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function M1(t,e,n){const i=new Float32Array(yr),r=new B(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rh(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function rm(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rh(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function sm(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function rh(){return`

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
	`}function E1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===pf||l===mf,h=l===Us||l===Ns;if(u||h){let p=e.get(a);const d=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new nm(t)),p=u?n.fromEquirectangular(a,p):n.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const c=a.image;return u&&c&&c.height>0||h&&c&&r(c)?(n===null&&(n=new nm(t)),p=u?n.fromEquirectangular(a):n.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function w1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&d0("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function T1(t,e,n,i){const r={},s=new WeakMap;function o(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const c=s.get(d);c&&(e.remove(c),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(p,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(p){const d=p.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const c=p.morphAttributes;for(const v in c){const x=c[v];for(let m=0,f=x.length;m<f;m++)e.update(x[m],t.ARRAY_BUFFER)}}function u(p){const d=[],c=p.index,v=p.attributes.position;let x=0;if(c!==null){const _=c.array;x=c.version;for(let g=0,S=_.length;g<S;g+=3){const R=_[g+0],A=_[g+1],T=_[g+2];d.push(R,A,A,T,T,R)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,S=_.length/3-1;g<S;g+=3){const R=g+0,A=g+1,T=g+2;d.push(R,A,A,T,T,R)}}else return;const m=new(f0(d)?v0:_0)(d,1);m.version=x;const f=s.get(p);f&&e.remove(f),s.set(p,m)}function h(p){const d=s.get(p);if(d){const c=p.index;c!==null&&d.version<c.version&&u(p)}else u(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function A1(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,c){t.drawElements(i,c,s,d*o),n.update(c,i,1)}function u(d,c,v){v!==0&&(t.drawElementsInstanced(i,c,s,d*o,v),n.update(c,i,v))}function h(d,c,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,s,d,0,v);let m=0;for(let f=0;f<v;f++)m+=c[f];n.update(m,i,1)}function p(d,c,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)u(d[f]/o,c[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,c,0,s,d,0,x,0,v);let f=0;for(let _=0;_<v;_++)f+=c[_];for(let _=0;_<x.length;_++)n.update(f,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function C1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function R1(t,e,n){const i=new WeakMap,r=new Ct;function s(o,a,l){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==p){let y=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var c=y;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let R=a.attributes.position.count*S,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*A*4*p),C=new p0(T,R,A,p);C.type=ni,C.needsUpdate=!0;const E=S*4;for(let b=0;b<p;b++){const z=f[b],k=_[b],Y=g[b],q=R*A*4*b;for(let X=0;X<z.count;X++){const K=X*E;v===!0&&(r.fromBufferAttribute(z,X),T[q+K+0]=r.x,T[q+K+1]=r.y,T[q+K+2]=r.z,T[q+K+3]=0),x===!0&&(r.fromBufferAttribute(k,X),T[q+K+4]=r.x,T[q+K+5]=r.y,T[q+K+6]=r.z,T[q+K+7]=0),m===!0&&(r.fromBufferAttribute(Y,X),T[q+K+8]=r.x,T[q+K+9]=r.y,T[q+K+10]=r.z,T[q+K+11]=Y.itemSize===4?r.w:1)}}d={count:p,texture:C,size:new Ve(R,A)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<u.length;m++)v+=u[m];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function P1(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return p}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class w0 extends Zt{constructor(e,n,i,r,s,o,a,l,u,h=ws){if(h!==ws&&h!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ws&&(i=Ir),i===void 0&&h===Os&&(i=Fs),super(null,r,s,o,a,l,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const T0=new Zt,om=new w0(1,1),A0=new p0,C0=new mS,R0=new S0,am=[],lm=[],um=new Float32Array(16),cm=new Float32Array(9),fm=new Float32Array(4);function Ws(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=am[r];if(s===void 0&&(s=new Float32Array(r),am[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function uu(t,e){let n=lm[e];n===void 0&&(n=new Int32Array(e),lm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function b1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function L1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function D1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function I1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function U1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(bt(n,i))return;fm.set(i),t.uniformMatrix2fv(this.addr,!1,fm),Lt(n,i)}}function N1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(bt(n,i))return;cm.set(i),t.uniformMatrix3fv(this.addr,!1,cm),Lt(n,i)}}function F1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(bt(n,i))return;um.set(i),t.uniformMatrix4fv(this.addr,!1,um),Lt(n,i)}}function O1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function k1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function B1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function H1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function V1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function G1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function W1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function X1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(om.compareFunction=c0,s=om):s=T0,n.setTexture2D(e||s,r)}function j1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||C0,r)}function Y1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||R0,r)}function $1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||A0,r)}function q1(t){switch(t){case 5126:return b1;case 35664:return L1;case 35665:return D1;case 35666:return I1;case 35674:return U1;case 35675:return N1;case 35676:return F1;case 5124:case 35670:return O1;case 35667:case 35671:return k1;case 35668:case 35672:return z1;case 35669:case 35673:return B1;case 5125:return H1;case 36294:return V1;case 36295:return G1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return Y1;case 36289:case 36303:case 36311:case 36292:return $1}}function K1(t,e){t.uniform1fv(this.addr,e)}function Z1(t,e){const n=Ws(e,this.size,2);t.uniform2fv(this.addr,n)}function Q1(t,e){const n=Ws(e,this.size,3);t.uniform3fv(this.addr,n)}function J1(t,e){const n=Ws(e,this.size,4);t.uniform4fv(this.addr,n)}function ew(t,e){const n=Ws(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function tw(t,e){const n=Ws(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function nw(t,e){const n=Ws(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function iw(t,e){t.uniform1iv(this.addr,e)}function rw(t,e){t.uniform2iv(this.addr,e)}function sw(t,e){t.uniform3iv(this.addr,e)}function ow(t,e){t.uniform4iv(this.addr,e)}function aw(t,e){t.uniform1uiv(this.addr,e)}function lw(t,e){t.uniform2uiv(this.addr,e)}function uw(t,e){t.uniform3uiv(this.addr,e)}function cw(t,e){t.uniform4uiv(this.addr,e)}function fw(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||T0,s[o])}function dw(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||C0,s[o])}function hw(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||R0,s[o])}function pw(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||A0,s[o])}function mw(t){switch(t){case 5126:return K1;case 35664:return Z1;case 35665:return Q1;case 35666:return J1;case 35674:return ew;case 35675:return tw;case 35676:return nw;case 5124:case 35670:return iw;case 35667:case 35671:return rw;case 35668:case 35672:return sw;case 35669:case 35673:return ow;case 5125:return aw;case 36294:return lw;case 36295:return uw;case 36296:return cw;case 35678:case 36198:case 36298:case 36306:case 35682:return fw;case 35679:case 36299:case 36307:return dw;case 35680:case 36300:case 36308:case 36293:return hw;case 36289:case 36303:case 36311:case 36292:return pw}}class gw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=q1(n.type)}}class _w{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mw(n.type)}}class vw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const hc=/(\w+)(\])?(\[|\.)?/g;function dm(t,e){t.seq.push(e),t.map[e.id]=e}function xw(t,e,n){const i=t.name,r=i.length;for(hc.lastIndex=0;;){const s=hc.exec(i),o=hc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){dm(n,u===void 0?new gw(a,t,e):new _w(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new vw(a),dm(n,p)),n=p}}}class ll{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);xw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function hm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const yw=37297;let Sw=0;function Mw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Ew(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===kl&&n===Ol?i="LinearDisplayP3ToLinearSRGB":e===Ol&&n===kl&&(i="LinearSRGBToLinearDisplayP3"),t){case ar:case lu:return[i,"LinearTransferOETF"];case Hn:case th:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function pm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Mw(t.getShaderSource(e),o)}else return r}function ww(t,e){const n=Ew(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Tw(t,e){let n;switch(e){case Gy:n="Linear";break;case Wy:n="Reinhard";break;case Xy:n="OptimizedCineon";break;case jy:n="ACESFilmic";break;case $y:n="AgX";break;case qy:n="Neutral";break;case Yy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Aw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function Cw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Rw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ho(t){return t!==""}function mm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xf(t){return t.replace(Pw,Lw)}const bw=new Map;function Lw(t,e){let n=Fe[e];if(n===void 0){const i=bw.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xf(n)}const Dw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(t){return t.replace(Dw,Iw)}function Iw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Uw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Q_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===my?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function Nw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Us:case Ns:e="ENVMAP_TYPE_CUBE";break;case au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function Ow(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Yd:e="ENVMAP_BLENDING_MULTIPLY";break;case Hy:e="ENVMAP_BLENDING_MIX";break;case Vy:e="ENVMAP_BLENDING_ADD";break}return e}function kw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function zw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Uw(n),u=Nw(n),h=Fw(n),p=Ow(n),d=kw(n),c=Aw(n),v=Cw(s),x=r.createProgram();let m,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ho).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ho).join(`
`),f.length>0&&(f+=`
`)):(m=[vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),f=[vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==er?"#define TONE_MAPPING":"",n.toneMapping!==er?Fe.tonemapping_pars_fragment:"",n.toneMapping!==er?Tw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,ww("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ho).join(`
`)),o=Xf(o),o=mm(o,n),o=gm(o,n),a=Xf(a),a=mm(a,n),a=gm(a,n),o=_m(o),a=_m(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Ip?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ip?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const g=_+m+o,S=_+f+a,R=hm(r,r.VERTEX_SHADER,g),A=hm(r,r.FRAGMENT_SHADER,S);r.attachShader(x,R),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(b){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(x).trim(),k=r.getShaderInfoLog(R).trim(),Y=r.getShaderInfoLog(A).trim();let q=!0,X=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,R,A);else{const K=pm(r,R,"vertex"),D=pm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+z+`
`+K+`
`+D)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||Y==="")&&(X=!1);X&&(b.diagnostics={runnable:q,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(R),r.deleteShader(A),C=new ll(r,x),E=Rw(r,x)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,yw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Sw++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let Bw=0;class Hw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Vw(e),n.set(e,i)),i}}class Vw{constructor(e){this.id=Bw++,this.code=e,this.usedTimes=0}}function Gw(t,e,n,i,r,s,o){const a=new nh,l=new Hw,u=new Set,h=[],p=r.logarithmicDepthBuffer,d=r.vertexTextures;let c=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,y,b,z,k){const Y=z.fog,q=k.geometry,X=E.isMeshStandardMaterial?z.environment:null,K=(E.isMeshStandardMaterial?n:e).get(E.envMap||X),D=K&&K.mapping===au?K.image.height:null,F=v[E.type];E.precision!==null&&(c=r.getMaxPrecision(E.precision),c!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",c,"instead."));const j=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Q=j!==void 0?j.length:0;let re=0;q.morphAttributes.position!==void 0&&(re=1),q.morphAttributes.normal!==void 0&&(re=2),q.morphAttributes.color!==void 0&&(re=3);let de,I,W,$;if(F){const qe=Qn[F];de=qe.vertexShader,I=qe.fragmentShader}else de=E.vertexShader,I=E.fragmentShader,l.update(E),W=l.getVertexShaderID(E),$=l.getFragmentShaderID(E);const ee=t.getRenderTarget(),ge=k.isInstancedMesh===!0,we=k.isBatchedMesh===!0,be=!!E.map,Je=!!E.matcap,L=!!K,ut=!!E.aoMap,Ye=!!E.lightMap,$e=!!E.bumpMap,Me=!!E.normalMap,gt=!!E.displacementMap,De=!!E.emissiveMap,Ce=!!E.metalnessMap,P=!!E.roughnessMap,M=E.anisotropy>0,H=E.clearcoat>0,ie=E.dispersion>0,oe=E.iridescence>0,ne=E.sheen>0,Te=E.transmission>0,he=M&&!!E.anisotropyMap,ve=H&&!!E.clearcoatMap,Ne=H&&!!E.clearcoatNormalMap,ae=H&&!!E.clearcoatRoughnessMap,_e=oe&&!!E.iridescenceMap,We=oe&&!!E.iridescenceThicknessMap,Ie=ne&&!!E.sheenColorMap,xe=ne&&!!E.sheenRoughnessMap,Ue=!!E.specularMap,Be=!!E.specularColorMap,ct=!!E.specularIntensityMap,U=Te&&!!E.transmissionMap,le=Te&&!!E.thicknessMap,Z=!!E.gradientMap,J=!!E.alphaMap,ce=E.alphaTest>0,Re=!!E.alphaHash,Xe=!!E.extensions;let St=er;E.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(St=t.toneMapping);const Ot={shaderID:F,shaderType:E.type,shaderName:E.name,vertexShader:de,fragmentShader:I,defines:E.defines,customVertexShaderID:W,customFragmentShaderID:$,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:c,batching:we,batchingColor:we&&k._colorsTexture!==null,instancing:ge,instancingColor:ge&&k.instanceColor!==null,instancingMorph:ge&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ar,alphaToCoverage:!!E.alphaToCoverage,map:be,matcap:Je,envMap:L,envMapMode:L&&K.mapping,envMapCubeUVHeight:D,aoMap:ut,lightMap:Ye,bumpMap:$e,normalMap:Me,displacementMap:d&&gt,emissiveMap:De,normalMapObjectSpace:Me&&E.normalMapType===Jy,normalMapTangentSpace:Me&&E.normalMapType===u0,metalnessMap:Ce,roughnessMap:P,anisotropy:M,anisotropyMap:he,clearcoat:H,clearcoatMap:ve,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ae,dispersion:ie,iridescence:oe,iridescenceMap:_e,iridescenceThicknessMap:We,sheen:ne,sheenColorMap:Ie,sheenRoughnessMap:xe,specularMap:Ue,specularColorMap:Be,specularIntensityMap:ct,transmission:Te,transmissionMap:U,thicknessMap:le,gradientMap:Z,opaque:E.transparent===!1&&E.blending===Es&&E.alphaToCoverage===!1,alphaMap:J,alphaTest:ce,alphaHash:Re,combine:E.combine,mapUv:be&&x(E.map.channel),aoMapUv:ut&&x(E.aoMap.channel),lightMapUv:Ye&&x(E.lightMap.channel),bumpMapUv:$e&&x(E.bumpMap.channel),normalMapUv:Me&&x(E.normalMap.channel),displacementMapUv:gt&&x(E.displacementMap.channel),emissiveMapUv:De&&x(E.emissiveMap.channel),metalnessMapUv:Ce&&x(E.metalnessMap.channel),roughnessMapUv:P&&x(E.roughnessMap.channel),anisotropyMapUv:he&&x(E.anisotropyMap.channel),clearcoatMapUv:ve&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:We&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:xe&&x(E.sheenRoughnessMap.channel),specularMapUv:Ue&&x(E.specularMap.channel),specularColorMapUv:Be&&x(E.specularColorMap.channel),specularIntensityMapUv:ct&&x(E.specularIntensityMap.channel),transmissionMapUv:U&&x(E.transmissionMap.channel),thicknessMapUv:le&&x(E.thicknessMap.channel),alphaMapUv:J&&x(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Me||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(be||J),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:re,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:St,decodeVideoTexture:be&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ei,flipSided:E.side===un,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Xe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&E.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ot.vertexUv1s=u.has(1),Ot.vertexUv2s=u.has(2),Ot.vertexUv3s=u.has(3),u.clear(),Ot}function f(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const b in E.defines)y.push(b),y.push(E.defines[b]);return E.isRawShaderMaterial===!1&&(_(y,E),g(y,E),y.push(t.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function _(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function g(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),E.push(a.mask)}function S(E){const y=v[E.type];let b;if(y){const z=Qn[y];b=CS.clone(z.uniforms)}else b=E.uniforms;return b}function R(E,y){let b;for(let z=0,k=h.length;z<k;z++){const Y=h[z];if(Y.cacheKey===y){b=Y,++b.usedTimes;break}}return b===void 0&&(b=new zw(t,y,E,s),h.push(b)),b}function A(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function T(E){l.remove(E)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:C}}function Ww(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Xw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function xm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ym(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,d,c,v,x,m){let f=t[e];return f===void 0?(f={id:p.id,object:p,geometry:d,material:c,groupOrder:v,renderOrder:p.renderOrder,z:x,group:m},t[e]=f):(f.id=p.id,f.object=p,f.geometry=d,f.material=c,f.groupOrder=v,f.renderOrder=p.renderOrder,f.z=x,f.group=m),e++,f}function a(p,d,c,v,x,m){const f=o(p,d,c,v,x,m);c.transmission>0?i.push(f):c.transparent===!0?r.push(f):n.push(f)}function l(p,d,c,v,x,m){const f=o(p,d,c,v,x,m);c.transmission>0?i.unshift(f):c.transparent===!0?r.unshift(f):n.unshift(f)}function u(p,d){n.length>1&&n.sort(p||Xw),i.length>1&&i.sort(d||xm),r.length>1&&r.sort(d||xm)}function h(){for(let p=e,d=t.length;p<d;p++){const c=t[p];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:u}}function jw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new ym,t.set(i,[o])):r>=s.length?(o=new ym,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Yw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new ze};break;case"SpotLight":n={position:new B,direction:new B,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function $w(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let qw=0;function Kw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Zw(t){const e=new Yw,n=$w(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new B);const r=new B,s=new ot,o=new ot;function a(u){let h=0,p=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let c=0,v=0,x=0,m=0,f=0,_=0,g=0,S=0,R=0,A=0,T=0;u.sort(Kw);for(let E=0,y=u.length;E<y;E++){const b=u[E],z=b.color,k=b.intensity,Y=b.distance,q=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=z.r*k,p+=z.g*k,d+=z.b*k;else if(b.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(b.sh.coefficients[X],k);T++}else if(b.isDirectionalLight){const X=e.get(b);if(X.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const K=b.shadow,D=n.get(b);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.directionalShadow[c]=D,i.directionalShadowMap[c]=q,i.directionalShadowMatrix[c]=b.shadow.matrix,_++}i.directional[c]=X,c++}else if(b.isSpotLight){const X=e.get(b);X.position.setFromMatrixPosition(b.matrixWorld),X.color.copy(z).multiplyScalar(k),X.distance=Y,X.coneCos=Math.cos(b.angle),X.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),X.decay=b.decay,i.spot[x]=X;const K=b.shadow;if(b.map&&(i.spotLightMap[R]=b.map,R++,K.updateMatrices(b),b.castShadow&&A++),i.spotLightMatrix[x]=K.matrix,b.castShadow){const D=n.get(b);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=q,S++}x++}else if(b.isRectAreaLight){const X=e.get(b);X.color.copy(z).multiplyScalar(k),X.halfWidth.set(b.width*.5,0,0),X.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=X,m++}else if(b.isPointLight){const X=e.get(b);if(X.color.copy(b.color).multiplyScalar(b.intensity),X.distance=b.distance,X.decay=b.decay,b.castShadow){const K=b.shadow,D=n.get(b);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,D.shadowCameraNear=K.camera.near,D.shadowCameraFar=K.camera.far,i.pointShadow[v]=D,i.pointShadowMap[v]=q,i.pointShadowMatrix[v]=b.shadow.matrix,g++}i.point[v]=X,v++}else if(b.isHemisphereLight){const X=e.get(b);X.skyColor.copy(b.color).multiplyScalar(k),X.groundColor.copy(b.groundColor).multiplyScalar(k),i.hemi[f]=X,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==c||C.pointLength!==v||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==_||C.numPointShadows!==g||C.numSpotShadows!==S||C.numSpotMaps!==R||C.numLightProbes!==T)&&(i.directional.length=c,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=S+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,C.directionalLength=c,C.pointLength=v,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=_,C.numPointShadows=g,C.numSpotShadows=S,C.numSpotMaps=R,C.numLightProbes=T,i.version=qw++)}function l(u,h){let p=0,d=0,c=0,v=0,x=0;const m=h.matrixWorldInverse;for(let f=0,_=u.length;f<_;f++){const g=u[f];if(g.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(g.isSpotLight){const S=i.spot[c];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),c++}else if(g.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(g.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),d++}else if(g.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Sm(t){const e=new Zw(t),n=[],i=[];function r(h){u.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Qw(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Sm(t),e.set(r,[a])):s>=o.length?(a=new Sm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Jw extends ta{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eT extends ta{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nT=`uniform sampler2D shadow_pass;
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
}`;function iT(t,e,n){let i=new ih;const r=new Ve,s=new Ve,o=new Ct,a=new Jw({depthPacking:Qy}),l=new eT,u={},h=n.maxTextureSize,p={[ir]:un,[un]:ir,[ei]:ei},d=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:tT,fragmentShader:nT}),c=d.clone();c.defines.HORIZONTAL_PASS=1;const v=new Ri;v.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new _n(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Q_;let f=this.type;this.render=function(A,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),y=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Ji),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=f!==hi&&this.type===hi,Y=f===hi&&this.type!==hi;for(let q=0,X=A.length;q<X;q++){const K=A[q],D=K.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const F=D.getFrameExtents();if(r.multiply(F),s.copy(D.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/F.x),r.x=s.x*F.x,D.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/F.y),r.y=s.y*F.y,D.mapSize.y=s.y)),D.map===null||k===!0||Y===!0){const Q=this.type!==hi?{minFilter:sn,magFilter:sn}:{};D.map!==null&&D.map.dispose(),D.map=new Ur(r.x,r.y,Q),D.map.texture.name=K.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const j=D.getViewportCount();for(let Q=0;Q<j;Q++){const re=D.getViewport(Q);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),z.viewport(o),D.updateMatrices(K,Q),i=D.getFrustum(),S(T,C,D.camera,K,this.type)}D.isPointLightShadow!==!0&&this.type===hi&&_(D,C),D.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(E,y,b)};function _(A,T){const C=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,c.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,c.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ur(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,C,d,x,null),c.uniforms.shadow_pass.value=A.mapPass.texture,c.uniforms.resolution.value=A.mapSize,c.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,C,c,x,null)}function g(A,T,C,E){let y=null;const b=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)y=b;else if(y=C.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=y.uuid,k=T.uuid;let Y=u[z];Y===void 0&&(Y={},u[z]=Y);let q=Y[k];q===void 0&&(q=y.clone(),Y[k]=q,T.addEventListener("dispose",R)),y=q}if(y.visible=T.visible,y.wireframe=T.wireframe,E===hi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:p[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=t.properties.get(y);z.light=C}return y}function S(A,T,C,E,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===hi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const k=e.update(A),Y=A.material;if(Array.isArray(Y)){const q=k.groups;for(let X=0,K=q.length;X<K;X++){const D=q[X],F=Y[D.materialIndex];if(F&&F.visible){const j=g(A,F,E,y);A.onBeforeShadow(t,A,T,C,k,j,D),t.renderBufferDirect(C,null,k,j,A,D),A.onAfterShadow(t,A,T,C,k,j,D)}}}else if(Y.visible){const q=g(A,Y,E,y);A.onBeforeShadow(t,A,T,C,k,q,null),t.renderBufferDirect(C,null,k,q,A,null),A.onAfterShadow(t,A,T,C,k,q,null)}}const z=A.children;for(let k=0,Y=z.length;k<Y;k++)S(z[k],T,C,E,y)}function R(A){A.target.removeEventListener("dispose",R);for(const C in u){const E=u[C],y=A.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function rT(t){function e(){let U=!1;const le=new Ct;let Z=null;const J=new Ct(0,0,0,0);return{setMask:function(ce){Z!==ce&&!U&&(t.colorMask(ce,ce,ce,ce),Z=ce)},setLocked:function(ce){U=ce},setClear:function(ce,Re,Xe,St,Ot){Ot===!0&&(ce*=St,Re*=St,Xe*=St),le.set(ce,Re,Xe,St),J.equals(le)===!1&&(t.clearColor(ce,Re,Xe,St),J.copy(le))},reset:function(){U=!1,Z=null,J.set(-1,0,0,0)}}}function n(){let U=!1,le=null,Z=null,J=null;return{setTest:function(ce){ce?$(t.DEPTH_TEST):ee(t.DEPTH_TEST)},setMask:function(ce){le!==ce&&!U&&(t.depthMask(ce),le=ce)},setFunc:function(ce){if(Z!==ce){switch(ce){case Uy:t.depthFunc(t.NEVER);break;case Ny:t.depthFunc(t.ALWAYS);break;case Fy:t.depthFunc(t.LESS);break;case Nl:t.depthFunc(t.LEQUAL);break;case Oy:t.depthFunc(t.EQUAL);break;case ky:t.depthFunc(t.GEQUAL);break;case zy:t.depthFunc(t.GREATER);break;case By:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=ce}},setLocked:function(ce){U=ce},setClear:function(ce){J!==ce&&(t.clearDepth(ce),J=ce)},reset:function(){U=!1,le=null,Z=null,J=null}}}function i(){let U=!1,le=null,Z=null,J=null,ce=null,Re=null,Xe=null,St=null,Ot=null;return{setTest:function(qe){U||(qe?$(t.STENCIL_TEST):ee(t.STENCIL_TEST))},setMask:function(qe){le!==qe&&!U&&(t.stencilMask(qe),le=qe)},setFunc:function(qe,ai,qn){(Z!==qe||J!==ai||ce!==qn)&&(t.stencilFunc(qe,ai,qn),Z=qe,J=ai,ce=qn)},setOp:function(qe,ai,qn){(Re!==qe||Xe!==ai||St!==qn)&&(t.stencilOp(qe,ai,qn),Re=qe,Xe=ai,St=qn)},setLocked:function(qe){U=qe},setClear:function(qe){Ot!==qe&&(t.clearStencil(qe),Ot=qe)},reset:function(){U=!1,le=null,Z=null,J=null,ce=null,Re=null,Xe=null,St=null,Ot=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},h={},p=new WeakMap,d=[],c=null,v=!1,x=null,m=null,f=null,_=null,g=null,S=null,R=null,A=new ze(0,0,0),T=0,C=!1,E=null,y=null,b=null,z=null,k=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,X=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=X>=1):K.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=X>=2);let D=null,F={};const j=t.getParameter(t.SCISSOR_BOX),Q=t.getParameter(t.VIEWPORT),re=new Ct().fromArray(j),de=new Ct().fromArray(Q);function I(U,le,Z,J){const ce=new Uint8Array(4),Re=t.createTexture();t.bindTexture(U,Re),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<Z;Xe++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(le+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return Re}const W={};W[t.TEXTURE_2D]=I(t.TEXTURE_2D,t.TEXTURE_2D,1),W[t.TEXTURE_CUBE_MAP]=I(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[t.TEXTURE_2D_ARRAY]=I(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),W[t.TEXTURE_3D]=I(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),$(t.DEPTH_TEST),s.setFunc(Nl),$e(!1),Me(Cp),$(t.CULL_FACE),ut(Ji);function $(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function ee(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function ge(U,le){return h[U]!==le?(t.bindFramebuffer(U,le),h[U]=le,U===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=le),U===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=le),!0):!1}function we(U,le){let Z=d,J=!1;if(U){Z=p.get(le),Z===void 0&&(Z=[],p.set(le,Z));const ce=U.textures;if(Z.length!==ce.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let Re=0,Xe=ce.length;Re<Xe;Re++)Z[Re]=t.COLOR_ATTACHMENT0+Re;Z.length=ce.length,J=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,J=!0);J&&t.drawBuffers(Z)}function be(U){return c!==U?(t.useProgram(U),c=U,!0):!1}const Je={[xr]:t.FUNC_ADD,[_y]:t.FUNC_SUBTRACT,[vy]:t.FUNC_REVERSE_SUBTRACT};Je[xy]=t.MIN,Je[yy]=t.MAX;const L={[Sy]:t.ZERO,[My]:t.ONE,[Ey]:t.SRC_COLOR,[df]:t.SRC_ALPHA,[Py]:t.SRC_ALPHA_SATURATE,[Cy]:t.DST_COLOR,[Ty]:t.DST_ALPHA,[wy]:t.ONE_MINUS_SRC_COLOR,[hf]:t.ONE_MINUS_SRC_ALPHA,[Ry]:t.ONE_MINUS_DST_COLOR,[Ay]:t.ONE_MINUS_DST_ALPHA,[by]:t.CONSTANT_COLOR,[Ly]:t.ONE_MINUS_CONSTANT_COLOR,[Dy]:t.CONSTANT_ALPHA,[Iy]:t.ONE_MINUS_CONSTANT_ALPHA};function ut(U,le,Z,J,ce,Re,Xe,St,Ot,qe){if(U===Ji){v===!0&&(ee(t.BLEND),v=!1);return}if(v===!1&&($(t.BLEND),v=!0),U!==gy){if(U!==x||qe!==C){if((m!==xr||g!==xr)&&(t.blendEquation(t.FUNC_ADD),m=xr,g=xr),qe)switch(U){case Es:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Rp:t.blendFunc(t.ONE,t.ONE);break;case Pp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Es:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Rp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Pp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}f=null,_=null,S=null,R=null,A.set(0,0,0),T=0,x=U,C=qe}return}ce=ce||le,Re=Re||Z,Xe=Xe||J,(le!==m||ce!==g)&&(t.blendEquationSeparate(Je[le],Je[ce]),m=le,g=ce),(Z!==f||J!==_||Re!==S||Xe!==R)&&(t.blendFuncSeparate(L[Z],L[J],L[Re],L[Xe]),f=Z,_=J,S=Re,R=Xe),(St.equals(A)===!1||Ot!==T)&&(t.blendColor(St.r,St.g,St.b,Ot),A.copy(St),T=Ot),x=U,C=!1}function Ye(U,le){U.side===ei?ee(t.CULL_FACE):$(t.CULL_FACE);let Z=U.side===un;le&&(Z=!Z),$e(Z),U.blending===Es&&U.transparent===!1?ut(Ji):ut(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const J=U.stencilWrite;o.setTest(J),J&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),De(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?$(t.SAMPLE_ALPHA_TO_COVERAGE):ee(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(U){E!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),E=U)}function Me(U){U!==hy?($(t.CULL_FACE),U!==y&&(U===Cp?t.cullFace(t.BACK):U===py?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ee(t.CULL_FACE),y=U}function gt(U){U!==b&&(q&&t.lineWidth(U),b=U)}function De(U,le,Z){U?($(t.POLYGON_OFFSET_FILL),(z!==le||k!==Z)&&(t.polygonOffset(le,Z),z=le,k=Z)):ee(t.POLYGON_OFFSET_FILL)}function Ce(U){U?$(t.SCISSOR_TEST):ee(t.SCISSOR_TEST)}function P(U){U===void 0&&(U=t.TEXTURE0+Y-1),D!==U&&(t.activeTexture(U),D=U)}function M(U,le,Z){Z===void 0&&(D===null?Z=t.TEXTURE0+Y-1:Z=D);let J=F[Z];J===void 0&&(J={type:void 0,texture:void 0},F[Z]=J),(J.type!==U||J.texture!==le)&&(D!==Z&&(t.activeTexture(Z),D=Z),t.bindTexture(U,le||W[U]),J.type=U,J.texture=le)}function H(){const U=F[D];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ie(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function We(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(U){re.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),re.copy(U))}function xe(U){de.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),de.copy(U))}function Ue(U,le){let Z=l.get(le);Z===void 0&&(Z=new WeakMap,l.set(le,Z));let J=Z.get(U);J===void 0&&(J=t.getUniformBlockIndex(le,U.name),Z.set(U,J))}function Be(U,le){const J=l.get(le).get(U);a.get(le)!==J&&(t.uniformBlockBinding(le,J,U.__bindingPointIndex),a.set(le,J))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},D=null,F={},h={},p=new WeakMap,d=[],c=null,v=!1,x=null,m=null,f=null,_=null,g=null,S=null,R=null,A=new ze(0,0,0),T=0,C=!1,E=null,y=null,b=null,z=null,k=null,re.set(0,0,t.canvas.width,t.canvas.height),de.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:$,disable:ee,bindFramebuffer:ge,drawBuffers:we,useProgram:be,setBlending:ut,setMaterial:Ye,setFlipSided:$e,setCullFace:Me,setLineWidth:gt,setPolygonOffset:De,setScissorTest:Ce,activeTexture:P,bindTexture:M,unbindTexture:H,compressedTexImage2D:ie,compressedTexImage3D:oe,texImage2D:_e,texImage3D:We,updateUBOMapping:Ue,uniformBlockBinding:Be,texStorage2D:Ne,texStorage3D:ae,texSubImage2D:ne,texSubImage3D:Te,compressedTexSubImage2D:he,compressedTexSubImage3D:ve,scissor:Ie,viewport:xe,reset:ct}}function Mm(t,e,n,i){const r=sT(i);switch(n){case i0:return t*e;case s0:return t*e;case o0:return t*e*2;case Zd:return t*e/r.components*r.byteLength;case Qd:return t*e/r.components*r.byteLength;case a0:return t*e*2/r.components*r.byteLength;case Jd:return t*e*2/r.components*r.byteLength;case r0:return t*e*3/r.components*r.byteLength;case Wn:return t*e*4/r.components*r.byteLength;case eh:return t*e*4/r.components*r.byteLength;case il:case rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sl:case ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xf:case Sf:return Math.max(t,16)*Math.max(e,8)/4;case vf:case yf:return Math.max(t,8)*Math.max(e,8)/2;case Mf:case Ef:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case bf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Df:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case If:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Of:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case kf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case al:case zf:case Bf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case l0:case Hf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Vf:case Gf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function sT(t){switch(t){case Ti:case e0:return{byteLength:1,components:1};case Go:case t0:case Zo:return{byteLength:2,components:1};case qd:case Kd:return{byteLength:2,components:4};case Ir:case $d:case ni:return{byteLength:4,components:1};case n0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function oT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ve,h=new WeakMap;let p;const d=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,M){return c?new OffscreenCanvas(P,M):Bl("canvas")}function x(P,M,H){let ie=1;const oe=Ce(P);if((oe.width>H||oe.height>H)&&(ie=H/Math.max(oe.width,oe.height)),ie<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ne=Math.floor(ie*oe.width),Te=Math.floor(ie*oe.height);p===void 0&&(p=v(ne,Te));const he=M?v(ne,Te):p;return he.width=ne,he.height=Te,he.getContext("2d").drawImage(P,0,0,ne,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ne+"x"+Te+")."),he}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==sn&&P.minFilter!==Gn}function f(P){t.generateMipmap(P)}function _(P,M,H,ie,oe=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ne=M;if(M===t.RED&&(H===t.FLOAT&&(ne=t.R32F),H===t.HALF_FLOAT&&(ne=t.R16F),H===t.UNSIGNED_BYTE&&(ne=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.R8UI),H===t.UNSIGNED_SHORT&&(ne=t.R16UI),H===t.UNSIGNED_INT&&(ne=t.R32UI),H===t.BYTE&&(ne=t.R8I),H===t.SHORT&&(ne=t.R16I),H===t.INT&&(ne=t.R32I)),M===t.RG&&(H===t.FLOAT&&(ne=t.RG32F),H===t.HALF_FLOAT&&(ne=t.RG16F),H===t.UNSIGNED_BYTE&&(ne=t.RG8)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.RG8UI),H===t.UNSIGNED_SHORT&&(ne=t.RG16UI),H===t.UNSIGNED_INT&&(ne=t.RG32UI),H===t.BYTE&&(ne=t.RG8I),H===t.SHORT&&(ne=t.RG16I),H===t.INT&&(ne=t.RG32I)),M===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(ne=t.RGB9_E5),M===t.RGBA){const Te=oe?Fl:et.getTransfer(ie);H===t.FLOAT&&(ne=t.RGBA32F),H===t.HALF_FLOAT&&(ne=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ne=Te===rt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function g(P,M){let H;return P?M===null||M===Ir||M===Fs?H=t.DEPTH24_STENCIL8:M===ni?H=t.DEPTH32F_STENCIL8:M===Go&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ir||M===Fs?H=t.DEPTH_COMPONENT24:M===ni?H=t.DEPTH_COMPONENT32F:M===Go&&(H=t.DEPTH_COMPONENT16),H}function S(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==sn&&P.minFilter!==Gn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function R(P){const M=P.target;M.removeEventListener("dispose",R),T(M),M.isVideoTexture&&h.delete(M)}function A(P){const M=P.target;M.removeEventListener("dispose",A),E(M)}function T(P){const M=i.get(P);if(M.__webglInit===void 0)return;const H=P.source,ie=d.get(H);if(ie){const oe=ie[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&C(P),Object.keys(ie).length===0&&d.delete(H)}i.remove(P)}function C(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const H=P.source,ie=d.get(H);delete ie[M.__cacheKey],o.memory.textures--}function E(P){const M=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(M.__webglFramebuffer[ie]))for(let oe=0;oe<M.__webglFramebuffer[ie].length;oe++)t.deleteFramebuffer(M.__webglFramebuffer[ie][oe]);else t.deleteFramebuffer(M.__webglFramebuffer[ie]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ie])}else{if(Array.isArray(M.__webglFramebuffer))for(let ie=0;ie<M.__webglFramebuffer.length;ie++)t.deleteFramebuffer(M.__webglFramebuffer[ie]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ie=0;ie<M.__webglColorRenderbuffer.length;ie++)M.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ie]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=P.textures;for(let ie=0,oe=H.length;ie<oe;ie++){const ne=i.get(H[ie]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(H[ie])}i.remove(P)}let y=0;function b(){y=0}function z(){const P=y;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),y+=1,P}function k(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function Y(P,M){const H=i.get(P);if(P.isVideoTexture&&gt(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const ie=P.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(H,P,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function q(P,M){const H=i.get(P);if(P.version>0&&H.__version!==P.version){de(H,P,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function X(P,M){const H=i.get(P);if(P.version>0&&H.__version!==P.version){de(H,P,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function K(P,M){const H=i.get(P);if(P.version>0&&H.__version!==P.version){I(H,P,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const D={[gf]:t.REPEAT,[wr]:t.CLAMP_TO_EDGE,[_f]:t.MIRRORED_REPEAT},F={[sn]:t.NEAREST,[Ky]:t.NEAREST_MIPMAP_NEAREST,[Sa]:t.NEAREST_MIPMAP_LINEAR,[Gn]:t.LINEAR,[Hu]:t.LINEAR_MIPMAP_NEAREST,[Tr]:t.LINEAR_MIPMAP_LINEAR},j={[eS]:t.NEVER,[oS]:t.ALWAYS,[tS]:t.LESS,[c0]:t.LEQUAL,[nS]:t.EQUAL,[sS]:t.GEQUAL,[iS]:t.GREATER,[rS]:t.NOTEQUAL};function Q(P,M){if(M.type===ni&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Gn||M.magFilter===Hu||M.magFilter===Sa||M.magFilter===Tr||M.minFilter===Gn||M.minFilter===Hu||M.minFilter===Sa||M.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,D[M.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,D[M.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,D[M.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,F[M.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,F[M.minFilter]),M.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,j[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===sn||M.minFilter!==Sa&&M.minFilter!==Tr||M.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function re(P,M){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",R));const ie=M.source;let oe=d.get(ie);oe===void 0&&(oe={},d.set(ie,oe));const ne=k(M);if(ne!==P.__cacheKey){oe[ne]===void 0&&(oe[ne]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),oe[ne].usedTimes++;const Te=oe[P.__cacheKey];Te!==void 0&&(oe[P.__cacheKey].usedTimes--,Te.usedTimes===0&&C(M)),P.__cacheKey=ne,P.__webglTexture=oe[ne].texture}return H}function de(P,M,H){let ie=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=t.TEXTURE_3D);const oe=re(P,M),ne=M.source;n.bindTexture(ie,P.__webglTexture,t.TEXTURE0+H);const Te=i.get(ne);if(ne.version!==Te.__version||oe===!0){n.activeTexture(t.TEXTURE0+H);const he=et.getPrimaries(et.workingColorSpace),ve=M.colorSpace===Vi?null:et.getPrimaries(M.colorSpace),Ne=M.colorSpace===Vi||he===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ae=x(M.image,!1,r.maxTextureSize);ae=De(M,ae);const _e=s.convert(M.format,M.colorSpace),We=s.convert(M.type);let Ie=_(M.internalFormat,_e,We,M.colorSpace,M.isVideoTexture);Q(ie,M);let xe;const Ue=M.mipmaps,Be=M.isVideoTexture!==!0,ct=Te.__version===void 0||oe===!0,U=ne.dataReady,le=S(M,ae);if(M.isDepthTexture)Ie=g(M.format===Os,M.type),ct&&(Be?n.texStorage2D(t.TEXTURE_2D,1,Ie,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,Ie,ae.width,ae.height,0,_e,We,null));else if(M.isDataTexture)if(Ue.length>0){Be&&ct&&n.texStorage2D(t.TEXTURE_2D,le,Ie,Ue[0].width,Ue[0].height);for(let Z=0,J=Ue.length;Z<J;Z++)xe=Ue[Z],Be?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,xe.width,xe.height,_e,We,xe.data):n.texImage2D(t.TEXTURE_2D,Z,Ie,xe.width,xe.height,0,_e,We,xe.data);M.generateMipmaps=!1}else Be?(ct&&n.texStorage2D(t.TEXTURE_2D,le,Ie,ae.width,ae.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,_e,We,ae.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,ae.width,ae.height,0,_e,We,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,Ie,Ue[0].width,Ue[0].height,ae.depth);for(let Z=0,J=Ue.length;Z<J;Z++)if(xe=Ue[Z],M.format!==Wn)if(_e!==null)if(Be){if(U)if(M.layerUpdates.size>0){const ce=Mm(xe.width,xe.height,M.format,M.type);for(const Re of M.layerUpdates){const Xe=xe.data.subarray(Re*ce/xe.data.BYTES_PER_ELEMENT,(Re+1)*ce/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,Re,xe.width,xe.height,1,_e,Xe,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,xe.width,xe.height,ae.depth,_e,xe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,Ie,xe.width,xe.height,ae.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,xe.width,xe.height,ae.depth,_e,We,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,Ie,xe.width,xe.height,ae.depth,0,_e,We,xe.data)}else{Be&&ct&&n.texStorage2D(t.TEXTURE_2D,le,Ie,Ue[0].width,Ue[0].height);for(let Z=0,J=Ue.length;Z<J;Z++)xe=Ue[Z],M.format!==Wn?_e!==null?Be?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,xe.width,xe.height,_e,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,Ie,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,xe.width,xe.height,_e,We,xe.data):n.texImage2D(t.TEXTURE_2D,Z,Ie,xe.width,xe.height,0,_e,We,xe.data)}else if(M.isDataArrayTexture)if(Be){if(ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,Ie,ae.width,ae.height,ae.depth),U)if(M.layerUpdates.size>0){const Z=Mm(ae.width,ae.height,M.format,M.type);for(const J of M.layerUpdates){const ce=ae.data.subarray(J*Z/ae.data.BYTES_PER_ELEMENT,(J+1)*Z/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,ae.width,ae.height,1,_e,We,ce)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,_e,We,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,ae.width,ae.height,ae.depth,0,_e,We,ae.data);else if(M.isData3DTexture)Be?(ct&&n.texStorage3D(t.TEXTURE_3D,le,Ie,ae.width,ae.height,ae.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,_e,We,ae.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,ae.width,ae.height,ae.depth,0,_e,We,ae.data);else if(M.isFramebufferTexture){if(ct)if(Be)n.texStorage2D(t.TEXTURE_2D,le,Ie,ae.width,ae.height);else{let Z=ae.width,J=ae.height;for(let ce=0;ce<le;ce++)n.texImage2D(t.TEXTURE_2D,ce,Ie,Z,J,0,_e,We,null),Z>>=1,J>>=1}}else if(Ue.length>0){if(Be&&ct){const Z=Ce(Ue[0]);n.texStorage2D(t.TEXTURE_2D,le,Ie,Z.width,Z.height)}for(let Z=0,J=Ue.length;Z<J;Z++)xe=Ue[Z],Be?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,_e,We,xe):n.texImage2D(t.TEXTURE_2D,Z,Ie,_e,We,xe);M.generateMipmaps=!1}else if(Be){if(ct){const Z=Ce(ae);n.texStorage2D(t.TEXTURE_2D,le,Ie,Z.width,Z.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,We,ae)}else n.texImage2D(t.TEXTURE_2D,0,Ie,_e,We,ae);m(M)&&f(ie),Te.__version=ne.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function I(P,M,H){if(M.image.length!==6)return;const ie=re(P,M),oe=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+H);const ne=i.get(oe);if(oe.version!==ne.__version||ie===!0){n.activeTexture(t.TEXTURE0+H);const Te=et.getPrimaries(et.workingColorSpace),he=M.colorSpace===Vi?null:et.getPrimaries(M.colorSpace),ve=M.colorSpace===Vi||Te===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ne=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,_e=[];for(let J=0;J<6;J++)!Ne&&!ae?_e[J]=x(M.image[J],!0,r.maxCubemapSize):_e[J]=ae?M.image[J].image:M.image[J],_e[J]=De(M,_e[J]);const We=_e[0],Ie=s.convert(M.format,M.colorSpace),xe=s.convert(M.type),Ue=_(M.internalFormat,Ie,xe,M.colorSpace),Be=M.isVideoTexture!==!0,ct=ne.__version===void 0||ie===!0,U=oe.dataReady;let le=S(M,We);Q(t.TEXTURE_CUBE_MAP,M);let Z;if(Ne){Be&&ct&&n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Ue,We.width,We.height);for(let J=0;J<6;J++){Z=_e[J].mipmaps;for(let ce=0;ce<Z.length;ce++){const Re=Z[ce];M.format!==Wn?Ie!==null?Be?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,0,0,Re.width,Re.height,Ie,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,Ue,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,0,0,Re.width,Re.height,Ie,xe,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,Ue,Re.width,Re.height,0,Ie,xe,Re.data)}}}else{if(Z=M.mipmaps,Be&&ct){Z.length>0&&le++;const J=Ce(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Ue,J.width,J.height)}for(let J=0;J<6;J++)if(ae){Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e[J].width,_e[J].height,Ie,xe,_e[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ue,_e[J].width,_e[J].height,0,Ie,xe,_e[J].data);for(let ce=0;ce<Z.length;ce++){const Xe=Z[ce].image[J].image;Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,0,0,Xe.width,Xe.height,Ie,xe,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,Ue,Xe.width,Xe.height,0,Ie,xe,Xe.data)}}else{Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,xe,_e[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ue,Ie,xe,_e[J]);for(let ce=0;ce<Z.length;ce++){const Re=Z[ce];Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,0,0,Ie,xe,Re.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,Ue,Ie,xe,Re.image[J])}}}m(M)&&f(t.TEXTURE_CUBE_MAP),ne.__version=oe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function W(P,M,H,ie,oe,ne){const Te=s.convert(H.format,H.colorSpace),he=s.convert(H.type),ve=_(H.internalFormat,Te,he,H.colorSpace);if(!i.get(M).__hasExternalTextures){const ae=Math.max(1,M.width>>ne),_e=Math.max(1,M.height>>ne);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,ne,ve,ae,_e,M.depth,0,Te,he,null):n.texImage2D(oe,ne,ve,ae,_e,0,Te,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,oe,i.get(H).__webglTexture,0,$e(M)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,oe,i.get(H).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function $(P,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,P),M.depthBuffer){const ie=M.depthTexture,oe=ie&&ie.isDepthTexture?ie.type:null,ne=g(M.stencilBuffer,oe),Te=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=$e(M);Me(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,ne,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,ne,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ne,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,P)}else{const ie=M.textures;for(let oe=0;oe<ie.length;oe++){const ne=ie[oe],Te=s.convert(ne.format,ne.colorSpace),he=s.convert(ne.type),ve=_(ne.internalFormat,Te,he,ne.colorSpace),Ne=$e(M);H&&Me(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,ve,M.width,M.height):Me(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ne,ve,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ve,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ee(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const ie=i.get(M.depthTexture).__webglTexture,oe=$e(M);if(M.depthTexture.format===ws)Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(M.depthTexture.format===Os)Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ge(P){const M=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ee(M.__webglFramebuffer,P)}else if(H){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=t.createRenderbuffer(),$(M.__webglDepthbuffer[ie],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),$(M.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(P,M,H){const ie=i.get(P);M!==void 0&&W(ie.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&ge(P)}function be(P){const M=P.texture,H=i.get(P),ie=i.get(M);P.addEventListener("dispose",A);const oe=P.textures,ne=P.isWebGLCubeRenderTarget===!0,Te=oe.length>1;if(Te||(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=M.version,o.memory.textures++),ne){H.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[he]=[];for(let ve=0;ve<M.mipmaps.length;ve++)H.__webglFramebuffer[he][ve]=t.createFramebuffer()}else H.__webglFramebuffer[he]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)H.__webglFramebuffer[he]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(Te)for(let he=0,ve=oe.length;he<ve;he++){const Ne=i.get(oe[he]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&Me(P)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let he=0;he<oe.length;he++){const ve=oe[he];H.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[he]);const Ne=s.convert(ve.format,ve.colorSpace),ae=s.convert(ve.type),_e=_(ve.internalFormat,Ne,ae,ve.colorSpace,P.isXRRenderTarget===!0),We=$e(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,_e,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,H.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),$(H.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),Q(t.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)W(H.__webglFramebuffer[he][ve],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else W(H.__webglFramebuffer[he],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(M)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let he=0,ve=oe.length;he<ve;he++){const Ne=oe[he],ae=i.get(Ne);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),Q(t.TEXTURE_2D,Ne),W(H.__webglFramebuffer,P,Ne,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),m(Ne)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,ie.__webglTexture),Q(he,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)W(H.__webglFramebuffer[ve],P,M,t.COLOR_ATTACHMENT0,he,ve);else W(H.__webglFramebuffer,P,M,t.COLOR_ATTACHMENT0,he,0);m(M)&&f(he),n.unbindTexture()}P.depthBuffer&&ge(P)}function Je(P){const M=P.textures;for(let H=0,ie=M.length;H<ie;H++){const oe=M[H];if(m(oe)){const ne=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(oe).__webglTexture;n.bindTexture(ne,Te),f(ne),n.unbindTexture()}}}const L=[],ut=[];function Ye(P){if(P.samples>0){if(Me(P)===!1){const M=P.textures,H=P.width,ie=P.height;let oe=t.COLOR_BUFFER_BIT;const ne=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(P),he=M.length>1;if(he)for(let ve=0;ve<M.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);const Ne=i.get(M[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ne,0)}t.blitFramebuffer(0,0,H,ie,0,0,H,ie,oe,t.NEAREST),l===!0&&(L.length=0,ut.length=0,L.push(t.COLOR_ATTACHMENT0+ve),P.depthBuffer&&P.resolveDepthBuffer===!1&&(L.push(ne),ut.push(ne),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ut)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let ve=0;ve<M.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);const Ne=i.get(M[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function $e(P){return Math.min(r.maxSamples,P.samples)}function Me(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function gt(P){const M=o.render.frame;h.get(P)!==M&&(h.set(P,M),P.update())}function De(P,M){const H=P.colorSpace,ie=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==ar&&H!==Vi&&(et.getTransfer(H)===rt?(ie!==Wn||oe!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function Ce(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=b,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=K,this.rebindTextures=we,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=W,this.useMultisampledRTT=Me}function aT(t,e){function n(i,r=Vi){let s;const o=et.getTransfer(r);if(i===Ti)return t.UNSIGNED_BYTE;if(i===qd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Kd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===n0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===e0)return t.BYTE;if(i===t0)return t.SHORT;if(i===Go)return t.UNSIGNED_SHORT;if(i===$d)return t.INT;if(i===Ir)return t.UNSIGNED_INT;if(i===ni)return t.FLOAT;if(i===Zo)return t.HALF_FLOAT;if(i===i0)return t.ALPHA;if(i===r0)return t.RGB;if(i===Wn)return t.RGBA;if(i===s0)return t.LUMINANCE;if(i===o0)return t.LUMINANCE_ALPHA;if(i===ws)return t.DEPTH_COMPONENT;if(i===Os)return t.DEPTH_STENCIL;if(i===Zd)return t.RED;if(i===Qd)return t.RED_INTEGER;if(i===a0)return t.RG;if(i===Jd)return t.RG_INTEGER;if(i===eh)return t.RGBA_INTEGER;if(i===il||i===rl||i===sl||i===ol)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===il)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===il)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vf||i===xf||i===yf||i===Sf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mf||i===Ef||i===wf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Mf||i===Ef)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===wf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Tf||i===Af||i===Cf||i===Rf||i===Pf||i===bf||i===Lf||i===Df||i===If||i===Uf||i===Nf||i===Ff||i===Of||i===kf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Tf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Af)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Df)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===If)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ff)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Of)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===al||i===zf||i===Bf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===al)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===l0||i===Hf||i===Vf||i===Gf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===al)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Hf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class lT extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ga extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uT={type:"move"};class pc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),f=this._getHandJoint(u,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],d=h.position.distanceTo(p.position),c=.02,v=.005;u.inputState.pinching&&d>c+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=c-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ga;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const cT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fT=`
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

}`;class dT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Zt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ai({vertexShader:cT,fragmentShader:fT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _n(new Gs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hT extends Vs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,h=null,p=null,d=null,c=null,v=null;const x=new dT,m=n.getContextAttributes();let f=null,_=null;const g=[],S=[],R=new Ve;let A=null;const T=new Rn;T.layers.enable(1),T.viewport=new Ct;const C=new Rn;C.layers.enable(2),C.viewport=new Ct;const E=[T,C],y=new lT;y.layers.enable(1),y.layers.enable(2);let b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let W=g[I];return W===void 0&&(W=new pc,g[I]=W),W.getTargetRaySpace()},this.getControllerGrip=function(I){let W=g[I];return W===void 0&&(W=new pc,g[I]=W),W.getGripSpace()},this.getHand=function(I){let W=g[I];return W===void 0&&(W=new pc,g[I]=W),W.getHandSpace()};function k(I){const W=S.indexOf(I.inputSource);if(W===-1)return;const $=g[W];$!==void 0&&($.update(I.inputSource,I.frame,u||o),$.dispatchEvent({type:I.type,data:I.inputSource}))}function Y(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",q);for(let I=0;I<g.length;I++){const W=S[I];W!==null&&(S[I]=null,g[I].disconnect(W))}b=null,z=null,x.reset(),e.setRenderTarget(f),c=null,d=null,p=null,r=null,_=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(I){u=I},this.getBaseLayer=function(){return d!==null?d:c},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const W={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};c=new XRWebGLLayer(r,n,W),r.updateRenderState({baseLayer:c}),e.setPixelRatio(1),e.setSize(c.framebufferWidth,c.framebufferHeight,!1),_=new Ur(c.framebufferWidth,c.framebufferHeight,{format:Wn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let W=null,$=null,ee=null;m.depth&&(ee=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,W=m.stencil?Os:ws,$=m.stencil?Fs:Ir);const ge={colorFormat:n.RGBA8,depthFormat:ee,scaleFactor:s};p=new XRWebGLBinding(r,n),d=p.createProjectionLayer(ge),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Ur(d.textureWidth,d.textureHeight,{format:Wn,type:Ti,depthTexture:new w0(d.textureWidth,d.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(I){for(let W=0;W<I.removed.length;W++){const $=I.removed[W],ee=S.indexOf($);ee>=0&&(S[ee]=null,g[ee].disconnect($))}for(let W=0;W<I.added.length;W++){const $=I.added[W];let ee=S.indexOf($);if(ee===-1){for(let we=0;we<g.length;we++)if(we>=S.length){S.push($),ee=we;break}else if(S[we]===null){S[we]=$,ee=we;break}if(ee===-1)break}const ge=g[ee];ge&&ge.connect($)}}const X=new B,K=new B;function D(I,W,$){X.setFromMatrixPosition(W.matrixWorld),K.setFromMatrixPosition($.matrixWorld);const ee=X.distanceTo(K),ge=W.projectionMatrix.elements,we=$.projectionMatrix.elements,be=ge[14]/(ge[10]-1),Je=ge[14]/(ge[10]+1),L=(ge[9]+1)/ge[5],ut=(ge[9]-1)/ge[5],Ye=(ge[8]-1)/ge[0],$e=(we[8]+1)/we[0],Me=be*Ye,gt=be*$e,De=ee/(-Ye+$e),Ce=De*-Ye;W.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ce),I.translateZ(De),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const P=be+De,M=Je+De,H=Me-Ce,ie=gt+(ee-Ce),oe=L*Je/M*P,ne=ut*Je/M*P;I.projectionMatrix.makePerspective(H,ie,oe,ne,P,M),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function F(I,W){W===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(W.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;x.texture!==null&&(I.near=x.depthNear,I.far=x.depthFar),y.near=C.near=T.near=I.near,y.far=C.far=T.far=I.far,(b!==y.near||z!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,z=y.far,T.near=b,T.far=z,C.near=b,C.far=z,T.updateProjectionMatrix(),C.updateProjectionMatrix(),I.updateProjectionMatrix());const W=I.parent,$=y.cameras;F(y,W);for(let ee=0;ee<$.length;ee++)F($[ee],W);$.length===2?D(y,T,C):y.projectionMatrix.copy(T.projectionMatrix),j(I,y,W)};function j(I,W,$){$===null?I.matrix.copy(W.matrixWorld):(I.matrix.copy($.matrixWorld),I.matrix.invert(),I.matrix.multiply(W.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(W.projectionMatrix),I.projectionMatrixInverse.copy(W.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Wf*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&c===null))return l},this.setFoveation=function(I){l=I,d!==null&&(d.fixedFoveation=I),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=I)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Q=null;function re(I,W){if(h=W.getViewerPose(u||o),v=W,h!==null){const $=h.views;c!==null&&(e.setRenderTargetFramebuffer(_,c.framebuffer),e.setRenderTarget(_));let ee=!1;$.length!==y.cameras.length&&(y.cameras.length=0,ee=!0);for(let we=0;we<$.length;we++){const be=$[we];let Je=null;if(c!==null)Je=c.getViewport(be);else{const ut=p.getViewSubImage(d,be);Je=ut.viewport,we===0&&(e.setRenderTargetTextures(_,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(_))}let L=E[we];L===void 0&&(L=new Rn,L.layers.enable(we),L.viewport=new Ct,E[we]=L),L.matrix.fromArray(be.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(be.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Je.x,Je.y,Je.width,Je.height),we===0&&(y.matrix.copy(L.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ee===!0&&y.cameras.push(L)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const we=p.getDepthInformation($[0]);we&&we.isValid&&we.texture&&x.init(e,we,r.renderState)}}for(let $=0;$<g.length;$++){const ee=S[$],ge=g[$];ee!==null&&ge!==void 0&&ge.update(ee,W,u||o)}Q&&Q(I,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),v=null}const de=new M0;de.setAnimationLoop(re),this.setAnimationLoop=function(I){Q=I},this.dispose=function(){}}}const pr=new si,pT=new ot;function mT(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,x0(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,g,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),p(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&c(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,g):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===un&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===un&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),g=_.envMap,S=_.envMapRotation;g&&(m.envMap.value=g,pr.copy(S),pr.x*=-1,pr.y*=-1,pr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),m.envMapRotation.value.setFromMatrix4(pT.makeRotationFromEuler(pr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=g*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function c(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const S=g.program;i.uniformBlockBinding(_,S)}function u(_,g){let S=r[_.id];S===void 0&&(v(_),S=h(_),r[_.id]=S,_.addEventListener("dispose",m));const R=g.program;i.updateUBOMapping(_,R);const A=e.render.frame;s[_.id]!==A&&(d(_),s[_.id]=A)}function h(_){const g=p();_.__bindingPointIndex=g;const S=t.createBuffer(),R=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function p(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=r[_.id],S=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,T=S.length;A<T;A++){const C=Array.isArray(S[A])?S[A]:[S[A]];for(let E=0,y=C.length;E<y;E++){const b=C[E];if(c(b,A,E,R)===!0){const z=b.__offset,k=Array.isArray(b.value)?b.value:[b.value];let Y=0;for(let q=0;q<k.length;q++){const X=k[q],K=x(X);typeof X=="number"||typeof X=="boolean"?(b.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,z+Y,b.__data)):X.isMatrix3?(b.__data[0]=X.elements[0],b.__data[1]=X.elements[1],b.__data[2]=X.elements[2],b.__data[3]=0,b.__data[4]=X.elements[3],b.__data[5]=X.elements[4],b.__data[6]=X.elements[5],b.__data[7]=0,b.__data[8]=X.elements[6],b.__data[9]=X.elements[7],b.__data[10]=X.elements[8],b.__data[11]=0):(X.toArray(b.__data,Y),Y+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,b.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function c(_,g,S,R){const A=_.value,T=g+"_"+S;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const C=R[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return R[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function v(_){const g=_.uniforms;let S=0;const R=16;for(let T=0,C=g.length;T<C;T++){const E=Array.isArray(g[T])?g[T]:[g[T]];for(let y=0,b=E.length;y<b;y++){const z=E[y],k=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,q=k.length;Y<q;Y++){const X=k[Y],K=x(X),D=S%R;D!==0&&R-D<K.boundary&&(S+=R-D),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=K.storage}}}const A=S%R;return A>0&&(S+=R-A),_.__size=S,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class _T{constructor(e={}){const{canvas:n=lS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const c=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=er,this.toneMappingExposure=1;const g=this;let S=!1,R=0,A=0,T=null,C=-1,E=null;const y=new Ct,b=new Ct;let z=null;const k=new ze(0);let Y=0,q=n.width,X=n.height,K=1,D=null,F=null;const j=new Ct(0,0,q,X),Q=new Ct(0,0,q,X);let re=!1;const de=new ih;let I=!1,W=!1;const $=new ot,ee=new B,ge=new Ct,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function Je(){return T===null?K:1}let L=i;function ut(w,N){return n.getContext(w,N)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jd}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",J,!1),n.addEventListener("webglcontextcreationerror",ce,!1),L===null){const N="webgl2";if(L=ut(N,w),L===null)throw ut(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ye,$e,Me,gt,De,Ce,P,M,H,ie,oe,ne,Te,he,ve,Ne,ae,_e,We,Ie,xe,Ue,Be,ct;function U(){Ye=new w1(L),Ye.init(),Ue=new aT(L,Ye),$e=new v1(L,Ye,e,Ue),Me=new rT(L),gt=new C1(L),De=new Ww,Ce=new oT(L,Ye,Me,De,$e,Ue,gt),P=new y1(g),M=new E1(g),H=new US(L),Be=new g1(L,H),ie=new T1(L,H,gt,Be),oe=new P1(L,ie,H,gt),We=new R1(L,$e,Ce),Ne=new x1(De),ne=new Gw(g,P,M,Ye,$e,Be,Ne),Te=new mT(g,De),he=new jw,ve=new Qw(Ye),_e=new m1(g,P,M,Me,oe,d,l),ae=new iT(g,oe,$e),ct=new gT(L,gt,$e,Me),Ie=new _1(L,Ye,gt),xe=new A1(L,Ye,gt),gt.programs=ne.programs,g.capabilities=$e,g.extensions=Ye,g.properties=De,g.renderLists=he,g.shadowMap=ae,g.state=Me,g.info=gt}U();const le=new hT(g,L);this.xr=le,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize(q,X,!1))},this.getSize=function(w){return w.set(q,X)},this.setSize=function(w,N,V=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,X=N,n.width=Math.floor(w*K),n.height=Math.floor(N*K),V===!0&&(n.style.width=w+"px",n.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(q*K,X*K).floor()},this.setDrawingBufferSize=function(w,N,V){q=w,X=N,K=V,n.width=Math.floor(w*V),n.height=Math.floor(N*V),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(j)},this.setViewport=function(w,N,V,G){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,N,V,G),Me.viewport(y.copy(j).multiplyScalar(K).round())},this.getScissor=function(w){return w.copy(Q)},this.setScissor=function(w,N,V,G){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,N,V,G),Me.scissor(b.copy(Q).multiplyScalar(K).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(w){Me.setScissorTest(re=w)},this.setOpaqueSort=function(w){D=w},this.setTransparentSort=function(w){F=w},this.getClearColor=function(w){return w.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(w=!0,N=!0,V=!0){let G=0;if(w){let O=!1;if(T!==null){const ue=T.texture.format;O=ue===eh||ue===Jd||ue===Qd}if(O){const ue=T.texture.type,pe=ue===Ti||ue===Ir||ue===Go||ue===Fs||ue===qd||ue===Kd,ye=_e.getClearColor(),Se=_e.getClearAlpha(),Pe=ye.r,Le=ye.g,Ae=ye.b;pe?(c[0]=Pe,c[1]=Le,c[2]=Ae,c[3]=Se,L.clearBufferuiv(L.COLOR,0,c)):(v[0]=Pe,v[1]=Le,v[2]=Ae,v[3]=Se,L.clearBufferiv(L.COLOR,0,v))}else G|=L.COLOR_BUFFER_BIT}N&&(G|=L.DEPTH_BUFFER_BIT),V&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",J,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),he.dispose(),ve.dispose(),De.dispose(),P.dispose(),M.dispose(),oe.dispose(),Be.dispose(),ct.dispose(),ne.dispose(),le.dispose(),le.removeEventListener("sessionstart",qn),le.removeEventListener("sessionend",fh),lr.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=gt.autoReset,N=ae.enabled,V=ae.autoUpdate,G=ae.needsUpdate,O=ae.type;U(),gt.autoReset=w,ae.enabled=N,ae.autoUpdate=V,ae.needsUpdate=G,ae.type=O}function ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Re(w){const N=w.target;N.removeEventListener("dispose",Re),Xe(N)}function Xe(w){St(w),De.remove(w)}function St(w){const N=De.get(w).programs;N!==void 0&&(N.forEach(function(V){ne.releaseProgram(V)}),w.isShaderMaterial&&ne.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,V,G,O,ue){N===null&&(N=we);const pe=O.isMesh&&O.matrixWorld.determinant()<0,ye=O0(w,N,V,G,O);Me.setMaterial(G,pe);let Se=V.index,Pe=1;if(G.wireframe===!0){if(Se=ie.getWireframeAttribute(V),Se===void 0)return;Pe=2}const Le=V.drawRange,Ae=V.attributes.position;let Ke=Le.start*Pe,_t=(Le.start+Le.count)*Pe;ue!==null&&(Ke=Math.max(Ke,ue.start*Pe),_t=Math.min(_t,(ue.start+ue.count)*Pe)),Se!==null?(Ke=Math.max(Ke,0),_t=Math.min(_t,Se.count)):Ae!=null&&(Ke=Math.max(Ke,0),_t=Math.min(_t,Ae.count));const vt=_t-Ke;if(vt<0||vt===1/0)return;Be.setup(O,G,ye,V,Se);let cn,Ze=Ie;if(Se!==null&&(cn=H.get(Se),Ze=xe,Ze.setIndex(cn)),O.isMesh)G.wireframe===!0?(Me.setLineWidth(G.wireframeLinewidth*Je()),Ze.setMode(L.LINES)):Ze.setMode(L.TRIANGLES);else if(O.isLine){let Ee=G.linewidth;Ee===void 0&&(Ee=1),Me.setLineWidth(Ee*Je()),O.isLineSegments?Ze.setMode(L.LINES):O.isLineLoop?Ze.setMode(L.LINE_LOOP):Ze.setMode(L.LINE_STRIP)}else O.isPoints?Ze.setMode(L.POINTS):O.isSprite&&Ze.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ze.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))Ze.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ee=O._multiDrawStarts,kt=O._multiDrawCounts,Qe=O._multiDrawCount,Un=Se?H.get(Se).bytesPerElement:1,kr=De.get(G).currentProgram.getUniforms();for(let fn=0;fn<Qe;fn++)kr.setValue(L,"_gl_DrawID",fn),Ze.render(Ee[fn]/Un,kt[fn])}else if(O.isInstancedMesh)Ze.renderInstances(Ke,vt,O.count);else if(V.isInstancedBufferGeometry){const Ee=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,kt=Math.min(V.instanceCount,Ee);Ze.renderInstances(Ke,vt,kt)}else Ze.render(Ke,vt)};function Ot(w,N,V){w.transparent===!0&&w.side===ei&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,ia(w,N,V),w.side=ir,w.needsUpdate=!0,ia(w,N,V),w.side=ei):ia(w,N,V)}this.compile=function(w,N,V=null){V===null&&(V=w),m=ve.get(V),m.init(N),_.push(m),V.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),w!==V&&w.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const G=new Set;return w.traverse(function(O){const ue=O.material;if(ue)if(Array.isArray(ue))for(let pe=0;pe<ue.length;pe++){const ye=ue[pe];Ot(ye,V,O),G.add(ye)}else Ot(ue,V,O),G.add(ue)}),_.pop(),m=null,G},this.compileAsync=function(w,N,V=null){const G=this.compile(w,N,V);return new Promise(O=>{function ue(){if(G.forEach(function(pe){De.get(pe).currentProgram.isReady()&&G.delete(pe)}),G.size===0){O(w);return}setTimeout(ue,10)}Ye.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let qe=null;function ai(w){qe&&qe(w)}function qn(){lr.stop()}function fh(){lr.start()}const lr=new M0;lr.setAnimationLoop(ai),typeof self<"u"&&lr.setContext(self),this.setAnimationLoop=function(w){qe=w,le.setAnimationLoop(w),w===null?lr.stop():lr.start()},le.addEventListener("sessionstart",qn),le.addEventListener("sessionend",fh),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(N),N=le.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,N,T),m=ve.get(w,_.length),m.init(N),_.push(m),$.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),de.setFromProjectionMatrix($),W=this.localClippingEnabled,I=Ne.init(this.clippingPlanes,W),x=he.get(w,f.length),x.init(),f.push(x),le.enabled===!0&&le.isPresenting===!0){const ue=g.xr.getDepthSensingMesh();ue!==null&&fu(ue,N,-1/0,g.sortObjects)}fu(w,N,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(D,F),be=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,be&&_e.addToRenderList(x,w),this.info.render.frame++,I===!0&&Ne.beginShadows();const V=m.state.shadowsArray;ae.render(V,w,N),I===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=x.opaque,O=x.transmissive;if(m.setupLights(),N.isArrayCamera){const ue=N.cameras;if(O.length>0)for(let pe=0,ye=ue.length;pe<ye;pe++){const Se=ue[pe];hh(G,O,w,Se)}be&&_e.render(w);for(let pe=0,ye=ue.length;pe<ye;pe++){const Se=ue[pe];dh(x,w,Se,Se.viewport)}}else O.length>0&&hh(G,O,w,N),be&&_e.render(w),dh(x,w,N);T!==null&&(Ce.updateMultisampleRenderTarget(T),Ce.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(g,w,N),Be.resetDefaultState(),C=-1,E=null,_.pop(),_.length>0?(m=_[_.length-1],I===!0&&Ne.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function fu(w,N,V,G){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||de.intersectsSprite(w)){G&&ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4($);const pe=oe.update(w),ye=w.material;ye.visible&&x.push(w,pe,ye,V,ge.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||de.intersectsObject(w))){const pe=oe.update(w),ye=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ge.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ge.copy(pe.boundingSphere.center)),ge.applyMatrix4(w.matrixWorld).applyMatrix4($)),Array.isArray(ye)){const Se=pe.groups;for(let Pe=0,Le=Se.length;Pe<Le;Pe++){const Ae=Se[Pe],Ke=ye[Ae.materialIndex];Ke&&Ke.visible&&x.push(w,pe,Ke,V,ge.z,Ae)}}else ye.visible&&x.push(w,pe,ye,V,ge.z,null)}}const ue=w.children;for(let pe=0,ye=ue.length;pe<ye;pe++)fu(ue[pe],N,V,G)}function dh(w,N,V,G){const O=w.opaque,ue=w.transmissive,pe=w.transparent;m.setupLightsView(V),I===!0&&Ne.setGlobalState(g.clippingPlanes,V),G&&Me.viewport(y.copy(G)),O.length>0&&na(O,N,V),ue.length>0&&na(ue,N,V),pe.length>0&&na(pe,N,V),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function hh(w,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Ur(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Zo:Ti,minFilter:Tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ue=m.state.transmissionRenderTarget[G.id],pe=G.viewport||y;ue.setSize(pe.z,pe.w);const ye=g.getRenderTarget();g.setRenderTarget(ue),g.getClearColor(k),Y=g.getClearAlpha(),Y<1&&g.setClearColor(16777215,.5),be?_e.render(V):g.clear();const Se=g.toneMapping;g.toneMapping=er;const Pe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),I===!0&&Ne.setGlobalState(g.clippingPlanes,G),na(w,V,G),Ce.updateMultisampleRenderTarget(ue),Ce.updateRenderTargetMipmap(ue),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Ae=0,Ke=N.length;Ae<Ke;Ae++){const _t=N[Ae],vt=_t.object,cn=_t.geometry,Ze=_t.material,Ee=_t.group;if(Ze.side===ei&&vt.layers.test(G.layers)){const kt=Ze.side;Ze.side=un,Ze.needsUpdate=!0,ph(vt,V,G,cn,Ze,Ee),Ze.side=kt,Ze.needsUpdate=!0,Le=!0}}Le===!0&&(Ce.updateMultisampleRenderTarget(ue),Ce.updateRenderTargetMipmap(ue))}g.setRenderTarget(ye),g.setClearColor(k,Y),Pe!==void 0&&(G.viewport=Pe),g.toneMapping=Se}function na(w,N,V){const G=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ue=w.length;O<ue;O++){const pe=w[O],ye=pe.object,Se=pe.geometry,Pe=G===null?pe.material:G,Le=pe.group;ye.layers.test(V.layers)&&ph(ye,N,V,Se,Pe,Le)}}function ph(w,N,V,G,O,ue){w.onBeforeRender(g,N,V,G,O,ue),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.transparent===!0&&O.side===ei&&O.forceSinglePass===!1?(O.side=un,O.needsUpdate=!0,g.renderBufferDirect(V,N,G,O,w,ue),O.side=ir,O.needsUpdate=!0,g.renderBufferDirect(V,N,G,O,w,ue),O.side=ei):g.renderBufferDirect(V,N,G,O,w,ue),w.onAfterRender(g,N,V,G,O,ue)}function ia(w,N,V){N.isScene!==!0&&(N=we);const G=De.get(w),O=m.state.lights,ue=m.state.shadowsArray,pe=O.state.version,ye=ne.getParameters(w,O.state,ue,N,V),Se=ne.getProgramCacheKey(ye);let Pe=G.programs;G.environment=w.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(w.isMeshStandardMaterial?M:P).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Pe===void 0&&(w.addEventListener("dispose",Re),Pe=new Map,G.programs=Pe);let Le=Pe.get(Se);if(Le!==void 0){if(G.currentProgram===Le&&G.lightsStateVersion===pe)return gh(w,ye),Le}else ye.uniforms=ne.getUniforms(w),w.onBeforeCompile(ye,g),Le=ne.acquireProgram(ye,Se),Pe.set(Se,Le),G.uniforms=ye.uniforms;const Ae=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ae.clippingPlanes=Ne.uniform),gh(w,ye),G.needsLights=z0(w),G.lightsStateVersion=pe,G.needsLights&&(Ae.ambientLightColor.value=O.state.ambient,Ae.lightProbe.value=O.state.probe,Ae.directionalLights.value=O.state.directional,Ae.directionalLightShadows.value=O.state.directionalShadow,Ae.spotLights.value=O.state.spot,Ae.spotLightShadows.value=O.state.spotShadow,Ae.rectAreaLights.value=O.state.rectArea,Ae.ltc_1.value=O.state.rectAreaLTC1,Ae.ltc_2.value=O.state.rectAreaLTC2,Ae.pointLights.value=O.state.point,Ae.pointLightShadows.value=O.state.pointShadow,Ae.hemisphereLights.value=O.state.hemi,Ae.directionalShadowMap.value=O.state.directionalShadowMap,Ae.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ae.spotShadowMap.value=O.state.spotShadowMap,Ae.spotLightMatrix.value=O.state.spotLightMatrix,Ae.spotLightMap.value=O.state.spotLightMap,Ae.pointShadowMap.value=O.state.pointShadowMap,Ae.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Le,G.uniformsList=null,Le}function mh(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=ll.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function gh(w,N){const V=De.get(w);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function O0(w,N,V,G,O){N.isScene!==!0&&(N=we),Ce.resetTextureUnits();const ue=N.fog,pe=G.isMeshStandardMaterial?N.environment:null,ye=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ar,Se=(G.isMeshStandardMaterial?M:P).get(G.envMap||pe),Pe=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Le=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ae=!!V.morphAttributes.position,Ke=!!V.morphAttributes.normal,_t=!!V.morphAttributes.color;let vt=er;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(vt=g.toneMapping);const cn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ze=cn!==void 0?cn.length:0,Ee=De.get(G),kt=m.state.lights;if(I===!0&&(W===!0||w!==E)){const En=w===E&&G.id===C;Ne.setState(G,w,En)}let Qe=!1;G.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==kt.state.version||Ee.outputColorSpace!==ye||O.isBatchedMesh&&Ee.batching===!1||!O.isBatchedMesh&&Ee.batching===!0||O.isBatchedMesh&&Ee.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ee.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ee.instancing===!1||!O.isInstancedMesh&&Ee.instancing===!0||O.isSkinnedMesh&&Ee.skinning===!1||!O.isSkinnedMesh&&Ee.skinning===!0||O.isInstancedMesh&&Ee.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ee.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ee.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ee.instancingMorph===!1&&O.morphTexture!==null||Ee.envMap!==Se||G.fog===!0&&Ee.fog!==ue||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Ne.numPlanes||Ee.numIntersection!==Ne.numIntersection)||Ee.vertexAlphas!==Pe||Ee.vertexTangents!==Le||Ee.morphTargets!==Ae||Ee.morphNormals!==Ke||Ee.morphColors!==_t||Ee.toneMapping!==vt||Ee.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,Ee.__version=G.version);let Un=Ee.currentProgram;Qe===!0&&(Un=ia(G,N,O));let kr=!1,fn=!1,du=!1;const Mt=Un.getUniforms(),Pi=Ee.uniforms;if(Me.useProgram(Un.program)&&(kr=!0,fn=!0,du=!0),G.id!==C&&(C=G.id,fn=!0),kr||E!==w){Mt.setValue(L,"projectionMatrix",w.projectionMatrix),Mt.setValue(L,"viewMatrix",w.matrixWorldInverse);const En=Mt.map.cameraPosition;En!==void 0&&En.setValue(L,ee.setFromMatrixPosition(w.matrixWorld)),$e.logarithmicDepthBuffer&&Mt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Mt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,fn=!0,du=!0)}if(O.isSkinnedMesh){Mt.setOptional(L,O,"bindMatrix"),Mt.setOptional(L,O,"bindMatrixInverse");const En=O.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Mt.setValue(L,"boneTexture",En.boneTexture,Ce))}O.isBatchedMesh&&(Mt.setOptional(L,O,"batchingTexture"),Mt.setValue(L,"batchingTexture",O._matricesTexture,Ce),Mt.setOptional(L,O,"batchingIdTexture"),Mt.setValue(L,"batchingIdTexture",O._indirectTexture,Ce),Mt.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&Mt.setValue(L,"batchingColorTexture",O._colorsTexture,Ce));const hu=V.morphAttributes;if((hu.position!==void 0||hu.normal!==void 0||hu.color!==void 0)&&We.update(O,V,Un),(fn||Ee.receiveShadow!==O.receiveShadow)&&(Ee.receiveShadow=O.receiveShadow,Mt.setValue(L,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Pi.envMap.value=Se,Pi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Pi.envMapIntensity.value=N.environmentIntensity),fn&&(Mt.setValue(L,"toneMappingExposure",g.toneMappingExposure),Ee.needsLights&&k0(Pi,du),ue&&G.fog===!0&&Te.refreshFogUniforms(Pi,ue),Te.refreshMaterialUniforms(Pi,G,K,X,m.state.transmissionRenderTarget[w.id]),ll.upload(L,mh(Ee),Pi,Ce)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ll.upload(L,mh(Ee),Pi,Ce),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Mt.setValue(L,"center",O.center),Mt.setValue(L,"modelViewMatrix",O.modelViewMatrix),Mt.setValue(L,"normalMatrix",O.normalMatrix),Mt.setValue(L,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const En=G.uniformsGroups;for(let pu=0,B0=En.length;pu<B0;pu++){const _h=En[pu];ct.update(_h,Un),ct.bind(_h,Un)}}return Un}function k0(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function z0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,N,V){De.get(w.texture).__webglTexture=N,De.get(w.depthTexture).__webglTexture=V;const G=De.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const V=De.get(w);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,V=0){T=w,R=N,A=V;let G=!0,O=null,ue=!1,pe=!1;if(w){const Se=De.get(w);Se.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(L.FRAMEBUFFER,null),G=!1):Se.__webglFramebuffer===void 0?Ce.setupRenderTarget(w):Se.__hasExternalTextures&&Ce.rebindTextures(w,De.get(w.texture).__webglTexture,De.get(w.depthTexture).__webglTexture);const Pe=w.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(pe=!0);const Le=De.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Le[N])?O=Le[N][V]:O=Le[N],ue=!0):w.samples>0&&Ce.useMultisampledRTT(w)===!1?O=De.get(w).__webglMultisampledFramebuffer:Array.isArray(Le)?O=Le[V]:O=Le,y.copy(w.viewport),b.copy(w.scissor),z=w.scissorTest}else y.copy(j).multiplyScalar(K).floor(),b.copy(Q).multiplyScalar(K).floor(),z=re;if(Me.bindFramebuffer(L.FRAMEBUFFER,O)&&G&&Me.drawBuffers(w,O),Me.viewport(y),Me.scissor(b),Me.setScissorTest(z),ue){const Se=De.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Se.__webglTexture,V)}else if(pe){const Se=De.get(w.texture),Pe=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.__webglTexture,V||0,Pe)}C=-1},this.readRenderTargetPixels=function(w,N,V,G,O,ue,pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){Me.bindFramebuffer(L.FRAMEBUFFER,ye);try{const Se=w.texture,Pe=Se.format,Le=Se.type;if(!$e.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-G&&V>=0&&V<=w.height-O&&L.readPixels(N,V,G,O,Ue.convert(Pe),Ue.convert(Le),ue)}finally{const Se=T!==null?De.get(T).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(w,N,V,G,O,ue,pe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){Me.bindFramebuffer(L.FRAMEBUFFER,ye);try{const Se=w.texture,Pe=Se.format,Le=Se.type;if(!$e.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-G&&V>=0&&V<=w.height-O){const Ae=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),L.readPixels(N,V,G,O,Ue.convert(Pe),Ue.convert(Le),0),L.flush();const Ke=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await uS(L,Ke,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue)}finally{L.deleteBuffer(Ae),L.deleteSync(Ke)}return ue}}finally{const Se=T!==null?De.get(T).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(w,N=null,V=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-V),O=Math.floor(w.image.width*G),ue=Math.floor(w.image.height*G),pe=N!==null?N.x:0,ye=N!==null?N.y:0;Ce.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,pe,ye,O,ue),Me.unbindTexture()},this.copyTextureToTexture=function(w,N,V=null,G=null,O=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],N=arguments[2],O=arguments[3]||0,V=null);let ue,pe,ye,Se,Pe,Le;V!==null?(ue=V.max.x-V.min.x,pe=V.max.y-V.min.y,ye=V.min.x,Se=V.min.y):(ue=w.image.width,pe=w.image.height,ye=0,Se=0),G!==null?(Pe=G.x,Le=G.y):(Pe=0,Le=0);const Ae=Ue.convert(N.format),Ke=Ue.convert(N.type);Ce.setTexture2D(N,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const _t=L.getParameter(L.UNPACK_ROW_LENGTH),vt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),cn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ze=L.getParameter(L.UNPACK_SKIP_ROWS),Ee=L.getParameter(L.UNPACK_SKIP_IMAGES),kt=w.isCompressedTexture?w.mipmaps[O]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,kt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,kt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,Se),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,Pe,Le,ue,pe,Ae,Ke,kt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,Pe,Le,kt.width,kt.height,Ae,kt.data):L.texSubImage2D(L.TEXTURE_2D,O,Pe,Le,ue,pe,Ae,Ke,kt),L.pixelStorei(L.UNPACK_ROW_LENGTH,_t),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,cn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ee),O===0&&N.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(w,N,V=null,G=null,O=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,w=arguments[2],N=arguments[3],O=arguments[4]||0);let ue,pe,ye,Se,Pe,Le,Ae,Ke,_t;const vt=w.isCompressedTexture?w.mipmaps[O]:w.image;V!==null?(ue=V.max.x-V.min.x,pe=V.max.y-V.min.y,ye=V.max.z-V.min.z,Se=V.min.x,Pe=V.min.y,Le=V.min.z):(ue=vt.width,pe=vt.height,ye=vt.depth,Se=0,Pe=0,Le=0),G!==null?(Ae=G.x,Ke=G.y,_t=G.z):(Ae=0,Ke=0,_t=0);const cn=Ue.convert(N.format),Ze=Ue.convert(N.type);let Ee;if(N.isData3DTexture)Ce.setTexture3D(N,0),Ee=L.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Ce.setTexture2DArray(N,0),Ee=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const kt=L.getParameter(L.UNPACK_ROW_LENGTH),Qe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Un=L.getParameter(L.UNPACK_SKIP_PIXELS),kr=L.getParameter(L.UNPACK_SKIP_ROWS),fn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,vt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Se),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Le),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Ee,O,Ae,Ke,_t,ue,pe,ye,cn,Ze,vt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Ee,O,Ae,Ke,_t,ue,pe,ye,cn,vt.data):L.texSubImage3D(Ee,O,Ae,Ke,_t,ue,pe,ye,cn,Ze,vt),L.pixelStorei(L.UNPACK_ROW_LENGTH,kt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Un),L.pixelStorei(L.UNPACK_SKIP_ROWS,kr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,fn),O===0&&N.generateMipmaps&&L.generateMipmap(Ee),Me.unbindTexture()},this.initRenderTarget=function(w){De.get(w).__webglFramebuffer===void 0&&Ce.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ce.setTextureCube(w,0):w.isData3DTexture?Ce.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ce.setTexture2DArray(w,0):Ce.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,Me.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===th?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===lu?"display-p3":"srgb"}}class sh{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=n,this.far=i}clone(){return new sh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class vT extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class xT extends Zt{constructor(e=null,n=1,i=1,r,s,o,a,l,u=sn,h=sn,p,d){super(null,o,a,l,u,h,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Em extends Yn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const is=new ot,wm=new ot,Wa=[],Tm=new Or,yT=new ot,ro=new _n,so=new ea;class Vl extends _n{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Em(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,yT)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Or),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,is),Tm.copy(e.boundingBox).applyMatrix4(is),this.boundingBox.union(Tm)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ea),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,is),so.copy(e.boundingSphere).applyMatrix4(is),this.boundingSphere.union(so)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(i),e.ray.intersectsSphere(so)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,is),wm.multiplyMatrices(i,is),ro.matrixWorld=wm,ro.raycast(e,Wa);for(let o=0,a=Wa.length;o<a;o++){const l=Wa[o];l.instanceId=s,l.object=this,n.push(l)}Wa.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Em(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new xT(new Float32Array(r*this.count),r,this.count,Zd,ni));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class As extends Ri{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],d=[],c=[];let v=0;const x=[],m=i/2;let f=0;_(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new xn(p,3)),this.setAttribute("normal",new xn(d,3)),this.setAttribute("uv",new xn(c,2));function _(){const S=new B,R=new B;let A=0;const T=(n-e)/i;for(let C=0;C<=s;C++){const E=[],y=C/s,b=y*(n-e)+e;for(let z=0;z<=r;z++){const k=z/r,Y=k*l+a,q=Math.sin(Y),X=Math.cos(Y);R.x=b*q,R.y=-y*i+m,R.z=b*X,p.push(R.x,R.y,R.z),S.set(q,T,X).normalize(),d.push(S.x,S.y,S.z),c.push(k,1-y),E.push(v++)}x.push(E)}for(let C=0;C<r;C++)for(let E=0;E<s;E++){const y=x[E][C],b=x[E+1][C],z=x[E+1][C+1],k=x[E][C+1];h.push(y,b,k),h.push(b,z,k),A+=6}u.addGroup(f,A,0),f+=A}function g(S){const R=v,A=new Ve,T=new B;let C=0;const E=S===!0?e:n,y=S===!0?1:-1;for(let z=1;z<=r;z++)p.push(0,m*y,0),d.push(0,y,0),c.push(.5,.5),v++;const b=v;for(let z=0;z<=r;z++){const Y=z/r*l+a,q=Math.cos(Y),X=Math.sin(Y);T.x=E*X,T.y=m*y,T.z=E*q,p.push(T.x,T.y,T.z),d.push(0,y,0),A.x=q*.5+.5,A.y=X*.5*y+.5,c.push(A.x,A.y),v++}for(let z=0;z<r;z++){const k=R+z,Y=b+z;S===!0?h.push(Y,Y+1,k):h.push(Y+1,Y,k),C+=3}u.addGroup(f,C,S===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wo extends As{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new wo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cu extends Ri{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),u(i),h(),this.setAttribute("position",new xn(s,3)),this.setAttribute("normal",new xn(s.slice(),3)),this.setAttribute("uv",new xn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const g=new B,S=new B,R=new B;for(let A=0;A<n.length;A+=3)c(n[A+0],g),c(n[A+1],S),c(n[A+2],R),l(g,S,R,_)}function l(_,g,S,R){const A=R+1,T=[];for(let C=0;C<=A;C++){T[C]=[];const E=_.clone().lerp(S,C/A),y=g.clone().lerp(S,C/A),b=A-C;for(let z=0;z<=b;z++)z===0&&C===A?T[C][z]=E:T[C][z]=E.clone().lerp(y,z/b)}for(let C=0;C<A;C++)for(let E=0;E<2*(A-C)-1;E++){const y=Math.floor(E/2);E%2===0?(d(T[C][y+1]),d(T[C+1][y]),d(T[C][y])):(d(T[C][y+1]),d(T[C+1][y+1]),d(T[C+1][y]))}}function u(_){const g=new B;for(let S=0;S<s.length;S+=3)g.x=s[S+0],g.y=s[S+1],g.z=s[S+2],g.normalize().multiplyScalar(_),s[S+0]=g.x,s[S+1]=g.y,s[S+2]=g.z}function h(){const _=new B;for(let g=0;g<s.length;g+=3){_.x=s[g+0],_.y=s[g+1],_.z=s[g+2];const S=m(_)/2/Math.PI+.5,R=f(_)/Math.PI+.5;o.push(S,1-R)}v(),p()}function p(){for(let _=0;_<o.length;_+=6){const g=o[_+0],S=o[_+2],R=o[_+4],A=Math.max(g,S,R),T=Math.min(g,S,R);A>.9&&T<.1&&(g<.2&&(o[_+0]+=1),S<.2&&(o[_+2]+=1),R<.2&&(o[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function c(_,g){const S=_*3;g.x=e[S+0],g.y=e[S+1],g.z=e[S+2]}function v(){const _=new B,g=new B,S=new B,R=new B,A=new Ve,T=new Ve,C=new Ve;for(let E=0,y=0;E<s.length;E+=9,y+=6){_.set(s[E+0],s[E+1],s[E+2]),g.set(s[E+3],s[E+4],s[E+5]),S.set(s[E+6],s[E+7],s[E+8]),A.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),C.set(o[y+4],o[y+5]),R.copy(_).add(g).add(S).divideScalar(3);const b=m(R);x(A,y+0,_,b),x(T,y+2,g,b),x(C,y+4,S,b)}}function x(_,g,S,R){R<0&&_.x===1&&(o[g]=_.x-1),S.x===0&&S.z===0&&(o[g]=R/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.vertices,e.indices,e.radius,e.details)}}class Gl extends cu{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Gl(e.radius,e.detail)}}class oh extends cu{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new oh(e.radius,e.detail)}}class P0 extends ta{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=u0,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class b0 extends Tt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class ST extends b0{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const mc=new ot,Am=new B,Cm=new B;class MT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ih,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Am.setFromMatrixPosition(e.matrixWorld),n.position.copy(Am),Cm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Cm),n.updateMatrixWorld(),mc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ET extends MT{constructor(){super(new E0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rm extends b0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new ET}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Pm=new ot;class wT{constructor(e,n,i=0,r=1/0){this.ray=new m0(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new nh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Pm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pm),this}intersectObject(e,n=!0,i=[]){return jf(e,this,i,n),i.sort(bm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)jf(e[r],this,i,n);return i.sort(bm),i}}function bm(t,e){return t.distance-e.distance}function jf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)jf(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jd);var km;const gi=(km=window.Telegram)==null?void 0:km.WebApp;try{gi==null||gi.ready(),gi==null||gi.expand()}catch{}const Lm=(gi==null?void 0:gi.initData)||"";async function oo(t,e){const n=!e,i=n?`${t}?initData=${encodeURIComponent(Lm)}`:t,r=await fetch(i,{method:n?"GET":"POST",headers:{"Content-Type":"application/json"},body:n?void 0:JSON.stringify({...e,initData:Lm})}),s=await r.json().catch(()=>({ok:!1,error:"Сеть"}));if(!r.ok||s.ok===!1)throw new Error(s.error||"Ошибка сервера");return s}const ao={init:()=>oo("/api/init"),state:()=>oo("/api/state"),attack:(t,e)=>oo("/api/attack",{tileId:t,unitId:e}),build:(t,e)=>oo("/api/build",{tileId:t,building:e}),openCase:t=>oo("/api/case/open",{server:t})},ah=t=>`/files/${encodeURIComponent(t.server)}/${encodeURIComponent(t.file)}`,Pt=800,In=600,TT=300,ke={bg:"#071018",surf:"#0e1b16",border:"#2b4232",accent:"#8b5cf6",red:"#ef4444",gold:"#f5c451",muted:"#6f8277",text:"#e6eee8",textD:"#a9b8ae"},It={meadow:{n:"Луг",e:"🌿",bonus:null,m:1,impassable:!1,top:7319118,side:4683567},forest:{n:"Лес",e:"🌲",bonus:"defense",m:1.22,impassable:!1,top:5607997,side:3695146},hills:{n:"Холмы",e:"⛰️",bonus:"defense",m:1.34,impassable:!1,captureMult:.88,top:7971915,side:5402676},field:{n:"Поля",e:"🌾",bonus:null,m:1,impassable:!1,top:13482314,side:9667118},swamp:{n:"Болота",e:"🪷",bonus:"air",m:1.18,impassable:!1,captureMult:.92,top:6787930,side:4482363},mountain:{n:"Высокие горы",e:"🏔️",bonus:"defense",m:1.6,impassable:!0,top:9278090,side:5659735},water:{n:"Море",e:"🌊",bonus:null,m:1,impassable:!0,top:933205,side:933205}},AT={attack:"Атака",defense:"Защита",air:"Воздух"},Dm={attack:"⚔️",defense:"🛡️",air:"🌪️"},at=3.4,lh=Pt*at,uh=In*at,ul=lh/2,cl=uh/2,Yf=.16,$f=.06,L0=.035,po=24,qf=48,Kf=45,D0=320,gc=240,I0=50,_c=Math.tan(I0/2*Math.PI/180),CT=t=>1.48-Tn((t-Kf)/(D0-Kf),0,1)*.53,Im=260,Zf=794407,U0=220,N0=2100,Oi={barn:{n:"Амбар",i:"🏚️",cost:140,d:"+2 🪙/мин"},medbay:{n:"Медотсек",i:"⛑️",cost:160,d:"+8 HP юнитам/мин"},fort:{n:"Укрепления",i:"🛡️",cost:90,d:"+35% защиты клетки"},mine:{n:"Шахта",i:"⛏️",cost:200,d:"+4 🪙/мин"}},RT={field:["barn","medbay"],meadow:["fort"],hills:["mine"]},Tn=(t,e,n)=>Math.max(e,Math.min(n,t)),Ut=(t,e,n=0)=>{let i=t*374761393+e*668265263+n*69069|0;return i=(i^i>>>13)*1274126177,(i^i>>>16)>>>0},Wl=(t,e,n=0)=>Ut(t,e,n)%1e4/1e4,Wo=(t,e,n,i)=>{const r=t/n,s=e/n,o=Math.floor(r),a=Math.floor(s),l=r-o,u=s-a,h=l*l*(3-2*l),p=u*u*(3-2*u),d=(c,v)=>Wl(c,v,i);return d(o,a)*(1-h)*(1-p)+d(o+1,a)*h*(1-p)+d(o,a+1)*(1-h)*p+d(o+1,a+1)*h*p},PT=(t,e)=>{const n=(e-Pt/2)/(Pt/2),i=(t-In/2)/(In/2),r=Math.sqrt(n*n+i*i),s=(Wo(t,e,64,777)-.5)*.55+(Wo(t,e,23,778)-.5)*.25;return r+s<.92},ch=t=>Yf+t.elev+$f+L0,Xo=(t,e)=>({x:(t+.5)*at-ul,z:(e+.5)*at-cl}),bT=(t,e)=>{const n=Wl(t,e,10),i=Wl(t,e,22);return n<.11?"forest":n<.18?"field":n<.24?"swamp":n<.34&&i>.42?"hills":"meadow"},LT=(t,e,n)=>{const i=Wo(e,n,9,31),r=Wo(e,n,23,77);switch(t){case"forest":return .14+i*.18;case"field":return .08+i*.1;case"swamp":return .04+i*.05;case"hills":return .34+i*.42+r*.12;default:return .1+i*.16+r*.06}};function DT(){const t=[];for(let e=0;e<30;e++){const n=e<16;t.push({sr:18+Ut(e,3,900)%(In-36),sc:18+Ut(e,7,901)%(Pt-36),ang:Ut(e,11,902)%1e3/1e3*Math.PI,rAlong:n?28+Ut(e,13,903)%48:13+Ut(e,13,903)%15,rAcross:n?7+Ut(e,17,904)%8:11+Ut(e,17,904)%16,peak:(n?1.25:1)+Ut(e,19,905)%100/100*(n?1.15:1),lobes:2+Ut(e,23,906)%4,phase:Ut(e,29,907)%1e3/1e3*Math.PI*2})}return t}function IT(t,e){const n=Math.max(e.rAlong,e.rAcross)*1.35+4,i=Math.max(1,Math.floor(e.sr-n)),r=Math.min(In-2,Math.ceil(e.sr+n)),s=Math.max(1,Math.floor(e.sc-n)),o=Math.min(Pt-2,Math.ceil(e.sc+n)),a=Math.cos(e.ang),l=Math.sin(e.ang),u=500+Math.round(e.phase*10);for(let h=i;h<=r;h++){const p=h-e.sr;for(let d=s;d<=o;d++){const c=t[h*Pt+d];if(c.type==="water")continue;const v=d-e.sc,x=p*a-v*l,m=p*l+v*a,f=Math.atan2(m,x),_=1+.2*Math.sin(f*e.lobes+e.phase)+.1*Math.sin(f*(e.lobes*2+1)+e.phase*1.7),g=x/(e.rAlong*_),S=m/(e.rAcross*_),R=g*g+S*S;if(R>=1)continue;const A=e.peak*Math.pow(1-R,.68)*(.82+.3*Wo(h,d,7,u));A<=.04||A>c.elev&&(c.elev=A,c.type=A>=.42?"mountain":"hills")}}}async function UT(t=()=>{}){const e=In*Pt,n=new Array(e),i=8e3;for(let s=0;s<e;s+=i){const o=Math.min(e,s+i);for(let a=s;a<o;a++){const l=Math.floor(a/Pt),u=a%Pt;if(!PT(l,u)){n[a]={id:`${l}_${u}`,row:l,col:u,type:"water",owner:null,level:1,elev:-.5,shade:1};continue}const h=bT(l,u);n[a]={id:`${l}_${u}`,row:l,col:u,type:h,owner:null,level:1,elev:LT(h,l,u),shade:.9+Wl(l,u,303)*.16}}t(Math.round(o/e*55)),await new Promise(requestAnimationFrame)}const r=DT();for(let s=0;s<r.length;s++)IT(n,r[s]),t(55+Math.round((s+1)/r.length*43)),await new Promise(requestAnimationFrame);return t(100),n}const NT=(t,e)=>[[t-1,e],[t+1,e],[t,e-1],[t,e+1]].filter(([n,i])=>n>=0&&n<In&&i>=0&&i<Pt).map(([n,i])=>`${n}_${i}`);function FT(t){const e=t.filter(r=>r.owner==="me"&&!It[r.type].impassable);if(!e.length)return new Set;const n=new Set,i=new Map(t.map(r=>[r.id,r]));return e.forEach(r=>NT(r.row,r.col).forEach(s=>{const o=i.get(s);o&&o.owner!=="me"&&!It[o.type].impassable&&n.add(s)})),n}function OT(t,e){for(const n of t)n.owner&&(n.owner=null);for(const[n,i]of Object.entries(e||{})){const[r,s]=n.split("_"),o=t[+r*Pt+ +s];o&&(o.owner=i==="me"?"me":i)}}const kT=new oi(at-.03,1,at-.03),zT=new oi(at-.16,1,at-.16),ft={treeTrunk:new As(.065,.09,.38,5),treeCrown:new wo(.26,.58,6),rock:new Gl(.24,0),rockSmall:new Gl(.13,0),crop:new oi(.06,.14,.52),bush:new oh(.22,0),reed:new As(.025,.035,.34,4),flower:new As(.025,.025,.12,4),ridge:new oi(.68,.18,.22),peak:new wo(.58,1.15,5),peakSmall:new wo(.34,.62,5)},dt=t=>new P0({color:t,flatShading:!0}),pn={meadow:dt(It.meadow.top),forest:dt(It.forest.top),hills:dt(It.hills.top),field:dt(It.field.top),swamp:dt(It.swamp.top),mountain:dt(It.mountain.top),meadowSide:dt(It.meadow.side),forestSide:dt(It.forest.side),hillsSide:dt(It.hills.side),fieldSide:dt(It.field.side),swampSide:dt(It.swamp.side),mountainSide:dt(It.mountain.side),trunk:dt(7031081),leaves:dt(3112246),rock:dt(8160119),rock2:dt(9870221),crop:dt(11970880),bush:dt(5213748),reed:dt(6196039),flower:dt(14078299),ridge:dt(6449249),peak:dt(7304558),snow:dt(15331828),water:new P0({color:866898})};function BT(t,e){const n=t.elev,i=[[t.row-1,t.col],[t.row+1,t.col],[t.row,t.col-1],[t.row,t.col+1]];for(const[r,s]of i)if(r<0||r>=In||s<0||s>=Pt||e[r*Pt+s].elev<n-.02)return!0;return!1}function HT(t,e,n,i){var l;const r={};for(const u of e)(r[l=u.type]||(r[l]=[])).push(u);const s=new Tt,o={},a={};for(const[u,h]of Object.entries(r)){const p=h.length,d=new Vl(kT,pn[u],p);d.frustumCulled=!0;let c=null,v=new Map;if(n&&u!=="water"){const x=h.filter(m=>BT(m,i));c=new Vl(zT,pn[u+"Side"],Math.max(1,x.length)),c.frustumCulled=!0;for(let m=0;m<x.length;m++){const f=x[m],_=Xo(f.col,f.row),g=Yf+f.elev,S=g+1.3;s.position.set(_.x,(g-1.3)/2,_.z),s.scale.set(1,S,1),s.updateMatrix(),c.setMatrixAt(m,s.matrix),v.set(f.id,m)}c.count=x.length,c.instanceMatrix.needsUpdate=!0}for(let x=0;x<p;x++){const m=h[x],f=Xo(m.col,m.row),_=Yf+m.elev;s.position.set(f.x,_+$f/2,f.z),s.scale.set(1,$f,1),s.updateMatrix(),d.setMatrixAt(x,s.matrix),o[m.id]={type:u,idx:x,top:d,side:c,sideIdx:v.get(m.id)}}d.instanceMatrix.needsUpdate=!0,c&&t.add(c),t.add(d),a[u]={top:d,side:c,arr:h}}return{groups:a,byId:o}}function VT(t,e){const n={trees:[],rocks:[],smallRocks:[],fields:[],bushes:[],reeds:[],flowers:[],ridges:[],peaks:[],snows:[]};for(const s of e){if(s.type==="water")continue;const o=Ut(s.row,s.col,777)%100,a=Xo(s.col,s.row),l=ch(s);if(s.type==="forest")o<42&&n.trees.push([a.x,a.z,l]);else if(s.type==="mountain"){const u=.62+Math.min(1.15,s.elev)*.55,h=(Ut(s.row,s.col,610)%1e3/1e3-.5)*.6,p=(Ut(s.row,s.col,611)%1e3/1e3-.5)*.6;if(n.peaks.push([a.x+h,a.z+p,l+.575*u,u]),s.elev>1.25){const d=u*.46;n.snows.push([a.x+h,a.z+p,l+1.15*u-.31*d+.02,d])}o<50&&n.rocks.push([a.x,a.z,l])}else s.type==="field"?o<38&&n.fields.push([a.x,a.z,l]):s.type==="hills"?(o<30?(n.rocks.push([a.x,a.z,l]),n.smallRocks.push([a.x,a.z,l])):o<52&&n.smallRocks.push([a.x,a.z,l]),o<18&&n.ridges.push([a.x,a.z,l])):s.type==="swamp"?o<40&&n.reeds.push([a.x,a.z,l]):s.type==="meadow"&&(o<8?n.bushes.push([a.x,a.z,l]):o<20&&n.flowers.push([a.x,a.z,l]))}const i=s=>s===ft.treeTrunk?.19:s===ft.treeCrown?.29:s===ft.rock?.22:s===ft.rockSmall?.13:s===ft.crop?.07:s===ft.bush?.14:s===ft.reed?.17:s===ft.flower?.06:s===ft.ridge?.09:.3,r=(s,o,a,l=1,u=1.7)=>{const h=new Vl(s,o,Math.max(1,a.length*l));h.frustumCulled=!0;const p=new Tt;let d=0;for(let c=0;c<a.length;c++){const v=a[c],x=v.length===4;for(let m=0;m<l;m++){const f=x?0:(Ut(c,m,501+l)%1e3/1e3-.5)*u,_=x?0:(Ut(c,m,502+l)%1e3/1e3-.5)*u,g=x?v[3]:.78+Ut(c,m,503+l)%40/100,S=x?v[2]:v[2]+i(s)*g+L0;p.position.set(v[0]+f,S,v[1]+_),s===ft.treeTrunk?p.scale.set(1,1,1):p.scale.setScalar(g),p.rotation.y=s===ft.peak||s===ft.peakSmall?Ut(c,m,540+l)%1e3/1e3*Math.PI*2:0,p.updateMatrix(),h.setMatrixAt(d++,p.matrix)}}return h.count=d,h.instanceMatrix.needsUpdate=!0,t.add(h),h};return{treeTrunk:r(ft.treeTrunk,pn.trunk,n.trees,2,1.5),treeCrown:r(ft.treeCrown,pn.leaves,n.trees,2,1.5),rock:r(ft.rock,pn.rock,n.rocks,2,1.45),rockSmall:r(ft.rockSmall,pn.rock2,n.smallRocks,2,1.65),field:r(ft.crop,pn.crop,n.fields,5,1.55),bush:r(ft.bush,pn.bush,n.bushes,2,1.35),reed:r(ft.reed,pn.reed,n.reeds,4,1.55),flower:r(ft.flower,pn.flower,n.flowers,3,1.7),ridge:r(ft.ridge,pn.ridge,n.ridges,1,.9),peak:r(ft.peak,pn.peak,n.peaks,1,0),snow:r(ft.peakSmall,pn.snow,n.snows,1,0)}}const GT=(t,e,n)=>n?`F${t}:${e}`:`${t}:${e}`;function WT(t,e,n,i,r){const s=r?qf:po,o=Math.max(0,n*s),a=Math.min(In,(n+1)*s),l=Math.max(0,i*s),u=Math.min(Pt,(i+1)*s),h=[];for(let c=o;c<a;c++)for(let v=l;v<u;v++)h.push(e[c*Pt+v]);const p=HT(t,h,!r,e),d=r?null:VT(t,h);return{cr:n,cc:i,far:r,territories:h,inst:p,decor:d}}function Um(t,e){for(const n of Object.values(e.inst.groups))t.remove(n.top),n.top.dispose(),n.side&&(t.remove(n.side),n.side.dispose());if(e.decor)for(const n of Object.values(e.decor))n&&(t.remove(n),n.dispose())}function Nm(t,e,n,i){const r=new ze;for(let s=0;s<e.length;s++){const o=e[s],a=t.byId[o.id];a&&(o.id===i?r.setHex(16777215):o.owner==="me"?r.setHex(10314751).multiplyScalar(o.shade||1):o.owner?r.setHex(14243402).multiplyScalar(o.shade||1):n.has(o.id)?r.setHex(It[o.type].top).multiplyScalar((o.shade||1)*1.35):r.setHex(It[o.type].top).multiplyScalar(o.shade||1),a.top.setColorAt(a.idx,r))}for(const s of Object.values(t.groups))s.top.instanceColor&&(s.top.instanceColor.needsUpdate=!0)}function XT(){const t=new Gs(lh+7e3,uh+7e3,140,140),e=new Ai({uniforms:{uTime:{value:0},uColor:{value:new ze(933205)},uDeep:{value:new ze(600636)},uFogColor:{value:new ze(Zf)},uFogNear:{value:U0},uFogFar:{value:N0}},vertexShader:`
      uniform float uTime;
      varying float vWave; varying float vDepth;
      void main(){
        vec3 p = position;
        float w = sin(p.x*0.020+uTime*0.60)*0.30
                + cos(p.y*0.026-uTime*0.42)*0.24
                + sin((p.x+p.y)*0.011+uTime*0.30)*0.16;
        p.z += w; vWave = w;
        vec4 mv = modelViewMatrix*vec4(p,1.0);
        vDepth = -mv.z;
        gl_Position = projectionMatrix*mv;
      }`,fragmentShader:`
      uniform vec3 uColor; uniform vec3 uDeep; uniform vec3 uFogColor;
      uniform float uFogNear; uniform float uFogFar;
      varying float vWave; varying float vDepth;
      void main(){
        float k = clamp((vWave+0.70)/1.40, 0.0, 1.0);
        vec3 c = mix(uDeep, uColor, k);
        c += vec3(0.05,0.08,0.09)*pow(k,3.0);
        float f = smoothstep(uFogNear, uFogFar, vDepth);
        c = mix(c, uFogColor, f);
        gl_FragColor = vec4(c,1.0);
      }`}),n=new _n(t,e);return n.rotation.x=-Math.PI/2,n.position.y=-.75,n}function jT({territories:t,onSelect:e,selectedId:n,reachable:i,onReady:r,onProgress:s,controlsRef:o,rev:a,borders:l}){const u=He.useRef(null),h=He.useRef({}),p=He.useRef({territories:t,onSelect:e,selectedId:n,reachable:i,onReady:r,onProgress:s});return He.useEffect(()=>{p.current={territories:t,onSelect:e,selectedId:n,reachable:i,onReady:r,onProgress:s}}),He.useEffect(()=>{const d=u.current,c=h.current,v=Math.max(2,d.clientWidth||800),x=Math.max(2,d.clientHeight||600),m=new vT;m.background=new ze(Zf),m.fog=new sh(Zf,U0,N0),c.scene=m;const f=new Rn(I0,v/Math.max(1,x),.1,4200);c.camera=f,c.targetX=0,c.targetZ=0,c.panTargetX=0,c.panTargetZ=0,c.dist=gc,c.distTarget=gc,c.yaw=.32,c.pitchOff=0;const _=()=>{const re=Math.cos(c.pitch);f.position.set(c.targetX+Math.sin(c.yaw)*re*c.dist,Math.sin(c.pitch)*c.dist,c.targetZ+Math.cos(c.yaw)*re*c.dist),f.lookAt(c.targetX,0,c.targetZ)};c.updateCameraPose=_,_();const g=new _T({antialias:!0,powerPreference:"high-performance",stencil:!1,depth:!0});g.setSize(v,x),g.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),g.outputColorSpace=Hn,d.appendChild(g.domElement),c.renderer=g;const S=re=>re.preventDefault(),R=()=>{g.setSize(Math.max(2,d.clientWidth),Math.max(2,d.clientHeight)),c.updateProjection(),c.refreshChunks()};g.domElement.addEventListener("webglcontextlost",S,!1),g.domElement.addEventListener("webglcontextrestored",R,!1),m.add(new ST(13625599,2767658,.9));const A=new Rm(16774088,1.5);A.position.set(-60,120,40),m.add(A);const T=new Rm(8956671,.25);T.position.set(80,60,-90),m.add(T);const C=XT();m.add(C),c.ocean=C;const E=new _n(new Gs(at-.09,at-.09),new Hl({color:16777215,transparent:!0,opacity:.12,depthWrite:!1,side:ei}));E.rotation.x=-Math.PI/2,E.visible=!1,m.add(E),c.selection=E,c.chunks=new Map,c.chunkQueue=[],c.chunkWanted=new Set,c.farMode=!1,c.initialReady=!1,c.raycaster=new wT,c.mouse2D=new Ve,c.updateProjection=()=>{f.aspect=Math.max(2,d.clientWidth)/Math.max(2,d.clientHeight),f.updateProjectionMatrix()};const y=re=>{const de=re[0]==="F",I=de?qf:po,[W,$]=re.slice(de?1:0).split(":").map(Number);return{x:(W+.5)*I*at-ul,z:($+.5)*I*at-cl}},b=re=>{const de=y(re),I=de.x-c.targetX,W=de.z-c.targetZ;return I*I+W*W},z=()=>{const re=Math.max(2,d.clientWidth),de=Math.max(2,d.clientHeight),I=re/de,W=c.dist*_c,$=W*I;if(!isFinite(W)||!isFinite($)||W<=0||$<=0)return c.chunkWanted;const ee=c.farMode?qf:po,ge=Math.max($,W)*1.4+ee*at,we=Math.max(0,Math.floor((c.targetX+ul-ge)/at)),be=Math.min(Pt-1,Math.floor((c.targetX+ul+ge)/at)),Je=Math.max(0,Math.floor((c.targetZ+cl-ge)/at)),L=Math.min(In-1,Math.floor((c.targetZ+cl+ge)/at)),ut=Math.ceil(Pt/ee),Ye=Math.ceil(In/ee),$e=Tn(Math.floor(we/ee)-1,0,ut-1),Me=Tn(Math.floor(be/ee)+1,0,ut-1),gt=Tn(Math.floor(Je/ee)-1,0,Ye-1),De=Tn(Math.floor(L/ee)+1,0,Ye-1);let Ce=new Set;for(let M=gt;M<=De;M++)for(let H=$e;H<=Me;H++)Ce.add(GT(M,H,c.farMode));const P=c.farMode?700:240;if(Ce.size>P){const M=[...Ce].map(H=>({k:H,d:b(H)})).sort((H,ie)=>H.d-ie.d);Ce=new Set(M.slice(0,P).map(H=>H.k))}return Ce};c.refreshChunks=()=>{const re=z();if(re.size){c.chunkWanted=re;for(const de of re)!c.chunks.has(de)&&!c.chunkQueue.includes(de)&&c.chunkQueue.push(de);for(const[de,I]of c.chunks)(!re.has(de)||I.far!==c.farMode)&&(Um(m,I),c.chunks.delete(de))}};const k=()=>{const re=p.current;for(const de of c.chunks.values())Nm(de.inst,de.territories,re.reachable,re.selectedId)},Y=()=>{var W,$,ee,ge;if(!c.chunkQueue.length)return;c.chunkQueue.sort((we,be)=>b(we)-b(be));let re=c.farMode?4:2;for(;re--&&c.chunkQueue.length;){const we=c.chunkQueue.shift();if(!c.chunkWanted.has(we)||c.chunks.has(we))continue;const be=we[0]==="F",[Je,L]=we.slice(be?1:0).split(":").map(Number);c.chunks.set(we,WT(m,p.current.territories,Je,L,be)),k()}const de=c.chunkWanted.size;let I=0;for(const we of c.chunkWanted)c.chunks.has(we)&&I++;($=(W=p.current).onProgress)==null||$.call(W,60+Math.round(I/Math.max(1,de)*40)),!c.initialReady&&I===de&&(c.initialReady=!0,(ge=(ee=p.current).onReady)==null||ge.call(ee))};c.refreshChunks();let q=0,X=0,K=c.targetX,D=c.targetZ,F=c.dist;const j=()=>{var re,de,I;if(q=requestAnimationFrame(j),c.targetX+=(c.panTargetX-c.targetX)*.18,c.targetZ+=(c.panTargetZ-c.targetZ)*.18,c.dist+=(c.distTarget-c.dist)*.15,c.pitch=Tn(CT(c.dist)+(c.pitchOff||0),.92,1.55),_(),!c.farMode&&c.dist>280?(c.farMode=!0,c.refreshChunks()):c.farMode&&c.dist<240&&(c.farMode=!1,c.refreshChunks()),(Math.abs(c.dist-F)>.5||Math.abs(c.targetX-K)>po*at*.2||Math.abs(c.targetZ-D)>po*at*.2)&&(K=c.targetX,D=c.targetZ,F=c.dist,c.refreshChunks()),Y(),(I=(de=(re=c.ocean)==null?void 0:re.material)==null?void 0:de.uniforms)!=null&&I.uTime&&(c.ocean.material.uniforms.uTime.value=performance.now()*.001),c.selection.visible&&(c.selection.material.opacity=.1+.07*Math.sin(performance.now()*.004)),X++,X%30===0){const W=c.dist<170,$=c.dist<320;for(const ee of c.chunks.values())if(ee.decor){for(const ge of Object.values(ee.decor))ge&&(ge.visible=W);for(const ge of Object.values(ee.inst.groups))ge.side&&(ge.side.visible=$)}}g.render(m,f)};j(),c.stop=()=>cancelAnimationFrame(q);const Q=()=>{const re=d.clientWidth,de=d.clientHeight;re<50||de<50||(g.setSize(re,de),c.updateProjection(),c.refreshChunks())};return window.addEventListener("resize",Q),()=>{c.stop(),window.removeEventListener("resize",Q),g.domElement.removeEventListener("webglcontextlost",S),g.domElement.removeEventListener("webglcontextrestored",R);for(const re of c.chunks.values())Um(m,re);c.chunks.clear(),g.dispose(),d.contains(g.domElement)&&d.removeChild(g.domElement)}},[]),He.useEffect(()=>{const d=h.current;if(!d.chunks)return;for(const v of d.chunks.values())Nm(v.inst,v.territories,i,n);const c=t.find(v=>v.id===n);if(c){const v=Xo(c.col,c.row);d.selection.position.set(v.x,ch(c)+.02,v.z),d.selection.visible=!0}else d.selection.visible=!1},[t,i,n,a]),He.useEffect(()=>{const d=h.current;if(!d.scene||(d.borderMesh&&(d.scene.remove(d.borderMesh),d.borderMesh.dispose(),d.borderMesh=null),!l||!l.length))return;d.borderGeo||(d.borderGeo=new oi(1,1,1)),d.borderMat||(d.borderMat=new Hl({transparent:!0,opacity:.95}));const c=new Vl(d.borderGeo,d.borderMat,l.length),v=new Tt,x=new ze;l.forEach((m,f)=>{if(v.position.set(m.x,m.y,m.z),v.rotation.y=m.vert?Math.PI/2:0,v.scale.set(at+.1,.1,.26),v.updateMatrix(),c.setMatrixAt(f,v.matrix),m.owner==="me")x.setHex(16766814);else{let _=0;for(let g=0;g<m.owner.length;g++)_=_*31+m.owner.charCodeAt(g)>>>0;x.setHSL(_%360/360,.85,.6)}c.setColorAt(f,x)}),c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0),d.scene.add(c),d.borderMesh=c},[l]),He.useEffect(()=>{const d=u.current,c=h.current;if(!d)return;const v=()=>{const F=Math.max(2,d.clientWidth)/Math.max(2,d.clientHeight),j=c.distTarget*_c,Q=j*F,re=Math.max(lh/2+Im-Q,0),de=Math.max(uh/2+Im-j,0);c.panTargetX=Tn(c.panTargetX,-re,re),c.panTargetZ=Tn(c.panTargetZ,-de,de)},x=(F,j)=>{const Q=2*c.dist*_c/Math.max(1,d.clientHeight),re=Math.cos(c.yaw),de=-Math.sin(c.yaw),I=-Math.sin(c.yaw),W=-Math.cos(c.yaw);c.panTargetX+=(-re*F+I*j)*Q,c.panTargetZ+=(-de*F+W*j)*Q,v()},m=F=>{c.distTarget=Tn(c.distTarget/F,Kf,D0),v()};o&&(o.current={zoomBy:m,resetView:()=>{c.panTargetX=0,c.panTargetZ=0,c.distTarget=gc,c.yaw=.32,c.pitchOff=0,c.updateCameraPose()}});const f=(F,j)=>{const Q=d.getBoundingClientRect();c.mouse2D.x=(F-Q.left)/Q.width*2-1,c.mouse2D.y=-((j-Q.top)/Q.height)*2+1,c.raycaster.setFromCamera(c.mouse2D,c.camera);const re=[];for(const ee of c.chunks.values())for(const ge of Object.values(ee.inst.groups))re.push(ge.top);const de=c.raycaster.intersectObjects(re,!1);if(!de.length||de[0].instanceId==null)return;const I=de[0].object,W=de[0].instanceId;let $=null;for(const ee of c.chunks.values()){for(const ge of Object.values(ee.inst.groups))if(ge.top===I){$=ge.arr[W];break}if($)break}$&&p.current.onSelect($)};let _=!1,g=!1,S=0,R=0,A=0,T=0,C=!1;const E=F=>{if(F.button!==void 0&&F.button===2){C=!0,g=!1,A=F.clientX,T=F.clientY,d.style.cursor="ew-resize";return}F.button!==void 0&&F.button!==0||(_=!0,g=!1,S=0,R=performance.now(),A=F.clientX,T=F.clientY,d.style.cursor="grabbing")},y=F=>{const j=F.clientX-A,Q=F.clientY-T;if(C){c.yaw-=j*.008,c.pitchOff=Tn((c.pitchOff||0)-Q*.006,-.6,.6),c.updateCameraPose(),A=F.clientX,T=F.clientY;return}_&&(S+=Math.abs(j)+Math.abs(Q),S>6&&(g=!0),x(j,Q),A=F.clientX,T=F.clientY)},b=F=>{if(C){C=!1,d.style.cursor="grab";return}_&&(!g&&performance.now()-R<700&&f(F.clientX,F.clientY),_=!1,d.style.cursor="grab")},z=F=>{F.preventDefault(),m(Math.exp(-F.deltaY*.0012))},k=()=>m(1.5),Y=F=>{if(F.touches.length===1)c.touch={x:F.touches[0].clientX,y:F.touches[0].clientY,m:!1,d:0,t:Date.now()};else if(F.touches.length>=2){c.touch=null;const j=F.touches[0].clientX-F.touches[1].clientX,Q=F.touches[0].clientY-F.touches[1].clientY;c.pinch=Math.hypot(j,Q),c.twoFinger={dx:j,dy:Q,cy:(F.touches[0].clientY+F.touches[1].clientY)/2}}},q=F=>{if(F.preventDefault(),F.touches.length===1&&c.touch){const j=F.touches[0].clientX-c.touch.x,Q=F.touches[0].clientY-c.touch.y;c.touch.d+=Math.abs(j)+Math.abs(Q),c.touch.d>12&&(c.touch.m=!0),x(j,Q),c.touch.x=F.touches[0].clientX,c.touch.y=F.touches[0].clientY}else if(F.touches.length===2){const j=F.touches[0].clientX-F.touches[1].clientX,Q=F.touches[0].clientY-F.touches[1].clientY,re=Math.hypot(j,Q);if(c.pinch&&m(Math.exp((re-c.pinch)*.002)),c.twoFinger){const de=(F.touches[0].clientY+F.touches[1].clientY)/2;c.pitchOff=Tn((c.pitchOff||0)-(de-c.twoFinger.cy)*.002,-.6,.6),c.yaw-=(j-c.twoFinger.dx)*.002,c.updateCameraPose()}c.pinch=re,c.twoFinger={dx:j,dy:Q,cy:(F.touches[0].clientY+F.touches[1].clientY)/2}}},X=()=>{c.touch&&!c.touch.m&&c.touch.d<14&&Date.now()-c.touch.t<700&&f(c.touch.x,c.touch.y),c.touch=null,c.pinch=0,c.twoFinger=null},K=()=>{_=!1,C=!1,d.style.cursor="grab"},D=F=>F.preventDefault();return d.style.touchAction="none",d.style.cursor="grab",d.addEventListener("mousedown",E),d.addEventListener("mousemove",y),d.addEventListener("mouseup",b),d.addEventListener("mouseleave",K),d.addEventListener("wheel",z,{passive:!1}),d.addEventListener("dblclick",k),d.addEventListener("contextmenu",D),d.addEventListener("touchstart",Y,{passive:!0}),d.addEventListener("touchmove",q,{passive:!1}),d.addEventListener("touchend",X),()=>{o&&(o.current=null),d.removeEventListener("mousedown",E),d.removeEventListener("mousemove",y),d.removeEventListener("mouseup",b),d.removeEventListener("mouseleave",K),d.removeEventListener("wheel",z),d.removeEventListener("dblclick",k),d.removeEventListener("contextmenu",D),d.removeEventListener("touchstart",Y),d.removeEventListener("touchmove",q),d.removeEventListener("touchend",X)}},[]),te.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",background:"#0a1620"},children:[te.jsx("div",{ref:u,style:{width:"100%",height:"100%"}}),te.jsxs("div",{style:{position:"absolute",right:12,top:12,background:"rgba(8,16,10,.74)",border:"1px solid rgba(255,255,255,.08)",borderRadius:11,padding:"8px 10px",fontSize:10,lineHeight:1.65,pointerEvents:"none",backdropFilter:"blur(4px)"},children:[te.jsx("div",{style:{fontWeight:800,marginBottom:3},children:"Биомы"}),te.jsx("div",{children:"🌿 Луг"}),te.jsx("div",{children:"🌲 Лес · защита"}),te.jsx("div",{children:"⛰️ Холмы · защита"}),te.jsx("div",{children:"🌾 Поля"}),te.jsx("div",{children:"🪷 Болота · воздух"}),te.jsx("div",{children:"🏔️ Горы · непроходимы"})]}),te.jsx("div",{style:{position:"absolute",left:12,bottom:10,fontSize:10,color:"#ffffff66",pointerEvents:"none"},children:"Тяни — панорама · ПКМ — поворот · Колесо/пинч/кнопки — зум"})]})}function To({onClick:t,disabled:e,variant:n="primary",children:i,style:r}){const s=e?ke.border:n==="success"?"#087f3f":n==="danger"?"#b93838":n==="ghost"?"transparent":ke.accent;return te.jsx("button",{onClick:e?void 0:t,style:{width:"100%",padding:"12px 0",border:n==="ghost"?`1px solid ${ke.border}`:"none",borderRadius:11,fontWeight:800,fontSize:14,cursor:e?"not-allowed":"pointer",background:s,color:e?ke.muted:"#fff",...r},children:i})}function vc({onClick:t,children:e}){return te.jsx("button",{onClick:t,style:{width:42,height:42,borderRadius:12,border:"1px solid rgba(255,255,255,.14)",background:"rgba(8,16,16,.82)",color:"#e6eee8",fontSize:20,fontWeight:800,cursor:"pointer",lineHeight:1},children:e})}const Fm={width:38,height:38,borderRadius:10,border:"1px solid rgba(255,255,255,.12)",background:"rgba(8,16,16,.82)",fontSize:17,cursor:"pointer"};function YT({profile:t,supplyEta:e,now:n,onInv:i,onCase:r}){let s="";if(t.supplies<t.supplyMax&&e){const o=Math.max(0,Math.ceil((e-n)/1e3));s=` (${Math.floor(o/60)}:${String(o%60).padStart(2,"0")})`}return te.jsxs("div",{style:{position:"absolute",left:12,top:12,display:"flex",gap:8,alignItems:"center"},children:[te.jsxs("div",{style:{padding:"7px 12px",borderRadius:10,background:"rgba(8,16,16,.82)",border:"1px solid rgba(255,255,255,.08)",fontSize:12,fontWeight:800,pointerEvents:"none"},children:["🪙 ",t.coins,t.income>0&&te.jsxs("span",{style:{color:"#7fd18a",fontWeight:600},children:[" +",t.income,"/м"]}),te.jsxs("span",{style:{marginLeft:12},children:["⚡ ",t.supplies,"/",t.supplyMax,te.jsx("span",{style:{color:ke.muted,fontWeight:600},children:s})]}),te.jsxs("span",{style:{marginLeft:12},children:["🏔️ ",t.owned.length,"/",TT]})]}),te.jsx("button",{onClick:i,style:Fm,children:"🎒"}),te.jsx("button",{onClick:r,style:Fm,children:"📦"})]})}function $T({u:t,sel:e,onClick:n}){const i=t.hp<=0;return te.jsxs("div",{onClick:i?void 0:n,style:{minWidth:86,borderRadius:12,padding:8,cursor:i?"not-allowed":"pointer",border:e?"2px solid "+ke.accent:"1px solid "+ke.border,background:i?"#1a1212":ke.bg,opacity:i?.5:1,textAlign:"center"},children:[te.jsx("img",{src:ah(t),onError:r=>r.target.style.display="none",style:{width:44,height:44,borderRadius:8,objectFit:"cover",display:"block",margin:"0 auto 4px"}}),te.jsx("div",{style:{fontSize:11,fontWeight:800,whiteSpace:"nowrap",overflow:"hidden"},children:t.name}),te.jsxs("div",{style:{fontSize:9,color:ke.textD},children:["⚔️",Math.max(t.air,t.ground)," 🛡️",t.protection]}),te.jsx("div",{style:{height:5,background:"#1c2c23",borderRadius:4,marginTop:4},children:te.jsx("div",{style:{height:"100%",width:t.hp+"%",borderRadius:4,background:t.hp>50?"#22c55e":t.hp>25?"#f5c451":"#ef4444"}})}),i&&te.jsx("div",{style:{fontSize:9,color:ke.red,marginTop:2},children:"ранен"})]})}function F0({title:t,onClose:e,children:n}){return te.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,.72)",zIndex:50,display:"flex",alignItems:"flex-end"},onClick:e,children:te.jsxs("div",{style:{background:ke.surf,borderRadius:"20px 20px 0 0",padding:18,width:"100%",borderTop:"1px solid "+ke.border,maxHeight:"85dvh",overflowY:"auto"},onClick:i=>i.stopPropagation(),children:[te.jsx("div",{style:{fontSize:20,fontWeight:900,marginBottom:12},children:t}),n,te.jsx(To,{variant:"ghost",onClick:e,style:{marginTop:10},children:"Закрыть"})]})})}function qT({t,building:e,profile:n,selUnit:i,setSelUnit:r,onAttack:s,onBuild:o,onClose:a,result:l,canInteract:u,busy:h,freePlace:p}){const d=It[t.type],c=t.owner==="me",v=RT[t.type]||[],x=n.units.filter(m=>m.hp>0);return te.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,.72)",zIndex:50,display:"flex",alignItems:"flex-end"},onClick:a,children:te.jsxs("div",{style:{background:ke.surf,borderRadius:"20px 20px 0 0",padding:18,width:"100%",borderTop:"1px solid "+ke.border,maxHeight:"80dvh",overflowY:"auto"},onClick:m=>m.stopPropagation(),children:[te.jsxs("div",{style:{fontSize:22,fontWeight:900},children:[d.e," ",d.n]}),te.jsxs("div",{style:{fontSize:12,color:ke.textD,margin:"4px 0 12px"},children:[e?`${Oi[e.b].i} ${Oi[e.b].n} — ${Oi[e.b].d}`:d.bonus?`+${Math.round((d.m-1)*100)}% ${AT[d.bonus]} для защиты`:d.impassable?"Непроходимая зона":"Обычная местность",(t.type==="field"||t.type==="hills")&&te.jsx("span",{style:{color:"#7fd18a"},children:" · +1 🪙/мин пассивно"})]}),l&&!l.error&&te.jsxs("div",{style:{padding:12,borderRadius:11,marginBottom:10,background:l.win?"#092613":"#2d0a0a",border:`1px solid ${l.win?"#1d9b55":"#c43838"}`},children:[te.jsx("b",{children:l.win?"🏆 Захвачено":"💀 Неудача"}),te.jsxs("div",{style:{fontSize:12,color:ke.textD,marginTop:4},children:[Dm[l.atkStat]," ",l.ap," vs ",Dm[l.defStat]," ",l.dp," · юнит −",l.dmg," HP"]})]}),(l==null?void 0:l.error)&&te.jsxs("div",{style:{fontSize:12,color:ke.red,marginBottom:10},children:["⚠️ ",l.error]}),c&&!e&&v.length>0&&te.jsxs("div",{style:{marginBottom:10},children:[te.jsxs("div",{style:{fontSize:12,fontWeight:800,marginBottom:6},children:["Построить (",n.coins," 🪙):"]}),v.map(m=>te.jsxs(To,{disabled:n.coins<Oi[m].cost||h,onClick:()=>o(m),style:{marginBottom:6},children:[Oi[m].i," ",Oi[m].n," — ",Oi[m].cost," 🪙",te.jsx("div",{style:{fontSize:10,fontWeight:500,opacity:.8},children:Oi[m].d})]},m))]}),!c&&!d.impassable&&te.jsxs(te.Fragment,{children:[!u&&te.jsx("div",{style:{fontSize:12,color:ke.muted,marginBottom:8},children:"Можно атаковать только соседние со своими клетки."}),u&&p&&te.jsx("div",{style:{fontSize:12,color:ke.gold,marginBottom:8},children:"🎁 Первая клетка — куда угодно!"}),u&&te.jsxs(te.Fragment,{children:[te.jsx("div",{style:{fontSize:12,fontWeight:800,marginBottom:6},children:"Юнит в атаку (⚡−1):"}),te.jsxs("div",{style:{display:"flex",gap:8,overflowX:"auto",paddingBottom:6,marginBottom:8},children:[n.units.length===0&&te.jsx("div",{style:{fontSize:12,color:ke.muted},children:"Нет юнитов — открой кейс 📦"}),n.units.map(m=>te.jsx($T,{u:m,sel:i===m.uid,onClick:()=>r(m.uid)},m.uid))]}),te.jsx(To,{variant:"success",disabled:h||!i||x.length===0||n.supplies<1,onClick:()=>s(i),children:h?"Атака…":"🏳️ Захватить (⚡1)"}),n.supplies<1&&te.jsx("div",{style:{fontSize:11,color:ke.gold,marginTop:6},children:"Припасы кончились — жди восстановления"})]})]}),te.jsx(To,{variant:"ghost",onClick:a,style:{marginTop:8},children:"Закрыть"})]})})}function KT({profile:t,onClose:e}){return te.jsxs(F0,{title:"🎒 Инвентарь",onClose:e,children:[t.units.length===0&&te.jsx("div",{style:{color:ke.muted,fontSize:13},children:"Пусто. Открой кейс сервера 📦"}),te.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(96px,1fr))",gap:10},children:t.units.map(n=>te.jsxs("div",{style:{background:ke.bg,borderRadius:12,padding:8,textAlign:"center",border:"1px solid "+ke.border},children:[te.jsx("img",{src:ah(n),onError:i=>i.target.style.display="none",style:{width:"100%",aspectRatio:"1",borderRadius:8,objectFit:"cover"}}),te.jsx("div",{style:{fontSize:11,fontWeight:800,marginTop:4},children:n.name}),te.jsx("div",{style:{fontSize:9,color:ke.muted},children:n.server}),te.jsxs("div",{style:{fontSize:10,marginTop:2},children:["🌪️",n.air," ⛏️",n.ground,"/10 🛡️",n.protection,"/10"]}),te.jsx("div",{style:{fontSize:10,color:n.hp>0?"#7fd18a":ke.red},children:n.hp>0?`HP ${n.hp}`:"ранен"})]},n.uid))})]})}function ZT({servers:t,caseCost:e,coins:n,onOpen:i,onClose:r}){var m;const[s,o]=He.useState(null),[a,l]=He.useState("idle"),[u,h]=He.useState(null),[p,d]=He.useState(""),c=s||((m=t[0])==null?void 0:m.name),v=f=>f&&f.charAt(0).toUpperCase()+f.slice(1),x=async()=>{l("rolling"),d(""),h(null);try{const f=await i(c);setTimeout(()=>{h(f),l("done")},900)}catch(f){d(f.message),l("idle")}};return te.jsxs(F0,{title:"📦 Кейсы серверов",onClose:r,children:[te.jsx("style",{children:`
        @keyframes caseShake{0%,100%{transform:rotate(0)}20%{transform:rotate(-7deg)}40%{transform:rotate(7deg)}60%{transform:rotate(-5deg)}80%{transform:rotate(5deg)}}
        @keyframes cardPop{0%{transform:scale(.3) rotateY(90deg);opacity:0}60%{transform:scale(1.12) rotateY(0deg);opacity:1}100%{transform:scale(1)}}
      `}),t.length===0&&te.jsx("div",{style:{color:ke.muted,fontSize:13,marginBottom:10},children:"На сервере пока нет папок с карточками."}),te.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:12},children:t.map(f=>te.jsxs("button",{onClick:()=>o(f.name),style:{padding:"6px 12px",borderRadius:9,fontSize:12,fontWeight:700,cursor:"pointer",border:"1px solid "+(c===f.name?ke.accent:ke.border),background:c===f.name?"#2a1d4d":"transparent",color:ke.text},children:[v(f.name)," · ",f.count," 👤"]},f.name))}),a==="rolling"&&te.jsxs("div",{style:{textAlign:"center",padding:18,background:ke.bg,borderRadius:14,border:"1px solid "+ke.gold,marginBottom:10},children:[te.jsx("div",{style:{fontSize:46,display:"inline-block",animation:"caseShake .5s ease infinite"},children:"📦"}),te.jsx("div",{style:{fontSize:12,color:ke.gold,marginTop:6},children:"Открываем…"})]}),a==="done"&&u&&te.jsxs("div",{style:{textAlign:"center",padding:14,background:ke.bg,borderRadius:14,border:"1px solid "+ke.accent,marginBottom:10,animation:"cardPop .45s ease"},children:[te.jsx("img",{src:ah(u.unit),onError:f=>f.target.style.display="none",style:{width:90,height:90,borderRadius:12,objectFit:"cover"}}),te.jsxs("div",{style:{fontSize:16,fontWeight:900,marginTop:6},children:["✨ ",u.unit.name]}),te.jsxs("div",{style:{fontSize:11,color:ke.textD},children:["🌪️ ",u.unit.air," · ⛏️ ",u.unit.ground,"/10 · 🛡️ ",u.unit.protection,"/10"]})]}),p&&te.jsxs("div",{style:{color:ke.red,fontSize:12,marginBottom:8},children:["⚠️ ",p]}),te.jsx(To,{disabled:a==="rolling"||!c||n<e,onClick:x,children:a==="rolling"?"Открываем…":`Открыть кейс «${v(c)}» — ${e} 🪙`})]})}function Om({progress:t,text:e}){const n=Tn(t,0,100);return te.jsx("div",{style:{height:"100dvh",background:"radial-gradient(circle at 50% 35%,#10283a 0%,#071018 72%)",color:"#e6eee8",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"-apple-system,system-ui,sans-serif"},children:te.jsxs("div",{style:{width:"min(440px,84vw)",textAlign:"center"},children:[te.jsx("div",{style:{fontSize:42,marginBottom:12},children:"🏔️"}),te.jsx("div",{style:{fontSize:25,fontWeight:900,letterSpacing:-.5},children:"Загрузка мира"}),te.jsx("div",{style:{fontSize:13,color:"#a9b8ae",marginTop:8,minHeight:20},children:e}),te.jsx("div",{style:{height:8,background:"#1c2c23",borderRadius:99,marginTop:24,overflow:"hidden",border:"1px solid #2b4232"},children:te.jsx("div",{style:{height:"100%",width:`${n}%`,background:"linear-gradient(90deg,#8b5cf6,#c4b5fd)",transition:"width .18s ease"}})}),te.jsxs("div",{style:{fontSize:12,color:"#6f8277",marginTop:9},children:[n,"%"]})]})})}const QT={id:"dev",name:"Dev",coins:1e3,supplies:6,supplyMax:6,supplyNextIn:0,income:0,heal:0,units:[{uid:"u1",name:"Тест",server:"dev",file:"test.png",air:5,ground:6,protection:4,hp:100}],owned:[],buildings:{}};function JT(){const[t,e]=He.useState(null),[n,i]=He.useState(0),[r,s]=He.useState(!1),[o,a]=He.useState(60),[l,u]=He.useState(null),[h,p]=He.useState(null),[d,c]=He.useState(0),[v,x]=He.useState(null),[m,f]=He.useState({owners:{},buildings:{}}),[_,g]=He.useState([]),[S,R]=He.useState(120),[A,T]=He.useState(0),[C,E]=He.useState(null),[y,b]=He.useState(null),[z,k]=He.useState(!1),[Y,q]=He.useState(Date.now()),X=He.useRef(null);He.useEffect(()=>{let I=!0;return UT(W=>{I&&i(W)}).then(W=>{I&&e(W)}),()=>{I=!1}},[]);const K=I=>{x(I),T(Date.now()+(I.supplyNextIn||0)*1e3)};He.useEffect(()=>{ao.init().then(I=>{K(I.profile),f({owners:I.owners,buildings:I.buildings}),g(I.servers),R(I.caseCost||120);const W=I.profile.units.find($=>$.hp>0);W&&E(W.uid)}).catch(I=>{console.warn("Сервер недоступен, оффлайн-режим:",I.message),K(QT)})},[]),He.useEffect(()=>{t&&(OT(t,m.owners),c(I=>I+1))},[t,m]),He.useEffect(()=>{if(!v)return;const I=setInterval(()=>{ao.state().then(W=>{K(W.profile),f({owners:W.owners,buildings:W.buildings})}).catch(()=>{})},2e4);return()=>clearInterval(I)},[!!v]),He.useEffect(()=>{const I=setInterval(()=>q(Date.now()),500);return()=>clearInterval(I)},[]);const D=He.useMemo(()=>t?FT(t):new Set,[t,d]),F=He.useMemo(()=>{if(!t)return[];const I=[],W=($,ee)=>$<0||$>=In||ee<0||ee>=Pt?null:t[$*Pt+ee];for(const $ of t){if(!$.owner)continue;const ee=Xo($.col,$.row),ge=ch($)+.06,we=W($.row-1,$.col),be=W($.row+1,$.col),Je=W($.row,$.col-1),L=W($.row,$.col+1);(!we||we.owner!==$.owner)&&I.push({x:ee.x,z:ee.z-at/2,y:ge,vert:!1,owner:$.owner}),(!be||be.owner!==$.owner)&&I.push({x:ee.x,z:ee.z+at/2,y:ge,vert:!1,owner:$.owner}),(!Je||Je.owner!==$.owner)&&I.push({x:ee.x-at/2,z:ee.z,y:ge,vert:!0,owner:$.owner}),(!L||L.owner!==$.owner)&&I.push({x:ee.x+at/2,z:ee.z,y:ge,vert:!0,owner:$.owner})}return I},[t,d]),j=!!v&&v.owned.length===0,Q=async I=>{if(!(!l||z)){k(!0),p(null);try{const W=await ao.attack(l.id,I);p(W.result),K(W.profile);const $=t.find(ee=>ee.id===l.id);W.owners[l.id]==="me"&&$&&($.owner="me"),c(ee=>ee+1),u($?{...$}:null)}catch(W){p({error:W.message})}k(!1)}},re=async I=>{if(!(!l||z)){k(!0);try{const W=await ao.build(l.id,I);K(W.profile),f($=>({...$,buildings:{...$.buildings,[W.building.tileId]:{b:W.building.b,own:"me"}}}))}catch(W){p({error:W.message})}k(!1)}};if(!t)return te.jsx(Om,{progress:n,text:n<55?"Создаём карту…":"Возводим горные хребты…"});const de=l?j?!l.owner&&!It[l.type].impassable:D.has(l.id):!1;return te.jsxs("div",{style:{height:"100dvh",background:ke.bg,color:ke.text,fontFamily:"-apple-system,system-ui,sans-serif",overflow:"hidden"},children:[te.jsx(jT,{territories:t,reachable:D,selectedId:l==null?void 0:l.id,rev:d,borders:F,onProgress:a,onReady:()=>{a(100),s(!0)},onSelect:I=>{u(I),p(null)},controlsRef:X}),!r&&te.jsx(Om,{progress:o,text:"Подготавливаем видимую область…"}),v&&te.jsx(YT,{profile:v,supplyEta:A,now:Y,onInv:()=>b("inv"),onCase:()=>b("case")}),te.jsxs("div",{style:{position:"absolute",right:12,bottom:34,display:"flex",flexDirection:"column",gap:8},children:[te.jsx(vc,{onClick:()=>{var I;return(I=X.current)==null?void 0:I.zoomBy(1.35)},children:"＋"}),te.jsx(vc,{onClick:()=>{var I;return(I=X.current)==null?void 0:I.zoomBy(1/1.35)},children:"－"}),te.jsx(vc,{onClick:()=>{var I;return(I=X.current)==null?void 0:I.resetView()},children:"⌂"})]}),l&&v&&te.jsx(qT,{t:l,building:m.buildings[l.id],profile:v,selUnit:C,setSelUnit:E,onAttack:Q,onBuild:re,busy:z,onClose:()=>{u(null),p(null)},result:h,canInteract:de,freePlace:j}),y==="inv"&&v&&te.jsx(KT,{profile:v,onClose:()=>b(null)}),y==="case"&&v&&te.jsx(ZT,{servers:_,caseCost:S,coins:v.coins,onClose:()=>b(null),onOpen:async I=>{const W=await ao.openCase(I);return K(W.profile),W}})]})}Z_(document.getElementById("root")).render(te.jsx(JT,{}));
