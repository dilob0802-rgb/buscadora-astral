/**
 * BUSCADORA ASTRAL - APLICAÇÃO PRINCIPAL
 * Interações globais, cálculo lunar, scroll e WhatsApp.
 */

// Número do WhatsApp oficial da cliente (configurável)
const WHATSAPP_NUMBER = "5511999999999"; 

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

// Cálculo e renderização da Fase Lunar e Céu de Hoje
function initMoonPhase() {
  const moonNameEl = document.getElementById('current-moon-phase');
  const moonDescEl = document.getElementById('current-moon-desc');
  const moonDateEl = document.getElementById('current-celestial-date');

  const now = new Date();
  
  // Formatar data em português
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  if (moonDateEl) {
    moonDateEl.textContent = now.toLocaleDateString('pt-BR', options);
  }

  // Cálculo simplificado de fase lunar
  const lp = 2551443; 
  const nowSec = now.getTime() / 1000;
  const newMoon = 592500;
  const phase = ((nowSec - newMoon) % lp) / lp;

  let phaseName = "Lua Crescente Iluminada";
  let phaseDesc = "Período fértil para plantio de intenções, abertura de caminhos e consagração de projetos.";

  if (phase < 0.05 || phase > 0.95) {
    phaseName = "Lua Nova de Mistérios";
    phaseDesc = "Momento de recolhimento, silêncio sagrado e nascimento de novos propósitos na alma.";
  } else if (phase < 0.25) {
    phaseName = "Lua Crescente Sagrada";
    phaseDesc = "Energia em expansão. Ideal para buscar clareza nos oráculos e impulsionar planos.";
  } else if (phase < 0.55) {
    phaseName = "Lua Cheia Radiante";
    phaseDesc = "O ápice do magnetismo, iluminação das sombras e grande sensibilidade aos sinais oníricos.";
  } else {
    phaseName = "Lua Minguante Sábia";
    phaseDesc = "Limpeza espiritual, corte de laços densos e transmutação profunda de energias.";
  }

  if (moonNameEl) moonNameEl.textContent = phaseName;
  if (moonDescEl) moonDescEl.textContent = phaseDesc;
}

// Configuração dos links de WhatsApp com mensagens personalizadas
function initWhatsAppLinks() {
  const serviceButtons = document.querySelectorAll('[data-service-name]');
  serviceButtons.forEach(btn => {
    const serviceName = btn.getAttribute('data-service-name');
    const msg = encodeURIComponent(`Olá, Buscadora Astral! Estive no seu site e gostaria de agendar um atendimento para: ${serviceName}. Como podemos prosseguir?`);
    btn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    btn.target = "_blank";
  });

  const generalWhatsappBtns = document.querySelectorAll('.whatsapp-general-link');
  generalWhatsappBtns.forEach(btn => {
    const msg = encodeURIComponent("Olá, Buscadora Astral! Gostaria de conhecer melhor seus atendimentos e oráculos.");
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
