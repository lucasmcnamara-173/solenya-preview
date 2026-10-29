(function(){
var TO="lucasmcnamara884@gmail.com",KEY="solenyaPreviewV1";
var NAMES={hero:"Top: We help people with...",program:"Detox program",spectravision:"SpectraVision",shop:"Products",testimonial:"Lauren's testimonies",fees:"Fees, costs & hours",contact:"Contact & booking form",footer:"Footer & disclaimer"};
var THEMES={current:{n:"Current (purple & green)",p:"#2d1f45",a:"#4c7a3b",b:"#fbf6f0"},sage:{n:"Soft sage",p:"#2f4a3a",a:"#7a9a6b",b:"#f4f7f2"},ocean:{n:"Calm blue",p:"#1f3b57",a:"#3a86a8",b:"#f3f7fa"},rose:{n:"Warm rose",p:"#5a2d3c",a:"#b0697a",b:"#fbf3f2"},earth:{n:"Earthy tan",p:"#4a3526",a:"#a0703f",b:"#f8f2ea"}};
var FONTS={inter:{n:"Clean (current)",f:"Inter,system-ui,sans-serif"},serif:{n:"Classic serif",f:"Merriweather,Georgia,serif"},round:{n:"Soft rounded",f:"Nunito,system-ui,sans-serif"}};
var lk=document.createElement('link');lk.rel='stylesheet';lk.href='https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Nunito:wght@400;700&display=swap';document.head.appendChild(lk);
var orig=document.querySelector('head style'),origCss=orig.textContent;
var els=[document.querySelector('.hero')];['program','spectravision','shop','testimonial','fees','contact'].forEach(function(i){els.push(document.getElementById(i))});els.push(document.querySelector('body>footer'));
var keys=Object.keys(NAMES);els.forEach(function(e,i){e.dataset.sec=keys[i]});
var D={theme:"current",font:"inter",size:100,logo:100,order:keys.slice(),hidden:{},notes:{},general:""};
var S;try{S=Object.assign({},D,JSON.parse(localStorage.getItem(KEY)||"{}"))}catch(e){S=Object.assign({},D)}
function save(){localStorage.setItem(KEY,JSON.stringify(S))}
function apply(){var t=THEMES[S.theme]||THEMES.current;
 orig.textContent=origCss.split('#2d1f45').join(t.p).split('#4c7a3b').join(t.a).split('#fbf6f0').join(t.b);
 document.body.style.fontFamily=FONTS[S.font].f;document.documentElement.style.fontSize=S.size+'%';document.body.style.fontSize=(16*S.size/100)+'px';
 var m=document.querySelector('.brand .mark');if(m)m.style.height=(44*S.logo/100)+'px';
 var anchor=document.getElementById('pvEnd');S.order.forEach(function(k){var e=document.querySelector('[data-sec="'+k+'"]');if(e){document.body.insertBefore(e,anchor)}});
 keys.forEach(function(k){var e=document.querySelector('[data-sec="'+k+'"]');e.classList.toggle('pv-hidden',!!S.hidden[k]);var b=e.querySelector(':scope>.pv-tag');if(b)b.textContent=(S.hidden[k]?'HIDDEN · ':'')+(S.notes[k]?'📝 ':'')+NAMES[k]});
 ui();}
var st=document.createElement('style');st.textContent='#pvBan{position:fixed;left:0;right:0;top:0;height:36px;box-sizing:border-box;z-index:50;background:#ffe9a8;color:#3a2a00;text-align:center;font:600 14px/1.3 system-ui;padding:8px 10px}body{padding-top:36px}header{top:36px!important}[data-sec]{position:relative}.pv-tag{display:none;position:absolute;top:6px;left:6px;z-index:5;background:#fff;color:#222;font:600 12px system-ui;padding:3px 8px;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,.2)}.pv-on .pv-tag,.pv-hidden .pv-tag{display:block}.pv-on{outline:4px solid #f0a500;outline-offset:-4px}.pv-hidden{opacity:.25}#pvSel{position:fixed;left:8px;right:8px;bottom:70px;z-index:60;background:#fff;border-radius:14px;box-shadow:0 6px 24px rgba(0,0,0,.3);padding:12px;font:15px system-ui;color:#222;display:none}#pvSel b{display:block;margin-bottom:8px}#pvSel button,#pvP button{font:600 15px system-ui;min-height:44px;padding:0 12px;margin:3px;border-radius:10px;border:1px solid #ccc;background:#f6f6f6;color:#222}#pvFab{position:fixed;right:12px;bottom:12px;z-index:61;font:700 16px system-ui;background:#f0a500;color:#222;border:0;border-radius:999px;padding:14px 20px;box-shadow:0 4px 14px rgba(0,0,0,.3)}#pvP{position:fixed;inset:auto 0 0 0;max-height:80vh;overflow:auto;z-index:62;background:#fff;color:#222;font:15px system-ui;padding:16px;border-radius:18px 18px 0 0;box-shadow:0 -6px 24px rgba(0,0,0,.3);display:none}#pvP h4{margin:14px 0 6px;font-size:15px}#pvP .on{background:#222;color:#fff;border-color:#222}#pvP input[type=range]{width:100%}#pvP textarea{width:100%;font:15px system-ui;padding:8px;border-radius:10px;border:1px solid #ccc}.sw{display:inline-block;width:14px;height:14px;border-radius:50%;margin-right:2px;vertical-align:-2px}#pvP .big{width:100%;background:#2d6a2d;color:#fff;border:0}*{font-style:normal!important}';document.head.appendChild(st);
var ban=document.createElement('div');ban.id='pvBan';ban.textContent="Preview only, your real site isn't changed.";document.body.insertBefore(ban,document.body.firstChild);
var end=document.createElement('div');end.id='pvEnd';document.body.appendChild(end);
els.forEach(function(e){var t=document.createElement('span');t.className='pv-tag';e.insertBefore(t,e.firstChild)});
var sel=document.createElement('div');sel.id='pvSel';document.body.appendChild(sel);
var fab=document.createElement('button');fab.id='pvFab';fab.textContent='🎨 Customize';document.body.appendChild(fab);
var P=document.createElement('div');P.id='pvP';document.body.appendChild(P);
var cur=null;
document.addEventListener('click',function(ev){if(ev.target.closest('#pvP,#pvSel,#pvFab,#pvBan'))return;var s=ev.target.closest('[data-sec]');if(!s)return;
 if(ev.target.closest('a,summary,input,select,textarea,button'))return;
 document.querySelectorAll('.pv-on').forEach(function(x){x.classList.remove('pv-on')});cur=s.dataset.sec;s.classList.add('pv-on');showSel();});
function showSel(){var k=cur;sel.innerHTML='<b>'+NAMES[k]+(S.notes[k]?'<br><small style="font-weight:400">Your note: '+esc(S.notes[k])+'</small>':'')+'</b><button data-a="up">⬆ Move up</button><button data-a="down">⬇ Move down</button><button data-a="hide">'+(S.hidden[k]?'👁 Show':'🚫 Hide')+'</button><button data-a="note">📝 Leave a note</button><button data-a="x">✕ Close</button>';sel.style.display='block'}
sel.addEventListener('click',function(ev){var a=ev.target.dataset.a;if(!a)return;var i=S.order.indexOf(cur);
 if(a=='up'&&i>0){S.order.splice(i,1);S.order.splice(i-1,0,cur)}
 if(a=='down'&&i<S.order.length-1){S.order.splice(i,1);S.order.splice(i+1,0,cur)}
 if(a=='hide')S.hidden[cur]=!S.hidden[cur];
 if(a=='note'){var n=prompt('Your note about "'+NAMES[cur]+'":',S.notes[cur]||'');if(n!==null){if(n.trim())S.notes[cur]=n.trim();else delete S.notes[cur]}}
 if(a=='x'){sel.style.display='none';document.querySelectorAll('.pv-on').forEach(function(x){x.classList.remove('pv-on')});return}
 save();apply();showSel();var e=document.querySelector('[data-sec="'+cur+'"]');if(a=='up'||a=='down')e.scrollIntoView({block:'center'});});
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function ui(){var h='<div style="display:flex;justify-content:space-between;align-items:center"><b style="font-size:17px">Customize your preview</b><button data-c="close">✕</button></div><p style="margin:4px 0;color:#555;font-size:14px">Tip: close this and tap any part of the page to move it, hide it, or leave a note.</p><h4>Colors</h4>';
 for(var k in THEMES){var t=THEMES[k];h+='<button data-t="'+k+'" class="'+(S.theme==k?'on':'')+'"><span class="sw" style="background:'+t.p+'"></span><span class="sw" style="background:'+t.a+'"></span><span class="sw" style="background:'+t.b+';border:1px solid #ccc"></span> '+t.n+'</button>'}
 h+='<h4>Font</h4>';for(var f in FONTS)h+='<button data-f="'+f+'" class="'+(S.font==f?'on':'')+'" style="font-family:'+FONTS[f].f+'">'+FONTS[f].n+'</button>';
 h+='<h4>Text size: '+S.size+'%</h4><input type="range" min="85" max="130" step="5" value="'+S.size+'" data-r="size"><h4>Logo size: '+S.logo+'%</h4><input type="range" min="70" max="180" step="10" value="'+S.logo+'" data-r="logo">';
 h+='<h4>Anything else? (optional)</h4><textarea rows="3" data-g="1" placeholder="Type any other wishes here">'+esc(S.general)+'</textarea>';
 h+='<button class="big" data-c="send">✉️ Send my changes to Lucas</button><button data-c="copy" style="width:100%">📋 Copy my changes (if email doesn\'t open)</button><button data-c="reset" style="width:100%">↺ Reset everything</button><p id="pvMsg" style="font-size:14px;color:#2d6a2d"></p>';
 var open=P.style.display;var sc=P.scrollTop;P.innerHTML=h;P.style.display=open;P.scrollTop=sc}
fab.onclick=function(){P.style.display='block';sel.style.display='none'};
P.addEventListener('click',function(ev){var b=ev.target.closest('button');if(!b)return;var d=b.dataset;
 if(d.t){S.theme=d.t}if(d.f){S.font=d.f}
 if(d.c=='close'){P.style.display='none';return}
 if(d.c=='reset'){if(!confirm('Reset all your changes?'))return;S=JSON.parse(JSON.stringify(D))}
 if(d.c=='send'){location.href=mailto();return}
 if(d.c=='copy'){copy(summary());return}
 save();apply()});
P.addEventListener('input',function(ev){var t=ev.target;if(t.dataset.r){S[t.dataset.r]=+t.value;save();apply()}if(t.dataset.g){S.general=t.value;save()}});
function summary(){var L=["Hi Lucas, here are my changes from the Solenya Health preview:","","Colors: "+THEMES[S.theme].n,"Font: "+FONTS[S.font].n,"Text size: "+S.size+"%","Logo size: "+S.logo+"%","","Section order (top to bottom):"];
 S.order.forEach(function(k,i){L.push((i+1)+". "+NAMES[k]+(S.hidden[k]?" (REMOVE / HIDE)":""))});
 L.push("","Notes on sections:");var any=0;S.order.forEach(function(k){if(S.notes[k]){any=1;L.push("- "+NAMES[k]+": "+S.notes[k])}});if(!any)L.push("(none)");
 L.push("","Other wishes: "+(S.general||"(none)"),"","- Michelle");return L.join("\n")}
function mailto(){return"mailto:"+TO+"?subject="+encodeURIComponent("Solenya Health site - my changes")+"&body="+encodeURIComponent(summary())}
function copy(t){var m=function(x){var e=document.getElementById('pvMsg');if(e)e.textContent=x};
 if(navigator.clipboard)navigator.clipboard.writeText(t).then(function(){m('Copied! Paste it into a text or email to Lucas.')},function(){fb()});else fb();
 function fb(){var a=document.createElement('textarea');a.value=t;document.body.appendChild(a);a.select();try{document.execCommand('copy');m('Copied! Paste it into a text or email to Lucas.')}catch(e){prompt('Copy this:',t)}a.remove()}}
window.pvSummary=summary;window.pvMailto=mailto;
apply();
})();
