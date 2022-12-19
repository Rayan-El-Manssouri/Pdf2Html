<?php 

// Utilisation de la classe Pdf2HtmlQueryManager 
require_once '../../private/Pdf2HtmlQueryManager/Pdf2HtmlQueryManager.php';

require_once '../../private/bdd/connect.php';
$database = new Database();

// classe FileManager qui me permettra de gérer les fichiers
require_once '../../private/Pdf2HtmlQueryManager/FileManager.php';

// On enléve toute les erreures inutiles.
error_reporting(0);

// Instance de la class Pdf2HtmlQueryManager
$Pdf2HtmlQueryManager = new Pdf2HtmlQueryManager($pdo);

// function getAllImage qui récupere toute les images
$Pdf2HtmlQueryManager_Image = $Pdf2HtmlQueryManager->getAllImage();

// function getAllImage qui récupere toute les images
$Pdf2HtmlQueryManager_Text = $Pdf2HtmlQueryManager->getAllText();

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
                <img src="../<?= $Pdf2HtmlQueryManager_Image_V2['src']?>" id="img_<?=$i?>" style="z-index: 1; position: absolute;"    class="img ball_<?=$i?>"   width="80" height="80"   >
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
                <input type="hidden" id="cacher_<?=$i?>" name="test" value="<?=$i?>">
              </form>
            </div>
        <?php endforeach ?>
            <?php 
              if(!empty($_POST['supp'])){
                  require_once '../../private/bdd/connect.php';
                  $database = new Database();
                  $query3 = "SELECT * FROM `image` WHERE Id=".$_POST['test']."";
                  $data3 = $database->read($query3);
                  $src = $data3[0]['src'];
                  $i2 = $_POST['test'];
                  unlink("./javascript/image_$i2.js");
                  $query2 = "DELETE FROM `image`WHERE Id=".$i2." ";
                  $data2 = $database->read($query2);
                  header("Location: code.php");
                }

             ?>
             <?php 
             
             
             ?>
             <?php  foreach($Pdf2HtmlQueryManager_Text as $Pdf2HtmlQueryManager_Text_V2): ?>
              <p id="<?=$Pdf2HtmlQueryManager_Text_V2['Id']?>" style="position: absolute;"><?= $Pdf2HtmlQueryManager_Text_V2['Text'] ?></p>
              <?php 
              mkdir("text");
              $i_text = $Pdf2HtmlQueryManager_Text_V2['Id'];
              file_put_contents('text/text_'.$i_text.'.js', '
              var oWdgCursor = function (sElement, sLimite) {
                this.oLimite = null;
                this.oElement = null;
                this.oLimite = document.getElementById(sLimite);
                this.bDrag = false;
                this.bError = false;
                this.sClassDrag = "oWdgCursorDrag";
                this.oPos = {x:0,y:0};
                this.moveDiv = this.moveDiv.bind(this); 
                this.getBoundingLimite = function(){

                  if(this.oLimite == document.documentElement){
                    return  {width:window.innerWidth, 
                             height:window.innerHeight,
                             top:this.oLimite.offsetTop,
                             left:this.oLimite.offsetLeft
                            }
                  }
                  return this.oLimite.getBoundingClientRect();
                }
                /**
                * Initialise les evenements
                */
                this.init = function (sLimite, sElement) {  
                  this.oElement = document.getElementById(sElement); 
                  this.oLimite =(sLimite === undefined)? document.documentElement:document.getElementById(sLimite);
                  if(this.oElement == null || this.oLimite == null){
                    return true;
                  }//if
                  this.oElement.addEventListener("mousedown", this.moveDiv);
                  this.oElement.addEventListener("touchstart", this.moveDiv);
                  return false;
                }//fct 
              
                this.bError = this.init(sLimite, sElement);
              }//fct
              
              oWdgCursor.prototype.moveDiv  = function (oEvent){
                oEvent.preventDefault();
                if(oEvent.type=="touchstart" || oEvent.type=="mousedown"){
                  this.bDrag = true;
                  var oTouch = oEvent,
                      oRect = this.oElement.getBoundingClientRect();
                  if(oEvent.type=="touchstart"){
                    oTouch = null;
                    if (oEvent.targetTouches.length > 0 ) {
                      for(var i = 0; i < oEvent.targetTouches.length ; i++){
                        if(oEvent.targetTouches[i].target == this.oElement){
                          oTouch = oEvent.targetTouches[i];7
                          break;
                        }//if
                      }//for
                    }//if
                    if(oTouch==null){return}
                  } //if
                  this.oPos = {"left":(oTouch.clientX - oRect.left),"top": (oTouch.clientY - oRect.top)};
                  document.addEventListener("mouseup", this.moveDiv) ;
                  this.oElement.addEventListener("mouseup", this.moveDiv) ;
                  document.addEventListener("touchend", this.moveDiv) ; 
              
                  document.addEventListener("mousemove", this.moveDiv) ; 
                  document.addEventListener("touchmove", this.moveDiv) ; 
                }else if(oEvent.type=="touchend" || oEvent.type=="mouseup"){
                  this.bDrag = false;
                  this.oElement.classList.remove(this.sClassDrag)
                  document.removeEventListener("mousemove", this.moveDiv) ;
                  document.removeEventListener("touchmove", this.moveDiv) ;
                  document.removeEventListener("mouseup", this.moveDiv) ;
                  document.removeEventListener("touchend", this.moveDiv) ; 
                  this.oElement.removeEventListener("mouseup", this.moveDiv) ;


                }else if(oEvent.type=="touchmove" || oEvent.type=="mousemove"){
                  var oTouch = oEvent;
              
                  if(oEvent.type=="touchmove"){

                    oTouch = null;
                    if (oEvent.targetTouches.length > 0 ) {
                      for(var i = 0; i < oEvent.targetTouches.length ; i++){
                        if(oEvent.targetTouches[i].target == this.oElement){
                          oTouch = oEvent.targetTouches[i];
                          break;
                        }//if
                      }//for
                    }//if
                    if(oTouch==null){return}
                  }//if
                  if(this.bDrag == true){ 
                    this.oElement.classList.add(this.sClassDrag)
                    var oRect = this.getBoundingLimite(),
                        iWidth= this.oElement.offsetWidth,
                        iHeight = this.oElement.offsetHeight, 
                        iClientX = oTouch.clientX - oRect.left - this.oPos.left,
                        iClientY = oTouch.clientY- oRect.top - this.oPos.top 
                    ;
                    if(iClientX < 0 ){
                      iClientX = 0;
                    }else if(iClientX + iWidth > oRect.width){
                      iClientX = oRect.width - iWidth ;
                    }
                    if(iClientY < 0 ){
                      iClientY = 0;
                    }else if(iClientY + iHeight > oRect.height){
                      iClientY = oRect.height - iHeight ;
                    } 
                    this.oElement.style.left = iClientX+"px";
                    this.oElement.style.top  = iClientY+"px";

                  }//if
                  else{
                    this.oElement.classList.remove(this.sClassDrag)
                  }
                }//else if
              }//fct 
              
              document.addEventListener("DOMContentLoaded",function(){
                var oZone2 = new oWdgCursor("'.$i_text.'"); 
              });');
              echo "<script type='text/javascript' src='text/text_$i_text.js'></script>";
              ?>
             <?php endforeach ?>
</body>
</html>