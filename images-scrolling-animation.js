/**
 * Sticky stacking cards — vanilla port of framer useScroll + useTransform scale.
 * Scroll target: #my-work-scroll (scales .my-work__sticky-inner). Synced with window.__lenis when present.
 */
(function () {
  var container = null;
  var cards = [];
  var n = 0;
  var reduceMotion = false;
  var ticking = false;
  var lenisUnsub = null;
  var windowScrollBound = false;

  function targetScaleForIndex(i) {
    return Math.max(0.6, 1 - (n - i - 1) * 0.08);
  }

  function rangeStartForIndex(i) {
    return n > 0 ? i / n : 0;
  }

  function scrollProgress() {
    if (!container) return 0;
    var rect = container.getBoundingClientRect();
    var h = rect.height || container.offsetHeight;
    var vh = window.innerHeight;
    var range = h - vh;
    if (range <= 0) return 0;
    return Math.max(0, Math.min(1, -rect.top / range));
  }

  function remap(p, a, b, va, vb) {
    if (p <= a) return va;
    if (p >= b) return vb;
    return va + ((p - a) / (b - a)) * (vb - va);
  }

  function update() {
    if (!container || !cards.length) return;
    var p = scrollProgress();

    cards.forEach(function (card, i) {
      var ts = targetScaleForIndex(i);
      var rs = rangeStartForIndex(i);
      var s;
      if (reduceMotion) {
        s = 1;
      } else {
        s = remap(p, rs, 1, 1, ts);
      }
      card.style.transform = "scale(" + s + ")";
    });
  }

  function onWindowScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(function () {
        update();
        ticking = false;
      });
    }
  }

  function tryBindLenis() {
    var lenis = window.__lenis;
    if (!lenis || typeof lenis.on !== "function") return false;
    if (lenisUnsub) return true;
    var handler = function () {
      update();
    };
    lenis.on("scroll", handler);
    lenisUnsub = function () {
      if (typeof lenis.off === "function") lenis.off("scroll", handler);
      lenisUnsub = null;
    };
    return true;
  }

  function applyCardOffsets() {
    cards.forEach(function (card) {
      /* Keep 0 so flex + min-height can center each row on the viewport (cards 1–7). */
      card.style.top = "0";
    });
  }

  function init() {
    container = document.getElementById("my-work-scroll");
    if (!container) return;

    cards = Array.prototype.slice.call(container.querySelectorAll(".my-work__sticky-inner"));
    n = cards.length;
    reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    cards.forEach(function (inner, i) {
      var sticky = inner.closest(".my-work__sticky");
      if (sticky) sticky.style.setProperty("--mw-z", String(i + 1));
    });

    applyCardOffsets();

    if (!tryBindLenis()) {
      window.addEventListener("scroll", onWindowScroll, { passive: true });
      windowScrollBound = true;
      var attempts = 0;
      var wait = setInterval(function () {
        attempts += 1;
        if (tryBindLenis()) {
          clearInterval(wait);
          if (windowScrollBound) {
            window.removeEventListener("scroll", onWindowScroll);
            windowScrollBound = false;
          }
        } else if (attempts > 150) {
          clearInterval(wait);
        }
      }, 16);
    }

    window.addEventListener("resize", function () {
      applyCardOffsets();
      update();
    });
    window.addEventListener("load", function () {
      if (window.__lenis && typeof window.__lenis.resize === "function") {
        window.__lenis.resize();
      }
      requestAnimationFrame(function () {
        update();
      });
    }, { once: true });

    requestAnimationFrame(function () {
      requestAnimationFrame(update);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
