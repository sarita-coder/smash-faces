/* Inserta tu código aqui */
$(document).ready(function() {
	$("#boton").click(funciona);	
}); 

function getInputValue(){
  var mensaje= $("#nombre").val();
  return mensaje;
}
//------------------------------
var uniqueRandoms = [];
var numRandoms=0;
function makeUniqueRandom() {
    // refill the array if needed
    if (!uniqueRandoms.length) {
        for (var i = 0; i < numRandoms; i++) {
            uniqueRandoms.push(i);
        }
    }
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var val = uniqueRandoms[index];
    // now remove that value from the array
    uniqueRandoms.splice(index, 1);
    return val;
}
//-----------------------------------
var random=0;
var pais=0;
function r_foto(random) {
	var imagen_pais= (pais==1)? ("peru/"+peru[random].image) : ("mexico/"+mexico[random].image);
    return "fotos/"+imagen_pais;
}

function MostrarFoto(src){
	$(".ing-foto").attr("src",src);
}

ejecutar();

function consultaName(){
	var nameConsulta="";
	nameConsulta= (pais==1)? peru[random].name : mexico[random].name ;
	return nameConsulta;
}

var k=0;
var c=5;
var j=0;
function funciona () {
	k++;
	if(getInputValue()===consultaName()){
		ganador();
		ejecutar();
		k=0;
		c=5;
		j+=5;
		$("#contador").html(j);
	} else if (k===5) {
		ganador();
		ejecutar();
		alert("Se agotaron tus opciones");
		k=0;
		c=5;
		j--;
		$("#contador").html(j);
	}else if(k<5){
		c--;
		alert("Tienes "+c+" opciones vuelve a intentar");	
	}
	$("#nombre").val(" ");
}

function ganador(){
	if( k%makeUniqueRandom() === 0){
		alert("El puntaje obtenido es "+j);
		k=0;
	}
}

function ejecutar(){
	numRandoms=paisActual();
	random=	makeUniqueRandom();
	var src=r_foto(random);
	MostrarFoto(src);
}

function paisActual() {
	var max=(pais==1) ? (peru.length-1) : mexico.length-1;
	return max;
}

$("#sedes").change(function(){
	var valor = $(this).val();
	pais=(valor==1)? 1 : ((valor==2)? 2 : 1);
	ejecutar();
});