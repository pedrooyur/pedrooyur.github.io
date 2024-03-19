// Links ativos

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
    const url = location.href;
    const href = link.href;
    if (url.includes(href)) {
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink);

// Ativar itens do Orçamento 

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
}
parametros.forEach(ativarProduto);

// perguntas frequentes 
const perguntas = document.querySelectorAll(".faq-bg button")

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls')
    const resposta = document.getElementById(controls)

    resposta.classList.toggle('ativa')
    const ativa = resposta.classList.contains("ativa")
    pergunta.setAttribute('aria-expanded', ativa)
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);

}

perguntas.forEach(eventosPerguntas);

// Galeria de bikes

const galeria = document.querySelectorAll('.bikeimages img');
const galeriaContainer = document.querySelector('.bikeimages');
console.log(galeria)

function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 950px)').matches;
    if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

// animações
if(window.SimpleAnime){
new SimpleAnime();
}