import{S as d,i as f}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(i){return i.map(({webformatURL:o,largeImageURL:r,tags:n,likes:e,views:t,comments:s,downloads:u})=>`
     <li class="list-item">
     <a href="${r}">
         <img src="${o}" alt="${n}" title="${n}"/>
     </a>
        <div class="info">
        <p>❤️ ${e}</p>
        <p>👁️${t}</p>
        <p>💬${s}</p>
        <p>⬇️${u}</p>
        </div>
     </li>
    `).join("")}let h=new d(".list a",{captionsData:"alt",captionDelay:250});function m(i){f.error({message:i,position:"topRight"})}const y="46809919-8ae2f3dd2d3333d4ada30ded2",a=document.querySelector(".list");function g(i="dogs"){const o=new URLSearchParams({key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${o}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()}).then(r=>{if(a.innerHTML="",r.hits.length===0){m("Sorry, there are no images matching your search query. Please try again!");return}a.insertAdjacentHTML("beforeend",p(r.hits)),h.refresh()}).catch(r=>{console.log("Error:",r)})}const c=document.querySelector(".search-form"),l=document.querySelector(".loader");function L(){l.style.display="block"}function b(){l.style.display="none"}c.addEventListener("submit",i=>{i.preventDefault();const o=c.query.value.trim();o&&(L(),g(o).finally(b))});
//# sourceMappingURL=index.js.map
