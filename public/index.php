<?php 
/*//////////////////////////////
// 
// Createur : https://github.com/Rayan-El-Manssouri
// Création du projet : 19/11/2022 12:41
//
*////////////////////////////////
?>

<?php 
require_once '../private/bdd/connect.php';
$database = new Database();
error_reporting(0);
$query1 = "SELECT * FROM image";
$data1 = $database->read($query1);
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Pdf 2 Html</title>
    <link rel="stylesheet" href="index.css" >
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="index.css" >
   <meta http-equiv="Content-Type" content="text/plain;text/javascript;text/css;charset=utf-8" />
   <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>
    <?php require_once '../private/nav/nav.php' ?>
    <iframe src="code/code.php" scrolling="no" crossorigin="anonymous" draggable="false"></iframe>
</body>
</html>