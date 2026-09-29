const defaults=[["Razonamiento Verbal","🧠"],["Razonamiento Matemático","🔢"],["Aritmética","➗"],["Álgebra","📐"],["Geometría","📏"],["Trigonometría","📊"],["Biología","🧬"],["Química","⚗️"],["Física","⚛️"],["Historia","🏛️"],["Geografía","🌎"],["Economía","📈"]];
const XP_PER_COURSE=25, DAILY_GOAL=100;
let courses=JSON.parse(localStorage.getItem("meta-courses")||"null")||defaults.map(([name,emoji])=>({name,emoji,done:false}));
let game=JSON.parse(localStorage.getItem("meta-game")||"null")||{xp:0,streak:0,lastStudyDate:null,dailyXp:0,dailyDate:null,achievements:[]};

function today(){return new Date().toLocaleDateString("en-CA")}
function yesterday(){const d=new Date();d.setDate(d.getDate()-1);return d.toLocaleDateString("en-CA")}
function save(){localStorage.setItem("meta-courses",JSON.stringify(courses));localStorage.setItem("meta-game",JSON.stringify(game));render()}
function levelInfo(){const level=Math.floor(game.xp/100)+1;const current=game.xp%100;return{level,current}}
function studyAction(xp=XP_PER_COURSE){
  const d=today();
  if(game.lastStudyDate!==d){game.streak=game.lastStudyDate===yesterday()?game.streak+1:1;game.lastStudyDate=d}
  if(game.dailyDate!==d){game.dailyDate=d;game.dailyXp=0}
  game.xp+=xp;game.dailyXp+=xp;checkAchievements();save()
}
function checkAchievements(){
  const done=courses.filter(c=>c.done).length;
  const list=[];
  if(game.xp>=XP_PER_COURSE)list.push("first");
  if(game.streak>=3)list.push("streak3");
  if(game.streak>=7)list.push("streak7");
  if(game.xp>=100)list.push("xp100");
  if(done>=5)list.push("courses5");
  game.achievements=[...new Set(list)]
}
const achievements=[
  ["first","🌱","Primer paso","Completa tu primer curso"],
  ["streak3","🔥","Racha de 3","Estudia 3 días seguidos"],
  ["streak7","⚡","Racha de 7","Estudia 7 días seguidos"],
  ["xp100","⭐","100 XP","Consigue 100 XP"],
  ["courses5","🏆","Cinco cursos","Completa 5 cursos"]
];
function renderAchievements(){
  const el=document.querySelector("#achievements");
  el.innerHTML=achievements.map(([id,icon,title,desc])=>{
    const on=game.achievements.includes(id);
    return '<article class="achievement '+(on?"unlocked":"locked")+'"><div class="achievement-icon">'+icon+'</div><div><strong>'+title+'</strong><small>'+desc+'</small></div></article>'
  }).join("");
  document.querySelector("#achievementCount").textContent=game.achievements.length+"/"+achievements.length
}
function render(){
  const el=document.querySelector("#courses");
  el.innerHTML=courses.map((c,i)=>'<article class="course '+(c.done?"done":"")+'" data-i="'+i+'"><div class="emoji">'+c.emoji+'</div><strong>'+escapeHtml(c.name)+'</strong><small>'+(c.done?"Completado":"Pendiente")+'</small></article>').join("");
  const done=courses.filter(c=>c.done).length;
  document.querySelector("#courseCount").textContent=courses.length;
  document.querySelector("#doneCount").textContent=done;
  document.querySelector("#progress").textContent=Math.round(done/Math.max(courses.length,1)*100)+"%";
  const {level,current}=levelInfo();
  document.querySelector("#levelText").textContent="Nivel "+level+" · "+game.xp+" XP";
  document.querySelector("#streak").textContent=game.streak;
  document.querySelector("#xpProgressText").textContent=current+" / 100 XP";
  document.querySelector("#xpBar").style.width=current+"%";
  const daily=Math.min(game.dailyXp,DAILY_GOAL);
  document.querySelector("#dailyGoalText").textContent=daily+" / "+DAILY_GOAL+" XP";
  document.querySelector("#dailyGoalBar").style.width=(daily/DAILY_GOAL*100)+"%";
  renderAchievements();
  document.querySelectorAll(".course").forEach(x=>x.onclick=()=>{
    const i=+x.dataset.i;
    if(!courses[i].done){courses[i].done=true;studyAction(XP_PER_COURSE)}
    else{courses[i].done=false;checkAchievements();save()}
  })
}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
checkAchievements();render();

const cd=document.querySelector("#courseDialog");
document.querySelector("#addCourse").onclick=()=>cd.showModal();
document.querySelector("#courseForm").onsubmit=e=>{
  e.preventDefault();
  const n=document.querySelector("#courseName").value.trim();
  if(n){courses.push({name:n,emoji:"📚",done:false});save();cd.close();document.querySelector("#courseName").value=""}
};

let deferredPrompt;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;document.querySelector("#installBtn").hidden=false});
document.querySelector("#installBtn").onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;document.querySelector("#installBtn").hidden=true};
if("serviceWorker"in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js"));

const td=document.querySelector("#toolDialog"),tc=document.querySelector("#toolContent");
document.querySelectorAll(".tool").forEach(b=>b.onclick=()=>{
  const a=b.dataset.action;
  if(a==="timer")tc.innerHTML="<h3>Cronómetro</h3><p id='clock'>25:00</p><button id='start' class='primary'>Iniciar</button>";
  if(a==="notes")tc.innerHTML="<h3>Notas rápidas</h3><textarea id='note' style='width:100%;height:130px;border:1px solid #d8e1db;border-radius:10px;padding:10px' placeholder='Escribe aquí...'>"+(localStorage.getItem("meta-note")||"")+"</textarea><button id='start' class='primary'>Guardar</button>";
  if(a==="plan")tc.innerHTML="<h3>Plan de estudio</h3><p>Elige un curso y márcalo como completado al terminar tu sesión.</p>";
  td.showModal();
  if(a==="timer")document.querySelector("#start").onclick=()=>{
    let s=1500;const out=document.querySelector("#clock");const id=setInterval(()=>{s--;out.textContent=Math.floor(s/60).toString().padStart(2,"0")+":"+String(s%60).padStart(2,"0");if(s<=0)clearInterval(id)},1000)
  };
  if(a==="notes")document.querySelector("#start").onclick=()=>{localStorage.setItem("meta-note",document.querySelector("#note").value);td.close()}
});
document.querySelector("#closeTool").onclick=()=>td.close();