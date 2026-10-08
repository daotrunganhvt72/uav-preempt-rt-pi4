const menuButton=document.getElementById('menu-toggle'),toc=document.getElementById('toc');
menuButton.addEventListener('click',()=>{const opened=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!opened));toc.hidden=opened;});
toc.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{toc.hidden=true;menuButton.setAttribute('aria-expanded','false');}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){toc.hidden=true;menuButton.setAttribute('aria-expanded','false');}});
