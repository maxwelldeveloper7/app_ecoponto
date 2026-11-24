// DADOS DO APLICATIVO
const slides = [
    {
        titulo: "O que é um Ecoponto?",
        conteudo: `
            <p>Um ecoponto é um local preparado para receber determinados materiais recicláveis. 
            Ele ajuda as pessoas a separar os resíduos e contribui para uma cidade mais limpa 
            e sustentável.</p>
            <p>Os ecopontos facilitam o processo de reciclagem, garantindo que os materiais 
            sejam encaminhados para os locais corretos de processamento.</p>
        `
    },
    {
        titulo: "Conheça os Compartimentos",
        conteudo: `
            <div class="compartimento" style="border-left-color: #e74c3c;">
                <h4>🟥 Plástico</h4>
                <ul>
                    <li>Garrafa PET</li>
                    <li>Sacola plástica</li>
                    <li>Embalagem plástica</li>
                    <li>Pote plástico</li>
                </ul>
            </div>

            <div class="compartimento" style="border-left-color: #3498db;">
                <h4>🟦 Papel</h4>
                <ul>
                    <li>Folha de papel</li>
                    <li>Jornal</li>
                    <li>Revista</li>
                    <li>Caixa de papelão</li>
                </ul>
            </div>

            <div class="compartimento" style="border-left-color: #f39c12;">
                <h4>🟨 Metal</h4>
                <ul>
                    <li>Lata de refrigerante</li>
                    <li>Lata de alimentos</li>
                    <li>Tampa metálica</li>
                    <li>Embalagem metálica</li>
                </ul>
            </div>
        `
    },
    {
        titulo: "O que Pode Ser Colocado?",
        conteudo: `
            <p>Veja exemplos de materiais que podem ser destinados aos compartimentos do ecoponto:</p>

            <div class="exemplo-material">
                <div class="icone">🥤</div>
                <strong>Garrafa PET</strong>
                <p style="color: #e74c3c; margin-top: 8px;">Plástico — compartimento vermelho</p>
            </div>

            <div class="exemplo-material">
                <div class="icone">📰</div>
                <strong>Jornal</strong>
                <p style="color: #3498db; margin-top: 8px;">Papel — compartimento azul</p>
            </div>

            <div class="exemplo-material">
                <div class="icone">🥫</div>
                <strong>Lata de Refrigerante</strong>
                <p style="color: #f39c12; margin-top: 8px;">Metal — compartimento amarelo</p>
            </div>
        `
    },
    {
        titulo: "O que NÃO Deve Ser Colocado?",
        conteudo: `
            <p style="font-weight: bold; color: #e74c3c; margin-bottom: 20px;">
                ⚠️ Nem todo lixo pode ser colocado no ecoponto. Cada resíduo tem o lugar certo.
            </p>

            <div class="compartimento" style="border-left-color: #e74c3c;">
                <h4>❌ Não Colocar</h4>
                <ul>
                    <li>Restos de comida</li>
                    <li>Papel higiênico usado</li>
                    <li>Fraldas</li>
                    <li>Garrafas com líquido</li>
                    <li>Vidro</li>
                    <li>Lâmpadas</li>
                    <li>Pilhas e baterias</li>
                </ul>
            </div>

            <p style="margin-top: 20px; font-style: italic; color: #666;">
                <strong>Dica importante:</strong> As regras podem variar conforme o ecoponto. 
                Sempre verifique as orientações disponíveis no local.
            </p>
        `
    },
    {
        titulo: "Como Utilizar Corretamente?",
        conteudo: `
            <div class="sequencia-passos">
                <div class="passo">
                    <div class="passo-numero">1</div>
                    <div class="passo-texto">
                        <h4>Separe</h4>
                        <p>Separe os materiais recicláveis dos demais resíduos em sua casa.</p>
                    </div>
                </div>

                <div class="passo">
                    <div class="passo-numero">2</div>
                    <div class="passo-texto">
                        <h4>Identifique</h4>
                        <p>Observe qual é o tipo de material (plástico, papel ou metal).</p>
                    </div>
                </div>

                <div class="passo">
                    <div class="passo-numero">3</div>
                    <div class="passo-texto">
                        <h4>Escolha</h4>
                        <p>Encontre o compartimento correspondente (cor correta).</p>
                    </div>
                </div>

                <div class="passo">
                    <div class="passo-numero">4</div>
                    <div class="passo-texto">
                        <h4>Descarte</h4>
                        <p>Coloque o material no compartimento correto.</p>
                    </div>
                </div>

                <div class="passo">
                    <div class="passo-numero">5</div>
                    <div class="passo-texto">
                        <h4>Ajude</h4>
                        <p>Você está contribuindo para uma cidade mais limpa e sustentável!</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        titulo: "Vamos Testar?",
        conteudo: `
            <p style="font-size: 18px; margin-bottom: 30px;">
                Você aprendeu como utilizar o ecoponto corretamente. 
            </p>
            <p style="font-size: 20px; font-weight: bold; color: #2ecc71; margin-bottom: 30px;">
                Agora vamos testar seus conhecimentos?
            </p>
            <button class="btn-primario" onclick="irJogo()" style="width: 100%;">
                🎮 Jogar
            </button>
        `
    }
];

const perguntas = [
    {
        pergunta: "Onde deve ser colocada uma garrafa PET?",
        tipo: "identificacao",
        opcoes: ["🟥 Plástico", "🟦 Papel", "🟨 Metal"],
        resposta: 0,
        feedback: "A garrafa PET é um plástico e deve ser colocada no compartimento vermelho."
    },
    {
        pergunta: "Um jornal deve ser colocado em qual compartimento?",
        tipo: "identificacao",
        opcoes: ["🟥 Plástico", "🟦 Papel", "🟨 Metal"],
        resposta: 1,
        feedback: "O jornal é papel e deve ser colocado no compartimento azul."
    },
    {
        pergunta: "Onde vai uma lata de refrigerante?",
        tipo: "identificacao",
        opcoes: ["🟥 Plástico", "🟦 Papel", "🟨 Metal"],
        resposta: 2,
        feedback: "A lata é de metal e deve ser colocada no compartimento amarelo."
    },
    {
        pergunta: "Podemos colocar restos de comida no ecoponto?",
        tipo: "simnao",
        opcoes: ["Sim", "Não"],
        resposta: 1,
        feedback: "Restos de comida não devem ser colocados no ecoponto. Cada resíduo tem o lugar certo."
    },
    {
        pergunta: "Uma sacola plástica deve ir para qual compartimento?",
        tipo: "identificacao",
        opcoes: ["🟥 Plástico", "🟦 Papel", "🟨 Metal"],
        resposta: 0,
        feedback: "A sacola plástica deve ser colocada no compartimento vermelho."
    },
    {
        pergunta: "Podemos jogar papel higiênico usado no ecoponto?",
        tipo: "simnao",
        opcoes: ["Sim", "Não"],
        resposta: 1,
        feedback: "Papel higiênico usado não deve ser colocado no ecoponto."
    },
    {
        pergunta: "Uma caixa de papelão vai para qual compartimento?",
        tipo: "identificacao",
        opcoes: ["🟥 Plástico", "🟦 Papel", "🟨 Metal"],
        resposta: 1,
        feedback: "A caixa de papelão deve ser colocada no compartimento azul."
    },
    {
        pergunta: "Podemos colocar fraldas no ecoponto?",
        tipo: "simnao",
        opcoes: ["Sim", "Não"],
        resposta: 1,
        feedback: "Fraldas não devem ser colocadas no ecoponto."
    },
    {
        pergunta: "Uma lata de alimentos deve ir para qual compartimento?",
        tipo: "identificacao",
        opcoes: ["🟥 Plástico", "🟦 Papel", "🟨 Metal"],
        resposta: 2,
        feedback: "A lata é de metal e deve ser colocada no compartimento amarelo."
    },
    {
        pergunta: "Qual é o primeiro passo para usar o ecoponto corretamente?",
        tipo: "identificacao",
        opcoes: ["Separar os materiais", "Identificar o material", "Escolher o compartimento"],
        resposta: 0,
        feedback: "O primeiro passo é separar os materiais recicláveis dos demais resíduos."
    }
];

// ESTADO DA APLICAÇÃO
let slideAtual = 0;
let perguntaAtual = 0;
let pontos = 0;
let respostasJogo = [];
let jogoEmAndamento = false;
let perguntaRespondida = false;

// FUNÇÕES DE NAVEGAÇÃO
function mostrarTela(idTela) {
    const telas = document.querySelectorAll('.tela');
    telas.forEach(tela => tela.classList.remove('ativa'));
    document.getElementById(idTela).classList.add('ativa');
}

function irPrincipal() {
    mostrarTela('telaPrincipal');
}

function irAprender() {
    slideAtual = 0;
    mostrarTela('moduloAprender');
    renderizarSlide();
}

function irJogo() {
    perguntaAtual = 0;
    pontos = 0;
    respostasJogo = [];
    jogoEmAndamento = true;
    perguntaRespondida = false;
    mostrarTela('moduloJogo');
    renderizarPergunta();
}

// FUNÇÕES DO MÓDULO APRENDER
function renderizarSlide() {
    const container = document.getElementById('slides-aprender');
    const slide = slides[slideAtual];
    
    container.innerHTML = `
        <div class="slide">
            <h3>${slide.titulo}</h3>
            ${slide.conteudo}
        </div>
    `;

    document.getElementById('indicadorSlide').textContent = `${slideAtual + 1} / ${slides.length}`;
    document.getElementById('btnAnterior').disabled = slideAtual === 0;
    document.getElementById('btnProximo').disabled = slideAtual === slides.length - 1;
}

function anterior() {
    if (slideAtual > 0) {
        slideAtual--;
        renderizarSlide();
    }
}

function proximo() {
    if (slideAtual < slides.length - 1) {
        slideAtual++;
        renderizarSlide();
    }
}

// FUNÇÕES DO MÓDULO JOGO
function renderizarPergunta() {
    const container = document.getElementById('conteudo-jogo');
    const pergunta = perguntas[perguntaAtual];

    let opcoesHTML = pergunta.opcoes.map((opcao, index) => `
        <button class="opcao-resposta" onclick="responderPergunta(${index})">
            ${opcao}
        </button>
    `).join('');

    container.innerHTML = `
        <div class="jogo-pergunta">
            <div class="indicador-pergunta">
                Pergunta <span class="numero-pergunta">${perguntaAtual + 1}/10</span>
            </div>
            <div class="texto-pergunta">${pergunta.pergunta}</div>
            <div class="opcoes-respostas">
                ${opcoesHTML}
            </div>
        </div>
    `;

    perguntaRespondida = false;
}

function responderPergunta(indiceResposta) {
    if (perguntaRespondida) return;

    perguntaRespondida = true;
    const pergunta = perguntas[perguntaAtual];
    const estaCorreta = indiceResposta === pergunta.resposta;

    // Registrar resposta
    respostasJogo.push({
        pergunta: perguntaAtual,
        resposta: indiceResposta,
        correta: estaCorreta
    });

    // Atualizar pontos
    if (estaCorreta) {
        pontos++;
    }

    // Marcar opções
    const opcoes = document.querySelectorAll('.opcao-resposta');
    opcoes.forEach((opcao, index) => {
        if (index === pergunta.resposta) {
            opcao.classList.add('correta');
        } else if (index === indiceResposta && !estaCorreta) {
            opcao.classList.add('incorreta');
        }
        opcao.disabled = true;
        opcao.style.cursor = 'default';
    });

    // Mostrar feedback
    const container = document.querySelector('.jogo-pergunta');
    const emoji = estaCorreta ? '🎉' : '😊';
    const classesFeedback = estaCorreta ? 'feedback sucesso' : 'feedback erro';
    
    const feedbackHTML = `
        <div class="${classesFeedback}">
            <span class="emoji-feedback">${emoji}</span>
            ${estaCorreta ? 'Muito bem!' : 'Quase!'} ${pergunta.feedback}
        </div>
    `;

    container.innerHTML += feedbackHTML;

    // Próxima pergunta ou resultado
    setTimeout(() => {
        perguntaAtual++;
        if (perguntaAtual < perguntas.length) {
            renderizarPergunta();
        } else {
            mostrarResultado();
        }
    }, 7000);
}

function mostrarResultado() {
    const container = document.getElementById('conteudo-jogo');
    const porcentagem = (pontos / perguntas.length) * 100;

    let mensagem = '';
    let emoji = '';

    if (pontos <= 3) {
        emoji = '🌱';
        mensagem = 'Não desista! Aprenda mais e tente novamente.';
    } else if (pontos <= 6) {
        emoji = '🙂';
        mensagem = 'Bom começo! Que tal aprender mais um pouco?';
    } else if (pontos <= 9) {
        emoji = '👏';
        mensagem = 'Muito bem! Você está aprendendo a cuidar do meio ambiente!';
    } else {
        emoji = '🌱';
        mensagem = 'Excelente! Você já é um especialista em reciclagem!';
    }

    container.innerHTML = `
        <div class="pontuacao-jogo">
            <h2>Resultado Final</h2>
            <div class="pontos-finais">${pontos}/10</div>
            
            <div class="barra-pontuacao">
                <div class="barra-progresso" style="width: ${porcentagem}%">
                    ${Math.round(porcentagem)}%
                </div>
            </div>

            <div class="mensagem-resultado">
                <div style="font-size: 32px; margin-bottom: 15px;">${emoji}</div>
                ${mensagem}
            </div>

            <button class="btn-jogar-novamente" onclick="irJogo()">
                🎮 Jogar Novamente
            </button>
            
            <button class="btn-jogar-novamente" style="background-color: #2c3e50;" onclick="irPrincipal()">
                🏠 Voltar ao Início
            </button>
        </div>
    `;
}

// Inicializar com tela inicial
document.addEventListener('DOMContentLoaded', () => {
    mostrarTela('telaInicial');
});