var caixa2 = document.getElementById('caixa2');

caixa2.addEventListener("click", function (event) {
	var star = event.target.id;
	var id_seleccionado = star.replace('star', '');
  peixos(id_seleccionado);
}, false);

function peixos(parameter) {
  clearSelected(); //después de limpiar, los checked nuevos 
  for(i=1; i<=parameter; i++){
    document.getElementById("star" +i).classList.remove("unchecked");
    document.getElementById("star" +i).classList.add("checked");
  }}

function clearSelected() { //limpiamos todo
   for(let i=1; i<=5; i++) {
    document.getElementById("star" +i).classList.remove("checked");
    document.getElementById("star" +i).classList.add("unchecked");
    }
  }



    /*var res = document.getElementsByName("ranking-est");
  for(var i=0;i<res.length;i++){
	  console.log(res[i]);
  }*/


/*var sOne = document.getElementById("star1");
var sTwo = document.getElementById("star2");
var sThree = document.getElementById("star3");
var sFour = document.getElementById("star4");
var sFive = document.getElementById("star5");
var fora = document.getElementById("caixa2");*/

/*var verds=[sOne,sTwo,sThree, sFour,sFive];*/

/*fora.addEventListener("click", clearSelected, true);
document.getElementById("star1").addEventListener("click", peixos(), false);
document.getElementById("star2").addEventListener("click", peixos(), false);
document.getElementById("star3").addEventListener("click", peixos(), false);
document.getElementById("star4").addEventListener("click", peixos(), false);
document.getElementById("star5").addEventListener("click", peixos(), false);*/