"use strict";var d=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var s=d(function(g,v){
var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/assert-is-function/dist'),p=require('@stdlib/assert-is-iterator-like/dist'),u=require('@stdlib/symbol-iterator/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist');function a(e){var r,t,i;if(!p(e))throw new TypeError(q('0Of3y',e));return i=0,r={},o(r,"next",f),o(r,"return",c),u&&m(e[u])&&o(r,u,l),r;function f(){var n;return t?{done:!0}:(n=e.next(),n.done?(t=!0,n):(i+=1,{value:i,done:!1}))}function c(n){return t=!0,arguments.length?{value:n,done:!0}:{done:!0}}function l(){return a(e[u]())}}v.exports=a
});var x=s();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
