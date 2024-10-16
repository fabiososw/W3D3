const nuoviElementi = [];

function myFunction() {
  const inputLista = document.getElementById("inputLista").value;
  if (inputLista) {
    nuoviElementi.push(inputLista);
    document.getElementById("inputLista").value = "";
    aggiornaLista();
  } else {
    alert("Per favore, inserisci un valore.");
  }
}

function aggiornaLista() {
  const listaElementi = document.getElementById("listaElementi");
  listaElementi.innerHTML = "";

  for (let i = 0; i < nuoviElementi.length; i++) {
    const listItem = document.createElement("li");
    const checkBoxAdd = document.createElement("input");
    checkBoxAdd.type = "checkbox";
    listItem.appendChild(document.createTextNode(nuoviElementi[i]));
    listItem.appendChild(checkBoxAdd);
    listaElementi.appendChild(listItem);
  }
}
