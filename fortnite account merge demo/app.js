'use strict';
const $ = s => document.querySelector(s);
const D = {
app:['Fortnite Account Merge — Community Prototype','Fusión de cuentas de Fortnite — Prototipo comunitario'],
disc:['UNOFFICIAL COMMUNITY PROPOSAL — DEMONSTRATION ONLY. This prototype is not affiliated with or endorsed by Epic Games. It does not connect to real accounts or transfer real Fortnite items.','PROPUESTA COMUNITARIA NO OFICIAL — SOLO DEMOSTRACIÓN. Este prototipo no está afiliado ni respaldado por Epic Games. No se conecta a cuentas reales ni transfiere objetos reales de Fortnite.'],
home:['Home','Inicio'],acc:['Accounts','Cuentas'],req:['Request','Solicitud'],ver:['Verify','Verificar'],rev:['Review','Revisión'],wai:['Waiting Period','Periodo de espera'],res:['Merge Result','Resultado'],sto:['Store Games','Juegos'],tst:['Test Scenarios','Escenarios'],det:['Proposal Details','Propuesta'],
reset:['Reset demo','Reiniciar demo'],status:['Status','Estado'],
st_draft:['Not started','Sin iniciar'],st_verify:['Verifying','Verificando'],st_review:['In review','En revisión'],st_waiting:['Waiting period','En espera'],st_paused:['Paused for review','Pausada para revisión'],st_complete:['Complete (simulated)','Completa (simulada)'],st_cancelled:['Cancelled','Cancelada'],st_rejected:['Rejected','Rechazada'],
h1:['Reunite split Fortnite inventories — safely','Reúne inventarios divididos de Fortnite, con seguridad'],
prob:['Many players own cosmetics spread across two accounts and cannot combine them. This proposal explores a modern, fraud-resistant way to reunite eligible items.','Muchos jugadores tienen cosméticos repartidos en dos cuentas y no pueden combinarlos. Esta propuesta explora una forma moderna y resistente al fraude de reunir los objetos elegibles.'],
new:['This is a NEW proposed system — not a recreation of the 2019 account merge feature.','Este es un sistema NUEVO propuesto — no una recreación de la función de fusión de 2019.'],
start:['Start Demo','Iniciar demo'],try:['Try Security Scenarios','Probar escenarios de seguridad'],
how:['How It Works','Cómo funciona'],
d1:['Choose two accounts, a primary, and confirm the rules.','Elige dos cuentas, una principal y confirma las reglas.'],
d2:['Mandatory 2FA on both accounts plus ownership evidence.','2FA obligatorio en ambas cuentas y pruebas de propiedad.'],
d3:['Risk signals are assessed; suspicious cases go to manual review.','Se evalúan señales de riesgo; los casos sospechosos van a revisión manual.'],
d4:['A 7 or 14 day delay lets owners report or cancel.','Una espera de 7 o 14 días permite denunciar o cancelar.'],
d5:['Eligible items are combined without duplicates.','Los objetos elegibles se combinan sin duplicados.'],
pr:['Security Principles','Principios de seguridad'],
p1:['2FA is mandatory on both accounts.','El 2FA es obligatorio en ambas cuentas.'],
p2:['Access alone does not prove legitimate ownership.','El acceso por sí solo no prueba la propiedad legítima.'],
p3:['Suspicious requests are never auto-approved.','Las solicitudes sospechosas nunca se aprueban automáticamente.'],
p4:['Owners can report or cancel before completion.','Los dueños pueden denunciar o cancelar antes de completar.'],
be:['Benefits for Players and Epic','Beneficios para jugadores y Epic'],
bn:['Possible benefits only — not guaranteed results.','Solo beneficios posibles — no resultados garantizados.'],
b1:['Better player experience.','Mejor experiencia de jugador.'],b2:['Possible renewed engagement from returning players.','Posible reactivación de jugadores que regresan.'],b3:['Greater flexibility in cosmetic combinations.','Mayor flexibilidad al combinar cosméticos.'],b4:['Possible increase in community trust.','Posible aumento de la confianza de la comunidad.'],
pnote:['Safeguards shown are proposals, NOT real Epic Games policies.','Las medidas mostradas son propuestas, NO políticas reales de Epic Games.'],
fic:['(fictional)','(ficticio)'],
ac:['Fictional Account','Cuenta ficticia'],cr:['Created','Creada'],la:['Last active','Última actividad'],pu:['Purchase history','Historial de compras'],inv:['Inventory','Inventario'],
prim:['Primary account','Cuenta principal'],setp:['Make primary','Hacer principal'],isp:['Primary','Principal'],
cmp:['Inventory comparison','Comparación de inventarios'],item:['Item','Objeto'],type:['Type','Tipo'],eligt:['Eligibility','Elegibilidad'],
outfit:['Outfit','Atuendo'],emote:['Emote','Gesto'],pickaxe:['Pickaxe','Pico'],glider:['Glider','Planeador'],
ok:['Eligible','Elegible'],no:['Ineligible','No elegible'],un:['Unresolved','Sin resolver'],
wOk:['Meets the simulated rules.','Cumple las reglas simuladas.'],wPromo:['Promotional item, not transferable under the proposed rules.','Objeto promocional, no transferible según las reglas propuestas.'],wLic:['Ownership unresolved; needs a licence review.','Propiedad sin resolver; requiere revisión de licencia.'],dup:['Owned by both accounts — kept once.','En ambas cuentas — se conserva una vez.'],
epic:['Epic would need to define the real eligibility requirements.','Epic tendría que definir los requisitos reales de elegibilidad.'],
s0:['1. Accounts & reason','1. Cuentas y motivo'],s1:['2. Rules & summary','2. Reglas y resumen'],s2:['3. Confirm','3. Confirmar'],
reason:['Reason for requesting a merge','Motivo de la solicitud de fusión'],
eReason:['Please enter a reason (at least 5 characters).','Escribe un motivo (mínimo 5 caracteres).'],eChk:['Please tick every checkbox to continue.','Marca todas las casillas para continuar.'],
c0:['I understand the eligibility rules are simulated.','Entiendo que las reglas de elegibilidad son simuladas.'],c1:['I understand 2FA and ownership evidence are required.','Entiendo que se requieren 2FA y pruebas de propiedad.'],c2:['I understand a waiting period applies and I can cancel.','Entiendo que hay un periodo de espera y que puedo cancelar.'],
inc:['Would include: eligible outfits, emotes, pickaxes and gliders, deduplicated.','Incluiría: atuendos, gestos, picos y planeadores elegibles, sin duplicados.'],exc:['Would NOT include: ineligible or unresolved items, real game licences, real accounts.','NO incluiría: objetos no elegibles o sin resolver, licencias de juegos reales, cuentas reales.'],
nxt:['Next','Siguiente'],bck:['Back','Atrás'],sub:['Submit request (simulated)','Enviar solicitud (simulada)'],
cf:['Confirm: merge Account A and Account B into the primary account below. Nothing real changes.','Confirmar: fusionar la Cuenta A y la B en la cuenta principal. Nada real cambia.'],
gate:['Complete the previous stages first.','Completa primero las etapas anteriores.'],
v2fa:['Two-factor authentication','Autenticación en dos pasos'],pend:['Incomplete','Incompleto'],vok:['Verified','Verificado'],vfail:['Failed','Fallida'],
t_ok:['Simulate 2FA success','Simular 2FA correcto'],t_f:['Simulate 2FA failure','Simular 2FA fallido'],t_r:['Retry','Reintentar'],
evh:['Ownership evidence (simulated)','Pruebas de propiedad (simuladas)'],e0:['Purchase history matches','El historial de compras coincide'],e1:['Transaction references provided','Referencias de transacción aportadas'],e2:['Other proof (e.g. payment method match)','Otras pruebas (p. ej. método de pago)'],
nocode:['No real codes, passwords or emails are ever requested. Account access alone does not establish legitimate ownership.','Nunca se piden códigos, contraseñas ni correos reales. El acceso a la cuenta no establece por sí solo la propiedad legítima.'],
blocked:['Blocked: the required verification must succeed before the merge can continue.','Bloqueado: la verificación requerida debe tener éxito para continuar.'],
tor:['Continue to security review','Continuar a la revisión'],
rsc:['Choose a safe demo scenario','Elige un escenario de demostración'],r0:['Both accounts pass initial checks','Ambas cuentas pasan las comprobaciones'],r1:['One account requires additional verification','Una cuenta requiere verificación adicional'],r2:['Conflicting evidence triggers manual review','Evidencia contradictoria activa revisión manual'],
asm:['Run risk assessment','Ejecutar evaluación de riesgo'],cls0:['Low risk','Riesgo bajo'],cls1:['Additional verification required','Verificación adicional requerida'],cls2:['Manual review required','Revisión manual requerida'],
s_0:['Recent email change','Cambio reciente de correo'],s_1:['Recent password change','Cambio reciente de contraseña'],s_2:['Recent display-name change','Cambio reciente de nombre'],s_3:['Unusual login pattern','Patrón de inicio de sesión inusual'],s_4:['Unfamiliar device','Dispositivo desconocido'],s_5:['Ownership evidence inconsistency','Inconsistencia en las pruebas'],
x_0:['Email changes can be legitimate; they raise scrutiny only.','Los cambios de correo pueden ser legítimos; solo aumentan el escrutinio.'],x_1:['Players reset passwords for many valid reasons.','Los jugadores cambian contraseñas por muchos motivos válidos.'],x_2:['Name changes are common and low-weight.','Los cambios de nombre son comunes y de poco peso.'],x_3:['Travel or new networks can look unusual but be legitimate.','Viajes o redes nuevas pueden parecer inusuales y ser legítimos.'],x_4:['New consoles or phones are normal; combined with other signals it matters.','Consolas o móviles nuevos son normales; junto a otras señales importan.'],x_5:['Mismatched references need human review before any decision.','Referencias que no coinciden requieren revisión humana antes de decidir.'],
clr:['Clear','Sin alertas'],flag:['Attention','Atención'],
nosingle:['No single signal is proof of fraud. Suspicious requests are never auto-approved.','Ninguna señal prueba un fraude. Las solicitudes sospechosas nunca se aprueban automáticamente.'],
addl:['Complete additional verification (simulated)','Completar verificación adicional (simulada)'],addld:['Additional verification completed.','Verificación adicional completada.'],
rp:['Simulated reviewer panel','Panel de revisor simulado'],rpn:['This reviewer is part of the demonstration and does not represent Epic Games Support.','Este revisor es parte de la demostración y no representa al Soporte de Epic Games.'],
rv0:['Alert reason','Motivo de la alerta'],rv0t:['Conflicting evidence, a new device and a recent email change on Account B.','Evidencia contradictoria, dispositivo nuevo y cambio de correo en la Cuenta B.'],
rv1:['Checks passed','Comprobaciones superadas'],rv1t:['2FA on both accounts; purchase history matches Account A.','2FA en ambas cuentas; el historial coincide con la Cuenta A.'],
rv2:['Failed / unresolved','Fallidas / sin resolver'],rv2t:['Transaction reference mismatch on Account B; device unconfirmed.','Referencia de transacción no coincide en la Cuenta B; dispositivo sin confirmar.'],
rv3:['Additional evidence required','Pruebas adicionales requeridas'],rv3t:['A fictional transaction reference and confirmation from the original email owner.','Una referencia de transacción ficticia y confirmación del titular original del correo.'],
dmore:['Request More Evidence','Solicitar más pruebas'],dpend:['Keep Pending','Mantener pendiente'],dapp:['Approve Demo Request','Aprobar solicitud demo'],drej:['Reject Demo Request','Rechazar solicitud demo'],
mst:['Decision','Decisión'],m_pending:['Pending','Pendiente'],m_more:['More evidence requested','Más pruebas solicitadas'],m_approve:['Approved (demo)','Aprobada (demo)'],m_reject:['Rejected (demo)','Rechazada (demo)'],
sendev:['Submit additional evidence (simulated)','Enviar pruebas adicionales (simuladas)'],
rejd:['Request rejected. No merge will occur.','Solicitud rechazada. No habrá fusión.'],
tow:['Continue to waiting period','Continuar al periodo de espera'],
dly:['Choose the proposed delay','Elige la espera propuesta'],d7:['7 days','7 días'],d14:['14 days','14 días'],begin:['Start waiting period','Iniciar espera'],
subm:['Simulated submission date','Fecha simulada de envío'],comp:['Simulated completion date','Fecha simulada de finalización'],dayn:['Day','Día'],
adv:['Advance 1 day','Avanzar 1 día'],jmp:['Skip to end','Saltar al final'],susp:['Simulate new suspicious signal','Simular nueva señal sospechosa'],res_:['Resume after review','Reanudar tras revisión'],cnl:['Cancel Merge Request','Cancelar solicitud de fusión'],runel:['Run eligibility checks','Ejecutar comprobaciones de elegibilidad'],
tl0:['Request submitted','Solicitud enviada'],tl1:['Notification emails sent','Correos de notificación enviados'],tl2:['Reminder + cancel link','Recordatorio + enlace de cancelación'],tl3:['Waiting period ends','Termina la espera'],
pausen:['PAUSED: a new suspicious signal appeared (e.g. login from a new country). The request returns to review before it can continue.','PAUSADA: apareció una nueva señal sospechosa (p. ej. inicio de sesión desde otro país). Vuelve a revisión antes de continuar.'],
cand:['REQUEST CANCELLED — no merge occurred.','SOLICITUD CANCELADA — no se realizó ninguna fusión.'],
unau:['ALERT: a merge request was made on your account. If this was not you, cancel it now.','ALERTA: se hizo una solicitud de fusión en tu cuenta. Si no fuiste tú, cancélala ahora.'],
cnote:['Either account owner should be able to report or cancel an unauthorized request through a secure process.','Cualquiera de los dueños debería poder denunciar o cancelar una solicitud no autorizada mediante un proceso seguro.'],
nf:['Notification previews','Vistas previas de notificaciones'],em:['Email','Correo'],ig:['In-game','En el juego'],
emt:['A merge request was submitted for your account on {a}. It completes on {b}. Not you? Cancel it with the secure link.','Se envió una solicitud de fusión para tu cuenta el {a}. Finaliza el {b}. ¿No fuiste tú? Cancélala con el enlace seguro.'],
igt:['Merge request pending until {b}. Tap to review or cancel.','Solicitud de fusión pendiente hasta el {b}. Toca para revisar o cancelar.'],
done:['SIMULATED MERGE COMPLETE — NO REAL ACCOUNT OR INVENTORY WAS MODIFIED.','FUSIÓN SIMULADA COMPLETA — NO SE MODIFICÓ NINGUNA CUENTA NI INVENTARIO REAL.'],
nores:['No approved merge is available. All required safeguards must pass first (failed checks, cancellation or unresolved review block the result).','No hay fusión aprobada. Primero deben superarse todas las medidas requeridas (verificaciones fallidas, cancelación o revisión sin resolver bloquean el resultado).'],
uniq:['Unique eligible items','Objetos elegibles únicos'],excl:['Excluded (ineligible)','Excluidos (no elegibles)'],unr:['Unresolved','Sin resolver'],dups:['Duplicates removed','Duplicados eliminados'],
bef:['Before','Antes'],aft:['After: unified inventory','Después: inventario unificado'],exh:['Excluded and unresolved items','Objetos excluidos y sin resolver'],
sth:['Epic Games Store purchases','Compras de Epic Games Store'],
stn:['Store games are evaluated separately from Fortnite inventory eligibility. This prototype cannot transfer or validate real game licences, and merging accounts must not be assumed to combine licences correctly. Epic would need to determine the technical and policy requirements.','Los juegos de la tienda se evalúan por separado de la elegibilidad del inventario de Fortnite. Este prototipo no puede transferir ni validar licencias reales, y no debe asumirse que fusionar cuentas combine bien las licencias. Epic tendría que definir los requisitos técnicos y de política.'],
g0:['Purchased Epic Games Store games','Juegos comprados en Epic Games Store'],g1:['Legitimate purchases and account-linked entitlements','Compras legítimas y derechos vinculados a la cuenta'],g2:['Eligible Fortnite cosmetics and inventory','Cosméticos e inventario elegibles de Fortnite'],g3:['Other content that may need separate rules','Otro contenido que puede requerir reglas propias'],
goal:['Goal: reunite eligible Fortnite inventories without sacrificing legitimate purchases or access to existing content.','Objetivo: reunir inventarios elegibles de Fortnite sin sacrificar compras legítimas ni el acceso al contenido existente.'],
run:['Run scenario','Ejecutar escenario'],active:['Scenario running','Escenario en curso'],
scA:['A. Normal approval','A. Aprobación normal'],ntA:['Everything passes; the waiting period completes and eligible cosmetics are combined.','Todo se supera; termina la espera y se combinan los cosméticos elegibles.'],
scB:['B. Failed 2FA','B. 2FA fallido'],ntB:['Account B fails 2FA; the merge stays blocked until it succeeds (use Retry).','La Cuenta B falla el 2FA; la fusión sigue bloqueada hasta que tenga éxito (usa Reintentar).'],
scC:['C. Suspicious account activity','C. Actividad sospechosa'],ntC:['A recent change requires additional verification instead of auto-approval.','Un cambio reciente exige verificación adicional en lugar de aprobación automática.'],
scD:['D. Conflicting ownership evidence','D. Evidencia de propiedad contradictoria'],ntD:['Manual review: the request stays pending or is rejected until the issue is resolved.','Revisión manual: la solicitud sigue pendiente o se rechaza hasta resolver el problema.'],
scE:['E. Unauthorized merge request','E. Solicitud de fusión no autorizada'],ntE:['A notification appears and the request can be cancelled before completion.','Aparece una notificación y la solicitud se puede cancelar antes de completarse.'],
scF:['F. Cancellation during waiting','F. Cancelación durante la espera'],ntF:['The request is cancelled and no merge occurs.','La solicitud se cancela y no ocurre ninguna fusión.'],
scG:['G. Ineligible cosmetics','G. Cosméticos no elegibles'],ntG:['The final inventory excludes ineligible items and explains why.','El inventario final excluye objetos no elegibles y explica por qué.'],
scH:['H. Duplicate cosmetics','H. Cosméticos duplicados'],ntH:['The result contains no duplicated entries.','El resultado no contiene entradas duplicadas.'],
scI:['I. Existing game purchases','I. Compras de juegos existentes'],ntI:['Store purchases are considered separately from Fortnite inventory eligibility.','Las compras de la tienda se consideran por separado de la elegibilidad del inventario.'],
dt:['Proposal Details','Detalles de la propuesta'],
q0:['The problem','El problema'],q0t:['Players can end up with cosmetics divided across accounts, with no safe way to reunite them.','Los jugadores pueden tener cosméticos divididos en cuentas, sin una forma segura de reunirlos.'],
q1:['Proposed security measures','Medidas de seguridad propuestas'],q1t:['2FA requirement, ownership verification, security review, manual review, waiting period, cancellation mechanism and eligibility rules. All are proposed safeguards, not confirmed Epic Games policies.','Requisito de 2FA, verificación de propiedad, revisión de seguridad, revisión manual, periodo de espera, mecanismo de cancelación y reglas de elegibilidad. Todas son medidas propuestas, no políticas confirmadas de Epic Games.'],
q2:['Intended player benefits','Beneficios previstos para jugadores'],q2t:['Reunited collections, more freedom to combine cosmetics, and protection against hijacked merges.','Colecciones reunidas, más libertad para combinar cosméticos y protección contra fusiones fraudulentas.'],
q3:['Possible benefits for Epic Games','Posibles beneficios para Epic Games'],q3t:['Possible renewed engagement and community trust. These are possibilities, not guaranteed results.','Posible reactivación y confianza de la comunidad. Son posibilidades, no resultados garantizados.'],
q4:['Questions Epic would need to resolve','Preguntas que Epic debería resolver'],q4t:['Which items are transferable; how store licences and entitlements are handled; platform and regional rules; evidence standards; fraud tooling; support staffing; legal and policy constraints.','Qué objetos son transferibles; cómo se manejan licencias y derechos de la tienda; reglas de plataforma y región; estándares de pruebas; herramientas antifraude; personal de soporte; límites legales y de política.'],
q5:['Limitations of this prototype','Limitaciones del prototipo'],q5t:['Fully simulated with fictional data. It shows a possible workflow and does not prove technical compatibility with Epic Games internal systems. It changes no real account.','Totalmente simulado con datos ficticios. Muestra un posible flujo y no prueba compatibilidad técnica con los sistemas internos de Epic Games. No modifica ninguna cuenta real.'],
q6:['Closing statement','Declaración final'],q6t:['We respectfully ask Epic Games to consider researching or evaluating a new, secure account merge solution.','Pedimos respetuosamente a Epic Games que considere investigar o evaluar una nueva solución segura de fusión de cuentas.']
};
const IT = [
{n:'Neon Drifter',y:'outfit',a:1,b:1,s:'ok'},{n:'Cobalt Ranger',y:'outfit',a:1,b:0,s:'ok'},{n:'Pixel Pulse',y:'emote',a:1,b:0,s:'ok'},{n:'Orbit Spin',y:'emote',a:1,b:0,s:'ok'},
{n:'Glacier Axe',y:'pickaxe',a:1,b:0,s:'ok'},{n:'Ember Pick',y:'pickaxe',a:1,b:0,s:'ok'},{n:'Skyline Kite',y:'glider',a:1,b:0,s:'ok'},{n:'Founder Wing',y:'glider',a:1,b:0,s:'no',w:'wPromo'},
{n:'Violet Wraith',y:'outfit',a:0,b:1,s:'ok'},{n:'Wave Salute',y:'emote',a:0,b:1,s:'ok'},{n:'Prism Pick',y:'pickaxe',a:0,b:1,s:'ok'},{n:'Comet Glide',y:'glider',a:0,b:1,s:'ok'},{n:'Mystic Loom',y:'outfit',a:0,b:1,s:'un',w:'wLic'}];
const AC = {
A:{cr:'2018-03-12',la:'2026-10-02',pu:['Founder Pack (2018)','Glacier Axe (2020)','Neon Drifter Bundle (2019)'],g:['Starfall Tactics','Quiet Harbor']},
B:{cr:'2021-07-30',la:'2026-09-28',pu:['Violet Wraith (2021)','Prism Pick (2022)'],g:['Rift Courier']}};
const SIG = [[0,1,1],[0,0,0],[0,0,0],[0,0,1],[0,1,1],[0,0,1]];
const ORD = {draft:0,verify:1,review:2,waiting:3,paused:3,cancelled:3,rejected:2,complete:4};
const BASE = new Date();
let S;
function init(l){
  let lang = l;
  if(!lang){ try{ lang = localStorage.getItem('fmp-lang'); }catch(e){} }
  S = {lang:lang==='es'?'es':'en',view:'home',primary:'A',reason:'',step:0,chk:[0,0,0],tf:{A:0,B:0},ev:[0,0,0],risk:0,assessed:0,addl:0,manual:'pending',delay:7,day:0,status:'draft',unauth:0,err:'',scn:''};
}
const t = k => (D[k] || [k,k])[S.lang==='es'?1:0];
const dt = n => { const d = new Date(BASE); d.setDate(d.getDate()+n); return d.toLocaleDateString(S.lang==='es'?'es':'en',{dateStyle:'medium'}); };
const bt = (a,v,l,c,dis) => `<button class="btn ${c||''}" data-a="${a}" data-v="${v}"${dis?' disabled':''}>${l}</button>`;
const bd = (c,x) => `<span class="bd ${c}">${x}</span>`;
const hue = n => (n.charCodeAt(0)*37 + n.length*53) % 360;
const li = (x,extra) => `<li class="it"><i class="ic" style="--h:${hue(x.n)}" aria-hidden="true">${x.n[0]}</i><span>${x.n}<small>${t(x.y)}</small></span>${extra||''}</li>`;
const eb = s => bd(s==='ok'?'g':s==='no'?'r':'a', t(s));
const tfOk = () => S.tf.A===1 && S.tf.B===1 && S.ev.every(x=>x);
const riskOk = () => S.assessed && (S.risk===0 || (S.risk===1 && S.addl) || (S.risk===2 && S.manual==='approve'));
const unique = () => IT.filter(x=>x.s==='ok');

function full(r){ S.reason='demo'; S.step=2; S.chk=[1,1,1]; S.tf={A:1,B:1}; S.ev=[1,1,1]; S.risk=r; S.assessed=1; S.addl=1; S.manual='approve'; S.delay=7; S.day=7; }
const SC = {
  A(){ full(0); S.status='complete'; S.view='result'; },
  B(){ S.reason='demo'; S.step=2; S.chk=[1,1,1]; S.tf={A:1,B:2}; S.ev=[1,1,0]; S.status='verify'; S.view='verify'; },
  C(){ full(1); S.addl=0; S.manual='pending'; S.status='review'; S.view='review'; },
  D(){ full(2); S.manual='pending'; S.status='review'; S.view='review'; },
  E(){ full(0); S.day=3; S.unauth=1; S.status='waiting'; S.view='wait'; },
  F(){ full(0); S.day=3; S.status='cancelled'; S.view='wait'; },
  G(){ full(0); S.status='complete'; S.view='result'; },
  H(){ full(0); S.status='complete'; S.view='result'; },
  I(){ full(0); S.status='complete'; S.view='store'; }
};
const A = {
  go:v=>{S.view=v;}, lang:v=>{S.lang=v; try{localStorage.setItem('fmp-lang',v);}catch(e){}},
  start:()=>{init(S.lang); S.view='accounts';}, reset:()=>init(S.lang),
  pick:v=>{S.primary=v;},
  nxt:()=>{ if(S.step===0 && S.reason.trim().length<5){S.err='eReason';return;} if(S.step===1 && !S.chk.every(x=>x)){S.err='eChk';return;} S.err=''; S.step++; },
  bck:()=>{S.err=''; S.step=Math.max(0,S.step-1);}, chk:v=>{S.chk[v]^=1;},
  submit:()=>{ if(S.status==='draft'){S.status='verify';} S.view='verify'; },
  tf:v=>{ S.tf[v[0]] = v[1]==='o'?1:v[1]==='f'?2:0; }, ev:v=>{S.ev[v]^=1;},
  toRev:()=>{ if(tfOk()){S.status='review'; S.view='review';} },
  risk:v=>{S.risk=+v; S.assessed=0; S.addl=0; S.manual='pending'; if(S.status==='rejected')S.status='review';},
  assess:()=>{S.assessed=1;}, addl:()=>{S.addl=1;},
  dec:v=>{ S.manual=v; if(v==='reject') S.status='rejected'; },
  moreEv:()=>{S.manual='pending';},
  toWait:()=>{ if(riskOk()) S.view='wait'; },
  delay:v=>{S.delay=+v;},
  begin:()=>{ if(S.status==='review' && riskOk()){S.status='waiting'; S.day=0;} },
  adv:()=>{ if(S.status==='waiting') S.day=Math.min(S.delay,S.day+1); },
  jmp:()=>{ if(S.status==='waiting') S.day=S.delay; },
  cancel:()=>{ if(S.status==='waiting'||S.status==='paused') S.status='cancelled'; },
  susp:()=>{ if(S.status==='waiting') S.status='paused'; },
  resume:()=>{ if(S.status==='paused') S.status='waiting'; },
  run:()=>{ if(S.status==='waiting' && S.day>=S.delay){S.status='complete'; S.view='result';} },
  scn:v=>{ init(S.lang); SC[v](); S.scn=v; }
};

function vHome(){
  const st = ['req','ver','rev','wai','res'].map((k,i)=>`<div class="stg"><b>${i+1}</b>${t(k)}<p>${t('d'+(i+1))}</p></div>`).join('');
  return `<section class="hero"><h2>${t('h1')}</h2><p>${t('prob')}</p><p><strong>${t('new')}</strong></p><div class="row">${bt('start','','▶ '+t('start'),'pri')}${bt('go','tst','🛡 '+t('try'))}</div></section>
  <div class="card"><h3>${t('how')}</h3><div class="stages">${st}</div></div>
  <div class="grid"><div class="card"><h3>${t('pr')}</h3><ul class="l">${[1,2,3,4].map(i=>`<li class="it">🔒 ${t('p'+i)}</li>`).join('')}</ul></div>
  <div class="card"><h3>${t('be')}</h3><p class="mu">${t('bn')}</p><ul class="l">${[1,2,3,4].map(i=>`<li class="it">✨ ${t('b'+i)}</li>`).join('')}</ul></div></div>
  <div class="al">${t('pnote')}</div>`;
}
function acctCard(k){
  const a = AC[k], inv = IT.filter(x=>x[k.toLowerCase()]);
  return `<div class="card"><h3>${t('ac')} ${k} ${k===S.primary?bd('b',t('isp')):''}</h3><p class="mu">${t('cr')}: ${a.cr} · ${t('la')}: ${a.la} ${t('fic')}</p>
  <p><b>${t('pu')}</b> ${t('fic')}: ${a.pu.join(', ')}</p><h4>${t('inv')} (${inv.length})</h4><ul class="l">${inv.map(x=>li(x,eb(x.s))).join('')}</ul>
  <div class="row">${bt('pick',k,t('setp'),k===S.primary?'on':'')}</div></div>`;
}
function vAcc(){
  const rows = IT.map(x=>`<tr><td>${x.n}</td><td>${t(x.y)}</td><td>${x.a?'✔':'—'}</td><td>${x.b?'✔':'—'}</td><td>${eb(x.s)}<br><small class="mu">${t(x.w||(x.a&&x.b?'dup':'wOk'))}</small></td></tr>`).join('');
  return `<h2>${t('acc')}</h2><div class="grid">${acctCard('A')}${acctCard('B')}</div>
  <div class="card" style="overflow-x:auto"><h3>${t('cmp')}</h3><table><tr><th>${t('item')}</th><th>${t('type')}</th><th>A</th><th>B</th><th>${t('eligt')}</th></tr>${rows}</table><p class="mu">${t('epic')}</p></div>
  <div class="row">${bt('go','req',t('req')+' →','pri')}</div>`;
}
function vReq(){
  let b = '';
  if(S.step===0) b = `<p>${t('prim')}: <b>${S.primary}</b></p><div class="row">${bt('pick','A','A',S.primary==='A'?'on':'')}${bt('pick','B','B',S.primary==='B'?'on':'')}</div><label for="r">${t('reason')}</label><textarea id="r">${S.reason.replace(/</g,'&lt;')}</textarea>`;
  if(S.step===1) b = [0,1,2].map(i=>`<div class="row">${bt('chk',i,(S.chk[i]?'☑ ':'☐ ')+t('c'+i),S.chk[i]?'on':'')}</div>`).join('')+`<div class="al g">${t('inc')}</div><div class="al">${t('exc')}</div><p class="mu">${t('epic')}</p>`;
  if(S.step===2) b = `<div class="al">${t('cf')}</div><p>${t('prim')}: <b>${S.primary}</b></p><p class="mu">${t('reason')}: ${S.reason.replace(/</g,'&lt;')}</p>`;
  return `<h2>${t('req')}</h2><div class="card"><h3>${t('s'+S.step)}</h3>${b}${S.err?`<div class="al r" role="alert">${t(S.err)}</div>`:''}
  <div class="row">${S.step>0?bt('bck','',t('bck')):''}${S.step<2?bt('nxt','',t('nxt'),'pri'):bt('submit','',t('sub'),'pri',S.status!=='draft')}</div></div>`;
}
function vVer(){
  if(ORD[S.status]<1) return `<div class="al">${t('gate')}</div>`;
  const cards = ['A','B'].map(k=>{ const s=S.tf[k];
    return `<div class="card"><h3>${t('ac')} ${k}</h3><p>${t('v2fa')}: ${bd(s===1?'g':s===2?'r':'a',s===1?t('vok'):s===2?t('vfail'):t('pend'))}</p>
    <div class="row">${s===2?bt('tf',k+'r',t('t_r')):bt('tf',k+'o',t('t_ok'),'',s===1)}${bt('tf',k+'f',t('t_f'),'dg',s===1)}</div></div>`; }).join('');
  const ev = [0,1,2].map(i=>`<div class="row">${bt('ev',i,(S.ev[i]?'☑ ':'☐ ')+t('e'+i),S.ev[i]?'on':'')} ${bd(S.ev[i]?'g':'a',S.ev[i]?t('vok'):t('pend'))}</div>`).join('');
  const bl = (S.tf.A===2||S.tf.B===2) ? `<div class="al r" role="alert">${t('blocked')}</div>` : '';
  return `<h2>${t('ver')}</h2><div class="grid">${cards}</div><div class="card"><h3>${t('evh')}</h3>${ev}<p class="mu">${t('nocode')}</p></div>${bl}<div class="row">${bt('toRev','',t('tor')+' →','pri',!tfOk())}</div>`;
}
function vRev(){
  if(ORD[S.status]<2) return `<div class="al">${t('gate')}</div>`;
  const sc = [0,1,2].map(i=>bt('risk',i,t('r'+i),S.risk===i?'on':'')).join('');
  let out = '';
  if(S.assessed){
    const rows = SIG.map((s,i)=>`<tr><td>${t('s_'+i)}</td><td>${s[S.risk]?bd('a',t('flag')):bd('g',t('clr'))}</td><td class="mu">${t('x_'+i)}</td></tr>`).join('');
    out = `<div class="card"><h3>${bd(S.risk===0?'g':'a',t('cls'+S.risk))}</h3><table>${rows}</table><p class="mu">${t('nosingle')}</p>`;
    if(S.risk===1) out += S.addl ? `<div class="al g">${t('addld')}</div>` : bt('addl','',t('addl'),'pri');
    out += '</div>';
    if(S.risk===2){
      out += `<div class="card"><h3>${t('rp')}</h3><div class="al">${t('rpn')}</div>${[0,1,2,3].map(i=>`<p><b>${t('rv'+i)}:</b> ${t('rv'+i+'t')}</p>`).join('')}
      <p>${t('mst')}: ${bd(S.manual==='approve'?'g':S.manual==='reject'?'r':'a',t('m_'+S.manual))}</p>
      <div class="row">${bt('dec','more',t('dmore'),'',S.manual==='reject')}${bt('dec','pending',t('dpend'),'',S.manual==='reject')}${bt('dec','approve',t('dapp'),'',S.manual==='reject')}${bt('dec','reject',t('drej'),'dg',S.manual==='reject')}</div>
      ${S.manual==='more'?bt('moreEv','',t('sendev')):''}${S.status==='rejected'?`<div class="al r" role="alert">${t('rejd')}</div>`:''}</div>`;
    }
  }
  return `<h2>${t('rev')}</h2><div class="card"><h3>${t('rsc')}</h3><div class="row">${sc}</div>${bt('assess','',t('asm'),'pri')}</div>${out}<div class="row">${bt('toWait','',t('tow')+' →','pri',!riskOk()||S.status==='rejected')}</div>`;
}
function vWait(){
  if(ORD[S.status]<2 || S.status==='rejected') return `<div class="al">${S.status==='rejected'?t('rejd'):t('gate')}</div>`;
  if(S.status==='review'){
    return `<h2>${t('wai')}</h2>${riskOk()?`<div class="card"><h3>${t('dly')}</h3><div class="row">${bt('delay',7,t('d7'),S.delay===7?'on':'')}${bt('delay',14,t('d14'),S.delay===14?'on':'')}</div>${bt('begin','',t('begin'),'pri')}</div>`:`<div class="al">${t('gate')}</div>`}`;
  }
  const w = S.status==='waiting', p = S.status==='paused', c = S.status==='cancelled', dn = S.status==='complete';
  const ms = [[0,'tl0'],[1,'tl1'],[Math.floor(S.delay/2),'tl2'],[S.delay,'tl3']];
  const rep = s => s.replace('{a}',dt(0)).replace('{b}',dt(S.delay));
  return `<h2>${t('wai')}</h2>${S.unau||S.unauth?`<div class="al r" role="alert">${t('unau')}</div>`:''}
  <div class="card"><p>${t('status')}: ${bd(c?'r':p?'a':dn?'g':'b',t('st_'+S.status))}</p><p class="mu">${t('subm')}: ${dt(0)} · ${t('comp')}: ${dt(S.delay)} · ${t('dayn')} ${S.day}/${S.delay}</p>
  <div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="${S.delay}" aria-valuenow="${S.day}"><i style="width:${S.day/S.delay*100}%"></i></div>
  <ul class="l" style="margin-top:.6rem">${ms.map(m=>`<li class="it">${S.day>=m[0]&&!c?'✅':'⏳'} ${t('dayn')} ${m[0]} — ${t(m[1])} (${dt(m[0])})</li>`).join('')}</ul>
  ${p?`<div class="al" role="alert">${t('pausen')}</div>`:''}${c?`<div class="al r" role="alert">${t('cand')}</div>`:''}
  <div class="row">${bt('adv','',t('adv'),'',!w||S.day>=S.delay)}${bt('jmp','',t('jmp'),'',!w||S.day>=S.delay)}${bt('susp','',t('susp'),'',!w)}${bt('resume','',t('res_'),'',!p)}${bt('cancel','',t('cnl'),'dg',!(w||p))}${bt('run','',t('runel')+' →','pri',!(w&&S.day>=S.delay))}</div>
  <p class="mu">${t('cnote')}</p></div>
  <div class="card"><h3>${t('nf')}</h3><div class="grid"><div class="mail"><b>✉ ${t('em')}</b><br>${rep(t('emt'))}</div><div class="mail"><b>🎮 ${t('ig')}</b><br>${rep(t('igt'))}</div></div></div>`;
}
function vRes(){
  if(S.status!=='complete') return `<h2>${t('res')}</h2><div class="al r" role="alert">${t('nores')}</div>`;
  const ok = unique(), ex = IT.filter(x=>x.s!=='ok'), dp = IT.filter(x=>x.a&&x.b).length;
  const col = k => `<div class="card"><h3>${t('bef')} — ${t('ac')} ${k}</h3><ul class="l">${IT.filter(x=>x[k.toLowerCase()]).map(x=>li(x,eb(x.s))).join('')}</ul></div>`;
  return `<h2>${t('res')}</h2><div class="al g" role="status"><b>${t('done')}</b></div>
  <div class="grid"><div class="card"><h3>${ok.length}</h3>${t('uniq')}</div><div class="card"><h3>${IT.filter(x=>x.s==='no').length}</h3>${t('excl')}</div><div class="card"><h3>${IT.filter(x=>x.s==='un').length}</h3>${t('unr')}</div><div class="card"><h3>${dp}</h3>${t('dups')}</div></div>
  <div class="grid">${col('A')}${col('B')}<div class="card"><h3>${t('aft')} (${t('prim')} ${S.primary})</h3><ul class="l">${ok.map(x=>li(x,x.a&&x.b?bd('b','A+B'):'')).join('')}</ul></div></div>
  <div class="card"><h3>${t('exh')}</h3><ul class="l">${ex.map(x=>li(x,eb(x.s)+` <small class="mu">${t(x.w)}</small>`)).join('')}</ul></div>`;
}
function vSto(){
  return `<h2>${t('sth')}</h2><div class="grid">${['A','B'].map(k=>`<div class="card"><h3>${t('ac')} ${k}</h3><ul class="l">${AC[k].g.map(g=>`<li class="it">🎮 ${g} ${t('fic')}</li>`).join('')}</ul></div>`).join('')}</div>
  <div class="card"><ul class="l">${[0,1,2,3].map(i=>`<li class="it">🛡 ${t('g'+i)}</li>`).join('')}</ul><div class="al">${t('stn')}</div><p>${t('goal')}</p></div>`;
}
function vTst(){
  return `<h2>${t('tst')}</h2><div class="row">${bt('reset','','↺ '+t('reset'),'dg')}</div><div class="grid">${'ABCDEFGHI'.split('').map(k=>`<div class="card"><h3>${t('sc'+k)}</h3><p class="mu">${t('nt'+k)}</p>${bt('scn',k,'▶ '+t('run'),'pri')}</div>`).join('')}</div>`;
}
function vDet(){
  return `<h2>${t('dt')}</h2><div class="al">${t('pnote')}</div>${[0,1,2,3,4,5,6].map(i=>`<details${i===1?' open':''}><summary>${t('q'+i)}</summary><p>${t('q'+i+'t')}</p></details>`).join('')}`;
}
const V = {home:vHome,accounts:vAcc,request:vReq,verify:vVer,review:vRev,wait:vWait,result:vRes,store:vSto,scenarios:vTst,details:vDet};
const NAV = [['home','home'],['accounts','acc'],['request','req'],['verify','ver'],['review','rev'],['wait','wai'],['result','res'],['store','sto'],['scenarios','tst'],['details','det']];

function R(){
  const f = document.activeElement, key = f && f.dataset && f.dataset.a ? f.dataset.a+'|'+f.dataset.v : '';
  document.documentElement.lang = S.lang; document.title = t('app');
  $('#top').innerHTML = `<h1>${t('app')}</h1><div class="hr">${bd('b',t('status')+': '+t('st_'+S.status))}${bt('lang','en','EN',S.lang==='en'?'on':'')}${bt('lang','es','ES',S.lang==='es'?'on':'')}${bt('reset','',t('reset'))}</div>`;
  $('#disc').textContent = t('disc');
  $('#nav').innerHTML = NAV.map(n=>bt('go',n[0],t(n[1]),S.view===n[0]?'on':'')).join('');
  $('#app').innerHTML = (S.scn?`<div class="al">${t('active')}: <b>${t('sc'+S.scn)}</b> — ${t('nt'+S.scn)}</div>`:'') + V[S.view]();
  if(key){ const e = [...document.querySelectorAll('[data-a]')].find(x=>x.dataset.a+'|'+x.dataset.v===key); if(e) e.focus(); }
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-a]'); if(!b || b.disabled) return;
  const pv = S.view; A[b.dataset.a](b.dataset.v); R();
  if(S.view!==pv){ window.scrollTo(0,0); $('#app').focus(); }
});
document.addEventListener('input', e => { if(e.target.id==='r') S.reason = e.target.value; });
init(); R();
