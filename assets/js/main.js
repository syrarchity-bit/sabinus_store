/* SABINUS — small, dependency-free interactions */
(function () {
  "use strict";

  /* Year in footer */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* Mobile navigation */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Scroll reveal */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* Effervescence — rising bubbles in the hero card */
  var field = document.querySelector(".bubbles");
  if (field && !reduce) {
    var COUNT = 14;
    for (var i = 0; i < COUNT; i++) {
      var b = document.createElement("span");
      b.className = "bubble";
      var size = 5 + Math.random() * 16;
      b.style.width = size + "px";
      b.style.height = size + "px";
      b.style.left = (5 + Math.random() * 90) + "%";
      b.style.animationDuration = (6 + Math.random() * 7) + "s";
      b.style.animationDelay = (-Math.random() * 9) + "s";
      field.appendChild(b);
    }
  }
})();
