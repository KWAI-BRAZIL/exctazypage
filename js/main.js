(function () {
  "use strict";

  /* Altere o número com DDI + DDD + telefone, só dígitos */
  var WA_NUMBER = "5562981201160";

  function waUrl(message) {
    var text = message || "Olá! Quero conhecer a UniTV Brasil.";
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
  }

  document.querySelectorAll(".js-wa").forEach(function (el) {
    el.setAttribute("href", waUrl(el.getAttribute("data-wa")));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (el) {
        el.classList.remove("open");
        var q = el.querySelector(".faq-q");
        if (q) q.setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var name = (form.querySelector('[name="nome"]') || {}).value || "";
      var email = (form.querySelector('[name="email"]') || {}).value || "";
      var assunto = (form.querySelector('[name="assunto"]') || {}).value || "";
      var mensagem = (form.querySelector('[name="mensagem"]') || {}).value || "";
      var body =
        "Olá! Meu nome é " + name + ".\n" +
        "E-mail: " + email + "\n" +
        "Assunto: " + assunto + "\n\n" +
        mensagem;
      window.open(waUrl(body), "_blank", "noopener");
    });
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("in");
    });
    return;
  }

  var targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  targets.forEach(function (el) { io.observe(el); });
})();
