!function(e){var t={};function l(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=t,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}([function(e,t,l){"use strict";l.r(t);var n=()=>{const e=document.querySelector("#totop"),t=document.querySelector(".top-menu"),l=document.querySelector(".head-slider");e.style.display="none",document.addEventListener("scroll",()=>{if(l.getBoundingClientRect().top<0?e.style.display="block":e.style.display="none",window.innerWidth<768){let e=l.getBoundingClientRect();e.top<0?t.style.position="fixed":e.top>0&&(t.style.position="")}})};var o=()=>{const e=document.querySelector(".menu-button>img"),t=document.querySelector(".popup-menu"),l=document.querySelector(".hidden-small");window.innerWidth<768?(e.style.display="flex",l.style.display=""):(e.style.display="",l.style.display="flex"),document.addEventListener("click",l=>{let n=l.target;n===e?t.style.display="flex":(n.matches(".close-menu-btn>img")||n.matches(".popup-menu>ul>li>a"))&&(t.style.display="none")})};var r=()=>{const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t,l=0;const n=()=>{e[l].style.display="none",l++,l>=e.length&&(l=0),((e,t)=>{e[t].style.display="flex"})(e,l)};((e=2e3)=>{t=setInterval(n,e)})()};var s=()=>{const e=document.querySelector("#gallery"),t=document.querySelector(".gallery-slider"),l=e.querySelectorAll(".slide"),n=[],o=[],r=document.createElement("ul");r.className="slider-dots",t.append(r);for(let e=0;e<l.length;e++){const t=document.createElement("li");r.append(t);const l=document.createElement("button");o[e]=l,o[e].className="dot",t.append(l),n[e]=t}const s=document.createElement("span");s.className="slider-arrow",s.classList.add("prev"),t.append(s);const c=document.createElement("span");c.className="slider-arrow",c.classList.add("next"),t.append(c);for(let e=1;e<l.length;e++)l[e].style.display="none";n[0].classList.add("slick-active");let a,d=0;const i=(e,t)=>{e[t].style.display="none",n[t].classList.remove("slick-active")},u=(e,t)=>{e[t].style.display="flex",n[t].classList.add("slick-active")},y=()=>{i(l,d),d++,d>=l.length&&(d=0),u(l,d)},m=(e=2e3)=>{a=setInterval(y,e)};e.addEventListener("click",e=>{e.preventDefault();const t=e.target;t.matches(".slider-arrow, .dot")&&(i(l,d),t.matches(".next")?d++:t.matches(".prev")?d--:t.matches(".dot")&&o.forEach((e,l)=>{e===t&&(d=l)}),d>=l.length&&(d=0),d<0&&(d=l.length-1),u(l,d))}),e.addEventListener("mouseover",e=>{(e.target.matches(".slider-arrow")||e.target.matches(".dot"))&&clearInterval(a)}),e.addEventListener("mouseout",e=>{(e.target.matches(".slider-arrow")||e.target.matches(".dot"))&&m()}),m()};var c=()=>{const e=document.querySelector("#card_order"),t=e.querySelector(".time");if(!t)return;const l=e.querySelectorAll(".club>input"),n=e.querySelector("#price-total"),o=[2999,14990,21990,24990],r=[1999,9900,13900,19900],s=t.querySelectorAll("input");e.addEventListener("click",e=>{let t=e.target;t.closest(".time")?l.forEach(e=>{e.checked&&("schelkovo"===e.value?s.forEach((e,t)=>{e.checked&&(n.textContent=o[t])}):"mozaika"===e.value&&s.forEach((e,t)=>{e.checked&&(n.textContent=r[t])}))}):t===l[0]?s.forEach((e,t)=>{e.checked&&(n.textContent=r[t])}):t===l[1]&&s.forEach((e,t)=>{e.checked&&(n.textContent=o[t])})})};var a=()=>{const e=document.querySelector(".servises-trans"),t=document.querySelector(".services-slider"),l=(t.querySelectorAll(".slide"),document.createElement("span"));l.className="slider-arrow",l.classList.add("prev"),t.append(l);const n=document.createElement("span");n.className="slider-arrow",n.classList.add("next"),t.append(n);let o=0;n.addEventListener("click",()=>{o<6&&(++o,e.style.transform=`translateX(-${20*o}%)`)}),l.addEventListener("click",()=>{o>=0&&(--o,e.style.transform=`translateX(-${20*o}%)`)})};(()=>{const e=document.querySelector(".clubs-list>p"),t=document.querySelector(".clubs-list>ul"),l=document.querySelector("#free_visit_form"),n=document.querySelector("#callback_form"),o=document.querySelector(".fixed-gift>img"),r=document.querySelector("#gift");document.addEventListener("click",s=>{const c=s.target;c!==e&&c!==t?t.style.display="none":c===e&&(t.style.display="block"!==t.style.display?"block":"none"),"#free_visit_form"===c.dataset.popup?l.style.display="block":!c.matches(".close_icon")&&c.closest(".form-content")||(l.style.display="none"),"#callback_form"===c.dataset.popup?n.style.display="block":!c.matches(".close_icon")&&c.closest(".form-content")||(n.style.display="none"),o&&(o===c?(r.style.display="block",o.style.display="none"):(c.matches(".close_icon")||!c.closest(".form-content")||c.matches(".close-btn"))&&(r.style.display="none"))})})(),n(),o(),r(),s(),c(),a()}]);