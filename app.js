
let nomes = [];
function adicionarAmigo() {
    let nome = document.querySelector('#amigo');
    if (nome.value == '') {
        window.alert('Por favor, insira um nome!');
    } else {
       nomes.push(nome.value);
        console.log(nomes);
        console.log(nome.value);
        nome.value = '';
        nome.focus(); 
    }
}
addEventListener('click', atualizarLista);
function atualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < nomes.length; i++) {
        lista.innerHTML += `<li>${nomes[i]}</li>`;
    }
}
function sortearAmigo() {
    if (nomes.length < 2) {
        alert('Por favor, adicione pelo menos 2 amigos a lista antes de sortear!')
    } else {
        let sorteado = Math.floor(Math.random() * nomes.length);
        console.log(sorteado);
        let amigoSecreto = document.querySelector('#resultado');
        amigoSecreto.innerHTML = 'O seu amigo secreto é ' + nomes[sorteado]
    }
    
}
    