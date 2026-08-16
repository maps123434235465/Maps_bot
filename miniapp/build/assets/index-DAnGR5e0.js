(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Vm={exports:{}},Jl={},Gm={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zo=Symbol.for("react.element"),jv=Symbol.for("react.portal"),Yv=Symbol.for("react.fragment"),$v=Symbol.for("react.strict_mode"),qv=Symbol.for("react.profiler"),Kv=Symbol.for("react.provider"),Zv=Symbol.for("react.context"),Qv=Symbol.for("react.forward_ref"),Jv=Symbol.for("react.suspense"),e_=Symbol.for("react.memo"),t_=Symbol.for("react.lazy"),Mh=Symbol.iterator;function n_(t){return t===null||typeof t!="object"?null:(t=Mh&&t[Mh]||t["@@iterator"],typeof t=="function"?t:null)}var Wm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xm=Object.assign,jm={};function Xs(t,e,n){this.props=t,this.context=e,this.refs=jm,this.updater=n||Wm}Xs.prototype.isReactComponent={};Xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ym(){}Ym.prototype=Xs.prototype;function rd(t,e,n){this.props=t,this.context=e,this.refs=jm,this.updater=n||Wm}var sd=rd.prototype=new Ym;sd.constructor=rd;Xm(sd,Xs.prototype);sd.isPureReactComponent=!0;var Eh=Array.isArray,$m=Object.prototype.hasOwnProperty,od={current:null},qm={key:!0,ref:!0,__self:!0,__source:!0};function Km(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$m.call(e,i)&&!qm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Zo,type:t,key:s,ref:o,props:r,_owner:od.current}}function i_(t,e){return{$$typeof:Zo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zo}function r_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wh=/\/+/g;function Eu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?r_(""+t.key):e.toString(36)}function Za(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Zo:case jv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Eu(o,0):i,Eh(r)?(n="",t!=null&&(n=t.replace(wh,"$&/")+"/"),Za(r,e,n,"",function(c){return c})):r!=null&&(ad(r)&&(r=i_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(wh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Eh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Eu(s,a);o+=Za(s,e,n,l,r)}else if(l=n_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Eu(s,a++),o+=Za(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ua(t,e,n){if(t==null)return t;var i=[],r=0;return Za(t,i,"","",function(s){return e.call(n,s,r++)}),i}function s_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},Qa={transition:null},o_={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:Qa,ReactCurrentOwner:od};function Zm(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:ua,forEach:function(t,e,n){ua(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ua(t,function(){e++}),e},toArray:function(t){return ua(t,function(e){return e})||[]},only:function(t){if(!ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Xs;Ye.Fragment=Yv;Ye.Profiler=qv;Ye.PureComponent=rd;Ye.StrictMode=$v;Ye.Suspense=Jv;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o_;Ye.act=Zm;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Xm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=od.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)$m.call(e,l)&&!qm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Zo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:Zv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Kv,_context:t},t.Consumer=t};Ye.createElement=Km;Ye.createFactory=function(t){var e=Km.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:Qv,render:t}};Ye.isValidElement=ad;Ye.lazy=function(t){return{$$typeof:t_,_payload:{_status:-1,_result:t},_init:s_}};Ye.memo=function(t,e){return{$$typeof:e_,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=Qa.transition;Qa.transition={};try{t()}finally{Qa.transition=e}};Ye.unstable_act=Zm;Ye.useCallback=function(t,e){return Jt.current.useCallback(t,e)};Ye.useContext=function(t){return Jt.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return Jt.current.useEffect(t,e)};Ye.useId=function(){return Jt.current.useId()};Ye.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return Jt.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};Ye.useRef=function(t){return Jt.current.useRef(t)};Ye.useState=function(t){return Jt.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return Jt.current.useTransition()};Ye.version="18.3.1";Gm.exports=Ye;var Le=Gm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_=Le,l_=Symbol.for("react.element"),u_=Symbol.for("react.fragment"),c_=Object.prototype.hasOwnProperty,f_=a_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d_={key:!0,ref:!0,__self:!0,__source:!0};function Qm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)c_.call(e,i)&&!d_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:l_,type:t,key:s,ref:o,props:r,_owner:f_.current}}Jl.Fragment=u_;Jl.jsx=Qm;Jl.jsxs=Qm;Vm.exports=Jl;var X=Vm.exports,Jm={exports:{}},Mn={},eg={exports:{}},tg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,K){var J=D.length;D.push(K);e:for(;0<J;){var ae=J-1>>>1,ve=D[ae];if(0<r(ve,K))D[ae]=K,D[J]=ve,J=ae;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var K=D[0],J=D.pop();if(J!==K){D[0]=J;e:for(var ae=0,ve=D.length,ee=ve>>>1;ae<ee;){var k=2*(ae+1)-1,F=D[k],$=k+1,ne=D[$];if(0>r(F,J))$<ve&&0>r(ne,F)?(D[ae]=ne,D[$]=J,ae=$):(D[ae]=F,D[k]=J,ae=k);else if($<ve&&0>r(ne,J))D[ae]=ne,D[$]=J,ae=$;else break e}}return K}function r(D,K){var J=D.sortIndex-K.sortIndex;return J!==0?J:D.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,p=null,h=3,g=!1,x=!1,m=!1,u=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=D)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function S(D){if(m=!1,v(D),!x)if(n(l)!==null)x=!0,W(b);else{var K=n(c);K!==null&&q(S,K.startTime-D)}}function b(D,K){x=!1,m&&(m=!1,f(C),C=-1),g=!0;var J=h;try{for(v(K),p=n(l);p!==null&&(!(p.expirationTime>K)||D&&!P());){var ae=p.callback;if(typeof ae=="function"){p.callback=null,h=p.priorityLevel;var ve=ae(p.expirationTime<=K);K=t.unstable_now(),typeof ve=="function"?p.callback=ve:p===n(l)&&i(l),v(K)}else i(l);p=n(l)}if(p!==null)var ee=!0;else{var k=n(c);k!==null&&q(S,k.startTime-K),ee=!1}return ee}finally{p=null,h=J,g=!1}}var T=!1,A=null,C=-1,E=5,y=-1;function P(){return!(t.unstable_now()-y<E)}function O(){if(A!==null){var D=t.unstable_now();y=D;var K=!0;try{K=A(!0,D)}finally{K?z():(T=!1,A=null)}}else T=!1}var z;if(typeof _=="function")z=function(){_(O)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,Y=j.port2;j.port1.onmessage=O,z=function(){Y.postMessage(null)}}else z=function(){u(O,0)};function W(D){A=D,T||(T=!0,z())}function q(D,K){C=u(function(){D(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,W(b))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var J=h;h=K;try{return D()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var J=h;h=D;try{return K()}finally{h=J}},t.unstable_scheduleCallback=function(D,K,J){var ae=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ae+J:ae):J=ae,D){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=J+ve,D={id:d++,callback:K,priorityLevel:D,startTime:J,expirationTime:ve,sortIndex:-1},J>ae?(D.sortIndex=J,e(c,D),n(l)===null&&D===n(c)&&(m?(f(C),C=-1):m=!0,q(S,J-ae))):(D.sortIndex=ve,e(l,D),x||g||(x=!0,W(b))),D},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(D){var K=h;return function(){var J=h;h=K;try{return D.apply(this,arguments)}finally{h=J}}}})(tg);eg.exports=tg;var h_=eg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_=Le,Sn=h_;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ng=new Set,bo={};function kr(t,e){Is(t,e),Is(t+"Capture",e)}function Is(t,e){for(bo[t]=e,t=0;t<e.length;t++)ng.add(e[t])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cc=Object.prototype.hasOwnProperty,m_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Th={},Ah={};function g_(t){return Cc.call(Ah,t)?!0:Cc.call(Th,t)?!1:m_.test(t)?Ah[t]=!0:(Th[t]=!0,!1)}function v_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function __(t,e,n,i){if(e===null||typeof e>"u"||v_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var ld=/[\-:]([a-z])/g;function ud(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ld,ud);Ht[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ld,ud);Ht[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ld,ud);Ht[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function cd(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(__(e,n,r,i)&&(n=null),i||r===null?g_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ri=p_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ca=Symbol.for("react.element"),ls=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),fd=Symbol.for("react.strict_mode"),Rc=Symbol.for("react.profiler"),ig=Symbol.for("react.provider"),rg=Symbol.for("react.context"),dd=Symbol.for("react.forward_ref"),bc=Symbol.for("react.suspense"),Pc=Symbol.for("react.suspense_list"),hd=Symbol.for("react.memo"),zi=Symbol.for("react.lazy"),sg=Symbol.for("react.offscreen"),Ch=Symbol.iterator;function Ks(t){return t===null||typeof t!="object"?null:(t=Ch&&t[Ch]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,wu;function ho(t){if(wu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wu=e&&e[1]||""}return`
`+wu+t}var Tu=!1;function Au(t,e){if(!t||Tu)return"";Tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Tu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ho(t):""}function x_(t){switch(t.tag){case 5:return ho(t.type);case 16:return ho("Lazy");case 13:return ho("Suspense");case 19:return ho("SuspenseList");case 0:case 2:case 15:return t=Au(t.type,!1),t;case 11:return t=Au(t.type.render,!1),t;case 1:return t=Au(t.type,!0),t;default:return""}}function Lc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case us:return"Fragment";case ls:return"Portal";case Rc:return"Profiler";case fd:return"StrictMode";case bc:return"Suspense";case Pc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case rg:return(t.displayName||"Context")+".Consumer";case ig:return(t._context.displayName||"Context")+".Provider";case dd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hd:return e=t.displayName||null,e!==null?e:Lc(t.type)||"Memo";case zi:e=t._payload,t=t._init;try{return Lc(t(e))}catch{}}return null}function y_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lc(e);case 8:return e===fd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function og(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function S_(t){var e=og(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fa(t){t._valueTracker||(t._valueTracker=S_(t))}function ag(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=og(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dc(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lg(t,e){e=e.checked,e!=null&&cd(t,"checked",e,!1)}function Ic(t,e){lg(t,e);var n=ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uc(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uc(t,e,n){(e!=="number"||vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var po=Array.isArray;function Es(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Nc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ph(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(po(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function ug(t,e){var n=ir(e.value),i=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Lh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var da,fg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},M_=["Webkit","ms","Moz","O"];Object.keys(xo).forEach(function(t){M_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xo[e]=xo[t]})});function dg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xo.hasOwnProperty(t)&&xo[t]?(""+e).trim():e+"px"}function hg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=dg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var E_=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oc(t,e){if(e){if(E_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function kc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zc=null;function pd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bc=null,ws=null,Ts=null;function Dh(t){if(t=ea(t)){if(typeof Bc!="function")throw Error(se(280));var e=t.stateNode;e&&(e=ru(e),Bc(t.stateNode,t.type,e))}}function pg(t){ws?Ts?Ts.push(t):Ts=[t]:ws=t}function mg(){if(ws){var t=ws,e=Ts;if(Ts=ws=null,Dh(t),e)for(t=0;t<e.length;t++)Dh(e[t])}}function gg(t,e){return t(e)}function vg(){}var Cu=!1;function _g(t,e,n){if(Cu)return t(e,n);Cu=!0;try{return gg(t,e,n)}finally{Cu=!1,(ws!==null||Ts!==null)&&(vg(),mg())}}function Lo(t,e){var n=t.stateNode;if(n===null)return null;var i=ru(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Hc=!1;if(Mi)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{Hc=!1}function w_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var yo=!1,_l=null,xl=!1,Vc=null,T_={onError:function(t){yo=!0,_l=t}};function A_(t,e,n,i,r,s,o,a,l){yo=!1,_l=null,w_.apply(T_,arguments)}function C_(t,e,n,i,r,s,o,a,l){if(A_.apply(this,arguments),yo){if(yo){var c=_l;yo=!1,_l=null}else throw Error(se(198));xl||(xl=!0,Vc=c)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ih(t){if(zr(t)!==t)throw Error(se(188))}function R_(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ih(r),t;if(s===i)return Ih(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function yg(t){return t=R_(t),t!==null?Sg(t):null}function Sg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sg(t);if(e!==null)return e;t=t.sibling}return null}var Mg=Sn.unstable_scheduleCallback,Uh=Sn.unstable_cancelCallback,b_=Sn.unstable_shouldYield,P_=Sn.unstable_requestPaint,Et=Sn.unstable_now,L_=Sn.unstable_getCurrentPriorityLevel,md=Sn.unstable_ImmediatePriority,Eg=Sn.unstable_UserBlockingPriority,yl=Sn.unstable_NormalPriority,D_=Sn.unstable_LowPriority,wg=Sn.unstable_IdlePriority,eu=null,ri=null;function I_(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(eu,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:F_,U_=Math.log,N_=Math.LN2;function F_(t){return t>>>=0,t===0?32:31-(U_(t)/N_|0)|0}var ha=64,pa=4194304;function mo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=mo(a):(s&=o,s!==0&&(i=mo(s)))}else o=n&~r,o!==0?i=mo(o):s!==0&&(i=mo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function O_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=O_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Gc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tg(){var t=ha;return ha<<=1,!(ha&4194240)&&(ha=64),t}function Ru(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function z_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function Ag(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cg,vd,Rg,bg,Pg,Wc=!1,ma=[],ji=null,Yi=null,$i=null,Do=new Map,Io=new Map,Hi=[],B_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nh(t,e){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Do.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(e.pointerId)}}function Qs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ea(e),e!==null&&vd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function H_(t,e,n,i,r){switch(e){case"focusin":return ji=Qs(ji,t,e,n,i,r),!0;case"dragenter":return Yi=Qs(Yi,t,e,n,i,r),!0;case"mouseover":return $i=Qs($i,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Do.set(s,Qs(Do.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Io.set(s,Qs(Io.get(s)||null,t,e,n,i,r)),!0}return!1}function Lg(t){var e=Er(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=xg(n),e!==null){t.blockedOn=e,Pg(t.priority,function(){Rg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ja(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);zc=i,n.target.dispatchEvent(i),zc=null}else return e=ea(n),e!==null&&vd(e),t.blockedOn=n,!1;e.shift()}return!0}function Fh(t,e,n){Ja(t)&&n.delete(e)}function V_(){Wc=!1,ji!==null&&Ja(ji)&&(ji=null),Yi!==null&&Ja(Yi)&&(Yi=null),$i!==null&&Ja($i)&&($i=null),Do.forEach(Fh),Io.forEach(Fh)}function Js(t,e){t.blockedOn===e&&(t.blockedOn=null,Wc||(Wc=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,V_)))}function Uo(t){function e(r){return Js(r,t)}if(0<ma.length){Js(ma[0],t);for(var n=1;n<ma.length;n++){var i=ma[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ji!==null&&Js(ji,t),Yi!==null&&Js(Yi,t),$i!==null&&Js($i,t),Do.forEach(e),Io.forEach(e),n=0;n<Hi.length;n++)i=Hi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Hi.length&&(n=Hi[0],n.blockedOn===null);)Lg(n),n.blockedOn===null&&Hi.shift()}var As=Ri.ReactCurrentBatchConfig,Ml=!0;function G_(t,e,n,i){var r=it,s=As.transition;As.transition=null;try{it=1,_d(t,e,n,i)}finally{it=r,As.transition=s}}function W_(t,e,n,i){var r=it,s=As.transition;As.transition=null;try{it=4,_d(t,e,n,i)}finally{it=r,As.transition=s}}function _d(t,e,n,i){if(Ml){var r=Xc(t,e,n,i);if(r===null)ku(t,e,i,El,n),Nh(t,i);else if(H_(r,t,e,n,i))i.stopPropagation();else if(Nh(t,i),e&4&&-1<B_.indexOf(t)){for(;r!==null;){var s=ea(r);if(s!==null&&Cg(s),s=Xc(t,e,n,i),s===null&&ku(t,e,i,El,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ku(t,e,i,null,n)}}var El=null;function Xc(t,e,n,i){if(El=null,t=pd(i),t=Er(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return El=t,null}function Dg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(L_()){case md:return 1;case Eg:return 4;case yl:case D_:return 16;case wg:return 536870912;default:return 16}default:return 16}}var Wi=null,xd=null,el=null;function Ig(){if(el)return el;var t,e=xd,n=e.length,i,r="value"in Wi?Wi.value:Wi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return el=r.slice(t,1<i?1-i:void 0)}function tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ga(){return!0}function Oh(){return!1}function En(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ga:Oh,this.isPropagationStopped=Oh,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yd=En(js),Jo=_t({},js,{view:0,detail:0}),X_=En(Jo),bu,Pu,eo,tu=_t({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(bu=t.screenX-eo.screenX,Pu=t.screenY-eo.screenY):Pu=bu=0,eo=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:Pu}}),kh=En(tu),j_=_t({},tu,{dataTransfer:0}),Y_=En(j_),$_=_t({},Jo,{relatedTarget:0}),Lu=En($_),q_=_t({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),K_=En(q_),Z_=_t({},js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Q_=En(Z_),J_=_t({},js,{data:0}),zh=En(J_),ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ix(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nx[t])?!!e[t]:!1}function Sd(){return ix}var rx=_t({},Jo,{key:function(t){if(t.key){var e=ex[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sd,charCode:function(t){return t.type==="keypress"?tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sx=En(rx),ox=_t({},tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bh=En(ox),ax=_t({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sd}),lx=En(ax),ux=_t({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),cx=En(ux),fx=_t({},tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dx=En(fx),hx=[9,13,27,32],Md=Mi&&"CompositionEvent"in window,So=null;Mi&&"documentMode"in document&&(So=document.documentMode);var px=Mi&&"TextEvent"in window&&!So,Ug=Mi&&(!Md||So&&8<So&&11>=So),Hh=" ",Vh=!1;function Ng(t,e){switch(t){case"keyup":return hx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function mx(t,e){switch(t){case"compositionend":return Fg(e);case"keypress":return e.which!==32?null:(Vh=!0,Hh);case"textInput":return t=e.data,t===Hh&&Vh?null:t;default:return null}}function gx(t,e){if(cs)return t==="compositionend"||!Md&&Ng(t,e)?(t=Ig(),el=xd=Wi=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ug&&e.locale!=="ko"?null:e.data;default:return null}}var vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vx[t.type]:e==="textarea"}function Og(t,e,n,i){pg(i),e=wl(e,"onChange"),0<e.length&&(n=new yd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Mo=null,No=null;function _x(t){$g(t,0)}function nu(t){var e=hs(t);if(ag(e))return t}function xx(t,e){if(t==="change")return e}var kg=!1;if(Mi){var Du;if(Mi){var Iu="oninput"in document;if(!Iu){var Wh=document.createElement("div");Wh.setAttribute("oninput","return;"),Iu=typeof Wh.oninput=="function"}Du=Iu}else Du=!1;kg=Du&&(!document.documentMode||9<document.documentMode)}function Xh(){Mo&&(Mo.detachEvent("onpropertychange",zg),No=Mo=null)}function zg(t){if(t.propertyName==="value"&&nu(No)){var e=[];Og(e,No,t,pd(t)),_g(_x,e)}}function yx(t,e,n){t==="focusin"?(Xh(),Mo=e,No=n,Mo.attachEvent("onpropertychange",zg)):t==="focusout"&&Xh()}function Sx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nu(No)}function Mx(t,e){if(t==="click")return nu(e)}function Ex(t,e){if(t==="input"||t==="change")return nu(e)}function wx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:wx;function Fo(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Cc.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function jh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yh(t,e){var n=jh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jh(n)}}function Bg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hg(){for(var t=window,e=vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vl(t.document)}return e}function Ed(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Tx(t){var e=Hg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Bg(n.ownerDocument.documentElement,n)){if(i!==null&&Ed(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Yh(n,s);var o=Yh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ax=Mi&&"documentMode"in document&&11>=document.documentMode,fs=null,jc=null,Eo=null,Yc=!1;function $h(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yc||fs==null||fs!==vl(i)||(i=fs,"selectionStart"in i&&Ed(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Eo&&Fo(Eo,i)||(Eo=i,i=wl(jc,"onSelect"),0<i.length&&(e=new yd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=fs)))}function va(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},Uu={},Vg={};Mi&&(Vg=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function iu(t){if(Uu[t])return Uu[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vg)return Uu[t]=e[n];return t}var Gg=iu("animationend"),Wg=iu("animationiteration"),Xg=iu("animationstart"),jg=iu("transitionend"),Yg=new Map,qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){Yg.set(t,e),kr(e,[t])}for(var Nu=0;Nu<qh.length;Nu++){var Fu=qh[Nu],Cx=Fu.toLowerCase(),Rx=Fu[0].toUpperCase()+Fu.slice(1);or(Cx,"on"+Rx)}or(Gg,"onAnimationEnd");or(Wg,"onAnimationIteration");or(Xg,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(jg,"onTransitionEnd");Is("onMouseEnter",["mouseout","mouseover"]);Is("onMouseLeave",["mouseout","mouseover"]);Is("onPointerEnter",["pointerout","pointerover"]);Is("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bx=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function Kh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,C_(i,e,void 0,t),t.currentTarget=null}function $g(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Kh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Kh(r,a,c),s=l}}}if(xl)throw t=Vc,xl=!1,Vc=null,t}function ot(t,e){var n=e[Qc];n===void 0&&(n=e[Qc]=new Set);var i=t+"__bubble";n.has(i)||(qg(e,t,2,!1),n.add(i))}function Ou(t,e,n){var i=0;e&&(i|=4),qg(n,t,i,e)}var _a="_reactListening"+Math.random().toString(36).slice(2);function Oo(t){if(!t[_a]){t[_a]=!0,ng.forEach(function(n){n!=="selectionchange"&&(bx.has(n)||Ou(n,!1,t),Ou(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_a]||(e[_a]=!0,Ou("selectionchange",!1,e))}}function qg(t,e,n,i){switch(Dg(e)){case 1:var r=G_;break;case 4:r=W_;break;default:r=_d}n=r.bind(null,e,n,t),r=void 0,!Hc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ku(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Er(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}_g(function(){var c=s,d=pd(n),p=[];e:{var h=Yg.get(t);if(h!==void 0){var g=yd,x=t;switch(t){case"keypress":if(tl(n)===0)break e;case"keydown":case"keyup":g=sx;break;case"focusin":x="focus",g=Lu;break;case"focusout":x="blur",g=Lu;break;case"beforeblur":case"afterblur":g=Lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=lx;break;case Gg:case Wg:case Xg:g=K_;break;case jg:g=cx;break;case"scroll":g=X_;break;case"wheel":g=dx;break;case"copy":case"cut":case"paste":g=Q_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Bh}var m=(e&4)!==0,u=!m&&t==="scroll",f=m?h!==null?h+"Capture":null:h;m=[];for(var _=c,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,f!==null&&(S=Lo(_,f),S!=null&&m.push(ko(_,S,v)))),u)break;_=_.return}0<m.length&&(h=new g(h,x,null,n,d),p.push({event:h,listeners:m}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==zc&&(x=n.relatedTarget||n.fromElement)&&(Er(x)||x[Ei]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=c,x=x?Er(x):null,x!==null&&(u=zr(x),x!==u||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=c),g!==x)){if(m=kh,S="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(m=Bh,S="onPointerLeave",f="onPointerEnter",_="pointer"),u=g==null?h:hs(g),v=x==null?h:hs(x),h=new m(S,_+"leave",g,n,d),h.target=u,h.relatedTarget=v,S=null,Er(d)===c&&(m=new m(f,_+"enter",x,n,d),m.target=v,m.relatedTarget=u,S=m),u=S,g&&x)t:{for(m=g,f=x,_=0,v=m;v;v=Vr(v))_++;for(v=0,S=f;S;S=Vr(S))v++;for(;0<_-v;)m=Vr(m),_--;for(;0<v-_;)f=Vr(f),v--;for(;_--;){if(m===f||f!==null&&m===f.alternate)break t;m=Vr(m),f=Vr(f)}m=null}else m=null;g!==null&&Zh(p,h,g,m,!1),x!==null&&u!==null&&Zh(p,u,x,m,!0)}}e:{if(h=c?hs(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var b=xx;else if(Gh(h))if(kg)b=Ex;else{b=Sx;var T=yx}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=Mx);if(b&&(b=b(t,c))){Og(p,b,n,d);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Uc(h,"number",h.value)}switch(T=c?hs(c):window,t){case"focusin":(Gh(T)||T.contentEditable==="true")&&(fs=T,jc=c,Eo=null);break;case"focusout":Eo=jc=fs=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,$h(p,n,d);break;case"selectionchange":if(Ax)break;case"keydown":case"keyup":$h(p,n,d)}var A;if(Md)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else cs?Ng(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Ug&&n.locale!=="ko"&&(cs||C!=="onCompositionStart"?C==="onCompositionEnd"&&cs&&(A=Ig()):(Wi=d,xd="value"in Wi?Wi.value:Wi.textContent,cs=!0)),T=wl(c,C),0<T.length&&(C=new zh(C,t,null,n,d),p.push({event:C,listeners:T}),A?C.data=A:(A=Fg(n),A!==null&&(C.data=A)))),(A=px?mx(t,n):gx(t,n))&&(c=wl(c,"onBeforeInput"),0<c.length&&(d=new zh("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=A))}$g(p,e)})}function ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Lo(t,n),s!=null&&i.unshift(ko(t,s,r)),s=Lo(t,e),s!=null&&i.push(ko(t,s,r))),t=t.return}return i}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Lo(n,s),l!=null&&o.unshift(ko(n,l,a))):r||(l=Lo(n,s),l!=null&&o.push(ko(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Px=/\r\n?/g,Lx=/\u0000|\uFFFD/g;function Qh(t){return(typeof t=="string"?t:""+t).replace(Px,`
`).replace(Lx,"")}function xa(t,e,n){if(e=Qh(e),Qh(t)!==e&&n)throw Error(se(425))}function Tl(){}var $c=null,qc=null;function Kc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zc=typeof setTimeout=="function"?setTimeout:void 0,Dx=typeof clearTimeout=="function"?clearTimeout:void 0,Jh=typeof Promise=="function"?Promise:void 0,Ix=typeof queueMicrotask=="function"?queueMicrotask:typeof Jh<"u"?function(t){return Jh.resolve(null).then(t).catch(Ux)}:Zc;function Ux(t){setTimeout(function(){throw t})}function zu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Uo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Uo(e)}function qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ep(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),ti="__reactFiber$"+Ys,zo="__reactProps$"+Ys,Ei="__reactContainer$"+Ys,Qc="__reactEvents$"+Ys,Nx="__reactListeners$"+Ys,Fx="__reactHandles$"+Ys;function Er(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ei]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ep(t);t!==null;){if(n=t[ti])return n;t=ep(t)}return e}t=n,n=t.parentNode}return null}function ea(t){return t=t[ti]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function ru(t){return t[zo]||null}var Jc=[],ps=-1;function ar(t){return{current:t}}function lt(t){0>ps||(t.current=Jc[ps],Jc[ps]=null,ps--)}function st(t,e){ps++,Jc[ps]=t.current,t.current=e}var rr={},$t=ar(rr),an=ar(!1),Pr=rr;function Us(t,e){var n=t.type.contextTypes;if(!n)return rr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ln(t){return t=t.childContextTypes,t!=null}function Al(){lt(an),lt($t)}function tp(t,e,n){if($t.current!==rr)throw Error(se(168));st($t,e),st(an,n)}function Kg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,y_(t)||"Unknown",r));return _t({},n,i)}function Cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Pr=$t.current,st($t,t),st(an,an.current),!0}function np(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Kg(t,e,Pr),i.__reactInternalMemoizedMergedChildContext=t,lt(an),lt($t),st($t,t)):lt(an),st(an,n)}var gi=null,su=!1,Bu=!1;function Zg(t){gi===null?gi=[t]:gi.push(t)}function Ox(t){su=!0,Zg(t)}function lr(){if(!Bu&&gi!==null){Bu=!0;var t=0,e=it;try{var n=gi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,su=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),Mg(md,lr),r}finally{it=e,Bu=!1}}return null}var ms=[],gs=0,Rl=null,bl=0,Cn=[],Rn=0,Lr=null,_i=1,xi="";function vr(t,e){ms[gs++]=bl,ms[gs++]=Rl,Rl=t,bl=e}function Qg(t,e,n){Cn[Rn++]=_i,Cn[Rn++]=xi,Cn[Rn++]=Lr,Lr=t;var i=_i;t=xi;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var s=32-Yn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,_i=1<<32-Yn(e)+r|n<<r|i,xi=s+t}else _i=1<<s|n<<r|i,xi=t}function wd(t){t.return!==null&&(vr(t,1),Qg(t,1,0))}function Td(t){for(;t===Rl;)Rl=ms[--gs],ms[gs]=null,bl=ms[--gs],ms[gs]=null;for(;t===Lr;)Lr=Cn[--Rn],Cn[Rn]=null,xi=Cn[--Rn],Cn[Rn]=null,_i=Cn[--Rn],Cn[Rn]=null}var xn=null,vn=null,ct=!1,Gn=null;function Jg(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ip(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,vn=qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:_i,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,vn=null,!0):!1;default:return!1}}function ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tf(t){if(ct){var e=vn;if(e){var n=e;if(!ip(t,e)){if(ef(t))throw Error(se(418));e=qi(n.nextSibling);var i=xn;e&&ip(t,e)?Jg(i,n):(t.flags=t.flags&-4097|2,ct=!1,xn=t)}}else{if(ef(t))throw Error(se(418));t.flags=t.flags&-4097|2,ct=!1,xn=t}}}function rp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function ya(t){if(t!==xn)return!1;if(!ct)return rp(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kc(t.type,t.memoizedProps)),e&&(e=vn)){if(ef(t))throw e0(),Error(se(418));for(;e;)Jg(t,e),e=qi(e.nextSibling)}if(rp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vn=qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vn=null}}else vn=xn?qi(t.stateNode.nextSibling):null;return!0}function e0(){for(var t=vn;t;)t=qi(t.nextSibling)}function Ns(){vn=xn=null,ct=!1}function Ad(t){Gn===null?Gn=[t]:Gn.push(t)}var kx=Ri.ReactCurrentBatchConfig;function to(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Sa(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sp(t){var e=t._init;return e(t._payload)}function t0(t){function e(f,_){if(t){var v=f.deletions;v===null?(f.deletions=[_],f.flags|=16):v.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=Ji(f,_),f.index=0,f.sibling=null,f}function s(f,_,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<_?(f.flags|=2,_):v):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,v,S){return _===null||_.tag!==6?(_=Yu(v,f.mode,S),_.return=f,_):(_=r(_,v),_.return=f,_)}function l(f,_,v,S){var b=v.type;return b===us?d(f,_,v.props.children,S,v.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===zi&&sp(b)===_.type)?(S=r(_,v.props),S.ref=to(f,_,v),S.return=f,S):(S=ll(v.type,v.key,v.props,null,f.mode,S),S.ref=to(f,_,v),S.return=f,S)}function c(f,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=$u(v,f.mode,S),_.return=f,_):(_=r(_,v.children||[]),_.return=f,_)}function d(f,_,v,S,b){return _===null||_.tag!==7?(_=br(v,f.mode,S,b),_.return=f,_):(_=r(_,v),_.return=f,_)}function p(f,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Yu(""+_,f.mode,v),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ca:return v=ll(_.type,_.key,_.props,null,f.mode,v),v.ref=to(f,null,_),v.return=f,v;case ls:return _=$u(_,f.mode,v),_.return=f,_;case zi:var S=_._init;return p(f,S(_._payload),v)}if(po(_)||Ks(_))return _=br(_,f.mode,v,null),_.return=f,_;Sa(f,_)}return null}function h(f,_,v,S){var b=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(f,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ca:return v.key===b?l(f,_,v,S):null;case ls:return v.key===b?c(f,_,v,S):null;case zi:return b=v._init,h(f,_,b(v._payload),S)}if(po(v)||Ks(v))return b!==null?null:d(f,_,v,S,null);Sa(f,v)}return null}function g(f,_,v,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(v)||null,a(_,f,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ca:return f=f.get(S.key===null?v:S.key)||null,l(_,f,S,b);case ls:return f=f.get(S.key===null?v:S.key)||null,c(_,f,S,b);case zi:var T=S._init;return g(f,_,v,T(S._payload),b)}if(po(S)||Ks(S))return f=f.get(v)||null,d(_,f,S,b,null);Sa(_,S)}return null}function x(f,_,v,S){for(var b=null,T=null,A=_,C=_=0,E=null;A!==null&&C<v.length;C++){A.index>C?(E=A,A=null):E=A.sibling;var y=h(f,A,v[C],S);if(y===null){A===null&&(A=E);break}t&&A&&y.alternate===null&&e(f,A),_=s(y,_,C),T===null?b=y:T.sibling=y,T=y,A=E}if(C===v.length)return n(f,A),ct&&vr(f,C),b;if(A===null){for(;C<v.length;C++)A=p(f,v[C],S),A!==null&&(_=s(A,_,C),T===null?b=A:T.sibling=A,T=A);return ct&&vr(f,C),b}for(A=i(f,A);C<v.length;C++)E=g(A,f,C,v[C],S),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?C:E.key),_=s(E,_,C),T===null?b=E:T.sibling=E,T=E);return t&&A.forEach(function(P){return e(f,P)}),ct&&vr(f,C),b}function m(f,_,v,S){var b=Ks(v);if(typeof b!="function")throw Error(se(150));if(v=b.call(v),v==null)throw Error(se(151));for(var T=b=null,A=_,C=_=0,E=null,y=v.next();A!==null&&!y.done;C++,y=v.next()){A.index>C?(E=A,A=null):E=A.sibling;var P=h(f,A,y.value,S);if(P===null){A===null&&(A=E);break}t&&A&&P.alternate===null&&e(f,A),_=s(P,_,C),T===null?b=P:T.sibling=P,T=P,A=E}if(y.done)return n(f,A),ct&&vr(f,C),b;if(A===null){for(;!y.done;C++,y=v.next())y=p(f,y.value,S),y!==null&&(_=s(y,_,C),T===null?b=y:T.sibling=y,T=y);return ct&&vr(f,C),b}for(A=i(f,A);!y.done;C++,y=v.next())y=g(A,f,C,y.value,S),y!==null&&(t&&y.alternate!==null&&A.delete(y.key===null?C:y.key),_=s(y,_,C),T===null?b=y:T.sibling=y,T=y);return t&&A.forEach(function(O){return e(f,O)}),ct&&vr(f,C),b}function u(f,_,v,S){if(typeof v=="object"&&v!==null&&v.type===us&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ca:e:{for(var b=v.key,T=_;T!==null;){if(T.key===b){if(b=v.type,b===us){if(T.tag===7){n(f,T.sibling),_=r(T,v.props.children),_.return=f,f=_;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===zi&&sp(b)===T.type){n(f,T.sibling),_=r(T,v.props),_.ref=to(f,T,v),_.return=f,f=_;break e}n(f,T);break}else e(f,T);T=T.sibling}v.type===us?(_=br(v.props.children,f.mode,S,v.key),_.return=f,f=_):(S=ll(v.type,v.key,v.props,null,f.mode,S),S.ref=to(f,_,v),S.return=f,f=S)}return o(f);case ls:e:{for(T=v.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(f,_.sibling),_=r(_,v.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=$u(v,f.mode,S),_.return=f,f=_}return o(f);case zi:return T=v._init,u(f,_,T(v._payload),S)}if(po(v))return x(f,_,v,S);if(Ks(v))return m(f,_,v,S);Sa(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,v),_.return=f,f=_):(n(f,_),_=Yu(v,f.mode,S),_.return=f,f=_),o(f)):n(f,_)}return u}var Fs=t0(!0),n0=t0(!1),Pl=ar(null),Ll=null,vs=null,Cd=null;function Rd(){Cd=vs=Ll=null}function bd(t){var e=Pl.current;lt(Pl),t._currentValue=e}function nf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Cs(t,e){Ll=t,Cd=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(Cd!==t)if(t={context:t,memoizedValue:e,next:null},vs===null){if(Ll===null)throw Error(se(308));vs=t,Ll.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return e}var wr=null;function Pd(t){wr===null?wr=[t]:wr.push(t)}function i0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Pd(e)):(n.next=r.next,r.next=n),e.interleaved=n,wi(t,i)}function wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bi=!1;function Ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function r0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,wi(t,n)}return r=i.interleaved,r===null?(e.next=e,Pd(i)):(e.next=r.next,r.next=e),i.interleaved=e,wi(t,n)}function nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gd(t,n)}}function op(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Dl(t,e,n,i){var r=t.updateQueue;Bi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,m=a;switch(h=e,g=n,m.tag){case 1:if(x=m.payload,typeof x=="function"){p=x.call(g,p,h);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=m.payload,h=typeof x=="function"?x.call(g,p,h):x,h==null)break e;p=_t({},p,h);break e;case 2:Bi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=p):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ir|=o,t.lanes=o,t.memoizedState=p}}function ap(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var ta={},si=ar(ta),Bo=ar(ta),Ho=ar(ta);function Tr(t){if(t===ta)throw Error(se(174));return t}function Dd(t,e){switch(st(Ho,e),st(Bo,t),st(si,ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fc(e,t)}lt(si),st(si,e)}function Os(){lt(si),lt(Bo),lt(Ho)}function s0(t){Tr(Ho.current);var e=Tr(si.current),n=Fc(e,t.type);e!==n&&(st(Bo,t),st(si,n))}function Id(t){Bo.current===t&&(lt(si),lt(Bo))}var mt=ar(0);function Il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hu=[];function Ud(){for(var t=0;t<Hu.length;t++)Hu[t]._workInProgressVersionPrimary=null;Hu.length=0}var il=Ri.ReactCurrentDispatcher,Vu=Ri.ReactCurrentBatchConfig,Dr=0,gt=null,Rt=null,Nt=null,Ul=!1,wo=!1,Vo=0,zx=0;function Vt(){throw Error(se(321))}function Nd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function Fd(t,e,n,i,r,s){if(Dr=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,il.current=t===null||t.memoizedState===null?Gx:Wx,t=n(i,r),wo){s=0;do{if(wo=!1,Vo=0,25<=s)throw Error(se(301));s+=1,Nt=Rt=null,e.updateQueue=null,il.current=Xx,t=n(i,r)}while(wo)}if(il.current=Nl,e=Rt!==null&&Rt.next!==null,Dr=0,Nt=Rt=gt=null,Ul=!1,e)throw Error(se(300));return t}function Od(){var t=Vo!==0;return Vo=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?gt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function In(){if(Rt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Nt===null?gt.memoizedState:Nt.next;if(e!==null)Nt=e,Rt=t;else{if(t===null)throw Error(se(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Nt===null?gt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Go(t,e){return typeof e=="function"?e(t):e}function Gu(t){var e=In(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Rt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Dr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,gt.lanes|=d,Ir|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Kn(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,Ir|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wu(t){var e=In(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Kn(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function o0(){}function a0(t,e){var n=gt,i=In(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,kd(c0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Wo(9,u0.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(se(349));Dr&30||l0(n,e,r)}return r}function l0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function u0(t,e,n,i){e.value=n,e.getSnapshot=i,f0(e)&&d0(t)}function c0(t,e,n){return n(function(){f0(e)&&d0(t)})}function f0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function d0(t){var e=wi(t,1);e!==null&&$n(e,t,1,-1)}function lp(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:t},e.queue=t,t=t.dispatch=Vx.bind(null,gt,t),[e.memoizedState,t]}function Wo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function h0(){return In().memoizedState}function rl(t,e,n,i){var r=Jn();gt.flags|=t,r.memoizedState=Wo(1|e,n,void 0,i===void 0?null:i)}function ou(t,e,n,i){var r=In();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,i!==null&&Nd(i,o.deps)){r.memoizedState=Wo(e,n,s,i);return}}gt.flags|=t,r.memoizedState=Wo(1|e,n,s,i)}function up(t,e){return rl(8390656,8,t,e)}function kd(t,e){return ou(2048,8,t,e)}function p0(t,e){return ou(4,2,t,e)}function m0(t,e){return ou(4,4,t,e)}function g0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function v0(t,e,n){return n=n!=null?n.concat([t]):null,ou(4,4,g0.bind(null,e,t),n)}function zd(){}function _0(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function x0(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function y0(t,e,n){return Dr&21?(Kn(n,e)||(n=Tg(),gt.lanes|=n,Ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function Bx(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Vu.transition;Vu.transition={};try{t(!1),e()}finally{it=n,Vu.transition=i}}function S0(){return In().memoizedState}function Hx(t,e,n){var i=Qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},M0(t))E0(e,n);else if(n=i0(t,e,n,i),n!==null){var r=Zt();$n(n,t,i,r),w0(n,e,i)}}function Vx(t,e,n){var i=Qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(M0(t))E0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Kn(a,o)){var l=e.interleaved;l===null?(r.next=r,Pd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=i0(t,e,r,i),n!==null&&(r=Zt(),$n(n,t,i,r),w0(n,e,i))}}function M0(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function E0(t,e){wo=Ul=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function w0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gd(t,n)}}var Nl={readContext:Dn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},Gx={readContext:Dn,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:up,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rl(4194308,4,g0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return rl(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Hx.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:lp,useDebugValue:zd,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=lp(!1),e=t[0];return t=Bx.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=Jn();if(ct){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Ft===null)throw Error(se(349));Dr&30||l0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,up(c0.bind(null,i,s,t),[t]),i.flags|=2048,Wo(9,u0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Jn(),e=Ft.identifierPrefix;if(ct){var n=xi,i=_i;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Wx={readContext:Dn,useCallback:_0,useContext:Dn,useEffect:kd,useImperativeHandle:v0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:x0,useReducer:Gu,useRef:h0,useState:function(){return Gu(Go)},useDebugValue:zd,useDeferredValue:function(t){var e=In();return y0(e,Rt.memoizedState,t)},useTransition:function(){var t=Gu(Go)[0],e=In().memoizedState;return[t,e]},useMutableSource:o0,useSyncExternalStore:a0,useId:S0,unstable_isNewReconciler:!1},Xx={readContext:Dn,useCallback:_0,useContext:Dn,useEffect:kd,useImperativeHandle:v0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:x0,useReducer:Wu,useRef:h0,useState:function(){return Wu(Go)},useDebugValue:zd,useDeferredValue:function(t){var e=In();return Rt===null?e.memoizedState=t:y0(e,Rt.memoizedState,t)},useTransition:function(){var t=Wu(Go)[0],e=In().memoizedState;return[t,e]},useMutableSource:o0,useSyncExternalStore:a0,useId:S0,unstable_isNewReconciler:!1};function Bn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var au={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Qi(t),s=Si(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,r),e!==null&&($n(e,t,r,i),nl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Qi(t),s=Si(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,r),e!==null&&($n(e,t,r,i),nl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=Qi(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ki(t,r,i),e!==null&&($n(e,t,i,n),nl(e,t,i))}};function cp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fo(n,i)||!Fo(r,s):!0}function T0(t,e,n){var i=!1,r=rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(r=ln(e)?Pr:$t.current,i=e.contextTypes,s=(i=i!=null)?Us(t,r):rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=au,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function fp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&au.enqueueReplaceState(e,e.state,null)}function sf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ld(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Dn(s):(s=ln(e)?Pr:$t.current,r.context=Us(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&au.enqueueReplaceState(r,r.state,null),Dl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ks(t,e){try{var n="",i=e;do n+=x_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Xu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function of(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jx=typeof WeakMap=="function"?WeakMap:Map;function A0(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ol||(Ol=!0,gf=i),of(t,e)},n}function C0(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){of(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){of(t,e),typeof i!="function"&&(Zi===null?Zi=new Set([this]):Zi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new jx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=oy.bind(null,t,e,n),e.then(t,t))}function hp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,Ki(n,e,1))),n.lanes|=1),t)}var Yx=Ri.ReactCurrentOwner,sn=!1;function Kt(t,e,n,i){e.child=t===null?n0(e,null,n,i):Fs(e,t.child,n,i)}function mp(t,e,n,i,r){n=n.render;var s=e.ref;return Cs(e,r),i=Fd(t,e,n,i,s,r),n=Od(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ti(t,e,r)):(ct&&n&&wd(e),e.flags|=1,Kt(t,e,i,r),e.child)}function gp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Yd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,R0(t,e,s,i,r)):(t=ll(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fo,n(o,i)&&t.ref===e.ref)return Ti(t,e,r)}return e.flags|=1,t=Ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function R0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Fo(s,i)&&t.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,Ti(t,e,r)}return af(t,e,n,i,r)}function b0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(xs,gn),gn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(xs,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(xs,gn),gn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(xs,gn),gn|=i;return Kt(t,e,r,n),e.child}function P0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function af(t,e,n,i,r){var s=ln(n)?Pr:$t.current;return s=Us(e,s),Cs(e,r),n=Fd(t,e,n,i,s,r),i=Od(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ti(t,e,r)):(ct&&i&&wd(e),e.flags|=1,Kt(t,e,n,r),e.child)}function vp(t,e,n,i,r){if(ln(n)){var s=!0;Cl(e)}else s=!1;if(Cs(e,r),e.stateNode===null)sl(t,e),T0(e,n,i),sf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dn(c):(c=ln(n)?Pr:$t.current,c=Us(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&fp(e,o,i,c),Bi=!1;var h=e.memoizedState;o.state=h,Dl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||an.current||Bi?(typeof d=="function"&&(rf(e,n,d,i),l=e.memoizedState),(a=Bi||cp(e,n,a,i,h,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,r0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Bn(e.type,a),o.props=c,p=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=ln(n)?Pr:$t.current,l=Us(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||h!==l)&&fp(e,o,i,l),Bi=!1,h=e.memoizedState,o.state=h,Dl(e,i,o,r);var x=e.memoizedState;a!==p||h!==x||an.current||Bi?(typeof g=="function"&&(rf(e,n,g,i),x=e.memoizedState),(c=Bi||cp(e,n,c,i,h,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return lf(t,e,n,i,s,r)}function lf(t,e,n,i,r,s){P0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&np(e,n,!1),Ti(t,e,s);i=e.stateNode,Yx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Fs(e,t.child,null,s),e.child=Fs(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=i.state,r&&np(e,n,!0),e.child}function L0(t){var e=t.stateNode;e.pendingContext?tp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tp(t,e.context,!1),Dd(t,e.containerInfo)}function _p(t,e,n,i,r){return Ns(),Ad(r),e.flags|=256,Kt(t,e,n,i),e.child}var uf={dehydrated:null,treeContext:null,retryLane:0};function cf(t){return{baseLanes:t,cachePool:null,transitions:null}}function D0(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(mt,r&1),t===null)return tf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=cu(o,i,0,null),t=br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=cf(n),e.memoizedState=uf,t):Bd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return $x(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ji(a,s):(s=br(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?cf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=uf,i}return s=t.child,t=s.sibling,i=Ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Bd(t,e){return e=cu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ma(t,e,n,i){return i!==null&&Ad(i),Fs(e,t.child,null,n),t=Bd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $x(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Xu(Error(se(422))),Ma(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=cu({mode:"visible",children:i.children},r,0,null),s=br(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Fs(e,t.child,null,o),e.child.memoizedState=cf(o),e.memoizedState=uf,s);if(!(e.mode&1))return Ma(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Xu(s,i,void 0),Ma(t,e,o,i)}if(a=(o&t.childLanes)!==0,sn||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,wi(t,r),$n(i,t,r,-1))}return jd(),i=Xu(Error(se(421))),Ma(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ay.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,vn=qi(r.nextSibling),xn=e,ct=!0,Gn=null,t!==null&&(Cn[Rn++]=_i,Cn[Rn++]=xi,Cn[Rn++]=Lr,_i=t.id,xi=t.overflow,Lr=e),e=Bd(e,i.children),e.flags|=4096,e)}function xp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),nf(t.return,e,n)}function ju(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function I0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xp(t,n,e);else if(t.tag===19)xp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Il(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ju(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Il(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ju(e,!0,n,null,s);break;case"together":ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ti(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qx(t,e,n){switch(e.tag){case 3:L0(e),Ns();break;case 5:s0(e);break;case 1:ln(e.type)&&Cl(e);break;case 4:Dd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?D0(t,e,n):(st(mt,mt.current&1),t=Ti(t,e,n),t!==null?t.sibling:null);st(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return I0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,b0(t,e,n)}return Ti(t,e,n)}var U0,ff,N0,F0;U0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ff=function(){};N0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Tr(si.current);var s=null;switch(n){case"input":r=Dc(t,r),i=Dc(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=Nc(t,r),i=Nc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Tl)}Oc(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};F0=function(t,e,n,i){n!==i&&(e.flags|=4)};function no(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Kx(t,e,n){var i=e.pendingProps;switch(Td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return ln(e.type)&&Al(),Gt(e),null;case 3:return i=e.stateNode,Os(),lt(an),lt($t),Ud(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(xf(Gn),Gn=null))),ff(t,e),Gt(e),null;case 5:Id(e);var r=Tr(Ho.current);if(n=e.type,t!==null&&e.stateNode!=null)N0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Gt(e),null}if(t=Tr(si.current),ya(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ti]=e,i[zo]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<go.length;r++)ot(go[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":Rh(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":Ph(i,s),ot("invalid",i)}Oc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&xa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xa(i.textContent,a,t),r=["children",""+a]):bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",i)}switch(n){case"input":fa(i),bh(i,s,!0);break;case"textarea":fa(i),Lh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Tl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ti]=e,t[zo]=i,U0(t,e,!1,!1),e.stateNode=t;e:{switch(o=kc(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<go.length;r++)ot(go[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":Rh(t,i),r=Dc(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ot("invalid",t);break;case"textarea":Ph(t,i),r=Nc(t,i),ot("invalid",t);break;default:r=i}Oc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?hg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Po(t,l):typeof l=="number"&&Po(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&cd(t,s,l,o))}switch(n){case"input":fa(t),bh(t,i,!1);break;case"textarea":fa(t),Lh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Es(t,!!i.multiple,s,!1):i.defaultValue!=null&&Es(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Tl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)F0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Tr(Ho.current),Tr(si.current),ya(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(s=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:xa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return Gt(e),null;case 13:if(lt(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&vn!==null&&e.mode&1&&!(e.flags&128))e0(),Ns(),e.flags|=98560,s=!1;else if(s=ya(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[ti]=e}else Ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else Gn!==null&&(xf(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Pt===0&&(Pt=3):jd())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return Os(),ff(t,e),t===null&&Oo(e.stateNode.containerInfo),Gt(e),null;case 10:return bd(e.type._context),Gt(e),null;case 17:return ln(e.type)&&Al(),Gt(e),null;case 19:if(lt(mt),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)no(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Il(t),o!==null){for(e.flags|=128,no(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>zs&&(e.flags|=128,i=!0,no(s,!1),e.lanes=4194304)}else{if(!i)if(t=Il(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),no(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ct)return Gt(e),null}else 2*Et()-s.renderingStartTime>zs&&n!==1073741824&&(e.flags|=128,i=!0,no(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=mt.current,st(mt,i?n&1|2:n&1),e):(Gt(e),null);case 22:case 23:return Xd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function Zx(t,e){switch(Td(e),e.tag){case 1:return ln(e.type)&&Al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Os(),lt(an),lt($t),Ud(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Id(e),null;case 13:if(lt(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(mt),null;case 4:return Os(),null;case 10:return bd(e.type._context),null;case 22:case 23:return Xd(),null;case 24:return null;default:return null}}var Ea=!1,jt=!1,Qx=typeof WeakSet=="function"?WeakSet:Set,_e=null;function _s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function df(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var yp=!1;function Jx(t,e){if($c=Ml,t=Hg(),Ed(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,p=t,h=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qc={focusedElem:t,selectionRange:n},Ml=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var m=x.memoizedProps,u=x.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?m:Bn(e.type,m),u);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){Mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return x=yp,yp=!1,x}function To(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&df(e,n,s)}r=r.next}while(r!==i)}}function lu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function hf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function O0(t){var e=t.alternate;e!==null&&(t.alternate=null,O0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[zo],delete e[Qc],delete e[Nx],delete e[Fx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function k0(t){return t.tag===5||t.tag===3||t.tag===4}function Sp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||k0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tl));else if(i!==4&&(t=t.child,t!==null))for(pf(t,e,n),t=t.sibling;t!==null;)pf(t,e,n),t=t.sibling}function mf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(mf(t,e,n),t=t.sibling;t!==null;)mf(t,e,n),t=t.sibling}var zt=null,Hn=!1;function Li(t,e,n){for(n=n.child;n!==null;)z0(t,e,n),n=n.sibling}function z0(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(eu,n)}catch{}switch(n.tag){case 5:jt||_s(n,e);case 6:var i=zt,r=Hn;zt=null,Li(t,e,n),zt=i,Hn=r,zt!==null&&(Hn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Hn?(t=zt,n=n.stateNode,t.nodeType===8?zu(t.parentNode,n):t.nodeType===1&&zu(t,n),Uo(t)):zu(zt,n.stateNode));break;case 4:i=zt,r=Hn,zt=n.stateNode.containerInfo,Hn=!0,Li(t,e,n),zt=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&df(n,e,o),r=r.next}while(r!==i)}Li(t,e,n);break;case 1:if(!jt&&(_s(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Mt(n,e,a)}Li(t,e,n);break;case 21:Li(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Li(t,e,n),jt=i):Li(t,e,n);break;default:Li(t,e,n)}}function Mp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Qx),e.forEach(function(i){var r=ly.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,Hn=!1;break e;case 3:zt=a.stateNode.containerInfo,Hn=!0;break e;case 4:zt=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(zt===null)throw Error(se(160));z0(s,o,r),zt=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)B0(e,t),e=e.sibling}function B0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Qn(t),i&4){try{To(3,t,t.return),lu(3,t)}catch(m){Mt(t,t.return,m)}try{To(5,t,t.return)}catch(m){Mt(t,t.return,m)}}break;case 1:Fn(e,t),Qn(t),i&512&&n!==null&&_s(n,n.return);break;case 5:if(Fn(e,t),Qn(t),i&512&&n!==null&&_s(n,n.return),t.flags&32){var r=t.stateNode;try{Po(r,"")}catch(m){Mt(t,t.return,m)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&lg(r,s),kc(a,o);var c=kc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],p=l[o+1];d==="style"?hg(r,p):d==="dangerouslySetInnerHTML"?fg(r,p):d==="children"?Po(r,p):cd(r,d,p,c)}switch(a){case"input":Ic(r,s);break;case"textarea":ug(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Es(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Es(r,!!s.multiple,s.defaultValue,!0):Es(r,!!s.multiple,s.multiple?[]:"",!1))}r[zo]=s}catch(m){Mt(t,t.return,m)}}break;case 6:if(Fn(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(m){Mt(t,t.return,m)}}break;case 3:if(Fn(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(m){Mt(t,t.return,m)}break;case 4:Fn(e,t),Qn(t);break;case 13:Fn(e,t),Qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Gd=Et())),i&4&&Mp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(c=jt)||d,Fn(e,t),jt=c):Fn(e,t),Qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(_e=t,d=t.child;d!==null;){for(p=_e=d;_e!==null;){switch(h=_e,g=h.child,h.tag){case 0:case 11:case 14:case 15:To(4,h,h.return);break;case 1:_s(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(m){Mt(i,n,m)}}break;case 5:_s(h,h.return);break;case 22:if(h.memoizedState!==null){wp(p);continue}}g!==null?(g.return=h,_e=g):wp(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=dg("display",o))}catch(m){Mt(t,t.return,m)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(m){Mt(t,t.return,m)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Fn(e,t),Qn(t),i&4&&Mp(t);break;case 21:break;default:Fn(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(k0(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Po(r,""),i.flags&=-33);var s=Sp(t);mf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Sp(t);pf(t,a,o);break;default:throw Error(se(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ey(t,e,n){_e=t,H0(t)}function H0(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ea;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jt;a=Ea;var c=jt;if(Ea=o,(jt=l)&&!c)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?Tp(r):l!==null?(l.return=o,_e=l):Tp(r);for(;s!==null;)_e=s,H0(s),s=s.sibling;_e=r,Ea=a,jt=c}Ep(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):Ep(t)}}function Ep(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||lu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ap(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ap(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Uo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}jt||e.flags&512&&hf(e)}catch(h){Mt(e,e.return,h)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function wp(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Tp(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lu(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{hf(e)}catch(l){Mt(e,s,l)}break;case 5:var o=e.return;try{hf(e)}catch(l){Mt(e,o,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var ty=Math.ceil,Fl=Ri.ReactCurrentDispatcher,Hd=Ri.ReactCurrentOwner,Ln=Ri.ReactCurrentBatchConfig,Ke=0,Ft=null,Ct=null,Bt=0,gn=0,xs=ar(0),Pt=0,Xo=null,Ir=0,uu=0,Vd=0,Ao=null,nn=null,Gd=0,zs=1/0,mi=null,Ol=!1,gf=null,Zi=null,wa=!1,Xi=null,kl=0,Co=0,vf=null,ol=-1,al=0;function Zt(){return Ke&6?Et():ol!==-1?ol:ol=Et()}function Qi(t){return t.mode&1?Ke&2&&Bt!==0?Bt&-Bt:kx.transition!==null?(al===0&&(al=Tg()),al):(t=it,t!==0||(t=window.event,t=t===void 0?16:Dg(t.type)),t):1}function $n(t,e,n,i){if(50<Co)throw Co=0,vf=null,Error(se(185));Qo(t,n,i),(!(Ke&2)||t!==Ft)&&(t===Ft&&(!(Ke&2)&&(uu|=n),Pt===4&&Vi(t,Bt)),un(t,i),n===1&&Ke===0&&!(e.mode&1)&&(zs=Et()+500,su&&lr()))}function un(t,e){var n=t.callbackNode;k_(t,e);var i=Sl(t,t===Ft?Bt:0);if(i===0)n!==null&&Uh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Uh(n),e===1)t.tag===0?Ox(Ap.bind(null,t)):Zg(Ap.bind(null,t)),Ix(function(){!(Ke&6)&&lr()}),n=null;else{switch(Ag(i)){case 1:n=md;break;case 4:n=Eg;break;case 16:n=yl;break;case 536870912:n=wg;break;default:n=yl}n=q0(n,V0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function V0(t,e){if(ol=-1,al=0,Ke&6)throw Error(se(327));var n=t.callbackNode;if(Rs()&&t.callbackNode!==n)return null;var i=Sl(t,t===Ft?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=zl(t,i);else{e=i;var r=Ke;Ke|=2;var s=W0();(Ft!==t||Bt!==e)&&(mi=null,zs=Et()+500,Rr(t,e));do try{ry();break}catch(a){G0(t,a)}while(!0);Rd(),Fl.current=s,Ke=r,Ct!==null?e=0:(Ft=null,Bt=0,e=Pt)}if(e!==0){if(e===2&&(r=Gc(t),r!==0&&(i=r,e=_f(t,r))),e===1)throw n=Xo,Rr(t,0),Vi(t,i),un(t,Et()),n;if(e===6)Vi(t,i);else{if(r=t.current.alternate,!(i&30)&&!ny(r)&&(e=zl(t,i),e===2&&(s=Gc(t),s!==0&&(i=s,e=_f(t,s))),e===1))throw n=Xo,Rr(t,0),Vi(t,i),un(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:_r(t,nn,mi);break;case 3:if(Vi(t,i),(i&130023424)===i&&(e=Gd+500-Et(),10<e)){if(Sl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Zc(_r.bind(null,t,nn,mi),e);break}_r(t,nn,mi);break;case 4:if(Vi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Yn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ty(i/1960))-i,10<i){t.timeoutHandle=Zc(_r.bind(null,t,nn,mi),i);break}_r(t,nn,mi);break;case 5:_r(t,nn,mi);break;default:throw Error(se(329))}}}return un(t,Et()),t.callbackNode===n?V0.bind(null,t):null}function _f(t,e){var n=Ao;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=zl(t,e),t!==2&&(e=nn,nn=n,e!==null&&xf(e)),t}function xf(t){nn===null?nn=t:nn.push.apply(nn,t)}function ny(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vi(t,e){for(e&=~Vd,e&=~uu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function Ap(t){if(Ke&6)throw Error(se(327));Rs();var e=Sl(t,0);if(!(e&1))return un(t,Et()),null;var n=zl(t,e);if(t.tag!==0&&n===2){var i=Gc(t);i!==0&&(e=i,n=_f(t,i))}if(n===1)throw n=Xo,Rr(t,0),Vi(t,e),un(t,Et()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,nn,mi),un(t,Et()),null}function Wd(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(zs=Et()+500,su&&lr())}}function Ur(t){Xi!==null&&Xi.tag===0&&!(Ke&6)&&Rs();var e=Ke;Ke|=1;var n=Ln.transition,i=it;try{if(Ln.transition=null,it=1,t)return t()}finally{it=i,Ln.transition=n,Ke=e,!(Ke&6)&&lr()}}function Xd(){gn=xs.current,lt(xs)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Dx(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(Td(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Al();break;case 3:Os(),lt(an),lt($t),Ud();break;case 5:Id(i);break;case 4:Os();break;case 13:lt(mt);break;case 19:lt(mt);break;case 10:bd(i.type._context);break;case 22:case 23:Xd()}n=n.return}if(Ft=t,Ct=t=Ji(t.current,null),Bt=gn=e,Pt=0,Xo=null,Vd=uu=Ir=0,nn=Ao=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}wr=null}return t}function G0(t,e){do{var n=Ct;try{if(Rd(),il.current=Nl,Ul){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ul=!1}if(Dr=0,Nt=Rt=gt=null,wo=!1,Vo=0,Hd.current=null,n===null||n.return===null){Pt=1,Xo=e,Ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=hp(o);if(g!==null){g.flags&=-257,pp(g,o,a,s,e),g.mode&1&&dp(s,c,e),e=g,l=c;var x=e.updateQueue;if(x===null){var m=new Set;m.add(l),e.updateQueue=m}else x.add(l);break e}else{if(!(e&1)){dp(s,c,e),jd();break e}l=Error(se(426))}}else if(ct&&a.mode&1){var u=hp(o);if(u!==null){!(u.flags&65536)&&(u.flags|=256),pp(u,o,a,s,e),Ad(ks(l,a));break e}}s=l=ks(l,a),Pt!==4&&(Pt=2),Ao===null?Ao=[s]:Ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=A0(s,l,e);op(s,f);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Zi===null||!Zi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=C0(s,a,e);op(s,S);break e}}s=s.return}while(s!==null)}j0(n)}catch(b){e=b,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function W0(){var t=Fl.current;return Fl.current=Nl,t===null?Nl:t}function jd(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ft===null||!(Ir&268435455)&&!(uu&268435455)||Vi(Ft,Bt)}function zl(t,e){var n=Ke;Ke|=2;var i=W0();(Ft!==t||Bt!==e)&&(mi=null,Rr(t,e));do try{iy();break}catch(r){G0(t,r)}while(!0);if(Rd(),Ke=n,Fl.current=i,Ct!==null)throw Error(se(261));return Ft=null,Bt=0,Pt}function iy(){for(;Ct!==null;)X0(Ct)}function ry(){for(;Ct!==null&&!b_();)X0(Ct)}function X0(t){var e=$0(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?j0(t):Ct=e,Hd.current=null}function j0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Zx(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Ct=null;return}}else if(n=Kx(n,e,gn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Pt===0&&(Pt=5)}function _r(t,e,n){var i=it,r=Ln.transition;try{Ln.transition=null,it=1,sy(t,e,n,i)}finally{Ln.transition=r,it=i}return null}function sy(t,e,n,i){do Rs();while(Xi!==null);if(Ke&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(z_(t,s),t===Ft&&(Ct=Ft=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wa||(wa=!0,q0(yl,function(){return Rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var o=it;it=1;var a=Ke;Ke|=4,Hd.current=null,Jx(t,n),B0(n,t),Tx(qc),Ml=!!$c,qc=$c=null,t.current=n,ey(n),P_(),Ke=a,it=o,Ln.transition=s}else t.current=n;if(wa&&(wa=!1,Xi=t,kl=r),s=t.pendingLanes,s===0&&(Zi=null),I_(n.stateNode),un(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ol)throw Ol=!1,t=gf,gf=null,t;return kl&1&&t.tag!==0&&Rs(),s=t.pendingLanes,s&1?t===vf?Co++:(Co=0,vf=t):Co=0,lr(),null}function Rs(){if(Xi!==null){var t=Ag(kl),e=Ln.transition,n=it;try{if(Ln.transition=null,it=16>t?16:t,Xi===null)var i=!1;else{if(t=Xi,Xi=null,kl=0,Ke&6)throw Error(se(331));var r=Ke;for(Ke|=4,_e=t.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(_e=c;_e!==null;){var d=_e;switch(d.tag){case 0:case 11:case 15:To(8,d,s)}var p=d.child;if(p!==null)p.return=d,_e=p;else for(;_e!==null;){d=_e;var h=d.sibling,g=d.return;if(O0(d),d===c){_e=null;break}if(h!==null){h.return=g,_e=h;break}_e=g}}}var x=s.alternate;if(x!==null){var m=x.child;if(m!==null){x.child=null;do{var u=m.sibling;m.sibling=null,m=u}while(m!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:To(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,_e=f;break e}_e=s.return}}var _=t.current;for(_e=_;_e!==null;){o=_e;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,_e=v;else e:for(o=_;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:lu(9,a)}}catch(b){Mt(a,a.return,b)}if(a===o){_e=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,_e=S;break e}_e=a.return}}if(Ke=r,lr(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(eu,t)}catch{}i=!0}return i}finally{it=n,Ln.transition=e}}return!1}function Cp(t,e,n){e=ks(n,e),e=A0(t,e,1),t=Ki(t,e,1),e=Zt(),t!==null&&(Qo(t,1,e),un(t,e))}function Mt(t,e,n){if(t.tag===3)Cp(t,t,n);else for(;e!==null;){if(e.tag===3){Cp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zi===null||!Zi.has(i))){t=ks(n,t),t=C0(e,t,1),e=Ki(e,t,1),t=Zt(),e!==null&&(Qo(e,1,t),un(e,t));break}}e=e.return}}function oy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Bt&n)===n&&(Pt===4||Pt===3&&(Bt&130023424)===Bt&&500>Et()-Gd?Rr(t,0):Vd|=n),un(t,e)}function Y0(t,e){e===0&&(t.mode&1?(e=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):e=1);var n=Zt();t=wi(t,e),t!==null&&(Qo(t,e,n),un(t,n))}function ay(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Y0(t,n)}function ly(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Y0(t,n)}var $0;$0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,qx(t,e,n);sn=!!(t.flags&131072)}else sn=!1,ct&&e.flags&1048576&&Qg(e,bl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;sl(t,e),t=e.pendingProps;var r=Us(e,$t.current);Cs(e,n),r=Fd(null,e,i,t,r,n);var s=Od();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(i)?(s=!0,Cl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ld(e),r.updater=au,e.stateNode=r,r._reactInternals=e,sf(e,i,t,n),e=lf(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&wd(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(sl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=cy(i),t=Bn(i,t),r){case 0:e=af(null,e,i,t,n);break e;case 1:e=vp(null,e,i,t,n);break e;case 11:e=mp(null,e,i,t,n);break e;case 14:e=gp(null,e,i,Bn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),af(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),vp(t,e,i,r,n);case 3:e:{if(L0(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,r0(t,e),Dl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ks(Error(se(423)),e),e=_p(t,e,i,n,r);break e}else if(i!==r){r=ks(Error(se(424)),e),e=_p(t,e,i,n,r);break e}else for(vn=qi(e.stateNode.containerInfo.firstChild),xn=e,ct=!0,Gn=null,n=n0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ns(),i===r){e=Ti(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return s0(e),t===null&&tf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Kc(i,r)?o=null:s!==null&&Kc(i,s)&&(e.flags|=32),P0(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&tf(e),null;case 13:return D0(t,e,n);case 4:return Dd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Fs(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),mp(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(Pl,i._currentValue),i._currentValue=o,s!==null)if(Kn(s.value,o)){if(s.children===r.children&&!an.current){e=Ti(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Si(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),nf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),nf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Cs(e,n),r=Dn(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),gp(t,e,i,r,n);case 15:return R0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),sl(t,e),e.tag=1,ln(i)?(t=!0,Cl(e)):t=!1,Cs(e,n),T0(e,i,r),sf(e,i,r,n),lf(null,e,i,!0,t,n);case 19:return I0(t,e,n);case 22:return b0(t,e,n)}throw Error(se(156,e.tag))};function q0(t,e){return Mg(t,e)}function uy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,i){return new uy(t,e,n,i)}function Yd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cy(t){if(typeof t=="function")return Yd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dd)return 11;if(t===hd)return 14}return 2}function Ji(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ll(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Yd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case us:return br(n.children,r,s,e);case fd:o=8,r|=8;break;case Rc:return t=Pn(12,n,e,r|2),t.elementType=Rc,t.lanes=s,t;case bc:return t=Pn(13,n,e,r),t.elementType=bc,t.lanes=s,t;case Pc:return t=Pn(19,n,e,r),t.elementType=Pc,t.lanes=s,t;case sg:return cu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ig:o=10;break e;case rg:o=9;break e;case dd:o=11;break e;case hd:o=14;break e;case zi:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Pn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function br(t,e,n,i){return t=Pn(7,t,i,e),t.lanes=n,t}function cu(t,e,n,i){return t=Pn(22,t,i,e),t.elementType=sg,t.lanes=n,t.stateNode={isHidden:!1},t}function Yu(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function $u(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ru(0),this.expirationTimes=Ru(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ru(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $d(t,e,n,i,r,s,o,a,l){return t=new fy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ld(s),t}function dy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function K0(t){if(!t)return rr;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(ln(n))return Kg(t,n,e)}return e}function Z0(t,e,n,i,r,s,o,a,l){return t=$d(n,i,!0,t,r,s,o,a,l),t.context=K0(null),n=t.current,i=Zt(),r=Qi(n),s=Si(i,r),s.callback=e??null,Ki(n,s,r),t.current.lanes=r,Qo(t,r,i),un(t,i),t}function fu(t,e,n,i){var r=e.current,s=Zt(),o=Qi(r);return n=K0(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ki(r,e,o),t!==null&&($n(t,r,o,s),nl(t,r,o)),o}function Bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qd(t,e){Rp(t,e),(t=t.alternate)&&Rp(t,e)}function hy(){return null}var Q0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kd(t){this._internalRoot=t}du.prototype.render=Kd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));fu(t,e,null,null)};du.prototype.unmount=Kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){fu(null,t,null,null)}),e[Ei]=null}};function du(t){this._internalRoot=t}du.prototype.unstable_scheduleHydration=function(t){if(t){var e=bg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hi.length&&e!==0&&e<Hi[n].priority;n++);Hi.splice(n,0,t),n===0&&Lg(t)}};function Zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bp(){}function py(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Bl(o);s.call(c)}}var o=Z0(e,i,t,0,null,!1,!1,"",bp);return t._reactRootContainer=o,t[Ei]=o.current,Oo(t.nodeType===8?t.parentNode:t),Ur(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Bl(l);a.call(c)}}var l=$d(t,0,!1,null,null,!1,!1,"",bp);return t._reactRootContainer=l,t[Ei]=l.current,Oo(t.nodeType===8?t.parentNode:t),Ur(function(){fu(e,l,n,i)}),l}function pu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Bl(o);a.call(l)}}fu(e,o,t,r)}else o=py(n,e,t,r,i);return Bl(o)}Cg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=mo(e.pendingLanes);n!==0&&(gd(e,n|1),un(e,Et()),!(Ke&6)&&(zs=Et()+500,lr()))}break;case 13:Ur(function(){var i=wi(t,1);if(i!==null){var r=Zt();$n(i,t,1,r)}}),qd(t,1)}};vd=function(t){if(t.tag===13){var e=wi(t,134217728);if(e!==null){var n=Zt();$n(e,t,134217728,n)}qd(t,134217728)}};Rg=function(t){if(t.tag===13){var e=Qi(t),n=wi(t,e);if(n!==null){var i=Zt();$n(n,t,e,i)}qd(t,e)}};bg=function(){return it};Pg=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};Bc=function(t,e,n){switch(e){case"input":if(Ic(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ru(i);if(!r)throw Error(se(90));ag(i),Ic(i,r)}}}break;case"textarea":ug(t,n);break;case"select":e=n.value,e!=null&&Es(t,!!n.multiple,e,!1)}};gg=Wd;vg=Ur;var my={usingClientEntryPoint:!1,Events:[ea,hs,ru,pg,mg,Wd]},io={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gy={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ri.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yg(t),t===null?null:t.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||hy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{eu=Ta.inject(gy),ri=Ta}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=my;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zd(e))throw Error(se(200));return dy(t,e,null,n)};Mn.createRoot=function(t,e){if(!Zd(t))throw Error(se(299));var n=!1,i="",r=Q0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$d(t,1,!1,null,null,n,!1,i,r),t[Ei]=e.current,Oo(t.nodeType===8?t.parentNode:t),new Kd(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=yg(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return Ur(t)};Mn.hydrate=function(t,e,n){if(!hu(e))throw Error(se(200));return pu(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!Zd(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Q0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Z0(e,null,t,1,n??null,r,!1,s,o),t[Ei]=e.current,Oo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new du(e)};Mn.render=function(t,e,n){if(!hu(e))throw Error(se(200));return pu(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!hu(t))throw Error(se(40));return t._reactRootContainer?(Ur(function(){pu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1};Mn.unstable_batchedUpdates=Wd;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!hu(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return pu(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function J0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J0)}catch(t){console.error(t)}}J0(),Jm.exports=Mn;var vy=Jm.exports,ev,Pp=vy;ev=Pp.createRoot,Pp.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qd="166",_y=0,Lp=1,xy=2,tv=1,yy=2,pi=3,sr=0,cn=1,Wn=2,er=0,bs=1,Hl=2,Dp=3,Ip=4,Sy=5,Sr=100,My=101,Ey=102,wy=103,Ty=104,Ay=200,Cy=201,Ry=202,by=203,yf=204,Sf=205,Py=206,Ly=207,Dy=208,Iy=209,Uy=210,Ny=211,Fy=212,Oy=213,ky=214,zy=0,By=1,Hy=2,Vl=3,Vy=4,Gy=5,Wy=6,Xy=7,Jd=0,jy=1,Yy=2,tr=0,$y=1,qy=2,Ky=3,Zy=4,Qy=5,Jy=6,eS=7,nv=300,Bs=301,Hs=302,Mf=303,Ef=304,mu=306,wf=1e3,Ar=1001,Tf=1002,on=1003,tS=1004,Aa=1005,Xn=1006,qu=1007,Cr=1008,Ai=1009,iv=1010,rv=1011,jo=1012,eh=1013,Nr=1014,ii=1015,na=1016,th=1017,nh=1018,Vs=1020,sv=35902,ov=1021,av=1022,jn=1023,lv=1024,uv=1025,Ps=1026,Gs=1027,ih=1028,rh=1029,cv=1030,sh=1031,oh=1033,ul=33776,cl=33777,fl=33778,dl=33779,Af=35840,Cf=35841,Rf=35842,bf=35843,Pf=36196,Lf=37492,Df=37496,If=37808,Uf=37809,Nf=37810,Ff=37811,Of=37812,kf=37813,zf=37814,Bf=37815,Hf=37816,Vf=37817,Gf=37818,Wf=37819,Xf=37820,jf=37821,hl=36492,Yf=36494,$f=36495,fv=36283,qf=36284,Kf=36285,Zf=36286,nS=3200,iS=3201,dv=0,rS=1,Gi="",Vn="srgb",ur="srgb-linear",ah="display-p3",gu="display-p3-linear",Gl="linear",at="srgb",Wl="rec709",Xl="p3",Gr=7680,Up=519,sS=512,oS=513,aS=514,hv=515,lS=516,uS=517,cS=518,fS=519,Np=35044,Fp="300 es",yi=2e3,jl=2001;class $s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ku=Math.PI/180,Qf=180/Math.PI;function ia(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function dS(t,e){return(t%e+e)%e}function Zu(t,e,n){return(1-n)*t+n*e}function ro(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],p=i[7],h=i[2],g=i[5],x=i[8],m=r[0],u=r[3],f=r[6],_=r[1],v=r[4],S=r[7],b=r[2],T=r[5],A=r[8];return s[0]=o*m+a*_+l*b,s[3]=o*u+a*v+l*T,s[6]=o*f+a*S+l*A,s[1]=c*m+d*_+p*b,s[4]=c*u+d*v+p*T,s[7]=c*f+d*S+p*A,s[2]=h*m+g*_+x*b,s[5]=h*u+g*v+x*T,s[8]=h*f+g*S+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],p=d*o-a*c,h=a*l-d*s,g=c*s-o*l,x=n*p+i*h+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/x;return e[0]=p*m,e[1]=(r*c-d*i)*m,e[2]=(a*i-r*o)*m,e[3]=h*m,e[4]=(d*n-r*l)*m,e[5]=(r*s-a*n)*m,e[6]=g*m,e[7]=(i*l-c*n)*m,e[8]=(o*n-i*s)*m,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Qu.makeScale(e,n)),this}rotate(e){return this.premultiply(Qu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Qu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qu=new Ge;function pv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Yl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function hS(){const t=Yl("canvas");return t.style.display="block",t}const Op={};function mv(t){t in Op||(Op[t]=!0,console.warn(t))}function pS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const kp=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zp=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ca={[ur]:{transfer:Gl,primaries:Wl,toReference:t=>t,fromReference:t=>t},[Vn]:{transfer:at,primaries:Wl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[gu]:{transfer:Gl,primaries:Xl,toReference:t=>t.applyMatrix3(zp),fromReference:t=>t.applyMatrix3(kp)},[ah]:{transfer:at,primaries:Xl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(zp),fromReference:t=>t.applyMatrix3(kp).convertLinearToSRGB()}},mS=new Set([ur,gu]),nt={enabled:!0,_workingColorSpace:ur,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!mS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ca[e].toReference,r=Ca[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ca[t].primaries},getTransfer:function(t){return t===Gi?Gl:Ca[t].transfer}};function Ls(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ju(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Wr;class gS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wr===void 0&&(Wr=Yl("canvas")),Wr.width=e.width,Wr.height=e.height;const i=Wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Wr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Yl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ls(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ls(n[i]/255)*255):n[i]=Ls(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vS=0;class gv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=ia(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ec(r[o].image)):s.push(ec(r[o]))}else s=ec(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ec(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _S=0;class Qt extends $s{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=Ar,r=Ar,s=Xn,o=Cr,a=jn,l=Ai,c=Qt.DEFAULT_ANISOTROPY,d=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=ia(),this.name="",this.source=new gv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wf:e.x=e.x-Math.floor(e.x);break;case Ar:e.x=e.x<0?0:1;break;case Tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wf:e.y=e.y-Math.floor(e.y);break;case Ar:e.y=e.y<0?0:1;break;case Tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=nv;Qt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],p=l[8],h=l[1],g=l[5],x=l[9],m=l[2],u=l[6],f=l[10];if(Math.abs(d-h)<.01&&Math.abs(p-m)<.01&&Math.abs(x-u)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+m)<.1&&Math.abs(x+u)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(g+1)/2,b=(f+1)/2,T=(d+h)/4,A=(p+m)/4,C=(x+u)/4;return v>S&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=A/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=C/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=C/s),this.set(i,r,s,n),this}let _=Math.sqrt((u-x)*(u-x)+(p-m)*(p-m)+(h-d)*(h-d));return Math.abs(_)<.001&&(_=1),this.x=(u-x)/_,this.y=(p-m)/_,this.z=(h-d)/_,this.w=Math.acos((c+g+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xS extends $s{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new gv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fr extends xS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class vv extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yS extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ra{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],p=i[r+3];const h=s[o+0],g=s[o+1],x=s[o+2],m=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=p;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=x,e[n+3]=m;return}if(p!==m||l!==h||c!==g||d!==x){let u=1-a;const f=l*h+c*g+d*x+p*m,_=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const b=Math.sqrt(v),T=Math.atan2(b,f*_);u=Math.sin(u*T)/b,a=Math.sin(a*T)/b}const S=a*_;if(l=l*u+h*S,c=c*u+g*S,d=d*u+x*S,p=p*u+m*S,u===1-a){const b=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=b,c*=b,d*=b,p*=b}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],p=s[o],h=s[o+1],g=s[o+2],x=s[o+3];return e[n]=a*x+d*p+l*g-c*h,e[n+1]=l*x+d*h+c*p-a*g,e[n+2]=c*x+d*g+a*h-l*p,e[n+3]=d*x-a*p-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),p=a(s/2),h=l(i/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*d*p+c*g*x,this._y=c*g*p-h*d*x,this._z=c*d*x+h*g*p,this._w=c*d*p-h*g*x;break;case"YXZ":this._x=h*d*p+c*g*x,this._y=c*g*p-h*d*x,this._z=c*d*x-h*g*p,this._w=c*d*p+h*g*x;break;case"ZXY":this._x=h*d*p-c*g*x,this._y=c*g*p+h*d*x,this._z=c*d*x+h*g*p,this._w=c*d*p-h*g*x;break;case"ZYX":this._x=h*d*p-c*g*x,this._y=c*g*p+h*d*x,this._z=c*d*x-h*g*p,this._w=c*d*p+h*g*x;break;case"YZX":this._x=h*d*p+c*g*x,this._y=c*g*p+h*d*x,this._z=c*d*x-h*g*p,this._w=c*d*p-h*g*x;break;case"XZY":this._x=h*d*p-c*g*x,this._y=c*g*p-h*d*x,this._z=c*d*x+h*g*p,this._w=c*d*p+h*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],p=n[10],h=i+a+p;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>p){const g=2*Math.sqrt(1+i-a-p);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>p){const g=2*Math.sqrt(1+a-i-p);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+p-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),p=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Bp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Bp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*c+o*p-a*d,this.y=i+l*d+a*c-s*p,this.z=r+l*p+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tc.copy(this).projectOnVector(e),this.sub(tc)}reflect(e){return this.sub(tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tc=new H,Bp=new ra;class Br{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ra.copy(i.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(so),ba.subVectors(this.max,so),Xr.subVectors(e.a,so),jr.subVectors(e.b,so),Yr.subVectors(e.c,so),Di.subVectors(jr,Xr),Ii.subVectors(Yr,jr),fr.subVectors(Xr,Yr);let n=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-fr.z,fr.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,fr.z,0,-fr.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-fr.y,fr.x,0];return!nc(n,Xr,jr,Yr,ba)||(n=[1,0,0,0,1,0,0,0,1],!nc(n,Xr,jr,Yr,ba))?!1:(Pa.crossVectors(Di,Ii),n=[Pa.x,Pa.y,Pa.z],nc(n,Xr,jr,Yr,ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new H,new H,new H,new H,new H,new H,new H,new H],On=new H,Ra=new Br,Xr=new H,jr=new H,Yr=new H,Di=new H,Ii=new H,fr=new H,so=new H,ba=new H,Pa=new H,dr=new H;function nc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){dr.fromArray(t,s);const a=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),c=n.dot(dr),d=i.dot(dr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const SS=new Br,oo=new H,ic=new H;class sa{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):SS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);const n=oo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(oo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(ic)),this.expandByPoint(oo.copy(e.center).sub(ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new H,rc=new H,La=new H,Ui=new H,sc=new H,Da=new H,oc=new H;class _v{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,n),ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){rc.copy(e).add(n).multiplyScalar(.5),La.copy(n).sub(e).normalize(),Ui.copy(this.origin).sub(rc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(La),a=Ui.dot(this.direction),l=-Ui.dot(La),c=Ui.lengthSq(),d=Math.abs(1-o*o);let p,h,g,x;if(d>0)if(p=o*l-a,h=o*a-l,x=s*d,p>=0)if(h>=-x)if(h<=x){const m=1/d;p*=m,h*=m,g=p*(p+o*h+2*a)+h*(o*p+h+2*l)+c}else h=s,p=Math.max(0,-(o*h+a)),g=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(o*h+a)),g=-p*p+h*(h+2*l)+c;else h<=-x?(p=Math.max(0,-(-o*s+a)),h=p>0?-s:Math.min(Math.max(-s,-l),s),g=-p*p+h*(h+2*l)+c):h<=x?(p=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(p=Math.max(0,-(o*s+a)),h=p>0?s:Math.min(Math.max(-s,-l),s),g=-p*p+h*(h+2*l)+c);else h=o>0?-s:s,p=Math.max(0,-(o*h+a)),g=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(rc).addScaledVector(La,h),g}intersectSphere(e,n){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,n,i,r,s){sc.subVectors(n,e),Da.subVectors(i,e),oc.crossVectors(sc,Da);let o=this.direction.dot(oc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const l=a*this.direction.dot(Da.crossVectors(Ui,Da));if(l<0)return null;const c=a*this.direction.dot(sc.cross(Ui));if(c<0||l+c>o)return null;const d=-a*Ui.dot(oc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,n,i,r,s,o,a,l,c,d,p,h,g,x,m,u){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,p,h,g,x,m,u)}set(e,n,i,r,s,o,a,l,c,d,p,h,g,x,m,u){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=d,f[10]=p,f[14]=h,f[3]=g,f[7]=x,f[11]=m,f[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/$r.setFromMatrixColumn(e,0).length(),s=1/$r.setFromMatrixColumn(e,1).length(),o=1/$r.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=o*d,g=o*p,x=a*d,m=a*p;n[0]=l*d,n[4]=-l*p,n[8]=c,n[1]=g+x*c,n[5]=h-m*c,n[9]=-a*l,n[2]=m-h*c,n[6]=x+g*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,g=l*p,x=c*d,m=c*p;n[0]=h+m*a,n[4]=x*a-g,n[8]=o*c,n[1]=o*p,n[5]=o*d,n[9]=-a,n[2]=g*a-x,n[6]=m+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,g=l*p,x=c*d,m=c*p;n[0]=h-m*a,n[4]=-o*p,n[8]=x+g*a,n[1]=g+x*a,n[5]=o*d,n[9]=m-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,g=o*p,x=a*d,m=a*p;n[0]=l*d,n[4]=x*c-g,n[8]=h*c+m,n[1]=l*p,n[5]=m*c+h,n[9]=g*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*c,x=a*l,m=a*c;n[0]=l*d,n[4]=m-h*p,n[8]=x*p+g,n[1]=p,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=g*p+x,n[10]=h-m*p}else if(e.order==="XZY"){const h=o*l,g=o*c,x=a*l,m=a*c;n[0]=l*d,n[4]=-p,n[8]=c*d,n[1]=h*p+m,n[5]=o*d,n[9]=g*p-x,n[2]=x*p-g,n[6]=a*d,n[10]=m*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MS,e,ES)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ni.crossVectors(i,hn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ni.crossVectors(i,hn)),Ni.normalize(),Ia.crossVectors(hn,Ni),r[0]=Ni.x,r[4]=Ia.x,r[8]=hn.x,r[1]=Ni.y,r[5]=Ia.y,r[9]=hn.y,r[2]=Ni.z,r[6]=Ia.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],p=i[5],h=i[9],g=i[13],x=i[2],m=i[6],u=i[10],f=i[14],_=i[3],v=i[7],S=i[11],b=i[15],T=r[0],A=r[4],C=r[8],E=r[12],y=r[1],P=r[5],O=r[9],z=r[13],j=r[2],Y=r[6],W=r[10],q=r[14],D=r[3],K=r[7],J=r[11],ae=r[15];return s[0]=o*T+a*y+l*j+c*D,s[4]=o*A+a*P+l*Y+c*K,s[8]=o*C+a*O+l*W+c*J,s[12]=o*E+a*z+l*q+c*ae,s[1]=d*T+p*y+h*j+g*D,s[5]=d*A+p*P+h*Y+g*K,s[9]=d*C+p*O+h*W+g*J,s[13]=d*E+p*z+h*q+g*ae,s[2]=x*T+m*y+u*j+f*D,s[6]=x*A+m*P+u*Y+f*K,s[10]=x*C+m*O+u*W+f*J,s[14]=x*E+m*z+u*q+f*ae,s[3]=_*T+v*y+S*j+b*D,s[7]=_*A+v*P+S*Y+b*K,s[11]=_*C+v*O+S*W+b*J,s[15]=_*E+v*z+S*q+b*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],p=e[6],h=e[10],g=e[14],x=e[3],m=e[7],u=e[11],f=e[15];return x*(+s*l*p-r*c*p-s*a*h+i*c*h+r*a*g-i*l*g)+m*(+n*l*g-n*c*h+s*o*h-r*o*g+r*c*d-s*l*d)+u*(+n*c*p-n*a*g-s*o*p+i*o*g+s*a*d-i*c*d)+f*(-r*a*d-n*l*p+n*a*h+r*o*p-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],p=e[9],h=e[10],g=e[11],x=e[12],m=e[13],u=e[14],f=e[15],_=p*u*c-m*h*c+m*l*g-a*u*g-p*l*f+a*h*f,v=x*h*c-d*u*c-x*l*g+o*u*g+d*l*f-o*h*f,S=d*m*c-x*p*c+x*a*g-o*m*g-d*a*f+o*p*f,b=x*p*l-d*m*l-x*a*h+o*m*h+d*a*u-o*p*u,T=n*_+i*v+r*S+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=_*A,e[1]=(m*h*s-p*u*s-m*r*g+i*u*g+p*r*f-i*h*f)*A,e[2]=(a*u*s-m*l*s+m*r*c-i*u*c-a*r*f+i*l*f)*A,e[3]=(p*l*s-a*h*s-p*r*c+i*h*c+a*r*g-i*l*g)*A,e[4]=v*A,e[5]=(d*u*s-x*h*s+x*r*g-n*u*g-d*r*f+n*h*f)*A,e[6]=(x*l*s-o*u*s-x*r*c+n*u*c+o*r*f-n*l*f)*A,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*g+n*l*g)*A,e[8]=S*A,e[9]=(x*p*s-d*m*s-x*i*g+n*m*g+d*i*f-n*p*f)*A,e[10]=(o*m*s-x*a*s+x*i*c-n*m*c-o*i*f+n*a*f)*A,e[11]=(d*a*s-o*p*s-d*i*c+n*p*c+o*i*g-n*a*g)*A,e[12]=b*A,e[13]=(d*m*r-x*p*r+x*i*h-n*m*h-d*i*u+n*p*u)*A,e[14]=(x*a*r-o*m*r-x*i*l+n*m*l+o*i*u-n*a*u)*A,e[15]=(o*p*r-d*a*r+d*i*l-n*p*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,p=a+a,h=s*c,g=s*d,x=s*p,m=o*d,u=o*p,f=a*p,_=l*c,v=l*d,S=l*p,b=i.x,T=i.y,A=i.z;return r[0]=(1-(m+f))*b,r[1]=(g+S)*b,r[2]=(x-v)*b,r[3]=0,r[4]=(g-S)*T,r[5]=(1-(h+f))*T,r[6]=(u+_)*T,r[7]=0,r[8]=(x+v)*A,r[9]=(u-_)*A,r[10]=(1-(h+m))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=$r.set(r[0],r[1],r[2]).length();const o=$r.set(r[4],r[5],r[6]).length(),a=$r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const c=1/s,d=1/o,p=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=d,kn.elements[5]*=d,kn.elements[6]*=d,kn.elements[8]*=p,kn.elements[9]*=p,kn.elements[10]*=p,n.setFromRotationMatrix(kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=yi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),p=(n+e)/(n-e),h=(i+r)/(i-r);let g,x;if(a===yi)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===jl)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=yi){const l=this.elements,c=1/(n-e),d=1/(i-r),p=1/(o-s),h=(n+e)*c,g=(i+r)*d;let x,m;if(a===yi)x=(o+s)*p,m=-2*p;else if(a===jl)x=s*p,m=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=m,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const $r=new H,kn=new ut,MS=new H(0,0,0),ES=new H(1,1,1),Ni=new H,Ia=new H,hn=new H,Hp=new ut,Vp=new ra;class ai{constructor(e=0,n=0,i=0,r=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],p=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vp.setFromEuler(this),this.setFromQuaternion(Vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wS=0;const Gp=new H,qr=new ra,fi=new ut,Ua=new H,ao=new H,TS=new H,AS=new ra,Wp=new H(1,0,0),Xp=new H(0,1,0),jp=new H(0,0,1),Yp={type:"added"},CS={type:"removed"},Kr={type:"childadded",child:null},ac={type:"childremoved",child:null};class vt extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new H,n=new ai,i=new ra,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ge}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Wp,e)}rotateY(e){return this.rotateOnAxis(Xp,e)}rotateZ(e){return this.rotateOnAxis(jp,e)}translateOnAxis(e,n){return Gp.copy(e).applyQuaternion(this.quaternion),this.position.add(Gp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Wp,e)}translateY(e){return this.translateOnAxis(Xp,e)}translateZ(e){return this.translateOnAxis(jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ua.copy(e):Ua.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(ao,Ua,this.up):fi.lookAt(Ua,ao,this.up),this.quaternion.setFromRotationMatrix(fi),r&&(fi.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(fi),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yp),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(CS),ac.child=e,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yp),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,TS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,AS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),p=o(e.shapes),h=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DEFAULT_UP=new H(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new H,di=new H,lc=new H,hi=new H,Zr=new H,Qr=new H,$p=new H,uc=new H,cc=new H,fc=new H;class ni{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),di.subVectors(i,n),lc.subVectors(e,n);const o=zn.dot(zn),a=zn.dot(di),l=zn.dot(lc),c=di.dot(di),d=di.dot(lc),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const h=1/p,g=(c*l-a*d)*h,x=(o*d-a*l)*h;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),di.subVectors(e,n),zn.cross(di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),zn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ni.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Zr.subVectors(r,i),Qr.subVectors(s,i),uc.subVectors(e,i);const l=Zr.dot(uc),c=Qr.dot(uc);if(l<=0&&c<=0)return n.copy(i);cc.subVectors(e,r);const d=Zr.dot(cc),p=Qr.dot(cc);if(d>=0&&p<=d)return n.copy(r);const h=l*p-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Zr,o);fc.subVectors(e,s);const g=Zr.dot(fc),x=Qr.dot(fc);if(x>=0&&g<=x)return n.copy(s);const m=g*c-l*x;if(m<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Qr,a);const u=d*x-g*p;if(u<=0&&p-d>=0&&g-x>=0)return $p.subVectors(s,r),a=(p-d)/(p-d+(g-x)),n.copy(r).addScaledVector($p,a);const f=1/(u+m+h);return o=m*f,a=h*f,n.copy(i).addScaledVector(Zr,o).addScaledVector(Qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Na={h:0,s:0,l:0};function dc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=dS(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=dc(o,s,e+1/3),this.g=dc(o,s,e),this.b=dc(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=Vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vn){const i=xv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}copyLinearToSRGB(e){return this.r=Ju(e.r),this.g=Ju(e.g),this.b=Ju(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return nt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(rn(Xt.r*255,0,255))*65536+Math.round(rn(Xt.g*255,0,255))*256+Math.round(rn(Xt.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=d<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Vn){nt.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==Vn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+n,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Fi),e.getHSL(Na);const i=Zu(Fi.h,Na.h,n),r=Zu(Fi.s,Na.s,n),s=Zu(Fi.l,Na.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new We;We.NAMES=xv;let RS=0;class oa extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=ia(),this.name="",this.type="Material",this.blending=bs,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=Sf,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yf&&(i.blendSrc=this.blendSrc),this.blendDst!==Sf&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Up&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class ys extends oa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new H,Fa=new je;class qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Np,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return mv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fa.fromBufferAttribute(this,n),Fa.applyMatrix3(e),this.setXY(n,Fa.x,Fa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ro(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ro(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ro(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ro(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ro(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Np&&(e.usage=this.usage),e}}class yv extends qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Sv extends qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class yn extends qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let bS=0;const Tn=new ut,hc=new vt,Jr=new H,pn=new Br,lo=new Br,It=new H;class bi extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=ia(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pv(e)?Sv:yv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return hc.lookAt(e),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];lo.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(pn.min,lo.min),pn.expandByPoint(It),It.addVectors(pn.max,lo.max),pn.expandByPoint(It)):(pn.expandByPoint(lo.min),pn.expandByPoint(lo.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)It.fromBufferAttribute(a,c),l&&(Jr.fromBufferAttribute(e,c),It.add(Jr)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new H,l[C]=new H;const c=new H,d=new H,p=new H,h=new je,g=new je,x=new je,m=new H,u=new H;function f(C,E,y){c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,E),p.fromBufferAttribute(i,y),h.fromBufferAttribute(s,C),g.fromBufferAttribute(s,E),x.fromBufferAttribute(s,y),d.sub(c),p.sub(c),g.sub(h),x.sub(h);const P=1/(g.x*x.y-x.x*g.y);isFinite(P)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(p,-g.y).multiplyScalar(P),u.copy(p).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(P),a[C].add(m),a[E].add(m),a[y].add(m),l[C].add(u),l[E].add(u),l[y].add(u))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,E=_.length;C<E;++C){const y=_[C],P=y.start,O=y.count;for(let z=P,j=P+O;z<j;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const v=new H,S=new H,b=new H,T=new H;function A(C){b.fromBufferAttribute(r,C),T.copy(b);const E=a[C];v.copy(E),v.sub(b.multiplyScalar(b.dot(E))).normalize(),S.crossVectors(T,E);const P=S.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,P)}for(let C=0,E=_.length;C<E;++C){const y=_[C],P=y.start,O=y.count;for(let z=P,j=P+O;z<j;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,d=new H,p=new H;if(e)for(let h=0,g=e.count;h<g;h+=3){const x=e.getX(h+0),m=e.getX(h+1),u=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,m),o.fromBufferAttribute(n,u),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,u),a.add(d),l.add(d),c.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(u,c.x,c.y,c.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,p=a.normalized,h=new c.constructor(l.length*d);let g=0,x=0;for(let m=0,u=l.length;m<u;m++){a.isInterleavedBufferAttribute?g=l[m]*a.data.stride+a.offset:g=l[m]*d;for(let f=0;f<d;f++)h[x++]=c[g++]}return new qn(h,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new bi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,p=c.length;d<p;d++){const h=c[d],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,h=c.length;p<h;p++){const g=c[p];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],p=s[c];for(let h=0,g=p.length;h<g;h++)d.push(p[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qp=new ut,hr=new _v,Oa=new sa,Kp=new H,es=new H,ts=new H,ns=new H,pc=new H,ka=new H,za=new je,Ba=new je,Ha=new je,Zp=new H,Qp=new H,Jp=new H,Va=new H,Ga=new H;class _n extends vt{constructor(e=new bi,n=new ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ka.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],p=s[l];d!==0&&(pc.fromBufferAttribute(p,e),o?ka.addScaledVector(pc,d):ka.addScaledVector(pc.sub(n),d))}n.add(ka)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(s),hr.copy(e.ray).recast(e.near),!(Oa.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Oa,Kp)===null||hr.origin.distanceToSquared(Kp)>(e.far-e.near)**2))&&(qp.copy(s).invert(),hr.copy(e.ray).applyMatrix4(qp),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,hr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,m=h.length;x<m;x++){const u=h[x],f=o[u.materialIndex],_=Math.max(u.start,g.start),v=Math.min(a.count,Math.min(u.start+u.count,g.start+g.count));for(let S=_,b=v;S<b;S+=3){const T=a.getX(S),A=a.getX(S+1),C=a.getX(S+2);r=Wa(this,f,e,i,c,d,p,T,A,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=u.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),m=Math.min(a.count,g.start+g.count);for(let u=x,f=m;u<f;u+=3){const _=a.getX(u),v=a.getX(u+1),S=a.getX(u+2);r=Wa(this,o,e,i,c,d,p,_,v,S),r&&(r.faceIndex=Math.floor(u/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,m=h.length;x<m;x++){const u=h[x],f=o[u.materialIndex],_=Math.max(u.start,g.start),v=Math.min(l.count,Math.min(u.start+u.count,g.start+g.count));for(let S=_,b=v;S<b;S+=3){const T=S,A=S+1,C=S+2;r=Wa(this,f,e,i,c,d,p,T,A,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=u.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),m=Math.min(l.count,g.start+g.count);for(let u=x,f=m;u<f;u+=3){const _=u,v=u+1,S=u+2;r=Wa(this,o,e,i,c,d,p,_,v,S),r&&(r.faceIndex=Math.floor(u/3),n.push(r))}}}}function PS(t,e,n,i,r,s,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===sr,a),l===null)return null;Ga.copy(a),Ga.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ga);return c<n.near||c>n.far?null:{distance:c,point:Ga.clone(),object:t}}function Wa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,es),t.getVertexPosition(l,ts),t.getVertexPosition(c,ns);const d=PS(t,e,n,i,es,ts,ns,Va);if(d){r&&(za.fromBufferAttribute(r,a),Ba.fromBufferAttribute(r,l),Ha.fromBufferAttribute(r,c),d.uv=ni.getInterpolation(Va,es,ts,ns,za,Ba,Ha,new je)),s&&(za.fromBufferAttribute(s,a),Ba.fromBufferAttribute(s,l),Ha.fromBufferAttribute(s,c),d.uv1=ni.getInterpolation(Va,es,ts,ns,za,Ba,Ha,new je)),o&&(Zp.fromBufferAttribute(o,a),Qp.fromBufferAttribute(o,l),Jp.fromBufferAttribute(o,c),d.normal=ni.getInterpolation(Va,es,ts,ns,Zp,Qp,Jp,new H),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new H,materialIndex:0};ni.getNormal(es,ts,ns,p.normal),d.face=p}return d}class Un extends bi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],p=[];let h=0,g=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yn(c,3)),this.setAttribute("normal",new yn(d,3)),this.setAttribute("uv",new yn(p,2));function x(m,u,f,_,v,S,b,T,A,C,E){const y=S/A,P=b/C,O=S/2,z=b/2,j=T/2,Y=A+1,W=C+1;let q=0,D=0;const K=new H;for(let J=0;J<W;J++){const ae=J*P-z;for(let ve=0;ve<Y;ve++){const ee=ve*y-O;K[m]=ee*_,K[u]=ae*v,K[f]=j,c.push(K.x,K.y,K.z),K[m]=0,K[u]=0,K[f]=T>0?1:-1,d.push(K.x,K.y,K.z),p.push(ve/A),p.push(1-J/C),q+=1}}for(let J=0;J<C;J++)for(let ae=0;ae<A;ae++){const ve=h+ae+Y*J,ee=h+ae+Y*(J+1),k=h+(ae+1)+Y*(J+1),F=h+(ae+1)+Y*J;l.push(ve,ee,F),l.push(ee,k,F),D+=6}a.addGroup(g,D,E),g+=D,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=Ws(t[n]);for(const r in i)e[r]=i[r]}return e}function LS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Mv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const DS={clone:Ws,merge:qt};var IS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,US=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends oa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IS,this.fragmentShader=US,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=LS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ev extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=yi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new H,em=new je,tm=new je;class bn extends Ev{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qf*2*Math.atan(Math.tan(Ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,n){return this.getViewBounds(e,em,tm),n.subVectors(tm,em)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ku*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const is=-90,rs=1;class NS extends vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(is,rs,e,n);r.layers=this.layers,this.add(r);const s=new bn(is,rs,e,n);s.layers=this.layers,this.add(s);const o=new bn(is,rs,e,n);o.layers=this.layers,this.add(o);const a=new bn(is,rs,e,n);a.layers=this.layers,this.add(a);const l=new bn(is,rs,e,n);l.layers=this.layers,this.add(l);const c=new bn(is,rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(p,h,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class wv extends Qt{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Bs,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class FS extends Fr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Xn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Un(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:er});s.uniforms.tEquirect.value=n;const o=new _n(r,s),a=n.minFilter;return n.minFilter===Cr&&(n.minFilter=Xn),new NS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const mc=new H,OS=new H,kS=new Ge;class xr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=mc.subVectors(i,n).cross(OS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(mc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||kS.getNormalMatrix(e),r=this.coplanarPoint(mc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new sa,Xa=new H;class uh{constructor(e=new xr,n=new xr,i=new xr,r=new xr,s=new xr,o=new xr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],p=r[6],h=r[7],g=r[8],x=r[9],m=r[10],u=r[11],f=r[12],_=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,u-g,S-f).normalize(),i[1].setComponents(l+s,h+c,u+g,S+f).normalize(),i[2].setComponents(l+o,h+d,u+x,S+_).normalize(),i[3].setComponents(l-o,h-d,u-x,S-_).normalize(),i[4].setComponents(l-a,h-p,u-m,S-v).normalize(),n===yi)i[5].setComponents(l+a,h+p,u+m,S+v).normalize();else if(n===jl)i[5].setComponents(a,p,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Xa.x=r.normal.x>0?e.max.x:e.min.x,Xa.y=r.normal.y>0?e.max.y:e.min.y,Xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function zS(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,p=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){const d=l.array,p=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,a),p.count===-1&&h.length===0&&t.bufferSubData(c,0,d),h.length!==0){for(let g=0,x=h.length;g<x;g++){const m=h[g];t.bufferSubData(c,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count)}l.clearUpdateRanges()}p.count!==-1&&(t.bufferSubData(c,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count),p.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Or extends bi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,p=e/a,h=n/l,g=[],x=[],m=[],u=[];for(let f=0;f<d;f++){const _=f*h-o;for(let v=0;v<c;v++){const S=v*p-s;x.push(S,-_,0),m.push(0,0,1),u.push(v/a),u.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const v=_+c*f,S=_+c*(f+1),b=_+1+c*(f+1),T=_+1+c*f;g.push(v,S,T),g.push(S,b,T)}this.setIndex(g),this.setAttribute("position",new yn(x,3)),this.setAttribute("normal",new yn(m,3)),this.setAttribute("uv",new yn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.widthSegments,e.heightSegments)}}var BS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HS=`#ifdef USE_ALPHAHASH
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
#endif`,VS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jS=`#ifdef USE_AOMAP
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
#endif`,YS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$S=`#ifdef USE_BATCHING
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
#endif`,qS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JS=`#ifdef USE_IRIDESCENCE
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
#endif`,eM=`#ifdef USE_BUMPMAP
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
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uM=`#define PI 3.141592653589793
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
} // validated`,cM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fM=`vec3 transformedNormal = objectNormal;
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
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gM="gl_FragColor = linearToOutputTexel( gl_FragColor );",vM=`
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
}`,_M=`#ifdef USE_ENVMAP
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
#endif`,xM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
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
#endif`,EM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CM=`#ifdef USE_GRADIENTMAP
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
}`,RM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LM=`uniform bool receiveShadow;
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
#endif`,DM=`#ifdef USE_ENVMAP
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
#endif`,IM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OM=`PhysicalMaterial material;
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
#endif`,kM=`struct PhysicalMaterial {
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
}`,zM=`
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
#endif`,BM=`#if defined( RE_IndirectDiffuse )
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
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qM=`#if defined( USE_POINTS_UV )
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
#endif`,KM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t1=`#ifdef USE_MORPHTARGETS
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
#endif`,n1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,r1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,s1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,l1=`#ifdef USE_NORMALMAP
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
#endif`,u1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,m1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w1=`float getShadowMask() {
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
}`,T1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A1=`#ifdef USE_SKINNING
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
#endif`,C1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R1=`#ifdef USE_SKINNING
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
#endif`,b1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I1=`#ifdef USE_TRANSMISSION
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
#endif`,U1=`#ifdef USE_TRANSMISSION
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
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B1=`uniform sampler2D t2D;
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
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`#include <common>
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
}`,j1=`#if DEPTH_PACKING == 3200
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
}`,Y1=`#define DISTANCE
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
}`,$1=`#define DISTANCE
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
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`uniform float scale;
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
}`,Q1=`uniform vec3 diffuse;
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
}`,J1=`#include <common>
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
}`,eE=`uniform vec3 diffuse;
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
}`,tE=`#define LAMBERT
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
}`,nE=`#define LAMBERT
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
}`,iE=`#define MATCAP
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
}`,rE=`#define MATCAP
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
}`,sE=`#define NORMAL
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
}`,oE=`#define NORMAL
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
}`,aE=`#define PHONG
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
}`,lE=`#define PHONG
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
}`,uE=`#define STANDARD
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
}`,cE=`#define STANDARD
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
}`,fE=`#define TOON
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
}`,dE=`#define TOON
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
}`,hE=`uniform float size;
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
}`,pE=`uniform vec3 diffuse;
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
}`,mE=`#include <common>
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
}`,gE=`uniform vec3 color;
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
}`,vE=`uniform float rotation;
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
}`,_E=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:BS,alphahash_pars_fragment:HS,alphamap_fragment:VS,alphamap_pars_fragment:GS,alphatest_fragment:WS,alphatest_pars_fragment:XS,aomap_fragment:jS,aomap_pars_fragment:YS,batching_pars_vertex:$S,batching_vertex:qS,begin_vertex:KS,beginnormal_vertex:ZS,bsdfs:QS,iridescence_fragment:JS,bumpmap_pars_fragment:eM,clipping_planes_fragment:tM,clipping_planes_pars_fragment:nM,clipping_planes_pars_vertex:iM,clipping_planes_vertex:rM,color_fragment:sM,color_pars_fragment:oM,color_pars_vertex:aM,color_vertex:lM,common:uM,cube_uv_reflection_fragment:cM,defaultnormal_vertex:fM,displacementmap_pars_vertex:dM,displacementmap_vertex:hM,emissivemap_fragment:pM,emissivemap_pars_fragment:mM,colorspace_fragment:gM,colorspace_pars_fragment:vM,envmap_fragment:_M,envmap_common_pars_fragment:xM,envmap_pars_fragment:yM,envmap_pars_vertex:SM,envmap_physical_pars_fragment:DM,envmap_vertex:MM,fog_vertex:EM,fog_pars_vertex:wM,fog_fragment:TM,fog_pars_fragment:AM,gradientmap_pars_fragment:CM,lightmap_pars_fragment:RM,lights_lambert_fragment:bM,lights_lambert_pars_fragment:PM,lights_pars_begin:LM,lights_toon_fragment:IM,lights_toon_pars_fragment:UM,lights_phong_fragment:NM,lights_phong_pars_fragment:FM,lights_physical_fragment:OM,lights_physical_pars_fragment:kM,lights_fragment_begin:zM,lights_fragment_maps:BM,lights_fragment_end:HM,logdepthbuf_fragment:VM,logdepthbuf_pars_fragment:GM,logdepthbuf_pars_vertex:WM,logdepthbuf_vertex:XM,map_fragment:jM,map_pars_fragment:YM,map_particle_fragment:$M,map_particle_pars_fragment:qM,metalnessmap_fragment:KM,metalnessmap_pars_fragment:ZM,morphinstance_vertex:QM,morphcolor_vertex:JM,morphnormal_vertex:e1,morphtarget_pars_vertex:t1,morphtarget_vertex:n1,normal_fragment_begin:i1,normal_fragment_maps:r1,normal_pars_fragment:s1,normal_pars_vertex:o1,normal_vertex:a1,normalmap_pars_fragment:l1,clearcoat_normal_fragment_begin:u1,clearcoat_normal_fragment_maps:c1,clearcoat_pars_fragment:f1,iridescence_pars_fragment:d1,opaque_fragment:h1,packing:p1,premultiplied_alpha_fragment:m1,project_vertex:g1,dithering_fragment:v1,dithering_pars_fragment:_1,roughnessmap_fragment:x1,roughnessmap_pars_fragment:y1,shadowmap_pars_fragment:S1,shadowmap_pars_vertex:M1,shadowmap_vertex:E1,shadowmask_pars_fragment:w1,skinbase_vertex:T1,skinning_pars_vertex:A1,skinning_vertex:C1,skinnormal_vertex:R1,specularmap_fragment:b1,specularmap_pars_fragment:P1,tonemapping_fragment:L1,tonemapping_pars_fragment:D1,transmission_fragment:I1,transmission_pars_fragment:U1,uv_pars_fragment:N1,uv_pars_vertex:F1,uv_vertex:O1,worldpos_vertex:k1,background_vert:z1,background_frag:B1,backgroundCube_vert:H1,backgroundCube_frag:V1,cube_vert:G1,cube_frag:W1,depth_vert:X1,depth_frag:j1,distanceRGBA_vert:Y1,distanceRGBA_frag:$1,equirect_vert:q1,equirect_frag:K1,linedashed_vert:Z1,linedashed_frag:Q1,meshbasic_vert:J1,meshbasic_frag:eE,meshlambert_vert:tE,meshlambert_frag:nE,meshmatcap_vert:iE,meshmatcap_frag:rE,meshnormal_vert:sE,meshnormal_frag:oE,meshphong_vert:aE,meshphong_frag:lE,meshphysical_vert:uE,meshphysical_frag:cE,meshtoon_vert:fE,meshtoon_frag:dE,points_vert:hE,points_frag:pE,shadow_vert:mE,shadow_frag:gE,sprite_vert:vE,sprite_frag:_E},pe={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ei={basic:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:qt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:qt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:qt([pe.points,pe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:qt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:qt([pe.common,pe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:qt([pe.sprite,pe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:qt([pe.common,pe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:qt([pe.lights,pe.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ei.physical={uniforms:qt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ja={r:0,b:0,g:0},mr=new ai,xE=new ut;function yE(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,d,p=null,h=0,g=null;function x(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function m(_){let v=!1;const S=x(_);S===null?f(a,l):S&&S.isColor&&(f(S,1),v=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function u(_,v){const S=x(v);S&&(S.isCubeTexture||S.mapping===mu)?(d===void 0&&(d=new _n(new Un(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:Ws(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),mr.copy(v.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(xE.makeRotationFromEuler(mr)),d.material.toneMapped=nt.getTransfer(S.colorSpace)!==at,(p!==S||h!==S.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,p=S,h=S.version,g=t.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new _n(new Or(2,2),new Ci({name:"BackgroundMaterial",uniforms:Ws(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=nt.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||h!==S.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,p=S,h=S.version,g=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,v){_.getRGB(ja,Mv(t)),i.buffers.color.setClear(ja.r,ja.g,ja.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:m,addToRenderList:u}}function SE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,P,O,z,j){let Y=!1;const W=p(z,O,P);s!==W&&(s=W,c(s.object)),Y=g(y,z,O,j),Y&&x(y,z,O,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,S(y,P,O,z),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function d(y){return t.deleteVertexArray(y)}function p(y,P,O){const z=O.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let Y=j[P.id];Y===void 0&&(Y={},j[P.id]=Y);let W=Y[z];return W===void 0&&(W=h(l()),Y[z]=W),W}function h(y){const P=[],O=[],z=[];for(let j=0;j<n;j++)P[j]=0,O[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:z,object:y,attributes:{},index:null}}function g(y,P,O,z){const j=s.attributes,Y=P.attributes;let W=0;const q=O.getAttributes();for(const D in q)if(q[D].location>=0){const J=j[D];let ae=Y[D];if(ae===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),J===void 0||J.attribute!==ae||ae&&J.data!==ae.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function x(y,P,O,z){const j={},Y=P.attributes;let W=0;const q=O.getAttributes();for(const D in q)if(q[D].location>=0){let J=Y[D];J===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(J=y.instanceColor));const ae={};ae.attribute=J,J&&J.data&&(ae.data=J.data),j[D]=ae,W++}s.attributes=j,s.attributesNum=W,s.index=z}function m(){const y=s.newAttributes;for(let P=0,O=y.length;P<O;P++)y[P]=0}function u(y){f(y,0)}function f(y,P){const O=s.newAttributes,z=s.enabledAttributes,j=s.attributeDivisors;O[y]=1,z[y]===0&&(t.enableVertexAttribArray(y),z[y]=1),j[y]!==P&&(t.vertexAttribDivisor(y,P),j[y]=P)}function _(){const y=s.newAttributes,P=s.enabledAttributes;for(let O=0,z=P.length;O<z;O++)P[O]!==y[O]&&(t.disableVertexAttribArray(O),P[O]=0)}function v(y,P,O,z,j,Y,W){W===!0?t.vertexAttribIPointer(y,P,O,j,Y):t.vertexAttribPointer(y,P,O,z,j,Y)}function S(y,P,O,z){m();const j=z.attributes,Y=O.getAttributes(),W=P.defaultAttributeValues;for(const q in Y){const D=Y[q];if(D.location>=0){let K=j[q];if(K===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){const J=K.normalized,ae=K.itemSize,ve=e.get(K);if(ve===void 0)continue;const ee=ve.buffer,k=ve.type,F=ve.bytesPerElement,$=k===t.INT||k===t.UNSIGNED_INT||K.gpuType===eh;if(K.isInterleavedBufferAttribute){const ne=K.data,Ee=ne.stride,Ce=K.offset;if(ne.isInstancedInterleavedBuffer){for(let Ae=0;Ae<D.locationSize;Ae++)f(D.location+Ae,ne.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ae=0;Ae<D.locationSize;Ae++)u(D.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,ee);for(let Ae=0;Ae<D.locationSize;Ae++)v(D.location+Ae,ae/D.locationSize,k,J,Ee*F,(Ce+ae/D.locationSize*Ae)*F,$)}else{if(K.isInstancedBufferAttribute){for(let ne=0;ne<D.locationSize;ne++)f(D.location+ne,K.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ne=0;ne<D.locationSize;ne++)u(D.location+ne);t.bindBuffer(t.ARRAY_BUFFER,ee);for(let ne=0;ne<D.locationSize;ne++)v(D.location+ne,ae/D.locationSize,k,J,ae*F,ae/D.locationSize*ne*F,$)}}else if(W!==void 0){const J=W[q];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(D.location,J);break;case 3:t.vertexAttrib3fv(D.location,J);break;case 4:t.vertexAttrib4fv(D.location,J);break;default:t.vertexAttrib1fv(D.location,J)}}}}_()}function b(){C();for(const y in i){const P=i[y];for(const O in P){const z=P[O];for(const j in z)d(z[j].object),delete z[j];delete P[O]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const O in P){const z=P[O];for(const j in z)d(z[j].object),delete z[j];delete P[O]}delete i[y.id]}function A(y){for(const P in i){const O=i[P];if(O[y.id]===void 0)continue;const z=O[y.id];for(const j in z)d(z[j].object),delete z[j];delete O[y.id]}}function C(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:m,enableAttribute:u,disableUnusedAttributes:_}}function ME(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,p){p!==0&&(t.drawArraysInstanced(i,c,d,p),n.update(d,i,p))}function a(c,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,p);let g=0;for(let x=0;x<p;x++)g+=d[x];n.update(g,i,1)}function l(c,d,p,h){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<c.length;x++)o(c[x],d[x],h[x]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,p);let x=0;for(let m=0;m<p;m++)x+=d[m];for(let m=0;m<h.length;m++)n.update(x,i,h[m])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function EE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==jn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const A=T===na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ai&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ii&&!A)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:S,maxSamples:b}}function wE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new xr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const g=p.length!==0||h||i!==0||r;return r=h,i=p.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=d(p,h,0)},this.setState=function(p,h,g){const x=p.clippingPlanes,m=p.clipIntersection,u=p.clipShadows,f=t.get(p);if(!r||x===null||x.length===0||s&&!u)s?d(null):c();else{const _=s?0:i,v=_*4;let S=f.clippingState||null;l.value=S,S=d(x,h,v,g);for(let b=0;b!==v;++b)S[b]=n[b];f.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,h,g,x){const m=p!==null?p.length:0;let u=null;if(m!==0){if(u=l.value,x!==!0||u===null){const f=g+m*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(u===null||u.length<f)&&(u=new Float32Array(f));for(let v=0,S=g;v!==m;++v,S+=4)o.copy(p[v]).applyMatrix4(_,a),o.normal.toArray(u,S),u[S+3]=o.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,u}}function TE(t){let e=new WeakMap;function n(o,a){return a===Mf?o.mapping=Bs:a===Ef&&(o.mapping=Hs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Mf||a===Ef)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new FS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Av extends Ev{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ss=4,nm=[.125,.215,.35,.446,.526,.582],Mr=20,gc=new Av,im=new We;let vc=null,_c=0,xc=0,yc=!1;const yr=(1+Math.sqrt(5))/2,ss=1/yr,rm=[new H(-yr,ss,0),new H(yr,ss,0),new H(-ss,0,yr),new H(ss,0,yr),new H(0,yr,-ss),new H(0,yr,ss),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){vc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vc,_c,xc),this._renderer.xr.enabled=yc,e.scissorTest=!1,Ya(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:na,format:jn,colorSpace:ur,depthBuffer:!1},r=om(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=om(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AE(s)),this._blurMaterial=CE(s,e,n)}return r}_compileMaterial(e){const n=new _n(this._lodPlanes[0],e);this._renderer.compile(n,gc)}_sceneToCubeUV(e,n,i,r){const a=new bn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,h=d.toneMapping;d.getClearColor(im),d.toneMapping=tr,d.autoClear=!1;const g=new ys({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),x=new _n(new Un,g);let m=!1;const u=e.background;u?u.isColor&&(g.color.copy(u),e.background=null,m=!0):(g.color.copy(im),m=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;Ya(r,_*v,f>2?v:0,v,v),d.setRenderTarget(r),m&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=h,d.autoClear=p,e.background=u}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Bs||e.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=am());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new _n(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ya(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,gc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=rm[(r-s-1)%rm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new _n(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Mr-1),m=s/x,u=isFinite(s)?1+Math.floor(d*m):Mr;u>Mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Mr}`);const f=[];let _=0;for(let A=0;A<Mr;++A){const C=A/m,E=Math.exp(-C*C/2);f.push(E),A===0?_+=E:A<u&&(_+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/_;h.envMap.value=e.texture,h.samples.value=u,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const S=this._sizeLods[r],b=3*S*(r>v-Ss?r-v+Ss:0),T=4*(this._cubeSize-S);Ya(n,b,T,3*S,2*S),l.setRenderTarget(n),l.render(p,gc)}}function AE(t){const e=[],n=[],i=[];let r=t;const s=t-Ss+1+nm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ss?l=nm[o-t+Ss-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,p=1+c,h=[d,d,p,d,p,p,d,d,p,p,d,p],g=6,x=6,m=3,u=2,f=1,_=new Float32Array(m*x*g),v=new Float32Array(u*x*g),S=new Float32Array(f*x*g);for(let T=0;T<g;T++){const A=T%3*2/3-1,C=T>2?0:-1,E=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];_.set(E,m*x*T),v.set(h,u*x*T);const y=[T,T,T,T,T,T];S.set(y,f*x*T)}const b=new bi;b.setAttribute("position",new qn(_,m)),b.setAttribute("uv",new qn(v,u)),b.setAttribute("faceIndex",new qn(S,f)),e.push(b),r>Ss&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function om(t,e,n){const i=new Fr(t,e,n);return i.texture.mapping=mu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ya(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function CE(t,e,n){const i=new Float32Array(Mr),r=new H(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ch(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function am(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function lm(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function ch(){return`

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
	`}function RE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Mf||l===Ef,d=l===Bs||l===Hs;if(c||d){let p=e.get(a);const h=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new sm(t)),p=c?n.fromEquirectangular(a,p):n.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const g=a.image;return c&&g&&g.height>0||d&&g&&r(g)?(n===null&&(n=new sm(t)),p=c?n.fromEquirectangular(a):n.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function bE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&mv("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function PE(t,e,n,i){const r={},s=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const m=h.morphAttributes[x];for(let u=0,f=m.length;u<f;u++)e.remove(m[u])}h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(p){const h=p.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const g=p.morphAttributes;for(const x in g){const m=g[x];for(let u=0,f=m.length;u<f;u++)e.update(m[u],t.ARRAY_BUFFER)}}function c(p){const h=[],g=p.index,x=p.attributes.position;let m=0;if(g!==null){const _=g.array;m=g.version;for(let v=0,S=_.length;v<S;v+=3){const b=_[v+0],T=_[v+1],A=_[v+2];h.push(b,T,T,A,A,b)}}else if(x!==void 0){const _=x.array;m=x.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const b=v+0,T=v+1,A=v+2;h.push(b,T,T,A,A,b)}}else return;const u=new(pv(h)?Sv:yv)(h,1);u.version=m;const f=s.get(p);f&&e.remove(f),s.set(p,u)}function d(p){const h=s.get(p);if(h){const g=p.index;g!==null&&h.version<g.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:d}}function LE(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,g){t.drawElements(i,g,s,h*o),n.update(g,i,1)}function c(h,g,x){x!==0&&(t.drawElementsInstanced(i,g,s,h*o,x),n.update(g,i,x))}function d(h,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,h,0,x);let u=0;for(let f=0;f<x;f++)u+=g[f];n.update(u,i,1)}function p(h,g,x,m){if(x===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let f=0;f<h.length;f++)c(h[f]/o,g[f],m[f]);else{u.multiDrawElementsInstancedWEBGL(i,g,0,s,h,0,m,0,x);let f=0;for(let _=0;_<x;_++)f+=g[_];for(let _=0;_<m.length;_++)n.update(f,i,m[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function DE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function IE(t,e,n){const i=new WeakMap,r=new bt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==p){let y=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var g=y;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,u=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;x===!0&&(S=1),m===!0&&(S=2),u===!0&&(S=3);let b=a.attributes.position.count*S,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*T*4*p),C=new vv(A,b,T,p);C.type=ii,C.needsUpdate=!0;const E=S*4;for(let P=0;P<p;P++){const O=f[P],z=_[P],j=v[P],Y=b*T*4*P;for(let W=0;W<O.count;W++){const q=W*E;x===!0&&(r.fromBufferAttribute(O,W),A[Y+q+0]=r.x,A[Y+q+1]=r.y,A[Y+q+2]=r.z,A[Y+q+3]=0),m===!0&&(r.fromBufferAttribute(z,W),A[Y+q+4]=r.x,A[Y+q+5]=r.y,A[Y+q+6]=r.z,A[Y+q+7]=0),u===!0&&(r.fromBufferAttribute(j,W),A[Y+q+8]=r.x,A[Y+q+9]=r.y,A[Y+q+10]=r.z,A[Y+q+11]=j.itemSize===4?r.w:1)}}h={count:p,texture:C,size:new je(b,T)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let u=0;u<c.length;u++)x+=c[u];const m=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function UE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return p}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Cv extends Qt{constructor(e,n,i,r,s,o,a,l,c,d=Ps){if(d!==Ps&&d!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ps&&(i=Nr),i===void 0&&d===Gs&&(i=Vs),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Rv=new Qt,um=new Cv(1,1),bv=new vv,Pv=new yS,Lv=new wv,cm=[],fm=[],dm=new Float32Array(16),hm=new Float32Array(9),pm=new Float32Array(4);function qs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=cm[r];if(s===void 0&&(s=new Float32Array(r),cm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function vu(t,e){let n=fm[e];n===void 0&&(n=new Int32Array(e),fm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function NE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function FE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function zE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;pm.set(i),t.uniformMatrix2fv(this.addr,!1,pm),Dt(n,i)}}function BE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;hm.set(i),t.uniformMatrix3fv(this.addr,!1,hm),Dt(n,i)}}function HE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;dm.set(i),t.uniformMatrix4fv(this.addr,!1,dm),Dt(n,i)}}function VE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function GE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function XE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function jE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function YE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function KE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(um.compareFunction=hv,s=um):s=Rv,n.setTexture2D(e||s,r)}function ZE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Pv,r)}function QE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Lv,r)}function JE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||bv,r)}function ew(t){switch(t){case 5126:return NE;case 35664:return FE;case 35665:return OE;case 35666:return kE;case 35674:return zE;case 35675:return BE;case 35676:return HE;case 5124:case 35670:return VE;case 35667:case 35671:return GE;case 35668:case 35672:return WE;case 35669:case 35673:return XE;case 5125:return jE;case 36294:return YE;case 36295:return $E;case 36296:return qE;case 35678:case 36198:case 36298:case 36306:case 35682:return KE;case 35679:case 36299:case 36307:return ZE;case 35680:case 36300:case 36308:case 36293:return QE;case 36289:case 36303:case 36311:case 36292:return JE}}function tw(t,e){t.uniform1fv(this.addr,e)}function nw(t,e){const n=qs(e,this.size,2);t.uniform2fv(this.addr,n)}function iw(t,e){const n=qs(e,this.size,3);t.uniform3fv(this.addr,n)}function rw(t,e){const n=qs(e,this.size,4);t.uniform4fv(this.addr,n)}function sw(t,e){const n=qs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ow(t,e){const n=qs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function aw(t,e){const n=qs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function lw(t,e){t.uniform1iv(this.addr,e)}function uw(t,e){t.uniform2iv(this.addr,e)}function cw(t,e){t.uniform3iv(this.addr,e)}function fw(t,e){t.uniform4iv(this.addr,e)}function dw(t,e){t.uniform1uiv(this.addr,e)}function hw(t,e){t.uniform2uiv(this.addr,e)}function pw(t,e){t.uniform3uiv(this.addr,e)}function mw(t,e){t.uniform4uiv(this.addr,e)}function gw(t,e,n){const i=this.cache,r=e.length,s=vu(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Rv,s[o])}function vw(t,e,n){const i=this.cache,r=e.length,s=vu(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Pv,s[o])}function _w(t,e,n){const i=this.cache,r=e.length,s=vu(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Lv,s[o])}function xw(t,e,n){const i=this.cache,r=e.length,s=vu(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||bv,s[o])}function yw(t){switch(t){case 5126:return tw;case 35664:return nw;case 35665:return iw;case 35666:return rw;case 35674:return sw;case 35675:return ow;case 35676:return aw;case 5124:case 35670:return lw;case 35667:case 35671:return uw;case 35668:case 35672:return cw;case 35669:case 35673:return fw;case 5125:return dw;case 36294:return hw;case 36295:return pw;case 36296:return mw;case 35678:case 36198:case 36298:case 36306:case 35682:return gw;case 35679:case 36299:case 36307:return vw;case 35680:case 36300:case 36308:case 36293:return _w;case 36289:case 36303:case 36311:case 36292:return xw}}class Sw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ew(n.type)}}class Mw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yw(n.type)}}class Ew{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Sc=/(\w+)(\])?(\[|\.)?/g;function mm(t,e){t.seq.push(e),t.map[e.id]=e}function ww(t,e,n){const i=t.name,r=i.length;for(Sc.lastIndex=0;;){const s=Sc.exec(i),o=Sc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){mm(n,c===void 0?new Sw(a,t,e):new Mw(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new Ew(a),mm(n,p)),n=p}}}class pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);ww(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function gm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Tw=37297;let Aw=0;function Cw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Rw(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===Xl&&n===Wl?i="LinearDisplayP3ToLinearSRGB":e===Wl&&n===Xl&&(i="LinearSRGBToLinearDisplayP3"),t){case ur:case gu:return[i,"LinearTransferOETF"];case Vn:case ah:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function vm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Cw(t.getShaderSource(e),o)}else return r}function bw(t,e){const n=Rw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Pw(t,e){let n;switch(e){case $y:n="Linear";break;case qy:n="Reinhard";break;case Ky:n="OptimizedCineon";break;case Zy:n="ACESFilmic";break;case Jy:n="AgX";break;case eS:n="Neutral";break;case Qy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Lw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function Dw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Iw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function vo(t){return t!==""}function _m(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jf(t){return t.replace(Uw,Fw)}const Nw=new Map;function Fw(t,e){let n=Ve[e];if(n===void 0){const i=Nw.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jf(n)}const Ow=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ym(t){return t.replace(Ow,kw)}function kw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function zw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===tv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===yy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function Bw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Bs:case Hs:e="ENVMAP_TYPE_CUBE";break;case mu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function Vw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Jd:e="ENVMAP_BLENDING_MULTIPLY";break;case jy:e="ENVMAP_BLENDING_MIX";break;case Yy:e="ENVMAP_BLENDING_ADD";break}return e}function Gw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Ww(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=zw(n),c=Bw(n),d=Hw(n),p=Vw(n),h=Gw(n),g=Lw(n),x=Dw(s),m=r.createProgram();let u,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(vo).join(`
`),u.length>0&&(u+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(vo).join(`
`),f.length>0&&(f+=`
`)):(u=[Sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),f=[Sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==tr?"#define TONE_MAPPING":"",n.toneMapping!==tr?Ve.tonemapping_pars_fragment:"",n.toneMapping!==tr?Pw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,bw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vo).join(`
`)),o=Jf(o),o=_m(o,n),o=xm(o,n),a=Jf(a),a=_m(a,n),a=xm(a,n),o=ym(o),a=ym(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,f=["#define varying in",n.glslVersion===Fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=_+u+o,S=_+f+a,b=gm(r,r.VERTEX_SHADER,v),T=gm(r,r.FRAGMENT_SHADER,S);r.attachShader(m,b),r.attachShader(m,T),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function A(P){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(m).trim(),z=r.getShaderInfoLog(b).trim(),j=r.getShaderInfoLog(T).trim();let Y=!0,W=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,b,T);else{const q=vm(r,b,"vertex"),D=vm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+q+`
`+D)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||j==="")&&(W=!1);W&&(P.diagnostics={runnable:Y,programLog:O,vertexShader:{log:z,prefix:u},fragmentShader:{log:j,prefix:f}})}r.deleteShader(b),r.deleteShader(T),C=new pl(r,m),E=Iw(r,m)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(m,Tw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Aw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=T,this}let Xw=0;class jw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Yw(e),n.set(e,i)),i}}class Yw{constructor(e){this.id=Xw++,this.code=e,this.usedTimes=0}}function $w(t,e,n,i,r,s,o){const a=new lh,l=new jw,c=new Set,d=[],p=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(E){return c.add(E),E===0?"uv":`uv${E}`}function u(E,y,P,O,z){const j=O.fog,Y=z.geometry,W=E.isMeshStandardMaterial?O.environment:null,q=(E.isMeshStandardMaterial?n:e).get(E.envMap||W),D=q&&q.mapping===mu?q.image.height:null,K=x[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const J=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ae=J!==void 0?J.length:0;let ve=0;Y.morphAttributes.position!==void 0&&(ve=1),Y.morphAttributes.normal!==void 0&&(ve=2),Y.morphAttributes.color!==void 0&&(ve=3);let ee,k,F,$;if(K){const Ze=ei[K];ee=Ze.vertexShader,k=Ze.fragmentShader}else ee=E.vertexShader,k=E.fragmentShader,l.update(E),F=l.getVertexShaderID(E),$=l.getFragmentShaderID(E);const ne=t.getRenderTarget(),Ee=z.isInstancedMesh===!0,Ce=z.isBatchedMesh===!0,Ae=!!E.map,Oe=!!E.matcap,L=!!q,rt=!!E.aoMap,oe=!!E.lightMap,de=!!E.bumpMap,Z=!!E.normalMap,Ue=!!E.displacementMap,Re=!!E.emissiveMap,be=!!E.metalnessMap,R=!!E.roughnessMap,M=E.anisotropy>0,B=E.clearcoat>0,re=E.dispersion>0,le=E.iridescence>0,ie=E.sheen>0,De=E.transmission>0,me=M&&!!E.anisotropyMap,Se=B&&!!E.clearcoatMap,He=B&&!!E.clearcoatNormalMap,ue=B&&!!E.clearcoatRoughnessMap,ye=le&&!!E.iridescenceMap,$e=le&&!!E.iridescenceThicknessMap,ze=ie&&!!E.sheenColorMap,Me=ie&&!!E.sheenRoughnessMap,Be=!!E.specularMap,Xe=!!E.specularColorMap,dt=!!E.specularIntensityMap,I=De&&!!E.transmissionMap,ce=De&&!!E.thicknessMap,Q=!!E.gradientMap,te=!!E.alphaMap,he=E.alphaTest>0,Ne=!!E.alphaHash,qe=!!E.extensions;let wt=tr;E.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(wt=t.toneMapping);const Ot={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:ee,fragmentShader:k,defines:E.defines,customVertexShaderID:F,customFragmentShaderID:$,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Ce,batchingColor:Ce&&z._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&z.instanceColor!==null,instancingMorph:Ee&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ur,alphaToCoverage:!!E.alphaToCoverage,map:Ae,matcap:Oe,envMap:L,envMapMode:L&&q.mapping,envMapCubeUVHeight:D,aoMap:rt,lightMap:oe,bumpMap:de,normalMap:Z,displacementMap:h&&Ue,emissiveMap:Re,normalMapObjectSpace:Z&&E.normalMapType===rS,normalMapTangentSpace:Z&&E.normalMapType===dv,metalnessMap:be,roughnessMap:R,anisotropy:M,anisotropyMap:me,clearcoat:B,clearcoatMap:Se,clearcoatNormalMap:He,clearcoatRoughnessMap:ue,dispersion:re,iridescence:le,iridescenceMap:ye,iridescenceThicknessMap:$e,sheen:ie,sheenColorMap:ze,sheenRoughnessMap:Me,specularMap:Be,specularColorMap:Xe,specularIntensityMap:dt,transmission:De,transmissionMap:I,thicknessMap:ce,gradientMap:Q,opaque:E.transparent===!1&&E.blending===bs&&E.alphaToCoverage===!1,alphaMap:te,alphaTest:he,alphaHash:Ne,combine:E.combine,mapUv:Ae&&m(E.map.channel),aoMapUv:rt&&m(E.aoMap.channel),lightMapUv:oe&&m(E.lightMap.channel),bumpMapUv:de&&m(E.bumpMap.channel),normalMapUv:Z&&m(E.normalMap.channel),displacementMapUv:Ue&&m(E.displacementMap.channel),emissiveMapUv:Re&&m(E.emissiveMap.channel),metalnessMapUv:be&&m(E.metalnessMap.channel),roughnessMapUv:R&&m(E.roughnessMap.channel),anisotropyMapUv:me&&m(E.anisotropyMap.channel),clearcoatMapUv:Se&&m(E.clearcoatMap.channel),clearcoatNormalMapUv:He&&m(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&m(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&m(E.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&m(E.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&m(E.sheenColorMap.channel),sheenRoughnessMapUv:Me&&m(E.sheenRoughnessMap.channel),specularMapUv:Be&&m(E.specularMap.channel),specularColorMapUv:Xe&&m(E.specularColorMap.channel),specularIntensityMapUv:dt&&m(E.specularIntensityMap.channel),transmissionMapUv:I&&m(E.transmissionMap.channel),thicknessMapUv:ce&&m(E.thicknessMap.channel),alphaMapUv:te&&m(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Z||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(Ae||te),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ve,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:wt,decodeVideoTexture:Ae&&E.map.isVideoTexture===!0&&nt.getTransfer(E.map.colorSpace)===at,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Wn,flipSided:E.side===cn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:qe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&E.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function f(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)y.push(P),y.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(_(y,E),v(y,E),y.push(t.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function _(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function v(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),E.push(a.mask)}function S(E){const y=x[E.type];let P;if(y){const O=ei[y];P=DS.clone(O.uniforms)}else P=E.uniforms;return P}function b(E,y){let P;for(let O=0,z=d.length;O<z;O++){const j=d[O];if(j.cacheKey===y){P=j,++P.usedTimes;break}}return P===void 0&&(P=new Ww(t,y,E,s),d.push(P)),P}function T(E){if(--E.usedTimes===0){const y=d.indexOf(E);d[y]=d[d.length-1],d.pop(),E.destroy()}}function A(E){l.remove(E)}function C(){l.dispose()}return{getParameters:u,getProgramCacheKey:f,getUniforms:S,acquireProgram:b,releaseProgram:T,releaseShaderCache:A,programs:d,dispose:C}}function qw(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Kw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Mm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Em(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,h,g,x,m,u){let f=t[e];return f===void 0?(f={id:p.id,object:p,geometry:h,material:g,groupOrder:x,renderOrder:p.renderOrder,z:m,group:u},t[e]=f):(f.id=p.id,f.object=p,f.geometry=h,f.material=g,f.groupOrder=x,f.renderOrder=p.renderOrder,f.z=m,f.group=u),e++,f}function a(p,h,g,x,m,u){const f=o(p,h,g,x,m,u);g.transmission>0?i.push(f):g.transparent===!0?r.push(f):n.push(f)}function l(p,h,g,x,m,u){const f=o(p,h,g,x,m,u);g.transmission>0?i.unshift(f):g.transparent===!0?r.unshift(f):n.unshift(f)}function c(p,h){n.length>1&&n.sort(p||Kw),i.length>1&&i.sort(h||Mm),r.length>1&&r.sort(h||Mm)}function d(){for(let p=e,h=t.length;p<h;p++){const g=t[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function Zw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Em,t.set(i,[o])):r>=s.length?(o=new Em,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Qw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new We};break;case"SpotLight":n={position:new H,direction:new H,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function Jw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let eT=0;function tT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function nT(t){const e=new Qw,n=Jw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new ut,o=new ut;function a(c){let d=0,p=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let g=0,x=0,m=0,u=0,f=0,_=0,v=0,S=0,b=0,T=0,A=0;c.sort(tT);for(let E=0,y=c.length;E<y;E++){const P=c[E],O=P.color,z=P.intensity,j=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=O.r*z,p+=O.g*z,h+=O.b*z;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],z);A++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,D=n.get(P);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,i.directionalShadow[g]=D,i.directionalShadowMap[g]=Y,i.directionalShadowMatrix[g]=P.shadow.matrix,_++}i.directional[g]=W,g++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(O).multiplyScalar(z),W.distance=j,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[m]=W;const q=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,q.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[m]=q.matrix,P.castShadow){const D=n.get(P);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,i.spotShadow[m]=D,i.spotShadowMap[m]=Y,S++}m++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(O).multiplyScalar(z),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[u]=W,u++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const q=P.shadow,D=n.get(P);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,D.shadowCameraNear=q.camera.near,D.shadowCameraFar=q.camera.far,i.pointShadow[x]=D,i.pointShadowMap[x]=Y,i.pointShadowMatrix[x]=P.shadow.matrix,v++}i.point[x]=W,x++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(z),W.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[f]=W,f++}}u>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=h;const C=i.hash;(C.directionalLength!==g||C.pointLength!==x||C.spotLength!==m||C.rectAreaLength!==u||C.hemiLength!==f||C.numDirectionalShadows!==_||C.numPointShadows!==v||C.numSpotShadows!==S||C.numSpotMaps!==b||C.numLightProbes!==A)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=u,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,C.directionalLength=g,C.pointLength=x,C.spotLength=m,C.rectAreaLength=u,C.hemiLength=f,C.numDirectionalShadows=_,C.numPointShadows=v,C.numSpotShadows=S,C.numSpotMaps=b,C.numLightProbes=A,i.version=eT++)}function l(c,d){let p=0,h=0,g=0,x=0,m=0;const u=d.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const v=c[f];if(v.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(u),p++}else if(v.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(u),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(u),g++}else if(v.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(u),o.identity(),s.copy(v.matrixWorld),s.premultiply(u),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(u),h++}else if(v.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(u),m++}}}return{setup:a,setupView:l,state:i}}function wm(t){const e=new nT(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function iT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new wm(t),e.set(r,[a])):s>=o.length?(a=new wm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class rT extends oa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sT extends oa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aT=`uniform sampler2D shadow_pass;
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
}`;function lT(t,e,n){let i=new uh;const r=new je,s=new je,o=new bt,a=new rT({depthPacking:iS}),l=new sT,c={},d=n.maxTextureSize,p={[sr]:cn,[cn]:sr,[Wn]:Wn},h=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:oT,fragmentShader:aT}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const x=new bi;x.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new _n(x,h),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tv;let f=this.type;this.render=function(T,A,C){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||T.length===0)return;const E=t.getRenderTarget(),y=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),O=t.state;O.setBlending(er),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=f!==pi&&this.type===pi,j=f===pi&&this.type!==pi;for(let Y=0,W=T.length;Y<W;Y++){const q=T[Y],D=q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const K=D.getFrameExtents();if(r.multiply(K),s.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/K.x),r.x=s.x*K.x,D.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/K.y),r.y=s.y*K.y,D.mapSize.y=s.y)),D.map===null||z===!0||j===!0){const ae=this.type!==pi?{minFilter:on,magFilter:on}:{};D.map!==null&&D.map.dispose(),D.map=new Fr(r.x,r.y,ae),D.map.texture.name=q.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const J=D.getViewportCount();for(let ae=0;ae<J;ae++){const ve=D.getViewport(ae);o.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),O.viewport(o),D.updateMatrices(q,ae),i=D.getFrustum(),S(A,C,D.camera,q,this.type)}D.isPointLightShadow!==!0&&this.type===pi&&_(D,C),D.needsUpdate=!1}f=this.type,u.needsUpdate=!1,t.setRenderTarget(E,y,P)};function _(T,A){const C=e.update(m);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fr(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,C,h,m,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,C,g,m,null)}function v(T,A,C,E){let y=null;const P=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)y=P;else if(y=C.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=y.uuid,z=A.uuid;let j=c[O];j===void 0&&(j={},c[O]=j);let Y=j[z];Y===void 0&&(Y=y.clone(),j[z]=Y,A.addEventListener("dispose",b)),y=Y}if(y.visible=A.visible,y.wireframe=A.wireframe,E===pi?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:p[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=t.properties.get(y);O.light=C}return y}function S(T,A,C,E,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===pi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const z=e.update(T),j=T.material;if(Array.isArray(j)){const Y=z.groups;for(let W=0,q=Y.length;W<q;W++){const D=Y[W],K=j[D.materialIndex];if(K&&K.visible){const J=v(T,K,E,y);T.onBeforeShadow(t,T,A,C,z,J,D),t.renderBufferDirect(C,null,z,J,T,D),T.onAfterShadow(t,T,A,C,z,J,D)}}}else if(j.visible){const Y=v(T,j,E,y);T.onBeforeShadow(t,T,A,C,z,Y,null),t.renderBufferDirect(C,null,z,Y,T,null),T.onAfterShadow(t,T,A,C,z,Y,null)}}const O=T.children;for(let z=0,j=O.length;z<j;z++)S(O[z],A,C,E,y)}function b(T){T.target.removeEventListener("dispose",b);for(const C in c){const E=c[C],y=T.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function uT(t){function e(){let I=!1;const ce=new bt;let Q=null;const te=new bt(0,0,0,0);return{setMask:function(he){Q!==he&&!I&&(t.colorMask(he,he,he,he),Q=he)},setLocked:function(he){I=he},setClear:function(he,Ne,qe,wt,Ot){Ot===!0&&(he*=wt,Ne*=wt,qe*=wt),ce.set(he,Ne,qe,wt),te.equals(ce)===!1&&(t.clearColor(he,Ne,qe,wt),te.copy(ce))},reset:function(){I=!1,Q=null,te.set(-1,0,0,0)}}}function n(){let I=!1,ce=null,Q=null,te=null;return{setTest:function(he){he?$(t.DEPTH_TEST):ne(t.DEPTH_TEST)},setMask:function(he){ce!==he&&!I&&(t.depthMask(he),ce=he)},setFunc:function(he){if(Q!==he){switch(he){case zy:t.depthFunc(t.NEVER);break;case By:t.depthFunc(t.ALWAYS);break;case Hy:t.depthFunc(t.LESS);break;case Vl:t.depthFunc(t.LEQUAL);break;case Vy:t.depthFunc(t.EQUAL);break;case Gy:t.depthFunc(t.GEQUAL);break;case Wy:t.depthFunc(t.GREATER);break;case Xy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=he}},setLocked:function(he){I=he},setClear:function(he){te!==he&&(t.clearDepth(he),te=he)},reset:function(){I=!1,ce=null,Q=null,te=null}}}function i(){let I=!1,ce=null,Q=null,te=null,he=null,Ne=null,qe=null,wt=null,Ot=null;return{setTest:function(Ze){I||(Ze?$(t.STENCIL_TEST):ne(t.STENCIL_TEST))},setMask:function(Ze){ce!==Ze&&!I&&(t.stencilMask(Ze),ce=Ze)},setFunc:function(Ze,li,Zn){(Q!==Ze||te!==li||he!==Zn)&&(t.stencilFunc(Ze,li,Zn),Q=Ze,te=li,he=Zn)},setOp:function(Ze,li,Zn){(Ne!==Ze||qe!==li||wt!==Zn)&&(t.stencilOp(Ze,li,Zn),Ne=Ze,qe=li,wt=Zn)},setLocked:function(Ze){I=Ze},setClear:function(Ze){Ot!==Ze&&(t.clearStencil(Ze),Ot=Ze)},reset:function(){I=!1,ce=null,Q=null,te=null,he=null,Ne=null,qe=null,wt=null,Ot=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},d={},p=new WeakMap,h=[],g=null,x=!1,m=null,u=null,f=null,_=null,v=null,S=null,b=null,T=new We(0,0,0),A=0,C=!1,E=null,y=null,P=null,O=null,z=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,W=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=W>=1):q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=W>=2);let D=null,K={};const J=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),ve=new bt().fromArray(J),ee=new bt().fromArray(ae);function k(I,ce,Q,te){const he=new Uint8Array(4),Ne=t.createTexture();t.bindTexture(I,Ne),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<Q;qe++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ce+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return Ne}const F={};F[t.TEXTURE_2D]=k(t.TEXTURE_2D,t.TEXTURE_2D,1),F[t.TEXTURE_CUBE_MAP]=k(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[t.TEXTURE_2D_ARRAY]=k(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),F[t.TEXTURE_3D]=k(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),$(t.DEPTH_TEST),s.setFunc(Vl),de(!1),Z(Lp),$(t.CULL_FACE),rt(er);function $(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function ne(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Ee(I,ce){return d[I]!==ce?(t.bindFramebuffer(I,ce),d[I]=ce,I===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ce),I===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ce(I,ce){let Q=h,te=!1;if(I){Q=p.get(ce),Q===void 0&&(Q=[],p.set(ce,Q));const he=I.textures;if(Q.length!==he.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let Ne=0,qe=he.length;Ne<qe;Ne++)Q[Ne]=t.COLOR_ATTACHMENT0+Ne;Q.length=he.length,te=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,te=!0);te&&t.drawBuffers(Q)}function Ae(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const Oe={[Sr]:t.FUNC_ADD,[My]:t.FUNC_SUBTRACT,[Ey]:t.FUNC_REVERSE_SUBTRACT};Oe[wy]=t.MIN,Oe[Ty]=t.MAX;const L={[Ay]:t.ZERO,[Cy]:t.ONE,[Ry]:t.SRC_COLOR,[yf]:t.SRC_ALPHA,[Uy]:t.SRC_ALPHA_SATURATE,[Dy]:t.DST_COLOR,[Py]:t.DST_ALPHA,[by]:t.ONE_MINUS_SRC_COLOR,[Sf]:t.ONE_MINUS_SRC_ALPHA,[Iy]:t.ONE_MINUS_DST_COLOR,[Ly]:t.ONE_MINUS_DST_ALPHA,[Ny]:t.CONSTANT_COLOR,[Fy]:t.ONE_MINUS_CONSTANT_COLOR,[Oy]:t.CONSTANT_ALPHA,[ky]:t.ONE_MINUS_CONSTANT_ALPHA};function rt(I,ce,Q,te,he,Ne,qe,wt,Ot,Ze){if(I===er){x===!0&&(ne(t.BLEND),x=!1);return}if(x===!1&&($(t.BLEND),x=!0),I!==Sy){if(I!==m||Ze!==C){if((u!==Sr||v!==Sr)&&(t.blendEquation(t.FUNC_ADD),u=Sr,v=Sr),Ze)switch(I){case bs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Hl:t.blendFunc(t.ONE,t.ONE);break;case Dp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ip:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Hl:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Dp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ip:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}f=null,_=null,S=null,b=null,T.set(0,0,0),A=0,m=I,C=Ze}return}he=he||ce,Ne=Ne||Q,qe=qe||te,(ce!==u||he!==v)&&(t.blendEquationSeparate(Oe[ce],Oe[he]),u=ce,v=he),(Q!==f||te!==_||Ne!==S||qe!==b)&&(t.blendFuncSeparate(L[Q],L[te],L[Ne],L[qe]),f=Q,_=te,S=Ne,b=qe),(wt.equals(T)===!1||Ot!==A)&&(t.blendColor(wt.r,wt.g,wt.b,Ot),T.copy(wt),A=Ot),m=I,C=!1}function oe(I,ce){I.side===Wn?ne(t.CULL_FACE):$(t.CULL_FACE);let Q=I.side===cn;ce&&(Q=!Q),de(Q),I.blending===bs&&I.transparent===!1?rt(er):rt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const te=I.stencilWrite;o.setTest(te),te&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Re(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?$(t.SAMPLE_ALPHA_TO_COVERAGE):ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function de(I){E!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),E=I)}function Z(I){I!==_y?($(t.CULL_FACE),I!==y&&(I===Lp?t.cullFace(t.BACK):I===xy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ne(t.CULL_FACE),y=I}function Ue(I){I!==P&&(Y&&t.lineWidth(I),P=I)}function Re(I,ce,Q){I?($(t.POLYGON_OFFSET_FILL),(O!==ce||z!==Q)&&(t.polygonOffset(ce,Q),O=ce,z=Q)):ne(t.POLYGON_OFFSET_FILL)}function be(I){I?$(t.SCISSOR_TEST):ne(t.SCISSOR_TEST)}function R(I){I===void 0&&(I=t.TEXTURE0+j-1),D!==I&&(t.activeTexture(I),D=I)}function M(I,ce,Q){Q===void 0&&(D===null?Q=t.TEXTURE0+j-1:Q=D);let te=K[Q];te===void 0&&(te={type:void 0,texture:void 0},K[Q]=te),(te.type!==I||te.texture!==ce)&&(D!==Q&&(t.activeTexture(Q),D=Q),t.bindTexture(I,ce||F[I]),te.type=I,te.texture=ce)}function B(){const I=K[D];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function re(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $e(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(I){ve.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),ve.copy(I))}function Me(I){ee.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ee.copy(I))}function Be(I,ce){let Q=l.get(ce);Q===void 0&&(Q=new WeakMap,l.set(ce,Q));let te=Q.get(I);te===void 0&&(te=t.getUniformBlockIndex(ce,I.name),Q.set(I,te))}function Xe(I,ce){const te=l.get(ce).get(I);a.get(ce)!==te&&(t.uniformBlockBinding(ce,te,I.__bindingPointIndex),a.set(ce,te))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,K={},d={},p=new WeakMap,h=[],g=null,x=!1,m=null,u=null,f=null,_=null,v=null,S=null,b=null,T=new We(0,0,0),A=0,C=!1,E=null,y=null,P=null,O=null,z=null,ve.set(0,0,t.canvas.width,t.canvas.height),ee.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:$,disable:ne,bindFramebuffer:Ee,drawBuffers:Ce,useProgram:Ae,setBlending:rt,setMaterial:oe,setFlipSided:de,setCullFace:Z,setLineWidth:Ue,setPolygonOffset:Re,setScissorTest:be,activeTexture:R,bindTexture:M,unbindTexture:B,compressedTexImage2D:re,compressedTexImage3D:le,texImage2D:ye,texImage3D:$e,updateUBOMapping:Be,uniformBlockBinding:Xe,texStorage2D:He,texStorage3D:ue,texSubImage2D:ie,texSubImage3D:De,compressedTexSubImage2D:me,compressedTexSubImage3D:Se,scissor:ze,viewport:Me,reset:dt}}function Tm(t,e,n,i){const r=cT(i);switch(n){case ov:return t*e;case lv:return t*e;case uv:return t*e*2;case ih:return t*e/r.components*r.byteLength;case rh:return t*e/r.components*r.byteLength;case cv:return t*e*2/r.components*r.byteLength;case sh:return t*e*2/r.components*r.byteLength;case av:return t*e*3/r.components*r.byteLength;case jn:return t*e*4/r.components*r.byteLength;case oh:return t*e*4/r.components*r.byteLength;case ul:case cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case fl:case dl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cf:case bf:return Math.max(t,16)*Math.max(e,8)/4;case Af:case Rf:return Math.max(t,8)*Math.max(e,8)/2;case Pf:case Lf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Df:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case If:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Of:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case kf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case zf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Hf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case jf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case hl:case Yf:case $f:return Math.ceil(t/4)*Math.ceil(e/4)*16;case fv:case qf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Kf:case Zf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function cT(t){switch(t){case Ai:case iv:return{byteLength:1,components:1};case jo:case rv:case na:return{byteLength:2,components:1};case th:case nh:return{byteLength:2,components:4};case Nr:case eh:case ii:return{byteLength:4,components:1};case sv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function fT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,d=new WeakMap;let p;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,M){return g?new OffscreenCanvas(R,M):Yl("canvas")}function m(R,M,B){let re=1;const le=be(R);if((le.width>B||le.height>B)&&(re=B/Math.max(le.width,le.height)),re<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ie=Math.floor(re*le.width),De=Math.floor(re*le.height);p===void 0&&(p=x(ie,De));const me=M?x(ie,De):p;return me.width=ie,me.height=De,me.getContext("2d").drawImage(R,0,0,ie,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ie+"x"+De+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),R;return R}function u(R){return R.generateMipmaps&&R.minFilter!==on&&R.minFilter!==Xn}function f(R){t.generateMipmap(R)}function _(R,M,B,re,le=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=M;if(M===t.RED&&(B===t.FLOAT&&(ie=t.R32F),B===t.HALF_FLOAT&&(ie=t.R16F),B===t.UNSIGNED_BYTE&&(ie=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(ie=t.R8UI),B===t.UNSIGNED_SHORT&&(ie=t.R16UI),B===t.UNSIGNED_INT&&(ie=t.R32UI),B===t.BYTE&&(ie=t.R8I),B===t.SHORT&&(ie=t.R16I),B===t.INT&&(ie=t.R32I)),M===t.RG&&(B===t.FLOAT&&(ie=t.RG32F),B===t.HALF_FLOAT&&(ie=t.RG16F),B===t.UNSIGNED_BYTE&&(ie=t.RG8)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(ie=t.RG8UI),B===t.UNSIGNED_SHORT&&(ie=t.RG16UI),B===t.UNSIGNED_INT&&(ie=t.RG32UI),B===t.BYTE&&(ie=t.RG8I),B===t.SHORT&&(ie=t.RG16I),B===t.INT&&(ie=t.RG32I)),M===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(ie=t.RGB9_E5),M===t.RGBA){const De=le?Gl:nt.getTransfer(re);B===t.FLOAT&&(ie=t.RGBA32F),B===t.HALF_FLOAT&&(ie=t.RGBA16F),B===t.UNSIGNED_BYTE&&(ie=De===at?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(R,M){let B;return R?M===null||M===Nr||M===Vs?B=t.DEPTH24_STENCIL8:M===ii?B=t.DEPTH32F_STENCIL8:M===jo&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Nr||M===Vs?B=t.DEPTH_COMPONENT24:M===ii?B=t.DEPTH_COMPONENT32F:M===jo&&(B=t.DEPTH_COMPONENT16),B}function S(R,M){return u(R)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==Xn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function b(R){const M=R.target;M.removeEventListener("dispose",b),A(M),M.isVideoTexture&&d.delete(M)}function T(R){const M=R.target;M.removeEventListener("dispose",T),E(M)}function A(R){const M=i.get(R);if(M.__webglInit===void 0)return;const B=R.source,re=h.get(B);if(re){const le=re[M.__cacheKey];le.usedTimes--,le.usedTimes===0&&C(R),Object.keys(re).length===0&&h.delete(B)}i.remove(R)}function C(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const B=R.source,re=h.get(B);delete re[M.__cacheKey],o.memory.textures--}function E(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(M.__webglFramebuffer[re]))for(let le=0;le<M.__webglFramebuffer[re].length;le++)t.deleteFramebuffer(M.__webglFramebuffer[re][le]);else t.deleteFramebuffer(M.__webglFramebuffer[re]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[re])}else{if(Array.isArray(M.__webglFramebuffer))for(let re=0;re<M.__webglFramebuffer.length;re++)t.deleteFramebuffer(M.__webglFramebuffer[re]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let re=0;re<M.__webglColorRenderbuffer.length;re++)M.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[re]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=R.textures;for(let re=0,le=B.length;re<le;re++){const ie=i.get(B[re]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove(B[re])}i.remove(R)}let y=0;function P(){y=0}function O(){const R=y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),y+=1,R}function z(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function j(R,M){const B=i.get(R);if(R.isVideoTexture&&Ue(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const re=R.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(B,R,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function Y(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){ee(B,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function W(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){ee(B,R,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function q(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){k(B,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const D={[wf]:t.REPEAT,[Ar]:t.CLAMP_TO_EDGE,[Tf]:t.MIRRORED_REPEAT},K={[on]:t.NEAREST,[tS]:t.NEAREST_MIPMAP_NEAREST,[Aa]:t.NEAREST_MIPMAP_LINEAR,[Xn]:t.LINEAR,[qu]:t.LINEAR_MIPMAP_NEAREST,[Cr]:t.LINEAR_MIPMAP_LINEAR},J={[sS]:t.NEVER,[fS]:t.ALWAYS,[oS]:t.LESS,[hv]:t.LEQUAL,[aS]:t.EQUAL,[cS]:t.GEQUAL,[lS]:t.GREATER,[uS]:t.NOTEQUAL};function ae(R,M){if(M.type===ii&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Xn||M.magFilter===qu||M.magFilter===Aa||M.magFilter===Cr||M.minFilter===Xn||M.minFilter===qu||M.minFilter===Aa||M.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,D[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,D[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,D[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,K[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,K[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===on||M.minFilter!==Aa&&M.minFilter!==Cr||M.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ve(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b));const re=M.source;let le=h.get(re);le===void 0&&(le={},h.set(re,le));const ie=z(M);if(ie!==R.__cacheKey){le[ie]===void 0&&(le[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),le[ie].usedTimes++;const De=le[R.__cacheKey];De!==void 0&&(le[R.__cacheKey].usedTimes--,De.usedTimes===0&&C(M)),R.__cacheKey=ie,R.__webglTexture=le[ie].texture}return B}function ee(R,M,B){let re=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=t.TEXTURE_3D);const le=ve(R,M),ie=M.source;n.bindTexture(re,R.__webglTexture,t.TEXTURE0+B);const De=i.get(ie);if(ie.version!==De.__version||le===!0){n.activeTexture(t.TEXTURE0+B);const me=nt.getPrimaries(nt.workingColorSpace),Se=M.colorSpace===Gi?null:nt.getPrimaries(M.colorSpace),He=M.colorSpace===Gi||me===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ue=m(M.image,!1,r.maxTextureSize);ue=Re(M,ue);const ye=s.convert(M.format,M.colorSpace),$e=s.convert(M.type);let ze=_(M.internalFormat,ye,$e,M.colorSpace,M.isVideoTexture);ae(re,M);let Me;const Be=M.mipmaps,Xe=M.isVideoTexture!==!0,dt=De.__version===void 0||le===!0,I=ie.dataReady,ce=S(M,ue);if(M.isDepthTexture)ze=v(M.format===Gs,M.type),dt&&(Xe?n.texStorage2D(t.TEXTURE_2D,1,ze,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,ze,ue.width,ue.height,0,ye,$e,null));else if(M.isDataTexture)if(Be.length>0){Xe&&dt&&n.texStorage2D(t.TEXTURE_2D,ce,ze,Be[0].width,Be[0].height);for(let Q=0,te=Be.length;Q<te;Q++)Me=Be[Q],Xe?I&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Me.width,Me.height,ye,$e,Me.data):n.texImage2D(t.TEXTURE_2D,Q,ze,Me.width,Me.height,0,ye,$e,Me.data);M.generateMipmaps=!1}else Xe?(dt&&n.texStorage2D(t.TEXTURE_2D,ce,ze,ue.width,ue.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,ye,$e,ue.data)):n.texImage2D(t.TEXTURE_2D,0,ze,ue.width,ue.height,0,ye,$e,ue.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xe&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,ze,Be[0].width,Be[0].height,ue.depth);for(let Q=0,te=Be.length;Q<te;Q++)if(Me=Be[Q],M.format!==jn)if(ye!==null)if(Xe){if(I)if(M.layerUpdates.size>0){const he=Tm(Me.width,Me.height,M.format,M.type);for(const Ne of M.layerUpdates){const qe=Me.data.subarray(Ne*he/Me.data.BYTES_PER_ELEMENT,(Ne+1)*he/Me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,Ne,Me.width,Me.height,1,ye,qe,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,Me.width,Me.height,ue.depth,ye,Me.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,ze,Me.width,Me.height,ue.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,Me.width,Me.height,ue.depth,ye,$e,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,ze,Me.width,Me.height,ue.depth,0,ye,$e,Me.data)}else{Xe&&dt&&n.texStorage2D(t.TEXTURE_2D,ce,ze,Be[0].width,Be[0].height);for(let Q=0,te=Be.length;Q<te;Q++)Me=Be[Q],M.format!==jn?ye!==null?Xe?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,Me.width,Me.height,ye,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,ze,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?I&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Me.width,Me.height,ye,$e,Me.data):n.texImage2D(t.TEXTURE_2D,Q,ze,Me.width,Me.height,0,ye,$e,Me.data)}else if(M.isDataArrayTexture)if(Xe){if(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,ze,ue.width,ue.height,ue.depth),I)if(M.layerUpdates.size>0){const Q=Tm(ue.width,ue.height,M.format,M.type);for(const te of M.layerUpdates){const he=ue.data.subarray(te*Q/ue.data.BYTES_PER_ELEMENT,(te+1)*Q/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,ue.width,ue.height,1,ye,$e,he)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ye,$e,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ze,ue.width,ue.height,ue.depth,0,ye,$e,ue.data);else if(M.isData3DTexture)Xe?(dt&&n.texStorage3D(t.TEXTURE_3D,ce,ze,ue.width,ue.height,ue.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ye,$e,ue.data)):n.texImage3D(t.TEXTURE_3D,0,ze,ue.width,ue.height,ue.depth,0,ye,$e,ue.data);else if(M.isFramebufferTexture){if(dt)if(Xe)n.texStorage2D(t.TEXTURE_2D,ce,ze,ue.width,ue.height);else{let Q=ue.width,te=ue.height;for(let he=0;he<ce;he++)n.texImage2D(t.TEXTURE_2D,he,ze,Q,te,0,ye,$e,null),Q>>=1,te>>=1}}else if(Be.length>0){if(Xe&&dt){const Q=be(Be[0]);n.texStorage2D(t.TEXTURE_2D,ce,ze,Q.width,Q.height)}for(let Q=0,te=Be.length;Q<te;Q++)Me=Be[Q],Xe?I&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ye,$e,Me):n.texImage2D(t.TEXTURE_2D,Q,ze,ye,$e,Me);M.generateMipmaps=!1}else if(Xe){if(dt){const Q=be(ue);n.texStorage2D(t.TEXTURE_2D,ce,ze,Q.width,Q.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,$e,ue)}else n.texImage2D(t.TEXTURE_2D,0,ze,ye,$e,ue);u(M)&&f(re),De.__version=ie.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function k(R,M,B){if(M.image.length!==6)return;const re=ve(R,M),le=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const ie=i.get(le);if(le.version!==ie.__version||re===!0){n.activeTexture(t.TEXTURE0+B);const De=nt.getPrimaries(nt.workingColorSpace),me=M.colorSpace===Gi?null:nt.getPrimaries(M.colorSpace),Se=M.colorSpace===Gi||De===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const He=M.isCompressedTexture||M.image[0].isCompressedTexture,ue=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let te=0;te<6;te++)!He&&!ue?ye[te]=m(M.image[te],!0,r.maxCubemapSize):ye[te]=ue?M.image[te].image:M.image[te],ye[te]=Re(M,ye[te]);const $e=ye[0],ze=s.convert(M.format,M.colorSpace),Me=s.convert(M.type),Be=_(M.internalFormat,ze,Me,M.colorSpace),Xe=M.isVideoTexture!==!0,dt=ie.__version===void 0||re===!0,I=le.dataReady;let ce=S(M,$e);ae(t.TEXTURE_CUBE_MAP,M);let Q;if(He){Xe&&dt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,Be,$e.width,$e.height);for(let te=0;te<6;te++){Q=ye[te].mipmaps;for(let he=0;he<Q.length;he++){const Ne=Q[he];M.format!==jn?ze!==null?Xe?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,Ne.width,Ne.height,ze,Ne.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,Be,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,Ne.width,Ne.height,ze,Me,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,Be,Ne.width,Ne.height,0,ze,Me,Ne.data)}}}else{if(Q=M.mipmaps,Xe&&dt){Q.length>0&&ce++;const te=be(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,Be,te.width,te.height)}for(let te=0;te<6;te++)if(ue){Xe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ye[te].width,ye[te].height,ze,Me,ye[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Be,ye[te].width,ye[te].height,0,ze,Me,ye[te].data);for(let he=0;he<Q.length;he++){const qe=Q[he].image[te].image;Xe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,qe.width,qe.height,ze,Me,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,Be,qe.width,qe.height,0,ze,Me,qe.data)}}else{Xe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ze,Me,ye[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Be,ze,Me,ye[te]);for(let he=0;he<Q.length;he++){const Ne=Q[he];Xe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,ze,Me,Ne.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,Be,ze,Me,Ne.image[te])}}}u(M)&&f(t.TEXTURE_CUBE_MAP),ie.__version=le.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function F(R,M,B,re,le,ie){const De=s.convert(B.format,B.colorSpace),me=s.convert(B.type),Se=_(B.internalFormat,De,me,B.colorSpace);if(!i.get(M).__hasExternalTextures){const ue=Math.max(1,M.width>>ie),ye=Math.max(1,M.height>>ie);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,ie,Se,ue,ye,M.depth,0,De,me,null):n.texImage2D(le,ie,Se,ue,ye,0,De,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Z(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,le,i.get(B).__webglTexture,0,de(M)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,le,i.get(B).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function $(R,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const re=M.depthTexture,le=re&&re.isDepthTexture?re.type:null,ie=v(M.stencilBuffer,le),De=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=de(M);Z(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,ie,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,ie,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ie,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,De,t.RENDERBUFFER,R)}else{const re=M.textures;for(let le=0;le<re.length;le++){const ie=re[le],De=s.convert(ie.format,ie.colorSpace),me=s.convert(ie.type),Se=_(ie.internalFormat,De,me,ie.colorSpace),He=de(M);B&&Z(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,He,Se,M.width,M.height):Z(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He,Se,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Se,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ne(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,le=de(M);if(M.depthTexture.format===Ps)Z(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(M.depthTexture.format===Gs)Z(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ee(R){const M=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ne(M.__webglFramebuffer,R)}else if(B){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=t.createRenderbuffer(),$(M.__webglDepthbuffer[re],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),$(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(R,M,B){const re=i.get(R);M!==void 0&&F(re.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Ee(R)}function Ae(R){const M=R.texture,B=i.get(R),re=i.get(M);R.addEventListener("dispose",T);const le=R.textures,ie=R.isWebGLCubeRenderTarget===!0,De=le.length>1;if(De||(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=M.version,o.memory.textures++),ie){B.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[me]=[];for(let Se=0;Se<M.mipmaps.length;Se++)B.__webglFramebuffer[me][Se]=t.createFramebuffer()}else B.__webglFramebuffer[me]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)B.__webglFramebuffer[me]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(De)for(let me=0,Se=le.length;me<Se;me++){const He=i.get(le[me]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Z(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let me=0;me<le.length;me++){const Se=le[me];B.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[me]);const He=s.convert(Se.format,Se.colorSpace),ue=s.convert(Se.type),ye=_(Se.internalFormat,He,ue,Se.colorSpace,R.isXRRenderTarget===!0),$e=de(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,ye,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,B.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),$(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),ae(t.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)F(B.__webglFramebuffer[me][Se],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se);else F(B.__webglFramebuffer[me],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);u(M)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let me=0,Se=le.length;me<Se;me++){const He=le[me],ue=i.get(He);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),ae(t.TEXTURE_2D,He),F(B.__webglFramebuffer,R,He,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),u(He)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,re.__webglTexture),ae(me,M),M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)F(B.__webglFramebuffer[Se],R,M,t.COLOR_ATTACHMENT0,me,Se);else F(B.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,me,0);u(M)&&f(me),n.unbindTexture()}R.depthBuffer&&Ee(R)}function Oe(R){const M=R.textures;for(let B=0,re=M.length;B<re;B++){const le=M[B];if(u(le)){const ie=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,De=i.get(le).__webglTexture;n.bindTexture(ie,De),f(ie),n.unbindTexture()}}}const L=[],rt=[];function oe(R){if(R.samples>0){if(Z(R)===!1){const M=R.textures,B=R.width,re=R.height;let le=t.COLOR_BUFFER_BIT;const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,De=i.get(R),me=M.length>1;if(me)for(let Se=0;Se<M.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Se=0;Se<M.length;Se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,De.__webglColorRenderbuffer[Se]);const He=i.get(M[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,He,0)}t.blitFramebuffer(0,0,B,re,0,0,B,re,le,t.NEAREST),l===!0&&(L.length=0,rt.length=0,L.push(t.COLOR_ATTACHMENT0+Se),R.depthBuffer&&R.resolveDepthBuffer===!1&&(L.push(ie),rt.push(ie),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,rt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let Se=0;Se<M.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,De.__webglColorRenderbuffer[Se]);const He=i.get(M[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function de(R){return Math.min(r.maxSamples,R.samples)}function Z(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ue(R){const M=o.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function Re(R,M){const B=R.colorSpace,re=R.format,le=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==ur&&B!==Gi&&(nt.getTransfer(B)===at?(re!==jn||le!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=P,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=q,this.rebindTextures=Ce,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=F,this.useMultisampledRTT=Z}function dT(t,e){function n(i,r=Gi){let s;const o=nt.getTransfer(r);if(i===Ai)return t.UNSIGNED_BYTE;if(i===th)return t.UNSIGNED_SHORT_4_4_4_4;if(i===nh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===sv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===iv)return t.BYTE;if(i===rv)return t.SHORT;if(i===jo)return t.UNSIGNED_SHORT;if(i===eh)return t.INT;if(i===Nr)return t.UNSIGNED_INT;if(i===ii)return t.FLOAT;if(i===na)return t.HALF_FLOAT;if(i===ov)return t.ALPHA;if(i===av)return t.RGB;if(i===jn)return t.RGBA;if(i===lv)return t.LUMINANCE;if(i===uv)return t.LUMINANCE_ALPHA;if(i===Ps)return t.DEPTH_COMPONENT;if(i===Gs)return t.DEPTH_STENCIL;if(i===ih)return t.RED;if(i===rh)return t.RED_INTEGER;if(i===cv)return t.RG;if(i===sh)return t.RG_INTEGER;if(i===oh)return t.RGBA_INTEGER;if(i===ul||i===cl||i===fl||i===dl)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ul)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ul)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Af||i===Cf||i===Rf||i===bf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Af)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pf||i===Lf||i===Df)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Pf||i===Lf)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Df)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===If||i===Uf||i===Nf||i===Ff||i===Of||i===kf||i===zf||i===Bf||i===Hf||i===Vf||i===Gf||i===Wf||i===Xf||i===jf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===If)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ff)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Of)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hl||i===Yf||i===$f)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===hl)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$f)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fv||i===qf||i===Kf||i===Zf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===hl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class hT extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $a extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pT={type:"move"};class Mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $a,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $a,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $a,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const u=n.getJointPose(m,i),f=this._getHandJoint(c,m);u!==null&&(f.matrix.fromArray(u.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=u.radius),f.visible=u!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=d.position.distanceTo(p.position),g=.02,x=.005;c.inputState.pinching&&h>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new $a;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const mT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gT=`
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

}`;class vT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Qt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ci({vertexShader:mT,fragmentShader:gT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _n(new Or(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _T extends $s{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,p=null,h=null,g=null,x=null;const m=new vT,u=n.getContextAttributes();let f=null,_=null;const v=[],S=[],b=new je;let T=null;const A=new bn;A.layers.enable(1),A.viewport=new bt;const C=new bn;C.layers.enable(2),C.viewport=new bt;const E=[A,C],y=new hT;y.layers.enable(1),y.layers.enable(2);let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let F=v[k];return F===void 0&&(F=new Mc,v[k]=F),F.getTargetRaySpace()},this.getControllerGrip=function(k){let F=v[k];return F===void 0&&(F=new Mc,v[k]=F),F.getGripSpace()},this.getHand=function(k){let F=v[k];return F===void 0&&(F=new Mc,v[k]=F),F.getHandSpace()};function z(k){const F=S.indexOf(k.inputSource);if(F===-1)return;const $=v[F];$!==void 0&&($.update(k.inputSource,k.frame,c||o),$.dispatchEvent({type:k.type,data:k.inputSource}))}function j(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",Y);for(let k=0;k<v.length;k++){const F=S[k];F!==null&&(S[k]=null,v[k].disconnect(F))}P=null,O=null,m.reset(),e.setRenderTarget(f),g=null,h=null,p=null,r=null,_=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",j),r.addEventListener("inputsourceschange",Y),u.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const F={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,F),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),_=new Fr(g.framebufferWidth,g.framebufferHeight,{format:jn,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil})}else{let F=null,$=null,ne=null;u.depth&&(ne=u.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,F=u.stencil?Gs:Ps,$=u.stencil?Vs:Nr);const Ee={colorFormat:n.RGBA8,depthFormat:ne,scaleFactor:s};p=new XRWebGLBinding(r,n),h=p.createProjectionLayer(Ee),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Fr(h.textureWidth,h.textureHeight,{format:jn,type:Ai,depthTexture:new Cv(h.textureWidth,h.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(k){for(let F=0;F<k.removed.length;F++){const $=k.removed[F],ne=S.indexOf($);ne>=0&&(S[ne]=null,v[ne].disconnect($))}for(let F=0;F<k.added.length;F++){const $=k.added[F];let ne=S.indexOf($);if(ne===-1){for(let Ce=0;Ce<v.length;Ce++)if(Ce>=S.length){S.push($),ne=Ce;break}else if(S[Ce]===null){S[Ce]=$,ne=Ce;break}if(ne===-1)break}const Ee=v[ne];Ee&&Ee.connect($)}}const W=new H,q=new H;function D(k,F,$){W.setFromMatrixPosition(F.matrixWorld),q.setFromMatrixPosition($.matrixWorld);const ne=W.distanceTo(q),Ee=F.projectionMatrix.elements,Ce=$.projectionMatrix.elements,Ae=Ee[14]/(Ee[10]-1),Oe=Ee[14]/(Ee[10]+1),L=(Ee[9]+1)/Ee[5],rt=(Ee[9]-1)/Ee[5],oe=(Ee[8]-1)/Ee[0],de=(Ce[8]+1)/Ce[0],Z=Ae*oe,Ue=Ae*de,Re=ne/(-oe+de),be=Re*-oe;F.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(be),k.translateZ(Re),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const R=Ae+Re,M=Oe+Re,B=Z-be,re=Ue+(ne-be),le=L*Oe/M*R,ie=rt*Oe/M*R;k.projectionMatrix.makePerspective(B,re,le,ie,R,M),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function K(k,F){F===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(F.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;m.texture!==null&&(k.near=m.depthNear,k.far=m.depthFar),y.near=C.near=A.near=k.near,y.far=C.far=A.far=k.far,(P!==y.near||O!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,O=y.far,A.near=P,A.far=O,C.near=P,C.far=O,A.updateProjectionMatrix(),C.updateProjectionMatrix(),k.updateProjectionMatrix());const F=k.parent,$=y.cameras;K(y,F);for(let ne=0;ne<$.length;ne++)K($[ne],F);$.length===2?D(y,A,C):y.projectionMatrix.copy(A.projectionMatrix),J(k,y,F)};function J(k,F,$){$===null?k.matrix.copy(F.matrixWorld):(k.matrix.copy($.matrixWorld),k.matrix.invert(),k.matrix.multiply(F.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(F.projectionMatrix),k.projectionMatrixInverse.copy(F.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Qf*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(y)};let ae=null;function ve(k,F){if(d=F.getViewerPose(c||o),x=F,d!==null){const $=d.views;g!==null&&(e.setRenderTargetFramebuffer(_,g.framebuffer),e.setRenderTarget(_));let ne=!1;$.length!==y.cameras.length&&(y.cameras.length=0,ne=!0);for(let Ce=0;Ce<$.length;Ce++){const Ae=$[Ce];let Oe=null;if(g!==null)Oe=g.getViewport(Ae);else{const rt=p.getViewSubImage(h,Ae);Oe=rt.viewport,Ce===0&&(e.setRenderTargetTextures(_,rt.colorTexture,h.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(_))}let L=E[Ce];L===void 0&&(L=new bn,L.layers.enable(Ce),L.viewport=new bt,E[Ce]=L),L.matrix.fromArray(Ae.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Ae.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Ce===0&&(y.matrix.copy(L.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ne===!0&&y.cameras.push(L)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const Ce=p.getDepthInformation($[0]);Ce&&Ce.isValid&&Ce.texture&&m.init(e,Ce,r.renderState)}}for(let $=0;$<v.length;$++){const ne=S[$],Ee=v[$];ne!==null&&Ee!==void 0&&Ee.update(ne,F,c||o)}ae&&ae(k,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),x=null}const ee=new Tv;ee.setAnimationLoop(ve),this.setAnimationLoop=function(k){ae=k},this.dispose=function(){}}}const gr=new ai,xT=new ut;function yT(t,e){function n(u,f){u.matrixAutoUpdate===!0&&u.updateMatrix(),f.value.copy(u.matrix)}function i(u,f){f.color.getRGB(u.fogColor.value,Mv(t)),f.isFog?(u.fogNear.value=f.near,u.fogFar.value=f.far):f.isFogExp2&&(u.fogDensity.value=f.density)}function r(u,f,_,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(u,f):f.isMeshToonMaterial?(s(u,f),p(u,f)):f.isMeshPhongMaterial?(s(u,f),d(u,f)):f.isMeshStandardMaterial?(s(u,f),h(u,f),f.isMeshPhysicalMaterial&&g(u,f,S)):f.isMeshMatcapMaterial?(s(u,f),x(u,f)):f.isMeshDepthMaterial?s(u,f):f.isMeshDistanceMaterial?(s(u,f),m(u,f)):f.isMeshNormalMaterial?s(u,f):f.isLineBasicMaterial?(o(u,f),f.isLineDashedMaterial&&a(u,f)):f.isPointsMaterial?l(u,f,_,v):f.isSpriteMaterial?c(u,f):f.isShadowMaterial?(u.color.value.copy(f.color),u.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(u,f){u.opacity.value=f.opacity,f.color&&u.diffuse.value.copy(f.color),f.emissive&&u.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(u.map.value=f.map,n(f.map,u.mapTransform)),f.alphaMap&&(u.alphaMap.value=f.alphaMap,n(f.alphaMap,u.alphaMapTransform)),f.bumpMap&&(u.bumpMap.value=f.bumpMap,n(f.bumpMap,u.bumpMapTransform),u.bumpScale.value=f.bumpScale,f.side===cn&&(u.bumpScale.value*=-1)),f.normalMap&&(u.normalMap.value=f.normalMap,n(f.normalMap,u.normalMapTransform),u.normalScale.value.copy(f.normalScale),f.side===cn&&u.normalScale.value.negate()),f.displacementMap&&(u.displacementMap.value=f.displacementMap,n(f.displacementMap,u.displacementMapTransform),u.displacementScale.value=f.displacementScale,u.displacementBias.value=f.displacementBias),f.emissiveMap&&(u.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,u.emissiveMapTransform)),f.specularMap&&(u.specularMap.value=f.specularMap,n(f.specularMap,u.specularMapTransform)),f.alphaTest>0&&(u.alphaTest.value=f.alphaTest);const _=e.get(f),v=_.envMap,S=_.envMapRotation;v&&(u.envMap.value=v,gr.copy(S),gr.x*=-1,gr.y*=-1,gr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),u.envMapRotation.value.setFromMatrix4(xT.makeRotationFromEuler(gr)),u.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=f.reflectivity,u.ior.value=f.ior,u.refractionRatio.value=f.refractionRatio),f.lightMap&&(u.lightMap.value=f.lightMap,u.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,u.lightMapTransform)),f.aoMap&&(u.aoMap.value=f.aoMap,u.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,u.aoMapTransform))}function o(u,f){u.diffuse.value.copy(f.color),u.opacity.value=f.opacity,f.map&&(u.map.value=f.map,n(f.map,u.mapTransform))}function a(u,f){u.dashSize.value=f.dashSize,u.totalSize.value=f.dashSize+f.gapSize,u.scale.value=f.scale}function l(u,f,_,v){u.diffuse.value.copy(f.color),u.opacity.value=f.opacity,u.size.value=f.size*_,u.scale.value=v*.5,f.map&&(u.map.value=f.map,n(f.map,u.uvTransform)),f.alphaMap&&(u.alphaMap.value=f.alphaMap,n(f.alphaMap,u.alphaMapTransform)),f.alphaTest>0&&(u.alphaTest.value=f.alphaTest)}function c(u,f){u.diffuse.value.copy(f.color),u.opacity.value=f.opacity,u.rotation.value=f.rotation,f.map&&(u.map.value=f.map,n(f.map,u.mapTransform)),f.alphaMap&&(u.alphaMap.value=f.alphaMap,n(f.alphaMap,u.alphaMapTransform)),f.alphaTest>0&&(u.alphaTest.value=f.alphaTest)}function d(u,f){u.specular.value.copy(f.specular),u.shininess.value=Math.max(f.shininess,1e-4)}function p(u,f){f.gradientMap&&(u.gradientMap.value=f.gradientMap)}function h(u,f){u.metalness.value=f.metalness,f.metalnessMap&&(u.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,u.metalnessMapTransform)),u.roughness.value=f.roughness,f.roughnessMap&&(u.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,u.roughnessMapTransform)),f.envMap&&(u.envMapIntensity.value=f.envMapIntensity)}function g(u,f,_){u.ior.value=f.ior,f.sheen>0&&(u.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),u.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(u.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,u.sheenColorMapTransform)),f.sheenRoughnessMap&&(u.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,u.sheenRoughnessMapTransform))),f.clearcoat>0&&(u.clearcoat.value=f.clearcoat,u.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(u.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,u.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(u.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&u.clearcoatNormalScale.value.negate())),f.dispersion>0&&(u.dispersion.value=f.dispersion),f.iridescence>0&&(u.iridescence.value=f.iridescence,u.iridescenceIOR.value=f.iridescenceIOR,u.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(u.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,u.iridescenceMapTransform)),f.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),f.transmission>0&&(u.transmission.value=f.transmission,u.transmissionSamplerMap.value=_.texture,u.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(u.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,u.transmissionMapTransform)),u.thickness.value=f.thickness,f.thicknessMap&&(u.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=f.attenuationDistance,u.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(u.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(u.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=f.specularIntensity,u.specularColor.value.copy(f.specularColor),f.specularColorMap&&(u.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,u.specularColorMapTransform)),f.specularIntensityMap&&(u.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,u.specularIntensityMapTransform))}function x(u,f){f.matcap&&(u.matcap.value=f.matcap)}function m(u,f){const _=e.get(f).light;u.referencePosition.value.setFromMatrixPosition(_.matrixWorld),u.nearDistance.value=_.shadow.camera.near,u.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ST(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function c(_,v){let S=r[_.id];S===void 0&&(x(_),S=d(_),r[_.id]=S,_.addEventListener("dispose",u));const b=v.program;i.updateUBOMapping(_,b);const T=e.render.frame;s[_.id]!==T&&(h(_),s[_.id]=T)}function d(_){const v=p();_.__bindingPointIndex=v;const S=t.createBuffer(),b=_.__size,T=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function p(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],S=_.uniforms,b=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,A=S.length;T<A;T++){const C=Array.isArray(S[T])?S[T]:[S[T]];for(let E=0,y=C.length;E<y;E++){const P=C[E];if(g(P,T,E,b)===!0){const O=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let j=0;for(let Y=0;Y<z.length;Y++){const W=z[Y],q=m(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,O+j,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,j),j+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(_,v,S,b){const T=_.value,A=v+"_"+S;if(b[A]===void 0)return typeof T=="number"||typeof T=="boolean"?b[A]=T:b[A]=T.clone(),!0;{const C=b[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return b[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function x(_){const v=_.uniforms;let S=0;const b=16;for(let A=0,C=v.length;A<C;A++){const E=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,P=E.length;y<P;y++){const O=E[y],z=Array.isArray(O.value)?O.value:[O.value];for(let j=0,Y=z.length;j<Y;j++){const W=z[j],q=m(W),D=S%b;D!==0&&b-D<q.boundary&&(S+=b-D),O.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=q.storage}}}const T=S%b;return T>0&&(S+=b-T),_.__size=S,_.__cache={},this}function m(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function u(_){const v=_.target;v.removeEventListener("dispose",u);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class MT{constructor(e={}){const{canvas:n=hS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,u=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vn,this.toneMapping=tr,this.toneMappingExposure=1;const v=this;let S=!1,b=0,T=0,A=null,C=-1,E=null;const y=new bt,P=new bt;let O=null;const z=new We(0);let j=0,Y=n.width,W=n.height,q=1,D=null,K=null;const J=new bt(0,0,Y,W),ae=new bt(0,0,Y,W);let ve=!1;const ee=new uh;let k=!1,F=!1;const $=new ut,ne=new H,Ee=new bt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ae=!1;function Oe(){return A===null?q:1}let L=i;function rt(w,U){return n.getContext(w,U)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qd}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",te,!1),n.addEventListener("webglcontextcreationerror",he,!1),L===null){const U="webgl2";if(L=rt(U,w),L===null)throw rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let oe,de,Z,Ue,Re,be,R,M,B,re,le,ie,De,me,Se,He,ue,ye,$e,ze,Me,Be,Xe,dt;function I(){oe=new bE(L),oe.init(),Be=new dT(L,oe),de=new EE(L,oe,e,Be),Z=new uT(L),Ue=new DE(L),Re=new qw,be=new fT(L,oe,Z,Re,de,Be,Ue),R=new TE(v),M=new RE(v),B=new zS(L),Xe=new SE(L,B),re=new PE(L,B,Ue,Xe),le=new UE(L,re,B,Ue),$e=new IE(L,de,be),He=new wE(Re),ie=new $w(v,R,M,oe,de,Xe,He),De=new yT(v,Re),me=new Zw,Se=new iT(oe),ye=new yE(v,R,M,Z,le,h,l),ue=new lT(v,le,de),dt=new ST(L,Ue,de,Z),ze=new ME(L,oe,Ue),Me=new LE(L,oe,Ue),Ue.programs=ie.programs,v.capabilities=de,v.extensions=oe,v.properties=Re,v.renderLists=me,v.shadowMap=ue,v.state=Z,v.info=Ue}I();const ce=new _T(v,L);this.xr=ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(Y,W,!1))},this.getSize=function(w){return w.set(Y,W)},this.setSize=function(w,U,V=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,W=U,n.width=Math.floor(w*q),n.height=Math.floor(U*q),V===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(Y*q,W*q).floor()},this.setDrawingBufferSize=function(w,U,V){Y=w,W=U,q=V,n.width=Math.floor(w*V),n.height=Math.floor(U*V),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,U,V,G){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,U,V,G),Z.viewport(y.copy(J).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(ae)},this.setScissor=function(w,U,V,G){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,U,V,G),Z.scissor(P.copy(ae).multiplyScalar(q).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(w){Z.setScissorTest(ve=w)},this.setOpaqueSort=function(w){D=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(w=!0,U=!0,V=!0){let G=0;if(w){let N=!1;if(A!==null){const fe=A.texture.format;N=fe===oh||fe===sh||fe===rh}if(N){const fe=A.texture.type,ge=fe===Ai||fe===Nr||fe===jo||fe===Vs||fe===th||fe===nh,we=ye.getClearColor(),Te=ye.getClearAlpha(),Fe=we.r,ke=we.g,Ie=we.b;ge?(g[0]=Fe,g[1]=ke,g[2]=Ie,g[3]=Te,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=Fe,x[1]=ke,x[2]=Ie,x[3]=Te,L.clearBufferiv(L.COLOR,0,x))}else G|=L.COLOR_BUFFER_BIT}U&&(G|=L.DEPTH_BUFFER_BIT),V&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",te,!1),n.removeEventListener("webglcontextcreationerror",he,!1),me.dispose(),Se.dispose(),Re.dispose(),R.dispose(),M.dispose(),le.dispose(),Xe.dispose(),dt.dispose(),ie.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Zn),ce.removeEventListener("sessionend",mh),cr.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=Ue.autoReset,U=ue.enabled,V=ue.autoUpdate,G=ue.needsUpdate,N=ue.type;I(),Ue.autoReset=w,ue.enabled=U,ue.autoUpdate=V,ue.needsUpdate=G,ue.type=N}function he(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ne(w){const U=w.target;U.removeEventListener("dispose",Ne),qe(U)}function qe(w){wt(w),Re.remove(w)}function wt(w){const U=Re.get(w).programs;U!==void 0&&(U.forEach(function(V){ie.releaseProgram(V)}),w.isShaderMaterial&&ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,V,G,N,fe){U===null&&(U=Ce);const ge=N.isMesh&&N.matrixWorld.determinant()<0,we=Vv(w,U,V,G,N);Z.setMaterial(G,ge);let Te=V.index,Fe=1;if(G.wireframe===!0){if(Te=re.getWireframeAttribute(V),Te===void 0)return;Fe=2}const ke=V.drawRange,Ie=V.attributes.position;let Qe=ke.start*Fe,xt=(ke.start+ke.count)*Fe;fe!==null&&(Qe=Math.max(Qe,fe.start*Fe),xt=Math.min(xt,(fe.start+fe.count)*Fe)),Te!==null?(Qe=Math.max(Qe,0),xt=Math.min(xt,Te.count)):Ie!=null&&(Qe=Math.max(Qe,0),xt=Math.min(xt,Ie.count));const yt=xt-Qe;if(yt<0||yt===1/0)return;Xe.setup(N,G,we,V,Te);let fn,Je=ze;if(Te!==null&&(fn=B.get(Te),Je=Me,Je.setIndex(fn)),N.isMesh)G.wireframe===!0?(Z.setLineWidth(G.wireframeLinewidth*Oe()),Je.setMode(L.LINES)):Je.setMode(L.TRIANGLES);else if(N.isLine){let Pe=G.linewidth;Pe===void 0&&(Pe=1),Z.setLineWidth(Pe*Oe()),N.isLineSegments?Je.setMode(L.LINES):N.isLineLoop?Je.setMode(L.LINE_LOOP):Je.setMode(L.LINE_STRIP)}else N.isPoints?Je.setMode(L.POINTS):N.isSprite&&Je.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Je.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))Je.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Pe=N._multiDrawStarts,kt=N._multiDrawCounts,et=N._multiDrawCount,Nn=Te?B.get(Te).bytesPerElement:1,Hr=Re.get(G).currentProgram.getUniforms();for(let dn=0;dn<et;dn++)Hr.setValue(L,"_gl_DrawID",dn),Je.render(Pe[dn]/Nn,kt[dn])}else if(N.isInstancedMesh)Je.renderInstances(Qe,yt,N.count);else if(V.isInstancedBufferGeometry){const Pe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,kt=Math.min(V.instanceCount,Pe);Je.renderInstances(Qe,yt,kt)}else Je.render(Qe,yt)};function Ot(w,U,V){w.transparent===!0&&w.side===Wn&&w.forceSinglePass===!1?(w.side=cn,w.needsUpdate=!0,la(w,U,V),w.side=sr,w.needsUpdate=!0,la(w,U,V),w.side=Wn):la(w,U,V)}this.compile=function(w,U,V=null){V===null&&(V=w),u=Se.get(V),u.init(U),_.push(u),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),w!==V&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();const G=new Set;return w.traverse(function(N){const fe=N.material;if(fe)if(Array.isArray(fe))for(let ge=0;ge<fe.length;ge++){const we=fe[ge];Ot(we,V,N),G.add(we)}else Ot(fe,V,N),G.add(fe)}),_.pop(),u=null,G},this.compileAsync=function(w,U,V=null){const G=this.compile(w,U,V);return new Promise(N=>{function fe(){if(G.forEach(function(ge){Re.get(ge).currentProgram.isReady()&&G.delete(ge)}),G.size===0){N(w);return}setTimeout(fe,10)}oe.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ze=null;function li(w){Ze&&Ze(w)}function Zn(){cr.stop()}function mh(){cr.start()}const cr=new Tv;cr.setAnimationLoop(li),typeof self<"u"&&cr.setContext(self),this.setAnimationLoop=function(w){Ze=w,ce.setAnimationLoop(w),w===null?cr.stop():cr.start()},ce.addEventListener("sessionstart",Zn),ce.addEventListener("sessionend",mh),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,A),u=Se.get(w,_.length),u.init(U),_.push(u),$.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix($),F=this.localClippingEnabled,k=He.init(this.clippingPlanes,F),m=me.get(w,f.length),m.init(),f.push(m),ce.enabled===!0&&ce.isPresenting===!0){const fe=v.xr.getDepthSensingMesh();fe!==null&&xu(fe,U,-1/0,v.sortObjects)}xu(w,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(D,K),Ae=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ae&&ye.addToRenderList(m,w),this.info.render.frame++,k===!0&&He.beginShadows();const V=u.state.shadowsArray;ue.render(V,w,U),k===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,N=m.transmissive;if(u.setupLights(),U.isArrayCamera){const fe=U.cameras;if(N.length>0)for(let ge=0,we=fe.length;ge<we;ge++){const Te=fe[ge];vh(G,N,w,Te)}Ae&&ye.render(w);for(let ge=0,we=fe.length;ge<we;ge++){const Te=fe[ge];gh(m,w,Te,Te.viewport)}}else N.length>0&&vh(G,N,w,U),Ae&&ye.render(w),gh(m,w,U);A!==null&&(be.updateMultisampleRenderTarget(A),be.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,U),Xe.resetDefaultState(),C=-1,E=null,_.pop(),_.length>0?(u=_[_.length-1],k===!0&&He.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,f.pop(),f.length>0?m=f[f.length-1]:m=null};function xu(w,U,V,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ee.intersectsSprite(w)){G&&Ee.setFromMatrixPosition(w.matrixWorld).applyMatrix4($);const ge=le.update(w),we=w.material;we.visible&&m.push(w,ge,we,V,Ee.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ee.intersectsObject(w))){const ge=le.update(w),we=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ee.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ee.copy(ge.boundingSphere.center)),Ee.applyMatrix4(w.matrixWorld).applyMatrix4($)),Array.isArray(we)){const Te=ge.groups;for(let Fe=0,ke=Te.length;Fe<ke;Fe++){const Ie=Te[Fe],Qe=we[Ie.materialIndex];Qe&&Qe.visible&&m.push(w,ge,Qe,V,Ee.z,Ie)}}else we.visible&&m.push(w,ge,we,V,Ee.z,null)}}const fe=w.children;for(let ge=0,we=fe.length;ge<we;ge++)xu(fe[ge],U,V,G)}function gh(w,U,V,G){const N=w.opaque,fe=w.transmissive,ge=w.transparent;u.setupLightsView(V),k===!0&&He.setGlobalState(v.clippingPlanes,V),G&&Z.viewport(y.copy(G)),N.length>0&&aa(N,U,V),fe.length>0&&aa(fe,U,V),ge.length>0&&aa(ge,U,V),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function vh(w,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new Fr(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?na:Ai,minFilter:Cr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const fe=u.state.transmissionRenderTarget[G.id],ge=G.viewport||y;fe.setSize(ge.z,ge.w);const we=v.getRenderTarget();v.setRenderTarget(fe),v.getClearColor(z),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),Ae?ye.render(V):v.clear();const Te=v.toneMapping;v.toneMapping=tr;const Fe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),k===!0&&He.setGlobalState(v.clippingPlanes,G),aa(w,V,G),be.updateMultisampleRenderTarget(fe),be.updateRenderTargetMipmap(fe),oe.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ie=0,Qe=U.length;Ie<Qe;Ie++){const xt=U[Ie],yt=xt.object,fn=xt.geometry,Je=xt.material,Pe=xt.group;if(Je.side===Wn&&yt.layers.test(G.layers)){const kt=Je.side;Je.side=cn,Je.needsUpdate=!0,_h(yt,V,G,fn,Je,Pe),Je.side=kt,Je.needsUpdate=!0,ke=!0}}ke===!0&&(be.updateMultisampleRenderTarget(fe),be.updateRenderTargetMipmap(fe))}v.setRenderTarget(we),v.setClearColor(z,j),Fe!==void 0&&(G.viewport=Fe),v.toneMapping=Te}function aa(w,U,V){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,fe=w.length;N<fe;N++){const ge=w[N],we=ge.object,Te=ge.geometry,Fe=G===null?ge.material:G,ke=ge.group;we.layers.test(V.layers)&&_h(we,U,V,Te,Fe,ke)}}function _h(w,U,V,G,N,fe){w.onBeforeRender(v,U,V,G,N,fe),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.transparent===!0&&N.side===Wn&&N.forceSinglePass===!1?(N.side=cn,N.needsUpdate=!0,v.renderBufferDirect(V,U,G,N,w,fe),N.side=sr,N.needsUpdate=!0,v.renderBufferDirect(V,U,G,N,w,fe),N.side=Wn):v.renderBufferDirect(V,U,G,N,w,fe),w.onAfterRender(v,U,V,G,N,fe)}function la(w,U,V){U.isScene!==!0&&(U=Ce);const G=Re.get(w),N=u.state.lights,fe=u.state.shadowsArray,ge=N.state.version,we=ie.getParameters(w,N.state,fe,U,V),Te=ie.getProgramCacheKey(we);let Fe=G.programs;G.environment=w.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(w.isMeshStandardMaterial?M:R).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",Ne),Fe=new Map,G.programs=Fe);let ke=Fe.get(Te);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===ge)return yh(w,we),ke}else we.uniforms=ie.getUniforms(w),w.onBeforeCompile(we,v),ke=ie.acquireProgram(we,Te),Fe.set(Te,ke),G.uniforms=we.uniforms;const Ie=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=He.uniform),yh(w,we),G.needsLights=Wv(w),G.lightsStateVersion=ge,G.needsLights&&(Ie.ambientLightColor.value=N.state.ambient,Ie.lightProbe.value=N.state.probe,Ie.directionalLights.value=N.state.directional,Ie.directionalLightShadows.value=N.state.directionalShadow,Ie.spotLights.value=N.state.spot,Ie.spotLightShadows.value=N.state.spotShadow,Ie.rectAreaLights.value=N.state.rectArea,Ie.ltc_1.value=N.state.rectAreaLTC1,Ie.ltc_2.value=N.state.rectAreaLTC2,Ie.pointLights.value=N.state.point,Ie.pointLightShadows.value=N.state.pointShadow,Ie.hemisphereLights.value=N.state.hemi,Ie.directionalShadowMap.value=N.state.directionalShadowMap,Ie.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ie.spotShadowMap.value=N.state.spotShadowMap,Ie.spotLightMatrix.value=N.state.spotLightMatrix,Ie.spotLightMap.value=N.state.spotLightMap,Ie.pointShadowMap.value=N.state.pointShadowMap,Ie.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=ke,G.uniformsList=null,ke}function xh(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=pl.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function yh(w,U){const V=Re.get(w);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Vv(w,U,V,G,N){U.isScene!==!0&&(U=Ce),be.resetTextureUnits();const fe=U.fog,ge=G.isMeshStandardMaterial?U.environment:null,we=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ur,Te=(G.isMeshStandardMaterial?M:R).get(G.envMap||ge),Fe=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ke=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ie=!!V.morphAttributes.position,Qe=!!V.morphAttributes.normal,xt=!!V.morphAttributes.color;let yt=tr;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(yt=v.toneMapping);const fn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Je=fn!==void 0?fn.length:0,Pe=Re.get(G),kt=u.state.lights;if(k===!0&&(F===!0||w!==E)){const wn=w===E&&G.id===C;He.setState(G,w,wn)}let et=!1;G.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==kt.state.version||Pe.outputColorSpace!==we||N.isBatchedMesh&&Pe.batching===!1||!N.isBatchedMesh&&Pe.batching===!0||N.isBatchedMesh&&Pe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pe.instancing===!1||!N.isInstancedMesh&&Pe.instancing===!0||N.isSkinnedMesh&&Pe.skinning===!1||!N.isSkinnedMesh&&Pe.skinning===!0||N.isInstancedMesh&&Pe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pe.instancingMorph===!1&&N.morphTexture!==null||Pe.envMap!==Te||G.fog===!0&&Pe.fog!==fe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==He.numPlanes||Pe.numIntersection!==He.numIntersection)||Pe.vertexAlphas!==Fe||Pe.vertexTangents!==ke||Pe.morphTargets!==Ie||Pe.morphNormals!==Qe||Pe.morphColors!==xt||Pe.toneMapping!==yt||Pe.morphTargetsCount!==Je)&&(et=!0):(et=!0,Pe.__version=G.version);let Nn=Pe.currentProgram;et===!0&&(Nn=la(G,U,N));let Hr=!1,dn=!1,yu=!1;const Tt=Nn.getUniforms(),Pi=Pe.uniforms;if(Z.useProgram(Nn.program)&&(Hr=!0,dn=!0,yu=!0),G.id!==C&&(C=G.id,dn=!0),Hr||E!==w){Tt.setValue(L,"projectionMatrix",w.projectionMatrix),Tt.setValue(L,"viewMatrix",w.matrixWorldInverse);const wn=Tt.map.cameraPosition;wn!==void 0&&wn.setValue(L,ne.setFromMatrixPosition(w.matrixWorld)),de.logarithmicDepthBuffer&&Tt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Tt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,dn=!0,yu=!0)}if(N.isSkinnedMesh){Tt.setOptional(L,N,"bindMatrix"),Tt.setOptional(L,N,"bindMatrixInverse");const wn=N.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Tt.setValue(L,"boneTexture",wn.boneTexture,be))}N.isBatchedMesh&&(Tt.setOptional(L,N,"batchingTexture"),Tt.setValue(L,"batchingTexture",N._matricesTexture,be),Tt.setOptional(L,N,"batchingIdTexture"),Tt.setValue(L,"batchingIdTexture",N._indirectTexture,be),Tt.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&Tt.setValue(L,"batchingColorTexture",N._colorsTexture,be));const Su=V.morphAttributes;if((Su.position!==void 0||Su.normal!==void 0||Su.color!==void 0)&&$e.update(N,V,Nn),(dn||Pe.receiveShadow!==N.receiveShadow)&&(Pe.receiveShadow=N.receiveShadow,Tt.setValue(L,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Pi.envMap.value=Te,Pi.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Pi.envMapIntensity.value=U.environmentIntensity),dn&&(Tt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&Gv(Pi,yu),fe&&G.fog===!0&&De.refreshFogUniforms(Pi,fe),De.refreshMaterialUniforms(Pi,G,q,W,u.state.transmissionRenderTarget[w.id]),pl.upload(L,xh(Pe),Pi,be)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(pl.upload(L,xh(Pe),Pi,be),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Tt.setValue(L,"center",N.center),Tt.setValue(L,"modelViewMatrix",N.modelViewMatrix),Tt.setValue(L,"normalMatrix",N.normalMatrix),Tt.setValue(L,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const wn=G.uniformsGroups;for(let Mu=0,Xv=wn.length;Mu<Xv;Mu++){const Sh=wn[Mu];dt.update(Sh,Nn),dt.bind(Sh,Nn)}}return Nn}function Gv(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Wv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,U,V){Re.get(w.texture).__webglTexture=U,Re.get(w.depthTexture).__webglTexture=V;const G=Re.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const V=Re.get(w);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,V=0){A=w,b=U,T=V;let G=!0,N=null,fe=!1,ge=!1;if(w){const Te=Re.get(w);Te.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(L.FRAMEBUFFER,null),G=!1):Te.__webglFramebuffer===void 0?be.setupRenderTarget(w):Te.__hasExternalTextures&&be.rebindTextures(w,Re.get(w.texture).__webglTexture,Re.get(w.depthTexture).__webglTexture);const Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ge=!0);const ke=Re.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[U])?N=ke[U][V]:N=ke[U],fe=!0):w.samples>0&&be.useMultisampledRTT(w)===!1?N=Re.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?N=ke[V]:N=ke,y.copy(w.viewport),P.copy(w.scissor),O=w.scissorTest}else y.copy(J).multiplyScalar(q).floor(),P.copy(ae).multiplyScalar(q).floor(),O=ve;if(Z.bindFramebuffer(L.FRAMEBUFFER,N)&&G&&Z.drawBuffers(w,N),Z.viewport(y),Z.scissor(P),Z.setScissorTest(O),fe){const Te=Re.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Te.__webglTexture,V)}else if(ge){const Te=Re.get(w.texture),Fe=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.__webglTexture,V||0,Fe)}C=-1},this.readRenderTargetPixels=function(w,U,V,G,N,fe,ge){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){Z.bindFramebuffer(L.FRAMEBUFFER,we);try{const Te=w.texture,Fe=Te.format,ke=Te.type;if(!de.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&V>=0&&V<=w.height-N&&L.readPixels(U,V,G,N,Be.convert(Fe),Be.convert(ke),fe)}finally{const Te=A!==null?Re.get(A).__webglFramebuffer:null;Z.bindFramebuffer(L.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(w,U,V,G,N,fe,ge){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){Z.bindFramebuffer(L.FRAMEBUFFER,we);try{const Te=w.texture,Fe=Te.format,ke=Te.type;if(!de.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-G&&V>=0&&V<=w.height-N){const Ie=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ie),L.bufferData(L.PIXEL_PACK_BUFFER,fe.byteLength,L.STREAM_READ),L.readPixels(U,V,G,N,Be.convert(Fe),Be.convert(ke),0),L.flush();const Qe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await pS(L,Qe,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Ie),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,fe)}finally{L.deleteBuffer(Ie),L.deleteSync(Qe)}return fe}}finally{const Te=A!==null?Re.get(A).__webglFramebuffer:null;Z.bindFramebuffer(L.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(w,U=null,V=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-V),N=Math.floor(w.image.width*G),fe=Math.floor(w.image.height*G),ge=U!==null?U.x:0,we=U!==null?U.y:0;be.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,ge,we,N,fe),Z.unbindTexture()},this.copyTextureToTexture=function(w,U,V=null,G=null,N=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let fe,ge,we,Te,Fe,ke;V!==null?(fe=V.max.x-V.min.x,ge=V.max.y-V.min.y,we=V.min.x,Te=V.min.y):(fe=w.image.width,ge=w.image.height,we=0,Te=0),G!==null?(Fe=G.x,ke=G.y):(Fe=0,ke=0);const Ie=Be.convert(U.format),Qe=Be.convert(U.type);be.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const xt=L.getParameter(L.UNPACK_ROW_LENGTH),yt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),fn=L.getParameter(L.UNPACK_SKIP_PIXELS),Je=L.getParameter(L.UNPACK_SKIP_ROWS),Pe=L.getParameter(L.UNPACK_SKIP_IMAGES),kt=w.isCompressedTexture?w.mipmaps[N]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,kt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,kt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,we),L.pixelStorei(L.UNPACK_SKIP_ROWS,Te),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,Fe,ke,fe,ge,Ie,Qe,kt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,Fe,ke,kt.width,kt.height,Ie,kt.data):L.texSubImage2D(L.TEXTURE_2D,N,Fe,ke,fe,ge,Ie,Qe,kt),L.pixelStorei(L.UNPACK_ROW_LENGTH,xt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,fn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Je),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pe),N===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(w,U,V=null,G=null,N=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0);let fe,ge,we,Te,Fe,ke,Ie,Qe,xt;const yt=w.isCompressedTexture?w.mipmaps[N]:w.image;V!==null?(fe=V.max.x-V.min.x,ge=V.max.y-V.min.y,we=V.max.z-V.min.z,Te=V.min.x,Fe=V.min.y,ke=V.min.z):(fe=yt.width,ge=yt.height,we=yt.depth,Te=0,Fe=0,ke=0),G!==null?(Ie=G.x,Qe=G.y,xt=G.z):(Ie=0,Qe=0,xt=0);const fn=Be.convert(U.format),Je=Be.convert(U.type);let Pe;if(U.isData3DTexture)be.setTexture3D(U,0),Pe=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)be.setTexture2DArray(U,0),Pe=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const kt=L.getParameter(L.UNPACK_ROW_LENGTH),et=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Nn=L.getParameter(L.UNPACK_SKIP_PIXELS),Hr=L.getParameter(L.UNPACK_SKIP_ROWS),dn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,yt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Te),L.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ke),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Pe,N,Ie,Qe,xt,fe,ge,we,fn,Je,yt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Pe,N,Ie,Qe,xt,fe,ge,we,fn,yt.data):L.texSubImage3D(Pe,N,Ie,Qe,xt,fe,ge,we,fn,Je,yt),L.pixelStorei(L.UNPACK_ROW_LENGTH,kt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,et),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Nn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Hr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,dn),N===0&&U.generateMipmaps&&L.generateMipmap(Pe),Z.unbindTexture()},this.initRenderTarget=function(w){Re.get(w).__webglFramebuffer===void 0&&be.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?be.setTextureCube(w,0):w.isData3DTexture?be.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?be.setTexture2DArray(w,0):be.setTexture2D(w,0),Z.unbindTexture()},this.resetState=function(){b=0,T=0,A=null,Z.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ah?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===gu?"display-p3":"srgb"}}class fh{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=n,this.far=i}clone(){return new fh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ET extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class wT extends Qt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=on,d=on,p,h){super(null,o,a,l,c,d,r,s,p,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Am extends qn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new ut,Cm=new ut,qa=[],Rm=new Br,TT=new ut,uo=new _n,co=new sa;class nr extends _n{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Am(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,TT)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Br),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,os),Rm.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(Rm)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new sa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,os),co.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(co)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(uo.geometry=this.geometry,uo.material=this.material,uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),co.copy(this.boundingSphere),co.applyMatrix4(i),e.ray.intersectsSphere(co)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,os),Cm.multiplyMatrices(i,os),uo.matrixWorld=Cm,uo.raycast(e,qa);for(let o=0,a=qa.length;o<a;o++){const l=qa[o];l.instanceId=s,l.object=this,n.push(l)}qa.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Am(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new wT(new Float32Array(r*this.count),r,this.count,ih,ii));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ds extends bi{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],p=[],h=[],g=[];let x=0;const m=[],u=i/2;let f=0;_(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new yn(p,3)),this.setAttribute("normal",new yn(h,3)),this.setAttribute("uv",new yn(g,2));function _(){const S=new H,b=new H;let T=0;const A=(n-e)/i;for(let C=0;C<=s;C++){const E=[],y=C/s,P=y*(n-e)+e;for(let O=0;O<=r;O++){const z=O/r,j=z*l+a,Y=Math.sin(j),W=Math.cos(j);b.x=P*Y,b.y=-y*i+u,b.z=P*W,p.push(b.x,b.y,b.z),S.set(Y,A,W).normalize(),h.push(S.x,S.y,S.z),g.push(z,1-y),E.push(x++)}m.push(E)}for(let C=0;C<r;C++)for(let E=0;E<s;E++){const y=m[E][C],P=m[E+1][C],O=m[E+1][C+1],z=m[E][C+1];d.push(y,P,z),d.push(P,O,z),T+=6}c.addGroup(f,T,0),f+=T}function v(S){const b=x,T=new je,A=new H;let C=0;const E=S===!0?e:n,y=S===!0?1:-1;for(let O=1;O<=r;O++)p.push(0,u*y,0),h.push(0,y,0),g.push(.5,.5),x++;const P=x;for(let O=0;O<=r;O++){const j=O/r*l+a,Y=Math.cos(j),W=Math.sin(j);A.x=E*W,A.y=u*y,A.z=E*Y,p.push(A.x,A.y,A.z),h.push(0,y,0),T.x=Y*.5+.5,T.y=W*.5*y+.5,g.push(T.x,T.y),x++}for(let O=0;O<r;O++){const z=b+O,j=P+O;S===!0?d.push(j,j+1,z):d.push(j+1,j,z),C+=3}c.addGroup(f,C,S===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ro extends Ds{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ro(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _u extends bi{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new yn(s,3)),this.setAttribute("normal",new yn(s.slice(),3)),this.setAttribute("uv",new yn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const v=new H,S=new H,b=new H;for(let T=0;T<n.length;T+=3)g(n[T+0],v),g(n[T+1],S),g(n[T+2],b),l(v,S,b,_)}function l(_,v,S,b){const T=b+1,A=[];for(let C=0;C<=T;C++){A[C]=[];const E=_.clone().lerp(S,C/T),y=v.clone().lerp(S,C/T),P=T-C;for(let O=0;O<=P;O++)O===0&&C===T?A[C][O]=E:A[C][O]=E.clone().lerp(y,O/P)}for(let C=0;C<T;C++)for(let E=0;E<2*(T-C)-1;E++){const y=Math.floor(E/2);E%2===0?(h(A[C][y+1]),h(A[C+1][y]),h(A[C][y])):(h(A[C][y+1]),h(A[C+1][y+1]),h(A[C+1][y]))}}function c(_){const v=new H;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(_),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function d(){const _=new H;for(let v=0;v<s.length;v+=3){_.x=s[v+0],_.y=s[v+1],_.z=s[v+2];const S=u(_)/2/Math.PI+.5,b=f(_)/Math.PI+.5;o.push(S,1-b)}x(),p()}function p(){for(let _=0;_<o.length;_+=6){const v=o[_+0],S=o[_+2],b=o[_+4],T=Math.max(v,S,b),A=Math.min(v,S,b);T>.9&&A<.1&&(v<.2&&(o[_+0]+=1),S<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function h(_){s.push(_.x,_.y,_.z)}function g(_,v){const S=_*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function x(){const _=new H,v=new H,S=new H,b=new H,T=new je,A=new je,C=new je;for(let E=0,y=0;E<s.length;E+=9,y+=6){_.set(s[E+0],s[E+1],s[E+2]),v.set(s[E+3],s[E+4],s[E+5]),S.set(s[E+6],s[E+7],s[E+8]),T.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),C.set(o[y+4],o[y+5]),b.copy(_).add(v).add(S).divideScalar(3);const P=u(b);m(T,y+0,_,P),m(A,y+2,v,P),m(C,y+4,S,P)}}function m(_,v,S,b){b<0&&_.x===1&&(o[v]=_.x-1),S.x===0&&S.z===0&&(o[v]=b/2/Math.PI+.5)}function u(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _u(e.vertices,e.indices,e.radius,e.details)}}class $l extends _u{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new $l(e.radius,e.detail)}}class dh extends _u{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new dh(e.radius,e.detail)}}class hh extends oa{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dv,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dv extends vt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class AT extends Dv{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Ec=new ut,bm=new H,Pm=new H;class CT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uh,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;bm.setFromMatrixPosition(e.matrixWorld),n.position.copy(bm),Pm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Pm),n.updateMatrixWorld(),Ec.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class RT extends CT{constructor(){super(new Av(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lm extends Dv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new RT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Dm=new ut;class bT{constructor(e,n,i=0,r=1/0){this.ray=new _v(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new lh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Dm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dm),this}intersectObject(e,n=!0,i=[]){return ed(e,this,i,n),i.sort(Im),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ed(e[r],this,i,n);return i.sort(Im),i}}function Im(t,e){return t.distance-e.distance}function ed(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)ed(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qd);var Hm;const vi=(Hm=window.Telegram)==null?void 0:Hm.WebApp;try{vi==null||vi.ready(),vi==null||vi.expand()}catch{}const Um=(vi==null?void 0:vi.initData)||"";async function as(t,e){const n=!e,i=n?`${t}?initData=${encodeURIComponent(Um)}`:t,r=await fetch(i,{method:n?"GET":"POST",headers:{"Content-Type":"application/json"},body:n?void 0:JSON.stringify({...e,initData:Um})}),s=await r.json().catch(()=>({ok:!1,error:"Сеть"}));if(!r.ok||s.ok===!1)throw new Error(s.error||"Ошибка сервера");return s}const Ms={init:()=>as("/api/init"),state:()=>as("/api/state"),tops:()=>as("/api/tops"),attack:(t,e)=>as("/api/attack",{tileId:t,unitId:e}),build:(t,e)=>as("/api/build",{tileId:t,building:e}),openCase:t=>as("/api/case/open",{server:t})},ph=t=>`/files/${encodeURIComponent(t.server)}/${encodeURIComponent(t.file)}`,ft=800,Yt=600,PT=300,xe={bg:"#071018",surf:"#0e1b16",border:"#2b4232",accent:"#8b5cf6",red:"#ef4444",gold:"#f5c451",muted:"#6f8277",text:"#e6eee8",textD:"#a9b8ae"},St={meadow:{n:"Луг",e:"🌿",bonus:null,m:1,impassable:!1,top:7319118,side:4683567},forest:{n:"Лес",e:"🌲",bonus:"defense",m:1.22,impassable:!1,top:5607997,side:3695146},hills:{n:"Холмы",e:"⛰️",bonus:"defense",m:1.34,impassable:!1,top:7971915,side:5402676},field:{n:"Поля",e:"🌾",bonus:null,m:1,impassable:!1,top:13482314,side:9667118},swamp:{n:"Болота",e:"🪷",bonus:"air",m:1.18,impassable:!1,top:6787930,side:4482363},mountain:{n:"Высокие горы",e:"🏔️",bonus:"defense",m:1.6,impassable:!0,top:9278090,side:5659735},water:{n:"Море",e:"🌊",bonus:null,m:1,impassable:!0,top:933205,side:933205}},LT={attack:"Атака",defense:"Защита",air:"Воздух"},Nm={attack:"⚔️",defense:"🛡️",air:"🌪️"},tt=3.4,ql=ft*tt,Kl=Yt*tt,ml=ql/2,gl=Kl/2,Yo=.16,$o=.06,Iv=.035,_o=24,td=64,nd=45,Uv=320,wc=240,Nv=50,Tc=Math.tan(Nv/2*Math.PI/180),DT=t=>1.48-An((t-nd)/(Uv-nd),0,1)*.53,Ka=260,id=794407,Fv=220,Ov=2100,ki={barn:{n:"Амбар",i:"🏚️",cost:140,d:"+2 🪙/мин"},medbay:{n:"Медотсек",i:"⛑️",cost:160,d:"+8 HP юнитам/мин"},fort:{n:"Укрепления",i:"🛡️",cost:90,d:"+35% защиты клетки"},mine:{n:"Шахта",i:"⛏️",cost:200,d:"+4 🪙/мин"}},IT={field:["barn","medbay"],meadow:["fort"],hills:["mine"]},Fm=t=>t&&t.charAt(0).toUpperCase()+t.slice(1),An=(t,e,n)=>Math.max(e,Math.min(n,t)),kv=t=>{let e=0;for(let n=0;n<t.length;n++)e=e*31+t.charCodeAt(n)>>>0;return e%360/360},Ut=(t,e,n=0)=>{let i=t*374761393+e*668265263+n*69069|0;return i=(i^i>>>13)*1274126177,(i^i>>>16)>>>0},Zl=(t,e,n=0)=>Ut(t,e,n)%1e4/1e4,qo=(t,e,n,i)=>{const r=t/n,s=e/n,o=Math.floor(r),a=Math.floor(s),l=r-o,c=s-a,d=l*l*(3-2*l),p=c*c*(3-2*c),h=(g,x)=>Zl(g,x,i);return h(o,a)*(1-d)*(1-p)+h(o+1,a)*d*(1-p)+h(o,a+1)*(1-d)*p+h(o+1,a+1)*d*p},UT=(t,e)=>{const n=(e-ft/2)/(ft/2),i=(t-Yt/2)/(Yt/2),r=Math.sqrt(n*n+i*i),s=(qo(t,e,64,777)-.5)*.55+(qo(t,e,23,778)-.5)*.25;return r+s<.92},Ql=t=>Yo+t.elev+$o+Iv,oi=(t,e)=>({x:(t+.5)*tt-ml,z:(e+.5)*tt-gl}),NT=(t,e)=>{const n=Zl(t,e,10),i=Zl(t,e,22);return n<.11?"forest":n<.18?"field":n<.24?"swamp":n<.34&&i>.42?"hills":"meadow"},FT=(t,e,n)=>{const i=qo(e,n,9,31),r=qo(e,n,23,77);switch(t){case"forest":return .14+i*.18;case"field":return .08+i*.1;case"swamp":return .04+i*.05;case"hills":return .34+i*.42+r*.12;default:return .1+i*.16+r*.06}};function OT(){const t=[];for(let e=0;e<30;e++){const n=e<16;t.push({sr:18+Ut(e,3,900)%(Yt-36),sc:18+Ut(e,7,901)%(ft-36),ang:Ut(e,11,902)%1e3/1e3*Math.PI,rAlong:n?28+Ut(e,13,903)%48:13+Ut(e,13,903)%15,rAcross:n?7+Ut(e,17,904)%8:11+Ut(e,17,904)%16,peak:(n?1.9:1.6)+Ut(e,19,905)%100/100*(n?1.6:1.4),lobes:2+Ut(e,23,906)%4,phase:Ut(e,29,907)%1e3/1e3*Math.PI*2})}return t}function kT(t,e){const n=Math.max(e.rAlong,e.rAcross)*1.35+4,i=Math.max(1,Math.floor(e.sr-n)),r=Math.min(Yt-2,Math.ceil(e.sr+n)),s=Math.max(1,Math.floor(e.sc-n)),o=Math.min(ft-2,Math.ceil(e.sc+n)),a=Math.cos(e.ang),l=Math.sin(e.ang),c=500+Math.round(e.phase*10);for(let d=i;d<=r;d++){const p=d-e.sr;for(let h=s;h<=o;h++){const g=t[d*ft+h];if(g.type==="water")continue;const x=h-e.sc,m=p*a-x*l,u=p*l+x*a,f=Math.atan2(u,m),_=1+.2*Math.sin(f*e.lobes+e.phase)+.1*Math.sin(f*(e.lobes*2+1)+e.phase*1.7),v=m/(e.rAlong*_),S=u/(e.rAcross*_),b=v*v+S*S;if(b>=1)continue;const T=e.peak*Math.pow(1-b,.68)*(.82+.3*qo(d,h,7,c));T<=.04||T>g.elev&&(g.elev=T,g.type=T>=.42?"mountain":"hills")}}}async function zT(t=()=>{}){const e=Yt*ft,n=new Array(e),i=8e3;for(let s=0;s<e;s+=i){const o=Math.min(e,s+i);for(let a=s;a<o;a++){const l=Math.floor(a/ft),c=a%ft;if(!UT(l,c)){n[a]={id:`${l}_${c}`,row:l,col:c,type:"water",owner:null,level:1,elev:-.5,shade:1};continue}const d=NT(l,c);n[a]={id:`${l}_${c}`,row:l,col:c,type:d,owner:null,level:1,elev:FT(d,l,c),shade:.9+Zl(l,c,303)*.16}}t(Math.round(o/e*55)),await new Promise(requestAnimationFrame)}const r=OT();for(let s=0;s<r.length;s++)kT(n,r[s]),t(55+Math.round((s+1)/r.length*43)),await new Promise(requestAnimationFrame);return t(100),n}const BT=(t,e)=>[[t-1,e],[t+1,e],[t,e-1],[t,e+1]].filter(([n,i])=>n>=0&&n<Yt&&i>=0&&i<ft).map(([n,i])=>`${n}_${i}`);function HT(t){const e=t.filter(r=>r.owner==="me"&&!St[r.type].impassable);if(!e.length)return new Set;const n=new Set,i=new Map(t.map(r=>[r.id,r]));return e.forEach(r=>BT(r.row,r.col).forEach(s=>{const o=i.get(s);o&&o.owner!=="me"&&!St[o.type].impassable&&n.add(s)})),n}function VT(t,e){for(const n of t)n.owner&&(n.owner=null);for(const[n,i]of Object.entries(e||{})){const[r,s]=n.split("_"),o=t[+r*ft+ +s];o&&(o.owner=i==="me"?"me":i)}}const zv=new Un(tt-.03,1,tt-.03),GT=new Un(tt-.16,1,tt-.16),WT=new Un(tt-.34,1,tt-.34),Om=new hh({color:16777215,flatShading:!0}),ht={treeTrunk:new Ds(.065,.09,.38,5),treeCrown:new Ro(.26,.58,6),rock:new $l(.24,0),rockSmall:new $l(.13,0),crop:new Un(.06,.14,.52),bush:new dh(.22,0),reed:new Ds(.025,.035,.34,4),flower:new Ds(.025,.025,.12,4),ridge:new Un(.68,.18,.22),peak:new Ro(.58,1.15,5),peakSmall:new Ro(.34,.62,5)},pt=t=>new hh({color:t,flatShading:!0}),mn={meadow:pt(St.meadow.top),forest:pt(St.forest.top),hills:pt(St.hills.top),field:pt(St.field.top),swamp:pt(St.swamp.top),mountain:pt(St.mountain.top),meadowSide:pt(St.meadow.side),forestSide:pt(St.forest.side),hillsSide:pt(St.hills.side),fieldSide:pt(St.field.side),swampSide:pt(St.swamp.side),mountainSide:pt(St.mountain.side),trunk:pt(7031081),leaves:pt(3112246),rock:pt(8160119),rock2:pt(9870221),crop:pt(11970880),bush:pt(5213748),reed:pt(6196039),flower:pt(14078299),ridge:pt(6449249),peak:pt(7304558),snow:pt(15331828),water:new hh({color:866898})};function Bv(t,e){const n=t.elev,i=[[t.row-1,t.col],[t.row+1,t.col],[t.row,t.col-1],[t.row,t.col+1]];for(const[r,s]of i)if(r<0||r>=Yt||s<0||s>=ft||e[r*ft+s].elev<n-.02)return!0;return!1}function XT(t,e,n){var a;const i={};for(const l of e)(i[a=l.type]||(i[a]=[])).push(l);const r=new vt,s={},o={};for(const[l,c]of Object.entries(i)){const d=c.length,p=new nr(zv,mn[l],d);p.frustumCulled=!0;const h=c.filter(m=>Bv(m,n)),g=new nr(GT,mn[l+"Side"],Math.max(1,h.length));g.frustumCulled=!0;const x=new Map;for(let m=0;m<h.length;m++){const u=h[m],f=oi(u.col,u.row),_=Yo+u.elev,v=_+1.3;r.position.set(f.x,(_-1.3)/2,f.z),r.scale.set(1,v,1),r.updateMatrix(),g.setMatrixAt(m,r.matrix),x.set(u.id,m)}g.count=h.length,g.instanceMatrix.needsUpdate=!0;for(let m=0;m<d;m++){const u=c[m],f=oi(u.col,u.row);r.position.set(f.x,Yo+u.elev+$o/2,f.z),r.scale.set(1,$o,1),r.updateMatrix(),p.setMatrixAt(m,r.matrix),s[u.id]={idx:m,top:p,side:g,sideIdx:x.get(u.id)}}p.instanceMatrix.needsUpdate=!0,t.add(g),t.add(p),o[l]={top:p,side:g,arr:c}}return{groups:o,byId:s}}function jT(t,e,n,i){const r=td,s=Math.max(0,n*r),o=Math.min(Yt,(n+1)*r),a=Math.max(0,i*r),l=Math.min(ft,(i+1)*r),c=[];for(let x=s;x<o;x++)for(let m=a;m<l;m++)c.push(e[x*ft+m]);const d=new vt,p=new nr(zv,Om,c.length);p.frustumCulled=!0,c.forEach((x,m)=>{const u=oi(x.col,x.row);d.position.set(u.x,Yo+x.elev+$o/2-.045,u.z),d.scale.set(1,$o,1),d.updateMatrix(),p.setMatrixAt(m,d.matrix)}),p.instanceMatrix.needsUpdate=!0;const h=c.filter(x=>Bv(x,e)),g=new nr(WT,Om,Math.max(1,h.length));return g.frustumCulled=!0,h.forEach((x,m)=>{const u=oi(x.col,x.row),f=Yo+x.elev,_=f+1.3;d.position.set(u.x,(f-1.3)/2,u.z),d.scale.set(1,_,1),d.updateMatrix(),g.setMatrixAt(m,d.matrix)}),g.count=h.length,g.instanceMatrix.needsUpdate=!0,t.add(p),t.add(g),{far:!0,arr:c,sideArr:h,top:p,side:g}}function km(t,e,n){const i=new We;t.arr.forEach((r,s)=>{r.id===n?i.setHex(16777215):r.owner==="me"?i.setHex(10314751).multiplyScalar(r.shade||1):r.owner?i.setHex(14243402).multiplyScalar(r.shade||1):e.has(r.id)?i.setHex(St[r.type].top).multiplyScalar((r.shade||1)*1.35):i.setHex(St[r.type].top).multiplyScalar(r.shade||1),t.top.setColorAt(s,i)}),t.sideArr.forEach((r,s)=>{i.setHex(St[r.type].side),t.side.setColorAt(s,i)}),t.top.instanceColor&&(t.top.instanceColor.needsUpdate=!0),t.side.instanceColor&&(t.side.instanceColor.needsUpdate=!0)}function YT(t,e){const n={trees:[],rocks:[],smallRocks:[],fields:[],bushes:[],reeds:[],flowers:[],ridges:[],peaks:[],snows:[]};for(const s of e){if(s.type==="water")continue;const o=Ut(s.row,s.col,777)%100,a=oi(s.col,s.row),l=Ql(s);if(s.type==="forest")o<42&&n.trees.push([a.x,a.z,l]);else if(s.type==="mountain"){const c=.62+Math.min(2.4,s.elev)*.5,d=(Ut(s.row,s.col,610)%1e3/1e3-.5)*.6,p=(Ut(s.row,s.col,611)%1e3/1e3-.5)*.6;if(n.peaks.push([a.x+d,a.z+p,l+.575*c,c]),s.elev>1.7){const h=c*.46;n.snows.push([a.x+d,a.z+p,l+1.15*c-.31*h+.02,h])}o<50&&n.rocks.push([a.x,a.z,l])}else s.type==="field"?o<38&&n.fields.push([a.x,a.z,l]):s.type==="hills"?(o<30?(n.rocks.push([a.x,a.z,l]),n.smallRocks.push([a.x,a.z,l])):o<52&&n.smallRocks.push([a.x,a.z,l]),o<18&&n.ridges.push([a.x,a.z,l])):s.type==="swamp"?o<40&&n.reeds.push([a.x,a.z,l]):s.type==="meadow"&&(o<8?n.bushes.push([a.x,a.z,l]):o<20&&n.flowers.push([a.x,a.z,l]))}const i=s=>s===ht.treeTrunk?.19:s===ht.treeCrown?.29:s===ht.rock?.22:s===ht.rockSmall?.13:s===ht.crop?.07:s===ht.bush?.14:s===ht.reed?.17:s===ht.flower?.06:s===ht.ridge?.09:.3,r=(s,o,a,l=1,c=1.7)=>{const d=new nr(s,o,Math.max(1,a.length*l));d.frustumCulled=!0;const p=new vt;let h=0;for(let g=0;g<a.length;g++){const x=a[g],m=x.length===4;for(let u=0;u<l;u++){const f=m?0:(Ut(g,u,501+l)%1e3/1e3-.5)*c,_=m?0:(Ut(g,u,502+l)%1e3/1e3-.5)*c,v=m?x[3]:.78+Ut(g,u,503+l)%40/100,S=m?x[2]:x[2]+i(s)*v+Iv;p.position.set(x[0]+f,S,x[1]+_),s===ht.treeTrunk?p.scale.set(1,1,1):p.scale.setScalar(v),p.rotation.y=s===ht.peak||s===ht.peakSmall?Ut(g,u,540+l)%1e3/1e3*Math.PI*2:0,p.updateMatrix(),d.setMatrixAt(h++,p.matrix)}}return d.count=h,d.instanceMatrix.needsUpdate=!0,t.add(d),d};return{treeTrunk:r(ht.treeTrunk,mn.trunk,n.trees,2,1.5),treeCrown:r(ht.treeCrown,mn.leaves,n.trees,2,1.5),rock:r(ht.rock,mn.rock,n.rocks,2,1.45),rockSmall:r(ht.rockSmall,mn.rock2,n.smallRocks,2,1.65),field:r(ht.crop,mn.crop,n.fields,5,1.55),bush:r(ht.bush,mn.bush,n.bushes,2,1.35),reed:r(ht.reed,mn.reed,n.reeds,4,1.55),flower:r(ht.flower,mn.flower,n.flowers,3,1.7),ridge:r(ht.ridge,mn.ridge,n.ridges,1,.9),peak:r(ht.peak,mn.peak,n.peaks,1,0),snow:r(ht.peakSmall,mn.snow,n.snows,1,0)}}const $T=(t,e,n)=>n?`F${t}:${e}`:`${t}:${e}`;function qT(t,e,n,i){const r=_o,s=Math.max(0,n*r),o=Math.min(Yt,(n+1)*r),a=Math.max(0,i*r),l=Math.min(ft,(i+1)*r),c=[];for(let h=s;h<o;h++)for(let g=a;g<l;g++)c.push(e[h*ft+g]);const d=XT(t,c,e),p=YT(t,c);return{far:!1,territories:c,inst:d,decor:p}}function fo(t,e){if(e.far){t.remove(e.top),e.top.dispose(),t.remove(e.side),e.side.dispose();return}for(const n of Object.values(e.inst.groups))t.remove(n.top),n.top.dispose(),t.remove(n.side),n.side.dispose();if(e.decor)for(const n of Object.values(e.decor))n&&(t.remove(n),n.dispose())}function zm(t,e,n,i){const r=new We;for(let s=0;s<e.length;s++){const o=e[s],a=t.byId[o.id];a&&(o.id===i?r.setHex(16777215):o.owner==="me"?r.setHex(10314751).multiplyScalar(o.shade||1):o.owner?r.setHex(14243402).multiplyScalar(o.shade||1):n.has(o.id)?r.setHex(St[o.type].top).multiplyScalar((o.shade||1)*1.35):r.setHex(St[o.type].top).multiplyScalar(o.shade||1),a.top.setColorAt(a.idx,r))}for(const s of Object.values(t.groups))s.top.instanceColor&&(s.top.instanceColor.needsUpdate=!0)}function KT(){const t=new Or(ql+7e3,Kl+7e3,140,140),e=new Ci({uniforms:{uTime:{value:0},uColor:{value:new We(933205)},uDeep:{value:new We(600636)},uFogColor:{value:new We(id)},uFogNear:{value:Fv},uFogFar:{value:Ov}},vertexShader:"uniform float uTime; varying float vWave; varying float vDepth; void main(){ vec3 p=position; float w=sin(p.x*0.020+uTime*0.60)*0.30+cos(p.y*0.026-uTime*0.42)*0.24+sin((p.x+p.y)*0.011+uTime*0.30)*0.16; p.z+=w; vWave=w; vec4 mv=modelViewMatrix*vec4(p,1.0); vDepth=-mv.z; gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform vec3 uColor; uniform vec3 uDeep; uniform vec3 uFogColor; uniform float uFogNear; uniform float uFogFar; varying float vWave; varying float vDepth; void main(){ float k=clamp((vWave+0.70)/1.40,0.0,1.0); vec3 c=mix(uDeep,uColor,k); c+=vec3(0.05,0.08,0.09)*pow(k,3.0); float f=smoothstep(uFogNear,uFogFar,vDepth); c=mix(c,uFogColor,f); gl_FragColor=vec4(c,1.0); }"}),n=new _n(t,e);return n.rotation.x=-Math.PI/2,n.position.y=-.75,n}function ZT({territories:t,onSelect:e,selectedId:n,reachable:i,onReady:r,onProgress:s,controlsRef:o,rev:a,borders:l,reach:c,highlightOwner:d,active:p}){const h=Le.useRef(null),g=Le.useRef({}),x=Le.useRef({territories:t,onSelect:e,selectedId:n,reachable:i,onReady:r,onProgress:s,active:p});return Le.useEffect(()=>{x.current={territories:t,onSelect:e,selectedId:n,reachable:i,onReady:r,onProgress:s,active:p}}),Le.useEffect(()=>{const m=h.current,u=g.current,f=Math.max(2,m.clientWidth||800),_=Math.max(2,m.clientHeight||600),v=new ET;v.background=new We(id),v.fog=new fh(id,Fv,Ov),u.scene=v;const S=new bn(Nv,f/Math.max(1,_),.1,4200);u.camera=S,u.targetX=0,u.targetZ=0,u.panTargetX=0,u.panTargetZ=0,u.dist=wc,u.distTarget=wc,u.yaw=.32,u.pitchOff=0;const b=()=>{const F=Math.cos(u.pitch);S.position.set(u.targetX+Math.sin(u.yaw)*F*u.dist,Math.sin(u.pitch)*u.dist,u.targetZ+Math.cos(u.yaw)*F*u.dist),S.lookAt(u.targetX,0,u.targetZ)};u.updateCameraPose=b,b();const T=new MT({antialias:!0,powerPreference:"high-performance",stencil:!1,depth:!0});T.setSize(f,_),T.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),T.outputColorSpace=Vn,m.appendChild(T.domElement),u.renderer=T;const A=F=>F.preventDefault(),C=()=>{T.setSize(Math.max(2,m.clientWidth),Math.max(2,m.clientHeight)),u.updateProjection(),u.refreshChunks()};T.domElement.addEventListener("webglcontextlost",A,!1),T.domElement.addEventListener("webglcontextrestored",C,!1),v.add(new AT(13625599,2767658,.9));const E=new Lm(16774088,1.5);E.position.set(-60,120,40),v.add(E);const y=new Lm(8956671,.25);y.position.set(80,60,-90),v.add(y);const P=KT();v.add(P),u.ocean=P;const O=new _n(new Or(tt-.09,tt-.09),new ys({color:16777215,transparent:!0,opacity:.12,depthWrite:!1,side:Wn}));O.rotation.x=-Math.PI/2,O.visible=!1,v.add(O),u.selection=O,u.chunks=new Map,u.farChunks=new Map,u.chunkQueue=[],u.farQueue=[],u.chunkWanted=new Set,u.farWanted=new Set,u.farMode=!1,u.initialReady=!1,u.raycaster=new bT,u.mouse2D=new je,u.updateProjection=()=>{S.aspect=Math.max(2,m.clientWidth)/Math.max(2,m.clientHeight),S.updateProjectionMatrix()};const z=F=>{const $=F[0]==="F",ne=$?td:_o,[Ee,Ce]=F.slice($?1:0).split(":").map(Number);return{x:(Ee+.5)*ne*tt-ml,z:(Ce+.5)*ne*tt-gl}},j=F=>{const $=z(F),ne=$.x-u.targetX,Ee=$.z-u.targetZ;return ne*ne+Ee*Ee},Y=F=>{const $=Math.max(2,m.clientWidth),ne=Math.max(2,m.clientHeight),Ee=$/ne,Ce=u.dist*Tc,Ae=Ce*Ee;if(!isFinite(Ce)||!isFinite(Ae)||Ce<=0||Ae<=0)return F?u.farWanted:u.chunkWanted;const Oe=F?td:_o,L=Math.max(Ae,Ce)*(F?1.6:1.4)+Oe*tt,rt=Math.max(0,Math.floor((u.targetX+ml-L)/tt)),oe=Math.min(ft-1,Math.floor((u.targetX+ml+L)/tt)),de=Math.max(0,Math.floor((u.targetZ+gl-L)/tt)),Z=Math.min(Yt-1,Math.floor((u.targetZ+gl+L)/tt)),Ue=Math.ceil(ft/Oe),Re=Math.ceil(Yt/Oe);let be=new Set;for(let M=An(Math.floor(de/Oe)-1,0,Re-1);M<=An(Math.floor(Z/Oe)+1,0,Re-1);M++)for(let B=An(Math.floor(rt/Oe)-1,0,Ue-1);B<=An(Math.floor(oe/Oe)+1,0,Ue-1);B++)be.add($T(M,B,F));const R=F?140:240;if(be.size>R){const M=[...be].map(B=>({k:B,d:j(B)})).sort((B,re)=>B.d-re.d);be=new Set(M.slice(0,R).map(B=>B.k))}return be};u.refreshChunks=()=>{const F=Y(!0);u.farWanted=F;for(const $ of F)!u.farChunks.has($)&&!u.farQueue.includes($)&&u.farQueue.push($);for(const[$,ne]of u.farChunks)F.has($)||(fo(v,ne),u.farChunks.delete($));if(u.farMode){if(u.chunks.size){for(const[$,ne]of u.chunks)fo(v,ne),u.chunks.delete($);u.chunkQueue=[]}}else{const $=Y(!1);u.chunkWanted=$;for(const ne of $)!u.chunks.has(ne)&&!u.chunkQueue.includes(ne)&&u.chunkQueue.push(ne);for(const[ne,Ee]of u.chunks)$.has(ne)||(fo(v,Ee),u.chunks.delete(ne))}};const W=()=>{const F=x.current;for(const $ of u.chunks.values())zm($.inst,$.territories,F.reachable,F.selectedId);for(const $ of u.farChunks.values())km($,F.reachable,F.selectedId)},q=()=>{var Oe,L,rt,oe;u.farQueue.sort((de,Z)=>j(de)-j(Z));let F=3;for(;F--&&u.farQueue.length;){const de=u.farQueue.shift();if(!u.farWanted.has(de)||u.farChunks.has(de))continue;const[Z,Ue]=de.slice(1).split(":").map(Number);u.farChunks.set(de,jT(v,x.current.territories,Z,Ue))}if(!u.farMode){u.chunkQueue.sort((Z,Ue)=>j(Z)-j(Ue));let de=2;for(;de--&&u.chunkQueue.length;){const Z=u.chunkQueue.shift();if(!u.chunkWanted.has(Z)||u.chunks.has(Z))continue;const[Ue,Re]=Z.split(":").map(Number);u.chunks.set(Z,qT(v,x.current.territories,Ue,Re))}}(u.farQueue.length||u.chunkQueue.length)&&W();let $=0;for(const de of u.farWanted)u.farChunks.has(de)&&$++;let ne=0;for(const de of u.chunkWanted)u.chunks.has(de)&&ne++;const Ee=u.farMode?0:u.chunkWanted.size,Ce=u.farWanted.size+Ee,Ae=$+(u.farMode?0:ne);(L=(Oe=x.current).onProgress)==null||L.call(Oe,60+Math.round(Ae/Math.max(1,Ce)*40)),!u.initialReady&&Ae===Ce&&(u.initialReady=!0,W(),(oe=(rt=x.current).onReady)==null||oe.call(rt))};u.refreshChunks();let D=0,K=0,J=u.targetX,ae=u.targetZ,ve=u.dist;const ee=()=>{var F,$,ne;if(D=requestAnimationFrame(ee),!!x.current.active){if(u.targetX+=(u.panTargetX-u.targetX)*.18,u.targetZ+=(u.panTargetZ-u.targetZ)*.18,u.dist+=(u.distTarget-u.dist)*.15,u.pitch=An(DT(u.dist)+(u.pitchOff||0),.92,1.55),b(),!u.farMode&&u.dist>280?(u.farMode=!0,u.refreshChunks()):u.farMode&&u.dist<240&&(u.farMode=!1,u.refreshChunks()),(Math.abs(u.dist-ve)>.5||Math.abs(u.targetX-J)>_o*tt*.2||Math.abs(u.targetZ-ae)>_o*tt*.2)&&(J=u.targetX,ae=u.targetZ,ve=u.dist,u.refreshChunks()),q(),(ne=($=(F=u.ocean)==null?void 0:F.material)==null?void 0:$.uniforms)!=null&&ne.uTime&&(u.ocean.material.uniforms.uTime.value=performance.now()*.001),u.selection.visible&&(u.selection.material.opacity=.1+.07*Math.sin(performance.now()*.004)),u.reachMesh&&(u.reachMesh.material.opacity=.14+.12*Math.sin(performance.now()*.0035)),u.hlMesh&&(u.hlMesh.material.opacity=.45+.35*Math.sin(performance.now()*.005)),K++,K%30===0){const Ee=u.dist<170,Ce=u.dist<320;for(const Ae of u.chunks.values())if(Ae.decor){for(const Oe of Object.values(Ae.decor))Oe&&(Oe.visible=Ee);for(const Oe of Object.values(Ae.inst.groups))Oe.side&&(Oe.side.visible=Ce)}}T.render(v,S)}};ee(),u.stop=()=>cancelAnimationFrame(D);const k=()=>{const F=m.clientWidth,$=m.clientHeight;F<50||$<50||(T.setSize(F,$),u.updateProjection(),u.refreshChunks())};return window.addEventListener("resize",k),()=>{u.stop(),window.removeEventListener("resize",k),T.domElement.removeEventListener("webglcontextlost",A),T.domElement.removeEventListener("webglcontextrestored",C);for(const F of u.chunks.values())fo(v,F);for(const F of u.farChunks.values())fo(v,F);u.chunks.clear(),u.farChunks.clear(),T.dispose(),m.contains(T.domElement)&&m.removeChild(T.domElement)}},[]),Le.useEffect(()=>{const m=g.current;if(!m.chunks)return;for(const f of m.chunks.values())zm(f.inst,f.territories,i,n);for(const f of m.farChunks.values())km(f,i,n);const u=t.find(f=>f.id===n);if(u){const f=oi(u.col,u.row);m.selection.position.set(f.x,Ql(u)+.02,f.z),m.selection.visible=!0}else m.selection.visible=!1},[t,i,n,a]),Le.useEffect(()=>{const m=g.current;if(!m.scene||(m.borderMesh&&(m.scene.remove(m.borderMesh),m.borderMesh.dispose(),m.borderMesh=null),!l||!l.length))return;m.borderGeo||(m.borderGeo=new Un(1,1,1)),m.borderMat||(m.borderMat=new ys({transparent:!0,opacity:.95}));const u=new nr(m.borderGeo,m.borderMat,l.length),f=new vt,_=new We;l.forEach((v,S)=>{f.position.set(v.x,v.y,v.z),f.rotation.y=v.vert?Math.PI/2:0,f.scale.set(tt+.1,.1,.26),f.updateMatrix(),u.setMatrixAt(S,f.matrix),v.owner==="me"?_.setHex(16766814):_.setHSL(kv(v.owner),.85,.6),u.setColorAt(S,_)}),u.instanceMatrix.needsUpdate=!0,u.instanceColor&&(u.instanceColor.needsUpdate=!0),m.scene.add(u),m.borderMesh=u},[l]),Le.useEffect(()=>{const m=g.current;if(!m.scene||(m.hlMesh&&(m.scene.remove(m.hlMesh),m.hlMesh.dispose(),m.hlMesh=null),!d||!l))return;const u=l.filter(v=>v.owner===d);if(!u.length)return;m.hlGeo||(m.hlGeo=new Un(1,1,1));const f=new nr(m.hlGeo,new ys({color:16777215,transparent:!0,opacity:.6,blending:Hl,depthWrite:!1}),u.length),_=new vt;u.forEach((v,S)=>{_.position.set(v.x,v.y+.05,v.z),_.rotation.y=v.vert?Math.PI/2:0,_.scale.set(tt+.3,.16,.4),_.updateMatrix(),f.setMatrixAt(S,_.matrix)}),f.instanceMatrix.needsUpdate=!0,m.scene.add(f),m.hlMesh=f},[d,l]),Le.useEffect(()=>{const m=g.current;if(!m.scene||(m.reachMesh&&(m.scene.remove(m.reachMesh),m.reachMesh.dispose(),m.reachMesh=null),!c||!c.length))return;m.reachGeo||(m.reachGeo=new Or(tt-.25,tt-.25)),m.reachMat||(m.reachMat=new ys({color:11466656,transparent:!0,opacity:.2,depthWrite:!1,side:Wn,blending:Hl}));const u=new nr(m.reachGeo,m.reachMat,c.length),f=new vt;c.forEach((_,v)=>{f.position.set(_.x,_.y,_.z),f.rotation.x=-Math.PI/2,f.updateMatrix(),u.setMatrixAt(v,f.matrix)}),u.instanceMatrix.needsUpdate=!0,m.scene.add(u),m.reachMesh=u},[c]),Le.useEffect(()=>{const m=h.current,u=g.current;if(!m)return;const f=()=>{const ee=Math.max(2,m.clientWidth)/Math.max(2,m.clientHeight),k=u.distTarget*Tc,F=k*ee;u.panTargetX=An(u.panTargetX,-Math.max(ql/2+Ka-F,0),Math.max(ql/2+Ka-F,0)),u.panTargetZ=An(u.panTargetZ,-Math.max(Kl/2+Ka-k,0),Math.max(Kl/2+Ka-k,0))},_=(ee,k)=>{const F=2*u.dist*Tc/Math.max(1,m.clientHeight),$=Math.cos(u.yaw),ne=-Math.sin(u.yaw),Ee=-Math.sin(u.yaw),Ce=-Math.cos(u.yaw);u.panTargetX+=(-$*ee+Ee*k)*F,u.panTargetZ+=(-ne*ee+Ce*k)*F,f()},v=ee=>{u.distTarget=An(u.distTarget/ee,nd,Uv),f()};o&&(o.current={zoomBy:v,focus:(ee,k)=>{u.panTargetX=ee,u.panTargetZ=k},resetView:()=>{u.panTargetX=0,u.panTargetZ=0,u.distTarget=wc,u.yaw=.32,u.pitchOff=0,u.updateCameraPose()}});const S=(ee,k)=>{const F=m.getBoundingClientRect();u.mouse2D.x=(ee-F.left)/F.width*2-1,u.mouse2D.y=-((k-F.top)/F.height)*2+1,u.raycaster.setFromCamera(u.mouse2D,u.camera);const $=[];for(const Ae of u.chunks.values())for(const Oe of Object.values(Ae.inst.groups))$.push(Oe.top);for(const Ae of u.farChunks.values())$.push(Ae.top);const ne=u.raycaster.intersectObjects($,!1);if(!ne.length||ne[0].instanceId==null)return null;const Ee=ne[0].object,Ce=ne[0].instanceId;for(const Ae of u.chunks.values())for(const Oe of Object.values(Ae.inst.groups))if(Oe.top===Ee)return Oe.arr[Ce];for(const Ae of u.farChunks.values())if(Ae.top===Ee)return Ae.arr[Ce];return null},b=(ee,k)=>{const F=S(ee,k);F&&x.current.onSelect(F)};let T=!1,A=!1,C=0,E=0,y=0,P=0,O=!1;const z=ee=>{if(ee.button!==void 0&&ee.button===2){O=!0,A=!1,y=ee.clientX,P=ee.clientY,m.style.cursor="ew-resize";return}ee.button!==void 0&&ee.button!==0||(T=!0,A=!1,C=0,E=performance.now(),y=ee.clientX,P=ee.clientY,m.style.cursor="grabbing")},j=ee=>{const k=ee.clientX-y,F=ee.clientY-P;if(O){u.yaw-=k*.008,u.pitchOff=An((u.pitchOff||0)-F*.006,-.6,.6),u.updateCameraPose(),y=ee.clientX,P=ee.clientY;return}T&&(C+=Math.abs(k)+Math.abs(F),C>6&&(A=!0),_(k,F),y=ee.clientX,P=ee.clientY)},Y=ee=>{if(O){O=!1,m.style.cursor="grab";return}T&&(!A&&performance.now()-E<700&&b(ee.clientX,ee.clientY),T=!1,m.style.cursor="grab")},W=ee=>{ee.preventDefault(),v(Math.exp(-ee.deltaY*.0012))},q=()=>v(1.5),D=ee=>{if(ee.touches.length===1)u.touch={x:ee.touches[0].clientX,y:ee.touches[0].clientY,m:!1,d:0,t:Date.now()};else if(ee.touches.length>=2){u.touch=null;const k=ee.touches[0].clientX-ee.touches[1].clientX,F=ee.touches[0].clientY-ee.touches[1].clientY;u.pinch=Math.hypot(k,F),u.twoFinger={dx:k,dy:F,cy:(ee.touches[0].clientY+ee.touches[1].clientY)/2}}},K=ee=>{if(ee.preventDefault(),ee.touches.length===1&&u.touch){const k=ee.touches[0].clientX-u.touch.x,F=ee.touches[0].clientY-u.touch.y;u.touch.d+=Math.abs(k)+Math.abs(F),u.touch.d>12&&(u.touch.m=!0),_(k,F),u.touch.x=ee.touches[0].clientX,u.touch.y=ee.touches[0].clientY}else if(ee.touches.length===2){const k=ee.touches[0].clientX-ee.touches[1].clientX,F=ee.touches[0].clientY-ee.touches[1].clientY,$=Math.hypot(k,F);if(u.pinch&&v(Math.exp(($-u.pinch)*.002)),u.twoFinger){const ne=(ee.touches[0].clientY+ee.touches[1].clientY)/2;u.pitchOff=An((u.pitchOff||0)-(ne-u.twoFinger.cy)*.002,-.6,.6),u.yaw-=(k-u.twoFinger.dx)*.002,u.updateCameraPose()}u.pinch=$,u.twoFinger={dx:k,dy:F,cy:(ee.touches[0].clientY+ee.touches[1].clientY)/2}}},J=()=>{u.touch&&!u.touch.m&&u.touch.d<14&&Date.now()-u.touch.t<700&&b(u.touch.x,u.touch.y),u.touch=null,u.pinch=0,u.twoFinger=null},ae=()=>{T=!1,O=!1,m.style.cursor="grab"},ve=ee=>ee.preventDefault();return m.style.touchAction="none",m.style.cursor="grab",m.addEventListener("mousedown",z),m.addEventListener("mousemove",j),m.addEventListener("mouseup",Y),m.addEventListener("mouseleave",ae),m.addEventListener("wheel",W,{passive:!1}),m.addEventListener("dblclick",q),m.addEventListener("contextmenu",ve),m.addEventListener("touchstart",D,{passive:!0}),m.addEventListener("touchmove",K,{passive:!1}),m.addEventListener("touchend",J),()=>{o&&(o.current=null),m.removeEventListener("mousedown",z),m.removeEventListener("mousemove",j),m.removeEventListener("mouseup",Y),m.removeEventListener("mouseleave",ae),m.removeEventListener("wheel",W),m.removeEventListener("dblclick",q),m.removeEventListener("contextmenu",ve),m.removeEventListener("touchstart",D),m.removeEventListener("touchmove",K),m.removeEventListener("touchend",J)}},[]),X.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",background:"#0a1620"},children:[X.jsx("div",{ref:h,style:{width:"100%",height:"100%"}}),X.jsx("div",{style:{position:"absolute",left:12,bottom:64,fontSize:10,color:"#ffffff66",pointerEvents:"none"},children:"Тяни — панорама · ПКМ — поворот · Колесо/пинч — зум"})]})}function QT({territories:t,overlay:e,onPick:n}){const i=Le.useRef(null),r=Le.useRef(null);return Le.useEffect(()=>{if(!t||r.current)return;const s=document.createElement("canvas");s.width=200,s.height=150;const o=s.getContext("2d"),a=200/ft,l=150/Yt;for(const c of t)o.fillStyle="#"+St[c.type].top.toString(16).padStart(6,"0"),o.fillRect(c.col*a,c.row*l,Math.ceil(a),Math.ceil(l));r.current=s},[t]),Le.useEffect(()=>{const s=i.current;if(!s||!r.current)return;const o=s.getContext("2d");o.clearRect(0,0,200,150),o.drawImage(r.current,0,0);const a=200/ft,l=150/Yt;for(const[c,d]of Object.entries(e.owners||{})){const[p,h]=c.split("_").map(Number);o.fillStyle=d==="me"?"#ffd75e":`hsl(${Math.round(kv(d)*360)},80%,55%)`,o.fillRect(h*a,p*l,Math.ceil(a),Math.ceil(l))}},[e,t]),X.jsx("canvas",{ref:i,width:200,height:150,onClick:s=>{const o=s.target.getBoundingClientRect(),a=Math.floor((s.clientX-o.left)/o.width*ft),l=Math.floor((s.clientY-o.top)/o.height*Yt),c=oi(a,l);n(c.x,c.z)},style:{position:"absolute",right:12,top:12,width:132,height:99,borderRadius:10,border:"1px solid rgba(255,255,255,.15)",background:"#0a1410",cursor:"pointer",imageRendering:"pixelated"}})}function Ko({onClick:t,disabled:e,variant:n="primary",children:i,style:r}){const s=e?xe.border:n==="success"?"#087f3f":n==="danger"?"#b93838":n==="ghost"?"transparent":xe.accent;return X.jsx("button",{onClick:e?void 0:t,style:{width:"100%",padding:"12px 0",border:n==="ghost"?`1px solid ${xe.border}`:"none",borderRadius:11,fontWeight:800,fontSize:14,cursor:e?"not-allowed":"pointer",background:s,color:e?xe.muted:"#fff",...r},children:i})}function Ac({onClick:t,children:e}){return X.jsx("button",{onClick:t,style:{width:42,height:42,borderRadius:12,border:"1px solid rgba(255,255,255,.14)",background:"rgba(8,16,16,.82)",color:"#e6eee8",fontSize:20,fontWeight:800,cursor:"pointer",lineHeight:1},children:e})}const JT={width:38,height:38,borderRadius:10,border:"1px solid rgba(255,255,255,.12)",background:"rgba(8,16,16,.82)",fontSize:17,cursor:"pointer"};function eA({profile:t,supplyEta:e,now:n,onInv:i}){let r="";if(t.supplies<t.supplyMax&&e){const s=Math.max(0,Math.ceil((e-n)/1e3));r=` (${Math.floor(s/60)}:${String(s%60).padStart(2,"0")})`}return X.jsxs("div",{style:{position:"absolute",left:12,top:12,display:"flex",gap:8,alignItems:"center"},children:[X.jsxs("div",{style:{padding:"7px 12px",borderRadius:10,background:"rgba(8,16,16,.82)",border:"1px solid rgba(255,255,255,.08)",fontSize:12,fontWeight:800,pointerEvents:"none"},children:["🪙 ",t.coins,t.income>0&&X.jsxs("span",{style:{color:"#7fd18a",fontWeight:600},children:[" +",t.income,"/м"]}),X.jsxs("span",{style:{marginLeft:12},children:["⚡ ",t.supplies,"/",t.supplyMax,X.jsx("span",{style:{color:xe.muted,fontWeight:600},children:r})]}),X.jsxs("span",{style:{marginLeft:12},children:["🏔️ ",t.owned.length,"/",PT]})]}),X.jsx("button",{onClick:i,style:JT,children:"🎒"})]})}function tA({u:t,sel:e,onClick:n}){const i=t.hp<=0;return X.jsxs("div",{onClick:i?void 0:n,style:{minWidth:86,borderRadius:12,padding:8,cursor:i?"not-allowed":"pointer",border:e?"2px solid "+xe.accent:"1px solid "+xe.border,background:i?"#1a1212":xe.bg,opacity:i?.5:1,textAlign:"center",flexShrink:0},children:[X.jsx("img",{src:ph(t),onError:r=>r.target.style.display="none",style:{width:44,height:44,borderRadius:8,objectFit:"cover",display:"block",margin:"0 auto 4px"}}),X.jsx("div",{style:{fontSize:11,fontWeight:800,whiteSpace:"nowrap",overflow:"hidden"},children:t.name}),X.jsxs("div",{style:{fontSize:9,color:xe.textD},children:["⚔️",Math.max(t.air,t.ground)," 🛡️",t.protection]}),X.jsx("div",{style:{height:5,background:"#1c2c23",borderRadius:4,marginTop:4},children:X.jsx("div",{style:{height:"100%",width:t.hp+"%",borderRadius:4,background:t.hp>50?"#22c55e":t.hp>25?"#f5c451":"#ef4444"}})}),i&&X.jsx("div",{style:{fontSize:9,color:xe.red,marginTop:2},children:"ранен"})]})}function Hv({title:t,onClose:e,children:n}){return X.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,.72)",zIndex:50,display:"flex",alignItems:"flex-end"},onClick:e,children:X.jsxs("div",{style:{background:xe.surf,borderRadius:"20px 20px 0 0",padding:18,width:"100%",borderTop:"1px solid "+xe.border,maxHeight:"80dvh",overflowY:"auto"},onClick:i=>i.stopPropagation(),children:[X.jsx("div",{style:{fontSize:20,fontWeight:900,marginBottom:12},children:t}),n,X.jsx(Ko,{variant:"ghost",onClick:e,style:{marginTop:10},children:"Закрыть"})]})})}function nA({t,building:e,profile:n,selUnit:i,setSelUnit:r,onAttack:s,onBuild:o,onClose:a,result:l,canInteract:c,busy:d,freePlace:p,ownerName:h}){const g=St[t.type],x=t.owner==="me",m=IT[t.type]||[],u=n.units.filter(f=>f.hp>0);return X.jsxs(Hv,{title:`${g.e} ${g.n}`,onClose:a,children:[X.jsxs("div",{style:{fontSize:12,color:xe.textD,margin:"-6px 0 12px"},children:[!x&&h&&X.jsxs("span",{style:{color:xe.gold,fontWeight:800},children:["👤 ",h," · "]}),e?`${ki[e.b].i} ${ki[e.b].n} — ${ki[e.b].d}`:g.bonus?`+${Math.round((g.m-1)*100)}% ${LT[g.bonus]} для защиты`:g.impassable?"Непроходимая зона":"Обычная местность",(t.type==="field"||t.type==="hills")&&X.jsx("span",{style:{color:"#7fd18a"},children:" · +1 🪙/мин пассивно"})]}),l&&!l.error&&X.jsxs("div",{style:{padding:12,borderRadius:11,marginBottom:10,background:l.win?"#092613":"#2d0a0a",border:`1px solid ${l.win?"#1d9b55":"#c43838"}`},children:[X.jsx("b",{children:l.win?"🏆 Захвачено":"💀 Неудача"}),X.jsxs("div",{style:{fontSize:12,color:xe.textD,marginTop:4},children:[Nm[l.atkStat]," ",l.ap," vs ",Nm[l.defStat]," ",l.dp," · юнит −",l.dmg," HP"]})]}),(l==null?void 0:l.error)&&X.jsxs("div",{style:{fontSize:12,color:xe.red,marginBottom:10},children:["⚠️ ",l.error]}),x&&!e&&m.length>0&&X.jsxs("div",{style:{marginBottom:10},children:[X.jsxs("div",{style:{fontSize:12,fontWeight:800,marginBottom:6},children:["Построить (",n.coins," 🪙):"]}),m.map(f=>X.jsxs(Ko,{disabled:n.coins<ki[f].cost||d,onClick:()=>o(f),style:{marginBottom:6},children:[ki[f].i," ",ki[f].n," — ",ki[f].cost," 🪙",X.jsx("div",{style:{fontSize:10,fontWeight:500,opacity:.8},children:ki[f].d})]},f))]}),!x&&!g.impassable&&X.jsxs(X.Fragment,{children:[!c&&X.jsx("div",{style:{fontSize:12,color:xe.muted,marginBottom:8},children:"Клетка не граничит с твоими — атака невозможна."}),c&&p&&X.jsx("div",{style:{fontSize:12,color:xe.gold,marginBottom:8},children:"🎁 Первая клетка — куда угодно!"}),c&&X.jsxs(X.Fragment,{children:[X.jsx("div",{style:{fontSize:12,fontWeight:800,marginBottom:6},children:"Юнит в атаку (⚡−1):"}),X.jsxs("div",{style:{display:"flex",gap:8,overflowX:"auto",paddingBottom:6,marginBottom:8},children:[u.length===0&&X.jsx("div",{style:{fontSize:12,color:xe.muted},children:"Нет юнитов — открой кейс в Меню"}),u.map(f=>X.jsx(tA,{u:f,sel:i===f.uid,onClick:()=>r(f.uid)},f.uid))]}),X.jsx(Ko,{variant:"success",disabled:d||!i||u.length===0||n.supplies<1,onClick:()=>s(i),children:d?"Атака…":"🏳️ Захватить (⚡1)"}),n.supplies<1&&X.jsx("div",{style:{fontSize:11,color:xe.gold,marginTop:6},children:"Припасы кончились — жди восстановления"})]})]})]})}function iA({profile:t,onClose:e}){return X.jsxs(Hv,{title:"🎒 Инвентарь",onClose:e,children:[t.units.length===0&&X.jsx("div",{style:{color:xe.muted,fontSize:13},children:"Пусто. Открой кейс в Меню 📦"}),X.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(96px,1fr))",gap:10},children:t.units.map(n=>X.jsxs("div",{style:{background:xe.bg,borderRadius:12,padding:8,textAlign:"center",border:"1px solid "+xe.border},children:[X.jsx("img",{src:ph(n),onError:i=>i.target.style.display="none",style:{width:"100%",aspectRatio:"1",borderRadius:8,objectFit:"cover"}}),X.jsx("div",{style:{fontSize:11,fontWeight:800,marginTop:4},children:n.name}),X.jsx("div",{style:{fontSize:9,color:xe.muted},children:n.server}),X.jsxs("div",{style:{fontSize:10,marginTop:2},children:["🌪️",n.air," ⛏️",n.ground,"/10 🛡️",n.protection,"/10"]}),X.jsx("div",{style:{fontSize:10,color:n.hp>0?"#7fd18a":xe.red},children:n.hp>0?`HP ${n.hp}`:"ранен"})]},n.uid))})]})}function rA({pool:t,winner:e,onDone:n}){const i=Le.useRef(null),[r,s]=Le.useState(0),[o,a]=Le.useState(!1),l=108,c=Le.useMemo(()=>{const d=[];for(let p=0;p<50;p++)d.push(t[Math.floor(Math.random()*t.length)]||e);return d[44]=e,d},[t,e]);return Le.useEffect(()=>{const d=i.current;if(!d)return;const p=44*l+l/2-d.clientWidth/2+(Math.random()*50-25),h=requestAnimationFrame(()=>requestAnimationFrame(()=>{s(-p),a(!0)})),g=setTimeout(n,5300);return()=>{cancelAnimationFrame(h),clearTimeout(g)}},[]),X.jsxs("div",{ref:i,style:{position:"relative",overflow:"hidden",borderRadius:12,border:"1px solid "+xe.border,background:"#0a1410",height:132,marginBottom:12},children:[X.jsx("div",{style:{position:"absolute",left:"50%",top:0,bottom:0,width:3,background:xe.gold,zIndex:2,boxShadow:"0 0 12px "+xe.gold}}),X.jsx("div",{style:{display:"flex",gap:12,padding:"12px 0",willChange:"transform",transform:`translateX(${r}px)`,transition:o?"transform 5s cubic-bezier(0.1,0.7,0.15,1)":"none"},children:c.map((d,p)=>X.jsxs("div",{style:{width:96,flexShrink:0,background:xe.bg,border:"1px solid "+xe.border,borderRadius:10,padding:6,textAlign:"center"},children:[X.jsx("img",{src:`/files/${encodeURIComponent(d.server||e.server)}/${encodeURIComponent(d.file)}`,onError:h=>h.target.style.display="none",style:{width:"100%",height:64,objectFit:"cover",borderRadius:6}}),X.jsx("div",{style:{fontSize:10,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden"},children:d.name})]},p))})]})}function sA({profile:t,servers:e,pools:n,caseCost:i,onSync:r}){const[s,o]=Le.useState("cases"),[a,l]=Le.useState(null),[c,d]=Le.useState("power"),[p,h]=Le.useState(null);Le.useEffect(()=>{a||Ms.tops().then(l).catch(()=>l({coins:[],cards:[],power:[]}))},[]);const g=async()=>{h(m=>({...m,rolling:!0,win:null}));try{const m=await Ms.openCase(p.server);r(m.profile),h(u=>({...u,win:m.unit}))}catch(m){h(u=>({...u,rolling:!1,err:m.message}))}},x=(n==null?void 0:n[p==null?void 0:p.server])||[];return X.jsxs("div",{style:{position:"absolute",inset:0,background:xe.bg,color:xe.text,overflowY:"auto",padding:"16px 14px 90px",fontFamily:"-apple-system,system-ui,sans-serif"},children:[X.jsx("style",{children:"@keyframes caseIn{from{transform:translateX(60px) scale(.85);opacity:0}to{transform:translateX(0) scale(1);opacity:1}}@keyframes cardPop{0%{transform:scale(.3) rotateY(90deg);opacity:0}60%{transform:scale(1.12);opacity:1}100%{transform:scale(1)}}"}),X.jsx("div",{style:{fontSize:22,fontWeight:900,marginBottom:12},children:"🎒 Мир"}),X.jsx("div",{style:{display:"flex",gap:6,marginBottom:14},children:[["cases","📦 Кейсы"],["tops","🏆 Топы"]].map(([m,u])=>X.jsx("button",{onClick:()=>o(m),style:{padding:"8px 14px",borderRadius:10,fontSize:13,fontWeight:800,cursor:"pointer",border:"1px solid "+(s===m?xe.accent:xe.border),background:s===m?"#2a1d4d":"transparent",color:xe.text},children:u},m))}),s==="cases"&&X.jsxs(X.Fragment,{children:[X.jsxs("div",{style:{fontSize:13,color:xe.textD,marginBottom:10},children:["🪙 ",t.coins," · открытие ",i," 🪙"]}),e.length===0&&X.jsx("div",{style:{color:xe.muted},children:"На сервере нет папок с карточками."}),e.map(m=>X.jsxs("button",{onClick:()=>h({server:m.name}),style:{width:"100%",marginBottom:8,padding:"12px 14px",borderRadius:12,border:"1px solid "+xe.border,background:xe.surf,color:xe.text,fontSize:14,fontWeight:800,cursor:"pointer",textAlign:"left"},children:["📦 ",Fm(m.name)," ",X.jsxs("span",{style:{color:xe.muted,fontWeight:600},children:["· ",m.count," 👤"]})]},m.name))]}),s==="tops"&&X.jsxs(X.Fragment,{children:[X.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:[["power","🏰 Сила"],["coins","🪙 Монеты"],["cards","🃏 Карты"]].map(([m,u])=>X.jsx("button",{onClick:()=>d(m),style:{padding:"6px 12px",borderRadius:9,fontSize:12,fontWeight:700,cursor:"pointer",border:"1px solid "+(c===m?xe.accent:xe.border),background:c===m?"#2a1d4d":"transparent",color:xe.text},children:u},m))}),!a&&X.jsx("div",{style:{color:xe.muted},children:"Загрузка…"}),a&&(a[c]||[]).map((m,u)=>X.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"8px 10px",borderRadius:9,background:u%2?"transparent":xe.surf,border:"1px solid "+xe.border,marginBottom:4,fontSize:13},children:[X.jsxs("span",{style:{fontWeight:700},children:[u===0?"🥇":u===1?"🥈":u===2?"🥉":`${u+1}.`," ",m.n]}),X.jsx("span",{style:{color:xe.gold,fontWeight:800},children:m.v})]},u))]}),p&&X.jsx("div",{onClick:p.win?()=>h(null):void 0,style:{position:"fixed",inset:0,backdropFilter:"blur(10px)",background:"rgba(4,8,12,.55)",zIndex:40,display:"flex",alignItems:"center",justifyContent:"center",padding:16},children:X.jsxs("div",{style:{width:"100%",maxWidth:460,animation:"caseIn .35s ease",background:xe.surf,border:"1px solid "+xe.border,borderRadius:16,padding:16},children:[X.jsxs("div",{style:{fontSize:16,fontWeight:900,marginBottom:10},children:["📦 Кейс «",Fm(p.server),"»"]}),p.rolling&&p.win&&X.jsx(rA,{pool:x,winner:p.win,onDone:()=>{}}),p.rolling&&!p.win&&X.jsxs("div",{style:{textAlign:"center",padding:20},children:[X.jsx("div",{style:{fontSize:52,display:"inline-block",animation:"caseIn .4s ease"},children:"📦"}),X.jsx("div",{style:{fontSize:12,color:xe.gold,marginTop:8},children:"Открываем…"})]}),p.win&&X.jsxs("div",{style:{textAlign:"center",padding:12,background:xe.bg,borderRadius:14,border:"1px solid "+xe.accent,animation:"cardPop .45s ease"},children:[X.jsx("img",{src:ph(p.win),onError:m=>m.target.style.display="none",style:{width:96,height:96,borderRadius:12,objectFit:"cover"}}),X.jsxs("div",{style:{fontSize:17,fontWeight:900,marginTop:6},children:["✨ ",p.win.name]}),X.jsxs("div",{style:{fontSize:11,color:xe.textD},children:["🌪️ ",p.win.air," · ⛏️ ",p.win.ground,"/10 · 🛡️ ",p.win.protection,"/10"]}),X.jsx("div",{style:{fontSize:11,color:xe.muted,marginTop:8},children:"Тапни в любом месте, чтобы вернуться"})]}),p.err&&X.jsxs("div",{style:{color:xe.red,fontSize:12,margin:"8px 0"},children:["⚠️ ",p.err]}),!p.rolling&&!p.win&&X.jsxs(X.Fragment,{children:[X.jsx("div",{style:{textAlign:"center",fontSize:60,margin:"8px 0",filter:"drop-shadow(0 0 18px rgba(245,196,81,.45))"},children:"📦"}),X.jsxs(Ko,{disabled:t.coins<i,onClick:g,children:["Открыть за ",i," 🪙"]}),X.jsx(Ko,{variant:"ghost",onClick:()=>h(null),style:{marginTop:8},children:"Назад"})]})]})})]})}function Bm({progress:t,text:e}){const n=An(t,0,100);return X.jsx("div",{style:{position:"fixed",inset:0,background:"radial-gradient(circle at 50% 35%,#10283a 0%,#071018 72%)",color:"#e6eee8",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"-apple-system,system-ui,sans-serif",zIndex:70},children:X.jsxs("div",{style:{width:"min(440px,84vw)",textAlign:"center"},children:[X.jsx("div",{style:{fontSize:42,marginBottom:12},children:"🏔️"}),X.jsx("div",{style:{fontSize:25,fontWeight:900},children:"Загрузка мира"}),X.jsx("div",{style:{fontSize:13,color:"#a9b8ae",marginTop:8,minHeight:20},children:e}),X.jsx("div",{style:{height:8,background:"#1c2c23",borderRadius:99,marginTop:24,overflow:"hidden",border:"1px solid #2b4232"},children:X.jsx("div",{style:{height:"100%",width:`${n}%`,background:"linear-gradient(90deg,#8b5cf6,#c4b5fd)",transition:"width .18s ease"}})}),X.jsxs("div",{style:{fontSize:12,color:"#6f8277",marginTop:9},children:[n,"%"]})]})})}const oA={id:"dev",name:"Dev",coins:1e3,supplies:6,supplyMax:6,supplyNextIn:0,income:0,heal:0,units:[{uid:"u1",name:"Тест",server:"dev",file:"test.png",air:5,ground:6,protection:4,hp:100}],owned:[],buildings:{}};function aA(){const[t,e]=Le.useState("map"),[n,i]=Le.useState(null),[r,s]=Le.useState(0),[o,a]=Le.useState(!1),[l,c]=Le.useState(60),[d,p]=Le.useState(null),[h,g]=Le.useState(null),[x,m]=Le.useState(0),[u,f]=Le.useState(null),[_,v]=Le.useState({owners:{},buildings:{},names:{}}),[S,b]=Le.useState([]),[T,A]=Le.useState({}),[C,E]=Le.useState(120),[y,P]=Le.useState(0),[O,z]=Le.useState(null),[j,Y]=Le.useState(null),[W,q]=Le.useState(!1),[D,K]=Le.useState(Date.now()),[J,ae]=Le.useState(null),ve=Le.useRef(null);Le.useEffect(()=>{let oe=!0;return zT(de=>{oe&&s(de)}).then(de=>{oe&&i(de)}),()=>{oe=!1}},[]);const ee=oe=>{f(oe),P(Date.now()+(oe.supplyNextIn||0)*1e3)},k=oe=>v({owners:oe.owners||{},buildings:oe.buildings||{},names:oe.names||{}});Le.useEffect(()=>{Ms.init().then(oe=>{ee(oe.profile),k(oe),b(oe.servers),A(oe.pools||{}),E(oe.caseCost||120);const de=oe.profile.units.find(Z=>Z.hp>0);de&&z(de.uid)}).catch(oe=>{console.warn("Сервер недоступен:",oe.message),ee(oA)})},[]),Le.useEffect(()=>{n&&(VT(n,_.owners),m(oe=>oe+1))},[n,_]),Le.useEffect(()=>{if(!u)return;const oe=setInterval(()=>{Ms.state().then(de=>{ee(de.profile),k(de)}).catch(()=>{})},2e4);return()=>clearInterval(oe)},[!!u]),Le.useEffect(()=>{const oe=setInterval(()=>K(Date.now()),500);return()=>clearInterval(oe)},[]);const F=Le.useMemo(()=>n?HT(n):new Set,[n,x]),$=Le.useMemo(()=>{if(!n)return[];const oe=[],de=(Z,Ue)=>Z<0||Z>=Yt||Ue<0||Ue>=ft?null:n[Z*ft+Ue];for(const Z of n){if(!Z.owner)continue;const Ue=oi(Z.col,Z.row),Re=Ql(Z)+.06,be=de(Z.row-1,Z.col),R=de(Z.row+1,Z.col),M=de(Z.row,Z.col-1),B=de(Z.row,Z.col+1);(!be||be.owner!==Z.owner)&&oe.push({x:Ue.x,z:Ue.z-tt/2,y:Re,vert:!1,owner:Z.owner}),(!R||R.owner!==Z.owner)&&oe.push({x:Ue.x,z:Ue.z+tt/2,y:Re,vert:!1,owner:Z.owner}),(!M||M.owner!==Z.owner)&&oe.push({x:Ue.x-tt/2,z:Ue.z,y:Re,vert:!0,owner:Z.owner}),(!B||B.owner!==Z.owner)&&oe.push({x:Ue.x+tt/2,z:Ue.z,y:Re,vert:!0,owner:Z.owner})}return oe},[n,x]),ne=Le.useMemo(()=>{if(!n)return[];const oe=[];for(const de of n){if(!F.has(de.id))continue;const Z=oi(de.col,de.row);oe.push({x:Z.x,z:Z.z,y:Ql(de)+.05})}return oe},[n,F,x]),Ee=!!u&&u.owned.length===0,Ce=oe=>{if(oe.owner&&oe.owner!=="me"){F.has(oe.id)?(ae(null),p(oe),g(null)):(ae(oe.owner),p(null));return}ae(null),p(oe),g(null)},Ae=async oe=>{if(!(!d||W)){q(!0),g(null);try{const de=await Ms.attack(d.id,oe);g(de.result),ee(de.profile);const Z=n.find(Ue=>Ue.id===d.id);de.owners[d.id]==="me"&&Z&&(Z.owner="me"),m(Ue=>Ue+1),p(Z?{...Z}:null)}catch(de){g({error:de.message})}q(!1)}},Oe=async oe=>{if(!(!d||W)){q(!0);try{const de=await Ms.build(d.id,oe);ee(de.profile),v(Z=>({...Z,buildings:{...Z.buildings,[de.building.tileId]:{b:de.building.b,own:"me"}}}))}catch(de){g({error:de.message})}q(!1)}};if(!n)return X.jsx(Bm,{progress:r,text:r<55?"Создаём карту…":"Возводим горные хребты…"});const L=d?Ee?!d.owner&&!St[d.type].impassable:F.has(d.id):!1,rt=()=>{var Z,Ue,Re;const oe=(Z=u==null?void 0:u.owned)==null?void 0:Z[0],de=oe?n.find(be=>be.id===oe):null;if(de){const be=oi(de.col,de.row);(Ue=ve.current)==null||Ue.focus(be.x,be.z)}else(Re=ve.current)==null||Re.resetView()};return X.jsxs("div",{style:{position:"fixed",inset:0,background:xe.bg,color:xe.text,fontFamily:"-apple-system,system-ui,sans-serif",overflow:"hidden"},children:[X.jsxs("div",{style:{position:"absolute",inset:0,transform:t==="map"?"translateX(0)":"translateX(-100%)",transition:"transform .38s cubic-bezier(.22,.9,.3,1)"},children:[X.jsx(ZT,{territories:n,reachable:F,selectedId:d==null?void 0:d.id,rev:x,borders:$,reach:ne,highlightOwner:J,active:t==="map",onProgress:c,onReady:()=>{c(100),a(!0)},onSelect:Ce,controlsRef:ve}),!o&&X.jsx(Bm,{progress:l,text:"Подготавливаем видимую область…"}),u&&X.jsx(eA,{profile:u,supplyEta:y,now:D,onInv:()=>Y("inv")}),X.jsx(QT,{territories:n,overlay:_,onPick:(oe,de)=>{var Z;return(Z=ve.current)==null?void 0:Z.focus(oe,de)}}),J&&X.jsxs("div",{style:{position:"absolute",top:56,left:"50%",transform:"translateX(-50%)",background:"rgba(42,29,77,.95)",border:"1px solid "+xe.accent,borderRadius:10,padding:"6px 14px",fontSize:12,zIndex:45,display:"flex",gap:10,alignItems:"center",whiteSpace:"nowrap"},children:["👤 ",_.names[J]||"Игрок"," — территория подсвечена",X.jsx("button",{onClick:()=>ae(null),style:{border:"none",background:xe.red,color:"#fff",borderRadius:7,padding:"2px 8px",fontWeight:700,cursor:"pointer"},children:"✕"})]}),X.jsxs("div",{style:{position:"absolute",right:12,bottom:64,display:"flex",flexDirection:"column",gap:8},children:[X.jsx(Ac,{onClick:()=>{var oe;return(oe=ve.current)==null?void 0:oe.zoomBy(1.35)},children:"＋"}),X.jsx(Ac,{onClick:()=>{var oe;return(oe=ve.current)==null?void 0:oe.zoomBy(1/1.35)},children:"－"}),X.jsx(Ac,{onClick:rt,children:"⌂"})]}),d&&u&&X.jsx(nA,{t:d,building:_.buildings[d.id],profile:u,selUnit:O,setSelUnit:z,onAttack:Ae,onBuild:Oe,busy:W,onClose:()=>{p(null),g(null)},result:h,canInteract:L,freePlace:Ee,ownerName:d.owner?_.names[d.owner]:null}),j==="inv"&&u&&X.jsx(iA,{profile:u,onClose:()=>Y(null)})]}),X.jsx("div",{style:{position:"absolute",inset:0,transform:t==="menu"?"translateX(0)":"translateX(100%)",transition:"transform .38s cubic-bezier(.22,.9,.3,1)"},children:u&&X.jsx(sA,{profile:u,servers:S,pools:T,caseCost:C,onSync:ee})}),X.jsxs("div",{style:{position:"absolute",bottom:12,left:"50%",transform:"translateX(-50%)",display:"flex",gap:8,zIndex:65},children:[X.jsx("button",{onClick:()=>e("map"),style:{padding:"10px 26px",borderRadius:14,fontSize:14,fontWeight:900,cursor:"pointer",border:"1px solid "+(t==="map"?xe.gold:xe.border),background:t==="map"?"rgba(245,196,81,.18)":"rgba(8,16,16,.9)",color:xe.text,backdropFilter:"blur(4px)"},children:"🗺️ Карта"}),X.jsx("button",{onClick:()=>e("menu"),style:{padding:"10px 26px",borderRadius:14,fontSize:14,fontWeight:900,cursor:"pointer",border:"1px solid "+(t==="menu"?xe.accent:xe.border),background:t==="menu"?"rgba(139,92,246,.22)":"rgba(8,16,16,.9)",color:xe.text,backdropFilter:"blur(4px)"},children:"🎒 Меню"})]})]})}ev(document.getElementById("root")).render(X.jsx(aA,{}));
