<?php 

// Utilisation de la classe Pdf2HtmlQueryManager 
require_once '../../private/Pdf2HtmlQueryManager/Pdf2HtmlQueryManager.php';

// classe FileManager qui me permettra de gérer les fichiers
require_once '../../private/Pdf2HtmlQueryManager/FileManager.php';

// On enléve toute les erreures inutiles.
error_reporting(0);

// Instance de la class Pdf2HtmlQueryManager
$Pdf2HtmlQueryManager = new Pdf2HtmlQueryManager($pdo);

// function getAllImage qui récupere toute les images
$Pdf2HtmlQueryManager_Image = $Pdf2HtmlQueryManager->getAllImage();

$manager = new FileManager();


?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="code.css"></link>
</head>
<body>
        <!-- Div qui va gérer toutes les images et le texte présents sur la page -->
        <?php foreach($Pdf2HtmlQueryManager_Image as $Pdf2HtmlQueryManager_Image_V2): ?>
            <?php 
              // Récuperation de l'id de l'image
              $i = $Pdf2HtmlQueryManager_Image_V2['Id']; 
            ?>
            <div class="image" id="<?= $Pdf2HtmlQueryManager_Image_V2['Id']?>" >
                <img src="../<?= $Pdf2HtmlQueryManager_Image_V2['src']?>" style="z-index: 1; position: absolute;"    class="img ball_<?=$i?>"   width="80" height="80"   >
                <?php 
                  // Création d'un répertoire javascript qui va sctocker tous le code des images / text indépedent.
                  mkdir("javascript");
                  $manager->putContents('javascript/image_'.$i.'.js', $i);
                  echo "<script src='javascript/image_$i.js'></script>";
                ?>
            </div>
            <div class="menu_click_droit" id="menu_click_droit_id_<?=$i?>">
            <form method="POST">
              <input type="submit" value="Supprimmer" name="supp"></input>
            </form>
            </div>
        <?php endforeach ?>

        <?php 
              if(isset($_POST['supp'])){
                  require_once '../../private/bdd/connect.php';
                  $database = new Database();
                  $query3 = "SELECT * FROM `image` WHERE Id=".$i." ";
                  $data3 = $database->read($query3);
                  $src = $data3[0]['src'];
                  unlink("../$src");
                  unlink("./javascript/image_$i.js");
                  $query2 = "DELETE FROM `image`WHERE Id=".$i." ";
                  $data2 = $database->read($query2);
                  header("Location: code.php");
                }
             ?>
</body>
</html>