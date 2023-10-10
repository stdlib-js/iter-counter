"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=d(function(g,v){
var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/assert-is-function/dist'),p=require('@stdlib/assert-is-iterator-like/dist'),n=require('@stdlib/symbol-iterator/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist');function a(e){var r,u,i;if(!p(e))throw new TypeError(q('0Of3y',e));return i=0,r={},o(r,"next",f),o(r,"return",c),n&&m(e[n])&&o(r,n,l),r;function f(){var t;return u?{done:!0}:(t=e.next(),t.done?(u=!0,t):(i+=1,{value:i,done:!1}))}function c(t){return u=!0,arguments.length?{value:t,done:!0}:{done:!0}}function l(){return a(e[n]())}}v.exports=a
});var x=s();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
