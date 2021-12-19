function mostrarPrevisao() {
  var inChin = document.getElementById("inChin");
  var inAnos = document.getElementById("inAnos");
  var outEvolucao = document.getElementById("outEvolucao");

  var numChin = Number(inChin.value);
  var numAnos = Number(inAnos.value);

  if (numChin < 2 || numAnos == 0 || isNaN(numChin) || isNaN(numAnos)) {
    alert("Informe corretamente os dados");
    inChin.focus();
    return;
  }

  var resposta = "";
  var calculo = numChin;
  

  for (var i=1; i<=numAnos; i++) {
    resposta = resposta + i +"º Ano: " + calculo + " Chincilas\n";
    calculo = calculo * 3;
  }

  outEvolucao.textContent = resposta;
}

var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarPrevisao);