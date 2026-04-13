/**
 * Lenis only (no GSAP). Exposes window.__lenis for zoom-parallax and other scroll sync.
 */
(function () {
  if (typeof Lenis === "undefined") {
    console.warn("[lenis-init] Lenis not loaded.");
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
    prevent: function (node) {
      return !!(node && typeof node.closest === "function" && node.closest("#my-work-scroll"));
    },
  });

  window.__lenis = lenis;

  if (typeof ScrollTrigger !== "undefined") {
    lenis.on("scroll", ScrollTrigger.update);
  }

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
})();
