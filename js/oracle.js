/**
 * BUSCADORA ASTRAL - ORÁCULO DO PERGAMINHO (CARTA DO DIA)
 * Experiência interativa com mensagens profundas e reflexões astrais.
 */

const oracleCardsData = [
  {
    id: 1,
    name: "O Sol Dourado",
    archetype: "Clareza & Vitalidade Astral",
    symbol: "☀️",
    number: "XIX",
    message: "A luz da verdade dissipa qualquer névoa. Hoje, seus caminhos estão iluminados com calor, entusiasmo e revelação. O que estava oculto agora se mostra em toda a sua beleza.",
    advice: "Confie na sua autenticidade. Compartilhe sua energia calorosa e assuma o protagonismo do seu dia com confiança.",
    color: "#e5c365"
  },
  {
    id: 2,
    name: "A Sacerdotisa dos Portais",
    archetype: "Intuição & Mistérios Ocultos",
    symbol: "🔮",
    number: "II",
    message: "O véu entre o visível e o invisível está sutil. Há um conhecimento profundo repousando no silêncio do seu ser. O pergaminho da sua alma guarda respostas que a pressa não consegue ler.",
    advice: "Antes de agir no mundo externo, silencie e escute sua voz interior. Os sinais e sonhos de hoje carregam mensagens valiosas.",
    color: "#a855f7"
  },
  {
    id: 3,
    name: "A Roda das Estrelas",
    archetype: "Ciclos & Transformação Cósmica",
    symbol: "☸️",
    number: "X",
    message: "O tempo não é uma linha reta, mas uma espiral sagrada. Os ventos astrais estão mudando o cenário ao seu favor. Um ciclo antigo se encerra com gratidão para dar lugar ao novo florescer.",
    advice: "Abrace as mudanças com leveza. Não lute contra o fluxo cósmico: ajuste suas velas e confie no ritmo divino.",
    color: "#ff6f59"
  },
  {
    id: 4,
    name: "A Estrela Guia",
    archetype: "Esperança & Alinhamento Espiritual",
    symbol: "✨",
    number: "XVII",
    message: "Mesmo na noite mais escura, as constelações indicam a direção certa. Há uma renovação profunda de fé, cura e serenidade banhando seus projetos e seu coração.",
    advice: "Mantenha a pureza de intenção. Você está no caminho sagrado, continue emanando sua verdadeira luz.",
    color: "#fae8a4"
  },
  {
    id: 5,
    name: "A Imperatriz Criativa",
    archetype: "Abundância & Nutrição da Alma",
    symbol: "👑",
    number: "III",
    message: "A semente da sua ideia está pronta para germinar em solo fértil. A beleza, a harmonia e a prosperidade pedem passagem através do afeto e do cuidado consigo mesma.",
    advice: "Dedique tempo ao que te faz sentir viva e nutrida. Cultive seus relacionamentos e celebre a abundância presente.",
    color: "#ff8a78"
  },
  {
    id: 6,
    name: "O Eremita da Sabedoria",
    archetype: "Reflexão & Luz Interior",
    symbol: "🕯️",
    number: "IX",
    message: "Com uma lanterna antiga e passos firmes na colina, o sábio sabe que a verdade não faz alarde. Um momento de introspecção trará a chave que você procurava.",
    advice: "Dê uma pausa no barulho do mundo. Um momento de leitura, estudo ou contemplação trará uma epifania crucial.",
    color: "#c8b082"
  }
];

function initOracle() {
  const cardsContainer = document.getElementById('oracle-spread');
  const resultBox = document.getElementById('oracle-result');
  const shuffleBtn = document.getElementById('btn-shuffle-oracle');
  
  if (!cardsContainer || !resultBox) return;

  function renderCards() {
    cardsContainer.innerHTML = '';
    resultBox.classList.remove('active');

    // Embaralhar as cartas
    const shuffled = [...oracleCardsData].sort(() => 0.5 - Math.random()).slice(0, 4);

    shuffled.forEach((card, index) => {
      const cardEl = document.createElement('div');
      cardEl.className = 'tarot-card';
      cardEl.setAttribute('data-index', index);
      cardEl.innerHTML = `
        <div class="tarot-card-face card-back">
          <div class="card-back-pattern">
            <span>✧</span>
            <small style="font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold-primary);">Buscadora</small>
            <span>📜</span>
            <small style="font-size: 0.6rem; opacity: 0.7;">Toque para revelar</small>
          </div>
        </div>
        <div class="tarot-card-face card-front">
          <div style="font-size: 2.2rem; margin-bottom: 0.3rem;">${card.symbol}</div>
          <strong style="font-family: var(--font-serif-title); font-size: 0.85rem; color: #3b092b; text-align: center;">${card.name}</strong>
          <span style="font-size: 0.7rem; color: #7a5c3d; margin-top: 0.2rem;">Arcano ${card.number}</span>
        </div>
      `;

      cardEl.addEventListener('click', () => revealCard(cardEl, card));
      cardsContainer.appendChild(cardEl);
    });
  }

  function revealCard(cardElement, cardData) {
    if (cardElement.classList.contains('revealed')) return;

    // Desabilitar outros cliques
    const allCards = document.querySelectorAll('.tarot-card');
    allCards.forEach(c => {
      if (c !== cardElement) {
        c.style.opacity = '0.35';
        c.style.pointerEvents = 'none';
      }
    });

    cardElement.classList.add('revealed');

    // Preencher o resultado
    document.getElementById('result-card-symbol').textContent = cardData.symbol;
    document.getElementById('result-card-name').textContent = `${cardData.name} (${cardData.number})`;
    document.getElementById('result-card-archetype').textContent = cardData.archetype;
    document.getElementById('result-card-message').textContent = cardData.message;
    document.getElementById('result-card-advice').textContent = cardData.advice;

    // Botão de WhatsApp personalizado com a carta tirada
    const whatsappBtn = document.getElementById('btn-whatsapp-oracle');
    if (whatsappBtn) {
      const msg = encodeURIComponent(`Olá, Buscadora Astral! Tirei a carta "${cardData.name}" no Oráculo do site e gostaria de aprofundar essa mensagem em uma consulta.`);
      whatsappBtn.href = `https://wa.me/5511999999999?text=${msg}`;
    }

    setTimeout(() => {
      resultBox.classList.add('active');
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 500);
  }

  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', renderCards);
  }

  renderCards();
}

document.addEventListener('DOMContentLoaded', initOracle);
