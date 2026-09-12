const loader=document.querySelector('.site-loader');
const finishLoading=()=>{if(!loader)return;document.body.classList.remove('is-loading');document.body.classList.add('loading-complete');loader.setAttribute('aria-hidden','true');window.setTimeout(()=>loader.remove(),750)};
let loaderSeen=false;
try{loaderSeen=sessionStorage.getItem('colesseum-loader-seen')==='1';sessionStorage.setItem('colesseum-loader-seen','1')}catch(error){}
if(loaderSeen){finishLoading()}else{const revealPage=()=>window.setTimeout(finishLoading,1050);if(document.readyState==='complete')revealPage();else window.addEventListener('load',revealPage,{once:true});window.setTimeout(finishLoading,2600)}
loader?.addEventListener('click',finishLoading);
document.addEventListener('keydown',event=>{if(event.key==='Escape')finishLoading()});

const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav');
const closeMenu=()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')};
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
nav.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('click',event=>{if(nav.classList.contains('open')&&!nav.contains(event.target))closeMenu()});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});

let navFrame;const updateNav=()=>{window.cancelAnimationFrame(navFrame);navFrame=window.requestAnimationFrame(()=>nav.classList.toggle('scrolled',window.scrollY>28))};updateNav();window.addEventListener('scroll',updateNav,{passive:true});

const observed=document.querySelectorAll('.section-head,.programs-intro,.fight-row,.discipline-block,.coach-visual,.coach-copy,.difference-copy,.reasons article,.reviews-score,.reviews-copy,.visit-main,.hours,.site-footer>div');observed.forEach(el=>el.classList.add('reveal'));const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});observed.forEach(el=>io.observe(el));

