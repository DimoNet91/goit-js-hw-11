import{S as m,i as a}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",g="44049527-352ef67b2949e9cf818cbb88f";function d(s=""){const o=new URLSearchParams({key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function y(s){return s.map(({webformatURL:o,largeImageURL:r,tags:n,likes:e,views:t,comments:i,downloads:u})=>`<li class="gallery-item">
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
              <li class="item-info">Comments <span>${i}</span></li>
              <li class="item-info">Downloads <span>${u}</span></li>
            </ul>
          </a>
        </li>
    `).join("")}const f=document.querySelector(".search-form"),c=document.querySelector("#image"),h=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});f.addEventListener("submit",S);function S(s){if(s.preventDefault(),l.style.display="inline-block",c.value.trim()===""){a.warning({title:"Caution",message:"Search field cannot be empty!",messageColor:"#fff",backgroundColor:"#ffa000",position:"topRight"}),l.style.display="none";return}const{image:o}=s.currentTarget.elements;d(o.value).then(r=>{r.total===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"}):(h.innerHTML=y(r.hits),b.refresh())}).catch(r=>{a.error({title:"Error",message:"Something went wrong. Please try again later.",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"}),console.error(r)}).finally(()=>{l.style.display="none"}),c.value="",f.reset()}
//# sourceMappingURL=commonHelpers.js.map
