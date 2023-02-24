function calcularGradosF(){

  let gc1 = parseInt(document.getElementById('gc1').value)

  cF(gc1)
}

function cF(gc1){

  let gfT = (gc1 * 9/5 +32)
  document.getElementById("gf1").value = gfT
}


function calcularGradosC(){

  let gf2 = parseInt(document.getElementById('gf2').value)
  cC(gf2)
}

function cC(gf2){

  let gcT = (gf2 - 32) * 5/9
  document.getElementById("gc2").value = gcT

}
