<?php
    $nombredeusuario= $_GET['nombredeusuario'];
    $Email=$ = $_GET['Email'];
    $contraseña= $_GET['contraseña'];

    require("conexion.php");

    $conexion=mysqli_connect($localhost, $name,$password,$user);
    if (mysqli_connect_errno())
    {
        echo "<br>";
        echo "no pudo conectarse con la base de datos";
        exit();
    }

    mysqli_set_charset($conexion,"utf8");
    $consulta= "INSERT INTO sesión(
        nombre_usuario, gmail, contraseña) VALUES (
        '$nombre_usuario', '$gmail', '$contraseña')";
        $resultados=mysqli_query($conexion, $consulta);

        if($resultados==false){
            echo "<center>";
            echo "error en la insercion de datos";
            echo "</center>";
}
else{

    echo "<center>";
    echo "<registro almacenado correctamente>";
    echo "</center>";
}
?>