'use strict';
const menuButton=document.querySelector('.menu-toggle');
const mobileMenu=document.querySelector('.mobile-menu');
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?'Atidaryti meniu':'Uždaryti meniu');menuButton.textContent=open?'Meniu':'Uždaryti';mobileMenu.hidden=open;document.body.style.overflow=open?'':'hidden';});
mobileMenu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Atidaryti meniu');menuButton.textContent='Meniu';document.body.style.overflow='';}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileMenu?.hidden){menuButton.click();menuButton.focus();}});
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
if(!reducedMotion.matches&&'IntersectionObserver' in window){document.body.classList.add('js-reveal');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
const header=document.getElementById('header');
const updateHeader=()=>header?.classList.toggle('is-scrolled',window.scrollY>160);window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();
const serviceData={
  exterior:{
    title:'Išorės priežiūra',interest:'Išorės priežiūra',
    intro:'Pasirinkite pagal tai, ar automobiliui reikalinga reguliari priežiūra, ar išsamesnis išorės valymas.',
    options:[
      ['Palaikomasis išorės plovimas','nuo 60 €','Reguliariai prižiūrimo automobilio kėbulo ir ratlankių švarai palaikyti.'],
      ['Detalus išorės plovimas','90 €','Pilnam išorės valymui, įskaitant dervos, metalo dalelių ir kelio apnašų pašalinimą.']
    ],
    additional:[
      ['Detalus ratlankių valymas','nuo 40 € / 4 vnt.','Pasiekiamų ratlankių paviršių kruopščiam valymui, nenuimant ratų.']
    ],
    note:'Galutinę darbų apimtį parenkame pagal automobilio būklę ir užterštumą.'
  },
  polish:{
    title:'Kėbulo poliravimas',interest:'Kėbulo poliravimas',
    intro:'Etapų skaičių padedame išsirinkti įvertinę lako būklę, defektų gylį ir saugios korekcijos galimybes. Kiekvienas variantas apima išorės plovimą, dekontaminaciją ir pilną paviršiaus paruošimą.',
    options:[
      ['Vieno etapo poliravimas','nuo 220 €','Lako atnaujinimui, blizgesiui ir lengvų defektų sumažinimui.'],
      ['Dviejų etapų poliravimas','nuo 350 €','Gilesnei korekcijai, ryškesniam blizgesiui ir tolygesniam lako paviršiui.'],
      ['Daugiaetapis poliravimas','nuo 450 €','Didžiausiai saugiai įmanomai korekcijai ir rezultatui pagal realią lako būklę.']
    ],
    additional:[
      ['Lokalus defektų šalinimas šlifavimu','nuo 55 €','Gilesniems įbrėžimams ir lokaliems lako defektams koreguoti, kai vien poliravimo nepakanka. Atliekama tik įvertinus lako būklę ir storį.']
    ],
    note:'Galutinę darbų apimtį ir kainą patvirtiname po automobilio apžiūros. Ne visi įbrėžimai gali būti saugiai pašalinti vien poliravimu — gilesniems pažeidimams gali prireikti papildomo šlifavimo arba dažymo darbų.'
  },
  interior:{
    title:'Salono priežiūra',interest:'Salono priežiūra',
    intro:'Paketą parenkame pagal salono būklę, paviršių medžiagas ir reikalingą valymo gylį.',
    options:[
      ['Interior Refresh / Salono atnaujinimas','nuo 70 €','Kasdienei salono švarai atkurti. Įeina kilimų ir kilimėlių išsiurbimas, salono apdailos bei vidinių stiklų valymas.'],
      ['Deep Interior / Gilus salono valymas','nuo 170 €','Gilesniam salono atnaujinimui ir susikaupusių nešvarumų pašalinimui. Įeina cheminis visų sėdynių valymas pagal jų medžiagą, visos salono apdailos valymas, kilimų, kilimėlių ir bagažinės išsiurbimas bei vidinių stiklų valymas.'],
      ['Signature Interior / Pilna salono priežiūra','nuo 270 €','Išbaigtam viso salono atnaujinimui. Įeina „Deep Interior“ paketas, grindų kilimo ir kilimėlių cheminis valymas, bagažinės cheminis valymas, lokalus lubų dėmių valymas ir ozonavimas.']
    ],
    additional:[
      ['Kilimų ir kilimėlių cheminis valymas','+50 €','Gilesniam purvo, dėmių ir įsigėrusių nešvarumų pašalinimui.'],
      ['Bagažinės cheminis valymas','+25 €','Bagažinės dangos ir tekstilės atnaujinimui.'],
      ['Lubų dėmių valymas','nuo 20 €','Lokalioms dėmėms ir nešvarumams šalinti, naudojant lubų apdailai pritaikytas valymo technikas.'],
      ['Gyvūnų plaukų šalinimas','nuo 25 €','Intensyvesniam salonų, kuriuose reguliariai vežami gyvūnai, valymui.'],
      ['Salono ozonavimas','40 €','Papildomam salono oro ir įsigėrusių kvapų priežiūros etapui.']
    ],
    additionalNote:'Į pasirinktą paketą įtrauktos papildomos paslaugos antrą kartą neapmokestinamos.',
    note:'Galutinę darbų apimtį ir kainą patvirtiname įvertinę salono būklę, medžiagas ir užterštumą.'
  },
  protection:{
    title:'Paviršių apsauga',interest:'Paviršių apsauga',
    intro:'Apsaugą parenkame pagal paviršiaus medžiagą, būklę ir norimą priežiūros lygį. Prieš dengimą paviršius nuvalomas ir tinkamai paruošiamas.',
    options:[
      ['Keraminė kėbulo apsauga','nuo 180 €','Paruošto kėbulo apsaugai, hidrofobinėms savybėms ir lengvesnei reguliariai priežiūrai.'],
      ['Tik priekinio stiklo apsauga','50 €','Priekinio stiklo paruošimas ir padengimas keramine apsaugine danga.'],
      ['Visų automobilio stiklų apsauga','90 €','Visų automobilio stiklų, įskaitant priekinį ir panoraminį stiklą, paruošimas ir padengimas keramine apsaugine danga.'],
      ['Ratlankių keramika — išorinė pusė','40 €','Ratlankių išorinės pusės padengimas keramine danga.'],
      ['Ratlankių keramika — išorinė ir vidinė pusės','120 €','Ratlankių išorinės ir vidinės pusių padengimas keramine danga. Vidinę pusę dengiame tik naujiems, dar nebalansuotiems ratlankiams.'],
      ['Nedažytų išorinių plastikų apsauga','50 €','Nedažytų plastikinių paviršių valymas, paruošimas ir apsauga jų medžiagai tinkama priemone.']
    ],
    additional:[],
    note:'Poliravimas ar papildomas paviršiaus paruošimas skaičiuojami atskirai. Galutinę darbų apimtį ir kainą patvirtiname įvertinę automobilį.'
  }
};
const serviceDialog=document.getElementById('service-dialog');
const dialogExtras=document.getElementById('dialog-extras');
const syncDetailsState=details=>details.querySelector('summary')?.setAttribute('aria-expanded',String(details.open));
document.querySelectorAll('#dialog-extras,.care-guide').forEach(details=>{
  syncDetailsState(details);
  details.addEventListener('toggle',()=>syncDetailsState(details));
});
function renderServiceRows(container,options){
  container.replaceChildren();
  options.forEach(([label,price,description])=>{
    const row=document.createElement('div');
    row.className='dialog-row';
    const heading=document.createElement('div');
    heading.className='dialog-row-heading';
    const title=document.createElement('h3');
    title.textContent=label;
    heading.append(title);
    if(price){const value=document.createElement('strong');value.textContent=price;heading.append(value);}
    const text=document.createElement('p');
    text.textContent=description;
    row.append(heading,text);
    container.append(row);
  });
}
document.querySelectorAll('[data-service]').forEach(button=>button.addEventListener('click',()=>{
  const item=serviceData[button.dataset.service];
  if(!item||!serviceDialog)return;
  document.getElementById('dialog-title').textContent=item.title;
  document.getElementById('dialog-intro').textContent=item.intro;
  document.getElementById('dialog-note').textContent=item.note;
  renderServiceRows(document.getElementById('dialog-options'),item.additional.length===1?[...item.options,...item.additional]:item.options);
  const additional=document.getElementById('dialog-additional');
  renderServiceRows(additional,item.additional.length>1?item.additional:[]);
  if(item.additionalNote){
    const note=document.createElement('p');
    note.className='dialog-included-note';
    note.textContent=item.additionalNote;
    additional.append(note);
  }
  dialogExtras.hidden=item.additional.length<=1;
  dialogExtras.open=false;
  syncDetailsState(dialogExtras);
  document.getElementById('dialog-contact').dataset.select=item.interest;
  document.getElementById('dialog-gallery').hidden=button.dataset.service!=='interior';
  serviceDialog.showModal();
  serviceDialog.querySelector('.service-dialog-content').scrollTop=0;
}));
document.querySelectorAll('dialog').forEach(dialog=>{dialog.querySelector('.dialog-close')?.addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{const rect=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom))dialog.close();});});
document.querySelectorAll('[data-select],#dialog-contact').forEach(link=>link.addEventListener('click',()=>{const select=document.getElementById('interest');if(select)select.value=link.dataset.select;serviceDialog?.close();}));
const gallery=document.getElementById('gallery-track');
if(gallery){
 const prev=document.getElementById('gallery-prev');
 const next=document.getElementById('gallery-next');
 const items=[...gallery.querySelectorAll('figure')];
 const filters=[...document.querySelectorAll('[data-gallery-filter]')];
 const sync=()=>{prev.disabled=gallery.scrollLeft<2;next.disabled=gallery.scrollLeft+gallery.clientWidth>=gallery.scrollWidth-2;};
 const filterGallery=category=>{
  items.forEach(item=>{item.hidden=category!=='all'&&item.dataset.galleryCategory!==category;});
  filters.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.galleryFilter===category)));
  gallery.scrollTo({left:0,behavior:'instant'});
  document.getElementById('gallery-status').textContent=(category==='interior'?'Salono valymas':'Visi kadrai')+': '+items.filter(item=>!item.hidden).length+' fotografijos.';
  requestAnimationFrame(sync);
 };
 const move=direction=>{
  const first=items.find(item=>!item.hidden);
  gallery.scrollBy({left:direction*(first.getBoundingClientRect().width+parseFloat(getComputedStyle(gallery).gap)),behavior:reducedMotion.matches?'instant':'smooth'});
 };
 filters.forEach(button=>button.addEventListener('click',()=>filterGallery(button.dataset.galleryFilter)));
 document.getElementById('dialog-gallery')?.addEventListener('click',event=>{
  event.preventDefault();
  serviceDialog.close();
  filterGallery('interior');
  document.getElementById('galerija').scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth',block:'start'});
  filters.find(button=>button.dataset.galleryFilter==='interior').focus({preventScroll:true});
 });
 prev.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
 gallery.addEventListener('scroll',sync,{passive:true});window.addEventListener('resize',sync);
 gallery.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();move(event.key==='ArrowRight'?1:-1);}});
 sync();
}
const photoDialog=document.getElementById('photo-dialog');
document.querySelectorAll('[data-photo]').forEach(button=>button.addEventListener('click',()=>{const image=document.getElementById('photo-full');image.src=button.dataset.photo;image.alt=button.querySelector('img').alt;document.getElementById('photo-caption').textContent=button.dataset.caption;photoDialog.showModal();}));
document.getElementById('contact-form')?.addEventListener('submit',event=>{event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;const data=new FormData(form);const subject='ESHA užklausa: '+data.get('car');const body='Sveiki, ESHA,\n\nMano vardas: '+data.get('name')+'\nAutomobilis: '+data.get('car')+'\nDominanti paslauga: '+data.get('interest')+'\n\nMano lūkesčiai:\n'+data.get('message')+'\n\nLauksiu jūsų pasiūlymo.';window.location.href='mailto:esha.detailingas@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);document.getElementById('form-status').textContent='Laiško ruošinys paruoštas. Jei el. pašto programa neatsidarė, skambinkite +370 686 37809 arba rašykite esha.detailingas@gmail.com.';});
const heroScene=document.querySelector('.hero');
const parallaxImages=[...document.querySelectorAll('[data-parallax]')];
const motionButton=document.querySelector('.motion-toggle');
let motionPaused=reducedMotion.matches;
let framePending=false;
function paintScroll(){
 framePending=false;
 const maxScroll=document.documentElement.scrollHeight-innerHeight;
 document.documentElement.style.setProperty('--reading-progress',maxScroll>0?String(window.scrollY/maxScroll):'0');
 if(heroScene){const rect=heroScene.getBoundingClientRect();heroScene.style.setProperty('--hero-progress',motionPaused?'0':String(Math.min(1,Math.max(0,-rect.top/rect.height))));}
 parallaxImages.forEach(image=>{if(motionPaused){image.style.transform='';return;}const rect=image.parentElement.getBoundingClientRect();if(rect.bottom>0&&rect.top<innerHeight){const travel=Math.max(-1,Math.min(1,(rect.top+rect.height/2-innerHeight/2)/innerHeight));image.style.transform='translate3d(0,'+(travel*Number(image.dataset.parallax))+'px,0)';}});
}
function scheduleScroll(){if(!framePending){framePending=true;requestAnimationFrame(paintScroll);}}
function setMotion(paused){motionPaused=paused;document.body.classList.toggle('motion-off',paused);if(motionButton){motionButton.setAttribute('aria-pressed',String(paused));motionButton.setAttribute('aria-label',paused?'Įjungti animacijas':'Sustabdyti animacijas');motionButton.querySelector('.motion-label').textContent=paused?'Judesys išjungtas':'Judesys įjungtas';}paintScroll();}
motionButton?.addEventListener('click',()=>setMotion(!motionPaused));
reducedMotion.addEventListener('change',event=>setMotion(event.matches));
window.addEventListener('scroll',scheduleScroll,{passive:true});window.addEventListener('resize',scheduleScroll);setMotion(motionPaused);
