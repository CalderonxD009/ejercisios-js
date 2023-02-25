function adivinar(){

  let numero = parseInt(document.getElementById('numero').value)
  let numeroAdivinar = 16
  comparar (numero,numeroAdivinar)
}


function comparar(numero,numeroAdivinar){
  if(numero == numeroAdivinar){
    alert ("Felicitaciones ha adivinado el numero")
  }else if(numero>numeroAdivinar){
    alert("el numero que ha escogido es mayor que el que debe adivinar")
  }else if (numero<numeroAdivinar){
    alert("El numero es menor que el que debe adivinar")
  }
}
