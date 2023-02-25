function procesar(){
  let numeroDia = parseInt(document.getElementById('numeroDia').value)
  lunes = 1
  martes = 2
  miercoles = 3
  jueves = 4
  viernes = 5
  sabado = 6
  domingo = 7
  dia(numeroDia,lunes,martes,miercoles,jueves,viernes,sabado,domingo)
}

function dia(numeroDia,lunes,martes,miercoles,jueves,viernes,sabado,domingo){

  if(numeroDia == lunes){
    alert('Es Lunes')
  }else if(numeroDia == martes){
    alert('Es Martes')
  }else if(numeroDia == miercoles){
    alert('Es Miercoles')
  }else if(numeroDia == jueves){
    alert('Es Jueves')
  }else if(numeroDia == viernes){
    alert('Es Viernes')
  }else if(numeroDia == sabado){
    alert('Es Sabado')
  }else if(numeroDia == domingo){
    alert('Es Domingo')
  }else if(numeroDia>7){
    alert('no es un numero valido')
  }else if(numeroDia<1){
    alert('no es un numero valido')
  }
}