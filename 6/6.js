function calcular(){
  let primero = parseInt(document.getElementById('primero').value)
  let segundo = parseInt(document.getElementById('segundo').value)
  let tercero = parseInt(document.getElementById('tercero').value)
  let cuarto = parseInt(document.getElementById('cuarto').value)
  valorExacto(primero,segundo,tercero,cuarto)

}

function valorExacto(primero,segundo,tercero,cuarto){
  let suma = (segundo+tercero+cuarto)
  console.log(suma)
  if (primero == suma){
    mensaje("el numero es exacto")
  }else if (suma>primero){
    mensaje("la suma es mayor que el numero indicado")
  }else{
    mensaje("la suma es menor")
  }
}
function mensaje(mensaje){
  alert(mensaje)
}