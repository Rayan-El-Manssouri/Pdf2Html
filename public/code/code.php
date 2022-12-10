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
                <img src="../<?= $Pdf2HtmlQueryManager_Image_V2['src']?>"    class="img ball_<?=$i?>"   width="80" height="80"   >
                <?php 
                  // Création d'un répertoire javascript qui va sctocker tous le code des images / text indépedent.
                  mkdir("javascript");
                  $manager->putContents('javascript/image_'.$i.'.js', $i);
                  echo "<script src='javascript/image_$i.js'></script>";
                ?>
            </div>
        <?php endforeach ?>
</body>
</html>