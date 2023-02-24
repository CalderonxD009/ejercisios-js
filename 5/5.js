function calcularDolares(){

  let pesos = document.getElementById("pesos").value

  peso_dolar(pesos)

}

function peso_dolar(pesos){

  let totalDolares = (pesos / 4800 )
  document.getElementById("dolares").value = totalDolares
}


function calcularPesos(){

  let dolares = document.getElementById("dolares2").value

  dolar_pesos(dolares)

}


function dolar_pesos(dolares){

  let totalPesos = (dolares * 4800)
  document.getElementById("pesos2").value = totalPesos

}