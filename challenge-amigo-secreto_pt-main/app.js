// Lista para armazenar os amigos adicionados
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo"); // Obtém o valor do input
    let nome = inputAmigo.value.trim(); 

    // Verifica se o nome está vazio
    if (nome === "") {
        alert("Por favor, digite um nome antes de adicionar!");
        return;
    }

    // Verifica se o nome já foi adicionado
    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    // Adiciona o nome à lista
    listaAmigos.push(nome);
    
    // Atualiza a exibição da lista na tela
    atualizarListaAmigos();

    // Limpa o campo de entrada
    inputAmigo.value = "";
}

// Função para atualizar a lista exibida na tela
function atualizarListaAmigos() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; 

    // Adiciona cada amigo como um item da lista
    listaAmigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    // Escolhe um nome aleatório da lista
    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    // Exibe o nome sorteado na tela
    exibirResultado(sorteado);
}

// Função para exibir o nome sorteado na tela
function exibirResultado(sorteado) {
    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = `<p class="nome-sorteado">${sorteado}</p>`;
}

