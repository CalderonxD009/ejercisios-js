function procesar(){
  let aporteJuan = parseFloat(document.getElementById('aporteJuan').value)
  let aportePedro = parseFloat(document.getElementById('aportePedro').value)
  let aporteMaria = parseFloat(document.getElementById('aporteMaria').value)
  calcTotal (aporteJuan,aporteMaria,aportePedro)

}

function calcTotal(aporteJuan,aporteMaria,aportePedro){

  let sumatotal = (aporteJuan + aporteMaria + aportePedro)
  document.getElementById("total").value = sumatotal
  calcPorcentajes (sumatotal,aporteJuan,aporteMaria,aportePedro)
}


function calcPorcentajes(sumatotal,aporteJuan,aporteMaria,aportePedro){


  let divicion = (sumatotal / 100)
  let porcentajeJuan = (aporteJuan / divicion)
  document.getElementById('porcentajeJuan1').value = porcentajeJuan

  let porcentajeMaria = (aporteMaria / divicion)
  document.getElementById('porcentajeMaria1').value = porcentajeMaria

  let porcentajePedro = (aportePedro / divicion)
  document.getElementById('porcentajePedro1').value = porcentajePedro
}