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

function traerDatos()
{
    try
    {
        var strHtml = "";
		$.ajax({
				global: false,
				dataType: "html",
				async: false,
                type: "POST",
                url: 'php/consultar_estudiantes.php',
                data: $("#form").serialize(),
            }).done(function (resultado) {

                $("#listaDatos").html(resultado);
                $("#listaDatos").listview().listview('refresh');
				setTimeout(function() { window.location='index.html'; }, 2000);
        });
    }
    catch(ex)
    {
        alert("Error de datos!!");
    }
}
