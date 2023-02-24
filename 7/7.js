function procesar(){
  let edadJ = parseInt(document.getElementById("edadJ").value);
  let edadP = parseInt(document.getElementById("edadP").value);
  let edadM = parseInt(document.getElementById("edadM").value);
  mayor(edadJ,edadP,edadM)

}

function mayor(edadJ,edadP,edadM){
  if (edadJ>edadP && edadJ>edadM){
    alert("Juan es el mayor")
  }else if (edadP>edadJ && edadP>edadM){
    alert("Pedro es el mayor")
  }else if (edadM>edadJ && edadM>edadP){
    alert("Maria es la mayor")
  }
}