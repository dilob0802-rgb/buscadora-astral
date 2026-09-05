/**
 * BUSCADORA ASTRAL - AUTOCONHECIMENTO
 * Artigos dinâmicos com visual harmonizado estilo Personare:
 * Foto no topo, categoria em destaque, título marcante e assinatura de Patricia Tarô.
 */

const defaultBlogArticles = [
  {
    id: 1,
    category: "astrologia",
    categoryBadge: "AUTOCONHECIMENTO",
    categoryLabel: "Astrologia",
    authorRole: "Astrologia",
    image: "assets/astrologia.jpg",
    date: "Hoje",
    title: "CALCULADORA DE ASCENDENTE: DESCUBRA O SEU SIGNO MAIS IMPORTANTE!",
    excerpt: "Entenda por que o Ascendente dita a sua energia de chegada no mundo, a primeira impressão que você passa e como você inicia novos projetos na vida.",
    content: `
      <p>Muita gente conhece apenas o seu signo solar — aquele do dia do nascimento. Mas na Astrologia, o <strong>Signo Ascendente</strong> é o ponto mais pessoal e exato do seu mapa natal: ele revela como sua energia se apresenta para a vida, como as pessoas te enxergam de primeira e a lente pela qual você encara seus desafios diários.</p>
      
      <blockquote>"O Sol é a sua essência interior; o Ascendente é a sua nave de navegação neste mundo."</blockquote>

      <h3>Por que conhecer o seu Ascendente muda tudo?</h3>
      <p>Ao compreender o seu signo ascendente e os planetas que o regem, você aprende a respeitar o seu próprio ritmo de ação. Um ascendente em Fogo pede movimento e liderança, enquanto um ascendente em Terra precisa de passos firmes e segurança palpável antes de arriscar.</p>

      <h3>Como aprofundar na Consulta Online</h3>
      <p>Em nosso atendimento de <strong>Mapa Astral</strong>, analisamos detalhadamente o seu Ascendente, meio do céu e posições planetárias para te dar um guia claro e prático de vida.</p>
    `
  },
  {
    id: 2,
    category: "astrologia",
    categoryBadge: "AUTOCONHECIMENTO",
    categoryLabel: "Astrologia",
    authorRole: "Astrologia",
    image: "assets/hero_bg.jpg",
    date: "Ontem",
    title: "FASES DA LUA E DECISÕES: COMO USAR CADA CICLO A SEU FAVOR",
    excerpt: "Descubra como as quatro fases lunares afetam sua energia mental, suas emoções e o melhor momento para agir ou se recolher.",
    content: `
      <p>A Lua é o corpo celeste mais próximo da Terra e rege diretamente nossos humores, intuição e marés emocionais. Sintonizar seus projetos com as fases lunares é uma forma prática de não remar contra a maré.</p>
      
      <blockquote>"Quando você respeita o ritmo da Lua, suas decisões ganham força natural e menos desgaste."</blockquote>

      <h3>As 4 Fases e seus Poderes:</h3>
      <ul>
        <li><strong>Lua Nova:</strong> Plantio de intenções, novos começos e planejamento silencioso.</li>
        <li><strong>Lua Crescente:</strong> Ação, superação de obstáculos e impulsionamento prático.</li>
        <li><strong>Lua Cheia:</strong> Ápice do magnetismo, clareza total e celebração de resultados.</li>
        <li><strong>Lua Minguante:</strong> Desapego, limpeza de pendências, descanso e discernimento.</li>
      </ul>
      <p>Acompanhe o widget de Céu do Dia em nossa página inicial para saber o trânsito da Lua a cada momento!</p>
    `
  },
  {
    id: 3,
    category: "tarot",
    categoryBadge: "AMOR",
    categoryLabel: "Tarô",
    authorRole: "Cartomancia",
    image: "assets/tarot.jpg",
    date: "28 Ago",
    title: "AMOR E RELACIONAMENTOS: COMO O TARÔ AJUDA A DESTRAVAR A VIDA A DOIS",
    excerpt: "Como as cartas de Cartomancia e Tarô trazem clareza sem rodeios sobre sentimentos, intenções e o futuro da sua vida amorosa.",
    content: `
      <p>Dúvidas no amor tiram o sono de qualquer pessoa: *Será que ele(a) sente o mesmo?*, *Vale a pena insistir nessa história?*, *Como atrair uma relação saudável e madura?*. O Tarô atua como um conselheiro afetuoso e transparente nesses momentos.</p>
      
      <blockquote>"O oráculo não serve para alimentar ilusões, mas para devolver a sua paz e a sua segurança de caminhar."</blockquote>

      <h3>O que a Tiragem de Amor revela:</h3>
      <ul>
        <li>O que está no coração e no pensamento da outra pessoa</li>
        <li>Os bloqueios invisíveis que impedem a conexão de fluir</li>
        <li>Tendências reais para os próximos meses</li>
        <li>Conselho prático para você se valorizar e ser feliz</li>
      </ul>
      <p>Cada consulta é feita com carinho, discrição e respeito absoluto pela sua história.</p>
    `
  },
  {
    id: 4,
    category: "numerologia",
    categoryBadge: "AUTOCONHECIMENTO",
    categoryLabel: "Numerologia",
    authorRole: "Numerologia",
    image: "assets/numerologia.jpg",
    date: "25 Ago",
    title: "CORREÇÃO DO NOME SOCIAL E ASSINATURA: O PODER DOS NÚMEROS PESSOAIS",
    excerpt: "Como pequenas alterações na assinatura e no nome social ajustam sua frequência vibracional e destravam prosperidade e carreira.",
    content: `
      <p>Cada letra do alfabeto possui uma correspondência numérica e uma vibração energética única. A forma como assinamos documentos e nos apresentamos profissionalmente cria um padrão de atração no universo.</p>
      
      <blockquote>"Sua assinatura é a sua marca cósmica no mundo físico."</blockquote>

      <h3>O que fazemos na análise numerológica:</h3>
      <ul>
        <li><strong>Mapa Vocacional:</strong> Identificação clara dos seus maiores talentos profissionais.</li>
        <li><strong>Eliminação de Sequências Negativas:</strong> Ajuste de repetições que causam lentidão ou instabilidade financeira.</li>
        <li><strong>Assinatura de Poder:</strong> Criação de uma grafia harmonizada para contratos, projetos e vida pública.</li>
      </ul>
      <p>Muitas pessoas relatam uma virada de chave impressionante nos negócios logo após alinharem sua assinatura!</p>
    `
  },
  {
    id: 5,
    category: "cartomancia",
    categoryBadge: "FUTURO",
    categoryLabel: "Cartomancia",
    authorRole: "Cartomancia",
    image: "assets/oracle_cards.jpg",
    date: "22 Ago",
    title: "MANDALA ANUAL E PREVISÕES: COMO PLANEJAR SEU ANO COM SEGURANÇA",
    excerpt: "Entenda o poder da leitura de 12 casas para antecipar oportunidades em cada mês do ano e agir na hora certa.",
    content: `
      <p>A Mandala Anual é uma das tiragens mais completas e procuradas na Cartomancia. Nela, abrimos uma lâmina para cada um dos doze meses do seu ciclo, mapeando saúde, finanças, amor, família e realizações.</p>
      
      <h3>Benefícios de fazer sua Mandala:</h3>
      <ul>
        <li>Saber em quais meses investir e em quais ter mais cautela</li>
        <li>Prever momentos favoráveis para viagens, concursos e acordos</li>
        <li>Orientação precisa para não remar contra a maré</li>
      </ul>
      <p>É uma ferramenta maravilhosa de planejamento estratégico pessoal para viver o ano com total tranquilidade!</p>
    `
  },
  {
    id: 6,
    category: "numerologia",
    categoryBadge: "AUTOCONHECIMENTO",
    categoryLabel: "Numerologia",
    authorRole: "Numerologia",
    image: "assets/cartomancia.jpg",
    date: "19 Ago",
    title: "NÚMERO DE DESTINO: A MISSÃO OCULTA NA SUA DATA DE NASCIMENTO",
    excerpt: "Aprenda o que a soma da sua data de nascimento revela sobre o seu propósito maior e os aprendizados desta existência.",
    content: `
      <p>O Número de Destino é a soma reduzida do dia, mês e ano em que você veio ao mundo. Ele representa a estrada principal por onde você caminha e as lições mestras que sua alma escolheu aprender.</p>
      
      <blockquote>"Quando você compreende seu Número de Destino, a sensação de estar perdida dá lugar à clareza e ao propósito."</blockquote>

      <h3>O que a Numerologia do Destino esclarece:</h3>
      <p>Em nossa consulta e no E-book oficial da Buscadora Astral, decodificamos a vibração de cada número (de 1 a 9, além dos números mestres 11 e 22), oferecendo um mapa direto para suas realizações.</p>
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

// Inicialização da Seção de Autoconhecimento
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
      const matchCat = currentCategory === 'all' || 
                        art.category === currentCategory || 
                        (art.categoryBadge && art.categoryBadge.toLowerCase() === currentCategory.toLowerCase());
      const matchSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (art.categoryBadge && art.categoryBadge.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      blogGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
          <p style="font-size: 1.15rem;">
            Nenhum conteúdo encontrado para esta busca. Escolha outro tema acima!
          </p>
        </div>
      `;
      return;
    }

    filtered.forEach(art => {
      const card = document.createElement('article');
      card.className = 'personare-card reveal-on-scroll revealed';
      const imgSrc = art.image || 'assets/oracle_cards.jpg';
      const badge = art.categoryBadge || (art.category ? art.category.toUpperCase() : 'AUTOCONHECIMENTO');
      const authorRole = art.authorRole || 'Patricia Tarô';

      card.innerHTML = `
        <div class="personare-card-media">
          <img src="${imgSrc}" alt="${art.title}" class="personare-card-img" loading="lazy">
        </div>
        <div class="personare-card-body">
          <span class="personare-card-category">${badge}</span>
          <h3 class="personare-card-title">${art.title}</h3>
          <p class="personare-card-excerpt">${art.excerpt}</p>
          <div class="personare-card-footer">
            <img src="assets/logo_buscadora.jpg" alt="Buscadora Astral" class="personare-author-avatar-img">
            <div class="personare-author-info">
              <strong class="personare-author-name">Patricia - Buscadora Astral</strong>
              <span class="personare-author-role">${authorRole}</span>
            </div>
            <span class="personare-card-arrow">→</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openArticleModal(art));
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
