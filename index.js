/* empty css                      */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const l=document.querySelector(".modal-btn"),m=document.querySelector(".close-btn"),r=document.querySelector(".mob-menu");l.addEventListener("click",()=>{r.classList.add("is-open")});m.addEventListener("click",()=>{r.classList.remove("is-open")});document.addEventListener("click",c=>{!r.contains(c.target)&&!l.contains(c.target)&&r.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",()=>{const c=document.querySelector(".mob-menu"),n=document.querySelector(".btn-link-menu");if(!n){console.error("Кнопка .btn-link-menu не знайдена!");return}n.addEventListener("click",a=>{a.preventDefault();const s=document.querySelector("#catalog");s?s.scrollIntoView({behavior:"smooth"}):console.error("Секція #catalog не знайдена!"),c&&c.classList.remove("is-open")})});const p="/romanenko-accessories/assets/branchletcard-DGhxcBB5.webp",d="/romanenko-accessories/assets/earringscard-CtZcwJgh.webp",k="/romanenko-accessories/assets/earrings1-BdaUYnRr.webp",b="/romanenko-accessories/assets/earrings2-CjhS0HOA.webp",u="/romanenko-accessories/assets/earrings3-DpFTjmrQ.webp",g="/romanenko-accessories/assets/earrings4-D_Oc38MJ.webp",w="/romanenko-accessories/assets/earrings5-BSh0vOfq.webp",h="/romanenko-accessories/assets/earrings6-DUwOANmZ.webp",f="/romanenko-accessories/assets/earrings7-DJHh0nVJ.webp",D="/romanenko-accessories/assets/earrings8-CR4TzV9M.webp",y="/romanenko-accessories/assets/earrings9-B5j3ggiP.webp",B="/romanenko-accessories/assets/earrings10-Ddu8dW6t.webp",L="/romanenko-accessories/assets/hoopscard-CV-BZcTQ.webp",v="/romanenko-accessories/assets/hoops1-BYTxAdWg.webp",E="/romanenko-accessories/assets/hoops2-CzGrYXVr.webp",S="/romanenko-accessories/assets/hoops3-DWbssMdk.webp",P="/romanenko-accessories/assets/hoops4-G0AxPh7b.webp",O="/romanenko-accessories/assets/hoops5-CbJzDQWr.webp",C="/romanenko-accessories/assets/hoops6-PrxaHXb6.webp",q="/romanenko-accessories/assets/hoops7-eFmr7F9I.webp",H="/romanenko-accessories/assets/hoops8-Bzq5drHH.webp",M="/romanenko-accessories/assets/necklacescard-cSNjt49Z.webp",F="/romanenko-accessories/assets/necklaces1-BrUBWwuE.webp",N="/romanenko-accessories/assets/necklaces2-BVke-su3.webp",V="/romanenko-accessories/assets/necklaces3-DMw2FM4G.webp",W="/romanenko-accessories/assets/necklaces4-DXh_8lke.webp",j="/romanenko-accessories/assets/necklaces5-BglPwo2J.webp",I="/romanenko-accessories/assets/necklaces6-DWedPmum.webp",K="/romanenko-accessories/assets/necklaces7-cD0FNKKi.webp",T="/romanenko-accessories/assets/necklaces8-z_RES-Bo.webp",Z="/romanenko-accessories/assets/necklaces9-DsFXNjOF.webp",J="/romanenko-accessories/assets/necklaces10-CDhZ3EoW.webp",x="/romanenko-accessories/assets/necklaces11-DuS9dNGQ.webp",z="/romanenko-accessories/assets/necklaces12-B92N9wkJ.webp",G="/romanenko-accessories/assets/necklaces13-DKV-B6R7.webp",Y="/romanenko-accessories/assets/necklaces14-LKPW4UvC.webp",A="/romanenko-accessories/assets/necklaces15-Du9nHKY0.webp",X="/romanenko-accessories/assets/necklaces17-DZLjKZPS.webp",Q="/romanenko-accessories/assets/necklaces16-ByjFz-Oh.webp",R="/romanenko-accessories/assets/combscard-DSelfEOn.webp",U="/romanenko-accessories/assets/pins5-DDeBYHrq.webp",_="/romanenko-accessories/assets/pins1-BHm4K9hu.webp",$="/romanenko-accessories/assets/pins2-CVSH9nmm.webp",ee="/romanenko-accessories/assets/pins3-DEOW9iX8.webp",se="/romanenko-accessories/assets/pins4-CD92s6Ta.webp",oe="/romanenko-accessories/assets/pins5-DDeBYHrq.webp",ce="/romanenko-accessories/assets/pins6-DHInDuwd.webp",ne="/romanenko-accessories/assets/pins7-BDZVSTxO.webp",ae=document.querySelector(".list-catalog"),t=document.getElementById("product-modal"),te=document.getElementById("modal-title"),re=document.getElementById("modal-gallery"),ie=document.getElementById("modal-close"),le={branchlet:{title:"Гілочки",price:"Price",images:[p]},earrings:{title:"Сережки",price:"Price",images:[k,b,u,g,w,h,f,D,y,B,d]},hoops:{title:"Обручі",price:"Price",images:[L,v,E,S,P,O,C,q,H]},necklaces:{title:"Намиста",price:"Price",images:[M,F,N,V,W,j,I,K,T,Z,J,x,z,G,Y,A,Q,X]},combs:{title:"Гребінці",price:"Price",images:[R]},pins:{title:"Шпильки",price:"Price",images:[U,_,$,ee,se,oe,ce,ne]}};ae.addEventListener("click",c=>{const n=c.target.closest(".item-catalog");if(!n)return;const a=n.dataset.type,s=le[a];s&&(te.textContent=s.title,re.innerHTML=s.images.map(e=>`
      <li class="modal-item">
        <img src="${e}" alt="${s.title}" class="modal-img"/>
        <p class="modal-price">${s.price}</p>
      </li>
    `).join(""),t.classList.add("open"))});ie.addEventListener("click",()=>{t.classList.remove("open")});t.addEventListener("click",c=>{c.target===t&&t.classList.remove("open")});
//# sourceMappingURL=index.js.map
