/* empty css                      */(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d=document.querySelector(".modal-btn"),m=document.querySelector(".close-btn"),l=document.querySelector(".mob-menu");d.addEventListener("click",()=>{l.classList.add("is-open")});m.addEventListener("click",()=>{l.classList.remove("is-open")});document.addEventListener("click",n=>{!l.contains(n.target)&&!d.contains(n.target)&&l.classList.remove("is-open")});const b=document.querySelector(".list-catalog"),r=document.getElementById("product-modal"),u=document.getElementById("modal-title"),w=document.getElementById("modal-gallery"),g=document.getElementById("modal-close"),i="/romanenko-accessories/";i.endsWith("/")?`${i}${productType}${image}`:`${i}${productType}${image}`;const y={branchlet:{title:"Гілочки",images:["branchlet-card.webp"]},earrings:{title:"Сережки",images:["earrings-1.webp","earrings-2.webp","earrings-3.webp","earrings-4.webp","earrings-5.webp","earrings-6.webp","earrings-7.webp","earrings-8.webp","earrings-9.webp","earrings-10.webp","earrings-card.webp"]},hoops:{title:"Обручі",images:["hoops-card.webp","hoops-1.webp","hoops-2.webp","hoops-3.webp","hoops-4.webp","hoops-5.webp","hoops-6.webp","hoops-7.webp","hoops-8.webp"]},necklaces:{title:"Намиста",images:["necklaces-card.webp","necklaces-1.webp","necklaces-2.webp","necklaces-3.webp","necklaces-4.webp","necklaces-5.webp","necklaces-6.webp","necklaces-7.webp","necklaces-8.webp","necklaces-9.webp","necklaces-10.webp","necklaces-12.webp","necklaces-13.webp","necklaces-14.webp","necklaces-15.webp","necklaces-16.webp","necklaces-17.webp"]},combs:{title:"Гребінці",images:["combs-card.webp"]},pins:{title:"Шпильки",images:["pins-card.webp","pins-1.webp","pins-2.webp","pins-3.webp","pins-4.webp","pins-5.webp","pins-6.webp","pins-7.webp"]}};b.addEventListener("click",n=>{const c=n.target.closest(".item-catalog");if(!c)return;const a=c.dataset.type,s=y[a];s&&(u.textContent=s.title,s.images.forEach(e=>{const t=document.createElement("li"),o=document.createElement("img");o.src=`${i}img/${a}/${e}`,o.alt=s.title;const p=document.createElement("h3");p.textContent="Price",t.appendChild(o),t.appendChild(p),w.appendChild(t)}),r.style.display="flex",document.body.style.overflow="hidden"),g.addEventListener("click",()=>{r.style.display="none",document.body.style.overflow="auto"}),r.addEventListener("click",e=>{e.target===r&&(r.style.display="none",document.body.style.overflow="auto")})});
//# sourceMappingURL=index.js.map
