/* Siddharth Padwal — cut to measure. No dependencies. */
(() => {
  const root = document.documentElement;
  root.classList.add('js');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ── Hero: the headline is cut to the width of the page ── */
  const hero = $('.hero');
  const title = $('.hero__title');
  const fitTitle = () => {
    const span = title.firstElementChild;
    title.style.fontSize = '100px';
    const w = span.getBoundingClientRect().width;
    if (w) title.style.fontSize = (100 * title.clientWidth / w * 0.995).toFixed(2) + 'px';
  };
  fitTitle();
  addEventListener('resize', fitTitle);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitTitle);
  requestAnimationFrame(() => setTimeout(() => hero.classList.add('is-ready'), reduce ? 0 : 120));

  /* ── Agent log types out once, when you reach it ── */
  const term = $('.term');
  if (term) {
    if (reduce || !('IntersectionObserver' in window)) term.classList.add('is-on');
    else new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { term.classList.add('is-on'); o.disconnect(); } }), { threshold: 0.5 }).observe(term);
  }

  /* ── One reel, taken apart: scroll drives the exploded view ── */
  const ana = $('#anatomy');
  if (ana) {
    const stack = $('.ana__stack', ana), layers = $$('.ana__layer', ana), steps = $$('.ana__steps li', ana), bar = $('.ana__bar i', ana);
    const wave = $('.ana__wave', ana);
    for (let i = 0; i < 22; i++) { const b = document.createElement('i'); b.style.setProperty('--h', (25 + Math.abs(Math.sin(i * 1.7)) * 75).toFixed(0) + '%'); b.style.setProperty('--d', (i * -0.09).toFixed(2) + 's'); wave.appendChild(b); }
    const n = steps.length;
    const drive = () => {
      const r = ana.getBoundingClientRect(), total = r.height - innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      const s = reduce ? 1 : Math.min(1, p / 0.1, p > 0.93 ? (1 - p) / 0.07 : 1);
      const idx = p < 0.1 ? -1 : p > 0.93 ? n : Math.min(n - 1, Math.floor((p - 0.1) / (0.83 / n)));
      stack.style.setProperty('--s', Math.max(0, s).toFixed(3));
      // on narrow screens the fan slides so the active layer is always centred
      stack.style.setProperty('--shift', innerWidth <= 820 ? (3 - Math.max(0, Math.min(n - 1, idx))) : 0);
      layers.forEach((l, i) => l.classList.toggle('is-on', i === idx));
      steps.forEach((l, i) => l.classList.toggle('is-on', i === idx));
      ana.classList.toggle('is-open', idx >= 0 && idx < n);
      ana.classList.toggle('is-done', idx === n);
      bar.style.transform = `scaleX(${p.toFixed(3)})`;
    };
    if (!reduce) { addEventListener('scroll', () => requestAnimationFrame(drive), { passive: true }); addEventListener('resize', drive); }
    drive();
  }

  /* ── Looping previews: load and play only while on screen ── */
  const loops = $$('video[data-loop]');
  const startLoop = v => {
    if (!v.src) v.src = v.dataset.loop;
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
  };
  if (!reduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => (e.isIntersecting ? startLoop(e.target) : e.target.pause()));
    }, { threshold: 0.35 });
    loops.forEach(v => io.observe(v));
  }

  /* ── Statement: words ink in as you read down ── */
  const st = $('[data-fill]');
  let stWords = [];
  if (st && !reduce) {
    st.innerHTML = st.textContent.trim().split(/\s+/).map(w => `<span class="w">${w}</span>`).join(' ');
    stWords = $$('.w', st);
  }
  const fillStatement = () => {
    if (!stWords.length) return;
    const r = st.getBoundingClientRect();
    const vh = innerHeight;
    const t = Math.min(1, Math.max(0, (vh * 0.88 - r.top) / (r.height + vh * 0.38)));
    const n = Math.round(t * stWords.length);
    stWords.forEach((w, i) => w.classList.toggle('on', i < n));
  };

  /* ── Tape: equal segments, one per section; the pin is the playhead ── */
  const tape = $('#tape');
  const pin = $('#pin');
  const now = $('#tapeNow');
  const segLinks = $$('.tape__segs a');
  const targets = segLinks.map(a => $(a.getAttribute('href')));
  let marks = [];
  let current = -1;

  const measure = () => {
    const end = Math.max(1, root.scrollHeight - innerHeight);
    marks = targets.map((el, i) => (i === 0 ? 0 : Math.min(end - 1, Math.max(0, el.getBoundingClientRect().top + scrollY - innerHeight * 0.35))));
    for (let i = 1; i < marks.length; i++) marks[i] = Math.max(marks[i], marks[i - 1] + 1);
    marks.push(Math.max(end, marks[marks.length - 1] + 1));
  };

  const place = () => {
    const y = scrollY;
    const n = targets.length;
    let i = 0;
    while (i < n - 1 && y >= marks[i + 1]) i++;
    const within = Math.min(1, Math.max(0, (y - marks[i]) / (marks[i + 1] - marks[i])));
    const x = Math.min(tape.clientWidth - 11, Math.max(11, ((i + within) / n) * tape.clientWidth));
    pin.style.transform = `translateX(${x.toFixed(1)}px)`;
    tape.classList.toggle('is-late', x < tape.clientWidth * 0.5);
    if (i !== current) {
      current = i;
      segLinks.forEach((a, k) => (k === i ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current')));
      now.textContent = segLinks[i].textContent;
    }
  };

  const seek = clientX => {
    const n = targets.length;
    const f = Math.min(0.9999, Math.max(0, clientX / tape.clientWidth)) * n;
    const i = Math.floor(f);
    scrollTo({ top: marks[i] + (f - i) * (marks[i + 1] - marks[i]), behavior: 'instant' });
  };

  let dragging = false, moved = false, downX = 0;
  tape.addEventListener('pointerdown', e => {
    dragging = true; moved = false; downX = e.clientX;
    tape.setPointerCapture(e.pointerId);
  });
  tape.addEventListener('pointermove', e => {
    if (!dragging) return;
    if (Math.abs(e.clientX - downX) > 4) moved = true;
    if (moved) seek(e.clientX);
  });
  const release = e => {
    if (!dragging) return;
    dragging = false;
    if (!moved) {
      // a tap: go to the start of the section under the finger
      const i = Math.min(targets.length - 1, Math.floor((e.clientX / tape.clientWidth) * targets.length));
      targets[i].scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    }
  };
  tape.addEventListener('pointerup', release);
  tape.addEventListener('pointercancel', () => (dragging = false));
  // keyboard users still get plain anchor links; pointer taps are handled above
  segLinks.forEach(a => a.addEventListener('click', e => { if (e.detail !== 0) e.preventDefault(); }));

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { place(); fillStatement(); ticking = false; });
  };
  const refresh = () => { measure(); place(); fillStatement(); };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', refresh);
  addEventListener('load', refresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
  refresh();

  /* ── Reel rail: buttons and drag ── */
  const rail = $('#rail');
  const prev = $('#railPrev');
  const next = $('#railNext');
  const step = () => (rail.querySelector('.reel').offsetWidth + 24) * (innerWidth <= 820 ? 1 : 2);
  const syncRail = () => {
    prev.disabled = rail.scrollLeft < 8;
    next.disabled = rail.scrollLeft > rail.scrollWidth - rail.clientWidth - 8;
  };
  prev.addEventListener('click', () => rail.scrollBy({ left: -step(), behavior: 'smooth' }));
  next.addEventListener('click', () => rail.scrollBy({ left: step(), behavior: 'smooth' }));
  rail.addEventListener('scroll', syncRail, { passive: true });
  syncRail();

  let rDown = false, rMoved = false, rX = 0, rLeft = 0;
  rail.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse') return;
    rDown = true; rMoved = false; rX = e.clientX; rLeft = rail.scrollLeft;
  });
  addEventListener('pointermove', e => {
    if (!rDown) return;
    const dx = e.clientX - rX;
    if (Math.abs(dx) > 6 && !rMoved) { rMoved = true; rail.classList.add('is-drag'); }
    if (rMoved) rail.scrollLeft = rLeft - dx;
  });
  addEventListener('pointerup', () => {
    if (!rDown) return;
    rDown = false;
    rail.classList.remove('is-drag');
  });
  rail.addEventListener('click', e => { if (rMoved) { e.preventDefault(); e.stopPropagation(); rMoved = false; } }, true);

  /* ── Player: full video, with sound ── */
  const player = $('#player');
  const pv = $('#playerVideo');
  const pt = $('#playerTitle');
  const openPlayer = btn => {
    player.classList.toggle('is-wide', btn.hasAttribute('data-wide'));
    pt.textContent = btn.dataset.title;
    pv.src = btn.dataset.play;
    player.showModal();
    const p = pv.play();
    if (p && p.catch) p.catch(() => {});
  };
  const closePlayer = () => { pv.pause(); pv.removeAttribute('src'); pv.load(); if (player.open) player.close(); };
  $$('[data-play]').forEach(b => b.addEventListener('click', () => openPlayer(b)));
  $('#playerClose').addEventListener('click', closePlayer);
  player.addEventListener('click', e => { if (e.target === player) closePlayer(); });
  player.addEventListener('close', () => { pv.pause(); });

  /* ── Inline video in the browser frame ── */
  $$('[data-inline-video]').forEach(box => {
    const v = $('video', box);
    $('.play', box).addEventListener('click', () => {
      v.src = v.dataset.src;
      v.controls = true;
      box.classList.add('is-playing');
      v.play();
    });
  });

  /* ── Mumbai time ── */
  const clock = $('#clock');
  const tick = () => {
    clock.textContent = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' }).format(new Date());
  };
  tick();
  setInterval(tick, 30000);
})();
