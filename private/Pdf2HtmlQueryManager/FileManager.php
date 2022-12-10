<?php 
class FileManager
{
    public function putContents($filePath, $Id)
    {   
        $i = $Id;
        $contenue = "
        var ball_".$i." = document.getElementById('$i');
        // On récupere tous les valeurs de l'event localStorage enregistrer afin de les attribuers
        ball_".$i.".style.height = localStorage.getItem('clientHeight_".$i."') + 'px';
        ball_".$i.".style.width = localStorage.getItem('clientWidth_".$i."') + 'px';
        ball_".$i.".style.left = localStorage.getItem('clientX_".$i."') + 'px';
        ball_".$i.".style.top = localStorage.getItem('clientY_".$i."') + 'px';
        ball_".$i.".style.position = 'absolute';
        ball_".$i.".style.zIndex = 1000;

        // Evenement mouseup
        $('.ball_$i').mouseup(function(event) {
        var ball_$i = document.getElementById('$i');
        ball_$i.style.cursor = 'auto';
        })
        // Evenement mousemove
        $('.ball_$i').mousemove(function(event)
        {
          ball_$i.style.cursor = 'move';
          document.body.appendChild(ball_$i);
          // variable qui va gérer le déplacement de l'image
          var CheckPosition = (function () {
            var executed = false;
            return function () {
              if (!executed) {
                executed = true;
                if (localStorage.getItem('viewportX') != '') {
                  ball_".$i.".style.left = localStorage.getItem('viewportX_".$i."') + 'px';
                  ball_".$i.".style.top = localStorage.getItem('viewportY_".$i."') + 'px';
                }
              }
            };
          })();
          // Déclaration de la variable
          CheckPosition();
          ball_".$i.".onmousedown = function (event) {
            moveAt(event.pageX, event.pageY);
            function moveAt(pageX, pageY) {
            ball_".$i.".style.left = pageX - ball_".$i.".offsetWidth / 2 + 'px';
            ball_".$i.".style.top = pageY - ball_".$i.".offsetHeight / 2 + 'px';
            }
            function onMouseMove(event) {
            moveAt(event.pageX, event.pageY)
            }
       
            document.addEventListener('mousemove', onMouseMove);
            ball_$i.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            ball_".$i.".classList.add('maclasse_');

            ball_$i.onmouseup = null;
          };
        };
        ball_$i.ondragstart = function () {
        return false;
        };
        // Code pour récuperer les coordonés
        function elementPosition(a_".$i."){
          localStorage.setItem('position_".$i."', a_".$i.");
          var b = a_".$i.".getBoundingClientRect();
          return {
            clientX: a_".$i.".offsetLeft,
            clientY: a_".$i.".offsetTop,
            clientHeight_".$i.": ball_".$i.".offsetHeight,
            viewportX_".$i.": (b.x || b.left),
            viewportY_".$i.": (b.y || b.top)
          }
        };
        var mon_element = document.getElementById('$i');
        mon_element.addEventListener('click', function () {
          var position = elementPosition(mon_element);
          localStorage.setItem('clientX_$i', position.clientX);
          localStorage.setItem('clientY_$i', position.clientY);
          localStorage.setItem('viewportX_$i', position.viewportX);
          localStorage.setItem('viewportY_$i', position.viewportY);
          localStorage.setItem('clientHeight_$i', ball_$i.clientHeight);
        });
      });      
        $(window).click(function()
        {
        ball_".$i.".classList.remove('maclasse_');
        ball_".$i.".click(function(event)
        {
        ball_".$i.".onmousedown = function (event) {
        function moveAt(pageX, pageY) {
            ball_".$i.".style.left = pageX - ball_".$i.".offsetWidth / 2 + 'px';
            ball_".$i.".style.top = pageY - ball_".$i.".offsetHeight / 2 + 'px';
        }
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY)
          }
        document.addEventListener('mousemove', onMouseMove);
        ball_".$i.".onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        ball_".$i.".classList.remove('newclass');
        };
        }
        ball_".$i.".classList.add('maclasse_');
        event.stopPropagation();
        }
        )
        });";
        $FileManager = new FileManager();
        /*
          La fonction file_put_contents() de PHP permet de créer un fichier en écrivant des données dans ce fichier. 
          Pour plus d'informations, vous pouvez consulter la documentation en ligne à l'adresse suivante : https://www.php.net/manual/en/function.file-put-contents.php.
        */
        file_put_contents($filePath,$contenue);
    }
}
?>