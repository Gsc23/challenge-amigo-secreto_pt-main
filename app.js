let nameInput = document.getElementById("amigo");
let amigos = [];
let lista = document.getElementById("listaAmigos");
let listaResultado = document.getElementById("resultado");

function adicionarAmigo() {

  if (nameInput.value.trim() === "") {
    return alert("Por favor, insira um nome.");
  } 
  
  amigos.push(nameInput.value);
  atualizarLista();
  nameInput.value = "";
  nameInput.focus();
}

function atualizarLista() {
  let listaHTML = amigos.map((amigo) => `<li>${amigo}</li>`).join('');
  lista.innerHTML = listaHTML;
}

function sortearAmigo() {
  let indice = Math.floor(Math.random() * amigos.length);

  if (amigos.length === 0) {
    return alert("Lista vazia!");
  }
  
  listaResultado.innerHTML = amigos[indice];
  }
}
