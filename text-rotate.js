/**
 * Vanilla TextRotate — cycles phrases after "I'm a" (GSAP; Motion-style y + stagger).
 * Load after gsap.min.js. Expects [data-text-rotate] and optional .bp-landing__sr-live.
 */
(function () {
  var root = document.querySelector("[data-text-rotate]");
  if (!root) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var liveEl = document.getElementById("landing-role-live");

  var raw = root.getAttribute("data-texts") || "[]";
  var texts;
  try {
    texts = JSON.parse(raw);
  } catch (e) {
    texts = [];
  }
  if (!texts.length) return;

  var rotationInterval = parseInt(root.getAttribute("data-interval") || "2000", 10);
  var staggerEach = parseFloat(root.getAttribute("data-stagger") || "0.012") || 0.012;
  var staggerFrom = (root.getAttribute("data-stagger-from") || "last").toLowerCase();
  var currentIndex = 0;
  var timerId = null;

  /** GSAP stagger `from` aligned with Motion TextRotate `staggerFrom`. */
  function gsapStaggerFrom() {
    if (staggerFrom === "first") return "start";
    if (staggerFrom === "center") return "center";
    if (staggerFrom === "random") return "random";
    return "end";
  }

  function splitGraphemes(str) {
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      var seg = new Intl.Segmenter("en", { granularity: "grapheme" });
      return Array.from(seg.segment(str), function (s) {
        return s.segment;
      });
    }
    return Array.from(str);
  }

  function wordsToGroups(text) {
    var parts = text.split(" ");
    return parts.map(function (w, i) {
      return { chars: splitGraphemes(w), needsSpace: i < parts.length - 1 };
    });
  }

  function setLive(text) {
    if (liveEl) liveEl.textContent = "I'm a " + text;
  }

  function buildDom(groups) {
    root.innerHTML = "";
    groups.forEach(function (g) {
      var word = document.createElement("span");
      word.className = "text-rotate__word";
      g.chars.forEach(function (ch) {
        var wrap = document.createElement("span");
        wrap.className = "text-rotate__char-wrap";
        var span = document.createElement("span");
        span.className = "text-rotate__char bp-landing__rotate-char";
        span.textContent = ch;
        wrap.appendChild(span);
        word.appendChild(wrap);
      });
      if (g.needsSpace) {
        var sp = document.createElement("span");
        sp.className = "text-rotate__space";
        sp.textContent = " ";
        word.appendChild(sp);
      }
      root.appendChild(word);
    });
  }

  function charNodes() {
    return root.querySelectorAll(".text-rotate__char");
  }

  function animateIn() {
    var nodes = charNodes();
    if (!nodes.length) return;
    if (typeof gsap === "undefined") {
      nodes.forEach(function (n) {
        n.style.opacity = "1";
        n.style.transform = "none";
      });
      return;
    }
    gsap.set(nodes, { yPercent: 100, opacity: 0 });
    gsap.to(nodes, {
      yPercent: 0,
      opacity: 1,
      duration: 0.3,
      ease: "back.out(1.15)",
      stagger: {
        each: staggerEach,
        from: gsapStaggerFrom(),
      },
    });
  }

  function animateOut(done) {
    var nodes = charNodes();
    if (!nodes.length) {
      done();
      return;
    }
    if (typeof gsap === "undefined") {
      done();
      return;
    }
    gsap.to(nodes, {
      yPercent: -120,
      opacity: 0,
      duration: 0.26,
      ease: "power3.in",
      stagger: {
        each: staggerEach,
        from: gsapStaggerFrom(),
      },
      onComplete: done,
    });
  }

  function showPhrase(index) {
    buildDom(wordsToGroups(texts[index]));
    setLive(texts[index]);
    animateIn();
  }

  function goNext() {
    var nextIndex = (currentIndex + 1) % texts.length;
    animateOut(function () {
      currentIndex = nextIndex;
      showPhrase(currentIndex);
    });
  }

  function startTimer() {
    if (timerId) clearInterval(timerId);
    timerId = window.setInterval(goNext, rotationInterval);
  }

  root.setAttribute("aria-hidden", "true");

  setLive(texts[0]);
  buildDom(wordsToGroups(texts[0]));

  if (reduceMotion || typeof gsap === "undefined") {
    charNodes().forEach(function (n) {
      n.style.opacity = "1";
      n.style.transform = "none";
    });
    return;
  }

  animateIn();
  startTimer();

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      if (timerId) clearInterval(timerId);
      timerId = null;
    } else if (!reduceMotion && typeof gsap !== "undefined") {
      startTimer();
    }
  });
})();
