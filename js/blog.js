/**
 * BUSCADORA ASTRAL - DIÁRIO ASTRAL & CRÔNICAS DO SABER
 * Sistema dinâmico de artigos com filtros, busca e leitor estilo pergaminho.
 */

const defaultBlogArticles = [
  {
    id: 1,
    category: "ceu-do-dia",
    categoryLabel: "Céu do Dia",
    date: "Hoje",
    title: "A Dança das Luas e o Despertar da Intuição Feminina",
    excerpt: "Como sintonizar seu campo energético com as fases lunares e potencializar a clareza nas tomadas de decisão diárias.",
    content: `
      <p>A Lua é o grande espelho cósmico das nossas emoções e águas internas. Quando aprendemos a observar em qual fase ela transita, deixamos de lutar contra a maré e passamos a fluir com os ventos astrais.</p>
      
      <blockquote>"Assim como a maré obedece ao chamado da Lua, nossa psique responde aos ritmos silenciosos do céu noturno."</blockquote>

      <h3>O Momento Presente no Céu</h3>
      <p>Nos períodos de transição lunar, os véus da sensibilidade ficam mais tênues. É um momento propício para acender uma vela aromática, pegar o baralho ou caderno de anotações e permitir que a mente repouse. Não tenha pressa em tomar decisões definitivas; permita que o discernimento se assente com o cair da noite.</p>
      
      <p>Observe seus sentimentos sem julgá-los: eles são mensageiros sagrados do seu subconsciente.</p>
    `
  },
  {
    id: 2,
    category: "cartas",
    categoryLabel: "Aprenda Cartas",
    date: "24 Ago",
    title: "O Mistério das Lâminas: Como Consagrar e Conversar com seu Baralho",
    excerpt: "Um guia sagrado para quem está iniciando no Tarô ou Baralho Cigano: criando intimidade com seus oráculos.",
    content: `
      <p>Antes de interpretar símbolos complexos, o leitor de cartas precisa desenvolver o que os antigos chamavam de <em>escuta intuitiva</em>. O baralho não é apenas um punhado de papel impresso; ele se torna um portal quando impregnado com a sua energia e reverência.</p>
      
      <h3>O Ritual Simples de Consagração</h3>
      <p>Para criar conexão com um novo oráculo:</p>
      <ul>
        <li>Passe cada lâmina suavemente pela fumaça de um incenso de lavanda, mirra ou alecrim.</li>
        <li>Durma uma noite com as cartas próximas à sua cabeceira ou sob o travesseiro.</li>
        <li>Embaralhe em silêncio, sentindo o peso e a textura de cada carta, fazendo uma oração ou afirmação de intenção de luz.</li>
      </ul>

      <blockquote>"As cartas não determinam o seu destino; elas iluminam as veredas para que você escolha com sabedoria por onde caminhar."</blockquote>
    `
  },
  {
    id: 3,
    category: "sonhos",
    categoryLabel: "Significado dos Sonhos",
    date: "20 Ago",
    title: "Mapas Oníricos: O Sonho do Pergaminho e a Linguagem Oculta da Noite",
    excerpt: "A história do sonho que revelou o caminho das cartas e como identificar sonhos premonitórios e arquetípicos.",
    content: `
      <p>Há sonhos que são apenas o eco dos acontecimentos do dia. Mas existem sonhos que chegam como relâmpagos dourados — sonhos que marcam a alma para sempre e que carregam uma textura tão viva que parecemos ter viajado a outra dimensão.</p>
      
      <h3>A Visão do Pergaminho Antigo</h3>
      <p>Quando iniciei minha jornada com as cartas, fui presenteada em sonho com um pergaminho medieval de bordas amareladas. Ali estavam traçados mapas celestes, constelações e símbolos arcanos que pareciam narrar a história viva de cada lâmina. Aquele sonho não foi mero acaso: foi a confirmação de que os oráculos são mapas de navegação da nossa jornada terrena.</p>

      <h3>Como Decifrar Seus Sonhos</h3>
      <p>Ao acordar de um sonho intenso, anote imediatamente antes de levantar:</p>
      <ul>
        <li><strong>A emoção predominante:</strong> você sentia paz, alerta, fascínio ou mistério?</li>
        <li><strong>Os símbolos centrais:</strong> animais, chaves, águas, portas, pergaminhos ou cartas.</li>
        <li><strong>As cores marcantes:</strong> violeta, vinho, dourado ou branco trazem mensagens específicas de cura e despertar.</li>
      </ul>
    `
  },
  {
    id: 4,
    category: "cronicas",
    categoryLabel: "Crônicas & Saberes",
    date: "15 Ago",
    title: "A Numerologia das Cores: Violeta, Vinho, Coral e a Chama Dourada",
    excerpt: "Entenda a frequência vibracional das cores e como usá-las para proteção, expansão de consciência e magnetismo.",
    content: `
      <p>Cada cor é uma nota musical no teclado do universo. Quando alinhamos nossa vestimenta, nossos altares e nossos espaços com a nossa assinatura vibracional, criamos uma barreira de proteção e uma antena de atração para energias nobres.</p>
      
      <h3>As Cores Sagradas da Buscadora</h3>
      <p><strong>O Violeta:</strong> A mais alta frequência do espectro visível. Transmuta mágoas e abre a visão espiritual (Chakra Frontal e Coronário).</p>
      <p><strong>O Vinho:</strong> Nobreza, ancoramento e conexão com o mistério primordial e a força ancestral.</p>
      <p><strong>O Coral:</strong> Frequência numerológica de criatividade, vitalidade, acolhimento e calor humano.</p>
      <p><strong>O Dourado & Branco:</strong> Pureza, iluminação solar e a presença da centelha divina em tudo o que tocamos.</p>
    `
  }
];

// Obter todos os artigos (padrão + criados no painel)
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
  
  // Elementos do Modal
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
          <p style="font-size: 1.2rem; font-family: var(--font-serif-sub); font-style: italic;">Nenhuma crônica encontrada para esta busca astral.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(art => {
      const card = document.createElement('article');
      card.className = 'blog-card reveal-on-scroll';
      card.innerHTML = `
        <div class="blog-card-header">
          <span class="blog-tag">${art.categoryLabel}</span>
          <span class="blog-date">${art.date}</span>
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
    modalDate.textContent = art.date;
    modalTitle.textContent = art.title;
    modalBody.innerHTML = art.content;
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

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderArticles();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      renderArticles();
    });
  }

  renderArticles();
}

document.addEventListener('DOMContentLoaded', initBlog);
