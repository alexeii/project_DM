!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=()=>{const e=document.querySelector("#totop"),t=document.querySelector(".top-menu"),n=document.querySelector(".head-slider");e.style.display="none",document.addEventListener("scroll",()=>{if(n.getBoundingClientRect().top<0?e.style.display="block":e.style.display="none",window.innerWidth<768){let e=n.getBoundingClientRect();e.top<0?t.style.position="fixed":e.top>0&&(t.style.position="")}})};var o=()=>{const e=document.querySelector(".menu-button>img"),t=document.querySelector(".popup-menu"),n=document.querySelector(".hidden-small");window.innerWidth<768?(e.style.display="flex",n.style.display=""):(e.style.display="",n.style.display="flex"),document.addEventListener("click",n=>{let l=n.target;l===e?t.style.display="flex":(l.matches(".close-menu-btn>img")||l.matches(".popup-menu>ul>li>a"))&&(t.style.display="none")})};var r=()=>{const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t,n=0;const l=()=>{e[n].style.display="none",n++,n>=e.length&&(n=0),((e,t)=>{e[t].style.display="flex"})(e,n)};((e=2e3)=>{t=setInterval(l,e)})()};var c=()=>{const e=document.querySelector("#gallery"),t=document.querySelector(".gallery-slider"),n=e.querySelectorAll(".slide"),l=[],o=[],r=document.createElement("ul");r.className="slider-dots",t.append(r);for(let e=0;e<n.length;e++){const t=document.createElement("li");r.append(t);const n=document.createElement("button");o[e]=n,o[e].className="dot",t.append(n),l[e]=t}const c=document.createElement("span");c.className="slider-arrow",c.classList.add("prev"),t.append(c);const s=document.createElement("span");s.className="slider-arrow",s.classList.add("next"),t.append(s);for(let e=1;e<n.length;e++)n[e].style.display="none";l[0].classList.add("slick-active");let a,d=0;const i=(e,t)=>{e[t].style.display="none",l[t].classList.remove("slick-active")},u=(e,t)=>{e[t].style.display="flex",l[t].classList.add("slick-active")},y=()=>{i(n,d),d++,d>=n.length&&(d=0),u(n,d)},p=(e=2e3)=>{a=setInterval(y,e)};e.addEventListener("click",e=>{e.preventDefault();const t=e.target;t.matches(".slider-arrow, .dot")&&(i(n,d),t.matches(".next")?d++:t.matches(".prev")?d--:t.matches(".dot")&&o.forEach((e,n)=>{e===t&&(d=n)}),d>=n.length&&(d=0),d<0&&(d=n.length-1),u(n,d))}),e.addEventListener("mouseover",e=>{(e.target.matches(".slider-arrow")||e.target.matches(".dot"))&&clearInterval(a)}),e.addEventListener("mouseout",e=>{(e.target.matches(".slider-arrow")||e.target.matches(".dot"))&&p()}),p()};var s=()=>{const e=document.querySelector("#card_order"),t=e.querySelector(".time");if(!t)return;const n=e.querySelectorAll(".club>input"),l=e.querySelector("#price-total"),o=e.querySelector(".input-text>input"),r=[2999,14990,21990,24990],c=[1999,9900,13900,19900],s=t.querySelectorAll("input");e.addEventListener("click",e=>{const t=e.target;t.closest(".time")?n.forEach(e=>{e.checked&&("schelkovo"===e.value?(s.forEach((e,t)=>{e.checked&&(l.textContent=r[t])}),a()):"mozaika"===e.value&&(s.forEach((e,t)=>{e.checked&&(l.textContent=c[t])}),a()))}):t===n[0]?(s.forEach((e,t)=>{e.checked&&(l.textContent=c[t])}),a()):t===n[1]&&(s.forEach((e,t)=>{e.checked&&(l.textContent=r[t])}),a())});const a=()=>{"ТЕЛО2020"===o.value.trim()&&(l.textContent=Math.ceil(+l.textContent-.3*+l.textContent))};o.addEventListener("change",a)};var a=()=>{const e=document.querySelector(".servises-trans"),t=document.querySelector(".services-slider"),n=(t.querySelectorAll(".slide"),document.createElement("span"));n.className="slider-arrow",n.classList.add("prev"),t.append(n);const l=document.createElement("span");l.className="slider-arrow",l.classList.add("next"),t.append(l);let o=0;l.addEventListener("click",()=>{o<6&&(++o,e.style.transform=`translateX(-${20*o}%)`)}),n.addEventListener("click",()=>{o>=0&&(--o,e.style.transform=`translateX(-${20*o}%)`)})};var d=()=>{const e=document.querySelectorAll("input[type='text']"),t=document.querySelectorAll("input[type='tel']");e.forEach(e=>{e.addEventListener("keyup",()=>{e.value=e.value.replace(/[^а-я ]/gi,"")})}),t.forEach(e=>{e.maxLength=12,e.addEventListener("keyup",()=>{e.value=e.value.replace(/[^\d\+]/g,"")})})};var i=()=>{const e=document.querySelectorAll("form"),t=document.querySelector("#thanks"),n=t.querySelector(".form-content>p"),l=document.querySelector("#free_visit_form"),o=document.querySelector("#callback_form");e.forEach(e=>{e.addEventListener("submit",c=>{c.preventDefault(),t.style.display="block",l.style.display="none",o.style.display="none",n.textContent="Идёт отправка...";const s=new FormData(e),a={};s.forEach((e,t)=>{a[t]=e}),r(a).then(e=>{if(200!==e.status)throw new Error("status network not 200");n.innerHTML="Ваша заявка отправлена.<br />Мы свяжемся с вами в ближайшее время.",c.target.querySelectorAll("input").forEach(e=>{e.value=""});setTimeout(()=>t.style.display="none",2500)}).catch(e=>{n.textContent="Что то пошло не так...",console.error(e)})})});const r=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};(()=>{const e=document.querySelector(".clubs-list>p"),t=document.querySelector(".clubs-list>ul"),n=document.querySelector("#free_visit_form"),l=document.querySelector("#callback_form"),o=document.querySelector(".fixed-gift>img"),r=document.querySelector("#gift"),c=document.querySelector("#thanks");document.addEventListener("click",s=>{const a=s.target;a!==e&&a!==t?t.style.display="none":a===e&&(t.style.display="block"!==t.style.display?"block":"none"),"#free_visit_form"===a.dataset.popup?n.style.display="block":!a.matches(".close_icon")&&a.closest(".form-content")||(n.style.display="none"),"#callback_form"===a.dataset.popup?l.style.display="block":!a.matches(".close_icon")&&a.closest(".form-content")||(l.style.display="none"),o&&(o===a?(r.style.display="block",o.style.display="none"):(a.matches(".close_icon")||!a.closest(".form-content")||a.matches(".close-btn"))&&(r.style.display="none")),(a.matches(".close_icon")||!a.closest(".form-content")||a.matches(".close-btn"))&&(c.style.display="none")})})(),l(),o(),r(),c(),s(),a(),d(),i()}]);