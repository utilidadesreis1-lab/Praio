// Troque aqui o numero do WhatsApp da empresa no formato internacional.
// Exemplo: 5582999999999
const WHATSAPP_NUMBER = "558281818191";

const DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Praiô Receptivo 🌴 Gostaria de informações sobre transfers e experiências.";

const HERO_ADJUST_QUERY = "ajusteHero";
const HERO_ADJUST_STORAGE_KEY = "praiou-hero-mobile-adjustments";

const HERO_MOBILE_DEFAULTS = {
  "--hero-mobile-block-offset-y": "-20px",
  "--hero-mobile-logo-size": "340px",
  "--hero-mobile-logo-offset-y": "-71px",
  "--hero-mobile-logo-offset-x": "-1px",
  "--hero-mobile-logo-gap": "0px",
  "--hero-mobile-title-size": "24px",
  "--hero-mobile-title-width": "330px",
  "--hero-mobile-title-offset-y": "-60px",
  "--hero-mobile-title-line-height": "1",
  "--hero-mobile-title-subtitle-gap": "0px",
  "--hero-mobile-subtitle-size": "14px",
  "--hero-mobile-subtitle-width": "228px",
  "--hero-mobile-subtitle-offset-y": "-49px",
  "--hero-mobile-subtitle-line-height": "1.28",
  "--hero-mobile-subtitle-cta-gap": "0px",
  "--hero-mobile-cta-width": "186px",
  "--hero-mobile-cta-height": "42px",
  "--hero-mobile-cta-font-size": "16px",
  "--hero-mobile-cta-offset-y": "-32px",
  "--hero-mobile-cta-links-gap": "16px",
  "--hero-mobile-cta-radius": "16px",
  "--hero-mobile-cta-shadow-alpha": "0.36",
  "--hero-mobile-link-group-width": "342px",
  "--hero-mobile-link-height": "44px",
  "--hero-mobile-link-font-size": "11px",
  "--hero-mobile-link-icon-size": "14px",
  "--hero-mobile-link-gap": "6px",
  "--hero-mobile-link-group-offset-y": "-37px",
  "--hero-mobile-link-radius": "16px",
  "--hero-mobile-link-shadow-alpha": "0.27",
  "--hero-mobile-bg-position-x": "42%",
  "--hero-mobile-bg-position-y": "77%",
  "--hero-mobile-bg-zoom": "134",
  "--hero-mobile-overlay-top": "0.17",
  "--hero-mobile-overlay-mid": "0.27",
  "--hero-mobile-overlay-bottom": "0.45"
};

const HERO_ADJUST_CONTROLS = [
  {
    group: "Logo",
    controls: [
      {
        label: "Tamanho",
        variable: "--hero-mobile-logo-size",
        min: 180,
        max: 560,
        step: 1,
        unit: "px"
      },
      {
        label: "Posição vertical",
        variable: "--hero-mobile-logo-offset-y",
        min: -200,
        max: 200,
        step: 1,
        unit: "px"
      },
      {
        label: "Posição horizontal",
        variable: "--hero-mobile-logo-offset-x",
        min: -150,
        max: 150,
        step: 1,
        unit: "px"
      },
      {
        label: "Distância para o título",
        variable: "--hero-mobile-logo-gap",
        min: 0,
        max: 48,
        step: 1,
        unit: "px"
      }
    ]
  },
  {
    group: "Título",
    controls: [
      {
        label: "Tamanho",
        variable: "--hero-mobile-title-size",
        min: 22,
        max: 42,
        step: 1,
        unit: "px"
      },
      {
        label: "Largura máxima",
        variable: "--hero-mobile-title-width",
        min: 220,
        max: 360,
        step: 1,
        unit: "px"
      },
      {
        label: "Posição vertical",
        variable: "--hero-mobile-title-offset-y",
        min: -60,
        max: 60,
        step: 1,
        unit: "px"
      },
      {
        label: "Entrelinhas",
        variable: "--hero-mobile-title-line-height",
        min: 0.9,
        max: 1.3,
        step: 0.01,
        unit: ""
      },
      {
        label: "Distância para o subtítulo",
        variable: "--hero-mobile-title-subtitle-gap",
        min: 0,
        max: 40,
        step: 1,
        unit: "px"
      }
    ]
  },
  {
    group: "Subtítulo",
    controls: [
      {
        label: "Tamanho",
        variable: "--hero-mobile-subtitle-size",
        min: 11,
        max: 22,
        step: 1,
        unit: "px"
      },
      {
        label: "Largura máxima",
        variable: "--hero-mobile-subtitle-width",
        min: 220,
        max: 360,
        step: 1,
        unit: "px"
      },
      {
        label: "Posição vertical",
        variable: "--hero-mobile-subtitle-offset-y",
        min: -60,
        max: 60,
        step: 1,
        unit: "px"
      },
      {
        label: "Entrelinhas",
        variable: "--hero-mobile-subtitle-line-height",
        min: 1,
        max: 2,
        step: 0.01,
        unit: ""
      },
      {
        label: "Distância para o Agendar",
        variable: "--hero-mobile-subtitle-cta-gap",
        min: 0,
        max: 56,
        step: 1,
        unit: "px"
      }
    ]
  },
  {
    group: "Botão Agendar",
    controls: [
      {
        label: "Largura",
        variable: "--hero-mobile-cta-width",
        min: 160,
        max: 320,
        step: 1,
        unit: "px"
      },
      {
        label: "Altura",
        variable: "--hero-mobile-cta-height",
        min: 40,
        max: 80,
        step: 1,
        unit: "px"
      },
      {
        label: "Tamanho da fonte",
        variable: "--hero-mobile-cta-font-size",
        min: 12,
        max: 24,
        step: 1,
        unit: "px"
      },
      {
        label: "Posição vertical",
        variable: "--hero-mobile-cta-offset-y",
        min: -60,
        max: 60,
        step: 1,
        unit: "px"
      },
      {
        label: "Distância para botões inferiores",
        variable: "--hero-mobile-cta-links-gap",
        min: 0,
        max: 36,
        step: 1,
        unit: "px"
      },
      {
        label: "Arredondamento",
        variable: "--hero-mobile-cta-radius",
        min: 16,
        max: 999,
        step: 1,
        unit: "px"
      },
      {
        label: "Intensidade da sombra",
        variable: "--hero-mobile-cta-shadow-alpha",
        min: 0.05,
        max: 0.6,
        step: 0.01,
        unit: ""
      }
    ]
  },
  {
    group: "Botões inferiores",
    controls: [
      {
        label: "Largura do grupo",
        variable: "--hero-mobile-link-group-width",
        min: 220,
        max: 360,
        step: 1,
        unit: "px"
      },
      {
        label: "Altura dos botões",
        variable: "--hero-mobile-link-height",
        min: 32,
        max: 64,
        step: 1,
        unit: "px"
      },
      {
        label: "Tamanho da fonte",
        variable: "--hero-mobile-link-font-size",
        min: 9,
        max: 18,
        step: 1,
        unit: "px"
      },
      {
        label: "Tamanho dos ícones",
        variable: "--hero-mobile-link-icon-size",
        min: 10,
        max: 24,
        step: 1,
        unit: "px"
      },
      {
        label: "Distância entre os botões",
        variable: "--hero-mobile-link-gap",
        min: 0,
        max: 20,
        step: 1,
        unit: "px"
      },
      {
        label: "Posição vertical do grupo",
        variable: "--hero-mobile-link-group-offset-y",
        min: -60,
        max: 60,
        step: 1,
        unit: "px"
      },
      {
        label: "Arredondamento",
        variable: "--hero-mobile-link-radius",
        min: 16,
        max: 999,
        step: 1,
        unit: "px"
      },
      {
        label: "Intensidade da sombra",
        variable: "--hero-mobile-link-shadow-alpha",
        min: 0.05,
        max: 0.5,
        step: 0.01,
        unit: ""
      }
    ]
  },
  {
    group: "Fundo",
    controls: [
      {
        label: "Posição horizontal",
        variable: "--hero-mobile-bg-position-x",
        min: -50,
        max: 150,
        step: 1,
        unit: "%"
      },
      {
        label: "Posição vertical",
        variable: "--hero-mobile-bg-position-y",
        min: -50,
        max: 150,
        step: 1,
        unit: "%"
      },
      {
        label: "Zoom",
        variable: "--hero-mobile-bg-zoom",
        min: 100,
        max: 180,
        step: 1,
        unit: ""
      },
      {
        label: "Overlay topo",
        variable: "--hero-mobile-overlay-top",
        min: 0,
        max: 0.3,
        step: 0.01,
        unit: ""
      },
      {
        label: "Overlay meio",
        variable: "--hero-mobile-overlay-mid",
        min: 0,
        max: 0.4,
        step: 0.01,
        unit: ""
      },
      {
        label: "Overlay base",
        variable: "--hero-mobile-overlay-bottom",
        min: 0,
        max: 0.45,
        step: 0.01,
        unit: ""
      }
    ]
  }
];

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const siteHeader = document.querySelector(".site-header");
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const whatsappButtons = document.querySelectorAll(".whatsapp-trigger");
const revealElements = document.querySelectorAll(
  [
    ".section-heading",
    ".intro-copy",
    ".profile-card",
    ".schedule-box",
    ".tour-card",
    ".catalog-hero__copy",
    ".catalog-card",
    ".transfer-card",
    ".experience-card",
    ".review-card",
    ".final-cta-box"
  ].join(", ")
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

function syncHeaderState() {
  if (!siteHeader) return;

  if (window.scrollY > 18 || siteNav?.classList.contains("is-open")) {
    siteHeader.classList.add("is-scrolled");
    return;
  }

  siteHeader.classList.remove("is-scrolled");
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

function initializeSnapCarousel({
  rootSelector,
  trackSelector,
  itemSelector,
  prevSelector,
  nextSelector,
  dotSelector
}) {
  const root = document.querySelector(rootSelector);
  if (!root) return;

  const track = root.querySelector(trackSelector);
  const prevButton = root.querySelector(prevSelector);
  const nextButton = root.querySelector(nextSelector);
  const dots = Array.from(root.querySelectorAll(dotSelector));
  const items = Array.from(track?.querySelectorAll(itemSelector) || []);

  if (!track || !items.length) return;

  const getStepSize = () => {
    if (items.length < 2) return items[0]?.getBoundingClientRect().width || 0;

    const firstRect = items[0].getBoundingClientRect();
    const secondRect = items[1].getBoundingClientRect();
    return Math.abs(secondRect.left - firstRect.left) || firstRect.width;
  };

  const getActiveIndex = () => {
    const step = getStepSize();
    if (!step) return 0;
    return Math.max(0, Math.min(items.length - 1, Math.round(track.scrollLeft / step)));
  };

  const updateState = () => {
    const activeIndex = getActiveIndex();
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth - 2);

    dots.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === activeIndex);
      dot.setAttribute("aria-current", index === activeIndex ? "true" : "false");
    });

    if (prevButton) prevButton.disabled = track.scrollLeft <= 4;
    if (nextButton) nextButton.disabled = track.scrollLeft >= maxScroll;
  };

  const scrollToItem = (index) => {
    items[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest"
    });
  };

  prevButton?.addEventListener("click", () => {
    scrollToItem(Math.max(0, getActiveIndex() - 1));
  });

  nextButton?.addEventListener("click", () => {
    scrollToItem(Math.min(items.length - 1, getActiveIndex() + 1));
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      scrollToItem(index);
    });
  });

  let frame = null;
  const scheduleUpdate = () => {
    if (frame) window.cancelAnimationFrame(frame);
    frame = window.requestAnimationFrame(updateState);
  };

  track.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  updateState();
}

function initializeToursCarousel() {
  initializeSnapCarousel({
    rootSelector: '[data-carousel="tours"]',
    trackSelector: "[data-carousel-track]",
    itemSelector: ".carousel-tour-card",
    prevSelector: "[data-carousel-prev]",
    nextSelector: "[data-carousel-next]",
    dotSelector: ".tours-dot"
  });
}

function initializeHomeToursCarousel() {
  initializeSnapCarousel({
    rootSelector: '[data-carousel="home-tours"]',
    trackSelector: "[data-carousel-track]",
    itemSelector: "[data-carousel-item]",
    prevSelector: "[data-carousel-prev]",
    nextSelector: "[data-carousel-next]",
    dotSelector: ".tours-dot"
  });
}

function initializeMaragogiGallery() {
  initializeSnapCarousel({
    rootSelector: '[data-gallery="maragogi"]',
    trackSelector: "[data-gallery-track]",
    itemSelector: ".tour-gallery-slide",
    prevSelector: "[data-gallery-prev]",
    nextSelector: "[data-gallery-next]",
    dotSelector: ".tour-gallery-dot"
  });
}

function initializeMaragogiLightbox() {
  const gallery = document.querySelector('[data-gallery="maragogi"]');
  if (!gallery) return;

  const images = Array.from(gallery.querySelectorAll("[data-lightbox-image]"));
  if (!images.length) return;

  const overlay = document.createElement("div");
  overlay.className = "tour-lightbox";
  overlay.hidden = true;
  overlay.innerHTML = `
    <div class="tour-lightbox__dialog" role="dialog" aria-modal="true" aria-label="Galeria de Maragogi em tela cheia">
      <button class="tour-lightbox__close" type="button" aria-label="Fechar galeria">
        <span aria-hidden="true">×</span>
      </button>
      <button class="tour-lightbox__arrow tour-lightbox__arrow--prev" type="button" aria-label="Imagem anterior">
        <span aria-hidden="true">‹</span>
      </button>
      <div class="tour-lightbox__image-wrap">
        <img class="tour-lightbox__image" src="" alt="" />
      </div>
      <button class="tour-lightbox__arrow tour-lightbox__arrow--next" type="button" aria-label="Próxima imagem">
        <span aria-hidden="true">›</span>
      </button>
      <div class="tour-lightbox__counter" aria-live="polite"></div>
    </div>
  `;

  document.body.appendChild(overlay);

  const dialog = overlay.querySelector(".tour-lightbox__dialog");
  const image = overlay.querySelector(".tour-lightbox__image");
  const counter = overlay.querySelector(".tour-lightbox__counter");
  const closeButton = overlay.querySelector(".tour-lightbox__close");
  const prevButton = overlay.querySelector(".tour-lightbox__arrow--prev");
  const nextButton = overlay.querySelector(".tour-lightbox__arrow--next");

  let activeIndex = 0;

  const render = () => {
    const current = images[activeIndex];
    if (!current) return;

    image.src = current.currentSrc || current.src;
    image.alt = current.alt || "Imagem de Maragogi";
    counter.textContent = `${activeIndex + 1} / ${images.length}`;
  };

  const open = (index) => {
    activeIndex = index;
    render();
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    overlay.hidden = true;
    document.body.style.overflow = "";
  };

  const goTo = (direction) => {
    activeIndex = (activeIndex + direction + images.length) % images.length;
    render();
  };

  images.forEach((img, index) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => open(index));
  });

  closeButton?.addEventListener("click", close);
  prevButton?.addEventListener("click", () => goTo(-1));
  nextButton?.addEventListener("click", () => goTo(1));

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      close();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (overlay.hidden) return;

    if (event.key === "Escape") {
      close();
    } else if (event.key === "ArrowLeft") {
      goTo(-1);
    } else if (event.key === "ArrowRight") {
      goTo(1);
    }
  });
}

function initializeTourAccordion() {
  const accordions = document.querySelectorAll("[data-tour-accordion]");
  if (!accordions.length) return;

  accordions.forEach((accordion) => {
    const items = Array.from(accordion.querySelectorAll("[data-tour-item]"));

    const setItemState = (item, isOpen) => {
      const toggle = item.querySelector("[data-tour-toggle]");
      const content = item.querySelector("[data-tour-content]");
      if (!toggle || !content) return;

      item.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      content.hidden = !isOpen;
    };

    const openItemFromHash = () => {
      const hash = window.location.hash?.replace(/^#/, "");
      if (!hash) return;

      const target = items.find((item) => item.id === hash);
      if (!target) return;

      items.forEach((candidate) => {
        setItemState(candidate, candidate === target);
      });

      window.setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    };

    items.forEach((item) => {
      const toggle = item.querySelector("[data-tour-toggle]");
      if (!toggle) return;

      toggle.addEventListener("click", () => {
        const shouldOpen = !item.classList.contains("is-open");

        items.forEach((candidate) => {
          if (candidate !== item) {
            setItemState(candidate, false);
          }
        });

        setItemState(item, shouldOpen);
      });
    });

    openItemFromHash();
    window.addEventListener("hashchange", openItemFromHash);
  });
}

function getHeroAdjustMode() {
  return new URLSearchParams(window.location.search).get(HERO_ADJUST_QUERY) === "1";
}

function readStoredHeroAdjustments() {
  try {
    const raw = window.localStorage.getItem(HERO_ADJUST_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    return {};
  }
}

function persistHeroAdjustments(values) {
  try {
    window.localStorage.setItem(HERO_ADJUST_STORAGE_KEY, JSON.stringify(values));
  } catch (error) {
    // Ignore storage issues in private mode or restricted browsers.
  }
}

function applyHeroAdjustmentVariables(values) {
  Object.entries(values).forEach(([variable, value]) => {
    document.documentElement.style.setProperty(variable, value);
  });
}

function getCurrentHeroAdjustmentValues() {
  const styles = getComputedStyle(document.documentElement);
  const values = {};

  Object.keys(HERO_MOBILE_DEFAULTS).forEach((variable) => {
    values[variable] =
      document.documentElement.style.getPropertyValue(variable).trim() ||
      styles.getPropertyValue(variable).trim() ||
      HERO_MOBILE_DEFAULTS[variable];
  });

  return values;
}

function formatHeroAdjustValue(value, unit) {
  if (!unit) return String(value);
  return `${value}${unit}`;
}

function parseHeroAdjustValue(rawValue, unit) {
  if (!unit) return rawValue;
  return rawValue.replace(unit, "").trim();
}

function buildHeroAdjustCss(values) {
  const lines = Object.keys(HERO_MOBILE_DEFAULTS).map(
    (variable) => `  ${variable}: ${values[variable]};`
  );

  return `:root {\n${lines.join("\n")}\n}`;
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();

  const success = document.execCommand("copy");
  textarea.remove();
  return success;
}

function updateHeroAdjustPreview(panel, values) {
  const output = panel.querySelector("[data-hero-adjust-output]");
  if (!output) return;
  output.textContent = buildHeroAdjustCss(values);
}

function createHeroAdjustControl(control, values, onChange) {
  const wrapper = document.createElement("label");
  wrapper.className = "hero-adjust-control";
  wrapper.setAttribute("data-variable", control.variable);

  const labelRow = document.createElement("span");
  labelRow.className = "hero-adjust-control-row";

  const label = document.createElement("span");
  label.className = "hero-adjust-control-label";
  label.textContent = control.label;

  const value = document.createElement("span");
  value.className = "hero-adjust-control-value";

  const input = document.createElement("input");
  input.className = "hero-adjust-control-input";
  input.type = "range";
  input.min = String(control.min);
  input.max = String(control.max);
  input.step = String(control.step);
  input.value = parseHeroAdjustValue(values[control.variable], control.unit);

  const updateValueLabel = () => {
    value.textContent = formatHeroAdjustValue(input.value, control.unit);
  };

  updateValueLabel();

  input.addEventListener("input", () => {
    updateValueLabel();
    onChange(control.variable, formatHeroAdjustValue(input.value, control.unit));
  });

  labelRow.append(label, value);
  wrapper.append(labelRow, input);
  return wrapper;
}

function clampHeroAdjustPanelPosition(panel, position) {
  const panelRect = panel.getBoundingClientRect();
  const visibleMarginX = 56;
  const visibleMarginY = 56;
  const minX = visibleMarginX - panelRect.width;
  const maxX = window.innerWidth - visibleMarginX;
  const minY = 8;
  const maxY = window.innerHeight - visibleMarginY;

  return {
    x: Math.min(Math.max(position.x, minX), maxX),
    y: Math.min(Math.max(position.y, minY), Math.max(minY, maxY))
  };
}

function setHeroAdjustPanelPosition(panel, position) {
  const nextPosition = clampHeroAdjustPanelPosition(panel, position);
  panel.style.left = `${nextPosition.x}px`;
  panel.style.top = `${nextPosition.y}px`;
  panel.style.right = "auto";
  panel.style.bottom = "auto";
}

function enableHeroAdjustPanelDrag(panel, handle) {
  let dragState = null;

  const stopDragging = (event) => {
    if (event?.pointerId != null) {
      handle.releasePointerCapture?.(event.pointerId);
    }
    dragState = null;
    panel.classList.remove("is-dragging");
  };

  const updateDragging = (event) => {
    if (!dragState) return;

    setHeroAdjustPanelPosition(panel, {
      x: event.clientX - dragState.offsetX,
      y: event.clientY - dragState.offsetY
    });
  };

  handle.addEventListener("pointerdown", (event) => {
    if (
      event.target.closest("button") ||
      event.target.closest("input") ||
      event.target.closest("summary")
    ) {
      return;
    }

    const rect = panel.getBoundingClientRect();
    dragState = {
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top
    };

    panel.classList.add("is-dragging");
    handle.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  });

  window.addEventListener("pointermove", updateDragging);
  window.addEventListener("pointerup", stopDragging);
  window.addEventListener("pointercancel", stopDragging);

  window.addEventListener("resize", () => {
    if (panel.hidden) return;
    const rect = panel.getBoundingClientRect();
    setHeroAdjustPanelPosition(panel, { x: rect.left, y: rect.top });
  });
}

function createHeroAdjustPanel() {
  const body = document.body;
  const currentValues = {
    ...HERO_MOBILE_DEFAULTS,
    ...readStoredHeroAdjustments()
  };

  applyHeroAdjustmentVariables(currentValues);
  body.classList.add("hero-adjust-mode");

  const panel = document.createElement("aside");
  panel.className = "hero-adjust-panel";
  panel.innerHTML = `
    <div class="hero-adjust-panel__header">
      <div>
        <p class="hero-adjust-panel__eyebrow">Ferramenta temporária</p>
        <h2>Ajuste Hero Mobile</h2>
      </div>
      <span class="hero-adjust-panel__hint">Ative com ?ajusteHero=1</span>
    </div>
    <div class="hero-adjust-panel__groups" data-hero-adjust-groups></div>
    <div class="hero-adjust-panel__actions">
      <button type="button" class="hero-adjust-panel__button" data-hero-adjust-reset>Resetar ajustes</button>
      <button type="button" class="hero-adjust-panel__button hero-adjust-panel__button--primary" data-hero-adjust-copy>Copiar CSS final</button>
    </div>
    <pre class="hero-adjust-panel__output" data-hero-adjust-output></pre>
  `;

  const groupsContainer = panel.querySelector("[data-hero-adjust-groups]");
  const values = { ...currentValues };

  const onChange = (variable, value) => {
    values[variable] = value;
    document.documentElement.style.setProperty(variable, value);
    persistHeroAdjustments(values);
    updateHeroAdjustPreview(panel, values);
  };

  HERO_ADJUST_CONTROLS.forEach((group) => {
    const section = document.createElement("section");
    section.className = "hero-adjust-group";

    const title = document.createElement("h3");
    title.className = "hero-adjust-group__title";
    title.textContent = group.group;
    section.appendChild(title);

    group.controls.forEach((control) => {
      section.appendChild(createHeroAdjustControl(control, values, onChange));
    });

    groupsContainer.appendChild(section);
  });

  const resetButton = panel.querySelector("[data-hero-adjust-reset]");
  const copyButton = panel.querySelector("[data-hero-adjust-copy]");

  resetButton?.addEventListener("click", () => {
    Object.entries(HERO_MOBILE_DEFAULTS).forEach(([variable, value]) => {
      values[variable] = value;
      document.documentElement.style.setProperty(variable, value);
    });

    panel.querySelectorAll(".hero-adjust-control").forEach((controlElement) => {
      const variable = controlElement.getAttribute("data-variable");
      const meta = HERO_ADJUST_CONTROLS.flatMap((group) => group.controls).find(
        (item) => item.variable === variable
      );
      const input = controlElement.querySelector(".hero-adjust-control-input");
      const valueElement = controlElement.querySelector(".hero-adjust-control-value");

      if (!meta || !input || !valueElement) return;
      input.value = parseHeroAdjustValue(HERO_MOBILE_DEFAULTS[meta.variable], meta.unit);
      valueElement.textContent = HERO_MOBILE_DEFAULTS[meta.variable];
    });

    persistHeroAdjustments(values);
    updateHeroAdjustPreview(panel, values);
  });

  copyButton?.addEventListener("click", async () => {
    const css = buildHeroAdjustCss(values);
    const originalText = copyButton.textContent;

    try {
      await copyTextToClipboard(css);
      copyButton.textContent = "CSS copiado";
    } catch (error) {
      copyButton.textContent = "Falha ao copiar";
    }

    updateHeroAdjustPreview(panel, values);
    window.setTimeout(() => {
      copyButton.textContent = originalText;
    }, 1800);
  });

  updateHeroAdjustPreview(panel, values);
  body.appendChild(panel);
}

function createHeroAdjustTool() {
  const body = document.body;
  const currentValues = {
    ...HERO_MOBILE_DEFAULTS,
    ...readStoredHeroAdjustments()
  };

  applyHeroAdjustmentVariables(currentValues);
  body.classList.add("hero-adjust-mode");

  const launcher = document.createElement("button");
  launcher.type = "button";
  launcher.className = "hero-adjust-launcher";
  launcher.textContent = "Ajustar Hero";

  const panel = document.createElement("aside");
  panel.className = "hero-adjust-panel";
  panel.hidden = true;
  panel.innerHTML = `
    <div class="hero-adjust-panel__header" data-hero-adjust-drag-handle>
      <div class="hero-adjust-panel__heading">
        <p class="hero-adjust-panel__eyebrow">Ferramenta temporaria</p>
        <h2>Ajuste Hero Mobile</h2>
        <span class="hero-adjust-panel__hint">Arraste pelo topo</span>
      </div>
      <button type="button" class="hero-adjust-panel__close" data-hero-adjust-close>Ocultar painel</button>
    </div>
    <div class="hero-adjust-panel__groups" data-hero-adjust-groups></div>
    <div class="hero-adjust-panel__actions">
      <button type="button" class="hero-adjust-panel__button" data-hero-adjust-reset>Resetar ajustes</button>
      <button type="button" class="hero-adjust-panel__button hero-adjust-panel__button--primary" data-hero-adjust-copy>Copiar CSS final</button>
    </div>
    <pre class="hero-adjust-panel__output" data-hero-adjust-output></pre>
  `;

  const groupsContainer = panel.querySelector("[data-hero-adjust-groups]");
  const closeButton = panel.querySelector("[data-hero-adjust-close]");
  const resetButton = panel.querySelector("[data-hero-adjust-reset]");
  const copyButton = panel.querySelector("[data-hero-adjust-copy]");
  const dragHandle = panel.querySelector("[data-hero-adjust-drag-handle]");
  const values = { ...currentValues };

  const onChange = (variable, value) => {
    values[variable] = value;
    document.documentElement.style.setProperty(variable, value);
    persistHeroAdjustments(values);
    updateHeroAdjustPreview(panel, values);
  };

  HERO_ADJUST_CONTROLS.forEach((group, index) => {
    const section = document.createElement("details");
    section.className = "hero-adjust-group";
    section.open = index === 0;

    const title = document.createElement("summary");
    title.className = "hero-adjust-group__title";
    title.textContent = group.group;
    section.appendChild(title);

    const content = document.createElement("div");
    content.className = "hero-adjust-group__content";

    group.controls.forEach((control) => {
      content.appendChild(createHeroAdjustControl(control, values, onChange));
    });

    section.appendChild(content);
    groupsContainer.appendChild(section);
  });

  resetButton?.addEventListener("click", () => {
    Object.entries(HERO_MOBILE_DEFAULTS).forEach(([variable, value]) => {
      values[variable] = value;
      document.documentElement.style.setProperty(variable, value);
    });

    panel.querySelectorAll(".hero-adjust-control").forEach((controlElement) => {
      const variable = controlElement.getAttribute("data-variable");
      const meta = HERO_ADJUST_CONTROLS.flatMap((group) => group.controls).find(
        (item) => item.variable === variable
      );
      const input = controlElement.querySelector(".hero-adjust-control-input");
      const valueElement = controlElement.querySelector(".hero-adjust-control-value");

      if (!meta || !input || !valueElement) return;
      input.value = parseHeroAdjustValue(HERO_MOBILE_DEFAULTS[meta.variable], meta.unit);
      valueElement.textContent = HERO_MOBILE_DEFAULTS[meta.variable];
    });

    persistHeroAdjustments(values);
    updateHeroAdjustPreview(panel, values);
  });

  copyButton?.addEventListener("click", async () => {
    const css = buildHeroAdjustCss(values);
    const originalText = copyButton.textContent;

    try {
      await copyTextToClipboard(css);
      copyButton.textContent = "CSS copiado";
    } catch (error) {
      copyButton.textContent = "Falha ao copiar";
    }

    updateHeroAdjustPreview(panel, values);
    window.setTimeout(() => {
      copyButton.textContent = originalText;
    }, 1800);
  });

  const togglePanel = (isOpen) => {
    panel.hidden = !isOpen;
    launcher.hidden = isOpen;

    if (isOpen) {
      const rect = panel.getBoundingClientRect();
      if (rect.width && rect.height) {
        setHeroAdjustPanelPosition(panel, { x: rect.left, y: rect.top });
      }
    }
  };

  launcher.addEventListener("click", () => {
    togglePanel(true);
  });

  closeButton?.addEventListener("click", () => {
    togglePanel(false);
  });

  updateHeroAdjustPreview(panel, values);
  body.append(launcher, panel);

  requestAnimationFrame(() => {
    setHeroAdjustPanelPosition(panel, {
      x: window.innerWidth - 344,
      y: window.innerHeight - 620
    });
  });

  if (dragHandle) {
    enableHeroAdjustPanelDrag(panel, dragHandle);
  }
}

if (navToggle) {
  navToggle.addEventListener("click", () => {
    toggleMobileMenu();
    syncHeaderState();
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    if (!targetId) return;

    smoothScrollTo(targetId);
    closeMobileMenu();
    syncHeaderState();
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

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });

document.addEventListener("click", (event) => {
  if (!siteNav || !navToggle) return;
  if (!siteNav.classList.contains("is-open")) return;

  const clickedInsideMenu = siteNav.contains(event.target);
  const clickedToggle = navToggle.contains(event.target);

  if (!clickedInsideMenu && !clickedToggle) {
    closeMobileMenu();
    syncHeaderState();
  }
});

if (getHeroAdjustMode()) {
  createHeroAdjustTool();
}

initializeToursCarousel();
initializeHomeToursCarousel();
initializeMaragogiGallery();
initializeMaragogiLightbox();
initializeTourAccordion();
