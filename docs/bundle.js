!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var o,r="",i=document.querySelector("#brailleText"),l=document.getElementById("toast");console.log("New one3"),window.convertToBraille=function(t){t=t.value,r="";for(var n=0;n<t.length;n++)try{r+=o[0][t.charAt(n)][0]}catch(e){r+=t.charAt(n);continue}0==t.length?i.innerText="":splitWords(t,r)},window.copy=function(){l.style.height="40px",l.style.fontSize="1em",window.setTimeout(function(){l.style.height="0px",l.style.fontSize="0px"},3e3);var e=document.createElement("input");document.body.appendChild(e),e.value=i.innerText,e.select(),document.execCommand("copy",!1),e.remove()},window.splitWords=function(e,t){console.log(e,t);var n="",o=["layer1","layer2"];if(null!=e||null!=t){var r=t.split(" ");e.split(" ").forEach(function(e,t){n+="<span class='brailleText tool "+o[t%2]+"' data-tip="+e+">"+r[t]+"</span>"})}i.innerHTML=n},window.toggleMenu=function(){var e=document.getElementById("sidenav"),t=document.getElementsByTagName("body")[0];"4em"==e.style.width?(e.style.width="0em",t.style.marginLeft="0em"):(e.style.width="4em",t.style.marginLeft="4em")},document.querySelector("textarea").addEventListener("keydown",function(){var e=this;setTimeout(function(){e.style.cssText="height:auto; padding:0",e.style.cssText="-moz-box-sizing:content-box",e.style.cssText="height:"+e.scrollHeight+"px"},0)}),window.onload=function(){fetch("data/hindi-braille-mapping.json").then(function(e){return e.json().then(function(e){o=e,i.innerText="",document.querySelector("#hinditext").innerHTML="",console.log("Hindi JSON loaded..")})}).catch(function(e){console.log(e)})}},function(e,t,n){}]);