// ============================================================
// CONFIGURATION — REPLACE THIS URL WITH YOUR APPS SCRIPT URL
// ============================================================
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbynpmCn5sELnTL7YVt9cJFMPn9rXJPOjXp7qLG24iAnDmn62CURHkv7cFtxi-hz2rPO/exec";
// ============================================================

const PHQ9_Q = [
  "૧. કામ કરવામાં ઓછો રસ પડવો અથવા આનંદ ન આવવો.",
  "૨. ઉદાસ, હતાશ અથવા નિરાશ અનુભવવું.",
  "૩. ઊંઘવામાં તકલીફ પડવી, વહેલા જાગી જવું અથવા વધુ પડતી ઊંઘ આવવી.",
  "૪. થાક અનુભવવો અથવા શક્તિ ઓછી જણાવી.",
  "૫. ભૂખ ઓછી લાગવી અથવા વધુ પડતું ખાવું.",
  "૬. પોતાના વિશે ખરાબ લાગવું—એવું લાગવું કે તમે નિષ્ફળ છો અથવા તમે પરિવારને નીચું જોવડાવ્યું છે.",
  "૭. વસ્તુઓ પર ધ્યાન કેન્દ્રિત કરવામાં મુશ્કેલી પડવી (જેમ કે સમાચાર વાંચવા કે ટીવી જોવું).",
  "૮. એટલું ધીમેથી બોલવું કે ચાલવું કે જે બીજા લોકોના ધ્યાનમાં આવે? અથવા તેનાથી વિરુદ્ધ—એટલા બેચેન હોવું કે તમે સામાન્ય કરતા વધુ હલનચલન કરતા હોવ.",
  "૯. એવા વિચારો આવવા કે તમારા કરતા તો મૃત્યુ સારું અથવા તમારી જાતને કોઈ રીતે નુકસાન પહોંચાડવું."
];
const PHQ_OPTS = ["બિલકુલ નહીં","કેટલાક દિવસો","અડધાથી વધુ દિવસો","લગભગ દરેક દિવસે"];

const GAD7_Q = [
  "૧. નર્વસ અથવા બેચેની અનુભવવી અથવા ખૂબ જ તણાવમાં રહેવું.",
  "૨. ચિંતા કરવાનું રોકી ન શકવું અથવા તેને નિયંત્રિત ન કરી શકવું.",
  "૩. વિવિધ બાબતો વિશે ખૂબ વધારે ચિંતા કરવી.",
  "૪. શાંતિથી બેસવામાં કે આરામ કરવામાં તકલીફ પડવી.",
  "૫. એટલા બેચેન હોવું કે એક જગ્યાએ સ્થિર બેસી ન શકાય.",
  "૬. સહેલાઈથી ચીડાઈ જવું અથવા ગુસ્સે થઈ જવું.",
  "૭. એવું લાગવું કે જાણે કંઈક ખરાબ થવાનું છે."
];

// DERS-16 Gujarati items — replace placeholders with actual translated items
const DERS16_Q = [
  "૧. [DERS-16 Item 1 — Gujarati translation pending]",
  "૨. [DERS-16 Item 2 — Gujarati translation pending]",
  "૩. [DERS-16 Item 3 — Gujarati translation pending]",
  "૪. [DERS-16 Item 4 — Gujarati translation pending]",
  "૫. [DERS-16 Item 5 — Gujarati translation pending]",
  "૬. [DERS-16 Item 6 — Gujarati translation pending]",
  "૭. [DERS-16 Item 7 — Gujarati translation pending]",
  "૮. [DERS-16 Item 8 — Gujarati translation pending]",
  "૯. [DERS-16 Item 9 — Gujarati translation pending]",
  "૧૦. [DERS-16 Item 10 — Gujarati translation pending]",
  "૧૧. [DERS-16 Item 11 — Gujarati translation pending]",
  "૧૨. [DERS-16 Item 12 — Gujarati translation pending]",
  "૧૩. [DERS-16 Item 13 — Gujarati translation pending]",
  "૧૪. [DERS-16 Item 14 — Gujarati translation pending]",
  "૧૫. [DERS-16 Item 15 — Gujarati translation pending]",
  "૧૬. [DERS-16 Item 16 — Gujarati translation pending]"
];

const BEDS_Q = [
  "1. હું સરળતાથી રડી પડું છું.",
  "2. લોકો અથવા ઘટનાઓ વિશેની મારી લાગણીઓ વારંવાર બદલાય છે.",
  "3. હું હંમેશાં એક સંવેદનશીલ (લાગણીશીલ) વ્યક્તિ રહ્યો/રહી છું.",
  "4. મારી લાગણીએ એટલી ઝડપ થી બદલાઈ જાય છે કે તેમનું અનુમાન (આગાહી ) કરવું મુશ્કેલ/અઘરું  છે.",
  "5. હું એક મિનિટમાં એક  પ્રકાર ની લાગણી  અનુભવી શકું છું અને બીજી જ મિનિટે તદ્દન અલગ પ્રકાર ની લાગણી અનુભવી શકું છું.",
  "6. હું ટીકા(ઠેકડી/મજાક) થી જલ્દી દુઃખી કે પરેશાન થતો/થતી નથી.",
  "7. મારી લાગણીઓ એ બીજા લોકો સાથે સમસ્યાઓ અથવા સંઘર્ષોનું કારણ બને છે.",
  "8. જ્યારે હું ભાવુક(લાગણીશીલ) હોઉં છું, ત્યારે હું શ્રેષ્ઠ/સારા  નિર્ણયો લેતો/લેતી  નથી.",
  "9. જ્યારે હું ભાવુક(લાગણીશીલ) હોઉં છું, ત્યારે હું એવી વસ્તુઓ કરું છું જેનો મને પછીથી પસ્તાવો થાય છે.",
  "10. હું બહુ લાગણીશીલ છું એ વાત મને પરેશાન કરે છે.",
  "11. મારી લાગણીઓ ભાગ્યે જ મારા માટે સમસ્યાઓ ઊભી કરે છે.",
  "12. મારી લાગણીઓ મારા પર કાબૂ કરતી નથી."
];
const BEDS_OPTS = ["એકદમ/પૂર્ણ રીતે/સંપૂર્ણપણે અસહમત","અસહમત","સહમત","એકદમ/પૂર્ણ રીતે/સંપૂર્ણપણે સહમત"];

const LPFS_Q = [
  "1. હું ઘણીવાર એ નથી જાણતો/જાણતી કે હું ખરેખર કોણ છું.",
  "2. હું ઘણીવાર પોતાના વિશે બહુ નકારાત્મક વિચારું છું.",
  "3. મારા કાબુ વગર ઘણીવાર મારી લાગણીઓમાં ફેરફાર થાય છે.",
  "4. મને એ સમજ નથી કે મારે જીવનમાં શું કરવું છે.",
  "5. હું ઘણીવાર મારા પોતાના વિચારો/લાગણીઓ સમજી શકતો/શકતી નથી.",
  "6. હું ઘણીવાર  મારી જાત પર અવાસ્તવિક (વધારે પડતી) અપેક્ષાઓ રાખું છું.",
  "7. ઘણીવાર મને બીજા લોકોની લાગણીઓ અને વિચારો સમજવામાં મુશ્કેલી  પડે છે.",
  "8. જયારે બીજા લોકોનો અભિપ્રાય મારા કરતા અલગ હોય ત્યારે એ મારા માટે સહન કરવું મુશ્કેલ બની જાય છે.",
  "9. મારા વર્તન ની અન્ય લોકો પર જે અસર પડે છે તેનું કારણ મને સમજાતું નથી.",
  "10. મારા સંબંધો/મિત્રતાઓ ક્યારેય લાંબા ટકતા નથી.",
  "11. જ્યારે લોકો સાથેના મારા સંબંધો વધુ અંગત (ઘનિષ્ઠ) બને છે, ત્યારે મને ચિંતા/ડર થાય છે કે મારી લાગણીઓને ઠેસ પહોંચશે.",
  "12. હું ઘણીવાર બીજા લોકો સાથે પરસ્પર(અરસપરસ)  સંતોષકારક રીતે સહકારપૂર્ણ  વ્યવહાર કરવામાં સફળ થતો/થતી નથી."
];
const LPFS_OPTS = ["સાવ ખોટું/મોટાભાગે ખોટું","ક્યારેક ખોટું","ક્યારેક સાચું","સાવ સાચું/મોટાભાગે સાચું"];

const SAPAS_Q = [
  "1. સામાન્ય રીતે, શું તમને મિત્રો બનાવવામાં અને જાળવવામાં તકલીફ પડે છે?",
  "2. સામાન્ય રીતે, શું તમે તમારી જાત ને એકલવાયા વ્યક્તિ તરીકે વર્ણન કરશો?",
  "3. સામાન્ય રીતે, શું તમે લોકો પર ભરોસો કરો?",
  "4. સામાન્ય રીતે, શું તમને જલ્દી ગુસ્સો આવી જાય છે?",
  "5. સામાન્ય રીતે, શું તમે એક આવેશપૂર્ણ (આવેગી/ઉતાવળા) વ્યક્તિ છો?",
  "6. સામાન્ય રીતે, શું તમે ચિંતાતુર સ્વભાવવાળા વ્યક્તિ છો?",
  "7. સામાન્ય રીતે, શું તમે બીજા લોકો પર બહુ આધાર રાખો છો?",
  "8. સામાન્ય રીતે, શું તમારો સ્વભાવ વધુ પડતી ચોકસાઈ વાળો છે?"
];

function buildLikert(containerId, questions, opts, prefix) {
  let html = "";
  questions.forEach((q, i) => {
    html += `<div class="card"><div class="q-text">${q}<span class="q-required">*</span></div>
      <div class="scale-row" id="${prefix}_${i}">`;
    opts.forEach((o, j) => {
      html += `<label class="scale-opt">
        <input type="radio" name="${prefix}_${i}" value="${j}" onchange="markScale(this,'${prefix}_${i}')">
        <span>${o}</span></label>`;
    });
    html += `</div></div>`;
  });
  document.getElementById(containerId).innerHTML = html;
}

function buildDERS(containerId, questions) {
  let html = "";
  questions.forEach((q, i) => {
    html += `<div class="card"><div class="q-text">${q}<span class="q-required">*</span></div>
      <div class="scale-row-5" id="ders_${i}">`;
    const labels = ["1\nક્યારેય નહીં","2","3","4","5\nહંમેશા"];
    labels.forEach((l, j) => {
      html += `<label class="scale-opt">
        <input type="radio" name="ders_${i}" value="${j+1}" onchange="markScale(this,'ders_${i}')">
        <span>${l}</span></label>`;
    });
    html += `</div></div>`;
  });
  document.getElementById(containerId).innerHTML = html;
}

function buildYesNo(containerId, questions, prefix) {
  let html = "";
  questions.forEach((q, i) => {
    html += `<div class="card"><div class="q-text">${q}<span class="q-required">*</span></div>
      <div class="options-row" id="${prefix}_${i}">
        <label class="opt-label"><input type="radio" name="${prefix}_${i}" value="હા" onchange="selectOpt(this)"> હા</label>
        <label class="opt-label"><input type="radio" name="${prefix}_${i}" value="ના" onchange="selectOpt(this)"> ના</label>
      </div></div>`;
  });
  document.getElementById(containerId).innerHTML = html;
}

function selectOpt(el) {
  el.closest('.options-row').querySelectorAll('.opt-label').forEach(l => l.classList.remove('selected'));
  el.closest('.opt-label').classList.add('selected');
}

function markScale(el, groupId) {
  document.getElementById(groupId).querySelectorAll('.scale-opt').forEach(l => l.classList.remove('selected'));
  el.closest('.scale-opt').classList.add('selected');
}

let cur = 1;
function goTo(n) {

  // Allow going backwards
  if (n < cur) {
    document.getElementById('s'+cur).classList.remove('active');
    document.getElementById('s'+n).classList.add('active');
    cur = n;
    document.getElementById('pbar').style.width = Math.round((n/10)*100)+'%';
    window.scrollTo(0,0);
    return;
  }

  // Skip validation for consent page because it uses checkConsent()
  if (cur !== 2 && !validateCurrentSection()) {
    alert("કૃપા કરીને બધા જરૂરી પ્રશ્નોના જવાબ આપો.");
    return;
  }

  document.getElementById('s'+cur).classList.remove('active');
  document.getElementById('s'+n).classList.add('active');
  cur = n;
  document.getElementById('pbar').style.width = Math.round((n/10)*100)+'%';
  window.scrollTo(0,0);
}

function validateCurrentSection() {

  const section = document.getElementById('s' + cur);

  // Check all radio button groups
  const radioNames = [...new Set(
    [...section.querySelectorAll('input[type="radio"]')]
      .map(r => r.name)
  )];

  for (const name of radioNames) {
    if (!section.querySelector(`input[name="${name}"]:checked`)) {
      return false;
    }
  }

  // Check text/select fields
  const fields = section.querySelectorAll('input[type="text"], input[type="number"], select');

  for (const field of fields) {
    if (field.value.trim() === "") {
      return false;
    }
  }

  return true;
}

function collectData() {
  const data = { timestamp: new Date().toISOString() };
  document.querySelectorAll('input[type=radio]:checked').forEach(el => { data[el.name] = el.value; });
  data['age'] = document.getElementById('age').value;
  data['education'] = document.querySelector('input[name="education"]:checked')?.value || '';
  return data;
}



// Build all dynamic sections
buildLikert('phq9_qs', PHQ9_Q, PHQ_OPTS, 'phq9');
buildLikert('gad7_qs', GAD7_Q, PHQ_OPTS, 'gad7');
buildDERS('ders16_qs', DERS16_Q);
buildLikert('beds_qs', BEDS_Q, BEDS_OPTS, 'beds');
buildLikert('lpfs_qs', LPFS_Q, LPFS_OPTS, 'lpfs');
buildYesNo('sapas_qs', SAPAS_Q, 'sapas');


function checkConsent() {

  const consent1 = document.querySelector('input[name="consent1"]:checked');
  const consent2 = document.querySelector('input[name="consent2"]:checked');

  if (!consent1 || !consent2) {
    alert("કૃપા કરીને બંને પ્રશ્નોના જવાબ આપો.");
    return;
  }

  if (consent1.value === "હા" && consent2.value === "હા") {

    // Eligible -> continue form
    goTo(3);

  } else {

    // Not eligible -> jump to final page
    goTo(11);   // replace 10 with your actual final section number

  }
}

async function sendData() {
  const data = collectData();
  console.log("sendData called", JSON.stringify(data));  // ← add this
  try {
    const formData = new FormData();
    formData.append('payload', JSON.stringify(data));
    console.log("about to fetch");  // ← add this
    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    });
    console.log("fetch done");  // ← add this
    localStorage.setItem("ders16_submitted", "yes");
  } catch (e) {
    console.error("fetch error", e);
  }
}

async function submitForm() {
  await sendData();
  goTo(10);
}

// Prevent repeat submissions from the same browser/device
if (localStorage.getItem("ders16_submitted") === "yes") {

  alert("આ ઉપકરણ પરથી આ પ્રશ્નાવલી અગાઉથી ભરવામાં આવી ચૂકી છે.");

  document.getElementById('s1').classList.remove('active');
  document.getElementById('s11').classList.add('active');

  cur = 11;
}

