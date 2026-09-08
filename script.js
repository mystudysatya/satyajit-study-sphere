const menu=document.querySelector(".menu"), header=document.querySelector("header");
menu?.addEventListener("click",()=>header.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>header.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

function doSearch(){
 const q=document.getElementById("search").value.trim().toLowerCase();
 const cards=[...document.querySelectorAll(".resource")];
 if(!q){cards.forEach(c=>c.style.display="block");document.getElementById("searchResult").textContent="";return;}
 let found=0;
 cards.forEach(c=>{const ok=(c.dataset.tags+" "+c.innerText).toLowerCase().includes(q);c.style.display=ok?"block":"none";if(ok)found++;});
 document.getElementById("searchResult").textContent=found?`${found} matching resource${found>1?"s":""} shown below.`:"No sample resource found. More content will appear as the library grows.";
 document.getElementById("materials").scrollIntoView({behavior:"smooth"});
}
document.getElementById("search").addEventListener("keydown",e=>{if(e.key==="Enter")doSearch()});
