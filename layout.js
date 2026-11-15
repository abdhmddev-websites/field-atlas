/* Field Atlas — reading layout pass (runs after every render):
 * 1. long paragraphs (3+ sentences) become a short lead + bullet points — same words, easier to scan;
 * 2. long pages get an "On this page" row of jump buttons.
 * Works on text nodes only (no regex over HTML). Loaded after extras.js, before app.js.
 */
(function () {
const A = window.ATLAS;
A.ext = A.ext || { routes: {}, after: [] };
Object.assign(A.extUI = A.extUI || {}, { onPage: ['On this page', 'في هذه الصفحة'] });

const SKIP = 'nav, .gbar, .vstrip, .dbar, .crumbs, .hero2, .mq-wrap, .qrow, .slide, .ws, .ticket, .rcard, .d-result, .gate, footer, .uni-table, .gpa-calc, label, button';
const ABBR = /(?:\be\.g|\bi\.e|\betc|\bvs|\bapprox|\bSt|\bDr|\bNo|\bU\.S|\bU\.K)\.$/i;

function sentences(text) {
  const out = []; let cur = '';
  const tokens = text.split(/(?<=[.!?؟؛])\s+/);
  tokens.forEach(t => {
    cur = cur ? cur + ' ' + t : t;
    if (ABBR.test(cur) || cur.length < 28) return; // keep short or abbreviated pieces with the next one
    out.push(cur); cur = '';
  });
  if (cur) { if (out.length && cur.length < 28) out[out.length - 1] += ' ' + cur; else out.push(cur); }
  return out;
}

function splitLong(root) {
  root.querySelectorAll('p, div.warn, .think').forEach(el => {
    if (el.closest(SKIP) || el.dataset.split) return;
    const kids = [...el.children];
    if (kids.some(k => !/^(B|STRONG)$/.test(k.tagName))) return; // links, inputs, bdi… → leave as is
    const lead = kids[0] && el.firstChild === kids[0] ? kids[0] : (kids[0] && el.firstChild.nodeType === 3 && !el.firstChild.textContent.trim() && el.firstChild.nextSibling === kids[0] ? kids[0] : null);
    if (kids.length > (lead ? 1 : 0)) return;
    const body = (lead ? el.textContent.slice(lead.textContent.length) : el.textContent).trim();
    if (body.length < 180) return;
    const parts = sentences(body);
    if (parts.length < 3) return;
    const box = document.createElement(el.tagName === 'P' ? 'div' : el.tagName);
    box.className = (el.className ? el.className + ' ' : '') + 'split-wrap';
    if (el.getAttribute('style')) box.setAttribute('style', el.getAttribute('style'));
    box.dataset.split = '1';
    if (lead) { const b = document.createElement('b'); b.className = 'split-lead'; b.textContent = lead.textContent.replace(/[:：]\s*$/, ''); box.appendChild(b); }
    const ul = document.createElement('ul'); ul.className = 'split';
    parts.forEach(s => { const li = document.createElement('li'); li.textContent = s.replace(/[؛;]\s*$/, ''); ul.appendChild(li); });
    box.appendChild(ul);
    el.replaceWith(box);
  });
}

function toc(root, page) {
  const old = document.getElementById('pageToc'); if (old) old.remove();
  if (['home', 'lesson', 'testq', 'gate', 'decide'].includes(page)) return;
  const hs = [...root.querySelectorAll('.sec-head h2, h2.uni-h, section.card > h2.h3, .tech-route > h2, .abbr > h2')].filter(h => !h.closest(SKIP) && h.textContent.trim());
  if (hs.length < 3) return;
  const u = A.h.u;
  const nav = document.createElement('nav'); nav.id = 'pageToc'; nav.className = 'toc'; nav.setAttribute('aria-label', u('onPage'));
  const t = document.createElement('b'); t.textContent = u('onPage'); nav.appendChild(t);
  hs.slice(0, 10).forEach((h, i) => {
    if (!h.id) h.id = 'sec-' + i;
    const b = document.createElement('button'); b.type = 'button'; b.className = 'toc-btn';
    b.textContent = h.textContent.replace(/^\s*\d+\.\s*/, '').replace(/^[⚠↗]\s*/, '').trim();
    b.onclick = () => { h.setAttribute('tabindex', '-1'); h.scrollIntoView({ behavior: document.documentElement.dataset.motion === 'reduce' ? 'auto' : 'smooth', block: 'start' }); h.focus({ preventScroll: true }); };
    nav.appendChild(b);
  });
  const anchor = root.querySelector('.phero, .fhero, .mhead, .test-intro, .res-hero');
  if (anchor) anchor.insertAdjacentElement('afterend', nav); else root.insertAdjacentElement('afterbegin', nav);
}

const ICON = { test: '◎', types: '◎', faculties: '⌂', decide: '⚖', roadmap: '➶', prepare: '✓', money: '€', ladder: '▤', uni: '✎', reality: '⚠', future: '↗', stories: '❝', class: '⬡', compare: '⇄' };
A.ext.after.push((page, parts) => {
  const root = document.getElementById('app'); if (!root || page === 'lesson') return;
  const ph = root.querySelector('.phero, .test-intro'); const ic = ICON[(parts || [])[0]];
  if (ph && ic) ph.setAttribute('data-icon', ic);
  splitLong(root);
  toc(root, page);
});
})();
