(()=>{"use strict";const e=()=>{const e=document.createElement("div");e.classList.add("left-title");const t=document.createElement("div");t.classList.add("tabs-wrapper");const n=document.createElement("div");n.innerText="home";const c=document.createElement("div");c.innerText="menu";const i=document.createElement("div");i.innerText="contact",[e,t].forEach((e=>header.append(e))),[n,c,i].forEach((e=>{e.classList.add("tab"),t.append(e)}))},t=document.createElement("div");t.classList.add("title"),t.innerHTML="La Nona";const n=document.createElement("div");n.classList.add("subtitle"),n.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium eros nec ipsum placerat tristique eu id ex. Mauris in mattis purus. Vestibulum ut feugiat lorem, congue ornare risus. Aliquam. ";const c=document.getElementById("content"),i=document.createElement("div");i.classList.add("title-wrapper"),i.append(t,n);const s=()=>{c.append(i),setTimeout((()=>{i.classList.add("show-title"),t.classList.add("title-centered"),n.classList.add("title-centered")}),1e3)},a=document.getElementById("content"),d=class{constructor(e,t){this.image=e,this.ingredients=t}},o=[new d("./images/pizza.jpg",["ingr1","ingr2","ingr3"]),new d("./images/pizza.jpg",["ingr1","ingr2","ingr3"])];(()=>{const t=document.getElementById("content"),n=document.createElement("div");n.id="header",t.append(n),e()})(),s();const r=Array.from(document.getElementsByClassName("tab")),[m,l,u]=r,p=()=>{const e=document.getElementById("content");e.removeChild(e.lastElementChild)};r.forEach((e=>{const t=e.innerHTML;"home"==t?e.addEventListener("click",(()=>{p(),s()})):"menu"==t?e.addEventListener("click",(()=>{p(),(e=>{const t=document.createElement("div");t.classList.add("menu-wrapper"),a.appendChild(t),e.forEach((e=>{const n=document.createElement("div");n.classList.add("menu-item"),t.appendChild(n);const c=document.createElement("img");c.src=e.image,c.classList.add("item-image");const i=document.createElement("ul");i.classList.add("ingredients-container"),e.ingredients.forEach((e=>{console.log(e);const t=document.createElement("li");t.innerHTML=e,console.log(t.innerHTML),i.appendChild(t)})),n.append(c,i)}))})(o)})):"contact"==t&&e.addEventListener("click",(()=>{p(),loadContact()}))}))})();