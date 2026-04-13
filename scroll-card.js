/**
 * Lenis smooth scroll + GSAP ScrollTrigger sync (vanilla stand-in for ReactLenis).
 * Uses gsap.ticker to drive Lenis so scrub timelines stay in sync (single RAF loop).
 */
(function () {
  if (typeof Lenis === "undefined") {
    console.warn("[scroll-card] Lenis not loaded.");
    return;
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var lenis = new Lenis({
    smoothWheel: !reduceMotion,
    syncTouch: true,
    touchMultiplier: 2,
    wheelMultiplier: 1.85,
    lerp: reduceMotion ? 1 : 0.55,
    duration: reduceMotion ? 0 : 0.35,
    // Sticky stacking cards need scroll position to track the pointer; smoothing
    // over this zone often makes the last cards feel late or "stuck".
    prevent: function (node) {
      return !!(node && typeof node.closest === "function" && node.closest("#scroll-card-stack"));
    },
  });

  window.__lenis = lenis;

  if (typeof ScrollTrigger !== "undefined") {
    lenis.on("scroll", ScrollTrigger.update);
  }

  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.ticker.add(function (time) {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  } else {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  function refreshST() {
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.refresh();
    }
  }

  requestAnimationFrame(refreshST);
  window.addEventListener("load", refreshST, { once: true });
  window.addEventListener("resize", function () {
    requestAnimationFrame(refreshST);
  });
})();
