function HC(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in n)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var ff=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hb(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function GC(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}),t}var ty={exports:{}},_c={},ny={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JE;function KC(){if(JE)return Ke;JE=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function T(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,N={};function U(P,z,ee){this.props=P,this.context=z,this.refs=N,this.updater=ee||x}U.prototype.isReactComponent={},U.prototype.setState=function(P,z){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,z,"setState")},U.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function q(){}q.prototype=U.prototype;function G(P,z,ee){this.props=P,this.context=z,this.refs=N,this.updater=ee||x}var H=G.prototype=new q;H.constructor=G,L(H,U.prototype),H.isPureReactComponent=!0;var X=Array.isArray,V=Object.prototype.hasOwnProperty,F={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function C(P,z,ee){var re,oe={},ae=null,ce=null;if(z!=null)for(re in z.ref!==void 0&&(ce=z.ref),z.key!==void 0&&(ae=""+z.key),z)V.call(z,re)&&!R.hasOwnProperty(re)&&(oe[re]=z[re]);var Te=arguments.length-2;if(Te===1)oe.children=ee;else if(1<Te){for(var be=Array(Te),Le=0;Le<Te;Le++)be[Le]=arguments[Le+2];oe.children=be}if(P&&P.defaultProps)for(re in Te=P.defaultProps,Te)oe[re]===void 0&&(oe[re]=Te[re]);return{$$typeof:n,type:P,key:ae,ref:ce,props:oe,_owner:F.current}}function b(P,z){return{$$typeof:n,type:P.type,key:z,ref:P.ref,props:P.props,_owner:P._owner}}function w(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function D(P){var z={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ee){return z[ee]})}var M=/\/+/g;function k(P,z){return typeof P=="object"&&P!==null&&P.key!=null?D(""+P.key):z.toString(36)}function Y(P,z,ee,re,oe){var ae=typeof P;(ae==="undefined"||ae==="boolean")&&(P=null);var ce=!1;if(P===null)ce=!0;else switch(ae){case"string":case"number":ce=!0;break;case"object":switch(P.$$typeof){case n:case e:ce=!0}}if(ce)return ce=P,oe=oe(ce),P=re===""?"."+k(ce,0):re,X(oe)?(ee="",P!=null&&(ee=P.replace(M,"$&/")+"/"),Y(oe,z,ee,"",function(Le){return Le})):oe!=null&&(w(oe)&&(oe=b(oe,ee+(!oe.key||ce&&ce.key===oe.key?"":(""+oe.key).replace(M,"$&/")+"/")+P)),z.push(oe)),1;if(ce=0,re=re===""?".":re+":",X(P))for(var Te=0;Te<P.length;Te++){ae=P[Te];var be=re+k(ae,Te);ce+=Y(ae,z,ee,be,oe)}else if(be=T(P),typeof be=="function")for(P=be.call(P),Te=0;!(ae=P.next()).done;)ae=ae.value,be=re+k(ae,Te++),ce+=Y(ae,z,ee,be,oe);else if(ae==="object")throw z=String(P),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return ce}function ge(P,z,ee){if(P==null)return P;var re=[],oe=0;return Y(P,re,"","",function(ae){return z.call(ee,ae,oe++)}),re}function pe(P){if(P._status===-1){var z=P._result;z=z(),z.then(function(ee){(P._status===0||P._status===-1)&&(P._status=1,P._result=ee)},function(ee){(P._status===0||P._status===-1)&&(P._status=2,P._result=ee)}),P._status===-1&&(P._status=0,P._result=z)}if(P._status===1)return P._result.default;throw P._result}var S={current:null},le={transition:null},B={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:le,ReactCurrentOwner:F};function I(){throw Error("act(...) is not supported in production builds of React.")}return Ke.Children={map:ge,forEach:function(P,z,ee){ge(P,function(){z.apply(this,arguments)},ee)},count:function(P){var z=0;return ge(P,function(){z++}),z},toArray:function(P){return ge(P,function(z){return z})||[]},only:function(P){if(!w(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Ke.Component=U,Ke.Fragment=t,Ke.Profiler=i,Ke.PureComponent=G,Ke.StrictMode=r,Ke.Suspense=h,Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,Ke.act=I,Ke.cloneElement=function(P,z,ee){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var re=L({},P.props),oe=P.key,ae=P.ref,ce=P._owner;if(z!=null){if(z.ref!==void 0&&(ae=z.ref,ce=F.current),z.key!==void 0&&(oe=""+z.key),P.type&&P.type.defaultProps)var Te=P.type.defaultProps;for(be in z)V.call(z,be)&&!R.hasOwnProperty(be)&&(re[be]=z[be]===void 0&&Te!==void 0?Te[be]:z[be])}var be=arguments.length-2;if(be===1)re.children=ee;else if(1<be){Te=Array(be);for(var Le=0;Le<be;Le++)Te[Le]=arguments[Le+2];re.children=Te}return{$$typeof:n,type:P.type,key:oe,ref:ae,props:re,_owner:ce}},Ke.createContext=function(P){return P={$$typeof:l,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:o,_context:P},P.Consumer=P},Ke.createElement=C,Ke.createFactory=function(P){var z=C.bind(null,P);return z.type=P,z},Ke.createRef=function(){return{current:null}},Ke.forwardRef=function(P){return{$$typeof:c,render:P}},Ke.isValidElement=w,Ke.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:pe}},Ke.memo=function(P,z){return{$$typeof:p,type:P,compare:z===void 0?null:z}},Ke.startTransition=function(P){var z=le.transition;le.transition={};try{P()}finally{le.transition=z}},Ke.unstable_act=I,Ke.useCallback=function(P,z){return S.current.useCallback(P,z)},Ke.useContext=function(P){return S.current.useContext(P)},Ke.useDebugValue=function(){},Ke.useDeferredValue=function(P){return S.current.useDeferredValue(P)},Ke.useEffect=function(P,z){return S.current.useEffect(P,z)},Ke.useId=function(){return S.current.useId()},Ke.useImperativeHandle=function(P,z,ee){return S.current.useImperativeHandle(P,z,ee)},Ke.useInsertionEffect=function(P,z){return S.current.useInsertionEffect(P,z)},Ke.useLayoutEffect=function(P,z){return S.current.useLayoutEffect(P,z)},Ke.useMemo=function(P,z){return S.current.useMemo(P,z)},Ke.useReducer=function(P,z,ee){return S.current.useReducer(P,z,ee)},Ke.useRef=function(P){return S.current.useRef(P)},Ke.useState=function(P){return S.current.useState(P)},Ke.useSyncExternalStore=function(P,z,ee){return S.current.useSyncExternalStore(P,z,ee)},Ke.useTransition=function(){return S.current.useTransition()},Ke.version="18.3.1",Ke}var ZE;function ei(){return ZE||(ZE=1,ny.exports=KC()),ny.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eI;function QC(){if(eI)return _c;eI=1;var n=ei(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(c,h,p){var g,v={},T=null,x=null;p!==void 0&&(T=""+p),h.key!==void 0&&(T=""+h.key),h.ref!==void 0&&(x=h.ref);for(g in h)r.call(h,g)&&!o.hasOwnProperty(g)&&(v[g]=h[g]);if(c&&c.defaultProps)for(g in h=c.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:c,key:T,ref:x,props:v,_owner:i.current}}return _c.Fragment=t,_c.jsx=l,_c.jsxs=l,_c}var tI;function YC(){return tI||(tI=1,ty.exports=QC()),ty.exports}var se=YC(),pf={},ry={exports:{}},Qn={},iy={exports:{}},sy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nI;function XC(){return nI||(nI=1,function(n){function e(le,B){var I=le.length;le.push(B);e:for(;0<I;){var P=I-1>>>1,z=le[P];if(0<i(z,B))le[P]=B,le[I]=z,I=P;else break e}}function t(le){return le.length===0?null:le[0]}function r(le){if(le.length===0)return null;var B=le[0],I=le.pop();if(I!==B){le[0]=I;e:for(var P=0,z=le.length,ee=z>>>1;P<ee;){var re=2*(P+1)-1,oe=le[re],ae=re+1,ce=le[ae];if(0>i(oe,I))ae<z&&0>i(ce,oe)?(le[P]=ce,le[ae]=I,P=ae):(le[P]=oe,le[re]=I,P=re);else if(ae<z&&0>i(ce,I))le[P]=ce,le[ae]=I,P=ae;else break e}}return B}function i(le,B){var I=le.sortIndex-B.sortIndex;return I!==0?I:le.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var l=Date,c=l.now();n.unstable_now=function(){return l.now()-c}}var h=[],p=[],g=1,v=null,T=3,x=!1,L=!1,N=!1,U=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function H(le){for(var B=t(p);B!==null;){if(B.callback===null)r(p);else if(B.startTime<=le)r(p),B.sortIndex=B.expirationTime,e(h,B);else break;B=t(p)}}function X(le){if(N=!1,H(le),!L)if(t(h)!==null)L=!0,pe(V);else{var B=t(p);B!==null&&S(X,B.startTime-le)}}function V(le,B){L=!1,N&&(N=!1,q(C),C=-1),x=!0;var I=T;try{for(H(B),v=t(h);v!==null&&(!(v.expirationTime>B)||le&&!D());){var P=v.callback;if(typeof P=="function"){v.callback=null,T=v.priorityLevel;var z=P(v.expirationTime<=B);B=n.unstable_now(),typeof z=="function"?v.callback=z:v===t(h)&&r(h),H(B)}else r(h);v=t(h)}if(v!==null)var ee=!0;else{var re=t(p);re!==null&&S(X,re.startTime-B),ee=!1}return ee}finally{v=null,T=I,x=!1}}var F=!1,R=null,C=-1,b=5,w=-1;function D(){return!(n.unstable_now()-w<b)}function M(){if(R!==null){var le=n.unstable_now();w=le;var B=!0;try{B=R(!0,le)}finally{B?k():(F=!1,R=null)}}else F=!1}var k;if(typeof G=="function")k=function(){G(M)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,ge=Y.port2;Y.port1.onmessage=M,k=function(){ge.postMessage(null)}}else k=function(){U(M,0)};function pe(le){R=le,F||(F=!0,k())}function S(le,B){C=U(function(){le(n.unstable_now())},B)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(le){le.callback=null},n.unstable_continueExecution=function(){L||x||(L=!0,pe(V))},n.unstable_forceFrameRate=function(le){0>le||125<le?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<le?Math.floor(1e3/le):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(h)},n.unstable_next=function(le){switch(T){case 1:case 2:case 3:var B=3;break;default:B=T}var I=T;T=B;try{return le()}finally{T=I}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(le,B){switch(le){case 1:case 2:case 3:case 4:case 5:break;default:le=3}var I=T;T=le;try{return B()}finally{T=I}},n.unstable_scheduleCallback=function(le,B,I){var P=n.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?P+I:P):I=P,le){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=I+z,le={id:g++,callback:B,priorityLevel:le,startTime:I,expirationTime:z,sortIndex:-1},I>P?(le.sortIndex=I,e(p,le),t(h)===null&&le===t(p)&&(N?(q(C),C=-1):N=!0,S(X,I-P))):(le.sortIndex=z,e(h,le),L||x||(L=!0,pe(V))),le},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(le){var B=T;return function(){var I=T;T=B;try{return le.apply(this,arguments)}finally{T=I}}}}(sy)),sy}var rI;function JC(){return rI||(rI=1,iy.exports=XC()),iy.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iI;function ZC(){if(iI)return Qn;iI=1;var n=ei(),e=JC();function t(s){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+s,u=1;u<arguments.length;u++)a+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+s+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,i={};function o(s,a){l(s,a),l(s+"Capture",a)}function l(s,a){for(i[s]=a,s=0;s<a.length;s++)r.add(a[s])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function T(s){return h.call(v,s)?!0:h.call(g,s)?!1:p.test(s)?v[s]=!0:(g[s]=!0,!1)}function x(s,a,u,f){if(u!==null&&u.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return f?!1:u!==null?!u.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");default:return!1}}function L(s,a,u,f){if(a===null||typeof a>"u"||x(s,a,u,f))return!0;if(f)return!1;if(u!==null)switch(u.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function N(s,a,u,f,m,_,A){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=u,this.propertyName=s,this.type=a,this.sanitizeURL=_,this.removeEmptyString=A}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){U[s]=new N(s,0,!1,s,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){var a=s[0];U[a]=new N(a,1,!1,s[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(s){U[s]=new N(s,2,!1,s.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){U[s]=new N(s,2,!1,s,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){U[s]=new N(s,3,!1,s.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(s){U[s]=new N(s,3,!0,s,null,!1,!1)}),["capture","download"].forEach(function(s){U[s]=new N(s,4,!1,s,null,!1,!1)}),["cols","rows","size","span"].forEach(function(s){U[s]=new N(s,6,!1,s,null,!1,!1)}),["rowSpan","start"].forEach(function(s){U[s]=new N(s,5,!1,s.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function G(s){return s[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){var a=s.replace(q,G);U[a]=new N(a,1,!1,s,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){var a=s.replace(q,G);U[a]=new N(a,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(s){var a=s.replace(q,G);U[a]=new N(a,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(s){U[s]=new N(s,1,!1,s.toLowerCase(),null,!1,!1)}),U.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(s){U[s]=new N(s,1,!1,s.toLowerCase(),null,!0,!0)});function H(s,a,u,f){var m=U.hasOwnProperty(a)?U[a]:null;(m!==null?m.type!==0:f||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(L(a,u,m,f)&&(u=null),f||m===null?T(a)&&(u===null?s.removeAttribute(a):s.setAttribute(a,""+u)):m.mustUseProperty?s[m.propertyName]=u===null?m.type===3?!1:"":u:(a=m.attributeName,f=m.attributeNamespace,u===null?s.removeAttribute(a):(m=m.type,u=m===3||m===4&&u===!0?"":""+u,f?s.setAttributeNS(f,a,u):s.setAttribute(a,u))))}var X=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),F=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),D=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),S=Symbol.for("react.offscreen"),le=Symbol.iterator;function B(s){return s===null||typeof s!="object"?null:(s=le&&s[le]||s["@@iterator"],typeof s=="function"?s:null)}var I=Object.assign,P;function z(s){if(P===void 0)try{throw Error()}catch(u){var a=u.stack.trim().match(/\n( *(at )?)/);P=a&&a[1]||""}return`
`+P+s}var ee=!1;function re(s,a){if(!s||ee)return"";ee=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(te){var f=te}Reflect.construct(s,[],a)}else{try{a.call()}catch(te){f=te}s.call(a.prototype)}else{try{throw Error()}catch(te){f=te}s()}}catch(te){if(te&&f&&typeof te.stack=="string"){for(var m=te.stack.split(`
`),_=f.stack.split(`
`),A=m.length-1,j=_.length-1;1<=A&&0<=j&&m[A]!==_[j];)j--;for(;1<=A&&0<=j;A--,j--)if(m[A]!==_[j]){if(A!==1||j!==1)do if(A--,j--,0>j||m[A]!==_[j]){var $=`
`+m[A].replace(" at new "," at ");return s.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",s.displayName)),$}while(1<=A&&0<=j);break}}}finally{ee=!1,Error.prepareStackTrace=u}return(s=s?s.displayName||s.name:"")?z(s):""}function oe(s){switch(s.tag){case 5:return z(s.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return s=re(s.type,!1),s;case 11:return s=re(s.type.render,!1),s;case 1:return s=re(s.type,!0),s;default:return""}}function ae(s){if(s==null)return null;if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case R:return"Fragment";case F:return"Portal";case b:return"Profiler";case C:return"StrictMode";case k:return"Suspense";case Y:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case D:return(s.displayName||"Context")+".Consumer";case w:return(s._context.displayName||"Context")+".Provider";case M:var a=s.render;return s=s.displayName,s||(s=a.displayName||a.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case ge:return a=s.displayName||null,a!==null?a:ae(s.type)||"Memo";case pe:a=s._payload,s=s._init;try{return ae(s(a))}catch{}}return null}function ce(s){var a=s.type;switch(s.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return s=a.render,s=s.displayName||s.name||"",a.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(a);case 8:return a===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function Te(s){switch(typeof s){case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function be(s){var a=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Le(s){var a=be(s)?"checked":"value",u=Object.getOwnPropertyDescriptor(s.constructor.prototype,a),f=""+s[a];if(!s.hasOwnProperty(a)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var m=u.get,_=u.set;return Object.defineProperty(s,a,{configurable:!0,get:function(){return m.call(this)},set:function(A){f=""+A,_.call(this,A)}}),Object.defineProperty(s,a,{enumerable:u.enumerable}),{getValue:function(){return f},setValue:function(A){f=""+A},stopTracking:function(){s._valueTracker=null,delete s[a]}}}}function $e(s){s._valueTracker||(s._valueTracker=Le(s))}function Ue(s){if(!s)return!1;var a=s._valueTracker;if(!a)return!0;var u=a.getValue(),f="";return s&&(f=be(s)?s.checked?"true":"false":s.value),s=f,s!==u?(a.setValue(s),!0):!1}function He(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}function ze(s,a){var u=a.checked;return I({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??s._wrapperState.initialChecked})}function Qe(s,a){var u=a.defaultValue==null?"":a.defaultValue,f=a.checked!=null?a.checked:a.defaultChecked;u=Te(a.value!=null?a.value:u),s._wrapperState={initialChecked:f,initialValue:u,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function mt(s,a){a=a.checked,a!=null&&H(s,"checked",a,!1)}function qe(s,a){mt(s,a);var u=Te(a.value),f=a.type;if(u!=null)f==="number"?(u===0&&s.value===""||s.value!=u)&&(s.value=""+u):s.value!==""+u&&(s.value=""+u);else if(f==="submit"||f==="reset"){s.removeAttribute("value");return}a.hasOwnProperty("value")?yt(s,a.type,u):a.hasOwnProperty("defaultValue")&&yt(s,a.type,Te(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(s.defaultChecked=!!a.defaultChecked)}function gt(s,a,u){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var f=a.type;if(!(f!=="submit"&&f!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+s._wrapperState.initialValue,u||a===s.value||(s.value=a),s.defaultValue=a}u=s.name,u!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,u!==""&&(s.name=u)}function yt(s,a,u){(a!=="number"||He(s.ownerDocument)!==s)&&(u==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+u&&(s.defaultValue=""+u))}var ct=Array.isArray;function kt(s,a,u,f){if(s=s.options,a){a={};for(var m=0;m<u.length;m++)a["$"+u[m]]=!0;for(u=0;u<s.length;u++)m=a.hasOwnProperty("$"+s[u].value),s[u].selected!==m&&(s[u].selected=m),m&&f&&(s[u].defaultSelected=!0)}else{for(u=""+Te(u),a=null,m=0;m<s.length;m++){if(s[m].value===u){s[m].selected=!0,f&&(s[m].defaultSelected=!0);return}a!==null||s[m].disabled||(a=s[m])}a!==null&&(a.selected=!0)}}function nr(s,a){if(a.dangerouslySetInnerHTML!=null)throw Error(t(91));return I({},a,{value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue})}function Nr(s,a){var u=a.value;if(u==null){if(u=a.children,a=a.defaultValue,u!=null){if(a!=null)throw Error(t(92));if(ct(u)){if(1<u.length)throw Error(t(93));u=u[0]}a=u}a==null&&(a=""),u=a}s._wrapperState={initialValue:Te(u)}}function Oi(s,a){var u=Te(a.value),f=Te(a.defaultValue);u!=null&&(u=""+u,u!==s.value&&(s.value=u),a.defaultValue==null&&s.defaultValue!==u&&(s.defaultValue=u)),f!=null&&(s.defaultValue=""+f)}function Lr(s){var a=s.textContent;a===s._wrapperState.initialValue&&a!==""&&a!==null&&(s.value=a)}function Bt(s){switch(s){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(s,a){return s==null||s==="http://www.w3.org/1999/xhtml"?Bt(a):s==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":s}var Cn,Au=function(s){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,u,f,m){MSApp.execUnsafeLocalFunction(function(){return s(a,u,f,m)})}:s}(function(s,a){if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=a;else{for(Cn=Cn||document.createElement("div"),Cn.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=Cn.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;a.firstChild;)s.appendChild(a.firstChild)}});function ms(s,a){if(a){var u=s.firstChild;if(u&&u===s.lastChild&&u.nodeType===3){u.nodeValue=a;return}}s.textContent=a}var go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yo=["Webkit","ms","Moz","O"];Object.keys(go).forEach(function(s){yo.forEach(function(a){a=a+s.charAt(0).toUpperCase()+s.substring(1),go[a]=go[s]})});function ku(s,a,u){return a==null||typeof a=="boolean"||a===""?"":u||typeof a!="number"||a===0||go.hasOwnProperty(s)&&go[s]?(""+a).trim():a+"px"}function Cu(s,a){s=s.style;for(var u in a)if(a.hasOwnProperty(u)){var f=u.indexOf("--")===0,m=ku(u,a[u],f);u==="float"&&(u="cssFloat"),f?s.setProperty(u,m):s[u]=m}}var xu=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ou(s,a){if(a){if(xu[s]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(t(137,s));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(t(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(t(61))}if(a.style!=null&&typeof a.style!="object")throw Error(t(62))}}function Du(s,a){if(s.indexOf("-")===-1)return typeof a.is=="string";switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _o=null;function Da(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var Na=null,_r=null,ti=null;function La(s){if(s=rc(s)){if(typeof Na!="function")throw Error(t(280));var a=s.stateNode;a&&(a=Ph(a),Na(s.stateNode,s.type,a))}}function ni(s){_r?ti?ti.push(s):ti=[s]:_r=s}function Nu(){if(_r){var s=_r,a=ti;if(ti=_r=null,La(s),a)for(s=0;s<a.length;s++)La(a[s])}}function vo(s,a){return s(a)}function Lu(){}var Di=!1;function Vu(s,a,u){if(Di)return s(a,u);Di=!0;try{return vo(s,a,u)}finally{Di=!1,(_r!==null||ti!==null)&&(Lu(),Nu())}}function $t(s,a){var u=s.stateNode;if(u===null)return null;var f=Ph(u);if(f===null)return null;u=f[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(s=s.type,f=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!f;break e;default:s=!1}if(s)return null;if(u&&typeof u!="function")throw Error(t(231,a,typeof u));return u}var Va=!1;if(c)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){Va=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{Va=!1}function wo(s,a,u,f,m,_,A,j,$){var te=Array.prototype.slice.call(arguments,3);try{a.apply(u,te)}catch(me){this.onError(me)}}var Eo=!1,Ma=null,Mr=!1,Mu=null,km={onError:function(s){Eo=!0,Ma=s}};function Fa(s,a,u,f,m,_,A,j,$){Eo=!1,Ma=null,wo.apply(km,arguments)}function Jd(s,a,u,f,m,_,A,j,$){if(Fa.apply(this,arguments),Eo){if(Eo){var te=Ma;Eo=!1,Ma=null}else throw Error(t(198));Mr||(Mr=!0,Mu=te)}}function Fr(s){var a=s,u=s;if(s.alternate)for(;a.return;)a=a.return;else{s=a;do a=s,a.flags&4098&&(u=a.return),s=a.return;while(s)}return a.tag===3?u:null}function Io(s){if(s.tag===13){var a=s.memoizedState;if(a===null&&(s=s.alternate,s!==null&&(a=s.memoizedState)),a!==null)return a.dehydrated}return null}function Ur(s){if(Fr(s)!==s)throw Error(t(188))}function Zd(s){var a=s.alternate;if(!a){if(a=Fr(s),a===null)throw Error(t(188));return a!==s?null:s}for(var u=s,f=a;;){var m=u.return;if(m===null)break;var _=m.alternate;if(_===null){if(f=m.return,f!==null){u=f;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===u)return Ur(m),s;if(_===f)return Ur(m),a;_=_.sibling}throw Error(t(188))}if(u.return!==f.return)u=m,f=_;else{for(var A=!1,j=m.child;j;){if(j===u){A=!0,u=m,f=_;break}if(j===f){A=!0,f=m,u=_;break}j=j.sibling}if(!A){for(j=_.child;j;){if(j===u){A=!0,u=_,f=m;break}if(j===f){A=!0,f=_,u=m;break}j=j.sibling}if(!A)throw Error(t(189))}}if(u.alternate!==f)throw Error(t(190))}if(u.tag!==3)throw Error(t(188));return u.stateNode.current===u?s:a}function Fu(s){return s=Zd(s),s!==null?Ua(s):null}function Ua(s){if(s.tag===5||s.tag===6)return s;for(s=s.child;s!==null;){var a=Ua(s);if(a!==null)return a;s=s.sibling}return null}var ja=e.unstable_scheduleCallback,Uu=e.unstable_cancelCallback,eh=e.unstable_shouldYield,Cm=e.unstable_requestPaint,ht=e.unstable_now,th=e.unstable_getCurrentPriorityLevel,To=e.unstable_ImmediatePriority,gs=e.unstable_UserBlockingPriority,vr=e.unstable_NormalPriority,ju=e.unstable_LowPriority,nh=e.unstable_IdlePriority,So=null,rr=null;function rh(s){if(rr&&typeof rr.onCommitFiberRoot=="function")try{rr.onCommitFiberRoot(So,s,void 0,(s.current.flags&128)===128)}catch{}}var xn=Math.clz32?Math.clz32:sh,zu=Math.log,ih=Math.LN2;function sh(s){return s>>>=0,s===0?32:31-(zu(s)/ih|0)|0}var za=64,Ba=4194304;function ys(s){switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return s}}function bo(s,a){var u=s.pendingLanes;if(u===0)return 0;var f=0,m=s.suspendedLanes,_=s.pingedLanes,A=u&268435455;if(A!==0){var j=A&~m;j!==0?f=ys(j):(_&=A,_!==0&&(f=ys(_)))}else A=u&~m,A!==0?f=ys(A):_!==0&&(f=ys(_));if(f===0)return 0;if(a!==0&&a!==f&&!(a&m)&&(m=f&-f,_=a&-a,m>=_||m===16&&(_&4194240)!==0))return a;if(f&4&&(f|=u&16),a=s.entangledLanes,a!==0)for(s=s.entanglements,a&=f;0<a;)u=31-xn(a),m=1<<u,f|=s[u],a&=~m;return f}function xm(s,a){switch(s){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ni(s,a){for(var u=s.suspendedLanes,f=s.pingedLanes,m=s.expirationTimes,_=s.pendingLanes;0<_;){var A=31-xn(_),j=1<<A,$=m[A];$===-1?(!(j&u)||j&f)&&(m[A]=xm(j,a)):$<=a&&(s.expiredLanes|=j),_&=~j}}function ir(s){return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}function Ro(){var s=za;return za<<=1,!(za&4194240)&&(za=64),s}function _s(s){for(var a=[],u=0;31>u;u++)a.push(s);return a}function vs(s,a,u){s.pendingLanes|=a,a!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,a=31-xn(a),s[a]=u}function dt(s,a){var u=s.pendingLanes&~a;s.pendingLanes=a,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=a,s.mutableReadLanes&=a,s.entangledLanes&=a,a=s.entanglements;var f=s.eventTimes;for(s=s.expirationTimes;0<u;){var m=31-xn(u),_=1<<m;a[m]=0,f[m]=-1,s[m]=-1,u&=~_}}function ws(s,a){var u=s.entangledLanes|=a;for(s=s.entanglements;u;){var f=31-xn(u),m=1<<f;m&a|s[f]&a&&(s[f]|=a),u&=~m}}var Ze=0;function Es(s){return s&=-s,1<s?4<s?s&268435455?16:536870912:4:1}var oh,$a,ah,lh,uh,Bu=!1,ri=[],fn=null,jr=null,zr=null,Is=new Map,wr=new Map,ii=[],Om="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ch(s,a){switch(s){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":Is.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":wr.delete(a.pointerId)}}function Bn(s,a,u,f,m,_){return s===null||s.nativeEvent!==_?(s={blockedOn:a,domEventName:u,eventSystemFlags:f,nativeEvent:_,targetContainers:[m]},a!==null&&(a=rc(a),a!==null&&$a(a)),s):(s.eventSystemFlags|=f,a=s.targetContainers,m!==null&&a.indexOf(m)===-1&&a.push(m),s)}function Dm(s,a,u,f,m){switch(a){case"focusin":return fn=Bn(fn,s,a,u,f,m),!0;case"dragenter":return jr=Bn(jr,s,a,u,f,m),!0;case"mouseover":return zr=Bn(zr,s,a,u,f,m),!0;case"pointerover":var _=m.pointerId;return Is.set(_,Bn(Is.get(_)||null,s,a,u,f,m)),!0;case"gotpointercapture":return _=m.pointerId,wr.set(_,Bn(wr.get(_)||null,s,a,u,f,m)),!0}return!1}function dh(s){var a=xo(s.target);if(a!==null){var u=Fr(a);if(u!==null){if(a=u.tag,a===13){if(a=Io(u),a!==null){s.blockedOn=a,uh(s.priority,function(){ah(u)});return}}else if(a===3&&u.stateNode.current.memoizedState.isDehydrated){s.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}s.blockedOn=null}function Li(s){if(s.blockedOn!==null)return!1;for(var a=s.targetContainers;0<a.length;){var u=qa(s.domEventName,s.eventSystemFlags,a[0],s.nativeEvent);if(u===null){u=s.nativeEvent;var f=new u.constructor(u.type,u);_o=f,u.target.dispatchEvent(f),_o=null}else return a=rc(u),a!==null&&$a(a),s.blockedOn=u,!1;a.shift()}return!0}function Po(s,a,u){Li(s)&&u.delete(a)}function hh(){Bu=!1,fn!==null&&Li(fn)&&(fn=null),jr!==null&&Li(jr)&&(jr=null),zr!==null&&Li(zr)&&(zr=null),Is.forEach(Po),wr.forEach(Po)}function Br(s,a){s.blockedOn===a&&(s.blockedOn=null,Bu||(Bu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,hh)))}function $r(s){function a(m){return Br(m,s)}if(0<ri.length){Br(ri[0],s);for(var u=1;u<ri.length;u++){var f=ri[u];f.blockedOn===s&&(f.blockedOn=null)}}for(fn!==null&&Br(fn,s),jr!==null&&Br(jr,s),zr!==null&&Br(zr,s),Is.forEach(a),wr.forEach(a),u=0;u<ii.length;u++)f=ii[u],f.blockedOn===s&&(f.blockedOn=null);for(;0<ii.length&&(u=ii[0],u.blockedOn===null);)dh(u),u.blockedOn===null&&ii.shift()}var Vi=X.ReactCurrentBatchConfig,Ts=!0;function Tt(s,a,u,f){var m=Ze,_=Vi.transition;Vi.transition=null;try{Ze=1,$u(s,a,u,f)}finally{Ze=m,Vi.transition=_}}function Nm(s,a,u,f){var m=Ze,_=Vi.transition;Vi.transition=null;try{Ze=4,$u(s,a,u,f)}finally{Ze=m,Vi.transition=_}}function $u(s,a,u,f){if(Ts){var m=qa(s,a,u,f);if(m===null)Wm(s,a,f,Ao,u),ch(s,f);else if(Dm(m,s,a,u,f))f.stopPropagation();else if(ch(s,f),a&4&&-1<Om.indexOf(s)){for(;m!==null;){var _=rc(m);if(_!==null&&oh(_),_=qa(s,a,u,f),_===null&&Wm(s,a,f,Ao,u),_===m)break;m=_}m!==null&&f.stopPropagation()}else Wm(s,a,f,null,u)}}var Ao=null;function qa(s,a,u,f){if(Ao=null,s=Da(f),s=xo(s),s!==null)if(a=Fr(s),a===null)s=null;else if(u=a.tag,u===13){if(s=Io(a),s!==null)return s;s=null}else if(u===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;s=null}else a!==s&&(s=null);return Ao=s,null}function qu(s){switch(s){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(th()){case To:return 1;case gs:return 4;case vr:case ju:return 16;case nh:return 536870912;default:return 16}default:return 16}}var sr=null,Wa=null,$n=null;function Wu(){if($n)return $n;var s,a=Wa,u=a.length,f,m="value"in sr?sr.value:sr.textContent,_=m.length;for(s=0;s<u&&a[s]===m[s];s++);var A=u-s;for(f=1;f<=A&&a[u-f]===m[_-f];f++);return $n=m.slice(s,1<f?1-f:void 0)}function Ha(s){var a=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&a===13&&(s=13)):s=a,s===10&&(s=13),32<=s||s===13?s:0}function si(){return!0}function Hu(){return!1}function pn(s){function a(u,f,m,_,A){this._reactName=u,this._targetInst=m,this.type=f,this.nativeEvent=_,this.target=A,this.currentTarget=null;for(var j in s)s.hasOwnProperty(j)&&(u=s[j],this[j]=u?u(_):_[j]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?si:Hu,this.isPropagationStopped=Hu,this}return I(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),a}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ga=pn(qr),oi=I({},qr,{view:0,detail:0}),Lm=pn(oi),Ka,Mi,Ss,ko=I({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ai,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==Ss&&(Ss&&s.type==="mousemove"?(Ka=s.screenX-Ss.screenX,Mi=s.screenY-Ss.screenY):Mi=Ka=0,Ss=s),Ka)},movementY:function(s){return"movementY"in s?s.movementY:Mi}}),Qa=pn(ko),Gu=I({},ko,{dataTransfer:0}),fh=pn(Gu),Ya=I({},oi,{relatedTarget:0}),Xa=pn(Ya),ph=I({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fi=pn(ph),mh=I({},qr,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),gh=pn(mh),yh=I({},qr,{data:0}),Ku=pn(yh),Ja={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},On={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_h={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vh(s){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(s):(s=_h[s])?!!a[s]:!1}function ai(){return vh}var d=I({},oi,{key:function(s){if(s.key){var a=Ja[s.key]||s.key;if(a!=="Unidentified")return a}return s.type==="keypress"?(s=Ha(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?On[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ai,charCode:function(s){return s.type==="keypress"?Ha(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?Ha(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),y=pn(d),E=I({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),O=pn(E),K=I({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ai}),ie=pn(K),we=I({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ot=pn(we),Zt=I({},ko,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),et=pn(Zt),sn=[9,13,27,32],Kt=c&&"CompositionEvent"in window,Er=null;c&&"documentMode"in document&&(Er=document.documentMode);var or=c&&"TextEvent"in window&&!Er,Co=c&&(!Kt||Er&&8<Er&&11>=Er),Za=" ",Hw=!1;function Gw(s,a){switch(s){case"keyup":return sn.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kw(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var el=!1;function $k(s,a){switch(s){case"compositionend":return Kw(a);case"keypress":return a.which!==32?null:(Hw=!0,Za);case"textInput":return s=a.data,s===Za&&Hw?null:s;default:return null}}function qk(s,a){if(el)return s==="compositionend"||!Kt&&Gw(s,a)?(s=Wu(),$n=Wa=sr=null,el=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Co&&a.locale!=="ko"?null:a.data;default:return null}}var Wk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qw(s){var a=s&&s.nodeName&&s.nodeName.toLowerCase();return a==="input"?!!Wk[s.type]:a==="textarea"}function Yw(s,a,u,f){ni(f),a=Sh(a,"onChange"),0<a.length&&(u=new Ga("onChange","change",null,u,f),s.push({event:u,listeners:a}))}var Qu=null,Yu=null;function Hk(s){p0(s,0)}function wh(s){var a=sl(s);if(Ue(a))return s}function Gk(s,a){if(s==="change")return a}var Xw=!1;if(c){var Vm;if(c){var Mm="oninput"in document;if(!Mm){var Jw=document.createElement("div");Jw.setAttribute("oninput","return;"),Mm=typeof Jw.oninput=="function"}Vm=Mm}else Vm=!1;Xw=Vm&&(!document.documentMode||9<document.documentMode)}function Zw(){Qu&&(Qu.detachEvent("onpropertychange",e0),Yu=Qu=null)}function e0(s){if(s.propertyName==="value"&&wh(Yu)){var a=[];Yw(a,Yu,s,Da(s)),Vu(Hk,a)}}function Kk(s,a,u){s==="focusin"?(Zw(),Qu=a,Yu=u,Qu.attachEvent("onpropertychange",e0)):s==="focusout"&&Zw()}function Qk(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return wh(Yu)}function Yk(s,a){if(s==="click")return wh(a)}function Xk(s,a){if(s==="input"||s==="change")return wh(a)}function Jk(s,a){return s===a&&(s!==0||1/s===1/a)||s!==s&&a!==a}var Wr=typeof Object.is=="function"?Object.is:Jk;function Xu(s,a){if(Wr(s,a))return!0;if(typeof s!="object"||s===null||typeof a!="object"||a===null)return!1;var u=Object.keys(s),f=Object.keys(a);if(u.length!==f.length)return!1;for(f=0;f<u.length;f++){var m=u[f];if(!h.call(a,m)||!Wr(s[m],a[m]))return!1}return!0}function t0(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function n0(s,a){var u=t0(s);s=0;for(var f;u;){if(u.nodeType===3){if(f=s+u.textContent.length,s<=a&&f>=a)return{node:u,offset:a-s};s=f}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=t0(u)}}function r0(s,a){return s&&a?s===a?!0:s&&s.nodeType===3?!1:a&&a.nodeType===3?r0(s,a.parentNode):"contains"in s?s.contains(a):s.compareDocumentPosition?!!(s.compareDocumentPosition(a)&16):!1:!1}function i0(){for(var s=window,a=He();a instanceof s.HTMLIFrameElement;){try{var u=typeof a.contentWindow.location.href=="string"}catch{u=!1}if(u)s=a.contentWindow;else break;a=He(s.document)}return a}function Fm(s){var a=s&&s.nodeName&&s.nodeName.toLowerCase();return a&&(a==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||a==="textarea"||s.contentEditable==="true")}function Zk(s){var a=i0(),u=s.focusedElem,f=s.selectionRange;if(a!==u&&u&&u.ownerDocument&&r0(u.ownerDocument.documentElement,u)){if(f!==null&&Fm(u)){if(a=f.start,s=f.end,s===void 0&&(s=a),"selectionStart"in u)u.selectionStart=a,u.selectionEnd=Math.min(s,u.value.length);else if(s=(a=u.ownerDocument||document)&&a.defaultView||window,s.getSelection){s=s.getSelection();var m=u.textContent.length,_=Math.min(f.start,m);f=f.end===void 0?_:Math.min(f.end,m),!s.extend&&_>f&&(m=f,f=_,_=m),m=n0(u,_);var A=n0(u,f);m&&A&&(s.rangeCount!==1||s.anchorNode!==m.node||s.anchorOffset!==m.offset||s.focusNode!==A.node||s.focusOffset!==A.offset)&&(a=a.createRange(),a.setStart(m.node,m.offset),s.removeAllRanges(),_>f?(s.addRange(a),s.extend(A.node,A.offset)):(a.setEnd(A.node,A.offset),s.addRange(a)))}}for(a=[],s=u;s=s.parentNode;)s.nodeType===1&&a.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<a.length;u++)s=a[u],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var eC=c&&"documentMode"in document&&11>=document.documentMode,tl=null,Um=null,Ju=null,jm=!1;function s0(s,a,u){var f=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;jm||tl==null||tl!==He(f)||(f=tl,"selectionStart"in f&&Fm(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Ju&&Xu(Ju,f)||(Ju=f,f=Sh(Um,"onSelect"),0<f.length&&(a=new Ga("onSelect","select",null,a,u),s.push({event:a,listeners:f}),a.target=tl)))}function Eh(s,a){var u={};return u[s.toLowerCase()]=a.toLowerCase(),u["Webkit"+s]="webkit"+a,u["Moz"+s]="moz"+a,u}var nl={animationend:Eh("Animation","AnimationEnd"),animationiteration:Eh("Animation","AnimationIteration"),animationstart:Eh("Animation","AnimationStart"),transitionend:Eh("Transition","TransitionEnd")},zm={},o0={};c&&(o0=document.createElement("div").style,"AnimationEvent"in window||(delete nl.animationend.animation,delete nl.animationiteration.animation,delete nl.animationstart.animation),"TransitionEvent"in window||delete nl.transitionend.transition);function Ih(s){if(zm[s])return zm[s];if(!nl[s])return s;var a=nl[s],u;for(u in a)if(a.hasOwnProperty(u)&&u in o0)return zm[s]=a[u];return s}var a0=Ih("animationend"),l0=Ih("animationiteration"),u0=Ih("animationstart"),c0=Ih("transitionend"),d0=new Map,h0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bs(s,a){d0.set(s,a),o(a,[s])}for(var Bm=0;Bm<h0.length;Bm++){var $m=h0[Bm],tC=$m.toLowerCase(),nC=$m[0].toUpperCase()+$m.slice(1);bs(tC,"on"+nC)}bs(a0,"onAnimationEnd"),bs(l0,"onAnimationIteration"),bs(u0,"onAnimationStart"),bs("dblclick","onDoubleClick"),bs("focusin","onFocus"),bs("focusout","onBlur"),bs(c0,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zu));function f0(s,a,u){var f=s.type||"unknown-event";s.currentTarget=u,Jd(f,a,void 0,s),s.currentTarget=null}function p0(s,a){a=(a&4)!==0;for(var u=0;u<s.length;u++){var f=s[u],m=f.event;f=f.listeners;e:{var _=void 0;if(a)for(var A=f.length-1;0<=A;A--){var j=f[A],$=j.instance,te=j.currentTarget;if(j=j.listener,$!==_&&m.isPropagationStopped())break e;f0(m,j,te),_=$}else for(A=0;A<f.length;A++){if(j=f[A],$=j.instance,te=j.currentTarget,j=j.listener,$!==_&&m.isPropagationStopped())break e;f0(m,j,te),_=$}}}if(Mr)throw s=Mu,Mr=!1,Mu=null,s}function _t(s,a){var u=a[Xm];u===void 0&&(u=a[Xm]=new Set);var f=s+"__bubble";u.has(f)||(m0(a,s,2,!1),u.add(f))}function qm(s,a,u){var f=0;a&&(f|=4),m0(u,s,f,a)}var Th="_reactListening"+Math.random().toString(36).slice(2);function ec(s){if(!s[Th]){s[Th]=!0,r.forEach(function(u){u!=="selectionchange"&&(rC.has(u)||qm(u,!1,s),qm(u,!0,s))});var a=s.nodeType===9?s:s.ownerDocument;a===null||a[Th]||(a[Th]=!0,qm("selectionchange",!1,a))}}function m0(s,a,u,f){switch(qu(a)){case 1:var m=Tt;break;case 4:m=Nm;break;default:m=$u}u=m.bind(null,a,u,s),m=void 0,!Va||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(m=!0),f?m!==void 0?s.addEventListener(a,u,{capture:!0,passive:m}):s.addEventListener(a,u,!0):m!==void 0?s.addEventListener(a,u,{passive:m}):s.addEventListener(a,u,!1)}function Wm(s,a,u,f,m){var _=f;if(!(a&1)&&!(a&2)&&f!==null)e:for(;;){if(f===null)return;var A=f.tag;if(A===3||A===4){var j=f.stateNode.containerInfo;if(j===m||j.nodeType===8&&j.parentNode===m)break;if(A===4)for(A=f.return;A!==null;){var $=A.tag;if(($===3||$===4)&&($=A.stateNode.containerInfo,$===m||$.nodeType===8&&$.parentNode===m))return;A=A.return}for(;j!==null;){if(A=xo(j),A===null)return;if($=A.tag,$===5||$===6){f=_=A;continue e}j=j.parentNode}}f=f.return}Vu(function(){var te=_,me=Da(u),ye=[];e:{var he=d0.get(s);if(he!==void 0){var Re=Ga,ke=s;switch(s){case"keypress":if(Ha(u)===0)break e;case"keydown":case"keyup":Re=y;break;case"focusin":ke="focus",Re=Xa;break;case"focusout":ke="blur",Re=Xa;break;case"beforeblur":case"afterblur":Re=Xa;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Re=Qa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Re=fh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Re=ie;break;case a0:case l0:case u0:Re=Fi;break;case c0:Re=ot;break;case"scroll":Re=Lm;break;case"wheel":Re=et;break;case"copy":case"cut":case"paste":Re=gh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Re=O}var Ce=(a&4)!==0,qt=!Ce&&s==="scroll",Q=Ce?he!==null?he+"Capture":null:he;Ce=[];for(var W=te,Z;W!==null;){Z=W;var ve=Z.stateNode;if(Z.tag===5&&ve!==null&&(Z=ve,Q!==null&&(ve=$t(W,Q),ve!=null&&Ce.push(tc(W,ve,Z)))),qt)break;W=W.return}0<Ce.length&&(he=new Re(he,ke,null,u,me),ye.push({event:he,listeners:Ce}))}}if(!(a&7)){e:{if(he=s==="mouseover"||s==="pointerover",Re=s==="mouseout"||s==="pointerout",he&&u!==_o&&(ke=u.relatedTarget||u.fromElement)&&(xo(ke)||ke[Ui]))break e;if((Re||he)&&(he=me.window===me?me:(he=me.ownerDocument)?he.defaultView||he.parentWindow:window,Re?(ke=u.relatedTarget||u.toElement,Re=te,ke=ke?xo(ke):null,ke!==null&&(qt=Fr(ke),ke!==qt||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(Re=null,ke=te),Re!==ke)){if(Ce=Qa,ve="onMouseLeave",Q="onMouseEnter",W="mouse",(s==="pointerout"||s==="pointerover")&&(Ce=O,ve="onPointerLeave",Q="onPointerEnter",W="pointer"),qt=Re==null?he:sl(Re),Z=ke==null?he:sl(ke),he=new Ce(ve,W+"leave",Re,u,me),he.target=qt,he.relatedTarget=Z,ve=null,xo(me)===te&&(Ce=new Ce(Q,W+"enter",ke,u,me),Ce.target=Z,Ce.relatedTarget=qt,ve=Ce),qt=ve,Re&&ke)t:{for(Ce=Re,Q=ke,W=0,Z=Ce;Z;Z=rl(Z))W++;for(Z=0,ve=Q;ve;ve=rl(ve))Z++;for(;0<W-Z;)Ce=rl(Ce),W--;for(;0<Z-W;)Q=rl(Q),Z--;for(;W--;){if(Ce===Q||Q!==null&&Ce===Q.alternate)break t;Ce=rl(Ce),Q=rl(Q)}Ce=null}else Ce=null;Re!==null&&g0(ye,he,Re,Ce,!1),ke!==null&&qt!==null&&g0(ye,qt,ke,Ce,!0)}}e:{if(he=te?sl(te):window,Re=he.nodeName&&he.nodeName.toLowerCase(),Re==="select"||Re==="input"&&he.type==="file")var Oe=Gk;else if(Qw(he))if(Xw)Oe=Xk;else{Oe=Qk;var Ve=Kk}else(Re=he.nodeName)&&Re.toLowerCase()==="input"&&(he.type==="checkbox"||he.type==="radio")&&(Oe=Yk);if(Oe&&(Oe=Oe(s,te))){Yw(ye,Oe,u,me);break e}Ve&&Ve(s,he,te),s==="focusout"&&(Ve=he._wrapperState)&&Ve.controlled&&he.type==="number"&&yt(he,"number",he.value)}switch(Ve=te?sl(te):window,s){case"focusin":(Qw(Ve)||Ve.contentEditable==="true")&&(tl=Ve,Um=te,Ju=null);break;case"focusout":Ju=Um=tl=null;break;case"mousedown":jm=!0;break;case"contextmenu":case"mouseup":case"dragend":jm=!1,s0(ye,u,me);break;case"selectionchange":if(eC)break;case"keydown":case"keyup":s0(ye,u,me)}var Me;if(Kt)e:{switch(s){case"compositionstart":var Fe="onCompositionStart";break e;case"compositionend":Fe="onCompositionEnd";break e;case"compositionupdate":Fe="onCompositionUpdate";break e}Fe=void 0}else el?Gw(s,u)&&(Fe="onCompositionEnd"):s==="keydown"&&u.keyCode===229&&(Fe="onCompositionStart");Fe&&(Co&&u.locale!=="ko"&&(el||Fe!=="onCompositionStart"?Fe==="onCompositionEnd"&&el&&(Me=Wu()):(sr=me,Wa="value"in sr?sr.value:sr.textContent,el=!0)),Ve=Sh(te,Fe),0<Ve.length&&(Fe=new Ku(Fe,s,null,u,me),ye.push({event:Fe,listeners:Ve}),Me?Fe.data=Me:(Me=Kw(u),Me!==null&&(Fe.data=Me)))),(Me=or?$k(s,u):qk(s,u))&&(te=Sh(te,"onBeforeInput"),0<te.length&&(me=new Ku("onBeforeInput","beforeinput",null,u,me),ye.push({event:me,listeners:te}),me.data=Me))}p0(ye,a)})}function tc(s,a,u){return{instance:s,listener:a,currentTarget:u}}function Sh(s,a){for(var u=a+"Capture",f=[];s!==null;){var m=s,_=m.stateNode;m.tag===5&&_!==null&&(m=_,_=$t(s,u),_!=null&&f.unshift(tc(s,_,m)),_=$t(s,a),_!=null&&f.push(tc(s,_,m))),s=s.return}return f}function rl(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5);return s||null}function g0(s,a,u,f,m){for(var _=a._reactName,A=[];u!==null&&u!==f;){var j=u,$=j.alternate,te=j.stateNode;if($!==null&&$===f)break;j.tag===5&&te!==null&&(j=te,m?($=$t(u,_),$!=null&&A.unshift(tc(u,$,j))):m||($=$t(u,_),$!=null&&A.push(tc(u,$,j)))),u=u.return}A.length!==0&&s.push({event:a,listeners:A})}var iC=/\r\n?/g,sC=/\u0000|\uFFFD/g;function y0(s){return(typeof s=="string"?s:""+s).replace(iC,`
`).replace(sC,"")}function bh(s,a,u){if(a=y0(a),y0(s)!==a&&u)throw Error(t(425))}function Rh(){}var Hm=null,Gm=null;function Km(s,a){return s==="textarea"||s==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Qm=typeof setTimeout=="function"?setTimeout:void 0,oC=typeof clearTimeout=="function"?clearTimeout:void 0,_0=typeof Promise=="function"?Promise:void 0,aC=typeof queueMicrotask=="function"?queueMicrotask:typeof _0<"u"?function(s){return _0.resolve(null).then(s).catch(lC)}:Qm;function lC(s){setTimeout(function(){throw s})}function Ym(s,a){var u=a,f=0;do{var m=u.nextSibling;if(s.removeChild(u),m&&m.nodeType===8)if(u=m.data,u==="/$"){if(f===0){s.removeChild(m),$r(a);return}f--}else u!=="$"&&u!=="$?"&&u!=="$!"||f++;u=m}while(u);$r(a)}function Rs(s){for(;s!=null;s=s.nextSibling){var a=s.nodeType;if(a===1||a===3)break;if(a===8){if(a=s.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return s}function v0(s){s=s.previousSibling;for(var a=0;s;){if(s.nodeType===8){var u=s.data;if(u==="$"||u==="$!"||u==="$?"){if(a===0)return s;a--}else u==="/$"&&a++}s=s.previousSibling}return null}var il=Math.random().toString(36).slice(2),li="__reactFiber$"+il,nc="__reactProps$"+il,Ui="__reactContainer$"+il,Xm="__reactEvents$"+il,uC="__reactListeners$"+il,cC="__reactHandles$"+il;function xo(s){var a=s[li];if(a)return a;for(var u=s.parentNode;u;){if(a=u[Ui]||u[li]){if(u=a.alternate,a.child!==null||u!==null&&u.child!==null)for(s=v0(s);s!==null;){if(u=s[li])return u;s=v0(s)}return a}s=u,u=s.parentNode}return null}function rc(s){return s=s[li]||s[Ui],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}function sl(s){if(s.tag===5||s.tag===6)return s.stateNode;throw Error(t(33))}function Ph(s){return s[nc]||null}var Jm=[],ol=-1;function Ps(s){return{current:s}}function vt(s){0>ol||(s.current=Jm[ol],Jm[ol]=null,ol--)}function ft(s,a){ol++,Jm[ol]=s.current,s.current=a}var As={},In=Ps(As),qn=Ps(!1),Oo=As;function al(s,a){var u=s.type.contextTypes;if(!u)return As;var f=s.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===a)return f.__reactInternalMemoizedMaskedChildContext;var m={},_;for(_ in u)m[_]=a[_];return f&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=a,s.__reactInternalMemoizedMaskedChildContext=m),m}function Wn(s){return s=s.childContextTypes,s!=null}function Ah(){vt(qn),vt(In)}function w0(s,a,u){if(In.current!==As)throw Error(t(168));ft(In,a),ft(qn,u)}function E0(s,a,u){var f=s.stateNode;if(a=a.childContextTypes,typeof f.getChildContext!="function")return u;f=f.getChildContext();for(var m in f)if(!(m in a))throw Error(t(108,ce(s)||"Unknown",m));return I({},u,f)}function kh(s){return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||As,Oo=In.current,ft(In,s),ft(qn,qn.current),!0}function I0(s,a,u){var f=s.stateNode;if(!f)throw Error(t(169));u?(s=E0(s,a,Oo),f.__reactInternalMemoizedMergedChildContext=s,vt(qn),vt(In),ft(In,s)):vt(qn),ft(qn,u)}var ji=null,Ch=!1,Zm=!1;function T0(s){ji===null?ji=[s]:ji.push(s)}function dC(s){Ch=!0,T0(s)}function ks(){if(!Zm&&ji!==null){Zm=!0;var s=0,a=Ze;try{var u=ji;for(Ze=1;s<u.length;s++){var f=u[s];do f=f(!0);while(f!==null)}ji=null,Ch=!1}catch(m){throw ji!==null&&(ji=ji.slice(s+1)),ja(To,ks),m}finally{Ze=a,Zm=!1}}return null}var ll=[],ul=0,xh=null,Oh=0,Ir=[],Tr=0,Do=null,zi=1,Bi="";function No(s,a){ll[ul++]=Oh,ll[ul++]=xh,xh=s,Oh=a}function S0(s,a,u){Ir[Tr++]=zi,Ir[Tr++]=Bi,Ir[Tr++]=Do,Do=s;var f=zi;s=Bi;var m=32-xn(f)-1;f&=~(1<<m),u+=1;var _=32-xn(a)+m;if(30<_){var A=m-m%5;_=(f&(1<<A)-1).toString(32),f>>=A,m-=A,zi=1<<32-xn(a)+m|u<<m|f,Bi=_+s}else zi=1<<_|u<<m|f,Bi=s}function eg(s){s.return!==null&&(No(s,1),S0(s,1,0))}function tg(s){for(;s===xh;)xh=ll[--ul],ll[ul]=null,Oh=ll[--ul],ll[ul]=null;for(;s===Do;)Do=Ir[--Tr],Ir[Tr]=null,Bi=Ir[--Tr],Ir[Tr]=null,zi=Ir[--Tr],Ir[Tr]=null}var ar=null,lr=null,St=!1,Hr=null;function b0(s,a){var u=Pr(5,null,null,0);u.elementType="DELETED",u.stateNode=a,u.return=s,a=s.deletions,a===null?(s.deletions=[u],s.flags|=16):a.push(u)}function R0(s,a){switch(s.tag){case 5:var u=s.type;return a=a.nodeType!==1||u.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(s.stateNode=a,ar=s,lr=Rs(a.firstChild),!0):!1;case 6:return a=s.pendingProps===""||a.nodeType!==3?null:a,a!==null?(s.stateNode=a,ar=s,lr=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(u=Do!==null?{id:zi,overflow:Bi}:null,s.memoizedState={dehydrated:a,treeContext:u,retryLane:1073741824},u=Pr(18,null,null,0),u.stateNode=a,u.return=s,s.child=u,ar=s,lr=null,!0):!1;default:return!1}}function ng(s){return(s.mode&1)!==0&&(s.flags&128)===0}function rg(s){if(St){var a=lr;if(a){var u=a;if(!R0(s,a)){if(ng(s))throw Error(t(418));a=Rs(u.nextSibling);var f=ar;a&&R0(s,a)?b0(f,u):(s.flags=s.flags&-4097|2,St=!1,ar=s)}}else{if(ng(s))throw Error(t(418));s.flags=s.flags&-4097|2,St=!1,ar=s}}}function P0(s){for(s=s.return;s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;)s=s.return;ar=s}function Dh(s){if(s!==ar)return!1;if(!St)return P0(s),St=!0,!1;var a;if((a=s.tag!==3)&&!(a=s.tag!==5)&&(a=s.type,a=a!=="head"&&a!=="body"&&!Km(s.type,s.memoizedProps)),a&&(a=lr)){if(ng(s))throw A0(),Error(t(418));for(;a;)b0(s,a),a=Rs(a.nextSibling)}if(P0(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(t(317));e:{for(s=s.nextSibling,a=0;s;){if(s.nodeType===8){var u=s.data;if(u==="/$"){if(a===0){lr=Rs(s.nextSibling);break e}a--}else u!=="$"&&u!=="$!"&&u!=="$?"||a++}s=s.nextSibling}lr=null}}else lr=ar?Rs(s.stateNode.nextSibling):null;return!0}function A0(){for(var s=lr;s;)s=Rs(s.nextSibling)}function cl(){lr=ar=null,St=!1}function ig(s){Hr===null?Hr=[s]:Hr.push(s)}var hC=X.ReactCurrentBatchConfig;function ic(s,a,u){if(s=u.ref,s!==null&&typeof s!="function"&&typeof s!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(t(309));var f=u.stateNode}if(!f)throw Error(t(147,s));var m=f,_=""+s;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===_?a.ref:(a=function(A){var j=m.refs;A===null?delete j[_]:j[_]=A},a._stringRef=_,a)}if(typeof s!="string")throw Error(t(284));if(!u._owner)throw Error(t(290,s))}return s}function Nh(s,a){throw s=Object.prototype.toString.call(a),Error(t(31,s==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":s))}function k0(s){var a=s._init;return a(s._payload)}function C0(s){function a(Q,W){if(s){var Z=Q.deletions;Z===null?(Q.deletions=[W],Q.flags|=16):Z.push(W)}}function u(Q,W){if(!s)return null;for(;W!==null;)a(Q,W),W=W.sibling;return null}function f(Q,W){for(Q=new Map;W!==null;)W.key!==null?Q.set(W.key,W):Q.set(W.index,W),W=W.sibling;return Q}function m(Q,W){return Q=Ms(Q,W),Q.index=0,Q.sibling=null,Q}function _(Q,W,Z){return Q.index=Z,s?(Z=Q.alternate,Z!==null?(Z=Z.index,Z<W?(Q.flags|=2,W):Z):(Q.flags|=2,W)):(Q.flags|=1048576,W)}function A(Q){return s&&Q.alternate===null&&(Q.flags|=2),Q}function j(Q,W,Z,ve){return W===null||W.tag!==6?(W=Qg(Z,Q.mode,ve),W.return=Q,W):(W=m(W,Z),W.return=Q,W)}function $(Q,W,Z,ve){var Oe=Z.type;return Oe===R?me(Q,W,Z.props.children,ve,Z.key):W!==null&&(W.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===pe&&k0(Oe)===W.type)?(ve=m(W,Z.props),ve.ref=ic(Q,W,Z),ve.return=Q,ve):(ve=sf(Z.type,Z.key,Z.props,null,Q.mode,ve),ve.ref=ic(Q,W,Z),ve.return=Q,ve)}function te(Q,W,Z,ve){return W===null||W.tag!==4||W.stateNode.containerInfo!==Z.containerInfo||W.stateNode.implementation!==Z.implementation?(W=Yg(Z,Q.mode,ve),W.return=Q,W):(W=m(W,Z.children||[]),W.return=Q,W)}function me(Q,W,Z,ve,Oe){return W===null||W.tag!==7?(W=Bo(Z,Q.mode,ve,Oe),W.return=Q,W):(W=m(W,Z),W.return=Q,W)}function ye(Q,W,Z){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Qg(""+W,Q.mode,Z),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case V:return Z=sf(W.type,W.key,W.props,null,Q.mode,Z),Z.ref=ic(Q,null,W),Z.return=Q,Z;case F:return W=Yg(W,Q.mode,Z),W.return=Q,W;case pe:var ve=W._init;return ye(Q,ve(W._payload),Z)}if(ct(W)||B(W))return W=Bo(W,Q.mode,Z,null),W.return=Q,W;Nh(Q,W)}return null}function he(Q,W,Z,ve){var Oe=W!==null?W.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Oe!==null?null:j(Q,W,""+Z,ve);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case V:return Z.key===Oe?$(Q,W,Z,ve):null;case F:return Z.key===Oe?te(Q,W,Z,ve):null;case pe:return Oe=Z._init,he(Q,W,Oe(Z._payload),ve)}if(ct(Z)||B(Z))return Oe!==null?null:me(Q,W,Z,ve,null);Nh(Q,Z)}return null}function Re(Q,W,Z,ve,Oe){if(typeof ve=="string"&&ve!==""||typeof ve=="number")return Q=Q.get(Z)||null,j(W,Q,""+ve,Oe);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case V:return Q=Q.get(ve.key===null?Z:ve.key)||null,$(W,Q,ve,Oe);case F:return Q=Q.get(ve.key===null?Z:ve.key)||null,te(W,Q,ve,Oe);case pe:var Ve=ve._init;return Re(Q,W,Z,Ve(ve._payload),Oe)}if(ct(ve)||B(ve))return Q=Q.get(Z)||null,me(W,Q,ve,Oe,null);Nh(W,ve)}return null}function ke(Q,W,Z,ve){for(var Oe=null,Ve=null,Me=W,Fe=W=0,ln=null;Me!==null&&Fe<Z.length;Fe++){Me.index>Fe?(ln=Me,Me=null):ln=Me.sibling;var rt=he(Q,Me,Z[Fe],ve);if(rt===null){Me===null&&(Me=ln);break}s&&Me&&rt.alternate===null&&a(Q,Me),W=_(rt,W,Fe),Ve===null?Oe=rt:Ve.sibling=rt,Ve=rt,Me=ln}if(Fe===Z.length)return u(Q,Me),St&&No(Q,Fe),Oe;if(Me===null){for(;Fe<Z.length;Fe++)Me=ye(Q,Z[Fe],ve),Me!==null&&(W=_(Me,W,Fe),Ve===null?Oe=Me:Ve.sibling=Me,Ve=Me);return St&&No(Q,Fe),Oe}for(Me=f(Q,Me);Fe<Z.length;Fe++)ln=Re(Me,Q,Fe,Z[Fe],ve),ln!==null&&(s&&ln.alternate!==null&&Me.delete(ln.key===null?Fe:ln.key),W=_(ln,W,Fe),Ve===null?Oe=ln:Ve.sibling=ln,Ve=ln);return s&&Me.forEach(function(Fs){return a(Q,Fs)}),St&&No(Q,Fe),Oe}function Ce(Q,W,Z,ve){var Oe=B(Z);if(typeof Oe!="function")throw Error(t(150));if(Z=Oe.call(Z),Z==null)throw Error(t(151));for(var Ve=Oe=null,Me=W,Fe=W=0,ln=null,rt=Z.next();Me!==null&&!rt.done;Fe++,rt=Z.next()){Me.index>Fe?(ln=Me,Me=null):ln=Me.sibling;var Fs=he(Q,Me,rt.value,ve);if(Fs===null){Me===null&&(Me=ln);break}s&&Me&&Fs.alternate===null&&a(Q,Me),W=_(Fs,W,Fe),Ve===null?Oe=Fs:Ve.sibling=Fs,Ve=Fs,Me=ln}if(rt.done)return u(Q,Me),St&&No(Q,Fe),Oe;if(Me===null){for(;!rt.done;Fe++,rt=Z.next())rt=ye(Q,rt.value,ve),rt!==null&&(W=_(rt,W,Fe),Ve===null?Oe=rt:Ve.sibling=rt,Ve=rt);return St&&No(Q,Fe),Oe}for(Me=f(Q,Me);!rt.done;Fe++,rt=Z.next())rt=Re(Me,Q,Fe,rt.value,ve),rt!==null&&(s&&rt.alternate!==null&&Me.delete(rt.key===null?Fe:rt.key),W=_(rt,W,Fe),Ve===null?Oe=rt:Ve.sibling=rt,Ve=rt);return s&&Me.forEach(function(WC){return a(Q,WC)}),St&&No(Q,Fe),Oe}function qt(Q,W,Z,ve){if(typeof Z=="object"&&Z!==null&&Z.type===R&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case V:e:{for(var Oe=Z.key,Ve=W;Ve!==null;){if(Ve.key===Oe){if(Oe=Z.type,Oe===R){if(Ve.tag===7){u(Q,Ve.sibling),W=m(Ve,Z.props.children),W.return=Q,Q=W;break e}}else if(Ve.elementType===Oe||typeof Oe=="object"&&Oe!==null&&Oe.$$typeof===pe&&k0(Oe)===Ve.type){u(Q,Ve.sibling),W=m(Ve,Z.props),W.ref=ic(Q,Ve,Z),W.return=Q,Q=W;break e}u(Q,Ve);break}else a(Q,Ve);Ve=Ve.sibling}Z.type===R?(W=Bo(Z.props.children,Q.mode,ve,Z.key),W.return=Q,Q=W):(ve=sf(Z.type,Z.key,Z.props,null,Q.mode,ve),ve.ref=ic(Q,W,Z),ve.return=Q,Q=ve)}return A(Q);case F:e:{for(Ve=Z.key;W!==null;){if(W.key===Ve)if(W.tag===4&&W.stateNode.containerInfo===Z.containerInfo&&W.stateNode.implementation===Z.implementation){u(Q,W.sibling),W=m(W,Z.children||[]),W.return=Q,Q=W;break e}else{u(Q,W);break}else a(Q,W);W=W.sibling}W=Yg(Z,Q.mode,ve),W.return=Q,Q=W}return A(Q);case pe:return Ve=Z._init,qt(Q,W,Ve(Z._payload),ve)}if(ct(Z))return ke(Q,W,Z,ve);if(B(Z))return Ce(Q,W,Z,ve);Nh(Q,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,W!==null&&W.tag===6?(u(Q,W.sibling),W=m(W,Z),W.return=Q,Q=W):(u(Q,W),W=Qg(Z,Q.mode,ve),W.return=Q,Q=W),A(Q)):u(Q,W)}return qt}var dl=C0(!0),x0=C0(!1),Lh=Ps(null),Vh=null,hl=null,sg=null;function og(){sg=hl=Vh=null}function ag(s){var a=Lh.current;vt(Lh),s._currentValue=a}function lg(s,a,u){for(;s!==null;){var f=s.alternate;if((s.childLanes&a)!==a?(s.childLanes|=a,f!==null&&(f.childLanes|=a)):f!==null&&(f.childLanes&a)!==a&&(f.childLanes|=a),s===u)break;s=s.return}}function fl(s,a){Vh=s,sg=hl=null,s=s.dependencies,s!==null&&s.firstContext!==null&&(s.lanes&a&&(Hn=!0),s.firstContext=null)}function Sr(s){var a=s._currentValue;if(sg!==s)if(s={context:s,memoizedValue:a,next:null},hl===null){if(Vh===null)throw Error(t(308));hl=s,Vh.dependencies={lanes:0,firstContext:s}}else hl=hl.next=s;return a}var Lo=null;function ug(s){Lo===null?Lo=[s]:Lo.push(s)}function O0(s,a,u,f){var m=a.interleaved;return m===null?(u.next=u,ug(a)):(u.next=m.next,m.next=u),a.interleaved=u,$i(s,f)}function $i(s,a){s.lanes|=a;var u=s.alternate;for(u!==null&&(u.lanes|=a),u=s,s=s.return;s!==null;)s.childLanes|=a,u=s.alternate,u!==null&&(u.childLanes|=a),u=s,s=s.return;return u.tag===3?u.stateNode:null}var Cs=!1;function cg(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D0(s,a){s=s.updateQueue,a.updateQueue===s&&(a.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects})}function qi(s,a){return{eventTime:s,lane:a,tag:0,payload:null,callback:null,next:null}}function xs(s,a,u){var f=s.updateQueue;if(f===null)return null;if(f=f.shared,nt&2){var m=f.pending;return m===null?a.next=a:(a.next=m.next,m.next=a),f.pending=a,$i(s,u)}return m=f.interleaved,m===null?(a.next=a,ug(f)):(a.next=m.next,m.next=a),f.interleaved=a,$i(s,u)}function Mh(s,a,u){if(a=a.updateQueue,a!==null&&(a=a.shared,(u&4194240)!==0)){var f=a.lanes;f&=s.pendingLanes,u|=f,a.lanes=u,ws(s,u)}}function N0(s,a){var u=s.updateQueue,f=s.alternate;if(f!==null&&(f=f.updateQueue,u===f)){var m=null,_=null;if(u=u.firstBaseUpdate,u!==null){do{var A={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};_===null?m=_=A:_=_.next=A,u=u.next}while(u!==null);_===null?m=_=a:_=_.next=a}else m=_=a;u={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:f.shared,effects:f.effects},s.updateQueue=u;return}s=u.lastBaseUpdate,s===null?u.firstBaseUpdate=a:s.next=a,u.lastBaseUpdate=a}function Fh(s,a,u,f){var m=s.updateQueue;Cs=!1;var _=m.firstBaseUpdate,A=m.lastBaseUpdate,j=m.shared.pending;if(j!==null){m.shared.pending=null;var $=j,te=$.next;$.next=null,A===null?_=te:A.next=te,A=$;var me=s.alternate;me!==null&&(me=me.updateQueue,j=me.lastBaseUpdate,j!==A&&(j===null?me.firstBaseUpdate=te:j.next=te,me.lastBaseUpdate=$))}if(_!==null){var ye=m.baseState;A=0,me=te=$=null,j=_;do{var he=j.lane,Re=j.eventTime;if((f&he)===he){me!==null&&(me=me.next={eventTime:Re,lane:0,tag:j.tag,payload:j.payload,callback:j.callback,next:null});e:{var ke=s,Ce=j;switch(he=a,Re=u,Ce.tag){case 1:if(ke=Ce.payload,typeof ke=="function"){ye=ke.call(Re,ye,he);break e}ye=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=Ce.payload,he=typeof ke=="function"?ke.call(Re,ye,he):ke,he==null)break e;ye=I({},ye,he);break e;case 2:Cs=!0}}j.callback!==null&&j.lane!==0&&(s.flags|=64,he=m.effects,he===null?m.effects=[j]:he.push(j))}else Re={eventTime:Re,lane:he,tag:j.tag,payload:j.payload,callback:j.callback,next:null},me===null?(te=me=Re,$=ye):me=me.next=Re,A|=he;if(j=j.next,j===null){if(j=m.shared.pending,j===null)break;he=j,j=he.next,he.next=null,m.lastBaseUpdate=he,m.shared.pending=null}}while(!0);if(me===null&&($=ye),m.baseState=$,m.firstBaseUpdate=te,m.lastBaseUpdate=me,a=m.shared.interleaved,a!==null){m=a;do A|=m.lane,m=m.next;while(m!==a)}else _===null&&(m.shared.lanes=0);Fo|=A,s.lanes=A,s.memoizedState=ye}}function L0(s,a,u){if(s=a.effects,a.effects=null,s!==null)for(a=0;a<s.length;a++){var f=s[a],m=f.callback;if(m!==null){if(f.callback=null,f=u,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var sc={},ui=Ps(sc),oc=Ps(sc),ac=Ps(sc);function Vo(s){if(s===sc)throw Error(t(174));return s}function dg(s,a){switch(ft(ac,a),ft(oc,s),ft(ui,sc),s=a.nodeType,s){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:lt(null,"");break;default:s=s===8?a.parentNode:a,a=s.namespaceURI||null,s=s.tagName,a=lt(a,s)}vt(ui),ft(ui,a)}function pl(){vt(ui),vt(oc),vt(ac)}function V0(s){Vo(ac.current);var a=Vo(ui.current),u=lt(a,s.type);a!==u&&(ft(oc,s),ft(ui,u))}function hg(s){oc.current===s&&(vt(ui),vt(oc))}var Ct=Ps(0);function Uh(s){for(var a=s;a!==null;){if(a.tag===13){var u=a.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var fg=[];function pg(){for(var s=0;s<fg.length;s++)fg[s]._workInProgressVersionPrimary=null;fg.length=0}var jh=X.ReactCurrentDispatcher,mg=X.ReactCurrentBatchConfig,Mo=0,xt=null,en=null,on=null,zh=!1,lc=!1,uc=0,fC=0;function Tn(){throw Error(t(321))}function gg(s,a){if(a===null)return!1;for(var u=0;u<a.length&&u<s.length;u++)if(!Wr(s[u],a[u]))return!1;return!0}function yg(s,a,u,f,m,_){if(Mo=_,xt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,jh.current=s===null||s.memoizedState===null?yC:_C,s=u(f,m),lc){_=0;do{if(lc=!1,uc=0,25<=_)throw Error(t(301));_+=1,on=en=null,a.updateQueue=null,jh.current=vC,s=u(f,m)}while(lc)}if(jh.current=qh,a=en!==null&&en.next!==null,Mo=0,on=en=xt=null,zh=!1,a)throw Error(t(300));return s}function _g(){var s=uc!==0;return uc=0,s}function ci(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?xt.memoizedState=on=s:on=on.next=s,on}function br(){if(en===null){var s=xt.alternate;s=s!==null?s.memoizedState:null}else s=en.next;var a=on===null?xt.memoizedState:on.next;if(a!==null)on=a,en=s;else{if(s===null)throw Error(t(310));en=s,s={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},on===null?xt.memoizedState=on=s:on=on.next=s}return on}function cc(s,a){return typeof a=="function"?a(s):a}function vg(s){var a=br(),u=a.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=s;var f=en,m=f.baseQueue,_=u.pending;if(_!==null){if(m!==null){var A=m.next;m.next=_.next,_.next=A}f.baseQueue=m=_,u.pending=null}if(m!==null){_=m.next,f=f.baseState;var j=A=null,$=null,te=_;do{var me=te.lane;if((Mo&me)===me)$!==null&&($=$.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),f=te.hasEagerState?te.eagerState:s(f,te.action);else{var ye={lane:me,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};$===null?(j=$=ye,A=f):$=$.next=ye,xt.lanes|=me,Fo|=me}te=te.next}while(te!==null&&te!==_);$===null?A=f:$.next=j,Wr(f,a.memoizedState)||(Hn=!0),a.memoizedState=f,a.baseState=A,a.baseQueue=$,u.lastRenderedState=f}if(s=u.interleaved,s!==null){m=s;do _=m.lane,xt.lanes|=_,Fo|=_,m=m.next;while(m!==s)}else m===null&&(u.lanes=0);return[a.memoizedState,u.dispatch]}function wg(s){var a=br(),u=a.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=s;var f=u.dispatch,m=u.pending,_=a.memoizedState;if(m!==null){u.pending=null;var A=m=m.next;do _=s(_,A.action),A=A.next;while(A!==m);Wr(_,a.memoizedState)||(Hn=!0),a.memoizedState=_,a.baseQueue===null&&(a.baseState=_),u.lastRenderedState=_}return[_,f]}function M0(){}function F0(s,a){var u=xt,f=br(),m=a(),_=!Wr(f.memoizedState,m);if(_&&(f.memoizedState=m,Hn=!0),f=f.queue,Eg(z0.bind(null,u,f,s),[s]),f.getSnapshot!==a||_||on!==null&&on.memoizedState.tag&1){if(u.flags|=2048,dc(9,j0.bind(null,u,f,m,a),void 0,null),an===null)throw Error(t(349));Mo&30||U0(u,a,m)}return m}function U0(s,a,u){s.flags|=16384,s={getSnapshot:a,value:u},a=xt.updateQueue,a===null?(a={lastEffect:null,stores:null},xt.updateQueue=a,a.stores=[s]):(u=a.stores,u===null?a.stores=[s]:u.push(s))}function j0(s,a,u,f){a.value=u,a.getSnapshot=f,B0(a)&&$0(s)}function z0(s,a,u){return u(function(){B0(a)&&$0(s)})}function B0(s){var a=s.getSnapshot;s=s.value;try{var u=a();return!Wr(s,u)}catch{return!0}}function $0(s){var a=$i(s,1);a!==null&&Yr(a,s,1,-1)}function q0(s){var a=ci();return typeof s=="function"&&(s=s()),a.memoizedState=a.baseState=s,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cc,lastRenderedState:s},a.queue=s,s=s.dispatch=gC.bind(null,xt,s),[a.memoizedState,s]}function dc(s,a,u,f){return s={tag:s,create:a,destroy:u,deps:f,next:null},a=xt.updateQueue,a===null?(a={lastEffect:null,stores:null},xt.updateQueue=a,a.lastEffect=s.next=s):(u=a.lastEffect,u===null?a.lastEffect=s.next=s:(f=u.next,u.next=s,s.next=f,a.lastEffect=s)),s}function W0(){return br().memoizedState}function Bh(s,a,u,f){var m=ci();xt.flags|=s,m.memoizedState=dc(1|a,u,void 0,f===void 0?null:f)}function $h(s,a,u,f){var m=br();f=f===void 0?null:f;var _=void 0;if(en!==null){var A=en.memoizedState;if(_=A.destroy,f!==null&&gg(f,A.deps)){m.memoizedState=dc(a,u,_,f);return}}xt.flags|=s,m.memoizedState=dc(1|a,u,_,f)}function H0(s,a){return Bh(8390656,8,s,a)}function Eg(s,a){return $h(2048,8,s,a)}function G0(s,a){return $h(4,2,s,a)}function K0(s,a){return $h(4,4,s,a)}function Q0(s,a){if(typeof a=="function")return s=s(),a(s),function(){a(null)};if(a!=null)return s=s(),a.current=s,function(){a.current=null}}function Y0(s,a,u){return u=u!=null?u.concat([s]):null,$h(4,4,Q0.bind(null,a,s),u)}function Ig(){}function X0(s,a){var u=br();a=a===void 0?null:a;var f=u.memoizedState;return f!==null&&a!==null&&gg(a,f[1])?f[0]:(u.memoizedState=[s,a],s)}function J0(s,a){var u=br();a=a===void 0?null:a;var f=u.memoizedState;return f!==null&&a!==null&&gg(a,f[1])?f[0]:(s=s(),u.memoizedState=[s,a],s)}function Z0(s,a,u){return Mo&21?(Wr(u,a)||(u=Ro(),xt.lanes|=u,Fo|=u,s.baseState=!0),a):(s.baseState&&(s.baseState=!1,Hn=!0),s.memoizedState=u)}function pC(s,a){var u=Ze;Ze=u!==0&&4>u?u:4,s(!0);var f=mg.transition;mg.transition={};try{s(!1),a()}finally{Ze=u,mg.transition=f}}function eE(){return br().memoizedState}function mC(s,a,u){var f=Ls(s);if(u={lane:f,action:u,hasEagerState:!1,eagerState:null,next:null},tE(s))nE(a,u);else if(u=O0(s,a,u,f),u!==null){var m=Nn();Yr(u,s,f,m),rE(u,a,f)}}function gC(s,a,u){var f=Ls(s),m={lane:f,action:u,hasEagerState:!1,eagerState:null,next:null};if(tE(s))nE(a,m);else{var _=s.alternate;if(s.lanes===0&&(_===null||_.lanes===0)&&(_=a.lastRenderedReducer,_!==null))try{var A=a.lastRenderedState,j=_(A,u);if(m.hasEagerState=!0,m.eagerState=j,Wr(j,A)){var $=a.interleaved;$===null?(m.next=m,ug(a)):(m.next=$.next,$.next=m),a.interleaved=m;return}}catch{}finally{}u=O0(s,a,m,f),u!==null&&(m=Nn(),Yr(u,s,f,m),rE(u,a,f))}}function tE(s){var a=s.alternate;return s===xt||a!==null&&a===xt}function nE(s,a){lc=zh=!0;var u=s.pending;u===null?a.next=a:(a.next=u.next,u.next=a),s.pending=a}function rE(s,a,u){if(u&4194240){var f=a.lanes;f&=s.pendingLanes,u|=f,a.lanes=u,ws(s,u)}}var qh={readContext:Sr,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},yC={readContext:Sr,useCallback:function(s,a){return ci().memoizedState=[s,a===void 0?null:a],s},useContext:Sr,useEffect:H0,useImperativeHandle:function(s,a,u){return u=u!=null?u.concat([s]):null,Bh(4194308,4,Q0.bind(null,a,s),u)},useLayoutEffect:function(s,a){return Bh(4194308,4,s,a)},useInsertionEffect:function(s,a){return Bh(4,2,s,a)},useMemo:function(s,a){var u=ci();return a=a===void 0?null:a,s=s(),u.memoizedState=[s,a],s},useReducer:function(s,a,u){var f=ci();return a=u!==void 0?u(a):a,f.memoizedState=f.baseState=a,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:a},f.queue=s,s=s.dispatch=mC.bind(null,xt,s),[f.memoizedState,s]},useRef:function(s){var a=ci();return s={current:s},a.memoizedState=s},useState:q0,useDebugValue:Ig,useDeferredValue:function(s){return ci().memoizedState=s},useTransition:function(){var s=q0(!1),a=s[0];return s=pC.bind(null,s[1]),ci().memoizedState=s,[a,s]},useMutableSource:function(){},useSyncExternalStore:function(s,a,u){var f=xt,m=ci();if(St){if(u===void 0)throw Error(t(407));u=u()}else{if(u=a(),an===null)throw Error(t(349));Mo&30||U0(f,a,u)}m.memoizedState=u;var _={value:u,getSnapshot:a};return m.queue=_,H0(z0.bind(null,f,_,s),[s]),f.flags|=2048,dc(9,j0.bind(null,f,_,u,a),void 0,null),u},useId:function(){var s=ci(),a=an.identifierPrefix;if(St){var u=Bi,f=zi;u=(f&~(1<<32-xn(f)-1)).toString(32)+u,a=":"+a+"R"+u,u=uc++,0<u&&(a+="H"+u.toString(32)),a+=":"}else u=fC++,a=":"+a+"r"+u.toString(32)+":";return s.memoizedState=a},unstable_isNewReconciler:!1},_C={readContext:Sr,useCallback:X0,useContext:Sr,useEffect:Eg,useImperativeHandle:Y0,useInsertionEffect:G0,useLayoutEffect:K0,useMemo:J0,useReducer:vg,useRef:W0,useState:function(){return vg(cc)},useDebugValue:Ig,useDeferredValue:function(s){var a=br();return Z0(a,en.memoizedState,s)},useTransition:function(){var s=vg(cc)[0],a=br().memoizedState;return[s,a]},useMutableSource:M0,useSyncExternalStore:F0,useId:eE,unstable_isNewReconciler:!1},vC={readContext:Sr,useCallback:X0,useContext:Sr,useEffect:Eg,useImperativeHandle:Y0,useInsertionEffect:G0,useLayoutEffect:K0,useMemo:J0,useReducer:wg,useRef:W0,useState:function(){return wg(cc)},useDebugValue:Ig,useDeferredValue:function(s){var a=br();return en===null?a.memoizedState=s:Z0(a,en.memoizedState,s)},useTransition:function(){var s=wg(cc)[0],a=br().memoizedState;return[s,a]},useMutableSource:M0,useSyncExternalStore:F0,useId:eE,unstable_isNewReconciler:!1};function Gr(s,a){if(s&&s.defaultProps){a=I({},a),s=s.defaultProps;for(var u in s)a[u]===void 0&&(a[u]=s[u]);return a}return a}function Tg(s,a,u,f){a=s.memoizedState,u=u(f,a),u=u==null?a:I({},a,u),s.memoizedState=u,s.lanes===0&&(s.updateQueue.baseState=u)}var Wh={isMounted:function(s){return(s=s._reactInternals)?Fr(s)===s:!1},enqueueSetState:function(s,a,u){s=s._reactInternals;var f=Nn(),m=Ls(s),_=qi(f,m);_.payload=a,u!=null&&(_.callback=u),a=xs(s,_,m),a!==null&&(Yr(a,s,m,f),Mh(a,s,m))},enqueueReplaceState:function(s,a,u){s=s._reactInternals;var f=Nn(),m=Ls(s),_=qi(f,m);_.tag=1,_.payload=a,u!=null&&(_.callback=u),a=xs(s,_,m),a!==null&&(Yr(a,s,m,f),Mh(a,s,m))},enqueueForceUpdate:function(s,a){s=s._reactInternals;var u=Nn(),f=Ls(s),m=qi(u,f);m.tag=2,a!=null&&(m.callback=a),a=xs(s,m,f),a!==null&&(Yr(a,s,f,u),Mh(a,s,f))}};function iE(s,a,u,f,m,_,A){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(f,_,A):a.prototype&&a.prototype.isPureReactComponent?!Xu(u,f)||!Xu(m,_):!0}function sE(s,a,u){var f=!1,m=As,_=a.contextType;return typeof _=="object"&&_!==null?_=Sr(_):(m=Wn(a)?Oo:In.current,f=a.contextTypes,_=(f=f!=null)?al(s,m):As),a=new a(u,_),s.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Wh,s.stateNode=a,a._reactInternals=s,f&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=m,s.__reactInternalMemoizedMaskedChildContext=_),a}function oE(s,a,u,f){s=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(u,f),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(u,f),a.state!==s&&Wh.enqueueReplaceState(a,a.state,null)}function Sg(s,a,u,f){var m=s.stateNode;m.props=u,m.state=s.memoizedState,m.refs={},cg(s);var _=a.contextType;typeof _=="object"&&_!==null?m.context=Sr(_):(_=Wn(a)?Oo:In.current,m.context=al(s,_)),m.state=s.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Tg(s,a,_,u),m.state=s.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(a=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),a!==m.state&&Wh.enqueueReplaceState(m,m.state,null),Fh(s,u,m,f),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308)}function ml(s,a){try{var u="",f=a;do u+=oe(f),f=f.return;while(f);var m=u}catch(_){m=`
Error generating stack: `+_.message+`
`+_.stack}return{value:s,source:a,stack:m,digest:null}}function bg(s,a,u){return{value:s,source:null,stack:u??null,digest:a??null}}function Rg(s,a){try{console.error(a.value)}catch(u){setTimeout(function(){throw u})}}var wC=typeof WeakMap=="function"?WeakMap:Map;function aE(s,a,u){u=qi(-1,u),u.tag=3,u.payload={element:null};var f=a.value;return u.callback=function(){Jh||(Jh=!0,zg=f),Rg(s,a)},u}function lE(s,a,u){u=qi(-1,u),u.tag=3;var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=a.value;u.payload=function(){return f(m)},u.callback=function(){Rg(s,a)}}var _=s.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(u.callback=function(){Rg(s,a),typeof f!="function"&&(Ds===null?Ds=new Set([this]):Ds.add(this));var A=a.stack;this.componentDidCatch(a.value,{componentStack:A!==null?A:""})}),u}function uE(s,a,u){var f=s.pingCache;if(f===null){f=s.pingCache=new wC;var m=new Set;f.set(a,m)}else m=f.get(a),m===void 0&&(m=new Set,f.set(a,m));m.has(u)||(m.add(u),s=NC.bind(null,s,a,u),a.then(s,s))}function cE(s){do{var a;if((a=s.tag===13)&&(a=s.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return s;s=s.return}while(s!==null);return null}function dE(s,a,u,f,m){return s.mode&1?(s.flags|=65536,s.lanes=m,s):(s===a?s.flags|=65536:(s.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(a=qi(-1,1),a.tag=2,xs(u,a,1))),u.lanes|=1),s)}var EC=X.ReactCurrentOwner,Hn=!1;function Dn(s,a,u,f){a.child=s===null?x0(a,null,u,f):dl(a,s.child,u,f)}function hE(s,a,u,f,m){u=u.render;var _=a.ref;return fl(a,m),f=yg(s,a,u,f,_,m),u=_g(),s!==null&&!Hn?(a.updateQueue=s.updateQueue,a.flags&=-2053,s.lanes&=~m,Wi(s,a,m)):(St&&u&&eg(a),a.flags|=1,Dn(s,a,f,m),a.child)}function fE(s,a,u,f,m){if(s===null){var _=u.type;return typeof _=="function"&&!Kg(_)&&_.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(a.tag=15,a.type=_,pE(s,a,_,f,m)):(s=sf(u.type,null,f,a,a.mode,m),s.ref=a.ref,s.return=a,a.child=s)}if(_=s.child,!(s.lanes&m)){var A=_.memoizedProps;if(u=u.compare,u=u!==null?u:Xu,u(A,f)&&s.ref===a.ref)return Wi(s,a,m)}return a.flags|=1,s=Ms(_,f),s.ref=a.ref,s.return=a,a.child=s}function pE(s,a,u,f,m){if(s!==null){var _=s.memoizedProps;if(Xu(_,f)&&s.ref===a.ref)if(Hn=!1,a.pendingProps=f=_,(s.lanes&m)!==0)s.flags&131072&&(Hn=!0);else return a.lanes=s.lanes,Wi(s,a,m)}return Pg(s,a,u,f,m)}function mE(s,a,u){var f=a.pendingProps,m=f.children,_=s!==null?s.memoizedState:null;if(f.mode==="hidden")if(!(a.mode&1))a.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(yl,ur),ur|=u;else{if(!(u&1073741824))return s=_!==null?_.baseLanes|u:u,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:s,cachePool:null,transitions:null},a.updateQueue=null,ft(yl,ur),ur|=s,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:u,ft(yl,ur),ur|=f}else _!==null?(f=_.baseLanes|u,a.memoizedState=null):f=u,ft(yl,ur),ur|=f;return Dn(s,a,m,u),a.child}function gE(s,a){var u=a.ref;(s===null&&u!==null||s!==null&&s.ref!==u)&&(a.flags|=512,a.flags|=2097152)}function Pg(s,a,u,f,m){var _=Wn(u)?Oo:In.current;return _=al(a,_),fl(a,m),u=yg(s,a,u,f,_,m),f=_g(),s!==null&&!Hn?(a.updateQueue=s.updateQueue,a.flags&=-2053,s.lanes&=~m,Wi(s,a,m)):(St&&f&&eg(a),a.flags|=1,Dn(s,a,u,m),a.child)}function yE(s,a,u,f,m){if(Wn(u)){var _=!0;kh(a)}else _=!1;if(fl(a,m),a.stateNode===null)Gh(s,a),sE(a,u,f),Sg(a,u,f,m),f=!0;else if(s===null){var A=a.stateNode,j=a.memoizedProps;A.props=j;var $=A.context,te=u.contextType;typeof te=="object"&&te!==null?te=Sr(te):(te=Wn(u)?Oo:In.current,te=al(a,te));var me=u.getDerivedStateFromProps,ye=typeof me=="function"||typeof A.getSnapshotBeforeUpdate=="function";ye||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(j!==f||$!==te)&&oE(a,A,f,te),Cs=!1;var he=a.memoizedState;A.state=he,Fh(a,f,A,m),$=a.memoizedState,j!==f||he!==$||qn.current||Cs?(typeof me=="function"&&(Tg(a,u,me,f),$=a.memoizedState),(j=Cs||iE(a,u,j,f,he,$,te))?(ye||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(a.flags|=4194308)):(typeof A.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=f,a.memoizedState=$),A.props=f,A.state=$,A.context=te,f=j):(typeof A.componentDidMount=="function"&&(a.flags|=4194308),f=!1)}else{A=a.stateNode,D0(s,a),j=a.memoizedProps,te=a.type===a.elementType?j:Gr(a.type,j),A.props=te,ye=a.pendingProps,he=A.context,$=u.contextType,typeof $=="object"&&$!==null?$=Sr($):($=Wn(u)?Oo:In.current,$=al(a,$));var Re=u.getDerivedStateFromProps;(me=typeof Re=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(j!==ye||he!==$)&&oE(a,A,f,$),Cs=!1,he=a.memoizedState,A.state=he,Fh(a,f,A,m);var ke=a.memoizedState;j!==ye||he!==ke||qn.current||Cs?(typeof Re=="function"&&(Tg(a,u,Re,f),ke=a.memoizedState),(te=Cs||iE(a,u,te,f,he,ke,$)||!1)?(me||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(f,ke,$),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(f,ke,$)),typeof A.componentDidUpdate=="function"&&(a.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof A.componentDidUpdate!="function"||j===s.memoizedProps&&he===s.memoizedState||(a.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||j===s.memoizedProps&&he===s.memoizedState||(a.flags|=1024),a.memoizedProps=f,a.memoizedState=ke),A.props=f,A.state=ke,A.context=$,f=te):(typeof A.componentDidUpdate!="function"||j===s.memoizedProps&&he===s.memoizedState||(a.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||j===s.memoizedProps&&he===s.memoizedState||(a.flags|=1024),f=!1)}return Ag(s,a,u,f,_,m)}function Ag(s,a,u,f,m,_){gE(s,a);var A=(a.flags&128)!==0;if(!f&&!A)return m&&I0(a,u,!1),Wi(s,a,_);f=a.stateNode,EC.current=a;var j=A&&typeof u.getDerivedStateFromError!="function"?null:f.render();return a.flags|=1,s!==null&&A?(a.child=dl(a,s.child,null,_),a.child=dl(a,null,j,_)):Dn(s,a,j,_),a.memoizedState=f.state,m&&I0(a,u,!0),a.child}function _E(s){var a=s.stateNode;a.pendingContext?w0(s,a.pendingContext,a.pendingContext!==a.context):a.context&&w0(s,a.context,!1),dg(s,a.containerInfo)}function vE(s,a,u,f,m){return cl(),ig(m),a.flags|=256,Dn(s,a,u,f),a.child}var kg={dehydrated:null,treeContext:null,retryLane:0};function Cg(s){return{baseLanes:s,cachePool:null,transitions:null}}function wE(s,a,u){var f=a.pendingProps,m=Ct.current,_=!1,A=(a.flags&128)!==0,j;if((j=A)||(j=s!==null&&s.memoizedState===null?!1:(m&2)!==0),j?(_=!0,a.flags&=-129):(s===null||s.memoizedState!==null)&&(m|=1),ft(Ct,m&1),s===null)return rg(a),s=a.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?(a.mode&1?s.data==="$!"?a.lanes=8:a.lanes=1073741824:a.lanes=1,null):(A=f.children,s=f.fallback,_?(f=a.mode,_=a.child,A={mode:"hidden",children:A},!(f&1)&&_!==null?(_.childLanes=0,_.pendingProps=A):_=of(A,f,0,null),s=Bo(s,f,u,null),_.return=a,s.return=a,_.sibling=s,a.child=_,a.child.memoizedState=Cg(u),a.memoizedState=kg,s):xg(a,A));if(m=s.memoizedState,m!==null&&(j=m.dehydrated,j!==null))return IC(s,a,A,f,j,m,u);if(_){_=f.fallback,A=a.mode,m=s.child,j=m.sibling;var $={mode:"hidden",children:f.children};return!(A&1)&&a.child!==m?(f=a.child,f.childLanes=0,f.pendingProps=$,a.deletions=null):(f=Ms(m,$),f.subtreeFlags=m.subtreeFlags&14680064),j!==null?_=Ms(j,_):(_=Bo(_,A,u,null),_.flags|=2),_.return=a,f.return=a,f.sibling=_,a.child=f,f=_,_=a.child,A=s.child.memoizedState,A=A===null?Cg(u):{baseLanes:A.baseLanes|u,cachePool:null,transitions:A.transitions},_.memoizedState=A,_.childLanes=s.childLanes&~u,a.memoizedState=kg,f}return _=s.child,s=_.sibling,f=Ms(_,{mode:"visible",children:f.children}),!(a.mode&1)&&(f.lanes=u),f.return=a,f.sibling=null,s!==null&&(u=a.deletions,u===null?(a.deletions=[s],a.flags|=16):u.push(s)),a.child=f,a.memoizedState=null,f}function xg(s,a){return a=of({mode:"visible",children:a},s.mode,0,null),a.return=s,s.child=a}function Hh(s,a,u,f){return f!==null&&ig(f),dl(a,s.child,null,u),s=xg(a,a.pendingProps.children),s.flags|=2,a.memoizedState=null,s}function IC(s,a,u,f,m,_,A){if(u)return a.flags&256?(a.flags&=-257,f=bg(Error(t(422))),Hh(s,a,A,f)):a.memoizedState!==null?(a.child=s.child,a.flags|=128,null):(_=f.fallback,m=a.mode,f=of({mode:"visible",children:f.children},m,0,null),_=Bo(_,m,A,null),_.flags|=2,f.return=a,_.return=a,f.sibling=_,a.child=f,a.mode&1&&dl(a,s.child,null,A),a.child.memoizedState=Cg(A),a.memoizedState=kg,_);if(!(a.mode&1))return Hh(s,a,A,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var j=f.dgst;return f=j,_=Error(t(419)),f=bg(_,f,void 0),Hh(s,a,A,f)}if(j=(A&s.childLanes)!==0,Hn||j){if(f=an,f!==null){switch(A&-A){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=m&(f.suspendedLanes|A)?0:m,m!==0&&m!==_.retryLane&&(_.retryLane=m,$i(s,m),Yr(f,s,m,-1))}return Gg(),f=bg(Error(t(421))),Hh(s,a,A,f)}return m.data==="$?"?(a.flags|=128,a.child=s.child,a=LC.bind(null,s),m._reactRetry=a,null):(s=_.treeContext,lr=Rs(m.nextSibling),ar=a,St=!0,Hr=null,s!==null&&(Ir[Tr++]=zi,Ir[Tr++]=Bi,Ir[Tr++]=Do,zi=s.id,Bi=s.overflow,Do=a),a=xg(a,f.children),a.flags|=4096,a)}function EE(s,a,u){s.lanes|=a;var f=s.alternate;f!==null&&(f.lanes|=a),lg(s.return,a,u)}function Og(s,a,u,f,m){var _=s.memoizedState;_===null?s.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:f,tail:u,tailMode:m}:(_.isBackwards=a,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=u,_.tailMode=m)}function IE(s,a,u){var f=a.pendingProps,m=f.revealOrder,_=f.tail;if(Dn(s,a,f.children,u),f=Ct.current,f&2)f=f&1|2,a.flags|=128;else{if(s!==null&&s.flags&128)e:for(s=a.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&EE(s,u,a);else if(s.tag===19)EE(s,u,a);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===a)break e;for(;s.sibling===null;){if(s.return===null||s.return===a)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}f&=1}if(ft(Ct,f),!(a.mode&1))a.memoizedState=null;else switch(m){case"forwards":for(u=a.child,m=null;u!==null;)s=u.alternate,s!==null&&Uh(s)===null&&(m=u),u=u.sibling;u=m,u===null?(m=a.child,a.child=null):(m=u.sibling,u.sibling=null),Og(a,!1,m,u,_);break;case"backwards":for(u=null,m=a.child,a.child=null;m!==null;){if(s=m.alternate,s!==null&&Uh(s)===null){a.child=m;break}s=m.sibling,m.sibling=u,u=m,m=s}Og(a,!0,u,null,_);break;case"together":Og(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Gh(s,a){!(a.mode&1)&&s!==null&&(s.alternate=null,a.alternate=null,a.flags|=2)}function Wi(s,a,u){if(s!==null&&(a.dependencies=s.dependencies),Fo|=a.lanes,!(u&a.childLanes))return null;if(s!==null&&a.child!==s.child)throw Error(t(153));if(a.child!==null){for(s=a.child,u=Ms(s,s.pendingProps),a.child=u,u.return=a;s.sibling!==null;)s=s.sibling,u=u.sibling=Ms(s,s.pendingProps),u.return=a;u.sibling=null}return a.child}function TC(s,a,u){switch(a.tag){case 3:_E(a),cl();break;case 5:V0(a);break;case 1:Wn(a.type)&&kh(a);break;case 4:dg(a,a.stateNode.containerInfo);break;case 10:var f=a.type._context,m=a.memoizedProps.value;ft(Lh,f._currentValue),f._currentValue=m;break;case 13:if(f=a.memoizedState,f!==null)return f.dehydrated!==null?(ft(Ct,Ct.current&1),a.flags|=128,null):u&a.child.childLanes?wE(s,a,u):(ft(Ct,Ct.current&1),s=Wi(s,a,u),s!==null?s.sibling:null);ft(Ct,Ct.current&1);break;case 19:if(f=(u&a.childLanes)!==0,s.flags&128){if(f)return IE(s,a,u);a.flags|=128}if(m=a.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),ft(Ct,Ct.current),f)break;return null;case 22:case 23:return a.lanes=0,mE(s,a,u)}return Wi(s,a,u)}var TE,Dg,SE,bE;TE=function(s,a){for(var u=a.child;u!==null;){if(u.tag===5||u.tag===6)s.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break;for(;u.sibling===null;){if(u.return===null||u.return===a)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},Dg=function(){},SE=function(s,a,u,f){var m=s.memoizedProps;if(m!==f){s=a.stateNode,Vo(ui.current);var _=null;switch(u){case"input":m=ze(s,m),f=ze(s,f),_=[];break;case"select":m=I({},m,{value:void 0}),f=I({},f,{value:void 0}),_=[];break;case"textarea":m=nr(s,m),f=nr(s,f),_=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(s.onclick=Rh)}Ou(u,f);var A;u=null;for(te in m)if(!f.hasOwnProperty(te)&&m.hasOwnProperty(te)&&m[te]!=null)if(te==="style"){var j=m[te];for(A in j)j.hasOwnProperty(A)&&(u||(u={}),u[A]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(i.hasOwnProperty(te)?_||(_=[]):(_=_||[]).push(te,null));for(te in f){var $=f[te];if(j=m!=null?m[te]:void 0,f.hasOwnProperty(te)&&$!==j&&($!=null||j!=null))if(te==="style")if(j){for(A in j)!j.hasOwnProperty(A)||$&&$.hasOwnProperty(A)||(u||(u={}),u[A]="");for(A in $)$.hasOwnProperty(A)&&j[A]!==$[A]&&(u||(u={}),u[A]=$[A])}else u||(_||(_=[]),_.push(te,u)),u=$;else te==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,j=j?j.__html:void 0,$!=null&&j!==$&&(_=_||[]).push(te,$)):te==="children"?typeof $!="string"&&typeof $!="number"||(_=_||[]).push(te,""+$):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(i.hasOwnProperty(te)?($!=null&&te==="onScroll"&&_t("scroll",s),_||j===$||(_=[])):(_=_||[]).push(te,$))}u&&(_=_||[]).push("style",u);var te=_;(a.updateQueue=te)&&(a.flags|=4)}},bE=function(s,a,u,f){u!==f&&(a.flags|=4)};function hc(s,a){if(!St)switch(s.tailMode){case"hidden":a=s.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?s.tail=null:u.sibling=null;break;case"collapsed":u=s.tail;for(var f=null;u!==null;)u.alternate!==null&&(f=u),u=u.sibling;f===null?a||s.tail===null?s.tail=null:s.tail.sibling=null:f.sibling=null}}function Sn(s){var a=s.alternate!==null&&s.alternate.child===s.child,u=0,f=0;if(a)for(var m=s.child;m!==null;)u|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=s,m=m.sibling;else for(m=s.child;m!==null;)u|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=s,m=m.sibling;return s.subtreeFlags|=f,s.childLanes=u,a}function SC(s,a,u){var f=a.pendingProps;switch(tg(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(a),null;case 1:return Wn(a.type)&&Ah(),Sn(a),null;case 3:return f=a.stateNode,pl(),vt(qn),vt(In),pg(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(s===null||s.child===null)&&(Dh(a)?a.flags|=4:s===null||s.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,Hr!==null&&(qg(Hr),Hr=null))),Dg(s,a),Sn(a),null;case 5:hg(a);var m=Vo(ac.current);if(u=a.type,s!==null&&a.stateNode!=null)SE(s,a,u,f,m),s.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!f){if(a.stateNode===null)throw Error(t(166));return Sn(a),null}if(s=Vo(ui.current),Dh(a)){f=a.stateNode,u=a.type;var _=a.memoizedProps;switch(f[li]=a,f[nc]=_,s=(a.mode&1)!==0,u){case"dialog":_t("cancel",f),_t("close",f);break;case"iframe":case"object":case"embed":_t("load",f);break;case"video":case"audio":for(m=0;m<Zu.length;m++)_t(Zu[m],f);break;case"source":_t("error",f);break;case"img":case"image":case"link":_t("error",f),_t("load",f);break;case"details":_t("toggle",f);break;case"input":Qe(f,_),_t("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},_t("invalid",f);break;case"textarea":Nr(f,_),_t("invalid",f)}Ou(u,_),m=null;for(var A in _)if(_.hasOwnProperty(A)){var j=_[A];A==="children"?typeof j=="string"?f.textContent!==j&&(_.suppressHydrationWarning!==!0&&bh(f.textContent,j,s),m=["children",j]):typeof j=="number"&&f.textContent!==""+j&&(_.suppressHydrationWarning!==!0&&bh(f.textContent,j,s),m=["children",""+j]):i.hasOwnProperty(A)&&j!=null&&A==="onScroll"&&_t("scroll",f)}switch(u){case"input":$e(f),gt(f,_,!0);break;case"textarea":$e(f),Lr(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=Rh)}f=m,a.updateQueue=f,f!==null&&(a.flags|=4)}else{A=m.nodeType===9?m:m.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=Bt(u)),s==="http://www.w3.org/1999/xhtml"?u==="script"?(s=A.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof f.is=="string"?s=A.createElement(u,{is:f.is}):(s=A.createElement(u),u==="select"&&(A=s,f.multiple?A.multiple=!0:f.size&&(A.size=f.size))):s=A.createElementNS(s,u),s[li]=a,s[nc]=f,TE(s,a,!1,!1),a.stateNode=s;e:{switch(A=Du(u,f),u){case"dialog":_t("cancel",s),_t("close",s),m=f;break;case"iframe":case"object":case"embed":_t("load",s),m=f;break;case"video":case"audio":for(m=0;m<Zu.length;m++)_t(Zu[m],s);m=f;break;case"source":_t("error",s),m=f;break;case"img":case"image":case"link":_t("error",s),_t("load",s),m=f;break;case"details":_t("toggle",s),m=f;break;case"input":Qe(s,f),m=ze(s,f),_t("invalid",s);break;case"option":m=f;break;case"select":s._wrapperState={wasMultiple:!!f.multiple},m=I({},f,{value:void 0}),_t("invalid",s);break;case"textarea":Nr(s,f),m=nr(s,f),_t("invalid",s);break;default:m=f}Ou(u,m),j=m;for(_ in j)if(j.hasOwnProperty(_)){var $=j[_];_==="style"?Cu(s,$):_==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,$!=null&&Au(s,$)):_==="children"?typeof $=="string"?(u!=="textarea"||$!=="")&&ms(s,$):typeof $=="number"&&ms(s,""+$):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(i.hasOwnProperty(_)?$!=null&&_==="onScroll"&&_t("scroll",s):$!=null&&H(s,_,$,A))}switch(u){case"input":$e(s),gt(s,f,!1);break;case"textarea":$e(s),Lr(s);break;case"option":f.value!=null&&s.setAttribute("value",""+Te(f.value));break;case"select":s.multiple=!!f.multiple,_=f.value,_!=null?kt(s,!!f.multiple,_,!1):f.defaultValue!=null&&kt(s,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(s.onclick=Rh)}switch(u){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Sn(a),null;case 6:if(s&&a.stateNode!=null)bE(s,a,s.memoizedProps,f);else{if(typeof f!="string"&&a.stateNode===null)throw Error(t(166));if(u=Vo(ac.current),Vo(ui.current),Dh(a)){if(f=a.stateNode,u=a.memoizedProps,f[li]=a,(_=f.nodeValue!==u)&&(s=ar,s!==null))switch(s.tag){case 3:bh(f.nodeValue,u,(s.mode&1)!==0);break;case 5:s.memoizedProps.suppressHydrationWarning!==!0&&bh(f.nodeValue,u,(s.mode&1)!==0)}_&&(a.flags|=4)}else f=(u.nodeType===9?u:u.ownerDocument).createTextNode(f),f[li]=a,a.stateNode=f}return Sn(a),null;case 13:if(vt(Ct),f=a.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(St&&lr!==null&&a.mode&1&&!(a.flags&128))A0(),cl(),a.flags|=98560,_=!1;else if(_=Dh(a),f!==null&&f.dehydrated!==null){if(s===null){if(!_)throw Error(t(318));if(_=a.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[li]=a}else cl(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;Sn(a),_=!1}else Hr!==null&&(qg(Hr),Hr=null),_=!0;if(!_)return a.flags&65536?a:null}return a.flags&128?(a.lanes=u,a):(f=f!==null,f!==(s!==null&&s.memoizedState!==null)&&f&&(a.child.flags|=8192,a.mode&1&&(s===null||Ct.current&1?tn===0&&(tn=3):Gg())),a.updateQueue!==null&&(a.flags|=4),Sn(a),null);case 4:return pl(),Dg(s,a),s===null&&ec(a.stateNode.containerInfo),Sn(a),null;case 10:return ag(a.type._context),Sn(a),null;case 17:return Wn(a.type)&&Ah(),Sn(a),null;case 19:if(vt(Ct),_=a.memoizedState,_===null)return Sn(a),null;if(f=(a.flags&128)!==0,A=_.rendering,A===null)if(f)hc(_,!1);else{if(tn!==0||s!==null&&s.flags&128)for(s=a.child;s!==null;){if(A=Uh(s),A!==null){for(a.flags|=128,hc(_,!1),f=A.updateQueue,f!==null&&(a.updateQueue=f,a.flags|=4),a.subtreeFlags=0,f=u,u=a.child;u!==null;)_=u,s=f,_.flags&=14680066,A=_.alternate,A===null?(_.childLanes=0,_.lanes=s,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=A.childLanes,_.lanes=A.lanes,_.child=A.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=A.memoizedProps,_.memoizedState=A.memoizedState,_.updateQueue=A.updateQueue,_.type=A.type,s=A.dependencies,_.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),u=u.sibling;return ft(Ct,Ct.current&1|2),a.child}s=s.sibling}_.tail!==null&&ht()>_l&&(a.flags|=128,f=!0,hc(_,!1),a.lanes=4194304)}else{if(!f)if(s=Uh(A),s!==null){if(a.flags|=128,f=!0,u=s.updateQueue,u!==null&&(a.updateQueue=u,a.flags|=4),hc(_,!0),_.tail===null&&_.tailMode==="hidden"&&!A.alternate&&!St)return Sn(a),null}else 2*ht()-_.renderingStartTime>_l&&u!==1073741824&&(a.flags|=128,f=!0,hc(_,!1),a.lanes=4194304);_.isBackwards?(A.sibling=a.child,a.child=A):(u=_.last,u!==null?u.sibling=A:a.child=A,_.last=A)}return _.tail!==null?(a=_.tail,_.rendering=a,_.tail=a.sibling,_.renderingStartTime=ht(),a.sibling=null,u=Ct.current,ft(Ct,f?u&1|2:u&1),a):(Sn(a),null);case 22:case 23:return Hg(),f=a.memoizedState!==null,s!==null&&s.memoizedState!==null!==f&&(a.flags|=8192),f&&a.mode&1?ur&1073741824&&(Sn(a),a.subtreeFlags&6&&(a.flags|=8192)):Sn(a),null;case 24:return null;case 25:return null}throw Error(t(156,a.tag))}function bC(s,a){switch(tg(a),a.tag){case 1:return Wn(a.type)&&Ah(),s=a.flags,s&65536?(a.flags=s&-65537|128,a):null;case 3:return pl(),vt(qn),vt(In),pg(),s=a.flags,s&65536&&!(s&128)?(a.flags=s&-65537|128,a):null;case 5:return hg(a),null;case 13:if(vt(Ct),s=a.memoizedState,s!==null&&s.dehydrated!==null){if(a.alternate===null)throw Error(t(340));cl()}return s=a.flags,s&65536?(a.flags=s&-65537|128,a):null;case 19:return vt(Ct),null;case 4:return pl(),null;case 10:return ag(a.type._context),null;case 22:case 23:return Hg(),null;case 24:return null;default:return null}}var Kh=!1,bn=!1,RC=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function gl(s,a){var u=s.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(f){Vt(s,a,f)}else u.current=null}function Ng(s,a,u){try{u()}catch(f){Vt(s,a,f)}}var RE=!1;function PC(s,a){if(Hm=Ts,s=i0(),Fm(s)){if("selectionStart"in s)var u={start:s.selectionStart,end:s.selectionEnd};else e:{u=(u=s.ownerDocument)&&u.defaultView||window;var f=u.getSelection&&u.getSelection();if(f&&f.rangeCount!==0){u=f.anchorNode;var m=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{u.nodeType,_.nodeType}catch{u=null;break e}var A=0,j=-1,$=-1,te=0,me=0,ye=s,he=null;t:for(;;){for(var Re;ye!==u||m!==0&&ye.nodeType!==3||(j=A+m),ye!==_||f!==0&&ye.nodeType!==3||($=A+f),ye.nodeType===3&&(A+=ye.nodeValue.length),(Re=ye.firstChild)!==null;)he=ye,ye=Re;for(;;){if(ye===s)break t;if(he===u&&++te===m&&(j=A),he===_&&++me===f&&($=A),(Re=ye.nextSibling)!==null)break;ye=he,he=ye.parentNode}ye=Re}u=j===-1||$===-1?null:{start:j,end:$}}else u=null}u=u||{start:0,end:0}}else u=null;for(Gm={focusedElem:s,selectionRange:u},Ts=!1,Ae=a;Ae!==null;)if(a=Ae,s=a.child,(a.subtreeFlags&1028)!==0&&s!==null)s.return=a,Ae=s;else for(;Ae!==null;){a=Ae;try{var ke=a.alternate;if(a.flags&1024)switch(a.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var Ce=ke.memoizedProps,qt=ke.memoizedState,Q=a.stateNode,W=Q.getSnapshotBeforeUpdate(a.elementType===a.type?Ce:Gr(a.type,Ce),qt);Q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var Z=a.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ve){Vt(a,a.return,ve)}if(s=a.sibling,s!==null){s.return=a.return,Ae=s;break}Ae=a.return}return ke=RE,RE=!1,ke}function fc(s,a,u){var f=a.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&s)===s){var _=m.destroy;m.destroy=void 0,_!==void 0&&Ng(a,u,_)}m=m.next}while(m!==f)}}function Qh(s,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var u=a=a.next;do{if((u.tag&s)===s){var f=u.create;u.destroy=f()}u=u.next}while(u!==a)}}function Lg(s){var a=s.ref;if(a!==null){var u=s.stateNode;switch(s.tag){case 5:s=u;break;default:s=u}typeof a=="function"?a(s):a.current=s}}function PE(s){var a=s.alternate;a!==null&&(s.alternate=null,PE(a)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(a=s.stateNode,a!==null&&(delete a[li],delete a[nc],delete a[Xm],delete a[uC],delete a[cC])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}function AE(s){return s.tag===5||s.tag===3||s.tag===4}function kE(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||AE(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function Vg(s,a,u){var f=s.tag;if(f===5||f===6)s=s.stateNode,a?u.nodeType===8?u.parentNode.insertBefore(s,a):u.insertBefore(s,a):(u.nodeType===8?(a=u.parentNode,a.insertBefore(s,u)):(a=u,a.appendChild(s)),u=u._reactRootContainer,u!=null||a.onclick!==null||(a.onclick=Rh));else if(f!==4&&(s=s.child,s!==null))for(Vg(s,a,u),s=s.sibling;s!==null;)Vg(s,a,u),s=s.sibling}function Mg(s,a,u){var f=s.tag;if(f===5||f===6)s=s.stateNode,a?u.insertBefore(s,a):u.appendChild(s);else if(f!==4&&(s=s.child,s!==null))for(Mg(s,a,u),s=s.sibling;s!==null;)Mg(s,a,u),s=s.sibling}var mn=null,Kr=!1;function Os(s,a,u){for(u=u.child;u!==null;)CE(s,a,u),u=u.sibling}function CE(s,a,u){if(rr&&typeof rr.onCommitFiberUnmount=="function")try{rr.onCommitFiberUnmount(So,u)}catch{}switch(u.tag){case 5:bn||gl(u,a);case 6:var f=mn,m=Kr;mn=null,Os(s,a,u),mn=f,Kr=m,mn!==null&&(Kr?(s=mn,u=u.stateNode,s.nodeType===8?s.parentNode.removeChild(u):s.removeChild(u)):mn.removeChild(u.stateNode));break;case 18:mn!==null&&(Kr?(s=mn,u=u.stateNode,s.nodeType===8?Ym(s.parentNode,u):s.nodeType===1&&Ym(s,u),$r(s)):Ym(mn,u.stateNode));break;case 4:f=mn,m=Kr,mn=u.stateNode.containerInfo,Kr=!0,Os(s,a,u),mn=f,Kr=m;break;case 0:case 11:case 14:case 15:if(!bn&&(f=u.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var _=m,A=_.destroy;_=_.tag,A!==void 0&&(_&2||_&4)&&Ng(u,a,A),m=m.next}while(m!==f)}Os(s,a,u);break;case 1:if(!bn&&(gl(u,a),f=u.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=u.memoizedProps,f.state=u.memoizedState,f.componentWillUnmount()}catch(j){Vt(u,a,j)}Os(s,a,u);break;case 21:Os(s,a,u);break;case 22:u.mode&1?(bn=(f=bn)||u.memoizedState!==null,Os(s,a,u),bn=f):Os(s,a,u);break;default:Os(s,a,u)}}function xE(s){var a=s.updateQueue;if(a!==null){s.updateQueue=null;var u=s.stateNode;u===null&&(u=s.stateNode=new RC),a.forEach(function(f){var m=VC.bind(null,s,f);u.has(f)||(u.add(f),f.then(m,m))})}}function Qr(s,a){var u=a.deletions;if(u!==null)for(var f=0;f<u.length;f++){var m=u[f];try{var _=s,A=a,j=A;e:for(;j!==null;){switch(j.tag){case 5:mn=j.stateNode,Kr=!1;break e;case 3:mn=j.stateNode.containerInfo,Kr=!0;break e;case 4:mn=j.stateNode.containerInfo,Kr=!0;break e}j=j.return}if(mn===null)throw Error(t(160));CE(_,A,m),mn=null,Kr=!1;var $=m.alternate;$!==null&&($.return=null),m.return=null}catch(te){Vt(m,a,te)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)OE(a,s),a=a.sibling}function OE(s,a){var u=s.alternate,f=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:if(Qr(a,s),di(s),f&4){try{fc(3,s,s.return),Qh(3,s)}catch(Ce){Vt(s,s.return,Ce)}try{fc(5,s,s.return)}catch(Ce){Vt(s,s.return,Ce)}}break;case 1:Qr(a,s),di(s),f&512&&u!==null&&gl(u,u.return);break;case 5:if(Qr(a,s),di(s),f&512&&u!==null&&gl(u,u.return),s.flags&32){var m=s.stateNode;try{ms(m,"")}catch(Ce){Vt(s,s.return,Ce)}}if(f&4&&(m=s.stateNode,m!=null)){var _=s.memoizedProps,A=u!==null?u.memoizedProps:_,j=s.type,$=s.updateQueue;if(s.updateQueue=null,$!==null)try{j==="input"&&_.type==="radio"&&_.name!=null&&mt(m,_),Du(j,A);var te=Du(j,_);for(A=0;A<$.length;A+=2){var me=$[A],ye=$[A+1];me==="style"?Cu(m,ye):me==="dangerouslySetInnerHTML"?Au(m,ye):me==="children"?ms(m,ye):H(m,me,ye,te)}switch(j){case"input":qe(m,_);break;case"textarea":Oi(m,_);break;case"select":var he=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!_.multiple;var Re=_.value;Re!=null?kt(m,!!_.multiple,Re,!1):he!==!!_.multiple&&(_.defaultValue!=null?kt(m,!!_.multiple,_.defaultValue,!0):kt(m,!!_.multiple,_.multiple?[]:"",!1))}m[nc]=_}catch(Ce){Vt(s,s.return,Ce)}}break;case 6:if(Qr(a,s),di(s),f&4){if(s.stateNode===null)throw Error(t(162));m=s.stateNode,_=s.memoizedProps;try{m.nodeValue=_}catch(Ce){Vt(s,s.return,Ce)}}break;case 3:if(Qr(a,s),di(s),f&4&&u!==null&&u.memoizedState.isDehydrated)try{$r(a.containerInfo)}catch(Ce){Vt(s,s.return,Ce)}break;case 4:Qr(a,s),di(s);break;case 13:Qr(a,s),di(s),m=s.child,m.flags&8192&&(_=m.memoizedState!==null,m.stateNode.isHidden=_,!_||m.alternate!==null&&m.alternate.memoizedState!==null||(jg=ht())),f&4&&xE(s);break;case 22:if(me=u!==null&&u.memoizedState!==null,s.mode&1?(bn=(te=bn)||me,Qr(a,s),bn=te):Qr(a,s),di(s),f&8192){if(te=s.memoizedState!==null,(s.stateNode.isHidden=te)&&!me&&s.mode&1)for(Ae=s,me=s.child;me!==null;){for(ye=Ae=me;Ae!==null;){switch(he=Ae,Re=he.child,he.tag){case 0:case 11:case 14:case 15:fc(4,he,he.return);break;case 1:gl(he,he.return);var ke=he.stateNode;if(typeof ke.componentWillUnmount=="function"){f=he,u=he.return;try{a=f,ke.props=a.memoizedProps,ke.state=a.memoizedState,ke.componentWillUnmount()}catch(Ce){Vt(f,u,Ce)}}break;case 5:gl(he,he.return);break;case 22:if(he.memoizedState!==null){LE(ye);continue}}Re!==null?(Re.return=he,Ae=Re):LE(ye)}me=me.sibling}e:for(me=null,ye=s;;){if(ye.tag===5){if(me===null){me=ye;try{m=ye.stateNode,te?(_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(j=ye.stateNode,$=ye.memoizedProps.style,A=$!=null&&$.hasOwnProperty("display")?$.display:null,j.style.display=ku("display",A))}catch(Ce){Vt(s,s.return,Ce)}}}else if(ye.tag===6){if(me===null)try{ye.stateNode.nodeValue=te?"":ye.memoizedProps}catch(Ce){Vt(s,s.return,Ce)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===s)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===s)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===s)break e;me===ye&&(me=null),ye=ye.return}me===ye&&(me=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:Qr(a,s),di(s),f&4&&xE(s);break;case 21:break;default:Qr(a,s),di(s)}}function di(s){var a=s.flags;if(a&2){try{e:{for(var u=s.return;u!==null;){if(AE(u)){var f=u;break e}u=u.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(ms(m,""),f.flags&=-33);var _=kE(s);Mg(s,_,m);break;case 3:case 4:var A=f.stateNode.containerInfo,j=kE(s);Vg(s,j,A);break;default:throw Error(t(161))}}catch($){Vt(s,s.return,$)}s.flags&=-3}a&4096&&(s.flags&=-4097)}function AC(s,a,u){Ae=s,DE(s)}function DE(s,a,u){for(var f=(s.mode&1)!==0;Ae!==null;){var m=Ae,_=m.child;if(m.tag===22&&f){var A=m.memoizedState!==null||Kh;if(!A){var j=m.alternate,$=j!==null&&j.memoizedState!==null||bn;j=Kh;var te=bn;if(Kh=A,(bn=$)&&!te)for(Ae=m;Ae!==null;)A=Ae,$=A.child,A.tag===22&&A.memoizedState!==null?VE(m):$!==null?($.return=A,Ae=$):VE(m);for(;_!==null;)Ae=_,DE(_),_=_.sibling;Ae=m,Kh=j,bn=te}NE(s)}else m.subtreeFlags&8772&&_!==null?(_.return=m,Ae=_):NE(s)}}function NE(s){for(;Ae!==null;){var a=Ae;if(a.flags&8772){var u=a.alternate;try{if(a.flags&8772)switch(a.tag){case 0:case 11:case 15:bn||Qh(5,a);break;case 1:var f=a.stateNode;if(a.flags&4&&!bn)if(u===null)f.componentDidMount();else{var m=a.elementType===a.type?u.memoizedProps:Gr(a.type,u.memoizedProps);f.componentDidUpdate(m,u.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=a.updateQueue;_!==null&&L0(a,_,f);break;case 3:var A=a.updateQueue;if(A!==null){if(u=null,a.child!==null)switch(a.child.tag){case 5:u=a.child.stateNode;break;case 1:u=a.child.stateNode}L0(a,A,u)}break;case 5:var j=a.stateNode;if(u===null&&a.flags&4){u=j;var $=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":$.autoFocus&&u.focus();break;case"img":$.src&&(u.src=$.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var te=a.alternate;if(te!==null){var me=te.memoizedState;if(me!==null){var ye=me.dehydrated;ye!==null&&$r(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bn||a.flags&512&&Lg(a)}catch(he){Vt(a,a.return,he)}}if(a===s){Ae=null;break}if(u=a.sibling,u!==null){u.return=a.return,Ae=u;break}Ae=a.return}}function LE(s){for(;Ae!==null;){var a=Ae;if(a===s){Ae=null;break}var u=a.sibling;if(u!==null){u.return=a.return,Ae=u;break}Ae=a.return}}function VE(s){for(;Ae!==null;){var a=Ae;try{switch(a.tag){case 0:case 11:case 15:var u=a.return;try{Qh(4,a)}catch($){Vt(a,u,$)}break;case 1:var f=a.stateNode;if(typeof f.componentDidMount=="function"){var m=a.return;try{f.componentDidMount()}catch($){Vt(a,m,$)}}var _=a.return;try{Lg(a)}catch($){Vt(a,_,$)}break;case 5:var A=a.return;try{Lg(a)}catch($){Vt(a,A,$)}}}catch($){Vt(a,a.return,$)}if(a===s){Ae=null;break}var j=a.sibling;if(j!==null){j.return=a.return,Ae=j;break}Ae=a.return}}var kC=Math.ceil,Yh=X.ReactCurrentDispatcher,Fg=X.ReactCurrentOwner,Rr=X.ReactCurrentBatchConfig,nt=0,an=null,Qt=null,gn=0,ur=0,yl=Ps(0),tn=0,pc=null,Fo=0,Xh=0,Ug=0,mc=null,Gn=null,jg=0,_l=1/0,Hi=null,Jh=!1,zg=null,Ds=null,Zh=!1,Ns=null,ef=0,gc=0,Bg=null,tf=-1,nf=0;function Nn(){return nt&6?ht():tf!==-1?tf:tf=ht()}function Ls(s){return s.mode&1?nt&2&&gn!==0?gn&-gn:hC.transition!==null?(nf===0&&(nf=Ro()),nf):(s=Ze,s!==0||(s=window.event,s=s===void 0?16:qu(s.type)),s):1}function Yr(s,a,u,f){if(50<gc)throw gc=0,Bg=null,Error(t(185));vs(s,u,f),(!(nt&2)||s!==an)&&(s===an&&(!(nt&2)&&(Xh|=u),tn===4&&Vs(s,gn)),Kn(s,f),u===1&&nt===0&&!(a.mode&1)&&(_l=ht()+500,Ch&&ks()))}function Kn(s,a){var u=s.callbackNode;Ni(s,a);var f=bo(s,s===an?gn:0);if(f===0)u!==null&&Uu(u),s.callbackNode=null,s.callbackPriority=0;else if(a=f&-f,s.callbackPriority!==a){if(u!=null&&Uu(u),a===1)s.tag===0?dC(FE.bind(null,s)):T0(FE.bind(null,s)),aC(function(){!(nt&6)&&ks()}),u=null;else{switch(Es(f)){case 1:u=To;break;case 4:u=gs;break;case 16:u=vr;break;case 536870912:u=nh;break;default:u=vr}u=HE(u,ME.bind(null,s))}s.callbackPriority=a,s.callbackNode=u}}function ME(s,a){if(tf=-1,nf=0,nt&6)throw Error(t(327));var u=s.callbackNode;if(vl()&&s.callbackNode!==u)return null;var f=bo(s,s===an?gn:0);if(f===0)return null;if(f&30||f&s.expiredLanes||a)a=rf(s,f);else{a=f;var m=nt;nt|=2;var _=jE();(an!==s||gn!==a)&&(Hi=null,_l=ht()+500,jo(s,a));do try{OC();break}catch(j){UE(s,j)}while(!0);og(),Yh.current=_,nt=m,Qt!==null?a=0:(an=null,gn=0,a=tn)}if(a!==0){if(a===2&&(m=ir(s),m!==0&&(f=m,a=$g(s,m))),a===1)throw u=pc,jo(s,0),Vs(s,f),Kn(s,ht()),u;if(a===6)Vs(s,f);else{if(m=s.current.alternate,!(f&30)&&!CC(m)&&(a=rf(s,f),a===2&&(_=ir(s),_!==0&&(f=_,a=$g(s,_))),a===1))throw u=pc,jo(s,0),Vs(s,f),Kn(s,ht()),u;switch(s.finishedWork=m,s.finishedLanes=f,a){case 0:case 1:throw Error(t(345));case 2:zo(s,Gn,Hi);break;case 3:if(Vs(s,f),(f&130023424)===f&&(a=jg+500-ht(),10<a)){if(bo(s,0)!==0)break;if(m=s.suspendedLanes,(m&f)!==f){Nn(),s.pingedLanes|=s.suspendedLanes&m;break}s.timeoutHandle=Qm(zo.bind(null,s,Gn,Hi),a);break}zo(s,Gn,Hi);break;case 4:if(Vs(s,f),(f&4194240)===f)break;for(a=s.eventTimes,m=-1;0<f;){var A=31-xn(f);_=1<<A,A=a[A],A>m&&(m=A),f&=~_}if(f=m,f=ht()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*kC(f/1960))-f,10<f){s.timeoutHandle=Qm(zo.bind(null,s,Gn,Hi),f);break}zo(s,Gn,Hi);break;case 5:zo(s,Gn,Hi);break;default:throw Error(t(329))}}}return Kn(s,ht()),s.callbackNode===u?ME.bind(null,s):null}function $g(s,a){var u=mc;return s.current.memoizedState.isDehydrated&&(jo(s,a).flags|=256),s=rf(s,a),s!==2&&(a=Gn,Gn=u,a!==null&&qg(a)),s}function qg(s){Gn===null?Gn=s:Gn.push.apply(Gn,s)}function CC(s){for(var a=s;;){if(a.flags&16384){var u=a.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var f=0;f<u.length;f++){var m=u[f],_=m.getSnapshot;m=m.value;try{if(!Wr(_(),m))return!1}catch{return!1}}}if(u=a.child,a.subtreeFlags&16384&&u!==null)u.return=a,a=u;else{if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Vs(s,a){for(a&=~Ug,a&=~Xh,s.suspendedLanes|=a,s.pingedLanes&=~a,s=s.expirationTimes;0<a;){var u=31-xn(a),f=1<<u;s[u]=-1,a&=~f}}function FE(s){if(nt&6)throw Error(t(327));vl();var a=bo(s,0);if(!(a&1))return Kn(s,ht()),null;var u=rf(s,a);if(s.tag!==0&&u===2){var f=ir(s);f!==0&&(a=f,u=$g(s,f))}if(u===1)throw u=pc,jo(s,0),Vs(s,a),Kn(s,ht()),u;if(u===6)throw Error(t(345));return s.finishedWork=s.current.alternate,s.finishedLanes=a,zo(s,Gn,Hi),Kn(s,ht()),null}function Wg(s,a){var u=nt;nt|=1;try{return s(a)}finally{nt=u,nt===0&&(_l=ht()+500,Ch&&ks())}}function Uo(s){Ns!==null&&Ns.tag===0&&!(nt&6)&&vl();var a=nt;nt|=1;var u=Rr.transition,f=Ze;try{if(Rr.transition=null,Ze=1,s)return s()}finally{Ze=f,Rr.transition=u,nt=a,!(nt&6)&&ks()}}function Hg(){ur=yl.current,vt(yl)}function jo(s,a){s.finishedWork=null,s.finishedLanes=0;var u=s.timeoutHandle;if(u!==-1&&(s.timeoutHandle=-1,oC(u)),Qt!==null)for(u=Qt.return;u!==null;){var f=u;switch(tg(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Ah();break;case 3:pl(),vt(qn),vt(In),pg();break;case 5:hg(f);break;case 4:pl();break;case 13:vt(Ct);break;case 19:vt(Ct);break;case 10:ag(f.type._context);break;case 22:case 23:Hg()}u=u.return}if(an=s,Qt=s=Ms(s.current,null),gn=ur=a,tn=0,pc=null,Ug=Xh=Fo=0,Gn=mc=null,Lo!==null){for(a=0;a<Lo.length;a++)if(u=Lo[a],f=u.interleaved,f!==null){u.interleaved=null;var m=f.next,_=u.pending;if(_!==null){var A=_.next;_.next=m,f.next=A}u.pending=f}Lo=null}return s}function UE(s,a){do{var u=Qt;try{if(og(),jh.current=qh,zh){for(var f=xt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}zh=!1}if(Mo=0,on=en=xt=null,lc=!1,uc=0,Fg.current=null,u===null||u.return===null){tn=1,pc=a,Qt=null;break}e:{var _=s,A=u.return,j=u,$=a;if(a=gn,j.flags|=32768,$!==null&&typeof $=="object"&&typeof $.then=="function"){var te=$,me=j,ye=me.tag;if(!(me.mode&1)&&(ye===0||ye===11||ye===15)){var he=me.alternate;he?(me.updateQueue=he.updateQueue,me.memoizedState=he.memoizedState,me.lanes=he.lanes):(me.updateQueue=null,me.memoizedState=null)}var Re=cE(A);if(Re!==null){Re.flags&=-257,dE(Re,A,j,_,a),Re.mode&1&&uE(_,te,a),a=Re,$=te;var ke=a.updateQueue;if(ke===null){var Ce=new Set;Ce.add($),a.updateQueue=Ce}else ke.add($);break e}else{if(!(a&1)){uE(_,te,a),Gg();break e}$=Error(t(426))}}else if(St&&j.mode&1){var qt=cE(A);if(qt!==null){!(qt.flags&65536)&&(qt.flags|=256),dE(qt,A,j,_,a),ig(ml($,j));break e}}_=$=ml($,j),tn!==4&&(tn=2),mc===null?mc=[_]:mc.push(_),_=A;do{switch(_.tag){case 3:_.flags|=65536,a&=-a,_.lanes|=a;var Q=aE(_,$,a);N0(_,Q);break e;case 1:j=$;var W=_.type,Z=_.stateNode;if(!(_.flags&128)&&(typeof W.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(Ds===null||!Ds.has(Z)))){_.flags|=65536,a&=-a,_.lanes|=a;var ve=lE(_,j,a);N0(_,ve);break e}}_=_.return}while(_!==null)}BE(u)}catch(Oe){a=Oe,Qt===u&&u!==null&&(Qt=u=u.return);continue}break}while(!0)}function jE(){var s=Yh.current;return Yh.current=qh,s===null?qh:s}function Gg(){(tn===0||tn===3||tn===2)&&(tn=4),an===null||!(Fo&268435455)&&!(Xh&268435455)||Vs(an,gn)}function rf(s,a){var u=nt;nt|=2;var f=jE();(an!==s||gn!==a)&&(Hi=null,jo(s,a));do try{xC();break}catch(m){UE(s,m)}while(!0);if(og(),nt=u,Yh.current=f,Qt!==null)throw Error(t(261));return an=null,gn=0,tn}function xC(){for(;Qt!==null;)zE(Qt)}function OC(){for(;Qt!==null&&!eh();)zE(Qt)}function zE(s){var a=WE(s.alternate,s,ur);s.memoizedProps=s.pendingProps,a===null?BE(s):Qt=a,Fg.current=null}function BE(s){var a=s;do{var u=a.alternate;if(s=a.return,a.flags&32768){if(u=bC(u,a),u!==null){u.flags&=32767,Qt=u;return}if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;else{tn=6,Qt=null;return}}else if(u=SC(u,a,ur),u!==null){Qt=u;return}if(a=a.sibling,a!==null){Qt=a;return}Qt=a=s}while(a!==null);tn===0&&(tn=5)}function zo(s,a,u){var f=Ze,m=Rr.transition;try{Rr.transition=null,Ze=1,DC(s,a,u,f)}finally{Rr.transition=m,Ze=f}return null}function DC(s,a,u,f){do vl();while(Ns!==null);if(nt&6)throw Error(t(327));u=s.finishedWork;var m=s.finishedLanes;if(u===null)return null;if(s.finishedWork=null,s.finishedLanes=0,u===s.current)throw Error(t(177));s.callbackNode=null,s.callbackPriority=0;var _=u.lanes|u.childLanes;if(dt(s,_),s===an&&(Qt=an=null,gn=0),!(u.subtreeFlags&2064)&&!(u.flags&2064)||Zh||(Zh=!0,HE(vr,function(){return vl(),null})),_=(u.flags&15990)!==0,u.subtreeFlags&15990||_){_=Rr.transition,Rr.transition=null;var A=Ze;Ze=1;var j=nt;nt|=4,Fg.current=null,PC(s,u),OE(u,s),Zk(Gm),Ts=!!Hm,Gm=Hm=null,s.current=u,AC(u),Cm(),nt=j,Ze=A,Rr.transition=_}else s.current=u;if(Zh&&(Zh=!1,Ns=s,ef=m),_=s.pendingLanes,_===0&&(Ds=null),rh(u.stateNode),Kn(s,ht()),a!==null)for(f=s.onRecoverableError,u=0;u<a.length;u++)m=a[u],f(m.value,{componentStack:m.stack,digest:m.digest});if(Jh)throw Jh=!1,s=zg,zg=null,s;return ef&1&&s.tag!==0&&vl(),_=s.pendingLanes,_&1?s===Bg?gc++:(gc=0,Bg=s):gc=0,ks(),null}function vl(){if(Ns!==null){var s=Es(ef),a=Rr.transition,u=Ze;try{if(Rr.transition=null,Ze=16>s?16:s,Ns===null)var f=!1;else{if(s=Ns,Ns=null,ef=0,nt&6)throw Error(t(331));var m=nt;for(nt|=4,Ae=s.current;Ae!==null;){var _=Ae,A=_.child;if(Ae.flags&16){var j=_.deletions;if(j!==null){for(var $=0;$<j.length;$++){var te=j[$];for(Ae=te;Ae!==null;){var me=Ae;switch(me.tag){case 0:case 11:case 15:fc(8,me,_)}var ye=me.child;if(ye!==null)ye.return=me,Ae=ye;else for(;Ae!==null;){me=Ae;var he=me.sibling,Re=me.return;if(PE(me),me===te){Ae=null;break}if(he!==null){he.return=Re,Ae=he;break}Ae=Re}}}var ke=_.alternate;if(ke!==null){var Ce=ke.child;if(Ce!==null){ke.child=null;do{var qt=Ce.sibling;Ce.sibling=null,Ce=qt}while(Ce!==null)}}Ae=_}}if(_.subtreeFlags&2064&&A!==null)A.return=_,Ae=A;else e:for(;Ae!==null;){if(_=Ae,_.flags&2048)switch(_.tag){case 0:case 11:case 15:fc(9,_,_.return)}var Q=_.sibling;if(Q!==null){Q.return=_.return,Ae=Q;break e}Ae=_.return}}var W=s.current;for(Ae=W;Ae!==null;){A=Ae;var Z=A.child;if(A.subtreeFlags&2064&&Z!==null)Z.return=A,Ae=Z;else e:for(A=W;Ae!==null;){if(j=Ae,j.flags&2048)try{switch(j.tag){case 0:case 11:case 15:Qh(9,j)}}catch(Oe){Vt(j,j.return,Oe)}if(j===A){Ae=null;break e}var ve=j.sibling;if(ve!==null){ve.return=j.return,Ae=ve;break e}Ae=j.return}}if(nt=m,ks(),rr&&typeof rr.onPostCommitFiberRoot=="function")try{rr.onPostCommitFiberRoot(So,s)}catch{}f=!0}return f}finally{Ze=u,Rr.transition=a}}return!1}function $E(s,a,u){a=ml(u,a),a=aE(s,a,1),s=xs(s,a,1),a=Nn(),s!==null&&(vs(s,1,a),Kn(s,a))}function Vt(s,a,u){if(s.tag===3)$E(s,s,u);else for(;a!==null;){if(a.tag===3){$E(a,s,u);break}else if(a.tag===1){var f=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Ds===null||!Ds.has(f))){s=ml(u,s),s=lE(a,s,1),a=xs(a,s,1),s=Nn(),a!==null&&(vs(a,1,s),Kn(a,s));break}}a=a.return}}function NC(s,a,u){var f=s.pingCache;f!==null&&f.delete(a),a=Nn(),s.pingedLanes|=s.suspendedLanes&u,an===s&&(gn&u)===u&&(tn===4||tn===3&&(gn&130023424)===gn&&500>ht()-jg?jo(s,0):Ug|=u),Kn(s,a)}function qE(s,a){a===0&&(s.mode&1?(a=Ba,Ba<<=1,!(Ba&130023424)&&(Ba=4194304)):a=1);var u=Nn();s=$i(s,a),s!==null&&(vs(s,a,u),Kn(s,u))}function LC(s){var a=s.memoizedState,u=0;a!==null&&(u=a.retryLane),qE(s,u)}function VC(s,a){var u=0;switch(s.tag){case 13:var f=s.stateNode,m=s.memoizedState;m!==null&&(u=m.retryLane);break;case 19:f=s.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(a),qE(s,u)}var WE;WE=function(s,a,u){if(s!==null)if(s.memoizedProps!==a.pendingProps||qn.current)Hn=!0;else{if(!(s.lanes&u)&&!(a.flags&128))return Hn=!1,TC(s,a,u);Hn=!!(s.flags&131072)}else Hn=!1,St&&a.flags&1048576&&S0(a,Oh,a.index);switch(a.lanes=0,a.tag){case 2:var f=a.type;Gh(s,a),s=a.pendingProps;var m=al(a,In.current);fl(a,u),m=yg(null,a,f,s,m,u);var _=_g();return a.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Wn(f)?(_=!0,kh(a)):_=!1,a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,cg(a),m.updater=Wh,a.stateNode=m,m._reactInternals=a,Sg(a,f,s,u),a=Ag(null,a,f,!0,_,u)):(a.tag=0,St&&_&&eg(a),Dn(null,a,m,u),a=a.child),a;case 16:f=a.elementType;e:{switch(Gh(s,a),s=a.pendingProps,m=f._init,f=m(f._payload),a.type=f,m=a.tag=FC(f),s=Gr(f,s),m){case 0:a=Pg(null,a,f,s,u);break e;case 1:a=yE(null,a,f,s,u);break e;case 11:a=hE(null,a,f,s,u);break e;case 14:a=fE(null,a,f,Gr(f.type,s),u);break e}throw Error(t(306,f,""))}return a;case 0:return f=a.type,m=a.pendingProps,m=a.elementType===f?m:Gr(f,m),Pg(s,a,f,m,u);case 1:return f=a.type,m=a.pendingProps,m=a.elementType===f?m:Gr(f,m),yE(s,a,f,m,u);case 3:e:{if(_E(a),s===null)throw Error(t(387));f=a.pendingProps,_=a.memoizedState,m=_.element,D0(s,a),Fh(a,f,null,u);var A=a.memoizedState;if(f=A.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},a.updateQueue.baseState=_,a.memoizedState=_,a.flags&256){m=ml(Error(t(423)),a),a=vE(s,a,f,u,m);break e}else if(f!==m){m=ml(Error(t(424)),a),a=vE(s,a,f,u,m);break e}else for(lr=Rs(a.stateNode.containerInfo.firstChild),ar=a,St=!0,Hr=null,u=x0(a,null,f,u),a.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(cl(),f===m){a=Wi(s,a,u);break e}Dn(s,a,f,u)}a=a.child}return a;case 5:return V0(a),s===null&&rg(a),f=a.type,m=a.pendingProps,_=s!==null?s.memoizedProps:null,A=m.children,Km(f,m)?A=null:_!==null&&Km(f,_)&&(a.flags|=32),gE(s,a),Dn(s,a,A,u),a.child;case 6:return s===null&&rg(a),null;case 13:return wE(s,a,u);case 4:return dg(a,a.stateNode.containerInfo),f=a.pendingProps,s===null?a.child=dl(a,null,f,u):Dn(s,a,f,u),a.child;case 11:return f=a.type,m=a.pendingProps,m=a.elementType===f?m:Gr(f,m),hE(s,a,f,m,u);case 7:return Dn(s,a,a.pendingProps,u),a.child;case 8:return Dn(s,a,a.pendingProps.children,u),a.child;case 12:return Dn(s,a,a.pendingProps.children,u),a.child;case 10:e:{if(f=a.type._context,m=a.pendingProps,_=a.memoizedProps,A=m.value,ft(Lh,f._currentValue),f._currentValue=A,_!==null)if(Wr(_.value,A)){if(_.children===m.children&&!qn.current){a=Wi(s,a,u);break e}}else for(_=a.child,_!==null&&(_.return=a);_!==null;){var j=_.dependencies;if(j!==null){A=_.child;for(var $=j.firstContext;$!==null;){if($.context===f){if(_.tag===1){$=qi(-1,u&-u),$.tag=2;var te=_.updateQueue;if(te!==null){te=te.shared;var me=te.pending;me===null?$.next=$:($.next=me.next,me.next=$),te.pending=$}}_.lanes|=u,$=_.alternate,$!==null&&($.lanes|=u),lg(_.return,u,a),j.lanes|=u;break}$=$.next}}else if(_.tag===10)A=_.type===a.type?null:_.child;else if(_.tag===18){if(A=_.return,A===null)throw Error(t(341));A.lanes|=u,j=A.alternate,j!==null&&(j.lanes|=u),lg(A,u,a),A=_.sibling}else A=_.child;if(A!==null)A.return=_;else for(A=_;A!==null;){if(A===a){A=null;break}if(_=A.sibling,_!==null){_.return=A.return,A=_;break}A=A.return}_=A}Dn(s,a,m.children,u),a=a.child}return a;case 9:return m=a.type,f=a.pendingProps.children,fl(a,u),m=Sr(m),f=f(m),a.flags|=1,Dn(s,a,f,u),a.child;case 14:return f=a.type,m=Gr(f,a.pendingProps),m=Gr(f.type,m),fE(s,a,f,m,u);case 15:return pE(s,a,a.type,a.pendingProps,u);case 17:return f=a.type,m=a.pendingProps,m=a.elementType===f?m:Gr(f,m),Gh(s,a),a.tag=1,Wn(f)?(s=!0,kh(a)):s=!1,fl(a,u),sE(a,f,m),Sg(a,f,m,u),Ag(null,a,f,!0,s,u);case 19:return IE(s,a,u);case 22:return mE(s,a,u)}throw Error(t(156,a.tag))};function HE(s,a){return ja(s,a)}function MC(s,a,u,f){this.tag=s,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pr(s,a,u,f){return new MC(s,a,u,f)}function Kg(s){return s=s.prototype,!(!s||!s.isReactComponent)}function FC(s){if(typeof s=="function")return Kg(s)?1:0;if(s!=null){if(s=s.$$typeof,s===M)return 11;if(s===ge)return 14}return 2}function Ms(s,a){var u=s.alternate;return u===null?(u=Pr(s.tag,a,s.key,s.mode),u.elementType=s.elementType,u.type=s.type,u.stateNode=s.stateNode,u.alternate=s,s.alternate=u):(u.pendingProps=a,u.type=s.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=s.flags&14680064,u.childLanes=s.childLanes,u.lanes=s.lanes,u.child=s.child,u.memoizedProps=s.memoizedProps,u.memoizedState=s.memoizedState,u.updateQueue=s.updateQueue,a=s.dependencies,u.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},u.sibling=s.sibling,u.index=s.index,u.ref=s.ref,u}function sf(s,a,u,f,m,_){var A=2;if(f=s,typeof s=="function")Kg(s)&&(A=1);else if(typeof s=="string")A=5;else e:switch(s){case R:return Bo(u.children,m,_,a);case C:A=8,m|=8;break;case b:return s=Pr(12,u,a,m|2),s.elementType=b,s.lanes=_,s;case k:return s=Pr(13,u,a,m),s.elementType=k,s.lanes=_,s;case Y:return s=Pr(19,u,a,m),s.elementType=Y,s.lanes=_,s;case S:return of(u,m,_,a);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case w:A=10;break e;case D:A=9;break e;case M:A=11;break e;case ge:A=14;break e;case pe:A=16,f=null;break e}throw Error(t(130,s==null?s:typeof s,""))}return a=Pr(A,u,a,m),a.elementType=s,a.type=f,a.lanes=_,a}function Bo(s,a,u,f){return s=Pr(7,s,f,a),s.lanes=u,s}function of(s,a,u,f){return s=Pr(22,s,f,a),s.elementType=S,s.lanes=u,s.stateNode={isHidden:!1},s}function Qg(s,a,u){return s=Pr(6,s,null,a),s.lanes=u,s}function Yg(s,a,u){return a=Pr(4,s.children!==null?s.children:[],s.key,a),a.lanes=u,a.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},a}function UC(s,a,u,f,m){this.tag=a,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_s(0),this.expirationTimes=_s(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_s(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Xg(s,a,u,f,m,_,A,j,$){return s=new UC(s,a,u,j,$),a===1?(a=1,_===!0&&(a|=8)):a=0,_=Pr(3,null,null,a),s.current=_,_.stateNode=s,_.memoizedState={element:f,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},cg(_),s}function jC(s,a,u){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:f==null?null:""+f,children:s,containerInfo:a,implementation:u}}function GE(s){if(!s)return As;s=s._reactInternals;e:{if(Fr(s)!==s||s.tag!==1)throw Error(t(170));var a=s;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Wn(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(t(171))}if(s.tag===1){var u=s.type;if(Wn(u))return E0(s,u,a)}return a}function KE(s,a,u,f,m,_,A,j,$){return s=Xg(u,f,!0,s,m,_,A,j,$),s.context=GE(null),u=s.current,f=Nn(),m=Ls(u),_=qi(f,m),_.callback=a??null,xs(u,_,m),s.current.lanes=m,vs(s,m,f),Kn(s,f),s}function af(s,a,u,f){var m=a.current,_=Nn(),A=Ls(m);return u=GE(u),a.context===null?a.context=u:a.pendingContext=u,a=qi(_,A),a.payload={element:s},f=f===void 0?null:f,f!==null&&(a.callback=f),s=xs(m,a,A),s!==null&&(Yr(s,m,A,_),Mh(s,m,A)),A}function lf(s){if(s=s.current,!s.child)return null;switch(s.child.tag){case 5:return s.child.stateNode;default:return s.child.stateNode}}function QE(s,a){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var u=s.retryLane;s.retryLane=u!==0&&u<a?u:a}}function Jg(s,a){QE(s,a),(s=s.alternate)&&QE(s,a)}function zC(){return null}var YE=typeof reportError=="function"?reportError:function(s){console.error(s)};function Zg(s){this._internalRoot=s}uf.prototype.render=Zg.prototype.render=function(s){var a=this._internalRoot;if(a===null)throw Error(t(409));af(s,a,null,null)},uf.prototype.unmount=Zg.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var a=s.containerInfo;Uo(function(){af(null,s,null,null)}),a[Ui]=null}};function uf(s){this._internalRoot=s}uf.prototype.unstable_scheduleHydration=function(s){if(s){var a=lh();s={blockedOn:null,target:s,priority:a};for(var u=0;u<ii.length&&a!==0&&a<ii[u].priority;u++);ii.splice(u,0,s),u===0&&dh(s)}};function ey(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function cf(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}function XE(){}function BC(s,a,u,f,m){if(m){if(typeof f=="function"){var _=f;f=function(){var te=lf(A);_.call(te)}}var A=KE(a,f,s,0,null,!1,!1,"",XE);return s._reactRootContainer=A,s[Ui]=A.current,ec(s.nodeType===8?s.parentNode:s),Uo(),A}for(;m=s.lastChild;)s.removeChild(m);if(typeof f=="function"){var j=f;f=function(){var te=lf($);j.call(te)}}var $=Xg(s,0,!1,null,null,!1,!1,"",XE);return s._reactRootContainer=$,s[Ui]=$.current,ec(s.nodeType===8?s.parentNode:s),Uo(function(){af(a,$,u,f)}),$}function df(s,a,u,f,m){var _=u._reactRootContainer;if(_){var A=_;if(typeof m=="function"){var j=m;m=function(){var $=lf(A);j.call($)}}af(a,A,s,m)}else A=BC(u,a,s,m,f);return lf(A)}oh=function(s){switch(s.tag){case 3:var a=s.stateNode;if(a.current.memoizedState.isDehydrated){var u=ys(a.pendingLanes);u!==0&&(ws(a,u|1),Kn(a,ht()),!(nt&6)&&(_l=ht()+500,ks()))}break;case 13:Uo(function(){var f=$i(s,1);if(f!==null){var m=Nn();Yr(f,s,1,m)}}),Jg(s,1)}},$a=function(s){if(s.tag===13){var a=$i(s,134217728);if(a!==null){var u=Nn();Yr(a,s,134217728,u)}Jg(s,134217728)}},ah=function(s){if(s.tag===13){var a=Ls(s),u=$i(s,a);if(u!==null){var f=Nn();Yr(u,s,a,f)}Jg(s,a)}},lh=function(){return Ze},uh=function(s,a){var u=Ze;try{return Ze=s,a()}finally{Ze=u}},Na=function(s,a,u){switch(a){case"input":if(qe(s,u),a=u.name,u.type==="radio"&&a!=null){for(u=s;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<u.length;a++){var f=u[a];if(f!==s&&f.form===s.form){var m=Ph(f);if(!m)throw Error(t(90));Ue(f),qe(f,m)}}}break;case"textarea":Oi(s,u);break;case"select":a=u.value,a!=null&&kt(s,!!u.multiple,a,!1)}},vo=Wg,Lu=Uo;var $C={usingClientEntryPoint:!1,Events:[rc,sl,Ph,ni,Nu,Wg]},yc={findFiberByHostInstance:xo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qC={bundleType:yc.bundleType,version:yc.version,rendererPackageName:yc.rendererPackageName,rendererConfig:yc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:X.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){return s=Fu(s),s===null?null:s.stateNode},findFiberByHostInstance:yc.findFiberByHostInstance||zC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hf.isDisabled&&hf.supportsFiber)try{So=hf.inject(qC),rr=hf}catch{}}return Qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$C,Qn.createPortal=function(s,a){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ey(a))throw Error(t(200));return jC(s,a,null,u)},Qn.createRoot=function(s,a){if(!ey(s))throw Error(t(299));var u=!1,f="",m=YE;return a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(m=a.onRecoverableError)),a=Xg(s,1,!1,null,null,u,!1,f,m),s[Ui]=a.current,ec(s.nodeType===8?s.parentNode:s),new Zg(a)},Qn.findDOMNode=function(s){if(s==null)return null;if(s.nodeType===1)return s;var a=s._reactInternals;if(a===void 0)throw typeof s.render=="function"?Error(t(188)):(s=Object.keys(s).join(","),Error(t(268,s)));return s=Fu(a),s=s===null?null:s.stateNode,s},Qn.flushSync=function(s){return Uo(s)},Qn.hydrate=function(s,a,u){if(!cf(a))throw Error(t(200));return df(null,s,a,!0,u)},Qn.hydrateRoot=function(s,a,u){if(!ey(s))throw Error(t(405));var f=u!=null&&u.hydratedSources||null,m=!1,_="",A=YE;if(u!=null&&(u.unstable_strictMode===!0&&(m=!0),u.identifierPrefix!==void 0&&(_=u.identifierPrefix),u.onRecoverableError!==void 0&&(A=u.onRecoverableError)),a=KE(a,null,s,1,u??null,m,!1,_,A),s[Ui]=a.current,ec(s),f)for(s=0;s<f.length;s++)u=f[s],m=u._getVersion,m=m(u._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[u,m]:a.mutableSourceEagerHydrationData.push(u,m);return new uf(a)},Qn.render=function(s,a,u){if(!cf(a))throw Error(t(200));return df(null,s,a,!1,u)},Qn.unmountComponentAtNode=function(s){if(!cf(s))throw Error(t(40));return s._reactRootContainer?(Uo(function(){df(null,null,s,!1,function(){s._reactRootContainer=null,s[Ui]=null})}),!0):!1},Qn.unstable_batchedUpdates=Wg,Qn.unstable_renderSubtreeIntoContainer=function(s,a,u,f){if(!cf(u))throw Error(t(200));if(s==null||s._reactInternals===void 0)throw Error(t(38));return df(s,a,u,!1,f)},Qn.version="18.3.1-next-f1338f8080-20240426",Qn}var sI;function ex(){if(sI)return ry.exports;sI=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ry.exports=ZC(),ry.exports}var oI;function tx(){if(oI)return pf;oI=1;var n=ex();return pf.createRoot=n.createRoot,pf.hydrateRoot=n.hydrateRoot,pf}var nx=tx(),ue=ei();const ua=hb(ue),aI=HC({__proto__:null,default:ua},[ue]);var oy={exports:{}},ay={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lI;function rx(){if(lI)return ay;lI=1;var n=ei();function e(h,p){return h===p&&(h!==0||1/h===1/p)||h!==h&&p!==p}var t=typeof Object.is=="function"?Object.is:e,r=n.useSyncExternalStore,i=n.useRef,o=n.useEffect,l=n.useMemo,c=n.useDebugValue;return ay.useSyncExternalStoreWithSelector=function(h,p,g,v,T){var x=i(null);if(x.current===null){var L={hasValue:!1,value:null};x.current=L}else L=x.current;x=l(function(){function U(V){if(!q){if(q=!0,G=V,V=v(V),T!==void 0&&L.hasValue){var F=L.value;if(T(F,V))return H=F}return H=V}if(F=H,t(G,V))return F;var R=v(V);return T!==void 0&&T(F,R)?(G=V,F):(G=V,H=R)}var q=!1,G,H,X=g===void 0?null:g;return[function(){return U(p())},X===null?void 0:function(){return U(X())}]},[p,g,v,T]);var N=r(h,x[0],x[1]);return o(function(){L.hasValue=!0,L.value=N},[N]),c(N),N},ay}var uI;function ix(){return uI||(uI=1,oy.exports=rx()),oy.exports}var sx=ix(),hr="default"in aI?ua:aI,cI=Symbol.for("react-redux-context"),dI=typeof globalThis<"u"?globalThis:{};function ox(){if(!hr.createContext)return{};const n=dI[cI]??(dI[cI]=new Map);let e=n.get(hr.createContext);return e||(e=hr.createContext(null),n.set(hr.createContext,e)),e}var Xs=ox(),ax=()=>{throw new Error("uSES not initialized!")};function Q_(n=Xs){return function(){return hr.useContext(n)}}var fb=Q_(),pb=ax,lx=n=>{pb=n},ux=(n,e)=>n===e;function cx(n=Xs){const e=n===Xs?fb:Q_(n),t=(r,i={})=>{const{equalityFn:o=ux,devModeChecks:l={}}=typeof i=="function"?{equalityFn:i}:i,{store:c,subscription:h,getServerState:p,stabilityCheck:g,identityFunctionCheck:v}=e();hr.useRef(!0);const T=hr.useCallback({[r.name](L){return r(L)}}[r.name],[r,g,l.stabilityCheck]),x=pb(h.addNestedSub,c.getState,p||c.getState,T,o);return hr.useDebugValue(x),x};return Object.assign(t,{withTypes:()=>t}),t}var Ks=cx();function dx(n){n()}function hx(){let n=null,e=null;return{clear(){n=null,e=null},notify(){dx(()=>{let t=n;for(;t;)t.callback(),t=t.next})},get(){const t=[];let r=n;for(;r;)t.push(r),r=r.next;return t},subscribe(t){let r=!0;const i=e={callback:t,next:null,prev:e};return i.prev?i.prev.next=i:n=i,function(){!r||n===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:n=i.next)}}}}var hI={notify(){},get:()=>[]};function fx(n,e){let t,r=hI,i=0,o=!1;function l(N){g();const U=r.subscribe(N);let q=!1;return()=>{q||(q=!0,U(),v())}}function c(){r.notify()}function h(){L.onStateChange&&L.onStateChange()}function p(){return o}function g(){i++,t||(t=n.subscribe(h),r=hx())}function v(){i--,t&&i===0&&(t(),t=void 0,r.clear(),r=hI)}function T(){o||(o=!0,g())}function x(){o&&(o=!1,v())}const L={addNestedSub:l,notifyNestedSubs:c,handleChangeWrapper:h,isSubscribed:p,trySubscribe:T,tryUnsubscribe:x,getListeners:()=>r};return L}var px=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mx=typeof navigator<"u"&&navigator.product==="ReactNative",gx=px||mx?hr.useLayoutEffect:hr.useEffect;function yx({store:n,context:e,children:t,serverState:r,stabilityCheck:i="once",identityFunctionCheck:o="once"}){const l=hr.useMemo(()=>{const p=fx(n);return{store:n,subscription:p,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:o}},[n,r,i,o]),c=hr.useMemo(()=>n.getState(),[n]);gx(()=>{const{subscription:p}=l;return p.onStateChange=p.notifyNestedSubs,p.trySubscribe(),c!==n.getState()&&p.notifyNestedSubs(),()=>{p.tryUnsubscribe(),p.onStateChange=void 0}},[l,c]);const h=e||Xs;return hr.createElement(h.Provider,{value:l},t)}var _x=yx;function mb(n=Xs){const e=n===Xs?fb:Q_(n),t=()=>{const{store:r}=e();return r};return Object.assign(t,{withTypes:()=>t}),t}var vx=mb();function wx(n=Xs){const e=n===Xs?vx:mb(n),t=()=>e().dispatch;return Object.assign(t,{withTypes:()=>t}),t}var gb=wx();lx(sx.useSyncExternalStoreWithSelector);var vc={},fI;function Ex(){if(fI)return vc;fI=1,Object.defineProperty(vc,"__esModule",{value:!0}),vc.parse=l,vc.serialize=p;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,i=Object.prototype.toString,o=(()=>{const T=function(){};return T.prototype=Object.create(null),T})();function l(T,x){const L=new o,N=T.length;if(N<2)return L;const U=(x==null?void 0:x.decode)||g;let q=0;do{const G=T.indexOf("=",q);if(G===-1)break;const H=T.indexOf(";",q),X=H===-1?N:H;if(G>X){q=T.lastIndexOf(";",G-1)+1;continue}const V=c(T,q,G),F=h(T,G,V),R=T.slice(V,F);if(L[R]===void 0){let C=c(T,G+1,X),b=h(T,X,C);const w=U(T.slice(C,b));L[R]=w}q=X+1}while(q<N);return L}function c(T,x,L){do{const N=T.charCodeAt(x);if(N!==32&&N!==9)return x}while(++x<L);return L}function h(T,x,L){for(;x>L;){const N=T.charCodeAt(--x);if(N!==32&&N!==9)return x+1}return L}function p(T,x,L){const N=(L==null?void 0:L.encode)||encodeURIComponent;if(!n.test(T))throw new TypeError(`argument name is invalid: ${T}`);const U=N(x);if(!e.test(U))throw new TypeError(`argument val is invalid: ${x}`);let q=T+"="+U;if(!L)return q;if(L.maxAge!==void 0){if(!Number.isInteger(L.maxAge))throw new TypeError(`option maxAge is invalid: ${L.maxAge}`);q+="; Max-Age="+L.maxAge}if(L.domain){if(!t.test(L.domain))throw new TypeError(`option domain is invalid: ${L.domain}`);q+="; Domain="+L.domain}if(L.path){if(!r.test(L.path))throw new TypeError(`option path is invalid: ${L.path}`);q+="; Path="+L.path}if(L.expires){if(!v(L.expires)||!Number.isFinite(L.expires.valueOf()))throw new TypeError(`option expires is invalid: ${L.expires}`);q+="; Expires="+L.expires.toUTCString()}if(L.httpOnly&&(q+="; HttpOnly"),L.secure&&(q+="; Secure"),L.partitioned&&(q+="; Partitioned"),L.priority)switch(typeof L.priority=="string"?L.priority.toLowerCase():void 0){case"low":q+="; Priority=Low";break;case"medium":q+="; Priority=Medium";break;case"high":q+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${L.priority}`)}if(L.sameSite)switch(typeof L.sameSite=="string"?L.sameSite.toLowerCase():L.sameSite){case!0:case"strict":q+="; SameSite=Strict";break;case"lax":q+="; SameSite=Lax";break;case"none":q+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${L.sameSite}`)}return q}function g(T){if(T.indexOf("%")===-1)return T;try{return decodeURIComponent(T)}catch{return T}}function v(T){return i.call(T)==="[object Date]"}return vc}Ex();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var pI="popstate";function Ix(n={}){function e(r,i){let{pathname:o,search:l,hash:c}=r.location;return Yy("",{pathname:o,search:l,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:ed(i)}return Sx(e,t,null,n)}function Ot(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Si(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Tx(){return Math.random().toString(36).substring(2,10)}function mI(n,e){return{usr:n.state,key:n.key,idx:e}}function Yy(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?du(e):e,state:t,key:e&&e.key||r||Tx()}}function ed({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function du(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function Sx(n,e,t,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,c="POP",h=null,p=g();p==null&&(p=0,l.replaceState({...l.state,idx:p},""));function g(){return(l.state||{idx:null}).idx}function v(){c="POP";let U=g(),q=U==null?null:U-p;p=U,h&&h({action:c,location:N.location,delta:q})}function T(U,q){c="PUSH";let G=Yy(N.location,U,q);p=g()+1;let H=mI(G,p),X=N.createHref(G);try{l.pushState(H,"",X)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(X)}o&&h&&h({action:c,location:N.location,delta:1})}function x(U,q){c="REPLACE";let G=Yy(N.location,U,q);p=g();let H=mI(G,p),X=N.createHref(G);l.replaceState(H,"",X),o&&h&&h({action:c,location:N.location,delta:0})}function L(U){let q=i.location.origin!=="null"?i.location.origin:i.location.href,G=typeof U=="string"?U:ed(U);return G=G.replace(/ $/,"%20"),Ot(q,`No window.location.(origin|href) available to create URL for href: ${G}`),new URL(G,q)}let N={get action(){return c},get location(){return n(i,l)},listen(U){if(h)throw new Error("A history only accepts one active listener");return i.addEventListener(pI,v),h=U,()=>{i.removeEventListener(pI,v),h=null}},createHref(U){return e(i,U)},createURL:L,encodeLocation(U){let q=L(U);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:T,replace:x,go(U){return l.go(U)}};return N}function yb(n,e,t="/"){return bx(n,e,t,!1)}function bx(n,e,t,r){let i=typeof e=="string"?du(e):e,o=Js(i.pathname||"/",t);if(o==null)return null;let l=_b(n);Rx(l);let c=null;for(let h=0;c==null&&h<l.length;++h){let p=Mx(o);c=Lx(l[h],p,r)}return c}function _b(n,e=[],t=[],r=""){let i=(o,l,c)=>{let h={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};h.relativePath.startsWith("/")&&(Ot(h.relativePath.startsWith(r),`Absolute route path "${h.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(r.length));let p=Ji([r,h.relativePath]),g=t.concat(h);o.children&&o.children.length>0&&(Ot(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),_b(o.children,e,g,p)),!(o.path==null&&!o.index)&&e.push({path:p,score:Dx(p,o.index),routesMeta:g})};return n.forEach((o,l)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))i(o,l);else for(let h of vb(o.path))i(o,l,h)}),e}function vb(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,i=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=vb(r.join("/")),c=[];return c.push(...l.map(h=>h===""?o:[o,h].join("/"))),i&&c.push(...l),c.map(h=>n.startsWith("/")&&h===""?"/":h)}function Rx(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Nx(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var Px=/^:[\w-]+$/,Ax=3,kx=2,Cx=1,xx=10,Ox=-2,gI=n=>n==="*";function Dx(n,e){let t=n.split("/"),r=t.length;return t.some(gI)&&(r+=Ox),e&&(r+=kx),t.filter(i=>!gI(i)).reduce((i,o)=>i+(Px.test(o)?Ax:o===""?Cx:xx),r)}function Nx(n,e){return n.length===e.length&&n.slice(0,-1).every((r,i)=>r===e[i])?n[n.length-1]-e[e.length-1]:0}function Lx(n,e,t=!1){let{routesMeta:r}=n,i={},o="/",l=[];for(let c=0;c<r.length;++c){let h=r[c],p=c===r.length-1,g=o==="/"?e:e.slice(o.length)||"/",v=Yf({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},g),T=h.route;if(!v&&p&&t&&!r[r.length-1].route.index&&(v=Yf({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!v)return null;Object.assign(i,v.params),l.push({params:i,pathname:Ji([o,v.pathname]),pathnameBase:zx(Ji([o,v.pathnameBase])),route:T}),v.pathnameBase!=="/"&&(o=Ji([o,v.pathnameBase]))}return l}function Yf(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=Vx(n.path,n.caseSensitive,n.end),i=e.match(t);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:v},T)=>{if(g==="*"){let L=c[T]||"";l=o.slice(0,o.length-L.length).replace(/(.)\/+$/,"$1")}const x=c[T];return v&&!x?p[g]=void 0:p[g]=(x||"").replace(/%2F/g,"/"),p},{}),pathname:o,pathnameBase:l,pattern:n}}function Vx(n,e=!1,t=!0){Si(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],i="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,h)=>(r.push({paramName:c,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),i+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":n!==""&&n!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Mx(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Si(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Js(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function Fx(n,e="/"){let{pathname:t,search:r="",hash:i=""}=typeof n=="string"?du(n):n;return{pathname:t?t.startsWith("/")?t:Ux(t,e):e,search:Bx(r),hash:$x(i)}}function Ux(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function ly(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jx(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function wb(n){let e=jx(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function Eb(n,e,t,r=!1){let i;typeof n=="string"?i=du(n):(i={...n},Ot(!i.pathname||!i.pathname.includes("?"),ly("?","pathname","search",i)),Ot(!i.pathname||!i.pathname.includes("#"),ly("#","pathname","hash",i)),Ot(!i.search||!i.search.includes("#"),ly("#","search","hash",i)));let o=n===""||i.pathname==="",l=o?"/":i.pathname,c;if(l==null)c=t;else{let v=e.length-1;if(!r&&l.startsWith("..")){let T=l.split("/");for(;T[0]==="..";)T.shift(),v-=1;i.pathname=T.join("/")}c=v>=0?e[v]:"/"}let h=Fx(i,c),p=l&&l!=="/"&&l.endsWith("/"),g=(o||l===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}var Ji=n=>n.join("/").replace(/\/\/+/g,"/"),zx=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Bx=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,$x=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function qx(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Ib=["POST","PUT","PATCH","DELETE"];new Set(Ib);var Wx=["GET",...Ib];new Set(Wx);var hu=ue.createContext(null);hu.displayName="DataRouter";var Cp=ue.createContext(null);Cp.displayName="DataRouterState";var Tb=ue.createContext({isTransitioning:!1});Tb.displayName="ViewTransition";var Hx=ue.createContext(new Map);Hx.displayName="Fetchers";var Gx=ue.createContext(null);Gx.displayName="Await";var ki=ue.createContext(null);ki.displayName="Navigation";var Pd=ue.createContext(null);Pd.displayName="Location";var Ci=ue.createContext({outlet:null,matches:[],isDataRoute:!1});Ci.displayName="Route";var Y_=ue.createContext(null);Y_.displayName="RouteError";function Kx(n,{relative:e}={}){Ot(Ad(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=ue.useContext(ki),{hash:i,pathname:o,search:l}=kd(n,{relative:e}),c=o;return t!=="/"&&(c=o==="/"?t:Ji([t,o])),r.createHref({pathname:c,search:l,hash:i})}function Ad(){return ue.useContext(Pd)!=null}function ba(){return Ot(Ad(),"useLocation() may be used only in the context of a <Router> component."),ue.useContext(Pd).location}var Sb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function bb(n){ue.useContext(ki).static||ue.useLayoutEffect(n)}function Rb(){let{isDataRoute:n}=ue.useContext(Ci);return n?lO():Qx()}function Qx(){Ot(Ad(),"useNavigate() may be used only in the context of a <Router> component.");let n=ue.useContext(hu),{basename:e,navigator:t}=ue.useContext(ki),{matches:r}=ue.useContext(Ci),{pathname:i}=ba(),o=JSON.stringify(wb(r)),l=ue.useRef(!1);return bb(()=>{l.current=!0}),ue.useCallback((h,p={})=>{if(Si(l.current,Sb),!l.current)return;if(typeof h=="number"){t.go(h);return}let g=Eb(h,JSON.parse(o),i,p.relative==="path");n==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Ji([e,g.pathname])),(p.replace?t.replace:t.push)(g,p.state,p)},[e,t,o,i,n])}ue.createContext(null);function Yx(){let{matches:n}=ue.useContext(Ci),e=n[n.length-1];return e?e.params:{}}function kd(n,{relative:e}={}){let{matches:t}=ue.useContext(Ci),{pathname:r}=ba(),i=JSON.stringify(wb(t));return ue.useMemo(()=>Eb(n,JSON.parse(i),r,e==="path"),[n,i,r,e])}function Xx(n,e){return Pb(n,e)}function Pb(n,e,t,r){var q;Ot(Ad(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=ue.useContext(ki),{matches:o}=ue.useContext(Ci),l=o[o.length-1],c=l?l.params:{},h=l?l.pathname:"/",p=l?l.pathnameBase:"/",g=l&&l.route;{let G=g&&g.path||"";Ab(h,!g||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let v=ba(),T;if(e){let G=typeof e=="string"?du(e):e;Ot(p==="/"||((q=G.pathname)==null?void 0:q.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${G.pathname}" was given in the \`location\` prop.`),T=G}else T=v;let x=T.pathname||"/",L=x;if(p!=="/"){let G=p.replace(/^\//,"").split("/");L="/"+x.replace(/^\//,"").split("/").slice(G.length).join("/")}let N=yb(n,{pathname:L});Si(g||N!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),Si(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let U=nO(N&&N.map(G=>Object.assign({},G,{params:Object.assign({},c,G.params),pathname:Ji([p,i.encodeLocation?i.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?p:Ji([p,i.encodeLocation?i.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),o,t,r);return e&&U?ue.createElement(Pd.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...T},navigationType:"POP"}},U):U}function Jx(){let n=aO(),e=qx(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},l=null;return console.error("Error handled by React Router default ErrorBoundary:",n),l=ue.createElement(ue.Fragment,null,ue.createElement("p",null,"💿 Hey developer 👋"),ue.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ue.createElement("code",{style:o},"ErrorBoundary")," or"," ",ue.createElement("code",{style:o},"errorElement")," prop on your route.")),ue.createElement(ue.Fragment,null,ue.createElement("h2",null,"Unexpected Application Error!"),ue.createElement("h3",{style:{fontStyle:"italic"}},e),t?ue.createElement("pre",{style:i},t):null,l)}var Zx=ue.createElement(Jx,null),eO=class extends ue.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?ue.createElement(Ci.Provider,{value:this.props.routeContext},ue.createElement(Y_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function tO({routeContext:n,match:e,children:t}){let r=ue.useContext(hu);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),ue.createElement(Ci.Provider,{value:n},t)}function nO(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let i=n,o=t==null?void 0:t.errors;if(o!=null){let h=i.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);Ot(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,h+1))}let l=!1,c=-1;if(t)for(let h=0;h<i.length;h++){let p=i[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:g,errors:v}=t,T=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!v||v[p.route.id]===void 0);if(p.route.lazy||T){l=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((h,p,g)=>{let v,T=!1,x=null,L=null;t&&(v=o&&p.route.id?o[p.route.id]:void 0,x=p.route.errorElement||Zx,l&&(c<0&&g===0?(Ab("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,L=null):c===g&&(T=!0,L=p.route.hydrateFallbackElement||null)));let N=e.concat(i.slice(0,g+1)),U=()=>{let q;return v?q=x:T?q=L:p.route.Component?q=ue.createElement(p.route.Component,null):p.route.element?q=p.route.element:q=h,ue.createElement(tO,{match:p,routeContext:{outlet:h,matches:N,isDataRoute:t!=null},children:q})};return t&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?ue.createElement(eO,{location:t.location,revalidation:t.revalidation,component:x,error:v,children:U(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):U()},null)}function X_(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rO(n){let e=ue.useContext(hu);return Ot(e,X_(n)),e}function iO(n){let e=ue.useContext(Cp);return Ot(e,X_(n)),e}function sO(n){let e=ue.useContext(Ci);return Ot(e,X_(n)),e}function J_(n){let e=sO(n),t=e.matches[e.matches.length-1];return Ot(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function oO(){return J_("useRouteId")}function aO(){var r;let n=ue.useContext(Y_),e=iO("useRouteError"),t=J_("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function lO(){let{router:n}=rO("useNavigate"),e=J_("useNavigate"),t=ue.useRef(!1);return bb(()=>{t.current=!0}),ue.useCallback(async(i,o={})=>{Si(t.current,Sb),t.current&&(typeof i=="number"?n.navigate(i):await n.navigate(i,{fromRouteId:e,...o}))},[n,e])}var yI={};function Ab(n,e,t){!e&&!yI[n]&&(yI[n]=!0,Si(!1,t))}ue.memo(uO);function uO({routes:n,future:e,state:t}){return Pb(n,void 0,t,e)}function Cf(n){Ot(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function cO({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:i,static:o=!1}){Ot(!Ad(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=n.replace(/^\/*/,"/"),c=ue.useMemo(()=>({basename:l,navigator:i,static:o,future:{}}),[l,i,o]);typeof t=="string"&&(t=du(t));let{pathname:h="/",search:p="",hash:g="",state:v=null,key:T="default"}=t,x=ue.useMemo(()=>{let L=Js(h,l);return L==null?null:{location:{pathname:L,search:p,hash:g,state:v,key:T},navigationType:r}},[l,h,p,g,v,T,r]);return Si(x!=null,`<Router basename="${l}"> is not able to match the URL "${h}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:ue.createElement(ki.Provider,{value:c},ue.createElement(Pd.Provider,{children:e,value:x}))}function dO({children:n,location:e}){return Xx(Xy(n),e)}function Xy(n,e=[]){let t=[];return ue.Children.forEach(n,(r,i)=>{if(!ue.isValidElement(r))return;let o=[...e,i];if(r.type===ue.Fragment){t.push.apply(t,Xy(r.props.children,o));return}Ot(r.type===Cf,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ot(!r.props.index||!r.props.children,"An index route cannot have child routes.");let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Xy(r.props.children,o)),t.push(l)}),t}var xf="get",Of="application/x-www-form-urlencoded";function xp(n){return n!=null&&typeof n.tagName=="string"}function hO(n){return xp(n)&&n.tagName.toLowerCase()==="button"}function fO(n){return xp(n)&&n.tagName.toLowerCase()==="form"}function pO(n){return xp(n)&&n.tagName.toLowerCase()==="input"}function mO(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function gO(n,e){return n.button===0&&(!e||e==="_self")&&!mO(n)}var mf=null;function yO(){if(mf===null)try{new FormData(document.createElement("form"),0),mf=!1}catch{mf=!0}return mf}var _O=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function uy(n){return n!=null&&!_O.has(n)?(Si(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Of}"`),null):n}function vO(n,e){let t,r,i,o,l;if(fO(n)){let c=n.getAttribute("action");r=c?Js(c,e):null,t=n.getAttribute("method")||xf,i=uy(n.getAttribute("enctype"))||Of,o=new FormData(n)}else if(hO(n)||pO(n)&&(n.type==="submit"||n.type==="image")){let c=n.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||c.getAttribute("action");if(r=h?Js(h,e):null,t=n.getAttribute("formmethod")||c.getAttribute("method")||xf,i=uy(n.getAttribute("formenctype"))||uy(c.getAttribute("enctype"))||Of,o=new FormData(c,n),!yO()){let{name:p,type:g,value:v}=n;if(g==="image"){let T=p?`${p}.`:"";o.append(`${T}x`,"0"),o.append(`${T}y`,"0")}else p&&o.append(p,v)}}else{if(xp(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=xf,r=null,i=Of,l=n}return o&&i==="text/plain"&&(l=o,o=void 0),{action:r,method:t.toLowerCase(),encType:i,formData:o,body:l}}function Z_(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function wO(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function EO(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function IO(n,e,t){let r=await Promise.all(n.map(async i=>{let o=e.routes[i.route.id];if(o){let l=await wO(o,t);return l.links?l.links():[]}return[]}));return RO(r.flat(1).filter(EO).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function _I(n,e,t,r,i,o){let l=(h,p)=>t[p]?h.route.id!==t[p].route.id:!0,c=(h,p)=>{var g;return t[p].pathname!==h.pathname||((g=t[p].route.path)==null?void 0:g.endsWith("*"))&&t[p].params["*"]!==h.params["*"]};return o==="assets"?e.filter((h,p)=>l(h,p)||c(h,p)):o==="data"?e.filter((h,p)=>{var v;let g=r.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(l(h,p)||c(h,p))return!0;if(h.route.shouldRevalidate){let T=h.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function TO(n,e){return SO(n.map(t=>{let r=e.routes[t.route.id];if(!r)return[];let i=[r.module];return r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function SO(n){return[...new Set(n)]}function bO(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function RO(n,e){let t=new Set;return new Set(e),n.reduce((r,i)=>{let o=JSON.stringify(bO(i));return t.has(o)||(t.add(o),r.push({key:o,link:i})),r},[])}function PO(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function AO(){let n=ue.useContext(hu);return Z_(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function kO(){let n=ue.useContext(Cp);return Z_(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var ev=ue.createContext(void 0);ev.displayName="FrameworkContext";function kb(){let n=ue.useContext(ev);return Z_(n,"You must render this element inside a <HydratedRouter> element"),n}function CO(n,e){let t=ue.useContext(ev),[r,i]=ue.useState(!1),[o,l]=ue.useState(!1),{onFocus:c,onBlur:h,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=e,T=ue.useRef(null);ue.useEffect(()=>{if(n==="render"&&l(!0),n==="viewport"){let N=q=>{q.forEach(G=>{l(G.isIntersecting)})},U=new IntersectionObserver(N,{threshold:.5});return T.current&&U.observe(T.current),()=>{U.disconnect()}}},[n]),ue.useEffect(()=>{if(r){let N=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(N)}}},[r]);let x=()=>{i(!0)},L=()=>{i(!1),l(!1)};return t?n!=="intent"?[o,T,{}]:[o,T,{onFocus:wc(c,x),onBlur:wc(h,L),onMouseEnter:wc(p,x),onMouseLeave:wc(g,L),onTouchStart:wc(v,x)}]:[!1,T,{}]}function wc(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function xO({page:n,...e}){let{router:t}=AO(),r=ue.useMemo(()=>yb(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?ue.createElement(DO,{page:n,matches:r,...e}):(console.warn(`Tried to prefetch ${n} but no routes matched.`),null)}function OO(n){let{manifest:e,routeModules:t}=kb(),[r,i]=ue.useState([]);return ue.useEffect(()=>{let o=!1;return IO(n,e,t).then(l=>{o||i(l)}),()=>{o=!0}},[n,e,t]),r}function DO({page:n,matches:e,...t}){let r=ba(),{manifest:i,routeModules:o}=kb(),{loaderData:l,matches:c}=kO(),h=ue.useMemo(()=>_I(n,e,c,i,r,"data"),[n,e,c,i,r]),p=ue.useMemo(()=>_I(n,e,c,i,r,"assets"),[n,e,c,i,r]),g=ue.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let x=new Set,L=!1;if(e.forEach(U=>{var G;let q=i.routes[U.route.id];!q||!q.hasLoader||(!h.some(H=>H.route.id===U.route.id)&&U.route.id in l&&((G=o[U.route.id])!=null&&G.shouldRevalidate)||q.hasClientLoader?L=!0:x.add(U.route.id))}),x.size===0)return[];let N=PO(n);return L&&x.size>0&&N.searchParams.set("_routes",e.filter(U=>x.has(U.route.id)).map(U=>U.route.id).join(",")),[N.pathname+N.search]},[l,r,i,h,e,n,o]),v=ue.useMemo(()=>TO(p,i),[p,i]),T=OO(p);return ue.createElement(ue.Fragment,null,g.map(x=>ue.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...t})),v.map(x=>ue.createElement("link",{key:x,rel:"modulepreload",href:x,...t})),T.map(({key:x,link:L})=>ue.createElement("link",{key:x,...L})))}function NO(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Cb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Cb&&(window.__reactRouterVersion="7.0.2")}catch{}function LO({basename:n,children:e,window:t}){let r=ue.useRef();r.current==null&&(r.current=Ix({window:t,v5Compat:!0}));let i=r.current,[o,l]=ue.useState({action:i.action,location:i.location}),c=ue.useCallback(h=>{ue.startTransition(()=>l(h))},[l]);return ue.useLayoutEffect(()=>i.listen(c),[i,c]),ue.createElement(cO,{basename:n,children:e,location:o.location,navigationType:o.action,navigator:i})}var xb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fu=ue.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:i,reloadDocument:o,replace:l,state:c,target:h,to:p,preventScrollReset:g,viewTransition:v,...T},x){let{basename:L}=ue.useContext(ki),N=typeof p=="string"&&xb.test(p),U,q=!1;if(typeof p=="string"&&N&&(U=p,Cb))try{let b=new URL(window.location.href),w=p.startsWith("//")?new URL(b.protocol+p):new URL(p),D=Js(w.pathname,L);w.origin===b.origin&&D!=null?p=D+w.search+w.hash:q=!0}catch{Si(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let G=Kx(p,{relative:i}),[H,X,V]=CO(r,T),F=UO(p,{replace:l,state:c,target:h,preventScrollReset:g,relative:i,viewTransition:v});function R(b){e&&e(b),b.defaultPrevented||F(b)}let C=ue.createElement("a",{...T,...V,href:U||G,onClick:q||o?e:R,ref:NO(x,X),target:h,"data-discover":!N&&t==="render"?"true":void 0});return H&&!N?ue.createElement(ue.Fragment,null,C,ue.createElement(xO,{page:G})):C});fu.displayName="Link";var VO=ue.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:i=!1,style:o,to:l,viewTransition:c,children:h,...p},g){let v=kd(l,{relative:p.relative}),T=ba(),x=ue.useContext(Cp),{navigator:L,basename:N}=ue.useContext(ki),U=x!=null&&qO(v)&&c===!0,q=L.encodeLocation?L.encodeLocation(v).pathname:v.pathname,G=T.pathname,H=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;t||(G=G.toLowerCase(),H=H?H.toLowerCase():null,q=q.toLowerCase()),H&&N&&(H=Js(H,N)||H);const X=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let V=G===q||!i&&G.startsWith(q)&&G.charAt(X)==="/",F=H!=null&&(H===q||!i&&H.startsWith(q)&&H.charAt(q.length)==="/"),R={isActive:V,isPending:F,isTransitioning:U},C=V?e:void 0,b;typeof r=="function"?b=r(R):b=[r,V?"active":null,F?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let w=typeof o=="function"?o(R):o;return ue.createElement(fu,{...p,"aria-current":C,className:b,ref:g,style:w,to:l,viewTransition:c},typeof h=="function"?h(R):h)});VO.displayName="NavLink";var MO=ue.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:i,state:o,method:l=xf,action:c,onSubmit:h,relative:p,preventScrollReset:g,viewTransition:v,...T},x)=>{let L=BO(),N=$O(c,{relative:p}),U=l.toLowerCase()==="get"?"get":"post",q=typeof c=="string"&&xb.test(c),G=H=>{if(h&&h(H),H.defaultPrevented)return;H.preventDefault();let X=H.nativeEvent.submitter,V=(X==null?void 0:X.getAttribute("formmethod"))||l;L(X||H.currentTarget,{fetcherKey:e,method:V,navigate:t,replace:i,state:o,relative:p,preventScrollReset:g,viewTransition:v})};return ue.createElement("form",{ref:x,method:U,action:N,onSubmit:r?h:G,...T,"data-discover":!q&&n==="render"?"true":void 0})});MO.displayName="Form";function FO(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ob(n){let e=ue.useContext(hu);return Ot(e,FO(n)),e}function UO(n,{target:e,replace:t,state:r,preventScrollReset:i,relative:o,viewTransition:l}={}){let c=Rb(),h=ba(),p=kd(n,{relative:o});return ue.useCallback(g=>{if(gO(g,e)){g.preventDefault();let v=t!==void 0?t:ed(h)===ed(p);c(n,{replace:v,state:r,preventScrollReset:i,relative:o,viewTransition:l})}},[h,c,p,t,r,e,n,i,o,l])}var jO=0,zO=()=>`__${String(++jO)}__`;function BO(){let{router:n}=Ob("useSubmit"),{basename:e}=ue.useContext(ki),t=oO();return ue.useCallback(async(r,i={})=>{let{action:o,method:l,encType:c,formData:h,body:p}=vO(r,e);if(i.navigate===!1){let g=i.fetcherKey||zO();await n.fetch(g,t,i.action||o,{preventScrollReset:i.preventScrollReset,formData:h,body:p,formMethod:i.method||l,formEncType:i.encType||c,flushSync:i.flushSync})}else await n.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:h,body:p,formMethod:i.method||l,formEncType:i.encType||c,replace:i.replace,state:i.state,fromRouteId:t,flushSync:i.flushSync,viewTransition:i.viewTransition})},[n,e,t])}function $O(n,{relative:e}={}){let{basename:t}=ue.useContext(ki),r=ue.useContext(Ci);Ot(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...kd(n||".",{relative:e})},l=ba();if(n==null){o.search=l.search;let c=new URLSearchParams(o.search),h=c.getAll("index");if(h.some(g=>g==="")){c.delete("index"),h.filter(v=>v).forEach(v=>c.append("index",v));let g=c.toString();o.search=g?`?${g}`:""}}return(!n||n===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:Ji([t,o.pathname])),ed(o)}function qO(n,e={}){let t=ue.useContext(Tb);Ot(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ob("useViewTransitionState"),i=kd(n,{relative:e.relative});if(!t.isTransitioning)return!1;let o=Js(t.currentLocation.pathname,r)||t.currentLocation.pathname,l=Js(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Yf(i.pathname,l)!=null||Yf(i.pathname,o)!=null}new TextEncoder;var Jn=function(){return Jn=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Jn.apply(this,arguments)};function tv(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Xf(n,e,t){if(t||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))}var wt="-ms-",$c="-moz-",st="-webkit-",Db="comm",Op="rule",nv="decl",WO="@import",Nb="@keyframes",HO="@layer",Lb=Math.abs,rv=String.fromCharCode,Jy=Object.assign;function GO(n,e){return cn(n,0)^45?(((e<<2^cn(n,0))<<2^cn(n,1))<<2^cn(n,2))<<2^cn(n,3):0}function Vb(n){return n.trim()}function Gi(n,e){return(n=e.exec(n))?n[0]:n}function Ge(n,e,t){return n.replace(e,t)}function Df(n,e,t){return n.indexOf(e,t)}function cn(n,e){return n.charCodeAt(e)|0}function zl(n,e,t){return n.slice(e,t)}function hi(n){return n.length}function Mb(n){return n.length}function Nc(n,e){return e.push(n),n}function KO(n,e){return n.map(e).join("")}function vI(n,e){return n.filter(function(t){return!Gi(t,e)})}var Dp=1,Bl=1,Fb=0,xr=0,Jt=0,pu="";function Np(n,e,t,r,i,o,l,c){return{value:n,root:e,parent:t,type:r,props:i,children:o,line:Dp,column:Bl,length:l,return:"",siblings:c}}function $s(n,e){return Jy(Np("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function wl(n){for(;n.root;)n=$s(n.root,{children:[n]});Nc(n,n.siblings)}function QO(){return Jt}function YO(){return Jt=xr>0?cn(pu,--xr):0,Bl--,Jt===10&&(Bl=1,Dp--),Jt}function Jr(){return Jt=xr<Fb?cn(pu,xr++):0,Bl++,Jt===10&&(Bl=1,Dp++),Jt}function ra(){return cn(pu,xr)}function Nf(){return xr}function Lp(n,e){return zl(pu,n,e)}function Zy(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function XO(n){return Dp=Bl=1,Fb=hi(pu=n),xr=0,[]}function JO(n){return pu="",n}function cy(n){return Vb(Lp(xr-1,e_(n===91?n+2:n===40?n+1:n)))}function ZO(n){for(;(Jt=ra())&&Jt<33;)Jr();return Zy(n)>2||Zy(Jt)>3?"":" "}function eD(n,e){for(;--e&&Jr()&&!(Jt<48||Jt>102||Jt>57&&Jt<65||Jt>70&&Jt<97););return Lp(n,Nf()+(e<6&&ra()==32&&Jr()==32))}function e_(n){for(;Jr();)switch(Jt){case n:return xr;case 34:case 39:n!==34&&n!==39&&e_(Jt);break;case 40:n===41&&e_(n);break;case 92:Jr();break}return xr}function tD(n,e){for(;Jr()&&n+Jt!==57;)if(n+Jt===84&&ra()===47)break;return"/*"+Lp(e,xr-1)+"*"+rv(n===47?n:Jr())}function nD(n){for(;!Zy(ra());)Jr();return Lp(n,xr)}function rD(n){return JO(Lf("",null,null,null,[""],n=XO(n),0,[0],n))}function Lf(n,e,t,r,i,o,l,c,h){for(var p=0,g=0,v=l,T=0,x=0,L=0,N=1,U=1,q=1,G=0,H="",X=i,V=o,F=r,R=H;U;)switch(L=G,G=Jr()){case 40:if(L!=108&&cn(R,v-1)==58){Df(R+=Ge(cy(G),"&","&\f"),"&\f",Lb(p?c[p-1]:0))!=-1&&(q=-1);break}case 34:case 39:case 91:R+=cy(G);break;case 9:case 10:case 13:case 32:R+=ZO(L);break;case 92:R+=eD(Nf()-1,7);continue;case 47:switch(ra()){case 42:case 47:Nc(iD(tD(Jr(),Nf()),e,t,h),h);break;default:R+="/"}break;case 123*N:c[p++]=hi(R)*q;case 125*N:case 59:case 0:switch(G){case 0:case 125:U=0;case 59+g:q==-1&&(R=Ge(R,/\f/g,"")),x>0&&hi(R)-v&&Nc(x>32?EI(R+";",r,t,v-1,h):EI(Ge(R," ","")+";",r,t,v-2,h),h);break;case 59:R+=";";default:if(Nc(F=wI(R,e,t,p,g,i,c,H,X=[],V=[],v,o),o),G===123)if(g===0)Lf(R,e,F,F,X,o,v,c,V);else switch(T===99&&cn(R,3)===110?100:T){case 100:case 108:case 109:case 115:Lf(n,F,F,r&&Nc(wI(n,F,F,0,0,i,c,H,i,X=[],v,V),V),i,V,v,c,r?X:V);break;default:Lf(R,F,F,F,[""],V,0,c,V)}}p=g=x=0,N=q=1,H=R="",v=l;break;case 58:v=1+hi(R),x=L;default:if(N<1){if(G==123)--N;else if(G==125&&N++==0&&YO()==125)continue}switch(R+=rv(G),G*N){case 38:q=g>0?1:(R+="\f",-1);break;case 44:c[p++]=(hi(R)-1)*q,q=1;break;case 64:ra()===45&&(R+=cy(Jr())),T=ra(),g=v=hi(H=R+=nD(Nf())),G++;break;case 45:L===45&&hi(R)==2&&(N=0)}}return o}function wI(n,e,t,r,i,o,l,c,h,p,g,v){for(var T=i-1,x=i===0?o:[""],L=Mb(x),N=0,U=0,q=0;N<r;++N)for(var G=0,H=zl(n,T+1,T=Lb(U=l[N])),X=n;G<L;++G)(X=Vb(U>0?x[G]+" "+H:Ge(H,/&\f/g,x[G])))&&(h[q++]=X);return Np(n,e,t,i===0?Op:c,h,p,g,v)}function iD(n,e,t,r){return Np(n,e,t,Db,rv(QO()),zl(n,2,-2),0,r)}function EI(n,e,t,r,i){return Np(n,e,t,nv,zl(n,0,r),zl(n,r+1,-1),r,i)}function Ub(n,e,t){switch(GO(n,e)){case 5103:return st+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return st+n+n;case 4789:return $c+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return st+n+$c+n+wt+n+n;case 5936:switch(cn(n,e+11)){case 114:return st+n+wt+Ge(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return st+n+wt+Ge(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return st+n+wt+Ge(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return st+n+wt+n+n;case 6165:return st+n+wt+"flex-"+n+n;case 5187:return st+n+Ge(n,/(\w+).+(:[^]+)/,st+"box-$1$2"+wt+"flex-$1$2")+n;case 5443:return st+n+wt+"flex-item-"+Ge(n,/flex-|-self/g,"")+(Gi(n,/flex-|baseline/)?"":wt+"grid-row-"+Ge(n,/flex-|-self/g,""))+n;case 4675:return st+n+wt+"flex-line-pack"+Ge(n,/align-content|flex-|-self/g,"")+n;case 5548:return st+n+wt+Ge(n,"shrink","negative")+n;case 5292:return st+n+wt+Ge(n,"basis","preferred-size")+n;case 6060:return st+"box-"+Ge(n,"-grow","")+st+n+wt+Ge(n,"grow","positive")+n;case 4554:return st+Ge(n,/([^-])(transform)/g,"$1"+st+"$2")+n;case 6187:return Ge(Ge(Ge(n,/(zoom-|grab)/,st+"$1"),/(image-set)/,st+"$1"),n,"")+n;case 5495:case 3959:return Ge(n,/(image-set\([^]*)/,st+"$1$`$1");case 4968:return Ge(Ge(n,/(.+:)(flex-)?(.*)/,st+"box-pack:$3"+wt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+st+n+n;case 4200:if(!Gi(n,/flex-|baseline/))return wt+"grid-column-align"+zl(n,e)+n;break;case 2592:case 3360:return wt+Ge(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(r,i){return e=i,Gi(r.props,/grid-\w+-end/)})?~Df(n+(t=t[e].value),"span",0)?n:wt+Ge(n,"-start","")+n+wt+"grid-row-span:"+(~Df(t,"span",0)?Gi(t,/\d+/):+Gi(t,/\d+/)-+Gi(n,/\d+/))+";":wt+Ge(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(r){return Gi(r.props,/grid-\w+-start/)})?n:wt+Ge(Ge(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Ge(n,/(.+)-inline(.+)/,st+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hi(n)-1-e>6)switch(cn(n,e+1)){case 109:if(cn(n,e+4)!==45)break;case 102:return Ge(n,/(.+:)(.+)-([^]+)/,"$1"+st+"$2-$3$1"+$c+(cn(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Df(n,"stretch",0)?Ub(Ge(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return Ge(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,c,h,p){return wt+i+":"+o+p+(l?wt+i+"-span:"+(c?h:+h-+o)+p:"")+n});case 4949:if(cn(n,e+6)===121)return Ge(n,":",":"+st)+n;break;case 6444:switch(cn(n,cn(n,14)===45?18:11)){case 120:return Ge(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+st+(cn(n,14)===45?"inline-":"")+"box$3$1"+st+"$2$3$1"+wt+"$2box$3")+n;case 100:return Ge(n,":",":"+wt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ge(n,"scroll-","scroll-snap-")+n}return n}function Jf(n,e){for(var t="",r=0;r<n.length;r++)t+=e(n[r],r,n,e)||"";return t}function sD(n,e,t,r){switch(n.type){case HO:if(n.children.length)break;case WO:case nv:return n.return=n.return||n.value;case Db:return"";case Nb:return n.return=n.value+"{"+Jf(n.children,r)+"}";case Op:if(!hi(n.value=n.props.join(",")))return""}return hi(t=Jf(n.children,r))?n.return=n.value+"{"+t+"}":""}function oD(n){var e=Mb(n);return function(t,r,i,o){for(var l="",c=0;c<e;c++)l+=n[c](t,r,i,o)||"";return l}}function aD(n){return function(e){e.root||(e=e.return)&&n(e)}}function lD(n,e,t,r){if(n.length>-1&&!n.return)switch(n.type){case nv:n.return=Ub(n.value,n.length,t);return;case Nb:return Jf([$s(n,{value:Ge(n.value,"@","@"+st)})],r);case Op:if(n.length)return KO(t=n.props,function(i){switch(Gi(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":wl($s(n,{props:[Ge(i,/:(read-\w+)/,":"+$c+"$1")]})),wl($s(n,{props:[i]})),Jy(n,{props:vI(t,r)});break;case"::placeholder":wl($s(n,{props:[Ge(i,/:(plac\w+)/,":"+st+"input-$1")]})),wl($s(n,{props:[Ge(i,/:(plac\w+)/,":"+$c+"$1")]})),wl($s(n,{props:[Ge(i,/:(plac\w+)/,wt+"input-$1")]})),wl($s(n,{props:[i]})),Jy(n,{props:vI(t,r)});break}return""})}}var uD={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},cr={},$l=typeof process<"u"&&cr!==void 0&&(cr.REACT_APP_SC_ATTR||cr.SC_ATTR)||"data-styled",jb="active",zb="data-styled-version",Vp="6.1.13",iv=`/*!sc*/
`,Zf=typeof window<"u"&&"HTMLElement"in window,cD=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&cr!==void 0&&cr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&cr.REACT_APP_SC_DISABLE_SPEEDY!==""?cr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&cr.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&cr!==void 0&&cr.SC_DISABLE_SPEEDY!==void 0&&cr.SC_DISABLE_SPEEDY!==""&&cr.SC_DISABLE_SPEEDY!=="false"&&cr.SC_DISABLE_SPEEDY),Mp=Object.freeze([]),ql=Object.freeze({});function dD(n,e,t){return t===void 0&&(t=ql),n.theme!==t.theme&&n.theme||e||t.theme}var Bb=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hD=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,fD=/(^-|-$)/g;function II(n){return n.replace(hD,"-").replace(fD,"")}var pD=/(a)(d)/gi,gf=52,TI=function(n){return String.fromCharCode(n+(n>25?39:97))};function t_(n){var e,t="";for(e=Math.abs(n);e>gf;e=e/gf|0)t=TI(e%gf)+t;return(TI(e%gf)+t).replace(pD,"$1-$2")}var dy,$b=5381,Ol=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},qb=function(n){return Ol($b,n)};function mD(n){return t_(qb(n)>>>0)}function gD(n){return n.displayName||n.name||"Component"}function hy(n){return typeof n=="string"&&!0}var Wb=typeof Symbol=="function"&&Symbol.for,Hb=Wb?Symbol.for("react.memo"):60115,yD=Wb?Symbol.for("react.forward_ref"):60112,_D={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},vD={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Gb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},wD=((dy={})[yD]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},dy[Hb]=Gb,dy);function SI(n){return("type"in(e=n)&&e.type.$$typeof)===Hb?Gb:"$$typeof"in n?wD[n.$$typeof]:_D;var e}var ED=Object.defineProperty,ID=Object.getOwnPropertyNames,bI=Object.getOwnPropertySymbols,TD=Object.getOwnPropertyDescriptor,SD=Object.getPrototypeOf,RI=Object.prototype;function Kb(n,e,t){if(typeof e!="string"){if(RI){var r=SD(e);r&&r!==RI&&Kb(n,r,t)}var i=ID(e);bI&&(i=i.concat(bI(e)));for(var o=SI(n),l=SI(e),c=0;c<i.length;++c){var h=i[c];if(!(h in vD||t&&t[h]||l&&h in l||o&&h in o)){var p=TD(e,h);try{ED(n,h,p)}catch{}}}}return n}function Wl(n){return typeof n=="function"}function sv(n){return typeof n=="object"&&"styledComponentId"in n}function Zo(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function PI(n,e){if(n.length===0)return"";for(var t=n[0],r=1;r<n.length;r++)t+=n[r];return t}function td(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function n_(n,e,t){if(t===void 0&&(t=!1),!t&&!td(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)n[r]=n_(n[r],e[r]);else if(td(e))for(var r in e)n[r]=n_(n[r],e[r]);return n}function ov(n,e){Object.defineProperty(n,"toString",{value:e})}function Cd(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var bD=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw Cd(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var c=this.indexOfGroup(e+1),h=(l=0,t.length);l<h;l++)this.tag.insertRule(c,t[l])&&(this.groupSizes[e]++,c++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),i=r+t;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,l=i;l<o;l++)t+="".concat(this.tag.getRule(l)).concat(iv);return t},n}(),Vf=new Map,ep=new Map,Mf=1,yf=function(n){if(Vf.has(n))return Vf.get(n);for(;ep.has(Mf);)Mf++;var e=Mf++;return Vf.set(n,e),ep.set(e,n),e},RD=function(n,e){Mf=e+1,Vf.set(n,e),ep.set(e,n)},PD="style[".concat($l,"][").concat(zb,'="').concat(Vp,'"]'),AD=new RegExp("^".concat($l,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),kD=function(n,e,t){for(var r,i=t.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&n.registerName(e,r)},CD=function(n,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(iv),i=[],o=0,l=r.length;o<l;o++){var c=r[o].trim();if(c){var h=c.match(AD);if(h){var p=0|parseInt(h[1],10),g=h[2];p!==0&&(RD(g,p),kD(n,g,h[3]),n.getTag().insertRules(p,i)),i.length=0}else i.push(c)}}},AI=function(n){for(var e=document.querySelectorAll(PD),t=0,r=e.length;t<r;t++){var i=e[t];i&&i.getAttribute($l)!==jb&&(CD(n,i),i.parentNode&&i.parentNode.removeChild(i))}};function xD(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Qb=function(n){var e=document.head,t=n||e,r=document.createElement("style"),i=function(c){var h=Array.from(c.querySelectorAll("style[".concat($l,"]")));return h[h.length-1]}(t),o=i!==void 0?i.nextSibling:null;r.setAttribute($l,jb),r.setAttribute(zb,Vp);var l=xD();return l&&r.setAttribute("nonce",l),t.insertBefore(r,o),r},OD=function(){function n(e){this.element=Qb(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===t)return l}throw Cd(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),DD=function(){function n(e){this.element=Qb(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),ND=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),kI=Zf,LD={isServer:!Zf,useCSSOMInjection:!cD},Yb=function(){function n(e,t,r){e===void 0&&(e=ql),t===void 0&&(t={});var i=this;this.options=Jn(Jn({},LD),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Zf&&kI&&(kI=!1,AI(this)),ov(this,function(){return function(o){for(var l=o.getTag(),c=l.length,h="",p=function(v){var T=function(q){return ep.get(q)}(v);if(T===void 0)return"continue";var x=o.names.get(T),L=l.getGroup(v);if(x===void 0||!x.size||L.length===0)return"continue";var N="".concat($l,".g").concat(v,'[id="').concat(T,'"]'),U="";x!==void 0&&x.forEach(function(q){q.length>0&&(U+="".concat(q,","))}),h+="".concat(L).concat(N,'{content:"').concat(U,'"}').concat(iv)},g=0;g<c;g++)p(g);return h}(i)})}return n.registerId=function(e){return yf(e)},n.prototype.rehydrate=function(){!this.server&&Zf&&AI(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(Jn(Jn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,i=t.target;return t.isServer?new ND(i):r?new OD(i):new DD(i)}(this.options),new bD(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(yf(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},n.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(yf(e),r)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(yf(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),VD=/&/g,MD=/^\s*\/\/.*$/gm;function Xb(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=Xb(t.children,e)),t})}function FD(n){var e,t,r,i=ql,o=i.options,l=o===void 0?ql:o,c=i.plugins,h=c===void 0?Mp:c,p=function(T,x,L){return L.startsWith(t)&&L.endsWith(t)&&L.replaceAll(t,"").length>0?".".concat(e):T},g=h.slice();g.push(function(T){T.type===Op&&T.value.includes("&")&&(T.props[0]=T.props[0].replace(VD,t).replace(r,p))}),l.prefix&&g.push(lD),g.push(sD);var v=function(T,x,L,N){x===void 0&&(x=""),L===void 0&&(L=""),N===void 0&&(N="&"),e=N,t=x,r=new RegExp("\\".concat(t,"\\b"),"g");var U=T.replace(MD,""),q=rD(L||x?"".concat(L," ").concat(x," { ").concat(U," }"):U);l.namespace&&(q=Xb(q,l.namespace));var G=[];return Jf(q,oD(g.concat(aD(function(H){return G.push(H)})))),G};return v.hash=h.length?h.reduce(function(T,x){return x.name||Cd(15),Ol(T,x.name)},$b).toString():"",v}var UD=new Yb,r_=FD(),Jb=ua.createContext({shouldForwardProp:void 0,styleSheet:UD,stylis:r_});Jb.Consumer;ua.createContext(void 0);function CI(){return ue.useContext(Jb)}var jD=function(){function n(e,t){var r=this;this.inject=function(i,o){o===void 0&&(o=r_);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ov(this,function(){throw Cd(12,String(r.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=r_),this.name+e.hash},n}(),zD=function(n){return n>="A"&&n<="Z"};function xI(n){for(var e="",t=0;t<n.length;t++){var r=n[t];if(t===1&&r==="-"&&n[0]==="-")return n;zD(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Zb=function(n){return n==null||n===!1||n===""},eR=function(n){var e,t,r=[];for(var i in n){var o=n[i];n.hasOwnProperty(i)&&!Zb(o)&&(Array.isArray(o)&&o.isCss||Wl(o)?r.push("".concat(xI(i),":"),o,";"):td(o)?r.push.apply(r,Xf(Xf(["".concat(i," {")],eR(o),!1),["}"],!1)):r.push("".concat(xI(i),": ").concat((e=i,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in uD||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function ia(n,e,t,r){if(Zb(n))return[];if(sv(n))return[".".concat(n.styledComponentId)];if(Wl(n)){if(!Wl(o=n)||o.prototype&&o.prototype.isReactComponent||!e)return[n];var i=n(e);return ia(i,e,t,r)}var o;return n instanceof jD?t?(n.inject(t,r),[n.getName(r)]):[n]:td(n)?eR(n):Array.isArray(n)?Array.prototype.concat.apply(Mp,n.map(function(l){return ia(l,e,t,r)})):[n.toString()]}function BD(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Wl(t)&&!sv(t))return!1}return!0}var $D=qb(Vp),qD=function(){function n(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&BD(e),this.componentId=t,this.baseHash=Ol($D,t),this.baseStyle=r,Yb.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))i=Zo(i,this.staticRulesId);else{var o=PI(ia(this.rules,e,t,r)),l=t_(Ol(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,l)){var c=r(o,".".concat(l),void 0,this.componentId);t.insertRules(this.componentId,l,c)}i=Zo(i,l),this.staticRulesId=l}else{for(var h=Ol(this.baseHash,r.hash),p="",g=0;g<this.rules.length;g++){var v=this.rules[g];if(typeof v=="string")p+=v;else if(v){var T=PI(ia(v,e,t,r));h=Ol(h,T+g),p+=T}}if(p){var x=t_(h>>>0);t.hasNameForId(this.componentId,x)||t.insertRules(this.componentId,x,r(p,".".concat(x),void 0,this.componentId)),i=Zo(i,x)}}return i},n}(),tR=ua.createContext(void 0);tR.Consumer;var fy={};function WD(n,e,t){var r=sv(n),i=n,o=!hy(n),l=e.attrs,c=l===void 0?Mp:l,h=e.componentId,p=h===void 0?function(X,V){var F=typeof X!="string"?"sc":II(X);fy[F]=(fy[F]||0)+1;var R="".concat(F,"-").concat(mD(Vp+F+fy[F]));return V?"".concat(V,"-").concat(R):R}(e.displayName,e.parentComponentId):h,g=e.displayName,v=g===void 0?function(X){return hy(X)?"styled.".concat(X):"Styled(".concat(gD(X),")")}(n):g,T=e.displayName&&e.componentId?"".concat(II(e.displayName),"-").concat(e.componentId):e.componentId||p,x=r&&i.attrs?i.attrs.concat(c).filter(Boolean):c,L=e.shouldForwardProp;if(r&&i.shouldForwardProp){var N=i.shouldForwardProp;if(e.shouldForwardProp){var U=e.shouldForwardProp;L=function(X,V){return N(X,V)&&U(X,V)}}else L=N}var q=new qD(t,T,r?i.componentStyle:void 0);function G(X,V){return function(F,R,C){var b=F.attrs,w=F.componentStyle,D=F.defaultProps,M=F.foldedComponentIds,k=F.styledComponentId,Y=F.target,ge=ua.useContext(tR),pe=CI(),S=F.shouldForwardProp||pe.shouldForwardProp,le=dD(R,ge,D)||ql,B=function(oe,ae,ce){for(var Te,be=Jn(Jn({},ae),{className:void 0,theme:ce}),Le=0;Le<oe.length;Le+=1){var $e=Wl(Te=oe[Le])?Te(be):Te;for(var Ue in $e)be[Ue]=Ue==="className"?Zo(be[Ue],$e[Ue]):Ue==="style"?Jn(Jn({},be[Ue]),$e[Ue]):$e[Ue]}return ae.className&&(be.className=Zo(be.className,ae.className)),be}(b,R,le),I=B.as||Y,P={};for(var z in B)B[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&B.theme===le||(z==="forwardedAs"?P.as=B.forwardedAs:S&&!S(z,I)||(P[z]=B[z]));var ee=function(oe,ae){var ce=CI(),Te=oe.generateAndInjectStyles(ae,ce.styleSheet,ce.stylis);return Te}(w,B),re=Zo(M,k);return ee&&(re+=" "+ee),B.className&&(re+=" "+B.className),P[hy(I)&&!Bb.has(I)?"class":"className"]=re,P.ref=C,ue.createElement(I,P)}(H,X,V)}G.displayName=v;var H=ua.forwardRef(G);return H.attrs=x,H.componentStyle=q,H.displayName=v,H.shouldForwardProp=L,H.foldedComponentIds=r?Zo(i.foldedComponentIds,i.styledComponentId):"",H.styledComponentId=T,H.target=r?i.target:n,Object.defineProperty(H,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(X){this._foldedDefaultProps=r?function(V){for(var F=[],R=1;R<arguments.length;R++)F[R-1]=arguments[R];for(var C=0,b=F;C<b.length;C++)n_(V,b[C],!0);return V}({},i.defaultProps,X):X}}),ov(H,function(){return".".concat(H.styledComponentId)}),o&&Kb(H,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),H}function OI(n,e){for(var t=[n[0]],r=0,i=e.length;r<i;r+=1)t.push(e[r],n[r+1]);return t}var DI=function(n){return Object.assign(n,{isCss:!0})};function HD(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Wl(n)||td(n))return DI(ia(OI(Mp,Xf([n],e,!0))));var r=n;return e.length===0&&r.length===1&&typeof r[0]=="string"?ia(r):DI(ia(OI(r,e)))}function i_(n,e,t){if(t===void 0&&(t=ql),!e)throw Cd(1,e);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return n(e,t,HD.apply(void 0,Xf([i],o,!1)))};return r.attrs=function(i){return i_(n,e,Jn(Jn({},t),{attrs:Array.prototype.concat(t.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return i_(n,e,Jn(Jn({},t),i))},r}var nR=function(n){return i_(WD,n)},je=nR;Bb.forEach(function(n){je[n]=nR(n)});var NI={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},GD=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],l=n[t++],c=n[t++],h=((i&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],l=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return e.join("")},iR={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],l=i+1<n.length,c=l?n[i+1]:0,h=i+2<n.length,p=h?n[i+2]:0,g=o>>2,v=(o&3)<<4|c>>4;let T=(c&15)<<2|p>>6,x=p&63;h||(x=64,l||(T=64)),r.push(t[g],t[v],t[T],t[x])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(rR(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):GD(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const p=i<n.length?t[n.charAt(i)]:64;++i;const v=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||c==null||p==null||v==null)throw new KD;const T=o<<2|c>>4;if(r.push(T),p!==64){const x=c<<4&240|p>>2;if(r.push(x),v!==64){const L=p<<6&192|v;r.push(L)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class KD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QD=function(n){const e=rR(n);return iR.encodeByteArray(e,!0)},tp=function(n){return QD(n).replace(/\./g,"")},sR=function(n){try{return iR.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function np(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!YD(t)||(n[t]=np(n[t],e[t]));return n}function YD(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=()=>oR().__FIREBASE_DEFAULTS__,JD=()=>{if(typeof process>"u"||typeof NI>"u")return;const n=NI.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ZD=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&sR(n[1]);return e&&JSON.parse(e)},av=()=>{try{return XD()||JD()||ZD()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},aR=()=>{var n;return(n=av())===null||n===void 0?void 0:n.config},eN=n=>{var e;return(e=av())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[tp(JSON.stringify(t)),tp(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function lv(){var n;const e=(n=av())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rN(){return typeof window<"u"||uR()}function uR(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function iN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function uv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dR(){const n=Nt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function hR(){return!lv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nd(){try{return typeof indexedDB=="object"}catch{return!1}}function sN(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN="FirebaseError";class An extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=oN,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ra.prototype.create)}}class Ra{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],l=o?aN(o,r):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new An(i,c,r)}}function aN(n,e){return n.replace(lN,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function uN(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function rd(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],l=e[i];if(VI(o)&&VI(l)){if(!rd(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function VI(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Dl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Lc(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function fR(n,e){const t=new cN(n,e);return t.subscribe.bind(t)}class cN{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");dN(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=py),i.error===void 0&&(i.error=py),i.complete===void 0&&(i.complete=py);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dN(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function py(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(n){return n&&n._delegate?n._delegate:n}class Or{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new tN;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pN(e))try{this.getOrInitializeService({instanceIdentifier:Wo})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Wo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wo){return this.instances.has(e)}getOptions(e=Wo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&l.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fN(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wo){return this.component?this.component.multipleInstances?e:Wo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fN(n){return n===Wo?void 0:n}function pN(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hN(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=[];var Ye;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ye||(Ye={}));const mR={debug:Ye.DEBUG,verbose:Ye.VERBOSE,info:Ye.INFO,warn:Ye.WARN,error:Ye.ERROR,silent:Ye.SILENT},mN=Ye.INFO,gN={[Ye.DEBUG]:"log",[Ye.VERBOSE]:"log",[Ye.INFO]:"info",[Ye.WARN]:"warn",[Ye.ERROR]:"error"},yN=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=gN[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fp{constructor(e){this.name=e,this._logLevel=mN,this._logHandler=yN,this._userLogHandler=null,cv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ye.DEBUG,...e),this._logHandler(this,Ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ye.VERBOSE,...e),this._logHandler(this,Ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ye.INFO,...e),this._logHandler(this,Ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ye.WARN,...e),this._logHandler(this,Ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ye.ERROR,...e),this._logHandler(this,Ye.ERROR,...e)}}function _N(n){cv.forEach(e=>{e.setLogLevel(n)})}function vN(n,e){for(const t of cv){let r=null;e&&e.level&&(r=mR[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,o,...l)=>{const c=l.map(h=>{if(h==null)return null;if(typeof h=="string")return h;if(typeof h=="number"||typeof h=="boolean")return h.toString();if(h instanceof Error)return h.message;try{return JSON.stringify(h)}catch{return null}}).filter(h=>h).join(" ");o>=(r??i.logLevel)&&n({level:Ye[o].toLowerCase(),message:c,args:l,type:i.name})}}}const wN=(n,e)=>e.some(t=>n instanceof t);let MI,FI;function EN(){return MI||(MI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IN(){return FI||(FI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gR=new WeakMap,s_=new WeakMap,yR=new WeakMap,my=new WeakMap,dv=new WeakMap;function TN(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{t(Qs(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&gR.set(t,n)}).catch(()=>{}),dv.set(e,n),e}function SN(n){if(s_.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{t(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});s_.set(n,e)}let o_={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return s_.get(n);if(e==="objectStoreNames")return n.objectStoreNames||yR.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Qs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function bN(n){o_=n(o_)}function RN(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(gy(this),e,...t);return yR.set(r,e.sort?e.sort():[e]),Qs(r)}:IN().includes(n)?function(...e){return n.apply(gy(this),e),Qs(gR.get(this))}:function(...e){return Qs(n.apply(gy(this),e))}}function PN(n){return typeof n=="function"?RN(n):(n instanceof IDBTransaction&&SN(n),wN(n,EN())?new Proxy(n,o_):n)}function Qs(n){if(n instanceof IDBRequest)return TN(n);if(my.has(n))return my.get(n);const e=PN(n);return e!==n&&(my.set(n,e),dv.set(e,n)),e}const gy=n=>dv.get(n);function AN(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(n,e),c=Qs(l);return r&&l.addEventListener("upgradeneeded",h=>{r(Qs(l.result),h.oldVersion,h.newVersion,Qs(l.transaction),h)}),t&&l.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",p=>i(p.oldVersion,p.newVersion,p))}).catch(()=>{}),c}const kN=["get","getKey","getAll","getAllKeys","count"],CN=["put","add","delete","clear"],yy=new Map;function UI(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(yy.get(e))return yy.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=CN.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kN.includes(t)))return;const o=async function(l,...c){const h=this.transaction(l,i?"readwrite":"readonly");let p=h.store;return r&&(p=p.index(c.shift())),(await Promise.all([p[t](...c),i&&h.done]))[0]};return yy.set(e,o),o}bN(n=>({...n,get:(e,t,r)=>UI(e,t)||n.get(e,t,r),has:(e,t)=>!!UI(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ON(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ON(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rp="@firebase/app",a_="0.10.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new Fp("@firebase/app"),DN="@firebase/app-compat",NN="@firebase/analytics-compat",LN="@firebase/analytics",VN="@firebase/app-check-compat",MN="@firebase/app-check",FN="@firebase/auth",UN="@firebase/auth-compat",jN="@firebase/database",zN="@firebase/data-connect",BN="@firebase/database-compat",$N="@firebase/functions",qN="@firebase/functions-compat",WN="@firebase/installations",HN="@firebase/installations-compat",GN="@firebase/messaging",KN="@firebase/messaging-compat",QN="@firebase/performance",YN="@firebase/performance-compat",XN="@firebase/remote-config",JN="@firebase/remote-config-compat",ZN="@firebase/storage",eL="@firebase/storage-compat",tL="@firebase/firestore",nL="@firebase/vertexai-preview",rL="@firebase/firestore-compat",iL="firebase",sL="10.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="[DEFAULT]",oL={[rp]:"fire-core",[DN]:"fire-core-compat",[LN]:"fire-analytics",[NN]:"fire-analytics-compat",[MN]:"fire-app-check",[VN]:"fire-app-check-compat",[FN]:"fire-auth",[UN]:"fire-auth-compat",[jN]:"fire-rtdb",[zN]:"fire-data-connect",[BN]:"fire-rtdb-compat",[$N]:"fire-fn",[qN]:"fire-fn-compat",[WN]:"fire-iid",[HN]:"fire-iid-compat",[GN]:"fire-fcm",[KN]:"fire-fcm-compat",[QN]:"fire-perf",[YN]:"fire-perf-compat",[XN]:"fire-rc",[JN]:"fire-rc-compat",[ZN]:"fire-gcs",[eL]:"fire-gcs-compat",[tL]:"fire-fst",[rL]:"fire-fst-compat",[nL]:"fire-vertex","fire-js":"fire-js",[iL]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=new Map,Hl=new Map,Gl=new Map;function id(n,e){try{n.container.addComponent(e)}catch(t){ns.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _R(n,e){n.container.addOrOverwriteComponent(e)}function rs(n){const e=n.name;if(Gl.has(e))return ns.debug(`There were multiple attempts to register component ${e}.`),!1;Gl.set(e,n);for(const t of eo.values())id(t,n);for(const t of Hl.values())id(t,n);return!0}function vR(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function aL(n,e,t=Zs){vR(n,e).clearInstance(t)}function wR(n){return n.options!==void 0}function Mt(n){return n.settings!==void 0}function lL(){Gl.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uL={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cr=new Ra("app","Firebase",uL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ER=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL extends ER{constructor(e,t,r,i){const o=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,l={name:r,automaticDataCollectionEnabled:o};if(e.apiKey!==void 0)super(e,l,i);else{const c=e;super(c.options,l,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:o},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,pr(rp,a_,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){fv(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Cr.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=sL;function hv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zs,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Cr.create("bad-app-name",{appName:String(i)});if(t||(t=aR()),!t)throw Cr.create("no-options");const o=eo.get(i);if(o){if(rd(t,o.options)&&rd(r,o.config))return o;throw Cr.create("duplicate-app",{appName:i})}const l=new pR(i);for(const h of Gl.values())l.addComponent(h);const c=new ER(t,r,l);return eo.set(i,c),c}function dL(n,e){if(rN()&&!uR())throw Cr.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;wR(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=p=>[...p].reduce((g,v)=>Math.imul(31,g)+v.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Cr.create("finalization-registry-not-supported",{});const o=""+i(JSON.stringify(r)),l=Hl.get(o);if(l)return l.incRefCount(e.releaseOnDeref),l;const c=new pR(o);for(const p of Gl.values())c.addComponent(p);const h=new cL(t,e,o,c);return Hl.set(o,h),h}function hL(n=Zs){const e=eo.get(n);if(!e&&n===Zs&&aR())return hv();if(!e)throw Cr.create("no-app",{appName:n});return e}function fL(){return Array.from(eo.values())}async function fv(n){let e=!1;const t=n.name;eo.has(t)?(e=!0,eo.delete(t)):Hl.has(t)&&n.decRefCount()<=0&&(Hl.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function pr(n,e,t){var r;let i=(r=oL[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const c=[`Unable to register library "${i}" with version "${e}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ns.warn(c.join(" "));return}rs(new Or(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function IR(n,e){if(n!==null&&typeof n!="function")throw Cr.create("invalid-log-argument");vN(n,e)}function TR(n){_N(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pL="firebase-heartbeat-database",mL=1,sd="firebase-heartbeat-store";let _y=null;function SR(){return _y||(_y=AN(pL,mL,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(sd)}catch(t){console.warn(t)}}}}).catch(n=>{throw Cr.create("idb-open",{originalErrorMessage:n.message})})),_y}async function gL(n){try{const t=(await SR()).transaction(sd),r=await t.objectStore(sd).get(bR(n));return await t.done,r}catch(e){if(e instanceof An)ns.warn(e.message);else{const t=Cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ns.warn(t.message)}}}async function jI(n,e){try{const r=(await SR()).transaction(sd,"readwrite");await r.objectStore(sd).put(e,bR(n)),await r.done}catch(t){if(t instanceof An)ns.warn(t.message);else{const r=Cr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ns.warn(r.message)}}}function bR(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yL=1024,_L=30*24*60*60*1e3;class vL{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new EL(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=zI();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=_L}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ns.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zI(),{heartbeatsToSend:r,unsentEntries:i}=wL(this._heartbeatsCache.heartbeats),o=tp(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return ns.warn(t),""}}}function zI(){return new Date().toISOString().substring(0,10)}function wL(n,e=yL){const t=[];let r=n.slice();for(const i of n){const o=t.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),BI(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),BI(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class EL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nd()?sN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await gL(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return jI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return jI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function BI(n){return tp(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IL(n){rs(new Or("platform-logger",e=>new xN(e),"PRIVATE")),rs(new Or("heartbeat",e=>new vL(e),"PRIVATE")),pr(rp,a_,n),pr(rp,a_,"esm2017"),pr("fire-js","")}IL("");const TL=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:An,SDK_VERSION:ls,_DEFAULT_ENTRY_NAME:Zs,_addComponent:id,_addOrOverwriteComponent:_R,_apps:eo,_clearComponents:lL,_components:Gl,_getProvider:vR,_isFirebaseApp:wR,_isFirebaseServerApp:Mt,_registerComponent:rs,_removeServiceInstance:aL,_serverApps:Hl,deleteApp:fv,getApp:hL,getApps:fL,initializeApp:hv,initializeServerApp:dL,onLog:IR,registerVersion:pr,setLogLevel:TR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,t){this._delegate=e,this.firebase=t,id(e,new Or("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),fv(this._delegate)))}_getService(e,t=Zs){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Zs){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){id(this._delegate,e)}_addOrOverwriteComponent(e){_R(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bL={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},$I=new Ra("app-compat","Firebase",bL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RL(n){const e={},t={__esModule:!0,initializeApp:o,app:i,registerVersion:pr,setLogLevel:TR,onLog:IR,apps:null,SDK_VERSION:ls,INTERNAL:{registerComponent:c,removeApp:r,useAsService:h,modularAPIs:TL}};t.default=t,Object.defineProperty(t,"apps",{get:l});function r(p){delete e[p]}function i(p){if(p=p||Zs,!LI(e,p))throw $I.create("no-app",{appName:p});return e[p]}i.App=n;function o(p,g={}){const v=hv(p,g);if(LI(e,v.name))return e[v.name];const T=new n(v,t);return e[v.name]=T,T}function l(){return Object.keys(e).map(p=>e[p])}function c(p){const g=p.name,v=g.replace("-compat","");if(rs(p)&&p.type==="PUBLIC"){const T=(x=i())=>{if(typeof x[v]!="function")throw $I.create("invalid-app-argument",{appName:g});return x[v]()};p.serviceProps!==void 0&&np(T,p.serviceProps),t[v]=T,n.prototype[v]=function(...x){return this._getService.bind(this,g).apply(this,p.multipleInstances?x:[])}}return p.type==="PUBLIC"?t[v]:null}function h(p,g){return g==="serverAuth"?null:g}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(){const n=RL(SL);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:RR,extendNamespace:e,createSubscribe:fR,ErrorFactory:Ra,deepExtend:np});function e(t){np(n,t)}return n}const PL=RR();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=new Fp("@firebase/app-compat"),AL="@firebase/app-compat",kL="0.2.42";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CL(n){pr(AL,kL,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const n=oR();if(n.firebase!==void 0){qI.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&qI.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const xi=PL;CL();var xL="firebase",OL="10.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xi.registerVersion(xL,OL,"app-compat");const Ec={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},El={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DL(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function PR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NL=DL,LL=PR,AR=new Ra("auth","Firebase",PR());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=new Fp("@firebase/auth");function VL(n,...e){ip.logLevel<=Ye.WARN&&ip.warn(`Auth (${ls}): ${n}`,...e)}function Ff(n,...e){ip.logLevel<=Ye.ERROR&&ip.error(`Auth (${ls}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(n,...e){throw mv(n,...e)}function nn(n,...e){return mv(n,...e)}function pv(n,e,t){const r=Object.assign(Object.assign({},LL()),{[e]:t});return new Ra("auth","Firebase",r).create(e,{appName:n.name})}function hn(n){return pv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gu(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&En(n,"argument-error"),pv(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mv(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return AR.create(n,...e)}function _e(n,e,...t){if(!n)throw mv(e,...t)}function _i(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ff(e),new Error(e)}function Zr(n,e){n||_i(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function gv(){return WI()==="http:"||WI()==="https:"}function WI(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ML(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gv()||cR()||"connection"in navigator)?navigator.onLine:!0}function FL(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,t){this.shortDelay=e,this.longDelay=t,Zr(t>e,"Short delay should be less than long delay!"),this.isMobile=nN()||uv()}get(){return ML()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(n,e){Zr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_i("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_i("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_i("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jL=new xd(3e4,6e4);function jt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function zt(n,e,t,r,i={}){return CR(n,i,async()=>{let o={},l={};r&&(e==="GET"?l=r:o={body:JSON.stringify(r)});const c=mu(Object.assign({key:n.config.apiKey},l)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const p=Object.assign({method:e,headers:h},o);return iN()||(p.referrerPolicy="no-referrer"),kR.fetch()(xR(n,n.config.apiHost,t,c),p)})}async function CR(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},UL),e);try{const i=new BL(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw Vc(n,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const c=o.ok?l.errorMessage:l.error.message,[h,p]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vc(n,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw Vc(n,"email-already-in-use",l);if(h==="USER_DISABLED")throw Vc(n,"user-disabled",l);const g=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw pv(n,g,p);En(n,g)}}catch(i){if(i instanceof An)throw i;En(n,"network-request-failed",{message:String(i)})}}async function us(n,e,t,r,i={}){const o=await zt(n,e,t,r,i);return"mfaPendingCredential"in o&&En(n,"multi-factor-auth-required",{_serverResponse:o}),o}function xR(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?yv(n.config,i):`${n.config.apiScheme}://${i}`}function zL(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class BL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),jL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vc(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=nn(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(n){return n!==void 0&&n.getResponse!==void 0}function GI(n){return n!==void 0&&n.enterprise!==void 0}class $L{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return zL(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qL(n){return(await zt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function WL(n,e){return zt(n,"GET","/v2/recaptchaConfig",jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HL(n,e){return zt(n,"POST","/v1/accounts:delete",e)}async function GL(n,e){return zt(n,"POST","/v1/accounts:update",e)}async function OR(n,e){return zt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KL(n,e=!1){const t=De(n),r=await t.getIdToken(e),i=Up(r);_e(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:qc(vy(i.auth_time)),issuedAtTime:qc(vy(i.iat)),expirationTime:qc(vy(i.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function vy(n){return Number(n)*1e3}function Up(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ff("JWT malformed, contained fewer than 3 sections"),null;try{const i=sR(t);return i?JSON.parse(i):(Ff("Failed to decode base64 JWT payload"),null)}catch(i){return Ff("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function KI(n){const e=Up(n);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof An&&QL(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function QL({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qc(this.lastLoginAt),this.creationTime=qc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ad(n){var e;const t=n.auth,r=await n.getIdToken(),i=await is(n,OR(t,{idToken:r}));_e(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const l=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?DR(o.providerUserInfo):[],c=JL(n.providerData,l),h=n.isAnonymous,p=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),g=h?p:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new l_(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(n,v)}async function XL(n){const e=De(n);await ad(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JL(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function DR(n){return n.map(e=>{var{providerId:t}=e,r=tv(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZL(n,e){const t=await CR(n,{},async()=>{const r=mu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,l=xR(n,i,"/v1/token",`key=${o}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",kR.fetch()(l,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function eV(n,e){return zt(n,"POST","/v2/accounts:revokeToken",jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):KI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=KI(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await ZL(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,l=new Nl;return r&&(_e(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),i&&(_e(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),o&&(_e(typeof o=="number","internal-error",{appName:e}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nl,this.toJSON())}_performRefresh(){return _i("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n,e){_e(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Qi{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=tv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new YL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new l_(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await is(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return KL(this,e)}reload(){return XL(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ad(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mt(this.auth.app))return Promise.reject(hn(this.auth));const e=await this.getIdToken();return await is(this,HL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,l,c,h,p,g;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(i=t.email)!==null&&i!==void 0?i:void 0,x=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,L=(l=t.photoURL)!==null&&l!==void 0?l:void 0,N=(c=t.tenantId)!==null&&c!==void 0?c:void 0,U=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,q=(p=t.createdAt)!==null&&p!==void 0?p:void 0,G=(g=t.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:H,emailVerified:X,isAnonymous:V,providerData:F,stsTokenManager:R}=t;_e(H&&R,e,"internal-error");const C=Nl.fromJSON(this.name,R);_e(typeof H=="string",e,"internal-error"),Us(v,e.name),Us(T,e.name),_e(typeof X=="boolean",e,"internal-error"),_e(typeof V=="boolean",e,"internal-error"),Us(x,e.name),Us(L,e.name),Us(N,e.name),Us(U,e.name),Us(q,e.name),Us(G,e.name);const b=new Qi({uid:H,auth:e,email:T,emailVerified:X,displayName:v,isAnonymous:V,photoURL:L,phoneNumber:x,tenantId:N,stsTokenManager:C,createdAt:q,lastLoginAt:G});return F&&Array.isArray(F)&&(b.providerData=F.map(w=>Object.assign({},w))),U&&(b._redirectEventId=U),b}static async _fromIdTokenResponse(e,t,r=!1){const i=new Nl;i.updateFromServerResponse(t);const o=new Qi({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ad(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];_e(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?DR(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),c=new Nl;c.updateFromIdToken(r);const h=new Qi({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:l}),p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new l_(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,p),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=new Map;function fr(n){Zr(n instanceof Function,"Expected a class definition");let e=QI.get(n);return e?(Zr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,QI.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}NR.type="NONE";const Kl=NR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(n,e,t){return`firebase:${n}:${e}:${t}`}class Ll{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=sa(this.userKey,i.apiKey,o),this.fullPersistenceKey=sa("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ll(fr(Kl),e,r);const i=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let o=i[0]||fr(Kl);const l=sa(r,e.config.apiKey,e.name);let c=null;for(const p of t)try{const g=await p._get(l);if(g){const v=Qi._fromJSON(e,g);p!==o&&(c=v),o=p;break}}catch{}const h=i.filter(p=>p._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Ll(o,e,r):(o=h[0],c&&await o._set(l,c.toJSON()),await Promise.all(t.map(async p=>{if(p!==o)try{await p._remove(l)}catch{}})),new Ll(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(FR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(LR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(UR(e))return"Blackberry";if(jR(e))return"Webos";if(VR(e))return"Safari";if((e.includes("chrome/")||MR(e))&&!e.includes("edge/"))return"Chrome";if(Od(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function LR(n=Nt()){return/firefox\//i.test(n)}function VR(n=Nt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function MR(n=Nt()){return/crios\//i.test(n)}function FR(n=Nt()){return/iemobile/i.test(n)}function Od(n=Nt()){return/android/i.test(n)}function UR(n=Nt()){return/blackberry/i.test(n)}function jR(n=Nt()){return/webos/i.test(n)}function Dd(n=Nt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function tV(n=Nt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function nV(n=Nt()){var e;return Dd(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rV(){return dR()&&document.documentMode===10}function zR(n=Nt()){return Dd(n)||Od(n)||jR(n)||UR(n)||/windows phone/i.test(n)||FR(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(n,e=[]){let t;switch(n){case"Browser":t=YI(Nt());break;case"Worker":t=`${YI(Nt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((l,c)=>{try{const h=e(o);l(h)}catch(h){c(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sV(n,e={}){return zt(n,"GET","/v2/passwordPolicy",jt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oV=6;class aV{constructor(e){var t,r,i,o;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=l.minPasswordLength)!==null&&t!==void 0?t:oV,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,l,c;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(l=h.containsNumericCharacter)!==null&&l!==void 0?l:!0),h.isValid&&(h.isValid=(c=h.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),h}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new XI(this),this.idTokenSubscription=new XI(this),this.beforeStateQueue=new iV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=AR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=fr(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ll.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await OR(this,{idToken:e}),r=await Qi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Mt(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!l||l===c)&&(h!=null&&h.user)&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ad(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mt(this.app))return Promise.reject(hn(this));const t=e?De(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mt(this.app)?Promise.reject(hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mt(this.app)?Promise.reject(hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sV(this),t=new aV(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ra("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await eV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&fr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await Ll.create(this,[fr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let l=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(c,this,"internal-error"),c.then(()=>{l||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{l=!0,h()}}else{const h=e.addObserver(t);return()=>{l=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=BR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&VL(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ft(n){return De(n)}class XI{constructor(e){this.auth=e,this.observer=null,this.addObserver=fR(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uV(n){Nd=n}function _v(n){return Nd.loadJS(n)}function cV(){return Nd.recaptchaV2Script}function dV(){return Nd.recaptchaEnterpriseScript}function hV(){return Nd.gapiScript}function $R(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const fV="recaptcha-enterprise",pV="NO_RECAPTCHA";class mV{constructor(e){this.type=fV,this.auth=Ft(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(l,c)=>{WL(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const p=new $L(h);return o.tenantId==null?o._agentRecaptchaConfig=p:o._tenantRecaptchaConfigs[o.tenantId]=p,l(p.siteKey)}}).catch(h=>{c(h)})})}function i(o,l,c){const h=window.grecaptcha;GI(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(p=>{l(p)}).catch(()=>{l(pV)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,l)=>{r(this.auth).then(c=>{if(!t&&GI(window.grecaptcha))i(c,o,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let h=dV();h.length!==0&&(h+=c),_v(h).then(()=>{i(c,o,l)}).catch(p=>{l(p)})}}).catch(c=>{l(c)})})}}async function JI(n,e,t,r=!1){const i=new mV(n);let o;try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const l=Object.assign({},e);return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ld(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await JI(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await JI(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(o)})}function gV(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(fr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yV(n,e,t){const r=Ft(n);_e(r._canInitEmulator,r,"emulator-config-failed"),_e(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),o=qR(e),{host:l,port:c}=_V(e),h=c===null?"":`:${c}`;r.config.emulator={url:`${o}//${l}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||vV()}function qR(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function _V(n){const e=qR(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:ZI(r.substr(o.length+1))}}else{const[o,l]=r.split(":");return{host:o,port:ZI(l)}}}function ZI(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function vV(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _i("not implemented")}_getIdTokenResponse(e){return _i("not implemented")}_linkToIdToken(e,t){return _i("not implemented")}_getReauthenticationResolver(e){return _i("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WR(n,e){return zt(n,"POST","/v1/accounts:resetPassword",jt(n,e))}async function wV(n,e){return zt(n,"POST","/v1/accounts:update",e)}async function EV(n,e){return zt(n,"POST","/v1/accounts:signUp",e)}async function IV(n,e){return zt(n,"POST","/v1/accounts:update",jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TV(n,e){return us(n,"POST","/v1/accounts:signInWithPassword",jt(n,e))}async function jp(n,e){return zt(n,"POST","/v1/accounts:sendOobCode",jt(n,e))}async function SV(n,e){return jp(n,e)}async function bV(n,e){return jp(n,e)}async function RV(n,e){return jp(n,e)}async function PV(n,e){return jp(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AV(n,e){return us(n,"POST","/v1/accounts:signInWithEmailLink",jt(n,e))}async function kV(n,e){return us(n,"POST","/v1/accounts:signInWithEmailLink",jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud extends yu{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ud(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ud(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ld(e,t,"signInWithPassword",TV);case"emailLink":return AV(e,{email:this._email,oobCode:this._password});default:En(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ld(e,r,"signUpPassword",EV);case"emailLink":return kV(e,{idToken:t,email:this._email,oobCode:this._password});default:En(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(n,e){return us(n,"POST","/v1/accounts:signInWithIdp",jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CV="http://localhost";class bi extends yu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new bi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):En("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=tv(t,["providerId","signInMethod"]);if(!r||!i)return null;const l=new bi(r,i);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return Zi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Zi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zi(e,t)}buildRequest(){const e={requestUri:CV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=mu(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xV(n,e){return zt(n,"POST","/v1/accounts:sendVerificationCode",jt(n,e))}async function OV(n,e){return us(n,"POST","/v1/accounts:signInWithPhoneNumber",jt(n,e))}async function DV(n,e){const t=await us(n,"POST","/v1/accounts:signInWithPhoneNumber",jt(n,e));if(t.temporaryProof)throw Vc(n,"account-exists-with-different-credential",t);return t}const NV={USER_NOT_FOUND:"user-not-found"};async function LV(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return us(n,"POST","/v1/accounts:signInWithPhoneNumber",jt(n,t),NV)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends yu{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new oa({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new oa({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return OV(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return DV(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return LV(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:o}=e;return!r&&!t&&!i&&!o?null:new oa({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VV(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function MV(n){const e=Dl(Lc(n)).link,t=e?Dl(Lc(e)).deep_link_id:null,r=Dl(Lc(n)).deep_link_id;return(r?Dl(Lc(r)).link:null)||r||t||e||n}class zp{constructor(e){var t,r,i,o,l,c;const h=Dl(Lc(e)),p=(t=h.apiKey)!==null&&t!==void 0?t:null,g=(r=h.oobCode)!==null&&r!==void 0?r:null,v=VV((i=h.mode)!==null&&i!==void 0?i:null);_e(p&&g&&v,"argument-error"),this.apiKey=p,this.operation=v,this.code=g,this.continueUrl=(o=h.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(l=h.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(c=h.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=MV(e);try{return new zp(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.providerId=uo.PROVIDER_ID}static credential(e,t){return ud._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=zp.parseLink(t);return _e(r,"argument-error"),ud._fromEmailAndCode(e,r.code,r.tenantId)}}uo.PROVIDER_ID="password";uo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";uo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u extends cs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Vl extends _u{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return _e("providerId"in t&&"signInMethod"in t,"argument-error"),bi._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return _e(e.idToken||e.accessToken,"argument-error"),bi._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Vl.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Vl.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:l,providerId:c}=e;if(!r&&!i&&!t&&!o||!c)return null;try{return new Vl(c)._credential({idToken:t,accessToken:r,nonce:l,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends _u{constructor(){super("facebook.com")}static credential(e){return bi._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.FACEBOOK_SIGN_IN_METHOD="facebook.com";fi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends _u{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return bi._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return pi.credential(t,r)}catch{return null}}}pi.GOOGLE_SIGN_IN_METHOD="google.com";pi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends _u{constructor(){super("github.com")}static credential(e){return bi._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.GITHUB_SIGN_IN_METHOD="github.com";mi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FV="http://localhost";class Ql extends yu{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Zi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Zi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zi(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:o}=t;return!r||!i||!o||r!==i?null:new Ql(r,o)}static _create(e,t){return new Ql(e,t)}buildRequest(){return{requestUri:FV,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UV="saml.";class sp extends cs{constructor(e){_e(e.startsWith(UV),"argument-error"),super(e)}static credentialFromResult(e){return sp.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return sp.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ql.fromJSON(e);return _e(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Ql._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends _u{constructor(){super("twitter.com")}static credential(e,t){return bi._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return gi.credential(t,r)}catch{return null}}}gi.TWITTER_SIGN_IN_METHOD="twitter.com";gi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HR(n,e){return us(n,"POST","/v1/accounts:signUp",jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Qi._fromIdTokenResponse(e,r,i),l=eT(r);return new Dr({user:o,providerId:l,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=eT(r);return new Dr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function eT(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jV(n){var e;if(Mt(n.app))return Promise.reject(hn(n));const t=Ft(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Dr({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await HR(t,{returnSecureToken:!0}),i=await Dr._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op extends An{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,op.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new op(e,t,r,i)}}function GR(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?op._fromErrorAndOperation(n,o,e,r):o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zV(n,e){const t=De(n);await Bp(!0,t,e);const{providerUserInfo:r}=await GL(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=KR(r||[]);return t.providerData=t.providerData.filter(o=>i.has(o.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function vv(n,e,t=!1){const r=await is(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Dr._forOperation(n,"link",r)}async function Bp(n,e,t){await ad(e);const r=KR(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";_e(r.has(t)===n,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(n,e,t=!1){const{auth:r}=n;if(Mt(r.app))return Promise.reject(hn(r));const i="reauthenticate";try{const o=await is(n,GR(r,i,e,n),t);_e(o.idToken,r,"internal-error");const l=Up(o.idToken);_e(l,r,"internal-error");const{sub:c}=l;return _e(n.uid===c,r,"user-mismatch"),Dr._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&En(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(n,e,t=!1){if(Mt(n.app))return Promise.reject(hn(n));const r="signIn",i=await GR(n,r,e),o=await Dr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}async function $p(n,e){return YR(Ft(n),e)}async function XR(n,e){const t=De(n);return await Bp(!1,t,e.providerId),vv(t,e)}async function JR(n,e){return QR(De(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BV(n,e){return us(n,"POST","/v1/accounts:signInWithCustomToken",jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $V(n,e){if(Mt(n.app))return Promise.reject(hn(n));const t=Ft(n),r=await BV(t,{token:e,returnSecureToken:!0}),i=await Dr._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?wv._fromServerResponse(e,t):"totpInfo"in t?Ev._fromServerResponse(e,t):En(e,"internal-error")}}class wv extends Ld{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new wv(t)}}class Ev extends Ld{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Ev(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(n,e,t){var r;_e(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),_e(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(_e(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(_e(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iv(n){const e=Ft(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qV(n,e,t){const r=Ft(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&qp(r,i,t),await ld(r,i,"getOobCode",bV)}async function WV(n,e,t){await WR(De(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Iv(n),r})}async function HV(n,e){await IV(De(n),{oobCode:e})}async function ZR(n,e){const t=De(n),r=await WR(t,{oobCode:e}),i=r.requestType;switch(_e(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":_e(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":_e(r.mfaInfo,t,"internal-error");default:_e(r.email,t,"internal-error")}let o=null;return r.mfaInfo&&(o=Ld._fromServerResponse(Ft(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:i}}async function GV(n,e){const{data:t}=await ZR(De(n),e);return t.email}async function KV(n,e,t){if(Mt(n.app))return Promise.reject(hn(n));const r=Ft(n),l=await ld(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",HR).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&Iv(n),h}),c=await Dr._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(c.user),c}function QV(n,e,t){return Mt(n.app)?Promise.reject(hn(n)):$p(De(n),uo.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Iv(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YV(n,e,t){const r=Ft(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(l,c){_e(c.handleCodeInApp,r,"argument-error"),c&&qp(r,l,c)}o(i,t),await ld(r,i,"getOobCode",RV)}function XV(n,e){const t=zp.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function JV(n,e,t){if(Mt(n.app))return Promise.reject(hn(n));const r=De(n),i=uo.credentialWithLink(e,t||od());return _e(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),$p(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZV(n,e){return zt(n,"POST","/v1/accounts:createAuthUri",jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eM(n,e){const t=gv()?od():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await ZV(De(n),r);return i||[]}async function tM(n,e){const t=De(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&qp(t.auth,i,e);const{email:o}=await SV(t.auth,i);o!==n.email&&await n.reload()}async function nM(n,e,t){const r=De(n),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&qp(r.auth,o,t);const{email:l}=await PV(r.auth,o);l!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rM(n,e){return zt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iM(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=De(n),o={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},l=await is(r,rM(r.auth,o));r.displayName=l.displayName||null,r.photoURL=l.photoUrl||null;const c=r.providerData.find(({providerId:h})=>h==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(l)}function sM(n,e){const t=De(n);return Mt(t.auth.app)?Promise.reject(hn(t.auth)):e1(t,e,null)}function oM(n,e){return e1(De(n),null,e)}async function e1(n,e,t){const{auth:r}=n,o={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(o.email=e),t&&(o.password=t);const l=await is(n,wV(r,o));await n._updateTokensIfNecessary(l,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aM(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},o=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const l=(t=(e=Up(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(l){const c=l!=="anonymous"&&l!=="custom"?l:null;return new Ml(o,c)}}if(!r)return null;switch(r){case"facebook.com":return new lM(o,i);case"github.com":return new uM(o,i);case"google.com":return new cM(o,i);case"twitter.com":return new dM(o,i,n.screenName||null);case"custom":case"anonymous":return new Ml(o,null);default:return new Ml(o,r,i)}}class Ml{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class t1 extends Ml{constructor(e,t,r,i){super(e,t,r),this.username=i}}class lM extends Ml{constructor(e,t){super(e,"facebook.com",t)}}class uM extends t1{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class cM extends Ml{constructor(e,t){super(e,"google.com",t)}}class dM extends t1{constructor(e,t,r){super(e,"twitter.com",t,r)}}function hM(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:aM(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new ea("enroll",e,t)}static _fromMfaPendingCredential(e){return new ea("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return ea._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ea._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=Ft(e),i=t.customData._serverResponse,o=(i.mfaInfo||[]).map(c=>Ld._fromServerResponse(r,c));_e(i.mfaPendingCredential,r,"internal-error");const l=ea._fromMfaPendingCredential(i.mfaPendingCredential);return new Tv(l,o,async c=>{const h=await c._process(r,l);delete i.mfaInfo,delete i.mfaPendingCredential;const p=Object.assign(Object.assign({},i),{idToken:h.idToken,refreshToken:h.refreshToken});switch(t.operationType){case"signIn":const g=await Dr._fromIdTokenResponse(r,t.operationType,p);return await r._updateCurrentUser(g.user),g;case"reauthenticate":return _e(t.user,r,"internal-error"),Dr._forOperation(t.user,t.operationType,p);default:En(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function fM(n,e){var t;const r=De(n),i=e;return _e(e.customData.operationType,r,"argument-error"),_e((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Tv._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(n,e){return zt(n,"POST","/v2/accounts/mfaEnrollment:start",jt(n,e))}function mM(n,e){return zt(n,"POST","/v2/accounts/mfaEnrollment:finalize",jt(n,e))}function gM(n,e){return zt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",jt(n,e))}class Sv{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Ld._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Sv(e)}async getSession(){return ea._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),o=await is(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await is(this.user,gM(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const wy=new WeakMap;function yM(n){const e=De(n);return wy.has(e)||wy.set(e,Sv._fromUser(e)),wy.get(e)}const ap="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ap,"1"),this.storage.removeItem(ap),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M=1e3,vM=10;class r1 extends n1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,c,h)=>{this.notifyListeners(l,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!t&&this.localCache[r]===l||this.notifyListeners(r,l)},o=this.storage.getItem(r);rV()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vM):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},_M)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}r1.type="LOCAL";const bv=r1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1 extends n1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}i1.type="SESSION";const ca=i1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wM(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Wp(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(l).map(async p=>p(t.origin,o)),h=await wM(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wp.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,l;return new Promise((c,h)=>{const p=Vd("",20);i.port1.start();const g=setTimeout(()=>{h(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(v){const T=v;if(T.data.eventId===p)switch(T.data.status){case"ack":clearTimeout(g),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(T.data.response);break;default:clearTimeout(g),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return window}function IM(n){Xt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function TM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SM(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function bM(){return Rv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1="firebaseLocalStorageDb",RM=1,lp="firebaseLocalStorage",o1="fbase_key";class Md{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Hp(n,e){return n.transaction([lp],e?"readwrite":"readonly").objectStore(lp)}function PM(){const n=indexedDB.deleteDatabase(s1);return new Md(n).toPromise()}function u_(){const n=indexedDB.open(s1,RM);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(lp,{keyPath:o1})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(lp)?e(r):(r.close(),await PM(),e(await u_()))})})}async function tT(n,e,t){const r=Hp(n,!0).put({[o1]:e,value:t});return new Md(r).toPromise()}async function AM(n,e){const t=Hp(n,!1).get(e),r=await new Md(t).toPromise();return r===void 0?null:r.value}function nT(n,e){const t=Hp(n,!0).delete(e);return new Md(t).toPromise()}const kM=800,CM=3;class a1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await u_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>CM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wp._getInstance(bM()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await TM(),!this.activeServiceWorker)return;this.sender=new EM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await u_();return await tT(e,ap,"1"),await nT(e,ap),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>tT(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>AM(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>nT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Hp(i,!1).getAll();return new Md(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}a1.type="LOCAL";const cd=a1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xM(n,e){return zt(n,"POST","/v2/accounts/mfaSignIn:start",jt(n,e))}function OM(n,e){return zt(n,"POST","/v2/accounts/mfaSignIn:finalize",jt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DM=500,NM=6e4,_f=1e12;class LM{constructor(e){this.auth=e,this.counter=_f,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new VM(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||_f;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||_f;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||_f;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class VM{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;_e(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=MM(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},NM)},DM))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function MM(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=$R("rcb"),FM=new xd(3e4,6e4);class UM{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Xt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return _e(jM(t),e,"argument-error"),this.shouldResolveImmediately(t)&&HI(Xt().grecaptcha)?Promise.resolve(Xt().grecaptcha):new Promise((r,i)=>{const o=Xt().setTimeout(()=>{i(nn(e,"network-request-failed"))},FM.get());Xt()[Ey]=()=>{Xt().clearTimeout(o),delete Xt()[Ey];const c=Xt().grecaptcha;if(!c||!HI(c)){i(nn(e,"internal-error"));return}const h=c.render;c.render=(p,g)=>{const v=h(p,g);return this.counter++,v},this.hostLanguage=t,r(c)};const l=`${cV()}?${mu({onload:Ey,render:"explicit",hl:t})}`;_v(l).catch(()=>{clearTimeout(o),i(nn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Xt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function jM(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class zM{async load(e){return new LM(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1="recaptcha",BM={theme:"light",type:"image"};let $M=class{constructor(e,t,r=Object.assign({},BM)){this.parameters=r,this.type=l1,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ft(e),this.isInvisible=this.parameters.size==="invisible",_e(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;_e(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new zM:new UM,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const o=l=>{l&&(this.tokenChangeListeners.delete(o),i(l))};this.tokenChangeListeners.add(o),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){_e(!this.parameters.sitekey,this.auth,"argument-error"),_e(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),_e(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Xt()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){_e(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){_e(gv()&&!Rv(),this.auth,"internal-error"),await qM(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await qL(this.auth);_e(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return _e(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function qM(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=oa._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function WM(n,e,t){if(Mt(n.app))return Promise.reject(hn(n));const r=Ft(n),i=await Gp(r,e,De(t));return new Pv(i,o=>$p(r,o))}async function HM(n,e,t){const r=De(n);await Bp(!1,r,"phone");const i=await Gp(r.auth,e,De(t));return new Pv(i,o=>XR(r,o))}async function GM(n,e,t){const r=De(n);if(Mt(r.auth.app))return Promise.reject(hn(r.auth));const i=await Gp(r.auth,e,De(t));return new Pv(i,o=>JR(r,o))}async function Gp(n,e,t){var r;const i=await t.verify();try{_e(typeof i=="string",n,"argument-error"),_e(t.type===l1,n,"argument-error");let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const l=o.session;if("phoneNumber"in o)return _e(l.type==="enroll",n,"internal-error"),(await pM(n,{idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{_e(l.type==="signin",n,"internal-error");const c=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return _e(c,n,"missing-multi-factor-info"),(await xM(n,{mfaPendingCredential:l.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:l}=await xV(n,{phoneNumber:o.phoneNumber,recaptchaToken:i});return l}}finally{t._reset()}}async function KM(n,e){const t=De(n);if(Mt(t.auth.app))return Promise.reject(hn(t.auth));await vv(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let da=class Uf{constructor(e){this.providerId=Uf.PROVIDER_ID,this.auth=Ft(e)}verifyPhoneNumber(e,t){return Gp(this.auth,e,De(t))}static credential(e,t){return oa._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Uf.credentialFromTaggedObject(t)}static credentialFromError(e){return Uf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?oa._fromTokenResponse(t,r):null}};da.PROVIDER_ID="phone";da.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(n,e){return e?fr(e):(_e(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av extends yu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function QM(n){return YR(n.auth,new Av(n),n.bypassAuthState)}function YM(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),QR(t,new Av(n),n.bypassAuthState)}async function XM(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),vv(t,new Av(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:l,type:c}=e;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QM;case"linkViaPopup":case"linkViaRedirect":return XM;case"reauthViaPopup":case"reauthViaRedirect":return YM;default:En(this.auth,"internal-error")}}resolve(e){Zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM=new xd(2e3,1e4);async function ZM(n,e,t){if(Mt(n.app))return Promise.reject(nn(n,"operation-not-supported-in-this-environment"));const r=Ft(n);gu(n,e,cs);const i=Pa(r,t);return new Yi(r,"signInViaPopup",e,i).executeNotNull()}async function eF(n,e,t){const r=De(n);if(Mt(r.auth.app))return Promise.reject(nn(r.auth,"operation-not-supported-in-this-environment"));gu(r.auth,e,cs);const i=Pa(r.auth,t);return new Yi(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function tF(n,e,t){const r=De(n);gu(r.auth,e,cs);const i=Pa(r.auth,t);return new Yi(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Yi extends u1{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Yi.currentPopupAction&&Yi.currentPopupAction.cancel(),Yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Zr(this.filter.length===1,"Popup operations only handle one event");const e=Vd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JM.get())};e()}}Yi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nF="pendingRedirect",Wc=new Map;class rF extends u1{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Wc.get(this.auth._key());if(!e){try{const r=await iF(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Wc.set(this.auth._key(),e)}return this.bypassAuthState||Wc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iF(n,e){const t=d1(e),r=c1(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function kv(n,e){return c1(n)._set(d1(e),"true")}function sF(){Wc.clear()}function Cv(n,e){Wc.set(n._key(),e)}function c1(n){return fr(n._redirectPersistence)}function d1(n){return sa(nF,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oF(n,e,t){return aF(n,e,t)}async function aF(n,e,t){if(Mt(n.app))return Promise.reject(hn(n));const r=Ft(n);gu(n,e,cs),await r._initializationPromise;const i=Pa(r,t);return await kv(i,r),i._openRedirect(r,e,"signInViaRedirect")}function lF(n,e,t){return uF(n,e,t)}async function uF(n,e,t){const r=De(n);if(gu(r.auth,e,cs),Mt(r.auth.app))return Promise.reject(hn(r.auth));await r.auth._initializationPromise;const i=Pa(r.auth,t);await kv(i,r.auth);const o=await h1(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",o)}function cF(n,e,t){return dF(n,e,t)}async function dF(n,e,t){const r=De(n);gu(r.auth,e,cs),await r.auth._initializationPromise;const i=Pa(r.auth,t);await Bp(!1,r,e.providerId),await kv(i,r.auth);const o=await h1(r);return i._openRedirect(r.auth,e,"linkViaRedirect",o)}async function hF(n,e){return await Ft(n)._initializationPromise,Kp(n,e,!1)}async function Kp(n,e,t=!1){if(Mt(n.app))return Promise.reject(hn(n));const r=Ft(n),i=Pa(r,e),l=await new rF(r,i,t).execute();return l&&!t&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}async function h1(n){const e=Vd(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fF=10*60*1e3;class f1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pF(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!p1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(nn(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fF&&this.cachedEventUids.clear(),this.cachedEventUids.has(rT(e))}saveEventToCache(e){this.cachedEventUids.add(rT(e)),this.lastProcessedEventTime=Date.now()}}function rT(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function p1({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pF(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return p1(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m1(n,e={}){return zt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mF=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gF=/^https?/;async function yF(n){if(n.config.emulator)return;const{authorizedDomains:e}=await m1(n);for(const t of e)try{if(_F(t))return}catch{}En(n,"unauthorized-domain")}function _F(n){const e=od(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===r}if(!gF.test(t))return!1;if(mF.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vF=new xd(3e4,6e4);function iT(){const n=Xt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function wF(n){return new Promise((e,t)=>{var r,i,o;function l(){iT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iT(),t(nn(n,"network-request-failed"))},timeout:vF.get()})}if(!((i=(r=Xt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Xt().gapi)===null||o===void 0)&&o.load)l();else{const c=$R("iframefcb");return Xt()[c]=()=>{gapi.load?l():t(nn(n,"network-request-failed"))},_v(`${hV()}?onload=${c}`).catch(h=>t(h))}}).catch(e=>{throw jf=null,e})}let jf=null;function EF(n){return jf=jf||wF(n),jf}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IF=new xd(5e3,15e3),TF="__/auth/iframe",SF="emulator/auth/iframe",bF={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RF=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PF(n){const e=n.config;_e(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?yv(e,SF):`https://${n.config.authDomain}/${TF}`,r={apiKey:e.apiKey,appName:n.name,v:ls},i=RF.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${mu(r).slice(1)}`}async function AF(n){const e=await EF(n),t=Xt().gapi;return _e(t,n,"internal-error"),e.open({where:document.body,url:PF(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bF,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const l=nn(n,"network-request-failed"),c=Xt().setTimeout(()=>{o(l)},IF.get());function h(){Xt().clearTimeout(c),i(r)}r.ping(h).then(h,()=>{o(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kF={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CF=500,xF=600,OF="_blank",DF="http://localhost";class sT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NF(n,e,t,r=CF,i=xF){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const h=Object.assign(Object.assign({},kF),{width:r.toString(),height:i.toString(),top:o,left:l}),p=Nt().toLowerCase();t&&(c=MR(p)?OF:t),LR(p)&&(e=e||DF,h.scrollbars="yes");const g=Object.entries(h).reduce((T,[x,L])=>`${T}${x}=${L},`,"");if(nV(p)&&c!=="_self")return LF(e||"",c),new sT(null);const v=window.open(e||"",c,g);_e(v,n,"popup-blocked");try{v.focus()}catch{}return new sT(v)}function LF(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VF="__/auth/handler",MF="emulator/auth/handler",FF=encodeURIComponent("fac");async function c_(n,e,t,r,i,o){_e(n.config.authDomain,n,"auth-domain-config-required"),_e(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ls,eventId:i};if(e instanceof cs){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",uN(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,v]of Object.entries(o||{}))l[g]=v}if(e instanceof _u){const g=e.getScopes().filter(v=>v!=="");g.length>0&&(l.scopes=g.join(","))}n.tenantId&&(l.tid=n.tenantId);const c=l;for(const g of Object.keys(c))c[g]===void 0&&delete c[g];const h=await n._getAppCheckToken(),p=h?`#${FF}=${encodeURIComponent(h)}`:"";return`${UF(n)}?${mu(c).slice(1)}${p}`}function UF({config:n}){return n.emulator?yv(n,MF):`https://${n.authDomain}/${VF}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="webStorageSupport";class jF{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ca,this._completeRedirectFn=Kp,this._overrideRedirectResult=Cv}async _openPopup(e,t,r,i){var o;Zr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=await c_(e,t,r,od(),i);return NF(e,l,Vd())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await c_(e,t,r,od(),i);return IM(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(Zr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await AF(e),r=new f1(e);return t.register("authEvent",i=>(_e(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Iy,{type:Iy},i=>{var o;const l=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Iy];l!==void 0&&t(!!l),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yF(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return zR()||VR()||Dd()}}const zF=jF;class BF{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return _i("unexpected MultiFactorSessionType")}}}class xv extends BF{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new xv(e)}_finalizeEnroll(e,t,r){return mM(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return OM(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class g1{constructor(){}static assertion(e){return xv._fromCredential(e)}}g1.FACTOR_ID="phone";var oT="@firebase/auth",aT="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $F{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qF(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WF(n){rs(new Or("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:l,authDomain:c}=r.options;_e(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:l,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:BR(n)},p=new lV(r,i,o,h);return gV(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),rs(new Or("auth-internal",e=>{const t=Ft(e.getProvider("auth").getImmediate());return(r=>new $F(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pr(oT,aT,qF(n)),pr(oT,aT,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HF=5*60;eN("authIdTokenMaxAge");function GF(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}uV({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=nn("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",GF().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WF("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KF=2e3;async function QF(n,e,t){var r;const{BuildInfo:i}=ha();Zr(e.sessionId,"AuthEvent did not contain a session ID");const o=await e2(e.sessionId),l={};return Dd()?l.ibi=i.packageName:Od()?l.apn=i.packageName:En(n,"operation-not-supported-in-this-environment"),i.displayName&&(l.appDisplayName=i.displayName),l.sessionId=o,c_(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,l)}async function YF(n){const{BuildInfo:e}=ha(),t={};Dd()?t.iosBundleId=e.packageName:Od()?t.androidPackageName=e.packageName:En(n,"operation-not-supported-in-this-environment"),await m1(n,t)}function XF(n){const{cordova:e}=ha();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,tV()?"_blank":"_system","location=yes"),t(i)})})}async function JF(n,e,t){const{cordova:r}=ha();let i=()=>{};try{await new Promise((o,l)=>{let c=null;function h(){var v;o();const T=(v=r.plugins.browsertab)===null||v===void 0?void 0:v.close;typeof T=="function"&&T(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function p(){c||(c=window.setTimeout(()=>{l(nn(n,"redirect-cancelled-by-user"))},KF))}function g(){(document==null?void 0:document.visibilityState)==="visible"&&p()}e.addPassiveListener(h),document.addEventListener("resume",p,!1),Od()&&document.addEventListener("visibilitychange",g,!1),i=()=>{e.removePassiveListener(h),document.removeEventListener("resume",p,!1),document.removeEventListener("visibilitychange",g,!1),c&&window.clearTimeout(c)}})}finally{i()}}function ZF(n){var e,t,r,i,o,l,c,h,p,g;const v=ha();_e(typeof((e=v==null?void 0:v.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),_e(typeof((t=v==null?void 0:v.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),_e(typeof((o=(i=(r=v==null?void 0:v.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),_e(typeof((h=(c=(l=v==null?void 0:v.cordova)===null||l===void 0?void 0:l.plugins)===null||c===void 0?void 0:c.browsertab)===null||h===void 0?void 0:h.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),_e(typeof((g=(p=v==null?void 0:v.cordova)===null||p===void 0?void 0:p.InAppBrowser)===null||g===void 0?void 0:g.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function e2(n){const e=t2(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function t2(n){if(Zr(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=20;class r2 extends f1{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function i2(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:a2(),postBody:null,tenantId:n.tenantId,error:nn(n,"no-auth-event")}}function s2(n,e){return d_()._set(h_(n),e)}async function lT(n){const e=await d_()._get(h_(n));return e&&await d_()._remove(h_(n)),e}function o2(n,e){var t,r;const i=u2(e);if(i.includes("/__/auth/callback")){const o=zf(i),l=o.firebaseError?l2(decodeURIComponent(o.firebaseError)):null,c=(r=(t=l==null?void 0:l.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],h=c?nn(c):null;return h?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:h,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function a2(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<n2;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function d_(){return fr(bv)}function h_(n){return sa("authEvent",n.config.apiKey,n.name)}function l2(n){try{return JSON.parse(n)}catch{return null}}function u2(n){const e=zf(n),t=e.link?decodeURIComponent(e.link):void 0,r=zf(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return zf(i).link||i||r||t||n}function zf(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Dl(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2=500;class d2{constructor(){this._redirectPersistence=ca,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Kp,this._overrideRedirectResult=Cv}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new r2(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){En(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){ZF(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),sF(),await this._originValidation(e);const l=i2(e,r,i);await s2(e,l);const c=await QF(e,l,t),h=await XF(c);return JF(e,o,h)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=YF(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:o}=ha(),l=setTimeout(async()=>{await lT(e),t.onEvent(uT())},c2),c=async g=>{clearTimeout(l);const v=await lT(e);let T=null;v&&(g!=null&&g.url)&&(T=o2(v,g.url)),t.onEvent(T||uT())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,c);const h=i,p=`${o.packageName.toLowerCase()}://`;ha().handleOpenURL=async g=>{if(g.toLowerCase().startsWith(p)&&c({url:g}),typeof h=="function")try{h(g)}catch(v){console.error(v)}}}}const h2=d2;function uT(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:nn("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f2(n,e){Ft(n)._logFramework(e)}var p2="@firebase/auth-compat",m2="0.5.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=1e3;function Hc(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function y2(){return Hc()==="http:"||Hc()==="https:"}function y1(n=Nt()){return!!((Hc()==="file:"||Hc()==="ionic:"||Hc()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function _2(){return uv()||lv()}function v2(){return dR()&&(document==null?void 0:document.documentMode)===11}function w2(n=Nt()){return/Edge\/\d+/.test(n)}function E2(n=Nt()){return v2()||w2(n)}function _1(){try{const n=self.localStorage,e=Vd();if(n)return n.setItem(e,"1"),n.removeItem(e),E2()?nd():!0}catch{return Ov()&&nd()}return!1}function Ov(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Ty(){return(y2()||cR()||y1())&&!_2()&&_1()&&!Ov()}function v1(){return y1()&&typeof document<"u"}async function I2(){return v1()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},g2);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function T2(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr={LOCAL:"local",NONE:"none",SESSION:"session"},Ic=_e,w1="persistence";function S2(n,e){if(Ic(Object.values(dr).includes(e),n,"invalid-persistence-type"),uv()){Ic(e!==dr.SESSION,n,"unsupported-persistence-type");return}if(lv()){Ic(e===dr.NONE,n,"unsupported-persistence-type");return}if(Ov()){Ic(e===dr.NONE||e===dr.LOCAL&&nd(),n,"unsupported-persistence-type");return}Ic(e===dr.NONE||_1(),n,"unsupported-persistence-type")}async function f_(n){await n._initializationPromise;const e=E1(),t=sa(w1,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function b2(n,e){const t=E1();if(!t)return[];const r=sa(w1,n,e);switch(t.getItem(r)){case dr.NONE:return[Kl];case dr.LOCAL:return[cd,ca];case dr.SESSION:return[ca];default:return[]}}function E1(){var n;try{return((n=T2())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2=_e;class Hs{constructor(){this.browserResolver=fr(zF),this.cordovaResolver=fr(h2),this.underlyingResolver=null,this._redirectPersistence=ca,this._completeRedirectFn=Kp,this._overrideRedirectResult=Cv}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return v1()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return R2(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await I2();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(n){return n.unwrap()}function P2(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A2(n){return T1(n)}function k2(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new C2(n,fM(n,e))}else if(r){const i=T1(e),o=e;i&&(o.credential=i,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function T1(n){const{_tokenResponse:e}=n instanceof An?n.customData:n;if(!e)return null;if(!(n instanceof An)&&"temporaryProof"in e&&"phoneNumber"in e)return da.credentialFromResult(n);const t=e.providerId;if(!t||t===Ec.PASSWORD)return null;let r;switch(t){case Ec.GOOGLE:r=pi;break;case Ec.FACEBOOK:r=fi;break;case Ec.GITHUB:r=mi;break;case Ec.TWITTER:r=gi;break;default:const{oauthIdToken:i,oauthAccessToken:o,oauthTokenSecret:l,pendingToken:c,nonce:h}=e;return!o&&!l&&!i&&!c?null:c?t.startsWith("saml.")?Ql._create(t,c):bi._fromParams({providerId:t,signInMethod:t,pendingToken:c,idToken:i,accessToken:o}):new Vl(t).credential({idToken:i,accessToken:o,rawNonce:h})}return n instanceof An?r.credentialFromError(n):r.credentialFromResult(n)}function Yn(n,e){return e.catch(t=>{throw t instanceof An&&k2(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:A2(t),additionalUserInfo:hM(t),user:Qp.getOrCreate(i)}})}async function p_(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Yn(n,t.confirm(r))}}class C2{constructor(e,t){this.resolver=t,this.auth=P2(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Yn(I1(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qp=class Mc{constructor(e){this._delegate=e,this.multiFactor=yM(e)}static getOrCreate(e){return Mc.USER_MAP.has(e)||Mc.USER_MAP.set(e,new Mc(e)),Mc.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Yn(this.auth,XR(this._delegate,e))}async linkWithPhoneNumber(e,t){return p_(this.auth,HM(this._delegate,e,t))}async linkWithPopup(e){return Yn(this.auth,tF(this._delegate,e,Hs))}async linkWithRedirect(e){return await f_(Ft(this.auth)),cF(this._delegate,e,Hs)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Yn(this.auth,JR(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return p_(this.auth,GM(this._delegate,e,t))}reauthenticateWithPopup(e){return Yn(this.auth,eF(this._delegate,e,Hs))}async reauthenticateWithRedirect(e){return await f_(Ft(this.auth)),lF(this._delegate,e,Hs)}sendEmailVerification(e){return tM(this._delegate,e)}async unlink(e){return await zV(this._delegate,e),this}updateEmail(e){return sM(this._delegate,e)}updatePassword(e){return oM(this._delegate,e)}updatePhoneNumber(e){return KM(this._delegate,e)}updateProfile(e){return iM(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return nM(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Qp.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=_e;class m_{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Tc(r,"invalid-api-key",{appName:e.name}),Tc(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Hs:void 0;this._delegate=t.initialize({options:{persistence:x2(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(NL),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Qp.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){yV(this._delegate,e,t)}applyActionCode(e){return HV(this._delegate,e)}checkActionCode(e){return ZR(this._delegate,e)}confirmPasswordReset(e,t){return WV(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Yn(this._delegate,KV(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return eM(this._delegate,e)}isSignInWithEmailLink(e){return XV(this._delegate,e)}async getRedirectResult(){Tc(Ty(),this._delegate,"operation-not-supported-in-this-environment");const e=await hF(this._delegate,Hs);return e?Yn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){f2(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:o,complete:l}=cT(e,t,r);return this._delegate.onAuthStateChanged(i,o,l)}onIdTokenChanged(e,t,r){const{next:i,error:o,complete:l}=cT(e,t,r);return this._delegate.onIdTokenChanged(i,o,l)}sendSignInLinkToEmail(e,t){return YV(this._delegate,e,t)}sendPasswordResetEmail(e,t){return qV(this._delegate,e,t||void 0)}async setPersistence(e){S2(this._delegate,e);let t;switch(e){case dr.SESSION:t=ca;break;case dr.LOCAL:t=await fr(cd)._isAvailable()?cd:bv;break;case dr.NONE:t=Kl;break;default:return En("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Yn(this._delegate,jV(this._delegate))}signInWithCredential(e){return Yn(this._delegate,$p(this._delegate,e))}signInWithCustomToken(e){return Yn(this._delegate,$V(this._delegate,e))}signInWithEmailAndPassword(e,t){return Yn(this._delegate,QV(this._delegate,e,t))}signInWithEmailLink(e,t){return Yn(this._delegate,JV(this._delegate,e,t))}signInWithPhoneNumber(e,t){return p_(this._delegate,WM(this._delegate,e,t))}async signInWithPopup(e){return Tc(Ty(),this._delegate,"operation-not-supported-in-this-environment"),Yn(this._delegate,ZM(this._delegate,e,Hs))}async signInWithRedirect(e){return Tc(Ty(),this._delegate,"operation-not-supported-in-this-environment"),await f_(this._delegate),oF(this._delegate,e,Hs)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return GV(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}m_.Persistence=dr;function cT(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:l=>i(l&&Qp.getOrCreate(l)),error:e,complete:t}}function x2(n,e){const t=b2(n,e);if(typeof self<"u"&&!t.includes(cd)&&t.push(cd),typeof window<"u")for(const r of[bv,ca])t.includes(r)||t.push(r);return t.includes(Kl)||t.push(Kl),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(){this.providerId="phone",this._delegate=new da(I1(xi.auth()))}static credential(e,t){return da.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Dv.PHONE_SIGN_IN_METHOD=da.PHONE_SIGN_IN_METHOD;Dv.PROVIDER_ID=da.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2=_e;class D2{constructor(e,t,r=xi.app()){var i;O2((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new $M(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2="auth-compat";function L2(n){n.INTERNAL.registerComponent(new Or(N2,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new m_(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:El.EMAIL_SIGNIN,PASSWORD_RESET:El.PASSWORD_RESET,RECOVER_EMAIL:El.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:El.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:El.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:El.VERIFY_EMAIL}},EmailAuthProvider:uo,FacebookAuthProvider:fi,GithubAuthProvider:mi,GoogleAuthProvider:pi,OAuthProvider:Vl,SAMLAuthProvider:sp,PhoneAuthProvider:Dv,PhoneMultiFactorGenerator:g1,RecaptchaVerifier:D2,TwitterAuthProvider:gi,Auth:m_,AuthCredential:yu,Error:An}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(p2,m2)}L2(xi);var dT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var aa,S1;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,C){function b(){}b.prototype=C.prototype,R.D=C.prototype,R.prototype=new b,R.prototype.constructor=R,R.C=function(w,D,M){for(var k=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)k[Y-2]=arguments[Y];return C.prototype[D].apply(w,k)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(R,C,b){b||(b=0);var w=Array(16);if(typeof C=="string")for(var D=0;16>D;++D)w[D]=C.charCodeAt(b++)|C.charCodeAt(b++)<<8|C.charCodeAt(b++)<<16|C.charCodeAt(b++)<<24;else for(D=0;16>D;++D)w[D]=C[b++]|C[b++]<<8|C[b++]<<16|C[b++]<<24;C=R.g[0],b=R.g[1],D=R.g[2];var M=R.g[3],k=C+(M^b&(D^M))+w[0]+3614090360&4294967295;C=b+(k<<7&4294967295|k>>>25),k=M+(D^C&(b^D))+w[1]+3905402710&4294967295,M=C+(k<<12&4294967295|k>>>20),k=D+(b^M&(C^b))+w[2]+606105819&4294967295,D=M+(k<<17&4294967295|k>>>15),k=b+(C^D&(M^C))+w[3]+3250441966&4294967295,b=D+(k<<22&4294967295|k>>>10),k=C+(M^b&(D^M))+w[4]+4118548399&4294967295,C=b+(k<<7&4294967295|k>>>25),k=M+(D^C&(b^D))+w[5]+1200080426&4294967295,M=C+(k<<12&4294967295|k>>>20),k=D+(b^M&(C^b))+w[6]+2821735955&4294967295,D=M+(k<<17&4294967295|k>>>15),k=b+(C^D&(M^C))+w[7]+4249261313&4294967295,b=D+(k<<22&4294967295|k>>>10),k=C+(M^b&(D^M))+w[8]+1770035416&4294967295,C=b+(k<<7&4294967295|k>>>25),k=M+(D^C&(b^D))+w[9]+2336552879&4294967295,M=C+(k<<12&4294967295|k>>>20),k=D+(b^M&(C^b))+w[10]+4294925233&4294967295,D=M+(k<<17&4294967295|k>>>15),k=b+(C^D&(M^C))+w[11]+2304563134&4294967295,b=D+(k<<22&4294967295|k>>>10),k=C+(M^b&(D^M))+w[12]+1804603682&4294967295,C=b+(k<<7&4294967295|k>>>25),k=M+(D^C&(b^D))+w[13]+4254626195&4294967295,M=C+(k<<12&4294967295|k>>>20),k=D+(b^M&(C^b))+w[14]+2792965006&4294967295,D=M+(k<<17&4294967295|k>>>15),k=b+(C^D&(M^C))+w[15]+1236535329&4294967295,b=D+(k<<22&4294967295|k>>>10),k=C+(D^M&(b^D))+w[1]+4129170786&4294967295,C=b+(k<<5&4294967295|k>>>27),k=M+(b^D&(C^b))+w[6]+3225465664&4294967295,M=C+(k<<9&4294967295|k>>>23),k=D+(C^b&(M^C))+w[11]+643717713&4294967295,D=M+(k<<14&4294967295|k>>>18),k=b+(M^C&(D^M))+w[0]+3921069994&4294967295,b=D+(k<<20&4294967295|k>>>12),k=C+(D^M&(b^D))+w[5]+3593408605&4294967295,C=b+(k<<5&4294967295|k>>>27),k=M+(b^D&(C^b))+w[10]+38016083&4294967295,M=C+(k<<9&4294967295|k>>>23),k=D+(C^b&(M^C))+w[15]+3634488961&4294967295,D=M+(k<<14&4294967295|k>>>18),k=b+(M^C&(D^M))+w[4]+3889429448&4294967295,b=D+(k<<20&4294967295|k>>>12),k=C+(D^M&(b^D))+w[9]+568446438&4294967295,C=b+(k<<5&4294967295|k>>>27),k=M+(b^D&(C^b))+w[14]+3275163606&4294967295,M=C+(k<<9&4294967295|k>>>23),k=D+(C^b&(M^C))+w[3]+4107603335&4294967295,D=M+(k<<14&4294967295|k>>>18),k=b+(M^C&(D^M))+w[8]+1163531501&4294967295,b=D+(k<<20&4294967295|k>>>12),k=C+(D^M&(b^D))+w[13]+2850285829&4294967295,C=b+(k<<5&4294967295|k>>>27),k=M+(b^D&(C^b))+w[2]+4243563512&4294967295,M=C+(k<<9&4294967295|k>>>23),k=D+(C^b&(M^C))+w[7]+1735328473&4294967295,D=M+(k<<14&4294967295|k>>>18),k=b+(M^C&(D^M))+w[12]+2368359562&4294967295,b=D+(k<<20&4294967295|k>>>12),k=C+(b^D^M)+w[5]+4294588738&4294967295,C=b+(k<<4&4294967295|k>>>28),k=M+(C^b^D)+w[8]+2272392833&4294967295,M=C+(k<<11&4294967295|k>>>21),k=D+(M^C^b)+w[11]+1839030562&4294967295,D=M+(k<<16&4294967295|k>>>16),k=b+(D^M^C)+w[14]+4259657740&4294967295,b=D+(k<<23&4294967295|k>>>9),k=C+(b^D^M)+w[1]+2763975236&4294967295,C=b+(k<<4&4294967295|k>>>28),k=M+(C^b^D)+w[4]+1272893353&4294967295,M=C+(k<<11&4294967295|k>>>21),k=D+(M^C^b)+w[7]+4139469664&4294967295,D=M+(k<<16&4294967295|k>>>16),k=b+(D^M^C)+w[10]+3200236656&4294967295,b=D+(k<<23&4294967295|k>>>9),k=C+(b^D^M)+w[13]+681279174&4294967295,C=b+(k<<4&4294967295|k>>>28),k=M+(C^b^D)+w[0]+3936430074&4294967295,M=C+(k<<11&4294967295|k>>>21),k=D+(M^C^b)+w[3]+3572445317&4294967295,D=M+(k<<16&4294967295|k>>>16),k=b+(D^M^C)+w[6]+76029189&4294967295,b=D+(k<<23&4294967295|k>>>9),k=C+(b^D^M)+w[9]+3654602809&4294967295,C=b+(k<<4&4294967295|k>>>28),k=M+(C^b^D)+w[12]+3873151461&4294967295,M=C+(k<<11&4294967295|k>>>21),k=D+(M^C^b)+w[15]+530742520&4294967295,D=M+(k<<16&4294967295|k>>>16),k=b+(D^M^C)+w[2]+3299628645&4294967295,b=D+(k<<23&4294967295|k>>>9),k=C+(D^(b|~M))+w[0]+4096336452&4294967295,C=b+(k<<6&4294967295|k>>>26),k=M+(b^(C|~D))+w[7]+1126891415&4294967295,M=C+(k<<10&4294967295|k>>>22),k=D+(C^(M|~b))+w[14]+2878612391&4294967295,D=M+(k<<15&4294967295|k>>>17),k=b+(M^(D|~C))+w[5]+4237533241&4294967295,b=D+(k<<21&4294967295|k>>>11),k=C+(D^(b|~M))+w[12]+1700485571&4294967295,C=b+(k<<6&4294967295|k>>>26),k=M+(b^(C|~D))+w[3]+2399980690&4294967295,M=C+(k<<10&4294967295|k>>>22),k=D+(C^(M|~b))+w[10]+4293915773&4294967295,D=M+(k<<15&4294967295|k>>>17),k=b+(M^(D|~C))+w[1]+2240044497&4294967295,b=D+(k<<21&4294967295|k>>>11),k=C+(D^(b|~M))+w[8]+1873313359&4294967295,C=b+(k<<6&4294967295|k>>>26),k=M+(b^(C|~D))+w[15]+4264355552&4294967295,M=C+(k<<10&4294967295|k>>>22),k=D+(C^(M|~b))+w[6]+2734768916&4294967295,D=M+(k<<15&4294967295|k>>>17),k=b+(M^(D|~C))+w[13]+1309151649&4294967295,b=D+(k<<21&4294967295|k>>>11),k=C+(D^(b|~M))+w[4]+4149444226&4294967295,C=b+(k<<6&4294967295|k>>>26),k=M+(b^(C|~D))+w[11]+3174756917&4294967295,M=C+(k<<10&4294967295|k>>>22),k=D+(C^(M|~b))+w[2]+718787259&4294967295,D=M+(k<<15&4294967295|k>>>17),k=b+(M^(D|~C))+w[9]+3951481745&4294967295,R.g[0]=R.g[0]+C&4294967295,R.g[1]=R.g[1]+(D+(k<<21&4294967295|k>>>11))&4294967295,R.g[2]=R.g[2]+D&4294967295,R.g[3]=R.g[3]+M&4294967295}r.prototype.u=function(R,C){C===void 0&&(C=R.length);for(var b=C-this.blockSize,w=this.B,D=this.h,M=0;M<C;){if(D==0)for(;M<=b;)i(this,R,M),M+=this.blockSize;if(typeof R=="string"){for(;M<C;)if(w[D++]=R.charCodeAt(M++),D==this.blockSize){i(this,w),D=0;break}}else for(;M<C;)if(w[D++]=R[M++],D==this.blockSize){i(this,w),D=0;break}}this.h=D,this.o+=C},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var C=1;C<R.length-8;++C)R[C]=0;var b=8*this.o;for(C=R.length-8;C<R.length;++C)R[C]=b&255,b/=256;for(this.u(R),R=Array(16),C=b=0;4>C;++C)for(var w=0;32>w;w+=8)R[b++]=this.g[C]>>>w&255;return R};function o(R,C){var b=c;return Object.prototype.hasOwnProperty.call(b,R)?b[R]:b[R]=C(R)}function l(R,C){this.h=C;for(var b=[],w=!0,D=R.length-1;0<=D;D--){var M=R[D]|0;w&&M==C||(b[D]=M,w=!1)}this.g=b}var c={};function h(R){return-128<=R&&128>R?o(R,function(C){return new l([C|0],0>C?-1:0)}):new l([R|0],0>R?-1:0)}function p(R){if(isNaN(R)||!isFinite(R))return v;if(0>R)return U(p(-R));for(var C=[],b=1,w=0;R>=b;w++)C[w]=R/b|0,b*=4294967296;return new l(C,0)}function g(R,C){if(R.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(R.charAt(0)=="-")return U(g(R.substring(1),C));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=p(Math.pow(C,8)),w=v,D=0;D<R.length;D+=8){var M=Math.min(8,R.length-D),k=parseInt(R.substring(D,D+M),C);8>M?(M=p(Math.pow(C,M)),w=w.j(M).add(p(k))):(w=w.j(b),w=w.add(p(k)))}return w}var v=h(0),T=h(1),x=h(16777216);n=l.prototype,n.m=function(){if(N(this))return-U(this).m();for(var R=0,C=1,b=0;b<this.g.length;b++){var w=this.i(b);R+=(0<=w?w:4294967296+w)*C,C*=4294967296}return R},n.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(L(this))return"0";if(N(this))return"-"+U(this).toString(R);for(var C=p(Math.pow(R,6)),b=this,w="";;){var D=X(b,C).g;b=q(b,D.j(C));var M=((0<b.g.length?b.g[0]:b.h)>>>0).toString(R);if(b=D,L(b))return M+w;for(;6>M.length;)M="0"+M;w=M+w}},n.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function L(R){if(R.h!=0)return!1;for(var C=0;C<R.g.length;C++)if(R.g[C]!=0)return!1;return!0}function N(R){return R.h==-1}n.l=function(R){return R=q(this,R),N(R)?-1:L(R)?0:1};function U(R){for(var C=R.g.length,b=[],w=0;w<C;w++)b[w]=~R.g[w];return new l(b,~R.h).add(T)}n.abs=function(){return N(this)?U(this):this},n.add=function(R){for(var C=Math.max(this.g.length,R.g.length),b=[],w=0,D=0;D<=C;D++){var M=w+(this.i(D)&65535)+(R.i(D)&65535),k=(M>>>16)+(this.i(D)>>>16)+(R.i(D)>>>16);w=k>>>16,M&=65535,k&=65535,b[D]=k<<16|M}return new l(b,b[b.length-1]&-2147483648?-1:0)};function q(R,C){return R.add(U(C))}n.j=function(R){if(L(this)||L(R))return v;if(N(this))return N(R)?U(this).j(U(R)):U(U(this).j(R));if(N(R))return U(this.j(U(R)));if(0>this.l(x)&&0>R.l(x))return p(this.m()*R.m());for(var C=this.g.length+R.g.length,b=[],w=0;w<2*C;w++)b[w]=0;for(w=0;w<this.g.length;w++)for(var D=0;D<R.g.length;D++){var M=this.i(w)>>>16,k=this.i(w)&65535,Y=R.i(D)>>>16,ge=R.i(D)&65535;b[2*w+2*D]+=k*ge,G(b,2*w+2*D),b[2*w+2*D+1]+=M*ge,G(b,2*w+2*D+1),b[2*w+2*D+1]+=k*Y,G(b,2*w+2*D+1),b[2*w+2*D+2]+=M*Y,G(b,2*w+2*D+2)}for(w=0;w<C;w++)b[w]=b[2*w+1]<<16|b[2*w];for(w=C;w<2*C;w++)b[w]=0;return new l(b,0)};function G(R,C){for(;(R[C]&65535)!=R[C];)R[C+1]+=R[C]>>>16,R[C]&=65535,C++}function H(R,C){this.g=R,this.h=C}function X(R,C){if(L(C))throw Error("division by zero");if(L(R))return new H(v,v);if(N(R))return C=X(U(R),C),new H(U(C.g),U(C.h));if(N(C))return C=X(R,U(C)),new H(U(C.g),C.h);if(30<R.g.length){if(N(R)||N(C))throw Error("slowDivide_ only works with positive integers.");for(var b=T,w=C;0>=w.l(R);)b=V(b),w=V(w);var D=F(b,1),M=F(w,1);for(w=F(w,2),b=F(b,2);!L(w);){var k=M.add(w);0>=k.l(R)&&(D=D.add(b),M=k),w=F(w,1),b=F(b,1)}return C=q(R,D.j(C)),new H(D,C)}for(D=v;0<=R.l(C);){for(b=Math.max(1,Math.floor(R.m()/C.m())),w=Math.ceil(Math.log(b)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),M=p(b),k=M.j(C);N(k)||0<k.l(R);)b-=w,M=p(b),k=M.j(C);L(M)&&(M=T),D=D.add(M),R=q(R,k)}return new H(D,R)}n.A=function(R){return X(this,R).h},n.and=function(R){for(var C=Math.max(this.g.length,R.g.length),b=[],w=0;w<C;w++)b[w]=this.i(w)&R.i(w);return new l(b,this.h&R.h)},n.or=function(R){for(var C=Math.max(this.g.length,R.g.length),b=[],w=0;w<C;w++)b[w]=this.i(w)|R.i(w);return new l(b,this.h|R.h)},n.xor=function(R){for(var C=Math.max(this.g.length,R.g.length),b=[],w=0;w<C;w++)b[w]=this.i(w)^R.i(w);return new l(b,this.h^R.h)};function V(R){for(var C=R.g.length+1,b=[],w=0;w<C;w++)b[w]=R.i(w)<<1|R.i(w-1)>>>31;return new l(b,R.h)}function F(R,C){var b=C>>5;C%=32;for(var w=R.g.length-b,D=[],M=0;M<w;M++)D[M]=0<C?R.i(M+b)>>>C|R.i(M+b+1)<<32-C:R.i(M+b);return new l(D,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,S1=r,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=g,aa=l}).apply(typeof dT<"u"?dT:typeof self<"u"?self:typeof window<"u"?window:{});var vf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var b1,Fc,R1,Bf,g_,P1,A1,k1;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(d,y,E){return d==Array.prototype||d==Object.prototype||(d[y]=E.value),d};function t(d){d=[typeof globalThis=="object"&&globalThis,d,typeof window=="object"&&window,typeof self=="object"&&self,typeof vf=="object"&&vf];for(var y=0;y<d.length;++y){var E=d[y];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=t(this);function i(d,y){if(y)e:{var E=r;d=d.split(".");for(var O=0;O<d.length-1;O++){var K=d[O];if(!(K in E))break e;E=E[K]}d=d[d.length-1],O=E[d],y=y(O),y!=O&&y!=null&&e(E,d,{configurable:!0,writable:!0,value:y})}}function o(d,y){d instanceof String&&(d+="");var E=0,O=!1,K={next:function(){if(!O&&E<d.length){var ie=E++;return{value:y(ie,d[ie]),done:!1}}return O=!0,{done:!0,value:void 0}}};return K[Symbol.iterator]=function(){return K},K}i("Array.prototype.values",function(d){return d||function(){return o(this,function(y,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function h(d){var y=typeof d;return y=y!="object"?y:d?Array.isArray(d)?"array":y:"null",y=="array"||y=="object"&&typeof d.length=="number"}function p(d){var y=typeof d;return y=="object"&&d!=null||y=="function"}function g(d,y,E){return d.call.apply(d.bind,arguments)}function v(d,y,E){if(!d)throw Error();if(2<arguments.length){var O=Array.prototype.slice.call(arguments,2);return function(){var K=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(K,O),d.apply(y,K)}}return function(){return d.apply(y,arguments)}}function T(d,y,E){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:v,T.apply(null,arguments)}function x(d,y){var E=Array.prototype.slice.call(arguments,1);return function(){var O=E.slice();return O.push.apply(O,arguments),d.apply(this,O)}}function L(d,y){function E(){}E.prototype=y.prototype,d.aa=y.prototype,d.prototype=new E,d.prototype.constructor=d,d.Qb=function(O,K,ie){for(var we=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)we[ot-2]=arguments[ot];return y.prototype[K].apply(O,we)}}function N(d){const y=d.length;if(0<y){const E=Array(y);for(let O=0;O<y;O++)E[O]=d[O];return E}return[]}function U(d,y){for(let E=1;E<arguments.length;E++){const O=arguments[E];if(h(O)){const K=d.length||0,ie=O.length||0;d.length=K+ie;for(let we=0;we<ie;we++)d[K+we]=O[we]}else d.push(O)}}class q{constructor(y,E){this.i=y,this.j=E,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function G(d){return/^[\s\xa0]*$/.test(d)}function H(){var d=c.navigator;return d&&(d=d.userAgent)?d:""}function X(d){return X[" "](d),d}X[" "]=function(){};var V=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function F(d,y,E){for(const O in d)y.call(E,d[O],O,d)}function R(d,y){for(const E in d)y.call(void 0,d[E],E,d)}function C(d){const y={};for(const E in d)y[E]=d[E];return y}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(d,y){let E,O;for(let K=1;K<arguments.length;K++){O=arguments[K];for(E in O)d[E]=O[E];for(let ie=0;ie<b.length;ie++)E=b[ie],Object.prototype.hasOwnProperty.call(O,E)&&(d[E]=O[E])}}function D(d){var y=1;d=d.split(":");const E=[];for(;0<y&&d.length;)E.push(d.shift()),y--;return d.length&&E.push(d.join(":")),E}function M(d){c.setTimeout(()=>{throw d},0)}function k(){var d=B;let y=null;return d.g&&(y=d.g,d.g=d.g.next,d.g||(d.h=null),y.next=null),y}class Y{constructor(){this.h=this.g=null}add(y,E){const O=ge.get();O.set(y,E),this.h?this.h.next=O:this.g=O,this.h=O}}var ge=new q(()=>new pe,d=>d.reset());class pe{constructor(){this.next=this.g=this.h=null}set(y,E){this.h=y,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let S,le=!1,B=new Y,I=()=>{const d=c.Promise.resolve(void 0);S=()=>{d.then(P)}};var P=()=>{for(var d;d=k();){try{d.h.call(d.g)}catch(E){M(E)}var y=ge;y.j(d),100>y.h&&(y.h++,d.next=y.g,y.g=d)}le=!1};function z(){this.s=this.s,this.C=this.C}z.prototype.s=!1,z.prototype.ma=function(){this.s||(this.s=!0,this.N())},z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ee(d,y){this.type=d,this.g=this.target=y,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var re=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var d=!1,y=Object.defineProperty({},"passive",{get:function(){d=!0}});try{const E=()=>{};c.addEventListener("test",E,y),c.removeEventListener("test",E,y)}catch{}return d}();function oe(d,y){if(ee.call(this,d?d.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,d){var E=this.type=d.type,O=d.changedTouches&&d.changedTouches.length?d.changedTouches[0]:null;if(this.target=d.target||d.srcElement,this.g=y,y=d.relatedTarget){if(V){e:{try{X(y.nodeName);var K=!0;break e}catch{}K=!1}K||(y=null)}}else E=="mouseover"?y=d.fromElement:E=="mouseout"&&(y=d.toElement);this.relatedTarget=y,O?(this.clientX=O.clientX!==void 0?O.clientX:O.pageX,this.clientY=O.clientY!==void 0?O.clientY:O.pageY,this.screenX=O.screenX||0,this.screenY=O.screenY||0):(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0),this.button=d.button,this.key=d.key||"",this.ctrlKey=d.ctrlKey,this.altKey=d.altKey,this.shiftKey=d.shiftKey,this.metaKey=d.metaKey,this.pointerId=d.pointerId||0,this.pointerType=typeof d.pointerType=="string"?d.pointerType:ae[d.pointerType]||"",this.state=d.state,this.i=d,d.defaultPrevented&&oe.aa.h.call(this)}}L(oe,ee);var ae={2:"touch",3:"pen",4:"mouse"};oe.prototype.h=function(){oe.aa.h.call(this);var d=this.i;d.preventDefault?d.preventDefault():d.returnValue=!1};var ce="closure_listenable_"+(1e6*Math.random()|0),Te=0;function be(d,y,E,O,K){this.listener=d,this.proxy=null,this.src=y,this.type=E,this.capture=!!O,this.ha=K,this.key=++Te,this.da=this.fa=!1}function Le(d){d.da=!0,d.listener=null,d.proxy=null,d.src=null,d.ha=null}function $e(d){this.src=d,this.g={},this.h=0}$e.prototype.add=function(d,y,E,O,K){var ie=d.toString();d=this.g[ie],d||(d=this.g[ie]=[],this.h++);var we=He(d,y,O,K);return-1<we?(y=d[we],E||(y.fa=!1)):(y=new be(y,this.src,ie,!!O,K),y.fa=E,d.push(y)),y};function Ue(d,y){var E=y.type;if(E in d.g){var O=d.g[E],K=Array.prototype.indexOf.call(O,y,void 0),ie;(ie=0<=K)&&Array.prototype.splice.call(O,K,1),ie&&(Le(y),d.g[E].length==0&&(delete d.g[E],d.h--))}}function He(d,y,E,O){for(var K=0;K<d.length;++K){var ie=d[K];if(!ie.da&&ie.listener==y&&ie.capture==!!E&&ie.ha==O)return K}return-1}var ze="closure_lm_"+(1e6*Math.random()|0),Qe={};function mt(d,y,E,O,K){if(Array.isArray(y)){for(var ie=0;ie<y.length;ie++)mt(d,y[ie],E,O,K);return null}return E=Lr(E),d&&d[ce]?d.K(y,E,p(O)?!!O.capture:!!O,K):qe(d,y,E,!1,O,K)}function qe(d,y,E,O,K,ie){if(!y)throw Error("Invalid event type");var we=p(K)?!!K.capture:!!K,ot=Nr(d);if(ot||(d[ze]=ot=new $e(d)),E=ot.add(y,E,O,we,ie),E.proxy)return E;if(O=gt(),E.proxy=O,O.src=d,O.listener=E,d.addEventListener)re||(K=we),K===void 0&&(K=!1),d.addEventListener(y.toString(),O,K);else if(d.attachEvent)d.attachEvent(kt(y.toString()),O);else if(d.addListener&&d.removeListener)d.addListener(O);else throw Error("addEventListener and attachEvent are unavailable.");return E}function gt(){function d(E){return y.call(d.src,d.listener,E)}const y=nr;return d}function yt(d,y,E,O,K){if(Array.isArray(y))for(var ie=0;ie<y.length;ie++)yt(d,y[ie],E,O,K);else O=p(O)?!!O.capture:!!O,E=Lr(E),d&&d[ce]?(d=d.i,y=String(y).toString(),y in d.g&&(ie=d.g[y],E=He(ie,E,O,K),-1<E&&(Le(ie[E]),Array.prototype.splice.call(ie,E,1),ie.length==0&&(delete d.g[y],d.h--)))):d&&(d=Nr(d))&&(y=d.g[y.toString()],d=-1,y&&(d=He(y,E,O,K)),(E=-1<d?y[d]:null)&&ct(E))}function ct(d){if(typeof d!="number"&&d&&!d.da){var y=d.src;if(y&&y[ce])Ue(y.i,d);else{var E=d.type,O=d.proxy;y.removeEventListener?y.removeEventListener(E,O,d.capture):y.detachEvent?y.detachEvent(kt(E),O):y.addListener&&y.removeListener&&y.removeListener(O),(E=Nr(y))?(Ue(E,d),E.h==0&&(E.src=null,y[ze]=null)):Le(d)}}}function kt(d){return d in Qe?Qe[d]:Qe[d]="on"+d}function nr(d,y){if(d.da)d=!0;else{y=new oe(y,this);var E=d.listener,O=d.ha||d.src;d.fa&&ct(d),d=E.call(O,y)}return d}function Nr(d){return d=d[ze],d instanceof $e?d:null}var Oi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lr(d){return typeof d=="function"?d:(d[Oi]||(d[Oi]=function(y){return d.handleEvent(y)}),d[Oi])}function Bt(){z.call(this),this.i=new $e(this),this.M=this,this.F=null}L(Bt,z),Bt.prototype[ce]=!0,Bt.prototype.removeEventListener=function(d,y,E,O){yt(this,d,y,E,O)};function lt(d,y){var E,O=d.F;if(O)for(E=[];O;O=O.F)E.push(O);if(d=d.M,O=y.type||y,typeof y=="string")y=new ee(y,d);else if(y instanceof ee)y.target=y.target||d;else{var K=y;y=new ee(O,d),w(y,K)}if(K=!0,E)for(var ie=E.length-1;0<=ie;ie--){var we=y.g=E[ie];K=Cn(we,O,!0,y)&&K}if(we=y.g=d,K=Cn(we,O,!0,y)&&K,K=Cn(we,O,!1,y)&&K,E)for(ie=0;ie<E.length;ie++)we=y.g=E[ie],K=Cn(we,O,!1,y)&&K}Bt.prototype.N=function(){if(Bt.aa.N.call(this),this.i){var d=this.i,y;for(y in d.g){for(var E=d.g[y],O=0;O<E.length;O++)Le(E[O]);delete d.g[y],d.h--}}this.F=null},Bt.prototype.K=function(d,y,E,O){return this.i.add(String(d),y,!1,E,O)},Bt.prototype.L=function(d,y,E,O){return this.i.add(String(d),y,!0,E,O)};function Cn(d,y,E,O){if(y=d.i.g[String(y)],!y)return!0;y=y.concat();for(var K=!0,ie=0;ie<y.length;++ie){var we=y[ie];if(we&&!we.da&&we.capture==E){var ot=we.listener,Zt=we.ha||we.src;we.fa&&Ue(d.i,we),K=ot.call(Zt,O)!==!1&&K}}return K&&!O.defaultPrevented}function Au(d,y,E){if(typeof d=="function")E&&(d=T(d,E));else if(d&&typeof d.handleEvent=="function")d=T(d.handleEvent,d);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:c.setTimeout(d,y||0)}function ms(d){d.g=Au(()=>{d.g=null,d.i&&(d.i=!1,ms(d))},d.l);const y=d.h;d.h=null,d.m.apply(null,y)}class go extends z{constructor(y,E){super(),this.m=y,this.l=E,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:ms(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yo(d){z.call(this),this.h=d,this.g={}}L(yo,z);var ku=[];function Cu(d){F(d.g,function(y,E){this.g.hasOwnProperty(E)&&ct(y)},d),d.g={}}yo.prototype.N=function(){yo.aa.N.call(this),Cu(this)},yo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xu=c.JSON.stringify,Ou=c.JSON.parse,Du=class{stringify(d){return c.JSON.stringify(d,void 0)}parse(d){return c.JSON.parse(d,void 0)}};function _o(){}_o.prototype.h=null;function Da(d){return d.h||(d.h=d.i())}function Na(){}var _r={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ti(){ee.call(this,"d")}L(ti,ee);function La(){ee.call(this,"c")}L(La,ee);var ni={},Nu=null;function vo(){return Nu=Nu||new Bt}ni.La="serverreachability";function Lu(d){ee.call(this,ni.La,d)}L(Lu,ee);function Di(d){const y=vo();lt(y,new Lu(y))}ni.STAT_EVENT="statevent";function Vu(d,y){ee.call(this,ni.STAT_EVENT,d),this.stat=y}L(Vu,ee);function $t(d){const y=vo();lt(y,new Vu(y,d))}ni.Ma="timingevent";function Va(d,y){ee.call(this,ni.Ma,d),this.size=y}L(Va,ee);function Vr(d,y){if(typeof d!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){d()},y)}function wo(){this.g=!0}wo.prototype.xa=function(){this.g=!1};function Eo(d,y,E,O,K,ie){d.info(function(){if(d.g)if(ie)for(var we="",ot=ie.split("&"),Zt=0;Zt<ot.length;Zt++){var et=ot[Zt].split("=");if(1<et.length){var sn=et[0];et=et[1];var Kt=sn.split("_");we=2<=Kt.length&&Kt[1]=="type"?we+(sn+"="+et+"&"):we+(sn+"=redacted&")}}else we=null;else we=ie;return"XMLHTTP REQ ("+O+") [attempt "+K+"]: "+y+`
`+E+`
`+we})}function Ma(d,y,E,O,K,ie,we){d.info(function(){return"XMLHTTP RESP ("+O+") [ attempt "+K+"]: "+y+`
`+E+`
`+ie+" "+we})}function Mr(d,y,E,O){d.info(function(){return"XMLHTTP TEXT ("+y+"): "+km(d,E)+(O?" "+O:"")})}function Mu(d,y){d.info(function(){return"TIMEOUT: "+y})}wo.prototype.info=function(){};function km(d,y){if(!d.g)return y;if(!y)return null;try{var E=JSON.parse(y);if(E){for(d=0;d<E.length;d++)if(Array.isArray(E[d])){var O=E[d];if(!(2>O.length)){var K=O[1];if(Array.isArray(K)&&!(1>K.length)){var ie=K[0];if(ie!="noop"&&ie!="stop"&&ie!="close")for(var we=1;we<K.length;we++)K[we]=""}}}}return xu(E)}catch{return y}}var Fa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Jd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fr;function Io(){}L(Io,_o),Io.prototype.g=function(){return new XMLHttpRequest},Io.prototype.i=function(){return{}},Fr=new Io;function Ur(d,y,E,O){this.j=d,this.i=y,this.l=E,this.R=O||1,this.U=new yo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zd}function Zd(){this.i=null,this.g="",this.h=!1}var Fu={},Ua={};function ja(d,y,E){d.L=1,d.v=ws(ir(y)),d.m=E,d.P=!0,Uu(d,null)}function Uu(d,y){d.F=Date.now(),ht(d),d.A=ir(d.v);var E=d.A,O=d.R;Array.isArray(O)||(O=[String(O)]),Is(E.i,"t",O),d.C=0,E=d.j.J,d.h=new Zd,d.g=yh(d.j,E?y:null,!d.m),0<d.O&&(d.M=new go(T(d.Y,d,d.g),d.O)),y=d.U,E=d.g,O=d.ca;var K="readystatechange";Array.isArray(K)||(K&&(ku[0]=K.toString()),K=ku);for(var ie=0;ie<K.length;ie++){var we=mt(E,K[ie],O||y.handleEvent,!1,y.h||y);if(!we)break;y.g[we.key]=we}y=d.H?C(d.H):{},d.m?(d.u||(d.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",d.g.ea(d.A,d.u,d.m,y)):(d.u="GET",d.g.ea(d.A,d.u,null,y)),Di(),Eo(d.i,d.u,d.A,d.l,d.R,d.m)}Ur.prototype.ca=function(d){d=d.target;const y=this.M;y&&$n(d)==3?y.j():this.Y(d)},Ur.prototype.Y=function(d){try{if(d==this.g)e:{const Kt=$n(this.g);var y=this.g.Ba();const Er=this.g.Z();if(!(3>Kt)&&(Kt!=3||this.g&&(this.h.h||this.g.oa()||Wu(this.g)))){this.J||Kt!=4||y==7||(y==8||0>=Er?Di(3):Di(2)),To(this);var E=this.g.Z();this.X=E;t:if(eh(this)){var O=Wu(this.g);d="";var K=O.length,ie=$n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vr(this),gs(this);var we="";break t}this.h.i=new c.TextDecoder}for(y=0;y<K;y++)this.h.h=!0,d+=this.h.i.decode(O[y],{stream:!(ie&&y==K-1)});O.length=0,this.h.g+=d,this.C=0,we=this.h.g}else we=this.g.oa();if(this.o=E==200,Ma(this.i,this.u,this.A,this.l,this.R,Kt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var ot,Zt=this.g;if((ot=Zt.g?Zt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(ot)){var et=ot;break t}}et=null}if(E=et)Mr(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ju(this,E);else{this.o=!1,this.s=3,$t(12),vr(this),gs(this);break e}}if(this.P){E=!0;let or;for(;!this.J&&this.C<we.length;)if(or=Cm(this,we),or==Ua){Kt==4&&(this.s=4,$t(14),E=!1),Mr(this.i,this.l,null,"[Incomplete Response]");break}else if(or==Fu){this.s=4,$t(15),Mr(this.i,this.l,we,"[Invalid Chunk]"),E=!1;break}else Mr(this.i,this.l,or,null),ju(this,or);if(eh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Kt!=4||we.length!=0||this.h.h||(this.s=1,$t(16),E=!1),this.o=this.o&&E,!E)Mr(this.i,this.l,we,"[Invalid Chunked Response]"),vr(this),gs(this);else if(0<we.length&&!this.W){this.W=!0;var sn=this.j;sn.g==this&&sn.ba&&!sn.M&&(sn.j.info("Great, no buffering proxy detected. Bytes received: "+we.length),Gu(sn),sn.M=!0,$t(11))}}else Mr(this.i,this.l,we,null),ju(this,we);Kt==4&&vr(this),this.o&&!this.J&&(Kt==4?Xa(this.j,this):(this.o=!1,ht(this)))}else Ha(this.g),E==400&&0<we.indexOf("Unknown SID")?(this.s=3,$t(12)):(this.s=0,$t(13)),vr(this),gs(this)}}}catch{}finally{}};function eh(d){return d.g?d.u=="GET"&&d.L!=2&&d.j.Ca:!1}function Cm(d,y){var E=d.C,O=y.indexOf(`
`,E);return O==-1?Ua:(E=Number(y.substring(E,O)),isNaN(E)?Fu:(O+=1,O+E>y.length?Ua:(y=y.slice(O,O+E),d.C=O+E,y)))}Ur.prototype.cancel=function(){this.J=!0,vr(this)};function ht(d){d.S=Date.now()+d.I,th(d,d.I)}function th(d,y){if(d.B!=null)throw Error("WatchDog timer not null");d.B=Vr(T(d.ba,d),y)}function To(d){d.B&&(c.clearTimeout(d.B),d.B=null)}Ur.prototype.ba=function(){this.B=null;const d=Date.now();0<=d-this.S?(Mu(this.i,this.A),this.L!=2&&(Di(),$t(17)),vr(this),this.s=2,gs(this)):th(this,this.S-d)};function gs(d){d.j.G==0||d.J||Xa(d.j,d)}function vr(d){To(d);var y=d.M;y&&typeof y.ma=="function"&&y.ma(),d.M=null,Cu(d.U),d.g&&(y=d.g,d.g=null,y.abort(),y.ma())}function ju(d,y){try{var E=d.j;if(E.G!=0&&(E.g==d||xn(E.h,d))){if(!d.K&&xn(E.h,d)&&E.G==3){try{var O=E.Da.g.parse(y)}catch{O=null}if(Array.isArray(O)&&O.length==3){var K=O;if(K[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<d.F)Ya(E),qr(E);else break e;Qa(E),$t(18)}}else E.za=K[1],0<E.za-E.T&&37500>K[2]&&E.F&&E.v==0&&!E.C&&(E.C=Vr(T(E.Za,E),6e3));if(1>=rh(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Fi(E,11)}else if((d.K||E.g==d)&&Ya(E),!G(y))for(K=E.Da.g.parse(y),y=0;y<K.length;y++){let et=K[y];if(E.T=et[0],et=et[1],E.G==2)if(et[0]=="c"){E.K=et[1],E.ia=et[2];const sn=et[3];sn!=null&&(E.la=sn,E.j.info("VER="+E.la));const Kt=et[4];Kt!=null&&(E.Aa=Kt,E.j.info("SVER="+E.Aa));const Er=et[5];Er!=null&&typeof Er=="number"&&0<Er&&(O=1.5*Er,E.L=O,E.j.info("backChannelRequestTimeoutMs_="+O)),O=E;const or=d.g;if(or){const Co=or.g?or.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Co){var ie=O.h;ie.g||Co.indexOf("spdy")==-1&&Co.indexOf("quic")==-1&&Co.indexOf("h2")==-1||(ie.j=ie.l,ie.g=new Set,ie.h&&(zu(ie,ie.h),ie.h=null))}if(O.D){const Za=or.g?or.g.getResponseHeader("X-HTTP-Session-Id"):null;Za&&(O.ya=Za,dt(O.I,O.D,Za))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-d.F,E.j.info("Handshake RTT: "+E.R+"ms")),O=E;var we=d;if(O.qa=gh(O,O.J?O.ia:null,O.W),we.K){ih(O.h,we);var ot=we,Zt=O.L;Zt&&(ot.I=Zt),ot.B&&(To(ot),ht(ot)),O.g=we}else ko(O);0<E.i.length&&oi(E)}else et[0]!="stop"&&et[0]!="close"||Fi(E,7);else E.G==3&&(et[0]=="stop"||et[0]=="close"?et[0]=="stop"?Fi(E,7):pn(E):et[0]!="noop"&&E.l&&E.l.ta(et),E.v=0)}}Di(4)}catch{}}var nh=class{constructor(d,y){this.g=d,this.map=y}};function So(d){this.l=d||10,c.PerformanceNavigationTiming?(d=c.performance.getEntriesByType("navigation"),d=0<d.length&&(d[0].nextHopProtocol=="hq"||d[0].nextHopProtocol=="h2")):d=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=d?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rr(d){return d.h?!0:d.g?d.g.size>=d.j:!1}function rh(d){return d.h?1:d.g?d.g.size:0}function xn(d,y){return d.h?d.h==y:d.g?d.g.has(y):!1}function zu(d,y){d.g?d.g.add(y):d.h=y}function ih(d,y){d.h&&d.h==y?d.h=null:d.g&&d.g.has(y)&&d.g.delete(y)}So.prototype.cancel=function(){if(this.i=sh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const d of this.g.values())d.cancel();this.g.clear()}};function sh(d){if(d.h!=null)return d.i.concat(d.h.D);if(d.g!=null&&d.g.size!==0){let y=d.i;for(const E of d.g.values())y=y.concat(E.D);return y}return N(d.i)}function za(d){if(d.V&&typeof d.V=="function")return d.V();if(typeof Map<"u"&&d instanceof Map||typeof Set<"u"&&d instanceof Set)return Array.from(d.values());if(typeof d=="string")return d.split("");if(h(d)){for(var y=[],E=d.length,O=0;O<E;O++)y.push(d[O]);return y}y=[],E=0;for(O in d)y[E++]=d[O];return y}function Ba(d){if(d.na&&typeof d.na=="function")return d.na();if(!d.V||typeof d.V!="function"){if(typeof Map<"u"&&d instanceof Map)return Array.from(d.keys());if(!(typeof Set<"u"&&d instanceof Set)){if(h(d)||typeof d=="string"){var y=[];d=d.length;for(var E=0;E<d;E++)y.push(E);return y}y=[],E=0;for(const O in d)y[E++]=O;return y}}}function ys(d,y){if(d.forEach&&typeof d.forEach=="function")d.forEach(y,void 0);else if(h(d)||typeof d=="string")Array.prototype.forEach.call(d,y,void 0);else for(var E=Ba(d),O=za(d),K=O.length,ie=0;ie<K;ie++)y.call(void 0,O[ie],E&&E[ie],d)}var bo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xm(d,y){if(d){d=d.split("&");for(var E=0;E<d.length;E++){var O=d[E].indexOf("="),K=null;if(0<=O){var ie=d[E].substring(0,O);K=d[E].substring(O+1)}else ie=d[E];y(ie,K?decodeURIComponent(K.replace(/\+/g," ")):"")}}}function Ni(d){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,d instanceof Ni){this.h=d.h,Ro(this,d.j),this.o=d.o,this.g=d.g,_s(this,d.s),this.l=d.l;var y=d.i,E=new ri;E.i=y.i,y.g&&(E.g=new Map(y.g),E.h=y.h),vs(this,E),this.m=d.m}else d&&(y=String(d).match(bo))?(this.h=!1,Ro(this,y[1]||"",!0),this.o=Ze(y[2]||""),this.g=Ze(y[3]||"",!0),_s(this,y[4]),this.l=Ze(y[5]||"",!0),vs(this,y[6]||"",!0),this.m=Ze(y[7]||"")):(this.h=!1,this.i=new ri(null,this.h))}Ni.prototype.toString=function(){var d=[],y=this.j;y&&d.push(Es(y,$a,!0),":");var E=this.g;return(E||y=="file")&&(d.push("//"),(y=this.o)&&d.push(Es(y,$a,!0),"@"),d.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&d.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&d.push("/"),d.push(Es(E,E.charAt(0)=="/"?lh:ah,!0))),(E=this.i.toString())&&d.push("?",E),(E=this.m)&&d.push("#",Es(E,Bu)),d.join("")};function ir(d){return new Ni(d)}function Ro(d,y,E){d.j=E?Ze(y,!0):y,d.j&&(d.j=d.j.replace(/:$/,""))}function _s(d,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);d.s=y}else d.s=null}function vs(d,y,E){y instanceof ri?(d.i=y,ii(d.i,d.h)):(E||(y=Es(y,uh)),d.i=new ri(y,d.h))}function dt(d,y,E){d.i.set(y,E)}function ws(d){return dt(d,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),d}function Ze(d,y){return d?y?decodeURI(d.replace(/%25/g,"%2525")):decodeURIComponent(d):""}function Es(d,y,E){return typeof d=="string"?(d=encodeURI(d).replace(y,oh),E&&(d=d.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d):null}function oh(d){return d=d.charCodeAt(0),"%"+(d>>4&15).toString(16)+(d&15).toString(16)}var $a=/[#\/\?@]/g,ah=/[#\?:]/g,lh=/[#\?]/g,uh=/[#\?@]/g,Bu=/#/g;function ri(d,y){this.h=this.g=null,this.i=d||null,this.j=!!y}function fn(d){d.g||(d.g=new Map,d.h=0,d.i&&xm(d.i,function(y,E){d.add(decodeURIComponent(y.replace(/\+/g," ")),E)}))}n=ri.prototype,n.add=function(d,y){fn(this),this.i=null,d=wr(this,d);var E=this.g.get(d);return E||this.g.set(d,E=[]),E.push(y),this.h+=1,this};function jr(d,y){fn(d),y=wr(d,y),d.g.has(y)&&(d.i=null,d.h-=d.g.get(y).length,d.g.delete(y))}function zr(d,y){return fn(d),y=wr(d,y),d.g.has(y)}n.forEach=function(d,y){fn(this),this.g.forEach(function(E,O){E.forEach(function(K){d.call(y,K,O,this)},this)},this)},n.na=function(){fn(this);const d=Array.from(this.g.values()),y=Array.from(this.g.keys()),E=[];for(let O=0;O<y.length;O++){const K=d[O];for(let ie=0;ie<K.length;ie++)E.push(y[O])}return E},n.V=function(d){fn(this);let y=[];if(typeof d=="string")zr(this,d)&&(y=y.concat(this.g.get(wr(this,d))));else{d=Array.from(this.g.values());for(let E=0;E<d.length;E++)y=y.concat(d[E])}return y},n.set=function(d,y){return fn(this),this.i=null,d=wr(this,d),zr(this,d)&&(this.h-=this.g.get(d).length),this.g.set(d,[y]),this.h+=1,this},n.get=function(d,y){return d?(d=this.V(d),0<d.length?String(d[0]):y):y};function Is(d,y,E){jr(d,y),0<E.length&&(d.i=null,d.g.set(wr(d,y),N(E)),d.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const d=[],y=Array.from(this.g.keys());for(var E=0;E<y.length;E++){var O=y[E];const ie=encodeURIComponent(String(O)),we=this.V(O);for(O=0;O<we.length;O++){var K=ie;we[O]!==""&&(K+="="+encodeURIComponent(String(we[O]))),d.push(K)}}return this.i=d.join("&")};function wr(d,y){return y=String(y),d.j&&(y=y.toLowerCase()),y}function ii(d,y){y&&!d.j&&(fn(d),d.i=null,d.g.forEach(function(E,O){var K=O.toLowerCase();O!=K&&(jr(this,O),Is(this,K,E))},d)),d.j=y}function Om(d,y){const E=new wo;if(c.Image){const O=new Image;O.onload=x(Bn,E,"TestLoadImage: loaded",!0,y,O),O.onerror=x(Bn,E,"TestLoadImage: error",!1,y,O),O.onabort=x(Bn,E,"TestLoadImage: abort",!1,y,O),O.ontimeout=x(Bn,E,"TestLoadImage: timeout",!1,y,O),c.setTimeout(function(){O.ontimeout&&O.ontimeout()},1e4),O.src=d}else y(!1)}function ch(d,y){const E=new wo,O=new AbortController,K=setTimeout(()=>{O.abort(),Bn(E,"TestPingServer: timeout",!1,y)},1e4);fetch(d,{signal:O.signal}).then(ie=>{clearTimeout(K),ie.ok?Bn(E,"TestPingServer: ok",!0,y):Bn(E,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(K),Bn(E,"TestPingServer: error",!1,y)})}function Bn(d,y,E,O,K){try{K&&(K.onload=null,K.onerror=null,K.onabort=null,K.ontimeout=null),O(E)}catch{}}function Dm(){this.g=new Du}function dh(d,y,E){const O=E||"";try{ys(d,function(K,ie){let we=K;p(K)&&(we=xu(K)),y.push(O+ie+"="+encodeURIComponent(we))})}catch(K){throw y.push(O+"type="+encodeURIComponent("_badmap")),K}}function Li(d){this.l=d.Ub||null,this.j=d.eb||!1}L(Li,_o),Li.prototype.g=function(){return new Po(this.l,this.j)},Li.prototype.i=function(d){return function(){return d}}({});function Po(d,y){Bt.call(this),this.D=d,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(Po,Bt),n=Po.prototype,n.open=function(d,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=d,this.A=y,this.readyState=1,$r(this)},n.send=function(d){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};d&&(y.body=d),(this.D||c).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Br(this)),this.readyState=0},n.Sa=function(d){if(this.g&&(this.l=d,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=d.headers,this.readyState=2,$r(this)),this.g&&(this.readyState=3,$r(this),this.g)))if(this.responseType==="arraybuffer")d.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in d){if(this.j=d.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hh(this)}else d.text().then(this.Ra.bind(this),this.ga.bind(this))};function hh(d){d.j.read().then(d.Pa.bind(d)).catch(d.ga.bind(d))}n.Pa=function(d){if(this.g){if(this.o&&d.value)this.response.push(d.value);else if(!this.o){var y=d.value?d.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!d.done}))&&(this.response=this.responseText+=y)}d.done?Br(this):$r(this),this.readyState==3&&hh(this)}},n.Ra=function(d){this.g&&(this.response=this.responseText=d,Br(this))},n.Qa=function(d){this.g&&(this.response=d,Br(this))},n.ga=function(){this.g&&Br(this)};function Br(d){d.readyState=4,d.l=null,d.j=null,d.v=null,$r(d)}n.setRequestHeader=function(d,y){this.u.append(d,y)},n.getResponseHeader=function(d){return this.h&&this.h.get(d.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const d=[],y=this.h.entries();for(var E=y.next();!E.done;)E=E.value,d.push(E[0]+": "+E[1]),E=y.next();return d.join(`\r
`)};function $r(d){d.onreadystatechange&&d.onreadystatechange.call(d)}Object.defineProperty(Po.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(d){this.m=d?"include":"same-origin"}});function Vi(d){let y="";return F(d,function(E,O){y+=O,y+=":",y+=E,y+=`\r
`}),y}function Ts(d,y,E){e:{for(O in E){var O=!1;break e}O=!0}O||(E=Vi(E),typeof d=="string"?E!=null&&encodeURIComponent(String(E)):dt(d,y,E))}function Tt(d){Bt.call(this),this.headers=new Map,this.o=d||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(Tt,Bt);var Nm=/^https?$/i,$u=["POST","PUT"];n=Tt.prototype,n.Ha=function(d){this.J=d},n.ea=function(d,y,E,O){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+d);y=y?y.toUpperCase():"GET",this.D=d,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fr.g(),this.v=this.o?Da(this.o):Da(Fr),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(y,String(d),!0),this.B=!1}catch(ie){Ao(this,ie);return}if(d=E||"",E=new Map(this.headers),O)if(Object.getPrototypeOf(O)===Object.prototype)for(var K in O)E.set(K,O[K]);else if(typeof O.keys=="function"&&typeof O.get=="function")for(const ie of O.keys())E.set(ie,O.get(ie));else throw Error("Unknown input type for opt_headers: "+String(O));O=Array.from(E.keys()).find(ie=>ie.toLowerCase()=="content-type"),K=c.FormData&&d instanceof c.FormData,!(0<=Array.prototype.indexOf.call($u,y,void 0))||O||K||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[ie,we]of E)this.g.setRequestHeader(ie,we);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wa(this),this.u=!0,this.g.send(d),this.u=!1}catch(ie){Ao(this,ie)}};function Ao(d,y){d.h=!1,d.g&&(d.j=!0,d.g.abort(),d.j=!1),d.l=y,d.m=5,qa(d),sr(d)}function qa(d){d.A||(d.A=!0,lt(d,"complete"),lt(d,"error"))}n.abort=function(d){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=d||7,lt(this,"complete"),lt(this,"abort"),sr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sr(this,!0)),Tt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?qu(this):this.bb())},n.bb=function(){qu(this)};function qu(d){if(d.h&&typeof l<"u"&&(!d.v[1]||$n(d)!=4||d.Z()!=2)){if(d.u&&$n(d)==4)Au(d.Ea,0,d);else if(lt(d,"readystatechange"),$n(d)==4){d.h=!1;try{const we=d.Z();e:switch(we){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var E;if(!(E=y)){var O;if(O=we===0){var K=String(d.D).match(bo)[1]||null;!K&&c.self&&c.self.location&&(K=c.self.location.protocol.slice(0,-1)),O=!Nm.test(K?K.toLowerCase():"")}E=O}if(E)lt(d,"complete"),lt(d,"success");else{d.m=6;try{var ie=2<$n(d)?d.g.statusText:""}catch{ie=""}d.l=ie+" ["+d.Z()+"]",qa(d)}}finally{sr(d)}}}}function sr(d,y){if(d.g){Wa(d);const E=d.g,O=d.v[0]?()=>{}:null;d.g=null,d.v=null,y||lt(d,"ready");try{E.onreadystatechange=O}catch{}}}function Wa(d){d.I&&(c.clearTimeout(d.I),d.I=null)}n.isActive=function(){return!!this.g};function $n(d){return d.g?d.g.readyState:0}n.Z=function(){try{return 2<$n(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(d){if(this.g){var y=this.g.responseText;return d&&y.indexOf(d)==0&&(y=y.substring(d.length)),Ou(y)}};function Wu(d){try{if(!d.g)return null;if("response"in d.g)return d.g.response;switch(d.H){case"":case"text":return d.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in d.g)return d.g.mozResponseArrayBuffer}return null}catch{return null}}function Ha(d){const y={};d=(d.g&&2<=$n(d)&&d.g.getAllResponseHeaders()||"").split(`\r
`);for(let O=0;O<d.length;O++){if(G(d[O]))continue;var E=D(d[O]);const K=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const ie=y[K]||[];y[K]=ie,ie.push(E)}R(y,function(O){return O.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function si(d,y,E){return E&&E.internalChannelParams&&E.internalChannelParams[d]||y}function Hu(d){this.Aa=0,this.i=[],this.j=new wo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=si("failFast",!1,d),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=si("baseRetryDelayMs",5e3,d),this.cb=si("retryDelaySeedMs",1e4,d),this.Wa=si("forwardChannelMaxRetries",2,d),this.wa=si("forwardChannelRequestTimeoutMs",2e4,d),this.pa=d&&d.xmlHttpFactory||void 0,this.Xa=d&&d.Tb||void 0,this.Ca=d&&d.useFetchStreams||!1,this.L=void 0,this.J=d&&d.supportsCrossDomainXhr||!1,this.K="",this.h=new So(d&&d.concurrentRequestLimit),this.Da=new Dm,this.P=d&&d.fastHandshake||!1,this.O=d&&d.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=d&&d.Rb||!1,d&&d.xa&&this.j.xa(),d&&d.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&d&&d.detectBufferingProxy||!1,this.ja=void 0,d&&d.longPollingTimeout&&0<d.longPollingTimeout&&(this.ja=d.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Hu.prototype,n.la=8,n.G=1,n.connect=function(d,y,E,O){$t(0),this.W=d,this.H=y||{},E&&O!==void 0&&(this.H.OSID=E,this.H.OAID=O),this.F=this.X,this.I=gh(this,null,this.W),oi(this)};function pn(d){if(Ga(d),d.G==3){var y=d.U++,E=ir(d.I);if(dt(E,"SID",d.K),dt(E,"RID",y),dt(E,"TYPE","terminate"),Mi(d,E),y=new Ur(d,d.j,y),y.L=2,y.v=ws(ir(E)),E=!1,c.navigator&&c.navigator.sendBeacon)try{E=c.navigator.sendBeacon(y.v.toString(),"")}catch{}!E&&c.Image&&(new Image().src=y.v,E=!0),E||(y.g=yh(y.j,null),y.g.ea(y.v)),y.F=Date.now(),ht(y)}mh(d)}function qr(d){d.g&&(Gu(d),d.g.cancel(),d.g=null)}function Ga(d){qr(d),d.u&&(c.clearTimeout(d.u),d.u=null),Ya(d),d.h.cancel(),d.s&&(typeof d.s=="number"&&c.clearTimeout(d.s),d.s=null)}function oi(d){if(!rr(d.h)&&!d.s){d.s=!0;var y=d.Ga;S||I(),le||(S(),le=!0),B.add(y,d),d.B=0}}function Lm(d,y){return rh(d.h)>=d.h.j-(d.s?1:0)?!1:d.s?(d.i=y.D.concat(d.i),!0):d.G==1||d.G==2||d.B>=(d.Va?0:d.Wa)?!1:(d.s=Vr(T(d.Ga,d,y),ph(d,d.B)),d.B++,!0)}n.Ga=function(d){if(this.s)if(this.s=null,this.G==1){if(!d){this.U=Math.floor(1e5*Math.random()),d=this.U++;const K=new Ur(this,this.j,d);let ie=this.o;if(this.S&&(ie?(ie=C(ie),w(ie,this.S)):ie=this.S),this.m!==null||this.O||(K.H=ie,ie=null),this.P)e:{for(var y=0,E=0;E<this.i.length;E++){t:{var O=this.i[E];if("__data__"in O.map&&(O=O.map.__data__,typeof O=="string")){O=O.length;break t}O=void 0}if(O===void 0)break;if(y+=O,4096<y){y=E;break e}if(y===4096||E===this.i.length-1){y=E+1;break e}}y=1e3}else y=1e3;y=Ss(this,K,y),E=ir(this.I),dt(E,"RID",d),dt(E,"CVER",22),this.D&&dt(E,"X-HTTP-Session-Id",this.D),Mi(this,E),ie&&(this.O?y="headers="+encodeURIComponent(String(Vi(ie)))+"&"+y:this.m&&Ts(E,this.m,ie)),zu(this.h,K),this.Ua&&dt(E,"TYPE","init"),this.P?(dt(E,"$req",y),dt(E,"SID","null"),K.T=!0,ja(K,E,null)):ja(K,E,y),this.G=2}}else this.G==3&&(d?Ka(this,d):this.i.length==0||rr(this.h)||Ka(this))};function Ka(d,y){var E;y?E=y.l:E=d.U++;const O=ir(d.I);dt(O,"SID",d.K),dt(O,"RID",E),dt(O,"AID",d.T),Mi(d,O),d.m&&d.o&&Ts(O,d.m,d.o),E=new Ur(d,d.j,E,d.B+1),d.m===null&&(E.H=d.o),y&&(d.i=y.D.concat(d.i)),y=Ss(d,E,1e3),E.I=Math.round(.5*d.wa)+Math.round(.5*d.wa*Math.random()),zu(d.h,E),ja(E,O,y)}function Mi(d,y){d.H&&F(d.H,function(E,O){dt(y,O,E)}),d.l&&ys({},function(E,O){dt(y,O,E)})}function Ss(d,y,E){E=Math.min(d.i.length,E);var O=d.l?T(d.l.Na,d.l,d):null;e:{var K=d.i;let ie=-1;for(;;){const we=["count="+E];ie==-1?0<E?(ie=K[0].g,we.push("ofs="+ie)):ie=0:we.push("ofs="+ie);let ot=!0;for(let Zt=0;Zt<E;Zt++){let et=K[Zt].g;const sn=K[Zt].map;if(et-=ie,0>et)ie=Math.max(0,K[Zt].g-100),ot=!1;else try{dh(sn,we,"req"+et+"_")}catch{O&&O(sn)}}if(ot){O=we.join("&");break e}}}return d=d.i.splice(0,E),y.D=d,O}function ko(d){if(!d.g&&!d.u){d.Y=1;var y=d.Fa;S||I(),le||(S(),le=!0),B.add(y,d),d.v=0}}function Qa(d){return d.g||d.u||3<=d.v?!1:(d.Y++,d.u=Vr(T(d.Fa,d),ph(d,d.v)),d.v++,!0)}n.Fa=function(){if(this.u=null,fh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var d=2*this.R;this.j.info("BP detection timer enabled: "+d),this.A=Vr(T(this.ab,this),d)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$t(10),qr(this),fh(this))};function Gu(d){d.A!=null&&(c.clearTimeout(d.A),d.A=null)}function fh(d){d.g=new Ur(d,d.j,"rpc",d.Y),d.m===null&&(d.g.H=d.o),d.g.O=0;var y=ir(d.qa);dt(y,"RID","rpc"),dt(y,"SID",d.K),dt(y,"AID",d.T),dt(y,"CI",d.F?"0":"1"),!d.F&&d.ja&&dt(y,"TO",d.ja),dt(y,"TYPE","xmlhttp"),Mi(d,y),d.m&&d.o&&Ts(y,d.m,d.o),d.L&&(d.g.I=d.L);var E=d.g;d=d.ia,E.L=1,E.v=ws(ir(y)),E.m=null,E.P=!0,Uu(E,d)}n.Za=function(){this.C!=null&&(this.C=null,qr(this),Qa(this),$t(19))};function Ya(d){d.C!=null&&(c.clearTimeout(d.C),d.C=null)}function Xa(d,y){var E=null;if(d.g==y){Ya(d),Gu(d),d.g=null;var O=2}else if(xn(d.h,y))E=y.D,ih(d.h,y),O=1;else return;if(d.G!=0){if(y.o)if(O==1){E=y.m?y.m.length:0,y=Date.now()-y.F;var K=d.B;O=vo(),lt(O,new Va(O,E)),oi(d)}else ko(d);else if(K=y.s,K==3||K==0&&0<y.X||!(O==1&&Lm(d,y)||O==2&&Qa(d)))switch(E&&0<E.length&&(y=d.h,y.i=y.i.concat(E)),K){case 1:Fi(d,5);break;case 4:Fi(d,10);break;case 3:Fi(d,6);break;default:Fi(d,2)}}}function ph(d,y){let E=d.Ta+Math.floor(Math.random()*d.cb);return d.isActive()||(E*=2),E*y}function Fi(d,y){if(d.j.info("Error code "+y),y==2){var E=T(d.fb,d),O=d.Xa;const K=!O;O=new Ni(O||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ro(O,"https"),ws(O),K?Om(O.toString(),E):ch(O.toString(),E)}else $t(2);d.G=0,d.l&&d.l.sa(y),mh(d),Ga(d)}n.fb=function(d){d?(this.j.info("Successfully pinged google.com"),$t(2)):(this.j.info("Failed to ping google.com"),$t(1))};function mh(d){if(d.G=0,d.ka=[],d.l){const y=sh(d.h);(y.length!=0||d.i.length!=0)&&(U(d.ka,y),U(d.ka,d.i),d.h.i.length=0,N(d.i),d.i.length=0),d.l.ra()}}function gh(d,y,E){var O=E instanceof Ni?ir(E):new Ni(E);if(O.g!="")y&&(O.g=y+"."+O.g),_s(O,O.s);else{var K=c.location;O=K.protocol,y=y?y+"."+K.hostname:K.hostname,K=+K.port;var ie=new Ni(null);O&&Ro(ie,O),y&&(ie.g=y),K&&_s(ie,K),E&&(ie.l=E),O=ie}return E=d.D,y=d.ya,E&&y&&dt(O,E,y),dt(O,"VER",d.la),Mi(d,O),O}function yh(d,y,E){if(y&&!d.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=d.Ca&&!d.pa?new Tt(new Li({eb:E})):new Tt(d.pa),y.Ha(d.J),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ku(){}n=Ku.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ja(){}Ja.prototype.g=function(d,y){return new On(d,y)};function On(d,y){Bt.call(this),this.g=new Hu(y),this.l=d,this.h=y&&y.messageUrlParams||null,d=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(d?d["X-Client-Protocol"]="webchannel":d={"X-Client-Protocol":"webchannel"}),this.g.o=d,d=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(d?d["X-WebChannel-Content-Type"]=y.messageContentType:d={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(d?d["X-WebChannel-Client-Profile"]=y.va:d={"X-WebChannel-Client-Profile":y.va}),this.g.S=d,(d=y&&y.Sb)&&!G(d)&&(this.g.m=d),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!G(y)&&(this.g.D=y,d=this.h,d!==null&&y in d&&(d=this.h,y in d&&delete d[y])),this.j=new ai(this)}L(On,Bt),On.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},On.prototype.close=function(){pn(this.g)},On.prototype.o=function(d){var y=this.g;if(typeof d=="string"){var E={};E.__data__=d,d=E}else this.u&&(E={},E.__data__=xu(d),d=E);y.i.push(new nh(y.Ya++,d)),y.G==3&&oi(y)},On.prototype.N=function(){this.g.l=null,delete this.j,pn(this.g),delete this.g,On.aa.N.call(this)};function _h(d){ti.call(this),d.__headers__&&(this.headers=d.__headers__,this.statusCode=d.__status__,delete d.__headers__,delete d.__status__);var y=d.__sm__;if(y){e:{for(const E in y){d=E;break e}d=void 0}(this.i=d)&&(d=this.i,y=y!==null&&d in y?y[d]:void 0),this.data=y}else this.data=d}L(_h,ti);function vh(){La.call(this),this.status=1}L(vh,La);function ai(d){this.g=d}L(ai,Ku),ai.prototype.ua=function(){lt(this.g,"a")},ai.prototype.ta=function(d){lt(this.g,new _h(d))},ai.prototype.sa=function(d){lt(this.g,new vh)},ai.prototype.ra=function(){lt(this.g,"b")},Ja.prototype.createWebChannel=Ja.prototype.g,On.prototype.send=On.prototype.o,On.prototype.open=On.prototype.m,On.prototype.close=On.prototype.close,k1=function(){return new Ja},A1=function(){return vo()},P1=ni,g_={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fa.NO_ERROR=0,Fa.TIMEOUT=8,Fa.HTTP_ERROR=6,Bf=Fa,Jd.COMPLETE="complete",R1=Jd,Na.EventType=_r,_r.OPEN="a",_r.CLOSE="b",_r.ERROR="c",_r.MESSAGE="d",Bt.prototype.listen=Bt.prototype.K,Fc=Na,Tt.prototype.listenOnce=Tt.prototype.L,Tt.prototype.getLastError=Tt.prototype.Ka,Tt.prototype.getLastErrorCode=Tt.prototype.Ba,Tt.prototype.getStatus=Tt.prototype.Z,Tt.prototype.getResponseJson=Tt.prototype.Oa,Tt.prototype.getResponseText=Tt.prototype.oa,Tt.prototype.send=Tt.prototype.ea,Tt.prototype.setWithCredentials=Tt.prototype.Ha,b1=Tt}).apply(typeof vf<"u"?vf:typeof self<"u"?self:typeof window<"u"?window:{});const hT="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dn.UNAUTHENTICATED=new dn(null),dn.GOOGLE_CREDENTIALS=new dn("google-credentials-uid"),dn.FIRST_PARTY=new dn("first-party-uid"),dn.MOCK_USER=new dn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vu="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=new Fp("@firebase/firestore");function Pl(){return to.logLevel}function V2(n){to.setLogLevel(n)}function fe(n,...e){if(to.logLevel<=Ye.DEBUG){const t=e.map(Nv);to.debug(`Firestore (${vu}): ${n}`,...t)}}function Wt(n,...e){if(to.logLevel<=Ye.ERROR){const t=e.map(Nv);to.error(`Firestore (${vu}): ${n}`,...t)}}function Ri(n,...e){if(to.logLevel<=Ye.WARN){const t=e.map(Nv);to.warn(`Firestore (${vu}): ${n}`,...t)}}function Nv(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(n="Unexpected state"){const e=`FIRESTORE (${vu}) INTERNAL ASSERTION FAILED: `+n;throw Wt(e),new Error(e)}function xe(n,e){n||Pe()}function M2(n,e){n||Pe()}function Ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends An{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class F2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(dn.UNAUTHENTICATED))}shutdown(){}}class U2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class j2{constructor(e){this.t=e,this.currentUser=dn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){xe(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new wn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new wn,e.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new wn)}},0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string"),new C1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new dn(e)}}class z2{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=dn.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class B2{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new z2(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(dn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class q2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){xe(this.o===void 0);const r=o=>{o.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,fe("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(xe(typeof t.token=="string"),this.R=t.token,new $2(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=W2(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%e.length))}return r}}function Be(n,e){return n<e?-1:n>e?1:0}function Yl(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function O1(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new de(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new de(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new de(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return At.fromMillis(Date.now())}static fromDate(e){return At.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new At(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Be(this.nanoseconds,e.nanoseconds):Be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ne(e)}static min(){return new Ne(new At(0,0))}static max(){return new Ne(new At(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,t,r){t===void 0?t=0:t>e.length&&Pe(),r===void 0?r=e.length-t:r>e.length-t&&Pe(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return dd.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof dd?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=e.get(i),l=t.get(i);if(o<l)return-1;if(o>l)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Xe extends dd{construct(e,t,r){return new Xe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new de(ne.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Xe(t)}static emptyPath(){return new Xe([])}}const H2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends dd{construct(e,t,r){return new Rt(e,t,r)}static isValidIdentifier(e){return H2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Rt(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new de(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let l=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new de(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new de(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else c==="`"?(l=!l,i++):c!=="."||l?(r+=c,i++):(o(),i++)}if(o(),l)throw new de(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(t)}static emptyPath(){return new Rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(Xe.fromString(e))}static fromName(e){return new Ee(Xe.fromString(e).popFirst(5))}static empty(){return new Ee(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new Xe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function y_(n){return n.fields.find(e=>e.kind===2)}function Ho(n){return n.fields.filter(e=>e.kind!==2)}up.UNKNOWN_ID=-1;class $f{constructor(e,t){this.fieldPath=e,this.kind=t}}class hd{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new hd(0,mr.min())}}function D1(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Ne.fromTimestamp(r===1e9?new At(t+1,0):new At(t,r));return new mr(i,Ee.empty(),e)}function N1(n){return new mr(n.readTime,n.key,-1)}class mr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new mr(Ne.min(),Ee.empty(),-1)}static max(){return new mr(Ne.max(),Ee.empty(),-1)}}function Lv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ee.comparator(n.documentKey,e.documentKey),t!==0?t:Be(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class V1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(n){if(n.code!==ne.FAILED_PRECONDITION||n.message!==L1)throw n;fe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new J((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof J?t:J.resolve(t)}catch(t){return J.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):J.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):J.reject(t)}static resolve(e){return new J((t,r)=>{t(e)})}static reject(e){return new J((t,r)=>{r(e)})}static waitFor(e){return new J((t,r)=>{let i=0,o=0,l=!1;e.forEach(c=>{++i,c.next(()=>{++o,l&&o===i&&t()},h=>r(h))}),l=!0,o===i&&t()})}static or(e){let t=J.resolve(!1);for(const r of e)t=t.next(i=>i?J.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new J((r,i)=>{const o=e.length,l=new Array(o);let c=0;for(let h=0;h<o;h++){const p=h;t(e[p]).next(g=>{l[p]=g,++c,c===o&&r(l)},g=>i(g))}})}static doWhile(e,t){return new J((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new wn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Gc(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Vv(r.target.error);this.V.reject(new Gc(e,i))}}static open(e,t,r,i){try{return new Yp(t,e.transaction(i,r))}catch(o){throw new Gc(t,o)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(fe("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new K2(t)}}class Ei{constructor(e,t,r){this.name=e,this.version=t,this.p=r,Ei.S(Nt())===12.2&&Wt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return fe("SimpleDb","Removing database:",e),Ko(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!nd())return!1;if(Ei.v())return!0;const e=Nt(),t=Ei.S(e),r=0<t&&t<10,i=M1(e),o=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||o)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(fe("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=o=>{const l=o.target.result;t(l)},i.onblocked=()=>{r(new Gc(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=o=>{const l=o.target.error;l.name==="VersionError"?r(new de(ne.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):l.name==="InvalidStateError"?r(new de(ne.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+l)):r(new Gc(e,l))},i.onupgradeneeded=o=>{fe("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const l=o.target.result;this.p.O(l,i.transaction,o.oldVersion,this.version).next(()=>{fe("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const o=t==="readonly";let l=0;for(;;){++l;try{this.db=await this.M(e);const c=Yp.open(this.db,e,o?"readonly":"readwrite",r),h=i(c).next(p=>(c.g(),p)).catch(p=>(c.abort(p),J.reject(p))).toPromise();return h.catch(()=>{}),await c.m,h}catch(c){const h=c,p=h.name!=="FirebaseError"&&l<3;if(fe("SimpleDb","Transaction failed with error:",h.message,"Retrying:",p),this.close(),!p)return Promise.reject(h)}}}close(){this.db&&this.db.close(),this.db=void 0}}function M1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class G2{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Ko(this.B.delete())}}class Gc extends de{constructor(e,t){super(ne.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ho(n){return n.name==="IndexedDbTransactionError"}class K2{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(fe("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(fe("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ko(r)}add(e){return fe("SimpleDb","ADD",this.store.name,e,e),Ko(this.store.add(e))}get(e){return Ko(this.store.get(e)).next(t=>(t===void 0&&(t=null),fe("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return fe("SimpleDb","DELETE",this.store.name,e),Ko(this.store.delete(e))}count(){return fe("SimpleDb","COUNT",this.store.name),Ko(this.store.count())}U(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const o=i.getAll(r.range);return new J((l,c)=>{o.onerror=h=>{c(h.target.error)},o.onsuccess=h=>{l(h.target.result)}})}{const o=this.cursor(r),l=[];return this.W(o,(c,h)=>{l.push(h)}).next(()=>l)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new J((i,o)=>{r.onerror=l=>{o(l.target.error)},r.onsuccess=l=>{i(l.target.result)}})}j(e,t){fe("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const i=this.cursor(r);return this.W(i,(o,l,c)=>c.delete())}J(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Y(e){const t=this.cursor({});return new J((r,i)=>{t.onerror=o=>{const l=Vv(o.target.error);i(l)},t.onsuccess=o=>{const l=o.target.result;l?e(l.primaryKey,l.value).next(c=>{c?l.continue():r()}):r()}})}W(e,t){const r=[];return new J((i,o)=>{e.onerror=l=>{o(l.target.error)},e.onsuccess=l=>{const c=l.target.result;if(!c)return void i();const h=new G2(c),p=t(c.primaryKey,c.value,h);if(p instanceof J){const g=p.catch(v=>(h.done(),J.reject(v)));r.push(g)}h.isDone?i():h.K===null?c.continue():c.continue(h.K)}}).next(()=>J.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ko(n){return new J((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Vv(r.target.error);t(i)}})}let fT=!1;function Vv(n){const e=Ei.S(Nt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new de("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return fT||(fT=!0,setTimeout(()=>{throw r},0)),r}}return n}class Q2{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){fe("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{fe("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){ho(t)?fe("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await co(t)}await this.X(6e4)})}}class Y2{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let i=t,o=!0;return J.doWhile(()=>o===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(l=>{if(l!==null&&!r.has(l))return fe("IndexBackfiller",`Processing collection: ${l}`),this.ne(e,l,i).next(c=>{i-=c,r.add(l)});o=!1})).next(()=>t-i)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(o=>{const l=o.changes;return this.localStore.indexManager.updateIndexEntries(e,l).next(()=>this.re(i,o)).next(c=>(fe("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>l.size)}))}re(e,t){let r=e;return t.changes.forEach((i,o)=>{const l=N1(o);Lv(l,r)>0&&(r=l)}),new mr(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Zn.oe=-1;function Fd(n){return n==null}function fd(n){return n===0&&1/n==-1/0}function F1(n){return typeof n=="number"&&Number.isInteger(n)&&!fd(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=pT(e)),e=X2(n.get(t),e);return pT(e)}function X2(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case"":t+="";break;default:t+=o}}return t}function pT(n){return n+""}function vi(n){const e=n.length;if(xe(e>=2),e===2)return xe(n.charAt(0)===""&&n.charAt(1)===""),Xe.emptyPath();const t=e-2,r=[];let i="";for(let o=0;o<e;){const l=n.indexOf("",o);switch((l<0||l>t)&&Pe(),n.charAt(l+1)){case"":const c=n.substring(o,l);let h;i.length===0?h=c:(i+=c,h=i,i=""),r.push(h);break;case"":i+=n.substring(o,l),i+="\0";break;case"":i+=n.substring(o,l+1);break;default:Pe()}o=l+2}return new Xe(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(n,e){return[n,Un(e)]}function U1(n,e,t){return[n,Un(e),t]}const J2={},Z2=["prefixPath","collectionGroup","readTime","documentId"],eU=["prefixPath","collectionGroup","documentId"],tU=["collectionGroup","readTime","prefixPath","documentId"],nU=["canonicalId","targetId"],rU=["targetId","path"],iU=["path","targetId"],sU=["collectionId","parent"],oU=["indexId","uid"],aU=["uid","sequenceNumber"],lU=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],uU=["indexId","uid","orderedDocumentKey"],cU=["userId","collectionPath","documentId"],dU=["userId","collectionPath","largestBatchId"],hU=["userId","collectionGroup","largestBatchId"],j1=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],fU=[...j1,"documentOverlays"],z1=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],B1=z1,Mv=[...B1,"indexConfiguration","indexState","indexEntries"],pU=Mv,mU=[...Mv,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __ extends V1{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function rn(n,e){const t=Ie(n);return Ei.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Aa(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t){this.comparator=e,this.root=t||_n.EMPTY}insert(e,t){return new pt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_n.BLACK,null,null))}remove(e){return new pt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_n.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wf(this.root,e,this.comparator,!1)}getReverseIterator(){return new wf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wf(this.root,e,this.comparator,!0)}}class wf{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _n{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??_n.RED,this.left=i??_n.EMPTY,this.right=o??_n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new _n(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return _n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Pe();const e=this.left.check();if(e!==this.right.check())throw Pe();return e+(this.isRed()?0:1)}}_n.EMPTY=null,_n.RED=!0,_n.BLACK=!1;_n.EMPTY=new class{constructor(){this.size=0}get key(){throw Pe()}get value(){throw Pe()}get color(){throw Pe()}get left(){throw Pe()}get right(){throw Pe()}copy(e,t,r,i,o){return this}insert(e,t,r){return new _n(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new yT(this.data.getIterator())}getIteratorFrom(e){return new yT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ut(this.comparator);return t.data=e,t}}class yT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Il(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new er([])}unionWith(e){let t=new ut(Rt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new er(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Yl(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gU(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new q1("Invalid base64 string: "+o):o}}(e);return new Ut(t)}static fromUint8Array(e){const t=function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o}(e);return new Ut(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ut.EMPTY_BYTE_STRING=new Ut("");const yU=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ss(n){if(xe(!!n),typeof n=="string"){let e=0;const t=yU.exec(n);if(xe(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:bt(n.seconds),nanos:bt(n.nanos)}}function bt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function no(n){return typeof n=="string"?Ut.fromBase64String(n):Ut.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Fv(n){const e=n.mapValue.fields.__previous_value__;return Xp(e)?Fv(e):e}function pd(n){const e=ss(n.mapValue.fields.__local_write_time__.timestampValue);return new At(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _U{constructor(e,t,r,i,o,l,c,h,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=p}}class ro{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ro("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ro&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Wf={nullValue:"NULL_VALUE"};function fa(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Xp(n)?4:W1(n)?9007199254740991:Jp(n)?10:11:Pe()}function Pi(n,e){if(n===e)return!0;const t=fa(n);if(t!==fa(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return pd(n).isEqual(pd(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=ss(i.timestampValue),c=ss(o.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return no(i.bytesValue).isEqual(no(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return bt(i.geoPointValue.latitude)===bt(o.geoPointValue.latitude)&&bt(i.geoPointValue.longitude)===bt(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return bt(i.integerValue)===bt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=bt(i.doubleValue),c=bt(o.doubleValue);return l===c?fd(l)===fd(c):isNaN(l)&&isNaN(c)}return!1}(n,e);case 9:return Yl(n.arrayValue.values||[],e.arrayValue.values||[],Pi);case 10:case 11:return function(i,o){const l=i.mapValue.fields||{},c=o.mapValue.fields||{};if(gT(l)!==gT(c))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(c[h]===void 0||!Pi(l[h],c[h])))return!1;return!0}(n,e);default:return Pe()}}function md(n,e){return(n.values||[]).find(t=>Pi(t,e))!==void 0}function io(n,e){if(n===e)return 0;const t=fa(n),r=fa(e);if(t!==r)return Be(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Be(n.booleanValue,e.booleanValue);case 2:return function(o,l){const c=bt(o.integerValue||o.doubleValue),h=bt(l.integerValue||l.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,e);case 3:return _T(n.timestampValue,e.timestampValue);case 4:return _T(pd(n),pd(e));case 5:return Be(n.stringValue,e.stringValue);case 6:return function(o,l){const c=no(o),h=no(l);return c.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,l){const c=o.split("/"),h=l.split("/");for(let p=0;p<c.length&&p<h.length;p++){const g=Be(c[p],h[p]);if(g!==0)return g}return Be(c.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,l){const c=Be(bt(o.latitude),bt(l.latitude));return c!==0?c:Be(bt(o.longitude),bt(l.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return vT(n.arrayValue,e.arrayValue);case 10:return function(o,l){var c,h,p,g;const v=o.fields||{},T=l.fields||{},x=(c=v.value)===null||c===void 0?void 0:c.arrayValue,L=(h=T.value)===null||h===void 0?void 0:h.arrayValue,N=Be(((p=x==null?void 0:x.values)===null||p===void 0?void 0:p.length)||0,((g=L==null?void 0:L.values)===null||g===void 0?void 0:g.length)||0);return N!==0?N:vT(x,L)}(n.mapValue,e.mapValue);case 11:return function(o,l){if(o===Gs.mapValue&&l===Gs.mapValue)return 0;if(o===Gs.mapValue)return 1;if(l===Gs.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),p=l.fields||{},g=Object.keys(p);h.sort(),g.sort();for(let v=0;v<h.length&&v<g.length;++v){const T=Be(h[v],g[v]);if(T!==0)return T;const x=io(c[h[v]],p[g[v]]);if(x!==0)return x}return Be(h.length,g.length)}(n.mapValue,e.mapValue);default:throw Pe()}}function _T(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Be(n,e);const t=ss(n),r=ss(e),i=Be(t.seconds,r.seconds);return i!==0?i:Be(t.nanos,r.nanos)}function vT(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=io(t[i],r[i]);if(o)return o}return Be(t.length,r.length)}function Xl(n){return v_(n)}function v_(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=ss(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return no(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Ee.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=v_(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const l of r)o?o=!1:i+=",",i+=`${l}:${v_(t.fields[l])}`;return i+"}"}(n.mapValue):Pe()}function pa(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function w_(n){return!!n&&"integerValue"in n}function gd(n){return!!n&&"arrayValue"in n}function wT(n){return!!n&&"nullValue"in n}function ET(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Hf(n){return!!n&&"mapValue"in n}function Jp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Kc(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Aa(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Kc(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Kc(n.arrayValue.values[t]);return e}return Object.assign({},n)}function W1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const H1={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function vU(n){return"nullValue"in n?Wf:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?pa(ro.empty(),Ee.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Jp(n)?H1:{mapValue:{}}:Pe()}function wU(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?pa(ro.empty(),Ee.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?H1:"mapValue"in n?Jp(n)?{mapValue:{}}:Gs:Pe()}function IT(n,e){const t=io(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function TT(n,e){const t=io(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.value=e}static empty(){return new vn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Hf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kc(t)}setAll(e){let t=Rt.emptyPath(),r={},i=[];e.forEach((l,c)=>{if(!t.isImmediateParentOf(c)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=c.popLast()}l?r[c.lastSegment()]=Kc(l):i.push(c.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Hf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Pi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Hf(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Aa(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new vn(Kc(this.value))}}function G1(n){const e=[];return Aa(n.fields,(t,r)=>{const i=new Rt([t]);if(Hf(r)){const o=G1(r.mapValue).fields;if(o.length===0)e.push(i);else for(const l of o)e.push(i.child(l))}else e.push(i)}),new er(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t,r,i,o,l,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=l,this.documentState=c}static newInvalidDocument(e){return new Et(e,0,Ne.min(),Ne.min(),Ne.min(),vn.empty(),0)}static newFoundDocument(e,t,r,i){return new Et(e,1,t,Ne.min(),r,i,0)}static newNoDocument(e,t){return new Et(e,2,t,Ne.min(),Ne.min(),vn.empty(),0)}static newUnknownDocument(e,t){return new Et(e,3,t,Ne.min(),Ne.min(),vn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t){this.position=e,this.inclusive=t}}function ST(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],l=n.position[i];if(o.field.isKeyField()?r=Ee.comparator(Ee.fromName(l.referenceValue),t.key):r=io(l,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function bT(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Pi(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t="asc"){this.field=e,this.dir=t}}function EU(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{}class Je extends K1{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new IU(e,t,r):t==="array-contains"?new bU(e,r):t==="in"?new eP(e,r):t==="not-in"?new RU(e,r):t==="array-contains-any"?new PU(e,r):new Je(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new TU(e,r):new SU(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(io(t,this.value)):t!==null&&fa(this.value)===fa(t)&&this.matchesComparison(io(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class at extends K1{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new at(e,t)}matches(e){return Jl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Jl(n){return n.op==="and"}function E_(n){return n.op==="or"}function Uv(n){return Q1(n)&&Jl(n)}function Q1(n){for(const e of n.filters)if(e instanceof at)return!1;return!0}function I_(n){if(n instanceof Je)return n.field.canonicalString()+n.op.toString()+Xl(n.value);if(Uv(n))return n.filters.map(e=>I_(e)).join(",");{const e=n.filters.map(t=>I_(t)).join(",");return`${n.op}(${e})`}}function Y1(n,e){return n instanceof Je?function(r,i){return i instanceof Je&&r.op===i.op&&r.field.isEqual(i.field)&&Pi(r.value,i.value)}(n,e):n instanceof at?function(r,i){return i instanceof at&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,l,c)=>o&&Y1(l,i.filters[c]),!0):!1}(n,e):void Pe()}function X1(n,e){const t=n.filters.concat(e);return at.create(t,n.op)}function J1(n){return n instanceof Je?function(t){return`${t.field.canonicalString()} ${t.op} ${Xl(t.value)}`}(n):n instanceof at?function(t){return t.op.toString()+" {"+t.getFilters().map(J1).join(" ,")+"}"}(n):"Filter"}class IU extends Je{constructor(e,t,r){super(e,t,r),this.key=Ee.fromName(r.referenceValue)}matches(e){const t=Ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class TU extends Je{constructor(e,t){super(e,"in",t),this.keys=Z1("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class SU extends Je{constructor(e,t){super(e,"not-in",t),this.keys=Z1("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Z1(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Ee.fromName(r.referenceValue))}class bU extends Je{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return gd(t)&&md(t.arrayValue,this.value)}}class eP extends Je{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&md(this.value.arrayValue,t)}}class RU extends Je{constructor(e,t){super(e,"not-in",t)}matches(e){if(md(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!md(this.value.arrayValue,t)}}class PU extends Je{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!gd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>md(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AU{constructor(e,t=null,r=[],i=[],o=null,l=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=l,this.endAt=c,this.ue=null}}function T_(n,e=null,t=[],r=[],i=null,o=null,l=null){return new AU(n,e,t,r,i,o,l)}function ma(n){const e=Ie(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>I_(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Fd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Xl(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Xl(r)).join(",")),e.ue=t}return e.ue}function Ud(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!EU(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Y1(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!bT(n.startAt,e.startAt)&&bT(n.endAt,e.endAt)}function cp(n){return Ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function dp(n,e){return n.filters.filter(t=>t instanceof Je&&t.field.isEqual(e))}function RT(n,e,t){let r=Wf,i=!0;for(const o of dp(n,e)){let l=Wf,c=!0;switch(o.op){case"<":case"<=":l=vU(o.value);break;case"==":case"in":case">=":l=o.value;break;case">":l=o.value,c=!1;break;case"!=":case"not-in":l=Wf}IT({value:r,inclusive:i},{value:l,inclusive:c})<0&&(r=l,i=c)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const l=t.position[o];IT({value:r,inclusive:i},{value:l,inclusive:t.inclusive})<0&&(r=l,i=t.inclusive);break}}return{value:r,inclusive:i}}function PT(n,e,t){let r=Gs,i=!0;for(const o of dp(n,e)){let l=Gs,c=!0;switch(o.op){case">=":case">":l=wU(o.value),c=!1;break;case"==":case"in":case"<=":l=o.value;break;case"<":l=o.value,c=!1;break;case"!=":case"not-in":l=Gs}TT({value:r,inclusive:i},{value:l,inclusive:c})>0&&(r=l,i=c)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const l=t.position[o];TT({value:r,inclusive:i},{value:l,inclusive:t.inclusive})>0&&(r=l,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t=null,r=[],i=[],o=null,l="F",c=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=l,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function tP(n,e,t,r,i,o,l,c){return new ds(n,e,t,r,i,o,l,c)}function wu(n){return new ds(n)}function AT(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function jv(n){return n.collectionGroup!==null}function Fl(n){const e=Ie(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new ut(Rt.comparator);return l.filters.forEach(h=>{h.getFlattenedFilters().forEach(p=>{p.isInequality()&&(c=c.add(p.field))})}),c})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new yd(o,r))}),t.has(Rt.keyField().canonicalString())||e.ce.push(new yd(Rt.keyField(),r))}return e.ce}function jn(n){const e=Ie(n);return e.le||(e.le=kU(e,Fl(n))),e.le}function kU(n,e){if(n.limitType==="F")return T_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new yd(i.field,o)});const t=n.endAt?new so(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new so(n.startAt.position,n.startAt.inclusive):null;return T_(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function S_(n,e){const t=n.filters.concat([e]);return new ds(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function hp(n,e,t){return new ds(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function jd(n,e){return Ud(jn(n),jn(e))&&n.limitType===e.limitType}function nP(n){return`${ma(jn(n))}|lt:${n.limitType}`}function Al(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>J1(i)).join(", ")}]`),Fd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Xl(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Xl(i)).join(",")),`Target(${r})`}(jn(n))}; limitType=${n.limitType})`}function zd(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):Ee.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of Fl(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(l,c,h){const p=ST(l,c,h);return l.inclusive?p<=0:p<0}(r.startAt,Fl(r),i)||r.endAt&&!function(l,c,h){const p=ST(l,c,h);return l.inclusive?p>=0:p>0}(r.endAt,Fl(r),i))}(n,e)}function rP(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function iP(n){return(e,t)=>{let r=!1;for(const i of Fl(n)){const o=CU(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function CU(n,e,t){const r=n.field.isKeyField()?Ee.comparator(e.key,t.key):function(o,l,c){const h=l.data.field(o),p=c.data.field(o);return h!==null&&p!==null?io(h,p):Pe()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Pe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Aa(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return $1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xU=new pt(Ee.comparator);function tr(){return xU}const sP=new pt(Ee.comparator);function Uc(...n){let e=sP;for(const t of n)e=e.insert(t.key,t);return e}function oP(n){let e=sP;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function wi(){return Qc()}function aP(){return Qc()}function Qc(){return new fo(n=>n.toString(),(n,e)=>n.isEqual(e))}const OU=new pt(Ee.comparator),DU=new ut(Ee.comparator);function We(...n){let e=DU;for(const t of n)e=e.add(t);return e}const NU=new ut(Be);function zv(){return NU}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fd(e)?"-0":e}}function lP(n){return{integerValue:""+n}}function uP(n,e){return F1(e)?lP(e):Bv(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this._=void 0}}function LU(n,e,t){return n instanceof Zl?function(i,o){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Xp(o)&&(o=Fv(o)),o&&(l.fields.__previous_value__=o),{mapValue:l}}(t,e):n instanceof ga?dP(n,e):n instanceof ya?hP(n,e):function(i,o){const l=cP(i,o),c=kT(l)+kT(i.Pe);return w_(l)&&w_(i.Pe)?lP(c):Bv(i.serializer,c)}(n,e)}function VU(n,e,t){return n instanceof ga?dP(n,e):n instanceof ya?hP(n,e):t}function cP(n,e){return n instanceof eu?function(r){return w_(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Zl extends Zp{}class ga extends Zp{constructor(e){super(),this.elements=e}}function dP(n,e){const t=fP(e);for(const r of n.elements)t.some(i=>Pi(i,r))||t.push(r);return{arrayValue:{values:t}}}class ya extends Zp{constructor(e){super(),this.elements=e}}function hP(n,e){let t=fP(e);for(const r of n.elements)t=t.filter(i=>!Pi(i,r));return{arrayValue:{values:t}}}class eu extends Zp{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function kT(n){return bt(n.integerValue||n.doubleValue)}function fP(n){return gd(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,t){this.field=e,this.transform=t}}function MU(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof ga&&i instanceof ga||r instanceof ya&&i instanceof ya?Yl(r.elements,i.elements,Pi):r instanceof eu&&i instanceof eu?Pi(r.Pe,i.Pe):r instanceof Zl&&i instanceof Zl}(n.transform,e.transform)}class FU{constructor(e,t){this.version=e,this.transformResults=t}}class Pt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Pt}static exists(e){return new Pt(void 0,e)}static updateTime(e){return new Pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class em{}function pP(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Iu(n.key,Pt.none()):new Eu(n.key,n.data,Pt.none());{const t=n.data,r=vn.empty();let i=new ut(Rt.comparator);for(let o of e.fields)if(!i.has(o)){let l=t.field(o);l===null&&o.length>1&&(o=o.popLast(),l=t.field(o)),l===null?r.delete(o):r.set(o,l),i=i.add(o)}return new hs(n.key,r,new er(i.toArray()),Pt.none())}}function UU(n,e,t){n instanceof Eu?function(i,o,l){const c=i.value.clone(),h=xT(i.fieldTransforms,o,l.transformResults);c.setAll(h),o.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(n,e,t):n instanceof hs?function(i,o,l){if(!Gf(i.precondition,o))return void o.convertToUnknownDocument(l.version);const c=xT(i.fieldTransforms,o,l.transformResults),h=o.data;h.setAll(mP(i)),h.setAll(c),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,e,t)}function Yc(n,e,t,r){return n instanceof Eu?function(o,l,c,h){if(!Gf(o.precondition,l))return c;const p=o.value.clone(),g=OT(o.fieldTransforms,h,l);return p.setAll(g),l.convertToFoundDocument(l.version,p).setHasLocalMutations(),null}(n,e,t,r):n instanceof hs?function(o,l,c,h){if(!Gf(o.precondition,l))return c;const p=OT(o.fieldTransforms,h,l),g=l.data;return g.setAll(mP(o)),g.setAll(p),l.convertToFoundDocument(l.version,g).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(o,l,c){return Gf(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(n,e,t)}function jU(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=cP(r.transform,i||null);o!=null&&(t===null&&(t=vn.empty()),t.set(r.field,o))}return t||null}function CT(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Yl(r,i,(o,l)=>MU(o,l))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Eu extends em{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hs extends em{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function mP(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function xT(n,e,t){const r=new Map;xe(n.length===t.length);for(let i=0;i<t.length;i++){const o=n[i],l=o.transform,c=e.data.field(o.field);r.set(o.field,VU(l,c,t[i]))}return r}function OT(n,e,t){const r=new Map;for(const i of n){const o=i.transform,l=t.data.field(i.field);r.set(i.field,LU(o,l,e))}return r}class Iu extends em{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $v extends em{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&UU(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Yc(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Yc(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=aP();return this.mutations.forEach(i=>{const o=e.get(i.key),l=o.overlayedDocument;let c=this.applyToLocalView(l,o.mutatedFields);c=t.has(i.key)?null:c;const h=pP(l,c);h!==null&&r.set(i.key,h),l.isValidDocument()||l.convertToNoDocument(Ne.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),We())}isEqual(e){return this.batchId===e.batchId&&Yl(this.mutations,e.mutations,(t,r)=>CT(t,r))&&Yl(this.baseMutations,e.baseMutations,(t,r)=>CT(t,r))}}class Wv{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){xe(e.mutations.length===r.length);let i=function(){return OU}();const o=e.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,r[l].version);return new Wv(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zU{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yt,tt;function gP(n){switch(n){default:return Pe();case ne.CANCELLED:case ne.UNKNOWN:case ne.DEADLINE_EXCEEDED:case ne.RESOURCE_EXHAUSTED:case ne.INTERNAL:case ne.UNAVAILABLE:case ne.UNAUTHENTICATED:return!1;case ne.INVALID_ARGUMENT:case ne.NOT_FOUND:case ne.ALREADY_EXISTS:case ne.PERMISSION_DENIED:case ne.FAILED_PRECONDITION:case ne.ABORTED:case ne.OUT_OF_RANGE:case ne.UNIMPLEMENTED:case ne.DATA_LOSS:return!0}}function yP(n){if(n===void 0)return Wt("GRPC error has no .code"),ne.UNKNOWN;switch(n){case Yt.OK:return ne.OK;case Yt.CANCELLED:return ne.CANCELLED;case Yt.UNKNOWN:return ne.UNKNOWN;case Yt.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case Yt.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case Yt.INTERNAL:return ne.INTERNAL;case Yt.UNAVAILABLE:return ne.UNAVAILABLE;case Yt.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case Yt.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case Yt.NOT_FOUND:return ne.NOT_FOUND;case Yt.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case Yt.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case Yt.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case Yt.ABORTED:return ne.ABORTED;case Yt.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case Yt.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case Yt.DATA_LOSS:return ne.DATA_LOSS;default:return Pe()}}(tt=Yt||(Yt={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BU=new aa([4294967295,4294967295],0);function DT(n){const e=_P().encode(n),t=new S1;return t.update(e),new Uint8Array(t.digest())}function NT(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new aa([t,r],0),new aa([i,o],0)]}class Gv{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new jc(`Invalid padding: ${t}`);if(r<0)throw new jc(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new jc(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new jc(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=aa.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(aa.fromNumber(r)));return i.compare(BU)===1&&(i=new aa([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=DT(e),[r,i]=NT(t);for(let o=0;o<this.hashCount;o++){const l=this.Ee(r,i,o);if(!this.de(l))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),l=new Gv(o,i,t);return r.forEach(c=>l.insert(c)),l}insert(e){if(this.Ie===0)return;const t=DT(e),[r,i]=NT(t);for(let o=0;o<this.hashCount;o++){const l=this.Ee(r,i,o);this.Ae(l)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class jc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,qd.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new $d(Ne.min(),i,new pt(Be),tr(),We())}}class qd{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new qd(r,t,We(),We(),We())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class vP{constructor(e,t){this.targetId=e,this.me=t}}class wP{constructor(e,t,r=Ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class LT{constructor(){this.fe=0,this.ge=MT(),this.pe=Ut.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=We(),t=We(),r=We();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Pe()}}),new qd(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=MT()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,xe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class $U{constructor(e){this.Le=e,this.Be=new Map,this.ke=tr(),this.qe=VT(),this.Qe=new pt(Be)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:Pe()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const o=i.target;if(cp(o))if(r===0){const l=new Ee(o.path);this.Ue(t,l,Et.newNoDocument(l,Ne.min()))}else xe(r===1);else{const l=this.Ye(t);if(l!==r){const c=this.Ze(e),h=c?this.Xe(c,e,l):1;if(h!==0){this.je(t);const p=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,p)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let l,c;try{l=no(r).toUint8Array()}catch(h){if(h instanceof q1)return Ri("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Gv(l,i,o)}catch(h){return Ri(h instanceof jc?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(o=>{const l=this.Le.tt(),c=`projects/${l.projectId}/databases/${l.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,o,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((o,l)=>{const c=this.Je(l);if(c){if(o.current&&cp(c.target)){const h=new Ee(c.target.path);this.ke.get(h)!==null||this.it(l,h)||this.Ue(l,h,Et.newNoDocument(h,e))}o.be&&(t.set(l,o.ve()),o.Ce())}});let r=We();this.qe.forEach((o,l)=>{let c=!0;l.forEachWhile(h=>{const p=this.Je(h);return!p||p.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,l)=>l.setReadTime(e));const i=new $d(e,t,this.Qe,this.ke,r);return this.ke=tr(),this.qe=VT(),this.Qe=new pt(Be),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new LT,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ut(Be),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||fe("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new LT),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function VT(){return new pt(Ee.comparator)}function MT(){return new pt(Ee.comparator)}const qU={asc:"ASCENDING",desc:"DESCENDING"},WU={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HU={and:"AND",or:"OR"};class GU{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function b_(n,e){return n.useProto3Json||Fd(e)?e:{value:e}}function tu(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function EP(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function KU(n,e){return tu(n,e.toTimestamp())}function Ht(n){return xe(!!n),Ne.fromTimestamp(function(t){const r=ss(t);return new At(r.seconds,r.nanos)}(n))}function Kv(n,e){return R_(n,e).canonicalString()}function R_(n,e){const t=function(i){return new Xe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function IP(n){const e=Xe.fromString(n);return xe(OP(e)),e}function _d(n,e){return Kv(n.databaseId,e.path)}function Ii(n,e){const t=IP(e);if(t.get(1)!==n.databaseId.projectId)throw new de(ne.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new de(ne.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ee(bP(t))}function TP(n,e){return Kv(n.databaseId,e)}function SP(n){const e=IP(n);return e.length===4?Xe.emptyPath():bP(e)}function P_(n){return new Xe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function bP(n){return xe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function FT(n,e,t){return{name:_d(n,e),fields:t.value.mapValue.fields}}function RP(n,e,t){const r=Ii(n,e.name),i=Ht(e.updateTime),o=e.createTime?Ht(e.createTime):Ne.min(),l=new vn({mapValue:{fields:e.fields}}),c=Et.newFoundDocument(r,i,o,l);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function QU(n,e){return"found"in e?function(r,i){xe(!!i.found),i.found.name,i.found.updateTime;const o=Ii(r,i.found.name),l=Ht(i.found.updateTime),c=i.found.createTime?Ht(i.found.createTime):Ne.min(),h=new vn({mapValue:{fields:i.found.fields}});return Et.newFoundDocument(o,l,c,h)}(n,e):"missing"in e?function(r,i){xe(!!i.missing),xe(!!i.readTime);const o=Ii(r,i.missing),l=Ht(i.readTime);return Et.newNoDocument(o,l)}(n,e):Pe()}function YU(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:Pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(p,g){return p.useProto3Json?(xe(g===void 0||typeof g=="string"),Ut.fromBase64String(g||"")):(xe(g===void 0||g instanceof Buffer||g instanceof Uint8Array),Ut.fromUint8Array(g||new Uint8Array))}(n,e.targetChange.resumeToken),l=e.targetChange.cause,c=l&&function(p){const g=p.code===void 0?ne.UNKNOWN:yP(p.code);return new de(g,p.message||"")}(l);t=new wP(r,i,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ii(n,r.document.name),o=Ht(r.document.updateTime),l=r.document.createTime?Ht(r.document.createTime):Ne.min(),c=new vn({mapValue:{fields:r.document.fields}}),h=Et.newFoundDocument(i,o,l,c),p=r.targetIds||[],g=r.removedTargetIds||[];t=new Kf(p,g,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ii(n,r.document),o=r.readTime?Ht(r.readTime):Ne.min(),l=Et.newNoDocument(i,o),c=r.removedTargetIds||[];t=new Kf([],c,l.key,l)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ii(n,r.document),o=r.removedTargetIds||[];t=new Kf([],o,i,null)}else{if(!("filter"in e))return Pe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,l=new zU(i,o),c=r.targetId;t=new vP(c,l)}}return t}function vd(n,e){let t;if(e instanceof Eu)t={update:FT(n,e.key,e.value)};else if(e instanceof Iu)t={delete:_d(n,e.key)};else if(e instanceof hs)t={update:FT(n,e.key,e.data),updateMask:n4(e.fieldMask)};else{if(!(e instanceof $v))return Pe();t={verify:_d(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,l){const c=l.transform;if(c instanceof Zl)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ga)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ya)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof eu)return{fieldPath:l.field.canonicalString(),increment:c.Pe};throw Pe()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:KU(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:Pe()}(n,e.precondition)),t}function A_(n,e){const t=e.currentDocument?function(o){return o.updateTime!==void 0?Pt.updateTime(Ht(o.updateTime)):o.exists!==void 0?Pt.exists(o.exists):Pt.none()}(e.currentDocument):Pt.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(l,c){let h=null;if("setToServerValue"in c)xe(c.setToServerValue==="REQUEST_TIME"),h=new Zl;else if("appendMissingElements"in c){const g=c.appendMissingElements.values||[];h=new ga(g)}else if("removeAllFromArray"in c){const g=c.removeAllFromArray.values||[];h=new ya(g)}else"increment"in c?h=new eu(l,c.increment):Pe();const p=Rt.fromServerFormat(c.fieldPath);return new Bd(p,h)}(n,i)):[];if(e.update){e.update.name;const i=Ii(n,e.update.name),o=new vn({mapValue:{fields:e.update.fields}});if(e.updateMask){const l=function(h){const p=h.fieldPaths||[];return new er(p.map(g=>Rt.fromServerFormat(g)))}(e.updateMask);return new hs(i,o,l,t,r)}return new Eu(i,o,t,r)}if(e.delete){const i=Ii(n,e.delete);return new Iu(i,t)}if(e.verify){const i=Ii(n,e.verify);return new $v(i,t)}return Pe()}function XU(n,e){return n&&n.length>0?(xe(e!==void 0),n.map(t=>function(i,o){let l=i.updateTime?Ht(i.updateTime):Ht(o);return l.isEqual(Ne.min())&&(l=Ht(o)),new FU(l,i.transformResults||[])}(t,e))):[]}function PP(n,e){return{documents:[TP(n,e.path)]}}function AP(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=TP(n,i);const o=function(p){if(p.length!==0)return xP(at.create(p,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const l=function(p){if(p.length!==0)return p.map(g=>function(T){return{field:kl(T.field),direction:ZU(T.dir)}}(g))}(e.orderBy);l&&(t.structuredQuery.orderBy=l);const c=b_(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{_t:t,parent:i}}function kP(n){let e=SP(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){xe(r===1);const g=t.from[0];g.allDescendants?i=g.collectionId:e=e.child(g.collectionId)}let o=[];t.where&&(o=function(v){const T=CP(v);return T instanceof at&&Uv(T)?T.getFilters():[T]}(t.where));let l=[];t.orderBy&&(l=function(v){return v.map(T=>function(L){return new yd(Cl(L.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(L.direction))}(T))}(t.orderBy));let c=null;t.limit&&(c=function(v){let T;return T=typeof v=="object"?v.value:v,Fd(T)?null:T}(t.limit));let h=null;t.startAt&&(h=function(v){const T=!!v.before,x=v.values||[];return new so(x,T)}(t.startAt));let p=null;return t.endAt&&(p=function(v){const T=!v.before,x=v.values||[];return new so(x,T)}(t.endAt)),tP(e,i,l,o,c,"F",h,p)}function JU(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Pe()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function CP(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Cl(t.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Cl(t.unaryFilter.field);return Je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Cl(t.unaryFilter.field);return Je.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Cl(t.unaryFilter.field);return Je.create(l,"!=",{nullValue:"NULL_VALUE"});default:return Pe()}}(n):n.fieldFilter!==void 0?function(t){return Je.create(Cl(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Pe()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return at.create(t.compositeFilter.filters.map(r=>CP(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Pe()}}(t.compositeFilter.op))}(n):Pe()}function ZU(n){return qU[n]}function e4(n){return WU[n]}function t4(n){return HU[n]}function kl(n){return{fieldPath:n.canonicalString()}}function Cl(n){return Rt.fromServerFormat(n.fieldPath)}function xP(n){return n instanceof Je?function(t){if(t.op==="=="){if(ET(t.value))return{unaryFilter:{field:kl(t.field),op:"IS_NAN"}};if(wT(t.value))return{unaryFilter:{field:kl(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ET(t.value))return{unaryFilter:{field:kl(t.field),op:"IS_NOT_NAN"}};if(wT(t.value))return{unaryFilter:{field:kl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kl(t.field),op:e4(t.op),value:t.value}}}(n):n instanceof at?function(t){const r=t.getFilters().map(i=>xP(i));return r.length===1?r[0]:{compositeFilter:{op:t4(t.op),filters:r}}}(n):Pe()}function n4(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function OP(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t,r,i,o=Ne.min(),l=Ne.min(),c=Ut.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new Xi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e){this.ct=e}}function r4(n,e){let t;if(e.document)t=RP(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=Ee.fromSegments(e.noDocument.path),i=va(e.noDocument.readTime);t=Et.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return Pe();{const r=Ee.fromSegments(e.unknownDocument.path),i=va(e.unknownDocument.version);t=Et.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const o=new At(i[0],i[1]);return Ne.fromTimestamp(o)}(e.readTime)),t}function UT(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:fp(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(o,l){return{name:_d(o,l.key),fields:l.data.value.mapValue.fields,updateTime:tu(o,l.version.toTimestamp()),createTime:tu(o,l.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:_a(e.version)};else{if(!e.isUnknownDocument())return Pe();r.unknownDocument={path:t.path.toArray(),version:_a(e.version)}}return r}function fp(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function _a(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function va(n){const e=new At(n.seconds,n.nanoseconds);return Ne.fromTimestamp(e)}function Qo(n,e){const t=(e.baseMutations||[]).map(o=>A_(n.ct,o));for(let o=0;o<e.mutations.length-1;++o){const l=e.mutations[o];if(o+1<e.mutations.length&&e.mutations[o+1].transform!==void 0){const c=e.mutations[o+1];l.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(o+1,1),++o}}const r=e.mutations.map(o=>A_(n.ct,o)),i=At.fromMillis(e.localWriteTimeMs);return new qv(e.batchId,i,t,r)}function zc(n){const e=va(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?va(n.lastLimboFreeSnapshotVersion):Ne.min();let r;return r=function(o){return o.documents!==void 0}(n.query)?function(o){return xe(o.documents.length===1),jn(wu(SP(o.documents[0])))}(n.query):function(o){return jn(kP(o))}(n.query),new Xi(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ut.fromBase64String(n.resumeToken))}function NP(n,e){const t=_a(e.snapshotVersion),r=_a(e.lastLimboFreeSnapshotVersion);let i;i=cp(e.target)?PP(n.ct,e.target):AP(n.ct,e.target)._t;const o=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ma(e.target),readTime:t,resumeToken:o,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Qv(n){const e=kP({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?hp(e,e.limit,"L"):e}function Sy(n,e){return new Hv(e.largestBatchId,A_(n.ct,e.overlayMutation))}function jT(n,e){const t=e.path.lastSegment();return[n,Un(e.path.popLast()),t]}function zT(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:_a(r.readTime),documentKey:Un(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{getBundleMetadata(e,t){return BT(e).get(t).next(r=>{if(r)return function(o){return{id:o.bundleId,createTime:va(o.createTime),version:o.version}}(r)})}saveBundleMetadata(e,t){return BT(e).put(function(i){return{bundleId:i.id,createTime:_a(Ht(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return $T(e).get(t).next(r=>{if(r)return function(o){return{name:o.name,query:Qv(o.bundledQuery),readTime:va(o.readTime)}}(r)})}saveNamedQuery(e,t){return $T(e).put(function(i){return{name:i.name,readTime:_a(Ht(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function BT(n){return rn(n,"bundles")}function $T(n){return rn(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new tm(e,r)}getOverlay(e,t){return Sc(e).get(jT(this.userId,t)).next(r=>r?Sy(this.serializer,r):null)}getOverlays(e,t){const r=wi();return J.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((o,l)=>{const c=new Hv(t,l);i.push(this.ht(e,c))}),J.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(l=>i.add(Un(l.getCollectionPath())));const o=[];return i.forEach(l=>{const c=IDBKeyRange.bound([this.userId,l,r],[this.userId,l,r+1],!1,!0);o.push(Sc(e).j("collectionPathOverlayIndex",c))}),J.waitFor(o)}getOverlaysForCollection(e,t,r){const i=wi(),o=Un(t),l=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,Number.POSITIVE_INFINITY],!0);return Sc(e).U("collectionPathOverlayIndex",l).next(c=>{for(const h of c){const p=Sy(this.serializer,h);i.set(p.getKey(),p)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const o=wi();let l;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Sc(e).J({index:"collectionGroupOverlayIndex",range:c},(h,p,g)=>{const v=Sy(this.serializer,p);o.size()<i||v.largestBatchId===l?(o.set(v.getKey(),v),l=v.largestBatchId):g.done()}).next(()=>o)}ht(e,t){return Sc(e).put(function(i,o,l){const[c,h,p]=jT(o,l.mutation.key);return{userId:o,collectionPath:h,documentId:p,collectionGroup:l.mutation.key.getCollectionGroup(),largestBatchId:l.largestBatchId,overlayMutation:vd(i.ct,l.mutation)}}(this.serializer,this.userId,t))}}function Sc(n){return rn(n,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{Pt(e){return rn(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Ut.fromUint8Array(r):Ut.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(bt(e.integerValue));else if("doubleValue"in e){const r=bt(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),fd(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=ss(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(no(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?W1(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Jp(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):Pe()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}wt(e,t){var r,i;const o=e.fields||{};this.dt(t,53);const l="value",c=((i=(r=o[l].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(bt(c)),this.Vt(l,t),this.Tt(o[l],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),Ee.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}Yo.vt=new Yo;function o4(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function qT(n){const e=64-function(r){let i=0;for(let o=0;o<8;++o){const l=o4(255&r[o]);if(i+=l,l!==8)break}return i}(n);return Math.ceil(e/8)}class a4{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),r=qT(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),r=qT(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(o){const l=new DataView(new ArrayBuffer(8));return l.setFloat64(0,o,!1),new Uint8Array(l.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class l4{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class u4{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class bc{constructor(){this.jt=new a4,this.Ht=new l4(this.jt),this.Jt=new u4(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Xo(this.indexId,this.documentKey,this.arrayValue,r)}}function js(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=WT(n.arrayValue,e.arrayValue),t!==0?t:(t=WT(n.directionalValue,e.directionalValue),t!==0?t:Ee.comparator(n.documentKey,e.documentKey)))}function WT(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e){this.Xt=new ut((t,r)=>Rt.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(xe(e.collectionGroup===this.collectionId),this.nn)return!1;const t=y_(e);if(t!==void 0&&!this.sn(t))return!1;const r=Ho(e);let i=new Set,o=0,l=0;for(;o<r.length&&this.sn(r[o]);++o)i=i.add(r[o].fieldPath.canonicalString());if(o===r.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!i.has(c.field.canonicalString())){const h=r[o];if(!this.on(c,h)||!this._n(this.en[l++],h))return!1}++o}for(;o<r.length;++o){const c=r[o];if(l>=this.en.length||!this._n(this.en[l++],c))return!1}return!0}an(){if(this.nn)return null;let e=new ut(Rt.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new $f(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new $f(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new $f(r.field,r.dir==="asc"?0:1)));return new up(up.UNKNOWN_ID,this.collectionId,t,hd.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(n){var e,t;if(xe(n instanceof Je||n instanceof at),n instanceof Je){if(n instanceof eP){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(o=>Je.create(n.field,"==",o)))||[];return at.create(i,"or")}return n}const r=n.filters.map(i=>LP(i));return at.create(r,n.op)}function c4(n){if(n.getFilters().length===0)return[];const e=x_(LP(n));return xe(VP(e)),k_(e)||C_(e)?[e]:e.getFilters()}function k_(n){return n instanceof Je}function C_(n){return n instanceof at&&Uv(n)}function VP(n){return k_(n)||C_(n)||function(t){if(t instanceof at&&E_(t)){for(const r of t.getFilters())if(!k_(r)&&!C_(r))return!1;return!0}return!1}(n)}function x_(n){if(xe(n instanceof Je||n instanceof at),n instanceof Je)return n;if(n.filters.length===1)return x_(n.filters[0]);const e=n.filters.map(r=>x_(r));let t=at.create(e,n.op);return t=pp(t),VP(t)?t:(xe(t instanceof at),xe(Jl(t)),xe(t.filters.length>1),t.filters.reduce((r,i)=>Yv(r,i)))}function Yv(n,e){let t;return xe(n instanceof Je||n instanceof at),xe(e instanceof Je||e instanceof at),t=n instanceof Je?e instanceof Je?function(i,o){return at.create([i,o],"and")}(n,e):GT(n,e):e instanceof Je?GT(e,n):function(i,o){if(xe(i.filters.length>0&&o.filters.length>0),Jl(i)&&Jl(o))return X1(i,o.getFilters());const l=E_(i)?i:o,c=E_(i)?o:i,h=l.filters.map(p=>Yv(p,c));return at.create(h,"or")}(n,e),pp(t)}function GT(n,e){if(Jl(e))return X1(e,n.getFilters());{const t=e.filters.map(r=>Yv(n,r));return at.create(t,"or")}}function pp(n){if(xe(n instanceof Je||n instanceof at),n instanceof Je)return n;const e=n.getFilters();if(e.length===1)return pp(e[0]);if(Q1(n))return n;const t=e.map(i=>pp(i)),r=[];return t.forEach(i=>{i instanceof Je?r.push(i):i instanceof at&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:at.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d4{constructor(){this.un=new Xv}addToCollectionParentIndex(e,t){return this.un.add(t),J.resolve()}getCollectionParents(e,t){return J.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return J.resolve()}deleteFieldIndex(e,t){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,t){return J.resolve()}getDocumentsMatchingTarget(e,t){return J.resolve(null)}getIndexType(e,t){return J.resolve(0)}getFieldIndexes(e,t){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,t){return J.resolve(mr.min())}getMinOffsetFromCollectionGroup(e,t){return J.resolve(mr.min())}updateCollectionGroup(e,t,r){return J.resolve()}updateIndexEntries(e,t){return J.resolve()}}class Xv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ut(Xe.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ut(Xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=new Uint8Array(0);class h4{constructor(e,t){this.databaseId=t,this.cn=new Xv,this.ln=new fo(r=>ma(r),(r,i)=>Ud(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const o={collectionId:r,parent:Un(i)};return KT(e).put(o)}return J.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[O1(t),""],!1,!0);return KT(e).U(i).next(o=>{for(const l of o){if(l.collectionId!==t)break;r.push(vi(l.parent))}return r})}addFieldIndex(e,t){const r=Rc(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(h=>[h.fieldPath.canonicalString(),h.kind])}}(t);delete i.indexId;const o=r.add(i);if(t.indexState){const l=Sl(e);return o.next(c=>{l.put(zT(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return o.next()}deleteFieldIndex(e,t){const r=Rc(e),i=Sl(e),o=Tl(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>o.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Rc(e),r=Tl(e),i=Sl(e);return t.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,t){return J.forEach(this.hn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const o=new HT(r).an();if(o!=null)return this.addFieldIndex(e,o)}}))}getDocumentsMatchingTarget(e,t){const r=Tl(e);let i=!0;const o=new Map;return J.forEach(this.hn(t),l=>this.Pn(e,l).next(c=>{i&&(i=!!c),o.set(l,c)})).next(()=>{if(i){let l=We();const c=[];return J.forEach(o,(h,p)=>{fe("IndexedDbIndexManager",`Using index ${function(H){return`id=${H.indexId}|cg=${H.collectionGroup}|f=${H.fields.map(X=>`${X.fieldPath}:${X.kind}`).join(",")}`}(h)} to execute ${ma(t)}`);const g=function(H,X){const V=y_(X);if(V===void 0)return null;for(const F of dp(H,V.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(p,h),v=function(H,X){const V=new Map;for(const F of Ho(X))for(const R of dp(H,F.fieldPath))switch(R.op){case"==":case"in":V.set(F.fieldPath.canonicalString(),R.value);break;case"not-in":case"!=":return V.set(F.fieldPath.canonicalString(),R.value),Array.from(V.values())}return null}(p,h),T=function(H,X){const V=[];let F=!0;for(const R of Ho(X)){const C=R.kind===0?RT(H,R.fieldPath,H.startAt):PT(H,R.fieldPath,H.startAt);V.push(C.value),F&&(F=C.inclusive)}return new so(V,F)}(p,h),x=function(H,X){const V=[];let F=!0;for(const R of Ho(X)){const C=R.kind===0?PT(H,R.fieldPath,H.endAt):RT(H,R.fieldPath,H.endAt);V.push(C.value),F&&(F=C.inclusive)}return new so(V,F)}(p,h),L=this.In(h,p,T),N=this.In(h,p,x),U=this.Tn(h,p,v),q=this.En(h.indexId,g,L,T.inclusive,N,x.inclusive,U);return J.forEach(q,G=>r.G(G,t.limit).next(H=>{H.forEach(X=>{const V=Ee.fromSegments(X.documentKey);l.has(V)||(l=l.add(V),c.push(V))})}))}).next(()=>c)}return J.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=c4(at.create(e.filters,"and")).map(r=>T_(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,i,o,l,c){const h=(t!=null?t.length:1)*Math.max(r.length,o.length),p=h/(t!=null?t.length:1),g=[];for(let v=0;v<h;++v){const T=t?this.dn(t[v/p]):Ef,x=this.An(e,T,r[v%p],i),L=this.Rn(e,T,o[v%p],l),N=c.map(U=>this.An(e,T,U,!0));g.push(...this.createRange(x,L,N))}return g}An(e,t,r,i){const o=new Xo(e,Ee.empty(),t,r);return i?o:o.Zt()}Rn(e,t,r,i){const o=new Xo(e,Ee.empty(),t,r);return i?o.Zt():o}Pn(e,t){const r=new HT(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(o=>{let l=null;for(const c of o)r.rn(c)&&(!l||c.fields.length>l.fields.length)&&(l=c);return l})}getIndexType(e,t){let r=2;const i=this.hn(t);return J.forEach(i,o=>this.Pn(e,o).next(l=>{l?r!==0&&l.fields.length<function(h){let p=new ut(Rt.comparator),g=!1;for(const v of h.filters)for(const T of v.getFlattenedFilters())T.field.isKeyField()||(T.op==="array-contains"||T.op==="array-contains-any"?g=!0:p=p.add(T.field));for(const v of h.orderBy)v.field.isKeyField()||(p=p.add(v.field));return p.size+(g?1:0)}(o)&&(r=1):r=0})).next(()=>function(l){return l.limit!==null}(t)&&i.length>1&&r===2?1:r)}Vn(e,t){const r=new bc;for(const i of Ho(e)){const o=t.data.field(i.fieldPath);if(o==null)return null;const l=r.Yt(i.kind);Yo.vt.It(o,l)}return r.zt()}dn(e){const t=new bc;return Yo.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new bc;return Yo.vt.It(pa(this.databaseId,t),r.Yt(function(o){const l=Ho(o);return l.length===0?0:l[l.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let i=[];i.push(new bc);let o=0;for(const l of Ho(e)){const c=r[o++];for(const h of i)if(this.fn(t,l.fieldPath)&&gd(c))i=this.gn(i,l,c);else{const p=h.Yt(l.kind);Yo.vt.It(c,p)}}return this.pn(i)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const i=[...e],o=[];for(const l of r.arrayValue.values||[])for(const c of i){const h=new bc;h.seed(c.zt()),Yo.vt.It(l,h.Yt(t.kind)),o.push(h)}return o}fn(e,t){return!!e.filters.find(r=>r instanceof Je&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Rc(e),i=Sl(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(o=>{const l=[];return J.forEach(o,c=>i.get([c.indexId,this.uid]).next(h=>{l.push(function(g,v){const T=v?new hd(v.sequenceNumber,new mr(va(v.readTime),new Ee(vi(v.documentKey)),v.largestBatchId)):hd.empty(),x=g.fields.map(([L,N])=>new $f(Rt.fromServerFormat(L),N));return new up(g.indexId,g.collectionGroup,x,T)}(c,h))})).next(()=>l)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const o=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return o!==0?o:Be(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Rc(e),o=Sl(e);return this.yn(e).next(l=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>J.forEach(c,h=>o.put(zT(h.indexId,this.uid,l,r)))))}updateIndexEntries(e,t){const r=new Map;return J.forEach(t,(i,o)=>{const l=r.get(i.collectionGroup);return(l?J.resolve(l):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(r.set(i.collectionGroup,c),J.forEach(c,h=>this.wn(e,i,h).next(p=>{const g=this.Sn(o,h);return p.isEqual(g)?J.resolve():this.bn(e,o,h,p,g)}))))})}Dn(e,t,r,i){return Tl(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,i){return Tl(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const i=Tl(e);let o=new ut(js);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(l,c)=>{o=o.add(new Xo(r.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>o)}Sn(e,t){let r=new ut(js);const i=this.Vn(t,e);if(i==null)return r;const o=y_(t);if(o!=null){const l=e.data.field(o.fieldPath);if(gd(l))for(const c of l.arrayValue.values||[])r=r.add(new Xo(t.indexId,e.key,this.dn(c),i))}else r=r.add(new Xo(t.indexId,e.key,Ef,i));return r}bn(e,t,r,i,o){fe("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const l=[];return function(h,p,g,v,T){const x=h.getIterator(),L=p.getIterator();let N=Il(x),U=Il(L);for(;N||U;){let q=!1,G=!1;if(N&&U){const H=g(N,U);H<0?G=!0:H>0&&(q=!0)}else N!=null?G=!0:q=!0;q?(v(U),U=Il(L)):G?(T(N),N=Il(x)):(N=Il(x),U=Il(L))}}(i,o,js,c=>{l.push(this.Dn(e,t,r,c))},c=>{l.push(this.vn(e,t,r,c))}),J.waitFor(l)}yn(e){let t=1;return Sl(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,o)=>{o.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((l,c)=>js(l,c)).filter((l,c,h)=>!c||js(l,h[c-1])!==0);const i=[];i.push(e);for(const l of r){const c=js(l,e),h=js(l,t);if(c===0)i[0]=e.Zt();else if(c>0&&h<0)i.push(l),i.push(l.Zt());else if(h>0)break}i.push(t);const o=[];for(let l=0;l<i.length;l+=2){if(this.Cn(i[l],i[l+1]))return[];const c=[i[l].indexId,this.uid,i[l].arrayValue,i[l].directionalValue,Ef,[]],h=[i[l+1].indexId,this.uid,i[l+1].arrayValue,i[l+1].directionalValue,Ef,[]];o.push(IDBKeyRange.bound(c,h))}return o}Cn(e,t){return js(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(QT)}getMinOffset(e,t){return J.mapArray(this.hn(t),r=>this.Pn(e,r).next(i=>i||Pe())).next(QT)}}function KT(n){return rn(n,"collectionParents")}function Tl(n){return rn(n,"indexEntries")}function Rc(n){return rn(n,"indexConfiguration")}function Sl(n){return rn(n,"indexState")}function QT(n){xe(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Lv(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new mr(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xn{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Xn(e,Xn.DEFAULT_COLLECTION_PERCENTILE,Xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),o=[],l=IDBKeyRange.only(t.batchId);let c=0;const h=r.J({range:l},(g,v,T)=>(c++,T.delete()));o.push(h.next(()=>{xe(c===1)}));const p=[];for(const g of t.mutations){const v=U1(e,g.key.path,t.batchId);o.push(i.delete(v)),p.push(g.key)}return J.waitFor(o).next(()=>p)}function mp(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw Pe();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn.DEFAULT_COLLECTION_PERCENTILE=10,Xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xn.DEFAULT=new Xn(41943040,Xn.DEFAULT_COLLECTION_PERCENTILE,Xn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xn.DISABLED=new Xn(-1,0,0);class nm{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,t,r,i){xe(e.uid!=="");const o=e.isAuthenticated()?e.uid:"";return new nm(o,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return zs(e).J({index:"userMutationsIndex",range:r},(i,o,l)=>{t=!1,l.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const o=xl(e),l=zs(e);return l.add({}).next(c=>{xe(typeof c=="number");const h=new qv(c,t,r,i),p=function(x,L,N){const U=N.baseMutations.map(G=>vd(x.ct,G)),q=N.mutations.map(G=>vd(x.ct,G));return{userId:L,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:U,mutations:q}}(this.serializer,this.userId,h),g=[];let v=new ut((T,x)=>Be(T.canonicalString(),x.canonicalString()));for(const T of i){const x=U1(this.userId,T.key.path,c);v=v.add(T.key.path.popLast()),g.push(l.put(p)),g.push(o.put(x,J2))}return v.forEach(T=>{g.push(this.indexManager.addToCollectionParentIndex(e,T))}),e.addOnCommittedListener(()=>{this.Fn[c]=h.keys()}),J.waitFor(g).next(()=>h)})}lookupMutationBatch(e,t){return zs(e).get(t).next(r=>r?(xe(r.userId===this.userId),Qo(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?J.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let o=null;return zs(e).J({index:"userMutationsIndex",range:i},(l,c,h)=>{c.userId===this.userId&&(xe(c.batchId>=r),o=Qo(this.serializer,c)),h.done()}).next(()=>o)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return zs(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,o,l)=>{r=o.batchId,l.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return zs(e).U("userMutationsIndex",t).next(r=>r.map(i=>Qo(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=qf(this.userId,t.path),i=IDBKeyRange.lowerBound(r),o=[];return xl(e).J({range:i},(l,c,h)=>{const[p,g,v]=l,T=vi(g);if(p===this.userId&&t.path.isEqual(T))return zs(e).get(v).next(x=>{if(!x)throw Pe();xe(x.userId===this.userId),o.push(Qo(this.serializer,x))});h.done()}).next(()=>o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ut(Be);const i=[];return t.forEach(o=>{const l=qf(this.userId,o.path),c=IDBKeyRange.lowerBound(l),h=xl(e).J({range:c},(p,g,v)=>{const[T,x,L]=p,N=vi(x);T===this.userId&&o.path.isEqual(N)?r=r.add(L):v.done()});i.push(h)}),J.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,o=qf(this.userId,r),l=IDBKeyRange.lowerBound(o);let c=new ut(Be);return xl(e).J({range:l},(h,p,g)=>{const[v,T,x]=h,L=vi(T);v===this.userId&&r.isPrefixOf(L)?L.length===i&&(c=c.add(x)):g.done()}).next(()=>this.xn(e,c))}xn(e,t){const r=[],i=[];return t.forEach(o=>{i.push(zs(e).get(o).next(l=>{if(l===null)throw Pe();xe(l.userId===this.userId),r.push(Qo(this.serializer,l))}))}),J.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return MP(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),J.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return J.resolve();const r=IDBKeyRange.lowerBound(function(l){return[l]}(this.userId)),i=[];return xl(e).J({range:r},(o,l,c)=>{if(o[0]===this.userId){const h=vi(o[1]);i.push(h)}else c.done()}).next(()=>{xe(i.length===0)})})}containsKey(e,t){return FP(e,this.userId,t)}Nn(e){return UP(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function FP(n,e,t){const r=qf(e,t.path),i=r[1],o=IDBKeyRange.lowerBound(r);let l=!1;return xl(n).J({range:o,H:!0},(c,h,p)=>{const[g,v,T]=c;g===e&&v===i&&(l=!0),p.done()}).next(()=>l)}function zs(n){return rn(n,"mutations")}function xl(n){return rn(n,"documentMutations")}function UP(n){return rn(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new wa(0)}static kn(){return new wa(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new wa(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>Ne.fromTimestamp(new At(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>bl(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(xe(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let i=0;const o=[];return bl(e).J((l,c)=>{const h=zc(c);h.sequenceNumber<=t&&r.get(h.targetId)===null&&(i++,o.push(this.removeTargetData(e,h)))}).next(()=>J.waitFor(o)).next(()=>i)}forEachTarget(e,t){return bl(e).J((r,i)=>{const o=zc(i);t(o)})}qn(e){return XT(e).get("targetGlobalKey").next(t=>(xe(t!==null),t))}Qn(e,t){return XT(e).put("targetGlobalKey",t)}Kn(e,t){return bl(e).put(NP(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=ma(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let o=null;return bl(e).J({range:i,index:"queryTargetsIndex"},(l,c,h)=>{const p=zc(c);Ud(t,p.target)&&(o=p,h.done())}).next(()=>o)}addMatchingKeys(e,t,r){const i=[],o=qs(e);return t.forEach(l=>{const c=Un(l.path);i.push(o.put({targetId:r,path:c})),i.push(this.referenceDelegate.addReference(e,r,l))}),J.waitFor(i)}removeMatchingKeys(e,t,r){const i=qs(e);return J.forEach(t,o=>{const l=Un(o.path);return J.waitFor([i.delete([r,l]),this.referenceDelegate.removeReference(e,r,o)])})}removeMatchingKeysForTargetId(e,t){const r=qs(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=qs(e);let o=We();return i.J({range:r,H:!0},(l,c,h)=>{const p=vi(l[1]),g=new Ee(p);o=o.add(g)}).next(()=>o)}containsKey(e,t){const r=Un(t.path),i=IDBKeyRange.bound([r],[O1(r)],!1,!0);let o=0;return qs(e).J({index:"documentTargetsIndex",H:!0,range:i},([l,c],h,p)=>{l!==0&&(o++,p.done())}).next(()=>o>0)}ot(e,t){return bl(e).get(t).next(r=>r?zc(r):null)}}function bl(n){return rn(n,"targets")}function XT(n){return rn(n,"targetGlobal")}function qs(n){return rn(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT([n,e],[t,r]){const i=Be(n,t);return i===0?Be(e,r):i}class p4{constructor(e){this.Un=e,this.buffer=new ut(JT),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();JT(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class m4{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){fe("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ho(t)?fe("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await co(t)}await this.Hn(3e5)})}}class g4{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return J.resolve(Zn.oe);const r=new p4(t);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(YT)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),YT):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,i,o,l,c,h,p;const g=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),i=this.params.maximumSequenceNumbersToCollect):i=v,l=Date.now(),this.nthSequenceNumber(e,i))).next(v=>(r=v,c=Date.now(),this.removeTargets(e,r,t))).next(v=>(o=v,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(p=Date.now(),Pl()<=Ye.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-g}ms
	Determined least recently used ${i} in `+(c-l)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${v} documents in `+(p-h)+`ms
Total Duration: ${p-g}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:v})))}}function y4(n,e){return new g4(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{constructor(e,t){this.db=e,this.garbageCollector=y4(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,i)=>t(i))}addReference(e,t,r){return If(e,r)}removeReference(e,t,r){return If(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return If(e,t)}nr(e,t){return function(i,o){let l=!1;return UP(i).Y(c=>FP(i,c,o).next(h=>(h&&(l=!0),J.resolve(!h)))).next(()=>l)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let o=0;return this.tr(e,(l,c)=>{if(c<=t){const h=this.nr(e,l).next(p=>{if(!p)return o++,r.getEntry(e,l).next(()=>(r.removeEntry(l,Ne.min()),qs(e).delete(function(v){return[0,Un(v.path)]}(l))))});i.push(h)}}).next(()=>J.waitFor(i)).next(()=>r.apply(e)).next(()=>o)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return If(e,t)}tr(e,t){const r=qs(e);let i,o=Zn.oe;return r.J({index:"documentTargetsIndex"},([l,c],{path:h,sequenceNumber:p})=>{l===0?(o!==Zn.oe&&t(new Ee(vi(i)),o),o=p,i=h):o=Zn.oe}).next(()=>{o!==Zn.oe&&t(new Ee(vi(i)),o)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function If(n,e){return qs(n).put(function(r,i){return{targetId:0,path:Un(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(){this.changes=new fo(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?J.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return $o(e).put(r)}removeEntry(e,t,r){return $o(e).delete(function(o,l){const c=o.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],fp(l),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=Et.newInvalidDocument(t);return $o(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Pc(t))},(i,o)=>{r=this.ir(t,o)}).next(()=>r)}sr(e,t){let r={size:0,document:Et.newInvalidDocument(t)};return $o(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Pc(t))},(i,o)=>{r={document:this.ir(t,o),size:mp(o)}}).next(()=>r)}getEntries(e,t){let r=tr();return this._r(e,t,(i,o)=>{const l=this.ir(i,o);r=r.insert(i,l)}).next(()=>r)}ar(e,t){let r=tr(),i=new pt(Ee.comparator);return this._r(e,t,(o,l)=>{const c=this.ir(o,l);r=r.insert(o,c),i=i.insert(o,mp(l))}).next(()=>({documents:r,ur:i}))}_r(e,t,r){if(t.isEmpty())return J.resolve();let i=new ut(tS);t.forEach(h=>i=i.add(h));const o=IDBKeyRange.bound(Pc(i.first()),Pc(i.last())),l=i.getIterator();let c=l.getNext();return $o(e).J({index:"documentKeyIndex",range:o},(h,p,g)=>{const v=Ee.fromSegments([...p.prefixPath,p.collectionGroup,p.documentId]);for(;c&&tS(c,v)<0;)r(c,null),c=l.getNext();c&&c.isEqual(v)&&(r(c,p),c=l.hasNext()?l.getNext():null),c?g.$(Pc(c)):g.done()}).next(()=>{for(;c;)r(c,null),c=l.hasNext()?l.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,o){const l=t.path,c=[l.popLast().toArray(),l.lastSegment(),fp(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],h=[l.popLast().toArray(),l.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return $o(e).U(IDBKeyRange.bound(c,h,!0)).next(p=>{o==null||o.incrementDocumentReadCount(p.length);let g=tr();for(const v of p){const T=this.ir(Ee.fromSegments(v.prefixPath.concat(v.collectionGroup,v.documentId)),v);T.isFoundDocument()&&(zd(t,T)||i.has(T.key))&&(g=g.insert(T.key,T))}return g})}getAllFromCollectionGroup(e,t,r,i){let o=tr();const l=eS(t,r),c=eS(t,mr.max());return $o(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(l,c,!0)},(h,p,g)=>{const v=this.ir(Ee.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);o=o.insert(v.key,v),o.size===i&&g.done()}).next(()=>o)}newChangeBuffer(e){return new w4(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return ZT(e).get("remoteDocumentGlobalKey").next(t=>(xe(!!t),t))}rr(e,t){return ZT(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=r4(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Ne.min())))return r}return Et.newInvalidDocument(e)}}function zP(n){return new v4(n)}class w4 extends jP{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new fo(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new ut((o,l)=>Be(o.canonicalString(),l.canonicalString()));return this.changes.forEach((o,l)=>{const c=this.lr.get(o);if(t.push(this.cr.removeEntry(e,o,c.readTime)),l.isValidDocument()){const h=UT(this.cr.serializer,l);i=i.add(o.path.popLast());const p=mp(h);r+=p-c.size,t.push(this.cr.addEntry(e,o,h))}else if(r-=c.size,this.trackRemovals){const h=UT(this.cr.serializer,l.convertToNoDocument(Ne.min()));t.push(this.cr.addEntry(e,o,h))}}),i.forEach(o=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,o))}),t.push(this.cr.updateMetadata(e,r)),J.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:i})=>(i.forEach((o,l)=>{this.lr.set(o,{size:l,readTime:r.get(o).readTime})}),r))}}function ZT(n){return rn(n,"remoteDocumentGlobal")}function $o(n){return rn(n,"remoteDocumentsV14")}function Pc(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function eS(n,e){const t=e.documentKey.path.toArray();return[n,fp(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function tS(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let o=0;o<t.length-2&&o<r.length-2;++o)if(i=Be(t[o],r[o]),i)return i;return i=Be(t.length,r.length),i||(i=Be(t[t.length-2],r[r.length-2]),i||Be(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Yc(r.mutation,i,er.empty(),At.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,We()).next(()=>r))}getLocalViewOfDocuments(e,t,r=We()){const i=wi();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let l=Uc();return o.forEach((c,h)=>{l=l.insert(c,h.overlayedDocument)}),l}))}getOverlayedDocuments(e,t){const r=wi();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,We()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((l,c)=>{t.set(l,c)})})}computeViews(e,t,r,i){let o=tr();const l=Qc(),c=function(){return Qc()}();return t.forEach((h,p)=>{const g=r.get(p.key);i.has(p.key)&&(g===void 0||g.mutation instanceof hs)?o=o.insert(p.key,p):g!==void 0?(l.set(p.key,g.mutation.getFieldMask()),Yc(g.mutation,p,g.mutation.getFieldMask(),At.now())):l.set(p.key,er.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((p,g)=>l.set(p,g)),t.forEach((p,g)=>{var v;return c.set(p,new E4(g,(v=l.get(p))!==null&&v!==void 0?v:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Qc();let i=new pt((l,c)=>l-c),o=We();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(l=>{for(const c of l)c.keys().forEach(h=>{const p=t.get(h);if(p===null)return;let g=r.get(h)||er.empty();g=c.applyToLocalView(p,g),r.set(h,g);const v=(i.get(c.batchId)||We()).add(h);i=i.insert(c.batchId,v)})}).next(()=>{const l=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),p=h.key,g=h.value,v=aP();g.forEach(T=>{if(!o.has(T)){const x=pP(t.get(T),r.get(T));x!==null&&v.set(T,x),o=o.add(T)}}),l.push(this.documentOverlayCache.saveOverlays(e,p,v))}return J.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(l){return Ee.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):jv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):J.resolve(wi());let c=-1,h=o;return l.next(p=>J.forEach(p,(g,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),o.get(g)?J.resolve():this.remoteDocumentCache.getEntry(e,g).next(T=>{h=h.insert(g,T)}))).next(()=>this.populateOverlays(e,p,o)).next(()=>this.computeViews(e,h,p,We())).next(g=>({batchId:c,changes:oP(g)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ee(t)).next(r=>{let i=Uc();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let l=Uc();return this.indexManager.getCollectionParents(e,o).next(c=>J.forEach(c,h=>{const p=function(v,T){return new ds(T,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,p,r,i).next(g=>{g.forEach((v,T)=>{l=l.insert(v,T)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(l=>{o.forEach((h,p)=>{const g=p.getKey();l.get(g)===null&&(l=l.insert(g,Et.newInvalidDocument(g)))});let c=Uc();return l.forEach((h,p)=>{const g=o.get(h);g!==void 0&&Yc(g.mutation,p,er.empty(),At.now()),zd(t,p)&&(c=c.insert(h,p))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return J.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ht(i.createTime)}}(t)),J.resolve()}getNamedQuery(e,t){return J.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Qv(i.bundledQuery),readTime:Ht(i.readTime)}}(t)),J.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(){this.overlays=new pt(Ee.comparator),this.Ir=new Map}getOverlay(e,t){return J.resolve(this.overlays.get(t))}getOverlays(e,t){const r=wi();return J.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.ht(e,t,o)}),J.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),J.resolve()}getOverlaysForCollection(e,t,r){const i=wi(),o=t.length+1,l=new Ee(t.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const h=c.getNext().value,p=h.getKey();if(!t.isPrefixOf(p.path))break;p.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return J.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new pt((p,g)=>p-g);const l=this.overlays.getIterator();for(;l.hasNext();){const p=l.getNext().value;if(p.getKey().getCollectionGroup()===t&&p.largestBatchId>r){let g=o.get(p.largestBatchId);g===null&&(g=wi(),o=o.insert(p.largestBatchId,g)),g.set(p.getKey(),p)}}const c=wi(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((p,g)=>c.set(p,g)),!(c.size()>=i)););return J.resolve(c)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new Hv(t,r));let o=this.Ir.get(t);o===void 0&&(o=We(),this.Ir.set(t,o)),this.Ir.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(){this.sessionToken=Ut.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.Tr=new ut(un.Er),this.dr=new ut(un.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new un(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new un(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new Ee(new Xe([])),r=new un(t,e),i=new un(t,e+1),o=[];return this.dr.forEachInRange([r,i],l=>{this.Vr(l),o.push(l.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new Ee(new Xe([])),r=new un(t,e),i=new un(t,e+1);let o=We();return this.dr.forEachInRange([r,i],l=>{o=o.add(l.key)}),o}containsKey(e){const t=new un(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class un{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return Ee.comparator(e.key,t.key)||Be(e.wr,t.wr)}static Ar(e,t){return Be(e.wr,t.wr)||Ee.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ut(un.Er)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new qv(o,t,r,i);this.mutationQueue.push(l);for(const c of i)this.br=this.br.add(new un(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return J.resolve(l)}lookupMutationBatch(e,t){return J.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),o=i<0?0:i;return J.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new un(t,0),i=new un(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],l=>{const c=this.Dr(l.wr);o.push(c)}),J.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ut(Be);return t.forEach(i=>{const o=new un(i,0),l=new un(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,l],c=>{r=r.add(c.wr)})}),J.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;Ee.isDocumentKey(o)||(o=o.child(""));const l=new un(new Ee(o),0);let c=new ut(Be);return this.br.forEachWhile(h=>{const p=h.key.path;return!!r.isPrefixOf(p)&&(p.length===i&&(c=c.add(h.wr)),!0)},l),J.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){xe(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return J.forEach(t.mutations,i=>{const o=new un(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new un(t,0),i=this.br.firstAfterOrEqual(r);return J.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(e){this.Mr=e,this.docs=function(){return new pt(Ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,l=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return J.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(t))}getEntries(e,t){let r=tr();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Et.newInvalidDocument(i))}),J.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=tr();const l=t.path,c=new Ee(l.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:p,value:{document:g}}=h.getNext();if(!l.isPrefixOf(p.path))break;p.path.length>l.length+1||Lv(N1(g),r)<=0||(i.has(g.key)||zd(t,g))&&(o=o.insert(g.key,g.mutableCopy()))}return J.resolve(o)}getAllFromCollectionGroup(e,t,r,i){Pe()}Or(e,t){return J.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new P4(this)}getSize(e){return J.resolve(this.size)}}class P4 extends jP{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),J.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4{constructor(e){this.persistence=e,this.Nr=new fo(t=>ma(t),Ud),this.lastRemoteSnapshotVersion=Ne.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Jv,this.targetCount=0,this.kr=wa.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),J.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new wa(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,J.resolve()}updateTargetData(e,t){return this.Kn(t),J.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.Nr.forEach((l,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(l),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),J.waitFor(o).next(()=>i)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return J.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),J.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(l=>{o.push(i.markPotentiallyOrphaned(e,l))}),J.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),J.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return J.resolve(r)}containsKey(e,t){return J.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Zn(0),this.Kr=!1,this.Kr=!0,this.$r=new S4,this.referenceDelegate=e(this),this.Ur=new A4(this),this.indexManager=new d4,this.remoteDocumentCache=function(i){return new R4(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new DP(t),this.Gr=new I4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new T4,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new b4(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){fe("MemoryPersistence","Starting transaction:",e);const i=new k4(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,t){return J.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class k4 extends V1{constructor(e){super(),this.currentSequenceNumber=e}}class rm{constructor(e){this.persistence=e,this.Jr=new Jv,this.Yr=null}static Zr(e){return new rm(e)}get Xr(){if(this.Yr)return this.Yr;throw Pe()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),J.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),J.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),J.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.Xr,r=>{const i=Ee.fromPath(r);return this.ei(e,i).next(o=>{o||t.removeEntry(i,Ne.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return J.or([()=>J.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{constructor(e){this.serializer=e}O(e,t,r,i){const o=new Yp("createOrUpgrade",t);r<1&&i>=1&&(function(h){h.createObjectStore("owner")}(e),function(h){h.createObjectStore("mutationQueues",{keyPath:"userId"}),h.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",mT,{unique:!0}),h.createObjectStore("documentMutations")}(e),nS(e),function(h){h.createObjectStore("remoteDocuments")}(e));let l=J.resolve();return r<3&&i>=3&&(r!==0&&(function(h){h.deleteObjectStore("targetDocuments"),h.deleteObjectStore("targets"),h.deleteObjectStore("targetGlobal")}(e),nS(e)),l=l.next(()=>function(h){const p=h.store("targetGlobal"),g={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ne.min().toTimestamp(),targetCount:0};return p.put("targetGlobalKey",g)}(o))),r<4&&i>=4&&(r!==0&&(l=l.next(()=>function(h,p){return p.store("mutations").U().next(g=>{h.deleteObjectStore("mutations"),h.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",mT,{unique:!0});const v=p.store("mutations"),T=g.map(x=>v.put(x));return J.waitFor(T)})}(e,o))),l=l.next(()=>{(function(h){h.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(l=l.next(()=>this.ni(o))),r<6&&i>=6&&(l=l.next(()=>(function(h){h.createObjectStore("remoteDocumentGlobal")}(e),this.ri(o)))),r<7&&i>=7&&(l=l.next(()=>this.ii(o))),r<8&&i>=8&&(l=l.next(()=>this.si(e,o))),r<9&&i>=9&&(l=l.next(()=>{(function(h){h.objectStoreNames.contains("remoteDocumentChanges")&&h.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(l=l.next(()=>this.oi(o))),r<11&&i>=11&&(l=l.next(()=>{(function(h){h.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(h){h.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(l=l.next(()=>{(function(h){const p=h.createObjectStore("documentOverlays",{keyPath:cU});p.createIndex("collectionPathOverlayIndex",dU,{unique:!1}),p.createIndex("collectionGroupOverlayIndex",hU,{unique:!1})})(e)})),r<13&&i>=13&&(l=l.next(()=>function(h){const p=h.createObjectStore("remoteDocumentsV14",{keyPath:Z2});p.createIndex("documentKeyIndex",eU),p.createIndex("collectionGroupIndex",tU)}(e)).next(()=>this._i(e,o)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(l=l.next(()=>this.ai(e,o))),r<15&&i>=15&&(l=l.next(()=>function(h){h.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),h.createObjectStore("indexState",{keyPath:oU}).createIndex("sequenceNumberIndex",aU,{unique:!1}),h.createObjectStore("indexEntries",{keyPath:lU}).createIndex("documentKeyIndex",uU,{unique:!1})}(e))),r<16&&i>=16&&(l=l.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&i>=17&&(l=l.next(()=>{(function(h){h.createObjectStore("globals",{keyPath:"name"})})(e)})),l}ri(e){let t=0;return e.store("remoteDocuments").J((r,i)=>{t+=mp(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(i=>J.forEach(i,o=>{const l=IDBKeyRange.bound([o.userId,-1],[o.userId,o.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",l).next(c=>J.forEach(c,h=>{xe(h.userId===o.userId);const p=Qo(this.serializer,h);return MP(e,o.userId,p).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const o=[];return r.J((l,c)=>{const h=new Xe(l),p=function(v){return[0,Un(v)]}(h);o.push(t.get(p).next(g=>g?J.resolve():(v=>t.put({targetId:0,path:Un(v),sequenceNumber:i.highestListenSequenceNumber}))(h)))}).next(()=>J.waitFor(o))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:sU});const r=t.store("collectionParents"),i=new Xv,o=l=>{if(i.add(l)){const c=l.lastSegment(),h=l.popLast();return r.put({collectionId:c,parent:Un(h)})}};return t.store("remoteDocuments").J({H:!0},(l,c)=>{const h=new Xe(l);return o(h.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([l,c,h],p)=>{const g=vi(c);return o(g.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,i)=>{const o=zc(i),l=NP(this.serializer,o);return t.put(l)})}_i(e,t){const r=t.store("remoteDocuments"),i=[];return r.J((o,l)=>{const c=t.store("remoteDocumentsV14"),h=function(v){return v.document?new Ee(Xe.fromString(v.document.name).popFirst(5)):v.noDocument?Ee.fromSegments(v.noDocument.path):v.unknownDocument?Ee.fromSegments(v.unknownDocument.path):Pe()}(l).path.toArray(),p={prefixPath:h.slice(0,h.length-2),collectionGroup:h[h.length-2],documentId:h[h.length-1],readTime:l.readTime||[0,0],unknownDocument:l.unknownDocument,noDocument:l.noDocument,document:l.document,hasCommittedMutations:!!l.hasCommittedMutations};i.push(c.put(p))}).next(()=>J.waitFor(i))}ai(e,t){const r=t.store("mutations"),i=zP(this.serializer),o=new $P(rm.Zr,this.serializer.ct);return r.U().next(l=>{const c=new Map;return l.forEach(h=>{var p;let g=(p=c.get(h.userId))!==null&&p!==void 0?p:We();Qo(this.serializer,h).keys().forEach(v=>g=g.add(v)),c.set(h.userId,g)}),J.forEach(c,(h,p)=>{const g=new dn(p),v=tm.lt(this.serializer,g),T=o.getIndexManager(g),x=nm.lt(g,this.serializer,T,o.referenceDelegate);return new BP(i,x,v,T).recalculateAndSaveOverlaysForDocumentKeys(new __(t,Zn.oe),h).next()})})}}function nS(n){n.createObjectStore("targetDocuments",{keyPath:rU}).createIndex("documentTargetsIndex",iU,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",nU,{unique:!0}),n.createObjectStore("targetGlobal")}const by="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Zv{constructor(e,t,r,i,o,l,c,h,p,g,v=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=o,this.window=l,this.document=c,this.ci=p,this.li=g,this.hi=v,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=T=>Promise.resolve(),!Zv.D())throw new de(ne.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new _4(this,i),this.Ai=t+"main",this.serializer=new DP(h),this.Ri=new Ei(this.Ai,this.hi,new C4(this.serializer)),this.$r=new s4,this.Ur=new f4(this.referenceDelegate,this.serializer),this.remoteDocumentCache=zP(this.serializer),this.Gr=new i4,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,g===!1&&Wt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new de(ne.FAILED_PRECONDITION,by);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Zn(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Tf(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(ho(e))return fe("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return fe("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Ac(e).get("owner").next(t=>J.resolve(this.vi(t)))}Ci(e){return Tf(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=rn(t,"clientMetadata");return r.U().next(i=>{const o=this.xi(i,18e5),l=i.filter(c=>o.indexOf(c)===-1);return J.forEach(l,c=>r.delete(c.clientId)).next(()=>l)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?J.resolve(!0):Ac(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new de(ne.FAILED_PRECONDITION,by);return!1}}return!(!this.networkEnabled||!this.inForeground)||Tf(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const o=!this.networkEnabled&&i.networkEnabled,l=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(o||l&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&fe("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new __(e,Zn.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Tf(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return nm.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new h4(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return tm.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){fe("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",o=function(h){return h===17?mU:h===16?pU:h===15?Mv:h===14?B1:h===13?z1:h===12?fU:h===11?j1:void Pe()}(this.hi);let l;return this.Ri.runTransaction(e,i,o,c=>(l=new __(c,this.Qr?this.Qr.next():Zn.oe),t==="readwrite-primary"?this.wi(l).next(h=>!!h||this.Si(l)).next(h=>{if(!h)throw Wt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new de(ne.FAILED_PRECONDITION,L1);return r(l)}).next(h=>this.Di(l).next(()=>h)):this.Ki(l).next(()=>r(l)))).then(c=>(l.raiseOnCommittedEvent(),c))}Ki(e){return Ac(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new de(ne.FAILED_PRECONDITION,by)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ac(e).put("owner",t)}static D(){return Ei.D()}bi(e){const t=Ac(e);return t.get("owner").next(r=>this.vi(r)?(fe("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):J.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Wt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;hR()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return fe("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Wt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Wt("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ac(n){return rn(n,"owner")}function Tf(n){return rn(n,"clientMetadata")}function ew(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=We(),i=We();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new tw(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return hR()?8:M1(Nt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.Yi(e,t).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.Zi(e,t,i,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new x4;return this.Xi(e,t,l).next(c=>{if(o.result=c,this.zi)return this.es(e,t,l,c.size)})}).next(()=>o.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Pl()<=Ye.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",Al(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),J.resolve()):(Pl()<=Ye.DEBUG&&fe("QueryEngine","Query:",Al(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Pl()<=Ye.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",Al(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,jn(t))):J.resolve())}Yi(e,t){if(AT(t))return J.resolve(null);let r=jn(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=hp(t,null,"F"),r=jn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const l=We(...o);return this.Ji.getDocuments(e,l).next(c=>this.indexManager.getMinOffset(e,r).next(h=>{const p=this.ts(t,c);return this.ns(t,p,l,h.readTime)?this.Yi(e,hp(t,null,"F")):this.rs(e,p,t,h)}))})))}Zi(e,t,r,i){return AT(t)||i.isEqual(Ne.min())?J.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const l=this.ts(t,o);return this.ns(t,l,r,i)?J.resolve(null):(Pl()<=Ye.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Al(t)),this.rs(e,l,t,D1(i,-1)).next(c=>c))})}ts(e,t){let r=new ut(iP(e));return t.forEach((i,o)=>{zd(e,o)&&(r=r.add(o))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,t,r){return Pl()<=Ye.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",Al(t)),this.Ji.getDocumentsMatchingQuery(e,t,mr.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O4{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new pt(Be),this._s=new fo(o=>ma(o),Ud),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BP(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function WP(n,e,t,r){return new O4(n,e,t,r)}async function HP(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],c=[];let h=We();for(const p of i){l.push(p.batchId);for(const g of p.mutations)h=h.add(g.key)}for(const p of o){c.push(p.batchId);for(const g of p.mutations)h=h.add(g.key)}return t.localDocuments.getDocuments(r,h).next(p=>({hs:p,removedBatchIds:l,addedBatchIds:c}))})})}function D4(n,e){const t=Ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,h,p,g){const v=p.batch,T=v.keys();let x=J.resolve();return T.forEach(L=>{x=x.next(()=>g.getEntry(h,L)).next(N=>{const U=p.docVersions.get(L);xe(U!==null),N.version.compareTo(U)<0&&(v.applyToRemoteDocument(N,p),N.isValidDocument()&&(N.setReadTime(p.commitVersion),g.addEntry(N)))})}),x.next(()=>c.mutationQueue.removeMutationBatch(h,v))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=We();for(let p=0;p<c.mutationResults.length;++p)c.mutationResults[p].transformResults.length>0&&(h=h.add(c.batch.mutations[p].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function GP(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function N4(n,e){const t=Ie(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const l=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const c=[];e.targetChanges.forEach((g,v)=>{const T=i.get(v);if(!T)return;c.push(t.Ur.removeMatchingKeys(o,g.removedDocuments,v).next(()=>t.Ur.addMatchingKeys(o,g.addedDocuments,v)));let x=T.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(v)!==null?x=x.withResumeToken(Ut.EMPTY_BYTE_STRING,Ne.min()).withLastLimboFreeSnapshotVersion(Ne.min()):g.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(g.resumeToken,r)),i=i.insert(v,x),function(N,U,q){return N.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(T,x,g)&&c.push(t.Ur.updateTargetData(o,x))});let h=tr(),p=We();if(e.documentUpdates.forEach(g=>{e.resolvedLimboDocuments.has(g)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(o,g))}),c.push(KP(o,l,e.documentUpdates).next(g=>{h=g.Ps,p=g.Is})),!r.isEqual(Ne.min())){const g=t.Ur.getLastRemoteSnapshotVersion(o).next(v=>t.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(g)}return J.waitFor(c).next(()=>l.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,p)).next(()=>h)}).then(o=>(t.os=i,o))}function KP(n,e,t){let r=We(),i=We();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let l=tr();return t.forEach((c,h)=>{const p=o.get(c);h.isFoundDocument()!==p.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(Ne.min())?(e.removeEntry(c,h.readTime),l=l.insert(c,h)):!p.isValidDocument()||h.version.compareTo(p.version)>0||h.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(h),l=l.insert(c,h)):fe("LocalStore","Ignoring outdated watch update for ",c,". Current version:",p.version," Watch version:",h.version)}),{Ps:l,Is:i}})}function L4(n,e){const t=Ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nu(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(o=>o?(i=o,J.resolve(i)):t.Ur.allocateTargetId(r).next(l=>(i=new Xi(e,l,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function ru(n,e,t){const r=Ie(n),i=r.os.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,l=>r.persistence.referenceDelegate.removeTarget(l,i))}catch(l){if(!ho(l))throw l;fe("LocalStore",`Failed to update sequence numbers for target ${e}: ${l}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function gp(n,e,t){const r=Ie(n);let i=Ne.min(),o=We();return r.persistence.runTransaction("Execute query","readwrite",l=>function(h,p,g){const v=Ie(h),T=v._s.get(g);return T!==void 0?J.resolve(v.os.get(T)):v.Ur.getTargetData(p,g)}(r,l,jn(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(l,c.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(l,e,t?i:Ne.min(),t?o:We())).next(c=>(XP(r,rP(e),c),{documents:c,Ts:o})))}function QP(n,e){const t=Ie(n),r=Ie(t.Ur),i=t.os.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",o=>r.ot(o,e).next(l=>l?l.target:null))}function YP(n,e){const t=Ie(n),r=t.us.get(e)||Ne.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.cs.getAllFromCollectionGroup(i,e,D1(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(XP(t,e,i),i))}function XP(n,e,t){let r=n.us.get(e)||Ne.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(e,r)}async function V4(n,e,t,r){const i=Ie(n);let o=We(),l=tr();for(const p of t){const g=e.Es(p.metadata.name);p.document&&(o=o.add(g));const v=e.ds(p);v.setReadTime(e.As(p.metadata.readTime)),l=l.insert(g,v)}const c=i.cs.newChangeBuffer({trackRemovals:!0}),h=await nu(i,function(g){return jn(wu(Xe.fromString(`__bundle__/docs/${g}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",p=>KP(p,c,l).next(g=>(c.apply(p),g)).next(g=>i.Ur.removeMatchingKeysForTargetId(p,h.targetId).next(()=>i.Ur.addMatchingKeys(p,o,h.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(p,g.Ps,g.Is)).next(()=>g.Ps)))}async function M4(n,e,t=We()){const r=await nu(n,jn(Qv(e.bundledQuery))),i=Ie(n);return i.persistence.runTransaction("Save named query","readwrite",o=>{const l=Ht(e.readTime);if(r.snapshotVersion.compareTo(l)>=0)return i.Gr.saveNamedQuery(o,e);const c=r.withResumeToken(Ut.EMPTY_BYTE_STRING,l);return i.os=i.os.insert(c.targetId,c),i.Ur.updateTargetData(o,c).next(()=>i.Ur.removeMatchingKeysForTargetId(o,r.targetId)).next(()=>i.Ur.addMatchingKeys(o,t,r.targetId)).next(()=>i.Gr.saveNamedQuery(o,e))})}function rS(n,e){return`firestore_clients_${n}_${e}`}function iS(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Ry(n,e){return`firestore_targets_${n}_${e}`}class yp{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Rs(e,t,r){const i=JSON.parse(r);let o,l=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return l&&i.error&&(l=typeof i.error.message=="string"&&typeof i.error.code=="string",l&&(o=new de(i.error.code,i.error.message))),l?new yp(e,t,i.state,o):(Wt("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Xc{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let i,o=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(i=new de(r.error.code,r.error.message))),o?new Xc(e,r.state,i):(Wt("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class _p{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,o=zv();for(let l=0;i&&l<r.activeTargetIds.length;++l)i=F1(r.activeTargetIds[l]),o=o.add(r.activeTargetIds[l]);return i?new _p(e,o):(Wt("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class nw{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new nw(t.clientId,t.onlineState):(Wt("SharedClientState",`Failed to parse online state: ${e}`),null)}}class O_{constructor(){this.activeTargetIds=zv()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Py{constructor(e,t,r,i,o){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new pt(Be),this.started=!1,this.bs=[];const l=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=o,this.Ds=rS(this.persistenceKey,this.ps),this.vs=function(h){return`firestore_sequence_number_${h}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new O_),this.Cs=new RegExp(`^firestore_clients_${l}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${l}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${l}_(\\d+)$`),this.xs=function(h){return`firestore_online_state_${h}`}(this.persistenceKey),this.Os=function(h){return`firestore_bundle_loaded_v2_${h}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const i=this.getItem(rS(this.persistenceKey,r));if(i){const o=_p.Rs(r,i);o&&(this.Ss=this.Ss.insert(o.clientId,o))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Ry(this.persistenceKey,e));if(i){const o=Xc.Rs(e,i);o&&(r=o.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ry(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Qs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return fe("SharedClientState","READ",e,t),t}setItem(e,t){fe("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){fe("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(fe("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void Wt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(o){let l=Zn.oe;if(o!=null)try{const c=JSON.parse(o);xe(typeof c=="number"),l=c}catch(c){Wt("SharedClientState","Failed to read sequence number from WebStorage",c)}return l}(t.newValue);r!==Zn.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const i=new yp(this.currentUser,e,t,r),o=iS(this.persistenceKey,this.currentUser,e);this.setItem(o,i.Vs())}Qs(e){const t=iS(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const i=Ry(this.persistenceKey,e),o=new Xc(e,t,r);this.setItem(i,o.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return _p.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),i=Number(r[1]),o=r[2]!==void 0?r[2]:null;return yp.Rs(new dn(o),i,t)}Ys(e,t){const r=this.Ms.exec(e),i=Number(r[1]);return Xc.Rs(i,t)}Ls(e){return nw.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);fe("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),i=this.ks(this.Ss),o=this.ks(r),l=[],c=[];return o.forEach(h=>{i.has(h)||l.push(h)}),i.forEach(h=>{o.has(h)||c.push(h)}),this.syncEngine.io(l,c).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=zv();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class JP{constructor(){this.so=new O_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new O_,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F4{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){fe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){fe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sf=null;function Ay(){return Sf===null?Sf=function(){return 268435456+Math.round(2147483648*Math.random())}():Sf++,"0x"+Sf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="WebChannelConnection";class z4 extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(t,r,i,o,l){const c=Ay(),h=this.xo(t,r.toUriEncodedString());fe("RestConnection",`Sending RPC '${t}' ${c}:`,h,i);const p={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(p,o,l),this.No(t,h,p,i).then(g=>(fe("RestConnection",`Received RPC '${t}' ${c}: `,g),g),g=>{throw Ri("RestConnection",`RPC '${t}' ${c} failed with error: `,g,"url: ",h,"request:",i),g})}Lo(t,r,i,o,l,c){return this.Mo(t,r,i,o,l)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vu}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,l)=>t[l]=o),i&&i.headers.forEach((o,l)=>t[l]=o)}xo(t,r){const i=U4[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const o=Ay();return new Promise((l,c)=>{const h=new b1;h.setWithCredentials(!0),h.listenOnce(R1.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Bf.NO_ERROR:const g=h.getResponseJson();fe(Rn,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),l(g);break;case Bf.TIMEOUT:fe(Rn,`RPC '${e}' ${o} timed out`),c(new de(ne.DEADLINE_EXCEEDED,"Request time out"));break;case Bf.HTTP_ERROR:const v=h.getStatus();if(fe(Rn,`RPC '${e}' ${o} failed with status:`,v,"response text:",h.getResponseText()),v>0){let T=h.getResponseJson();Array.isArray(T)&&(T=T[0]);const x=T==null?void 0:T.error;if(x&&x.status&&x.message){const L=function(U){const q=U.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(q)>=0?q:ne.UNKNOWN}(x.status);c(new de(L,x.message))}else c(new de(ne.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new de(ne.UNAVAILABLE,"Connection failed."));break;default:Pe()}}finally{fe(Rn,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(i);fe(Rn,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",p,r,15)})}Bo(e,t,r){const i=Ay(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=k1(),c=A1(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(h.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const g=o.join("");fe(Rn,`Creating RPC '${e}' stream ${i}: ${g}`,h);const v=l.createWebChannel(g,h);let T=!1,x=!1;const L=new j4({Io:U=>{x?fe(Rn,`Not sending because RPC '${e}' stream ${i} is closed:`,U):(T||(fe(Rn,`Opening RPC '${e}' stream ${i} transport.`),v.open(),T=!0),fe(Rn,`RPC '${e}' stream ${i} sending:`,U),v.send(U))},To:()=>v.close()}),N=(U,q,G)=>{U.listen(q,H=>{try{G(H)}catch(X){setTimeout(()=>{throw X},0)}})};return N(v,Fc.EventType.OPEN,()=>{x||(fe(Rn,`RPC '${e}' stream ${i} transport opened.`),L.yo())}),N(v,Fc.EventType.CLOSE,()=>{x||(x=!0,fe(Rn,`RPC '${e}' stream ${i} transport closed`),L.So())}),N(v,Fc.EventType.ERROR,U=>{x||(x=!0,Ri(Rn,`RPC '${e}' stream ${i} transport errored:`,U),L.So(new de(ne.UNAVAILABLE,"The operation could not be completed")))}),N(v,Fc.EventType.MESSAGE,U=>{var q;if(!x){const G=U.data[0];xe(!!G);const H=G,X=H.error||((q=H[0])===null||q===void 0?void 0:q.error);if(X){fe(Rn,`RPC '${e}' stream ${i} received error:`,X);const V=X.status;let F=function(b){const w=Yt[b];if(w!==void 0)return yP(w)}(V),R=X.message;F===void 0&&(F=ne.INTERNAL,R="Unknown error status: "+V+" with message "+X.message),x=!0,L.So(new de(F,R)),v.close()}else fe(Rn,`RPC '${e}' stream ${i} received:`,G),L.bo(G)}}),N(c,P1.STAT_EVENT,U=>{U.stat===g_.PROXY?fe(Rn,`RPC '${e}' stream ${i} detected buffering proxy`):U.stat===g_.NOPROXY&&fe(Rn,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{L.wo()},0),L}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZP(){return typeof window<"u"?window:null}function Qf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(n){return new GU(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&fe("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,t,r,i,o,l,c,h){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new rw(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===ne.RESOURCE_EXHAUSTED?(Wt(t.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new de(ne.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return fe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(fe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class B4 extends eA{constructor(e,t,r,i,o,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,l),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=YU(this.serializer,e),r=function(o){if(!("targetChange"in o))return Ne.min();const l=o.targetChange;return l.targetIds&&l.targetIds.length?Ne.min():l.readTime?Ht(l.readTime):Ne.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=P_(this.serializer),t.addTarget=function(o,l){let c;const h=l.target;if(c=cp(h)?{documents:PP(o,h)}:{query:AP(o,h)._t},c.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){c.resumeToken=EP(o,l.resumeToken);const p=b_(o,l.expectedCount);p!==null&&(c.expectedCount=p)}else if(l.snapshotVersion.compareTo(Ne.min())>0){c.readTime=tu(o,l.snapshotVersion.toTimestamp());const p=b_(o,l.expectedCount);p!==null&&(c.expectedCount=p)}return c}(this.serializer,e);const r=JU(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=P_(this.serializer),t.removeTarget=e,this.a_(t)}}class $4 extends eA{constructor(e,t,r,i,o,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,l),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return xe(!!e.streamToken),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=XU(e.writeResults,e.commitTime),r=Ht(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=P_(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>vd(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4 extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new de(ne.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Mo(e,R_(t,r),i,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new de(ne.UNKNOWN,o.toString())})}Lo(e,t,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Lo(e,R_(t,r),i,l,c,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new de(ne.UNKNOWN,l.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class W4{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Wt(t),this.D_=!1):fe("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(l=>{r.enqueueAndForget(async()=>{po(this)&&(fe("RemoteStore","Restarting streams for network reachability change."),await async function(h){const p=Ie(h);p.L_.add(4),await Tu(p),p.q_.set("Unknown"),p.L_.delete(4),await Hd(p)}(this))})}),this.q_=new W4(r,i)}}async function Hd(n){if(po(n))for(const e of n.B_)await e(!0)}async function Tu(n){for(const e of n.B_)await e(!1)}function im(n,e){const t=Ie(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),ow(t)?sw(t):bu(t).r_()&&iw(t,e))}function iu(n,e){const t=Ie(n),r=bu(t);t.N_.delete(e),r.r_()&&tA(t,e),t.N_.size===0&&(r.r_()?r.o_():po(t)&&t.q_.set("Unknown"))}function iw(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ne.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}bu(n).A_(e)}function tA(n,e){n.Q_.xe(e),bu(n).R_(e)}function sw(n){n.Q_=new $U({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),bu(n).start(),n.q_.v_()}function ow(n){return po(n)&&!bu(n).n_()&&n.N_.size>0}function po(n){return Ie(n).L_.size===0}function nA(n){n.Q_=void 0}async function G4(n){n.q_.set("Online")}async function K4(n){n.N_.forEach((e,t)=>{iw(n,e)})}async function Q4(n,e){nA(n),ow(n)?(n.q_.M_(e),sw(n)):n.q_.set("Unknown")}async function Y4(n,e,t){if(n.q_.set("Online"),e instanceof wP&&e.state===2&&e.cause)try{await async function(i,o){const l=o.cause;for(const c of o.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,l),i.N_.delete(c),i.Q_.removeTarget(c))}(n,e)}catch(r){fe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vp(n,r)}else if(e instanceof Kf?n.Q_.Ke(e):e instanceof vP?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Ne.min()))try{const r=await GP(n.localStore);t.compareTo(r)>=0&&await function(o,l){const c=o.Q_.rt(l);return c.targetChanges.forEach((h,p)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.N_.get(p);g&&o.N_.set(p,g.withResumeToken(h.resumeToken,l))}}),c.targetMismatches.forEach((h,p)=>{const g=o.N_.get(h);if(!g)return;o.N_.set(h,g.withResumeToken(Ut.EMPTY_BYTE_STRING,g.snapshotVersion)),tA(o,h);const v=new Xi(g.target,h,p,g.sequenceNumber);iw(o,v)}),o.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){fe("RemoteStore","Failed to raise snapshot:",r),await vp(n,r)}}async function vp(n,e,t){if(!ho(e))throw e;n.L_.add(1),await Tu(n),n.q_.set("Offline"),t||(t=()=>GP(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{fe("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Hd(n)})}function rA(n,e){return e().catch(t=>vp(n,t,e))}async function Su(n){const e=Ie(n),t=oo(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;X4(e);)try{const i=await L4(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,J4(e,i)}catch(i){await vp(e,i)}iA(e)&&sA(e)}function X4(n){return po(n)&&n.O_.length<10}function J4(n,e){n.O_.push(e);const t=oo(n);t.r_()&&t.V_&&t.m_(e.mutations)}function iA(n){return po(n)&&!oo(n).n_()&&n.O_.length>0}function sA(n){oo(n).start()}async function Z4(n){oo(n).p_()}async function ej(n){const e=oo(n);for(const t of n.O_)e.m_(t.mutations)}async function tj(n,e,t){const r=n.O_.shift(),i=Wv.from(r,e,t);await rA(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Su(n)}async function nj(n,e){e&&oo(n).V_&&await async function(r,i){if(function(l){return gP(l)&&l!==ne.ABORTED}(i.code)){const o=r.O_.shift();oo(r).s_(),await rA(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Su(r)}}(n,e),iA(n)&&sA(n)}async function oS(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),fe("RemoteStore","RemoteStore received new credentials");const r=po(t);t.L_.add(3),await Tu(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Hd(t)}async function D_(n,e){const t=Ie(n);e?(t.L_.delete(2),await Hd(t)):e||(t.L_.add(2),await Tu(t),t.q_.set("Unknown"))}function bu(n){return n.K_||(n.K_=function(t,r,i){const o=Ie(t);return o.w_(),new B4(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:G4.bind(null,n),Ro:K4.bind(null,n),mo:Q4.bind(null,n),d_:Y4.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),ow(n)?sw(n):n.q_.set("Unknown")):(await n.K_.stop(),nA(n))})),n.K_}function oo(n){return n.U_||(n.U_=function(t,r,i){const o=Ie(t);return o.w_(),new $4(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Z4.bind(null,n),mo:nj.bind(null,n),f_:ej.bind(null,n),g_:tj.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Su(n)):(await n.U_.stop(),n.O_.length>0&&(fe("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const l=Date.now()+r,c=new aw(e,t,l,i,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ru(n,e){if(Wt("AsyncQueue",`${e}: ${n}`),ho(n))return new de(ne.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e){this.comparator=e?(t,r)=>e(t,r)||Ee.comparator(t.key,r.key):(t,r)=>Ee.comparator(t.key,r.key),this.keyedMap=Uc(),this.sortedSet=new pt(this.comparator)}static emptySet(e){return new Ul(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ul)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ul;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(){this.W_=new pt(Ee.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Pe():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class su{constructor(e,t,r,i,o,l,c,h,p){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=l,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=p}static fromInitialDocuments(e,t,r,i,o){const l=[];return t.forEach(c=>{l.push({type:0,doc:c})}),new su(e,t,Ul.emptySet(t),l,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rj{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class ij{constructor(){this.queries=lS(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=Ie(t),o=i.queries;i.queries=lS(),o.forEach((l,c)=>{for(const h of c.j_)h.onError(r)})})(this,new de(ne.ABORTED,"Firestore shutting down"))}}function lS(){return new fo(n=>nP(n),jd)}async function lw(n,e){const t=Ie(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new rj,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await t.onListen(i,!0);break;case 1:o.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(l){const c=Ru(l,`Initialization of query '${Al(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,o),o.j_.push(e),e.Z_(t.onlineState),o.z_&&e.X_(o.z_)&&cw(t)}async function uw(n,e){const t=Ie(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const l=o.j_.indexOf(e);l>=0&&(o.j_.splice(l,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function sj(n,e){const t=Ie(n);let r=!1;for(const i of e){const o=i.query,l=t.queries.get(o);if(l){for(const c of l.j_)c.X_(i)&&(r=!0);l.z_=i}}r&&cw(t)}function oj(n,e,t){const r=Ie(n),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(t);r.queries.delete(e)}function cw(n){n.Y_.forEach(e=>{e.next()})}var N_,uS;(uS=N_||(N_={})).ea="default",uS.Cache="cache";class dw{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new su(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=su.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==N_.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aj{constructor(e,t){this.aa=e,this.byteLength=t}ua(){return"metadata"in this.aa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e){this.serializer=e}Es(e){return Ii(this.serializer,e)}ds(e){return e.metadata.exists?RP(this.serializer,e.document,!1):Et.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return Ht(e)}}class lj{constructor(e,t,r){this.ca=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=oA(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++t;const r=Xe.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ha(e){const t=new Map,r=new cS(this.serializer);for(const i of e)if(i.metadata.queries){const o=r.Es(i.metadata.name);for(const l of i.metadata.queries){const c=(t.get(l)||We()).add(o);t.set(l,c)}}return t}async complete(){const e=await V4(this.localStore,new cS(this.serializer),this.documents,this.ca.id),t=this.ha(this.documents);for(const r of this.queries)await M4(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function oA(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.key=e}}class lA{constructor(e){this.key=e}}class uA{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=We(),this.mutatedKeys=We(),this.Aa=iP(e),this.Ra=new Ul(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new aS,i=t?t.Ra:this.Ra;let o=t?t.mutatedKeys:this.mutatedKeys,l=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,p=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((g,v)=>{const T=i.get(g),x=zd(this.query,v)?v:null,L=!!T&&this.mutatedKeys.has(T.key),N=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let U=!1;T&&x?T.data.isEqual(x.data)?L!==N&&(r.track({type:3,doc:x}),U=!0):this.ga(T,x)||(r.track({type:2,doc:x}),U=!0,(h&&this.Aa(x,h)>0||p&&this.Aa(x,p)<0)&&(c=!0)):!T&&x?(r.track({type:0,doc:x}),U=!0):T&&!x&&(r.track({type:1,doc:T}),U=!0,(h||p)&&(c=!0)),U&&(x?(l=l.add(x),o=N?o.add(g):o.delete(g)):(l=l.delete(g),o=o.delete(g)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const g=this.query.limitType==="F"?l.last():l.first();l=l.delete(g.key),o=o.delete(g.key),r.track({type:1,doc:g})}return{Ra:l,fa:r,ns:c,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const l=e.fa.G_();l.sort((g,v)=>function(x,L){const N=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Pe()}};return N(x)-N(L)}(g.type,v.type)||this.Aa(g.doc,v.doc)),this.pa(r),i=i!=null&&i;const c=t&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,p=h!==this.Ea;return this.Ea=h,l.length!==0||p?{snapshot:new su(this.query,e.Ra,o,l,e.mutatedKeys,h===0,p,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new aS,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=We(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new lA(r))}),this.da.forEach(r=>{e.has(r)||t.push(new aA(r))}),t}ba(e){this.Ta=e.Ts,this.da=We();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return su.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class uj{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class cj{constructor(e){this.key=e,this.va=!1}}class dj{constructor(e,t,r,i,o,l){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Ca={},this.Fa=new fo(c=>nP(c),jd),this.Ma=new Map,this.xa=new Set,this.Oa=new pt(Ee.comparator),this.Na=new Map,this.La=new Jv,this.Ba={},this.ka=new Map,this.qa=wa.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function hj(n,e,t=!0){const r=sm(n);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await cA(r,e,t,!0),i}async function fj(n,e){const t=sm(n);await cA(t,e,!0,!1)}async function cA(n,e,t,r){const i=await nu(n.localStore,jn(e)),o=i.targetId,l=n.sharedClientState.addLocalQueryTarget(o,t);let c;return r&&(c=await hw(n,e,o,l==="current",i.resumeToken)),n.isPrimaryClient&&t&&im(n.remoteStore,i),c}async function hw(n,e,t,r,i){n.Ka=(v,T,x)=>async function(N,U,q,G){let H=U.view.ma(q);H.ns&&(H=await gp(N.localStore,U.query,!1).then(({documents:R})=>U.view.ma(R,H)));const X=G&&G.targetChanges.get(U.targetId),V=G&&G.targetMismatches.get(U.targetId)!=null,F=U.view.applyChanges(H,N.isPrimaryClient,X,V);return L_(N,U.targetId,F.wa),F.snapshot}(n,v,T,x);const o=await gp(n.localStore,e,!0),l=new uA(e,o.Ts),c=l.ma(o.documents),h=qd.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),p=l.applyChanges(c,n.isPrimaryClient,h);L_(n,t,p.wa);const g=new uj(e,t,l);return n.Fa.set(e,g),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),p.snapshot}async function pj(n,e,t){const r=Ie(n),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(l=>!jd(l,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ru(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&iu(r.remoteStore,i.targetId),ou(r,i.targetId)}).catch(co)):(ou(r,i.targetId),await ru(r.localStore,i.targetId,!0))}async function mj(n,e){const t=Ie(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),iu(t.remoteStore,r.targetId))}async function gj(n,e,t){const r=gw(n);try{const i=await function(l,c){const h=Ie(l),p=At.now(),g=c.reduce((x,L)=>x.add(L.key),We());let v,T;return h.persistence.runTransaction("Locally write mutations","readwrite",x=>{let L=tr(),N=We();return h.cs.getEntries(x,g).next(U=>{L=U,L.forEach((q,G)=>{G.isValidDocument()||(N=N.add(q))})}).next(()=>h.localDocuments.getOverlayedDocuments(x,L)).next(U=>{v=U;const q=[];for(const G of c){const H=jU(G,v.get(G.key).overlayedDocument);H!=null&&q.push(new hs(G.key,H,G1(H.value.mapValue),Pt.exists(!0)))}return h.mutationQueue.addMutationBatch(x,p,q,c)}).next(U=>{T=U;const q=U.applyToLocalDocumentSet(v,N);return h.documentOverlayCache.saveOverlays(x,U.batchId,q)})}).then(()=>({batchId:T.batchId,changes:oP(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(l,c,h){let p=l.Ba[l.currentUser.toKey()];p||(p=new pt(Be)),p=p.insert(c,h),l.Ba[l.currentUser.toKey()]=p}(r,i.batchId,t),await fs(r,i.changes),await Su(r.remoteStore)}catch(i){const o=Ru(i,"Failed to persist write");t.reject(o)}}async function dA(n,e){const t=Ie(n);try{const r=await N4(t.localStore,e);e.targetChanges.forEach((i,o)=>{const l=t.Na.get(o);l&&(xe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?l.va=!0:i.modifiedDocuments.size>0?xe(l.va):i.removedDocuments.size>0&&(xe(l.va),l.va=!1))}),await fs(t,r,e)}catch(r){await co(r)}}function dS(n,e,t){const r=Ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((o,l)=>{const c=l.view.Z_(e);c.snapshot&&i.push(c.snapshot)}),function(l,c){const h=Ie(l);h.onlineState=c;let p=!1;h.queries.forEach((g,v)=>{for(const T of v.j_)T.Z_(c)&&(p=!0)}),p&&cw(h)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yj(n,e,t){const r=Ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),o=i&&i.key;if(o){let l=new pt(Ee.comparator);l=l.insert(o,Et.newNoDocument(o,Ne.min()));const c=We().add(o),h=new $d(Ne.min(),new Map,new pt(Be),l,c);await dA(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(e),mw(r)}else await ru(r.localStore,e,!1).then(()=>ou(r,e,t)).catch(co)}async function _j(n,e){const t=Ie(n),r=e.batch.batchId;try{const i=await D4(t.localStore,e);pw(t,r,null),fw(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await fs(t,i)}catch(i){await co(i)}}async function vj(n,e,t){const r=Ie(n);try{const i=await function(l,c){const h=Ie(l);return h.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let g;return h.mutationQueue.lookupMutationBatch(p,c).next(v=>(xe(v!==null),g=v.keys(),h.mutationQueue.removeMutationBatch(p,v))).next(()=>h.mutationQueue.performConsistencyCheck(p)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(p,g,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,g)).next(()=>h.localDocuments.getDocuments(p,g))})}(r.localStore,e);pw(r,e,t),fw(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await fs(r,i)}catch(i){await co(i)}}async function wj(n,e){const t=Ie(n);po(t.remoteStore)||fe("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(l){const c=Ie(l);return c.persistence.runTransaction("Get highest unacknowledged batch id","readonly",h=>c.mutationQueue.getHighestUnacknowledgedBatchId(h))}(t.localStore);if(r===-1)return void e.resolve();const i=t.ka.get(r)||[];i.push(e),t.ka.set(r,i)}catch(r){const i=Ru(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function fw(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function pw(n,e,t){const r=Ie(n);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function ou(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||hA(n,r)})}function hA(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(iu(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),mw(n))}function L_(n,e,t){for(const r of t)r instanceof aA?(n.La.addReference(r.key,e),Ej(n,r)):r instanceof lA?(fe("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||hA(n,r.key)):Pe()}function Ej(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(fe("SyncEngine","New document in limbo: "+t),n.xa.add(r),mw(n))}function mw(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new Ee(Xe.fromString(e)),r=n.qa.next();n.Na.set(r,new cj(t)),n.Oa=n.Oa.insert(t,r),im(n.remoteStore,new Xi(jn(wu(t.path)),r,"TargetPurposeLimboResolution",Zn.oe))}}async function fs(n,e,t){const r=Ie(n),i=[],o=[],l=[];r.Fa.isEmpty()||(r.Fa.forEach((c,h)=>{l.push(r.Ka(h,e,t).then(p=>{var g;if((p||t)&&r.isPrimaryClient){const v=p?!p.fromCache:(g=t==null?void 0:t.targetChanges.get(h.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(p){i.push(p);const v=tw.Wi(h.targetId,p);o.push(v)}}))}),await Promise.all(l),r.Ca.d_(i),await async function(h,p){const g=Ie(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>J.forEach(p,T=>J.forEach(T.$i,x=>g.persistence.referenceDelegate.addReference(v,T.targetId,x)).next(()=>J.forEach(T.Ui,x=>g.persistence.referenceDelegate.removeReference(v,T.targetId,x)))))}catch(v){if(!ho(v))throw v;fe("LocalStore","Failed to update sequence numbers: "+v)}for(const v of p){const T=v.targetId;if(!v.fromCache){const x=g.os.get(T),L=x.snapshotVersion,N=x.withLastLimboFreeSnapshotVersion(L);g.os=g.os.insert(T,N)}}}(r.localStore,o))}async function Ij(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){fe("SyncEngine","User change. New user:",e.toKey());const r=await HP(t.localStore,e);t.currentUser=e,function(o,l){o.ka.forEach(c=>{c.forEach(h=>{h.reject(new de(ne.CANCELLED,l))})}),o.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fs(t,r.hs)}}function Tj(n,e){const t=Ie(n),r=t.Na.get(e);if(r&&r.va)return We().add(r.key);{let i=We();const o=t.Ma.get(e);if(!o)return i;for(const l of o){const c=t.Fa.get(l);i=i.unionWith(c.view.Va)}return i}}async function Sj(n,e){const t=Ie(n),r=await gp(t.localStore,e.query,!0),i=e.view.ba(r);return t.isPrimaryClient&&L_(t,e.targetId,i.wa),i}async function bj(n,e){const t=Ie(n);return YP(t.localStore,e).then(r=>fs(t,r))}async function Rj(n,e,t,r){const i=Ie(n),o=await function(c,h){const p=Ie(c),g=Ie(p.mutationQueue);return p.persistence.runTransaction("Lookup mutation documents","readonly",v=>g.Mn(v,h).next(T=>T?p.localDocuments.getDocuments(v,T):J.resolve(null)))}(i.localStore,e);o!==null?(t==="pending"?await Su(i.remoteStore):t==="acknowledged"||t==="rejected"?(pw(i,e,r||null),fw(i,e),function(c,h){Ie(Ie(c).mutationQueue).On(h)}(i.localStore,e)):Pe(),await fs(i,o)):fe("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Pj(n,e){const t=Ie(n);if(sm(t),gw(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await hS(t,r.toArray());t.Qa=!0,await D_(t.remoteStore,!0);for(const o of i)im(t.remoteStore,o)}else if(e===!1&&t.Qa!==!1){const r=[];let i=Promise.resolve();t.Ma.forEach((o,l)=>{t.sharedClientState.isLocalQueryTarget(l)?r.push(l):i=i.then(()=>(ou(t,l),ru(t.localStore,l,!0))),iu(t.remoteStore,l)}),await i,await hS(t,r),function(l){const c=Ie(l);c.Na.forEach((h,p)=>{iu(c.remoteStore,p)}),c.La.pr(),c.Na=new Map,c.Oa=new pt(Ee.comparator)}(t),t.Qa=!1,await D_(t.remoteStore,!1)}}async function hS(n,e,t){const r=Ie(n),i=[],o=[];for(const l of e){let c;const h=r.Ma.get(l);if(h&&h.length!==0){c=await nu(r.localStore,jn(h[0]));for(const p of h){const g=r.Fa.get(p),v=await Sj(r,g);v.snapshot&&o.push(v.snapshot)}}else{const p=await QP(r.localStore,l);c=await nu(r.localStore,p),await hw(r,fA(p),l,!1,c.resumeToken)}i.push(c)}return r.Ca.d_(o),i}function fA(n){return tP(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function Aj(n){return function(t){return Ie(Ie(t).persistence).Qi()}(Ie(n).localStore)}async function kj(n,e,t,r){const i=Ie(n);if(i.Qa)return void fe("SyncEngine","Ignoring unexpected query state notification.");const o=i.Ma.get(e);if(o&&o.length>0)switch(t){case"current":case"not-current":{const l=await YP(i.localStore,rP(o[0])),c=$d.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ut.EMPTY_BYTE_STRING);await fs(i,l,c);break}case"rejected":await ru(i.localStore,e,!0),ou(i,e,r);break;default:Pe()}}async function Cj(n,e,t){const r=sm(n);if(r.Qa){for(const i of e){if(r.Ma.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){fe("SyncEngine","Adding an already active target "+i);continue}const o=await QP(r.localStore,i),l=await nu(r.localStore,o);await hw(r,fA(o),l.targetId,!1,l.resumeToken),im(r.remoteStore,l)}for(const i of t)r.Ma.has(i)&&await ru(r.localStore,i,!1).then(()=>{iu(r.remoteStore,i),ou(r,i)}).catch(co)}}function sm(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=dA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Tj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yj.bind(null,e),e.Ca.d_=sj.bind(null,e.eventManager),e.Ca.$a=oj.bind(null,e.eventManager),e}function gw(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_j.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vj.bind(null,e),e}function xj(n,e,t){const r=Ie(n);(async function(o,l,c){try{const h=await l.getMetadata();if(await function(x,L){const N=Ie(x),U=Ht(L.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",q=>N.Gr.getBundleMetadata(q,L.id)).then(q=>!!q&&q.createTime.compareTo(U)>=0)}(o.localStore,h))return await l.close(),c._completeWith(function(x){return{taskState:"Success",documentsLoaded:x.totalDocuments,bytesLoaded:x.totalBytes,totalDocuments:x.totalDocuments,totalBytes:x.totalBytes}}(h)),Promise.resolve(new Set);c._updateProgress(oA(h));const p=new lj(h,o.localStore,l.serializer);let g=await l.Ua();for(;g;){const T=await p.la(g);T&&c._updateProgress(T),g=await l.Ua()}const v=await p.complete();return await fs(o,v.Ia,void 0),await function(x,L){const N=Ie(x);return N.persistence.runTransaction("Save bundle","readwrite",U=>N.Gr.saveBundleMetadata(U,L))}(o.localStore,h),c._completeWith(v.progress),Promise.resolve(v.Pa)}catch(h){return Ri("SyncEngine",`Loading bundle failed with ${h}`),c._failWith(h),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class wd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return WP(this.persistence,new qP,e.initialUser,this.serializer)}Ga(e){return new $P(rm.Zr,this.serializer)}Wa(e){return new JP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wd.provider={build:()=>new wd};class pA extends wd{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await gw(this.Ja.syncEngine),await Su(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return WP(this.persistence,new qP,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new m4(r,e.asyncQueue,t)}Ha(e,t){const r=new Y2(t,this.persistence);return new Q2(e.asyncQueue,r)}Ga(e){const t=ew(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Xn.withCacheSize(this.cacheSizeBytes):Xn.DEFAULT;return new Zv(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,ZP(),Qf(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new JP}}class Oj extends pA{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Py&&(this.sharedClientState.syncEngine={no:Rj.bind(null,t),ro:kj.bind(null,t),io:Cj.bind(null,t),Qi:Aj.bind(null,t),eo:bj.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await Pj(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=ZP();if(!Py.D(t))throw new de(ne.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=ew(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Py(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Ed{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dS(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ij.bind(null,this.syncEngine),await D_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ij}()}createDatastore(e){const t=Wd(e.databaseInfo.databaseId),r=function(o){return new z4(o)}(e.databaseInfo);return function(o,l,c,h){return new q4(o,l,c,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,l,c){return new H4(r,i,o,l,c)}(this.localStore,this.datastore,e.asyncQueue,t=>dS(this.syncEngine,t,0),function(){return sS.D()?new sS:new F4}())}createSyncEngine(e,t){return function(i,o,l,c,h,p,g){const v=new dj(i,o,l,c,h,p);return g&&(v.Qa=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=Ie(i);fe("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Tu(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ed.provider={build:()=>new Ed};function fS(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Wt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dj{constructor(e,t){this.Xa=e,this.serializer=t,this.metadata=new wn,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.aa)}`))},r=>this.metadata.reject(r))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const t=this.eu.decode(e),r=Number(t);isNaN(r)&&this.ru(`length string (${t}) is not valid number`);const i=await this.iu(r);return new aj(JSON.parse(i),e.length+r)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const t=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nj{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new de(ne.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,o){const l=Ie(i),c={documents:o.map(v=>_d(l.serializer,v))},h=await l.Lo("BatchGetDocuments",l.serializer.databaseId,Xe.emptyPath(),c,o.length),p=new Map;h.forEach(v=>{const T=QU(l.serializer,v);p.set(T.key.toString(),T)});const g=[];return o.forEach(v=>{const T=p.get(v.toString());xe(!!T),g.push(T)}),g}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Iu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=Ee.fromPath(r);this.mutations.push(new $v(i,this.precondition(i)))}),await async function(r,i){const o=Ie(r),l={writes:i.map(c=>vd(o.serializer,c))};await o.Mo("Commit",o.serializer.databaseId,Xe.emptyPath(),l)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Pe();t=Ne.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new de(ne.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Ne.min())?Pt.exists(!1):Pt.updateTime(t):Pt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Ne.min()))throw new de(ne.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Pt.updateTime(t)}return Pt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lj{constructor(e,t,r,i,o){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=o,this._u=r.maxAttempts,this.t_=new rw(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new Nj(this.datastore),t=this.cu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const t=this.updateFunction(e);return!Fd(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!gP(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vj{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=dn.UNAUTHENTICATED,this.clientId=x1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async l=>{fe("FirestoreClient","Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(fe("FirestoreClient","Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ru(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ky(n,e){n.asyncQueue.verifyOperationInProgress(),fe("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await HP(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function pS(n,e){n.asyncQueue.verifyOperationInProgress();const t=await yw(n);fe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>oS(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>oS(e.remoteStore,i)),n._onlineComponents=e}async function yw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){fe("FirestoreClient","Using user provided OfflineComponentProvider");try{await ky(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===ne.FAILED_PRECONDITION||i.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Ri("Error using user provided cache. Falling back to memory cache: "+t),await ky(n,new wd)}}else fe("FirestoreClient","Using default OfflineComponentProvider"),await ky(n,new wd);return n._offlineComponents}async function am(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(fe("FirestoreClient","Using user provided OnlineComponentProvider"),await pS(n,n._uninitializedComponentsProvider._online)):(fe("FirestoreClient","Using default OnlineComponentProvider"),await pS(n,new Ed))),n._onlineComponents}function mA(n){return yw(n).then(e=>e.persistence)}function _w(n){return yw(n).then(e=>e.localStore)}function gA(n){return am(n).then(e=>e.remoteStore)}function vw(n){return am(n).then(e=>e.syncEngine)}function Mj(n){return am(n).then(e=>e.datastore)}async function au(n){const e=await am(n),t=e.eventManager;return t.onListen=hj.bind(null,e.syncEngine),t.onUnlisten=pj.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=fj.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=mj.bind(null,e.syncEngine),t}function Fj(n){return n.asyncQueue.enqueue(async()=>{const e=await mA(n),t=await gA(n);return e.setNetworkEnabled(!0),function(i){const o=Ie(i);return o.L_.delete(0),Hd(o)}(t)})}function Uj(n){return n.asyncQueue.enqueue(async()=>{const e=await mA(n),t=await gA(n);return e.setNetworkEnabled(!1),async function(i){const o=Ie(i);o.L_.add(0),await Tu(o),o.q_.set("Offline")}(t)})}function jj(n,e){const t=new wn;return n.asyncQueue.enqueueAndForget(async()=>async function(i,o,l){try{const c=await function(p,g){const v=Ie(p);return v.persistence.runTransaction("read document","readonly",T=>v.localDocuments.getDocument(T,g))}(i,o);c.isFoundDocument()?l.resolve(c):c.isNoDocument()?l.resolve(null):l.reject(new de(ne.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(c){const h=Ru(c,`Failed to get document '${o} from cache`);l.reject(h)}}(await _w(n),e,t)),t.promise}function yA(n,e,t={}){const r=new wn;return n.asyncQueue.enqueueAndForget(async()=>function(o,l,c,h,p){const g=new om({next:T=>{g.Za(),l.enqueueAndForget(()=>uw(o,v));const x=T.docs.has(c);!x&&T.fromCache?p.reject(new de(ne.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&T.fromCache&&h&&h.source==="server"?p.reject(new de(ne.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(T)},error:T=>p.reject(T)}),v=new dw(wu(c.path),g,{includeMetadataChanges:!0,_a:!0});return lw(o,v)}(await au(n),n.asyncQueue,e,t,r)),r.promise}function zj(n,e){const t=new wn;return n.asyncQueue.enqueueAndForget(async()=>async function(i,o,l){try{const c=await gp(i,o,!0),h=new uA(o,c.Ts),p=h.ma(c.documents),g=h.applyChanges(p,!1);l.resolve(g.snapshot)}catch(c){const h=Ru(c,`Failed to execute query '${o} against cache`);l.reject(h)}}(await _w(n),e,t)),t.promise}function _A(n,e,t={}){const r=new wn;return n.asyncQueue.enqueueAndForget(async()=>function(o,l,c,h,p){const g=new om({next:T=>{g.Za(),l.enqueueAndForget(()=>uw(o,v)),T.fromCache&&h.source==="server"?p.reject(new de(ne.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(T)},error:T=>p.reject(T)}),v=new dw(c,g,{includeMetadataChanges:!0,_a:!0});return lw(o,v)}(await au(n),n.asyncQueue,e,t,r)),r.promise}function Bj(n,e){const t=new om(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,o){Ie(i).Y_.add(o),o.next()}(await au(n),t)),()=>{t.Za(),n.asyncQueue.enqueueAndForget(async()=>function(i,o){Ie(i).Y_.delete(o)}(await au(n),t))}}function $j(n,e,t,r){const i=function(l,c){let h;return h=typeof l=="string"?_P().encode(l):l,function(g,v){return new Dj(g,v)}(function(g,v){if(g instanceof Uint8Array)return fS(g,v);if(g instanceof ArrayBuffer)return fS(new Uint8Array(g),v);if(g instanceof ReadableStream)return g.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(h),c)}(t,Wd(e));n.asyncQueue.enqueueAndForget(async()=>{xj(await vw(n),i,r)})}function qj(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const o=Ie(r);return o.persistence.runTransaction("Get named query","readonly",l=>o.Gr.getNamedQuery(l,i))}(await _w(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(n,e,t){if(!t)throw new de(ne.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function wA(n,e,t,r){if(e===!0&&r===!0)throw new de(ne.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function gS(n){if(!Ee.isDocumentKey(n))throw new de(ne.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function yS(n){if(Ee.isDocumentKey(n))throw new de(ne.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function lm(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Pe()}function it(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new de(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=lm(n);throw new de(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function EA(n,e){if(e<=0)throw new de(ne.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new de(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new de(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new de(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new de(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new de(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gd{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _S({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _S(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new F2;switch(r.type){case"firstParty":return new B2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new de(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=mS.get(t);r&&(fe("ComponentProvider","Removing Datastore"),mS.delete(t),r.terminate())}(this),Promise.resolve()}}function Wj(n,e,t,r={}){var i;const o=(n=it(n,Gd))._getSettings(),l=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&Ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=dn.MOCK_USER;else{c=lR(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new de(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new dn(p)}n._authCredentials=new U2(new C1(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn=class IA{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new IA(this.firestore,e,this._query)}},Dt=class TA{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ys(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new TA(this.firestore,e,this._key)}},Ys=class SA extends zn{constructor(e,t,r){super(e,t,wu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new Ee(e))}withConverter(e){return new SA(this.firestore,e,this._path)}};function bA(n,e,...t){if(n=De(n),ww("collection","path",e),n instanceof Gd){const r=Xe.fromString(e,...t);return yS(r),new Ys(n,null,r)}{if(!(n instanceof Dt||n instanceof Ys))throw new de(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Xe.fromString(e,...t));return yS(r),new Ys(n.firestore,null,r)}}function Hj(n,e){if(n=it(n,Gd),ww("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new de(ne.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new zn(n,null,function(r){return new ds(Xe.emptyPath(),r)}(e))}function wp(n,e,...t){if(n=De(n),arguments.length===1&&(e=x1.newId()),ww("doc","path",e),n instanceof Gd){const r=Xe.fromString(e,...t);return gS(r),new Dt(n,null,new Ee(r))}{if(!(n instanceof Dt||n instanceof Ys))throw new de(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Xe.fromString(e,...t));return gS(r),new Dt(n.firestore,n instanceof Ys?n.converter:null,new Ee(r))}}function RA(n,e){return n=De(n),e=De(e),(n instanceof Dt||n instanceof Ys)&&(e instanceof Dt||e instanceof Ys)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function PA(n,e){return n=De(n),e=De(e),n instanceof zn&&e instanceof zn&&n.firestore===e.firestore&&jd(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new rw(this,"async_queue_retry"),this.Vu=()=>{const r=Qf();r&&fe("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Qf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Qf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new wn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ho(e))throw e;fe("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(r);throw Wt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=aw.createAndSchedule(this,e,t,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&Pe()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function V_(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}class Gj{constructor(){this._progressObserver={},this._taskCompletionResolver=new wn,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kj=-1;let Gt=class extends Gd{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new vS,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vS(e),this._firestoreClient=void 0,await e}}};function kn(n){if(n._terminated)throw new de(ne.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||AA(n),n._firestoreClient}function AA(n){var e,t,r;const i=n._freezeSettings(),o=function(c,h,p,g){return new _U(c,h,p,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,vA(g.experimentalLongPollingOptions),g.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Vj(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}function Qj(n,e){Ri("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return kA(n,Ed.provider,{build:r=>new pA(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function Yj(n){Ri("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();kA(n,Ed.provider,{build:t=>new Oj(t,e.cacheSizeBytes)})}function kA(n,e,t){if((n=it(n,Gt))._firestoreClient||n._terminated)throw new de(ne.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new de(ne.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},AA(n)}function Xj(n){if(n._initialized&&!n._terminated)throw new de(ne.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new wn;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Ei.D())return Promise.resolve();const i=r+"main";await Ei.delete(i)}(ew(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function Jj(n){return function(t){const r=new wn;return t.asyncQueue.enqueueAndForget(async()=>wj(await vw(t),r)),r.promise}(kn(n=it(n,Gt)))}function Zj(n){return Fj(kn(n=it(n,Gt)))}function ez(n){return Uj(kn(n=it(n,Gt)))}function tz(n,e){const t=kn(n=it(n,Gt)),r=new Gj;return $j(t,n._databaseId,e,r),r}function nz(n,e){return qj(kn(n=it(n,Gt)),e).then(t=>t?new zn(n,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ai(Ut.fromBase64String(e))}catch(t){throw new de(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ai(Ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new de(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new de(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new de(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Be(this._lat,e._lat)||Be(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rz=/^__.*__$/;class iz{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new hs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Eu(e,this.data,t,this.fieldTransforms)}}class CA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new hs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function xA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Pe()}}class cm{constructor(e,t,r,i,o,l){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new cm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ep(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(xA(this.Cu)&&rz.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class sz{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Wd(e)}Qu(e,t,r,i=!1){return new cm({Cu:e,methodName:t,qu:r,path:Rt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ca(n){const e=n._freezeSettings(),t=Wd(n._databaseId);return new sz(n._databaseId,!!e.ignoreUndefinedProperties,t)}function dm(n,e,t,r,i,o={}){const l=n.Qu(o.merge||o.mergeFields?2:0,e,t,i);Aw("Data must be an object, but it was:",l,r);const c=NA(r,l);let h,p;if(o.merge)h=new er(l.fieldMask),p=l.fieldTransforms;else if(o.mergeFields){const g=[];for(const v of o.mergeFields){const T=M_(e,v,t);if(!l.contains(T))throw new de(ne.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);VA(g,T)||g.push(T)}h=new er(g),p=l.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,p=l.fieldTransforms;return new iz(new vn(c),h,p)}class Kd extends ka{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Kd}}function OA(n,e,t){return new cm({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Iw extends ka{_toFieldTransform(e){return new Bd(e.path,new Zl)}isEqual(e){return e instanceof Iw}}class Tw extends ka{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=OA(this,e,!0),r=this.Ku.map(o=>xa(o,t)),i=new ga(r);return new Bd(e.path,i)}isEqual(e){return e instanceof Tw&&rd(this.Ku,e.Ku)}}class Sw extends ka{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=OA(this,e,!0),r=this.Ku.map(o=>xa(o,t)),i=new ya(r);return new Bd(e.path,i)}isEqual(e){return e instanceof Sw&&rd(this.Ku,e.Ku)}}class bw extends ka{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new eu(e.serializer,uP(e.serializer,this.$u));return new Bd(e.path,t)}isEqual(e){return e instanceof bw&&this.$u===e.$u}}function Rw(n,e,t,r){const i=n.Qu(1,e,t);Aw("Data must be an object, but it was:",i,r);const o=[],l=vn.empty();Aa(r,(h,p)=>{const g=kw(e,h,t);p=De(p);const v=i.Nu(g);if(p instanceof Kd)o.push(g);else{const T=xa(p,v);T!=null&&(o.push(g),l.set(g,T))}});const c=new er(o);return new CA(l,c,i.fieldTransforms)}function Pw(n,e,t,r,i,o){const l=n.Qu(1,e,t),c=[M_(e,r,t)],h=[i];if(o.length%2!=0)throw new de(ne.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<o.length;T+=2)c.push(M_(e,o[T])),h.push(o[T+1]);const p=[],g=vn.empty();for(let T=c.length-1;T>=0;--T)if(!VA(p,c[T])){const x=c[T];let L=h[T];L=De(L);const N=l.Nu(x);if(L instanceof Kd)p.push(x);else{const U=xa(L,N);U!=null&&(p.push(x),g.set(x,U))}}const v=new er(p);return new CA(g,v,l.fieldTransforms)}function DA(n,e,t,r=!1){return xa(t,n.Qu(r?4:3,e))}function xa(n,e){if(LA(n=De(n)))return Aw("Unsupported field value:",e,n),NA(n,e);if(n instanceof ka)return function(r,i){if(!xA(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let l=0;for(const c of r){let h=xa(c,i.Lu(l));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),l++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=At.fromDate(r);return{timestampValue:tu(i.serializer,o)}}if(r instanceof At){const o=new At(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:tu(i.serializer,o)}}if(r instanceof um)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ai)return{bytesValue:EP(i.serializer,r._byteString)};if(r instanceof Dt){const o=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw i.Bu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Kv(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ew)return function(l,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:l.toArray().map(h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return Bv(c.serializer,h)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${lm(r)}`)}(n,e)}function NA(n,e){const t={};return $1(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Aa(n,(r,i)=>{const o=xa(i,e.Mu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function LA(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof At||n instanceof um||n instanceof Ai||n instanceof Dt||n instanceof ka||n instanceof Ew)}function Aw(n,e,t){if(!LA(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=lm(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function M_(n,e,t){if((e=De(e))instanceof ao)return e._internalPath;if(typeof e=="string")return kw(n,e);throw Ep("Field path arguments must be of type string or ",n,!1,void 0,t)}const oz=new RegExp("[~\\*/\\[\\]]");function kw(n,e,t){if(e.search(oz)>=0)throw Ep(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ao(...e.split("."))._internalPath}catch{throw Ep(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ep(n,e,t,r,i){const o=r&&!r.isEmpty(),l=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||l)&&(h+=" (found",o&&(h+=` in field ${r}`),l&&(h+=` in document ${i}`),h+=")"),new de(ne.INVALID_ARGUMENT,c+n+h)}function VA(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new az(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(hm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class az extends Id{data(){return super.data()}}function hm(n,e){return typeof e=="string"?kw(n,e):e instanceof ao?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new de(ne.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cw{}class Qd extends Cw{}function Bs(n,e,...t){let r=[];e instanceof Cw&&r.push(e),r=r.concat(t),function(o){const l=o.filter(h=>h instanceof xw).length,c=o.filter(h=>h instanceof fm).length;if(l>1||l>0&&c>0)throw new de(ne.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class fm extends Qd{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new fm(e,t,r)}_apply(e){const t=this._parse(e);return UA(e._query,t),new zn(e.firestore,e.converter,S_(e._query,t))}_parse(e){const t=Ca(e.firestore);return function(o,l,c,h,p,g,v){let T;if(p.isKeyField()){if(g==="array-contains"||g==="array-contains-any")throw new de(ne.INVALID_ARGUMENT,`Invalid Query. You can't perform '${g}' queries on documentId().`);if(g==="in"||g==="not-in"){ES(v,g);const x=[];for(const L of v)x.push(wS(h,o,L));T={arrayValue:{values:x}}}else T=wS(h,o,v)}else g!=="in"&&g!=="not-in"&&g!=="array-contains-any"||ES(v,g),T=DA(c,l,v,g==="in"||g==="not-in");return Je.create(p,g,T)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function lz(n,e,t){const r=e,i=hm("where",n);return fm._create(i,r,t)}class xw extends Cw{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new xw(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:at.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,o){let l=i;const c=o.getFlattenedFilters();for(const h of c)UA(l,h),l=S_(l,h)}(e._query,t),new zn(e.firestore,e.converter,S_(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ow extends Qd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ow(e,t)}_apply(e){const t=function(i,o,l){if(i.startAt!==null)throw new de(ne.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new de(ne.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new yd(o,l)}(e._query,this._field,this._direction);return new zn(e.firestore,e.converter,function(i,o){const l=i.explicitOrderBy.concat([o]);return new ds(i.path,i.collectionGroup,l,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function uz(n,e="asc"){const t=e,r=hm("orderBy",n);return Ow._create(r,t)}class pm extends Qd{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new pm(e,t,r)}_apply(e){return new zn(e.firestore,e.converter,hp(e._query,this._limit,this._limitType))}}function cz(n){return EA("limit",n),pm._create("limit",n,"F")}function dz(n){return EA("limitToLast",n),pm._create("limitToLast",n,"L")}class mm extends Qd{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new mm(e,t,r)}_apply(e){const t=FA(e,this.type,this._docOrFields,this._inclusive);return new zn(e.firestore,e.converter,function(i,o){return new ds(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,o,i.endAt)}(e._query,t))}}function hz(...n){return mm._create("startAt",n,!0)}function fz(...n){return mm._create("startAfter",n,!1)}class gm extends Qd{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new gm(e,t,r)}_apply(e){const t=FA(e,this.type,this._docOrFields,this._inclusive);return new zn(e.firestore,e.converter,function(i,o){return new ds(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,o)}(e._query,t))}}function pz(...n){return gm._create("endBefore",n,!1)}function mz(...n){return gm._create("endAt",n,!0)}function FA(n,e,t,r){if(t[0]=De(t[0]),t[0]instanceof Id)return function(o,l,c,h,p){if(!h)throw new de(ne.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const g=[];for(const v of Fl(o))if(v.field.isKeyField())g.push(pa(l,h.key));else{const T=h.data.field(v.field);if(Xp(T))throw new de(ne.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+v.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(T===null){const x=v.field.canonicalString();throw new de(ne.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${x}' (used as the orderBy) does not exist.`)}g.push(T)}return new so(g,p)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Ca(n.firestore);return function(l,c,h,p,g,v){const T=l.explicitOrderBy;if(g.length>T.length)throw new de(ne.INVALID_ARGUMENT,`Too many arguments provided to ${p}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const x=[];for(let L=0;L<g.length;L++){const N=g[L];if(T[L].field.isKeyField()){if(typeof N!="string")throw new de(ne.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${p}(), but got a ${typeof N}`);if(!jv(l)&&N.indexOf("/")!==-1)throw new de(ne.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${p}() must be a plain document ID, but '${N}' contains a slash.`);const U=l.path.child(Xe.fromString(N));if(!Ee.isDocumentKey(U))throw new de(ne.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${p}() must result in a valid document path, but '${U}' is not because it contains an odd number of segments.`);const q=new Ee(U);x.push(pa(c,q))}else{const U=DA(h,p,N);x.push(U)}}return new so(x,v)}(n._query,n.firestore._databaseId,i,e,t,r)}}function wS(n,e,t){if(typeof(t=De(t))=="string"){if(t==="")throw new de(ne.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jv(e)&&t.indexOf("/")!==-1)throw new de(ne.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Xe.fromString(t));if(!Ee.isDocumentKey(r))throw new de(ne.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return pa(n,new Ee(r))}if(t instanceof Dt)return pa(n,t._key);throw new de(ne.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lm(t)}.`)}function ES(n,e){if(!Array.isArray(n)||n.length===0)throw new de(ne.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function UA(n,e){const t=function(i,o){for(const l of i)for(const c of l.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new de(ne.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new de(ne.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Dw{convertValue(e,t="none"){switch(fa(e)){case 0:return null;case 1:return e.booleanValue;case 2:return bt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(no(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Pe()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Aa(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,i;const o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(l=>bt(l.doubleValue));return new Ew(o)}convertGeoPoint(e){return new um(bt(e.latitude),bt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Fv(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(pd(e));default:return null}}convertTimestamp(e){const t=ss(e);return new At(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Xe.fromString(e);xe(OP(r));const i=new ro(r.get(1),r.get(3)),o=new Ee(r.popFirst(5));return i.isEqual(t)||Wt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class gz extends Dw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ai(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let os=class extends Id{constructor(e,t,r,i,o,l){super(e,t,r,i,l),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Jc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(hm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Jc=class extends os{data(e={}){return super.data(e)}},lo=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ta(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Jc(this._firestore,this._userDataWriter,r.key,r,new ta(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new de(ne.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map(c=>{const h=new Jc(i._firestore,i._userDataWriter,c.doc.key,c.doc,new ta(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:l++}})}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Jc(i._firestore,i._userDataWriter,c.doc.key,c.doc,new ta(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let p=-1,g=-1;return c.type!==0&&(p=l.indexOf(c.doc.key),l=l.delete(c.doc.key)),c.type!==1&&(l=l.add(c.doc),g=l.indexOf(c.doc.key)),{type:yz(c.type),doc:h,oldIndex:p,newIndex:g}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function yz(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Pe()}}function jA(n,e){return n instanceof os&&e instanceof os?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof lo&&e instanceof lo&&n._firestore===e._firestore&&PA(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _z(n){n=it(n,Dt);const e=it(n.firestore,Gt);return yA(kn(e),n._key).then(t=>Nw(e,n,t))}class Oa extends Dw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ai(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,t)}}function vz(n){n=it(n,Dt);const e=it(n.firestore,Gt),t=kn(e),r=new Oa(e);return jj(t,n._key).then(i=>new os(e,r,n._key,i,new ta(i!==null&&i.hasLocalMutations,!0),n.converter))}function wz(n){n=it(n,Dt);const e=it(n.firestore,Gt);return yA(kn(e),n._key,{source:"server"}).then(t=>Nw(e,n,t))}function Ez(n){n=it(n,zn);const e=it(n.firestore,Gt),t=kn(e),r=new Oa(e);return MA(n._query),_A(t,n._query).then(i=>new lo(e,r,n,i))}function Iz(n){n=it(n,zn);const e=it(n.firestore,Gt),t=kn(e),r=new Oa(e);return zj(t,n._query).then(i=>new lo(e,r,n,i))}function Tz(n){n=it(n,zn);const e=it(n.firestore,Gt),t=kn(e),r=new Oa(e);return _A(t,n._query,{source:"server"}).then(i=>new lo(e,r,n,i))}function IS(n,e,t){n=it(n,Dt);const r=it(n.firestore,Gt),i=ym(n.converter,e,t);return Yd(r,[dm(Ca(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Pt.none())])}function TS(n,e,t,...r){n=it(n,Dt);const i=it(n.firestore,Gt),o=Ca(i);let l;return l=typeof(e=De(e))=="string"||e instanceof ao?Pw(o,"updateDoc",n._key,e,t,r):Rw(o,"updateDoc",n._key,e),Yd(i,[l.toMutation(n._key,Pt.exists(!0))])}function Sz(n){return Yd(it(n.firestore,Gt),[new Iu(n._key,Pt.none())])}function bz(n,e){const t=it(n.firestore,Gt),r=wp(n),i=ym(n.converter,e);return Yd(t,[dm(Ca(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Pt.exists(!1))]).then(()=>r)}function zA(n,...e){var t,r,i;n=De(n);let o={includeMetadataChanges:!1,source:"default"},l=0;typeof e[l]!="object"||V_(e[l])||(o=e[l],l++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(V_(e[l])){const v=e[l];e[l]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[l+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[l+2]=(i=v.complete)===null||i===void 0?void 0:i.bind(v)}let h,p,g;if(n instanceof Dt)p=it(n.firestore,Gt),g=wu(n._key.path),h={next:v=>{e[l]&&e[l](Nw(p,n,v))},error:e[l+1],complete:e[l+2]};else{const v=it(n,zn);p=it(v.firestore,Gt),g=v._query;const T=new Oa(p);h={next:x=>{e[l]&&e[l](new lo(p,T,v,x))},error:e[l+1],complete:e[l+2]},MA(n._query)}return function(T,x,L,N){const U=new om(N),q=new dw(x,U,L);return T.asyncQueue.enqueueAndForget(async()=>lw(await au(T),q)),()=>{U.Za(),T.asyncQueue.enqueueAndForget(async()=>uw(await au(T),q))}}(kn(p),g,c,h)}function Rz(n,e){return Bj(kn(n=it(n,Gt)),V_(e)?e:{next:e})}function Yd(n,e){return function(r,i){const o=new wn;return r.asyncQueue.enqueueAndForget(async()=>gj(await vw(r),i,o)),o.promise}(kn(n),e)}function Nw(n,e,t){const r=t.docs.get(e._key),i=new Oa(n);return new os(n,i,e._key,r,new ta(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pz={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Az=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ca(e)}set(e,t,r){this._verifyNotCommitted();const i=Ws(e,this._firestore),o=ym(i.converter,t,r),l=dm(this._dataReader,"WriteBatch.set",i._key,o,i.converter!==null,r);return this._mutations.push(l.toMutation(i._key,Pt.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const o=Ws(e,this._firestore);let l;return l=typeof(t=De(t))=="string"||t instanceof ao?Pw(this._dataReader,"WriteBatch.update",o._key,t,r,i):Rw(this._dataReader,"WriteBatch.update",o._key,t),this._mutations.push(l.toMutation(o._key,Pt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ws(e,this._firestore);return this._mutations=this._mutations.concat(new Iu(t._key,Pt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new de(ne.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Ws(n,e){if((n=De(n)).firestore!==e)throw new de(ne.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kz=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=Ca(t)}get(t){const r=Ws(t,this._firestore),i=new gz(this._firestore);return this._transaction.lookup([r._key]).then(o=>{if(!o||o.length!==1)return Pe();const l=o[0];if(l.isFoundDocument())return new Id(this._firestore,i,l.key,l,r.converter);if(l.isNoDocument())return new Id(this._firestore,i,r._key,null,r.converter);throw Pe()})}set(t,r,i){const o=Ws(t,this._firestore),l=ym(o.converter,r,i),c=dm(this._dataReader,"Transaction.set",o._key,l,o.converter!==null,i);return this._transaction.set(o._key,c),this}update(t,r,i,...o){const l=Ws(t,this._firestore);let c;return c=typeof(r=De(r))=="string"||r instanceof ao?Pw(this._dataReader,"Transaction.update",l._key,r,i,o):Rw(this._dataReader,"Transaction.update",l._key,r),this._transaction.update(l._key,c),this}delete(t){const r=Ws(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ws(e,this._firestore),r=new Oa(this._firestore);return super.get(e).then(i=>new os(this._firestore,r,t._key,i._document,new ta(!1,!1),t.converter))}};function Cz(n,e,t){n=it(n,Gt);const r=Object.assign(Object.assign({},Pz),t);return function(o){if(o.maxAttempts<1)throw new de(ne.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(o,l,c){const h=new wn;return o.asyncQueue.enqueueAndForget(async()=>{const p=await Mj(o);new Lj(o.asyncQueue,p,c,l,h).au()}),h.promise}(kn(n),i=>e(new kz(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xz(){return new Kd("deleteField")}function Oz(){return new Iw("serverTimestamp")}function Dz(...n){return new Tw("arrayUnion",n)}function Nz(...n){return new Sw("arrayRemove",n)}function Lz(n){return new bw("increment",n)}(function(e,t=!0){(function(i){vu=i})(ls),rs(new Or("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),c=new Gt(new j2(r.getProvider("auth-internal")),new q2(r.getProvider("app-check-internal")),function(p,g){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new de(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ro(p.options.projectId,g)}(l,i),l);return o=Object.assign({useFetchStreams:t},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),pr(hT,"4.7.3",e),pr(hT,"4.7.3","esm2017")})();const Vz="@firebase/firestore-compat",Mz="0.3.38";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new de("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(){if(typeof Uint8Array>"u")throw new de("unimplemented","Uint8Arrays are not available in this environment.")}function bS(){if(!gU())throw new de("unimplemented","Blobs are unavailable in Firestore in this environment.")}let BA=class F_{constructor(e){this._delegate=e}static fromBase64String(e){return bS(),new F_(Ai.fromBase64String(e))}static fromUint8Array(e){return SS(),new F_(Ai.fromUint8Array(e))}toBase64(){return bS(),this._delegate.toBase64()}toUint8Array(){return SS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(n){return Fz(n,["next","error","complete"])}function Fz(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uz{enableIndexedDbPersistence(e,t){return Qj(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Yj(e._delegate)}clearIndexedDbPersistence(e){return Xj(e._delegate)}}class $A{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ro||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Ri("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){Wj(this._delegate,e,t,r)}enableNetwork(){return Zj(this._delegate)}disableNetwork(){return ez(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,wA("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Jj(this._delegate)}onSnapshotsInSync(e){return Rz(this._delegate,e)}get app(){if(!this._appCompat)throw new de("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new lu(this,bA(this._delegate,e))}catch(t){throw Mn(t,"collection()","Firestore.collection()")}}doc(e){try{return new Ar(this,wp(this._delegate,e))}catch(t){throw Mn(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Vn(this,Hj(this._delegate,e))}catch(t){throw Mn(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Cz(this._delegate,t=>e(new qA(this,t)))}batch(){return kn(this._delegate),new WA(new Az(this._delegate,e=>Yd(this._delegate,e)))}loadBundle(e){return tz(this._delegate,e)}namedQuery(e){return nz(this._delegate,e).then(t=>t?new Vn(this,t):null)}}class _m extends Dw{constructor(e){super(),this.firestore=e}convertBytes(e){return new BA(new Ai(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Ar.forKey(t,this.firestore,null)}}function jz(n){V2(n)}class qA{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new _m(e)}get(e){const t=na(e);return this._delegate.get(t).then(r=>new Td(this._firestore,new os(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=na(e);return r?(Lw("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const o=na(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...i),this}delete(e){const t=na(e);return this._delegate.delete(t),this}}class WA{constructor(e){this._delegate=e}set(e,t,r){const i=na(e);return r?(Lw("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const o=na(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...i),this}delete(e){const t=na(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Ea{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Jc(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Sd(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Ea.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let o=i.get(t);return o||(o=new Ea(e,new _m(e),t),i.set(t,o)),o}}Ea.INSTANCES=new WeakMap;class Ar{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new _m(e)}static forPath(e,t,r){if(e.length%2!==0)throw new de("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Ar(t,new Dt(t._delegate,r,new Ee(e)))}static forKey(e,t,r){return new Ar(t,new Dt(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new lu(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new lu(this.firestore,bA(this._delegate,e))}catch(t){throw Mn(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=De(e),e instanceof Dt?RA(this._delegate,e):!1}set(e,t){t=Lw("DocumentReference.set",t);try{return t?IS(this._delegate,e,t):IS(this._delegate,e)}catch(r){throw Mn(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?TS(this._delegate,e):TS(this._delegate,e,t,...r)}catch(i){throw Mn(i,"updateDoc()","DocumentReference.update()")}}delete(){return Sz(this._delegate)}onSnapshot(...e){const t=HA(e),r=GA(e,i=>new Td(this.firestore,new os(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return zA(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=vz(this._delegate):(e==null?void 0:e.source)==="server"?t=wz(this._delegate):t=_z(this._delegate),t.then(r=>new Td(this.firestore,new os(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Ar(this.firestore,e?this._delegate.withConverter(Ea.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Mn(n,e,t){return n.message=n.message.replace(e,t),n}function HA(n){for(const e of n)if(typeof e=="object"&&!U_(e))return e;return{}}function GA(n,e){var t,r;let i;return U_(n[0])?i=n[0]:U_(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:o=>{i.next&&i.next(e(o))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Td{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Ar(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return jA(this._delegate,e._delegate)}}class Sd extends Td{data(e){const t=this._delegate.data(e);return this._delegate._converter||M2(t!==void 0),t}}class Vn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new _m(e)}where(e,t,r){try{return new Vn(this.firestore,Bs(this._delegate,lz(e,t,r)))}catch(i){throw Mn(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Vn(this.firestore,Bs(this._delegate,uz(e,t)))}catch(r){throw Mn(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Vn(this.firestore,Bs(this._delegate,cz(e)))}catch(t){throw Mn(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Vn(this.firestore,Bs(this._delegate,dz(e)))}catch(t){throw Mn(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Vn(this.firestore,Bs(this._delegate,hz(...e)))}catch(t){throw Mn(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Vn(this.firestore,Bs(this._delegate,fz(...e)))}catch(t){throw Mn(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Vn(this.firestore,Bs(this._delegate,pz(...e)))}catch(t){throw Mn(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Vn(this.firestore,Bs(this._delegate,mz(...e)))}catch(t){throw Mn(t,"endAt()","Query.endAt()")}}isEqual(e){return PA(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=Iz(this._delegate):(e==null?void 0:e.source)==="server"?t=Tz(this._delegate):t=Ez(this._delegate),t.then(r=>new j_(this.firestore,new lo(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=HA(e),r=GA(e,i=>new j_(this.firestore,new lo(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return zA(this._delegate,t,r)}withConverter(e){return new Vn(this.firestore,e?this._delegate.withConverter(Ea.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class zz{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Sd(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class j_{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Vn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Sd(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new zz(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Sd(this._firestore,r))})}isEqual(e){return jA(this._delegate,e._delegate)}}class lu extends Vn{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Ar(this.firestore,e):null}doc(e){try{return e===void 0?new Ar(this.firestore,wp(this._delegate)):new Ar(this.firestore,wp(this._delegate,e))}catch(t){throw Mn(t,"doc()","CollectionReference.doc()")}}add(e){return bz(this._delegate,e).then(t=>new Ar(this.firestore,t))}isEqual(e){return RA(this._delegate,e._delegate)}withConverter(e){return new lu(this.firestore,e?this._delegate.withConverter(Ea.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function na(n){return it(n,Dt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(...e){this._delegate=new ao(...e)}static documentId(){return new Vw(Rt.keyField().canonicalString())}isEqual(e){return e=De(e),e instanceof ao?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this._delegate=e}static serverTimestamp(){const e=Oz();return e._methodName="FieldValue.serverTimestamp",new Jo(e)}static delete(){const e=xz();return e._methodName="FieldValue.delete",new Jo(e)}static arrayUnion(...e){const t=Dz(...e);return t._methodName="FieldValue.arrayUnion",new Jo(t)}static arrayRemove(...e){const t=Nz(...e);return t._methodName="FieldValue.arrayRemove",new Jo(t)}static increment(e){const t=Lz(e);return t._methodName="FieldValue.increment",new Jo(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bz={Firestore:$A,GeoPoint:um,Timestamp:At,Blob:BA,Transaction:qA,WriteBatch:WA,DocumentReference:Ar,DocumentSnapshot:Td,Query:Vn,QueryDocumentSnapshot:Sd,QuerySnapshot:j_,CollectionReference:lu,FieldPath:Vw,FieldValue:Jo,setLogLevel:jz,CACHE_SIZE_UNLIMITED:Kj};function $z(n,e){n.INTERNAL.registerComponent(new Or("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},Bz)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qz(n){$z(n,(e,t)=>new $A(e,t,new Uz)),n.registerVersion(Vz,Mz)}qz(xi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="firebasestorage.googleapis.com",QA="storageBucket",Wz=2*60*1e3,Hz=10*60*1e3,Gz=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends An{constructor(e,t,r=0){super(Cy(e),`Firebase Storage: ${t} (${Cy(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Lt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Cy(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var It;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(It||(It={}));function Cy(n){return"storage/"+n}function Mw(){const n="An unknown error occurred, please check the error payload for server response.";return new Lt(It.UNKNOWN,n)}function Kz(n){return new Lt(It.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Qz(n){return new Lt(It.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Yz(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Lt(It.UNAUTHENTICATED,n)}function Xz(){return new Lt(It.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Jz(n){return new Lt(It.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function YA(){return new Lt(It.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function XA(){return new Lt(It.CANCELED,"User canceled the upload/download.")}function Zz(n){return new Lt(It.INVALID_URL,"Invalid URL '"+n+"'.")}function eB(n){return new Lt(It.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function tB(){return new Lt(It.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+QA+"' property when initializing the app?")}function JA(){return new Lt(It.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function nB(){return new Lt(It.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function rB(){return new Lt(It.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function iB(n){return new Lt(It.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function jl(n){return new Lt(It.INVALID_ARGUMENT,n)}function ZA(){return new Lt(It.APP_DELETED,"The Firebase app was deleted.")}function ek(n){return new Lt(It.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Zc(n,e){return new Lt(It.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function kc(n){throw new Lt(It.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Pn.makeFromUrl(e,t)}catch{return new Pn(e,"")}if(r.path==="")return r;throw eB(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(X){X.path.charAt(X.path.length-1)==="/"&&(X.path_=X.path_.slice(0,-1))}const l="(/(.*))?$",c=new RegExp("^gs://"+i+l,"i"),h={bucket:1,path:3};function p(X){X.path_=decodeURIComponent(X.path)}const g="v[A-Za-z0-9_]+",v=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",x=new RegExp(`^https?://${v}/${g}/b/${i}/o${T}`,"i"),L={bucket:1,path:3},N=t===KA?"(?:storage.googleapis.com|storage.cloud.google.com)":t,U="([^?#]*)",q=new RegExp(`^https?://${N}/${i}/${U}`,"i"),H=[{regex:c,indices:h,postModify:o},{regex:x,indices:L,postModify:p},{regex:q,indices:{bucket:1,path:2},postModify:p}];for(let X=0;X<H.length;X++){const V=H[X],F=V.regex.exec(e);if(F){const R=F[V.indices.bucket];let C=F[V.indices.path];C||(C=""),r=new Pn(R,C),V.postModify(r);break}}if(r==null)throw Zz(e);return r}}class sB{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oB(n,e,t){let r=1,i=null,o=null,l=!1,c=0;function h(){return c===2}let p=!1;function g(...U){p||(p=!0,e.apply(null,U))}function v(U){i=setTimeout(()=>{i=null,n(x,h())},U)}function T(){o&&clearTimeout(o)}function x(U,...q){if(p){T();return}if(U){T(),g.call(null,U,...q);return}if(h()||l){T(),g.call(null,U,...q);return}r<64&&(r*=2);let H;c===1?(c=2,H=0):H=(r+Math.random())*1e3,v(H)}let L=!1;function N(U){L||(L=!0,T(),!p&&(i!==null?(U||(c=2),clearTimeout(i),v(0)):U||(c=1)))}return v(0),o=setTimeout(()=>{l=!0,N(!0)},t),N}function aB(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lB(n){return n!==void 0}function uB(n){return typeof n=="function"}function cB(n){return typeof n=="object"&&!Array.isArray(n)}function vm(n){return typeof n=="string"||n instanceof String}function RS(n){return Fw()&&n instanceof Blob}function Fw(){return typeof Blob<"u"}function z_(n,e,t,r){if(r<e)throw jl(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw jl(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function tk(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var la;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(la||(la={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,o=e.indexOf(n)!==-1;return t||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dB{constructor(e,t,r,i,o,l,c,h,p,g,v,T=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=c,this.errorCallback_=h,this.timeout_=p,this.progressCallback_=g,this.connectionFactory_=v,this.retry=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,L)=>{this.resolve_=x,this.reject_=L,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new bf(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=c=>{const h=c.loaded,p=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,p)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const c=o.getErrorCode()===la.NO_ERROR,h=o.getStatus();if(!c||nk(h,this.additionalRetryCodes_)&&this.retry){const g=o.getErrorCode()===la.ABORT;r(!1,new bf(!1,null,g));return}const p=this.successCodes_.indexOf(h)!==-1;r(!0,new bf(p,o))})},t=(r,i)=>{const o=this.resolve_,l=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const h=this.callback_(c,c.getResponse());lB(h)?o(h):o()}catch(h){l(h)}else if(c!==null){const h=Mw();h.serverResponse=c.getErrorText(),this.errorCallback_?l(this.errorCallback_(c,h)):l(h)}else if(i.canceled){const h=this.appDelete_?ZA():XA();l(h)}else{const h=YA();l(h)}};this.canceled_?t(!1,new bf(!1,null,!0)):this.backoffId_=oB(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aB(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bf{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function hB(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function fB(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pB(n,e){e&&(n["X-Firebase-GMPID"]=e)}function mB(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function gB(n,e,t,r,i,o,l=!0){const c=tk(n.urlParams),h=n.url+c,p=Object.assign({},n.headers);return pB(p,e),hB(p,t),fB(p,o),mB(p,r),new dB(h,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yB(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function _B(...n){const e=yB();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Fw())return new Blob(n);throw new Lt(It.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function vB(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wB(n){if(typeof atob>"u")throw iB("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class xy{constructor(e,t){this.data=e,this.contentType=t||null}}function rk(n,e){switch(n){case kr.RAW:return new xy(ik(e));case kr.BASE64:case kr.BASE64URL:return new xy(sk(n,e));case kr.DATA_URL:return new xy(IB(e),TB(e))}throw Mw()}function ik(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const o=r,l=n.charCodeAt(++t);r=65536|(o&1023)<<10|l&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function EB(n){let e;try{e=decodeURIComponent(n)}catch{throw Zc(kr.DATA_URL,"Malformed data URL.")}return ik(e)}function sk(n,e){switch(n){case kr.BASE64:{const i=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(i||o)throw Zc(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case kr.BASE64URL:{const i=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(i||o)throw Zc(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=wB(e)}catch(i){throw i.message.includes("polyfill")?i:Zc(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class ok{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Zc(kr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=SB(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function IB(n){const e=new ok(n);return e.base64?sk(kr.BASE64,e.rest):EB(e.rest)}function TB(n){return new ok(n).contentType}function SB(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,t){let r=0,i="";RS(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(RS(this.data_)){const r=this.data_,i=vB(r,e,t);return i===null?null:new Ki(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Ki(r,!0)}}static getBlob(...e){if(Fw()){const t=e.map(r=>r instanceof Ki?r.data_:r);return new Ki(_B.apply(null,t))}else{const t=e.map(l=>vm(l)?rk(kr.RAW,l).data:l.data_);let r=0;t.forEach(l=>{r+=l.byteLength});const i=new Uint8Array(r);let o=0;return t.forEach(l=>{for(let c=0;c<l.length;c++)i[o++]=l[c]}),new Ki(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(n){let e;try{e=JSON.parse(n)}catch{return null}return cB(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bB(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function RB(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function ak(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PB(n,e){return e}class Ln{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||PB}}let Rf=null;function AB(n){return!vm(n)||n.length<2?n:ak(n)}function wm(){if(Rf)return Rf;const n=[];n.push(new Ln("bucket")),n.push(new Ln("generation")),n.push(new Ln("metageneration")),n.push(new Ln("name","fullPath",!0));function e(o,l){return AB(l)}const t=new Ln("name");t.xform=e,n.push(t);function r(o,l){return l!==void 0?Number(l):l}const i=new Ln("size");return i.xform=r,n.push(i),n.push(new Ln("timeCreated")),n.push(new Ln("updated")),n.push(new Ln("md5Hash",null,!0)),n.push(new Ln("cacheControl",null,!0)),n.push(new Ln("contentDisposition",null,!0)),n.push(new Ln("contentEncoding",null,!0)),n.push(new Ln("contentLanguage",null,!0)),n.push(new Ln("contentType",null,!0)),n.push(new Ln("metadata","customMetadata",!0)),Rf=n,Rf}function kB(n,e){function t(){const r=n.bucket,i=n.fullPath,o=new Pn(r,i);return e._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:t})}function CB(n,e,t){const r={};r.type="file";const i=t.length;for(let o=0;o<i;o++){const l=t[o];r[l.local]=l.xform(r,e[l.server])}return kB(r,n),r}function lk(n,e,t){const r=Uw(e);return r===null?null:CB(n,r,t)}function xB(n,e,t,r){const i=Uw(e);if(i===null||!vm(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const l=encodeURIComponent;return o.split(",").map(p=>{const g=n.bucket,v=n.fullPath,T="/b/"+l(g)+"/o/"+l(v),x=mo(T,t,r),L=tk({alt:"media",token:p});return x+L})[0]}function jw(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const o=e[i];o.writable&&(t[o.server]=n[o.local])}return JSON.stringify(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS="prefixes",AS="items";function OB(n,e,t){const r={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[PS])for(const i of t[PS]){const o=i.replace(/\/$/,""),l=n._makeStorageReference(new Pn(e,o));r.prefixes.push(l)}if(t[AS])for(const i of t[AS]){const o=n._makeStorageReference(new Pn(e,i.name));r.items.push(o)}return r}function DB(n,e,t){const r=Uw(t);return r===null?null:OB(n,e,r)}class ps{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(n){if(!n)throw Mw()}function Em(n,e){function t(r,i){const o=lk(n,i,e);return Ti(o!==null),o}return t}function NB(n,e){function t(r,i){const o=DB(n,e,i);return Ti(o!==null),o}return t}function LB(n,e){function t(r,i){const o=lk(n,i,e);return Ti(o!==null),xB(o,i,n.host,n._protocol)}return t}function Pu(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=Xz():i=Yz():t.getStatus()===402?i=Qz(n.bucket):t.getStatus()===403?i=Jz(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Im(n){const e=Pu(n);function t(r,i){let o=e(r,i);return r.getStatus()===404&&(o=Kz(n.path)),o.serverResponse=i.serverResponse,o}return t}function uk(n,e,t){const r=e.fullServerUrl(),i=mo(r,n.host,n._protocol),o="GET",l=n.maxOperationRetryTime,c=new ps(i,o,Em(n,t),l);return c.errorHandler=Im(e),c}function VB(n,e,t,r,i){const o={};e.isRoot?o.prefix="":o.prefix=e.path+"/",t.length>0&&(o.delimiter=t),r&&(o.pageToken=r),i&&(o.maxResults=i);const l=e.bucketOnlyServerUrl(),c=mo(l,n.host,n._protocol),h="GET",p=n.maxOperationRetryTime,g=new ps(c,h,NB(n,e.bucket),p);return g.urlParams=o,g.errorHandler=Pu(e),g}function MB(n,e,t){const r=e.fullServerUrl(),i=mo(r,n.host,n._protocol),o="GET",l=n.maxOperationRetryTime,c=new ps(i,o,LB(n,t),l);return c.errorHandler=Im(e),c}function FB(n,e,t,r){const i=e.fullServerUrl(),o=mo(i,n.host,n._protocol),l="PATCH",c=jw(t,r),h={"Content-Type":"application/json; charset=utf-8"},p=n.maxOperationRetryTime,g=new ps(o,l,Em(n,r),p);return g.headers=h,g.body=c,g.errorHandler=Im(e),g}function UB(n,e){const t=e.fullServerUrl(),r=mo(t,n.host,n._protocol),i="DELETE",o=n.maxOperationRetryTime;function l(h,p){}const c=new ps(r,i,l,o);return c.successCodes=[200,204],c.errorHandler=Im(e),c}function jB(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function ck(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=jB(null,e)),r}function zB(n,e,t,r,i){const o=e.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function c(){let H="";for(let X=0;X<2;X++)H=H+Math.random().toString().slice(2);return H}const h=c();l["Content-Type"]="multipart/related; boundary="+h;const p=ck(e,r,i),g=jw(p,t),v="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+g+`\r
--`+h+`\r
Content-Type: `+p.contentType+`\r
\r
`,T=`\r
--`+h+"--",x=Ki.getBlob(v,r,T);if(x===null)throw JA();const L={name:p.fullPath},N=mo(o,n.host,n._protocol),U="POST",q=n.maxUploadRetryTime,G=new ps(N,U,Em(n,t),q);return G.urlParams=L,G.headers=l,G.body=x.uploadData(),G.errorHandler=Pu(e),G}class Ip{constructor(e,t,r,i){this.current=e,this.total=t,this.finalized=!!r,this.metadata=i||null}}function zw(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{Ti(!1)}return Ti(!!t&&(e||["active"]).indexOf(t)!==-1),t}function BB(n,e,t,r,i){const o=e.bucketOnlyServerUrl(),l=ck(e,r,i),c={name:l.fullPath},h=mo(o,n.host,n._protocol),p="POST",g={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":l.contentType,"Content-Type":"application/json; charset=utf-8"},v=jw(l,t),T=n.maxUploadRetryTime;function x(N){zw(N);let U;try{U=N.getResponseHeader("X-Goog-Upload-URL")}catch{Ti(!1)}return Ti(vm(U)),U}const L=new ps(h,p,x,T);return L.urlParams=c,L.headers=g,L.body=v,L.errorHandler=Pu(e),L}function $B(n,e,t,r){const i={"X-Goog-Upload-Command":"query"};function o(p){const g=zw(p,["active","final"]);let v=null;try{v=p.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Ti(!1)}v||Ti(!1);const T=Number(v);return Ti(!isNaN(T)),new Ip(T,r.size(),g==="final")}const l="POST",c=n.maxUploadRetryTime,h=new ps(t,l,o,c);return h.headers=i,h.errorHandler=Pu(e),h}const kS=256*1024;function qB(n,e,t,r,i,o,l,c){const h=new Ip(0,0);if(l?(h.current=l.current,h.total=l.total):(h.current=0,h.total=r.size()),r.size()!==h.total)throw nB();const p=h.total-h.current;let g=p;i>0&&(g=Math.min(g,i));const v=h.current,T=v+g;let x="";g===0?x="finalize":p===g?x="upload, finalize":x="upload";const L={"X-Goog-Upload-Command":x,"X-Goog-Upload-Offset":`${h.current}`},N=r.slice(v,T);if(N===null)throw JA();function U(X,V){const F=zw(X,["active","final"]),R=h.current+g,C=r.size();let b;return F==="final"?b=Em(e,o)(X,V):b=null,new Ip(R,C,F==="final",b)}const q="POST",G=e.maxUploadRetryTime,H=new ps(t,q,U,G);return H.headers=L,H.body=N.uploadData(),H.progressCallback=c||null,H.errorHandler=Pu(n),H}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WB={STATE_CHANGED:"state_changed"},Fn={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Oy(n){switch(n){case"running":case"pausing":case"canceling":return Fn.RUNNING;case"paused":return Fn.PAUSED;case"success":return Fn.SUCCESS;case"canceled":return Fn.CANCELED;case"error":return Fn.ERROR;default:return Fn.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HB{constructor(e,t,r){if(uB(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const o=e;this.next=o.next,this.error=o.error,this.complete=o.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class GB{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=la.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=la.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=la.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw kc("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw kc("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw kc("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw kc("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw kc("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class KB extends GB{initXhr(){this.xhr_.responseType="text"}}function yi(){return new KB}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=wm(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(It.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const o=this.isExponentialBackoffExpired();if(nk(i.status,[]))if(o)i=YA();else{this.sleepTime=Math.max(this.sleepTime*2,Gz),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(It.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,o)=>{this._resolve=i,this._reject=o,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=BB(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,yi,e,t);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const i=$B(this._ref.storage,this._ref._location,e,this._blob),o=this._ref.storage._makeRequest(i,yi,t,r);this._request=o,o.getPromise().then(l=>{l=l,this._request=void 0,this._updateProgress(l.current),this._needToFetchStatus=!1,l.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=kS*this._chunkMultiplier,t=new Ip(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,o)=>{let l;try{l=qB(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(h){this._error=h,this._transition("error");return}const c=this._ref.storage._makeRequest(l,yi,i,o,!1);this._request=c,c.getPromise().then(h=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(h.current),h.finalized?(this._metadata=h.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){kS*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=uk(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,yi,e,t);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=zB(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,yi,e,t);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=XA(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Oy(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,i){const o=new HB(t||void 0,r||void 0,i||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Oy(this._state)){case Fn.SUCCESS:Rl(this._resolve.bind(null,this.snapshot))();break;case Fn.CANCELED:case Fn.ERROR:const t=this._reject;Rl(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Oy(this._state)){case Fn.RUNNING:case Fn.PAUSED:e.next&&Rl(e.next.bind(e,this.snapshot))();break;case Fn.SUCCESS:e.complete&&Rl(e.complete.bind(e))();break;case Fn.CANCELED:case Fn.ERROR:e.error&&Rl(e.error.bind(e,this._error))();break;default:e.error&&Rl(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t){this._service=e,t instanceof Pn?this._location=t:this._location=Pn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ia(e,t)}get root(){const e=new Pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ak(this._location.path)}get storage(){return this._service}get parent(){const e=bB(this._location.path);if(e===null)return null;const t=new Pn(this._location.bucket,e);return new Ia(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw ek(e)}}function QB(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new dk(n,new Ki(e),t)}function YB(n){const e={prefixes:[],items:[]};return hk(n,e).then(()=>e)}async function hk(n,e,t){const i=await fk(n,{pageToken:t});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await hk(n,e,i.nextPageToken)}function fk(n,e){e!=null&&typeof e.maxResults=="number"&&z_("options.maxResults",1,1e3,e.maxResults);const t=e||{},r=VB(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(r,yi)}function XB(n){n._throwIfRoot("getMetadata");const e=uk(n.storage,n._location,wm());return n.storage.makeRequestWithTokens(e,yi)}function JB(n,e){n._throwIfRoot("updateMetadata");const t=FB(n.storage,n._location,e,wm());return n.storage.makeRequestWithTokens(t,yi)}function ZB(n){n._throwIfRoot("getDownloadURL");const e=MB(n.storage,n._location,wm());return n.storage.makeRequestWithTokens(e,yi).then(t=>{if(t===null)throw rB();return t})}function e$(n){n._throwIfRoot("deleteObject");const e=UB(n.storage,n._location);return n.storage.makeRequestWithTokens(e,yi)}function pk(n,e){const t=RB(n._location.path,e),r=new Pn(n._location.bucket,t);return new Ia(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t$(n){return/^[A-Za-z]+:\/\//.test(n)}function n$(n,e){return new Ia(n,e)}function mk(n,e){if(n instanceof Bw){const t=n;if(t._bucket==null)throw tB();const r=new Ia(t,t._bucket);return e!=null?mk(r,e):r}else return e!==void 0?pk(n,e):n}function r$(n,e){if(e&&t$(e)){if(n instanceof Bw)return n$(n,e);throw jl("To use ref(service, url), the first argument must be a Storage instance.")}else return mk(n,e)}function CS(n,e){const t=e==null?void 0:e[QA];return t==null?null:Pn.makeFromBucketSpec(t,n)}function i$(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:lR(i,n.app.options.projectId))}class Bw{constructor(e,t,r,i,o){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=KA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Wz,this._maxUploadRetryTime=Hz,this._requests=new Set,i!=null?this._bucket=Pn.makeFromBucketSpec(i,this._host):this._bucket=CS(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Pn.makeFromBucketSpec(this._url,e):this._bucket=CS(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){z_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){z_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ia(this,e)}_makeRequest(e,t,r,i,o=!0){if(this._deleted)return new sB(ZA());{const l=gB(e,this._appId,r,i,t,this._firebaseVersion,o);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const xS="@firebase/storage",OS="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s$="storage";function o$(n,e,t){return n=De(n),QB(n,e,t)}function a$(n){return n=De(n),XB(n)}function l$(n,e){return n=De(n),JB(n,e)}function u$(n,e){return n=De(n),fk(n,e)}function c$(n){return n=De(n),YB(n)}function d$(n){return n=De(n),ZB(n)}function h$(n){return n=De(n),e$(n)}function DS(n,e){return n=De(n),r$(n,e)}function f$(n,e){return pk(n,e)}function p$(n,e,t,r={}){i$(n,e,t,r)}function m$(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Bw(t,r,i,e,ls)}function g$(){rs(new Or(s$,m$,"PUBLIC").setMultipleInstances(!0)),pr(xS,OS,""),pr(xS,OS,"esm2017")}g$();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t,r){this._delegate=e,this.task=t,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Pf(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(r=>{if(e)return e(new Pf(r,this,this._ref))},t)}on(e,t,r,i){let o;return t&&(typeof t=="function"?o=l=>t(new Pf(l,this,this._ref)):o={next:t.next?l=>t.next(new Pf(l,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,o,r||void 0,i||void 0)}}class LS{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new es(e,this._service))}get items(){return this._delegate.items.map(e=>new es(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=f$(this._delegate,e);return new es(t,this.storage)}get root(){return new es(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new es(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new NS(o$(this._delegate,e,t),this)}putString(e,t=kr.RAW,r){this._throwIfRoot("putString");const i=rk(t,e),o=Object.assign({},r);return o.contentType==null&&i.contentType!=null&&(o.contentType=i.contentType),new NS(new dk(this._delegate,new Ki(i.data,!0),o),this)}listAll(){return c$(this._delegate).then(e=>new LS(e,this.storage))}list(e){return u$(this._delegate,e||void 0).then(t=>new LS(t,this.storage))}getMetadata(){return a$(this._delegate)}updateMetadata(e){return l$(this._delegate,e)}getDownloadURL(){return d$(this._delegate)}delete(){return this._throwIfRoot("delete"),h$(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw ek(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(VS(e))throw jl("ref() expected a child path but got a URL, use refFromURL instead.");return new es(DS(this._delegate,e),this)}refFromURL(e){if(!VS(e))throw jl("refFromURL() expected a full URL but got a child path, use ref() instead.");try{Pn.makeFromUrl(e,this._delegate.host)}catch{throw jl("refFromUrl() expected a valid full URL but got an invalid one.")}return new es(DS(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,r={}){p$(this._delegate,e,t,r)}}function VS(n){return/^[A-Za-z]+:\/\//.test(n)}const y$="@firebase/storage-compat",_$="0.3.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v$="storage-compat";function w$(n,{instanceIdentifier:e}){const t=n.getProvider("app-compat").getImmediate(),r=n.getProvider("storage").getImmediate({identifier:e});return new gk(t,r)}function E$(n){const e={TaskState:Fn,TaskEvent:WB,StringFormat:kr,Storage:gk,Reference:es};n.INTERNAL.registerComponent(new Or(v$,w$,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),n.registerVersion(y$,_$)}E$(xi);const I$={apiKey:"AIzaSyCtrRSlEOUmLuxdwUXY3teLGowMFs85NGQ",authDomain:"video-streaming-service-53ac2.firebaseapp.com",projectId:"video-streaming-service-53ac2",storageBucket:"video-streaming-service-53ac2.firebasestorage.app",messagingSenderId:"361930067744",appId:"1:361930067744:web:b5b98460d4103021425145",measurementId:"G-BSC36LE08P"},T$=xi.initializeApp(I$),yk=T$.firestore(),Dy=xi.auth(),S$=new xi.auth.GoogleAuthProvider;xi.storage();const b$=n=>{const{id:e}=Yx(),[t,r]=ue.useState({});return ue.useEffect(()=>{yk.collection("movies").doc(e).get().then(i=>{i.exists?r(i.data()):console.log("no such document in firebase 🔥")}).catch(i=>{console.log("Error getting document:",i)})},[e]),se.jsxs(R$,{children:[se.jsx(P$,{children:se.jsx("img",{alt:t.title,src:t.backgroundImg})}),se.jsx(A$,{children:se.jsx("img",{alt:t.title,src:t.titleImg})}),se.jsxs(k$,{children:[se.jsxs(C$,{children:[se.jsxs(_k,{children:[se.jsx("img",{src:"/images/play-icon-white.png",alt:""}),se.jsx("span",{children:"Play"})]}),se.jsxs(x$,{children:[se.jsx("img",{src:"/images/play-icon-white.png",alt:""}),se.jsx("span",{children:"Trailer"})]}),se.jsxs(O$,{children:[se.jsx("span",{}),se.jsx("span",{})]}),se.jsx(D$,{children:se.jsx("div",{children:se.jsx("img",{src:"/images/group-icon.png",alt:""})})})]}),se.jsx(N$,{children:t.subTitle}),se.jsx(L$,{children:t.description})]})]})},R$=je.div`
	position: relative;
	min-height: calc(100vh-250px);
	overflow-x: hidden;
	display: block;
	top: 72px;
	padding: 0 calc(3.5vw + 5px);
`,P$=je.div`
	left: 0px;
	opacity: 0.8;
	position: fixed;
	right: 0px;
	top: 0px;
	z-index: -1;

	img {
		width: 100vw;
		height: 100vh;

		@media (max-width: 768px) {
			width: initial;
		}
	}
`,A$=je.div`
	align-items: flex-end;
	display: flex;
	-webkit-box-pack: start;
	justify-content: flex-start;
	margin: 0px auto;
	height: 30vw;
	min-height: 170px;
	padding-bottom: 24px;
	width: 100%;

	img {
		max-width: 600px;
		min-width: 200px;
		width: 35vw;
	}
`,k$=je.div`
	max-width: 874px;
`,C$=je.div`
	align-items: center;
	display: flex;
	flex-flow: row nowrap;
	margin: 24px 0px;
	min-height: 56px;
`,_k=je.button`
	font-size: 15px;
	margin: 0px 22px 0px 0px;
	padding: 0px 24px;
	height: 56px;
	border-radius: 4px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	letter-spacing: 1.8px;
	text-align: center;
	text-transform: uppercase;
	background: #ff4e4e;
	border: none;
	color: white;

	img {
		margin-right: 6px;
		width: 32px;
	}

	&:nth-child(1):hover {
		background-color: #ff0000;
	}

	&:hover {
		background-color: rgb(198, 198, 198);
	}

	@media (max-width: 768px) {
		height: 45px;
		padding: 0px 12px;
		font-size: 12px;
		margin: 0px 10px 0px 0px;

		img {
			width: 25px;
		}
	}
`,x$=je(_k)`
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid rgb(249, 249, 249);
	color: rgb(249, 249, 249);
`,O$=je.div`
	margin-right: 16px;
	height: 44px;
	width: 44px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.6);
	border-radius: 50%;
	border: 2px solid white;
	cursor: pointer;

	span {
		background-color: rgb(249, 249, 249);
		display: inline-block;

		&:first-child {
			height: 2px;
			transform: translate(1px, 0px) rotate(0deg);
			width: 16px;
		}

		&:nth-child(2) {
			height: 16px;
			transform: translateX(-8px) rotate(0deg);
			width: 2px;
		}
	}
`,D$=je.div`
	height: 44px;
	width: 44px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background: white;

	div {
		height: 40px;
		width: 40px;
		background: rgb(0, 0, 0);
		border-radius: 50%;

		img {
			width: 100%;
		}
	}
`,N$=je.div`
	color: rgb(249, 249, 249);
	font-size: 15px;
	min-height: 20px;

	@media (max-width: 768px) {
		font-size: 12px;
	}
`,L$=je.div`
	line-height: 1.4;
	font-size: 20px;
	padding: 16px 0px;
	color: rgb(249, 249, 249);

	@media (max-width: 768px) {
		font-size: 14px;
	}
`;function yn(n){return`Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}var V$=typeof Symbol=="function"&&Symbol.observable||"@@observable",MS=V$,Ny=()=>Math.random().toString(36).substring(7).split("").join("."),M$={INIT:`@@redux/INIT${Ny()}`,REPLACE:`@@redux/REPLACE${Ny()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Ny()}`},Tp=M$;function $w(n){if(typeof n!="object"||n===null)return!1;let e=n;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(n)===e||Object.getPrototypeOf(n)===null}function vk(n,e,t){if(typeof n!="function")throw new Error(yn(2));if(typeof e=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(yn(0));if(typeof e=="function"&&typeof t>"u"&&(t=e,e=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(yn(1));return t(vk)(n,e)}let r=n,i=e,o=new Map,l=o,c=0,h=!1;function p(){l===o&&(l=new Map,o.forEach((U,q)=>{l.set(q,U)}))}function g(){if(h)throw new Error(yn(3));return i}function v(U){if(typeof U!="function")throw new Error(yn(4));if(h)throw new Error(yn(5));let q=!0;p();const G=c++;return l.set(G,U),function(){if(q){if(h)throw new Error(yn(6));q=!1,p(),l.delete(G),o=null}}}function T(U){if(!$w(U))throw new Error(yn(7));if(typeof U.type>"u")throw new Error(yn(8));if(typeof U.type!="string")throw new Error(yn(17));if(h)throw new Error(yn(9));try{h=!0,i=r(i,U)}finally{h=!1}return(o=l).forEach(G=>{G()}),U}function x(U){if(typeof U!="function")throw new Error(yn(10));r=U,T({type:Tp.REPLACE})}function L(){const U=v;return{subscribe(q){if(typeof q!="object"||q===null)throw new Error(yn(11));function G(){const X=q;X.next&&X.next(g())}return G(),{unsubscribe:U(G)}},[MS](){return this}}}return T({type:Tp.INIT}),{dispatch:T,subscribe:v,getState:g,replaceReducer:x,[MS]:L}}function F$(n){Object.keys(n).forEach(e=>{const t=n[e];if(typeof t(void 0,{type:Tp.INIT})>"u")throw new Error(yn(12));if(typeof t(void 0,{type:Tp.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(yn(13))})}function U$(n){const e=Object.keys(n),t={};for(let o=0;o<e.length;o++){const l=e[o];typeof n[l]=="function"&&(t[l]=n[l])}const r=Object.keys(t);let i;try{F$(t)}catch(o){i=o}return function(l={},c){if(i)throw i;let h=!1;const p={};for(let g=0;g<r.length;g++){const v=r[g],T=t[v],x=l[v],L=T(x,c);if(typeof L>"u")throw c&&c.type,new Error(yn(14));p[v]=L,h=h||L!==x}return h=h||r.length!==Object.keys(l).length,h?p:l}}function Sp(...n){return n.length===0?e=>e:n.length===1?n[0]:n.reduce((e,t)=>(...r)=>e(t(...r)))}function j$(...n){return e=>(t,r)=>{const i=e(t,r);let o=()=>{throw new Error(yn(15))};const l={getState:i.getState,dispatch:(h,...p)=>o(h,...p)},c=n.map(h=>h(l));return o=Sp(...c)(i.dispatch),{...i,dispatch:o}}}function z$(n){return $w(n)&&"type"in n&&typeof n.type=="string"}var wk=Symbol.for("immer-nothing"),FS=Symbol.for("immer-draftable"),gr=Symbol.for("immer-state");function Xr(n,...e){throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`)}var uu=Object.getPrototypeOf;function Ta(n){return!!n&&!!n[gr]}function as(n){var e;return n?Ek(n)||Array.isArray(n)||!!n[FS]||!!((e=n.constructor)!=null&&e[FS])||Sm(n)||bm(n):!1}var B$=Object.prototype.constructor.toString();function Ek(n){if(!n||typeof n!="object")return!1;const e=uu(n);if(e===null)return!0;const t=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===B$}function bp(n,e){Tm(n)===0?Reflect.ownKeys(n).forEach(t=>{e(t,n[t],n)}):n.forEach((t,r)=>e(r,t,n))}function Tm(n){const e=n[gr];return e?e.type_:Array.isArray(n)?1:Sm(n)?2:bm(n)?3:0}function B_(n,e){return Tm(n)===2?n.has(e):Object.prototype.hasOwnProperty.call(n,e)}function Ik(n,e,t){const r=Tm(n);r===2?n.set(e,t):r===3?n.add(t):n[e]=t}function $$(n,e){return n===e?n!==0||1/n===1/e:n!==n&&e!==e}function Sm(n){return n instanceof Map}function bm(n){return n instanceof Set}function Go(n){return n.copy_||n.base_}function $_(n,e){if(Sm(n))return new Map(n);if(bm(n))return new Set(n);if(Array.isArray(n))return Array.prototype.slice.call(n);const t=Ek(n);if(e===!0||e==="class_only"&&!t){const r=Object.getOwnPropertyDescriptors(n);delete r[gr];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const l=i[o],c=r[l];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(r[l]={configurable:!0,writable:!0,enumerable:c.enumerable,value:n[l]})}return Object.create(uu(n),r)}else{const r=uu(n);if(r!==null&&t)return{...n};const i=Object.create(r);return Object.assign(i,n)}}function qw(n,e=!1){return Rm(n)||Ta(n)||!as(n)||(Tm(n)>1&&(n.set=n.add=n.clear=n.delete=q$),Object.freeze(n),e&&Object.entries(n).forEach(([t,r])=>qw(r,!0))),n}function q$(){Xr(2)}function Rm(n){return Object.isFrozen(n)}var W$={};function Sa(n){const e=W$[n];return e||Xr(0,n),e}var bd;function Tk(){return bd}function H$(n,e){return{drafts_:[],parent_:n,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function US(n,e){e&&(Sa("Patches"),n.patches_=[],n.inversePatches_=[],n.patchListener_=e)}function q_(n){W_(n),n.drafts_.forEach(G$),n.drafts_=null}function W_(n){n===bd&&(bd=n.parent_)}function jS(n){return bd=H$(bd,n)}function G$(n){const e=n[gr];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function zS(n,e){e.unfinalizedDrafts_=e.drafts_.length;const t=e.drafts_[0];return n!==void 0&&n!==t?(t[gr].modified_&&(q_(e),Xr(4)),as(n)&&(n=Rp(e,n),e.parent_||Pp(e,n)),e.patches_&&Sa("Patches").generateReplacementPatches_(t[gr].base_,n,e.patches_,e.inversePatches_)):n=Rp(e,t,[]),q_(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),n!==wk?n:void 0}function Rp(n,e,t){if(Rm(e))return e;const r=e[gr];if(!r)return bp(e,(i,o)=>BS(n,r,e,i,o,t)),e;if(r.scope_!==n)return e;if(!r.modified_)return Pp(n,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let o=i,l=!1;r.type_===3&&(o=new Set(i),i.clear(),l=!0),bp(o,(c,h)=>BS(n,r,i,c,h,t,l)),Pp(n,i,!1),t&&n.patches_&&Sa("Patches").generatePatches_(r,t,n.patches_,n.inversePatches_)}return r.copy_}function BS(n,e,t,r,i,o,l){if(Ta(i)){const c=o&&e&&e.type_!==3&&!B_(e.assigned_,r)?o.concat(r):void 0,h=Rp(n,i,c);if(Ik(t,r,h),Ta(h))n.canAutoFreeze_=!1;else return}else l&&t.add(i);if(as(i)&&!Rm(i)){if(!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1)return;Rp(n,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,r)&&Pp(n,i)}}function Pp(n,e,t=!1){!n.parent_&&n.immer_.autoFreeze_&&n.canAutoFreeze_&&qw(e,t)}function K$(n,e){const t=Array.isArray(n),r={type_:t?1:0,scope_:e?e.scope_:Tk(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:n,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,o=Ww;t&&(i=[r],o=Rd);const{revoke:l,proxy:c}=Proxy.revocable(i,o);return r.draft_=c,r.revoke_=l,c}var Ww={get(n,e){if(e===gr)return n;const t=Go(n);if(!B_(t,e))return Q$(n,t,e);const r=t[e];return n.finalized_||!as(r)?r:r===Ly(n.base_,e)?(Vy(n),n.copy_[e]=G_(r,n)):r},has(n,e){return e in Go(n)},ownKeys(n){return Reflect.ownKeys(Go(n))},set(n,e,t){const r=Sk(Go(n),e);if(r!=null&&r.set)return r.set.call(n.draft_,t),!0;if(!n.modified_){const i=Ly(Go(n),e),o=i==null?void 0:i[gr];if(o&&o.base_===t)return n.copy_[e]=t,n.assigned_[e]=!1,!0;if($$(t,i)&&(t!==void 0||B_(n.base_,e)))return!0;Vy(n),H_(n)}return n.copy_[e]===t&&(t!==void 0||e in n.copy_)||Number.isNaN(t)&&Number.isNaN(n.copy_[e])||(n.copy_[e]=t,n.assigned_[e]=!0),!0},deleteProperty(n,e){return Ly(n.base_,e)!==void 0||e in n.base_?(n.assigned_[e]=!1,Vy(n),H_(n)):delete n.assigned_[e],n.copy_&&delete n.copy_[e],!0},getOwnPropertyDescriptor(n,e){const t=Go(n),r=Reflect.getOwnPropertyDescriptor(t,e);return r&&{writable:!0,configurable:n.type_!==1||e!=="length",enumerable:r.enumerable,value:t[e]}},defineProperty(){Xr(11)},getPrototypeOf(n){return uu(n.base_)},setPrototypeOf(){Xr(12)}},Rd={};bp(Ww,(n,e)=>{Rd[n]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});Rd.deleteProperty=function(n,e){return Rd.set.call(this,n,e,void 0)};Rd.set=function(n,e,t){return Ww.set.call(this,n[0],e,t,n[0])};function Ly(n,e){const t=n[gr];return(t?Go(t):n)[e]}function Q$(n,e,t){var i;const r=Sk(e,t);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(n.draft_):void 0}function Sk(n,e){if(!(e in n))return;let t=uu(n);for(;t;){const r=Object.getOwnPropertyDescriptor(t,e);if(r)return r;t=uu(t)}}function H_(n){n.modified_||(n.modified_=!0,n.parent_&&H_(n.parent_))}function Vy(n){n.copy_||(n.copy_=$_(n.base_,n.scope_.immer_.useStrictShallowCopy_))}var Y$=class{constructor(n){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if(typeof e=="function"&&typeof t!="function"){const o=t;t=e;const l=this;return function(h=o,...p){return l.produce(h,g=>t.call(this,g,...p))}}typeof t!="function"&&Xr(6),r!==void 0&&typeof r!="function"&&Xr(7);let i;if(as(e)){const o=jS(this),l=G_(e,void 0);let c=!0;try{i=t(l),c=!1}finally{c?q_(o):W_(o)}return US(o,r),zS(i,o)}else if(!e||typeof e!="object"){if(i=t(e),i===void 0&&(i=e),i===wk&&(i=void 0),this.autoFreeze_&&qw(i,!0),r){const o=[],l=[];Sa("Patches").generateReplacementPatches_(e,i,o,l),r(o,l)}return i}else Xr(1,e)},this.produceWithPatches=(e,t)=>{if(typeof e=="function")return(l,...c)=>this.produceWithPatches(l,h=>e(h,...c));let r,i;return[this.produce(e,t,(l,c)=>{r=l,i=c}),r,i]},typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze),typeof(n==null?void 0:n.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(n.useStrictShallowCopy)}createDraft(n){as(n)||Xr(8),Ta(n)&&(n=X$(n));const e=jS(this),t=G_(n,void 0);return t[gr].isManual_=!0,W_(e),t}finishDraft(n,e){const t=n&&n[gr];(!t||!t.isManual_)&&Xr(9);const{scope_:r}=t;return US(r,e),zS(void 0,r)}setAutoFreeze(n){this.autoFreeze_=n}setUseStrictShallowCopy(n){this.useStrictShallowCopy_=n}applyPatches(n,e){let t;for(t=e.length-1;t>=0;t--){const i=e[t];if(i.path.length===0&&i.op==="replace"){n=i.value;break}}t>-1&&(e=e.slice(t+1));const r=Sa("Patches").applyPatches_;return Ta(n)?r(n,e):this.produce(n,i=>r(i,e))}};function G_(n,e){const t=Sm(n)?Sa("MapSet").proxyMap_(n,e):bm(n)?Sa("MapSet").proxySet_(n,e):K$(n,e);return(e?e.scope_:Tk()).drafts_.push(t),t}function X$(n){return Ta(n)||Xr(10,n),bk(n)}function bk(n){if(!as(n)||Rm(n))return n;const e=n[gr];let t;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,t=$_(n,e.scope_.immer_.useStrictShallowCopy_)}else t=$_(n,!0);return bp(t,(r,i)=>{Ik(t,r,bk(i))}),e&&(e.finalized_=!1),t}var yr=new Y$,Rk=yr.produce;yr.produceWithPatches.bind(yr);yr.setAutoFreeze.bind(yr);yr.setUseStrictShallowCopy.bind(yr);yr.applyPatches.bind(yr);yr.createDraft.bind(yr);yr.finishDraft.bind(yr);function Pk(n){return({dispatch:t,getState:r})=>i=>o=>typeof o=="function"?o(t,r,n):i(o)}var J$=Pk(),Z$=Pk,e9=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Sp:Sp.apply(null,arguments)};function $S(n,e){function t(...r){if(e){let i=e(...r);if(!i)throw new Error(ts(0));return{type:n,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:n,payload:r[0]}}return t.toString=()=>`${n}`,t.type=n,t.match=r=>z$(r)&&r.type===n,t}var Ak=class Bc extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Bc.prototype)}static get[Symbol.species](){return Bc}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Bc(...e[0].concat(this)):new Bc(...e.concat(this))}};function qS(n){return as(n)?Rk(n,()=>{}):n}function WS(n,e,t){return n.has(e)?n.get(e):n.set(e,t(e)).get(e)}function t9(n){return typeof n=="boolean"}var n9=()=>function(e){const{thunk:t=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=e??{};let l=new Ak;return t&&(t9(t)?l.push(J$):l.push(Z$(t.extraArgument))),l},r9="RTK_autoBatch",HS=n=>e=>{setTimeout(e,n)},i9=(n={type:"raf"})=>e=>(...t)=>{const r=e(...t);let i=!0,o=!1,l=!1;const c=new Set,h=n.type==="tick"?queueMicrotask:n.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:HS(10):n.type==="callback"?n.queueNotification:HS(n.timeout),p=()=>{l=!1,o&&(o=!1,c.forEach(g=>g()))};return Object.assign({},r,{subscribe(g){const v=()=>i&&g(),T=r.subscribe(v);return c.add(g),()=>{T(),c.delete(g)}},dispatch(g){var v;try{return i=!((v=g==null?void 0:g.meta)!=null&&v[r9]),o=!i,o&&(l||(l=!0,h(p))),r.dispatch(g)}finally{i=!0}}})},s9=n=>function(t){const{autoBatch:r=!0}=t??{};let i=new Ak(n);return r&&i.push(i9(typeof r=="object"?r:void 0)),i};function o9(n){const e=n9(),{reducer:t=void 0,middleware:r,devTools:i=!0,preloadedState:o=void 0,enhancers:l=void 0}=n||{};let c;if(typeof t=="function")c=t;else if($w(t))c=U$(t);else throw new Error(ts(1));let h;typeof r=="function"?h=r(e):h=e();let p=Sp;i&&(p=e9({trace:!1,...typeof i=="object"&&i}));const g=j$(...h),v=s9(g);let T=typeof l=="function"?l(v):v();const x=p(...T);return vk(c,o,x)}function kk(n){const e={},t=[];let r;const i={addCase(o,l){const c=typeof o=="string"?o:o.type;if(!c)throw new Error(ts(28));if(c in e)throw new Error(ts(29));return e[c]=l,i},addMatcher(o,l){return t.push({matcher:o,reducer:l}),i},addDefaultCase(o){return r=o,i}};return n(i),[e,t,r]}function a9(n){return typeof n=="function"}function l9(n,e){let[t,r,i]=kk(e),o;if(a9(n))o=()=>qS(n());else{const c=qS(n);o=()=>c}function l(c=o(),h){let p=[t[h.type],...r.filter(({matcher:g})=>g(h)).map(({reducer:g})=>g)];return p.filter(g=>!!g).length===0&&(p=[i]),p.reduce((g,v)=>{if(v)if(Ta(g)){const x=v(g,h);return x===void 0?g:x}else{if(as(g))return Rk(g,T=>v(T,h));{const T=v(g,h);if(T===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return T}}return g},c)}return l.getInitialState=o,l}var u9=Symbol.for("rtk-slice-createasyncthunk");function c9(n,e){return`${n}/${e}`}function d9({creators:n}={}){var t;const e=(t=n==null?void 0:n.asyncThunk)==null?void 0:t[u9];return function(i){const{name:o,reducerPath:l=o}=i;if(!o)throw new Error(ts(11));typeof process<"u";const c=(typeof i.reducers=="function"?i.reducers(f9()):i.reducers)||{},h=Object.keys(c),p={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},g={addCase(H,X){const V=typeof H=="string"?H:H.type;if(!V)throw new Error(ts(12));if(V in p.sliceCaseReducersByType)throw new Error(ts(13));return p.sliceCaseReducersByType[V]=X,g},addMatcher(H,X){return p.sliceMatchers.push({matcher:H,reducer:X}),g},exposeAction(H,X){return p.actionCreators[H]=X,g},exposeCaseReducer(H,X){return p.sliceCaseReducersByName[H]=X,g}};h.forEach(H=>{const X=c[H],V={reducerName:H,type:c9(o,H),createNotation:typeof i.reducers=="function"};m9(X)?y9(V,X,g,e):p9(V,X,g)});function v(){const[H={},X=[],V=void 0]=typeof i.extraReducers=="function"?kk(i.extraReducers):[i.extraReducers],F={...H,...p.sliceCaseReducersByType};return l9(i.initialState,R=>{for(let C in F)R.addCase(C,F[C]);for(let C of p.sliceMatchers)R.addMatcher(C.matcher,C.reducer);for(let C of X)R.addMatcher(C.matcher,C.reducer);V&&R.addDefaultCase(V)})}const T=H=>H,x=new Map;let L;function N(H,X){return L||(L=v()),L(H,X)}function U(){return L||(L=v()),L.getInitialState()}function q(H,X=!1){function V(R){let C=R[H];return typeof C>"u"&&X&&(C=U()),C}function F(R=T){const C=WS(x,X,()=>new WeakMap);return WS(C,R,()=>{const b={};for(const[w,D]of Object.entries(i.selectors??{}))b[w]=h9(D,R,U,X);return b})}return{reducerPath:H,getSelectors:F,get selectors(){return F(V)},selectSlice:V}}const G={name:o,reducer:N,actions:p.actionCreators,caseReducers:p.sliceCaseReducersByName,getInitialState:U,...q(l),injectInto(H,{reducerPath:X,...V}={}){const F=X??l;return H.inject({reducerPath:F,reducer:N},V),{...G,...q(F,!0)}}};return G}}function h9(n,e,t,r){function i(o,...l){let c=e(o);return typeof c>"u"&&r&&(c=t()),n(c,...l)}return i.unwrapped=n,i}var Ck=d9();function f9(){function n(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return n.withTypes=()=>n,{reducer(e){return Object.assign({[e.name](...t){return e(...t)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,t){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}},asyncThunk:n}}function p9({type:n,reducerName:e,createNotation:t},r,i){let o,l;if("reducer"in r){if(t&&!g9(r))throw new Error(ts(17));o=r.reducer,l=r.prepare}else o=r;i.addCase(n,o).exposeCaseReducer(e,o).exposeAction(e,l?$S(n,l):$S(n))}function m9(n){return n._reducerDefinitionType==="asyncThunk"}function g9(n){return n._reducerDefinitionType==="reducerWithPrepare"}function y9({type:n,reducerName:e},t,r,i){if(!i)throw new Error(ts(18));const{payloadCreator:o,fulfilled:l,pending:c,rejected:h,settled:p,options:g}=t,v=i(n,o,g);r.exposeAction(e,v),l&&r.addCase(v.fulfilled,l),c&&r.addCase(v.pending,c),h&&r.addCase(v.rejected,h),p&&r.addMatcher(v.settled,p),r.exposeCaseReducer(e,{fulfilled:l||Af,pending:c||Af,rejected:h||Af,settled:p||Af})}function Af(){}function ts(n){return`Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}const _9={name:"",email:"",photo:""},xk=Ck({name:"user",initialState:_9,reducers:{setUserLoginDetails:(n,e)=>{n.name=e.payload.name,n.email=e.payload.email,n.photo=e.payload.photo},setSignOutState:n=>{n.name=null,n.email=null,n.photo=null}}}),{setUserLoginDetails:v9,setSignOutState:w9}=xk.actions,Ok=n=>n.user.name,E9=n=>n.user.email,I9=n=>n.user.photo,T9=xk.reducer,S9=n=>{const e=gb(),t=Rb(),r=Ks(Ok);Ks(E9);const i=Ks(I9);ue.useEffect(()=>{Dy.onAuthStateChanged(async c=>{c&&(l(c),t("/home"))})},[r]);const o=()=>{r?r&&Dy.signOut().then(()=>{e(w9()),t("/")}).catch(c=>alert(c.message)):Dy.signInWithPopup(S$).then(c=>{l(c.user)}).catch(c=>{alert(c.message)})},l=c=>{e(v9({name:c.displayName,email:c.email,photo:c.photoURL}))};return se.jsxs(b9,{children:[se.jsx(R9,{children:se.jsx("img",{src:"/images/logo.svg"})}),r?se.jsxs(se.Fragment,{children:[se.jsxs(P9,{children:[se.jsxs("a",{href:"/home",children:[se.jsx("img",{src:"/images/home-icon.svg",alt:"HOME"}),se.jsx("span",{children:"Home"})]}),se.jsxs("a",{children:[se.jsx("img",{src:"/images/movie-icon.svg",alt:"MOVIE"}),se.jsx("span",{children:"Movie"})]}),se.jsxs("a",{children:[se.jsx("img",{src:"/images/drama-icon.svg",alt:"DRAMA"}),se.jsx("span",{children:"Drama"})]}),se.jsxs("a",{children:[se.jsx("img",{src:"/images/m-v-icon.svg",alt:"MUSICVIDEO"}),se.jsx("span",{children:"Music Video"})]}),se.jsxs("a",{children:[se.jsx("img",{src:"/images/l-sh-icon.svg",alt:"LIVESHOW"}),se.jsx("span",{children:"Live Show"})]}),se.jsxs("a",{children:[se.jsx("img",{src:"/images/comedies-icon.svg",alt:"COMEDIES"}),se.jsx("span",{children:"Comedies"})]})]}),se.jsxs(k9,{children:[se.jsx(Dk,{src:i,alt:r}),se.jsx(Nk,{children:se.jsx("span",{onClick:o,children:"Sign out"})})]})]}):se.jsx(A9,{onClick:o,children:"Login"})]})},b9=je.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 70px;
	background-color: #090b13;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 36px;
	letter-spacing: 16px;
	z-index: 3;
`,R9=je.a`
	padding: 10px;
	width: 80px;
	margin-top: 4px;
	max-height: 70px;
	font-size: 0;
	display: inline-block;

	img {
		display: block;
		width: 100%;
	}
`,P9=je.div`
	align-items: center;
	display: flex;
	flex-flow: row nowrap;
	height: 100%;
	justify-content: flex-end;
	margin: 0px;
	padding: 0px;
	position: relative;
	margin-right: auto;
	margin-left: 25px;

	a {
		display: flex;
		align-items: center;
		padding: 0 12px;

		img {
			height: 20px;
			min-width: 20px;
			width: 20px;
			z-index: auto;
		}

		span {
			color: rgb(249, 249, 249);
			font-size: 13px;
			letter-spacing: 1.42px;
			line-height: 1.08;
			padding: 2px 6px;
			white-space: nowrap;
			position: relative;

			&:before {
				background-color: rgb(249, 249, 249);
				border-radius: 0px 0px 4px 4px;
				bottom: -6px;
				content: '';
				height: 2px;
				left: 0px;
				opacity: 0;
				position: absolute;
				right: 0px;
				transform-origin: left center;
				transform: scaleX(0);
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
				visibility: hidden;
				width: auto;
			}
		}

		&:hover {
			span:before {
				transform: scaleX(1);
				visibility: visible;
				opacity: 1 !important;
			}
		}
	}

	@media (max-width: 768px) {
		display: none;
	}
`,A9=je.a`
	background-color: rgba(0, 0, 0, 0.6);
	padding: 8px 16px;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	border: 1px solid #f9f9f9;
	border-radius: 4px;
	transition: all 0.2s ease 0s;
	cursor: pointer;

	&:hover {
		background-color: #f9f9f9;
		color: #000;
		border-color: transparent;
	}
`,Dk=je.img`
	height: 100%;
`,Nk=je.div`
	position: absolute;
	top: 48px;
	right: 0px;
	background: rgb(19, 19, 19);
	border: 1px solid rgba(151, 151, 151, 0.34);
	border-radius: 4px;
	box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
	padding: 10px;
	font-size: 14px;
	letter-spacing: 3px;
	width: 100px;
	opacity: 0;
`,k9=je.div`
	position: relative;
	height: 48px;
	width: 48px;
	display: flex;
	cursor: pointer;
	align-items: center;
	justify-content: center;

	${Dk} {
		border-radius: 50%;
		width: 100%;
		height: 100%;
	}

	&:hover {
		${Nk} {
			opacity: 1;
			transition-duration: 1s;
		}
	}
`,C9={recommend:null,newMovies:null,original:null,trending:null},Lk=Ck({name:"movie",initialState:C9,reducers:{setMovies:(n,e)=>{n.recommend=e.payload.recommend,n.newMovies=e.payload.newMovies,n.original=e.payload.original,n.trending=e.payload.trending}}}),{setMovies:x9}=Lk.actions,O9=n=>n.movie.recommend,D9=n=>n.movie.newMovies,N9=n=>n.movie.original,L9=n=>n.movie.trending,V9=Lk.reducer,M9=n=>se.jsx(F9,{children:"Komola Khidirova © 2024"}),F9=je.div`
	top: -70px;
	bottom: 0;
	left: 0;
	right: 0;
	height: 250px;
	background-color: #090b13;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding: 40px;
	z-index: 3;
`;var My={},Fy={},Cc={},Uy={},GS;function U9(){return GS||(GS=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};n.default=e}(Uy)),Uy}var jy,KS;function j9(){if(KS)return jy;KS=1;var n="Expected a function",e=NaN,t="[object Symbol]",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,h=typeof ff=="object"&&ff&&ff.Object===Object&&ff,p=typeof self=="object"&&self&&self.Object===Object&&self,g=h||p||Function("return this")(),v=Object.prototype,T=v.toString,x=Math.max,L=Math.min,N=function(){return g.Date.now()};function U(V,F,R){var C,b,w,D,M,k,Y=0,ge=!1,pe=!1,S=!0;if(typeof V!="function")throw new TypeError(n);F=X(F)||0,q(R)&&(ge=!!R.leading,pe="maxWait"in R,w=pe?x(X(R.maxWait)||0,F):w,S="trailing"in R?!!R.trailing:S);function le(ce){var Te=C,be=b;return C=b=void 0,Y=ce,D=V.apply(be,Te),D}function B(ce){return Y=ce,M=setTimeout(z,F),ge?le(ce):D}function I(ce){var Te=ce-k,be=ce-Y,Le=F-Te;return pe?L(Le,w-be):Le}function P(ce){var Te=ce-k,be=ce-Y;return k===void 0||Te>=F||Te<0||pe&&be>=w}function z(){var ce=N();if(P(ce))return ee(ce);M=setTimeout(z,I(ce))}function ee(ce){return M=void 0,S&&C?le(ce):(C=b=void 0,D)}function re(){M!==void 0&&clearTimeout(M),Y=0,C=k=b=M=void 0}function oe(){return M===void 0?D:ee(N())}function ae(){var ce=N(),Te=P(ce);if(C=arguments,b=this,k=ce,Te){if(M===void 0)return B(k);if(pe)return M=setTimeout(z,F),le(k)}return M===void 0&&(M=setTimeout(z,F)),D}return ae.cancel=re,ae.flush=oe,ae}function q(V){var F=typeof V;return!!V&&(F=="object"||F=="function")}function G(V){return!!V&&typeof V=="object"}function H(V){return typeof V=="symbol"||G(V)&&T.call(V)==t}function X(V){if(typeof V=="number")return V;if(H(V))return e;if(q(V)){var F=typeof V.valueOf=="function"?V.valueOf():V;V=q(F)?F+"":F}if(typeof V!="string")return V===0?V:+V;V=V.replace(r,"");var R=o.test(V);return R||l.test(V)?c(V.slice(2),R?2:8):i.test(V)?e:+V}return jy=U,jy}var zy={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
	margin-top: 20px;

	& > button {
		opacity: 0;
		height: 100%;
		width: 5vw;
		z-index: 1;

		&:hover {
			opacity: 1;
			transition: opacity 0.2s ease 0s;
		}
	}

	ul li button {
		&:before {
			font-size: 10px;
			color: rgb(150, 158, 171);
		}
	}

	li.slick-active button:before {
		color: white;
	}

	.slick-list {
		overflow: initial;
	}

	.slick-prev {
		left: -75px;
	}

	.slick-next {
		right: -75px;
	}
`,kf=je.div`
	border-radius: 4px;
	cursor: pointer;
	position: relative;

	a {
		border-radius: 4px;
		box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
			rgb(0 0 0 / 73%) 0px 16px 10px -10px;
		cursor: pointer;
		display: block;
		position: relative;
		padding: 4px;

		img {
			width: 100%;
			height: 100%;
		}

		&:hover {
			padding: 0;
			border: 4px solid rgba(249, 249, 249, 0.8);
			transition-duration: 300ms;
		}
	}
`,T5=n=>{const e=Ks(D9);return se.jsxs(S5,{children:[se.jsx("h4",{children:"New Movies"}),se.jsx(b5,{children:e&&e.map((t,r)=>se.jsxs(R5,{children:[t.id,se.jsx(fu,{to:"/detail/"+t.id,children:se.jsx("img",{src:t.cardImg,alt:t.title})})]},r))})]})},S5=je.div`
	padding: 0 0 26px;
`,b5=je.div`
	display: grid;
	grid-gap: 25px;
	gap: 25px;
	grid-template-columns: repeat(4, minmax(0, 1fr));

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`,R5=je.div`
	padding-top: 56.25%;
	border-radius: 10px;
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	border: 3px solid rgba(249, 249, 249, 0.1);
	img {
		inset: 0px;
		display: block;
		height: 100%;
		object-fit: cover;
		opacity: 1;
		position: absolute;
		transition: opacity 500ms ease-in-out 0s;
		width: 100%;
		z-index: 1;
		top: 0;
	}
	&:hover {
		box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
			rgb(0 0 0 / 72%) 0px 30px 22px -10px;
		transform: scale(1.05);
		border-color: rgba(249, 249, 249, 0.8);
	}
`,P5=n=>{const e=Ks(N9);return se.jsxs(A5,{children:[se.jsx("h4",{children:"Originals"}),se.jsx(k5,{children:e&&e.map((t,r)=>se.jsxs(C5,{children:[t.id,se.jsx(fu,{to:"/detail/"+t.id,children:se.jsx("img",{src:t.cardImg,alt:t.title})})]},r))})]})},A5=je.div`
	padding: 0 0 26px;
`,k5=je.div`
	display: grid;
	grid-gap: 25px;
	gap: 25px;
	grid-template-columns: repeat(4, minmax(0, 1fr));

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`,C5=je.div`
	padding-top: 56.25%;
	border-radius: 10px;
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	border: 3px solid rgba(249, 249, 249, 0.1);
	img {
		inset: 0px;
		display: block;
		height: 100%;
		object-fit: cover;
		opacity: 1;
		position: absolute;
		transition: opacity 500ms ease-in-out 0s;
		width: 100%;
		z-index: 1;
		top: 0;
	}
	&:hover {
		box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
			rgb(0 0 0 / 72%) 0px 30px 22px -10px;
		transform: scale(1.05);
		border-color: rgba(249, 249, 249, 0.8);
	}
`,x5=n=>{const e=Ks(O9);return console.log(e,":🛢️"),se.jsxs(O5,{children:[se.jsx("h4",{children:"Recommended for You"}),se.jsx(D5,{children:e&&e.map((t,r)=>se.jsxs(N5,{children:[t.id,se.jsx(fu,{to:"/detail/"+t.id,children:se.jsx("img",{src:t.cardImg,alt:t.title})})]},r))})]})},O5=je.div`
	padding: 0 0 26px;
`,D5=je.div`
	display: grid;
	grid-gap: 25px;
	gap: 25px;
	grid-template-columns: repeat(4, minmax(0, 1fr));

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`,N5=je.div`
	padding-top: 56.25%;
	border-radius: 10px;
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	border: 3px solid rgba(249, 249, 249, 0.1);

	img {
		inset: 0px;
		display: block;
		height: 100%;
		object-fit: cover;
		opacity: 1;
		position: absolute;
		transition: opacity 500ms ease-in-out 0s;
		width: 100%;
		z-index: 1;
		top: 0;
	}

	&:hover {
		box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
			rgb(0 0 0 / 72%) 0px 30px 22px -10px;
		transform: scale(1.05);
		border-color: rgba(249, 249, 249, 0.8);
	}
`,L5=n=>{const e=Ks(L9);return se.jsxs(V5,{children:[se.jsx("h4",{children:"Trending"}),se.jsx(M5,{children:e&&e.map((t,r)=>se.jsxs(F5,{children:[t.id,se.jsx(fu,{to:"/detail/"+t.id,children:se.jsx("img",{src:t.cardImg,alt:t.title})})]},r))})]})},V5=je.div`
	padding: 0 0 26px;
`,M5=je.div`
	display: grid;
	grid-gap: 25px;
	gap: 25px;
	grid-template-columns: repeat(4, minmax(0, 1fr));

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`,F5=je.div`
	padding-top: 56.25%;
	border-radius: 10px;
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	border: 3px solid rgba(249, 249, 249, 0.1);
	img {
		inset: 0px;
		display: block;
		height: 100%;
		object-fit: cover;
		opacity: 1;
		position: absolute;
		transition: opacity 500ms ease-in-out 0s;
		width: 100%;
		z-index: 1;
		top: 0;
	}
	&:hover {
		box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
			rgb(0 0 0 / 72%) 0px 30px 22px -10px;
		transform: scale(1.05);
		border-color: rgba(249, 249, 249, 0.8);
	}
`,U5=n=>se.jsxs(j5,{children:[se.jsxs(Dc,{children:[se.jsx("img",{src:"/images/viewers-disney.png",alt:""}),se.jsx("video",{muted:!0,autoPlay:!0,loop:!0,playsInline:!0,children:se.jsx("source",{src:"/videos/1564674844-disney.mp4",type:"video/mp4"})})]}),se.jsxs(Dc,{children:[se.jsx("img",{src:"/images/viewers-pixar.png",alt:""}),se.jsx("video",{muted:!0,autoPlay:!0,loop:!0,playsInline:!0,children:se.jsx("source",{src:"/videos/1564676714-pixar.mp4",type:"video/mp4"})})]}),se.jsxs(Dc,{children:[se.jsx("img",{src:"/images/viewers-marvel.png",alt:""}),se.jsx("video",{muted:!0,autoPlay:!0,loop:!0,playsInline:!0,children:se.jsx("source",{src:"/videos/1564676115-marvel.mp4",type:"video/mp4"})})]}),se.jsxs(Dc,{children:[se.jsx("img",{src:"/images/viewers-starwars.png",alt:""}),se.jsx("video",{muted:!0,autoPlay:!0,loop:!0,playsInline:!0,children:se.jsx("source",{src:"/videos/1608229455-star-wars.mp4",type:"video/mp4"})})]}),se.jsxs(Dc,{children:[se.jsx("img",{src:"/images/viewers-national.png",alt:""}),se.jsx("video",{muted:!0,autoPlay:!0,loop:!0,playsInline:!0,children:se.jsx("source",{src:"/videos/1564676296-national-geographic.mp4",type:"video/mp4"})})]})]}),j5=je.div`
	margin-top: 30px;
	padding: 30px 0px 26px;
	display: grid;
	grid-gap: 25px;
	gap: 25px;
	grid-template-columns: repeat(5, minmax(0, 1fr));

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
`,Dc=je.div`
	padding-top: 56.25%;
	border-radius: 10px;
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	border: 3px solid rgba(249, 249, 249, 0.1);

	img {
		inset: 0px;
		display: block;
		height: 100%;
		object-fit: cover;
		opacity: 1;
		position: absolute;
		transition: opacity 500ms ease-in-out 0s;
		width: 100%;
		z-index: 1;
		top: 0;
	}

	video {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		opacity: 0;
		z-index: 0;
	}

	&:hover {
		box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
			rgb(0 0 0 / 72%) 0px 30px 22px -10px;

		transform: scale(1.05);
		border-color: rgba(249, 249, 249, 0.8);

		video {
			opacity: 1;
		}
	}
`,z5=n=>{const e=gb(),t=Ks(Ok);let r=[],i=[],o=[],l=[];return ue.useEffect(()=>{console.log("hello"),yk.collection("movies").onSnapshot(c=>{c.docs.map(h=>{switch(console.log(r),h.data().type){case"recommend":r=[...r,{id:h.id,...h.data()}];break;case"new":i=[...i,{id:h.id,...h.data()}];break;case"original":o=[...o,{id:h.id,...h.data()}];break;case"trending":l=[...l,{id:h.id,...h.data()}];break}}),e(x9({recommend:r,newMovies:i,original:o,trending:l}))})},[t]),se.jsxs(se.Fragment,{children:[se.jsxs(B5,{children:[se.jsx(E5,{}),se.jsx(U5,{}),se.jsx(x5,{}),se.jsx(T5,{}),se.jsx(P5,{}),se.jsx(L5,{})]}),se.jsx(M9,{})]})},B5=je.main`
	position: relative;
	min-height: calc(100vh - 250px);
	overflow-x: hidden;
	display: block;
	top: 72px;
	margin-bottom: 72px;
	padding: 0 calc(3.5vw + 5px);

	&:after {
		background: url('/images/home-background.png') center center / cover
			no-repeat fixed;
		content: '';
		position: absolute;
		inset: 0px;
		opacity: 1;
		z-index: -1;
	}
`,$5=n=>se.jsx(q5,{children:se.jsxs(W5,{children:[se.jsxs(G5,{children:[se.jsx(K5,{src:"/images/cta-logo-one.svg",alt:""}),se.jsx(Q5,{children:"GET ALL THERE"}),se.jsx(Y5,{children:"From cult classics to modern masterpieces. Stay updated with the latest movies, news and articles from INDI."}),se.jsx(X5,{src:"/images/cta-logo-two.png",alt:""})]}),se.jsx(H5,{})]})}),q5=je.section`
	overflow: hidden;
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 100vh;
`,W5=je.div`
	margin-bottom: 10vw;
	width: 100%;
	position: relative;
	min-height: 100vh;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 80px 40px;
	height: 100%;
`,H5=je.div`
	height: 100%;
	background-position: top;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url('/images/login-background.jpg');
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	z-index: -1;
`,G5=je.div`
	max-width: 650px;
	width: 100%;
	display: flex;
	flex-direction: column;
	z-index: 1;
`,K5=je.img`
	margin-bottom: 12px;
	max-width: 600px;
	min-height: 1px;
	display: block;
	width: 100%;
`,Q5=je.a`
	font-weight: bold;
	color: #f9f9f9;
	background-color: #ff4e4e;
	margin-bottom: 12px;
	width: 100%;
	letter-spacing: 1.5px;
	font-size: 18px;
	padding: 16.5px 0;
	border: 1px solid transparent;
	border-radius: 4px;

	&:hover {
		background-color: #fe5f5f;
	}
`,Y5=je.p`
	color: hsla(0, 0%, 95.3%, 1);
	font-size: 11px;
	margin: 0 0 24px;
	line-height: 1.5;
	letter-spacing: 1.5px;
`,X5=je.img`
	max-width: 600px;
	margin-bottom: 20px;
	display: inline-block;
	vertical-align: bottom;
	width: 100%;
`;function J5(){return se.jsx("div",{className:"App",children:se.jsxs(LO,{children:[se.jsx(S9,{}),se.jsxs(dO,{children:[se.jsx(Cf,{exact:!0,path:"/",Component:$5}),se.jsx(Cf,{path:"/home",Component:z5}),se.jsx(Cf,{path:"/detail/:id",Component:b$})]})]})})}const Z5=o9({reducer:{user:T9,movie:V9},middleware:n=>n({serializableCheck:!1})});nx.createRoot(document.getElementById("root")).render(se.jsx(_x,{store:Z5,children:se.jsx(J5,{})}));