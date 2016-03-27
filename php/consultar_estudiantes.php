<?php
include('conex.php');

$latitud  	= $_POST["latitud"];
$longitud 	= $_POST["longitud"];
$datos 		= $_POST['datos'];
$dni		= $_POST['dni'];
$celular	= $_POST['celular'];
$direccion	= $_POST['direccion'];
$tipo		= $_POST['tipo'];
$observacion= $_POST['observacion'];



$auto=mysql_query("SELECT * FROM solicitudes_alertas");
$numero=mysql_num_rows($auto);
if($numero==0){
	$cod=1;
	}else{
		$cod=$numero+1;
		}
 $sql=mysql_query("INSERT INTO solicitudes_alertas VALUES ('$cod','$datos','$dni','$celular','$direccion','$latitud','$longitud','$tipo','','','$observacion','','ESPERA')");

echo '<br>'.'Se guardo la Informacion!';


?>
