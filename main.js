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

  /* ── Smooth scrolling ──
     Desktop: Lenis eases mouse-wheel and trackpad scrolling (a pinned copy lives in assets/js).
     Phones keep their own native momentum. Every in-page jump and every reel-breakdown
     step runs through the one eased animation below. */
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  let lenis = null;
  if (!reduce && fine && window.Lenis) {
    try {
      lenis = new Lenis({ lerp: 0.09, smoothWheel: true, wheelMultiplier: 1, gestureOrientation: 'vertical' });
      const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    } catch (err) { lenis = null; }
  }
  const setY = y => { if (lenis) lenis.scrollTo(y, { immediate: true, force: true }); else scrollTo(0, y); };
  const ease = k => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
  let anim = null;                                   // the running eased scroll, if any
  const stopAnim = () => { if (anim) anim.cancel(); };
  const animateTo = (y, ms, opts = {}) => {
    stopAnim();
    y = Math.min(Math.max(0, root.scrollHeight - innerHeight), Math.max(0, Math.round(y)));
    const y0 = scrollY;
    if (reduce || Math.abs(y - y0) < 2) { setY(y); if (opts.done) opts.done(); return; }
    const t0 = performance.now();
    let id = 0;
    const a = (anim = { interruptible: !!opts.interruptible, cancel() { cancelAnimationFrame(id); if (anim === a) anim = null; } });
    const tick = now => {
      const k = Math.min(1, (now - t0) / ms);
      setY(y0 + (y - y0) * ease(k));
      if (k < 1) id = requestAnimationFrame(tick);
      else { if (anim === a) anim = null; if (opts.done) opts.done(); }
    };
    id = requestAnimationFrame(tick);
  };
  // any in-page link glides instead of jumping
  const jumpTo = el => {
    const y = el.getBoundingClientRect().top + scrollY - 24;
    animateTo(y, Math.min(1500, Math.max(650, 420 + Math.abs(y - scrollY) * 0.14)), { interruptible: true });
  };
  document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    const id = a.getAttribute('href');
    const el = id.length > 1 && document.getElementById(id.slice(1));
    if (!el) return;
    e.preventDefault();
    if (a.closest('#tape') && e.detail !== 0) return;    // pointer taps on the ruler are handled by the ruler itself
    jumpTo(el);
    el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
    if (history.pushState) history.pushState(null, '', id);
  });
  // the moving name on the cover only runs while the cover is on screen
  if ('IntersectionObserver' in window) new IntersectionObserver(es => es.forEach(e => hero.classList.toggle('is-off', !e.isIntersecting))).observe(hero);

  /* ── One reel, taken apart ──
     States: 0 = intro, 1..n = the n layers, n+1 = the finished reel.
     Scrolling drives it continuously, and one scroll gesture (wheel flick, swipe, arrow key)
     moves exactly one state. */
  const ana = $('#anatomy');
  if (ana) {
    const stack = $('.ana__stack', ana), layers = $$('.ana__layer', ana), steps = $$('.ana__steps li', ana), bar = $('.ana__bar i', ana);
    const wave = $('.ana__wave', ana);
    for (let i = 0; i < 22; i++) { const b = document.createElement('i'); b.style.setProperty('--h', (25 + Math.abs(Math.sin(i * 1.7)) * 75).toFixed(0) + '%'); b.style.setProperty('--d', (i * -0.09).toFixed(2) + 's'); wave.appendChild(b); }
    const n = steps.length, last = n + 1;
    const geo = () => { const r = ana.getBoundingClientRect(); return { r, total: r.height - innerHeight, top: r.top + scrollY }; };
    const uNow = () => { const { r, total } = geo(); return total > 0 ? Math.min(last, Math.max(0, (-r.top / total) * last)) : 0; };
    const posOf = s => { const { total, top } = geo(); return top + (total * s) / last; };
    const drive = () => {
      const u = uNow(), idx = Math.round(u) - 1;
      const open = reduce ? 1 : u <= n ? Math.min(1, u) : Math.max(0, last - u);
      stack.style.setProperty('--s', open.toFixed(3));
      // on narrow screens the fan slides so the active layer stays centred
      stack.style.setProperty('--shift', innerWidth <= 820 ? (3 - Math.max(0, Math.min(n - 1, u - 1))).toFixed(3) : 0);
      layers.forEach((l, i) => l.classList.toggle('is-on', i === idx));
      steps.forEach((l, i) => l.classList.toggle('is-on', i === idx));
      ana.classList.toggle('is-open', idx >= 0 && idx < n);
      ana.classList.toggle('is-done', idx === n);
      bar.style.transform = `scaleX(${(u / last).toFixed(3)})`;
    };
    if (!reduce) { addEventListener('scroll', () => requestAnimationFrame(drive), { passive: true }); addEventListener('resize', drive); }
    drive();

    if (!reduce) {
      const dialogOpen = () => !!document.querySelector('dialog[open]');
      // What a gesture in this direction should do right now: step to the next state,
      // or glide the section into place when it is close, or nothing (let the page scroll).
      const plan = dir => {
        const { r } = geo(), vh = innerHeight;
        if (r.top <= 3 && r.bottom >= vh - 3) {
          const to = Math.round(uNow()) + dir;
          return to < 0 || to > last ? null : { y: posOf(to) };
        }
        if (dir > 0 && r.top > 3 && r.top < vh * 0.75) return { y: posOf(0) };
        if (dir < 0 && r.bottom < vh - 3 && r.bottom > vh * 0.25) return { y: posOf(last) };
        return null;
      };
      const g = { t: 0, abs: 0, dir: 0, fresh: true };
      const go = y => { g.fresh = false; animateTo(y, 560, { done: () => { g.fresh = false; } }); };

      // mouse wheel and trackpad: one flick = one step
      addEventListener('wheel', e => {
        if (e.ctrlKey || e.shiftKey || dialogOpen() || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
        if (anim && anim.interruptible) stopAnim();
        const dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? innerHeight : 1);
        const t = performance.now(), abs = Math.abs(dy), dir = dy > 0 ? 1 : -1;
        if (t - g.t > 110 || dir !== g.dir || (abs > g.abs * 1.6 && abs > 30)) g.fresh = true;   // a pause, a reversal or a new flick
        g.t = t; g.abs = abs; g.dir = dir;
        const p = anim ? { y: 0 } : plan(dir);
        if (!p) return;
        e.preventDefault(); e.stopImmediatePropagation();
        if (anim || !g.fresh || abs < 3) return;
        go(p.y);
      }, { passive: false, capture: true });

      // touch: one swipe = one step
      let touch = null;
      addEventListener('touchstart', e => {
        if (anim && anim.interruptible) stopAnim();
        touch = e.touches.length === 1 ? { y: e.touches[0].clientY, x: e.touches[0].clientX, dir: 0, plan: null, dy: 0, done: false } : null;
      }, { passive: true });
      addEventListener('touchmove', e => {
        if (!touch || e.touches.length !== 1 || dialogOpen()) return;
        const dy = touch.y - e.touches[0].clientY, dx = touch.x - e.touches[0].clientX;
        if (!touch.dir) {
          if (Math.abs(dy) < 3 && Math.abs(dx) < 3) return;
          if (Math.abs(dx) > Math.abs(dy)) { touch = null; return; }          // sideways swipes belong to the video row
          touch.dir = dy > 0 ? 1 : -1;
          touch.plan = anim ? { y: 0 } : plan(touch.dir);
        }
        if (!touch.plan) return;                                              // not in the section: normal scrolling
        if (e.cancelable) e.preventDefault();
        touch.dy = dy;
        if (!touch.done && !anim && Math.abs(dy) >= 26 && Math.sign(dy) === touch.dir) { touch.done = true; go(touch.plan.y); }
      }, { passive: false });
      const touchEnd = () => {
        if (touch && touch.plan && !touch.done && !anim && Math.abs(touch.dy) >= 10 && Math.sign(touch.dy) === touch.dir) go(touch.plan.y);
        touch = null;
      };
      addEventListener('touchend', touchEnd, { passive: true });
      addEventListener('touchcancel', () => (touch = null), { passive: true });

      // keyboard: arrows, Page Up/Down and Space step too
      addEventListener('keydown', e => {
        if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || dialogOpen()) return;
        const t = e.target;
        if (t.closest && t.closest('input, textarea, select, video, [contenteditable]')) return;
        let dir = 0;
        if (e.key === 'ArrowDown' || e.key === 'PageDown') dir = 1;
        else if (e.key === 'ArrowUp' || e.key === 'PageUp') dir = -1;
        else if (e.key === ' ' && (t === document.body || t === root)) dir = e.shiftKey ? -1 : 1;
        if (!dir) return;
        const p = anim ? { y: 0 } : plan(dir);
        if (!p) return;
        e.preventDefault();
        if (!anim) go(p.y);
      });

      // if scrolling stops between two states (scrollbar drag, ruler drag, a long fling), settle onto the nearest one
      let pointerDown = false, settleT = 0;
      addEventListener('pointerdown', () => (pointerDown = true), true);
      addEventListener('pointerup', () => (pointerDown = false), true);
      addEventListener('pointercancel', () => (pointerDown = false), true);
      const settle = () => {
        if (anim || pointerDown || touch || (lenis && lenis.isScrolling)) { settleT = setTimeout(settle, 120); return; }
        const { r } = geo();
        if (!(r.top <= 3 && r.bottom >= innerHeight - 3)) return;
        const u = uNow(), s = Math.round(u);
        if (Math.abs(u - s) > 0.015) go(posOf(s));
      };
      addEventListener('scroll', () => { clearTimeout(settleT); settleT = setTimeout(settle, 170); }, { passive: true });
    }
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
    setY(marks[i] + (f - i) * (marks[i + 1] - marks[i]));
  };

  let dragging = false, moved = false, downX = 0;
  tape.addEventListener('pointerdown', e => {
    stopAnim();
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
      jumpTo(targets[i]);
    }
  };
  tape.addEventListener('pointerup', release);
  tape.addEventListener('pointercancel', () => (dragging = false));

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
