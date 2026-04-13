/**
 * Cinematic footer — GSAP ScrollTrigger + magnetic pills (vanilla port of motion-footer.tsx).
 * Load after gsap.min.js and ScrollTrigger.min.js (defer order in document).
 */
(function () {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("[motion-footer] GSAP or ScrollTrigger not loaded.");
    return;
  }

  var wrapper = document.getElementById("cinematic-footer-root");
  var giantText = document.querySelector("[data-footer-giant]");
  var heading = document.querySelector("[data-footer-heading]");
  var linksBlock = document.querySelector("[data-footer-links]");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  gsap.registerPlugin(ScrollTrigger);

  var unmag = [];

  function initMagnetic(el) {
    gsap.set(el, { transformPerspective: 600 });
    function onMove(e) {
      var rect = el.getBoundingClientRect();
      var h = rect.width / 2;
      var w = rect.height / 2;
      var x = e.clientX - rect.left - h;
      var y = e.clientY - rect.top - w;
      gsap.to(el, {
        x: x * 0.4,
        y: y * 0.4,
        rotationX: -y * 0.15,
        rotationY: x * 0.15,
        scale: 1.05,
        ease: "power2.out",
        duration: 0.18,
      });
    }
    function onLeave() {
      gsap.to(el, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        ease: "power3.out",
        duration: 0.35,
      });
    }
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return function () {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }

  document.querySelectorAll("[data-magnetic]").forEach(function (el) {
    unmag.push(initMagnetic(el));
  });

  var topBtn = document.getElementById("footer-scroll-top");
  if (topBtn) {
    topBtn.addEventListener("click", function () {
      if (window.__lenis && typeof window.__lenis.scrollTo === "function") {
        window.__lenis.scrollTo(0, { duration: 0.4 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }

  var ctx = { revert: function () {} };

  if (wrapper && !reduceMotion) {
    ctx = gsap.context(function () {
      if (giantText) {
        gsap.fromTo(
          giantText,
          { y: "10vh", scale: 0.8, opacity: 0 },
          {
            y: "0vh",
            scale: 1,
            opacity: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: wrapper,
              start: "top 80%",
              end: "bottom bottom",
              scrub: 1,
            },
          }
        );
      }

      if (heading && linksBlock) {
        gsap.fromTo(
          [heading, linksBlock],
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: wrapper,
              start: "top 40%",
              end: "bottom bottom",
              scrub: 1,
            },
          }
        );
      }
    }, wrapper);
  } else {
    if (giantText) gsap.set(giantText, { y: 0, scale: 1, opacity: 1 });
    if (heading) gsap.set(heading, { y: 0, opacity: 1 });
    if (linksBlock) gsap.set(linksBlock, { y: 0, opacity: 1 });
  }

  function refresh() {
    ScrollTrigger.refresh();
  }

  if (document.readyState === "complete") {
    requestAnimationFrame(refresh);
  } else {
    window.addEventListener("load", function () {
      requestAnimationFrame(refresh);
    }, { once: true });
  }

  window.addEventListener("resize", refresh);

  window.addEventListener("pagehide", function () {
    ctx.revert();
    window.removeEventListener("resize", refresh);
    unmag.forEach(function (fn) {
      if (typeof fn === "function") fn();
    });
  });
})();
