/* Portfolio page UX enhancements: smooth scroll, scroll-reveal, active section nav. */
(function () {
  "use strict";

  // Smooth scroll for the sticky sub-nav, accounting for its height.
  var subnav = document.querySelector(".pf-subnav");
  document.querySelectorAll('.pf-subnav a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      var offset = (subnav ? subnav.offsetHeight : 0) + 12;
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: "smooth" });
      history.replaceState(null, "", a.getAttribute("href"));
    });
  });

  // Reveal sections/cards as they scroll into view.
  var revealEls = document.querySelectorAll(".pf-section, .pf-skill-card, .pf-cert-card, .pf-project-card, .pf-talk-card, .pf-video-card");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("pf-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { el.classList.add("pf-reveal"); io.observe(el); });
  }

  // Highlight the active section link in the sub-nav.
  var sections = Array.prototype.slice.call(document.querySelectorAll(".pf-section[id]"));
  var navLinks = {};
  document.querySelectorAll('.pf-subnav a[href^="#"]').forEach(function (a) {
    navLinks[a.getAttribute("href").slice(1)] = a;
  });
  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          Object.keys(navLinks).forEach(function (id) {
            navLinks[id].classList.toggle("active", id === entry.target.id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }
})();
