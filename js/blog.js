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
        <li><strong>Lua Nova:</strong> Plantio de intenções, novos começos e planejamento silencioso. Momento ideal para traçar metas.</li>
        <li><strong>Lua Crescente:</strong> Ação focada, superação de obstáculos e impulsionamento prático de ideias.</li>
        <li><strong>Lua Cheia:</strong> Ápice do magnetismo, clareza total, colheita e celebração de resultados.</li>
        <li><strong>Lua Minguante:</strong> Desapego, limpeza de pendências, descanso, revisão e discernimento.</li>
      </ul>

      <!-- CHAMADA DE AÇÃO PARA O E-BOOK -->
      <div class="article-cta-box">
        <div class="article-cta-header">
          <span class="cta-mini-badge">✦ GUIA PRÁTICO PASSO A PASSO</span>
          <h4>Quer aprender a aplicar cada ciclo da Lua e a sua numerologia a seu favor?</h4>
        </div>
        <div class="article-cta-content">
          <div class="article-cta-img-col">
            <img src="assets/foto_ebook.jpg" alt="E-book Crie Seu Planner Esotérico" class="article-cta-book-img">
          </div>
          <div class="article-cta-text-col">
            <p>
              No e-book oficial <strong>&ldquo;Crie Seu Planner Esotérico&rdquo;</strong>, você encontra o método prático para unir os <strong>trânsitos lunares em cada signo</strong> aos seus números pessoais (dia, mês e ano pessoal). Descubra os momentos exatos para agir, pausar e tomar decisões com segurança e assertividade.
            </p>
            <div class="article-cta-actions">
              <a href="https://chk.eduzz.com/ah5vey2i?currency=BRL" target="_blank" rel="noopener noreferrer" class="btn-cta-eduzz">
                <svg class="icon-svg stroke" style="width: 1.1em; height: 1.1em;"><use href="#icon-cart"></use></svg> Comprar E-book por R$ 47 na Eduzz
              </a>
              <a href="#ebooks" class="btn-cta-details" onclick="document.getElementById('modal-close-btn').click();">
                Conhecer conteúdo completo no site ↓
              </a>
            </div>
          </div>
        </div>
      </div>
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
    title: "MANDALA ANUAL E PREVISÕES: UM OLHAR PARA O SEU ANO COM CLAREZA E DIREÇÃO",
    excerpt: "A Mandala Anual é uma leitura completa para visualizar as principais energias e tendências dos próximos 12 meses, com clareza e direção para fazer suas escolhas com consciência.",
    content: `
      <p class="article-lead" style="font-family: var(--font-serif-sub); font-size: 1.35rem; font-style: italic; color: #4a1538; margin-bottom: 1.5rem; line-height: 1.4;">
        🌙 Um olhar para o seu ano com clareza e direção
      </p>

      <p>
        A <strong>Mandala Anual</strong> é uma leitura completa para quem deseja visualizar as principais energias e tendências dos próximos 12 meses, entendendo quais áreas da vida podem ganhar movimento, apresentar oportunidades, pedir atenção ou passar por transformações.
      </p>

      <p>
        A proposta não é determinar o que vai acontecer, mas oferecer um mapa de possibilidades para você atravessar o ciclo com mais consciência e fazer suas escolhas com maior clareza.
      </p>

      <div class="mystic-divider" style="margin: 2rem 0;"><span style="color: var(--gold-dark);">✦ ✦ ✦</span></div>

      <h3>✨ O que você recebe:</h3>
      <ul class="mandala-checklist">
        <li>Energia geral do ano</li>
        <li>Você e seu momento pessoal</li>
        <li>Finanças</li>
        <li>Moradia e família</li>
        <li>Projetos futuros</li>
        <li>Caminho amoroso</li>
        <li>Lazer e vida social</li>
        <li>Área profissional</li>
        <li>Espiritualidade</li>
        <li>Energia de cada trimestre do ano</li>
        <li>Área da vida com potencial de prosperidade</li>
        <li>Área que pode trazer finalizações e encerramentos</li>
        <li>Área que pode apresentar desafios e obstáculos</li>
        <li>Pontos que pedem atenção, inclusive situações de inveja ou interferências externas</li>
        <li>Possibilidades de desenvolvimento e transformação</li>
        <li>Conselho para o seu ciclo</li>
        <li>Afirmação para acompanhar o ano</li>
      </ul>

      <h3>🌟 Para quem é?</h3>
      <p>
        Para quem está começando um novo ciclo e quer ter uma visão mais ampla do ano, compreender onde pode haver movimento, oportunidades, desafios e encerramentos, além de receber orientações para lidar melhor com cada período.
      </p>
      <p>
        É uma leitura para se preparar, observar tendências e tomar decisões — não para ficar preso a uma previsão.
      </p>

      <h3>🔮 O objetivo da Mandala</h3>
      <p>
        Ter uma visão panorâmica do seu ano para entender onde colocar energia, o que merece atenção, quais áreas podem se movimentar e quais ciclos podem estar chegando ao fim.
      </p>

      <blockquote>"As cartas mostram tendências e possibilidades. Quem decide os próximos passos é você."</blockquote>

      <!-- BOX DE CONTATO DIRETO WHATSAPP -->
      <div class="article-whatsapp-box">
        <div class="article-whatsapp-text">
          <h4>Quer olhar para o seu próximo ciclo com mais clareza?</h4>
          <p>Conheça a <strong>Mandala Anual</strong> e descubra quais energias podem acompanhar o seu ano.</p>
        </div>
        <a href="https://wa.me/5521969689509?text=Ol%C3%A1%2C%20Patr%C3%ADcia!%20Li%20o%20artigo%20sobre%20a%20Mandala%20Anual%20e%20Previs%C3%B5es%20e%20gostaria%20de%20agendar%20a%20minha%20leitura." target="_blank" rel="noopener noreferrer" class="btn-article-whatsapp">
          <svg class="icon-svg" style="width: 1.2em; height: 1.2em;"><use href="#icon-whatsapp"></use></svg> Falar no WhatsApp &amp; Agendar Mandala
        </a>
      </div>
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
    title: "ANO, MÊS E DIA PESSOAL: ENTENDA E ACOMPANHE SEUS CICLOS",
    excerpt: "Descubra como o Ano, Mês e Dia Pessoal funcionam como níveis de aproximação para você organizar sua rotina e fazer escolhas com mais consciência.",
    content: `
      <p>
        O <strong>Ano Pessoal</strong> mostra a energia predominante do seu ciclo e ajuda a compreender os principais temas que podem ganhar força ao longo daquele ano.
      </p>

      <p>
        Mas, para trazer essa visão para a vida cotidiana, podemos acompanhar também o <strong>Mês Pessoal e o Dia Pessoal</strong>. Eles funcionam como níveis de aproximação: o ano mostra o panorama, o mês mostra o momento e o dia ajuda a observar a energia do cotidiano.
      </p>

      <div class="example-box" style="background: rgba(229, 195, 101, 0.12); border-left: 3px solid var(--gold-dark); padding: 1.2rem 1.4rem; border-radius: var(--radius-sm); margin: 1.8rem 0;">
        <h4 style="font-family: var(--font-serif-title); color: #4a1538; margin-top: 0; margin-bottom: 0.8rem; font-size: 1.15rem;">
          Por exemplo:
        </h4>
        <p style="margin-bottom: 0.8rem;">
          Imagine uma pessoa que esteja vivendo um <strong>Ano Pessoal 1</strong>, associado a iniciativa, recomeços, autonomia e abertura de novos caminhos.
        </p>
        <p style="margin-bottom: 0.8rem;">
          Em determinado momento, ela entra em um <strong>Mês Pessoal 5</strong>, trazendo uma dinâmica mais voltada para movimento, mudanças, novidades e flexibilidade.
        </p>
        <p style="margin-bottom: 0.8rem;">
          E, dentro desse mês, chega a um <strong>Dia Pessoal 8</strong>, que pode ser utilizado como um momento para dar mais atenção a questões práticas, decisões, organização financeira, resultados e objetivos.
        </p>
        <div style="border-top: 1px dashed rgba(170, 133, 43, 0.35); padding-top: 0.8rem; margin-top: 0.8rem;">
          <p style="margin-bottom: 0.4rem; font-weight: 600; color: #3b092b;">👉 Perceba como as três informações se complementam:</p>
          <ul style="list-style: none; padding-left: 0.5rem; margin: 0;">
            <li style="margin-bottom: 0.4rem;"><strong>Ano 1:</strong> <em>&ldquo;Estou em um ciclo de novos começos.&rdquo;</em></li>
            <li style="margin-bottom: 0.4rem;"><strong>Mês 5:</strong> <em>&ldquo;Neste período, mudanças e movimento ganham destaque.&rdquo;</em></li>
            <li style="margin-bottom: 0.4rem;"><strong>Dia 8:</strong> <em>&ldquo;Hoje, posso direcionar minha energia para questões práticas e resultados.&rdquo;</em></li>
          </ul>
        </div>
      </div>

      <p>
        Isso não significa que a pessoa <em>deva</em> começar algo naquele dia ou que determinado acontecimento necessariamente irá ocorrer. A Numerologia funciona como uma <strong>ferramenta de orientação e autoconhecimento</strong>: você observa a energia do período e decide como pode utilizá-la de maneira consciente.
      </p>

      <div class="mystic-divider" style="margin: 2rem 0;"><span style="color: var(--gold-dark);">✧ ✧ ✧</span></div>

      <h3>✨ Do macro ao cotidiano</h3>
      <ul class="macro-cycles-list" style="list-style: none; padding: 0; margin: 1.5rem 0;">
        <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
          <span style="position: absolute; left: 0; color: var(--gold-dark);">✦</span>
          <strong>Ano Pessoal →</strong> compreenda o grande ciclo.
        </li>
        <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
          <span style="position: absolute; left: 0; color: var(--gold-dark);">✦</span>
          <strong>Mês Pessoal →</strong> organize suas prioridades dentro desse ciclo.
        </li>
        <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
          <span style="position: absolute; left: 0; color: var(--gold-dark);">✦</span>
          <strong>Dia Pessoal →</strong> observe como trabalhar aquela energia no seu dia a dia.
        </li>
      </ul>

      <blockquote>
        "Quanto mais você acompanha essas camadas, mais consegue transformar a Numerologia de uma simples interpretação de números em uma ferramenta prática para compreender seus ciclos, organizar sua rotina e fazer escolhas com mais consciência."
      </blockquote>

      <!-- BOX DE CHAMADA DUAL: E-BOOK OU MAPA ANUAL PERSONALIZADO -->
      <div class="article-cta-box" style="margin-top: 2.5rem;">
        <div class="article-cta-header">
          <span class="cta-mini-badge">🔮 AUTOCONHECIMENTO PRÁTICO</span>
          <h4>Quer acompanhar seus ciclos com mais clareza?</h4>
          <p style="color: #ede2f5; font-size: 0.95rem; margin-top: 0.4rem; margin-bottom: 0;">Você pode escolher a forma que combina mais com o que procura:</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.2rem; margin: 1.5rem 0; position: relative; z-index: 1;">
          <!-- Opção 1: E-book -->
          <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(229, 195, 101, 0.25); border-radius: var(--radius-sm); padding: 1.2rem; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <span style="font-size: 1.05rem; color: var(--gold-light); font-weight: 700; display: block; margin-bottom: 0.4rem;">📖 Quer aprender por conta própria?</span>
              <p style="font-size: 0.9rem; color: #f1e4fa !important; margin-bottom: 1rem !important; line-height: 1.5;">
                Conheça o <strong>e-book de Numerologia &amp; Planner Esotérico</strong>, onde você aprende a calcular e interpretar seus ciclos para acompanhar não apenas este ano, mas também os próximos.
              </p>
            </div>
            <a href="https://chk.eduzz.com/ah5vey2i?currency=BRL" target="_blank" rel="noopener noreferrer" class="btn-cta-eduzz" style="justify-content: center; width: 100%;">
              <svg class="icon-svg stroke" style="width: 1.1em; height: 1.1em;"><use href="#icon-cart"></use></svg> Comprar E-book (Eduzz R$ 47)
            </a>
          </div>

          <!-- Opção 2: Mapa Anual Personalizado WhatsApp -->
          <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(229, 195, 101, 0.25); border-radius: var(--radius-sm); padding: 1.2rem; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <span style="font-size: 1.05rem; color: var(--gold-light); font-weight: 700; display: block; margin-bottom: 0.4rem;">✨ Prefere tudo pronto e personalizado?</span>
              <p style="font-size: 0.9rem; color: #f1e4fa !important; margin-bottom: 1rem !important; line-height: 1.5;">
                Adquira seu <strong>Mapa Anual Personalizado</strong>, com uma análise completa feita sob medida de acordo com seus números, temas, potenciais e desafios do novo ciclo.
              </p>
            </div>
            <a href="https://wa.me/5521969689509?text=Ol%C3%A1%2C%20Patr%C3%ADcia!%20Li%20o%20artigo%20sobre%20Ano%2C%20M%C3%AAs%20e%20Dia%20Pessoal%20e%20gostaria%20de%20solicitar%20meu%20Mapa%20Anual%20Personalizado." target="_blank" rel="noopener noreferrer" class="btn btn-article-whatsapp" style="justify-content: center; width: 100%; padding: 0.75rem 1rem;">
              <svg class="icon-svg" style="width: 1.1em; height: 1.1em;"><use href="#icon-whatsapp"></use></svg> Pedir Mapa no WhatsApp
            </a>
          </div>
        </div>

        <div style="text-align: center; border-top: 1px dashed rgba(229, 195, 101, 0.25); padding-top: 1rem; position: relative; z-index: 1;">
          <p style="font-size: 0.88rem; color: #d8c8e6 !important; margin: 0 !important;">
            📲 Para tirar dúvidas sobre o e-book ou solicitar seu Mapa Anual, 
            <a href="https://wa.me/5521969689509?text=Ol%C3%A1%2C%20Patr%C3%ADcia!%20Gostaria%20de%20saber%20mais%20sobre%20o%20e-book%20e%20o%20Mapa%20Anual%20de%20Numerologia." target="_blank" rel="noopener noreferrer" style="color: var(--gold-primary); text-decoration: underline; font-weight: 600;">
              fale diretamente comigo no WhatsApp
            </a>.
          </p>
        </div>
      </div>
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
      const authorRole = art.authorRole || 'Patricia - Buscadora Astral';

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
