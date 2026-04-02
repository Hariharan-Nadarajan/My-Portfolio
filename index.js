document.querySelectorAll('.tab').forEach(t=>{
  t.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
    document.getElementById('panel-'+t.dataset.tab).classList.add('active');
  });
});

const tog=document.getElementById('tog');
tog.addEventListener('click',()=>{
  document.documentElement.classList.toggle('light');
  tog.classList.toggle('on');
});

const phrases=['Senior Frontend Developer | React | Angular | Responsive & Performance-Driven'];
let pi=0,ci=0,del=false;
const el=document.getElementById('typed');
function type(){
  const w=phrases[pi];
  if(!del){el.textContent=w.slice(0,++ci);if(ci===w.length){del=true;setTimeout(type,1500);return}}
  else{el.textContent=w.slice(0,--ci);if(ci===0){del=false;pi=(pi+1)%phrases.length}}
  setTimeout(type,del?50:85);
}
type();