<?php 

class FileManager
{
    public function putContents($filePath, $Id)
    {   
        $i = $Id;
        $contenue = " 
        var ball_$i = document.getElementById('$i')
        ball_$i.style.left =  localStorage.getItem('IamgeLeft_$i') ;
        ball_$i.style.top = localStorage.getItem('IamgeTop_$i');
        ball_$i.onmousedown = function(event) {
            let shiftX = event.clientX - ball_$i.getBoundingClientRect().left;
            let shiftY = event.clientY - ball_$i.getBoundingClientRect().top;
            ball_$i.style.zIndex = 1000;
            document.body.append(ball_$i);
            moveAt(event.pageX, event.pageY);
            // Déplace la balle aux cordonnées (pageX, pageY)
            // Prenant en compte les changements initiaux
            function moveAt(pageX, pageY) {
              ball_$i.style.left = pageX - shiftX + 'px';
              ball_$i.style.top = pageY - shiftY + 'px';
              localStorage.setItem('IamgeLeft_$i', ball_$i.style.left);
              localStorage.setItem('IamgeTop_$i', ball_$i.style.top);
            }  
            function onMouseMove(event) {
              ball_$i.style.cursor = 'move';
              moveAt(event.pageX, event.pageY);
            }
            // déplace la balle à l’évènement mousemove
            document.addEventListener('mousemove', onMouseMove);
          
            // dépose la balle, enlève les gestionnaires d’évènements dont on a pas besoin
            ball_$i.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              ball_$i.onmouseup = null;
              ball_$i.style.cursor = 'default';
            };
          };
          ball_$i.ondragstart = function() {
            return false;
          };
        ";
        /*
          La fonction file_put_contents() de PHP permet de créer un fichier en écrivant des données dans ce fichier. 
          Pour plus d'informations, vous pouvez consulter la documentation en ligne à l'adresse suivante : https://www.php.net/manual/en/function.file-put-contents.php.
        */
        
        file_put_contents($filePath,$contenue);
    }
}
?>