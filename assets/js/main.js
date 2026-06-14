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

/* Privacy notice — this site uses no tracking cookies; remembers dismissal only */
(function () {
  "use strict";
  try { if (localStorage.getItem("kn-notice") === "ok") return; } catch (e) {}
  function mount() {
    var bar = document.createElement("div");
    bar.className = "cookie-notice";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", "Privacy notice");
    bar.innerHTML =
      '<p>This site uses <strong>no tracking or advertising cookies</strong>. We only store, in your browser, the fact that you have seen this notice. <a href="cookies.html">Cookie&nbsp;Policy</a></p>' +
      '<button class="btn btn-light" type="button">Got it</button>';
    document.body.appendChild(bar);
    bar.querySelector("button").addEventListener("click", function () {
      try { localStorage.setItem("kn-notice", "ok"); } catch (e) {}
      bar.remove();
    });
  }
  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);
})();
