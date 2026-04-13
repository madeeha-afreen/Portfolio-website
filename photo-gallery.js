/**
 * Vanilla PhotoGallery — fade container + stagger spring-like fan (GSAP).
 * Expects [data-photo-gallery] and .photo-card[data-target-x][data-target-y][data-order].
 */
(function () {
  var root = document.querySelector("[data-photo-gallery]");
  if (!root) return;

  var stage = root.querySelector(".photo-landing__photos-inner");
  var cards = root.querySelectorAll(".photo-card");
  if (!stage || !cards.length) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var delayMs = parseFloat(root.getAttribute("data-animation-delay") || "0.5", 10) * 1000;

  function applyFinal() {
    cards.forEach(function (card) {
      var x = parseFloat(card.getAttribute("data-target-x") || "0", 10);
      var y = parseFloat(card.getAttribute("data-target-y") || "0", 10);
      card.style.transform = "translate3d(" + x + "px," + y + "px,0)";
    });
    stage.style.opacity = "1";
  }

  if (reduceMotion || typeof gsap === "undefined") {
    applyFinal();
    return;
  }

  gsap.set(cards, { x: 0, y: 0, opacity: 1, force3D: true });
  gsap.set(stage, { opacity: 0 });

  window.setTimeout(function () {
    gsap.to(stage, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  }, delayMs);

  window.setTimeout(function () {
    cards.forEach(function (card) {
      var x = parseFloat(card.getAttribute("data-target-x") || "0", 10);
      var y = parseFloat(card.getAttribute("data-target-y") || "0", 10);
      var order = parseInt(card.getAttribute("data-order") || "0", 10);
      gsap.to(card, {
        x: x,
        y: y,
        duration: 1.05,
        ease: "back.out(1.15)",
        delay: order * 0.15,
      });
    });
  }, delayMs + 400);
})();
