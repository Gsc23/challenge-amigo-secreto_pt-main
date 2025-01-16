let nameInput = document.getElementById("amigo");
let amigos = [];
let lista = document.getElementById("resultado");

function adicionarAmigo() {
  let nome = nameInput.value;

  amigos.push(nome);
  atualizarLista();
  nameInput.value = "";
  nameInput.focus();
}

function atualizarLista() {
  let listaMetodo = lista;
  lista.innerHTML = ""; // Limpa a lista antes de atualizá-la
  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    listaMetodo.appendChild(li);
  });
}

function sortearAmigo() {
  let listaSorteio = document.querySelectorAll(`#resultado li`);

  let indice = Math.floor(Math.random() * listaSorteio.length);
  let itemAleatorio = listaSorteio[indice];

  alert(`O amigo sorteado é ${itemAleatorio.textContent}`);
}
