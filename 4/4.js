function procesar(){
  let total = parseInt(document.getElementById('total').value);
  let efectivo = parseInt(document.getElementById('efectivo').value);
  dcto(total,efectivo);
}

function dcto(total,efectivo){ //recibe el total y el efectivo
  if (total>50000){ //condicion del descuento
    let dcto = total * 0.10 // sacar el valor del descuento
    let pagar = (total - dcto) //el total a pagar con descuento
    if (efectivo>pagar){ // ver que la plata sea mayor que lo que hay que pagar
      cambio = (efectivo-pagar) //sacar los vueltos

    }else  { // si le falta plata
      let faltante = pagar - efectivo //ver cuanta plata le falta
      alert (`le falta ${faltante}`)
    }

}else{ // total menor que 50000
  if (efectivo>total){ // tiene para pagar
    cambio = (efectivo-total) // sacar vueltos

  }else  { // no tiene la plata
    let faltante = total - efectivo // ver cuanto le falta
    alert (`le falta ${faltante}`)
  }
}
  imprimir(cambio) // los vueltos


}

function imprimir(cambio){ // llamar los vueltos
  alert (`su cambio es de ${cambio}` //mostrar los vueltos
  )
}
