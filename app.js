let nameInput = document.getElementById("amigo");
let amigos = [];
let lista = document.getElementById("listaAmigos");
let listaResultado = document.getElementById("resultado");

function adicionarAmigo() {
  nameInput.value;

  if (nameInput.value == "") {
    alert("Por favor, insira um nome.");
  } else {
    amigos.push(nameInput.value);
    atualizarLista();
    nameInput.value = "";
    nameInput.focus();
  }
}

function atualizarLista() {
  lista.innerHTML = "";
  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  let indice = Math.floor(Math.random() * amigos.length);

  if (amigos.length === 0) {
    alert("Lista vazia!");
  } else {
    listaResultado.innerHTML = amigos[indice];
  }
}
