/**
 * BUSCADORA ASTRAL - APLICAÇÃO PRINCIPAL
 * Interações globais, cálculo lunar, scroll e WhatsApp.
 */

// Número do WhatsApp oficial da cliente (configurável)
const WHATSAPP_NUMBER = "5521969689509"; 

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initMoonPhase();
  initScrollReveal();
  initWhatsAppLinks();
});

// Efeito de scroll na navbar
function initNavbarScroll() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Menu Mobile
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const body = document.body;
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('mobile-menu-active');
  });

  const links = document.querySelectorAll('.nav-link, .dropdown-menu a');
  links.forEach(l => {
    l.addEventListener('click', () => {
      if (!l.classList.contains('dropdown-toggle')) {
        body.classList.remove('mobile-menu-active');
      }
    });
  });
}

// Dados Astrológicos dos 12 Signos do Zodíaco
const ZODIAC_SIGNS = [
  { 
    name: 'Áries', 
    symbol: '♈', 
    element: 'Fogo',
    moonDesc: 'Impulso para agir com coragem, renovar atitudes e defender seu espaço, mantendo a paciência nas decisões.',
    advice: 'Canalize sua força interior para iniciar o que você adiou, mantendo a serenidade nas palavras.'
  },
  { 
    name: 'Touro', 
    symbol: '♉', 
    element: 'Terra',
    moonDesc: 'Busca por estabilidade, acolhimento dos sentidos, valorização do seu tempo e conexão com a matéria.',
    advice: 'Nutra o que traz segurança real à sua vida e desfrute do presente sem pressa.'
  },
  { 
    name: 'Gêmeos', 
    symbol: '♊', 
    element: 'Ar',
    moonDesc: 'Mente ágil e curiosa. Excelente para organizar ideias, desapegar de ruídos mentais e trocar diálogos leves.',
    advice: 'Filtre o excesso de pensamentos e priorize o que realmente traz leveza e clareza ao seu dia.'
  },
  { 
    name: 'Câncer', 
    symbol: '♋', 
    element: 'Água',
    moonDesc: 'Intuição aguçada, acolhimento emocional, autocuidado profundo e reconexão com o seu espaço sagrado.',
    advice: 'Respeite os seus sentimentos e dê a si mesmo o carinho e o descanso que você merece.'
  },
  { 
    name: 'Leão', 
    symbol: '♌', 
    element: 'Fogo',
    moonDesc: 'Expressão autêntica da alma, brilho pessoal, generosidade e fortalecimento do amor-próprio.',
    advice: 'Reconheça a sua luz própria e não tenha medo de ocupar o seu lugar de destaque no mundo.'
  },
  { 
    name: 'Virgem', 
    symbol: '♍', 
    element: 'Terra',
    moonDesc: 'Discernimento prático, atenção aos detalhes, simplificação de rotinas e cuidado com a saúde.',
    advice: 'Dê um passo de cada vez com método e lembre-se de que a simplicidade é o ápice da elegância.'
  },
  { 
    name: 'Libra', 
    symbol: '♎', 
    element: 'Ar',
    moonDesc: 'Busca por harmonia nas relações, diplomacia, senso estético elevado e paz interior.',
    advice: 'Busque a serenidade nos acordos e cultive a beleza nas pequenas coisas do seu cotidiano.'
  },
  { 
    name: 'Escorpião', 
    symbol: '♏', 
    element: 'Água',
    moonDesc: 'Transmutação profunda, percepção além do visível, cura emocional e regeneração magnética.',
    advice: 'Solte o controle do que já terminou e confie no poder de renovação da sua alma.'
  },
  { 
    name: 'Sagitário', 
    symbol: '♐', 
    element: 'Fogo',
    moonDesc: 'Otimismo, expansão da consciência, fé nos novos horizontes e busca por liberdade com sabedoria.',
    advice: 'Eleve o olhar para o futuro com esperança e permita-se aprender algo novo hoje.'
  },
  { 
    name: 'Capricórnio', 
    symbol: '♑', 
    element: 'Terra',
    moonDesc: 'Maturidade, foco em metas duradouras, compromisso com seus sonhos e disciplina amorosa.',
    advice: 'Honre a sua trajetória com paciência: cada tijolo colocado com propósito constrói um castelo sólido.'
  },
  { 
    name: 'Aquário', 
    symbol: '♒', 
    element: 'Ar',
    moonDesc: 'Visão inovadora, liberdade interior, quebra de velhos padrões mentais e empatia comunitária.',
    advice: 'Abrace a sua originalidade e abra espaço para caminhos novos e surpreendentes.'
  },
  { 
    name: 'Peixes', 
    symbol: '♓', 
    element: 'Água',
    moonDesc: 'Sensibilidade cósmica, conexão espiritual elevada, sonhos lúcidos, intuição e compaixão.',
    advice: 'Silencie a mente por alguns minutos, ouça sua intuição e confie no fluxo suave do universo.'
  }
];

// Cálculo e renderização da Fase Lunar, Signo do Zodíaco e Céu de Hoje
function initMoonPhase() {
  const moonNameEl = document.getElementById('current-moon-phase');
  const moonDescEl = document.getElementById('current-moon-desc');
  const moonDateEl = document.getElementById('current-celestial-date');
  const moonBadgeEl = document.getElementById('current-moon-sign-badge');
  const dailyAdviceEl = document.getElementById('current-daily-advice');
  const moonVisualEl = document.getElementById('current-moon-visual');

  const now = new Date();
  
  // Formatar data em português
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  if (moonDateEl) {
    moonDateEl.textContent = now.toLocaleDateString('pt-BR', options);
  }

  // Cálculo astronômico preciso das posições da Lua e do Sol
  const d = (now.getTime() - Date.UTC(2000, 0, 1, 12, 0, 0)) / 86400000;
  
  // Longitude do Sol
  const g = ((357.529 + 0.98560028 * d) % 360 + 360) % 360;
  const q = ((280.459 + 0.98564736 * d) % 360 + 360) % 360;
  const sunLon = (q + 1.915 * Math.sin(g * Math.PI / 180) + 0.020 * Math.sin(2 * g * Math.PI / 180)) % 360;
  
  // Longitude da Lua (com perturbações principais)
  const L = ((218.316 + 13.176396 * d) % 360 + 360) % 360;
  const M = ((134.963 + 13.064993 * d) % 360 + 360) % 360;
  const F = ((93.272 + 13.229350 * d) % 360 + 360) % 360;
  
  const moonLon = (L + 6.289 * Math.sin(M * Math.PI / 180) 
                     - 1.274 * Math.sin((L - 2*sunLon + M) * Math.PI / 180) 
                     + 0.658 * Math.sin(2*(L - sunLon) * Math.PI / 180) 
                     - 0.214 * Math.sin(2*M * Math.PI / 180) 
                     - 0.114 * Math.sin(2*F * Math.PI / 180) % 360 + 360) % 360;
  
  // Signo do Zodíaco
  const signIndex = Math.floor(moonLon / 30) % 12;
  const sign = ZODIAC_SIGNS[signIndex] || ZODIAC_SIGNS[2]; // fallback Gêmeos

  // Fase Lunar (diferença angular da elongação entre Lua e Sol)
  const elongation = (moonLon - sunLon + 360) % 360;
  let phaseName = 'Lua Minguante';
  let phaseClass = 'moon-waning';

  if (elongation >= 337.5 || elongation < 22.5) {
    phaseName = 'Lua Nova';
    phaseClass = 'moon-new';
  } else if (elongation >= 22.5 && elongation < 135) {
    phaseName = 'Lua Crescente';
    phaseClass = 'moon-waxing';
  } else if (elongation >= 135 && elongation < 225) {
    phaseName = 'Lua Cheia';
    phaseClass = 'moon-full';
  } else {
    phaseName = 'Lua Minguante';
    phaseClass = 'moon-waning';
  }

  // Renderização no HTML
  if (moonBadgeEl) {
    moonBadgeEl.innerHTML = `${sign.symbol} Lua em ${sign.name} &bull; ${sign.element}`;
  }

  if (moonNameEl) {
    moonNameEl.textContent = `${phaseName} em ${sign.name}`;
  }

  if (moonDescEl) {
    moonDescEl.textContent = sign.moonDesc;
  }

  if (dailyAdviceEl) {
    dailyAdviceEl.textContent = `"${sign.advice}"`;
  }

  if (moonVisualEl) {
    moonVisualEl.className = `moon-visual ${phaseClass}`;
  }
}

// Configuração dos links de WhatsApp com mensagens personalizadas
function initWhatsAppLinks() {
  const serviceButtons = document.querySelectorAll('[data-service-name]');
  serviceButtons.forEach(btn => {
    const serviceName = btn.getAttribute('data-service-name');
    const msg = encodeURIComponent(`Olá, Patrícia! Estive no seu site e gostaria de agendar um atendimento para: ${serviceName}. Como funciona para marcarmos?`);
    btn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    btn.target = "_blank";
  });

  const generalWhatsappBtns = document.querySelectorAll('.whatsapp-general-link');
  generalWhatsappBtns.forEach(btn => {
    const msg = encodeURIComponent("Olá, Patrícia! Estive no seu site e gostaria de tirar algumas dúvidas sobre as consultas online.");
    btn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    btn.target = "_blank";
  });
}

// Scroll Reveal
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });
}
