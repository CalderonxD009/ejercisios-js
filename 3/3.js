function procesar(){
  let precio = document.getElementById('precio').value
  let descuento = document.getElementById('descuento').value
  let dcto = precio * descuento / 100
  let total = precio - dcto
  imprimir(total)
  setLocalStorage(total)
}

function imprimir(total){
  alert(`el precio con descuento es ${total}`)

}

function setLocalStorage(total){
  localStorage.setItem('precio',total)
}