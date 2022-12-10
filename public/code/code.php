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
<html>
<head>
    <!-- Lien pour le fichier css  -->
    <link rel="stylesheet" href="code.css" >
    <!-- Lien pour l'encodage HTML5  -->
   <meta http-equiv="Content-Type" content="text/plain;text/javascript;text/css;charset=utf-8" />
    <!-- Lien pour Jquery  -->
   <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>

<!-- Div qui va gérer toutes les images et le texte présents sur la page -->
<div class="contenu">
      <?php foreach($Pdf2HtmlQueryManager_Image as $Pdf2HtmlQueryManager_Image_V2): ?>
        <?php 
          // Récuperation de l'id de l'image
          $i = $Pdf2HtmlQueryManager_Image_V2['Id'];
        ?>
        <div class="image">
          <img src="../<?= $Pdf2HtmlQueryManager_Image_V2['src']?>"   class="img ball_<?=$i?>"  style="z-index: 1; position: absolute; " width="80" height="80"   id="<?= $Pdf2HtmlQueryManager_Image_V2['Id']?>">
          <?php 
            // Création d'un répertoire javascript qui va sctocker tous le code des images / text indépedent.
            mkdir("javascript");
            $manager->putContents('javascript/image_'.$i.'.js', $i);
            echo "<script src='javascript/image_$i.js'></script>";
          ?>
        </div>
      <?php endforeach ?>
      </div>
</body>
</html>