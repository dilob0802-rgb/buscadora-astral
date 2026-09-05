/**
 * BUSCADORA ASTRAL - LÓGICA DO CADERNO DA ESCRITORA (EDITOR VISUAL)
 */

const ADMIN_PASSWORD_KEY = "astral2026";
const STORAGE_KEY = "buscadora_custom_articles";

document.addEventListener('DOMContentLoaded', () => {
  initAuth();
  initVisualToolbar();
  initPostForm();
  renderPostsList();
});

// Autenticação simples
function initAuth() {
  const loginSection = document.getElementById('login-section');
  const adminDashboard = document.getElementById('admin-dashboard');
  const loginForm = document.getElementById('login-form');
  const passInput = document.getElementById('admin-password');
  const loginError = document.getElementById('login-error');
  const btnLogout = document.getElementById('btn-logout');

  // Checar se já está logado na sessão
  if (sessionStorage.getItem('buscadora_admin_logged') === 'true') {
    if (loginSection) loginSection.style.display = 'none';
    if (adminDashboard) adminDashboard.style.display = 'block';
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const entered = passInput.value.trim();

      if (entered === ADMIN_PASSWORD_KEY) {
        sessionStorage.setItem('buscadora_admin_logged', 'true');
        loginSection.style.display = 'none';
        adminDashboard.style.display = 'block';
        loginError.style.display = 'none';
        renderPostsList();
      } else {
        loginError.textContent = "Senha incorreta. Tente novamente.";
        loginError.style.display = 'block';
      }
    });
  }

  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      sessionStorage.removeItem('buscadora_admin_logged');
      window.location.reload();
    });
  }
}

// Barra de Ferramentas Visual (Estilo Word / Notion)
function initVisualToolbar() {
  const toolbarBtns = document.querySelectorAll('.vtool-btn');
  const editor = document.getElementById('visual-editor');

  toolbarBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const command = btn.getAttribute('data-command');
      const value = btn.getAttribute('data-value') || null;

      editor.focus();

      if (command === 'formatBlock' && value) {
        document.execCommand(command, false, `<${value}>`);
      } else {
        document.execCommand(command, false, value);
      }
    });
  });
}

// Formulário de publicação de crônica
function initPostForm() {
  const form = document.getElementById('new-post-form');
  const editor = document.getElementById('visual-editor');
  const successAlert = document.getElementById('post-success-alert');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('post-title').value.trim();
    const category = document.getElementById('post-category').value;
    const excerpt = document.getElementById('post-excerpt').value.trim();
    const contentHtml = editor.innerHTML.trim();

    if (!contentHtml || contentHtml === '<br>') {
      alert('Por favor, escreva o texto da crônica antes de publicar.');
      editor.focus();
      return;
    }

    // Map de labels das categorias
    const categoryLabels = {
      'cartomancia': 'Cartomancia',
      'tarot': 'Tarô',
      'astrologia': 'Astrologia',
      'numerologia': 'Numerologia'
    };

    // Data formatada
    const now = new Date();
    const formattedDate = `${now.getDate()} de ${now.toLocaleDateString('pt-BR', { month: 'short' })}`;

    // Criar objeto da crônica
    const newArticle = {
      id: Date.now(),
      category: category,
      categoryLabel: categoryLabels[category] || 'Crônica Astral',
      date: formattedDate,
      title: title,
      excerpt: excerpt,
      content: contentHtml
    };

    // Salvar no localStorage
    const saved = getStoredArticles();
    saved.unshift(newArticle);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));

    // Limpar campos
    form.reset();
    editor.innerHTML = '';

    // Alerta de sucesso
    if (successAlert) {
      successAlert.classList.add('active');
      setTimeout(() => {
        successAlert.classList.remove('active');
      }, 4500);
    }

    renderPostsList();
  });
}

// Obter artigos do storage
function getStoredArticles() {
  const data = localStorage.getItem(STORAGE_KEY);
  try {
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

// Renderizar lista de crônicas
function renderPostsList() {
  const listEl = document.getElementById('admin-posts-list');
  if (!listEl) return;

  const customArticles = getStoredArticles();

  if (customArticles.length === 0) {
    listEl.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem; color: var(--text-muted);">
        <p style="font-size: 0.95rem; margin-bottom: 0.3rem;">Nenhuma crônica cadastrada ainda.</p>
        <small style="color: var(--gold-light);">Preencha o formulário ao lado e publique sua primeira história!</small>
      </div>
    `;
    return;
  }

  listEl.innerHTML = '';

  customArticles.forEach(art => {
    const item = document.createElement('div');
    item.className = 'post-item';
    item.innerHTML = `
      <div class="post-item-info">
        <h5>${art.title}</h5>
        <span>${art.categoryLabel} • ${art.date}</span>
      </div>
      <div class="post-actions">
        <button class="btn-icon btn-delete" data-id="${art.id}" title="Apagar Crônica">🗑️</button>
      </div>
    `;

    item.querySelector('.btn-delete').addEventListener('click', () => {
      if (confirm(`Deseja apagar a crônica "${art.title}"?`)) {
        deleteArticle(art.id);
      }
    });

    listEl.appendChild(item);
  });
}

function deleteArticle(id) {
  let articles = getStoredArticles();
  articles = articles.filter(a => a.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  renderPostsList();
}
