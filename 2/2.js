function procesar(){


  let dinero = document.getElementById('dinero').value
  let retirar = parseInt(document.getElementById('retirar').value)
  let consignar = parseInt(document.getElementById('consignar').value)


  if(retirar>0){
    if(dinero>retirar){
      retirarD(dinero,retirar)
    }
    else{
      alert('NO tiene fondos suficientes')
    }
  }
  if(consignar>0){
    consignarD(dinero,consignar)
  }

  //setlocalstorage(totalDinero)
}

function retirarD(dinero,retirar){
    let total = parseInt(dinero)-parseInt(retirar)
    imprimir(total)
}

function consignarD(dinero,consignar){
  let total = parseInt(dinero)+parseInt(consignar)
  imprimir(total)

}

function imprimir(total){
   document.getElementById('dinero').value=total
  limpiar()
  setlocalstorage(total)

}

 function limpiar(){
   document.getElementById('retirar').value=0
  document.getElementById('consignar').value=0
}

function setlocalstorage(total){

  localStorage.setItem('total', total);
  alert(`procesado correctamente`)

}