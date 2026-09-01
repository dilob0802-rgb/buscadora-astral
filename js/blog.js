/**
 * BUSCADORA ASTRAL - SABERES, ORÁCULOS & TERAPIAS
 * Sistema dinâmico de artigos com fotos místicas e filtros pelos 6 pilares:
 * Cartomancia, Tarô, Astrologia, Numerologia, Terapia Holística e Espiritualidade.
 */

const defaultBlogArticles = [
  {
    id: 1,
    category: "cartomancia",
    categoryLabel: "🃏 Cartomancia",
    image: "assets/cartomancia.jpg",
    date: "Hoje",
    title: "A Sabedoria do Baralho Cigano: Clareza Prática para Decisões Cruciais",
    excerpt: "Como as 36 lâminas do oráculo cigano atuam de forma direta e certeira para desatar nós em questões amorosas, financeiras e familiares.",
    content: `
      <p>Diferente de sistemas puramente filosóficos, o Baralho Cigano (Petit Lenormand) é um oráculo da terra, do cotidiano e da verdade crua. Suas lâminas falam a linguagem da realidade: mostram caminhos abertos, alianças, cartas que chegam, obstáculos e trevos de sorte.</p>
      
      <blockquote>"O baralho não inventa destinos; ele desvela o que já está em movimento nos fios invisíveis da sua vida."</blockquote>

      <h3>O Diálogo com as Cartas</h3>
      <p>Quando sentamos para uma tiragem de cartomancia, o objetivo não é criar dependência do futuro, mas resgatar a sua soberania de escolha. Saber antecipadamente a inclinação de uma energia permite que você se prepare, ajuste rotas ou acelere realizações com segurança.</p>
      
      <h3>Conselho da Buscadora</h3>
      <p>Antes de qualquer leitura, respire com calma e formule uma pergunta honesta. O oráculo sempre responde com a mesma clareza e franqueza com que é consultado.</p>
    `
  },
  {
    id: 2,
    category: "tarot",
    categoryLabel: "🔮 Tarô",
    image: "assets/tarot.jpg",
    date: "26 Ago",
    title: "Os Arcanos Maiores e o Espelho da Alma: A Jornada de Transformação",
    excerpt: "Como as cartas do Tarô revelam os ciclos profundos da psique humana e auxiliam na superação de bloqueios emocionais.",
    content: `
      <p>O Tarô é uma biblioteca sagrada em formato de imagens arquetípicas. Cada um dos 22 Arcanos Maiores representa uma etapa necessária do desenvolvimento humano — desde o passo de fé e inocência d’O Louco até a plenitude e integração total d’O Mundo.</p>
      
      <blockquote>"O Tarô é um espelho onde a alma se vê sem véus, com toda a sua beleza e seus mistérios a serem desvendados."</blockquote>

      <h3>Ouvindo o Arcano da sua Fase</h3>
      <p>Muitas vezes, quando uma fase difícil se instala, um único arcano pode trazer a chave de compreensão que faltava. Estar sob a regência da Torre, por exemplo, não é castigo: é a libertação necessária de velhas estruturas que já não comportam mais quem você se tornou.</p>
      
      <p>Nas nossas consultas, investigamos não apenas o 'o que vai acontecer', mas 'o que sua alma precisa aprender e curar neste momento'.</p>
    `
  },
  {
    id: 3,
    category: "terapia-holistica",
    categoryLabel: "🌿 Terapia Holística",
    image: "assets/terapia_holistica.jpg",
    date: "23 Ago",
    title: "Alinhamento dos Chakras & Terapia Holística: Restaurando seu Campo Vital",
    excerpt: "Entenda como a atuação como terapeuta holística formada harmoniza seus centros de força e dissolve cansaço, estresse e dores emocionais.",
    content: `
      <p>O ser humano não é apenas matéria física: somos uma rede pulsante de corpos sutis, pensamentos, emoções e centros de energia chamados <strong>Chakras</strong>. Quando esses centros ficam desarmonizados por sobrecarga, estresse ou mágoas acumuladas, o corpo físico e a mente sentem imediatamente o peso.</p>
      
      <blockquote>"Cuidar da energia não é misticismo abstrato; é higiene da alma e restauração da vitalidade que mantém sua vida em movimento."</blockquote>

      <h3>Como Atua a Sessão de Terapia Holística</h3>
      <p>Em meus atendimentos integrativos com formação profissional em Terapia Holística, realizamos:</p>
      <ul>
        <li><strong>Diagnóstico Energético:</strong> Leitura vibracional dos 7 chakras principais para identificar onde há estagnação ou dispersão.</li>
        <li><strong>Desobstrução e Limpeza:</strong> Técnicas integrativas para desatar nós energéticos acumulados no campo áurico.</li>
        <li><strong>Harmonização & Alinhamento:</strong> Aplicação de frequências vibracionais, cristais terapêuticos e aromas consagrados.</li>
        <li><strong>Prescrição Personalizada:</strong> Banhos de ervas medicinais, rituais de respiração e ancoramento para manter seu equilíbrio no dia a dia.</li>
      </ul>
      <p>Você sai da sessão com uma sensação palpável de leveza, clareza mental e paz profunda.</p>
    `
  },
  {
    id: 4,
    category: "astrologia",
    categoryLabel: "🌟 Astrologia",
    image: "assets/astrologia.jpg",
    date: "19 Ago",
    title: "A Dança das Luas e os Trânsitos Celestes: Sintonizando seu Relógio Cósmico",
    excerpt: "Descubra como os ciclos lunares e as movimentações planetárias influenciam suas marés internas e a tomada de decisões.",
    content: `
      <p>A Lua é o coração cósmico que rege nossas águas internas e marés psíquicas. Quem aprende a sincronizar seus projetos e emoções com as lunações deixa de lutar contra a correnteza e passa a navegar com os ventos astrais a seu favor.</p>
      
      <h3>O Ciclo das 4 Luas</h3>
      <ul>
        <li><strong>Lua Nova:</strong> Plantio silencioso, recolhimento fértil e definição de novas intenções.</li>
        <li><strong>Lua Crescente:</strong> Ação magnetizada, coragem e abertura de caminhos nos projetos.</li>
        <li><strong>Lua Cheia:</strong> Ápice do magnetismo, iluminação de revelações e sensibilidade onírica.</li>
        <li><strong>Lua Minguante:</strong> Limpeza, encerramento de ciclos nocivos e transmutação espiritual.</li>
      </ul>
      <p>Ao conhecer o seu mapa e o céu atual, você encontra o tempo certo de semear e o tempo certo de colher.</p>
    `
  },
  {
    id: 5,
    category: "numerologia",
    categoryLabel: "🔢 Numerologia",
    image: "assets/numerologia.jpg",
    date: "16 Ago",
    title: "A Numerologia das Cores: Violeta, Vinho, Coral e sua Frequência Sagrada",
    excerpt: "Como calcular sua vibração pessoal e utilizar as cores de poder para proteção, magnetismo e abertura de prosperidade.",
    content: `
      <p>No universo, tudo é número e vibração. Pitágoras e os sábios antigos já ensinavam que as cores que nos cercam são frequências luminosas equivalentes a notas musicais da alma.</p>
      
      <h3>A Frequência das Cores da Buscadora</h3>
      <p><strong>🔮 Violeta Transmutador (Chakras Superiores):</strong> A frequência mais elevada do espectro. Quebra miasmas psíquicos e conecta à intuição superior.</p>
      <p><strong>🍷 Vinho Ancestral:</strong> Nobreza, força de raízes, firmeza de propósito e proteção contra energias vampirizantes.</p>
      <p><strong>🪸 Coral Vibracional:</strong> O número da alegria vital, da fertilidade criativa e da atração magnética de bons encontros.</p>
      <p><strong>👑 Dourado Solar:</strong> Luz crística, prosperidade material e soberania espiritual.</p>
    `
  },
  {
    id: 6,
    category: "espiritualidade",
    categoryLabel: "🕯️ Espiritualidade",
    image: "assets/espiritualidade.jpg",
    date: "12 Ago",
    title: "O Sagrado no Dia a Dia: Banhos de Ervas, Defumação e Proteção da Aura",
    excerpt: "Rituais ancestrais e simples para limpar a atmosfera do seu lar, proteger o sono e manter seu campo áurico blindado.",
    content: `
      <p>Espiritualidade viva não exige rituais mirabolantes ou distantes da sua rotina. Ela floresce na intenção consciente com que você acende uma vela, prepara uma xícara de chá ou consagra um punhado de folhas verdes ao seu banho.</p>
      
      <blockquote>"Sua casa é o templo da sua mente; sua aura é o manto da sua alma. Cuide de ambos com amor diário."</blockquote>

      <h3>O Poder do Banho de Alecrim com Lavanda</h3>
      <p>Para noites de insônia, cansaço mental ou peso após interações densas:</p>
      <ul>
        <li>Ferva 1 litro de água pura e desligue o fogo.</li>
        <li>Acrescente um ramo de alecrim fresco (clareza e alegria) e uma colher de lavanda (paz e relaxamento).</li>
        <li>Abrafe por 10 minutos mentalizando luz violeta e dourada envolvendo seu corpo.</li>
        <li>Tome o banho do pescoço para baixo após o seu banho de higiene, deixando a água secar suavemente na pele.</li>
      </ul>
    `
  }
];

// Obter todos os artigos (padrão + criados no painel administrativo)
function getAllArticles() {
  const custom = localStorage.getItem("buscadora_custom_articles");
  try {
    const parsed = custom ? JSON.parse(custom) : [];
    return [...parsed, ...defaultBlogArticles];
  } catch (e) {
    return defaultBlogArticles;
  }
}

function initBlog() {
  const blogGrid = document.getElementById('blog-grid');
  const categoryBtns = document.querySelectorAll('.category-btn');
  const searchInput = document.getElementById('blog-search-input');
  
  // Elementos do Modal de Leitura
  const modal = document.getElementById('article-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const modalTag = document.getElementById('modal-article-tag');
  const modalDate = document.getElementById('modal-article-date');
  const modalTitle = document.getElementById('modal-article-title');
  const modalBody = document.getElementById('modal-article-body');

  if (!blogGrid) return;

  let currentCategory = 'all';
  let searchTerm = '';

  function renderArticles() {
    blogGrid.innerHTML = '';
    const allArticles = getAllArticles();

    const filtered = allArticles.filter(art => {
      const matchCat = currentCategory === 'all' || art.category === currentCategory;
      const matchSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          art.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      blogGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
          <p style="font-size: 1.2rem; font-family: var(--font-serif-sub); font-style: italic;">
            Nenhum conteúdo encontrado para esta busca astral. Escolha outro tema acima.
          </p>
        </div>
      `;
      return;
    }

    filtered.forEach(art => {
      const card = document.createElement('article');
      card.className = 'blog-card reveal-on-scroll revealed';
      const imgSrc = art.image || 'assets/oracle_cards.jpg';
      
      card.innerHTML = `
        <div class="blog-card-media">
          <img src="${imgSrc}" alt="${art.title}" class="blog-card-img" loading="lazy">
          <div class="blog-card-media-overlay"></div>
          <span class="blog-tag tag-${art.category}">${art.categoryLabel}</span>
        </div>
        <div class="blog-card-header">
          <span class="blog-date">📅 ${art.date}</span>
        </div>
        <div class="blog-card-body">
          <h3 class="blog-card-title">${art.title}</h3>
          <p class="blog-card-excerpt">${art.excerpt}</p>
          <button class="read-more-btn" data-id="${art.id}">
            Ler Crônica Completa <span>→</span>
          </button>
        </div>
      `;

      card.querySelector('.read-more-btn').addEventListener('click', () => openArticleModal(art));
      blogGrid.appendChild(card);
    });
  }

  function openArticleModal(art) {
    if (!modal) return;
    modalTag.textContent = art.categoryLabel;
    modalTag.className = `blog-tag tag-${art.category}`;
    modalDate.textContent = art.date;
    modalTitle.textContent = art.title;
    
    const imgSrc = art.image || 'assets/oracle_cards.jpg';
    modalBody.innerHTML = `
      <div class="modal-featured-image">
        <img src="${imgSrc}" alt="${art.title}" style="width: 100%; max-height: 320px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1.8rem; border: 1px solid var(--parchment-border); box-shadow: 0 5px 20px rgba(0,0,0,0.15);">
      </div>
      ${art.content}
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Filtragem por botões de categoria
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderArticles();
    });
  });

  // Campo de busca
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      renderArticles();
    });
  }

  // Interação a partir do Dropdown da Navbar
  window.filterBlogByCategory = function(category) {
    currentCategory = category;
    categoryBtns.forEach(b => {
      if (b.getAttribute('data-category') === category) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
    renderArticles();

    const saberesSection = document.getElementById('saberes') || document.getElementById('diario');
    if (saberesSection) {
      saberesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Escuta cliques nos links de dropdown da barra superior
  const dropdownLinks = document.querySelectorAll('#nav-saberes-dropdown a[data-category]');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const category = link.getAttribute('data-category');
      if (category) {
        window.filterBlogByCategory(category);
      }
    });
  });

  renderArticles();
}

document.addEventListener('DOMContentLoaded', initBlog);
