
$(document).on("ready",ini);

function ini()
{
	$("#btnConsultar").on("click",consultarEstudiantes);    
}

function consultarEstudiantes()
{
	//cc = $("#txtDoc").val();
	var datos		= $("#datos").val();
	var dni 		= $("#dni").val();
	var celular 	= $("#celular").val();
	var direccion	= $("#direccion").val();	
		
	if(datos==""){
			 $("#listaDatos").html("Complete la informacion , DATOS(*)");
			return false;
		}else if(dni==""){
			 $("#listaDatos").html("Complete la informacion , DNI(*) ");
			return false;
		}else if(celular==""){
			$("#listaDatos").html("Complete la informacion , MOVIL(*) ");
			return false;
		}else if(direccion==""){
		    $("#listaDatos").html("Complete la informacion , DIRECCION(*) ");
			return false;
		}else{
	traerDatos();
		}
}

function traerDatos(){
	var la=document.getElementById("latitud").value;
	var lo=document.getElementById("longitud").value;
    var url='http://190.42.217.93/mobile/m/php/insert.php?latitud='+la+'&longitud='+lo;
window.location=url;

}
