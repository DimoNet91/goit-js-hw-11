import{i as a,S as m}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",g="44049527-352ef67b2949e9cf818cbb88f";function d(i=""){const o=new URLSearchParams({key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function h(i){return i.map(({webformatURL:o,largeImageURL:r,tags:n,likes:e,views:t,comments:s,downloads:f})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${n}"
              width = "360"
              height = "200"
            />
            <ul class="image-info">
              <li class="item-info">Likes <span>${e}</span></li>
              <li class="item-info">Views <span>${t}</span></li>
              <li class="item-info">Comments <span>${s}</span></li>
              <li class="item-info">Downloads <span>${f}</span></li>
            </ul>
          </a>
        </li>
    `).join("")}const u=document.querySelector(".search-form"),l=document.querySelector("#image"),y=document.querySelector(".gallery"),c=document.querySelector(".loader");u.addEventListener("submit",b);function b(i){if(i.preventDefault(),c.style.display="inline-block",l.value.trim()===""){a.warning({title:"Caution",message:"Search field cannot be empty!",messageColor:"#fff",backgroundColor:"#ffa000",position:"topRight"});return}const{image:o}=i.currentTarget.elements;d(o.value).then(r=>{r.total===0&&a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"}),y.innerHTML=h(r.hits),L()}).catch(r=>alert(r)).finally(()=>{c.style.display="none"}),l.value="",u.reset()}function L(){new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
