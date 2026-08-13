const modal=document.getElementById('offerModal');
function openPopup(){modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closePopup(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
function book(){window.location.href='tel:8178009011'}
modal.addEventListener('click',e=>{if(e.target===modal)closePopup()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePopup()});
window.addEventListener('load',()=>setTimeout(openPopup,900));
