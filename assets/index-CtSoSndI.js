(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function gE(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var vd={exports:{}},dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function vE(){if(x_)return dl;x_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return dl.Fragment=e,dl.jsx=i,dl.jsxs=i,dl}var y_;function _E(){return y_||(y_=1,vd.exports=vE()),vd.exports}var _t=_E(),_d={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function xE(){if(S_)return he;S_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),S=Symbol.iterator;function E(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function B(D,Y,vt){this.props=D,this.context=Y,this.refs=y,this.updater=vt||C}B.prototype.isReactComponent={},B.prototype.setState=function(D,Y){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Y,"setState")},B.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function L(){}L.prototype=B.prototype;function w(D,Y,vt){this.props=D,this.context=Y,this.refs=y,this.updater=vt||C}var et=w.prototype=new L;et.constructor=w,M(et,B.prototype),et.isPureReactComponent=!0;var F=Array.isArray;function O(){}var H={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function A(D,Y,vt){var ut=vt.ref;return{$$typeof:o,type:D,key:Y,ref:ut!==void 0?ut:null,props:vt}}function I(D,Y){return A(D.type,Y,D.props)}function nt(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function K(D){var Y={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(vt){return Y[vt]})}var ct=/\/+/g;function ft(D,Y){return typeof D=="object"&&D!==null&&D.key!=null?K(""+D.key):Y.toString(36)}function V(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(O,O):(D.status="pending",D.then(function(Y){D.status==="pending"&&(D.status="fulfilled",D.value=Y)},function(Y){D.status==="pending"&&(D.status="rejected",D.reason=Y)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function rt(D,Y,vt,ut,Dt){var Pt=typeof D;(Pt==="undefined"||Pt==="boolean")&&(D=null);var Lt=!1;if(D===null)Lt=!0;else switch(Pt){case"bigint":case"string":case"number":Lt=!0;break;case"object":switch(D.$$typeof){case o:case e:Lt=!0;break;case v:return Lt=D._init,rt(Lt(D._payload),Y,vt,ut,Dt)}}if(Lt)return Dt=Dt(D),Lt=ut===""?"."+ft(D,0):ut,F(Dt)?(vt="",Lt!=null&&(vt=Lt.replace(ct,"$&/")+"/"),rt(Dt,Y,vt,"",function(Rt){return Rt})):Dt!=null&&(nt(Dt)&&(Dt=I(Dt,vt+(Dt.key==null||D&&D.key===Dt.key?"":(""+Dt.key).replace(ct,"$&/")+"/")+Lt)),Y.push(Dt)),1;Lt=0;var Mt=ut===""?".":ut+":";if(F(D))for(var at=0;at<D.length;at++)ut=D[at],Pt=Mt+ft(ut,at),Lt+=rt(ut,Y,vt,Pt,Dt);else if(at=E(D),typeof at=="function")for(D=at.call(D),at=0;!(ut=D.next()).done;)ut=ut.value,Pt=Mt+ft(ut,at++),Lt+=rt(ut,Y,vt,Pt,Dt);else if(Pt==="object"){if(typeof D.then=="function")return rt(V(D),Y,vt,ut,Dt);throw Y=String(D),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return Lt}function W(D,Y,vt){if(D==null)return D;var ut=[],Dt=0;return rt(D,ut,"","",function(Pt){return Y.call(vt,Pt,Dt++)}),ut}function St(D){if(D._status===-1){var Y=D._result,vt=Y();vt.then(function(ut){(D._status===0||D._status===-1)&&(D._status=1,D._result=ut,vt.status===void 0&&(vt.status="fulfilled",vt.value=ut))},function(ut){(D._status===0||D._status===-1)&&(D._status=2,D._result=ut,vt.status===void 0&&(vt.status="rejected",vt.reason=ut))}),D._status===-1&&(D._status=0,D._result=vt)}if(D._status===1)return D._result.default;throw D._result}var At=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Ft(D){var Y=H.T,vt={};vt.types=Y!==null?Y.types:null,H.T=vt;try{var ut=D(),Dt=H.S;Dt!==null&&Dt(vt,ut),typeof ut=="object"&&ut!==null&&typeof ut.then=="function"&&ut.then(O,At)}catch(Pt){At(Pt)}finally{Y!==null&&vt.types!==null&&(Y.types=vt.types),H.T=Y}}function ae(D){var Y=H.T;if(Y!==null){var vt=Y.types;vt===null?Y.types=[D]:vt.indexOf(D)===-1&&vt.push(D)}else Ft(ae.bind(null,D))}var de={map:W,forEach:function(D,Y,vt){W(D,function(){Y.apply(this,arguments)},vt)},count:function(D){var Y=0;return W(D,function(){Y++}),Y},toArray:function(D){return W(D,function(Y){return Y})||[]},only:function(D){if(!nt(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return he.Activity=g,he.Children=de,he.Component=B,he.Fragment=i,he.Profiler=l,he.PureComponent=w,he.StrictMode=r,he.Suspense=p,he.ViewTransition=x,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,he.__COMPILER_RUNTIME={__proto__:null,c:function(D){return H.H.useMemoCache(D)}},he.addTransitionType=ae,he.cache=function(D){return function(){return D.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(D,Y,vt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ut=M({},D.props),Dt=D.key;if(Y!=null)for(Pt in Y.key!==void 0&&(Dt=""+Y.key),Y)!N.call(Y,Pt)||Pt==="key"||Pt==="__self"||Pt==="__source"||Pt==="ref"&&Y.ref===void 0||(ut[Pt]=Y[Pt]);var Pt=arguments.length-2;if(Pt===1)ut.children=vt;else if(1<Pt){for(var Lt=Array(Pt),Mt=0;Mt<Pt;Mt++)Lt[Mt]=arguments[Mt+2];ut.children=Lt}return A(D.type,Dt,ut)},he.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},he.createElement=function(D,Y,vt){var ut,Dt={},Pt=null;if(Y!=null)for(ut in Y.key!==void 0&&(Pt=""+Y.key),Y)N.call(Y,ut)&&ut!=="key"&&ut!=="__self"&&ut!=="__source"&&(Dt[ut]=Y[ut]);var Lt=arguments.length-2;if(Lt===1)Dt.children=vt;else if(1<Lt){for(var Mt=Array(Lt),at=0;at<Lt;at++)Mt[at]=arguments[at+2];Dt.children=Mt}if(D&&D.defaultProps)for(ut in Lt=D.defaultProps,Lt)Dt[ut]===void 0&&(Dt[ut]=Lt[ut]);return A(D,Pt,Dt)},he.createRef=function(){return{current:null}},he.forwardRef=function(D){return{$$typeof:d,render:D}},he.isValidElement=nt,he.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:St}},he.memo=function(D,Y){return{$$typeof:m,type:D,compare:Y===void 0?null:Y}},he.startTransition=Ft,he.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},he.use=function(D){return H.H.use(D)},he.useActionState=function(D,Y,vt){return H.H.useActionState(D,Y,vt)},he.useCallback=function(D,Y){return H.H.useCallback(D,Y)},he.useContext=function(D){return H.H.useContext(D)},he.useDebugValue=function(){},he.useDeferredValue=function(D,Y){return H.H.useDeferredValue(D,Y)},he.useEffect=function(D,Y){return H.H.useEffect(D,Y)},he.useEffectEvent=function(D){return H.H.useEffectEvent(D)},he.useId=function(){return H.H.useId()},he.useImperativeHandle=function(D,Y,vt){return H.H.useImperativeHandle(D,Y,vt)},he.useInsertionEffect=function(D,Y){return H.H.useInsertionEffect(D,Y)},he.useLayoutEffect=function(D,Y){return H.H.useLayoutEffect(D,Y)},he.useMemo=function(D,Y){return H.H.useMemo(D,Y)},he.useOptimistic=function(D,Y){return H.H.useOptimistic(D,Y)},he.useReducer=function(D,Y,vt){return H.H.useReducer(D,Y,vt)},he.useRef=function(D){return H.H.useRef(D)},he.useState=function(D){return H.H.useState(D)},he.useSyncExternalStore=function(D,Y,vt){return H.H.useSyncExternalStore(D,Y,vt)},he.useTransition=function(){return H.H.useTransition()},he.version="19.3.1",he}var M_;function Jp(){return M_||(M_=1,_d.exports=xE()),_d.exports}var pn=Jp();const Wx=gE(pn);var xd={exports:{}},pl={},yd={exports:{}},Sd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function yE(){return E_||(E_=1,(function(o){function e(V,rt){var W=V.length;V.push(rt);t:for(;0<W;){var St=W-1>>>1,At=V[St];if(0<l(At,rt))V[St]=rt,V[W]=At,W=St;else break t}}function i(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var rt=V[0],W=V.pop();if(W!==rt){V[0]=W;t:for(var St=0,At=V.length,Ft=At>>>1;St<Ft;){var ae=2*(St+1)-1,de=V[ae],D=ae+1,Y=V[D];if(0>l(de,W))D<At&&0>l(Y,de)?(V[St]=Y,V[D]=W,St=D):(V[St]=de,V[ae]=W,St=ae);else if(D<At&&0>l(Y,W))V[St]=Y,V[D]=W,St=D;else break t}}return rt}function l(V,rt){var W=V.sortIndex-rt.sortIndex;return W!==0?W:V.id-rt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],v=1,g=null,x=3,S=!1,E=!1,C=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(V){for(var rt=i(m);rt!==null;){if(rt.callback===null)r(m);else if(rt.startTime<=V)r(m),rt.sortIndex=rt.expirationTime,e(p,rt);else break;rt=i(m)}}function et(V){if(C=!1,w(V),!E)if(i(p)!==null)E=!0,F||(F=!0,nt());else{var rt=i(m);rt!==null&&ft(et,rt.startTime-V)}}var F=!1,O=-1,H=5,N=-1;function A(){return M?!0:!(o.unstable_now()-N<H)}function I(){if(M=!1,F){var V=o.unstable_now();N=V;var rt=!0;try{t:{E=!1,C&&(C=!1,B(O),O=-1),S=!0;var W=x;try{e:{for(w(V),g=i(p);g!==null&&!(g.expirationTime>V&&A());){var St=g.callback;if(typeof St=="function"){g.callback=null,x=g.priorityLevel;var At=St(g.expirationTime<=V);if(V=o.unstable_now(),typeof At=="function"){g.callback=At,w(V),rt=!0;break e}g===i(p)&&r(p),w(V)}else r(p);g=i(p)}if(g!==null)rt=!0;else{var Ft=i(m);Ft!==null&&ft(et,Ft.startTime-V),rt=!1}}break t}finally{g=null,x=W,S=!1}rt=void 0}}finally{rt?nt():F=!1}}}var nt;if(typeof L=="function")nt=function(){L(I)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ct=K.port2;K.port1.onmessage=I,nt=function(){ct.postMessage(null)}}else nt=function(){y(I,0)};function ft(V,rt){O=y(function(){V(o.unstable_now())},rt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(V){switch(x){case 1:case 2:case 3:var rt=3;break;default:rt=x}var W=x;x=rt;try{return V()}finally{x=W}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(V,rt){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var W=x;x=V;try{return rt()}finally{x=W}},o.unstable_scheduleCallback=function(V,rt,W){var St=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?St+W:St):W=St,V){case 1:var At=-1;break;case 2:At=250;break;case 5:At=1073741823;break;case 4:At=1e4;break;default:At=5e3}return At=W+At,V={id:v++,callback:rt,priorityLevel:V,startTime:W,expirationTime:At,sortIndex:-1},W>St?(V.sortIndex=W,e(m,V),i(p)===null&&V===i(m)&&(C?(B(O),O=-1):C=!0,ft(et,W-St))):(V.sortIndex=At,e(p,V),E||S||(E=!0,F||(F=!0,nt()))),V},o.unstable_shouldYield=A,o.unstable_wrapCallback=function(V){var rt=x;return function(){var W=x;x=rt;try{return V.apply(this,arguments)}finally{x=W}}}})(Sd)),Sd}var T_;function SE(){return T_||(T_=1,yd.exports=yE()),yd.exports}var Md={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function ME(){if(b_)return On;b_=1;var o=Jp();function e(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)g+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,g,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===h?h:""+S,children:v,containerInfo:g,implementation:x}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,On.browser=function(v){return{$$typeof:c,_reason:v}},On.createPortal=function(v,g){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return d(v,g,null,x)},On.flushSync=function(v){var g=p.T,x=r.p;try{if(p.T=null,r.p=2,v)return v()}finally{p.T=g,r.p=x,r.d.f()}},On.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(v,g))},On.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},On.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var x=g.as,S=m(x,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;x==="style"?r.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:E,fetchPriority:C}):x==="script"&&r.d.X(v,{crossOrigin:S,integrity:E,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},On.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var x=m(g.as,g.crossOrigin);r.d.M(v,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&r.d.M(v)},On.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var x=g.as,S=m(x,g.crossOrigin);r.d.L(v,x,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},On.preloadModule=function(v,g){if(typeof v=="string")if(g){var x=m(g.as,g.crossOrigin);r.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else r.d.m(v)},On.requestFormReset=function(v){r.d.r(v)},On.unstable_batchedUpdates=function(v,g){return v(g)},On.useFormState=function(v,g,x){return p.H.useFormState(v,g,x)},On.useFormStatus=function(){return p.H.useHostTransitionStatus()},On.version="19.3.1",On}var A_;function EE(){if(A_)return Md.exports;A_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Md.exports=ME(),Md.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function TE(){if(R_)return pl;R_=1;var o=SE(),e=Jp(),i=EE();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),t;if(f===s)return p(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var _=!1,T=u.child;T;){if(T===a){_=!0,a=u,s=f;break}if(T===s){_=!0,s=u,a=f;break}T=T.sibling}if(!_){for(T=f.child;T;){if(T===a){_=!0,a=f,s=u;break}if(T===s){_=!0,s=f,a=u;break}T=T.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function g(t,n,a,s,u,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,u,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,a,s,u,f))return!0;t=t.sibling}return!1}function x(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function S(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function E(t){var n=[null,null],a=x(t);return a===null||C(n,t,a.child,{foundSelf:!1}),n}function C(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&C(t,n,a.child,s))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var y=null,B=null;function L(t,n,a){return t===a?!0:t===n?(y=t,!0):!1}function w(t,n,a){return t===a?(B=t,!1):t===n?(B!==null&&(y=t),!0):!1}function et(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function F(t,n,a){for(var s=0,u=t;u;u=a(u))s++;u=0;for(var f=n;f;f=a(f))u++;for(;0<s-u;)t=a(t),s--;for(;0<u-s;)n=a(n),u--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var O=Object.assign,H=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),nt=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),ct=Symbol.for("react.consumer"),ft=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),rt=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),St=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),Ft=Symbol.for("react.activity"),ae=Symbol.for("react.legacy_hidden"),de=Symbol.for("react.memo_cache_sentinel"),D=Symbol.for("react.view_transition"),Y=Symbol.for("react.recoverable"),vt=Symbol.iterator;function ut(t){return t===null||typeof t!="object"?null:(t=vt&&t[vt]||t["@@iterator"],typeof t=="function"?t:null)}var Dt=Symbol.for("react.client.reference");function Pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Dt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case K:return"Profiler";case nt:return"StrictMode";case rt:return"Suspense";case W:return"SuspenseList";case Ft:return"Activity";case D:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case ft:return t.displayName||"Context";case ct:return(t._context.displayName||"Context")+".Consumer";case V:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case St:return n=t.displayName||null,n!==null?n:Pt(t.type)||"Memo";case At:n=t._payload,t=t._init;try{return Pt(t(n))}catch{}}return null}var Lt=Array.isArray,Mt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rt={pending:!1,data:null,method:null,action:null},z=[],Qt=-1;function Tt(t){return{current:t}}function Ut(t){0>Qt||(t.current=z[Qt],z[Qt]=null,Qt--)}function xt(t,n){Qt++,z[Qt]=t.current,t.current=n}var $t=Tt(null),Gt=Tt(null),U=Tt(null),b=Tt(null);function J(t,n){switch(xt(U,n),xt(Gt,t),xt($t,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?C0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=C0(n),t=w0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ut($t),xt($t,t)}function dt(){Ut($t),Ut(Gt),Ut(U)}function Et(t){var n=t.memoizedState;n!==null&&(Vs._currentValue=n.memoizedState,xt(b,t)),n=$t.current;var a=w0(n,t.type);n!==a&&(xt(Gt,t),xt($t,a))}function pt(t){Gt.current===t&&(Ut($t),Ut(Gt)),b.current===t&&(Ut(b),Vs._currentValue=Rt)}var Kt,Ot;function zt(t){if(Kt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Kt=n&&n[1]||"",Ot=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kt+t+Ot}var pe=!1;function Ct(t,n){if(!t||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(It){var k=It}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(It){k=It}gt=!1;try{var it=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),gt=!0,new t}finally{gt&&(it!==void 0?Object.defineProperty(t.prototype,"props",it):delete t.prototype.props)}}}else{try{throw Error()}catch(It){k=It}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(It){if(It&&k&&typeof It.stack=="string")return[It.stack,k.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],T=f[1];if(_&&T){var P=_.split(`
`),j=T.split(`
`);for(u=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;u<j.length&&!j[u].includes("DetermineComponentFrameRoot");)u++;if(s===P.length||u===j.length)for(s=P.length-1,u=j.length-1;1<=s&&0<=u&&P[s]!==j[u];)u--;for(;1<=s&&0<=u;s--,u--)if(P[s]!==j[u]){if(s!==1||u!==1)do if(s--,u--,0>u||P[s]!==j[u]){var st=`
`+P[s].replace(" at new "," at ");return t.displayName&&st.includes("<anonymous>")&&(st=st.replace("<anonymous>",t.displayName)),st}while(1<=s&&0<=u);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?zt(a):""}function jt(t,n){switch(t.tag){case 26:case 27:case 5:return zt(t.type);case 16:return zt("Lazy");case 13:return t.child!==n&&n!==null?zt("Suspense Fallback"):zt("Suspense");case 19:return zt("SuspenseList");case 0:case 15:return Ct(t.type,!1);case 11:return Ct(t.type.render,!1);case 1:return Ct(t.type,!0);case 31:return zt("Activity");case 30:return zt("ViewTransition");default:return""}}function wt(t){try{var n="",a=null;do n+=jt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var se=Object.prototype.hasOwnProperty,Yt=o.unstable_scheduleCallback,Se=o.unstable_cancelCallback,me=o.unstable_shouldYield,Pe=o.unstable_requestPaint,X=o.unstable_now,Ht=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,yt=o.unstable_UserBlockingPriority,Bt=o.unstable_NormalPriority,Vt=o.unstable_LowPriority,fe=o.unstable_IdlePriority,qe=o.log,fn=o.unstable_setDisableYieldValue,Ae=null,bt=null;function oe(t){if(typeof qe=="function"&&fn(t),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Ae,t)}catch{}}var xe=Math.clz32?Math.clz32:Me,Be=Math.log,ce=Math.LN2;function Me(t){return t>>>=0,t===0?32:31-(Be(t)/ce|0)|0}var Ge=256,hn=262144,Je=4194304;function en(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function an(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=en(s):(_&=T,_!==0?u=en(_):a||(a=T&~t,a!==0&&(u=en(a))))):(T=s&~f,T!==0?u=en(T):_!==0?u=en(_):a||(a=s&~t,a!==0&&(u=en(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function In(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function oi(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-xe(a),u=1<<s;n|=t[s],a&=~u}return n}function xr(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bn(){var t=Je;return Je<<=1,(Je&62914560)===0&&(Je=4194304),t}function yr(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function R(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Z(t,n,a,s,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,P=t.expirationTimes,j=t.hiddenUpdates;for(a=_&~a;0<a;){var st=31-xe(a),gt=1<<st;T[st]=0,P[st]=-1;var k=j[st];if(k!==null)for(j[st]=null,st=0;st<k.length;st++){var it=k[st];it!==null&&(it.lane&=-536870913)}a&=~gt}s!==0&&ot(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function ot(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-xe(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function lt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-xe(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Q(t,n){var a=n&-n;return a=(a&42)!==0?1:Nt(a),(a&(t.suspendedLanes|n))!==0?0:a}function Nt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function kt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ee(){var t=at.p;return t!==0?t:(t=window.event,t===void 0?32:h_(t.type))}function ne(t,n){var a=at.p;try{return at.p=t,n()}finally{at.p=a}}var le=Math.random().toString(36).slice(2),ie="__reactFiber$"+le,qt="__reactProps$"+le,Te="__reactContainer$"+le,Ve="__reactEvents$"+le,Ze="__reactListeners$"+le,Fn="__reactHandles$"+le,Le="__reactResources$"+le,te="__reactMarker$"+le,$n="__reactLoad$"+le;function Ne(t){delete t[ie],delete t[qt],delete t[Ze],delete t[Fn]}function yn(t){var n;if(n=t[ie])return n;for(var a=t.parentNode;a;){if(n=a[Te]||a[ie]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=q0(t);t!==null;){if(a=t[ie])return a;t=q0(t)}return n}t=a,a=t.parentNode}return null}function li(t){if(t=t[ie]||t[Te]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Sn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Si(t){var n=t[Le];return n||(n=t[Le]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ge(t){t[te]=!0}function ui(t){t[$n]=void 0}var Pa=new Set,Yn={};function Hn(t,n){qn(t,n),qn(t+"Capture",n)}function qn(t,n){for(Yn[t]=n,t=0;t<n.length;t++)Pa.add(n[t])}var Fl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hm={},dm={};function Py(t){return se.call(dm,t)?!0:se.call(hm,t)?!1:Fl.test(t)?dm[t]=!0:(hm[t]=!0,!1)}var ze=!1;function pm(){var t=ze;return ze=!1,t}function Hl(t,n,a){if(Py(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Gl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ua(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function ci(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function zy(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qc(t){if(!t._valueTracker){var n=mm(t)?"checked":"value";t._valueTracker=zy(t,n,""+t[n])}}function gm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=mm(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var Iy=/[\n"\\]/g;function Mi(t){return t.replace(Iy,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Wc(t,n,a,s,u,f,_,T){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ci(n)):t.value!==""+ci(n)&&(t.value=""+ci(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?jc(t,ci(t.value)):jc(t,ci(n)):a!=null?jc(t,ci(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ci(T):t.removeAttribute("name")}function vm(t,n,a,s,u,f,_,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qc(t);return}a=a!=null?""+ci(a):"",n=n!=null?""+ci(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),qc(t)}function jc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function ss(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ci(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function _m(t,n,a){if(n!=null&&(n=""+ci(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ci(a):""}function xm(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Lt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ci(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),qc(t)}function os(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var By=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ym(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||By.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Sm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",ze=!0);for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&(ym(t,u,s),ze=!0)}else for(var f in n)n.hasOwnProperty(f)&&ym(t,f,n[f])}function Zc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vl(t){return Hy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Wi(){}var Qc=null;function Kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ls=null,us=null;function Mm(t){var n=li(t);if(n&&(t=n.stateNode)){var a=t[qt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Wc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Mi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[qt]||null;if(!u)throw Error(r(90));Wc(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&gm(s)}break t;case"textarea":_m(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ss(t,!!a.multiple,n,!1)}}}var Jc=!1;function Em(t,n,a){if(Jc)return t(n,a);Jc=!0;try{var s=t(n);return s}finally{if(Jc=!1,(ls!==null||us!==null)&&(Vu(),ls&&(n=ls,t=us,us=ls=null,Mm(n),t)))for(n=0;n<t.length;n++)Mm(t[n])}}function bo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[qt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$c=!1;if(ca)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){$c=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{$c=!1}var za=null,tf=null,Xl=null;function Tm(){if(Xl)return Xl;var t,n=tf,a=n.length,s,u="value"in za?za.value:za.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===u[f-s];s++);return Xl=u.slice(t,1<s?1-s:void 0)}function kl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Yl(){return!0}function bm(){return!1}function Wn(t){function n(a,s,u,f,_){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Yl:bm,this.isPropagationStopped=bm,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yl)},persist:function(){},isPersistent:Yl}),n}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=Wn(Ia),Ro=O({},Ia,{view:0,detail:0}),Gy=Wn(Ro),ef,nf,Co,Wl=O({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Co&&(Co&&t.type==="mousemove"?(ef=t.screenX-Co.screenX,nf=t.screenY-Co.screenY):nf=ef=0,Co=t),ef)},movementY:function(t){return"movementY"in t?t.movementY:nf}}),Am=Wn(Wl),Vy=O({},Wl,{dataTransfer:0}),Xy=Wn(Vy),ky=O({},Ro,{relatedTarget:0}),af=Wn(ky),Yy=O({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),qy=Wn(Yy),Wy=O({},Ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jy=Wn(Wy),Zy=O({},Ia,{data:0}),Rm=Wn(Zy),Qy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ky={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $y(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Jy[t])?!!n[t]:!1}function rf(){return $y}var tS=O({},Ro,{key:function(t){if(t.key){var n=Qy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ky[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rf,charCode:function(t){return t.type==="keypress"?kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eS=Wn(tS),nS=O({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cm=Wn(nS),iS=O({},Ia,{submitter:0}),aS=Wn(iS),rS=O({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rf}),sS=Wn(rS),oS=O({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),lS=Wn(oS),uS=O({},Wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cS=Wn(uS),fS=O({},Ia,{newState:0,oldState:0,source:0}),hS=Wn(fS),dS=[9,13,27,32],sf=ca&&"CompositionEvent"in window,wo=null;ca&&"documentMode"in document&&(wo=document.documentMode);var pS=ca&&"TextEvent"in window&&!wo,wm=ca&&(!sf||wo&&8<wo&&11>=wo),Dm=" ",Nm=!1;function Um(t,n){switch(t){case"keyup":return dS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function mS(t,n){switch(t){case"compositionend":return Lm(n);case"keypress":return n.which!==32?null:(Nm=!0,Dm);case"textInput":return t=n.data,t===Dm&&Nm?null:t;default:return null}}function gS(t,n){if(cs)return t==="compositionend"||!sf&&Um(t,n)?(t=Tm(),Xl=tf=za=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wm&&n.locale!=="ko"?null:n.data;default:return null}}var vS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Om(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!vS[t.type]:n==="textarea"}function Pm(t,n,a,s){ls?us?us.push(s):us=[s]:ls=s,n=ju(n,"onChange"),0<n.length&&(a=new ql("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Do=null,No=null;function _S(t){M0(t,0)}function jl(t){var n=Sn(t);if(gm(n))return t}function zm(t,n){if(t==="change")return n}var Im=!1;if(ca){var of;if(ca){var lf="oninput"in document;if(!lf){var Bm=document.createElement("div");Bm.setAttribute("oninput","return;"),lf=typeof Bm.oninput=="function"}of=lf}else of=!1;Im=of&&(!document.documentMode||9<document.documentMode)}function Fm(){Do&&(Do.detachEvent("onpropertychange",Hm),No=Do=null)}function Hm(t){if(t.propertyName==="value"&&jl(No)){var n=[];Pm(n,No,t,Kc(t)),Em(_S,n)}}function xS(t,n,a){t==="focusin"?(Fm(),Do=n,No=a,Do.attachEvent("onpropertychange",Hm)):t==="focusout"&&Fm()}function yS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(No)}function SS(t,n){if(t==="click")return jl(n)}function MS(t,n){if(t==="input"||t==="change")return jl(n)}function ES(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var fi=typeof Object.is=="function"?Object.is:ES;function Uo(t,n){if(fi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!se.call(n,u)||!fi(t[u],n[u]))return!1}return!0}function uf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vm(t,n){var a=Gm(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Gm(a)}}function Xm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Xm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function km(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=uf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=uf(t.document)}return n}function cf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var TS=ca&&"documentMode"in document&&11>=document.documentMode,fs=null,ff=null,Lo=null,hf=!1;function Ym(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hf||fs==null||fs!==uf(s)||(s=fs,"selectionStart"in s&&cf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Lo&&Uo(Lo,s)||(Lo=s,s=ju(ff,"onSelect"),0<s.length&&(n=new ql("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=fs)))}function Sr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var hs={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionrun:Sr("Transition","TransitionRun"),transitionstart:Sr("Transition","TransitionStart"),transitioncancel:Sr("Transition","TransitionCancel"),transitionend:Sr("Transition","TransitionEnd")},df={},qm={};ca&&(qm=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function Mr(t){if(df[t])return df[t];if(!hs[t])return t;var n=hs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in qm)return df[t]=n[a];return t}var Wm=Mr("animationend"),jm=Mr("animationiteration"),Zm=Mr("animationstart"),bS=Mr("transitionrun"),AS=Mr("transitionstart"),RS=Mr("transitioncancel"),Qm=Mr("transitionend"),Km=new Map,pf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pf.push("scrollEnd");function Pi(t,n){Km.set(t,n),Hn(n,[t])}var CS=0;function fa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Fi.identifierPrefix;var a=CS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Jm(t){if(t==null||typeof t=="string")return t;var n=null,a=Us;if(a!==null)for(var s=0;s<a.length;s++){var u=t[a[s]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function ha(t,n){return t=Jm(t),n=Jm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ei=[],ds=0,mf=0;function Ql(){for(var t=ds,n=mf=ds=0;n<t;){var a=Ei[n];Ei[n++]=null;var s=Ei[n];Ei[n++]=null;var u=Ei[n];Ei[n++]=null;var f=Ei[n];if(Ei[n++]=null,s!==null&&u!==null){var _=s.pending;_===null?u.next=u:(u.next=_.next,_.next=u),s.pending=u}f!==0&&$m(a,u,f)}}function Kl(t,n,a,s){Ei[ds++]=t,Ei[ds++]=n,Ei[ds++]=a,Ei[ds++]=s,mf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function gf(t,n,a,s){return Kl(t,n,a,s),Jl(t)}function Er(t,n){return Kl(t,null,null,n),Jl(t)}function $m(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-xe(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Jl(t){if(50<el)throw el=0,Gu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ps={};function wS(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,n,a,s){return new wS(t,n,a,s)}function vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function da(t,n){var a=t.alternate;return a===null?(a=ti(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function tg(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function $l(t,n,a,s,u,f){var _=0;if(s=t,typeof s=="function")vf(s)&&(_=1);else if(typeof s=="string")_=iE(t,a,$t.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Ft:return t=ti(31,a,n,u),t.elementType=Ft,t.lanes=f,t;case I:return Tr(a.children,u,f,n);case nt:_=8,u|=24;break;case K:return t=ti(12,a,n,u|2),t.elementType=K,t.lanes=f,t;case rt:return t=ti(13,a,n,u),t.elementType=rt,t.lanes=f,t;case W:return t=ti(19,a,n,u),t.elementType=W,t.lanes=f,t;case ae:case D:return t=u|32,t=ti(30,a,n,t),t.elementType=D,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case ft:_=10;break t;case ct:_=9;break t;case V:_=11;break t;case St:_=14;break t;case At:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=ti(_,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function Tr(t,n,a,s){return t=ti(7,t,s,n),t.lanes=a,t}function _f(t,n,a){return t=ti(6,t,null,n),t.lanes=a,t}function eg(t){var n=ti(18,null,null,0);return n.stateNode=t,n}function xf(t,n,a){return n=ti(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ng=new WeakMap;function Ti(t,n){if(typeof t=="object"&&t!==null){var a=ng.get(t);return a!==void 0?a:(n={value:t,source:n,stack:wt(n)},ng.set(t,n),n)}return{value:t,source:n,stack:wt(n)}}var ms=[],gs=0,tu=null,Oo=0,bi=[],Ai=0,Ba=null,ji=1,Zi="";function pa(t,n){ms[gs++]=Oo,ms[gs++]=tu,tu=t,Oo=n}function ig(t,n,a){bi[Ai++]=ji,bi[Ai++]=Zi,bi[Ai++]=Ba,Ba=t;var s=ji;t=Zi;var u=32-xe(s)-1;s&=~(1<<u),a+=1;var f=32-xe(n)+u;if(30<f){var _=u-u%5;f=(s&(1<<_)-1).toString(32),s>>=_,u-=_,ji=1<<32-xe(n)+u|a<<u|s,Zi=f+t}else ji=1<<f|a<<u|s,Zi=t}function eu(t){t.return!==null&&(pa(t,1),ig(t,1,0))}function yf(t){for(;t===tu;)tu=ms[--gs],ms[gs]=null,Oo=ms[--gs],ms[gs]=null;for(;t===Ba;)Ba=bi[--Ai],bi[Ai]=null,Zi=bi[--Ai],bi[Ai]=null,ji=bi[--Ai],bi[Ai]=null}function ag(t,n){bi[Ai++]=ji,bi[Ai++]=Zi,bi[Ai++]=Ba,ji=n.id,Zi=n.overflow,Ba=t}var bn=null,$e=null,be=!1,Fa=null,Ri=!1,Sf=Error(r(519));function Ha(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Po(Ti(n,t)),Sf}function rg(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[ie]=t,n[qt]=s,a){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(a=0;a<il.length;a++)Ce(il[a],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Ce("invalid",n),vm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ce("invalid",n);break;case"textarea":Ce("invalid",n),xm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||A0(n.textContent,a)?(s.popover!=null&&(Ce("beforetoggle",n),Ce("toggle",n)),s.onScroll!=null&&Ce("scroll",n),s.onScrollEnd!=null&&Ce("scrollend",n),s.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Ha(t,!0)}function nu(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:bn=bn.return}}function vs(t){if(t!==bn)return!1;if(!be)return nu(t),be=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Kh(t.type,t.memoizedProps)),a=!a),a&&$e&&Ha(t),nu(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));$e=Y0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));$e=Y0(t)}else n===27?(n=$e,nr(t.type)?(t=sd,sd=null,$e=t):$e=n):$e=bn?wi(t.stateNode.nextSibling):null;return!0}function br(){$e=bn=null,be=!1}function Mf(){var t=Fa;return t!==null&&(ii===null?ii=t:ii.push.apply(ii,t),Fa=null),t}function Po(t){Fa===null?Fa=[t]:Fa.push(t)}var Ef=Tt(null),Ar=null,ma=null;function Ga(t,n,a){xt(Ef,n._currentValue),n._currentValue=a}function ga(t){t._currentValue=Ef.current,Ut(Ef)}function iu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Tf(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),iu(f.return,a,t),s||(_=null);break t}f=T.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),iu(_,a,t),_=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,_=u.alternate,_!==null&&(_.lanes|=a),iu(u.return,a,t),_=u.child,_=_!==null?_.sibling:null):_=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Rr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var T=u.type;fi(u.pendingProps.value,_.value)||(t!==null?t.push(T):t=[T])}}else if(u===b.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Vs):t=[Vs])}u=u.return}return t!==null&&Tf(n,t,a,s),n.flags|=262144,t!==null}function au(t){for(t=t.firstContext;t!==null;){if(!fi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Cr(t){Ar=t,ma=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return sg(Ar,t)}function ru(t,n){return Ar===null&&Cr(t),sg(t,n)}function sg(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ma===null){if(t===null)throw Error(r(308));ma=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ma=ma.next=n;return a}var DS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},NS=o.unstable_scheduleCallback,US=o.unstable_NormalPriority,mn={$$typeof:ft,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bf(){return{controller:new DS,data:new Map,refCount:0}}function zo(t){t.refCount--,t.refCount===0&&NS(US,function(){t.controller.abort()})}function og(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Io=null;function LS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Bo=null,Af=0,wr=0,_s=null;function OS(t,n){if(Bo===null){var a=Bo=[];Af=0,wr=Vh(),_s={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Af++,n.then(lg,lg),n}function lg(){if(--Af===0&&(Io=null,Bo!==null)){_s!==null&&(_s.status="fulfilled");var t=Bo;Bo=null,wr=0,_s=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function PS(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var ug=Mt.S;Mt.S=function(t,n){if(e0=X(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&OS(t,n),Io!==null)for(var a=zs;a!==null;)og(a,Io),a=a.next;if(a=t.types,a!==null){for(var s=zs;s!==null;)og(s,a),s=s.next;if(wr!==0){s=Io,s===null&&(s=Io=[]);for(var u=0;u<a.length;u++){var f=a[u];s.indexOf(f)===-1&&s.push(f)}}}ug!==null&&ug(t,n)};var Dr=Tt(null);function Rf(){var t=Dr.current;return t!==null?t:Qe.pooledCache}function su(t,n){n===null?xt(Dr,Dr.current):xt(Dr,n.pool)}function cg(){var t=Rf();return t===null?null:{parent:mn._currentValue,pool:t}}var xs=Error(r(460)),Cf=Error(r(474)),ou=Error(r(542)),lu={then:function(){}};function fg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function hg(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pg(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(t=Qe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pg(t),t}throw Ur=n,xs}}function Nr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ur=a,xs):a}}var Ur=null;function dg(){if(Ur===null)throw Error(r(459));var t=Ur;return Ur=null,t}function pg(t){if(t===xs||t===ou)throw Error(r(483))}var ys=null,Fo=0;function uu(t){var n=Fo;return Fo+=1,ys===null&&(ys=[]),hg(ys,t,n)}function Va(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function cu(t,n){throw n.$$typeof===H?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function mg(t){function n(q,G){if(t){var $=q.deletions;$===null?(q.deletions=[G],q.flags|=16):$.push(G)}}function a(q,G){if(!t)return null;for(;G!==null;)n(q,G),G=G.sibling;return null}function s(q){for(var G=new Map;q!==null;)q.key===null?G.set(q.index,q):G.set(q.key,q),q=q.sibling;return G}function u(q,G){return q=da(q,G),q.index=0,q.sibling=null,q}function f(q,G,$){return q.index=$,t?($=q.alternate,$!==null?($=$.index,$<G?(q.flags|=2,G):$):(q.flags|=134217730,G)):(q.flags|=1048576,G)}function _(q){return t&&q.alternate===null&&(q.flags|=134217730),q}function T(q,G,$,mt){return G===null||G.tag!==6?(G=_f($,q.mode,mt),G.return=q,G):(G=u(G,$),G.return=q,G)}function P(q,G,$,mt){var Zt=$.type;return Zt===I?(q=st(q,G,$.props.children,mt,$.key),Va(q,$),q):G!==null&&(G.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===At&&Nr(Zt)===G.type)?(G=u(G,$.props),Va(G,$),G.return=q,G):(G=$l($.type,$.key,$.props,null,q.mode,mt),Va(G,$),G.return=q,G)}function j(q,G,$,mt){return G===null||G.tag!==4||G.stateNode.containerInfo!==$.containerInfo||G.stateNode.implementation!==$.implementation?(G=xf($,q.mode,mt),G.return=q,G):(G=u(G,$.children||[]),G.return=q,G)}function st(q,G,$,mt,Zt){return G===null||G.tag!==7?(G=Tr($,q.mode,mt,Zt),G.return=q,G):(G=u(G,$),G.return=q,G)}function gt(q,G,$){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=_f(""+G,q.mode,$),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case N:return $=$l(G.type,G.key,G.props,null,q.mode,$),Va($,G),$.return=q,$;case A:return G=xf(G,q.mode,$),G.return=q,G;case At:return G=Nr(G),gt(q,G,$)}if(Lt(G)||ut(G))return G=Tr(G,q.mode,$,null),G.return=q,G;if(typeof G.then=="function")return gt(q,uu(G),$);if(G.$$typeof===ft)return gt(q,ru(q,G),$);cu(q,G)}return null}function k(q,G,$,mt){var Zt=G!==null?G.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Zt!==null?null:T(q,G,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case N:return $.key===Zt?P(q,G,$,mt):null;case A:return $.key===Zt?j(q,G,$,mt):null;case At:return $=Nr($),k(q,G,$,mt)}if(Lt($)||ut($))return Zt!==null?null:st(q,G,$,mt,null);if(typeof $.then=="function")return k(q,G,uu($),mt);if($.$$typeof===ft)return k(q,G,ru(q,$),mt);cu(q,$)}return null}function it(q,G,$,mt,Zt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return q=q.get($)||null,T(G,q,""+mt,Zt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case N:return q=q.get(mt.key===null?$:mt.key)||null,P(G,q,mt,Zt);case A:return q=q.get(mt.key===null?$:mt.key)||null,j(G,q,mt,Zt);case At:return mt=Nr(mt),it(q,G,$,mt,Zt)}if(Lt(mt)||ut(mt))return q=q.get($)||null,st(G,q,mt,Zt,null);if(typeof mt.then=="function")return it(q,G,$,uu(mt),Zt);if(mt.$$typeof===ft)return it(q,G,$,ru(G,mt),Zt);cu(G,mt)}return null}function It(q,G,$,mt){for(var Zt=null,De=null,re=G,ue=G=0,_n=null;re!==null&&ue<$.length;ue++){re.index>ue?(_n=re,re=null):_n=re.sibling;var Ue=k(q,re,$[ue],mt);if(Ue===null){re===null&&(re=_n);break}t&&re&&Ue.alternate===null&&n(q,re),G=f(Ue,G,ue),De===null?Zt=Ue:De.sibling=Ue,De=Ue,re=_n}if(ue===$.length)return a(q,re),be&&pa(q,ue),Zt;if(re===null){for(;ue<$.length;ue++)re=gt(q,$[ue],mt),re!==null&&(G=f(re,G,ue),De===null?Zt=re:De.sibling=re,De=re);return be&&pa(q,ue),Zt}for(re=s(re);ue<$.length;ue++)_n=it(re,q,ue,$[ue],mt),_n!==null&&(t&&(Ue=_n.alternate,Ue!==null&&re.delete(Ue.key===null?ue:Ue.key)),G=f(_n,G,ue),De===null?Zt=_n:De.sibling=_n,De=_n);return t&&re.forEach(function(or){return n(q,or)}),be&&pa(q,ue),Zt}function Jt(q,G,$,mt){if($==null)throw Error(r(151));for(var Zt=null,De=null,re=G,ue=G=0,_n=null,Ue=$.next();re!==null&&!Ue.done;ue++,Ue=$.next()){re.index>ue?(_n=re,re=null):_n=re.sibling;var or=k(q,re,Ue.value,mt);if(or===null){re===null&&(re=_n);break}t&&re&&or.alternate===null&&n(q,re),G=f(or,G,ue),De===null?Zt=or:De.sibling=or,De=or,re=_n}if(Ue.done)return a(q,re),be&&pa(q,ue),Zt;if(re===null){for(;!Ue.done;ue++,Ue=$.next())Ue=gt(q,Ue.value,mt),Ue!==null&&(G=f(Ue,G,ue),De===null?Zt=Ue:De.sibling=Ue,De=Ue);return be&&pa(q,ue),Zt}for(re=s(re);!Ue.done;ue++,Ue=$.next())Ue=it(re,q,ue,Ue.value,mt),Ue!==null&&(t&&(_n=Ue.alternate,_n!==null&&re.delete(_n.key===null?ue:_n.key)),G=f(Ue,G,ue),De===null?Zt=Ue:De.sibling=Ue,De=Ue);return t&&re.forEach(function(mE){return n(q,mE)}),be&&pa(q,ue),Zt}function _e(q,G,$,mt){if(typeof $=="object"&&$!==null&&$.type===I&&$.key===null&&$.props.ref===void 0&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case N:t:{for(var Zt=$.key;G!==null;){if(G.key===Zt){if(Zt=$.type,Zt===I){if(G.tag===7){a(q,G.sibling),mt=u(G,$.props.children),Va(mt,$),mt.return=q,q=mt;break t}}else if(G.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===At&&Nr(Zt)===G.type){a(q,G.sibling),mt=u(G,$.props),Va(mt,$),mt.return=q,q=mt;break t}a(q,G);break}else n(q,G);G=G.sibling}$.type===I?(mt=Tr($.props.children,q.mode,mt,$.key),Va(mt,$),mt.return=q,q=mt):(mt=$l($.type,$.key,$.props,null,q.mode,mt),Va(mt,$),mt.return=q,q=mt)}return _(q);case A:t:{for(Zt=$.key;G!==null;){if(G.key===Zt)if(G.tag===4&&G.stateNode.containerInfo===$.containerInfo&&G.stateNode.implementation===$.implementation){a(q,G.sibling),mt=u(G,$.children||[]),mt.return=q,q=mt;break t}else{a(q,G);break}else n(q,G);G=G.sibling}mt=xf($,q.mode,mt),mt.return=q,q=mt}return _(q);case At:return $=Nr($),_e(q,G,$,mt)}if(Lt($))return It(q,G,$,mt);if(ut($)){if(Zt=ut($),typeof Zt!="function")throw Error(r(150));return $=Zt.call($),Jt(q,G,$,mt)}if(typeof $.then=="function")return _e(q,G,uu($),mt);if($.$$typeof===ft)return _e(q,G,ru(q,$),mt);cu(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,G!==null&&G.tag===6?(a(q,G.sibling),mt=u(G,$),mt.return=q,q=mt):(a(q,G),mt=_f($,q.mode,mt),mt.return=q,q=mt),_(q)):a(q,G)}return function(q,G,$,mt){try{Fo=0;var Zt=_e(q,G,$,mt);return ys=null,Zt}catch(re){if(re===xs||re===ou)throw re;var De=ti(29,re,null,q.mode);return De.lanes=mt,De.return=q,De}finally{}}}var Lr=mg(!0),gg=mg(!1),Xa=!1;function wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Df(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ya(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Fe&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Jl(t),$m(t,null,a),n}return Kl(t,s,n,a),Jl(t)}function Ho(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,lt(t,a)}}function Nf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Uf=!1;function Go(){if(Uf){var t=_s;if(t!==null)throw t}}function Vo(t,n,a,s){Uf=!1;var u=t.updateQueue;Xa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var P=T,j=P.next;P.next=null,_===null?f=j:_.next=j,_=P;var st=t.alternate;st!==null&&(st=st.updateQueue,T=st.lastBaseUpdate,T!==_&&(T===null?st.firstBaseUpdate=j:T.next=j,st.lastBaseUpdate=P))}if(f!==null){var gt=u.baseState;_=0,st=j=P=null,T=f;do{var k=T.lane&-536870913,it=k!==T.lane;if(it?(we&k)===k:(s&k)===k){k!==0&&k===wr&&(Uf=!0),st!==null&&(st=st.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var It=t,Jt=T;k=n;var _e=a;switch(Jt.tag){case 1:if(It=Jt.payload,typeof It=="function"){gt=It.call(_e,gt,k);break t}gt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=Jt.payload,k=typeof It=="function"?It.call(_e,gt,k):It,k==null)break t;gt=O({},gt,k);break t;case 2:Xa=!0}}k=T.callback,k!==null&&(t.flags|=64,it&&(t.flags|=8192),it=u.callbacks,it===null?u.callbacks=[k]:it.push(k))}else it={lane:k,tag:T.tag,payload:T.payload,callback:T.callback,next:null},st===null?(j=st=it,P=gt):st=st.next=it,_|=k;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;it=T,T=it.next,it.next=null,u.lastBaseUpdate=it,u.shared.pending=null}}while(!0);st===null&&(P=gt),u.baseState=P,u.firstBaseUpdate=j,u.lastBaseUpdate=st,f===null&&(u.shared.lanes=0),Ja|=_,t.lanes=_,t.memoizedState=gt}}function vg(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function _g(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)vg(a[t],n)}var qa=Tt(null),fu=Tt(0);function xg(t,n){t=Sa,xt(fu,t),xt(qa,n),Sa=t|n.baseLanes}function Lf(){xt(fu,Sa),xt(qa,qa.current)}function Of(){Sa=fu.current,Ut(qa),Ut(fu)}var Dn=Tt(null),Gn=null;function Wa(t){var n=t.alternate;xt(Nn,Nn.current&1),xt(Dn,t),Gn===null&&(n===null||qa.current!==null||n.memoizedState!==null)&&(Gn=t)}function Pf(t){xt(Nn,Nn.current),xt(Dn,t),Gn===null&&(Gn=t)}function yg(t){t.tag===22?(xt(Nn,Nn.current),xt(Dn,t),Gn===null&&(Gn=t)):ja()}function ja(){xt(Nn,Nn.current),xt(Dn,Dn.current)}function hi(t){Ut(Dn),Gn===t&&(Gn=null),Ut(Nn)}var Nn=Tt(0);function Xo(t,n){xt(Dn,Dn.current),xt(Nn,n)}function zf(t){Ut(Nn),Ut(Dn),Gn===t&&(Gn=null)}function hu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ad(a)||rd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var va=0,ve=null,We=null,gn=null,du=!1,Ss=!1,Or=!1,pu=0,ko=0,Ms=null,zS=0;function on(){throw Error(r(321))}function If(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!fi(t[a],n[a]))return!1;return!0}function Bf(t,n,a,s,u,f){return va=f,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Mt.H=t===null||t.memoizedState===null?iv:av,Or=!1,f=a(s,u),Or=!1,Ss&&(f=Mg(n,a,s,u)),Sg(t),f}function Sg(t){Mt.H=Su;var n=We!==null&&We.next!==null;if(va=0,gn=We=ve=null,du=!1,ko=0,Ms=null,n)throw Error(r(300));t===null||vn||(t=t.dependencies,t!==null&&au(t)&&(vn=!0))}function Mg(t,n,a,s){ve=t;var u=0;do{if(Ss&&(Ms=null),ko=0,Ss=!1,25<=u)throw Error(r(301));if(u+=1,gn=We=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Mt.H=kS,f=n(a,s)}while(Ss);return f}function IS(){var t=Mt.H,n=t.useState()[0];return n=typeof n.then=="function"?Yo(n):n,t=t.useState()[0],(We!==null?We.memoizedState:null)!==t&&(ve.flags|=1024),n}function Ff(){var t=pu!==0;return pu=0,t}function Hf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Gf(t){if(du){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}du=!1}va=0,gn=We=ve=null,Ss=!1,ko=pu=0,Ms=null}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?ve.memoizedState=gn=t:gn=gn.next=t,gn}function dn(){if(We===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var n=gn===null?ve.memoizedState:gn.next;if(n!==null)gn=n,We=t;else{if(t===null)throw ve.alternate===null?Error(r(467)):Error(r(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},gn===null?ve.memoizedState=gn=t:gn=gn.next=t}return gn}function mu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yo(t){var n=ko;return ko+=1,Ms===null&&(Ms=[]),t=hg(Ms,t,n),n=ve,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,Mt.H=n===null||n.memoizedState===null?iv:av),t}function gu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Yo(t);if(t.$$typeof===Y)return;if(t.$$typeof===ft)return wn(t)}throw Error(r(438,String(t)))}function Vf(t){var n=null,a=ve.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ve.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=mu(),ve.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=de;return n.index++,a}function _a(t,n){return typeof n=="function"?n(t):n}function vu(t){var n=dn();return Xf(n,We,t)}function Xf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=_=null,P=null,j=n,st=!1;do{var gt=j.lane&-536870913;if(gt!==j.lane?(we&gt)===gt:(va&gt)===gt){var k=j.revertLane;if(k===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),gt===wr&&(st=!0);else if((va&k)===k){j=j.next,k===wr&&(st=!0);continue}else gt={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},P===null?(T=P=gt,_=f):P=P.next=gt,ve.lanes|=k,Ja|=k;gt=j.action,Or&&a(f,gt),f=j.hasEagerState?j.eagerState:a(f,gt)}else k={lane:gt,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},P===null?(T=P=k,_=f):P=P.next=k,ve.lanes|=gt,Ja|=gt;j=j.next}while(j!==null&&j!==n);if(P===null?_=f:P.next=T,!fi(f,t.memoizedState)&&(vn=!0,st&&(a=_s,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=P,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function kf(t){var n=dn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);fi(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Eg(t,n,a){var s=ve,u=dn(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!fi((We||u).memoizedState,a);if(_&&(u.memoizedState=a,vn=!0),u=u.queue,Wf(Ag.bind(null,s,u,t),[t]),t=u.getSnapshot!==n||_||gn!==null&&(gn.memoizedState.tag&1)!==0,Es(t?9:8,{destroy:void 0},bg.bind(null,s,u,a,n),null),t){if(s.flags|=2048,Qe===null)throw Error(r(349));f||(va&127)!==0||Tg(s,n,a)}return a}function Tg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ve.updateQueue,n===null?(n=mu(),ve.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function bg(t,n,a,s){n.value=a,n.getSnapshot=s,Rg(n)&&Cg(t)}function Ag(t,n,a){return a(function(){Rg(n)&&Cg(t)})}function Rg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!fi(t,a)}catch{return!0}}function Cg(t){var n=Er(t,2);n!==null&&ai(n,t,2)}function Yf(t){var n=jn();if(typeof t=="function"){var a=t;if(t=a(),Or){oe(!0);try{a()}finally{oe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},n}function wg(t,n,a,s){return t.baseState=a,Xf(t,We,typeof s=="function"?s:_a)}function BS(t,n,a,s,u){if(yu(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};Mt.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Dg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Dg(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=Mt.T,_={};_.types=f!==null?f.types:null,Mt.T=_;try{var T=a(u,s),P=Mt.S;P!==null&&P(_,T),Ng(t,n,T)}catch(j){qf(t,n,j)}finally{f!==null&&_.types!==null&&(f.types=_.types),Mt.T=f}}else try{f=a(u,s),Ng(t,n,f)}catch(j){qf(t,n,j)}}function Ng(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Ug(t,n,s)},function(s){return qf(t,n,s)}):Ug(t,n,a)}function Ug(t,n,a){n.status="fulfilled",n.value=a,Lg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Dg(t,a)))}function qf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Lg(n),n=n.next;while(n!==s)}t.action=null}function Lg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Og(t,n){return n}function Pg(t,n){if(be){var a=Qe.formState;if(a!==null){t:{var s=ve;if(be){if($e){e:{for(var u=$e,f=Ri;u.nodeType!==8;){if(!f){u=null;break e}if(u=wi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){$e=wi(u.nextSibling),s=u.data==="F!";break t}}Ha(s)}s=!1}s&&(n=a[0])}}return a=jn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Og,lastRenderedState:n},a.queue=s,a=tv.bind(null,ve,s),s.dispatch=a,s=Yf(!1),f=Jf.bind(null,ve,!1,s.queue),s=jn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=BS.bind(null,ve,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function zg(t){var n=dn();return Ig(n,We,t)}function Ig(t,n,a){if(n=Xf(t,n,Og)[0],t=vu(_a)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Yo(n)}catch(_){throw _===xs?ou:_}else s=n;n=dn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ve.flags|=2048,Es(9,{destroy:void 0},FS.bind(null,u,a),null)),[s,f,t]}function FS(t,n){t.action=n}function Bg(t){var n=dn(),a=We;if(a!==null)return Ig(n,a,t);dn(),n=n.memoizedState,a=dn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Es(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ve.updateQueue,n===null&&(n=mu(),ve.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Fg(){return dn().memoizedState}function _u(t,n,a,s){var u=jn();ve.flags|=t,u.memoizedState=Es(1|n,{destroy:void 0},a,s===void 0?null:s)}function xu(t,n,a,s){var u=dn();s=s===void 0?null:s;var f=u.memoizedState.inst;We!==null&&s!==null&&If(s,We.memoizedState.deps)?u.memoizedState=Es(n,f,a,s):(ve.flags|=t,u.memoizedState=Es(1|n,f,a,s))}function Hg(t,n){_u(8390656,8,t,n)}function Wf(t,n){xu(2048,8,t,n)}function HS(t){ve.flags|=4;var n=ve.updateQueue;if(n===null)n=mu(),ve.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Gg(t){var n=dn().memoizedState;return HS({ref:n,nextImpl:t}),function(){if((Fe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Vg(t,n){return xu(4,2,t,n)}function Xg(t,n){return xu(4,4,t,n)}function kg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Yg(t,n,a){a=a!=null?a.concat([t]):null,xu(4,4,kg.bind(null,n,t),a)}function jf(){}function qg(t,n){var a=dn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&If(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Wg(t,n){var a=dn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&If(n,s[1]))return s[0];if(s=t(),Or){oe(!0);try{t()}finally{oe(!1)}}return a.memoizedState=[s,n],s}function Zf(t,n,a){return a===void 0||(va&1073741824)!==0&&(we&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=i0(),ve.lanes|=t,Ja|=t,a)}function jg(t,n,a,s){return fi(a,n)?a:qa.current!==null?(t=Zf(t,a,s),fi(t,n)||(vn=!0),t):(va&106)===0||(va&1073741824)!==0&&(we&261930)===0?(vn=!0,t.memoizedState=a):(t=i0(),ve.lanes|=t,Ja|=t,n)}function Zg(t,n,a,s,u){var f=at.p;at.p=f!==0&&8>f?f:8;var _=Mt.T,T={};T.types=_!==null?_.types:null,Mt.T=T,Jf(t,!1,n,a);try{var P=u(),j=Mt.S;if(j!==null&&j(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var st=PS(P,s);qo(t,n,st,gi(t))}else qo(t,n,s,gi(t))}catch(gt){qo(t,n,{then:function(){},status:"rejected",reason:gt},gi())}finally{at.p=f,_!==null&&T.types!==null&&(_.types=T.types),Mt.T=_}}function GS(){}function Qf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Qg(t).queue;Zg(t,u,n,Rt,a===null?GS:function(){return Kg(t),a(s)})}function Qg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Rt,baseState:Rt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:Rt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Kg(t){var n=Qg(t);n.next===null&&(n=t.alternate.memoizedState),qo(t,n.next.queue,{},gi())}function Kf(){return wn(Vs)}function Jg(){return dn().memoizedState}function $g(){return dn().memoizedState}function VS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=gi();t=ka(a);var s=Ya(n,t,a);s!==null&&(ai(s,n,a),Ho(s,n,a)),n={cache:bf()},t.payload=n;return}n=n.return}}function XS(t,n,a){var s=gi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},yu(t)?ev(n,a):(a=gf(t,n,a,s),a!==null&&(ai(a,t,s),nv(a,n,s)))}function tv(t,n,a){var s=gi();qo(t,n,a,s)}function qo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(yu(t))ev(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,T=f(_,a);if(u.hasEagerState=!0,u.eagerState=T,fi(T,_))return Kl(t,n,u,0),Qe===null&&Ql(),!1}catch{}finally{}if(a=gf(t,n,u,s),a!==null)return ai(a,t,s),nv(a,n,s),!0}return!1}function Jf(t,n,a,s){if(s={lane:2,revertLane:Vh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},yu(t)){if(n)throw Error(r(479))}else n=gf(t,a,s,2),n!==null&&ai(n,t,2)}function yu(t){var n=t.alternate;return t===ve||n!==null&&n===ve}function ev(t,n){Ss=du=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function nv(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,lt(t,a)}}var Su={readContext:wn,use:gu,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on,useEffectEvent:on},iv={readContext:wn,use:gu,useCallback:function(t,n){return jn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:Hg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,_u(4194308,4,kg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return _u(4194308,4,t,n)},useInsertionEffect:function(t,n){_u(4,2,t,n)},useMemo:function(t,n){var a=jn();n=n===void 0?null:n;var s=t();if(Or){oe(!0);try{t()}finally{oe(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=jn();if(a!==void 0){var u=a(n);if(Or){oe(!0);try{a(n)}finally{oe(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=XS.bind(null,ve,t),[s.memoizedState,t]},useRef:function(t){var n=jn();return t={current:t},n.memoizedState=t},useState:function(t){t=Yf(t);var n=t.queue,a=tv.bind(null,ve,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:jf,useDeferredValue:function(t,n){var a=jn();return Zf(a,t,n)},useTransition:function(){var t=Yf(!1);return t=Zg.bind(null,ve,t.queue,!0,!1),jn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ve,u=jn();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Qe===null)throw Error(r(349));(we&127)!==0||Tg(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Hg(Ag.bind(null,s,f,t),[t]),s.flags|=2048,Es(9,{destroy:void 0},bg.bind(null,s,f,a,n),null),a},useId:function(){var t=jn(),n=Qe.identifierPrefix;if(be){var a=Zi,s=ji;a=(s&~(1<<32-xe(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=pu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=zS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Kf,useFormState:Pg,useActionState:Pg,useOptimistic:function(t){var n=jn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Jf.bind(null,ve,!0,a),a.dispatch=n,[t,n]},useMemoCache:Vf,useCacheRefresh:function(){return jn().memoizedState=VS.bind(null,ve)},useEffectEvent:function(t){var n=jn(),a={impl:t};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},av={readContext:wn,use:gu,useCallback:qg,useContext:wn,useEffect:Wf,useImperativeHandle:Yg,useInsertionEffect:Vg,useLayoutEffect:Xg,useMemo:Wg,useReducer:vu,useRef:Fg,useState:function(){return vu(_a)},useDebugValue:jf,useDeferredValue:function(t,n){var a=dn();return jg(a,We.memoizedState,t,n)},useTransition:function(){var t=vu(_a)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:Yo(t),n]},useSyncExternalStore:Eg,useId:Jg,useHostTransitionStatus:Kf,useFormState:zg,useActionState:zg,useOptimistic:function(t,n){var a=dn();return wg(a,We,t,n)},useMemoCache:Vf,useCacheRefresh:$g,useEffectEvent:Gg},kS={readContext:wn,use:gu,useCallback:qg,useContext:wn,useEffect:Wf,useImperativeHandle:Yg,useInsertionEffect:Vg,useLayoutEffect:Xg,useMemo:Wg,useReducer:kf,useRef:Fg,useState:function(){return kf(_a)},useDebugValue:jf,useDeferredValue:function(t,n){var a=dn();return We===null?Zf(a,t,n):jg(a,We.memoizedState,t,n)},useTransition:function(){var t=kf(_a)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:Yo(t),n]},useSyncExternalStore:Eg,useId:Jg,useHostTransitionStatus:Kf,useFormState:Bg,useActionState:Bg,useOptimistic:function(t,n){var a=dn();return We!==null?wg(a,We,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Vf,useCacheRefresh:$g,useEffectEvent:Gg};function $f(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:O({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var th={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=gi(),u=ka(s);u.payload=n,a!=null&&(u.callback=a),n=Ya(t,u,s),n!==null&&(ai(n,t,s),Ho(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=gi(),u=ka(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ya(t,u,s),n!==null&&(ai(n,t,s),Ho(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=gi(),s=ka(a);s.tag=2,n!=null&&(s.callback=n),n=Ya(t,s,a),n!==null&&(ai(n,t,a),Ho(n,t,a))}};function rv(t,n,a,s,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Uo(a,s)||!Uo(u,f):!0}function sv(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&th.enqueueReplaceState(n,n.state,null)}function Pr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=O({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function ov(t){Zl(t)}function lv(t){console.error(t)}function uv(t){Zl(t)}function Mu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function cv(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function eh(t,n,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){Mu(t,n)},a}function fv(t){return t=ka(t),t.tag=3,t}function hv(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){cv(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){cv(n,a,s),typeof u!="function"&&($a===null?$a=new Set([this]):$a.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function YS(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Rr(n,a,u,!0),a=Dn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Gn===null?Xu():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===lu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Fh(t,s,u)),!1;case 22:return a.flags|=65536,s===lu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Fh(t,s,u)),!1}throw Error(r(435,a.tag))}return Fh(t,s,u),Xu(),!1}if(be)return n=Dn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Sf&&(t=Error(r(422),{cause:s}),Po(Ti(t,a)))):(s!==Sf&&(n=Error(r(423),{cause:s}),Po(Ti(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Ti(s,a),u=eh(t.stateNode,s,u),Nf(t,u),ln!==4&&(ln=2)),!1;var f=Error(r(520),{cause:s});if(f=Ti(f,a),tl===null?tl=[f]:tl.push(f),ln!==4&&(ln=2),n===null)return!0;s=Ti(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=eh(a.stateNode,s,t),Nf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&($a===null||!$a.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=fv(u),hv(u,t,a,s),Nf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var nh=Error(r(461)),vn=!1;function Mn(t,n,a,s){n.child=t===null?gg(n,null,a,s):Lr(n,t.child,a,s)}function dv(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var T in s)T!=="ref"&&(_[T]=s[T])}else _=s;return Cr(n),s=Bf(t,n,a,_,f,u),T=Ff(),t!==null&&!vn?(Hf(t,n,u),xa(t,n,u)):(be&&T&&eu(n),n.flags|=1,Mn(t,n,s,u),n.child)}function pv(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!vf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,mv(t,n,f,s,u)):(t=$l(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!ch(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Uo,a(_,s)&&t.ref===n.ref)return xa(t,n,u)}return n.flags|=1,t=da(f,s),t.ref=n.ref,t.return=n,n.child=t}function mv(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Uo(f,s)&&t.ref===n.ref)if(vn=!1,n.pendingProps=s=f,ch(t,u))(t.flags&131072)!==0&&(vn=!0);else return n.lanes=t.lanes,xa(t,n,u)}return ih(t,n,a,s,u)}function gv(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return vv(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&su(n,f!==null?f.cachePool:null),f!==null?xg(n,f):Lf(),yg(n);else return s=n.lanes=536870912,vv(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(su(n,f.cachePool),xg(n,f),ja(),n.memoizedState=null):(t!==null&&su(n,null),Lf(),ja());return Mn(t,n,u,a),n.child}function Wo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function vv(t,n,a,s,u){var f=Rf();return f=f===null?null:{parent:mn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&su(n,null),Lf(),yg(n),t!==null&&Rr(t,n,s,!0),n.childLanes=u,null}function Eu(t,n){return n=Tu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function _v(t,n,a){return Lr(n,t.child,null,a),t=Eu(n,n.pendingProps),t.flags|=2,hi(n),n.memoizedState=null,t}function qS(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(be){if(s.mode==="hidden")return t=Eu(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Wo(null,t);if(Pf(n),(t=$e)?(t=k0(t,Ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ba!==null?{id:ji,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=eg(t),a.return=n,n.child=a,bn=n,$e=null)):t=null,t===null)throw Ha(n);return n.lanes=536870912,null}return Eu(n,s)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Pf(n),u)if(n.flags&256)n.flags&=-257,n=_v(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(vn||Rr(t,n,a,!1),u=(a&t.childLanes)!==0,vn||u){if(qa.current===null){if(s=Qe,s!==null&&(_=Q(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Er(t,_),ai(s,t,_),nh;Xu()}n=_v(t,n,a)}else t=f.treeContext,$e=wi(_.nextSibling),bn=n,be=!0,Fa=null,Ri=!1,t!==null&&ag(n,t),n=Eu(n,s),n.flags|=134221824;return n}return t=da(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ts(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ih(t,n,a,s,u){return Cr(n),a=Bf(t,n,a,s,void 0,u),s=Ff(),t!==null&&!vn?(Hf(t,n,u),xa(t,n,u)):(be&&s&&eu(n),n.flags|=1,Mn(t,n,a,u),n.child)}function xv(t,n,a,s,u,f){return Cr(n),n.updateQueue=null,a=Mg(n,s,a,u),Sg(t),s=Ff(),t!==null&&!vn?(Hf(t,n,f),xa(t,n,f)):(be&&s&&eu(n),n.flags|=1,Mn(t,n,a,f),n.child)}function yv(t,n,a,s,u){if(Cr(n),n.stateNode===null){var f=ps,_=a.contextType;typeof _=="object"&&_!==null&&(f=wn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=th,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},wf(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?wn(_):ps,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&($f(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&th.enqueueReplaceState(f,f.state,null),Vo(n,s,f,u),Go(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,P=Pr(a,T);f.props=P;var j=f.context,st=a.contextType;_=ps,typeof st=="object"&&st!==null&&(_=wn(st));var gt=a.getDerivedStateFromProps;st=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,st||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||j!==_)&&sv(n,f,s,_),Xa=!1;var k=n.memoizedState;f.state=k,Vo(n,s,f,u),Go(),j=n.memoizedState,T||k!==j||Xa?(typeof gt=="function"&&($f(n,a,gt,s),j=n.memoizedState),(P=Xa||rv(n,a,P,s,k,j,_))?(st||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=j),f.props=s,f.state=j,f.context=_,s=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Df(t,n),_=n.memoizedProps,st=Pr(a,_),f.props=st,gt=n.pendingProps,k=f.context,j=a.contextType,P=ps,typeof j=="object"&&j!==null&&(P=wn(j)),T=a.getDerivedStateFromProps,(j=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==gt||k!==P)&&sv(n,f,s,P),Xa=!1,k=n.memoizedState,f.state=k,Vo(n,s,f,u),Go();var it=n.memoizedState;_!==gt||k!==it||Xa||t!==null&&t.dependencies!==null&&au(t.dependencies)?(typeof T=="function"&&($f(n,a,T,s),it=n.memoizedState),(st=Xa||rv(n,a,st,s,k,it,P)||t!==null&&t.dependencies!==null&&au(t.dependencies))?(j||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,it,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,it,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&k===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&k===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=P,s=st):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&k===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&k===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ts(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Lr(n,t.child,null,u),n.child=Lr(n,null,a,u)):Mn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=xa(t,n,u),t}function Sv(t,n,a,s){return br(),n.flags|=256,Mn(t,n,a,s),n.child}var ah={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rh(t){return{baseLanes:t,cachePool:cg()}}function sh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=mi),t}function Mv(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(Nn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(u?Wa(n):ja(),(t=$e)?(t=k0(t,Ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ba!==null?{id:ji,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=eg(t),a.return=n,n.child=a,bn=n,$e=null)):t=null,t===null)throw Ha(n);return rd(t)?n.lanes=32:n.lanes=536870912,null}return f=s.children,s=s.fallback,u?(ja(),u=n.mode,f=Tu({mode:"hidden",children:f},u),s=Tr(s,u,a,null),f.return=n,s.return=n,f.sibling=s,n.child=f,s=n.child,s.memoizedState=rh(a),s.childLanes=sh(t,_,a),n.memoizedState=ah,Wo(null,s)):(Wa(n),oh(n,f))}var T=t.memoizedState;if(T!==null){var P=T.dehydrated;if(P!==null)return WS(t,n,f,_,s,P,T,a)}return u?(ja(),u=s.fallback,f=n.mode,T=t.child,P=T.sibling,s=da(T,{mode:"hidden",children:s.children}),s.subtreeFlags=T.subtreeFlags&1206910976,P!==null?u=da(P,u):(u=Tr(u,f,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,Wo(null,s),s=n.child,u=t.child.memoizedState,u===null?u=rh(a):(f=u.cachePool,f!==null?(T=mn._currentValue,f=f.parent!==T?{parent:T,pool:T}:f):f=cg(),u={baseLanes:u.baseLanes|a,cachePool:f}),s.memoizedState=u,s.childLanes=sh(t,_,a),n.memoizedState=ah,Wo(t.child,s)):(Wa(n),a=t.child,t=a.sibling,a=da(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function oh(t,n){return n=Tu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Tu(t,n){return t=ti(22,t,null,n),t.lanes=0,t}function bu(t,n,a){return Lr(n,t.child,null,a),t=oh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function WS(t,n,a,s,u,f,_,T){if(a)return n.flags&256?(Wa(n),n.flags&=-257,bu(t,n,T)):n.memoizedState!==null?(ja(),n.child=t.child,n.flags|=128,null):(ja(),f=u.fallback,_=n.mode,u=Tu({mode:"visible",children:u.children},_),f=Tr(f,_,T,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,Lr(n,t.child,null,T),u=n.child,u.memoizedState=rh(T),u.childLanes=sh(t,s,T),n.memoizedState=ah,Wo(null,u));if(Wa(n),rd(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var P=s.dgst;return s=P,s!==""&&(u=Error(r(419)),u.stack="",u.digest=s,Po({value:u,source:null,stack:null})),bu(t,n,T)}if(vn||Rr(t,n,T,!1),s=(T&t.childLanes)!==0,vn||s){if(qa.current!==null)return bu(t,n,T);if(s=Qe,s!==null&&(u=Q(s,T),u!==0&&u!==_.retryLane))throw _.retryLane=u,Er(t,u),ai(s,t,u),nh;return ad(f)||Xu(),bu(t,n,T)}return ad(f)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,$e=wi(f.nextSibling),bn=n,be=!0,Fa=null,Ri=!1,t!==null&&ag(n,t),n=oh(n,u.children),n.flags|=134221824,n)}function Ev(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),iu(t.return,n,a)}function Tv(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&hu(a)===null&&(n=t),t=t.sibling}return n}function Au(t,n,a,s,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function lh(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function uh(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var _=Nn.current;if(n.flags&128)return Xo(n,_),null;var T=(_&2)!==0;if(T?(_=_&1|2,n.flags|=128):_&=1,Xo(n,_),u==="backwards"&&t!==null?(lh(t),Mn(t,n,s,a),lh(t)):Mn(t,n,s,a),s=be?Oo:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ev(t,a,n);else if(t.tag===19)Ev(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=Tv(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,lh(n)),Au(n,!0,u,null,f,s);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&hu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Au(n,!0,a,null,f,s);break;case"together":Au(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=Tv(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Au(n,!1,u,a,f,s)}return n.child}function bv(t,n,a){var s=n.pendingProps;return Ga(n,n.type,s.value),Mn(t,n,s.children,a),n.child}function xa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ja|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Rr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=da(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=da(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ch(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&au(t)))}function jS(t,n,a){switch(n.tag){case 3:J(n,n.stateNode.containerInfo),Ga(n,mn,t.memoizedState.cache),br();break;case 27:case 5:Et(n);break;case 4:J(n,n.stateNode.containerInfo);break;case 10:Ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Pf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Wa(n),n.flags|=128,null;s=Rr(t,n,a,!1);var u=n.child.childLanes;return s||(a&u)!==0?Mv(t,n,a):(Wa(n),t=xa(t,n,a),t!==null?t.sibling:null)}Wa(n);break;case 19:if(n.flags&128)return uh(t,n,a);if(u=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Rr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return uh(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Xo(n,Nn.current),s)break;return null;case 22:return n.lanes=0,gv(t,n,a,n.pendingProps);case 24:Ga(n,mn,t.memoizedState.cache)}return xa(t,n,a)}function Av(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!ch(t,a)&&(n.flags&128)===0)return vn=!1,jS(t,n,a);vn=(t.flags&131072)!==0}else vn=!1,be&&(n.flags&1048576)!==0&&ig(n,Oo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Nr(n.elementType),n.type=t,typeof t=="function")vf(t)?(s=Pr(t,s),n.tag=1,n=yv(null,n,t,s,a)):(n.tag=0,n=ih(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===V){n.tag=11,n=dv(null,n,t,s,a);break t}else if(u===St){n.tag=14,n=pv(null,n,t,s,a);break t}else if(u===ft){n.tag=10,n.type=t,n=bv(null,n,a);break t}}throw n=Pt(t)||t,Error(r(306,n,""))}}return n;case 0:return ih(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Pr(s,n.pendingProps),yv(t,n,s,u,a);case 3:t:{if(J(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Df(t,n),Vo(n,s,null,a);var _=n.memoizedState;if(s=_.cache,Ga(n,mn,s),s!==f.cache&&Tf(n,[mn],a,!0),Go(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Sv(t,n,s,a);break t}else if(s!==u){u=Ti(Error(r(424)),n),Po(u),n=Sv(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($e=wi(t.firstChild),bn=n,be=!0,Fa=null,Ri=!0,a=gg(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(br(),s===u){n=xa(t,n,a);break t}Mn(t,n,s,a)}n=n.child}return n;case 26:return Ts(t,n),t===null?(a=K0(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(n.stateNode=D0(n.type,n.pendingProps,U.current,n)):n.memoizedState=K0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Et(n),t===null&&be&&(s=n.stateNode=W0(n.type,n.pendingProps,U.current),bn=n,Ri=!0,u=$e,nr(n.type)?(sd=u,$e=wi(s.firstChild)):$e=u),Mn(t,n,n.pendingProps.children,a),Ts(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&be&&((u=s=$e)&&(s=VM(s,n.type,n.pendingProps,Ri),s!==null?(n.stateNode=s,bn=n,$e=wi(s.firstChild),Ri=!1,u=!0):u=!1),u||Ha(n)),Et(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,s=f.children,Kh(u,f)?s=null:_!==null&&Kh(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Bf(t,n,IS,null,null,a),Vs._currentValue=u),Ts(t,n),Mn(t,n,s,a),n.child;case 6:return t===null&&be&&((t=a=$e)&&(a=XM(a,n.pendingProps,Ri),a!==null?(n.stateNode=a,bn=n,$e=null,t=!0):t=!1),t||Ha(n)),null;case 13:return Mv(t,n,a);case 4:return J(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Lr(n,null,s,a):Mn(t,n,s,a),n.child;case 11:return dv(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Ts(t,n),Mn(t,n,s,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return bv(t,n,a);case 9:return u=n.type._context,s=n.pendingProps.children,Cr(n),u=wn(u),s=s(u),n.flags|=1,Mn(t,n,s,a),n.child;case 14:return pv(t,n,n.type,n.pendingProps,a);case 15:return mv(t,n,n.type,n.pendingProps,a);case 19:return uh(t,n,a);case 31:return qS(t,n,a);case 22:return gv(t,n,a,n.pendingProps);case 24:return Cr(n),s=wn(mn),t===null?(u=Rf(),u===null&&(u=Qe,f=bf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},wf(n),Ga(n,mn,u)):((t.lanes&a)!==0&&(Df(t,n),Vo(n,null,null,a),Go()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ga(n,mn,s)):(s=f.cache,Ga(n,mn,s),s!==u.cache&&Tf(n,[mn],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:be&&eu(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:Ts(t,n),Mn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ya(t){t.flags|=4}function fh(t,n,a,s,u){var f;if((f=(t.mode&32)!==0)&&(f=a===null?e_(n,s):e_(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(o0())t.flags|=8192;else throw Ur=lu,Cf}else t.flags&=-16777217}function Rv(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!n_(n))if(o0())t.flags|=8192;else throw Ur=lu,Cf}function Ru(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Bn():536870912,t.lanes|=n,ws|=n)}function jo(t,n){if(!be)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function tn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&1206910976,s|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function ZS(t,n,a){var s=n.pendingProps;switch(yf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ga(mn),dt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(vs(n)?ya(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Mf())),tn(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ya(n),f!==null?(tn(n),Rv(n,f)):(tn(n),fh(n,u,null,s,a))):f?f!==t.memoizedState?(ya(n),tn(n),Rv(n,f)):(tn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ya(n),tn(n),fh(n,u,t,s,a)),null;case 27:if(pt(n),a=U.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ya(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return tn(n),n.subtreeFlags&=-33554433,null}t=$t.current,vs(n)?rg(n):(t=W0(u,s,a),n.stateNode=t,ya(n))}return tn(n),n.subtreeFlags&=-33554433,null;case 5:if(pt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ya(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return tn(n),n.subtreeFlags&=-33554433,null}if(f=$t.current,vs(n))rg(n);else{var _=rl(U.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(u,{is:s.is}):_.createElement(u)}}f[ie]=n,f[qt]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Ln(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ya(n)}}return tn(n),n.subtreeFlags&=-33554433,fh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ya(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=U.current,vs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=bn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[ie]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||A0(t.nodeValue,a)),t||Ha(n,!0)}else t=rl(t).createTextNode(s),t[ie]=n,n.stateNode=t}return tn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=vs(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[ie]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),t=!1}else a=Mf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(hi(n),n):(hi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return tn(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=vs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[ie]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=Mf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(hi(n),n):(hi(n),null)}return hi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ru(n,n.updateQueue),tn(n),null);case 4:return dt(),t===null&&qh(n.stateNode.containerInfo),n.flags|=67108864,tn(n),null;case 10:return ga(n.type),tn(n),null;case 19:if(zf(n),s=n.memoizedState,s===null)return tn(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)jo(s,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=hu(t),f!==null){for(n.flags|=128,jo(s,!1),t=f.updateQueue,n.updateQueue=t,Ru(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)tg(a,t),a=a.sibling;return Xo(n,Nn.current&1|2),be&&pa(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&X()>Fu&&(n.flags|=128,u=!0,jo(s,!1),n.lanes=4194304)}else{if(!u)if(t=hu(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Ru(n,t),jo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!f.alternate&&!be)return tn(n),null}else 2*X()-s.renderingStartTime>Fu&&a!==536870912&&(n.flags|=128,u=!0,jo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=X(),t.sibling=null,f=Nn.current,f=u?f&1|2:f&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||be?Xo(n,f):(a=f,xt(Dn,n),xt(Nn,a),Gn===null&&(Gn=n)),be&&pa(n,s.treeForkCount),t}return tn(n),null;case 22:case 23:return hi(n),Of(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&Ru(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Ut(Dr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ga(mn),tn(n),null;case 25:return null;case 30:return n.flags|=33554432,tn(n),null}throw Error(r(156,n.tag))}function QS(t,n){switch(yf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ga(mn),dt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(hi(n),n.alternate===null)throw Error(r(340));br()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(hi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));br()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return zf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return dt(),null;case 10:return ga(n.type),null;case 22:case 23:return hi(n),Of(),t!==null&&Ut(Dr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ga(mn),null;case 25:return null;default:return null}}function Cv(t,n){switch(yf(n),n.tag){case 3:ga(mn),dt();break;case 26:case 27:case 5:pt(n);break;case 4:dt();break;case 31:n.memoizedState!==null&&hi(n);break;case 13:hi(n);break;case 19:zf(n);break;case 10:ga(n.type);break;case 22:case 23:hi(n),Of(),t!==null&&Ut(Dr);break;case 24:ga(mn)}}function Zo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==u)}}catch(T){ke(n,n.return,T)}}function Za(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var _=s.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,u=n;var P=a,j=T;try{j()}catch(st){ke(u,P,st)}}}s=s.next}while(s!==f)}}catch(st){ke(n,n.return,st)}}function wv(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{_g(n,a)}catch(s){ke(t,t.return,s)}}}function Dv(t,n,a){a.props=Pr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){ke(t,n,s)}}function Qi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var u=t.stateNode,f=fa(t.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=I0(f)),s=u.ref;break;case 7:if(t.stateNode===null){var _=new vi(t);g(t.child,!1,HM,_,void 0,void 0),t.stateNode=_}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(T){ke(t,n,T)}}function Un(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){ke(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ke(t,n,u)}else a.current=null}function Cu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)X0(t.stateNode,n[a])}function Nv(t){for(var n=t.return;n!==null&&(dh(n)&&X0(t.stateNode,n.stateNode),!hh(n));)n=n.return}function Qo(t){for(var n=t.return;n!==null&&(dh(n)&&GM(t.stateNode,n.stateNode),!hh(n));)n=n.return}function hh(t){return t.tag===5||t.tag===3||t.tag===27}function dh(t){return t&&t.tag===7&&t.stateNode!==null}function ph(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){ke(t,t.return,u)}}function mh(t,n,a){try{var s=t.stateNode;MM(s,t.type,a,n),s[qt]=n}catch(u){ke(t,t.return,u)}}function Uv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&nr(t.type)||t.tag===4}function gh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Uv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&nr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vh(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi)),Cu(t,s),ze=!0;else if(u!==4&&(u===27&&(Cu(t,s),s=null,nr(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(vh(t,n,a,s),t=t.sibling;t!==null;)vh(t,n,a,s),t=t.sibling}function wu(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Cu(t,s),ze=!0;else if(u!==4&&(u===27&&(Cu(t,s),s=null,nr(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(wu(t,n,a,s),t=t.sibling;t!==null;)wu(t,n,a,s),t=t.sibling}function Lv(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Ln(n,s,a),n[ie]=t,n[qt]=a}catch(f){ke(t,t.return,f)}}var Du=!1,di=null;function Ov(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Du=!0)}var Ki=null;function Pv(){var t=Ki;return Ki=null,t}var ei=0;function bs(t,n,a,s,u){return ei=0,zv(t.child,n,a,s,u)}function zv(t,n,a,s,u){for(var f=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(s!==null){var T=td(_);s.push(T),T.view&&(f=!0)}else f||td(_).view&&(f=!0);Du=!0,P0(_,ei===0?n:n+"_"+ei,a),ei++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||zv(t.child,n,a,s,u)&&(f=!0));t=t.sibling}return f}function Ji(t,n){for(;t!==null;)t.tag===5?z0(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Ji(t.child,n)),t=t.sibling}function Nu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Nu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=ha(n.default,n.share),n!=="none"&&(bs(t,a,n,null,!1)||Ji(t.child,!1))}t=t.sibling}}function _h(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,u=fa(s,a),f=ha(s.default,a.paired?s.share:s.enter);f!=="none"?bs(t,u,f,null,!1)?(Nu(t),a.paired||n||Ls(t,s.onEnter)):Ji(t.child,!1):Nu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)_h(t,n),t=t.sibling;else Nu(t)}function xh(t){if(di!==null&&di.size!==0){var n=di;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var u=n.get(s);if(u!==void 0){var f=ha(a.default,a.share);if(f!=="none"&&(bs(t,s,f,null,!1)?(f=t.stateNode,u.paired=f,f.paired=u,Ls(t,a.onShare)):Ji(t.child,!1)),n.delete(s),n.size===0)break}}}xh(t)}t=t.sibling}}}function yh(t){if(t.tag===30){var n=t.memoizedProps,a=fa(n,t.stateNode),s=di!==null?di.get(a):void 0,u=ha(n.default,s!==void 0?n.share:n.exit);u!=="none"&&(bs(t,a,u,null,!1)?s!==void 0?(u=t.stateNode,s.paired=u,u.paired=s,di.delete(a),Ls(t,n.onShare)):Ls(t,n.onExit):Ji(t.child,!1)),di!==null&&xh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)yh(t),t=t.sibling;else di!==null&&xh(t)}function Iv(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=fa(n,t.stateNode);n=ha(n.default,n.update),t.flags&=-5,n!=="none"&&bs(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Iv(t);t=t.sibling}}function Sh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Ji(t.child,!1))}Sh(t)}t=t.sibling}}function Uu(t){if(t.tag===30)t.stateNode.paired=null,Ji(t.child,!1),Sh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Uu(t),t=t.sibling;else Sh(t)}function Bv(t){for(t=t.child;t!==null;)t.tag===30?Ji(t.child,!1):(t.subtreeFlags&33554432)!==0&&Bv(t),t=t.sibling}function Mh(t,n,a,s,u,f,_){for(var T=!1;n!==null;){if(n.tag===5){var P=n.stateNode;if(f!==null&&ei<f.length){var j=f[ei],st=td(P);(j.view||st.view)&&(T=!0);var gt;if(gt=(t.flags&4)===0)if(st.clip)gt=!0;else{gt=j.rect;var k=st.rect;gt=gt.y!==k.y||gt.x!==k.x||gt.height!==k.height||gt.width!==k.width}gt&&(t.flags|=4),st.abs?st=!j.abs:(j=j.rect,st=st.rect,st=j.height!==st.height||j.width!==st.width),st&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&P0(P,ei===0?a:a+"_"+ei,u),T&&(t.flags&4)!==0||(Ki===null&&(Ki=[]),Ki.push(P,ei===0?s:s+"_"+ei,n.memoizedProps)),ei++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:Mh(t,n.child,a,s,u,f,_)&&(T=!0));n=n.sibling}return T}function Fv(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,u=fa(a,s),f=ha(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,s=t;var T=t.child;ei=0,u=Mh(s,T,u,u,f,_,!1),(t.flags&4)!==0&&u&&Ls(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Fv(t);t=t.sibling}}var An=!1,He=!1,$i=!1,Eh=!1,Hv=typeof WeakSet=="function"?WeakSet:Set,Rn=null,ta=!1,Ko=!1,Lu=!1,Th=!1;function KS(t,n,a){if(t=t.containerInfo,Zh=Xs,t=km(t),cf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var f=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var T=0,P=-1,j=-1,st=0,gt=0,k=t,it=null;e:for(;;){for(var It;k!==s||f!==0&&k.nodeType!==3||(P=T+f),k!==_||u!==0&&k.nodeType!==3||(j=T+u),k.nodeType===3&&(T+=k.nodeValue.length),(It=k.firstChild)!==null;)it=k,k=It;for(;;){if(k===t)break e;if(it===s&&++st===f&&(P=T),it===_&&++gt===u&&(j=T),(It=k.nextSibling)!==null)break;k=it,it=k.parentNode}k=It}s=P===-1||j===-1?null:{start:P,end:j}}else s=null}s=s||{start:0,end:0}}else s=null;for(Qh={focusedElem:t,selectionRange:s},Xs=!1,a=(a&335544064)===a,Rn=n,n=a?9270:1024;Rn!==null;){if(t=Rn,a&&(s=t.deletions,s!==null))for(f=0;f<s.length;f++)a&&yh(s[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&Ov(t),Ou(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&yh(s),Ou(a);continue}else if(s!==null&&s.memoizedState!==null){a&&Ov(t),Ou(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,Rn=s):(a&&Iv(t),Ou(a))}}di=null}function Ou(t){for(;Rn!==null;){var n=Rn,a=t,s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&s!==null){a=void 0,u=s.memoizedProps,s=s.memoizedState;var f=n.stateNode;try{var _=Pr(n.type,u);a=f.getSnapshotBeforeUpdate(_,s),f.__reactInternalSnapshotBeforeUpdate=a}catch(T){ke(n,n.return,T)}}break;case 3:if((u&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)id(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":id(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=fa(s.memoizedProps,s.stateNode),u=n.memoizedProps,u=ha(u.default,u.update),u!=="none"&&bs(s,a,u,s.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Rn=s;break}Rn=n.return}}function Gv(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ea(t,a),s&4&&Zo(5,a);break;case 1:if(ea(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){ke(a,a.return,_)}else{var u=Pr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){ke(a,a.return,_)}}s&64&&wv(a),s&512&&Qi(a,a.return);break;case 3:if(ea(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{_g(t,n)}catch(_){ke(a,a.return,_)}}break;case 27:n===null&&s&4&&Lv(a);case 26:case 5:ea(t,a),n===null&&s&4&&ph(a),s&512&&Qi(a,a.return);break;case 12:ea(t,a);break;case 31:ea(t,a),s&4&&Yv(t,a);break;case 13:ea(t,a),s&4&&qv(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=uM.bind(null,a),kM(t,a))));break;case 22:if(s=a.memoizedState!==null||An,!s){var f=n!==null&&n.memoizedState!==null||He;n=An,u=He,An=s,(He=f)&&!u?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Bi(t,a,s)):ea(t,a),An=n,He=u}break;case 30:ea(t,a),s&512&&Qi(a,a.return);break;case 7:s&512&&Qi(a,a.return);default:ea(t,a)}}function bh(t,n){for(t=t.child;t!==null;)Vv(t,n),t=t.sibling}function Vv(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var u=t.stateNode,f=t.memoizedProps.style,_=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(P){ke(t,t.return,P)}Ah(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,ze=!0}catch(P){ke(t,t.return,P)}break;case 18:try{var T=t.stateNode;n?O0(T,!0):O0(t.stateNode,!1)}catch(P){ke(t,t.return,P)}break;case 22:case 23:t.memoizedState===null&&bh(t,n);break;default:bh(t,n)}}function Ah(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:Vv(a,s);break t;case 22:a.memoizedState===null&&Ah(a,s);break t;default:Ah(a,s)}}t=t.sibling}}function Xv(t){var n=t.alternate;n!==null&&(t.alternate=null,Xv(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ne(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nn=null,ni=!1;function zi(t,n,a){for(a=a.child;a!==null;)kv(t,n,a),a=a.sibling}function kv(t,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Ae,a)}catch{}switch(a.tag){case 26:He||Un(a,n),zi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!He&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||Un(a,n),Qo(a);var s=nn,u=ni;nr(a.type)&&(nn=a.stateNode,ni=!1),zi(t,n,a),j0(a.stateNode,a.type,a.memoizedProps),nn=s,ni=u;break;case 5:He||Un(a,n),Qo(a);case 6:if(a.tag===6&&Qo(a),s=nn,u=ni,nn=null,zi(t,n,a),nn=s,ni=u,nn!==null)if(ni)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode),ze=!0}catch(f){ke(a,n,f)}else try{nn.removeChild(a.stateNode),ze=!0}catch(f){ke(a,n,f)}break;case 18:nn!==null&&(ni?(t=nn,L0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ks(t)):L0(nn,a.stateNode));break;case 4:s=nn,u=ni,nn=a.stateNode.containerInfo,ni=!0,zi(t,n,a),nn=s,ni=u;break;case 0:case 11:case 14:case 15:Za(2,a,n),He||Za(4,a,n),zi(t,n,a);break;case 1:He||(Un(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Dv(a,n,s)),zi(t,n,a);break;case 21:zi(t,n,a);break;case 22:He=(s=He)||a.memoizedState!==null,zi(t,n,a),He=s;break;case 30:Un(a,n),zi(t,n,a);break;case 7:He||Un(a,n),zi(t,n,a);break;default:zi(t,n,a)}}function Yv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ks(t)}catch(a){ke(n,n.return,a)}}}function qv(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ks(t)}catch(a){ke(n,n.return,a)}}function JS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Hv),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Hv),n;default:throw Error(r(435,t.tag))}}function Pu(t,n){var a=JS(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=cM.bind(null,t,s);s.then(u,u)}})}function Zn(t,n,a){var s=n.deletions;if(s!==null)for(var u=0;u<s.length;u++){var f=s[u],_=t,T=n,P=T;t:for(;P!==null;){switch(P.tag){case 27:if(nr(P.type)){nn=P.stateNode,ni=!1;break t}break;case 5:nn=P.stateNode,ni=!1;break t;case 3:case 4:nn=P.stateNode.containerInfo,ni=!0;break t}P=P.return}if(nn===null)throw Error(r(160));kv(_,T,f),nn=null,ni=!1,_=f.alternate,_!==null&&(_.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Wv(n,t,a),n=n.sibling}var Ii=null;function Wv(t,n,a){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var f=0;f<s.length;f++){var _=s[f];_.ref.impl=_.nextImpl}Zn(n,t,a),Qn(t),u&4&&(Za(3,t,t.return),Zo(3,t),Za(5,t,t.return));break;case 1:Zn(n,t,a),Qn(t),u&512&&(He||s===null||Un(s,s.return)),u&64&&An&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Ii,Zn(n,t,a),Qn(t),u&512&&(He||s===null||Un(s,s.return)),u&4)if(u=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(An)t.stateNode=D0(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":s=u.getElementsByTagName("title")[0],(!s||s[te]||s[ie]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=u.createElement(n),u.head.insertBefore(s,u.querySelector("head > title"))),Ln(s,n,a),s[ie]=t,ge(s),n=s;break t;case"link":if(f=t_("link","href",u).get(n+(a.href||""))){for(_=0;_<f.length;_++)if(s=f[_],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(_,1);break e}}s=u.createElement(n),Ln(s,n,a),u.head.appendChild(s);break;case"meta":if(f=t_("meta","content",u).get(n+(a.content||""))){for(_=0;_<f.length;_++)if(s=f[_],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(_,1);break e}}s=u.createElement(n),Ln(s,n,a),u.head.appendChild(s);break;default:throw Error(r(468,n))}s[ie]=t,ge(s),n=s}t.stateNode=n}else An||cd(f,t.type,t.stateNode);else t.stateNode=$0(f,a,t.memoizedProps);else u!==a?(u===null?(n=s.stateNode,n===null||He||n.parentNode.removeChild(n)):u.count--,a===null?An||cd(f,t.type,t.stateNode):$0(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&mh(t,t.memoizedProps,s.memoizedProps);break;case 27:Zn(n,t,a),Qn(t),u&512&&(He||s===null||Un(s,s.return)),s!==null&&u&4&&mh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(f=$i,$i=!1,Zn(n,t,a),$i=f,Qn(t),u&512&&(He||s===null||Un(s,s.return)),t.flags&32){n=t.stateNode;try{os(n,""),ze=!0}catch(st){ke(t,t.return,st)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,mh(t,n,s!==null?s.memoizedProps:n)),u&1024&&(Eh=!0);break;case 6:if(Zn(n,t,a),Qn(t),u&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,ze=!0}catch(st){ke(t,t.return,st)}}break;case 3:if(ze=!1,Qu=null,f=Ii,Ii=sl(n.containerInfo),Zn(n,t,a),Ii=f,Qn(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{ks(n.containerInfo)}catch(st){ke(t,t.return,st)}Eh&&(Eh=!1,jv(t)),ze=!1;break;case 4:u=$i,$i=An,s=pm(),f=Ii,Ii=sl(t.stateNode.containerInfo),Zn(n,t,a),Qn(t),Ii=f,ze&&Ko&&(Lu=!0),ze=s,$i=u;break;case 12:Zn(n,t,a),Qn(t);break;case 31:Zn(n,t,a),Qn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Pu(t,n)));break;case 13:Zn(n,t,a),Qn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Bu=X()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Pu(t,n)));break;case 22:f=t.memoizedState!==null,_=s!==null&&s.memoizedState!==null;var T=An,P=He,j=$i;An=T||f,$i=j||f,He=P||_,Zn(n,t,a),He=P,$i=j,An=T,Qn(t),u&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||s===null||_||An||He||(n=_||He,a=An,s=He,An=f||An,He=n,Qa(t,2),An=a,He=s),!f&&$i||bh(t,f)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Pu(t,a))));break;case 19:Zn(n,t,a),Qn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Pu(t,n)));break;case 30:u&512&&(He||s===null||Un(s,s.return)),u=pm(),f=Ko,_=(a&335544064)===a,T=t.memoizedProps,Ko=_&&ha(T.default,T.update)!=="none",Zn(n,t,a),Qn(t),_&&s!==null&&ze&&(t.flags|=4),Ko=f,ze=u;break;case 21:break;case 7:u&512&&(He||s===null||Un(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Zn(n,t,a),Qn(t)}}function Qn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Uv(s)){a=s;break}s=s.return}s=null;for(var u=t.return;u!==null;){if(dh(u)){var f=u.stateNode;s===null?s=[f]:s.push(f)}if(hh(u))break;u=u.return}var _=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var T=a.stateNode,P=gh(t);wu(t,P,T,_);break;case 5:var j=a.stateNode;a.flags&32&&(os(j,""),a.flags&=-33);var st=gh(t);wu(t,st,j,_);break;case 3:case 4:var gt=a.stateNode.containerInfo,k=gh(t);vh(t,k,gt,_);break;default:throw Error(r(161))}}catch(it){ke(t,t.return,it)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function jv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;jv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Xs=!0,n.reset(),Xs=!1),t=t.sibling}}function As(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Zv(n,t),n=n.sibling;else Fv(n)}function Zv(t,n){var a=t.alternate;if(a===null)_h(t,!1);else switch(t.tag){case 3:if(Th=ta=!1,Pv(),As(n,t),!ta&&!Lu){if(t=Ki,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var u=t[s+1];z0(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Th=!0}Ki=null;break;case 5:As(n,t);break;case 4:s=ta,ta=!1,As(n,t),ta&&(Lu=!0),ta=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?_h(t,!1):As(n,t));break;case 30:s=ta,u=Pv(),ta=!1,As(n,t),ta&&(t.flags|=4);var f=t.memoizedProps,_=t.stateNode;n=fa(f,_),_=fa(a.memoizedProps,_);var T=ha(f.default,f.update);T==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,ei=0,n=Mh(t,a,n,_,T,f,!0),ei!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Ls(t,t.memoizedProps.onUpdate),Ki=u):u!==null&&(u.push.apply(u,Ki),Ki=u),ta=(t.flags&32)!==0?!0:s;break;default:As(n,t)}}function ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Gv(t,n.alternate,n),n=n.sibling}function Qa(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:Za(4,a,a.return),Qa(a,s);break;case 1:Un(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&Dv(a,a.return,u),Qa(a,s);break;case 27:(s&2)!==0&&j0(a.stateNode,a.type,a.memoizedProps);case 5:Un(a,a.return),a.tag!==5&&a.tag!==27||Qo(a),Qa(a,s);break;case 6:Qo(a);break;case 26:Un(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||He||u.parentNode.removeChild(u),Qa(a,s);break;case 22:a.memoizedState===null&&Qa(a,s);break;case 30:Un(a,a.return),Qa(a,s);break;case 7:Un(a,a.return);default:Qa(a,s)}t=t.sibling}}function Bi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,_=f.flags,T=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Bi(u,f,a),Zo(4,f);break;case 1:if(Bi(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){ke(s,s.return,st)}if(s=f,u=s.updateQueue,u!==null){var P=s.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)vg(j[u],P)}catch(st){ke(s,s.return,st)}}T&&_&64&&wv(f),Qi(f,f.return);break;case 27:(a&2)!==0&&Lv(f);case 5:f.tag!==5&&f.tag!==27||Nv(f),Bi(u,f,a),T&&s===null&&_&4&&ph(f),Qi(f,f.return);break;case 6:Nv(f);break;case 26:P=f.stateNode,f.memoizedState!==null||P===null||An||cd(sl(P.ownerDocument),f.type,P),Bi(u,f,a),T&&s===null&&_&4&&ph(f),Qi(f,f.return);break;case 12:Bi(u,f,a);break;case 31:Bi(u,f,a),T&&_&4&&Yv(u,f);break;case 13:Bi(u,f,a),T&&_&4&&qv(u,f);break;case 22:f.memoizedState===null&&Bi(u,f,a),Qi(f,f.return);break;case 30:Bi(u,f,a),Qi(f,f.return);break;case 7:Qi(f,f.return);default:Bi(u,f,a)}n=n.sibling}}function Rh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&zo(a))}function Ch(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&zo(t))}function Ci(t,n,a,s){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)Qv(t,n,a,s),n=n.sibling;else u&&Bv(n)}function Qv(t,n,a,s){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Uu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(t,n,a,s),f&2048&&Zo(9,n);break;case 1:Ci(t,n,a,s);break;case 3:Ci(t,n,a,s),u&&Th&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&zo(f)));break;case 12:if(f&2048){Ci(t,n,a,s),f=n.stateNode;try{var _=n.memoizedProps,T=_.id,P=_.onPostCommit;typeof P=="function"&&P(T,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(j){ke(n,n.return,j)}}else Ci(t,n,a,s);break;case 31:Ci(t,n,a,s);break;case 13:Ci(t,n,a,s);break;case 23:break;case 22:_=n.stateNode,T=n.alternate,n.memoizedState!==null?(u&&T!==null&&T.memoizedState===null&&Uu(T),_._visibility&2?Ci(t,n,a,s):Jo(t,n)):(u&&T!==null&&T.memoizedState!==null&&Uu(n),_._visibility&2?Ci(t,n,a,s):(_._visibility|=2,Rs(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Rh(T,n);break;case 24:Ci(t,n,a,s),f&2048&&Ch(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(Ji(f.child,!0),Ji(n.child,!0))),Ci(t,n,a,s);break;default:Ci(t,n,a,s)}}function Rs(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,T=a,P=s,j=_.flags;switch(_.tag){case 0:case 11:case 15:Rs(f,_,T,P,u),Zo(8,_);break;case 23:break;case 22:var st=_.stateNode;_.memoizedState!==null?st._visibility&2?Rs(f,_,T,P,u):Jo(f,_):(st._visibility|=2,Rs(f,_,T,P,u)),u&&j&2048&&Rh(_.alternate,_);break;case 24:Rs(f,_,T,P,u),u&&j&2048&&Ch(_.alternate,_);break;default:Rs(f,_,T,P,u)}n=n.sibling}}function Jo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:Jo(a,s),u&2048&&Rh(s.alternate,s);break;case 24:Jo(a,s),u&2048&&Ch(s.alternate,s);break;default:Jo(a,s)}n=n.sibling}}var zr=8192;function Ir(t,n,a){if(t.subtreeFlags&zr)for(t=t.child;t!==null;)Kv(t,n,a),t=t.sibling}function Kv(t,n,a){switch(t.tag){case 26:Ir(t,n,a),t.flags&zr&&(t.memoizedState!==null?aE(a,Ii,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&a_(a,t)));break;case 5:Ir(t,n,a),t.flags&zr&&(t=t.stateNode,(n&335544128)===n&&a_(a,t));break;case 3:case 4:var s=Ii;Ii=sl(t.stateNode.containerInfo),Ir(t,n,a),Ii=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=zr,zr=16777216,Ir(t,n,a),zr=s):Ir(t,n,a));break;case 30:if((t.flags&zr)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var u=t.stateNode;u.paired=null,di===null&&(di=new Map),di.set(s,u)}Ir(t,n,a);break;default:Ir(t,n,a)}}function Jv(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function $o(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,t0(s,t)}Jv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$v(t),t=t.sibling}function $v(t){switch(t.tag){case 0:case 11:case 15:$o(t),t.flags&2048&&Za(9,t,t.return);break;case 3:$o(t);break;case 12:$o(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,zu(t)):$o(t);break;default:$o(t)}}function zu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,t0(s,t)}Jv(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Za(8,n,n.return),zu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zu(n));break;default:zu(n)}t=t.sibling}}function t0(t,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:Za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:zo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Rn=s;else t:for(a=t;Rn!==null;){s=Rn;var u=s.sibling,f=s.return;if(Xv(s),s===a){Rn=null;break t}if(u!==null){u.return=f,Rn=u;break t}Rn=f}}}var $S={getCacheForType:function(t){var n=wn(mn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(mn).controller.signal}},tM=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Qe=null,Re=null,we=0,Xe=0,pi=null,Ka=!1,Cs=!1,wh=!1,Sa=0,ln=0,Ja=0,Br=0,Iu=0,mi=0,ws=0,tl=null,ii=null,Dh=!1,Bu=0,e0=0,Fu=1/0,Hu=null,$a=null,rn=0,Fi=null,Fr=null,na=0,Nh=0,Uh=null,n0=null,Ds=null,Ns=null,Us=null,el=0,Gu=null;function gi(){return(Fe&2)!==0&&we!==0?we&-we:Mt.T!==null?Vh():ee()}function i0(){if(mi===0)if((we&536870912)===0||be){var t=hn;hn<<=1,(hn&3932160)===0&&(hn=262144),mi=t}else mi=536870912;return t=Dn.current,t!==null&&(t.flags|=32),mi}function Ls(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=I0(fa(t.memoizedProps,a))),Ns===null&&(Ns=[]),Ns.push(n.bind(null,s))}}function ai(t,n,a){(t===Qe&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)&&(Os(t,0),tr(t,we,mi,!1)),R(t,a),((Fe&2)===0||t!==Qe)&&(t===Qe&&((Fe&2)===0&&(Br|=a),ln===4&&tr(t,we,mi,!1)),ia(t))}function a0(t,n,a){if((Fe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||In(t,n),u=s?iM(t,n):Oh(t,n,!0),f=s;do{if(u===0){Cs&&!s&&tr(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!eM(a)){u=Oh(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var T=t;u=tl;var P=T.current.memoizedState.isDehydrated;if(P&&(Os(T,_).flags|=256),_=Oh(T,_,!1),_!==2&&_!==6){if(wh&&!P){T.errorRecoveryDisabledLanes|=f,Br|=f,u=4;break t}f=ii,ii=u,f!==null&&(ii===null?ii=f:ii.push.apply(ii,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){Os(t,0),tr(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:tr(s,n,mi,!Ka);break t;case 2:ii=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Bu+300-X(),10<u)){if(tr(s,n,mi,!Ka),an(s,0,!0)!==0)break t;na=n,s.timeoutHandle=$h(r0.bind(null,s,a,ii,Hu,Dh,n,mi,Br,ws,Ka,f,"Throttled",-0,0),u);break t}r0(s,a,ii,Hu,Dh,n,mi,Br,ws,Ka,f,null,-0,0)}}break}while(!0);ia(t)}function r0(t,n,a,s,u,f,_,T,P,j,st,gt,k,it){t.timeoutHandle=-1;var It=n.subtreeFlags,Jt=(f&335544064)===f;if(gt=null,(Jt||It&8192||(It&16785408)===16785408)&&(gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},di=null,Kv(n,f,gt),Jt&&(It=gt,Jt=t.containerInfo,Jt=(Jt.nodeType===9?Jt:Jt.ownerDocument).__reactViewTransition,Jt!=null&&(It.count++,It.waitingForViewTransition=!0,It=ul.bind(It),Jt.finished.then(It,It))),It=(f&62914560)===f?Bu-X():(f&4194048)===f?e0-X():0,It=rE(gt,It),It!==null)){na=f,t.cancelPendingCommit=It(d0.bind(null,t,n,f,a,s,u,_,T,P,j,st,gt,null,k,it)),tr(t,f,_,!j);return}d0(t,n,f,a,s,u,_,T,P,j,st,gt)}function eM(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!fi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function tr(t,n,a,s){n=oi(t,n),n&=~Iu,n&=~Br,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-xe(u),_=1<<f;s[f]=-1,u&=~_}a!==0&&ot(t,a,n)}function Vu(){return(Fe&6)===0?(nl(0),!1):!0}function Lh(){if(Re!==null){if(Xe===0)var t=Re.return;else t=Re,ma=Ar=null,Gf(t),ys=null,Fo=0,t=Re;for(;t!==null;)Cv(t.alternate,t),t=t.return;Re=null}}function Os(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,bM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),na=0,Lh(),Qe=t,Re=a=da(t.current,null),we=n,Xe=0,pi=null,Ka=!1,Cs=In(t,n),wh=!1,ws=mi=Iu=Br=Ja=ln=0,ii=tl=null,Dh=!1,Sa=oi(t,n),Ql(),a}function s0(t,n){ve=null,Mt.H=Su,n===xs||n===ou?(n=dg(),Xe=3):n===Cf?(n=dg(),Xe=4):Xe=n===nh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,pi=n,Re===null&&(ln=1,Mu(t,Ti(n,t.current)))}function o0(){var t=Dn.current;return t===null?!0:(we&4194048)===we?Gn===null:(we&62914560)===we||(we&536870912)!==0?t===Gn:!1}function l0(){var t=Mt.H;return Mt.H=Su,t===null?Su:t}function u0(){var t=Mt.A;return Mt.A=$S,t}function Xu(){ln=4,Ka||(we&4194048)!==we&&Dn.current!==null||(Cs=!0),(Ja&134217727)===0&&(Br&134217727)===0||Qe===null||tr(Qe,we,mi,!1)}function Oh(t,n,a){var s=Fe;Fe|=2;var u=l0(),f=u0();(Qe!==t||we!==n)&&(Hu=null,Os(t,n)),n=!1;var _=ln;t:do try{if(Xe!==0&&Re!==null){var T=Re,P=pi;switch(Xe){case 8:Lh(),_=6;break t;case 3:case 2:case 9:case 6:Dn.current===null&&(n=!0);var j=Xe;if(Xe=0,pi=null,Ps(t,T,P,j),a&&Cs){_=0;break t}break;default:j=Xe,Xe=0,pi=null,Ps(t,T,P,j)}}nM(),_=ln;break}catch(st){s0(t,st)}while(!0);return n&&t.shellSuspendCounter++,ma=Ar=null,Fe=s,Mt.H=u,Mt.A=f,Re===null&&(Qe=null,we=0,Ql()),_}function nM(){for(;Re!==null;)c0(Re)}function iM(t,n){var a=Fe;Fe|=2;var s=l0(),u=u0();Qe!==t||we!==n?(Hu=null,Fu=X()+500,Os(t,n)):Cs=In(t,n);t:do try{if(Xe!==0&&Re!==null){n=Re;var f=pi;e:switch(Xe){case 1:Xe=0,pi=null,Ps(t,n,f,1);break;case 2:case 9:if(fg(f)){Xe=0,pi=null,f0(n);break}n=function(){Xe!==2&&Xe!==9||Qe!==t||(Xe=7),ia(t)},f.then(n,n);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:fg(f)?(Xe=0,pi=null,f0(n)):(Xe=0,pi=null,Ps(t,n,f,7));break;case 5:var _=null;switch(Re.tag){case 26:_=Re.memoizedState;case 5:case 27:var T=Re;if(_?n_(_):T.stateNode.complete){Xe=0,pi=null;var P=T.sibling;if(P!==null)Re=P;else{var j=T.return;j!==null?(Re=j,ku(j)):Re=null}break e}}Xe=0,pi=null,Ps(t,n,f,5);break;case 6:Xe=0,pi=null,Ps(t,n,f,6);break;case 8:Lh(),ln=6;break t;default:throw Error(r(462))}}aM();break}catch(st){s0(t,st)}while(!0);return ma=Ar=null,Mt.H=s,Mt.A=u,Fe=a,Re!==null?0:(Qe=null,we=0,Ql(),ln)}function aM(){for(;Re!==null&&!me();)c0(Re)}function c0(t){var n=Av(t.alternate,t,Sa);t.memoizedProps=t.pendingProps,n===null?ku(t):Re=n}function f0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=xv(a,n,n.pendingProps,n.type,void 0,we);break;case 11:n=xv(a,n,n.pendingProps,n.type.render,n.ref,we);break;case 5:Gf(n);var s=n;s===bn&&(be?(nu(s),s.tag===5&&s.stateNode!=null&&($e=s.stateNode)):(nu(s),be=!0));default:Cv(a,n),n=Re=tg(n,Sa),n=Av(a,n,Sa)}t.memoizedProps=t.pendingProps,n===null?ku(t):Re=n}function Ps(t,n,a,s){ma=Ar=null,Gf(n),ys=null,Fo=0;var u=n.return;try{if(YS(t,u,n,a,we)){ln=1,Mu(t,Ti(a,t.current)),Re=null;return}}catch(f){if(u!==null)throw Re=u,f;ln=1,Mu(t,Ti(a,t.current)),Re=null;return}n.flags&32768?(be||s===1?t=!0:Cs||(we&536870912)!==0?t=!1:(Ka=t=!0,(s===2||s===9||s===3||s===6)&&(s=Dn.current,s!==null&&s.tag===13&&(s.flags|=16384))),h0(n,t)):ku(n)}function ku(t){var n=t;do{if((n.flags&32768)!==0){h0(n,Ka);return}t=n.return;var a=ZS(n.alternate,n,Sa);if(a!==null){Re=a;return}if(n=n.sibling,n!==null){Re=n;return}Re=n=t}while(n!==null);ln===0&&(ln=5)}function h0(t,n){do{var a=QS(t.alternate,t);if(a!==null){a.flags&=32767,Re=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Re=t;return}Re=t=a}while(t!==null);ln=6,Re=null}function d0(t,n,a,s,u,f,_,T,P,j,st,gt){t.cancelPendingCommit=null;do Yu();while(rn!==0);if((Fe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===Qe&&(Re=Qe=null,we=0),Fr=n,Fi=t,na=a,Uh=u,n0=s,rM(t,n,a,_,T,P,gt)}}function rM(t,n,a,s,u,f,_){var T=n.lanes|n.childLanes;if(Nh=T,T|=mf,Z(t,a,T,s,u,f),Ns=null,(a&335544064)===a?(Us=LS(t),s=10262):(Us=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,fM(Bt,function(){return Bh(),null})):(t.callbackNode=null,t.callbackPriority=0),Du=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Mt.T,Mt.T=null,u=at.p,at.p=2,f=Fe,Fe|=4;try{KS(t,n,a)}finally{Fe=f,at.p=u,Mt.T=s}}rn=1,Du?Ds=NM(_,t.containerInfo,Us,Ph,zh,oM,Ih,Bh,sM):(Ph(),zh(),Ih())}function sM(t){if(rn!==0){var n=Fi.onRecoverableError;n(t,{componentStack:null})}}function oM(){rn===3&&(rn=0,Zv(Fr,Fi),rn=4)}function Ph(){if(rn===1){rn=0;var t=Fi,n=Fr,a=na,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Mt.T,Mt.T=null;var u=at.p;at.p=2;var f=Fe;Fe|=4;try{Ko=Lu=!1,Wv(n,t,a),a=Qh;var _=km(t.containerInfo),T=a.focusedElem,P=a.selectionRange;if(_!==T&&T&&T.ownerDocument&&Xm(T.ownerDocument.documentElement,T)){if(P!==null&&cf(T)){var j=P.start,st=P.end;if(st===void 0&&(st=j),"selectionStart"in T)T.selectionStart=j,T.selectionEnd=Math.min(st,T.value.length);else{var gt=T.ownerDocument||document,k=gt&&gt.defaultView||window;if(k.getSelection){var it=k.getSelection(),It=T.textContent.length,Jt=Math.min(P.start,It),_e=P.end===void 0?Jt:Math.min(P.end,It);!it.extend&&Jt>_e&&(_=_e,_e=Jt,Jt=_);var q=Vm(T,Jt),G=Vm(T,_e);if(q&&G&&(it.rangeCount!==1||it.anchorNode!==q.node||it.anchorOffset!==q.offset||it.focusNode!==G.node||it.focusOffset!==G.offset)){var $=gt.createRange();$.setStart(q.node,q.offset),it.removeAllRanges(),Jt>_e?(it.addRange($),it.extend(G.node,G.offset)):($.setEnd(G.node,G.offset),it.addRange($))}}}}for(gt=[],it=T;it=it.parentNode;)it.nodeType===1&&gt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<gt.length;T++){var mt=gt[T];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Xs=!!Zh,Qh=Zh=null}finally{Fe=f,at.p=u,Mt.T=s}}t.current=n,rn=2}}function zh(){if(rn===2){rn=0;var t=Fi,n=Fr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Mt.T,Mt.T=null;var s=at.p;at.p=2;var u=Fe;Fe|=4;try{Gv(t,n.alternate,n)}finally{Fe=u,at.p=s,Mt.T=a}}rn=3}}function Ih(){if(rn===4||rn===3){rn=0;var t=Ds;Ds=null,Pe();var n=Fi,a=Fr,s=na,u=n0,f=(s&335544064)===s?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?rn=5:(rn=0,Fr=Fi=null,p0(n,n.pendingLanes)),f=n.pendingLanes,f===0&&($a=null),kt(s),a=a.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Ae,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=Mt.T,f=at.p,at.p=2,Mt.T=null;try{for(var _=n.onRecoverableError,T=0;T<u.length;T++){var P=u[T];_(P.value,{componentStack:P.stack})}}finally{Mt.T=a,at.p=f}}if(u=Ns,_=Us,Us=null,u!==null&&(Ns=null,_===null&&(_=[]),t!==null))for(P=0;P<u.length;P++)a=(0,u[P])(_),a!==void 0&&t.finished.finally(a);(na&3)!==0&&Yu(),ia(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===Gu?el++:(el=0,Gu=n):(el=0,Gu=null),nl(0)}}function p0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,zo(n)))}function Yu(){return Ds!==null&&(Ds.skipTransition(),Ds=null),Ph(),zh(),Ih(),Bh()}function Bh(){if(rn!==5)return!1;var t=Fi,n=Nh;Nh=0;var a=kt(na),s=Mt.T,u=at.p;try{at.p=32>a?32:a,Mt.T=null,a=Uh,Uh=null;var f=Fi,_=na;if(rn=0,Fr=Fi=null,na=0,(Fe&6)!==0)throw Error(r(331));var T=Fe;if(Fe|=4,$v(f.current),Qv(f,f.current,_,a),Fe=T,nl(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Ae,f)}catch{}return!0}finally{at.p=u,Mt.T=s,p0(t,n)}}function m0(t,n,a){n=Ti(a,n),n=eh(t.stateNode,n,2),t=Ya(t,n,2),t!==null&&(R(t,2),ia(t))}function ke(t,n,a){if(t.tag===3)m0(t,t,a);else for(;n!==null;){if(n.tag===3){m0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&($a===null||!$a.has(s))){t=Ti(a,t),a=fv(2),s=Ya(n,a,2),s!==null&&(hv(a,s,n,t),R(s,2),ia(s));break}}n=n.return}}function Fh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new tM;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(wh=!0,u.add(a),t=lM.bind(null,t,n,a),n.then(t,t))}function lM(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qe===t&&(we&a)===a&&((ln===4||ln===3&&(we&62914560)===we&&300>X()-Bu)&&(Fe&2)===0?Os(t,0):Iu|=a,ws===we&&(ws=0)),ia(t)}function g0(t,n){n===0&&(n=Bn()),t=Er(t,n),t!==null&&(R(t,n),ia(t))}function uM(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),g0(t,a)}function cM(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),g0(t,a)}function fM(t,n){return Yt(t,n)}var zs=null,Is=null,Hh=!1,qu=!1,Gh=!1,er=0;function ia(t){t!==Is&&t.next===null&&(Is===null?zs=Is=t:Is=Is.next=t),qu=!0,Hh||(Hh=!0,dM())}function nl(t,n){if(!Gh&&qu){Gh=!0;do for(var a=!1,s=zs;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var _=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-xe(42|t)+1)-1,f&=u&~(_&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,y0(s,f))}else f=we,f=an(s,s===Qe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||In(s,f)||(a=!0,y0(s,f));s=s.next}while(a);Gh=!1}}function hM(){v0()}function v0(){qu=Hh=!1;var t=0;er!==0&&TM()&&(t=er);for(var n=X(),a=null,s=zs;s!==null;){var u=s.next,f=_0(s,n);f===0?(s.next=null,a===null?zs=u:a.next=u,u===null&&(Is=a)):(a=s,(t!==0||(f&3)!==0)&&(qu=!0)),s=u}rn!==0&&rn!==5||nl(t),er!==0&&(er=0)}function _0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-xe(f),T=1<<_,P=u[_];P===-1?((T&a)===0||(T&s)!==0)&&(u[_]=xr(T,n)):P<=n&&(t.expiredLanes|=T),f&=~T}if(n=Qe,a=we,a=an(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Se(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||In(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Se(s),kt(a)){case 2:case 8:a=yt;break;case 32:a=Bt;break;case 268435456:a=fe;break;default:a=Bt}return s=x0.bind(null,t),a=Yt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Se(s),t.callbackPriority=2,t.callbackNode=null,2}function x0(t,n){if(rn!==0&&rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Yu()&&t.callbackNode!==a)return null;var s=we;return s=an(t,t===Qe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(a0(t,s,n),_0(t,X()),t.callbackNode!=null&&t.callbackNode===a?x0.bind(null,t):null)}function y0(t,n){if(Yu())return null;a0(t,n,!0)}function dM(){AM(function(){(Fe&6)!==0?Yt(ht,hM):v0()})}function Vh(){if(er===0){var t=wr;t===0&&(t=Ge,Ge<<=1,(Ge&261888)===0&&(Ge=256)),er=t}return er}function S0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Vl(t)}function pM(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=S0((u[qt]||null).action),_=s.submitter;_&&(n=(n=_[qt]||null)?S0(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var T=new ql("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(er!==0){var P=new FormData(u,_);Qf(a,{pending:!0,data:P,method:u.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=new FormData(u,_),Qf(a,{pending:!0,data:P,method:u.method,action:f},f,P))},currentTarget:u}]})}}for(var Xh=0;Xh<pf.length;Xh++){var kh=pf[Xh],mM=kh.toLowerCase(),gM=kh[0].toUpperCase()+kh.slice(1);Pi(mM,"on"+gM)}Pi(Wm,"onAnimationEnd"),Pi(jm,"onAnimationIteration"),Pi(Zm,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(bS,"onTransitionRun"),Pi(AS,"onTransitionStart"),Pi(RS,"onTransitionCancel"),Pi(Qm,"onTransitionEnd"),qn("onMouseEnter",["mouseout","mouseover"]),qn("onMouseLeave",["mouseout","mouseover"]),qn("onPointerEnter",["pointerout","pointerover"]),qn("onPointerLeave",["pointerout","pointerover"]),Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function M0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var T=s[_],P=T.instance,j=T.currentTarget;if(T=T.listener,P!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=j;try{f(u)}catch(st){Zl(st)}u.currentTarget=null,f=P}else for(_=0;_<s.length;_++){if(T=s[_],P=T.instance,j=T.currentTarget,T=T.listener,P!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=j;try{f(u)}catch(st){Zl(st)}u.currentTarget=null,f=P}}}}function Ce(t,n){var a=n[Ve];a===void 0&&(a=n[Ve]=new Set);var s=t+"__bubble";a.has(s)||(E0(n,t,2,!1),a.add(s))}function Yh(t,n,a){var s=0;n&&(s|=4),E0(a,t,s,n)}var Wu="_reactListening"+Math.random().toString(36).slice(2);function qh(t){if(!t[Wu]){t[Wu]=!0,Pa.forEach(function(a){a!=="selectionchange"&&(vM.has(a)||Yh(a,!1,t),Yh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Wu]||(n[Wu]=!0,Yh("selectionchange",!1,n))}}function E0(t,n,a,s){switch(h_(n)){case 2:var u=uE;break;case 8:u=cE;break;default:u=hd}a=u.bind(null,n,a,t),u=void 0,!$c||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Wh(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var T=s.stateNode.containerInfo;if(T===u)break;if(_===4)for(_=s.return;_!==null;){var P=_.tag;if((P===3||P===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;T!==null;){if(_=yn(T),_===null)return;if(P=_.tag,P===5||P===6||P===26||P===27){s=f=_;continue t}T=T.parentNode}}s=s.return}Em(function(){var j=f,st=Kc(a),gt=[];t:{var k=Km.get(t);if(k!==void 0){var it=ql,It=t;switch(t){case"keypress":if(kl(a)===0)break t;case"keydown":case"keyup":it=eS;break;case"focusin":It="focus",it=af;break;case"focusout":It="blur",it=af;break;case"beforeblur":case"afterblur":it=af;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Xy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=sS;break;case Wm:case jm:case Zm:it=qy;break;case Qm:it=lS;break;case"scroll":case"scrollend":it=Gy;break;case"wheel":it=cS;break;case"copy":case"cut":case"paste":it=jy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Cm;break;case"submit":it=aS;break;case"toggle":case"beforetoggle":it=hS}var Jt=(n&4)!==0,_e=!Jt&&(t==="scroll"||t==="scrollend"),q=Jt?k!==null?k+"Capture":null:k;Jt=[];for(var G=j,$;G!==null;){var mt=G;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||q===null||(mt=bo(G,q),mt!=null&&Jt.push(al(G,mt,$))),_e)break;G=G.return}0<Jt.length&&(k=new it(k,It,null,a,st),gt.push({event:k,listeners:Jt}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",it&&a!==Qc&&(It=a.relatedTarget||a.fromElement)&&(yn(It)||It[Te]))break t;(k||it)&&(It=st.window===st?st:(it=st.ownerDocument)?it.defaultView||it.parentWindow:window,k?(it=a.relatedTarget||a.toElement,k=j,it=it?yn(it):null,it!==null&&(_e=c(it),Jt=it.tag,it!==_e||Jt!==5&&Jt!==27&&Jt!==6)&&(it=null)):(k=null,it=j),k!==it&&(Jt=Am,mt="onMouseLeave",q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=Cm,mt="onPointerLeave",q="onPointerEnter",G="pointer"),_e=k==null?It:Sn(k),$=it==null?It:Sn(it),It=new Jt(mt,G+"leave",k,a,st),It.target=_e,It.relatedTarget=$,mt=null,yn(st)===j&&(Jt=new Jt(q,G+"enter",it,a,st),Jt.target=$,Jt.relatedTarget=_e,mt=Jt),_e=mt,Jt=k&&it?F(k,it,_M):null,k!==null&&T0(gt,It,k,Jt,!1),it!==null&&_e!==null&&T0(gt,_e,it,Jt,!0)))}t:{if(k=j?Sn(j):window,it=k.nodeName&&k.nodeName.toLowerCase(),it==="select"||it==="input"&&k.type==="file")var Zt=zm;else if(Om(k))if(Im)Zt=MS;else{Zt=yS;var De=xS}else it=k.nodeName,!it||it.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?j&&Zc(j.elementType)&&(Zt=zm):Zt=SS;if(Zt&&(Zt=Zt(t,j))){Pm(gt,Zt,a,st);break t}De&&De(t,k,j)}switch(De=j?Sn(j):window,t){case"focusin":(Om(De)||De.contentEditable==="true")&&(fs=De,ff=j,Lo=null);break;case"focusout":Lo=ff=fs=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,Ym(gt,a,st);break;case"selectionchange":if(TS)break;case"keydown":case"keyup":Ym(gt,a,st)}var re;if(sf)t:{switch(t){case"compositionstart":var ue="onCompositionStart";break t;case"compositionend":ue="onCompositionEnd";break t;case"compositionupdate":ue="onCompositionUpdate";break t}ue=void 0}else cs?Um(t,a)&&(ue="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(wm&&a.locale!=="ko"&&(cs||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&cs&&(re=Tm()):(za=st,tf="value"in za?za.value:za.textContent,cs=!0)),De=ju(j,ue),0<De.length&&(ue=new Rm(ue,t,null,a,st),gt.push({event:ue,listeners:De}),re?ue.data=re:(re=Lm(a),re!==null&&(ue.data=re)))),(re=pS?mS(t,a):gS(t,a))&&(ue=ju(j,"onBeforeInput"),0<ue.length&&(De=new Rm("onBeforeInput","beforeinput",null,a,st),gt.push({event:De,listeners:ue}),De.data=re)),pM(gt,t,j,a,st)}M0(gt,n)})}function al(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ju(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=bo(t,a),u!=null&&s.unshift(al(t,u,f)),u=bo(t,n),u!=null&&s.push(al(t,u,f))),t.tag===3)return s;t=t.return}return[]}function _M(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function T0(t,n,a,s,u){for(var f=n._reactName,_=[];a!==null&&a!==s;){var T=a,P=T.alternate,j=T.stateNode;if(T=T.tag,P!==null&&P===s)break;T!==5&&T!==26&&T!==27||j===null||(P=j,u?(j=bo(a,f),j!=null&&_.unshift(al(a,j,P))):u||(j=bo(a,f),j!=null&&_.push(al(a,j,P)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var xM=/\r\n?/g,yM=/\u0000|\uFFFD/g;function b0(t){return(typeof t=="string"?t:""+t).replace(xM,`
`).replace(yM,"")}function A0(t,n){return n=b0(n),b0(t)===n}function Ye(t,n,a,s,u,f){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||os(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&os(t,""+s);else return;break;case"className":Gl(t,"class",s);break;case"tabIndex":Gl(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Gl(t,a,s);break;case"style":Sm(t,s,f);return;case"data":if(n!=="object"){Gl(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Vl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ye(t,n,"name",u.name,u,null),Ye(t,n,"formEncType",u.formEncType,u,null),Ye(t,n,"formMethod",u.formMethod,u,null),Ye(t,n,"formTarget",u.formTarget,u,null)):(Ye(t,n,"encType",u.encType,u,null),Ye(t,n,"method",u.method,u,null),Ye(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Vl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Wi);return;case"onScroll":s!=null&&Ce("scroll",t);return;case"onScrollEnd":s!=null&&Ce("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Vl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ce("beforetoggle",t),Ce("toggle",t),Hl(t,"popover",s);break;case"xlinkActuate":ua(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ua(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ua(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ua(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ua(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ua(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ua(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ua(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ua(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Hl(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Fy.get(a)||a,Hl(t,a,s);else return}ze=!0}function jh(t,n,a,s,u,f){switch(a){case"style":Sm(t,s,f);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")os(t,s);else if(typeof s=="number"||typeof s=="bigint")os(t,""+s);else return;break;case"onScroll":s!=null&&Ce("scroll",t);return;case"onScrollEnd":s!=null&&Ce("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Wi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Yn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=t[qt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,u),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,s,u);break t}ze=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):Hl(t,a,s)}return}ze=!0}function Ln(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",t),Ce("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ye(t,n,f,_,a,null)}}u&&Ye(t,n,"srcSet",a.srcSet,a,null),s&&Ye(t,n,"src",a.src,a,null);return;case"input":Ce("invalid",t);var T=f=_=u=null,P=null,j=null;for(s in a)if(a.hasOwnProperty(s)){var st=a[s];if(st!=null)switch(s){case"name":u=st;break;case"type":_=st;break;case"checked":P=st;break;case"defaultChecked":j=st;break;case"value":f=st;break;case"defaultValue":T=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:Ye(t,n,s,st,a,null)}}vm(t,f,T,P,j,_,u,!1);return;case"select":Ce("invalid",t),s=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":_=T;break;case"multiple":s=T;default:Ye(t,n,u,T,a,null)}n=f,a=_,t.multiple=!!s,n!=null?ss(t,!!s,n,!1):a!=null&&ss(t,!!s,a,!0);return;case"textarea":Ce("invalid",t),f=u=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ye(t,n,_,T,a,null)}xm(t,s,u,f);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(s=a[P],s!=null))switch(P){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ye(t,n,P,s,a,null)}return;case"dialog":Ce("beforetoggle",t),Ce("toggle",t),Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":Ce("load",t);break;case"video":case"audio":for(s=0;s<il.length;s++)Ce(il[s],t);break;case"image":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"embed":case"source":case"link":Ce("error",t),Ce("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(s=a[j],s!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ye(t,n,j,s,a,null)}return;default:if(Zc(n)){for(st in a)a.hasOwnProperty(st)&&(s=a[st],s!==void 0&&jh(t,n,st,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ye(t,n,T,s,a,null))}var SM={};function MM(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,T=null,P=null,j=null,st=null;for(it in a){var gt=a[it];if(a.hasOwnProperty(it)&&gt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":P=gt;default:s.hasOwnProperty(it)||Ye(t,n,it,null,s,gt)}}for(var k in s){var it=s[k];if(gt=a[k],s.hasOwnProperty(k)&&(it!=null||gt!=null))switch(k){case"type":it!==gt&&(ze=!0),f=it;break;case"name":it!==gt&&(ze=!0),u=it;break;case"checked":it!==gt&&(ze=!0),j=it;break;case"defaultChecked":it!==gt&&(ze=!0),st=it;break;case"value":it!==gt&&(ze=!0),_=it;break;case"defaultValue":it!==gt&&(ze=!0),T=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==gt&&Ye(t,n,k,it,s,gt)}}Wc(t,_,T,P,j,st,f,u);return;case"select":it=_=T=k=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":it=P;default:s.hasOwnProperty(f)||Ye(t,n,f,null,s,P)}for(u in s)if(f=s[u],P=a[u],s.hasOwnProperty(u)&&(f!=null||P!=null))switch(u){case"value":f!==P&&(ze=!0),k=f;break;case"defaultValue":f!==P&&(ze=!0),T=f;break;case"multiple":f!==P&&(ze=!0),_=f;default:f!==P&&Ye(t,n,u,f,s,P)}n=T,a=_,s=it,k!=null?ss(t,!!a,k,!1):!!s!=!!a&&(n!=null?ss(t,!!a,n,!0):ss(t,!!a,a?[]:"",!1));return;case"textarea":it=k=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ye(t,n,T,null,s,u)}for(_ in s)if(u=s[_],f=a[_],s.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":u!==f&&(ze=!0),k=u;break;case"defaultValue":u!==f&&(ze=!0),it=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ye(t,n,_,u,s,f)}_m(t,k,it);return;case"option":for(var It in a)if(k=a[It],a.hasOwnProperty(It)&&k!=null&&!s.hasOwnProperty(It))switch(It){case"selected":t.selected=!1;break;default:Ye(t,n,It,null,s,k)}for(P in s)if(k=s[P],it=a[P],s.hasOwnProperty(P)&&k!==it&&(k!=null||it!=null))switch(P){case"selected":k!==it&&(ze=!0),t.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:Ye(t,n,P,k,s,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)k=a[Jt],a.hasOwnProperty(Jt)&&k!=null&&!s.hasOwnProperty(Jt)&&Ye(t,n,Jt,null,s,k);for(j in s)if(k=s[j],it=a[j],s.hasOwnProperty(j)&&k!==it&&(k!=null||it!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(r(137,n));break;default:Ye(t,n,j,k,s,it)}return;default:if(Zc(n)){for(var _e in a)k=a[_e],a.hasOwnProperty(_e)&&k!==void 0&&!s.hasOwnProperty(_e)&&jh(t,n,_e,void 0,s,k);for(st in s)k=s[st],it=a[st],!s.hasOwnProperty(st)||k===it||k===void 0&&it===void 0||jh(t,n,st,k,s,it);return}}for(var q in a)k=a[q],a.hasOwnProperty(q)&&k!=null&&!s.hasOwnProperty(q)&&Ye(t,n,q,null,s,k);for(gt in s)k=s[gt],it=a[gt],!s.hasOwnProperty(gt)||k===it||k==null&&it==null||Ye(t,n,gt,k,s,it)}function R0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function EM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,_=u.initiatorType,T=u.duration;if(f&&T&&R0(_)){for(_=0,T=u.responseEnd,s+=1;s<a.length;s++){var P=a[s],j=P.startTime;if(j>T)break;var st=P.transferSize,gt=P.initiatorType;st&&R0(gt)&&(P=P.responseEnd,_+=st*(P<T?1:(T-j)/(P-j)))}if(--s,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Zh=null,Qh=null;function rl(t){return t.nodeType===9?t:t.ownerDocument}function C0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function w0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function D0(t,n,a,s){return a=rl(a).createElement(t),a[ie]=s,a[qt]=n,Ln(a,t,n),ge(a),a}function Kh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jh=null;function TM(){var t=window.event;return t&&t.type==="popstate"?t===Jh?!1:(Jh=t,!0):(Jh=null,!1)}var $h=typeof setTimeout=="function"?setTimeout:void 0,bM=typeof clearTimeout=="function"?clearTimeout:void 0,N0=typeof Promise=="function"?Promise:void 0,U0=typeof requestAnimationFrame=="function"?requestAnimationFrame:$h,AM=typeof queueMicrotask=="function"?queueMicrotask:typeof N0<"u"?function(t){return N0.resolve(null).then(t).catch(RM)}:$h;function RM(t){setTimeout(function(){throw t})}function nr(t){return t==="head"}function L0(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),ks(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")od(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,od(a);for(var f=a.firstChild;f;){var _=f.nextSibling,T=f.nodeName;f[te]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&od(t.ownerDocument.body);a=u}while(a);ks(n)}function O0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function P0(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var u=s=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function z0(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function CM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function td(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return CM(n,a,t)}function wM(t){return t.documentElement.clientHeight}function DM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function NM(t,n,a,s,u,f,_,T,P){var j=n.nodeType===9?n:n.ownerDocument;try{var st=j.startViewTransition({update:function(){var k=j.defaultView,it=k.navigation&&k.navigation.transition,It=j.fonts.status;s();var Jt=[];if(It==="loaded"&&(wM(j),j.fonts.status==="loading"&&Jt.push(j.fonts.ready)),It=Jt.length,t!==null)for(var _e=t.suspenseyImages,q=0,G=0;G<_e.length;G++){var $=_e[G];if(!$.complete){var mt=$.getBoundingClientRect();if(0<mt.bottom&&0<mt.right&&mt.top<k.innerHeight&&mt.left<k.innerWidth){if(q+=i_($),q>Ku){Jt.length=It;break}$=new Promise(DM.bind($)),Jt.push($)}}}if(0<Jt.length)return k=Promise.race([Promise.all(Jt),new Promise(function(Zt){return setTimeout(Zt,500)})]).then(u,u),(it?Promise.allSettled([it.finished,k]):k).then(f,f);if(u(),it)return it.finished.then(f,f);f()},types:a});j.__reactViewTransition=st;var gt=[];return st.ready.then(function(){for(var k=j.documentElement.getAnimations({subtree:!0}),it=0;it<k.length;it++){var It=k[it],Jt=It.effect,_e=Jt.pseudoElement;if(_e!=null&&_e.startsWith("::view-transition")){gt.push(It),It=Jt.getKeyframes();for(var q=_e=void 0,G=!0,$=0;$<It.length;$++){var mt=It[$],Zt=mt.width;if(_e===void 0)_e=Zt;else if(_e!==Zt){G=!1;break}if(Zt=mt.height,q===void 0)q=Zt;else if(q!==Zt){G=!1;break}delete mt.width,delete mt.height,mt.transform==="none"&&delete mt.transform}G&&_e!==void 0&&q!==void 0&&(Jt.setKeyframes(It),G=getComputedStyle(Jt.target,Jt.pseudoElement),G.width!==_e||G.height!==q)&&(G=It[0],G.width=_e,G.height=q,G=It[It.length-1],G.width=_e,G.height=q,Jt.setKeyframes(It))}}_()},function(k){j.__reactViewTransition===st&&(j.__reactViewTransition=null);try{if(typeof k=="object"&&k!==null)switch(k.name){case"InvalidStateError":(k.message==="View transition was skipped because document visibility state is hidden."||k.message==="Skipping view transition because document visibility state has become hidden."||k.message==="Skipping view transition because viewport size changed."||k.message==="Transition was aborted because of invalid state")&&(k=null)}k!==null&&P(k)}finally{s(),u(),_()}}),st.finished.finally(function(){for(var k=0;k<gt.length;k++)gt[k].cancel();j.__reactViewTransition===st&&(j.__reactViewTransition=null),T()}),st}catch{return s(),u(),_(),null}}function Hr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Hr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:O({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Hr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===t&&f.pseudoElement===n&&s.push(a[u])}return s},Hr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function I0(t){return{name:t,group:new Hr("group",t),imagePair:new Hr("image-pair",t),old:new Hr("old",t),new:new Hr("new",t)}}function vi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}vi.prototype.addEventListener=function(t,n,a){var s=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(F0(f,t,n,a)===-1){var _=this,T=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(T=function(P){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,P):n.handleEvent(P)}),s!==null&&(u=_.removeEventListener.bind(_,t,n,a),s.addEventListener("abort",u,{once:!0}),u=s.removeEventListener.bind(s,"abort",u)),s=Bs(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:T,cleanup:u}),g(this._fragmentFiber.child,!1,UM,t,T,s)}this._eventListeners=f}};function UM(t,n,a,s){return M(t).addEventListener(n,a,s),!1}vi.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=F0(s,t,n,a),n!==-1)){var u=s[n];a=u.attachedListener;var f=u.cleanup;u=Bs(u.optionsOrUseCapture),g(this._fragmentFiber.child,!1,LM,t,a,u),s.splice(n,1),f!==null&&f()}};function LM(t,n,a,s){return M(t).removeEventListener(n,a,s),!1}function Bs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function B0(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function F0(t,n,a,s){if(t.length===0)return-1;s=B0(s);for(var u=0;u<t.length;u++){var f=t[u];if(f.type===n&&f.listener===a&&B0(f.optionsOrUseCapture)===s)return u}return-1}vi.prototype.dispatchEvent=function(t){var n=x(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];s.addEventListener(f.type,f.attachedListener,Bs(f.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(u=0;u<a.length;u++)f=a[u],s.removeEventListener(f.type,f.attachedListener,Bs(f.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},vi.prototype.focus=function(t){g(this._fragmentFiber.child,!0,H0,t,void 0,void 0)};function H0(t,n){return t.tag===6?!1:(t=M(t),YM(t,n))}vi.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,ed,n,void 0,void 0);for(var a=n.length-1;0<=a&&!H0(n[a],t);a--);};function ed(t,n){return n.push(t),!1}vi.prototype.blur=function(){var t=x(this._fragmentFiber);t!==null&&(t=M(t),t=rl(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,OM,t,void 0,void 0))};function OM(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}vi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,PM,t,void 0,void 0)};function PM(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}vi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,zM,t,void 0,void 0);for(var a=n=0;a<Hi.length;a++){var s=Hi[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Hi[n++]=s}Hi.length=n}};function zM(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Hi=[],nd=!1;function IM(t,n,a){Hi.push({fragmentInstance:t,observer:n,instance:a}),nd||(nd=!0,qM(function(){nd=!1;var s=Hi;Hi=[];for(var u=0;u<s.length;u++){var f=s[u];f.observer.unobserve(f.instance)}}))}vi.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,BM,t,void 0,void 0),t};function BM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}vi.prototype.getRootNode=function(t){var n=x(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},vi.prototype.compareDocumentPosition=function(t){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,ed,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=s=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var f=S(this._fragmentFiber)?n.parentElement:s;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),T=u.compareDocumentPosition(t),P=_&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=s&&f&&_&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||f&&u===t||P||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!f&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||FM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function FM(t,n,a,s,u){var f=yn(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=x(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=F(a,f,et),n===null?n=!1:(g(n,!0,L,f,a),f=y,y=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===s)&&(n=F(s,f,et),n===null?n=!1:(g(n,!0,w,f,s),f=y,B=y=null,n=f!==null)),n):!1}function G0(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}vi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];g(this._fragmentFiber.child,!1,ed,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=E(this._fragmentFiber);if(s=a?s[1]||s[0]||x(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=M(s),G0(t,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var u=n[s];u.tag===6?(u=M(u),G0(u,a)):M(u).scrollIntoView(t),s+=a?-1:1}};function HM(t,n){return t=M(t),V0(t,n),!1}function V0(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function X0(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.addEventListener(u.type,u.attachedListener,Bs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var _=0,T=0;T<Hi.length;T++){var P=Hi[T];(P.fragmentInstance!==n||P.observer!==f||P.instance!==t)&&(Hi[_++]=P)}Hi.length=_,f.observe(t)}),V0(t,n))}function GM(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.removeEventListener(u.type,u.attachedListener,Bs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?IM(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function id(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":id(a),Ne(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function VM(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[te])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=wi(t.nextSibling),t===null)break}return null}function XM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=wi(t.nextSibling),t===null))return null;return t}function k0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=wi(t.nextSibling),t===null))return null;return t}function ad(t){return t.data==="$?"||t.data==="$~"}function rd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function kM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function wi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var sd=null;function Y0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return wi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function q0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function YM(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function qM(t){U0(function(){U0(function(n){return t(n)})})}function W0(t,n,a){switch(n=rl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function j0(t,n,a){for(var s in a){var u=a[s];a.hasOwnProperty(s)&&u!=null&&Ye(t,n,s,null,SM,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Wi&&(t.onclick=null),Ne(t)}function od(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ne(t)}var Di=new Map,Z0=new Set;function sl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ma=at.d;at.d={f:WM,r:jM,D:ZM,C:QM,L:KM,m:JM,X:tE,S:$M,M:eE};function WM(){var t=Ma.f(),n=Vu();return t||n}function jM(t){var n=li(t);n!==null&&n.tag===5&&n.type==="form"?Kg(n):Ma.r(t)}var Fs=typeof document>"u"?null:document;function Q0(t,n,a){var s=Fs;if(s&&typeof n=="string"&&n){var u=Mi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Z0.has(u)||(Z0.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Ln(n,"link",t),ge(n),s.head.appendChild(n)))}}function ZM(t){Ma.D(t),Q0("dns-prefetch",t,null)}function QM(t,n){Ma.C(t,n),Q0("preconnect",t,n)}function KM(t,n,a){Ma.L(t,n,a);var s=Fs;if(s&&t&&n){var u='link[rel="preload"][as="'+Mi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Mi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Mi(a.imageSizes)+'"]')):u+='[href="'+Mi(t)+'"]';var f=u;switch(n){case"style":f=Hs(t);break;case"script":f=Gs(t)}if(!(Di.has(f)||(t=O({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Di.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(ol(f))||n==="script"&&s.querySelector(ll(f))))){var _=s.createElement("link");Ln(_,"link",t),n==="style"&&(_[$n]=!0,_.onload=_.onerror=function(){ui(_)}),ge(_),s.head.appendChild(_)}}}function JM(t,n){Ma.m(t,n);var a=Fs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Mi(s)+'"][href="'+Mi(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Gs(t)}if(!Di.has(f)&&(t=O({rel:"modulepreload",href:t},n),Di.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ll(f)))return}s=a.createElement("link"),Ln(s,"link",t),ge(s),a.head.appendChild(s)}}}function $M(t,n,a){Ma.S(t,n,a);var s=Fs;if(s&&t){var u=Si(s).hoistableStyles,f=Hs(t);n=n||"default";var _=u.get(f);if(!_){var T={loading:0,preload:null};if(_=s.querySelector(ol(f)))T.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Di.get(f))&&ld(t,a);var P=_=s.createElement("link");ge(P),Ln(P,"link",t),P._p=new Promise(function(j,st){P.onload=j,P.onerror=st}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Zu(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:T},u.set(f,_)}}}function tE(t,n){Ma.X(t,n);var a=Fs;if(a&&t){var s=Si(a).hoistableScripts,u=Gs(t),f=s.get(u);f||(f=a.querySelector(ll(u)),f||(t=O({src:t,async:!0},n),(n=Di.get(u))&&ud(t,n),f=a.createElement("script"),ge(f),Ln(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function eE(t,n){Ma.M(t,n);var a=Fs;if(a&&t){var s=Si(a).hoistableScripts,u=Gs(t),f=s.get(u);f||(f=a.querySelector(ll(u)),f||(t=O({src:t,async:!0,type:"module"},n),(n=Di.get(u))&&ud(t,n),f=a.createElement("script"),ge(f),Ln(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function K0(t,n,a,s){var u=(u=U.current)?sl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Hs(a.href),n=Si(u).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Hs(a.href);var f=Si(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(ol(t)))?f._p||(_.instance=f,_.state.loading=5):(f=Di.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Di.set(t,f)),nE(u,t,f,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Gs(a),n=Si(u).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Hs(t){return'href="'+Mi(t)+'"'}function ol(t){return'link[rel="stylesheet"]['+t+"]"}function J0(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function nE(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[$n]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[$n]=!0,n.onload=n.onerror=ui.bind(null,n),Ln(n,"link",a),ge(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Gs(t){return'[src="'+Mi(t)+'"]'}function ll(t){return"script[async]"+t}function $0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Mi(a.href)+'"]');if(s)return n.instance=s,ge(s),s;var u=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),ge(s),Ln(s,"style",u),Zu(s,a.precedence,t),n.instance=s;case"stylesheet":u=Hs(a.href);var f=t.querySelector(ol(u));if(f)return n.state.loading|=4,n.instance=f,ge(f),f;s=J0(a),(u=Di.get(u))&&ld(s,u),f=(t.ownerDocument||t).createElement("link"),ge(f);var _=f;return _._p=new Promise(function(T,P){_.onload=T,_.onerror=P}),Ln(f,"link",s),n.state.loading|=4,Zu(f,a.precedence,t),n.instance=f;case"script":return f=Gs(a.src),(u=t.querySelector(ll(f)))?(n.instance=u,ge(u),u):(s=a,(u=Di.get(f))&&(s=O({},a),ud(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),ge(u),Ln(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Zu(s,a.precedence,t));return n.instance}function Zu(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,_=0;_<s.length;_++){var T=s[_];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ld(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Qu=null;function t_(t,n,a){if(Qu===null){var s=new Map,u=Qu=new Map;u.set(a,s)}else u=Qu,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[te]||f[ie]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var T=s.get(_);T?T.push(f):s.set(_,[f])}}return s}function cd(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function iE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function e_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function n_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function i_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function a_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=i_(n),t.suspenseyImages.push(n)),t=sE.bind(t),n.decode().then(t,t))}function aE(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Hs(s.href),f=n.querySelector(ol(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ul.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,ge(f);return}f=n.ownerDocument||n,s=J0(s),(u=Di.get(u))&&ld(s,u),f=f.createElement("link"),ge(f);var _=f;_._p=new Promise(function(T,P){_.onload=T,_.onerror=P}),Ln(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ul.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ku=0;function rE(t,n){return t.stylesheets&&t.count===0&&$u(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&$u(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Ku===0&&(Ku=62500*EM());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&$u(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Ku?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function r_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)$u(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function ul(){this.count--,r_(this)}function sE(){this.imgCount--,r_(this)}var Ju=null;function $u(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ju=new Map,n.forEach(oE,t),Ju=null,ul.call(t))}function oE(t,n){if(!(n.state.loading&4)){var a=Ju.get(t);if(a)var s=a.get(null);else{a=new Map,Ju.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,u),a.set(_,u),this.count++,s=ul.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Vs={$$typeof:ft,Provider:null,Consumer:null,_currentValue:Rt,_currentValue2:Rt,_threadCount:0};function lE(t,n,a,s,u,f,_,T,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yr(0),this.hiddenUpdates=yr(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.transitionTypes=null,this.incompleteTransitions=new Map}function s_(t,n,a,s,u,f,_,T,P,j,st,gt){return t=new lE(t,n,a,_,P,j,st,gt,T),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),t.current=f,f.stateNode=t,n=bf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},wf(f),t}function o_(t){return t?(t=ps,t):ps}function l_(t,n,a,s,u,f){u=o_(u),s.context===null?s.context=u:s.pendingContext=u,s=ka(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Ya(t,s,n),a!==null&&(ai(a,t,n),Ho(a,t,n))}function u_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function fd(t,n){u_(t,n),(t=t.alternate)&&u_(t,n)}function c_(t){if(t.tag===13||t.tag===31){var n=Er(t,67108864);n!==null&&ai(n,t,67108864),fd(t,67108864)}}function f_(t){if(t.tag===13||t.tag===31){var n=gi();n=Nt(n);var a=Er(t,n);a!==null&&ai(a,t,n),fd(t,n)}}var Xs=!0;function uE(t,n,a,s){var u=Mt.T;Mt.T=null;var f=at.p;try{at.p=2,hd(t,n,a,s)}finally{at.p=f,Mt.T=u}}function cE(t,n,a,s){var u=Mt.T;Mt.T=null;var f=at.p;try{at.p=8,hd(t,n,a,s)}finally{at.p=f,Mt.T=u}}function hd(t,n,a,s){if(Xs){var u=dd(s);if(u===null)Wh(t,n,s,tc,a),d_(t,s);else if(hE(u,t,n,a,s))s.stopPropagation();else if(d_(t,s),n&4&&-1<fE.indexOf(t)){for(;u!==null;){var f=li(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=en(f.pendingLanes);if(_!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var P=1<<31-xe(_);T.entanglements[1]|=P,_&=~P}ia(f),(Fe&6)===0&&(Fu=X()+500,nl(0))}}break;case 31:case 13:T=Er(f,2),T!==null&&ai(T,f,2),Vu(),fd(f,2)}if(f=dd(s),f===null&&Wh(t,n,s,tc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Wh(t,n,s,null,a)}}function dd(t){return t=Kc(t),pd(t)}var tc=null;function pd(t){if(tc=null,t=yn(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return tc=t,null}function h_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ht()){case ht:return 2;case yt:return 8;case Bt:case Vt:return 32;case fe:return 268435456;default:return 32}default:return 32}}var md=!1,ir=null,ar=null,rr=null,cl=new Map,fl=new Map,sr=[],fE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function d_(t,n){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":cl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(n.pointerId)}}function hl(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=li(n),n!==null&&c_(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function hE(t,n,a,s,u){switch(n){case"focusin":return ir=hl(ir,t,n,a,s,u),!0;case"dragenter":return ar=hl(ar,t,n,a,s,u),!0;case"mouseover":return rr=hl(rr,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return cl.set(f,hl(cl.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,fl.set(f,hl(fl.get(f)||null,t,n,a,s,u)),!0}return!1}function p_(t){var n=yn(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,ne(t.priority,function(){f_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,ne(t.priority,function(){f_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ec(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=dd(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Qc=s,a.target.dispatchEvent(s),Qc=null}else return n=li(a),n!==null&&c_(n),t.blockedOn=a,!1;n.shift()}return!0}function m_(t,n,a){ec(t)&&a.delete(n)}function dE(){md=!1,ir!==null&&ec(ir)&&(ir=null),ar!==null&&ec(ar)&&(ar=null),rr!==null&&ec(rr)&&(rr=null),cl.forEach(m_),fl.forEach(m_)}function nc(t,n){t.blockedOn===n&&(t.blockedOn=null,md||(md=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,dE)))}var ic=null;function g_(t){ic!==t&&(ic=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ic===t&&(ic=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(pd(s||a)===null)continue;break}var f=li(a);f!==null&&(t.splice(n,3),n-=3,Qf(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function ks(t){function n(P){return nc(P,t)}ir!==null&&nc(ir,t),ar!==null&&nc(ar,t),rr!==null&&nc(rr,t),cl.forEach(n),fl.forEach(n);for(var a=0;a<sr.length;a++){var s=sr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<sr.length&&(a=sr[0],a.blockedOn===null);)p_(a),a.blockedOn===null&&sr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],_=u[qt]||null;if(typeof f=="function")_||g_(a);else if(_){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[qt]||null)T=_.formAction;else if(pd(u)!==null)continue}else T=_.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),g_(a)}}}function v_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function gd(t){this._internalRoot=t}ac.prototype.render=gd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=gi();l_(a,s,t,n,null,null)},ac.prototype.unmount=gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;l_(t.current,2,null,t,null,null),Vu(),n[Te]=null}};function ac(t){this._internalRoot=t}ac.prototype.unstable_scheduleHydration=function(t){if(t){var n=ee();t={blockedOn:null,target:t,priority:n};for(var a=0;a<sr.length&&n!==0&&n<sr[a].priority;a++);sr.splice(a,0,t),a===0&&p_(t)}};var __=e.version;if(__!=="19.3.1")throw Error(r(527,__,"19.3.1"));at.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var pE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Mt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{Ae=rc.inject(pE),bt=rc}catch{}}return pl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=ov,f=lv,_=uv;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=s_(t,1,!1,null,null,a,s,null,u,f,_,v_),t[Te]=n.current,qh(t),new gd(n)},pl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=ov,_=lv,T=uv,P=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=s_(t,1,!0,n,a??null,s,u,P,f,_,T,v_),n.context=o_(null),a=n.current,s=gi(),s=Nt(s),u=ka(s),u.callback=null,Ya(a,u,s),a=s,n.current.lanes=a,R(n,a),ia(n),t[Te]=n.current,qh(t),new ac(n)},pl.version="19.3.1",pl}var C_;function bE(){if(C_)return xd.exports;C_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),xd.exports=TE(),xd.exports}var AE=bE();const Bc=["A","B","C","D","E","F","G","H","I"],RE=14,w_=[[1,2,3],[4,5,6,7,8,9,10,11],[12,13,14]],D_=new Set(["A1","A3","A4","B9","C6","C7","C8","C10","D1","D2","D5","D6","D8","D9","D14","E1","E2","E3","E4","E5","E8","F4","F5","F9","F10","G1","G2","G3","G4","G6","G9","G11","H4","H5","H6","H7","H8","H10","H14","I2","I5","I7","I11","I13"]),jr=1.24,lp=-4.9,Ed=-10.2,Td=3.45,N_=10.4,U_=3.85,Nc=[0,.16,.36,.6,.88,1.2,1.54,1.92,2.32],L_={B4:{zone:"UP CLOSE",distance:"6.3 m",fov:"86°",offset:"2.2 m",offsetDir:"left of centre"},F8:{zone:"SWEET SPOT",distance:"9.8 m",fov:"60°",offset:"0.3 m",offsetDir:"right of centre"},I12:{zone:"FULL PICTURE",distance:"13.3 m",fov:"45°",offset:"3.3 m",offsetDir:"right of centre"}};function O_(o,e){let r=(e-7.5)*.72;e<=3&&(r-=.58),e>=12&&(r+=.58);const l=o>=7?.22:0,c=lp+o*jr+l,h=Nc[o];return{x:r,y:h,z:c}}function P_(o,e){const i=Bc[o],r=`${i}${e}`,l=o>=7,c=l?"€16.00":"€12.50",h=l?"Recliner":"Standard";if(L_[r])return{key:r,rowIdx:o,rowLetter:i,seatNum:e,isRecliner:l,price:c,tier:h,...L_[r]};const d=(5.4+o*.95).toFixed(1),m=e-7.5;let v=Math.abs(m)*.58;e<=3&&(v+=.45),e>=12&&(v+=.45);const g=Math.round(2*Math.atan(8.8/(2*parseFloat(d)))*(180/Math.PI)*1.18);let x="BALANCED VIEW";o<=2?x="UP CLOSE":o>=7?x="FULL PICTURE":e>=5&&e<=10&&o>=3&&o<=5&&(x="SWEET SPOT");const S=Math.abs(m)<.25?"centre aligned":m<0?"left of centre":"right of centre";return{key:r,rowIdx:o,rowLetter:i,seatNum:e,isRecliner:l,price:c,tier:h,zone:x,distance:`${d} m`,fov:`${g}°`,offset:`${v.toFixed(1)} m`,offsetDir:S}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $p="170",CE=0,z_=1,wE=2,jx=1,DE=2,Ca=3,vr=0,si=1,wa=2,mr=0,ho=1,I_=2,B_=3,F_=4,NE=5,Kr=100,UE=101,LE=102,OE=103,PE=104,zE=200,IE=201,BE=202,FE=203,up=204,cp=205,HE=206,GE=207,VE=208,XE=209,kE=210,YE=211,qE=212,WE=213,jE=214,fp=0,hp=1,dp=2,go=3,pp=4,mp=5,gp=6,vp=7,Zx=0,ZE=1,QE=2,gr=0,KE=1,JE=2,$E=3,Qx=4,tT=5,eT=6,nT=7,Kx=300,vo=301,_o=302,_p=303,xp=304,Vc=306,yp=1e3,$r=1001,Sp=1002,yi=1003,iT=1004,sc=1005,Li=1006,bd=1007,ts=1008,La=1009,Jx=1010,$x=1011,Dl=1012,tm=1013,es=1014,sa=1015,Pl=1016,em=1017,nm=1018,xo=1020,ty=35902,ey=1021,ny=1022,Yi=1023,iy=1024,ay=1025,po=1026,yo=1027,im=1028,am=1029,ry=1030,rm=1031,sm=1033,Uc=33776,Lc=33777,Oc=33778,Pc=33779,Mp=35840,Ep=35841,Tp=35842,bp=35843,Ap=36196,Rp=37492,Cp=37496,wp=37808,Dp=37809,Np=37810,Up=37811,Lp=37812,Op=37813,Pp=37814,zp=37815,Ip=37816,Bp=37817,Fp=37818,Hp=37819,Gp=37820,Vp=37821,zc=36492,Xp=36494,kp=36495,sy=36283,Yp=36284,qp=36285,Wp=36286,aT=3200,rT=3201,oy=0,sT=1,pr="",ri="srgb",Mo="srgb-linear",Xc="linear",je="srgb",Ys=7680,H_=519,oT=512,lT=513,uT=514,ly=515,cT=516,fT=517,hT=518,dT=519,G_=35044,V_="300 es",Da=2e3,Fc=2001;class Eo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let X_=1234567;const Tl=Math.PI/180,Nl=180/Math.PI;function as(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Vn[o&255]+Vn[o>>8&255]+Vn[o>>16&255]+Vn[o>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[i&63|128]+Vn[i>>8&255]+"-"+Vn[i>>16&255]+Vn[i>>24&255]+Vn[r&255]+Vn[r>>8&255]+Vn[r>>16&255]+Vn[r>>24&255]).toLowerCase()}function Pn(o,e,i){return Math.max(e,Math.min(i,o))}function om(o,e){return(o%e+e)%e}function pT(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function mT(o,e,i){return o!==e?(i-o)/(e-o):0}function bl(o,e,i){return(1-i)*o+i*e}function gT(o,e,i,r){return bl(o,e,1-Math.exp(-i*r))}function vT(o,e=1){return e-Math.abs(om(o,e*2)-e)}function _T(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function xT(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function yT(o,e){return o+Math.floor(Math.random()*(e-o+1))}function ST(o,e){return o+Math.random()*(e-o)}function MT(o){return o*(.5-Math.random())}function ET(o){o!==void 0&&(X_=o);let e=X_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function TT(o){return o*Tl}function bT(o){return o*Nl}function AT(o){return(o&o-1)===0&&o!==0}function RT(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function CT(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function wT(o,e,i,r,l){const c=Math.cos,h=Math.sin,d=c(i/2),p=h(i/2),m=c((e+r)/2),v=h((e+r)/2),g=c((e-r)/2),x=h((e-r)/2),S=c((r-e)/2),E=h((r-e)/2);switch(l){case"XYX":o.set(d*v,p*g,p*x,d*m);break;case"YZY":o.set(p*x,d*v,p*g,d*m);break;case"ZXZ":o.set(p*g,p*x,d*v,d*m);break;case"XZX":o.set(d*v,p*E,p*S,d*m);break;case"YXY":o.set(p*S,d*v,p*E,d*m);break;case"ZYZ":o.set(p*E,p*S,d*v,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function lo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Kn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const qs={DEG2RAD:Tl,RAD2DEG:Nl,generateUUID:as,clamp:Pn,euclideanModulo:om,mapLinear:pT,inverseLerp:mT,lerp:bl,damp:gT,pingpong:vT,smoothstep:_T,smootherstep:xT,randInt:yT,randFloat:ST,randFloatSpread:MT,seededRandom:ET,degToRad:TT,radToDeg:bT,isPowerOfTwo:AT,ceilPowerOfTwo:RT,floorPowerOfTwo:CT,setQuaternionFromProperEuler:wT,normalize:Kn,denormalize:lo};class Wt{constructor(e=0,i=0){Wt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ye{constructor(e,i,r,l,c,h,d,p,m){ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,p,m)}set(e,i,r,l,c,h,d,p,m){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=p,v[6]=r,v[7]=h,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],v=r[4],g=r[7],x=r[2],S=r[5],E=r[8],C=l[0],M=l[3],y=l[6],B=l[1],L=l[4],w=l[7],et=l[2],F=l[5],O=l[8];return c[0]=h*C+d*B+p*et,c[3]=h*M+d*L+p*F,c[6]=h*y+d*w+p*O,c[1]=m*C+v*B+g*et,c[4]=m*M+v*L+g*F,c[7]=m*y+v*w+g*O,c[2]=x*C+S*B+E*et,c[5]=x*M+S*L+E*F,c[8]=x*y+S*w+E*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return i*h*v-i*d*m-r*c*v+r*d*p+l*c*m-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],v=e[8],g=v*h-d*m,x=d*p-v*c,S=m*c-h*p,E=i*g+r*x+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=g*C,e[1]=(l*m-v*r)*C,e[2]=(d*r-l*h)*C,e[3]=x*C,e[4]=(v*i-l*p)*C,e[5]=(l*c-d*i)*C,e[6]=S*C,e[7]=(r*p-m*i)*C,e[8]=(h*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Ad.makeScale(e,i)),this}rotate(e){return this.premultiply(Ad.makeRotation(-e)),this}translate(e,i){return this.premultiply(Ad.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ad=new ye;function uy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Hc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function DT(){const o=Hc("canvas");return o.style.display="block",o}const k_={};function Sl(o){o in k_||(k_[o]=!0,console.warn(o))}function NT(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function UT(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function LT(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Oe={enabled:!0,workingColorSpace:Mo,spaces:{},convert:function(o,e,i){return this.enabled===!1||e===i||!e||!i||(this.spaces[e].transfer===je&&(o.r=Ua(o.r),o.g=Ua(o.g),o.b=Ua(o.b)),this.spaces[e].primaries!==this.spaces[i].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===je&&(o.r=mo(o.r),o.g=mo(o.g),o.b=mo(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===pr?Xc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,i){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function Ua(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function mo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Y_=[.64,.33,.3,.6,.15,.06],q_=[.2126,.7152,.0722],W_=[.3127,.329],j_=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Z_=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Oe.define({[Mo]:{primaries:Y_,whitePoint:W_,transfer:Xc,toXYZ:j_,fromXYZ:Z_,luminanceCoefficients:q_,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:Y_,whitePoint:W_,transfer:je,toXYZ:j_,fromXYZ:Z_,luminanceCoefficients:q_,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}});let Ws;class OT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ws===void 0&&(Ws=Hc("canvas")),Ws.width=e.width,Ws.height=e.height;const r=Ws.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ws}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Hc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ua(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ua(i[r]/255)*255):i[r]=Ua(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PT=0;class cy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PT++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Rd(l[h].image)):c.push(Rd(l[h]))}else c=Rd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Rd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?OT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zT=0;class kn extends Eo{constructor(e=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,r=$r,l=$r,c=Li,h=ts,d=Yi,p=La,m=kn.DEFAULT_ANISOTROPY,v=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=as(),this.name="",this.source=new cy(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yp:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case Sp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yp:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case Sp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Kx;kn.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,i=0,r=0,l=1){cn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const p=e.elements,m=p[0],v=p[4],g=p[8],x=p[1],S=p[5],E=p[9],C=p[2],M=p[6],y=p[10];if(Math.abs(v-x)<.01&&Math.abs(g-C)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+C)<.1&&Math.abs(E+M)<.1&&Math.abs(m+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,w=(S+1)/2,et=(y+1)/2,F=(v+x)/4,O=(g+C)/4,H=(E+M)/4;return L>w&&L>et?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=F/r,c=O/r):w>et?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=F/l,c=H/l):et<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(et),r=O/c,l=H/c),this.set(r,l,c,i),this}let B=Math.sqrt((M-E)*(M-E)+(g-C)*(g-C)+(x-v)*(x-v));return Math.abs(B)<.001&&(B=1),this.x=(M-E)/B,this.y=(g-C)/B,this.z=(x-v)/B,this.w=Math.acos((m+S+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IT extends Eo{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new cn(0,0,e,i),this.scissorTest=!1,this.viewport=new cn(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new kn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new cy(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends IT{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class fy extends kn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BT extends kn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let p=r[l+0],m=r[l+1],v=r[l+2],g=r[l+3];const x=c[h+0],S=c[h+1],E=c[h+2],C=c[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=v,e[i+3]=g;return}if(d===1){e[i+0]=x,e[i+1]=S,e[i+2]=E,e[i+3]=C;return}if(g!==C||p!==x||m!==S||v!==E){let M=1-d;const y=p*x+m*S+v*E+g*C,B=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const et=Math.sqrt(L),F=Math.atan2(et,y*B);M=Math.sin(M*F)/et,d=Math.sin(d*F)/et}const w=d*B;if(p=p*M+x*w,m=m*M+S*w,v=v*M+E*w,g=g*M+C*w,M===1-d){const et=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=et,m*=et,v*=et,g*=et}}e[i]=p,e[i+1]=m,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],p=r[l+1],m=r[l+2],v=r[l+3],g=c[h],x=c[h+1],S=c[h+2],E=c[h+3];return e[i]=d*E+v*g+p*S-m*x,e[i+1]=p*E+v*x+m*g-d*S,e[i+2]=m*E+v*S+d*x-p*g,e[i+3]=v*E-d*g-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(l/2),g=d(c/2),x=p(r/2),S=p(l/2),E=p(c/2);switch(h){case"XYZ":this._x=x*v*g+m*S*E,this._y=m*S*g-x*v*E,this._z=m*v*E+x*S*g,this._w=m*v*g-x*S*E;break;case"YXZ":this._x=x*v*g+m*S*E,this._y=m*S*g-x*v*E,this._z=m*v*E-x*S*g,this._w=m*v*g+x*S*E;break;case"ZXY":this._x=x*v*g-m*S*E,this._y=m*S*g+x*v*E,this._z=m*v*E+x*S*g,this._w=m*v*g-x*S*E;break;case"ZYX":this._x=x*v*g-m*S*E,this._y=m*S*g+x*v*E,this._z=m*v*E-x*S*g,this._w=m*v*g+x*S*E;break;case"YZX":this._x=x*v*g+m*S*E,this._y=m*S*g+x*v*E,this._z=m*v*E-x*S*g,this._w=m*v*g-x*S*E;break;case"XZY":this._x=x*v*g-m*S*E,this._y=m*S*g-x*v*E,this._z=m*v*E+x*S*g,this._w=m*v*g+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],v=i[6],g=i[10],x=r+d+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-p)*S,this._y=(c-m)*S,this._z=(h-l)*S}else if(r>d&&r>g){const S=2*Math.sqrt(1+r-d-g);this._w=(v-p)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+m)/S}else if(d>g){const S=2*Math.sqrt(1+d-r-g);this._w=(c-m)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+g-r-d);this._w=(h-l)/S,this._x=(c+m)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,p=i._y,m=i._z,v=i._w;return this._x=r*v+h*d+l*m-c*p,this._y=l*v+h*p+c*d-r*m,this._z=c*v+h*m+r*p-l*d,this._w=h*v-r*d-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),g=Math.sin((1-i)*v)/m,x=Math.sin(i*v)/m;return this._w=h*g+this._w*x,this._x=r*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(e=0,i=0,r=0){tt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Q_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Q_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*r),v=2*(d*i-c*l),g=2*(c*r-h*i);return this.x=i+p*m+h*g-d*v,this.y=r+p*v+d*m-c*g,this.z=l+p*g+c*v-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Cd.copy(this).projectOnVector(e),this.sub(Cd)}reflect(e){return this.sub(Cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cd=new tt,Q_=new zl;class rs{constructor(e=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Gi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Gi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Gi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Gi):Gi.fromBufferAttribute(c,h),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),oc.copy(r.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ml),lc.subVectors(this.max,ml),js.subVectors(e.a,ml),Zs.subVectors(e.b,ml),Qs.subVectors(e.c,ml),lr.subVectors(Zs,js),ur.subVectors(Qs,Zs),Gr.subVectors(js,Qs);let i=[0,-lr.z,lr.y,0,-ur.z,ur.y,0,-Gr.z,Gr.y,lr.z,0,-lr.x,ur.z,0,-ur.x,Gr.z,0,-Gr.x,-lr.y,lr.x,0,-ur.y,ur.x,0,-Gr.y,Gr.x,0];return!wd(i,js,Zs,Qs,lc)||(i=[1,0,0,0,1,0,0,0,1],!wd(i,js,Zs,Qs,lc))?!1:(uc.crossVectors(lr,ur),i=[uc.x,uc.y,uc.z],wd(i,js,Zs,Qs,lc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ea),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ea=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Gi=new tt,oc=new rs,js=new tt,Zs=new tt,Qs=new tt,lr=new tt,ur=new tt,Gr=new tt,ml=new tt,lc=new tt,uc=new tt,Vr=new tt;function wd(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){Vr.fromArray(o,c);const d=l.x*Math.abs(Vr.x)+l.y*Math.abs(Vr.y)+l.z*Math.abs(Vr.z),p=e.dot(Vr),m=i.dot(Vr),v=r.dot(Vr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const FT=new rs,gl=new tt,Dd=new tt;class Il{constructor(e=new tt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):FT.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gl.subVectors(e,this.center);const i=gl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(gl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gl.copy(e.center).add(Dd)),this.expandByPoint(gl.copy(e.center).sub(Dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ta=new tt,Nd=new tt,cc=new tt,cr=new tt,Ud=new tt,fc=new tt,Ld=new tt;class HT{constructor(e=new tt,i=new tt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ta.copy(this.origin).addScaledVector(this.direction,i),Ta.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Nd.copy(e).add(i).multiplyScalar(.5),cc.copy(i).sub(e).normalize(),cr.copy(this.origin).sub(Nd);const c=e.distanceTo(i)*.5,h=-this.direction.dot(cc),d=cr.dot(this.direction),p=-cr.dot(cc),m=cr.lengthSq(),v=Math.abs(1-h*h);let g,x,S,E;if(v>0)if(g=h*p-d,x=h*d-p,E=c*v,g>=0)if(x>=-E)if(x<=E){const C=1/v;g*=C,x*=C,S=g*(g+h*x+2*d)+x*(h*g+x+2*p)+m}else x=c,g=Math.max(0,-(h*x+d)),S=-g*g+x*(x+2*p)+m;else x=-c,g=Math.max(0,-(h*x+d)),S=-g*g+x*(x+2*p)+m;else x<=-E?(g=Math.max(0,-(-h*c+d)),x=g>0?-c:Math.min(Math.max(-c,-p),c),S=-g*g+x*(x+2*p)+m):x<=E?(g=0,x=Math.min(Math.max(-c,-p),c),S=x*(x+2*p)+m):(g=Math.max(0,-(h*c+d)),x=g>0?c:Math.min(Math.max(-c,-p),c),S=-g*g+x*(x+2*p)+m);else x=h>0?-c:c,g=Math.max(0,-(h*x+d)),S=-g*g+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Nd).addScaledVector(cc,x),S}intersectSphere(e,i){Ta.subVectors(e.center,this.origin);const r=Ta.dot(this.direction),l=Ta.dot(Ta)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),v>=0?(c=(e.min.y-x.y)*v,h=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,h=(e.min.y-x.y)*v),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-x.z)*g,p=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,p=(e.min.z-x.z)*g),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ta)!==null}intersectTriangle(e,i,r,l,c){Ud.subVectors(i,e),fc.subVectors(r,e),Ld.crossVectors(Ud,fc);let h=this.direction.dot(Ld),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;cr.subVectors(this.origin,e);const p=d*this.direction.dot(fc.crossVectors(cr,fc));if(p<0)return null;const m=d*this.direction.dot(Ud.cross(cr));if(m<0||p+m>h)return null;const v=-d*cr.dot(Ld);return v<0?null:this.at(v/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,i,r,l,c,h,d,p,m,v,g,x,S,E,C,M){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,p,m,v,g,x,S,E,C,M)}set(e,i,r,l,c,h,d,p,m,v,g,x,S,E,C,M){const y=this.elements;return y[0]=e,y[4]=i,y[8]=r,y[12]=l,y[1]=c,y[5]=h,y[9]=d,y[13]=p,y[2]=m,y[6]=v,y[10]=g,y[14]=x,y[3]=S,y[7]=E,y[11]=C,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Ks.setFromMatrixColumn(e,0).length(),c=1/Ks.setFromMatrixColumn(e,1).length(),h=1/Ks.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const x=h*v,S=h*g,E=d*v,C=d*g;i[0]=p*v,i[4]=-p*g,i[8]=m,i[1]=S+E*m,i[5]=x-C*m,i[9]=-d*p,i[2]=C-x*m,i[6]=E+S*m,i[10]=h*p}else if(e.order==="YXZ"){const x=p*v,S=p*g,E=m*v,C=m*g;i[0]=x+C*d,i[4]=E*d-S,i[8]=h*m,i[1]=h*g,i[5]=h*v,i[9]=-d,i[2]=S*d-E,i[6]=C+x*d,i[10]=h*p}else if(e.order==="ZXY"){const x=p*v,S=p*g,E=m*v,C=m*g;i[0]=x-C*d,i[4]=-h*g,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*v,i[9]=C-x*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const x=h*v,S=h*g,E=d*v,C=d*g;i[0]=p*v,i[4]=E*m-S,i[8]=x*m+C,i[1]=p*g,i[5]=C*m+x,i[9]=S*m-E,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const x=h*p,S=h*m,E=d*p,C=d*m;i[0]=p*v,i[4]=C-x*g,i[8]=E*g+S,i[1]=g,i[5]=h*v,i[9]=-d*v,i[2]=-m*v,i[6]=S*g+E,i[10]=x-C*g}else if(e.order==="XZY"){const x=h*p,S=h*m,E=d*p,C=d*m;i[0]=p*v,i[4]=-g,i[8]=m*v,i[1]=x*g+C,i[5]=h*v,i[9]=S*g-E,i[2]=E*g-S,i[6]=d*v,i[10]=C*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GT,e,VT)}lookAt(e,i,r){const l=this.elements;return _i.subVectors(e,i),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),fr.crossVectors(r,_i),fr.lengthSq()===0&&(Math.abs(r.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),fr.crossVectors(r,_i)),fr.normalize(),hc.crossVectors(_i,fr),l[0]=fr.x,l[4]=hc.x,l[8]=_i.x,l[1]=fr.y,l[5]=hc.y,l[9]=_i.y,l[2]=fr.z,l[6]=hc.z,l[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],v=r[1],g=r[5],x=r[9],S=r[13],E=r[2],C=r[6],M=r[10],y=r[14],B=r[3],L=r[7],w=r[11],et=r[15],F=l[0],O=l[4],H=l[8],N=l[12],A=l[1],I=l[5],nt=l[9],K=l[13],ct=l[2],ft=l[6],V=l[10],rt=l[14],W=l[3],St=l[7],At=l[11],Ft=l[15];return c[0]=h*F+d*A+p*ct+m*W,c[4]=h*O+d*I+p*ft+m*St,c[8]=h*H+d*nt+p*V+m*At,c[12]=h*N+d*K+p*rt+m*Ft,c[1]=v*F+g*A+x*ct+S*W,c[5]=v*O+g*I+x*ft+S*St,c[9]=v*H+g*nt+x*V+S*At,c[13]=v*N+g*K+x*rt+S*Ft,c[2]=E*F+C*A+M*ct+y*W,c[6]=E*O+C*I+M*ft+y*St,c[10]=E*H+C*nt+M*V+y*At,c[14]=E*N+C*K+M*rt+y*Ft,c[3]=B*F+L*A+w*ct+et*W,c[7]=B*O+L*I+w*ft+et*St,c[11]=B*H+L*nt+w*V+et*At,c[15]=B*N+L*K+w*rt+et*Ft,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],p=e[9],m=e[13],v=e[2],g=e[6],x=e[10],S=e[14],E=e[3],C=e[7],M=e[11],y=e[15];return E*(+c*p*g-l*m*g-c*d*x+r*m*x+l*d*S-r*p*S)+C*(+i*p*S-i*m*x+c*h*x-l*h*S+l*m*v-c*p*v)+M*(+i*m*g-i*d*S-c*h*g+r*h*S+c*d*v-r*m*v)+y*(-l*d*v-i*p*g+i*d*x+l*h*g-r*h*x+r*p*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],v=e[8],g=e[9],x=e[10],S=e[11],E=e[12],C=e[13],M=e[14],y=e[15],B=g*M*m-C*x*m+C*p*S-d*M*S-g*p*y+d*x*y,L=E*x*m-v*M*m-E*p*S+h*M*S+v*p*y-h*x*y,w=v*C*m-E*g*m+E*d*S-h*C*S-v*d*y+h*g*y,et=E*g*p-v*C*p-E*d*x+h*C*x+v*d*M-h*g*M,F=i*B+r*L+l*w+c*et;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=B*O,e[1]=(C*x*c-g*M*c-C*l*S+r*M*S+g*l*y-r*x*y)*O,e[2]=(d*M*c-C*p*c+C*l*m-r*M*m-d*l*y+r*p*y)*O,e[3]=(g*p*c-d*x*c-g*l*m+r*x*m+d*l*S-r*p*S)*O,e[4]=L*O,e[5]=(v*M*c-E*x*c+E*l*S-i*M*S-v*l*y+i*x*y)*O,e[6]=(E*p*c-h*M*c-E*l*m+i*M*m+h*l*y-i*p*y)*O,e[7]=(h*x*c-v*p*c+v*l*m-i*x*m-h*l*S+i*p*S)*O,e[8]=w*O,e[9]=(E*g*c-v*C*c-E*r*S+i*C*S+v*r*y-i*g*y)*O,e[10]=(h*C*c-E*d*c+E*r*m-i*C*m-h*r*y+i*d*y)*O,e[11]=(v*d*c-h*g*c-v*r*m+i*g*m+h*r*S-i*d*S)*O,e[12]=et*O,e[13]=(v*C*l-E*g*l+E*r*x-i*C*x-v*r*M+i*g*M)*O,e[14]=(E*d*l-h*C*l-E*r*p+i*C*p+h*r*M-i*d*M)*O,e[15]=(h*g*l-v*d*l+v*r*p-i*g*p-h*r*x+i*d*x)*O,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,p=e.z,m=c*h,v=c*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,v*d+r,v*p-l*h,0,m*p-l*d,v*p+l*h,c*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,v=h+h,g=d+d,x=c*m,S=c*v,E=c*g,C=h*v,M=h*g,y=d*g,B=p*m,L=p*v,w=p*g,et=r.x,F=r.y,O=r.z;return l[0]=(1-(C+y))*et,l[1]=(S+w)*et,l[2]=(E-L)*et,l[3]=0,l[4]=(S-w)*F,l[5]=(1-(x+y))*F,l[6]=(M+B)*F,l[7]=0,l[8]=(E+L)*O,l[9]=(M-B)*O,l[10]=(1-(x+C))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=Ks.set(l[0],l[1],l[2]).length();const h=Ks.set(l[4],l[5],l[6]).length(),d=Ks.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Vi.copy(this);const m=1/c,v=1/h,g=1/d;return Vi.elements[0]*=m,Vi.elements[1]*=m,Vi.elements[2]*=m,Vi.elements[4]*=v,Vi.elements[5]*=v,Vi.elements[6]*=v,Vi.elements[8]*=g,Vi.elements[9]*=g,Vi.elements[10]*=g,i.setFromRotationMatrix(Vi),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Da){const p=this.elements,m=2*c/(i-e),v=2*c/(r-l),g=(i+e)/(i-e),x=(r+l)/(r-l);let S,E;if(d===Da)S=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===Fc)S=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Da){const p=this.elements,m=1/(i-e),v=1/(r-l),g=1/(h-c),x=(i+e)*m,S=(r+l)*v;let E,C;if(d===Da)E=(h+c)*g,C=-2*g;else if(d===Fc)E=c*g,C=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=C,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Ks=new tt,Vi=new Ke,GT=new tt(0,0,0),VT=new tt(1,1,1),fr=new tt,hc=new tt,_i=new tt,K_=new Ke,J_=new zl;class oa{constructor(e=0,i=0,r=0,l=oa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],v=l[9],g=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Pn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Pn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return K_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(K_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return J_.setFromEuler(this),this.setFromQuaternion(J_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oa.DEFAULT_ORDER="XYZ";class hy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let XT=0;const $_=new tt,Js=new zl,ba=new Ke,dc=new tt,vl=new tt,kT=new tt,YT=new zl,tx=new tt(1,0,0),ex=new tt(0,1,0),nx=new tt(0,0,1),ix={type:"added"},qT={type:"removed"},$s={type:"childadded",child:null},Od={type:"childremoved",child:null};class zn extends Eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new tt,i=new oa,r=new zl,l=new tt(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new ye}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Js.setFromAxisAngle(e,i),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,i){return Js.setFromAxisAngle(e,i),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(tx,e)}rotateY(e){return this.rotateOnAxis(ex,e)}rotateZ(e){return this.rotateOnAxis(nx,e)}translateOnAxis(e,i){return $_.copy(e).applyQuaternion(this.quaternion),this.position.add($_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(tx,e)}translateY(e){return this.translateOnAxis(ex,e)}translateZ(e){return this.translateOnAxis(nx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?dc.copy(e):dc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(vl,dc,this.up):ba.lookAt(dc,vl,this.up),this.quaternion.setFromRotationMatrix(ba),l&&(ba.extractRotation(l.matrixWorld),Js.setFromRotationMatrix(ba),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ix),$s.child=e,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(qT),Od.child=e,this.dispatchEvent(Od),Od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ba.multiply(e.parent.matrixWorld)),e.applyMatrix4(ba),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ix),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,e,kT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,YT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];c(e.shapes,g)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),v=h(e.images),g=h(e.shapes),x=h(e.skeletons),S=h(e.animations),E=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}zn.DEFAULT_UP=new tt(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xi=new tt,Aa=new tt,Pd=new tt,Ra=new tt,to=new tt,eo=new tt,ax=new tt,zd=new tt,Id=new tt,Bd=new tt,Fd=new cn,Hd=new cn,Gd=new cn;class ki{constructor(e=new tt,i=new tt,r=new tt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Xi.subVectors(e,i),l.cross(Xi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Xi.subVectors(l,i),Aa.subVectors(r,i),Pd.subVectors(e,i);const h=Xi.dot(Xi),d=Xi.dot(Aa),p=Xi.dot(Pd),m=Aa.dot(Aa),v=Aa.dot(Pd),g=h*m-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,S=(m*p-d*v)*x,E=(h*v-d*p)*x;return c.set(1-S-E,E,S)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(e,i,r,l,c,h,d,p){return this.getBarycoord(e,i,r,l,Ra)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ra.x),p.addScaledVector(h,Ra.y),p.addScaledVector(d,Ra.z),p)}static getInterpolatedAttribute(e,i,r,l,c,h){return Fd.setScalar(0),Hd.setScalar(0),Gd.setScalar(0),Fd.fromBufferAttribute(e,i),Hd.fromBufferAttribute(e,r),Gd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Fd,c.x),h.addScaledVector(Hd,c.y),h.addScaledVector(Gd,c.z),h}static isFrontFacing(e,i,r,l){return Xi.subVectors(r,i),Aa.subVectors(e,i),Xi.cross(Aa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xi.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Xi.cross(Aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ki.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return ki.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;to.subVectors(l,r),eo.subVectors(c,r),zd.subVectors(e,r);const p=to.dot(zd),m=eo.dot(zd);if(p<=0&&m<=0)return i.copy(r);Id.subVectors(e,l);const v=to.dot(Id),g=eo.dot(Id);if(v>=0&&g<=v)return i.copy(l);const x=p*g-v*m;if(x<=0&&p>=0&&v<=0)return h=p/(p-v),i.copy(r).addScaledVector(to,h);Bd.subVectors(e,c);const S=to.dot(Bd),E=eo.dot(Bd);if(E>=0&&S<=E)return i.copy(c);const C=S*m-p*E;if(C<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(r).addScaledVector(eo,d);const M=v*E-S*g;if(M<=0&&g-v>=0&&S-E>=0)return ax.subVectors(c,l),d=(g-v)/(g-v+(S-E)),i.copy(l).addScaledVector(ax,d);const y=1/(M+C+x);return h=C*y,d=x*y,i.copy(r).addScaledVector(to,h).addScaledVector(eo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Vd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ie{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Oe.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Oe.workingColorSpace){return this.r=e,this.g=i,this.b=r,Oe.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Oe.workingColorSpace){if(e=om(e,1),i=Pn(i,0,1),r=Pn(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Vd(h,c,e+1/3),this.g=Vd(h,c,e),this.b=Vd(h,c,e-1/3)}return Oe.toWorkingColorSpace(this,l),this}setStyle(e,i=ri){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ri){const r=dy[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Oe.fromWorkingColorSpace(Xn.copy(this),e),Math.round(Pn(Xn.r*255,0,255))*65536+Math.round(Pn(Xn.g*255,0,255))*256+Math.round(Pn(Xn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Oe.workingColorSpace){Oe.fromWorkingColorSpace(Xn.copy(this),i);const r=Xn.r,l=Xn.g,c=Xn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let p,m;const v=(d+h)/2;if(d===h)p=0,m=0;else{const g=h-d;switch(m=v<=.5?g/(h+d):g/(2-h-d),h){case r:p=(l-c)/g+(l<c?6:0);break;case l:p=(c-r)/g+2;break;case c:p=(r-l)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,i=Oe.workingColorSpace){return Oe.fromWorkingColorSpace(Xn.copy(this),i),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=ri){Oe.fromWorkingColorSpace(Xn.copy(this),e);const i=Xn.r,r=Xn.g,l=Xn.b;return e!==ri?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+i,hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(hr),e.getHSL(pc);const r=bl(hr.h,pc.h,i),l=bl(hr.s,pc.s,i),c=bl(hr.l,pc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new Ie;Ie.NAMES=dy;let WT=0;class Bl extends Eo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WT++}),this.uuid=as(),this.name="",this.blending=ho,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=up,this.blendDst=cp,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(r.blending=this.blending),this.side!==vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==up&&(r.blendSrc=this.blendSrc),this.blendDst!==cp&&(r.blendDst=this.blendDst),this.blendEquation!==Kr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==H_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class uo extends Bl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=Zx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xn=new tt,mc=new Wt;class qi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=G_,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)mc.fromBufferAttribute(this,i),mc.applyMatrix3(e),this.setXY(i,mc.x,mc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=lo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Kn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=lo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=lo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=lo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=lo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array),l=Kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array),l=Kn(l,this.array),c=Kn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==G_&&(e.usage=this.usage),e}}class py extends qi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class my extends qi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Oi extends qi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let jT=0;const Ni=new Ke,Xd=new zn,no=new tt,xi=new rs,_l=new rs,Cn=new tt;class Oa extends Eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jT++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uy(e)?my:py)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ye().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,i,r){return Ni.makeTranslation(e,i,r),this.applyMatrix4(Ni),this}scale(e,i,r){return Ni.makeScale(e,i,r),this.applyMatrix4(Ni),this}lookAt(e){return Xd.lookAt(e),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Oi(r,3))}else{for(let r=0,l=i.count;r<l;r++){const c=e[r];i.setXYZ(r,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];xi.setFromBufferAttribute(c),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Il);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(e){const r=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];_l.setFromBufferAttribute(d),this.morphTargetsRelative?(Cn.addVectors(xi.min,_l.min),xi.expandByPoint(Cn),Cn.addVectors(xi.max,_l.max),xi.expandByPoint(Cn)):(xi.expandByPoint(_l.min),xi.expandByPoint(_l.max))}xi.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)Cn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Cn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)Cn.fromBufferAttribute(d,m),p&&(no.fromBufferAttribute(e,m),Cn.add(no)),l=Math.max(l,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let H=0;H<r.count;H++)d[H]=new tt,p[H]=new tt;const m=new tt,v=new tt,g=new tt,x=new Wt,S=new Wt,E=new Wt,C=new tt,M=new tt;function y(H,N,A){m.fromBufferAttribute(r,H),v.fromBufferAttribute(r,N),g.fromBufferAttribute(r,A),x.fromBufferAttribute(c,H),S.fromBufferAttribute(c,N),E.fromBufferAttribute(c,A),v.sub(m),g.sub(m),S.sub(x),E.sub(x);const I=1/(S.x*E.y-E.x*S.y);isFinite(I)&&(C.copy(v).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(I),M.copy(g).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(I),d[H].add(C),d[N].add(C),d[A].add(C),p[H].add(M),p[N].add(M),p[A].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let H=0,N=B.length;H<N;++H){const A=B[H],I=A.start,nt=A.count;for(let K=I,ct=I+nt;K<ct;K+=3)y(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const L=new tt,w=new tt,et=new tt,F=new tt;function O(H){et.fromBufferAttribute(l,H),F.copy(et);const N=d[H];L.copy(N),L.sub(et.multiplyScalar(et.dot(N))).normalize(),w.crossVectors(F,N);const I=w.dot(p[H])<0?-1:1;h.setXYZW(H,L.x,L.y,L.z,I)}for(let H=0,N=B.length;H<N;++H){const A=B[H],I=A.start,nt=A.count;for(let K=I,ct=I+nt;K<ct;K+=3)O(e.getX(K+0)),O(e.getX(K+1)),O(e.getX(K+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new qi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const l=new tt,c=new tt,h=new tt,d=new tt,p=new tt,m=new tt,v=new tt,g=new tt;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),C=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,M),d.add(v),p.add(v),m.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Cn.fromBufferAttribute(e,i),Cn.normalize(),e.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,g=d.normalized,x=new m.constructor(p.length*v);let S=0,E=0;for(let C=0,M=p.length;C<M;C++){d.isInterleavedBufferAttribute?S=p[C]*d.data.stride+d.offset:S=p[C]*v;for(let y=0;y<v;y++)x[E++]=m[S++]}return new qi(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Oa,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,r);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let v=0,g=m.length;v<g;v++){const x=m[v],S=e(x,r);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,x=m.length;g<x;g++){const S=m[g];v.push(S.toJSON(e.data))}v.length>0&&(l[p]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const c=e.morphAttributes;for(const m in c){const v=[],g=c[m];for(let x=0,S=g.length;x<S;x++)v.push(g[x].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,v=h.length;m<v;m++){const g=h[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rx=new Ke,Xr=new HT,gc=new Il,sx=new tt,vc=new tt,_c=new tt,xc=new tt,kd=new tt,yc=new tt,ox=new tt,Sc=new tt;class un extends zn{constructor(e=new Oa,i=new uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){yc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=d[p],g=c[p];v!==0&&(kd.fromBufferAttribute(g,e),h?yc.addScaledVector(kd,v):yc.addScaledVector(kd.sub(i),v))}i.add(yc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(c),Xr.copy(e.ray).recast(e.near),!(gc.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(gc,sx)===null||Xr.origin.distanceToSquared(sx)>(e.far-e.near)**2))&&(rx.copy(c).invert(),Xr.copy(e.ray).applyMatrix4(rx),!(r.boundingBox!==null&&Xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Xr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,C=x.length;E<C;E++){const M=x[E],y=h[M.materialIndex],B=Math.max(M.start,S.start),L=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let w=B,et=L;w<et;w+=3){const F=d.getX(w),O=d.getX(w+1),H=d.getX(w+2);l=Mc(this,y,e,r,m,v,g,F,O,H),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),C=Math.min(d.count,S.start+S.count);for(let M=E,y=C;M<y;M+=3){const B=d.getX(M),L=d.getX(M+1),w=d.getX(M+2);l=Mc(this,h,e,r,m,v,g,B,L,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,C=x.length;E<C;E++){const M=x[E],y=h[M.materialIndex],B=Math.max(M.start,S.start),L=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let w=B,et=L;w<et;w+=3){const F=w,O=w+1,H=w+2;l=Mc(this,y,e,r,m,v,g,F,O,H),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),C=Math.min(p.count,S.start+S.count);for(let M=E,y=C;M<y;M+=3){const B=M,L=M+1,w=M+2;l=Mc(this,h,e,r,m,v,g,B,L,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function ZT(o,e,i,r,l,c,h,d){let p;if(e.side===si?p=r.intersectTriangle(h,c,l,!0,d):p=r.intersectTriangle(l,c,h,e.side===vr,d),p===null)return null;Sc.copy(d),Sc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Sc);return m<i.near||m>i.far?null:{distance:m,point:Sc.clone(),object:o}}function Mc(o,e,i,r,l,c,h,d,p,m){o.getVertexPosition(d,vc),o.getVertexPosition(p,_c),o.getVertexPosition(m,xc);const v=ZT(o,e,i,r,vc,_c,xc,ox);if(v){const g=new tt;ki.getBarycoord(ox,vc,_c,xc,g),l&&(v.uv=ki.getInterpolatedAttribute(l,d,p,m,g,new Wt)),c&&(v.uv1=ki.getInterpolatedAttribute(c,d,p,m,g,new Wt)),h&&(v.normal=ki.getInterpolatedAttribute(h,d,p,m,g,new tt),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new tt,materialIndex:0};ki.getNormal(vc,_c,xc,x.normal),v.face=x,v.barycoord=g}return v}class Na extends Oa{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],v=[],g=[];let x=0,S=0;E("z","y","x",-1,-1,r,i,e,h,c,0),E("z","y","x",1,-1,r,i,-e,h,c,1),E("x","z","y",1,1,e,r,i,l,h,2),E("x","z","y",1,-1,e,r,-i,l,h,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new Oi(m,3)),this.setAttribute("normal",new Oi(v,3)),this.setAttribute("uv",new Oi(g,2));function E(C,M,y,B,L,w,et,F,O,H,N){const A=w/O,I=et/H,nt=w/2,K=et/2,ct=F/2,ft=O+1,V=H+1;let rt=0,W=0;const St=new tt;for(let At=0;At<V;At++){const Ft=At*I-K;for(let ae=0;ae<ft;ae++){const de=ae*A-nt;St[C]=de*B,St[M]=Ft*L,St[y]=ct,m.push(St.x,St.y,St.z),St[C]=0,St[M]=0,St[y]=F>0?1:-1,v.push(St.x,St.y,St.z),g.push(ae/O),g.push(1-At/H),rt+=1}}for(let At=0;At<H;At++)for(let Ft=0;Ft<O;Ft++){const ae=x+Ft+ft*At,de=x+Ft+ft*(At+1),D=x+(Ft+1)+ft*(At+1),Y=x+(Ft+1)+ft*At;p.push(ae,de,Y),p.push(de,D,Y),W+=6}d.addGroup(S,W,N),S+=W,x+=rt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function So(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Jn(o){const e={};for(let i=0;i<o.length;i++){const r=So(o[i]);for(const l in r)e[l]=r[l]}return e}function QT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function gy(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Oe.workingColorSpace}const KT={clone:So,merge:Jn};var JT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$T=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends Bl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JT,this.fragmentShader=$T,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=So(e.uniforms),this.uniformsGroups=QT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class vy extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Da}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new tt,lx=new Wt,ux=new Wt;class Ui extends vy{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(Tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,i){return this.getViewBounds(e,lx,ux),i.subVectors(ux,lx)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Tl*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const io=-90,ao=1;class t1 extends zn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ui(io,ao,e,i);l.layers=this.layers,this.add(l);const c=new Ui(io,ao,e,i);c.layers=this.layers,this.add(c);const h=new Ui(io,ao,e,i);h.layers=this.layers,this.add(h);const d=new Ui(io,ao,e,i);d.layers=this.layers,this.add(d);const p=new Ui(io,ao,e,i);p.layers=this.layers,this.add(p);const m=new Ui(io,ao,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(e===Da)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Fc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(g,x,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class _y extends kn{constructor(e,i,r,l,c,h,d,p,m,v){e=e!==void 0?e:[],i=i!==void 0?i:vo,super(e,i,r,l,c,h,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class e1 extends ns{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new _y(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Li}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Na(5,5,5),c=new _r({name:"CubemapFromEquirect",uniforms:So(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:si,blending:mr});c.uniforms.tEquirect.value=i;const h=new un(l,c),d=i.minFilter;return i.minFilter===ts&&(i.minFilter=Li),new t1(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}const Yd=new tt,n1=new tt,i1=new ye;class Zr{constructor(e=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Yd.subVectors(r,i).cross(n1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Yd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||i1.getNormalMatrix(e),l=this.coplanarPoint(Yd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Il,Ec=new tt;class lm{constructor(e=new Zr,i=new Zr,r=new Zr,l=new Zr,c=new Zr,h=new Zr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Da){const r=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],p=l[3],m=l[4],v=l[5],g=l[6],x=l[7],S=l[8],E=l[9],C=l[10],M=l[11],y=l[12],B=l[13],L=l[14],w=l[15];if(r[0].setComponents(p-c,x-m,M-S,w-y).normalize(),r[1].setComponents(p+c,x+m,M+S,w+y).normalize(),r[2].setComponents(p+h,x+v,M+E,w+B).normalize(),r[3].setComponents(p-h,x-v,M-E,w-B).normalize(),r[4].setComponents(p-d,x-g,M-C,w-L).normalize(),i===Da)r[5].setComponents(p+d,x+g,M+C,w+L).normalize();else if(i===Fc)r[5].setComponents(d,g,C,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ec.x=l.normal.x>0?e.max.x:e.min.x,Ec.y=l.normal.y>0?e.max.y:e.min.y,Ec.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xy(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function a1(o){const e=new WeakMap;function i(d,p){const m=d.array,v=d.usage,g=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,v),d.onUploadCallback();let S;if(m instanceof Float32Array)S=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=o.SHORT;else if(m instanceof Uint32Array)S=o.UNSIGNED_INT;else if(m instanceof Int32Array)S=o.INT;else if(m instanceof Int8Array)S=o.BYTE;else if(m instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,p,m){const v=p.array,g=p.updateRanges;if(o.bindBuffer(m,d),g.length===0)o.bufferSubData(m,0,v);else{g.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<g.length;S++){const E=g[x],C=g[S];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++x,g[x]=C)}g.length=x+1;for(let S=0,E=g.length;S<E;S++){const C=g[S];o.bufferSubData(m,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}class aa extends Oa{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,v=p+1,g=e/d,x=i/p,S=[],E=[],C=[],M=[];for(let y=0;y<v;y++){const B=y*x-h;for(let L=0;L<m;L++){const w=L*g-c;E.push(w,-B,0),C.push(0,0,1),M.push(L/d),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let B=0;B<d;B++){const L=B+m*y,w=B+m*(y+1),et=B+1+m*(y+1),F=B+1+m*y;S.push(L,w,F),S.push(w,et,F)}this.setIndex(S),this.setAttribute("position",new Oi(E,3)),this.setAttribute("normal",new Oi(C,3)),this.setAttribute("uv",new Oi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.widthSegments,e.heightSegments)}}var r1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s1=`#ifdef USE_ALPHAHASH
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
#endif`,o1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f1=`#ifdef USE_AOMAP
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
#endif`,h1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d1=`#ifdef USE_BATCHING
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
#endif`,p1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_1=`#ifdef USE_IRIDESCENCE
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
#endif`,x1=`#ifdef USE_BUMPMAP
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
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,A1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,R1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,C1=`#define PI 3.141592653589793
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
} // validated`,w1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,D1=`vec3 transformedNormal = objectNormal;
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
#endif`,N1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P1="gl_FragColor = linearToOutputTexel( gl_FragColor );",z1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I1=`#ifdef USE_ENVMAP
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
#endif`,B1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,F1=`#ifdef USE_ENVMAP
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
#endif`,H1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G1=`#ifdef USE_ENVMAP
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
#endif`,V1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q1=`#ifdef USE_GRADIENTMAP
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
}`,W1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q1=`uniform bool receiveShadow;
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
#endif`,K1=`#ifdef USE_ENVMAP
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
#endif`,J1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nb=`PhysicalMaterial material;
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
#endif`,ib=`struct PhysicalMaterial {
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
}`,ab=`
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
#endif`,rb=`#if defined( RE_IndirectDiffuse )
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
#endif`,sb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ob=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ub=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,db=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pb=`#if defined( USE_POINTS_UV )
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
#endif`,mb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_b=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yb=`#ifdef USE_MORPHTARGETS
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
#endif`,Sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Eb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ab=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rb=`#ifdef USE_NORMALMAP
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
#endif`,Cb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Db=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ub=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Ob=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ib=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xb=`float getShadowMask() {
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
}`,kb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yb=`#ifdef USE_SKINNING
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
#endif`,qb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wb=`#ifdef USE_SKINNING
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
#endif`,jb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kb=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jb=`#ifdef USE_TRANSMISSION
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
#endif`,$b=`#ifdef USE_TRANSMISSION
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
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rA=`uniform sampler2D t2D;
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
}`,sA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`#include <common>
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
}`,fA=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hA=`#define DISTANCE
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
}`,dA=`#define DISTANCE
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
}`,pA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gA=`uniform float scale;
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
}`,vA=`uniform vec3 diffuse;
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
}`,_A=`#include <common>
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
}`,xA=`uniform vec3 diffuse;
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
}`,yA=`#define LAMBERT
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
}`,SA=`#define LAMBERT
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
}`,MA=`#define MATCAP
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
}`,EA=`#define MATCAP
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
}`,TA=`#define NORMAL
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
}`,bA=`#define NORMAL
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
}`,AA=`#define PHONG
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
}`,RA=`#define PHONG
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
}`,CA=`#define STANDARD
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
}`,wA=`#define STANDARD
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
}`,DA=`#define TOON
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
}`,NA=`#define TOON
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
}`,UA=`uniform float size;
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
}`,LA=`uniform vec3 diffuse;
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
}`,OA=`#include <common>
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
}`,PA=`uniform vec3 color;
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
}`,zA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,IA=`uniform vec3 diffuse;
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
}`,Ee={alphahash_fragment:r1,alphahash_pars_fragment:s1,alphamap_fragment:o1,alphamap_pars_fragment:l1,alphatest_fragment:u1,alphatest_pars_fragment:c1,aomap_fragment:f1,aomap_pars_fragment:h1,batching_pars_vertex:d1,batching_vertex:p1,begin_vertex:m1,beginnormal_vertex:g1,bsdfs:v1,iridescence_fragment:_1,bumpmap_pars_fragment:x1,clipping_planes_fragment:y1,clipping_planes_pars_fragment:S1,clipping_planes_pars_vertex:M1,clipping_planes_vertex:E1,color_fragment:T1,color_pars_fragment:b1,color_pars_vertex:A1,color_vertex:R1,common:C1,cube_uv_reflection_fragment:w1,defaultnormal_vertex:D1,displacementmap_pars_vertex:N1,displacementmap_vertex:U1,emissivemap_fragment:L1,emissivemap_pars_fragment:O1,colorspace_fragment:P1,colorspace_pars_fragment:z1,envmap_fragment:I1,envmap_common_pars_fragment:B1,envmap_pars_fragment:F1,envmap_pars_vertex:H1,envmap_physical_pars_fragment:K1,envmap_vertex:G1,fog_vertex:V1,fog_pars_vertex:X1,fog_fragment:k1,fog_pars_fragment:Y1,gradientmap_pars_fragment:q1,lightmap_pars_fragment:W1,lights_lambert_fragment:j1,lights_lambert_pars_fragment:Z1,lights_pars_begin:Q1,lights_toon_fragment:J1,lights_toon_pars_fragment:$1,lights_phong_fragment:tb,lights_phong_pars_fragment:eb,lights_physical_fragment:nb,lights_physical_pars_fragment:ib,lights_fragment_begin:ab,lights_fragment_maps:rb,lights_fragment_end:sb,logdepthbuf_fragment:ob,logdepthbuf_pars_fragment:lb,logdepthbuf_pars_vertex:ub,logdepthbuf_vertex:cb,map_fragment:fb,map_pars_fragment:hb,map_particle_fragment:db,map_particle_pars_fragment:pb,metalnessmap_fragment:mb,metalnessmap_pars_fragment:gb,morphinstance_vertex:vb,morphcolor_vertex:_b,morphnormal_vertex:xb,morphtarget_pars_vertex:yb,morphtarget_vertex:Sb,normal_fragment_begin:Mb,normal_fragment_maps:Eb,normal_pars_fragment:Tb,normal_pars_vertex:bb,normal_vertex:Ab,normalmap_pars_fragment:Rb,clearcoat_normal_fragment_begin:Cb,clearcoat_normal_fragment_maps:wb,clearcoat_pars_fragment:Db,iridescence_pars_fragment:Nb,opaque_fragment:Ub,packing:Lb,premultiplied_alpha_fragment:Ob,project_vertex:Pb,dithering_fragment:zb,dithering_pars_fragment:Ib,roughnessmap_fragment:Bb,roughnessmap_pars_fragment:Fb,shadowmap_pars_fragment:Hb,shadowmap_pars_vertex:Gb,shadowmap_vertex:Vb,shadowmask_pars_fragment:Xb,skinbase_vertex:kb,skinning_pars_vertex:Yb,skinning_vertex:qb,skinnormal_vertex:Wb,specularmap_fragment:jb,specularmap_pars_fragment:Zb,tonemapping_fragment:Qb,tonemapping_pars_fragment:Kb,transmission_fragment:Jb,transmission_pars_fragment:$b,uv_pars_fragment:tA,uv_pars_vertex:eA,uv_vertex:nA,worldpos_vertex:iA,background_vert:aA,background_frag:rA,backgroundCube_vert:sA,backgroundCube_frag:oA,cube_vert:lA,cube_frag:uA,depth_vert:cA,depth_frag:fA,distanceRGBA_vert:hA,distanceRGBA_frag:dA,equirect_vert:pA,equirect_frag:mA,linedashed_vert:gA,linedashed_frag:vA,meshbasic_vert:_A,meshbasic_frag:xA,meshlambert_vert:yA,meshlambert_frag:SA,meshmatcap_vert:MA,meshmatcap_frag:EA,meshnormal_vert:TA,meshnormal_frag:bA,meshphong_vert:AA,meshphong_frag:RA,meshphysical_vert:CA,meshphysical_frag:wA,meshtoon_vert:DA,meshtoon_frag:NA,points_vert:UA,points_frag:LA,shadow_vert:OA,shadow_frag:PA,sprite_vert:zA,sprite_frag:IA},Xt={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},ra={basic:{uniforms:Jn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:Jn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:Jn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:Jn([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:Jn([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:Jn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:Jn([Xt.points,Xt.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:Jn([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:Jn([Xt.common,Xt.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:Jn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:Jn([Xt.sprite,Xt.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:Jn([Xt.common,Xt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:Jn([Xt.lights,Xt.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};ra.physical={uniforms:Jn([ra.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const Tc={r:0,b:0,g:0},Yr=new oa,BA=new Ke;function FA(o,e,i,r,l,c,h){const d=new Ie(0);let p=c===!0?0:1,m,v,g=null,x=0,S=null;function E(B){let L=B.isScene===!0?B.background:null;return L&&L.isTexture&&(L=(B.backgroundBlurriness>0?i:e).get(L)),L}function C(B){let L=!1;const w=E(B);w===null?y(d,p):w&&w.isColor&&(y(w,1),L=!0);const et=o.xr.getEnvironmentBlendMode();et==="additive"?r.buffers.color.setClear(0,0,0,1,h):et==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(B,L){const w=E(L);w&&(w.isCubeTexture||w.mapping===Vc)?(v===void 0&&(v=new un(new Na(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:So(ra.backgroundCube.uniforms),vertexShader:ra.backgroundCube.vertexShader,fragmentShader:ra.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(et,F,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Yr.copy(L.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),v.material.uniforms.envMap.value=w,v.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(BA.makeRotationFromEuler(Yr)),v.material.toneMapped=Oe.getTransfer(w.colorSpace)!==je,(g!==w||x!==w.version||S!==o.toneMapping)&&(v.material.needsUpdate=!0,g=w,x=w.version,S=o.toneMapping),v.layers.enableAll(),B.unshift(v,v.geometry,v.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new un(new aa(2,2),new _r({name:"BackgroundMaterial",uniforms:So(ra.background.uniforms),vertexShader:ra.background.vertexShader,fragmentShader:ra.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Oe.getTransfer(w.colorSpace)!==je,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(g!==w||x!==w.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,g=w,x=w.version,S=o.toneMapping),m.layers.enableAll(),B.unshift(m,m.geometry,m.material,0,0,null))}function y(B,L){B.getRGB(Tc,gy(o)),r.buffers.color.setClear(Tc.r,Tc.g,Tc.b,L,h)}return{getClearColor:function(){return d},setClearColor:function(B,L=1){d.set(B),p=L,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(B){p=B,y(d,p)},render:C,addToRenderList:M}}function HA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(A,I,nt,K,ct){let ft=!1;const V=g(K,nt,I);c!==V&&(c=V,m(c.object)),ft=S(A,K,nt,ct),ft&&E(A,K,nt,ct),ct!==null&&e.update(ct,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,w(A,I,nt,K),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ct).buffer))}function p(){return o.createVertexArray()}function m(A){return o.bindVertexArray(A)}function v(A){return o.deleteVertexArray(A)}function g(A,I,nt){const K=nt.wireframe===!0;let ct=r[A.id];ct===void 0&&(ct={},r[A.id]=ct);let ft=ct[I.id];ft===void 0&&(ft={},ct[I.id]=ft);let V=ft[K];return V===void 0&&(V=x(p()),ft[K]=V),V}function x(A){const I=[],nt=[],K=[];for(let ct=0;ct<i;ct++)I[ct]=0,nt[ct]=0,K[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:nt,attributeDivisors:K,object:A,attributes:{},index:null}}function S(A,I,nt,K){const ct=c.attributes,ft=I.attributes;let V=0;const rt=nt.getAttributes();for(const W in rt)if(rt[W].location>=0){const At=ct[W];let Ft=ft[W];if(Ft===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(Ft=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(Ft=A.instanceColor)),At===void 0||At.attribute!==Ft||Ft&&At.data!==Ft.data)return!0;V++}return c.attributesNum!==V||c.index!==K}function E(A,I,nt,K){const ct={},ft=I.attributes;let V=0;const rt=nt.getAttributes();for(const W in rt)if(rt[W].location>=0){let At=ft[W];At===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(At=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(At=A.instanceColor));const Ft={};Ft.attribute=At,At&&At.data&&(Ft.data=At.data),ct[W]=Ft,V++}c.attributes=ct,c.attributesNum=V,c.index=K}function C(){const A=c.newAttributes;for(let I=0,nt=A.length;I<nt;I++)A[I]=0}function M(A){y(A,0)}function y(A,I){const nt=c.newAttributes,K=c.enabledAttributes,ct=c.attributeDivisors;nt[A]=1,K[A]===0&&(o.enableVertexAttribArray(A),K[A]=1),ct[A]!==I&&(o.vertexAttribDivisor(A,I),ct[A]=I)}function B(){const A=c.newAttributes,I=c.enabledAttributes;for(let nt=0,K=I.length;nt<K;nt++)I[nt]!==A[nt]&&(o.disableVertexAttribArray(nt),I[nt]=0)}function L(A,I,nt,K,ct,ft,V){V===!0?o.vertexAttribIPointer(A,I,nt,ct,ft):o.vertexAttribPointer(A,I,nt,K,ct,ft)}function w(A,I,nt,K){C();const ct=K.attributes,ft=nt.getAttributes(),V=I.defaultAttributeValues;for(const rt in ft){const W=ft[rt];if(W.location>=0){let St=ct[rt];if(St===void 0&&(rt==="instanceMatrix"&&A.instanceMatrix&&(St=A.instanceMatrix),rt==="instanceColor"&&A.instanceColor&&(St=A.instanceColor)),St!==void 0){const At=St.normalized,Ft=St.itemSize,ae=e.get(St);if(ae===void 0)continue;const de=ae.buffer,D=ae.type,Y=ae.bytesPerElement,vt=D===o.INT||D===o.UNSIGNED_INT||St.gpuType===tm;if(St.isInterleavedBufferAttribute){const ut=St.data,Dt=ut.stride,Pt=St.offset;if(ut.isInstancedInterleavedBuffer){for(let Lt=0;Lt<W.locationSize;Lt++)y(W.location+Lt,ut.meshPerAttribute);A.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Lt=0;Lt<W.locationSize;Lt++)M(W.location+Lt);o.bindBuffer(o.ARRAY_BUFFER,de);for(let Lt=0;Lt<W.locationSize;Lt++)L(W.location+Lt,Ft/W.locationSize,D,At,Dt*Y,(Pt+Ft/W.locationSize*Lt)*Y,vt)}else{if(St.isInstancedBufferAttribute){for(let ut=0;ut<W.locationSize;ut++)y(W.location+ut,St.meshPerAttribute);A.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ut=0;ut<W.locationSize;ut++)M(W.location+ut);o.bindBuffer(o.ARRAY_BUFFER,de);for(let ut=0;ut<W.locationSize;ut++)L(W.location+ut,Ft/W.locationSize,D,At,Ft*Y,Ft/W.locationSize*ut*Y,vt)}}else if(V!==void 0){const At=V[rt];if(At!==void 0)switch(At.length){case 2:o.vertexAttrib2fv(W.location,At);break;case 3:o.vertexAttrib3fv(W.location,At);break;case 4:o.vertexAttrib4fv(W.location,At);break;default:o.vertexAttrib1fv(W.location,At)}}}}B()}function et(){H();for(const A in r){const I=r[A];for(const nt in I){const K=I[nt];for(const ct in K)v(K[ct].object),delete K[ct];delete I[nt]}delete r[A]}}function F(A){if(r[A.id]===void 0)return;const I=r[A.id];for(const nt in I){const K=I[nt];for(const ct in K)v(K[ct].object),delete K[ct];delete I[nt]}delete r[A.id]}function O(A){for(const I in r){const nt=r[I];if(nt[A.id]===void 0)continue;const K=nt[A.id];for(const ct in K)v(K[ct].object),delete K[ct];delete nt[A.id]}}function H(){N(),h=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:H,resetDefaultState:N,dispose:et,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:M,disableUnusedAttributes:B}}function GA(o,e,i){let r;function l(m){r=m}function c(m,v){o.drawArrays(r,m,v),i.update(v,r,1)}function h(m,v,g){g!==0&&(o.drawArraysInstanced(r,m,v,g),i.update(v,r,g))}function d(m,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,g);let S=0;for(let E=0;E<g;E++)S+=v[E];i.update(S,r,1)}function p(m,v,g,x){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)h(m[E],v[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,g);let E=0;for(let C=0;C<g;C++)E+=v[C]*x[C];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function VA(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==Yi&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const H=O===Pl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==La&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==sa&&!H)}function p(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),et=E>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:B,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:et,maxSamples:F}}function XA(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new Zr,d=new ye,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||r!==0||l;return l=x,r=g.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,S){const E=g.clippingPlanes,C=g.clipIntersection,M=g.clipShadows,y=o.get(g);if(!l||E===null||E.length===0||c&&!M)c?v(null):m();else{const B=c?0:r,L=B*4;let w=y.clippingState||null;p.value=w,w=v(E,x,L,S);for(let et=0;et!==L;++et)w[et]=i[et];y.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,x,S,E){const C=g!==null?g.length:0;let M=null;if(C!==0){if(M=p.value,E!==!0||M===null){const y=S+C*4,B=x.matrixWorldInverse;d.getNormalMatrix(B),(M===null||M.length<y)&&(M=new Float32Array(y));for(let L=0,w=S;L!==C;++L,w+=4)h.copy(g[L]).applyMatrix4(B,d),h.normal.toArray(M,w),M[w+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function kA(o){let e=new WeakMap;function i(h,d){return d===_p?h.mapping=vo:d===xp&&(h.mapping=_o),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===_p||d===xp)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new e1(p.height);return m.fromEquirectangularTexture(o,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class yy extends vy{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const co=4,cx=[.125,.215,.35,.446,.526,.582],Jr=20,qd=new yy,fx=new Ie;let Wd=null,jd=0,Zd=0,Qd=!1;const Qr=(1+Math.sqrt(5))/2,ro=1/Qr,hx=[new tt(-Qr,ro,0),new tt(Qr,ro,0),new tt(-ro,0,Qr),new tt(ro,0,Qr),new tt(0,Qr,-ro),new tt(0,Qr,ro),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)];class dx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){Wd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wd,jd,Zd),this._renderer.xr.enabled=Qd,e.scissorTest=!1,bc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===vo||e.mapping===_o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Pl,format:Yi,colorSpace:Mo,depthBuffer:!1},l=px(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=px(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YA(c)),this._blurMaterial=qA(c,e,i)}return l}_compileMaterial(e){const i=new un(this._lodPlanes[0],e);this._renderer.compile(i,qd)}_sceneToCubeUV(e,i,r,l){const d=new Ui(90,1,i,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,x=v.toneMapping;v.getClearColor(fx),v.toneMapping=gr,v.autoClear=!1;const S=new uo({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1}),E=new un(new Na,S);let C=!1;const M=e.background;M?M.isColor&&(S.color.copy(M),e.background=null,C=!0):(S.color.copy(fx),C=!0);for(let y=0;y<6;y++){const B=y%3;B===0?(d.up.set(0,p[y],0),d.lookAt(m[y],0,0)):B===1?(d.up.set(0,0,p[y]),d.lookAt(0,m[y],0)):(d.up.set(0,p[y],0),d.lookAt(0,0,m[y]));const L=this._cubeSize;bc(l,B*L,y>2?L:0,L,L),v.setRenderTarget(l),C&&v.render(E,d),v.render(e,d)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=x,v.autoClear=g,e.background=M}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===vo||e.mapping===_o;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=gx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mx());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new un(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;bc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,qd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=hx[(l-c-1)%hx.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new un(this._lodPlanes[l],m),x=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Jr-1),C=c/E,M=isFinite(c)?1+Math.floor(v*C):Jr;M>Jr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Jr}`);const y=[];let B=0;for(let O=0;O<Jr;++O){const H=O/C,N=Math.exp(-H*H/2);y.push(N),O===0?B+=N:O<M&&(B+=2*N)}for(let O=0;O<y.length;O++)y[O]=y[O]/B;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=y,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-r;const w=this._sizeLods[l],et=3*w*(l>L-co?l-L+co:0),F=4*(this._cubeSize-w);bc(i,et,F,3*w,2*w),p.setRenderTarget(i),p.render(g,qd)}}function YA(o){const e=[],i=[],r=[];let l=o;const c=o-co+1+cx.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-co?p=cx[h-o+co-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),v=-m,g=1+m,x=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,E=6,C=3,M=2,y=1,B=new Float32Array(C*E*S),L=new Float32Array(M*E*S),w=new Float32Array(y*E*S);for(let F=0;F<S;F++){const O=F%3*2/3-1,H=F>2?0:-1,N=[O,H,0,O+2/3,H,0,O+2/3,H+1,0,O,H,0,O+2/3,H+1,0,O,H+1,0];B.set(N,C*E*F),L.set(x,M*E*F);const A=[F,F,F,F,F,F];w.set(A,y*E*F)}const et=new Oa;et.setAttribute("position",new qi(B,C)),et.setAttribute("uv",new qi(L,M)),et.setAttribute("faceIndex",new qi(w,y)),e.push(et),l>co&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function px(o,e,i){const r=new ns(o,e,i);return r.texture.mapping=Vc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function qA(o,e,i){const r=new Float32Array(Jr),l=new tt(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:um(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function mx(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:um(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function gx(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:um(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function um(){return`

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
	`}function WA(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===_p||p===xp,v=p===vo||p===_o;if(m||v){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new dx(o)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return m&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new dx(o)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function jA(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Sl("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function ZA(o,e,i,r){const l={},c=new WeakMap;function h(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const C=x.morphAttributes[E];for(let M=0,y=C.length;M<y;M++)e.remove(C[M])}x.removeEventListener("dispose",h),delete l[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function p(g){const x=g.attributes;for(const E in x)e.update(x[E],o.ARRAY_BUFFER);const S=g.morphAttributes;for(const E in S){const C=S[E];for(let M=0,y=C.length;M<y;M++)e.update(C[M],o.ARRAY_BUFFER)}}function m(g){const x=[],S=g.index,E=g.attributes.position;let C=0;if(S!==null){const B=S.array;C=S.version;for(let L=0,w=B.length;L<w;L+=3){const et=B[L+0],F=B[L+1],O=B[L+2];x.push(et,F,F,O,O,et)}}else if(E!==void 0){const B=E.array;C=E.version;for(let L=0,w=B.length/3-1;L<w;L+=3){const et=L+0,F=L+1,O=L+2;x.push(et,F,F,O,O,et)}}else return;const M=new(uy(x)?my:py)(x,1);M.version=C;const y=c.get(g);y&&e.remove(y),c.set(g,M)}function v(g){const x=c.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&m(g)}else m(g);return c.get(g)}return{get:d,update:p,getWireframeAttribute:v}}function QA(o,e,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function p(x,S){o.drawElements(r,S,c,x*h),i.update(S,r,1)}function m(x,S,E){E!==0&&(o.drawElementsInstanced(r,S,c,x*h,E),i.update(S,r,E))}function v(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,x,0,E);let M=0;for(let y=0;y<E;y++)M+=S[y];i.update(M,r,1)}function g(x,S,E,C){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<x.length;y++)m(x[y]/h,S[y],C[y]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,c,x,0,C,0,E);let y=0;for(let B=0;B<E;B++)y+=S[B]*C[B];i.update(y,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function KA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function JA(o,e,i){const r=new WeakMap,l=new cn;function c(h,d,p){const m=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let A=function(){H.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var S=A;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let w=0;E===!0&&(w=1),C===!0&&(w=2),M===!0&&(w=3);let et=d.attributes.position.count*w,F=1;et>e.maxTextureSize&&(F=Math.ceil(et/e.maxTextureSize),et=e.maxTextureSize);const O=new Float32Array(et*F*4*g),H=new fy(O,et,F,g);H.type=sa,H.needsUpdate=!0;const N=w*4;for(let I=0;I<g;I++){const nt=y[I],K=B[I],ct=L[I],ft=et*F*4*I;for(let V=0;V<nt.count;V++){const rt=V*N;E===!0&&(l.fromBufferAttribute(nt,V),O[ft+rt+0]=l.x,O[ft+rt+1]=l.y,O[ft+rt+2]=l.z,O[ft+rt+3]=0),C===!0&&(l.fromBufferAttribute(K,V),O[ft+rt+4]=l.x,O[ft+rt+5]=l.y,O[ft+rt+6]=l.z,O[ft+rt+7]=0),M===!0&&(l.fromBufferAttribute(ct,V),O[ft+rt+8]=l.x,O[ft+rt+9]=l.y,O[ft+rt+10]=l.z,O[ft+rt+11]=ct.itemSize===4?l.w:1)}}x={count:g,texture:H,size:new Wt(et,F)},r.set(d,x),d.addEventListener("dispose",A)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const C=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",C),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function $A(o,e,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,v=p.geometry,g=e.get(p,v);if(l.get(g)!==m&&(e.update(g),l.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return g}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}class Sy extends kn{constructor(e,i,r,l,c,h,d,p,m,v=po){if(v!==po&&v!==yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===po&&(r=es),r===void 0&&v===yo&&(r=xo),super(null,l,c,h,d,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:yi,this.minFilter=p!==void 0?p:yi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const My=new kn,vx=new Sy(1,1),Ey=new fy,Ty=new BT,by=new _y,_x=[],xx=[],yx=new Float32Array(16),Sx=new Float32Array(9),Mx=new Float32Array(4);function To(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=_x[l];if(c===void 0&&(c=new Float32Array(l),_x[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function En(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Tn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function kc(o,e){let i=xx[e];i===void 0&&(i=new Int32Array(e),xx[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function tR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function eR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2fv(this.addr,e),Tn(i,e)}}function nR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(En(i,e))return;o.uniform3fv(this.addr,e),Tn(i,e)}}function iR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4fv(this.addr,e),Tn(i,e)}}function aR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;Mx.set(r),o.uniformMatrix2fv(this.addr,!1,Mx),Tn(i,r)}}function rR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;Sx.set(r),o.uniformMatrix3fv(this.addr,!1,Sx),Tn(i,r)}}function sR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;yx.set(r),o.uniformMatrix4fv(this.addr,!1,yx),Tn(i,r)}}function oR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function lR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2iv(this.addr,e),Tn(i,e)}}function uR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;o.uniform3iv(this.addr,e),Tn(i,e)}}function cR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4iv(this.addr,e),Tn(i,e)}}function fR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function hR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2uiv(this.addr,e),Tn(i,e)}}function dR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;o.uniform3uiv(this.addr,e),Tn(i,e)}}function pR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4uiv(this.addr,e),Tn(i,e)}}function mR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(vx.compareFunction=ly,c=vx):c=My,i.setTexture2D(e||c,l)}function gR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Ty,l)}function vR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||by,l)}function _R(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Ey,l)}function xR(o){switch(o){case 5126:return tR;case 35664:return eR;case 35665:return nR;case 35666:return iR;case 35674:return aR;case 35675:return rR;case 35676:return sR;case 5124:case 35670:return oR;case 35667:case 35671:return lR;case 35668:case 35672:return uR;case 35669:case 35673:return cR;case 5125:return fR;case 36294:return hR;case 36295:return dR;case 36296:return pR;case 35678:case 36198:case 36298:case 36306:case 35682:return mR;case 35679:case 36299:case 36307:return gR;case 35680:case 36300:case 36308:case 36293:return vR;case 36289:case 36303:case 36311:case 36292:return _R}}function yR(o,e){o.uniform1fv(this.addr,e)}function SR(o,e){const i=To(e,this.size,2);o.uniform2fv(this.addr,i)}function MR(o,e){const i=To(e,this.size,3);o.uniform3fv(this.addr,i)}function ER(o,e){const i=To(e,this.size,4);o.uniform4fv(this.addr,i)}function TR(o,e){const i=To(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function bR(o,e){const i=To(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function AR(o,e){const i=To(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function RR(o,e){o.uniform1iv(this.addr,e)}function CR(o,e){o.uniform2iv(this.addr,e)}function wR(o,e){o.uniform3iv(this.addr,e)}function DR(o,e){o.uniform4iv(this.addr,e)}function NR(o,e){o.uniform1uiv(this.addr,e)}function UR(o,e){o.uniform2uiv(this.addr,e)}function LR(o,e){o.uniform3uiv(this.addr,e)}function OR(o,e){o.uniform4uiv(this.addr,e)}function PR(o,e,i){const r=this.cache,l=e.length,c=kc(i,l);En(r,c)||(o.uniform1iv(this.addr,c),Tn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||My,c[h])}function zR(o,e,i){const r=this.cache,l=e.length,c=kc(i,l);En(r,c)||(o.uniform1iv(this.addr,c),Tn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Ty,c[h])}function IR(o,e,i){const r=this.cache,l=e.length,c=kc(i,l);En(r,c)||(o.uniform1iv(this.addr,c),Tn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||by,c[h])}function BR(o,e,i){const r=this.cache,l=e.length,c=kc(i,l);En(r,c)||(o.uniform1iv(this.addr,c),Tn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Ey,c[h])}function FR(o){switch(o){case 5126:return yR;case 35664:return SR;case 35665:return MR;case 35666:return ER;case 35674:return TR;case 35675:return bR;case 35676:return AR;case 5124:case 35670:return RR;case 35667:case 35671:return CR;case 35668:case 35672:return wR;case 35669:case 35673:return DR;case 5125:return NR;case 36294:return UR;case 36295:return LR;case 36296:return OR;case 35678:case 36198:case 36298:case 36306:case 35682:return PR;case 35679:case 36299:case 36307:return zR;case 35680:case 36300:case 36308:case 36293:return IR;case 36289:case 36303:case 36311:case 36292:return BR}}class HR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=xR(i.type)}}class GR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=FR(i.type)}}class VR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const Kd=/(\w+)(\])?(\[|\.)?/g;function Ex(o,e){o.seq.push(e),o.map[e.id]=e}function XR(o,e,i){const r=o.name,l=r.length;for(Kd.lastIndex=0;;){const c=Kd.exec(r),h=Kd.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){Ex(i,m===void 0?new HR(d,o,e):new GR(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new VR(d),Ex(i,g)),i=g}}}class Ic{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);XR(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function Tx(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const kR=37297;let YR=0;function qR(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const bx=new ye;function WR(o){Oe._getMatrix(bx,Oe.workingColorSpace,o);const e=`mat3( ${bx.elements.map(i=>i.toFixed(4))} )`;switch(Oe.getTransfer(o)){case Xc:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Ax(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+qR(o.getShaderSource(e),h)}else return l}function jR(o,e){const i=WR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function ZR(o,e){let i;switch(e){case KE:i="Linear";break;case JE:i="Reinhard";break;case $E:i="Cineon";break;case Qx:i="ACESFilmic";break;case eT:i="AgX";break;case nT:i="Neutral";break;case tT:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ac=new tt;function QR(){Oe.getLuminanceCoefficients(Ac);const o=Ac.x.toFixed(4),e=Ac.y.toFixed(4),i=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ml).join(`
`)}function JR(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function $R(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Ml(o){return o!==""}function Rx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const t2=/^[ \t]*#include +<([\w\d./]+)>/gm;function jp(o){return o.replace(t2,n2)}const e2=new Map;function n2(o,e){let i=Ee[e];if(i===void 0){const r=e2.get(e);if(r!==void 0)i=Ee[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return jp(i)}const i2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wx(o){return o.replace(i2,a2)}function a2(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Dx(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function r2(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===jx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===DE?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ca&&(e="SHADOWMAP_TYPE_VSM"),e}function s2(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case vo:case _o:e="ENVMAP_TYPE_CUBE";break;case Vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o2(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case _o:e="ENVMAP_MODE_REFRACTION";break}return e}function l2(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Zx:e="ENVMAP_BLENDING_MULTIPLY";break;case ZE:e="ENVMAP_BLENDING_MIX";break;case QE:e="ENVMAP_BLENDING_ADD";break}return e}function u2(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function c2(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=r2(i),m=s2(i),v=o2(i),g=l2(i),x=u2(i),S=KR(i),E=JR(c),C=l.createProgram();let M,y,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ml).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ml).join(`
`),y.length>0&&(y+=`
`)):(M=[Dx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ml).join(`
`),y=[Dx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==gr?"#define TONE_MAPPING":"",i.toneMapping!==gr?Ee.tonemapping_pars_fragment:"",i.toneMapping!==gr?ZR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,jR("linearToOutputTexel",i.outputColorSpace),QR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ml).join(`
`)),h=jp(h),h=Rx(h,i),h=Cx(h,i),d=jp(d),d=Rx(d,i),d=Cx(d,i),h=wx(h),d=wx(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===V_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===V_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=B+M+h,w=B+y+d,et=Tx(l,l.VERTEX_SHADER,L),F=Tx(l,l.FRAGMENT_SHADER,w);l.attachShader(C,et),l.attachShader(C,F),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function O(I){if(o.debug.checkShaderErrors){const nt=l.getProgramInfoLog(C).trim(),K=l.getShaderInfoLog(et).trim(),ct=l.getShaderInfoLog(F).trim();let ft=!0,V=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ft=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,et,F);else{const rt=Ax(l,et,"vertex"),W=Ax(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+nt+`
`+rt+`
`+W)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(K===""||ct==="")&&(V=!1);V&&(I.diagnostics={runnable:ft,programLog:nt,vertexShader:{log:K,prefix:M},fragmentShader:{log:ct,prefix:y}})}l.deleteShader(et),l.deleteShader(F),H=new Ic(l,C),N=$R(l,C)}let H;this.getUniforms=function(){return H===void 0&&O(this),H};let N;this.getAttributes=function(){return N===void 0&&O(this),N};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(C,kR)),A},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=YR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=et,this.fragmentShader=F,this}let f2=0;class h2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new d2(e),i.set(e,r)),r}}class d2{constructor(e){this.id=f2++,this.code=e,this.usedTimes=0}}function p2(o,e,i,r,l,c,h){const d=new hy,p=new h2,m=new Set,v=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(N){return m.add(N),N===0?"uv":`uv${N}`}function M(N,A,I,nt,K){const ct=nt.fog,ft=K.geometry,V=N.isMeshStandardMaterial?nt.environment:null,rt=(N.isMeshStandardMaterial?i:e).get(N.envMap||V),W=rt&&rt.mapping===Vc?rt.image.height:null,St=E[N.type];N.precision!==null&&(S=l.getMaxPrecision(N.precision),S!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",S,"instead."));const At=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Ft=At!==void 0?At.length:0;let ae=0;ft.morphAttributes.position!==void 0&&(ae=1),ft.morphAttributes.normal!==void 0&&(ae=2),ft.morphAttributes.color!==void 0&&(ae=3);let de,D,Y,vt;if(St){const Ae=ra[St];de=Ae.vertexShader,D=Ae.fragmentShader}else de=N.vertexShader,D=N.fragmentShader,p.update(N),Y=p.getVertexShaderID(N),vt=p.getFragmentShaderID(N);const ut=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),Pt=K.isInstancedMesh===!0,Lt=K.isBatchedMesh===!0,Mt=!!N.map,at=!!N.matcap,Rt=!!rt,z=!!N.aoMap,Qt=!!N.lightMap,Tt=!!N.bumpMap,Ut=!!N.normalMap,xt=!!N.displacementMap,$t=!!N.emissiveMap,Gt=!!N.metalnessMap,U=!!N.roughnessMap,b=N.anisotropy>0,J=N.clearcoat>0,dt=N.dispersion>0,Et=N.iridescence>0,pt=N.sheen>0,Kt=N.transmission>0,Ot=b&&!!N.anisotropyMap,zt=J&&!!N.clearcoatMap,pe=J&&!!N.clearcoatNormalMap,Ct=J&&!!N.clearcoatRoughnessMap,jt=Et&&!!N.iridescenceMap,wt=Et&&!!N.iridescenceThicknessMap,se=pt&&!!N.sheenColorMap,Yt=pt&&!!N.sheenRoughnessMap,Se=!!N.specularMap,me=!!N.specularColorMap,Pe=!!N.specularIntensityMap,X=Kt&&!!N.transmissionMap,Ht=Kt&&!!N.thicknessMap,ht=!!N.gradientMap,yt=!!N.alphaMap,Bt=N.alphaTest>0,Vt=!!N.alphaHash,fe=!!N.extensions;let qe=gr;N.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(qe=o.toneMapping);const fn={shaderID:St,shaderType:N.type,shaderName:N.name,vertexShader:de,fragmentShader:D,defines:N.defines,customVertexShaderID:Y,customFragmentShaderID:vt,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:S,batching:Lt,batchingColor:Lt&&K._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&K.instanceColor!==null,instancingMorph:Pt&&K.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ut===null?o.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Mo,alphaToCoverage:!!N.alphaToCoverage,map:Mt,matcap:at,envMap:Rt,envMapMode:Rt&&rt.mapping,envMapCubeUVHeight:W,aoMap:z,lightMap:Qt,bumpMap:Tt,normalMap:Ut,displacementMap:x&&xt,emissiveMap:$t,normalMapObjectSpace:Ut&&N.normalMapType===sT,normalMapTangentSpace:Ut&&N.normalMapType===oy,metalnessMap:Gt,roughnessMap:U,anisotropy:b,anisotropyMap:Ot,clearcoat:J,clearcoatMap:zt,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ct,dispersion:dt,iridescence:Et,iridescenceMap:jt,iridescenceThicknessMap:wt,sheen:pt,sheenColorMap:se,sheenRoughnessMap:Yt,specularMap:Se,specularColorMap:me,specularIntensityMap:Pe,transmission:Kt,transmissionMap:X,thicknessMap:Ht,gradientMap:ht,opaque:N.transparent===!1&&N.blending===ho&&N.alphaToCoverage===!1,alphaMap:yt,alphaTest:Bt,alphaHash:Vt,combine:N.combine,mapUv:Mt&&C(N.map.channel),aoMapUv:z&&C(N.aoMap.channel),lightMapUv:Qt&&C(N.lightMap.channel),bumpMapUv:Tt&&C(N.bumpMap.channel),normalMapUv:Ut&&C(N.normalMap.channel),displacementMapUv:xt&&C(N.displacementMap.channel),emissiveMapUv:$t&&C(N.emissiveMap.channel),metalnessMapUv:Gt&&C(N.metalnessMap.channel),roughnessMapUv:U&&C(N.roughnessMap.channel),anisotropyMapUv:Ot&&C(N.anisotropyMap.channel),clearcoatMapUv:zt&&C(N.clearcoatMap.channel),clearcoatNormalMapUv:pe&&C(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&C(N.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&C(N.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&C(N.iridescenceThicknessMap.channel),sheenColorMapUv:se&&C(N.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&C(N.sheenRoughnessMap.channel),specularMapUv:Se&&C(N.specularMap.channel),specularColorMapUv:me&&C(N.specularColorMap.channel),specularIntensityMapUv:Pe&&C(N.specularIntensityMap.channel),transmissionMapUv:X&&C(N.transmissionMap.channel),thicknessMapUv:Ht&&C(N.thicknessMap.channel),alphaMapUv:yt&&C(N.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Ut||b),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ft.attributes.uv&&(Mt||yt),fog:!!ct,useFog:N.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Dt,skinning:K.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:ae,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:N.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:qe,decodeVideoTexture:Mt&&N.map.isVideoTexture===!0&&Oe.getTransfer(N.map.colorSpace)===je,decodeVideoTextureEmissive:$t&&N.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(N.emissiveMap.colorSpace)===je,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===wa,flipSided:N.side===si,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:fe&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&N.extensions.multiDraw===!0||Lt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return fn.vertexUv1s=m.has(1),fn.vertexUv2s=m.has(2),fn.vertexUv3s=m.has(3),m.clear(),fn}function y(N){const A=[];if(N.shaderID?A.push(N.shaderID):(A.push(N.customVertexShaderID),A.push(N.customFragmentShaderID)),N.defines!==void 0)for(const I in N.defines)A.push(I),A.push(N.defines[I]);return N.isRawShaderMaterial===!1&&(B(A,N),L(A,N),A.push(o.outputColorSpace)),A.push(N.customProgramCacheKey),A.join()}function B(N,A){N.push(A.precision),N.push(A.outputColorSpace),N.push(A.envMapMode),N.push(A.envMapCubeUVHeight),N.push(A.mapUv),N.push(A.alphaMapUv),N.push(A.lightMapUv),N.push(A.aoMapUv),N.push(A.bumpMapUv),N.push(A.normalMapUv),N.push(A.displacementMapUv),N.push(A.emissiveMapUv),N.push(A.metalnessMapUv),N.push(A.roughnessMapUv),N.push(A.anisotropyMapUv),N.push(A.clearcoatMapUv),N.push(A.clearcoatNormalMapUv),N.push(A.clearcoatRoughnessMapUv),N.push(A.iridescenceMapUv),N.push(A.iridescenceThicknessMapUv),N.push(A.sheenColorMapUv),N.push(A.sheenRoughnessMapUv),N.push(A.specularMapUv),N.push(A.specularColorMapUv),N.push(A.specularIntensityMapUv),N.push(A.transmissionMapUv),N.push(A.thicknessMapUv),N.push(A.combine),N.push(A.fogExp2),N.push(A.sizeAttenuation),N.push(A.morphTargetsCount),N.push(A.morphAttributeCount),N.push(A.numDirLights),N.push(A.numPointLights),N.push(A.numSpotLights),N.push(A.numSpotLightMaps),N.push(A.numHemiLights),N.push(A.numRectAreaLights),N.push(A.numDirLightShadows),N.push(A.numPointLightShadows),N.push(A.numSpotLightShadows),N.push(A.numSpotLightShadowsWithMaps),N.push(A.numLightProbes),N.push(A.shadowMapType),N.push(A.toneMapping),N.push(A.numClippingPlanes),N.push(A.numClipIntersection),N.push(A.depthPacking)}function L(N,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),N.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),N.push(d.mask)}function w(N){const A=E[N.type];let I;if(A){const nt=ra[A];I=KT.clone(nt.uniforms)}else I=N.uniforms;return I}function et(N,A){let I;for(let nt=0,K=v.length;nt<K;nt++){const ct=v[nt];if(ct.cacheKey===A){I=ct,++I.usedTimes;break}}return I===void 0&&(I=new c2(o,A,N,c),v.push(I)),I}function F(N){if(--N.usedTimes===0){const A=v.indexOf(N);v[A]=v[v.length-1],v.pop(),N.destroy()}}function O(N){p.remove(N)}function H(){p.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:w,acquireProgram:et,releaseProgram:F,releaseShaderCache:O,programs:v,dispose:H}}function m2(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function g2(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Nx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Ux(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(g,x,S,E,C,M){let y=o[e];return y===void 0?(y={id:g.id,object:g,geometry:x,material:S,groupOrder:E,renderOrder:g.renderOrder,z:C,group:M},o[e]=y):(y.id=g.id,y.object=g,y.geometry=x,y.material=S,y.groupOrder=E,y.renderOrder=g.renderOrder,y.z=C,y.group=M),e++,y}function d(g,x,S,E,C,M){const y=h(g,x,S,E,C,M);S.transmission>0?r.push(y):S.transparent===!0?l.push(y):i.push(y)}function p(g,x,S,E,C,M){const y=h(g,x,S,E,C,M);S.transmission>0?r.unshift(y):S.transparent===!0?l.unshift(y):i.unshift(y)}function m(g,x){i.length>1&&i.sort(g||g2),r.length>1&&r.sort(x||Nx),l.length>1&&l.sort(x||Nx)}function v(){for(let g=e,x=o.length;g<x;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:p,finish:v,sort:m}}function v2(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new Ux,o.set(r,[h])):l>=c.length?(h=new Ux,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function _2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new tt,color:new Ie};break;case"SpotLight":i={position:new tt,direction:new tt,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":i={color:new Ie,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[e.id]=i,i}}}function x2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let y2=0;function S2(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function M2(o){const e=new _2,i=x2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new tt);const l=new tt,c=new Ke,h=new Ke;function d(m){let v=0,g=0,x=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let S=0,E=0,C=0,M=0,y=0,B=0,L=0,w=0,et=0,F=0,O=0;m.sort(S2);for(let N=0,A=m.length;N<A;N++){const I=m[N],nt=I.color,K=I.intensity,ct=I.distance,ft=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)v+=nt.r*K,g+=nt.g*K,x+=nt.b*K;else if(I.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(I.sh.coefficients[V],K);O++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const rt=I.shadow,W=i.get(I);W.shadowIntensity=rt.intensity,W.shadowBias=rt.bias,W.shadowNormalBias=rt.normalBias,W.shadowRadius=rt.radius,W.shadowMapSize=rt.mapSize,r.directionalShadow[S]=W,r.directionalShadowMap[S]=ft,r.directionalShadowMatrix[S]=I.shadow.matrix,B++}r.directional[S]=V,S++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(nt).multiplyScalar(K),V.distance=ct,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,r.spot[C]=V;const rt=I.shadow;if(I.map&&(r.spotLightMap[et]=I.map,et++,rt.updateMatrices(I),I.castShadow&&F++),r.spotLightMatrix[C]=rt.matrix,I.castShadow){const W=i.get(I);W.shadowIntensity=rt.intensity,W.shadowBias=rt.bias,W.shadowNormalBias=rt.normalBias,W.shadowRadius=rt.radius,W.shadowMapSize=rt.mapSize,r.spotShadow[C]=W,r.spotShadowMap[C]=ft,w++}C++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(nt).multiplyScalar(K),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),r.rectArea[M]=V,M++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const rt=I.shadow,W=i.get(I);W.shadowIntensity=rt.intensity,W.shadowBias=rt.bias,W.shadowNormalBias=rt.normalBias,W.shadowRadius=rt.radius,W.shadowMapSize=rt.mapSize,W.shadowCameraNear=rt.camera.near,W.shadowCameraFar=rt.camera.far,r.pointShadow[E]=W,r.pointShadowMap[E]=ft,r.pointShadowMatrix[E]=I.shadow.matrix,L++}r.point[E]=V,E++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(K),V.groundColor.copy(I.groundColor).multiplyScalar(K),r.hemi[y]=V,y++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Xt.LTC_FLOAT_1,r.rectAreaLTC2=Xt.LTC_FLOAT_2):(r.rectAreaLTC1=Xt.LTC_HALF_1,r.rectAreaLTC2=Xt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=x;const H=r.hash;(H.directionalLength!==S||H.pointLength!==E||H.spotLength!==C||H.rectAreaLength!==M||H.hemiLength!==y||H.numDirectionalShadows!==B||H.numPointShadows!==L||H.numSpotShadows!==w||H.numSpotMaps!==et||H.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=C,r.rectArea.length=M,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=w+et-F,r.spotLightMap.length=et,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=O,H.directionalLength=S,H.pointLength=E,H.spotLength=C,H.rectAreaLength=M,H.hemiLength=y,H.numDirectionalShadows=B,H.numPointShadows=L,H.numSpotShadows=w,H.numSpotMaps=et,H.numLightProbes=O,r.version=y2++)}function p(m,v){let g=0,x=0,S=0,E=0,C=0;const M=v.matrixWorldInverse;for(let y=0,B=m.length;y<B;y++){const L=m[y];if(L.isDirectionalLight){const w=r.directional[g];w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),g++}else if(L.isSpotLight){const w=r.spot[S];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),S++}else if(L.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),h.identity(),c.copy(L.matrixWorld),c.premultiply(M),h.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const w=r.point[x];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),x++}else if(L.isHemisphereLight){const w=r.hemi[C];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(M),C++}}}return{setup:d,setupView:p,state:r}}function Lx(o){const e=new M2(o),i=[],r=[];function l(v){m.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function h(v){r.push(v)}function d(){e.setup(i)}function p(v){e.setupView(i,v)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function E2(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new Lx(o),e.set(l,[d])):c>=h.length?(d=new Lx(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}class T2 extends Bl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=aT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class b2 extends Bl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const A2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R2=`uniform sampler2D shadow_pass;
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
}`;function C2(o,e,i){let r=new lm;const l=new Wt,c=new Wt,h=new cn,d=new T2({depthPacking:rT}),p=new b2,m={},v=i.maxTextureSize,g={[vr]:si,[si]:vr,[wa]:wa},x=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:A2,fragmentShader:R2}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new Oa;E.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new un(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jx;let y=this.type;this.render=function(F,O,H){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;const N=o.getRenderTarget(),A=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),nt=o.state;nt.setBlending(mr),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const K=y!==Ca&&this.type===Ca,ct=y===Ca&&this.type!==Ca;for(let ft=0,V=F.length;ft<V;ft++){const rt=F[ft],W=rt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const St=W.getFrameExtents();if(l.multiply(St),c.copy(W.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/St.x),l.x=c.x*St.x,W.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/St.y),l.y=c.y*St.y,W.mapSize.y=c.y)),W.map===null||K===!0||ct===!0){const Ft=this.type!==Ca?{minFilter:yi,magFilter:yi}:{};W.map!==null&&W.map.dispose(),W.map=new ns(l.x,l.y,Ft),W.map.texture.name=rt.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const At=W.getViewportCount();for(let Ft=0;Ft<At;Ft++){const ae=W.getViewport(Ft);h.set(c.x*ae.x,c.y*ae.y,c.x*ae.z,c.y*ae.w),nt.viewport(h),W.updateMatrices(rt,Ft),r=W.getFrustum(),w(O,H,W.camera,rt,this.type)}W.isPointLightShadow!==!0&&this.type===Ca&&B(W,H),W.needsUpdate=!1}y=this.type,M.needsUpdate=!1,o.setRenderTarget(N,A,I)};function B(F,O){const H=e.update(C);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ns(l.x,l.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(O,null,H,x,C,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(O,null,H,S,C,null)}function L(F,O,H,N){let A=null;const I=H.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(I!==void 0)A=I;else if(A=H.isPointLight===!0?p:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const nt=A.uuid,K=O.uuid;let ct=m[nt];ct===void 0&&(ct={},m[nt]=ct);let ft=ct[K];ft===void 0&&(ft=A.clone(),ct[K]=ft,O.addEventListener("dispose",et)),A=ft}if(A.visible=O.visible,A.wireframe=O.wireframe,N===Ca?A.side=O.shadowSide!==null?O.shadowSide:O.side:A.side=O.shadowSide!==null?O.shadowSide:g[O.side],A.alphaMap=O.alphaMap,A.alphaTest=O.alphaTest,A.map=O.map,A.clipShadows=O.clipShadows,A.clippingPlanes=O.clippingPlanes,A.clipIntersection=O.clipIntersection,A.displacementMap=O.displacementMap,A.displacementScale=O.displacementScale,A.displacementBias=O.displacementBias,A.wireframeLinewidth=O.wireframeLinewidth,A.linewidth=O.linewidth,H.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const nt=o.properties.get(A);nt.light=H}return A}function w(F,O,H,N,A){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&A===Ca)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,F.matrixWorld);const K=e.update(F),ct=F.material;if(Array.isArray(ct)){const ft=K.groups;for(let V=0,rt=ft.length;V<rt;V++){const W=ft[V],St=ct[W.materialIndex];if(St&&St.visible){const At=L(F,St,N,A);F.onBeforeShadow(o,F,O,H,K,At,W),o.renderBufferDirect(H,null,K,At,F,W),F.onAfterShadow(o,F,O,H,K,At,W)}}}else if(ct.visible){const ft=L(F,ct,N,A);F.onBeforeShadow(o,F,O,H,K,ft,null),o.renderBufferDirect(H,null,K,ft,F,null),F.onAfterShadow(o,F,O,H,K,ft,null)}}const nt=F.children;for(let K=0,ct=nt.length;K<ct;K++)w(nt[K],O,H,N,A)}function et(F){F.target.removeEventListener("dispose",et);for(const H in m){const N=m[H],A=F.target.uuid;A in N&&(N[A].dispose(),delete N[A])}}}const w2={[fp]:hp,[dp]:gp,[pp]:vp,[go]:mp,[hp]:fp,[gp]:dp,[vp]:pp,[mp]:go};function D2(o,e){function i(){let X=!1;const Ht=new cn;let ht=null;const yt=new cn(0,0,0,0);return{setMask:function(Bt){ht!==Bt&&!X&&(o.colorMask(Bt,Bt,Bt,Bt),ht=Bt)},setLocked:function(Bt){X=Bt},setClear:function(Bt,Vt,fe,qe,fn){fn===!0&&(Bt*=qe,Vt*=qe,fe*=qe),Ht.set(Bt,Vt,fe,qe),yt.equals(Ht)===!1&&(o.clearColor(Bt,Vt,fe,qe),yt.copy(Ht))},reset:function(){X=!1,ht=null,yt.set(-1,0,0,0)}}}function r(){let X=!1,Ht=!1,ht=null,yt=null,Bt=null;return{setReversed:function(Vt){if(Ht!==Vt){const fe=e.get("EXT_clip_control");Ht?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT);const qe=Bt;Bt=null,this.setClear(qe)}Ht=Vt},getReversed:function(){return Ht},setTest:function(Vt){Vt?ut(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(Vt){ht!==Vt&&!X&&(o.depthMask(Vt),ht=Vt)},setFunc:function(Vt){if(Ht&&(Vt=w2[Vt]),yt!==Vt){switch(Vt){case fp:o.depthFunc(o.NEVER);break;case hp:o.depthFunc(o.ALWAYS);break;case dp:o.depthFunc(o.LESS);break;case go:o.depthFunc(o.LEQUAL);break;case pp:o.depthFunc(o.EQUAL);break;case mp:o.depthFunc(o.GEQUAL);break;case gp:o.depthFunc(o.GREATER);break;case vp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}yt=Vt}},setLocked:function(Vt){X=Vt},setClear:function(Vt){Bt!==Vt&&(Ht&&(Vt=1-Vt),o.clearDepth(Vt),Bt=Vt)},reset:function(){X=!1,ht=null,yt=null,Bt=null,Ht=!1}}}function l(){let X=!1,Ht=null,ht=null,yt=null,Bt=null,Vt=null,fe=null,qe=null,fn=null;return{setTest:function(Ae){X||(Ae?ut(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(Ae){Ht!==Ae&&!X&&(o.stencilMask(Ae),Ht=Ae)},setFunc:function(Ae,bt,oe){(ht!==Ae||yt!==bt||Bt!==oe)&&(o.stencilFunc(Ae,bt,oe),ht=Ae,yt=bt,Bt=oe)},setOp:function(Ae,bt,oe){(Vt!==Ae||fe!==bt||qe!==oe)&&(o.stencilOp(Ae,bt,oe),Vt=Ae,fe=bt,qe=oe)},setLocked:function(Ae){X=Ae},setClear:function(Ae){fn!==Ae&&(o.clearStencil(Ae),fn=Ae)},reset:function(){X=!1,Ht=null,ht=null,yt=null,Bt=null,Vt=null,fe=null,qe=null,fn=null}}}const c=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let v={},g={},x=new WeakMap,S=[],E=null,C=!1,M=null,y=null,B=null,L=null,w=null,et=null,F=null,O=new Ie(0,0,0),H=0,N=!1,A=null,I=null,nt=null,K=null,ct=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,rt=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=rt>=1):W.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=rt>=2);let St=null,At={};const Ft=o.getParameter(o.SCISSOR_BOX),ae=o.getParameter(o.VIEWPORT),de=new cn().fromArray(Ft),D=new cn().fromArray(ae);function Y(X,Ht,ht,yt){const Bt=new Uint8Array(4),Vt=o.createTexture();o.bindTexture(X,Vt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let fe=0;fe<ht;fe++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ht,0,o.RGBA,1,1,yt,0,o.RGBA,o.UNSIGNED_BYTE,Bt):o.texImage2D(Ht+fe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Bt);return Vt}const vt={};vt[o.TEXTURE_2D]=Y(o.TEXTURE_2D,o.TEXTURE_2D,1),vt[o.TEXTURE_CUBE_MAP]=Y(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[o.TEXTURE_2D_ARRAY]=Y(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),vt[o.TEXTURE_3D]=Y(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ut(o.DEPTH_TEST),h.setFunc(go),Tt(!1),Ut(z_),ut(o.CULL_FACE),z(mr);function ut(X){v[X]!==!0&&(o.enable(X),v[X]=!0)}function Dt(X){v[X]!==!1&&(o.disable(X),v[X]=!1)}function Pt(X,Ht){return g[X]!==Ht?(o.bindFramebuffer(X,Ht),g[X]=Ht,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ht),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ht),!0):!1}function Lt(X,Ht){let ht=S,yt=!1;if(X){ht=x.get(Ht),ht===void 0&&(ht=[],x.set(Ht,ht));const Bt=X.textures;if(ht.length!==Bt.length||ht[0]!==o.COLOR_ATTACHMENT0){for(let Vt=0,fe=Bt.length;Vt<fe;Vt++)ht[Vt]=o.COLOR_ATTACHMENT0+Vt;ht.length=Bt.length,yt=!0}}else ht[0]!==o.BACK&&(ht[0]=o.BACK,yt=!0);yt&&o.drawBuffers(ht)}function Mt(X){return E!==X?(o.useProgram(X),E=X,!0):!1}const at={[Kr]:o.FUNC_ADD,[UE]:o.FUNC_SUBTRACT,[LE]:o.FUNC_REVERSE_SUBTRACT};at[OE]=o.MIN,at[PE]=o.MAX;const Rt={[zE]:o.ZERO,[IE]:o.ONE,[BE]:o.SRC_COLOR,[up]:o.SRC_ALPHA,[kE]:o.SRC_ALPHA_SATURATE,[VE]:o.DST_COLOR,[HE]:o.DST_ALPHA,[FE]:o.ONE_MINUS_SRC_COLOR,[cp]:o.ONE_MINUS_SRC_ALPHA,[XE]:o.ONE_MINUS_DST_COLOR,[GE]:o.ONE_MINUS_DST_ALPHA,[YE]:o.CONSTANT_COLOR,[qE]:o.ONE_MINUS_CONSTANT_COLOR,[WE]:o.CONSTANT_ALPHA,[jE]:o.ONE_MINUS_CONSTANT_ALPHA};function z(X,Ht,ht,yt,Bt,Vt,fe,qe,fn,Ae){if(X===mr){C===!0&&(Dt(o.BLEND),C=!1);return}if(C===!1&&(ut(o.BLEND),C=!0),X!==NE){if(X!==M||Ae!==N){if((y!==Kr||w!==Kr)&&(o.blendEquation(o.FUNC_ADD),y=Kr,w=Kr),Ae)switch(X){case ho:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case I_:o.blendFunc(o.ONE,o.ONE);break;case B_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case F_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ho:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case I_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case B_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case F_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}B=null,L=null,et=null,F=null,O.set(0,0,0),H=0,M=X,N=Ae}return}Bt=Bt||Ht,Vt=Vt||ht,fe=fe||yt,(Ht!==y||Bt!==w)&&(o.blendEquationSeparate(at[Ht],at[Bt]),y=Ht,w=Bt),(ht!==B||yt!==L||Vt!==et||fe!==F)&&(o.blendFuncSeparate(Rt[ht],Rt[yt],Rt[Vt],Rt[fe]),B=ht,L=yt,et=Vt,F=fe),(qe.equals(O)===!1||fn!==H)&&(o.blendColor(qe.r,qe.g,qe.b,fn),O.copy(qe),H=fn),M=X,N=!1}function Qt(X,Ht){X.side===wa?Dt(o.CULL_FACE):ut(o.CULL_FACE);let ht=X.side===si;Ht&&(ht=!ht),Tt(ht),X.blending===ho&&X.transparent===!1?z(mr):z(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const yt=X.stencilWrite;d.setTest(yt),yt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),$t(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ut(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(X){A!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),A=X)}function Ut(X){X!==CE?(ut(o.CULL_FACE),X!==I&&(X===z_?o.cullFace(o.BACK):X===wE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),I=X}function xt(X){X!==nt&&(V&&o.lineWidth(X),nt=X)}function $t(X,Ht,ht){X?(ut(o.POLYGON_OFFSET_FILL),(K!==Ht||ct!==ht)&&(o.polygonOffset(Ht,ht),K=Ht,ct=ht)):Dt(o.POLYGON_OFFSET_FILL)}function Gt(X){X?ut(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function U(X){X===void 0&&(X=o.TEXTURE0+ft-1),St!==X&&(o.activeTexture(X),St=X)}function b(X,Ht,ht){ht===void 0&&(St===null?ht=o.TEXTURE0+ft-1:ht=St);let yt=At[ht];yt===void 0&&(yt={type:void 0,texture:void 0},At[ht]=yt),(yt.type!==X||yt.texture!==Ht)&&(St!==ht&&(o.activeTexture(ht),St=ht),o.bindTexture(X,Ht||vt[X]),yt.type=X,yt.texture=Ht)}function J(){const X=At[St];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function dt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{o.compressedTexImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pt(){try{o.texSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Kt(){try{o.texSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ot(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{o.texStorage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(){try{o.texStorage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(){try{o.texImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(){try{o.texImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function se(X){de.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),de.copy(X))}function Yt(X){D.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),D.copy(X))}function Se(X,Ht){let ht=m.get(Ht);ht===void 0&&(ht=new WeakMap,m.set(Ht,ht));let yt=ht.get(X);yt===void 0&&(yt=o.getUniformBlockIndex(Ht,X.name),ht.set(X,yt))}function me(X,Ht){const yt=m.get(Ht).get(X);p.get(Ht)!==yt&&(o.uniformBlockBinding(Ht,yt,X.__bindingPointIndex),p.set(Ht,yt))}function Pe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},St=null,At={},g={},x=new WeakMap,S=[],E=null,C=!1,M=null,y=null,B=null,L=null,w=null,et=null,F=null,O=new Ie(0,0,0),H=0,N=!1,A=null,I=null,nt=null,K=null,ct=null,de.set(0,0,o.canvas.width,o.canvas.height),D.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ut,disable:Dt,bindFramebuffer:Pt,drawBuffers:Lt,useProgram:Mt,setBlending:z,setMaterial:Qt,setFlipSided:Tt,setCullFace:Ut,setLineWidth:xt,setPolygonOffset:$t,setScissorTest:Gt,activeTexture:U,bindTexture:b,unbindTexture:J,compressedTexImage2D:dt,compressedTexImage3D:Et,texImage2D:jt,texImage3D:wt,updateUBOMapping:Se,uniformBlockBinding:me,texStorage2D:pe,texStorage3D:Ct,texSubImage2D:pt,texSubImage3D:Kt,compressedTexSubImage2D:Ot,compressedTexSubImage3D:zt,scissor:se,viewport:Yt,reset:Pe}}function Ox(o,e,i,r){const l=N2(r);switch(i){case ey:return o*e;case iy:return o*e;case ay:return o*e*2;case im:return o*e/l.components*l.byteLength;case am:return o*e/l.components*l.byteLength;case ry:return o*e*2/l.components*l.byteLength;case rm:return o*e*2/l.components*l.byteLength;case ny:return o*e*3/l.components*l.byteLength;case Yi:return o*e*4/l.components*l.byteLength;case sm:return o*e*4/l.components*l.byteLength;case Uc:case Lc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Oc:case Pc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ep:case bp:return Math.max(o,16)*Math.max(e,8)/4;case Mp:case Tp:return Math.max(o,8)*Math.max(e,8)/2;case Ap:case Rp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Cp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case wp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Dp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Np:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Up:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Lp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Op:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Pp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case zp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ip:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Bp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Fp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Hp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Gp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Vp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case zc:case Xp:case kp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case sy:case Yp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case qp:case Wp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function N2(o){switch(o){case La:case Jx:return{byteLength:1,components:1};case Dl:case $x:case Pl:return{byteLength:2,components:1};case em:case nm:return{byteLength:2,components:4};case es:case tm:case sa:return{byteLength:4,components:1};case ty:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function U2(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Wt,v=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,b){return S?new OffscreenCanvas(U,b):Hc("canvas")}function C(U,b,J){let dt=1;const Et=Gt(U);if((Et.width>J||Et.height>J)&&(dt=J/Math.max(Et.width,Et.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const pt=Math.floor(dt*Et.width),Kt=Math.floor(dt*Et.height);g===void 0&&(g=E(pt,Kt));const Ot=b?E(pt,Kt):g;return Ot.width=pt,Ot.height=Kt,Ot.getContext("2d").drawImage(U,0,0,pt,Kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+pt+"x"+Kt+")."),Ot}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),U;return U}function M(U){return U.generateMipmaps}function y(U){o.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(U,b,J,dt,Et=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let pt=b;if(b===o.RED&&(J===o.FLOAT&&(pt=o.R32F),J===o.HALF_FLOAT&&(pt=o.R16F),J===o.UNSIGNED_BYTE&&(pt=o.R8)),b===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(pt=o.R8UI),J===o.UNSIGNED_SHORT&&(pt=o.R16UI),J===o.UNSIGNED_INT&&(pt=o.R32UI),J===o.BYTE&&(pt=o.R8I),J===o.SHORT&&(pt=o.R16I),J===o.INT&&(pt=o.R32I)),b===o.RG&&(J===o.FLOAT&&(pt=o.RG32F),J===o.HALF_FLOAT&&(pt=o.RG16F),J===o.UNSIGNED_BYTE&&(pt=o.RG8)),b===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(pt=o.RG8UI),J===o.UNSIGNED_SHORT&&(pt=o.RG16UI),J===o.UNSIGNED_INT&&(pt=o.RG32UI),J===o.BYTE&&(pt=o.RG8I),J===o.SHORT&&(pt=o.RG16I),J===o.INT&&(pt=o.RG32I)),b===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),J===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),J===o.UNSIGNED_INT&&(pt=o.RGB32UI),J===o.BYTE&&(pt=o.RGB8I),J===o.SHORT&&(pt=o.RGB16I),J===o.INT&&(pt=o.RGB32I)),b===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),J===o.UNSIGNED_INT&&(pt=o.RGBA32UI),J===o.BYTE&&(pt=o.RGBA8I),J===o.SHORT&&(pt=o.RGBA16I),J===o.INT&&(pt=o.RGBA32I)),b===o.RGB&&J===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),b===o.RGBA){const Kt=Et?Xc:Oe.getTransfer(dt);J===o.FLOAT&&(pt=o.RGBA32F),J===o.HALF_FLOAT&&(pt=o.RGBA16F),J===o.UNSIGNED_BYTE&&(pt=Kt===je?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function w(U,b){let J;return U?b===null||b===es||b===xo?J=o.DEPTH24_STENCIL8:b===sa?J=o.DEPTH32F_STENCIL8:b===Dl&&(J=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===es||b===xo?J=o.DEPTH_COMPONENT24:b===sa?J=o.DEPTH_COMPONENT32F:b===Dl&&(J=o.DEPTH_COMPONENT16),J}function et(U,b){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==yi&&U.minFilter!==Li?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function F(U){const b=U.target;b.removeEventListener("dispose",F),H(b),b.isVideoTexture&&v.delete(b)}function O(U){const b=U.target;b.removeEventListener("dispose",O),A(b)}function H(U){const b=r.get(U);if(b.__webglInit===void 0)return;const J=U.source,dt=x.get(J);if(dt){const Et=dt[b.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&N(U),Object.keys(dt).length===0&&x.delete(J)}r.remove(U)}function N(U){const b=r.get(U);o.deleteTexture(b.__webglTexture);const J=U.source,dt=x.get(J);delete dt[b.__cacheKey],h.memory.textures--}function A(U){const b=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let Et=0;Et<b.__webglFramebuffer[dt].length;Et++)o.deleteFramebuffer(b.__webglFramebuffer[dt][Et]);else o.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)o.deleteFramebuffer(b.__webglFramebuffer[dt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=U.textures;for(let dt=0,Et=J.length;dt<Et;dt++){const pt=r.get(J[dt]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),h.memory.textures--),r.remove(J[dt])}r.remove(U)}let I=0;function nt(){I=0}function K(){const U=I;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),I+=1,U}function ct(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function ft(U,b){const J=r.get(U);if(U.isVideoTexture&&xt(U),U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){const dt=U.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(J,U,b);return}}i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+b)}function V(U,b){const J=r.get(U);if(U.version>0&&J.__version!==U.version){D(J,U,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+b)}function rt(U,b){const J=r.get(U);if(U.version>0&&J.__version!==U.version){D(J,U,b);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+b)}function W(U,b){const J=r.get(U);if(U.version>0&&J.__version!==U.version){Y(J,U,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+b)}const St={[yp]:o.REPEAT,[$r]:o.CLAMP_TO_EDGE,[Sp]:o.MIRRORED_REPEAT},At={[yi]:o.NEAREST,[iT]:o.NEAREST_MIPMAP_NEAREST,[sc]:o.NEAREST_MIPMAP_LINEAR,[Li]:o.LINEAR,[bd]:o.LINEAR_MIPMAP_NEAREST,[ts]:o.LINEAR_MIPMAP_LINEAR},Ft={[oT]:o.NEVER,[dT]:o.ALWAYS,[lT]:o.LESS,[ly]:o.LEQUAL,[uT]:o.EQUAL,[hT]:o.GEQUAL,[cT]:o.GREATER,[fT]:o.NOTEQUAL};function ae(U,b){if(b.type===sa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Li||b.magFilter===bd||b.magFilter===sc||b.magFilter===ts||b.minFilter===Li||b.minFilter===bd||b.minFilter===sc||b.minFilter===ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,St[b.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,St[b.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,St[b.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,At[b.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,At[b.minFilter]),b.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Ft[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===yi||b.minFilter!==sc&&b.minFilter!==ts||b.type===sa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function de(U,b){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",F));const dt=b.source;let Et=x.get(dt);Et===void 0&&(Et={},x.set(dt,Et));const pt=ct(b);if(pt!==U.__cacheKey){Et[pt]===void 0&&(Et[pt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,J=!0),Et[pt].usedTimes++;const Kt=Et[U.__cacheKey];Kt!==void 0&&(Et[U.__cacheKey].usedTimes--,Kt.usedTimes===0&&N(b)),U.__cacheKey=pt,U.__webglTexture=Et[pt].texture}return J}function D(U,b,J){let dt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=o.TEXTURE_3D);const Et=de(U,b),pt=b.source;i.bindTexture(dt,U.__webglTexture,o.TEXTURE0+J);const Kt=r.get(pt);if(pt.version!==Kt.__version||Et===!0){i.activeTexture(o.TEXTURE0+J);const Ot=Oe.getPrimaries(Oe.workingColorSpace),zt=b.colorSpace===pr?null:Oe.getPrimaries(b.colorSpace),pe=b.colorSpace===pr||Ot===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Ct=C(b.image,!1,l.maxTextureSize);Ct=$t(b,Ct);const jt=c.convert(b.format,b.colorSpace),wt=c.convert(b.type);let se=L(b.internalFormat,jt,wt,b.colorSpace,b.isVideoTexture);ae(dt,b);let Yt;const Se=b.mipmaps,me=b.isVideoTexture!==!0,Pe=Kt.__version===void 0||Et===!0,X=pt.dataReady,Ht=et(b,Ct);if(b.isDepthTexture)se=w(b.format===yo,b.type),Pe&&(me?i.texStorage2D(o.TEXTURE_2D,1,se,Ct.width,Ct.height):i.texImage2D(o.TEXTURE_2D,0,se,Ct.width,Ct.height,0,jt,wt,null));else if(b.isDataTexture)if(Se.length>0){me&&Pe&&i.texStorage2D(o.TEXTURE_2D,Ht,se,Se[0].width,Se[0].height);for(let ht=0,yt=Se.length;ht<yt;ht++)Yt=Se[ht],me?X&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,Yt.width,Yt.height,jt,wt,Yt.data):i.texImage2D(o.TEXTURE_2D,ht,se,Yt.width,Yt.height,0,jt,wt,Yt.data);b.generateMipmaps=!1}else me?(Pe&&i.texStorage2D(o.TEXTURE_2D,Ht,se,Ct.width,Ct.height),X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ct.width,Ct.height,jt,wt,Ct.data)):i.texImage2D(o.TEXTURE_2D,0,se,Ct.width,Ct.height,0,jt,wt,Ct.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){me&&Pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ht,se,Se[0].width,Se[0].height,Ct.depth);for(let ht=0,yt=Se.length;ht<yt;ht++)if(Yt=Se[ht],b.format!==Yi)if(jt!==null)if(me){if(X)if(b.layerUpdates.size>0){const Bt=Ox(Yt.width,Yt.height,b.format,b.type);for(const Vt of b.layerUpdates){const fe=Yt.data.subarray(Vt*Bt/Yt.data.BYTES_PER_ELEMENT,(Vt+1)*Bt/Yt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,Vt,Yt.width,Yt.height,1,jt,fe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,0,Yt.width,Yt.height,Ct.depth,jt,Yt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ht,se,Yt.width,Yt.height,Ct.depth,0,Yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,0,Yt.width,Yt.height,Ct.depth,jt,wt,Yt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ht,se,Yt.width,Yt.height,Ct.depth,0,jt,wt,Yt.data)}else{me&&Pe&&i.texStorage2D(o.TEXTURE_2D,Ht,se,Se[0].width,Se[0].height);for(let ht=0,yt=Se.length;ht<yt;ht++)Yt=Se[ht],b.format!==Yi?jt!==null?me?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,ht,0,0,Yt.width,Yt.height,jt,Yt.data):i.compressedTexImage2D(o.TEXTURE_2D,ht,se,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?X&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,Yt.width,Yt.height,jt,wt,Yt.data):i.texImage2D(o.TEXTURE_2D,ht,se,Yt.width,Yt.height,0,jt,wt,Yt.data)}else if(b.isDataArrayTexture)if(me){if(Pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ht,se,Ct.width,Ct.height,Ct.depth),X)if(b.layerUpdates.size>0){const ht=Ox(Ct.width,Ct.height,b.format,b.type);for(const yt of b.layerUpdates){const Bt=Ct.data.subarray(yt*ht/Ct.data.BYTES_PER_ELEMENT,(yt+1)*ht/Ct.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,yt,Ct.width,Ct.height,1,jt,wt,Bt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,jt,wt,Ct.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,se,Ct.width,Ct.height,Ct.depth,0,jt,wt,Ct.data);else if(b.isData3DTexture)me?(Pe&&i.texStorage3D(o.TEXTURE_3D,Ht,se,Ct.width,Ct.height,Ct.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,jt,wt,Ct.data)):i.texImage3D(o.TEXTURE_3D,0,se,Ct.width,Ct.height,Ct.depth,0,jt,wt,Ct.data);else if(b.isFramebufferTexture){if(Pe)if(me)i.texStorage2D(o.TEXTURE_2D,Ht,se,Ct.width,Ct.height);else{let ht=Ct.width,yt=Ct.height;for(let Bt=0;Bt<Ht;Bt++)i.texImage2D(o.TEXTURE_2D,Bt,se,ht,yt,0,jt,wt,null),ht>>=1,yt>>=1}}else if(Se.length>0){if(me&&Pe){const ht=Gt(Se[0]);i.texStorage2D(o.TEXTURE_2D,Ht,se,ht.width,ht.height)}for(let ht=0,yt=Se.length;ht<yt;ht++)Yt=Se[ht],me?X&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,jt,wt,Yt):i.texImage2D(o.TEXTURE_2D,ht,se,jt,wt,Yt);b.generateMipmaps=!1}else if(me){if(Pe){const ht=Gt(Ct);i.texStorage2D(o.TEXTURE_2D,Ht,se,ht.width,ht.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,jt,wt,Ct)}else i.texImage2D(o.TEXTURE_2D,0,se,jt,wt,Ct);M(b)&&y(dt),Kt.__version=pt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Y(U,b,J){if(b.image.length!==6)return;const dt=de(U,b),Et=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+J);const pt=r.get(Et);if(Et.version!==pt.__version||dt===!0){i.activeTexture(o.TEXTURE0+J);const Kt=Oe.getPrimaries(Oe.workingColorSpace),Ot=b.colorSpace===pr?null:Oe.getPrimaries(b.colorSpace),zt=b.colorSpace===pr||Kt===Ot?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const pe=b.isCompressedTexture||b.image[0].isCompressedTexture,Ct=b.image[0]&&b.image[0].isDataTexture,jt=[];for(let yt=0;yt<6;yt++)!pe&&!Ct?jt[yt]=C(b.image[yt],!0,l.maxCubemapSize):jt[yt]=Ct?b.image[yt].image:b.image[yt],jt[yt]=$t(b,jt[yt]);const wt=jt[0],se=c.convert(b.format,b.colorSpace),Yt=c.convert(b.type),Se=L(b.internalFormat,se,Yt,b.colorSpace),me=b.isVideoTexture!==!0,Pe=pt.__version===void 0||dt===!0,X=Et.dataReady;let Ht=et(b,wt);ae(o.TEXTURE_CUBE_MAP,b);let ht;if(pe){me&&Pe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,Se,wt.width,wt.height);for(let yt=0;yt<6;yt++){ht=jt[yt].mipmaps;for(let Bt=0;Bt<ht.length;Bt++){const Vt=ht[Bt];b.format!==Yi?se!==null?me?X&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt,0,0,Vt.width,Vt.height,se,Vt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt,Se,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt,0,0,Vt.width,Vt.height,se,Yt,Vt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt,Se,Vt.width,Vt.height,0,se,Yt,Vt.data)}}}else{if(ht=b.mipmaps,me&&Pe){ht.length>0&&Ht++;const yt=Gt(jt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,Se,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Ct){me?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,jt[yt].width,jt[yt].height,se,Yt,jt[yt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Se,jt[yt].width,jt[yt].height,0,se,Yt,jt[yt].data);for(let Bt=0;Bt<ht.length;Bt++){const fe=ht[Bt].image[yt].image;me?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt+1,0,0,fe.width,fe.height,se,Yt,fe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt+1,Se,fe.width,fe.height,0,se,Yt,fe.data)}}else{me?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,se,Yt,jt[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Se,se,Yt,jt[yt]);for(let Bt=0;Bt<ht.length;Bt++){const Vt=ht[Bt];me?X&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt+1,0,0,se,Yt,Vt.image[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt+1,Se,se,Yt,Vt.image[yt])}}}M(b)&&y(o.TEXTURE_CUBE_MAP),pt.__version=Et.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function vt(U,b,J,dt,Et,pt){const Kt=c.convert(J.format,J.colorSpace),Ot=c.convert(J.type),zt=L(J.internalFormat,Kt,Ot,J.colorSpace),pe=r.get(b),Ct=r.get(J);if(Ct.__renderTarget=b,!pe.__hasExternalTextures){const jt=Math.max(1,b.width>>pt),wt=Math.max(1,b.height>>pt);Et===o.TEXTURE_3D||Et===o.TEXTURE_2D_ARRAY?i.texImage3D(Et,pt,zt,jt,wt,b.depth,0,Kt,Ot,null):i.texImage2D(Et,pt,zt,jt,wt,0,Kt,Ot,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Ut(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,Et,Ct.__webglTexture,0,Tt(b)):(Et===o.TEXTURE_2D||Et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,Et,Ct.__webglTexture,pt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ut(U,b,J){if(o.bindRenderbuffer(o.RENDERBUFFER,U),b.depthBuffer){const dt=b.depthTexture,Et=dt&&dt.isDepthTexture?dt.type:null,pt=w(b.stencilBuffer,Et),Kt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=Tt(b);Ut(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ot,pt,b.width,b.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,pt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,pt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Kt,o.RENDERBUFFER,U)}else{const dt=b.textures;for(let Et=0;Et<dt.length;Et++){const pt=dt[Et],Kt=c.convert(pt.format,pt.colorSpace),Ot=c.convert(pt.type),zt=L(pt.internalFormat,Kt,Ot,pt.colorSpace),pe=Tt(b);J&&Ut(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,zt,b.width,b.height):Ut(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pe,zt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,zt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Dt(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=r.get(b.depthTexture);dt.__renderTarget=b,(!dt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ft(b.depthTexture,0);const Et=dt.__webglTexture,pt=Tt(b);if(b.depthTexture.format===po)Ut(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0);else if(b.depthTexture.format===yo)Ut(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Pt(U){const b=r.get(U),J=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const Et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",Et)};dt.addEventListener("dispose",Et),b.__depthDisposeCallback=Et}b.__boundDepthTexture=dt}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Dt(b.__webglFramebuffer,U)}else if(J){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=o.createRenderbuffer(),ut(b.__webglDepthbuffer[dt],U,!1);else{const Et=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,pt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),ut(b.__webglDepthbuffer,U,!1);else{const dt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Et=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Et),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,Et)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Lt(U,b,J){const dt=r.get(U);b!==void 0&&vt(dt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&Pt(U)}function Mt(U){const b=U.texture,J=r.get(U),dt=r.get(b);U.addEventListener("dispose",O);const Et=U.textures,pt=U.isWebGLCubeRenderTarget===!0,Kt=Et.length>1;if(Kt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=b.version,h.memory.textures++),pt){J.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[Ot]=[];for(let zt=0;zt<b.mipmaps.length;zt++)J.__webglFramebuffer[Ot][zt]=o.createFramebuffer()}else J.__webglFramebuffer[Ot]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ot=0;Ot<b.mipmaps.length;Ot++)J.__webglFramebuffer[Ot]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(Kt)for(let Ot=0,zt=Et.length;Ot<zt;Ot++){const pe=r.get(Et[Ot]);pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Ut(U)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ot=0;Ot<Et.length;Ot++){const zt=Et[Ot];J.__webglColorRenderbuffer[Ot]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[Ot]);const pe=c.convert(zt.format,zt.colorSpace),Ct=c.convert(zt.type),jt=L(zt.internalFormat,pe,Ct,zt.colorSpace,U.isXRRenderTarget===!0),wt=Tt(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,jt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,J.__webglColorRenderbuffer[Ot])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),ut(J.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),ae(o.TEXTURE_CUBE_MAP,b);for(let Ot=0;Ot<6;Ot++)if(b.mipmaps&&b.mipmaps.length>0)for(let zt=0;zt<b.mipmaps.length;zt++)vt(J.__webglFramebuffer[Ot][zt],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,zt);else vt(J.__webglFramebuffer[Ot],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0);M(b)&&y(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Kt){for(let Ot=0,zt=Et.length;Ot<zt;Ot++){const pe=Et[Ot],Ct=r.get(pe);i.bindTexture(o.TEXTURE_2D,Ct.__webglTexture),ae(o.TEXTURE_2D,pe),vt(J.__webglFramebuffer,U,pe,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,0),M(pe)&&y(o.TEXTURE_2D)}i.unbindTexture()}else{let Ot=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ot=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ot,dt.__webglTexture),ae(Ot,b),b.mipmaps&&b.mipmaps.length>0)for(let zt=0;zt<b.mipmaps.length;zt++)vt(J.__webglFramebuffer[zt],U,b,o.COLOR_ATTACHMENT0,Ot,zt);else vt(J.__webglFramebuffer,U,b,o.COLOR_ATTACHMENT0,Ot,0);M(b)&&y(Ot),i.unbindTexture()}U.depthBuffer&&Pt(U)}function at(U){const b=U.textures;for(let J=0,dt=b.length;J<dt;J++){const Et=b[J];if(M(Et)){const pt=B(U),Kt=r.get(Et).__webglTexture;i.bindTexture(pt,Kt),y(pt),i.unbindTexture()}}}const Rt=[],z=[];function Qt(U){if(U.samples>0){if(Ut(U)===!1){const b=U.textures,J=U.width,dt=U.height;let Et=o.COLOR_BUFFER_BIT;const pt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Kt=r.get(U),Ot=b.length>1;if(Ot)for(let zt=0;zt<b.length;zt++)i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let zt=0;zt<b.length;zt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Et|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Et|=o.STENCIL_BUFFER_BIT)),Ot){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Kt.__webglColorRenderbuffer[zt]);const pe=r.get(b[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,pe,0)}o.blitFramebuffer(0,0,J,dt,0,0,J,dt,Et,o.NEAREST),p===!0&&(Rt.length=0,z.length=0,Rt.push(o.COLOR_ATTACHMENT0+zt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Rt.push(pt),z.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,z)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Rt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ot)for(let zt=0;zt<b.length;zt++){i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,Kt.__webglColorRenderbuffer[zt]);const pe=r.get(b[zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,pe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const b=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Tt(U){return Math.min(l.maxSamples,U.samples)}function Ut(U){const b=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function xt(U){const b=h.render.frame;v.get(U)!==b&&(v.set(U,b),U.update())}function $t(U,b){const J=U.colorSpace,dt=U.format,Et=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==Mo&&J!==pr&&(Oe.getTransfer(J)===je?(dt!==Yi||Et!==La)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),b}function Gt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=K,this.resetTextureUnits=nt,this.setTexture2D=ft,this.setTexture2DArray=V,this.setTexture3D=rt,this.setTextureCube=W,this.rebindTextures=Lt,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Ut}function L2(o,e){function i(r,l=pr){let c;const h=Oe.getTransfer(l);if(r===La)return o.UNSIGNED_BYTE;if(r===em)return o.UNSIGNED_SHORT_4_4_4_4;if(r===nm)return o.UNSIGNED_SHORT_5_5_5_1;if(r===ty)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Jx)return o.BYTE;if(r===$x)return o.SHORT;if(r===Dl)return o.UNSIGNED_SHORT;if(r===tm)return o.INT;if(r===es)return o.UNSIGNED_INT;if(r===sa)return o.FLOAT;if(r===Pl)return o.HALF_FLOAT;if(r===ey)return o.ALPHA;if(r===ny)return o.RGB;if(r===Yi)return o.RGBA;if(r===iy)return o.LUMINANCE;if(r===ay)return o.LUMINANCE_ALPHA;if(r===po)return o.DEPTH_COMPONENT;if(r===yo)return o.DEPTH_STENCIL;if(r===im)return o.RED;if(r===am)return o.RED_INTEGER;if(r===ry)return o.RG;if(r===rm)return o.RG_INTEGER;if(r===sm)return o.RGBA_INTEGER;if(r===Uc||r===Lc||r===Oc||r===Pc)if(h===je)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Uc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Uc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mp||r===Ep||r===Tp||r===bp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Mp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ep)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Tp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ap||r===Rp||r===Cp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Ap||r===Rp)return h===je?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Cp)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wp||r===Dp||r===Np||r===Up||r===Lp||r===Op||r===Pp||r===zp||r===Ip||r===Bp||r===Fp||r===Hp||r===Gp||r===Vp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===wp)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Dp)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Np)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Up)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lp)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Op)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Pp)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zp)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ip)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bp)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fp)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hp)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gp)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vp)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zc||r===Xp||r===kp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===zc)return h===je?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===sy||r===Yp||r===qp||r===Wp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===zc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Yp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class O2 extends Ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class El extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P2={type:"move"};class Jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),y=this._getHandJoint(m,C);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],x=v.position.distanceTo(g.position),S=.02,E=.005;m.inputState.pinching&&x>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(P2)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new El;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const z2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I2=`
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

}`;class B2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new kn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new _r({vertexShader:z2,fragmentShader:I2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new un(new aa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F2 extends Eo{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,v=null,g=null,x=null,S=null,E=null;const C=new B2,M=i.getContextAttributes();let y=null,B=null;const L=[],w=[],et=new Wt;let F=null;const O=new Ui;O.viewport=new cn;const H=new Ui;H.viewport=new cn;const N=[O,H],A=new O2;let I=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let Y=L[D];return Y===void 0&&(Y=new Jd,L[D]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(D){let Y=L[D];return Y===void 0&&(Y=new Jd,L[D]=Y),Y.getGripSpace()},this.getHand=function(D){let Y=L[D];return Y===void 0&&(Y=new Jd,L[D]=Y),Y.getHandSpace()};function K(D){const Y=w.indexOf(D.inputSource);if(Y===-1)return;const vt=L[Y];vt!==void 0&&(vt.update(D.inputSource,D.frame,m||h),vt.dispatchEvent({type:D.type,data:D.inputSource}))}function ct(){l.removeEventListener("select",K),l.removeEventListener("selectstart",K),l.removeEventListener("selectend",K),l.removeEventListener("squeeze",K),l.removeEventListener("squeezestart",K),l.removeEventListener("squeezeend",K),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",ft);for(let D=0;D<L.length;D++){const Y=w[D];Y!==null&&(w[D]=null,L[D].disconnect(Y))}I=null,nt=null,C.reset(),e.setRenderTarget(y),S=null,x=null,g=null,l=null,B=null,de.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(et.width,et.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){c=D,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){d=D,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(D){m=D},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(D){if(l=D,l!==null){if(y=e.getRenderTarget(),l.addEventListener("select",K),l.addEventListener("selectstart",K),l.addEventListener("selectend",K),l.addEventListener("squeeze",K),l.addEventListener("squeezestart",K),l.addEventListener("squeezeend",K),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",ft),M.xrCompatible!==!0&&await i.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(et),l.renderState.layers===void 0){const Y={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Y),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),B=new ns(S.framebufferWidth,S.framebufferHeight,{format:Yi,type:La,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let Y=null,vt=null,ut=null;M.depth&&(ut=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Y=M.stencil?yo:po,vt=M.stencil?xo:es);const Dt={colorFormat:i.RGBA8,depthFormat:ut,scaleFactor:c};g=new XRWebGLBinding(l,i),x=g.createProjectionLayer(Dt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),B=new ns(x.textureWidth,x.textureHeight,{format:Yi,type:La,depthTexture:new Sy(x.textureWidth,x.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),de.setContext(l),de.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ft(D){for(let Y=0;Y<D.removed.length;Y++){const vt=D.removed[Y],ut=w.indexOf(vt);ut>=0&&(w[ut]=null,L[ut].disconnect(vt))}for(let Y=0;Y<D.added.length;Y++){const vt=D.added[Y];let ut=w.indexOf(vt);if(ut===-1){for(let Pt=0;Pt<L.length;Pt++)if(Pt>=w.length){w.push(vt),ut=Pt;break}else if(w[Pt]===null){w[Pt]=vt,ut=Pt;break}if(ut===-1)break}const Dt=L[ut];Dt&&Dt.connect(vt)}}const V=new tt,rt=new tt;function W(D,Y,vt){V.setFromMatrixPosition(Y.matrixWorld),rt.setFromMatrixPosition(vt.matrixWorld);const ut=V.distanceTo(rt),Dt=Y.projectionMatrix.elements,Pt=vt.projectionMatrix.elements,Lt=Dt[14]/(Dt[10]-1),Mt=Dt[14]/(Dt[10]+1),at=(Dt[9]+1)/Dt[5],Rt=(Dt[9]-1)/Dt[5],z=(Dt[8]-1)/Dt[0],Qt=(Pt[8]+1)/Pt[0],Tt=Lt*z,Ut=Lt*Qt,xt=ut/(-z+Qt),$t=xt*-z;if(Y.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX($t),D.translateZ(xt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),Dt[10]===-1)D.projectionMatrix.copy(Y.projectionMatrix),D.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const Gt=Lt+xt,U=Mt+xt,b=Tt-$t,J=Ut+(ut-$t),dt=at*Mt/U*Gt,Et=Rt*Mt/U*Gt;D.projectionMatrix.makePerspective(b,J,dt,Et,Gt,U),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function St(D,Y){Y===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(Y.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(l===null)return;let Y=D.near,vt=D.far;C.texture!==null&&(C.depthNear>0&&(Y=C.depthNear),C.depthFar>0&&(vt=C.depthFar)),A.near=H.near=O.near=Y,A.far=H.far=O.far=vt,(I!==A.near||nt!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),I=A.near,nt=A.far),O.layers.mask=D.layers.mask|2,H.layers.mask=D.layers.mask|4,A.layers.mask=O.layers.mask|H.layers.mask;const ut=D.parent,Dt=A.cameras;St(A,ut);for(let Pt=0;Pt<Dt.length;Pt++)St(Dt[Pt],ut);Dt.length===2?W(A,O,H):A.projectionMatrix.copy(O.projectionMatrix),At(D,A,ut)};function At(D,Y,vt){vt===null?D.matrix.copy(Y.matrixWorld):(D.matrix.copy(vt.matrixWorld),D.matrix.invert(),D.matrix.multiply(Y.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(Y.projectionMatrix),D.projectionMatrixInverse.copy(Y.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Nl*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(D){p=D,x!==null&&(x.fixedFoveation=D),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=D)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(A)};let Ft=null;function ae(D,Y){if(v=Y.getViewerPose(m||h),E=Y,v!==null){const vt=v.views;S!==null&&(e.setRenderTargetFramebuffer(B,S.framebuffer),e.setRenderTarget(B));let ut=!1;vt.length!==A.cameras.length&&(A.cameras.length=0,ut=!0);for(let Pt=0;Pt<vt.length;Pt++){const Lt=vt[Pt];let Mt=null;if(S!==null)Mt=S.getViewport(Lt);else{const Rt=g.getViewSubImage(x,Lt);Mt=Rt.viewport,Pt===0&&(e.setRenderTargetTextures(B,Rt.colorTexture,x.ignoreDepthValues?void 0:Rt.depthStencilTexture),e.setRenderTarget(B))}let at=N[Pt];at===void 0&&(at=new Ui,at.layers.enable(Pt),at.viewport=new cn,N[Pt]=at),at.matrix.fromArray(Lt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Lt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),Pt===0&&(A.matrix.copy(at.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ut===!0&&A.cameras.push(at)}const Dt=l.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Pt=g.getDepthInformation(vt[0]);Pt&&Pt.isValid&&Pt.texture&&C.init(e,Pt,l.renderState)}}for(let vt=0;vt<L.length;vt++){const ut=w[vt],Dt=L[vt];ut!==null&&Dt!==void 0&&Dt.update(ut,Y,m||h)}Ft&&Ft(D,Y),Y.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Y}),E=null}const de=new xy;de.setAnimationLoop(ae),this.setAnimationLoop=function(D){Ft=D},this.dispose=function(){}}}const qr=new oa,H2=new Ke;function G2(o,e){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function r(M,y){y.color.getRGB(M.fogColor.value,gy(o)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,B,L,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(M,y):y.isMeshToonMaterial?(c(M,y),g(M,y)):y.isMeshPhongMaterial?(c(M,y),v(M,y)):y.isMeshStandardMaterial?(c(M,y),x(M,y),y.isMeshPhysicalMaterial&&S(M,y,w)):y.isMeshMatcapMaterial?(c(M,y),E(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),C(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(h(M,y),y.isLineDashedMaterial&&d(M,y)):y.isPointsMaterial?p(M,y,B,L):y.isSpriteMaterial?m(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===si&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===si&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const B=e.get(y),L=B.envMap,w=B.envMapRotation;L&&(M.envMap.value=L,qr.copy(w),qr.x*=-1,qr.y*=-1,qr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),M.envMapRotation.value.setFromMatrix4(H2.makeRotationFromEuler(qr)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function h(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function d(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,B,L){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*B,M.scale.value=L*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function v(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function g(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function x(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,B){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===si&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function C(M,y){const B=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function V2(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(B,L){const w=L.program;r.uniformBlockBinding(B,w)}function m(B,L){let w=l[B.id];w===void 0&&(E(B),w=v(B),l[B.id]=w,B.addEventListener("dispose",M));const et=L.program;r.updateUBOMapping(B,et);const F=e.render.frame;c[B.id]!==F&&(x(B),c[B.id]=F)}function v(B){const L=g();B.__bindingPointIndex=L;const w=o.createBuffer(),et=B.__size,F=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,et,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,w),w}function g(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(B){const L=l[B.id],w=B.uniforms,et=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let F=0,O=w.length;F<O;F++){const H=Array.isArray(w[F])?w[F]:[w[F]];for(let N=0,A=H.length;N<A;N++){const I=H[N];if(S(I,F,N,et)===!0){const nt=I.__offset,K=Array.isArray(I.value)?I.value:[I.value];let ct=0;for(let ft=0;ft<K.length;ft++){const V=K[ft],rt=C(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,o.bufferSubData(o.UNIFORM_BUFFER,nt+ct,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,ct),ct+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,nt,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(B,L,w,et){const F=B.value,O=L+"_"+w;if(et[O]===void 0)return typeof F=="number"||typeof F=="boolean"?et[O]=F:et[O]=F.clone(),!0;{const H=et[O];if(typeof F=="number"||typeof F=="boolean"){if(H!==F)return et[O]=F,!0}else if(H.equals(F)===!1)return H.copy(F),!0}return!1}function E(B){const L=B.uniforms;let w=0;const et=16;for(let O=0,H=L.length;O<H;O++){const N=Array.isArray(L[O])?L[O]:[L[O]];for(let A=0,I=N.length;A<I;A++){const nt=N[A],K=Array.isArray(nt.value)?nt.value:[nt.value];for(let ct=0,ft=K.length;ct<ft;ct++){const V=K[ct],rt=C(V),W=w%et,St=W%rt.boundary,At=W+St;w+=St,At!==0&&et-At<rt.storage&&(w+=et-At),nt.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=w,w+=rt.storage}}}const F=w%et;return F>0&&(w+=et-F),B.__size=w,B.__cache={},this}function C(B){const L={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(L.boundary=4,L.storage=4):B.isVector2?(L.boundary=8,L.storage=8):B.isVector3||B.isColor?(L.boundary=16,L.storage=12):B.isVector4?(L.boundary=16,L.storage=16):B.isMatrix3?(L.boundary=48,L.storage=48):B.isMatrix4?(L.boundary=64,L.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),L}function M(B){const L=B.target;L.removeEventListener("dispose",M);const w=h.indexOf(L.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function y(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},c={}}return{bind:p,update:m,dispose:y}}class X2{constructor(e={}){const{canvas:i=DT(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),C=new Int32Array(4);let M=null,y=null;const B=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ri,this.toneMapping=gr,this.toneMappingExposure=1;const w=this;let et=!1,F=0,O=0,H=null,N=-1,A=null;const I=new cn,nt=new cn;let K=null;const ct=new Ie(0);let ft=0,V=i.width,rt=i.height,W=1,St=null,At=null;const Ft=new cn(0,0,V,rt),ae=new cn(0,0,V,rt);let de=!1;const D=new lm;let Y=!1,vt=!1;const ut=new Ke,Dt=new Ke,Pt=new tt,Lt=new cn,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Rt(){return H===null?W:1}let z=r;function Qt(R,Z){return i.getContext(R,Z)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${$p}`),i.addEventListener("webglcontextlost",yt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Vt,!1),z===null){const Z="webgl2";if(z=Qt(Z,R),z===null)throw Qt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Tt,Ut,xt,$t,Gt,U,b,J,dt,Et,pt,Kt,Ot,zt,pe,Ct,jt,wt,se,Yt,Se,me,Pe,X;function Ht(){Tt=new jA(z),Tt.init(),me=new L2(z,Tt),Ut=new VA(z,Tt,e,me),xt=new D2(z,Tt),Ut.reverseDepthBuffer&&x&&xt.buffers.depth.setReversed(!0),$t=new KA(z),Gt=new m2,U=new U2(z,Tt,xt,Gt,Ut,me,$t),b=new kA(w),J=new WA(w),dt=new a1(z),Pe=new HA(z,dt),Et=new ZA(z,dt,$t,Pe),pt=new $A(z,Et,dt,$t),se=new JA(z,Ut,U),Ct=new XA(Gt),Kt=new p2(w,b,J,Tt,Ut,Pe,Ct),Ot=new G2(w,Gt),zt=new v2,pe=new E2(Tt),wt=new FA(w,b,J,xt,pt,S,p),jt=new C2(w,pt,Ut),X=new V2(z,$t,Ut,xt),Yt=new GA(z,Tt,$t),Se=new QA(z,Tt,$t),$t.programs=Kt.programs,w.capabilities=Ut,w.extensions=Tt,w.properties=Gt,w.renderLists=zt,w.shadowMap=jt,w.state=xt,w.info=$t}Ht();const ht=new F2(w,z);this.xr=ht,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=Tt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Tt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(V,rt,!1))},this.getSize=function(R){return R.set(V,rt)},this.setSize=function(R,Z,ot=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,rt=Z,i.width=Math.floor(R*W),i.height=Math.floor(Z*W),ot===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(V*W,rt*W).floor()},this.setDrawingBufferSize=function(R,Z,ot){V=R,rt=Z,W=ot,i.width=Math.floor(R*ot),i.height=Math.floor(Z*ot),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(Ft)},this.setViewport=function(R,Z,ot,lt){R.isVector4?Ft.set(R.x,R.y,R.z,R.w):Ft.set(R,Z,ot,lt),xt.viewport(I.copy(Ft).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(ae)},this.setScissor=function(R,Z,ot,lt){R.isVector4?ae.set(R.x,R.y,R.z,R.w):ae.set(R,Z,ot,lt),xt.scissor(nt.copy(ae).multiplyScalar(W).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(R){xt.setScissorTest(de=R)},this.setOpaqueSort=function(R){St=R},this.setTransparentSort=function(R){At=R},this.getClearColor=function(R){return R.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(R=!0,Z=!0,ot=!0){let lt=0;if(R){let Q=!1;if(H!==null){const Nt=H.texture.format;Q=Nt===sm||Nt===rm||Nt===am}if(Q){const Nt=H.texture.type,kt=Nt===La||Nt===es||Nt===Dl||Nt===xo||Nt===em||Nt===nm,ee=wt.getClearColor(),ne=wt.getClearAlpha(),le=ee.r,ie=ee.g,qt=ee.b;kt?(E[0]=le,E[1]=ie,E[2]=qt,E[3]=ne,z.clearBufferuiv(z.COLOR,0,E)):(C[0]=le,C[1]=ie,C[2]=qt,C[3]=ne,z.clearBufferiv(z.COLOR,0,C))}else lt|=z.COLOR_BUFFER_BIT}Z&&(lt|=z.DEPTH_BUFFER_BIT),ot&&(lt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",yt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Vt,!1),zt.dispose(),pe.dispose(),Gt.dispose(),b.dispose(),J.dispose(),pt.dispose(),Pe.dispose(),X.dispose(),Kt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",xe),ht.removeEventListener("sessionend",Be),ce.stop()};function yt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),et=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),et=!1;const R=$t.autoReset,Z=jt.enabled,ot=jt.autoUpdate,lt=jt.needsUpdate,Q=jt.type;Ht(),$t.autoReset=R,jt.enabled=Z,jt.autoUpdate=ot,jt.needsUpdate=lt,jt.type=Q}function Vt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function fe(R){const Z=R.target;Z.removeEventListener("dispose",fe),qe(Z)}function qe(R){fn(R),Gt.remove(R)}function fn(R){const Z=Gt.get(R).programs;Z!==void 0&&(Z.forEach(function(ot){Kt.releaseProgram(ot)}),R.isShaderMaterial&&Kt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,ot,lt,Q,Nt){Z===null&&(Z=Mt);const kt=Q.isMesh&&Q.matrixWorld.determinant()<0,ee=xr(R,Z,ot,lt,Q);xt.setMaterial(lt,kt);let ne=ot.index,le=1;if(lt.wireframe===!0){if(ne=Et.getWireframeAttribute(ot),ne===void 0)return;le=2}const ie=ot.drawRange,qt=ot.attributes.position;let Te=ie.start*le,Ve=(ie.start+ie.count)*le;Nt!==null&&(Te=Math.max(Te,Nt.start*le),Ve=Math.min(Ve,(Nt.start+Nt.count)*le)),ne!==null?(Te=Math.max(Te,0),Ve=Math.min(Ve,ne.count)):qt!=null&&(Te=Math.max(Te,0),Ve=Math.min(Ve,qt.count));const Ze=Ve-Te;if(Ze<0||Ze===1/0)return;Pe.setup(Q,lt,ee,ot,ne);let Fn,Le=Yt;if(ne!==null&&(Fn=dt.get(ne),Le=Se,Le.setIndex(Fn)),Q.isMesh)lt.wireframe===!0?(xt.setLineWidth(lt.wireframeLinewidth*Rt()),Le.setMode(z.LINES)):Le.setMode(z.TRIANGLES);else if(Q.isLine){let te=lt.linewidth;te===void 0&&(te=1),xt.setLineWidth(te*Rt()),Q.isLineSegments?Le.setMode(z.LINES):Q.isLineLoop?Le.setMode(z.LINE_LOOP):Le.setMode(z.LINE_STRIP)}else Q.isPoints?Le.setMode(z.POINTS):Q.isSprite&&Le.setMode(z.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Le.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))Le.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const te=Q._multiDrawStarts,$n=Q._multiDrawCounts,Ne=Q._multiDrawCount,yn=ne?dt.get(ne).bytesPerElement:1,li=Gt.get(lt).currentProgram.getUniforms();for(let Sn=0;Sn<Ne;Sn++)li.setValue(z,"_gl_DrawID",Sn),Le.render(te[Sn]/yn,$n[Sn])}else if(Q.isInstancedMesh)Le.renderInstances(Te,Ze,Q.count);else if(ot.isInstancedBufferGeometry){const te=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,$n=Math.min(ot.instanceCount,te);Le.renderInstances(Te,Ze,$n)}else Le.render(Te,Ze)};function Ae(R,Z,ot){R.transparent===!0&&R.side===wa&&R.forceSinglePass===!1?(R.side=si,R.needsUpdate=!0,an(R,Z,ot),R.side=vr,R.needsUpdate=!0,an(R,Z,ot),R.side=wa):an(R,Z,ot)}this.compile=function(R,Z,ot=null){ot===null&&(ot=R),y=pe.get(ot),y.init(Z),L.push(y),ot.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),R!==ot&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();const lt=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Nt=Q.material;if(Nt)if(Array.isArray(Nt))for(let kt=0;kt<Nt.length;kt++){const ee=Nt[kt];Ae(ee,ot,Q),lt.add(ee)}else Ae(Nt,ot,Q),lt.add(Nt)}),L.pop(),y=null,lt},this.compileAsync=function(R,Z,ot=null){const lt=this.compile(R,Z,ot);return new Promise(Q=>{function Nt(){if(lt.forEach(function(kt){Gt.get(kt).currentProgram.isReady()&&lt.delete(kt)}),lt.size===0){Q(R);return}setTimeout(Nt,10)}Tt.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let bt=null;function oe(R){bt&&bt(R)}function xe(){ce.stop()}function Be(){ce.start()}const ce=new xy;ce.setAnimationLoop(oe),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(R){bt=R,ht.setAnimationLoop(R),R===null?ce.stop():ce.start()},ht.addEventListener("sessionstart",xe),ht.addEventListener("sessionend",Be),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(et===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(Z),Z=ht.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Z,H),y=pe.get(R,L.length),y.init(Z),L.push(y),Dt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),D.setFromProjectionMatrix(Dt),vt=this.localClippingEnabled,Y=Ct.init(this.clippingPlanes,vt),M=zt.get(R,B.length),M.init(),B.push(M),ht.enabled===!0&&ht.isPresenting===!0){const Nt=w.xr.getDepthSensingMesh();Nt!==null&&Me(Nt,Z,-1/0,w.sortObjects)}Me(R,Z,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(St,At),at=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,at&&wt.addToRenderList(M,R),this.info.render.frame++,Y===!0&&Ct.beginShadows();const ot=y.state.shadowsArray;jt.render(ot,R,Z),Y===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=M.opaque,Q=M.transmissive;if(y.setupLights(),Z.isArrayCamera){const Nt=Z.cameras;if(Q.length>0)for(let kt=0,ee=Nt.length;kt<ee;kt++){const ne=Nt[kt];hn(lt,Q,R,ne)}at&&wt.render(R);for(let kt=0,ee=Nt.length;kt<ee;kt++){const ne=Nt[kt];Ge(M,R,ne,ne.viewport)}}else Q.length>0&&hn(lt,Q,R,Z),at&&wt.render(R),Ge(M,R,Z);H!==null&&(U.updateMultisampleRenderTarget(H),U.updateRenderTargetMipmap(H)),R.isScene===!0&&R.onAfterRender(w,R,Z),Pe.resetDefaultState(),N=-1,A=null,L.pop(),L.length>0?(y=L[L.length-1],Y===!0&&Ct.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,B.pop(),B.length>0?M=B[B.length-1]:M=null};function Me(R,Z,ot,lt){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||D.intersectsSprite(R)){lt&&Lt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Dt);const kt=pt.update(R),ee=R.material;ee.visible&&M.push(R,kt,ee,ot,Lt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||D.intersectsObject(R))){const kt=pt.update(R),ee=R.material;if(lt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Lt.copy(R.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),Lt.copy(kt.boundingSphere.center)),Lt.applyMatrix4(R.matrixWorld).applyMatrix4(Dt)),Array.isArray(ee)){const ne=kt.groups;for(let le=0,ie=ne.length;le<ie;le++){const qt=ne[le],Te=ee[qt.materialIndex];Te&&Te.visible&&M.push(R,kt,Te,ot,Lt.z,qt)}}else ee.visible&&M.push(R,kt,ee,ot,Lt.z,null)}}const Nt=R.children;for(let kt=0,ee=Nt.length;kt<ee;kt++)Me(Nt[kt],Z,ot,lt)}function Ge(R,Z,ot,lt){const Q=R.opaque,Nt=R.transmissive,kt=R.transparent;y.setupLightsView(ot),Y===!0&&Ct.setGlobalState(w.clippingPlanes,ot),lt&&xt.viewport(I.copy(lt)),Q.length>0&&Je(Q,Z,ot),Nt.length>0&&Je(Nt,Z,ot),kt.length>0&&Je(kt,Z,ot),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function hn(R,Z,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[lt.id]===void 0&&(y.state.transmissionRenderTarget[lt.id]=new ns(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float")?Pl:La,minFilter:ts,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));const Nt=y.state.transmissionRenderTarget[lt.id],kt=lt.viewport||I;Nt.setSize(kt.z,kt.w);const ee=w.getRenderTarget();w.setRenderTarget(Nt),w.getClearColor(ct),ft=w.getClearAlpha(),ft<1&&w.setClearColor(16777215,.5),w.clear(),at&&wt.render(ot);const ne=w.toneMapping;w.toneMapping=gr;const le=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),y.setupLightsView(lt),Y===!0&&Ct.setGlobalState(w.clippingPlanes,lt),Je(R,ot,lt),U.updateMultisampleRenderTarget(Nt),U.updateRenderTargetMipmap(Nt),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let qt=0,Te=Z.length;qt<Te;qt++){const Ve=Z[qt],Ze=Ve.object,Fn=Ve.geometry,Le=Ve.material,te=Ve.group;if(Le.side===wa&&Ze.layers.test(lt.layers)){const $n=Le.side;Le.side=si,Le.needsUpdate=!0,en(Ze,ot,lt,Fn,Le,te),Le.side=$n,Le.needsUpdate=!0,ie=!0}}ie===!0&&(U.updateMultisampleRenderTarget(Nt),U.updateRenderTargetMipmap(Nt))}w.setRenderTarget(ee),w.setClearColor(ct,ft),le!==void 0&&(lt.viewport=le),w.toneMapping=ne}function Je(R,Z,ot){const lt=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Nt=R.length;Q<Nt;Q++){const kt=R[Q],ee=kt.object,ne=kt.geometry,le=lt===null?kt.material:lt,ie=kt.group;ee.layers.test(ot.layers)&&en(ee,Z,ot,ne,le,ie)}}function en(R,Z,ot,lt,Q,Nt){R.onBeforeRender(w,Z,ot,lt,Q,Nt),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(w,Z,ot,lt,R,Nt),Q.transparent===!0&&Q.side===wa&&Q.forceSinglePass===!1?(Q.side=si,Q.needsUpdate=!0,w.renderBufferDirect(ot,Z,lt,Q,R,Nt),Q.side=vr,Q.needsUpdate=!0,w.renderBufferDirect(ot,Z,lt,Q,R,Nt),Q.side=wa):w.renderBufferDirect(ot,Z,lt,Q,R,Nt),R.onAfterRender(w,Z,ot,lt,Q,Nt)}function an(R,Z,ot){Z.isScene!==!0&&(Z=Mt);const lt=Gt.get(R),Q=y.state.lights,Nt=y.state.shadowsArray,kt=Q.state.version,ee=Kt.getParameters(R,Q.state,Nt,Z,ot),ne=Kt.getProgramCacheKey(ee);let le=lt.programs;lt.environment=R.isMeshStandardMaterial?Z.environment:null,lt.fog=Z.fog,lt.envMap=(R.isMeshStandardMaterial?J:b).get(R.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,le===void 0&&(R.addEventListener("dispose",fe),le=new Map,lt.programs=le);let ie=le.get(ne);if(ie!==void 0){if(lt.currentProgram===ie&&lt.lightsStateVersion===kt)return oi(R,ee),ie}else ee.uniforms=Kt.getUniforms(R),R.onBeforeCompile(ee,w),ie=Kt.acquireProgram(ee,ne),le.set(ne,ie),lt.uniforms=ee.uniforms;const qt=lt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qt.clippingPlanes=Ct.uniform),oi(R,ee),lt.needsLights=yr(R),lt.lightsStateVersion=kt,lt.needsLights&&(qt.ambientLightColor.value=Q.state.ambient,qt.lightProbe.value=Q.state.probe,qt.directionalLights.value=Q.state.directional,qt.directionalLightShadows.value=Q.state.directionalShadow,qt.spotLights.value=Q.state.spot,qt.spotLightShadows.value=Q.state.spotShadow,qt.rectAreaLights.value=Q.state.rectArea,qt.ltc_1.value=Q.state.rectAreaLTC1,qt.ltc_2.value=Q.state.rectAreaLTC2,qt.pointLights.value=Q.state.point,qt.pointLightShadows.value=Q.state.pointShadow,qt.hemisphereLights.value=Q.state.hemi,qt.directionalShadowMap.value=Q.state.directionalShadowMap,qt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,qt.spotShadowMap.value=Q.state.spotShadowMap,qt.spotLightMatrix.value=Q.state.spotLightMatrix,qt.spotLightMap.value=Q.state.spotLightMap,qt.pointShadowMap.value=Q.state.pointShadowMap,qt.pointShadowMatrix.value=Q.state.pointShadowMatrix),lt.currentProgram=ie,lt.uniformsList=null,ie}function In(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Ic.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function oi(R,Z){const ot=Gt.get(R);ot.outputColorSpace=Z.outputColorSpace,ot.batching=Z.batching,ot.batchingColor=Z.batchingColor,ot.instancing=Z.instancing,ot.instancingColor=Z.instancingColor,ot.instancingMorph=Z.instancingMorph,ot.skinning=Z.skinning,ot.morphTargets=Z.morphTargets,ot.morphNormals=Z.morphNormals,ot.morphColors=Z.morphColors,ot.morphTargetsCount=Z.morphTargetsCount,ot.numClippingPlanes=Z.numClippingPlanes,ot.numIntersection=Z.numClipIntersection,ot.vertexAlphas=Z.vertexAlphas,ot.vertexTangents=Z.vertexTangents,ot.toneMapping=Z.toneMapping}function xr(R,Z,ot,lt,Q){Z.isScene!==!0&&(Z=Mt),U.resetTextureUnits();const Nt=Z.fog,kt=lt.isMeshStandardMaterial?Z.environment:null,ee=H===null?w.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Mo,ne=(lt.isMeshStandardMaterial?J:b).get(lt.envMap||kt),le=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ie=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),qt=!!ot.morphAttributes.position,Te=!!ot.morphAttributes.normal,Ve=!!ot.morphAttributes.color;let Ze=gr;lt.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ze=w.toneMapping);const Fn=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Le=Fn!==void 0?Fn.length:0,te=Gt.get(lt),$n=y.state.lights;if(Y===!0&&(vt===!0||R!==A)){const Yn=R===A&&lt.id===N;Ct.setState(lt,R,Yn)}let Ne=!1;lt.version===te.__version?(te.needsLights&&te.lightsStateVersion!==$n.state.version||te.outputColorSpace!==ee||Q.isBatchedMesh&&te.batching===!1||!Q.isBatchedMesh&&te.batching===!0||Q.isBatchedMesh&&te.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&te.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&te.instancing===!1||!Q.isInstancedMesh&&te.instancing===!0||Q.isSkinnedMesh&&te.skinning===!1||!Q.isSkinnedMesh&&te.skinning===!0||Q.isInstancedMesh&&te.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&te.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&te.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&te.instancingMorph===!1&&Q.morphTexture!==null||te.envMap!==ne||lt.fog===!0&&te.fog!==Nt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Ct.numPlanes||te.numIntersection!==Ct.numIntersection)||te.vertexAlphas!==le||te.vertexTangents!==ie||te.morphTargets!==qt||te.morphNormals!==Te||te.morphColors!==Ve||te.toneMapping!==Ze||te.morphTargetsCount!==Le)&&(Ne=!0):(Ne=!0,te.__version=lt.version);let yn=te.currentProgram;Ne===!0&&(yn=an(lt,Z,Q));let li=!1,Sn=!1,Si=!1;const ge=yn.getUniforms(),ui=te.uniforms;if(xt.useProgram(yn.program)&&(li=!0,Sn=!0,Si=!0),lt.id!==N&&(N=lt.id,Sn=!0),li||A!==R){xt.buffers.depth.getReversed()?(ut.copy(R.projectionMatrix),UT(ut),LT(ut),ge.setValue(z,"projectionMatrix",ut)):ge.setValue(z,"projectionMatrix",R.projectionMatrix),ge.setValue(z,"viewMatrix",R.matrixWorldInverse);const Hn=ge.map.cameraPosition;Hn!==void 0&&Hn.setValue(z,Pt.setFromMatrixPosition(R.matrixWorld)),Ut.logarithmicDepthBuffer&&ge.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&ge.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,Sn=!0,Si=!0)}if(Q.isSkinnedMesh){ge.setOptional(z,Q,"bindMatrix"),ge.setOptional(z,Q,"bindMatrixInverse");const Yn=Q.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),ge.setValue(z,"boneTexture",Yn.boneTexture,U))}Q.isBatchedMesh&&(ge.setOptional(z,Q,"batchingTexture"),ge.setValue(z,"batchingTexture",Q._matricesTexture,U),ge.setOptional(z,Q,"batchingIdTexture"),ge.setValue(z,"batchingIdTexture",Q._indirectTexture,U),ge.setOptional(z,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ge.setValue(z,"batchingColorTexture",Q._colorsTexture,U));const Pa=ot.morphAttributes;if((Pa.position!==void 0||Pa.normal!==void 0||Pa.color!==void 0)&&se.update(Q,ot,yn),(Sn||te.receiveShadow!==Q.receiveShadow)&&(te.receiveShadow=Q.receiveShadow,ge.setValue(z,"receiveShadow",Q.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(ui.envMap.value=ne,ui.flipEnvMap.value=ne.isCubeTexture&&ne.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Z.environment!==null&&(ui.envMapIntensity.value=Z.environmentIntensity),Sn&&(ge.setValue(z,"toneMappingExposure",w.toneMappingExposure),te.needsLights&&Bn(ui,Si),Nt&&lt.fog===!0&&Ot.refreshFogUniforms(ui,Nt),Ot.refreshMaterialUniforms(ui,lt,W,rt,y.state.transmissionRenderTarget[R.id]),Ic.upload(z,In(te),ui,U)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Ic.upload(z,In(te),ui,U),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&ge.setValue(z,"center",Q.center),ge.setValue(z,"modelViewMatrix",Q.modelViewMatrix),ge.setValue(z,"normalMatrix",Q.normalMatrix),ge.setValue(z,"modelMatrix",Q.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const Yn=lt.uniformsGroups;for(let Hn=0,qn=Yn.length;Hn<qn;Hn++){const Fl=Yn[Hn];X.update(Fl,yn),X.bind(Fl,yn)}}return yn}function Bn(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function yr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(R,Z,ot){Gt.get(R.texture).__webglTexture=Z,Gt.get(R.depthTexture).__webglTexture=ot;const lt=Gt.get(R);lt.__hasExternalTextures=!0,lt.__autoAllocateDepthBuffer=ot===void 0,lt.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),lt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Z){const ot=Gt.get(R);ot.__webglFramebuffer=Z,ot.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(R,Z=0,ot=0){H=R,F=Z,O=ot;let lt=!0,Q=null,Nt=!1,kt=!1;if(R){const ne=Gt.get(R);if(ne.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(z.FRAMEBUFFER,null),lt=!1;else if(ne.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(ne.__hasExternalTextures)U.rebindTextures(R,Gt.get(R.texture).__webglTexture,Gt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qt=R.depthTexture;if(ne.__boundDepthTexture!==qt){if(qt!==null&&Gt.has(qt)&&(R.width!==qt.image.width||R.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const le=R.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(kt=!0);const ie=Gt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ie[Z])?Q=ie[Z][ot]:Q=ie[Z],Nt=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?Q=Gt.get(R).__webglMultisampledFramebuffer:Array.isArray(ie)?Q=ie[ot]:Q=ie,I.copy(R.viewport),nt.copy(R.scissor),K=R.scissorTest}else I.copy(Ft).multiplyScalar(W).floor(),nt.copy(ae).multiplyScalar(W).floor(),K=de;if(xt.bindFramebuffer(z.FRAMEBUFFER,Q)&&lt&&xt.drawBuffers(R,Q),xt.viewport(I),xt.scissor(nt),xt.setScissorTest(K),Nt){const ne=Gt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ne.__webglTexture,ot)}else if(kt){const ne=Gt.get(R.texture),le=Z||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ne.__webglTexture,ot||0,le)}N=-1},this.readRenderTargetPixels=function(R,Z,ot,lt,Q,Nt,kt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=Gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&kt!==void 0&&(ee=ee[kt]),ee){xt.bindFramebuffer(z.FRAMEBUFFER,ee);try{const ne=R.texture,le=ne.format,ie=ne.type;if(!Ut.textureFormatReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-lt&&ot>=0&&ot<=R.height-Q&&z.readPixels(Z,ot,lt,Q,me.convert(le),me.convert(ie),Nt)}finally{const ne=H!==null?Gt.get(H).__webglFramebuffer:null;xt.bindFramebuffer(z.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(R,Z,ot,lt,Q,Nt,kt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ee=Gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&kt!==void 0&&(ee=ee[kt]),ee){const ne=R.texture,le=ne.format,ie=ne.type;if(!Ut.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=R.width-lt&&ot>=0&&ot<=R.height-Q){xt.bindFramebuffer(z.FRAMEBUFFER,ee);const qt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,qt),z.bufferData(z.PIXEL_PACK_BUFFER,Nt.byteLength,z.STREAM_READ),z.readPixels(Z,ot,lt,Q,me.convert(le),me.convert(ie),0);const Te=H!==null?Gt.get(H).__webglFramebuffer:null;xt.bindFramebuffer(z.FRAMEBUFFER,Te);const Ve=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await NT(z,Ve,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,qt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Nt),z.deleteBuffer(qt),z.deleteSync(Ve),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Z=null,ot=0){R.isTexture!==!0&&(Sl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,R=arguments[1]);const lt=Math.pow(2,-ot),Q=Math.floor(R.image.width*lt),Nt=Math.floor(R.image.height*lt),kt=Z!==null?Z.x:0,ee=Z!==null?Z.y:0;U.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,ot,0,0,kt,ee,Q,Nt),xt.unbindTexture()},this.copyTextureToTexture=function(R,Z,ot=null,lt=null,Q=0){R.isTexture!==!0&&(Sl("WebGLRenderer: copyTextureToTexture function signature has changed."),lt=arguments[0]||null,R=arguments[1],Z=arguments[2],Q=arguments[3]||0,ot=null);let Nt,kt,ee,ne,le,ie,qt,Te,Ve;const Ze=R.isCompressedTexture?R.mipmaps[Q]:R.image;ot!==null?(Nt=ot.max.x-ot.min.x,kt=ot.max.y-ot.min.y,ee=ot.isBox3?ot.max.z-ot.min.z:1,ne=ot.min.x,le=ot.min.y,ie=ot.isBox3?ot.min.z:0):(Nt=Ze.width,kt=Ze.height,ee=Ze.depth||1,ne=0,le=0,ie=0),lt!==null?(qt=lt.x,Te=lt.y,Ve=lt.z):(qt=0,Te=0,Ve=0);const Fn=me.convert(Z.format),Le=me.convert(Z.type);let te;Z.isData3DTexture?(U.setTexture3D(Z,0),te=z.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(U.setTexture2DArray(Z,0),te=z.TEXTURE_2D_ARRAY):(U.setTexture2D(Z,0),te=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment);const $n=z.getParameter(z.UNPACK_ROW_LENGTH),Ne=z.getParameter(z.UNPACK_IMAGE_HEIGHT),yn=z.getParameter(z.UNPACK_SKIP_PIXELS),li=z.getParameter(z.UNPACK_SKIP_ROWS),Sn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ze.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ze.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ne),z.pixelStorei(z.UNPACK_SKIP_ROWS,le),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ie);const Si=R.isDataArrayTexture||R.isData3DTexture,ge=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const ui=Gt.get(R),Pa=Gt.get(Z),Yn=Gt.get(ui.__renderTarget),Hn=Gt.get(Pa.__renderTarget);xt.bindFramebuffer(z.READ_FRAMEBUFFER,Yn.__webglFramebuffer),xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let qn=0;qn<ee;qn++)Si&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Gt.get(R).__webglTexture,Q,ie+qn),R.isDepthTexture?(ge&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Gt.get(Z).__webglTexture,Q,Ve+qn),z.blitFramebuffer(ne,le,Nt,kt,qt,Te,Nt,kt,z.DEPTH_BUFFER_BIT,z.NEAREST)):ge?z.copyTexSubImage3D(te,Q,qt,Te,Ve+qn,ne,le,Nt,kt):z.copyTexSubImage2D(te,Q,qt,Te,Ve+qn,ne,le,Nt,kt);xt.bindFramebuffer(z.READ_FRAMEBUFFER,null),xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ge?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(te,Q,qt,Te,Ve,Nt,kt,ee,Fn,Le,Ze.data):Z.isCompressedArrayTexture?z.compressedTexSubImage3D(te,Q,qt,Te,Ve,Nt,kt,ee,Fn,Ze.data):z.texSubImage3D(te,Q,qt,Te,Ve,Nt,kt,ee,Fn,Le,Ze):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Q,qt,Te,Nt,kt,Fn,Le,Ze.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Q,qt,Te,Ze.width,Ze.height,Fn,Ze.data):z.texSubImage2D(z.TEXTURE_2D,Q,qt,Te,Nt,kt,Fn,Le,Ze);z.pixelStorei(z.UNPACK_ROW_LENGTH,$n),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ne),z.pixelStorei(z.UNPACK_SKIP_PIXELS,yn),z.pixelStorei(z.UNPACK_SKIP_ROWS,li),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Sn),Q===0&&Z.generateMipmaps&&z.generateMipmap(te),xt.unbindTexture()},this.copyTextureToTexture3D=function(R,Z,ot=null,lt=null,Q=0){return R.isTexture!==!0&&(Sl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ot=arguments[0]||null,lt=arguments[1]||null,R=arguments[2],Z=arguments[3],Q=arguments[4]||0),Sl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Z,ot,lt,Q)},this.initRenderTarget=function(R){Gt.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),xt.unbindTexture()},this.resetState=function(){F=0,O=0,H=null,xt.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Oe._getDrawingBufferColorSpace(e),i.unpackColorSpace=Oe._getUnpackColorSpace()}}class k2 extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Y2 extends kn{constructor(e=null,i=1,r=1,l,c,h,d,p,m=yi,v=yi,g,x){super(null,h,d,p,m,v,l,c,g,x),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Px extends qi{constructor(e,i,r,l=1){super(e,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const so=new Ke,zx=new Ke,Rc=[],Ix=new rs,q2=new Ke,xl=new un,yl=new Il;class Wr extends un{constructor(e,i,r){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new Px(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,q2)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new rs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,so),Ix.copy(e.boundingBox).applyMatrix4(so),this.boundingBox.union(Ix)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Il),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,so),yl.copy(e.boundingSphere).applyMatrix4(so),this.boundingSphere.union(yl)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const r=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=r.length+1,h=e*c+1;for(let d=0;d<r.length;d++)r[d]=l[h+d]}raycast(e,i){const r=this.matrixWorld,l=this.count;if(xl.geometry=this.geometry,xl.material=this.material,xl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yl.copy(this.boundingSphere),yl.applyMatrix4(r),e.ray.intersectsSphere(yl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,so),zx.multiplyMatrices(r,so),xl.matrixWorld=zx,xl.raycast(e,Rc);for(let h=0,d=Rc.length;h<d;h++){const p=Rc[h];p.instanceId=c,p.object=this,i.push(p)}Rc.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new Px(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const r=i.morphTargetInfluences,l=r.length+1;this.morphTexture===null&&(this.morphTexture=new Y2(new Float32Array(l*this.count),l,this.count,im,sa));const c=this.morphTexture.source.data.data;let h=0;for(let m=0;m<r.length;m++)h+=r[m];const d=this.geometry.morphTargetsRelative?1:1-h,p=l*e;c[p]=d,c.set(r,p+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Bx extends kn{constructor(e,i,r,l,c,h,d,p,m){super(e,i,r,l,c,h,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class la{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=e;h++)r=this.getPoint(h/e),c+=r.distanceTo(l),i.push(c),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i){const r=this.getLengths();let l=0;const c=r.length;let h;i?h=i:h=e*r[c-1];let d=0,p=c-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=r[l]-h,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,r[l]===h)return l/(c-1);const v=r[l],x=r[l+1]-v,S=(h-v)/x;return(l+S)/(c-1)}getTangent(e,i){let l=e-1e-4,c=e+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),p=i||(h.isVector2?new Wt:new tt);return p.copy(d).sub(h).normalize(),p}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i){const r=new tt,l=[],c=[],h=[],d=new tt,p=new Ke;for(let S=0;S<=e;S++){const E=S/e;l[S]=this.getTangentAt(E,new tt)}c[0]=new tt,h[0]=new tt;let m=Number.MAX_VALUE;const v=Math.abs(l[0].x),g=Math.abs(l[0].y),x=Math.abs(l[0].z);v<=m&&(m=v,r.set(1,0,0)),g<=m&&(m=g,r.set(0,1,0)),x<=m&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let S=1;S<=e;S++){if(c[S]=c[S-1].clone(),h[S]=h[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Pn(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(p.makeRotationAxis(d,E))}h[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(Pn(c[0].dot(c[e]),-1,1));S/=e,l[0].dot(d.crossVectors(c[0],c[e]))>0&&(S=-S);for(let E=1;E<=e;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],S*E)),h[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class cm extends la{constructor(e=0,i=0,r=1,l=1,c=0,h=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=h,this.aClockwise=d,this.aRotation=p}getPoint(e,i=new Wt){const r=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const h=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(h?c=0:c=l),this.aClockwise===!0&&!h&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+e*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),g=Math.sin(this.aRotation),x=p-this.aX,S=m-this.aY;p=x*v-S*g+this.aX,m=x*g+S*v+this.aY}return r.set(p,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class W2 extends cm{constructor(e,i,r,l,c,h){super(e,i,r,r,l,c,h),this.isArcCurve=!0,this.type="ArcCurve"}}function fm(){let o=0,e=0,i=0,r=0;function l(c,h,d,p){o=c,e=d,i=-3*c+3*h-2*d-p,r=2*c-2*h+d+p}return{initCatmullRom:function(c,h,d,p,m){l(h,d,m*(d-c),m*(p-h))},initNonuniformCatmullRom:function(c,h,d,p,m,v,g){let x=(h-c)/m-(d-c)/(m+v)+(d-h)/v,S=(d-h)/v-(p-h)/(v+g)+(p-d)/g;x*=v,S*=v,l(h,d,x,S)},calc:function(c){const h=c*c,d=h*c;return o+e*c+i*h+r*d}}}const Cc=new tt,$d=new fm,tp=new fm,ep=new fm;class j2 extends la{constructor(e=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=l}getPoint(e,i=new tt){const r=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*e;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,v;this.closed||d>0?m=l[(d-1)%c]:(Cc.subVectors(l[0],l[1]).add(l[0]),m=Cc);const g=l[d%c],x=l[(d+1)%c];if(this.closed||d+2<c?v=l[(d+2)%c]:(Cc.subVectors(l[c-1],l[c-2]).add(l[c-1]),v=Cc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(g),S),C=Math.pow(g.distanceToSquared(x),S),M=Math.pow(x.distanceToSquared(v),S);C<1e-4&&(C=1),E<1e-4&&(E=C),M<1e-4&&(M=C),$d.initNonuniformCatmullRom(m.x,g.x,x.x,v.x,E,C,M),tp.initNonuniformCatmullRom(m.y,g.y,x.y,v.y,E,C,M),ep.initNonuniformCatmullRom(m.z,g.z,x.z,v.z,E,C,M)}else this.curveType==="catmullrom"&&($d.initCatmullRom(m.x,g.x,x.x,v.x,this.tension),tp.initCatmullRom(m.y,g.y,x.y,v.y,this.tension),ep.initCatmullRom(m.z,g.z,x.z,v.z,this.tension));return r.set($d.calc(p),tp.calc(p),ep.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(l.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];e.points.push(l.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(new tt().fromArray(l))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fx(o,e,i,r,l){const c=(r-e)*.5,h=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*r+c+h)*p+(-3*i+3*r-2*c-h)*d+c*o+i}function Z2(o,e){const i=1-o;return i*i*e}function Q2(o,e){return 2*(1-o)*o*e}function K2(o,e){return o*o*e}function Al(o,e,i,r){return Z2(o,e)+Q2(o,i)+K2(o,r)}function J2(o,e){const i=1-o;return i*i*i*e}function $2(o,e){const i=1-o;return 3*i*i*o*e}function tC(o,e){return 3*(1-o)*o*o*e}function eC(o,e){return o*o*o*e}function Rl(o,e,i,r,l){return J2(o,e)+$2(o,i)+tC(o,r)+eC(o,l)}class Ay extends la{constructor(e=new Wt,i=new Wt,r=new Wt,l=new Wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=i,this.v2=r,this.v3=l}getPoint(e,i=new Wt){const r=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return r.set(Rl(e,l.x,c.x,h.x,d.x),Rl(e,l.y,c.y,h.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nC extends la{constructor(e=new tt,i=new tt,r=new tt,l=new tt){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=i,this.v2=r,this.v3=l}getPoint(e,i=new tt){const r=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return r.set(Rl(e,l.x,c.x,h.x,d.x),Rl(e,l.y,c.y,h.y,d.y),Rl(e,l.z,c.z,h.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ry extends la{constructor(e=new Wt,i=new Wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=i}getPoint(e,i=new Wt){const r=i;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new Wt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iC extends la{constructor(e=new tt,i=new tt){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=i}getPoint(e,i=new tt){const r=i;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new tt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cy extends la{constructor(e=new Wt,i=new Wt,r=new Wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=i,this.v2=r}getPoint(e,i=new Wt){const r=i,l=this.v0,c=this.v1,h=this.v2;return r.set(Al(e,l.x,c.x,h.x),Al(e,l.y,c.y,h.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class aC extends la{constructor(e=new tt,i=new tt,r=new tt){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=i,this.v2=r}getPoint(e,i=new tt){const r=i,l=this.v0,c=this.v1,h=this.v2;return r.set(Al(e,l.x,c.x,h.x),Al(e,l.y,c.y,h.y),Al(e,l.z,c.z,h.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wy extends la{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,i=new Wt){const r=i,l=this.points,c=(l.length-1)*e,h=Math.floor(c),d=c-h,p=l[h===0?h:h-1],m=l[h],v=l[h>l.length-2?l.length-1:h+1],g=l[h>l.length-3?l.length-1:h+2];return r.set(Fx(d,p.x,m.x,v.x,g.x),Fx(d,p.y,m.y,v.y,g.y)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(l.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];e.points.push(l.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(new Wt().fromArray(l))}return this}}var Zp=Object.freeze({__proto__:null,ArcCurve:W2,CatmullRomCurve3:j2,CubicBezierCurve:Ay,CubicBezierCurve3:nC,EllipseCurve:cm,LineCurve:Ry,LineCurve3:iC,QuadraticBezierCurve:Cy,QuadraticBezierCurve3:aC,SplineCurve:wy});class rC extends la{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(i)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zp[r](i,e))}return this}getPoint(e,i){const r=e*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=r){const h=l[c]-r,d=this.curves[c],p=d.getLength(),m=p===0?0:1-h/p;return d.getPointAt(m,i)}c++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let i=0;for(let r=0,l=this.curves.length;r<l;r++)i+=this.curves[r].getLength(),e.push(i);return this.cacheLengths=e,e}getSpacedPoints(e=40){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return this.autoClose&&i.push(i[0]),i}getPoints(e=12){const i=[];let r;for(let l=0,c=this.curves;l<c.length;l++){const h=c[l],d=h.isEllipseCurve?e*2:h.isLineCurve||h.isLineCurve3?1:h.isSplineCurve?e*h.points.length:e,p=h.getPoints(d);for(let m=0;m<p.length;m++){const v=p[m];r&&r.equals(v)||(i.push(v),r=v)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(e){super.copy(e),this.curves=[];for(let i=0,r=e.curves.length;i<r;i++){const l=e.curves[i];this.curves.push(l.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let i=0,r=this.curves.length;i<r;i++){const l=this.curves[i];e.curves.push(l.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let i=0,r=e.curves.length;i<r;i++){const l=e.curves[i];this.curves.push(new Zp[l.type]().fromJSON(l))}return this}}class Hx extends rC{constructor(e){super(),this.type="Path",this.currentPoint=new Wt,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let i=1,r=e.length;i<r;i++)this.lineTo(e[i].x,e[i].y);return this}moveTo(e,i){return this.currentPoint.set(e,i),this}lineTo(e,i){const r=new Ry(this.currentPoint.clone(),new Wt(e,i));return this.curves.push(r),this.currentPoint.set(e,i),this}quadraticCurveTo(e,i,r,l){const c=new Cy(this.currentPoint.clone(),new Wt(e,i),new Wt(r,l));return this.curves.push(c),this.currentPoint.set(r,l),this}bezierCurveTo(e,i,r,l,c,h){const d=new Ay(this.currentPoint.clone(),new Wt(e,i),new Wt(r,l),new Wt(c,h));return this.curves.push(d),this.currentPoint.set(c,h),this}splineThru(e){const i=[this.currentPoint.clone()].concat(e),r=new wy(i);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,i,r,l,c,h){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(e+d,i+p,r,l,c,h),this}absarc(e,i,r,l,c,h){return this.absellipse(e,i,r,r,l,c,h),this}ellipse(e,i,r,l,c,h,d,p){const m=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(e+m,i+v,r,l,c,h,d,p),this}absellipse(e,i,r,l,c,h,d,p){const m=new cm(e,i,r,l,c,h,d,p);if(this.curves.length>0){const g=m.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(m);const v=m.getPoint(1);return this.currentPoint.copy(v),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Cl extends Oa{constructor(e=1,i=1,r=1,l=32,c=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const v=[],g=[],x=[],S=[];let E=0;const C=[],M=r/2;let y=0;B(),h===!1&&(e>0&&L(!0),i>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new Oi(g,3)),this.setAttribute("normal",new Oi(x,3)),this.setAttribute("uv",new Oi(S,2));function B(){const w=new tt,et=new tt;let F=0;const O=(i-e)/r;for(let H=0;H<=c;H++){const N=[],A=H/c,I=A*(i-e)+e;for(let nt=0;nt<=l;nt++){const K=nt/l,ct=K*p+d,ft=Math.sin(ct),V=Math.cos(ct);et.x=I*ft,et.y=-A*r+M,et.z=I*V,g.push(et.x,et.y,et.z),w.set(ft,O,V).normalize(),x.push(w.x,w.y,w.z),S.push(K,1-A),N.push(E++)}C.push(N)}for(let H=0;H<l;H++)for(let N=0;N<c;N++){const A=C[N][H],I=C[N+1][H],nt=C[N+1][H+1],K=C[N][H+1];(e>0||N!==0)&&(v.push(A,I,K),F+=3),(i>0||N!==c-1)&&(v.push(I,nt,K),F+=3)}m.addGroup(y,F,0),y+=F}function L(w){const et=E,F=new Wt,O=new tt;let H=0;const N=w===!0?e:i,A=w===!0?1:-1;for(let nt=1;nt<=l;nt++)g.push(0,M*A,0),x.push(0,A,0),S.push(.5,.5),E++;const I=E;for(let nt=0;nt<=l;nt++){const ct=nt/l*p+d,ft=Math.cos(ct),V=Math.sin(ct);O.x=N*V,O.y=M*A,O.z=N*ft,g.push(O.x,O.y,O.z),x.push(0,A,0),F.x=ft*.5+.5,F.y=V*.5*A+.5,S.push(F.x,F.y),E++}for(let nt=0;nt<l;nt++){const K=et+nt,ct=I+nt;w===!0?v.push(ct,ct+1,K):v.push(ct+1,ct,K),H+=3}m.addGroup(y,H,w===!0?1:2),y+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dy extends Hx{constructor(e){super(e),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(e){const i=[];for(let r=0,l=this.holes.length;r<l;r++)i[r]=this.holes[r].getPoints(e);return i}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let i=0,r=e.holes.length;i<r;i++){const l=e.holes[i];this.holes.push(l.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let i=0,r=this.holes.length;i<r;i++){const l=this.holes[i];e.holes.push(l.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let i=0,r=e.holes.length;i<r;i++){const l=e.holes[i];this.holes.push(new Hx().fromJSON(l))}return this}}const sC={triangulate:function(o,e,i=2){const r=e&&e.length,l=r?e[0]*i:o.length;let c=Ny(o,0,l,i,!0);const h=[];if(!c||c.next===c.prev)return h;let d,p,m,v,g,x,S;if(r&&(c=fC(o,e,c,i)),o.length>80*i){d=m=o[0],p=v=o[1];for(let E=i;E<l;E+=i)g=o[E],x=o[E+1],g<d&&(d=g),x<p&&(p=x),g>m&&(m=g),x>v&&(v=x);S=Math.max(m-d,v-p),S=S!==0?32767/S:0}return Ul(c,h,i,d,p,S,0),h}};function Ny(o,e,i,r,l){let c,h;if(l===MC(o,e,i,r)>0)for(c=e;c<i;c+=r)h=Gx(c,o[c],o[c+1],h);else for(c=i-r;c>=e;c-=r)h=Gx(c,o[c],o[c+1],h);return h&&Yc(h,h.next)&&(Ol(h),h=h.next),h}function is(o,e){if(!o)return o;e||(e=o);let i=o,r;do if(r=!1,!i.steiner&&(Yc(i,i.next)||sn(i.prev,i,i.next)===0)){if(Ol(i),i=e=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==e);return e}function Ul(o,e,i,r,l,c,h){if(!o)return;!h&&c&&gC(o,r,l,c);let d=o,p,m;for(;o.prev!==o.next;){if(p=o.prev,m=o.next,c?lC(o,r,l,c):oC(o)){e.push(p.i/i|0),e.push(o.i/i|0),e.push(m.i/i|0),Ol(o),o=m.next,d=m.next;continue}if(o=m,o===d){h?h===1?(o=uC(is(o),e,i),Ul(o,e,i,r,l,c,2)):h===2&&cC(o,e,i,r,l,c):Ul(is(o),e,i,r,l,c,1);break}}}function oC(o){const e=o.prev,i=o,r=o.next;if(sn(e,i,r)>=0)return!1;const l=e.x,c=i.x,h=r.x,d=e.y,p=i.y,m=r.y,v=l<c?l<h?l:h:c<h?c:h,g=d<p?d<m?d:m:p<m?p:m,x=l>c?l>h?l:h:c>h?c:h,S=d>p?d>m?d:m:p>m?p:m;let E=r.next;for(;E!==e;){if(E.x>=v&&E.x<=x&&E.y>=g&&E.y<=S&&fo(l,d,c,p,h,m,E.x,E.y)&&sn(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function lC(o,e,i,r){const l=o.prev,c=o,h=o.next;if(sn(l,c,h)>=0)return!1;const d=l.x,p=c.x,m=h.x,v=l.y,g=c.y,x=h.y,S=d<p?d<m?d:m:p<m?p:m,E=v<g?v<x?v:x:g<x?g:x,C=d>p?d>m?d:m:p>m?p:m,M=v>g?v>x?v:x:g>x?g:x,y=Qp(S,E,e,i,r),B=Qp(C,M,e,i,r);let L=o.prevZ,w=o.nextZ;for(;L&&L.z>=y&&w&&w.z<=B;){if(L.x>=S&&L.x<=C&&L.y>=E&&L.y<=M&&L!==l&&L!==h&&fo(d,v,p,g,m,x,L.x,L.y)&&sn(L.prev,L,L.next)>=0||(L=L.prevZ,w.x>=S&&w.x<=C&&w.y>=E&&w.y<=M&&w!==l&&w!==h&&fo(d,v,p,g,m,x,w.x,w.y)&&sn(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;L&&L.z>=y;){if(L.x>=S&&L.x<=C&&L.y>=E&&L.y<=M&&L!==l&&L!==h&&fo(d,v,p,g,m,x,L.x,L.y)&&sn(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;w&&w.z<=B;){if(w.x>=S&&w.x<=C&&w.y>=E&&w.y<=M&&w!==l&&w!==h&&fo(d,v,p,g,m,x,w.x,w.y)&&sn(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function uC(o,e,i){let r=o;do{const l=r.prev,c=r.next.next;!Yc(l,c)&&Uy(l,r,r.next,c)&&Ll(l,c)&&Ll(c,l)&&(e.push(l.i/i|0),e.push(r.i/i|0),e.push(c.i/i|0),Ol(r),Ol(r.next),r=o=c),r=r.next}while(r!==o);return is(r)}function cC(o,e,i,r,l,c){let h=o;do{let d=h.next.next;for(;d!==h.prev;){if(h.i!==d.i&&xC(h,d)){let p=Ly(h,d);h=is(h,h.next),p=is(p,p.next),Ul(h,e,i,r,l,c,0),Ul(p,e,i,r,l,c,0);return}d=d.next}h=h.next}while(h!==o)}function fC(o,e,i,r){const l=[];let c,h,d,p,m;for(c=0,h=e.length;c<h;c++)d=e[c]*r,p=c<h-1?e[c+1]*r:o.length,m=Ny(o,d,p,r,!1),m===m.next&&(m.steiner=!0),l.push(_C(m));for(l.sort(hC),c=0;c<l.length;c++)i=dC(l[c],i);return i}function hC(o,e){return o.x-e.x}function dC(o,e){const i=pC(o,e);if(!i)return e;const r=Ly(i,o);return is(r,r.next),is(i,i.next)}function pC(o,e){let i=e,r=-1/0,l;const c=o.x,h=o.y;do{if(h<=i.y&&h>=i.next.y&&i.next.y!==i.y){const x=i.x+(h-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(x<=c&&x>r&&(r=x,l=i.x<i.next.x?i:i.next,x===c))return l}i=i.next}while(i!==e);if(!l)return null;const d=l,p=l.x,m=l.y;let v=1/0,g;i=l;do c>=i.x&&i.x>=p&&c!==i.x&&fo(h<m?c:r,h,p,m,h<m?r:c,h,i.x,i.y)&&(g=Math.abs(h-i.y)/(c-i.x),Ll(i,o)&&(g<v||g===v&&(i.x>l.x||i.x===l.x&&mC(l,i)))&&(l=i,v=g)),i=i.next;while(i!==d);return l}function mC(o,e){return sn(o.prev,o,e.prev)<0&&sn(e.next,o,o.next)<0}function gC(o,e,i,r){let l=o;do l.z===0&&(l.z=Qp(l.x,l.y,e,i,r)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==o);l.prevZ.nextZ=null,l.prevZ=null,vC(l)}function vC(o){let e,i,r,l,c,h,d,p,m=1;do{for(i=o,o=null,c=null,h=0;i;){for(h++,r=i,d=0,e=0;e<m&&(d++,r=r.nextZ,!!r);e++);for(p=m;d>0||p>0&&r;)d!==0&&(p===0||!r||i.z<=r.z)?(l=i,i=i.nextZ,d--):(l=r,r=r.nextZ,p--),c?c.nextZ=l:o=l,l.prevZ=c,c=l;i=r}c.nextZ=null,m*=2}while(h>1);return o}function Qp(o,e,i,r,l){return o=(o-i)*l|0,e=(e-r)*l|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,o|e<<1}function _C(o){let e=o,i=o;do(e.x<i.x||e.x===i.x&&e.y<i.y)&&(i=e),e=e.next;while(e!==o);return i}function fo(o,e,i,r,l,c,h,d){return(l-h)*(e-d)>=(o-h)*(c-d)&&(o-h)*(r-d)>=(i-h)*(e-d)&&(i-h)*(c-d)>=(l-h)*(r-d)}function xC(o,e){return o.next.i!==e.i&&o.prev.i!==e.i&&!yC(o,e)&&(Ll(o,e)&&Ll(e,o)&&SC(o,e)&&(sn(o.prev,o,e.prev)||sn(o,e.prev,e))||Yc(o,e)&&sn(o.prev,o,o.next)>0&&sn(e.prev,e,e.next)>0)}function sn(o,e,i){return(e.y-o.y)*(i.x-e.x)-(e.x-o.x)*(i.y-e.y)}function Yc(o,e){return o.x===e.x&&o.y===e.y}function Uy(o,e,i,r){const l=Dc(sn(o,e,i)),c=Dc(sn(o,e,r)),h=Dc(sn(i,r,o)),d=Dc(sn(i,r,e));return!!(l!==c&&h!==d||l===0&&wc(o,i,e)||c===0&&wc(o,r,e)||h===0&&wc(i,o,r)||d===0&&wc(i,e,r))}function wc(o,e,i){return e.x<=Math.max(o.x,i.x)&&e.x>=Math.min(o.x,i.x)&&e.y<=Math.max(o.y,i.y)&&e.y>=Math.min(o.y,i.y)}function Dc(o){return o>0?1:o<0?-1:0}function yC(o,e){let i=o;do{if(i.i!==o.i&&i.next.i!==o.i&&i.i!==e.i&&i.next.i!==e.i&&Uy(i,i.next,o,e))return!0;i=i.next}while(i!==o);return!1}function Ll(o,e){return sn(o.prev,o,o.next)<0?sn(o,e,o.next)>=0&&sn(o,o.prev,e)>=0:sn(o,e,o.prev)<0||sn(o,o.next,e)<0}function SC(o,e){let i=o,r=!1;const l=(o.x+e.x)/2,c=(o.y+e.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==o);return r}function Ly(o,e){const i=new Kp(o.i,o.x,o.y),r=new Kp(e.i,e.x,e.y),l=o.next,c=e.prev;return o.next=e,e.prev=o,i.next=l,l.prev=i,r.next=i,i.prev=r,c.next=r,r.prev=c,r}function Gx(o,e,i,r){const l=new Kp(o,e,i);return r?(l.next=r.next,l.prev=r,r.next.prev=l,r.next=l):(l.prev=l,l.next=l),l}function Ol(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function Kp(o,e,i){this.i=o,this.x=e,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function MC(o,e,i,r){let l=0;for(let c=e,h=i-r;c<i;c+=r)l+=(o[h]-o[c])*(o[c+1]+o[h+1]),h=c;return l}class wl{static area(e){const i=e.length;let r=0;for(let l=i-1,c=0;c<i;l=c++)r+=e[l].x*e[c].y-e[c].x*e[l].y;return r*.5}static isClockWise(e){return wl.area(e)<0}static triangulateShape(e,i){const r=[],l=[],c=[];Vx(e),Xx(r,e);let h=e.length;i.forEach(Vx);for(let p=0;p<i.length;p++)l.push(h),h+=i[p].length,Xx(r,i[p]);const d=sC.triangulate(r,l);for(let p=0;p<d.length;p+=3)c.push(d.slice(p,p+3));return c}}function Vx(o){const e=o.length;e>2&&o[e-1].equals(o[0])&&o.pop()}function Xx(o,e){for(let i=0;i<e.length;i++)o.push(e[i].x),o.push(e[i].y)}class Gc extends Oa{constructor(e=new Dy([new Wt(.5,.5),new Wt(-.5,.5),new Wt(-.5,-.5),new Wt(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:i},e=Array.isArray(e)?e:[e];const r=this,l=[],c=[];for(let d=0,p=e.length;d<p;d++){const m=e[d];h(m)}this.setAttribute("position",new Oi(l,3)),this.setAttribute("uv",new Oi(c,2)),this.computeVertexNormals();function h(d){const p=[],m=i.curveSegments!==void 0?i.curveSegments:12,v=i.steps!==void 0?i.steps:1,g=i.depth!==void 0?i.depth:1;let x=i.bevelEnabled!==void 0?i.bevelEnabled:!0,S=i.bevelThickness!==void 0?i.bevelThickness:.2,E=i.bevelSize!==void 0?i.bevelSize:S-.1,C=i.bevelOffset!==void 0?i.bevelOffset:0,M=i.bevelSegments!==void 0?i.bevelSegments:3;const y=i.extrudePath,B=i.UVGenerator!==void 0?i.UVGenerator:EC;let L,w=!1,et,F,O,H;y&&(L=y.getSpacedPoints(v),w=!0,x=!1,et=y.computeFrenetFrames(v,!1),F=new tt,O=new tt,H=new tt),x||(M=0,S=0,E=0,C=0);const N=d.extractPoints(m);let A=N.shape;const I=N.holes;if(!wl.isClockWise(A)){A=A.reverse();for(let at=0,Rt=I.length;at<Rt;at++){const z=I[at];wl.isClockWise(z)&&(I[at]=z.reverse())}}const K=wl.triangulateShape(A,I),ct=A;for(let at=0,Rt=I.length;at<Rt;at++){const z=I[at];A=A.concat(z)}function ft(at,Rt,z){return Rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(Rt,z)}const V=A.length,rt=K.length;function W(at,Rt,z){let Qt,Tt,Ut;const xt=at.x-Rt.x,$t=at.y-Rt.y,Gt=z.x-at.x,U=z.y-at.y,b=xt*xt+$t*$t,J=xt*U-$t*Gt;if(Math.abs(J)>Number.EPSILON){const dt=Math.sqrt(b),Et=Math.sqrt(Gt*Gt+U*U),pt=Rt.x-$t/dt,Kt=Rt.y+xt/dt,Ot=z.x-U/Et,zt=z.y+Gt/Et,pe=((Ot-pt)*U-(zt-Kt)*Gt)/(xt*U-$t*Gt);Qt=pt+xt*pe-at.x,Tt=Kt+$t*pe-at.y;const Ct=Qt*Qt+Tt*Tt;if(Ct<=2)return new Wt(Qt,Tt);Ut=Math.sqrt(Ct/2)}else{let dt=!1;xt>Number.EPSILON?Gt>Number.EPSILON&&(dt=!0):xt<-Number.EPSILON?Gt<-Number.EPSILON&&(dt=!0):Math.sign($t)===Math.sign(U)&&(dt=!0),dt?(Qt=-$t,Tt=xt,Ut=Math.sqrt(b)):(Qt=xt,Tt=$t,Ut=Math.sqrt(b/2))}return new Wt(Qt/Ut,Tt/Ut)}const St=[];for(let at=0,Rt=ct.length,z=Rt-1,Qt=at+1;at<Rt;at++,z++,Qt++)z===Rt&&(z=0),Qt===Rt&&(Qt=0),St[at]=W(ct[at],ct[z],ct[Qt]);const At=[];let Ft,ae=St.concat();for(let at=0,Rt=I.length;at<Rt;at++){const z=I[at];Ft=[];for(let Qt=0,Tt=z.length,Ut=Tt-1,xt=Qt+1;Qt<Tt;Qt++,Ut++,xt++)Ut===Tt&&(Ut=0),xt===Tt&&(xt=0),Ft[Qt]=W(z[Qt],z[Ut],z[xt]);At.push(Ft),ae=ae.concat(Ft)}for(let at=0;at<M;at++){const Rt=at/M,z=S*Math.cos(Rt*Math.PI/2),Qt=E*Math.sin(Rt*Math.PI/2)+C;for(let Tt=0,Ut=ct.length;Tt<Ut;Tt++){const xt=ft(ct[Tt],St[Tt],Qt);ut(xt.x,xt.y,-z)}for(let Tt=0,Ut=I.length;Tt<Ut;Tt++){const xt=I[Tt];Ft=At[Tt];for(let $t=0,Gt=xt.length;$t<Gt;$t++){const U=ft(xt[$t],Ft[$t],Qt);ut(U.x,U.y,-z)}}}const de=E+C;for(let at=0;at<V;at++){const Rt=x?ft(A[at],ae[at],de):A[at];w?(O.copy(et.normals[0]).multiplyScalar(Rt.x),F.copy(et.binormals[0]).multiplyScalar(Rt.y),H.copy(L[0]).add(O).add(F),ut(H.x,H.y,H.z)):ut(Rt.x,Rt.y,0)}for(let at=1;at<=v;at++)for(let Rt=0;Rt<V;Rt++){const z=x?ft(A[Rt],ae[Rt],de):A[Rt];w?(O.copy(et.normals[at]).multiplyScalar(z.x),F.copy(et.binormals[at]).multiplyScalar(z.y),H.copy(L[at]).add(O).add(F),ut(H.x,H.y,H.z)):ut(z.x,z.y,g/v*at)}for(let at=M-1;at>=0;at--){const Rt=at/M,z=S*Math.cos(Rt*Math.PI/2),Qt=E*Math.sin(Rt*Math.PI/2)+C;for(let Tt=0,Ut=ct.length;Tt<Ut;Tt++){const xt=ft(ct[Tt],St[Tt],Qt);ut(xt.x,xt.y,g+z)}for(let Tt=0,Ut=I.length;Tt<Ut;Tt++){const xt=I[Tt];Ft=At[Tt];for(let $t=0,Gt=xt.length;$t<Gt;$t++){const U=ft(xt[$t],Ft[$t],Qt);w?ut(U.x,U.y+L[v-1].y,L[v-1].x+z):ut(U.x,U.y,g+z)}}}D(),Y();function D(){const at=l.length/3;if(x){let Rt=0,z=V*Rt;for(let Qt=0;Qt<rt;Qt++){const Tt=K[Qt];Dt(Tt[2]+z,Tt[1]+z,Tt[0]+z)}Rt=v+M*2,z=V*Rt;for(let Qt=0;Qt<rt;Qt++){const Tt=K[Qt];Dt(Tt[0]+z,Tt[1]+z,Tt[2]+z)}}else{for(let Rt=0;Rt<rt;Rt++){const z=K[Rt];Dt(z[2],z[1],z[0])}for(let Rt=0;Rt<rt;Rt++){const z=K[Rt];Dt(z[0]+V*v,z[1]+V*v,z[2]+V*v)}}r.addGroup(at,l.length/3-at,0)}function Y(){const at=l.length/3;let Rt=0;vt(ct,Rt),Rt+=ct.length;for(let z=0,Qt=I.length;z<Qt;z++){const Tt=I[z];vt(Tt,Rt),Rt+=Tt.length}r.addGroup(at,l.length/3-at,1)}function vt(at,Rt){let z=at.length;for(;--z>=0;){const Qt=z;let Tt=z-1;Tt<0&&(Tt=at.length-1);for(let Ut=0,xt=v+M*2;Ut<xt;Ut++){const $t=V*Ut,Gt=V*(Ut+1),U=Rt+Qt+$t,b=Rt+Tt+$t,J=Rt+Tt+Gt,dt=Rt+Qt+Gt;Pt(U,b,J,dt)}}}function ut(at,Rt,z){p.push(at),p.push(Rt),p.push(z)}function Dt(at,Rt,z){Lt(at),Lt(Rt),Lt(z);const Qt=l.length/3,Tt=B.generateTopUV(r,l,Qt-3,Qt-2,Qt-1);Mt(Tt[0]),Mt(Tt[1]),Mt(Tt[2])}function Pt(at,Rt,z,Qt){Lt(at),Lt(Rt),Lt(Qt),Lt(Rt),Lt(z),Lt(Qt);const Tt=l.length/3,Ut=B.generateSideWallUV(r,l,Tt-6,Tt-3,Tt-2,Tt-1);Mt(Ut[0]),Mt(Ut[1]),Mt(Ut[3]),Mt(Ut[1]),Mt(Ut[2]),Mt(Ut[3])}function Lt(at){l.push(p[at*3+0]),l.push(p[at*3+1]),l.push(p[at*3+2])}function Mt(at){c.push(at.x),c.push(at.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return TC(i,r,e)}static fromJSON(e,i){const r=[];for(let c=0,h=e.shapes.length;c<h;c++){const d=i[e.shapes[c]];r.push(d)}const l=e.options.extrudePath;return l!==void 0&&(e.options.extrudePath=new Zp[l.type]().fromJSON(l)),new Gc(r,e.options)}}const EC={generateTopUV:function(o,e,i,r,l){const c=e[i*3],h=e[i*3+1],d=e[r*3],p=e[r*3+1],m=e[l*3],v=e[l*3+1];return[new Wt(c,h),new Wt(d,p),new Wt(m,v)]},generateSideWallUV:function(o,e,i,r,l,c){const h=e[i*3],d=e[i*3+1],p=e[i*3+2],m=e[r*3],v=e[r*3+1],g=e[r*3+2],x=e[l*3],S=e[l*3+1],E=e[l*3+2],C=e[c*3],M=e[c*3+1],y=e[c*3+2];return Math.abs(d-v)<Math.abs(h-m)?[new Wt(h,1-p),new Wt(m,1-g),new Wt(x,1-E),new Wt(C,1-y)]:[new Wt(d,1-p),new Wt(v,1-g),new Wt(S,1-E),new Wt(M,1-y)]}};function TC(o,e,i){if(i.shapes=[],Array.isArray(o))for(let r=0,l=o.length;r<l;r++){const c=o[r];i.shapes.push(c.uuid)}else i.shapes.push(o.uuid);return i.options=Object.assign({},e),e.extrudePath!==void 0&&(i.options.extrudePath=e.extrudePath.toJSON()),i}class oo extends Bl{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oy,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oy extends zn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const np=new Ke,kx=new tt,Yx=new tt;class bC{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lm,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;kx.setFromMatrixPosition(e.matrixWorld),i.position.copy(kx),Yx.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Yx),i.updateMatrixWorld(),np.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(np),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(np)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class AC extends bC{constructor(){super(new yy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ip extends Oy{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.target=new zn,this.shadow=new AC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class RC extends Oy{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$p}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$p);let ap=null,rp=null,sp=null,op=null;async function CC(){if(ap)return{exports:ap.exports,stdBackrestView:rp,recBackrestView:sp,cameraOutView:op};const e=await(await fetch("./cinema_engine.wasm")).arrayBuffer(),{instance:i}=await WebAssembly.instantiate(e,{});ap=i;const r=i.exports,l=r.memory.buffer;return rp=new Float32Array(l,r.get_std_backrest_ptr(),1568),sp=new Float32Array(l,r.get_rec_backrest_ptr(),448),op=new Float32Array(l,r.get_camera_out_ptr(),14),{exports:r,stdBackrestView:rp,recBackrestView:sp,cameraOutView:op}}function qx(o,e,i){const r=new Dy,l=-o/2,c=0;return r.moveTo(l,c),r.lineTo(l,c+e-i),r.quadraticCurveTo(l,c+e,l+i,c+e),r.lineTo(l+o-i,c+e),r.quadraticCurveTo(l+o,c+e,l+o,c+e-i),r.lineTo(l+o,c),r.closePath(),r}function wC({modeRef:o,selectedSeatRef:e,btnMetricsRef:i,map2DLayerRef:r,povHudLayerRef:l,onTransitionComplete:c}){const h=pn.useRef(null);return pn.useEffect(()=>{const d=h.current;if(!d)return;const p=new k2;p.background=new Ie(328708);const m=new Ui(52,390/844,.08,120),v=new X2({antialias:!0,powerPreference:"high-performance"});v.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),v.toneMapping=Qx,v.toneMappingExposure=1.1,d.innerHTML="",d.appendChild(v.domElement);const g=document.createElement("canvas");g.width=720,g.height=406;const x=g.getContext("2d"),S=new Bx(g);S.colorSpace=ri,S.minFilter=Li,S.magFilter=Li;const E=new Image;let C=!1;E.onload=()=>{C=!0},E.src="./desert-screen.jpg";let M=0;function y(bt){if(bt-M<.033)return;M=bt;const oe=g.width,xe=g.height;if(C){const Be=Math.sin(bt*.25)*4;x.drawImage(E,-6+Be,-3,oe+12,xe+6)}else{const Be=x.createLinearGradient(0,0,0,xe);Be.addColorStop(0,"#d7c9bc"),Be.addColorStop(1,"#8d745e"),x.fillStyle=Be,x.fillRect(0,0,oe,xe)}S.needsUpdate=!0}y(0);const B=new un(new aa(N_,U_,1,1),new uo({map:S}));B.position.set(0,Td,Ed),p.add(B);const L=new un(new aa(N_+6,U_+4),new uo({color:131587}));L.position.set(0,Td,Ed-.12),p.add(L),p.add(new RC(3806230,1.15));const w=new ip(16768964,2.2);w.position.set(0,Td+2.2,Ed+1.2),w.target.position.set(0,.5,1),p.add(w),p.add(w.target);const et=new ip(15085096,1.05);et.position.set(0,7.5,-2.5),et.target.position.set(0,0,1.5),p.add(et),p.add(et.target);const F=new ip(9180187,1.15);F.position.set(0,3.5,12),F.target.position.set(0,.5,-4),p.add(F),p.add(F.target);const O=new oo({color:1117195,roughness:.9,metalness:.05}),H=new oo({color:1577232,roughness:.85,metalness:.08}),N=new uo({color:12101782,transparent:!0,opacity:.65});Bc.forEach((bt,oe)=>{const xe=oe>=7?.22:0,Be=lp+oe*jr+xe,ce=Nc[oe],Me=oe>0?Nc[oe-1]:-.15,Ge=Math.max(.24,ce-Me+.08),hn=new un(new Na(14.6,Ge,jr+.26),O);hn.position.set(0,ce-Ge*.5,Be),p.add(hn);const Je=(ce+Me)*.5,en=new Na(.92,Math.max(.12,(ce-Me)*.5),jr*.48);[-3.04,3.04].forEach(an=>{if(oe>0){const oi=new un(en,H);oi.position.set(an,Je-.06,Be-jr*.42),p.add(oi)}const In=new un(new aa(.84,.026),N);In.rotation.x=-Math.PI/2,In.position.set(an,ce+.008,Be-jr*.36),p.add(In)})});const A=new un(new aa(24,10),O);A.rotation.x=-Math.PI/2,A.position.set(0,-.02,-7.8),p.add(A);const I=new un(new aa(24,8),O);I.rotation.x=-Math.PI/2,I.position.set(0,Nc[8],lp+9*jr+2.6),p.add(I);const nt=new oo({color:8195604,roughness:.78,metalness:.02}),K=new oo({color:7212050,roughness:.74,metalness:.03}),ct=new oo({color:8184725,emissive:2852164,emissiveIntensity:.58,roughness:.35,metalness:.05}),ft=new oo({color:1774868,roughness:.42,metalness:.18}),V=new Gc(qx(.54,.68,.1),{depth:.09,curveSegments:28,bevelEnabled:!0,bevelSegments:14,steps:1,bevelSize:.032,bevelThickness:.032});V.center(),V.computeVertexNormals();const rt=new Gc(qx(.58,.72,.11),{depth:.1,curveSegments:28,bevelEnabled:!0,bevelSegments:14,steps:1,bevelSize:.036,bevelThickness:.036});rt.center(),rt.computeVertexNormals();const W=new Wr(V,nt,98),St=new Wr(rt,K,28);W.frustumCulled=!1,St.frustumCulled=!1,p.add(W),p.add(St);const At=new Na(.56,.14,.54),Ft=new Na(.6,.14,.54),ae=new Wr(At,nt,98),de=new Wr(Ft,K,28);p.add(ae),p.add(de);const D=new Cl(.065,.065,.54,16);D.rotateZ(Math.PI/2);const Y=new Cl(.065,.065,.58,16);Y.rotateZ(Math.PI/2);const vt=new Wr(D,nt,98),ut=new Wr(Y,K,28);p.add(vt),p.add(ut);const Dt=new Cl(.034,.034,.52,14);Dt.rotateX(Math.PI/2);const Pt=new Wr(Dt,ft,252);p.add(Pt);const Lt=[],Mt=new zn,at=new Ke().makeScale(0,0,0);let Rt=0,z=0,Qt=0;for(let bt=0;bt<9;bt++){const oe=bt>=7,xe=oe?.6:.56;for(let Be=1;Be<=RE;Be++){const{x:ce,y:Me,z:Ge}=O_(bt,Be);Mt.position.set(ce,Me+.28,Ge-.02),Mt.rotation.set(0,0,0),Mt.scale.set(1,1,1),Mt.updateMatrix();const hn=Mt.matrix.clone();Mt.position.set(ce,Me+.34,Ge+.21),Mt.updateMatrix();const Je=Mt.matrix.clone();Mt.position.set(ce-xe*.5-.032,Me+.42,Ge),Mt.rotation.set(oe?-.15:-.05,0,0),Mt.scale.set(1,1,1),Mt.updateMatrix();const en=Mt.matrix.clone();Mt.position.set(ce+xe*.5+.032,Me+.42,Ge),Mt.updateMatrix();const an=Mt.matrix.clone();Lt.push({rowIdx:bt,seatNum:Be,isRecliner:oe,sIdx:oe?-1:Rt++,rIdx:oe?z++:-1,aLeftIdx:Qt++,aRightIdx:Qt++,cushionMatrix:hn,bolsterMatrix:Je,armLeftMatrix:en,armRightMatrix:an})}}let Tt=null;function Ut(bt=-1,oe=-1){const xe=`${bt}_${oe}`;if(xe!==Tt){Tt=xe;for(let Be=0;Be<Lt.length;Be++){const ce=Lt[Be],Me=ce.rowIdx===bt&&ce.seatNum===oe;ce.isRecliner?(de.setMatrixAt(ce.rIdx,Me?at:ce.cushionMatrix),ut.setMatrixAt(ce.rIdx,Me?at:ce.bolsterMatrix)):(ae.setMatrixAt(ce.sIdx,Me?at:ce.cushionMatrix),vt.setMatrixAt(ce.sIdx,Me?at:ce.bolsterMatrix))}ae.instanceMatrix.needsUpdate=!0,de.instanceMatrix.needsUpdate=!0,vt.instanceMatrix.needsUpdate=!0,ut.instanceMatrix.needsUpdate=!0}}Lt.forEach(bt=>{bt.isRecliner?(de.setMatrixAt(bt.rIdx,bt.cushionMatrix),ut.setMatrixAt(bt.rIdx,bt.bolsterMatrix)):(ae.setMatrixAt(bt.sIdx,bt.cushionMatrix),vt.setMatrixAt(bt.sIdx,bt.bolsterMatrix)),Pt.setMatrixAt(bt.aLeftIdx,bt.armLeftMatrix),Pt.setMatrixAt(bt.aRightIdx,bt.armRightMatrix)}),ae.instanceMatrix.needsUpdate=!0,de.instanceMatrix.needsUpdate=!0,vt.instanceMatrix.needsUpdate=!0,ut.instanceMatrix.needsUpdate=!0,Pt.instanceMatrix.needsUpdate=!0;const xt=new El;xt.visible=!1;const $t=new un(At,ct);$t.position.set(0,.28,-.02),xt.add($t);const Gt=new un(D,ct);Gt.position.set(0,.34,.21),xt.add(Gt);const U=new un(V,ct);U.position.set(0,.58,.22),U.rotation.x=.08,xt.add(U);const b=document.createElement("canvas");b.width=128,b.height=128;const J=b.getContext("2d"),dt=new Bx(b);dt.colorSpace=ri;function Et(bt){J.clearRect(0,0,128,128),J.fillStyle="#7ce395",J.beginPath(),J.roundRect(14,14,100,100,26),J.fill(),J.fillStyle="#081b0d",J.font="700 54px -apple-system, BlinkMacSystemFont, sans-serif",J.textAlign="center",J.textBaseline="middle",J.fillText(String(bt),64,67),dt.needsUpdate=!0}const pt=new un(new aa(.42,.42),new uo({map:dt,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));pt.rotation.x=-Math.PI/2,pt.position.set(0,.365,-.05),pt.renderOrder=2,xt.add(pt),p.add(xt);let Kt=null;CC().then(bt=>{Kt=bt,bt.exports.update_backrest_matrices(0,-1,-1),W.instanceMatrix.array.set(bt.stdBackrestView),St.instanceMatrix.array.set(bt.recBackrestView),W.instanceMatrix.needsUpdate=!0,St.instanceMatrix.needsUpdate=!0}).catch(bt=>{console.error("Failed to load WASM engine:",bt)});let Ot=!1,zt=null,pe=0,Ct=0,jt=0;const wt={yaw:0,pitch:0,targetYaw:0,targetPitch:0,yawVel:0,pitchVel:0,lastSeatKey:null},se=.72,Yt=.42;function Se(bt,oe,xe=null){o.current!=="POV_3D"&&o.current!=="TRANSITION_TO_3D"||(Ot=!0,zt=xe,pe=bt,Ct=oe,jt=performance.now(),wt.yawVel=0,wt.pitchVel=0)}function me(bt,oe){if(!Ot)return;const xe=performance.now(),Be=Math.max(4,xe-jt),ce=bt-pe,Me=oe-Ct;pe=bt,Ct=oe,jt=xe;const hn=1.65/Math.max(320,d.clientWidth||390),Je=ce*hn,en=Me*hn*.85,an=1-.55*Math.pow(Math.abs(wt.targetYaw)/se,2),In=1-.55*Math.pow(Math.abs(wt.targetPitch)/Yt,2);wt.targetYaw=qs.clamp(wt.targetYaw+Je*Math.max(.25,an),-se,se),wt.targetPitch=qs.clamp(wt.targetPitch+en*Math.max(.25,In),-Yt,Yt);const oi=Je/Be*16.67,xr=en/Be*16.67;wt.yawVel=wt.yawVel*.4+oi*.6,wt.pitchVel=wt.pitchVel*.4+xr*.6}function Pe(){Ot=!1,zt=null}const X=bt=>{if(!(bt.pointerType==="mouse"&&bt.button!==0)){Se(bt.clientX,bt.clientY,bt.pointerId);try{d.setPointerCapture(bt.pointerId)}catch{}}},Ht=bt=>{!Ot||zt!==null&&bt.pointerId!==zt||(bt.cancelable&&bt.preventDefault(),me(bt.clientX,bt.clientY))},ht=bt=>{zt!==null&&bt.pointerId!==zt||Pe()},yt=bt=>{Ot&&bt.cancelable&&bt.preventDefault()};d.addEventListener("pointerdown",X),d.addEventListener("pointermove",Ht,{passive:!1}),d.addEventListener("pointerup",ht),d.addEventListener("pointercancel",Pe),d.addEventListener("touchmove",yt,{passive:!1});function Bt(){const bt=d.clientWidth||390,oe=d.clientHeight||844;m.aspect=bt/oe,m.updateProjectionMatrix(),v.setSize(bt,oe)}window.addEventListener("resize",Bt),Bt();let Vt=null,fe=performance.now();function qe(bt,oe){if(!Kt)return;const{exports:xe,stdBackrestView:Be,recBackrestView:ce,cameraOutView:Me}=Kt,Ge=i.current,hn=d.clientWidth||390,Je=d.clientHeight||844;xe.update_backrest_matrices(oe,bt.rowIdx,bt.seatNum),W.instanceMatrix.array.set(Be),St.instanceMatrix.array.set(ce),W.instanceMatrix.needsUpdate=!0,St.instanceMatrix.needsUpdate=!0,xe.compute_camera_frame(bt.rowIdx,bt.seatNum,oe,Ge.btnNdcX,Ge.btnNdcY,Ge.btnWidth,hn,Je,wt.yaw,wt.pitch),m.position.set(Me[0],Me[1],Me[2]),m.up.set(Me[6],Me[7],Me[8]),m.lookAt(Me[3],Me[4],Me[5]),m.fov=Me[9],m.updateProjectionMatrix();const{x:en,y:an,z:In}=O_(bt.rowIdx,bt.seatNum);xt.position.set(en,an,In),xt.visible=!0;const oi=Me[13],xr=bt.isRecliner?.72:.68;U.visible=oe<=.86,U.scale.y=oi,U.position.y=.24+xr*.5*oi,pt.visible=oe<.82;const Bn=r.current;if(Bn)if(oe<=0)Bn.style.opacity="1",Bn.style.transformOrigin="50% 50%",Bn.style.transform="perspective(900px) rotateX(0deg) scale(1)",Bn.classList.remove("hidden");else if(oe>=.4)Bn.style.opacity="0",Bn.classList.add("hidden");else{Bn.classList.remove("hidden");const yr=Me[10],R=Me[11],Z=Me[12];Bn.style.transformOrigin=`${Ge.btnCenterX.toFixed(1)}px ${Ge.btnCenterY.toFixed(1)}px`,Bn.style.transform=`perspective(900px) rotateX(${R.toFixed(2)}deg) scale(${yr.toFixed(3)})`,Bn.style.opacity=Z.toFixed(3)}}function fn(bt){Vt=requestAnimationFrame(fn);const oe=Math.min(50,Math.max(1,bt-fe));fe=bt;const xe=oe/16.67;if(!Ot&&(Math.abs(wt.yawVel)>5e-5||Math.abs(wt.pitchVel)>5e-5)){wt.targetYaw=qs.clamp(wt.targetYaw+wt.yawVel*xe,-se,se),wt.targetPitch=qs.clamp(wt.targetPitch+wt.pitchVel*xe,-Yt,Yt);const Ge=Math.pow(.91,xe);wt.yawVel*=Ge,wt.pitchVel*=Ge}const Be=1-Math.pow(.72,xe);wt.yaw+=(wt.targetYaw-wt.yaw)*Be,wt.pitch+=(wt.targetPitch-wt.pitch)*Be,y(bt*.001);const ce=e.current,Me=o.current;if(ce){if(wt.lastSeatKey!==ce.key&&(wt.lastSeatKey=ce.key,wt.yaw=0,wt.pitch=0,wt.targetYaw=0,wt.targetPitch=0,wt.yawVel=0,wt.pitchVel=0,Et(ce.seatNum),Ut(ce.rowIdx,ce.seatNum),$t.geometry=ce.isRecliner?Ft:At,Gt.geometry=ce.isRecliner?Y:D,U.geometry=ce.isRecliner?rt:V),Me==="TRANSITION_TO_3D"){const Ge=Ae(bt),hn=bt-Ge,Je=qs.clamp(hn/1550,0,1);qe(ce,Je);const en=l.current;en&&(Je>.56&&en.classList.add("active"),Je>.78&&en.classList.add("sheet-visible")),Je>=1&&(o.current="POV_3D",d.classList.add("interactive"),c==null||c("POV_3D"))}else if(Me==="POV_3D")qe(ce,1);else if(Me==="TRANSITION_TO_2D"){const Ge=Ae(bt),hn=bt-Ge,Je=qs.clamp(hn/1200,0,1),en=1-Je;if(qe(ce,en),Je>=1){const an=r.current;an&&(an.style.opacity="1",an.style.transform="none",an.classList.remove("hidden")),d.classList.remove("visible","interactive"),o.current="MAP_2D",c==null||c("MAP_2D")}}}else xt.visible=!1;v.render(p,m)}function Ae(bt){return i.current.transitionStartTime||(i.current.transitionStartTime=bt),i.current.transitionStartTime}return Vt=requestAnimationFrame(fn),()=>{cancelAnimationFrame(Vt),window.removeEventListener("resize",Bt),d.removeEventListener("pointerdown",X),d.removeEventListener("pointermove",Ht),d.removeEventListener("pointerup",ht),d.removeEventListener("pointercancel",Pe),d.removeEventListener("touchmove",yt),v.dispose(),v.domElement.parentNode===d&&d.removeChild(v.domElement)}},[]),_t.jsx("div",{id:"webgl-container",ref:h})}function DC(){const[o,e]=pn.useState(null),[i,r]=pn.useState("19:45"),[l,c]=pn.useState(null),[h,d]=pn.useState(null),p=pn.useRef(null),m=pn.useRef(null),v=pn.useRef(null),g=pn.useRef(new Map),x=pn.useRef("MAP_2D"),S=pn.useRef(null),E=pn.useRef(null),C=pn.useRef(null),M=pn.useRef({btnCenterX:195,btnCenterY:420,btnWidth:17,btnNdcX:0,btnNdcY:0,transitionStartTime:0}),y=pn.useCallback(()=>{var H;if(x.current!=="POV_3D"&&x.current!=="TRANSITION_TO_3D")return;M.current.transitionStartTime=0,x.current="TRANSITION_TO_2D";const F=v.current;F&&F.classList.remove("sheet-visible","active");const O=document.getElementById("webgl-container");O&&O.classList.remove("interactive"),((H=window.history.state)==null?void 0:H.view)==="pov_3d"&&window.history.back()},[]),B=pn.useCallback(F=>{const O=F||S.current;if(!O)return;const H=p.current,N=m.current;if(H&&N){N.style.transform="none";const I=H.getBoundingClientRect(),nt=g.current.get(O.key);if(nt){const K=nt.getBoundingClientRect(),ct=K.left+K.width*.5-I.left,ft=K.top+K.height*.5-I.top;M.current={btnCenterX:ct,btnCenterY:ft,btnWidth:K.width,btnNdcX:ct/I.width*2-1,btnNdcY:-(ft/I.height*2-1),transitionStartTime:0}}}const A=document.getElementById("webgl-container");A&&A.classList.add("visible"),x.current="TRANSITION_TO_3D",window.history.pushState({view:"pov_3d",seat:O.key},"")},[]),L=pn.useCallback((F,O)=>{if(x.current!=="MAP_2D")return;clearTimeout(E.current);const H=P_(F,O);S.current=H,e(H),c(H.key),E.current=setTimeout(()=>{B(H)},50)},[B]);Wx.useEffect(()=>{const F=O=>{if(x.current==="POV_3D"||x.current==="TRANSITION_TO_3D"){M.current.transitionStartTime=0,x.current="TRANSITION_TO_2D";const H=v.current;H&&H.classList.remove("sheet-visible","active");const N=document.getElementById("webgl-container");N&&N.classList.remove("interactive")}};return window.addEventListener("popstate",F),()=>window.removeEventListener("popstate",F)},[]);const w=pn.useCallback((F,O,H)=>{F.stopPropagation();const N=P_(O,H);S.current=N,e(N)},[]),et=pn.useCallback(()=>{o&&(d(`Booked Row ${o.rowLetter}, Seat ${o.seatNum} (${o.price})`),clearTimeout(C.current),C.current=setTimeout(()=>d(null),2600))},[o]);return _t.jsx("div",{className:"stage-wrapper",children:_t.jsxs("div",{className:"phone-frame",id:"phone-frame",ref:p,children:[_t.jsxs("div",{className:"status-bar",children:[_t.jsx("span",{children:"9:41"}),_t.jsxs("div",{className:"status-icons",children:[_t.jsxs("svg",{width:"17",height:"11",viewBox:"0 0 17 11",fill:"none",children:[_t.jsx("rect",{x:"0.5",y:"7",width:"2.8",height:"3.5",rx:"0.8",fill:"white"}),_t.jsx("rect",{x:"4.8",y:"5",width:"2.8",height:"5.5",rx:"0.8",fill:"white"}),_t.jsx("rect",{x:"9.1",y:"2.5",width:"2.8",height:"8",rx:"0.8",fill:"white"}),_t.jsx("rect",{x:"13.4",y:"0.5",width:"2.8",height:"10",rx:"0.8",fill:"white"})]}),_t.jsxs("svg",{width:"16",height:"11",viewBox:"0 0 16 11",fill:"none",children:[_t.jsx("path",{d:"M8 10.5C8.82843 10.5 9.5 9.82843 9.5 9C9.5 8.17157 8.82843 7.5 8 7.5C7.17157 7.5 6.5 8.17157 6.5 9C6.5 9.82843 7.17157 10.5 8 10.5Z",fill:"white"}),_t.jsx("path",{d:"M4.8 6.7C6.6 5.1 9.4 5.1 11.2 6.7",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),_t.jsx("path",{d:"M2.2 4.1C5.5 1.2 10.5 1.2 13.8 4.1",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"})]}),_t.jsxs("svg",{width:"25",height:"12",viewBox:"0 0 25 12",fill:"none",children:[_t.jsx("rect",{x:"0.75",y:"1",width:"21",height:"10",rx:"3",stroke:"white",strokeOpacity:"0.4",strokeWidth:"1.2"}),_t.jsx("rect",{x:"2.5",y:"2.75",width:"17.5",height:"6.5",rx:"1.5",fill:"white"}),_t.jsx("path",{d:"M23 4.2V7.8C23.8 7.4 24.2 6.7 24.2 6C24.2 5.3 23.8 4.6 23 4.2Z",fill:"white",fillOpacity:"0.45"})]})]})]}),_t.jsx(wC,{modeRef:x,selectedSeatRef:S,btnMetricsRef:M,map2DLayerRef:m,povHudLayerRef:v}),_t.jsxs("div",{className:"map-2d-layer",ref:m,children:[_t.jsxs("div",{className:"nav-header",children:[_t.jsx("button",{className:"icon-circle-btn","aria-label":"Back",children:_t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:_t.jsx("path",{d:"M15 18L9 12L15 6",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})}),_t.jsxs("div",{className:"header-title-group",children:[_t.jsx("div",{className:"header-title",children:"Dune: Part Two"}),_t.jsx("div",{className:"header-subtitle",children:"Hall 3 · Fri 14 Nov"})]}),_t.jsx("button",{className:"icon-circle-btn","aria-label":"Hall Info",children:_t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:[_t.jsx("circle",{cx:"12",cy:"12",r:"8.5",stroke:"currentColor",strokeWidth:"1.8"}),_t.jsx("path",{d:"M12 11.2V15.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),_t.jsx("circle",{cx:"12",cy:"8.2",r:"1",fill:"currentColor"})]})})]}),_t.jsx("div",{className:"showtime-wrap",children:_t.jsx("div",{className:"showtime-segmented",children:[{time:"17:30",tag:"2D"},{time:"19:45",tag:"IMAX"},{time:"22:15",tag:"2D"}].map(F=>_t.jsxs("button",{className:`showtime-pill ${i===F.time?"active":""}`,onClick:()=>r(F.time),children:[_t.jsx("span",{children:F.time}),_t.jsx("span",{className:"format-tag",children:F.tag})]},F.time))})}),_t.jsxs("div",{className:"screen-arc-container",children:[_t.jsxs("svg",{className:"screen-arc-svg",viewBox:"0 0 360 76",fill:"none",children:[_t.jsxs("defs",{children:[_t.jsxs("radialGradient",{id:"screenGlowGrad",cx:"50%",cy:"0%",r:"72%",fx:"50%",fy:"0%",children:[_t.jsx("stop",{offset:"0%",stopColor:"rgba(255, 250, 240, 0.24)"}),_t.jsx("stop",{offset:"45%",stopColor:"rgba(255, 250, 240, 0.06)"}),_t.jsx("stop",{offset:"100%",stopColor:"rgba(255, 250, 240, 0)"})]}),_t.jsxs("linearGradient",{id:"screenLineGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[_t.jsx("stop",{offset:"0%",stopColor:"rgba(255, 255, 255, 0.02)"}),_t.jsx("stop",{offset:"18%",stopColor:"rgba(255, 250, 240, 0.65)"}),_t.jsx("stop",{offset:"50%",stopColor:"rgba(255, 255, 255, 0.95)"}),_t.jsx("stop",{offset:"82%",stopColor:"rgba(255, 250, 240, 0.65)"}),_t.jsx("stop",{offset:"100%",stopColor:"rgba(255, 255, 255, 0.02)"})]})]}),_t.jsx("path",{d:"M 8 28 Q 180 -10 352 28 L 360 76 L 0 76 Z",fill:"url(#screenGlowGrad)"}),_t.jsx("path",{d:"M 8 28 Q 180 -10 352 28",stroke:"url(#screenLineGrad)",strokeWidth:"2.2",strokeLinecap:"round"})]}),_t.jsx("div",{className:"screen-label",children:"SCREEN"})]}),_t.jsxs("div",{className:"seat-map-viewport",children:[_t.jsx("div",{className:"seat-rows-container",children:Bc.map((F,O)=>{const H=O>=7;return _t.jsxs("div",{className:"seat-row",children:[_t.jsx("div",{className:"row-letter",children:F}),_t.jsx("div",{className:"row-blocks",children:w_.map((N,A)=>_t.jsx("div",{className:"seat-block",children:N.map(I=>{const nt=`${F}${I}`,K=D_.has(nt),ct=(o==null?void 0:o.key)===nt,ft=l===nt;return _t.jsx("button",{ref:V=>{V&&g.current.set(nt,V)},"data-key":nt,className:["seat-dot",H?"recliner":"",K?"taken":"",ct?"selected":"",ft?"touch-ring":""].filter(Boolean).join(" "),disabled:K,"aria-label":`Row ${F} Seat ${I}`,onClick:()=>L(O,I),children:I},nt)})},A))})]},F)})}),_t.jsxs("div",{className:"seat-legend",children:[_t.jsxs("div",{className:"legend-item",children:[_t.jsx("span",{className:"legend-swatch available"}),_t.jsx("span",{children:"Available"})]}),_t.jsxs("div",{className:"legend-item",children:[_t.jsx("span",{className:"legend-swatch taken"}),_t.jsx("span",{children:"Taken"})]}),_t.jsxs("div",{className:"legend-item",children:[_t.jsx("span",{className:"legend-swatch recliner"}),_t.jsx("span",{children:"Recliner"})]}),_t.jsxs("div",{className:"legend-item",children:[_t.jsx("span",{className:"legend-swatch selected"}),_t.jsx("span",{children:"Selected"})]})]})]}),_t.jsxs("div",{className:"bottom-bar-2d",children:[_t.jsxs("div",{className:"selection-summary",children:[_t.jsx("div",{className:"summary-label",children:o?`Row ${o.rowLetter} · Seat ${o.seatNum}`:"Choose your seat"}),_t.jsx("div",{className:"summary-price",children:o?o.price:"—"})]}),_t.jsx("button",{className:`continue-btn ${o?"enabled":""}`,onClick:()=>{o&&(clearTimeout(E.current),B(o))},children:"Continue"})]})]}),_t.jsxs("div",{className:"pov-hud-layer",ref:v,children:[_t.jsxs("div",{className:"pov-top-bar",children:[_t.jsx("button",{className:"pov-back-btn","aria-label":"Back to seat map",onClick:y,children:_t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:_t.jsx("path",{d:"M15 18L9 12L15 6",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})}),_t.jsxs("div",{className:"pov-pill-badge",children:[_t.jsx("span",{className:"pov-pill-dot"}),_t.jsxs("span",{children:["View from ",o?o.key:"B4"]})]})]}),_t.jsxs("div",{className:"pov-bottom-sheet",children:[_t.jsx("div",{className:"sheet-handle"}),_t.jsxs("div",{className:"sheet-header-row",children:[_t.jsxs("div",{children:[_t.jsx("div",{className:"sheet-zone-tag",children:(o==null?void 0:o.zone)||"UP CLOSE"}),_t.jsx("div",{className:"sheet-seat-title",children:o?`Row ${o.rowLetter}, Seat ${o.seatNum}`:"Row B, Seat 4"}),_t.jsx("div",{className:"sheet-seat-meta",children:o?`${o.tier} · ${o.price}`:"Standard · €12.50"})]}),_t.jsxs("div",{className:"sheet-minimap",title:"Tap a seat dot or return to 2D map",onClick:y,children:[_t.jsx("svg",{className:"minimap-screen-arc",viewBox:"0 0 68 6",fill:"none",children:_t.jsx("path",{d:"M 2 5 Q 34 0 66 5",stroke:"rgba(255,255,255,0.75)",strokeWidth:"1.5",strokeLinecap:"round"})}),_t.jsx("div",{className:"minimap-grid",children:Bc.map((F,O)=>{const H=O>=7;return _t.jsx("div",{className:"minimap-row",children:w_.map((N,A)=>_t.jsx("div",{className:"minimap-block",children:N.map(I=>{const nt=`${F}${I}`,K=D_.has(nt),ct=(o==null?void 0:o.key)===nt;return _t.jsx("div",{"data-key":nt,className:["minimap-dot",H?"recliner":"",ct?"active":""].filter(Boolean).join(" "),onClick:ft=>{K||w(ft,O,I)}},nt)})},A))},F)})})]})]}),_t.jsxs("div",{className:"sheet-metrics-grid",children:[_t.jsxs("div",{className:"metric-card",children:[_t.jsx("div",{className:"metric-value",children:(o==null?void 0:o.distance)||"6.3 m"}),_t.jsx("div",{className:"metric-label",children:"to screen"})]}),_t.jsxs("div",{className:"metric-card",children:[_t.jsx("div",{className:"metric-value",children:(o==null?void 0:o.fov)||"86°"}),_t.jsx("div",{className:"metric-label",children:"field of view"})]}),_t.jsxs("div",{className:"metric-card",children:[_t.jsx("div",{className:"metric-value",children:(o==null?void 0:o.offset)||"2.2 m"}),_t.jsx("div",{className:"metric-label",children:(o==null?void 0:o.offsetDir)||"left of centre"})]})]}),_t.jsxs("div",{className:"sheet-actions",children:[_t.jsx("button",{className:"btn-change-seat",onClick:y,children:"Change seat"}),_t.jsxs("button",{className:"btn-book-seat",onClick:et,children:["Book · ",(o==null?void 0:o.price)||"€12.50"]})]})]})]}),_t.jsxs("div",{className:`booking-toast ${h?"show":""}`,children:[_t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:[_t.jsx("circle",{cx:"12",cy:"12",r:"10",fill:"#7ce395"}),_t.jsx("path",{d:"M8 12.5L10.8 15.2L16.2 9.5",stroke:"#08150c",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round"})]}),_t.jsx("span",{children:h})]}),_t.jsx("div",{className:"home-indicator"})]})})}AE.createRoot(document.getElementById("root")).render(_t.jsx(Wx.StrictMode,{children:_t.jsx(DC,{})}));
