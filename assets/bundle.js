(()=>{"use strict";var e={75:(e,t,n)=>{n.r(t)}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};n(75),window.addEventListener("load",(function(){!async function(){const e=document.querySelector("#greeting-content-text-heading-whoiam"),t=document.querySelector("#greeting-content-text-heading-text-cursor"),n=e.textContent;e.textContent="",t.classList.remove("blinker-effect");for(let t of n)await new Promise((e=>setInterval(e,400))),e.textContent+=t;t.classList.add("blinker-effect")}(),matchMedia("(pointer: fine)").matches&&document.querySelectorAll(".projects-div").forEach((e=>{const t=e.lastElementChild;t.classList.add("display-none"),e.addEventListener("mouseover",(()=>{t.classList.remove("display-none")})),e.addEventListener("mouseleave",(()=>{t.classList.add("display-none")}))}))}))})();