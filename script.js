// Troque aqui o número do WhatsApp da empresa no formato internacional.
// Exemplo: 5582999999999
const WHATSAPP_NUMBER = "5582000000000";

const DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Praiou Receptivo 🌴 Gostaria de informações sobre os passeios.";

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const whatsappButtons = document.querySelectorAll(".whatsapp-trigger");
const revealElements = document.querySelectorAll(
  ".section-heading, .info-card, .tour-card, .reason-card, .review-card, .extra-pill, .final-cta-box, .intro-copy"
);

function buildWhatsAppLink(message) {
  const text = encodeURIComponent(message || DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

function openWhatsApp(message) {
  window.open(buildWhatsAppLink(message), "_blank", "noopener");
}

function closeMobileMenu() {
  if (!navToggle || !siteNav) return;

  navToggle.setAttribute("aria-expanded", "false");
  siteNav.classList.remove("is-open");
}

function toggleMobileMenu() {
  if (!navToggle || !siteNav) return;

  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

function smoothScrollTo(targetId) {
  const target = document.querySelector(targetId);
  if (!target) return;

  const headerOffset = document.querySelector(".site-header")?.offsetHeight || 0;
  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset + 1;

  window.scrollTo({
    top,
    behavior: "smooth"
  });
}

if (navToggle) {
  navToggle.addEventListener("click", toggleMobileMenu);
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    if (!targetId) return;

    smoothScrollTo(targetId);
    closeMobileMenu();
  });
});

whatsappButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const customMessage = button.dataset.message || DEFAULT_MESSAGE;
    openWhatsApp(customMessage);
  });
});

document.querySelectorAll('a[href^="#"]:not(.site-nav a)').forEach((link) => {
  if (link.classList.contains("whatsapp-trigger")) return;

  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    event.preventDefault();
    smoothScrollTo(targetId);
  });
});

// Futuramente, quando adicionar imagens reais, você pode criar classes com
// background-image no CSS ou inserir tags <img> nas seções desejadas.
revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

document.addEventListener("click", (event) => {
  if (!siteNav || !navToggle) return;
  if (!siteNav.classList.contains("is-open")) return;

  const clickedInsideMenu = siteNav.contains(event.target);
  const clickedToggle = navToggle.contains(event.target);

  if (!clickedInsideMenu && !clickedToggle) {
    closeMobileMenu();
  }
});
