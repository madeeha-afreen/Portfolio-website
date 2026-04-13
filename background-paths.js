/**
 * Vanilla landing — port of BackgroundPaths (framer-motion paths + stagger title).
 * Depends on GSAP (loaded before this script in index.html).
 */
(function () {
  var root = document.querySelector("[data-background-paths]");
  if (!root) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function pathD(i, position) {
    return (
      "M-" +
      (380 - i * 5 * position) +
      " -" +
      (189 + i * 6) +
      "C-" +
      (380 - i * 5 * position) +
      " -" +
      (189 + i * 6) +
      " -" +
      (312 - i * 5 * position) +
      " " +
      (216 - i * 6) +
      " " +
      (152 - i * 5 * position) +
      " " +
      (343 - i * 6) +
      "C" +
      (616 - i * 5 * position) +
      " " +
      (470 - i * 6) +
      " " +
      (684 - i * 5 * position) +
      " " +
      (875 - i * 6) +
      " " +
      (684 - i * 5 * position) +
      " " +
      (875 - i * 6)
    );
  }

  function buildSvg(position) {
    var wrap = document.createElement("div");
    wrap.className = "bp-landing__svg-wrap";
    wrap.setAttribute("aria-hidden", "true");
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("class", "bp-landing__svg");
    /* Original art uses negative coords + y>316; 0 0 696 316 clips almost everything. */
    svg.setAttribute("viewBox", "-640 -430 1380 1320");
    /* slice = cover viewport (no empty bands); centered */
    svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
    svg.setAttribute("fill", "none");
    var title = document.createElementNS(ns, "title");
    title.textContent = "Background Paths";
    svg.appendChild(title);
    for (var i = 0; i < 36; i++) {
      var p = document.createElementNS(ns, "path");
      p.setAttribute("d", pathD(i, position));
      p.setAttribute("stroke", "currentColor");
      p.setAttribute("stroke-width", String(0.65 + i * 0.045));
      p.setAttribute("stroke-opacity", String(Math.min(0.22 + i * 0.018, 0.85)));
      svg.appendChild(p);
    }
    wrap.appendChild(svg);
    return wrap;
  }

  var bg = root.querySelector(".bp-landing__bg");
  if (bg) {
    bg.appendChild(buildSvg(1));
    bg.appendChild(buildSvg(-1));
  }

  if (reduceMotion || typeof gsap === "undefined") return;

  root.querySelectorAll(".bp-landing__svg path").forEach(function (path) {
    var len = path.getTotalLength();
    if (!len) return;
    path.style.strokeDasharray = String(len);
    var dur = 32 + Math.random() * 18;
    /* Only dash motion — avoid gsap opacity × stroke-opacity (barely visible). */
    gsap
      .timeline({ repeat: -1 })
      .fromTo(
        path,
        { strokeDashoffset: len * 0.88 },
        { strokeDashoffset: len * 0.08, duration: dur * 0.45, ease: "none" }
      )
      .to(path, {
        strokeDashoffset: len * 0.88,
        duration: dur * 0.55,
        ease: "none",
      });
  });
})();
