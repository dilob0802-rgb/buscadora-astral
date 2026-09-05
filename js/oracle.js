/**
 * BUSCADORA ASTRAL - CARTA DO DIA (ORÁCULO INTERATIVO)
 * Interação leve, alegre e acolhedora com imagens dos Arcanos Maiores do Tarô.
 */

const oracleCardsData = [
  {
    id: 1,
    name: "O Mago",
    number: "I",
    archetype: "Criatividade & Novos Começos",
    image: "assets/cards/o_mago.jpg",
    message: "Hoje é um dia com energia excelente para colocar suas ideias em prática! Você tem em mãos todas as habilidades e a criatividade necessárias para dar o primeiro passo naquele plano ou conversa importante.",
    advice: "Confie na sua capacidade e tome a iniciativa. O universo adora quem se movimenta com alegria e atitude!",
    color: "#e5c365"
  },
  {
    id: 2,
    name: "A Sacerdotisa",
    number: "II",
    archetype: "Intuição & Sabedoria Interior",
    image: "assets/cards/a_sacerdotisa.jpg",
    message: "Sabe aquele pressentimento bom ou aquela voz suave no peito? Sua intuição está super afinada hoje. Um momento de calma trará a clareza que nenhuma pressa conseguiria alcançar.",
    advice: "Não tenha pressa. Respire fundo, observe com carinho e escute o que o seu coração está dizendo.",
    color: "#a855f7"
  },
  {
    id: 3,
    name: "A Imperatriz",
    number: "III",
    archetype: "Prosperidade, Cuidado & Brilho Pessoal",
    image: "assets/cards/a_imperatriz.jpg",
    message: "Energia linda de afeto, florescimento e boas notícias! A Imperatriz lembra você de se cuidar com carinho, celebrar quem você é e se abrir para receber coisas boas na vida pessoal e financeira.",
    advice: "Faça algo gostoso por você hoje: uma pausa relaxante, um momento com quem você ama ou um mimo que renove seu bem-estar.",
    color: "#ff8a78"
  },
  {
    id: 4,
    name: "A Roda da Fortuna",
    number: "X",
    archetype: "Boas Mudanças & Novas Oportunidades",
    image: "assets/cards/a_roda_da_fortuna.jpg",
    message: "A energia está se movimentando para o seu bem! Uma reviravolta positiva ou uma oportunidade inesperada pode surgir para destravar aquilo que parecia empacado.",
    advice: "Abrace os novos momentos com leveza. Quando a vida muda o ritmo, é para nos levar a lugares ainda melhores!",
    color: "#ff6f59"
  },
  {
    id: 5,
    name: "A Estrela",
    number: "XVII",
    archetype: "Esperança, Boas Notícias & Paz",
    image: "assets/cards/a_estrela.jpg",
    message: "Pode respirar aliviada: vem aí um momento de muita serenidade, boas notícias e clareza para os seus planos. Seus sonhos têm fundamento e caminhos bonitos estão se abrindo.",
    advice: "Mantenha o pensamento leve e o coração confiante. O que é seu por merecimento está encontrando o caminho até você!",
    color: "#fae8a4"
  },
  {
    id: 6,
    name: "O Sol",
    number: "XIX",
    archetype: "Alegria, Sucesso & Vitalidade",
    image: "assets/cards/o_sol.jpg",
    message: "Dia iluminado, alegre e cheio de boas vibrações! O Sol traz clareza total para qualquer dúvida que você tinha, energia positiva nos seus relacionamentos e motivos para sorrir.",
    advice: "Espalhe seu bom humor, comemore cada pequena vitória do dia e aproveite essa energia gostosa e contagiante!",
    color: "#e5c365"
  },
  {
    id: 7,
    name: "O Mundo",
    number: "XXI",
    archetype: "Realização & Ciclo Vitorioso",
    image: "assets/cards/o_mundo.jpg",
    message: "Sensação maravilhosa de bem-estar e conquista! Uma etapa importante da sua vida se conclui com sucesso, abrindo espaço para novas alegrias e realizações ainda maiores.",
    advice: "Olhe para a sua trajetória com orgulho e gratidão. Você aprendeu muito e está pronta para viver coisas incríveis!",
    color: "#38bdf8"
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

    // Embaralhar e sortear 4 cartas para a mesa
    const shuffled = [...oracleCardsData].sort(() => 0.5 - Math.random()).slice(0, 4);

    shuffled.forEach((card, index) => {
      const cardEl = document.createElement('div');
      cardEl.className = 'tarot-card';
      cardEl.setAttribute('data-index', index);
      cardEl.innerHTML = `
        <div class="tarot-card-face card-back">
          <div class="card-back-pattern">
            <span class="card-back-star">✧</span>
            <small class="card-back-brand">Patricia Tarô</small>
            <span class="card-back-symbol">🎴</span>
            <small class="card-back-hint">Toque para tirar</small>
          </div>
        </div>
        <div class="tarot-card-face card-front">
          <img src="${card.image}" alt="Carta de Tarô: ${card.name}" class="tarot-card-img" />
          <div class="tarot-card-caption">
            <strong>${card.name}</strong>
            <span>Arcano ${card.number}</span>
          </div>
        </div>
      `;

      cardEl.addEventListener('click', () => revealCard(cardEl, card));
      cardsContainer.appendChild(cardEl);
    });
  }

  function revealCard(cardElement, cardData) {
    if (cardElement.classList.contains('revealed')) return;

    // Desabilitar outros cliques para manter o foco na carta escolhida
    const allCards = document.querySelectorAll('.tarot-card');
    allCards.forEach(c => {
      if (c !== cardElement) {
        c.style.opacity = '0.35';
        c.style.pointerEvents = 'none';
      }
    });

    cardElement.classList.add('revealed');

    // Preencher o resultado com a imagem da carta e o conselho alegre e acolhedor
    const resultImg = document.getElementById('result-card-image');
    if (resultImg) {
      resultImg.src = cardData.image;
      resultImg.alt = `Arcano ${cardData.number} - ${cardData.name}`;
    }

    const nameEl = document.getElementById('result-card-name');
    if (nameEl) nameEl.textContent = `${cardData.name} (Arcano ${cardData.number})`;

    const archEl = document.getElementById('result-card-archetype');
    if (archEl) archEl.textContent = cardData.archetype;

    const msgEl = document.getElementById('result-card-message');
    if (msgEl) msgEl.textContent = cardData.message;

    const advEl = document.getElementById('result-card-advice');
    if (advEl) advEl.textContent = cardData.advice;

    // Link para conversar no WhatsApp sobre a carta tirada
    const whatsappBtn = document.getElementById('btn-whatsapp-oracle');
    if (whatsappBtn) {
      const textMsg = encodeURIComponent(`Olá, Patrícia! Tirei a carta "${cardData.name}" na tiragem do site e adorei o conselho! Gostaria de agendar uma consulta com você para conversar mais.`);
      whatsappBtn.href = `https://wa.me/5521969689509?text=${textMsg}`;
      whatsappBtn.target = "_blank";
    }

    setTimeout(() => {
      resultBox.classList.add('active');
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 450);
  }

  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', renderCards);
  }

  renderCards();
}

document.addEventListener('DOMContentLoaded', initOracle);

