/**
 * Fixed nav: scrolled glass state + sliding bubble on .nav-link hover.
 */
(function () {
  var nav = document.getElementById("nav");
  if (!nav) return;

  function onScroll() {
    nav.classList.toggle("sc", window.scrollY > 60);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var navRight = document.getElementById("nav-right");
  var bubble = document.getElementById("nav-bubble");
  if (!navRight || !bubble) return;

  var links = navRight.querySelectorAll(".nav-link[data-nav]");
  var activeLink = null;

  function moveBubble(el) {
    if (!el) return;
    var navRect = navRight.getBoundingClientRect();
    var elRect = el.getBoundingClientRect();
    bubble.style.left = elRect.left - navRect.left + "px";
    bubble.style.width = elRect.width + "px";
    bubble.style.top = (navRect.height - 32) / 2 + "px";
    bubble.style.opacity = "1";
  }

  function clearBubble() {
    if (activeLink) {
      moveBubble(activeLink);
    } else {
      bubble.style.opacity = "0";
    }
  }

  links.forEach(function (link) {
    link.addEventListener("mouseenter", function () {
      moveBubble(link);
    });
    link.addEventListener("mouseleave", clearBubble);
  });

  var sections = [
    { id: "intro", el: document.getElementById("intro") },
    { id: "my-work", el: document.getElementById("my-work") },
  ];

  function updateActive() {
    var y = window.scrollY + 160;
    var current = null;
    sections.forEach(function (s) {
      if (s.el && s.el.offsetTop <= y) current = s.id;
    });
    links.forEach(function (link) {
      link.classList.remove("active");
    });
    activeLink = null;
    if (current) {
      links.forEach(function (link) {
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
          activeLink = link;
          moveBubble(link);
        }
      });
    } else {
      bubble.style.opacity = "0";
    }
  }

  window.addEventListener("scroll", updateActive, { passive: true });
  window.addEventListener("resize", updateActive);
  updateActive();
})();
