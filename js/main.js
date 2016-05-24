/* Inserta tu código aqui */
$(document).ready(function() {
	$("#boton").click(funciona);	
}); 

function getInputValue(){
  var mensaje= ($("#nombre").val()).toLowerCase();
  return mensaje;
}
//------------------------------
// var uniqueRandoms = [];
// var numRandoms=0;
// function makeUniqueRandom() {
//     // refill the array if needed
//     if (!uniqueRandoms.length) {
//         for (var i = 0; i < numRandoms; i++) {
//             uniqueRandoms.push(i);
//         }
//     }
//     var index = Math.floor(Math.random() * uniqueRandoms.length);
//     var val = uniqueRandoms[index];
//     // now remove that value from the array
//     uniqueRandoms.splice(index, 1);
//     return val;
// }
var historial = []

function generarAleatorio(maximo) {
	var aleatorio
	var existe = true
	do {
		aleatorio = Math.floor(Math.random()*maximo)
		if (historial.length == maximo) {
			aleatorio = -1
			existe = false
		} else if (historial.length == 0) {
			historial.push(aleatorio)
			existe = false
		} else {
			var encontrado = historial.indexOf(aleatorio)
			if (encontrado < 0) {
				historial.push(aleatorio)
				existe = false 	
			} else {
				console.log("Se repite! -> " + aleatorio)
			}
		}
	} while (existe)
	return aleatorio
}
//-----------------------------------
var random=0;
var pais=0;
function r_foto(random) {
	var imagen_pais= (pais==2) ?  ("mexico/"+mexico[random].image) :((pais==1) ? ("peru/"+peru[random].image): "JUGAR.png");
    return "fotos/"+imagen_pais;
}
function MostrarFoto(src){
	$(".ing-foto").attr("src",src);
}
ejecutar();

function consultaName(){
	var nameConsulta="";
	nameConsulta= (pais==1)? peru[random].name : mexico[random].name ;
	return nameConsulta.toLowerCase();
}

var k=0;
var c=5;
var j=0;
function funciona () {
	k++;
	if(getInputValue() == consultaName()){
		ganador();
		ejecutar();
		k=0;
		c=5;
		j+=5;
		$("#contador").html(j);
		$("#result").html("Bien");
	} else if (k===5) {
		ganador();
		ejecutar();
		$("#result").html("Se agotaron tus opciones");
		k=0;
		c=5;
		j--;
		$("#contador").html(j);
	}else if(k<5){
		c--;
		$("#result").html("Tienes "+c+" opciones vuelve a intentar");
	}
}

function ganador(){
	if( k%numRandoms=== 0){
		alert("El puntaje obtenido es "+j);
		k=0;
	}
}

function ejecutar(){
	numRandoms=paisActual();
	random=	generarAleatorio(numRandoms);
	var src=r_foto(random);
	MostrarFoto(src);
}

function paisActual() {
	var max=(pais==1) ? (peru.length-1) : mexico.length-1;
	return max;
}

$("#sedes").change(function(){
	var valor = $(this).val();
	pais=(valor==1)? 1 : ((valor==2) ? 2 : 3);
	ejecutar();
});