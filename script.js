// Troque aqui o numero do WhatsApp da empresa no formato internacional.
// Exemplo: 5582999999999
const WHATSAPP_NUMBER = "558281818191";

const DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Praiô Receptivo 🌴 Gostaria de fazer um orçamento.";

const HERO_ADJUST_QUERY = "ajusteHero";
const HERO_ADJUST_STORAGE_KEY = "praiou-hero-mobile-adjustments";
const MARAGOGI_CARD_ADJUST_QUERY = "ajusteCardMaragogi";
const MARAGOGI_CARD_ADJUST_STORAGE_KEY = "praiou-maragogi-card-adjustments";
const MILAGRES_CARD_ADJUST_QUERY = "ajusteCardMilagres";
const MILAGRES_CARD_ADJUST_STORAGE_KEY = "praio-ajuste-card-milagres";
const GUNGA_CARD_ADJUST_QUERY = "ajusteCardGunga";
const GUNGA_CARD_ADJUST_STORAGE_KEY = "praio-ajuste-card-gunga";

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

const MARAGOGI_CARD_DEFAULTS = {
  "--maragogi-card-stage-width": "100%",
  "--maragogi-card-stage-height": "100%",
  "--maragogi-card-stage-offset-y": "0px",
  "--maragogi-bg-position-x": "69%",
  "--maragogi-bg-position-y": "99%",
  "--maragogi-bg-zoom": "113%",
  "--maragogi-badge-x": "-4%",
  "--maragogi-badge-y": "1.5%",
  "--maragogi-badge-width": "60.9%",
  "--maragogi-badge-height": "13.5%",
  "--maragogi-badge-scale": "0.85",
  "--maragogi-title-x": "16%",
  "--maragogi-title-y": "54.2%",
  "--maragogi-title-width": "62.5%",
  "--maragogi-title-height": "29.2%",
  "--maragogi-title-scale": "1.07",
  "--maragogi-title-shadow-x": "10.5%",
  "--maragogi-title-shadow-y": "59.9%",
  "--maragogi-title-shadow-width": "78.5%",
  "--maragogi-title-shadow-height": "20.2%",
  "--maragogi-title-shadow-opacity": "0.68",
  "--maragogi-title-shadow-blur": "16px",
  "--maragogi-title-shadow-radius": "28px",
  "--maragogi-accent-x": "15.2%",
  "--maragogi-accent-y": "70.5%",
  "--maragogi-accent-width": "25%",
  "--maragogi-accent-height": "6.6%",
  "--maragogi-accent-scale": "1.37",
  "--maragogi-icons-scale": "1.08",
  "--maragogi-wave-icon-x": "4.8%",
  "--maragogi-wave-icon-y": "74.2%",
  "--maragogi-wave-icon-width": "11.2%",
  "--maragogi-wave-icon-height": "18%",
  "--maragogi-wave-text-x": "16%",
  "--maragogi-wave-text-y": "81%",
  "--maragogi-wave-text-width": "17.7%",
  "--maragogi-wave-text-font-size": "9px",
  "--maragogi-boat-icon-x": "33.7%",
  "--maragogi-boat-icon-y": "74.2%",
  "--maragogi-boat-icon-width": "10.8%",
  "--maragogi-boat-icon-height": "18%",
  "--maragogi-boat-text-x": "45.3%",
  "--maragogi-boat-text-y": "81%",
  "--maragogi-boat-text-width": "15.7%",
  "--maragogi-boat-text-font-size": "9px",
  "--maragogi-palm-icon-x": "67%",
  "--maragogi-palm-icon-y": "74.2%",
  "--maragogi-palm-icon-width": "7.7%",
  "--maragogi-palm-icon-height": "18%",
  "--maragogi-palm-text-x": "76%",
  "--maragogi-palm-text-y": "81.2%",
  "--maragogi-palm-text-width": "17%",
  "--maragogi-palm-text-font-size": "9px",
  "--maragogi-separator-1-x": "30.5%",
  "--maragogi-separator-1-y": "80%",
  "--maragogi-separator-1-width": "2.1px",
  "--maragogi-separator-1-height": "5%",
  "--maragogi-separator-1-opacity": "1",
  "--maragogi-separator-2-x": "63.6%",
  "--maragogi-separator-2-y": "80%",
  "--maragogi-separator-2-width": "2.1px",
  "--maragogi-separator-2-height": "5%",
  "--maragogi-separator-2-opacity": "1",
  "--maragogi-info-button-x": "-0.4%",
  "--maragogi-info-button-y": "85%",
  "--maragogi-info-button-width": "48%",
  "--maragogi-info-button-height": "15.7%",
  "--maragogi-info-hotspot-x": "3.9%",
  "--maragogi-info-hotspot-y": "87.1%",
  "--maragogi-info-hotspot-width": "38.9%",
  "--maragogi-info-hotspot-height": "8.7%",
  "--maragogi-photos-button-x": "44.3%",
  "--maragogi-photos-button-y": "77.6%",
  "--maragogi-photos-button-width": "52%",
  "--maragogi-photos-button-height": "30%",
  "--maragogi-photos-hotspot-x": "46.5%",
  "--maragogi-photos-hotspot-y": "86.8%",
  "--maragogi-photos-hotspot-width": "49.5%",
  "--maragogi-photos-hotspot-height": "12.6%",
  "--maragogi-overlay-mid-stop": "72%",
  "--maragogi-overlay-bottom-start": "81%",
  "--maragogi-overlay-top-opacity": "0.27",
  "--maragogi-overlay-mid-opacity": "0",
  "--maragogi-overlay-bottom-opacity": "1"
};

const MARAGOGI_CARD_ADJUST_CONTROLS = [
  {
    group: "Imagem de fundo",
    controls: [
      { label: "Posicao X", variable: "--maragogi-bg-position-x", min: -20, max: 120, step: 1, unit: "%" },
      { label: "Posicao Y", variable: "--maragogi-bg-position-y", min: -20, max: 120, step: 1, unit: "%" },
      { label: "Zoom", variable: "--maragogi-bg-zoom", min: 80, max: 140, step: 1, unit: "%" }
    ]
  },
  {
    group: "Card completo",
    controls: [
      { label: "Largura", variable: "--maragogi-card-stage-width", min: 70, max: 115, step: 0.5, unit: "%" },
      { label: "Altura", variable: "--maragogi-card-stage-height", min: 70, max: 115, step: 0.5, unit: "%" },
      { label: "Posicao vertical", variable: "--maragogi-card-stage-offset-y", min: -120, max: 120, step: 1, unit: "px" }
    ]
  },
  {
    group: "Selo",
    controls: [
      { label: "X", variable: "--maragogi-badge-x", min: -10, max: 90, step: 0.1, unit: "%" },
      { label: "Y", variable: "--maragogi-badge-y", min: -10, max: 90, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--maragogi-badge-width", min: 10, max: 90, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--maragogi-badge-height", min: 3, max: 30, step: 0.1, unit: "%" },
      { label: "Escala", variable: "--maragogi-badge-scale", min: 0.4, max: 2, step: 0.01, unit: "" }
    ]
  },
  {
    group: "Titulo Maragogi",
    controls: [
      { label: "X", variable: "--maragogi-title-x", min: -10, max: 90, step: 0.1, unit: "%" },
      { label: "Y", variable: "--maragogi-title-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--maragogi-title-width", min: 10, max: 90, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--maragogi-title-height", min: 4, max: 35, step: 0.1, unit: "%" },
      { label: "Escala", variable: "--maragogi-title-scale", min: 0.4, max: 2, step: 0.01, unit: "" }
    ]
  },
  {
    group: "Sombra Maragogi",
    controls: [
      { label: "X", variable: "--maragogi-title-shadow-x", min: -10, max: 90, step: 0.1, unit: "%" },
      { label: "Y", variable: "--maragogi-title-shadow-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--maragogi-title-shadow-width", min: 8, max: 90, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--maragogi-title-shadow-height", min: 2, max: 25, step: 0.1, unit: "%" },
      { label: "Opacidade", variable: "--maragogi-title-shadow-opacity", min: 0, max: 1, step: 0.01, unit: "" },
      { label: "Blur", variable: "--maragogi-title-shadow-blur", min: 0, max: 60, step: 1, unit: "px" },
      { label: "Arredondamento", variable: "--maragogi-title-shadow-radius", min: 0, max: 80, step: 1, unit: "px" }
    ]
  },
  {
    group: "Traco azul",
    controls: [
      { label: "X", variable: "--maragogi-accent-x", min: -10, max: 90, step: 0.1, unit: "%" },
      { label: "Y", variable: "--maragogi-accent-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--maragogi-accent-width", min: 4, max: 60, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--maragogi-accent-height", min: 1, max: 12, step: 0.1, unit: "%" },
      { label: "Escala", variable: "--maragogi-accent-scale", min: 0.4, max: 2, step: 0.01, unit: "" }
    ]
  },
  {
    group: "Escala geral dos icones",
    controls: [
      { label: "Escala geral", variable: "--maragogi-icons-scale", min: 0.5, max: 2.4, step: 0.01, unit: "" }
    ]
  },
  {
    group: "Icone onda",
    controls: [
      { label: "X", variable: "--maragogi-wave-icon-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Y", variable: "--maragogi-wave-icon-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--maragogi-wave-icon-width", min: 4, max: 18, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--maragogi-wave-icon-height", min: 4, max: 18, step: 0.1, unit: "%" }
    ]
  },
  {
    group: "Texto Piscinas naturais",
    controls: [
      { label: "X", variable: "--maragogi-wave-text-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Y", variable: "--maragogi-wave-text-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--maragogi-wave-text-width", min: 4, max: 35, step: 0.1, unit: "%" },
      { label: "Fonte", variable: "--maragogi-wave-text-font-size", min: 8, max: 28, step: 1, unit: "px" }
    ]
  },
  {
    group: "Icone barco",
    controls: [
      { label: "X", variable: "--maragogi-boat-icon-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Y", variable: "--maragogi-boat-icon-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--maragogi-boat-icon-width", min: 4, max: 18, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--maragogi-boat-icon-height", min: 4, max: 18, step: 0.1, unit: "%" }
    ]
  },
  {
    group: "Texto Passeio de lancha",
    controls: [
      { label: "X", variable: "--maragogi-boat-text-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Y", variable: "--maragogi-boat-text-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--maragogi-boat-text-width", min: 4, max: 35, step: 0.1, unit: "%" },
      { label: "Fonte", variable: "--maragogi-boat-text-font-size", min: 8, max: 28, step: 1, unit: "px" }
    ]
  },
  {
    group: "Icone coqueiro",
    controls: [
      { label: "X", variable: "--maragogi-palm-icon-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Y", variable: "--maragogi-palm-icon-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--maragogi-palm-icon-width", min: 4, max: 18, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--maragogi-palm-icon-height", min: 4, max: 18, step: 0.1, unit: "%" }
    ]
  },
  {
    group: "Texto Caribe Brasileiro",
    controls: [
      { label: "X", variable: "--maragogi-palm-text-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Y", variable: "--maragogi-palm-text-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--maragogi-palm-text-width", min: 4, max: 35, step: 0.1, unit: "%" },
      { label: "Fonte", variable: "--maragogi-palm-text-font-size", min: 8, max: 28, step: 1, unit: "px" }
    ]
  },
  {
    group: "Separador 1",
    controls: [
      { label: "X", variable: "--maragogi-separator-1-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Y", variable: "--maragogi-separator-1-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--maragogi-separator-1-width", min: 1, max: 6, step: 0.1, unit: "px" },
      { label: "Altura", variable: "--maragogi-separator-1-height", min: 2, max: 20, step: 0.1, unit: "%" },
      { label: "Opacidade", variable: "--maragogi-separator-1-opacity", min: 0, max: 1, step: 0.01, unit: "" }
    ]
  },
  {
    group: "Separador 2",
    controls: [
      { label: "X", variable: "--maragogi-separator-2-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Y", variable: "--maragogi-separator-2-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--maragogi-separator-2-width", min: 1, max: 6, step: 0.1, unit: "px" },
      { label: "Altura", variable: "--maragogi-separator-2-height", min: 2, max: 20, step: 0.1, unit: "%" },
      { label: "Opacidade", variable: "--maragogi-separator-2-opacity", min: 0, max: 1, step: 0.01, unit: "" }
    ]
  },
  {
    group: "Botao Saiba mais",
    controls: [
      { label: "X", variable: "--maragogi-info-button-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Y", variable: "--maragogi-info-button-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--maragogi-info-button-width", min: 10, max: 80, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--maragogi-info-button-height", min: 4, max: 25, step: 0.1, unit: "%" }
    ]
  },
  {
    group: "Clique Saiba mais",
    controls: [
      { label: "X", variable: "--maragogi-info-hotspot-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Y", variable: "--maragogi-info-hotspot-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--maragogi-info-hotspot-width", min: 10, max: 80, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--maragogi-info-hotspot-height", min: 4, max: 25, step: 0.1, unit: "%" }
    ]
  },
  {
    group: "Botao Ver fotos",
    controls: [
      { label: "X", variable: "--maragogi-photos-button-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Y", variable: "--maragogi-photos-button-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--maragogi-photos-button-width", min: 10, max: 90, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--maragogi-photos-button-height", min: 4, max: 30, step: 0.1, unit: "%" }
    ]
  },
  {
    group: "Clique Ver fotos",
    controls: [
      { label: "X", variable: "--maragogi-photos-hotspot-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Y", variable: "--maragogi-photos-hotspot-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--maragogi-photos-hotspot-width", min: 10, max: 90, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--maragogi-photos-hotspot-height", min: 4, max: 30, step: 0.1, unit: "%" }
    ]
  },
  {
    group: "Degrade",
    controls: [
      { label: "Meio", variable: "--maragogi-overlay-mid-stop", min: 10, max: 90, step: 1, unit: "%" },
      { label: "Base", variable: "--maragogi-overlay-bottom-start", min: 20, max: 98, step: 1, unit: "%" },
      { label: "Opacidade topo", variable: "--maragogi-overlay-top-opacity", min: 0, max: 0.6, step: 0.01, unit: "" },
      { label: "Opacidade meio", variable: "--maragogi-overlay-mid-opacity", min: 0, max: 0.8, step: 0.01, unit: "" },
      { label: "Opacidade base", variable: "--maragogi-overlay-bottom-opacity", min: 0.1, max: 1, step: 0.01, unit: "" }
    ]
  }
];

const MILAGRES_CARD_DEFAULTS = {
  "--milagres-card-stage-width": "100%",
  "--milagres-card-stage-height": "100%",
  "--milagres-card-stage-offset-y": "0px",
  "--milagres-bg-position-x": "76%",
  "--milagres-bg-position-y": "38%",
  "--milagres-bg-zoom": "118%",
  "--milagres-badge-x": "-4.6%",
  "--milagres-badge-y": "1.5%",
  "--milagres-badge-width": "60.5%",
  "--milagres-badge-height": "13.5%",
  "--milagres-badge-scale": "0.87",
  "--milagres-sao-x": "16.1%",
  "--milagres-sao-y": "52.8%",
  "--milagres-sao-width": "70%",
  "--milagres-sao-height": "7.2%",
  "--milagres-sao-scale": "1",
  "--milagres-sao-shadow-x": "26.4%",
  "--milagres-sao-shadow-y": "54.2%",
  "--milagres-sao-shadow-width": "51.3%",
  "--milagres-sao-shadow-height": "5%",
  "--milagres-sao-shadow-opacity": "0.35",
  "--milagres-sao-shadow-blur": "8px",
  "--milagres-sao-shadow-radius": "36px",
  "--milagres-title-x": "14.8%",
  "--milagres-title-y": "57.7%",
  "--milagres-title-width": "66.5%",
  "--milagres-title-height": "20.2%",
  "--milagres-title-scale": "1.11",
  "--milagres-title-shadow-x": "12.8%",
  "--milagres-title-shadow-y": "59.1%",
  "--milagres-title-shadow-width": "74.9%",
  "--milagres-title-shadow-height": "15.3%",
  "--milagres-title-shadow-opacity": "0.75",
  "--milagres-title-shadow-blur": "28px",
  "--milagres-title-shadow-radius": "26px",
  "--milagres-accent-x": "14.4%",
  "--milagres-accent-y": "71.8%",
  "--milagres-accent-width": "30%",
  "--milagres-accent-height": "5.7%",
  "--milagres-accent-scale": "1.31",
  "--milagres-icons-scale": "1.1",
  "--milagres-wave-icon-x": "6.3%",
  "--milagres-wave-icon-y": "75.7%",
  "--milagres-wave-icon-width": "10%",
  "--milagres-wave-icon-height": "14.7%",
  "--milagres-wave-text-x": "15.1%",
  "--milagres-wave-text-y": "81%",
  "--milagres-wave-text-width": "16%",
  "--milagres-wave-text-font-size": "8.6px",
  "--milagres-boat-icon-x": "36.2%",
  "--milagres-boat-icon-y": "75.7%",
  "--milagres-boat-icon-width": "9.4%",
  "--milagres-boat-icon-height": "14.8%",
  "--milagres-boat-text-x": "45.9%",
  "--milagres-boat-text-y": "81.5%",
  "--milagres-boat-text-width": "13.4%",
  "--milagres-boat-text-font-size": "11.6px",
  "--milagres-palm-icon-x": "66.6%",
  "--milagres-palm-icon-y": "75.7%",
  "--milagres-palm-icon-width": "10%",
  "--milagres-palm-icon-height": "15%",
  "--milagres-palm-text-x": "77.7%",
  "--milagres-palm-text-y": "81%",
  "--milagres-palm-text-width": "14%",
  "--milagres-palm-text-font-size": "9.1px",
  "--milagres-separator-1-x": "35%",
  "--milagres-separator-1-y": "79.7%",
  "--milagres-separator-1-width": "2px",
  "--milagres-separator-1-height": "5.5%",
  "--milagres-separator-1-opacity": "0.78",
  "--milagres-separator-2-x": "64.8%",
  "--milagres-separator-2-y": "79.7%",
  "--milagres-separator-2-width": "2px",
  "--milagres-separator-2-height": "5.5%",
  "--milagres-separator-2-opacity": "0.78",
  "--milagres-info-button-x": "-2%",
  "--milagres-info-button-y": "80.2%",
  "--milagres-info-button-width": "53.4%",
  "--milagres-info-button-height": "25%",
  "--milagres-photos-button-x": "42.4%",
  "--milagres-photos-button-y": "85%",
  "--milagres-photos-button-width": "57.7%",
  "--milagres-photos-button-height": "15.4%",
  "--milagres-info-hotspot-x": "4%",
  "--milagres-info-hotspot-y": "86.2%",
  "--milagres-info-hotspot-width": "39%",
  "--milagres-info-hotspot-height": "9.6%",
  "--milagres-photos-hotspot-x": "46%",
  "--milagres-photos-hotspot-y": "86.2%",
  "--milagres-photos-hotspot-width": "49%",
  "--milagres-photos-hotspot-height": "9.6%",
  "--milagres-overlay-mid-stop": "63%",
  "--milagres-overlay-bottom-start": "87%",
  "--milagres-overlay-top-opacity": "0.42",
  "--milagres-overlay-mid-opacity": "0",
  "--milagres-overlay-bottom-opacity": "0.87"
};

const GUNGA_CARD_DEFAULTS = {
  "--gunga-card-stage-width": "100%",
  "--gunga-card-stage-height": "100%",
  "--gunga-card-stage-offset-y": "0px",
  "--gunga-bg-position-x": "52%",
  "--gunga-bg-position-y": "50%",
  "--gunga-bg-zoom": "118%",
  "--gunga-badge-x": "-3.8%",
  "--gunga-badge-y": "1.6%",
  "--gunga-badge-width": "57%",
  "--gunga-badge-height": "13.5%",
  "--gunga-badge-scale": "0.88",
  "--gunga-title-x": "10.8%",
  "--gunga-title-y": "56.4%",
  "--gunga-title-width": "73%",
  "--gunga-title-height": "18.4%",
  "--gunga-title-scale": "1",
  "--gunga-title-shadow-x": "7.5%",
  "--gunga-title-shadow-y": "58.3%",
  "--gunga-title-shadow-width": "79%",
  "--gunga-title-shadow-height": "13.4%",
  "--gunga-title-shadow-opacity": "0.58",
  "--gunga-title-shadow-blur": "24px",
  "--gunga-title-shadow-radius": "28px",
  "--gunga-accent-x": "11%",
  "--gunga-accent-y": "70.3%",
  "--gunga-accent-width": "25%",
  "--gunga-accent-height": "5.4%",
  "--gunga-accent-scale": "1.25",
  "--gunga-icons-scale": "1.06",
  "--gunga-wave-icon-x": "6.8%",
  "--gunga-wave-icon-y": "75.4%",
  "--gunga-wave-icon-width": "10.5%",
  "--gunga-wave-icon-height": "14.5%",
  "--gunga-wave-text-x": "17%",
  "--gunga-wave-text-y": "80.1%",
  "--gunga-wave-text-width": "13.5%",
  "--gunga-wave-text-font-size": "10px",
  "--gunga-boat-icon-x": "37.8%",
  "--gunga-boat-icon-y": "75.4%",
  "--gunga-boat-icon-width": "9.6%",
  "--gunga-boat-icon-height": "14.5%",
  "--gunga-boat-text-x": "48%",
  "--gunga-boat-text-y": "80.1%",
  "--gunga-boat-text-width": "14%",
  "--gunga-boat-text-font-size": "9.8px",
  "--gunga-palm-icon-x": "68.2%",
  "--gunga-palm-icon-y": "75.4%",
  "--gunga-palm-icon-width": "9.8%",
  "--gunga-palm-icon-height": "14.5%",
  "--gunga-palm-text-x": "79.1%",
  "--gunga-palm-text-y": "80.1%",
  "--gunga-palm-text-width": "13.8%",
  "--gunga-palm-text-font-size": "9.8px",
  "--gunga-separator-1-x": "35.4%",
  "--gunga-separator-1-y": "79.2%",
  "--gunga-separator-1-width": "2px",
  "--gunga-separator-1-height": "5.8%",
  "--gunga-separator-1-opacity": "0.75",
  "--gunga-separator-2-x": "65.5%",
  "--gunga-separator-2-y": "79.2%",
  "--gunga-separator-2-width": "2px",
  "--gunga-separator-2-height": "5.8%",
  "--gunga-separator-2-opacity": "0.75",
  "--gunga-info-button-x": "-1.2%",
  "--gunga-info-button-y": "82.2%",
  "--gunga-info-button-width": "53%",
  "--gunga-info-button-height": "19%",
  "--gunga-photos-button-x": "44%",
  "--gunga-photos-button-y": "85%",
  "--gunga-photos-button-width": "56%",
  "--gunga-photos-button-height": "15.4%",
  "--gunga-info-hotspot-x": "4%",
  "--gunga-info-hotspot-y": "86.5%",
  "--gunga-info-hotspot-width": "40%",
  "--gunga-info-hotspot-height": "9.4%",
  "--gunga-photos-hotspot-x": "47%",
  "--gunga-photos-hotspot-y": "86.5%",
  "--gunga-photos-hotspot-width": "48.5%",
  "--gunga-photos-hotspot-height": "9.4%",
  "--gunga-overlay-mid-stop": "63%",
  "--gunga-overlay-bottom-start": "84%",
  "--gunga-overlay-top-opacity": "0.18",
  "--gunga-overlay-mid-opacity": "0.04",
  "--gunga-overlay-bottom-opacity": "0.92"
};

const MILAGRES_CARD_ADJUST_CONTROLS = [
  {
    group: "Imagem de fundo",
    controls: [
      { label: "Posicao X", variable: "--milagres-bg-position-x", min: -20, max: 120, step: 1, unit: "%" },
      { label: "Posicao Y", variable: "--milagres-bg-position-y", min: -20, max: 120, step: 1, unit: "%" },
      { label: "Zoom", variable: "--milagres-bg-zoom", min: 80, max: 180, step: 1, unit: "%" }
    ]
  },
  {
    group: "Selo",
    controls: [
      { label: "X", variable: "--milagres-badge-x", min: -10, max: 90, step: 0.1, unit: "%" },
      { label: "Y", variable: "--milagres-badge-y", min: -10, max: 90, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--milagres-badge-width", min: 10, max: 90, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--milagres-badge-height", min: 3, max: 30, step: 0.1, unit: "%" },
      { label: "Escala", variable: "--milagres-badge-scale", min: 0.4, max: 2, step: 0.01, unit: "" }
    ]
  },
  {
    group: "Sao Miguel dos",
    controls: [
      { label: "X", variable: "--milagres-sao-x", min: -10, max: 90, step: 0.1, unit: "%" },
      { label: "Y", variable: "--milagres-sao-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--milagres-sao-width", min: 8, max: 80, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--milagres-sao-height", min: 2, max: 20, step: 0.1, unit: "%" },
      { label: "Escala", variable: "--milagres-sao-scale", min: 0.4, max: 2, step: 0.01, unit: "" }
    ]
  },
  {
    group: "Sombra Sao Miguel dos",
    controls: [
      { label: "X", variable: "--milagres-sao-shadow-x", min: -10, max: 90, step: 0.1, unit: "%" },
      { label: "Y", variable: "--milagres-sao-shadow-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--milagres-sao-shadow-width", min: 8, max: 90, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--milagres-sao-shadow-height", min: 2, max: 25, step: 0.1, unit: "%" },
      { label: "Opacidade", variable: "--milagres-sao-shadow-opacity", min: 0, max: 1, step: 0.01, unit: "" },
      { label: "Blur", variable: "--milagres-sao-shadow-blur", min: 0, max: 60, step: 1, unit: "px" },
      { label: "Arredondamento", variable: "--milagres-sao-shadow-radius", min: 0, max: 80, step: 1, unit: "px" }
    ]
  },
  {
    group: "Titulo",
    controls: [
      { label: "X", variable: "--milagres-title-x", min: -10, max: 90, step: 0.1, unit: "%" },
      { label: "Y", variable: "--milagres-title-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--milagres-title-width", min: 10, max: 90, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--milagres-title-height", min: 4, max: 35, step: 0.1, unit: "%" },
      { label: "Escala", variable: "--milagres-title-scale", min: 0.4, max: 2, step: 0.01, unit: "" }
    ]
  },
  {
    group: "Sombra Milagres",
    controls: [
      { label: "X", variable: "--milagres-title-shadow-x", min: -10, max: 90, step: 0.1, unit: "%" },
      { label: "Y", variable: "--milagres-title-shadow-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--milagres-title-shadow-width", min: 8, max: 90, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--milagres-title-shadow-height", min: 2, max: 25, step: 0.1, unit: "%" },
      { label: "Opacidade", variable: "--milagres-title-shadow-opacity", min: 0, max: 1, step: 0.01, unit: "" },
      { label: "Blur", variable: "--milagres-title-shadow-blur", min: 0, max: 60, step: 1, unit: "px" },
      { label: "Arredondamento", variable: "--milagres-title-shadow-radius", min: 0, max: 80, step: 1, unit: "px" }
    ]
  },
  {
    group: "Traco",
    controls: [
      { label: "X", variable: "--milagres-accent-x", min: -10, max: 90, step: 0.1, unit: "%" },
      { label: "Y", variable: "--milagres-accent-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--milagres-accent-width", min: 4, max: 60, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--milagres-accent-height", min: 0.5, max: 12, step: 0.1, unit: "%" },
      { label: "Escala", variable: "--milagres-accent-scale", min: 0.4, max: 2, step: 0.01, unit: "" }
    ]
  },
  {
    group: "Icones",
    controls: [
      { label: "Escala geral", variable: "--milagres-icons-scale", min: 0.5, max: 2.4, step: 0.01, unit: "" },
      { label: "Praias X", variable: "--milagres-wave-icon-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Praias Y", variable: "--milagres-wave-icon-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Praias largura", variable: "--milagres-wave-icon-width", min: 4, max: 22, step: 0.1, unit: "%" },
      { label: "Praias altura", variable: "--milagres-wave-icon-height", min: 4, max: 22, step: 0.1, unit: "%" },
      { label: "Jangada X", variable: "--milagres-boat-icon-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Jangada Y", variable: "--milagres-boat-icon-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Jangada largura", variable: "--milagres-boat-icon-width", min: 4, max: 22, step: 0.1, unit: "%" },
      { label: "Jangada altura", variable: "--milagres-boat-icon-height", min: 4, max: 22, step: 0.1, unit: "%" },
      { label: "Aguas X", variable: "--milagres-palm-icon-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Aguas Y", variable: "--milagres-palm-icon-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Aguas largura", variable: "--milagres-palm-icon-width", min: 4, max: 22, step: 0.1, unit: "%" },
      { label: "Aguas altura", variable: "--milagres-palm-icon-height", min: 4, max: 22, step: 0.1, unit: "%" }
    ]
  },
  {
    group: "Textos",
    controls: [
      { label: "Praias texto X", variable: "--milagres-wave-text-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Praias texto Y", variable: "--milagres-wave-text-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Praias texto largura", variable: "--milagres-wave-text-width", min: 4, max: 35, step: 0.1, unit: "%" },
      { label: "Praias texto fonte", variable: "--milagres-wave-text-font-size", min: 8, max: 28, step: 0.1, unit: "px" },
      { label: "Jangada texto X", variable: "--milagres-boat-text-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Jangada texto Y", variable: "--milagres-boat-text-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Jangada texto largura", variable: "--milagres-boat-text-width", min: 4, max: 35, step: 0.1, unit: "%" },
      { label: "Jangada texto fonte", variable: "--milagres-boat-text-font-size", min: 8, max: 28, step: 0.1, unit: "px" },
      { label: "Aguas texto X", variable: "--milagres-palm-text-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Aguas texto Y", variable: "--milagres-palm-text-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Aguas texto largura", variable: "--milagres-palm-text-width", min: 4, max: 35, step: 0.1, unit: "%" },
      { label: "Aguas texto fonte", variable: "--milagres-palm-text-font-size", min: 8, max: 28, step: 0.1, unit: "px" }
    ]
  },
  {
    group: "Separadores",
    controls: [
      { label: "Separador 1 X", variable: "--milagres-separator-1-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Separador 1 Y", variable: "--milagres-separator-1-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Separador 1 largura", variable: "--milagres-separator-1-width", min: 1, max: 6, step: 0.1, unit: "px" },
      { label: "Separador 1 altura", variable: "--milagres-separator-1-height", min: 2, max: 20, step: 0.1, unit: "%" },
      { label: "Separador 1 opacidade", variable: "--milagres-separator-1-opacity", min: 0, max: 1, step: 0.01, unit: "" },
      { label: "Separador 2 X", variable: "--milagres-separator-2-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Separador 2 Y", variable: "--milagres-separator-2-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Separador 2 largura", variable: "--milagres-separator-2-width", min: 1, max: 6, step: 0.1, unit: "px" },
      { label: "Separador 2 altura", variable: "--milagres-separator-2-height", min: 2, max: 20, step: 0.1, unit: "%" },
      { label: "Separador 2 opacidade", variable: "--milagres-separator-2-opacity", min: 0, max: 1, step: 0.01, unit: "" }
    ]
  },
  {
    group: "Botoes",
    controls: [
      { label: "Saiba mais X", variable: "--milagres-info-button-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Saiba mais Y", variable: "--milagres-info-button-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Saiba mais largura", variable: "--milagres-info-button-width", min: 10, max: 80, step: 0.1, unit: "%" },
      { label: "Saiba mais altura", variable: "--milagres-info-button-height", min: 4, max: 25, step: 0.1, unit: "%" },
      { label: "Ver fotos X", variable: "--milagres-photos-button-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Ver fotos Y", variable: "--milagres-photos-button-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Ver fotos largura", variable: "--milagres-photos-button-width", min: 10, max: 90, step: 0.1, unit: "%" },
      { label: "Ver fotos altura", variable: "--milagres-photos-button-height", min: 4, max: 30, step: 0.1, unit: "%" }
    ]
  },
  {
    group: "Hotspots",
    controls: [
      { label: "Hotspot Saiba mais X", variable: "--milagres-info-hotspot-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Hotspot Saiba mais Y", variable: "--milagres-info-hotspot-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Hotspot Saiba mais largura", variable: "--milagres-info-hotspot-width", min: 10, max: 80, step: 0.1, unit: "%" },
      { label: "Hotspot Saiba mais altura", variable: "--milagres-info-hotspot-height", min: 4, max: 25, step: 0.1, unit: "%" },
      { label: "Hotspot Ver fotos X", variable: "--milagres-photos-hotspot-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Hotspot Ver fotos Y", variable: "--milagres-photos-hotspot-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Hotspot Ver fotos largura", variable: "--milagres-photos-hotspot-width", min: 10, max: 90, step: 0.1, unit: "%" },
      { label: "Hotspot Ver fotos altura", variable: "--milagres-photos-hotspot-height", min: 4, max: 30, step: 0.1, unit: "%" }
    ]
  },
  {
    group: "Overlay",
    controls: [
      { label: "Overlay meio", variable: "--milagres-overlay-mid-stop", min: 10, max: 90, step: 1, unit: "%" },
      { label: "Overlay base", variable: "--milagres-overlay-bottom-start", min: 20, max: 98, step: 1, unit: "%" },
      { label: "Opacidade topo", variable: "--milagres-overlay-top-opacity", min: 0, max: 0.6, step: 0.01, unit: "" },
      { label: "Opacidade meio", variable: "--milagres-overlay-mid-opacity", min: 0, max: 0.8, step: 0.01, unit: "" },
      { label: "Opacidade base", variable: "--milagres-overlay-bottom-opacity", min: 0.1, max: 1, step: 0.01, unit: "" }
    ]
  }
];

const GUNGA_CARD_ADJUST_CONTROLS = [
  {
    group: "Imagem de fundo",
    controls: [
      { label: "Posicao X", variable: "--gunga-bg-position-x", min: -20, max: 120, step: 1, unit: "%" },
      { label: "Posicao Y", variable: "--gunga-bg-position-y", min: -20, max: 120, step: 1, unit: "%" },
      { label: "Zoom", variable: "--gunga-bg-zoom", min: 80, max: 180, step: 1, unit: "%" }
    ]
  },
  {
    group: "Selo",
    controls: [
      { label: "X", variable: "--gunga-badge-x", min: -10, max: 90, step: 0.1, unit: "%" },
      { label: "Y", variable: "--gunga-badge-y", min: -10, max: 90, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--gunga-badge-width", min: 10, max: 90, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--gunga-badge-height", min: 3, max: 30, step: 0.1, unit: "%" },
      { label: "Escala", variable: "--gunga-badge-scale", min: 0.4, max: 2, step: 0.01, unit: "" }
    ]
  },
  {
    group: "Titulo",
    controls: [
      { label: "X", variable: "--gunga-title-x", min: -10, max: 90, step: 0.1, unit: "%" },
      { label: "Y", variable: "--gunga-title-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--gunga-title-width", min: 10, max: 90, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--gunga-title-height", min: 4, max: 35, step: 0.1, unit: "%" },
      { label: "Escala", variable: "--gunga-title-scale", min: 0.4, max: 2, step: 0.01, unit: "" }
    ]
  },
  {
    group: "Sombra Gunga",
    controls: [
      { label: "X", variable: "--gunga-title-shadow-x", min: -10, max: 90, step: 0.1, unit: "%" },
      { label: "Y", variable: "--gunga-title-shadow-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--gunga-title-shadow-width", min: 8, max: 90, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--gunga-title-shadow-height", min: 2, max: 25, step: 0.1, unit: "%" },
      { label: "Opacidade", variable: "--gunga-title-shadow-opacity", min: 0, max: 1, step: 0.01, unit: "" },
      { label: "Blur", variable: "--gunga-title-shadow-blur", min: 0, max: 60, step: 1, unit: "px" },
      { label: "Arredondamento", variable: "--gunga-title-shadow-radius", min: 0, max: 80, step: 1, unit: "px" }
    ]
  },
  {
    group: "Traco",
    controls: [
      { label: "X", variable: "--gunga-accent-x", min: -10, max: 90, step: 0.1, unit: "%" },
      { label: "Y", variable: "--gunga-accent-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Largura", variable: "--gunga-accent-width", min: 4, max: 60, step: 0.1, unit: "%" },
      { label: "Altura", variable: "--gunga-accent-height", min: 0.5, max: 12, step: 0.1, unit: "%" },
      { label: "Escala", variable: "--gunga-accent-scale", min: 0.4, max: 2, step: 0.01, unit: "" }
    ]
  },
  {
    group: "Icones",
    controls: [
      { label: "Escala geral", variable: "--gunga-icons-scale", min: 0.5, max: 2.4, step: 0.01, unit: "" },
      { label: "Icone 1 X", variable: "--gunga-wave-icon-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Icone 1 Y", variable: "--gunga-wave-icon-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Icone 1 largura", variable: "--gunga-wave-icon-width", min: 4, max: 22, step: 0.1, unit: "%" },
      { label: "Icone 1 altura", variable: "--gunga-wave-icon-height", min: 4, max: 22, step: 0.1, unit: "%" },
      { label: "Icone 2 X", variable: "--gunga-boat-icon-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Icone 2 Y", variable: "--gunga-boat-icon-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Icone 2 largura", variable: "--gunga-boat-icon-width", min: 4, max: 22, step: 0.1, unit: "%" },
      { label: "Icone 2 altura", variable: "--gunga-boat-icon-height", min: 4, max: 22, step: 0.1, unit: "%" },
      { label: "Icone 3 X", variable: "--gunga-palm-icon-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Icone 3 Y", variable: "--gunga-palm-icon-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Icone 3 largura", variable: "--gunga-palm-icon-width", min: 4, max: 22, step: 0.1, unit: "%" },
      { label: "Icone 3 altura", variable: "--gunga-palm-icon-height", min: 4, max: 22, step: 0.1, unit: "%" }
    ]
  },
  {
    group: "Textos",
    controls: [
      { label: "Texto 1 X", variable: "--gunga-wave-text-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Texto 1 Y", variable: "--gunga-wave-text-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Texto 1 largura", variable: "--gunga-wave-text-width", min: 4, max: 35, step: 0.1, unit: "%" },
      { label: "Texto 1 fonte", variable: "--gunga-wave-text-font-size", min: 8, max: 28, step: 0.1, unit: "px" },
      { label: "Texto 2 X", variable: "--gunga-boat-text-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Texto 2 Y", variable: "--gunga-boat-text-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Texto 2 largura", variable: "--gunga-boat-text-width", min: 4, max: 35, step: 0.1, unit: "%" },
      { label: "Texto 2 fonte", variable: "--gunga-boat-text-font-size", min: 8, max: 28, step: 0.1, unit: "px" },
      { label: "Texto 3 X", variable: "--gunga-palm-text-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Texto 3 Y", variable: "--gunga-palm-text-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Texto 3 largura", variable: "--gunga-palm-text-width", min: 4, max: 35, step: 0.1, unit: "%" },
      { label: "Texto 3 fonte", variable: "--gunga-palm-text-font-size", min: 8, max: 28, step: 0.1, unit: "px" }
    ]
  },
  {
    group: "Separadores",
    controls: [
      { label: "Separador 1 X", variable: "--gunga-separator-1-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Separador 1 Y", variable: "--gunga-separator-1-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Separador 1 largura", variable: "--gunga-separator-1-width", min: 1, max: 6, step: 0.1, unit: "px" },
      { label: "Separador 1 altura", variable: "--gunga-separator-1-height", min: 2, max: 20, step: 0.1, unit: "%" },
      { label: "Separador 1 opacidade", variable: "--gunga-separator-1-opacity", min: 0, max: 1, step: 0.01, unit: "" },
      { label: "Separador 2 X", variable: "--gunga-separator-2-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Separador 2 Y", variable: "--gunga-separator-2-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Separador 2 largura", variable: "--gunga-separator-2-width", min: 1, max: 6, step: 0.1, unit: "px" },
      { label: "Separador 2 altura", variable: "--gunga-separator-2-height", min: 2, max: 20, step: 0.1, unit: "%" },
      { label: "Separador 2 opacidade", variable: "--gunga-separator-2-opacity", min: 0, max: 1, step: 0.01, unit: "" }
    ]
  },
  {
    group: "Botoes",
    controls: [
      { label: "Saiba mais X", variable: "--gunga-info-button-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Saiba mais Y", variable: "--gunga-info-button-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Saiba mais largura", variable: "--gunga-info-button-width", min: 10, max: 80, step: 0.1, unit: "%" },
      { label: "Saiba mais altura", variable: "--gunga-info-button-height", min: 4, max: 25, step: 0.1, unit: "%" },
      { label: "Ver fotos X", variable: "--gunga-photos-button-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Ver fotos Y", variable: "--gunga-photos-button-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Ver fotos largura", variable: "--gunga-photos-button-width", min: 10, max: 90, step: 0.1, unit: "%" },
      { label: "Ver fotos altura", variable: "--gunga-photos-button-height", min: 4, max: 30, step: 0.1, unit: "%" }
    ]
  },
  {
    group: "Hotspots",
    controls: [
      { label: "Hotspot Saiba mais X", variable: "--gunga-info-hotspot-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Hotspot Saiba mais Y", variable: "--gunga-info-hotspot-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Hotspot Saiba mais largura", variable: "--gunga-info-hotspot-width", min: 10, max: 80, step: 0.1, unit: "%" },
      { label: "Hotspot Saiba mais altura", variable: "--gunga-info-hotspot-height", min: 4, max: 25, step: 0.1, unit: "%" },
      { label: "Hotspot Ver fotos X", variable: "--gunga-photos-hotspot-x", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Hotspot Ver fotos Y", variable: "--gunga-photos-hotspot-y", min: -10, max: 100, step: 0.1, unit: "%" },
      { label: "Hotspot Ver fotos largura", variable: "--gunga-photos-hotspot-width", min: 10, max: 90, step: 0.1, unit: "%" },
      { label: "Hotspot Ver fotos altura", variable: "--gunga-photos-hotspot-height", min: 4, max: 30, step: 0.1, unit: "%" }
    ]
  },
  {
    group: "Overlay",
    controls: [
      { label: "Overlay meio", variable: "--gunga-overlay-mid-stop", min: 10, max: 90, step: 1, unit: "%" },
      { label: "Overlay base", variable: "--gunga-overlay-bottom-start", min: 20, max: 98, step: 1, unit: "%" },
      { label: "Opacidade topo", variable: "--gunga-overlay-top-opacity", min: 0, max: 0.6, step: 0.01, unit: "" },
      { label: "Opacidade meio", variable: "--gunga-overlay-mid-opacity", min: 0, max: 0.8, step: 0.01, unit: "" },
      { label: "Opacidade base", variable: "--gunga-overlay-bottom-opacity", min: 0.1, max: 1, step: 0.01, unit: "" }
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
  rootElement,
  rootSelector,
  trackSelector,
  itemSelector,
  prevSelector,
  nextSelector,
  dotSelector
}) {
  const root = rootElement || document.querySelector(rootSelector);
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

function bindLightboxSwipe(overlay, goTo) {
  if (!overlay || typeof goTo !== "function") return;

  let startX = 0;
  let startY = 0;
  let deltaX = 0;
  let deltaY = 0;
  let tracking = false;
  const swipeThreshold = 48;

  overlay.addEventListener(
    "touchstart",
    (event) => {
      if (overlay.hidden || !event.touches.length) return;

      const touch = event.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      deltaX = 0;
      deltaY = 0;
      tracking = true;
    },
    { passive: true }
  );

  overlay.addEventListener(
    "touchmove",
    (event) => {
      if (!tracking || !event.touches.length) return;

      const touch = event.touches[0];
      deltaX = touch.clientX - startX;
      deltaY = touch.clientY - startY;
    },
    { passive: true }
  );

  overlay.addEventListener(
    "touchend",
    () => {
      if (!tracking) return;
      tracking = false;

      if (Math.abs(deltaX) < swipeThreshold) return;
      if (Math.abs(deltaY) > Math.abs(deltaX) * 0.8) return;

      goTo(deltaX < 0 ? 1 : -1);
    },
    { passive: true }
  );
}

function animateLightboxImageTransition(image, updateFn) {
  if (!image || typeof updateFn !== "function") return;

  image.classList.add("is-transitioning");

  window.setTimeout(() => {
    updateFn();

    window.requestAnimationFrame(() => {
      image.classList.remove("is-transitioning");
    });
  }, 130);
}

function createLightboxDotsMarkup(total) {
  return Array.from({ length: total }, (_, index) => {
    return `<button class="tour-lightbox__dot" type="button" aria-label="Ir para foto ${index + 1}" data-lightbox-dot="${index}"></button>`;
  }).join("");
}

function syncLightboxDots(dots, activeIndex) {
  dots.forEach((dot, index) => {
    const isActive = index === activeIndex;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function initializeHomeTourGallery() {
  const triggers = Array.from(document.querySelectorAll("[data-home-gallery-trigger]"));
  if (!triggers.length) return;

  const overlay = document.createElement("div");
  overlay.className = "tour-lightbox";
  overlay.hidden = true;
  overlay.innerHTML = `
    <div class="tour-lightbox__dialog" role="dialog" aria-modal="true" aria-label="Galeria do passeio em tela cheia">
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

  const image = overlay.querySelector(".tour-lightbox__image");
  const counter = overlay.querySelector(".tour-lightbox__counter");
  const closeButton = overlay.querySelector(".tour-lightbox__close");
  const prevButton = overlay.querySelector(".tour-lightbox__arrow--prev");
  const nextButton = overlay.querySelector(".tour-lightbox__arrow--next");

  let activeImages = [];
  let activeTitle = "Passeio";
  let activeIndex = 0;

  const render = () => {
    const current = activeImages[activeIndex];
    if (!current) return;

    image.src = current;
    image.alt = `${activeTitle} - foto ${activeIndex + 1}`;
    counter.textContent = `${activeIndex + 1} / ${activeImages.length}`;
  };

  const open = (images, title, startIndex = 0) => {
    activeImages = images;
    activeTitle = title;
    activeIndex = startIndex;
    render();
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    overlay.hidden = true;
    document.body.style.overflow = "";
  };

  const goTo = (direction) => {
    if (!activeImages.length) return;
    activeIndex = (activeIndex + direction + activeImages.length) % activeImages.length;
    animateLightboxImageTransition(image, render);
  };

  triggers.forEach((trigger) => {
    const imageList = (trigger.getAttribute("data-gallery-images") || "")
      .split("|")
      .map((value) => value.trim())
      .filter(Boolean);

    if (!imageList.length) {
      trigger.disabled = true;
      return;
    }

    trigger.addEventListener("click", () => {
      open(imageList, trigger.getAttribute("data-gallery-title") || "Passeio");
    });
  });

  closeButton?.addEventListener("click", close);
  prevButton?.addEventListener("click", () => goTo(-1));
  nextButton?.addEventListener("click", () => goTo(1));
  bindLightboxSwipe(overlay, goTo);

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
    animateLightboxImageTransition(image, render);
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

function initializeTourGalleries() {
  const galleries = document.querySelectorAll("[data-gallery]");
  if (!galleries.length) return;

  galleries.forEach((gallery) => {
    initializeSnapCarousel({
      rootElement: gallery,
      trackSelector: "[data-gallery-track]",
      itemSelector: ".tour-gallery-slide",
      prevSelector: "[data-gallery-prev]",
      nextSelector: "[data-gallery-next]",
      dotSelector: ".tour-gallery-dot"
    });
  });
}

function initializeTourLightboxes() {
  const galleries = document.querySelectorAll("[data-gallery]");
  if (!galleries.length) return;

  galleries.forEach((gallery) => {
    const images = Array.from(gallery.querySelectorAll("[data-lightbox-image]"));
    if (!images.length) return;

    const title = gallery.getAttribute("data-gallery-title") || "Passeio";
    const overlay = document.createElement("div");
    overlay.className = "tour-lightbox";
    overlay.hidden = true;
    overlay.innerHTML = `
      <div class="tour-lightbox__dialog" role="dialog" aria-modal="true" aria-label="Galeria de ${title} em tela cheia">
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
      image.alt = current.alt || `Imagem de ${title}`;
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
      animateLightboxImageTransition(image, render);
    };

    images.forEach((img, index) => {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", () => open(index));
    });

    closeButton?.addEventListener("click", close);
    prevButton?.addEventListener("click", () => goTo(-1));
    nextButton?.addEventListener("click", () => goTo(1));
    bindLightboxSwipe(overlay, goTo);

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

      if (isOpen) {
        window.requestAnimationFrame(() => {
          window.dispatchEvent(new Event("resize"));
        });
      }
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

function getMaragogiCardAdjustMode() {
  return new URLSearchParams(window.location.search).get(MARAGOGI_CARD_ADJUST_QUERY) === "1";
}

function getMilagresCardAdjustMode() {
  return new URLSearchParams(window.location.search).get(MILAGRES_CARD_ADJUST_QUERY) === "1";
}

function getGungaCardAdjustMode() {
  return new URLSearchParams(window.location.search).get(GUNGA_CARD_ADJUST_QUERY) === "1";
}

function readStoredMaragogiCardAdjustments() {
  try {
    const raw = window.localStorage.getItem(MARAGOGI_CARD_ADJUST_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    return {};
  }
}

function persistMaragogiCardAdjustments(values) {
  try {
    window.localStorage.setItem(
      MARAGOGI_CARD_ADJUST_STORAGE_KEY,
      JSON.stringify(values)
    );
  } catch (error) {
    // Ignore storage issues.
  }
}

function clearStoredMaragogiCardAdjustments() {
  try {
    window.localStorage.removeItem(MARAGOGI_CARD_ADJUST_STORAGE_KEY);
  } catch (error) {
    // Ignore storage issues.
  }
}

function readStoredMilagresCardAdjustments() {
  try {
    const raw = window.localStorage.getItem(MILAGRES_CARD_ADJUST_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    return {};
  }
}

function persistMilagresCardAdjustments(values) {
  try {
    window.localStorage.setItem(
      MILAGRES_CARD_ADJUST_STORAGE_KEY,
      JSON.stringify(values)
    );
  } catch (error) {
    // Ignore storage issues.
  }
}

function clearStoredMilagresCardAdjustments() {
  try {
    window.localStorage.removeItem(MILAGRES_CARD_ADJUST_STORAGE_KEY);
  } catch (error) {
    // Ignore storage issues.
  }
}

function readStoredGungaCardAdjustments() {
  try {
    const raw = window.localStorage.getItem(GUNGA_CARD_ADJUST_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    return {};
  }
}

function persistGungaCardAdjustments(values) {
  try {
    window.localStorage.setItem(
      GUNGA_CARD_ADJUST_STORAGE_KEY,
      JSON.stringify(values)
    );
  } catch (error) {
    // Ignore storage issues.
  }
}

function clearStoredGungaCardAdjustments() {
  try {
    window.localStorage.removeItem(GUNGA_CARD_ADJUST_STORAGE_KEY);
  } catch (error) {
    // Ignore storage issues.
  }
}

function applyMaragogiCardAdjustmentVariables(values) {
  Object.entries(values).forEach(([variable, value]) => {
    document.documentElement.style.setProperty(variable, value);
  });
}

function applyMilagresCardAdjustmentVariables(values) {
  Object.entries(values).forEach(([variable, value]) => {
    document.documentElement.style.setProperty(variable, value);
  });
}

function applyGungaCardAdjustmentVariables(values) {
  Object.entries(values).forEach(([variable, value]) => {
    document.documentElement.style.setProperty(variable, value);
  });
}

function buildMaragogiCardAdjustCss(values) {
  const lines = Object.keys(MARAGOGI_CARD_DEFAULTS).map(
    (variable) => `  ${variable}: ${values[variable]};`
  );

  return `:root {\n${lines.join("\n")}\n}`;
}

function buildMilagresCardAdjustCss(values) {
  const lines = Object.keys(MILAGRES_CARD_DEFAULTS).map(
    (variable) => `  ${variable}: ${values[variable]};`
  );

  return `:root {\n${lines.join("\n")}\n}`;
}

function buildGungaCardAdjustCss(values) {
  const lines = Object.keys(GUNGA_CARD_DEFAULTS).map(
    (variable) => `  ${variable}: ${values[variable]};`
  );

  return `:root {\n${lines.join("\n")}\n}`;
}

function updateMaragogiCardAdjustPreview(panel, values) {
  const output = panel.querySelector("[data-card-adjust-output]");
  if (!output) return;
  output.textContent = buildMaragogiCardAdjustCss(values);
}

function createMaragogiCardAdjustTool() {
  const body = document.body;
  const currentValues = {
    ...MARAGOGI_CARD_DEFAULTS,
    ...readStoredMaragogiCardAdjustments()
  };

  applyMaragogiCardAdjustmentVariables(currentValues);
  body.classList.add("maragogi-card-adjust-mode");

  const launcher = document.createElement("button");
  launcher.type = "button";
  launcher.className = "hero-adjust-launcher";
  launcher.textContent = "Ajustar Maragogi";
  launcher.hidden = true;

  const panel = document.createElement("aside");
  panel.className = "hero-adjust-panel maragogi-adjust-panel maragogi-adjust-panel--clean";
  panel.innerHTML = `
    <div class="hero-adjust-panel__header" data-hero-adjust-drag-handle>
      <div class="hero-adjust-panel__heading">
        <p class="hero-adjust-panel__eyebrow">Ferramenta temporaria</p>
        <h2>Ajuste Card Maragogi</h2>
        <span class="hero-adjust-panel__hint">Ative com ?ajusteCardMaragogi=1</span>
      </div>
      <button type="button" class="hero-adjust-panel__close" data-card-adjust-close>Ocultar painel</button>
    </div>
    <div class="maragogi-clean-tool">
      <label class="maragogi-clean-tool__label" for="maragogi-adjust-group-select">Escolha o ajuste</label>
      <select class="maragogi-clean-tool__select" id="maragogi-adjust-group-select" data-card-adjust-group-select></select>
      <div class="maragogi-clean-tool__controls" data-card-adjust-active-group></div>
    </div>
    <div class="hero-adjust-panel__actions maragogi-clean-tool__actions">
      <button type="button" class="hero-adjust-panel__button" data-card-adjust-reset>Resetar ajustes</button>
      <button type="button" class="hero-adjust-panel__button hero-adjust-panel__button--primary" data-card-adjust-copy>Copiar CSS final</button>
      <button type="button" class="hero-adjust-panel__button hero-adjust-panel__button--quiet" data-card-adjust-clear>Limpar ajustes salvos</button>
    </div>
  `;

  const select = panel.querySelector("[data-card-adjust-group-select]");
  const activeGroup = panel.querySelector("[data-card-adjust-active-group]");
  const closeButton = panel.querySelector("[data-card-adjust-close]");
  const resetButton = panel.querySelector("[data-card-adjust-reset]");
  const clearButton = panel.querySelector("[data-card-adjust-clear]");
  const copyButton = panel.querySelector("[data-card-adjust-copy]");
  const dragHandle = panel.querySelector("[data-hero-adjust-drag-handle]");
  const values = { ...currentValues };

  const controlsMeta = MARAGOGI_CARD_ADJUST_CONTROLS.flatMap(
    (group) => group.controls
  );

  const onChange = (variable, value) => {
    values[variable] = value;
    document.documentElement.style.setProperty(variable, value);
    persistMaragogiCardAdjustments(values);
  };

  const renderGroup = (groupIndex = 0) => {
    if (!activeGroup) return;
    const group = MARAGOGI_CARD_ADJUST_CONTROLS[groupIndex] || MARAGOGI_CARD_ADJUST_CONTROLS[0];
    activeGroup.innerHTML = "";

    const title = document.createElement("h3");
    title.className = "maragogi-clean-tool__group-title";
    title.textContent = group.group;
    activeGroup.appendChild(title);

    group.controls.forEach((control) => {
      activeGroup.appendChild(createHeroAdjustControl(control, values, onChange));
    });
  };

  MARAGOGI_CARD_ADJUST_CONTROLS.forEach((group, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = group.group;
    select?.appendChild(option);
  });

  select?.addEventListener("change", () => {
    renderGroup(Number(select.value));
  });

  renderGroup(0);

  const syncInputsFromValues = (sourceValues) => {
    panel.querySelectorAll(".hero-adjust-control").forEach((controlElement) => {
      const variable = controlElement.getAttribute("data-variable");
      const meta = controlsMeta.find((item) => item.variable === variable);
      const input = controlElement.querySelector(".hero-adjust-control-input");
      const valueElement = controlElement.querySelector(".hero-adjust-control-value");

      if (!meta || !input || !valueElement) return;
      input.value = parseHeroAdjustValue(sourceValues[meta.variable], meta.unit);
      valueElement.textContent = sourceValues[meta.variable];
    });
  };

  const resetToDefaults = () => {
    Object.entries(MARAGOGI_CARD_DEFAULTS).forEach(([variable, value]) => {
      values[variable] = value;
      document.documentElement.style.setProperty(variable, value);
    });
    syncInputsFromValues(MARAGOGI_CARD_DEFAULTS);
    persistMaragogiCardAdjustments(values);
  };

  resetButton?.addEventListener("click", resetToDefaults);

  clearButton?.addEventListener("click", () => {
    clearStoredMaragogiCardAdjustments();
    resetToDefaults();
    const originalText = clearButton.textContent;
    clearButton.textContent = "Salvos limpos";
    window.setTimeout(() => {
      clearButton.textContent = originalText;
    }, 1600);
  });

  copyButton?.addEventListener("click", async () => {
    const css = buildMaragogiCardAdjustCss(values);
    const originalText = copyButton.textContent;

    try {
      await copyTextToClipboard(css);
      copyButton.textContent = "CSS copiado";
    } catch (error) {
      copyButton.textContent = "Falha ao copiar";
    }

    window.setTimeout(() => {
      copyButton.textContent = originalText;
    }, 1800);
  });

  const togglePanel = (isOpen) => {
    panel.hidden = !isOpen;
    launcher.hidden = isOpen;
  };

  closeButton?.addEventListener("click", () => togglePanel(false));
  launcher.addEventListener("click", () => togglePanel(true));

  body.append(panel, launcher);
  togglePanel(true);

  if (dragHandle) {
    enableHeroAdjustPanelDrag(panel, dragHandle);
  }
}

function createMilagresCardAdjustTool() {
  const body = document.body;
  const currentValues = {
    ...MILAGRES_CARD_DEFAULTS,
    ...readStoredMilagresCardAdjustments()
  };

  applyMilagresCardAdjustmentVariables(currentValues);
  body.classList.add("maragogi-card-adjust-mode");

  const launcher = document.createElement("button");
  launcher.type = "button";
  launcher.className = "hero-adjust-launcher";
  launcher.textContent = "Ajustar Milagres";
  launcher.hidden = true;

  const panel = document.createElement("aside");
  panel.className = "hero-adjust-panel maragogi-adjust-panel maragogi-adjust-panel--clean";
  panel.innerHTML = `
    <div class="hero-adjust-panel__header" data-hero-adjust-drag-handle>
      <div class="hero-adjust-panel__heading">
        <p class="hero-adjust-panel__eyebrow">Ferramenta temporaria</p>
        <h2>Ajuste Card Milagres</h2>
        <span class="hero-adjust-panel__hint">Ative com ?ajusteCardMilagres=1</span>
      </div>
      <button type="button" class="hero-adjust-panel__close" data-milagres-adjust-close>Ocultar painel</button>
    </div>
    <div class="maragogi-clean-tool">
      <label class="maragogi-clean-tool__label" for="milagres-adjust-group-select">Escolha o ajuste</label>
      <select class="maragogi-clean-tool__select" id="milagres-adjust-group-select" data-milagres-adjust-group-select></select>
      <div class="maragogi-clean-tool__controls" data-milagres-adjust-active-group></div>
    </div>
    <div class="hero-adjust-panel__actions maragogi-clean-tool__actions">
      <button type="button" class="hero-adjust-panel__button" data-milagres-adjust-reset>Resetar ajustes</button>
      <button type="button" class="hero-adjust-panel__button hero-adjust-panel__button--primary" data-milagres-adjust-copy>Copiar CSS final</button>
      <button type="button" class="hero-adjust-panel__button hero-adjust-panel__button--quiet" data-milagres-adjust-clear>Limpar ajustes salvos</button>
    </div>
  `;

  const select = panel.querySelector("[data-milagres-adjust-group-select]");
  const activeGroup = panel.querySelector("[data-milagres-adjust-active-group]");
  const closeButton = panel.querySelector("[data-milagres-adjust-close]");
  const resetButton = panel.querySelector("[data-milagres-adjust-reset]");
  const clearButton = panel.querySelector("[data-milagres-adjust-clear]");
  const copyButton = panel.querySelector("[data-milagres-adjust-copy]");
  const dragHandle = panel.querySelector("[data-hero-adjust-drag-handle]");
  const values = { ...currentValues };

  const controlsMeta = MILAGRES_CARD_ADJUST_CONTROLS.flatMap(
    (group) => group.controls
  );

  const onChange = (variable, value) => {
    values[variable] = value;
    document.documentElement.style.setProperty(variable, value);
    persistMilagresCardAdjustments(values);
  };

  const renderGroup = (groupIndex = 0) => {
    if (!activeGroup) return;
    const group = MILAGRES_CARD_ADJUST_CONTROLS[groupIndex] || MILAGRES_CARD_ADJUST_CONTROLS[0];
    activeGroup.innerHTML = "";

    const title = document.createElement("h3");
    title.className = "maragogi-clean-tool__group-title";
    title.textContent = group.group;
    activeGroup.appendChild(title);

    group.controls.forEach((control) => {
      activeGroup.appendChild(createHeroAdjustControl(control, values, onChange));
    });
  };

  MILAGRES_CARD_ADJUST_CONTROLS.forEach((group, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = group.group;
    select?.appendChild(option);
  });

  select?.addEventListener("change", () => {
    renderGroup(Number(select.value));
  });

  renderGroup(0);

  const syncInputsFromValues = (sourceValues) => {
    panel.querySelectorAll(".hero-adjust-control").forEach((controlElement) => {
      const variable = controlElement.getAttribute("data-variable");
      const meta = controlsMeta.find((item) => item.variable === variable);
      const input = controlElement.querySelector(".hero-adjust-control-input");
      const valueElement = controlElement.querySelector(".hero-adjust-control-value");

      if (!meta || !input || !valueElement) return;
      input.value = parseHeroAdjustValue(sourceValues[meta.variable], meta.unit);
      valueElement.textContent = sourceValues[meta.variable];
    });
  };

  const resetToDefaults = () => {
    Object.entries(MILAGRES_CARD_DEFAULTS).forEach(([variable, value]) => {
      values[variable] = value;
      document.documentElement.style.setProperty(variable, value);
    });
    syncInputsFromValues(MILAGRES_CARD_DEFAULTS);
    persistMilagresCardAdjustments(values);
  };

  resetButton?.addEventListener("click", resetToDefaults);

  clearButton?.addEventListener("click", () => {
    clearStoredMilagresCardAdjustments();
    resetToDefaults();
    const originalText = clearButton.textContent;
    clearButton.textContent = "Salvos limpos";
    window.setTimeout(() => {
      clearButton.textContent = originalText;
    }, 1600);
  });

  copyButton?.addEventListener("click", async () => {
    const css = buildMilagresCardAdjustCss(values);
    const originalText = copyButton.textContent;

    try {
      await copyTextToClipboard(css);
      copyButton.textContent = "CSS copiado";
    } catch (error) {
      copyButton.textContent = "Falha ao copiar";
    }

    window.setTimeout(() => {
      copyButton.textContent = originalText;
    }, 1800);
  });

  const togglePanel = (isOpen) => {
    panel.hidden = !isOpen;
    launcher.hidden = isOpen;
  };

  closeButton?.addEventListener("click", () => togglePanel(false));
  launcher.addEventListener("click", () => togglePanel(true));

  body.append(panel, launcher);
  togglePanel(true);

  if (dragHandle) {
    enableHeroAdjustPanelDrag(panel, dragHandle);
  }
}

function createGungaCardAdjustTool() {
  const body = document.body;
  const currentValues = {
    ...GUNGA_CARD_DEFAULTS,
    ...readStoredGungaCardAdjustments()
  };

  applyGungaCardAdjustmentVariables(currentValues);
  body.classList.add("maragogi-card-adjust-mode");

  const launcher = document.createElement("button");
  launcher.type = "button";
  launcher.className = "hero-adjust-launcher";
  launcher.textContent = "Ajustar Gunga";
  launcher.hidden = true;

  const panel = document.createElement("aside");
  panel.className = "hero-adjust-panel maragogi-adjust-panel maragogi-adjust-panel--clean";
  panel.innerHTML = `
    <div class="hero-adjust-panel__header" data-hero-adjust-drag-handle>
      <div class="hero-adjust-panel__heading">
        <p class="hero-adjust-panel__eyebrow">Ferramenta temporaria</p>
        <h2>Ajuste Card Gunga</h2>
        <span class="hero-adjust-panel__hint">Ative com ?ajusteCardGunga=1</span>
      </div>
      <button type="button" class="hero-adjust-panel__close" data-gunga-adjust-close>Ocultar painel</button>
    </div>
    <div class="maragogi-clean-tool">
      <label class="maragogi-clean-tool__label" for="gunga-adjust-group-select">Escolha o ajuste</label>
      <select class="maragogi-clean-tool__select" id="gunga-adjust-group-select" data-gunga-adjust-group-select></select>
      <div class="maragogi-clean-tool__controls" data-gunga-adjust-active-group></div>
    </div>
    <div class="hero-adjust-panel__actions maragogi-clean-tool__actions">
      <button type="button" class="hero-adjust-panel__button" data-gunga-adjust-reset>Resetar ajustes</button>
      <button type="button" class="hero-adjust-panel__button hero-adjust-panel__button--primary" data-gunga-adjust-copy>Copiar CSS final</button>
      <button type="button" class="hero-adjust-panel__button hero-adjust-panel__button--quiet" data-gunga-adjust-clear>Limpar ajustes salvos</button>
    </div>
  `;

  const select = panel.querySelector("[data-gunga-adjust-group-select]");
  const activeGroup = panel.querySelector("[data-gunga-adjust-active-group]");
  const closeButton = panel.querySelector("[data-gunga-adjust-close]");
  const resetButton = panel.querySelector("[data-gunga-adjust-reset]");
  const clearButton = panel.querySelector("[data-gunga-adjust-clear]");
  const copyButton = panel.querySelector("[data-gunga-adjust-copy]");
  const dragHandle = panel.querySelector("[data-hero-adjust-drag-handle]");
  const values = { ...currentValues };

  const controlsMeta = GUNGA_CARD_ADJUST_CONTROLS.flatMap(
    (group) => group.controls
  );

  const onChange = (variable, value) => {
    values[variable] = value;
    document.documentElement.style.setProperty(variable, value);
    persistGungaCardAdjustments(values);
  };

  const renderGroup = (groupIndex = 0) => {
    if (!activeGroup) return;
    const group = GUNGA_CARD_ADJUST_CONTROLS[groupIndex] || GUNGA_CARD_ADJUST_CONTROLS[0];
    activeGroup.innerHTML = "";

    const title = document.createElement("h3");
    title.className = "maragogi-clean-tool__group-title";
    title.textContent = group.group;
    activeGroup.appendChild(title);

    group.controls.forEach((control) => {
      activeGroup.appendChild(createHeroAdjustControl(control, values, onChange));
    });
  };

  GUNGA_CARD_ADJUST_CONTROLS.forEach((group, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = group.group;
    select?.appendChild(option);
  });

  select?.addEventListener("change", () => {
    renderGroup(Number(select.value));
  });

  renderGroup(0);

  const syncInputsFromValues = (sourceValues) => {
    panel.querySelectorAll(".hero-adjust-control").forEach((controlElement) => {
      const variable = controlElement.getAttribute("data-variable");
      const meta = controlsMeta.find((item) => item.variable === variable);
      const input = controlElement.querySelector(".hero-adjust-control-input");
      const valueElement = controlElement.querySelector(".hero-adjust-control-value");

      if (!meta || !input || !valueElement) return;
      input.value = parseHeroAdjustValue(sourceValues[meta.variable], meta.unit);
      valueElement.textContent = sourceValues[meta.variable];
    });
  };

  const resetToDefaults = () => {
    Object.entries(GUNGA_CARD_DEFAULTS).forEach(([variable, value]) => {
      values[variable] = value;
      document.documentElement.style.setProperty(variable, value);
    });
    syncInputsFromValues(GUNGA_CARD_DEFAULTS);
    persistGungaCardAdjustments(values);
  };

  resetButton?.addEventListener("click", resetToDefaults);

  clearButton?.addEventListener("click", () => {
    clearStoredGungaCardAdjustments();
    resetToDefaults();
    const originalText = clearButton.textContent;
    clearButton.textContent = "Salvos limpos";
    window.setTimeout(() => {
      clearButton.textContent = originalText;
    }, 1600);
  });

  copyButton?.addEventListener("click", async () => {
    const css = buildGungaCardAdjustCss(values);
    const originalText = copyButton.textContent;

    try {
      await copyTextToClipboard(css);
      copyButton.textContent = "CSS copiado";
    } catch (error) {
      copyButton.textContent = "Falha ao copiar";
    }

    window.setTimeout(() => {
      copyButton.textContent = originalText;
    }, 1800);
  });

  const togglePanel = (isOpen) => {
    panel.hidden = !isOpen;
    launcher.hidden = isOpen;
  };

  closeButton?.addEventListener("click", () => togglePanel(false));
  launcher.addEventListener("click", () => togglePanel(true));

  body.append(panel, launcher);
  togglePanel(true);

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

function buildFullscreenGalleryDots(total) {
  return Array.from({ length: total }, (_, index) => {
    return `<button class="tour-lightbox__dot" type="button" aria-label="Ir para foto ${index + 1}" data-lightbox-dot="${index}"></button>`;
  }).join("");
}

function updateFullscreenGalleryDots(overlay, activeIndex) {
  overlay.querySelectorAll("[data-lightbox-dot]").forEach((dot, index) => {
    const isActive = index === activeIndex;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function createFullscreenGalleryOverlay(label) {
  const overlay = document.createElement("div");
  overlay.className = "tour-lightbox";
  overlay.hidden = true;
  overlay.innerHTML = `
    <div class="tour-lightbox__dialog" role="dialog" aria-modal="true" aria-label="${label}">
      <button class="tour-lightbox__close" type="button" aria-label="Fechar galeria">
        <span aria-hidden="true">×</span>
      </button>
      <div class="tour-lightbox__image-wrap">
        <img class="tour-lightbox__image" src="" alt="" />
      </div>
      <div class="tour-lightbox__nav">
        <button class="tour-lightbox__nav-arrow tour-lightbox__nav-arrow--prev" type="button" aria-label="Imagem anterior">
          <span aria-hidden="true">‹</span>
        </button>
        <div class="tour-lightbox__dots" aria-live="polite"></div>
        <button class="tour-lightbox__nav-arrow tour-lightbox__nav-arrow--next" type="button" aria-label="Próxima imagem">
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  return overlay;
}

function wireFullscreenGallery(overlay, getState, setState) {
  const image = overlay.querySelector(".tour-lightbox__image");
  const closeButton = overlay.querySelector(".tour-lightbox__close");
  const prevButton = overlay.querySelector(".tour-lightbox__nav-arrow--prev");
  const nextButton = overlay.querySelector(".tour-lightbox__nav-arrow--next");
  const dotsContainer = overlay.querySelector(".tour-lightbox__dots");

  const render = () => {
    const state = getState();
    const current = state.images[state.activeIndex];
    if (!current) return;

    image.src = state.getSrc(current);
    image.alt = state.getAlt(current, state.activeIndex);
    updateFullscreenGalleryDots(overlay, state.activeIndex);
  };

  const goTo = (direction) => {
    const state = getState();
    if (!state.images.length) return;
    setState({
      ...state,
      activeIndex: (state.activeIndex + direction + state.images.length) % state.images.length
    });
    animateLightboxImageTransition(image, render);
  };

  const close = () => {
    overlay.hidden = true;
    document.body.style.overflow = "";
  };

  const open = () => {
    const state = getState();
    dotsContainer.innerHTML = buildFullscreenGalleryDots(state.images.length);
    dotsContainer.querySelectorAll("[data-lightbox-dot]").forEach((dot) => {
      dot.addEventListener("click", () => {
        const currentState = getState();
        setState({
          ...currentState,
          activeIndex: Number(dot.getAttribute("data-lightbox-dot")) || 0
        });
        animateLightboxImageTransition(image, render);
      });
    });
    render();
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
  };

  closeButton?.addEventListener("click", close);
  prevButton?.addEventListener("click", () => goTo(-1));
  nextButton?.addEventListener("click", () => goTo(1));
  bindLightboxSwipe(overlay, goTo);

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

  return { open, close, render };
}

function initializeHomeTourGallery() {
  const triggers = Array.from(document.querySelectorAll("[data-home-gallery-trigger]"));
  if (!triggers.length) return;

  const overlay = createFullscreenGalleryOverlay("Galeria do passeio em tela cheia");
  let state = {
    images: [],
    title: "Passeio",
    activeIndex: 0,
    getSrc: (current) => current,
    getAlt: (_current, index) => `${state.title} - foto ${index + 1}`
  };

  const gallery = wireFullscreenGallery(
    overlay,
    () => state,
    (nextState) => {
      state = nextState;
    }
  );

  triggers.forEach((trigger) => {
    const imageList = (trigger.getAttribute("data-gallery-images") || "")
      .split("|")
      .map((value) => value.trim())
      .filter(Boolean);

    if (!imageList.length) {
      trigger.disabled = true;
      return;
    }

    trigger.addEventListener("click", () => {
      state = {
        ...state,
        images: imageList,
        title: trigger.getAttribute("data-gallery-title") || "Passeio",
        activeIndex: 0
      };
      gallery.open();
    });
  });
}

function initializeTourLightboxes() {
  const galleries = document.querySelectorAll("[data-gallery]");
  if (!galleries.length) return;

  galleries.forEach((galleryElement) => {
    const images = Array.from(galleryElement.querySelectorAll("[data-lightbox-image]"));
    if (!images.length) return;

    const title = galleryElement.getAttribute("data-gallery-title") || "Passeio";
    const overlay = createFullscreenGalleryOverlay(`Galeria de ${title} em tela cheia`);
    let state = {
      images,
      title,
      activeIndex: 0,
      getSrc: (current) => current.currentSrc || current.src,
      getAlt: (current) => current.alt || `Imagem de ${title}`
    };

    const lightbox = wireFullscreenGallery(
      overlay,
      () => state,
      (nextState) => {
        state = nextState;
      }
    );

    images.forEach((img, index) => {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", () => {
        state = {
          ...state,
          activeIndex: index
        };
        lightbox.open();
      });
    });
  });
}

if (getGungaCardAdjustMode()) {
  createGungaCardAdjustTool();
} else if (getMilagresCardAdjustMode()) {
  createMilagresCardAdjustTool();
} else if (getMaragogiCardAdjustMode()) {
  createMaragogiCardAdjustTool();
} else if (getHeroAdjustMode()) {
  createHeroAdjustTool();
}

initializeToursCarousel();
initializeHomeToursCarousel();
initializeHomeTourGallery();
initializeTourGalleries();
initializeTourLightboxes();
initializeTourAccordion();
