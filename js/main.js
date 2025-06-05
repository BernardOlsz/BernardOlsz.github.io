/**
 * Main JavaScript for Bernard Olszowski Portfolio
 */

document.addEventListener('DOMContentLoaded', function() {
  // Inicializar todas as funcionalidades
  initMenuFixo();
  initMenuMobile();
  initFiltrosProjetos();
  initModalProjetos();
  initControlesVideo();
  initAnimacaoScroll();
  initValidacaoFormulario();
  initBotaoTopo();
  initDeteccaoTeclado();
});

/**
 * Menu fixo durante rolagem
 */
function initMenuFixo() {
  const navbar = document.getElementById('navbar');
  const header = document.getElementById('topo');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > header.offsetHeight - 100) {
      navbar.classList.add('visible');
    } else {
      navbar.classList.remove('visible');
    }
  });
}

/**
 * Menu mobile para dispositivos pequenos
 */
function initMenuMobile() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (!menuToggle || !navLinks) return;
  
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !expanded);
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });
  
  // Fechar menu ao clicar em um link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
}

/**
 * Sistema de filtros para projetos
 */
function initFiltrosProjetos() {
  const filtroBtns = document.querySelectorAll('.filtro-btn');
  const projetoCards = document.querySelectorAll('.projeto-card');
  
  if (!filtroBtns.length || !projetoCards.length) return;
  
  filtroBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remover classe active de todos os botões
      filtroBtns.forEach(b => b.classList.remove('active'));
      
      // Adicionar classe active ao botão clicado
      btn.classList.add('active');
      
      const filtro = btn.getAttribute('data-filter');
      
      projetoCards.forEach(card => {
        if (filtro === 'todos' || card.getAttribute('data-categoria') === filtro) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/**
 * Modal para detalhes dos projetos
 */
function initModalProjetos() {
  const modal = document.getElementById('projeto-modal');
  const modalBody = modal ? modal.querySelector('.modal-body') : null;
  const modalClose = modal ? modal.querySelector('.modal-close') : null;
  const detalhesBtns = document.querySelectorAll('.detalhes-btn');
  
  if (!modal || !modalBody || !modalClose || !detalhesBtns.length) return;
  
  // Dados dos projetos (em produção, isso viria de um JSON ou API)
  const projetosData = {
    projeto1: {
      titulo: "Sobre o Tempo",
      cliente: "Escola de Cinema",
      ano: "2023",
      categoria: "Curta-metragem",
      funcao: "Editor",
      descricao: "Curta metragem emocionante que conta a história de uma jovem bailarina enfrentando desafios pessoais e profissionais. O filme explora temas de perseverança, arte e superação através de uma narrativa visual poética.",
      desafios: "O principal desafio foi criar uma edição que respeitasse o ritmo da dança enquanto mantinha a narrativa emocional clara para o espectador.",
      solucoes: "Utilizei técnicas de montagem rítmica e transições suaves para criar uma experiência visual que complementasse a coreografia e a trilha sonora original.",
      imagens: ["sobre_o_tempo_1.jpg", "sobre_o_tempo_2.jpg"],
      videoId: "jwwyWAyhpD0"
    },
    projeto2: {
      titulo: "Perfil Desativado",
      cliente: "Wolf Maya",
      ano: "2022",
      categoria: "Longa-metragem",
      funcao: "Editor",
      descricao: "Longa-metragem de formatura que aborda temas contemporâneos como identidade digital e relacionamentos nas redes sociais. Uma produção ambiciosa que se destacou entre os projetos da escola.",
      desafios: "Trabalhar com um grande volume de material bruto e criar uma narrativa coesa que mantivesse o espectador engajado durante todo o longa.",
      solucoes: "Desenvolvi uma estrutura narrativa não-linear que alternava entre presente e passado, criando tensão e revelando gradualmente os elementos da trama.",
      imagens: ["perfil_desativado_1.jpg", "perfil_desativado_2.jpg"],
      videoId: "w3wxyNNR9M0"
    },
    projeto3: {
      titulo: "Kick Off - T2M",
      cliente: "T2M",
      ano: "2024",
      categoria: "Corporativo",
      funcao: "Produção Completa",
      descricao: "Vídeo institucional para evento anual da empresa T2M, com o objetivo de motivar a equipe e apresentar os resultados do ano anterior e metas para o próximo período.",
      desafios: "Transformar dados e informações corporativas em um conteúdo visualmente atraente e emocionalmente impactante para os colaboradores.",
      solucoes: "Criei uma narrativa que humanizava os números através de histórias reais de colaboradores, combinando entrevistas, animações de dados e momentos marcantes do ano.",
      imagens: ["kick_off_1.jpg", "kick_off_2.jpg"],
      videoId: "j0Byvi9dG7k"
    },
    projeto4: {
      titulo: "300K - Manu Terra",
      cliente: "Manu Terra",
      ano: "2024",
      categoria: "Redes Sociais",
      funcao: "Editor",
      descricao: "Vídeo comemorativo para a influenciadora Manu Terra celebrar a marca de 300 mil seguidores no TikTok, destacando momentos marcantes de sua jornada.",
      desafios: "Criar um vídeo curto e impactante que capturasse a essência da personalidade da influenciadora e ressoasse com seu público.",
      solucoes: "Utilizei uma edição dinâmica com transições criativas e sincronização com música, além de destacar comentários positivos dos seguidores para criar uma conexão emocional.",
      imagens: ["300k_1.jpg", "300k_2.jpg"],
      videoId: "1PffgcNMV8zifltd6NjkzMDYx6arjNw2n"
    }
  };
  
  detalhesBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projetoId = btn.getAttribute('data-projeto');
      const projeto = projetosData[projetoId];
      
      if (projeto) {
        // Preencher o modal com os dados do projeto
        modalBody.innerHTML = `
          <h2>${projeto.titulo}</h2>
          <div class="projeto-modal-meta">
            <span>Cliente: ${projeto.cliente}</span>
            <span>Ano: ${projeto.ano}</span>
            <span>Categoria: ${projeto.categoria}</span>
            <span>Função: ${projeto.funcao}</span>
          </div>
          <div class="projeto-modal-video">
            <iframe src="https://www.youtube.com/embed/${projeto.videoId}" frameborder="0" allowfullscreen></iframe>
          </div>
          <div class="projeto-modal-descricao">
            <h3>Sobre o projeto</h3>
            <p>${projeto.descricao}</p>
          </div>
          <div class="projeto-modal-processo">
            <h3>Desafios e Soluções</h3>
            <div class="processo-item">
              <h4>Desafios:</h4>
              <p>${projeto.desafios}</p>
            </div>
            <div class="processo-item">
              <h4>Soluções:</h4>
              <p>${projeto.solucoes}</p>
            </div>
          </div>
          <div class="projeto-modal-galeria">
            <h3>Galeria</h3>
            <div class="galeria-grid">
              ${projeto.imagens.map(img => `<div class="galeria-item" style="background-image: url('assets/img/${img}')"></div>`).join('')}
            </div>
          </div>
        `;
        
        // Abrir o modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevenir rolagem
      }
    });
  });
  
  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar rolagem
  });
  
  // Fechar modal ao clicar fora do conteúdo
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

/**
 * Controles personalizados para vídeos
 */
function initControlesVideo() {
  const videoOverlay = document.querySelector('.video-overlay');
  const showreelVideo = document.getElementById('showreel-video');
  
  if (!videoOverlay || !showreelVideo) return;
  
  videoOverlay.addEventListener('click', function() {
    this.classList.add('hidden');
    
    // Verificar se a API do YouTube está disponível
    if (window.YT && window.YT.Player) {
      const player = new YT.Player(showreelVideo);
      player.playVideo();
    } else {
      // Fallback se a API não estiver carregada
      const videoSrc = showreelVideo.src;
      showreelVideo.src = videoSrc + '&autoplay=1';
    }
  });
}

/**
 * Animações ao rolar
 */
function initAnimacaoScroll() {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  if (!animateElements.length) return;
  
  function checkScroll() {
    animateElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        el.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', checkScroll);
  // Verificar também no carregamento da página
  checkScroll();
}

/**
 * Validação de formulário
 */
function initValidacaoFormulario() {
  const form = document.getElementById('contato-form');
  
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    // Validar campos
    const campos = [
      { id: 'nome', regex: /.{3,}/, mensagem: 'Por favor, insira um nome válido (mínimo 3 caracteres)' },
      { id: 'email', regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, mensagem: 'Por favor, insira um e-mail válido' },
      { id: 'assunto', regex: /.{3,}/, mensagem: 'Por favor, insira um assunto válido (mínimo 3 caracteres)' },
      { id: 'mensagem', regex: /.{10,}/, mensagem: 'Por favor, insira uma mensagem válida (mínimo 10 caracteres)' }
    ];
    
    campos.forEach(campo => {
      const input = document.getElementById(campo.id);
      const formGroup = input.parentElement;
      const errorMessage = formGroup.querySelector('.error-message');
      
      if (!campo.regex.test(input.value)) {
        formGroup.classList.add('error');
        errorMessage.textContent = campo.mensagem;
        isValid = false;
      } else {
        formGroup.classList.remove('error');
        errorMessage.textContent = '';
      }
    });
    
    if (isValid) {
      // Em produção, aqui seria o envio do formulário
      alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
      form.reset();
    }
  });
}

/**
 * Botão Voltar ao Topo
 */
function initBotaoTopo() {
  const backToTop = document.getElementById('back-to-top');
  
  if (!backToTop) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
}

/**
 * Detecção de navegação por teclado vs mouse
 */
function initDeteccaoTeclado() {
  document.body.addEventListener('mousedown', function() {
    document.body.classList.add('using-mouse');
  });
  
  document.body.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.remove('using-mouse');
    }
  });
}

/**
 * Indicador de seção ativa durante rolagem
 */
function initSecaoAtiva() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a, .nav-links a');
  
  if (!sections.length || !navLinks.length) return;
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
}

// Inicializar seção ativa após o carregamento completo
window.addEventListener('load', initSecaoAtiva);
