<?php 
require_once '../../private/bdd/connect.php';
$database = new Database();
error_reporting(0);
$query1 = "SELECT * FROM image";
$data1 = $database->read($query1);
?>
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="code.css" >
   <meta http-equiv="Content-Type" content="text/plain;text/javascript;text/css;charset=utf-8" />
   <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>
<div class="contenu">
      <?php foreach($data1 as $dataV2): ?>
        <div class="image">
          <img src="../<?= $dataV2['src']?>"   class="img" style="z-index: 1; position: absolute; " width="80" height="80"   id="<?= $dataV2['Id']?>">
          <?php // Création d'un répertoire javascript qui va sctocker tous le code des images / text indépedent.
    mkdir("javascript");
        $i = $dataV2['Id'];
        // fonctionnalites file_put_contents pour créé un fichier . Pour plus d'information : https://www.php.net/manual/en/function.file-put-contents.php
        file_put_contents('javascript/image_'.$i.'.js', 'var ball_'.$i.' = document.getElementById("'.$i.'");
        ball_'.$i.'.style.height = localStorage.getItem("clientHeight_'.$i.'") + "px";
        ball_'.$i.'.style.width = localStorage.getItem("clientWidth_'.$i.'") + "px";
        ball_'.$i.'.style.left = localStorage.getItem("clientX_'.$i.'") + "px";
        ball_'.$i.'.style.top = localStorage.getItem("clientY_'.$i.'") + "px";
        ball_'.$i.'.style.position = "absolute";
        ball_'.$i.'.style.zIndex = 1000;
        $("#'.$i.'").mouseup(function(event) {
        var ball_'.$i.' = document.getElementById("'.$i.'");
        ball_'.$i.'.style.cursor = "auto";
        })
        $("#'.$i.'").mousemove(function(event)
        {
          ball_'.$i.'.style.cursor = "move";
          document.body.appendChild(ball_'.$i.');
          var CheckPosition = (function () {
            var executed = false;
            return function () {
              if (!executed) {
                executed = true;
                console.log(localStorage.getItem("clientX"));
                if (localStorage.getItem("viewportX") != "") {
                  ball_'.$i.'.style.left = localStorage.getItem("viewportX_'.$i.'") + "px";
                  ball_'.$i.'.style.top = localStorage.getItem("viewportY_'.$i.'") + "px";
                }
              }
            };
          })();
          CheckPosition();
          ball_'.$i.'.onmousedown = function (event) {
            moveAt(event.pageX, event.pageY);
            function moveAt(pageX, pageY) {
            ball_'.$i.'.style.left = pageX - ball_'.$i.'.offsetWidth / 2 + "px";
            ball_'.$i.'.style.top = pageY - ball_'.$i.'.offsetHeight / 2 + "px";
            }
            function onMouseMove(event) {
            moveAt(event.pageX, event.pageY)
            }
       
            document.addEventListener("mousemove", onMouseMove);
            ball_'.$i.'.onmouseup = function () {
            document.removeEventListener("mousemove", onMouseMove);
            ball_'.$i.'.classList.remove("newclass");
            ball_'.$i.'.onmouseup = null;
          };
        };
        ball_'.$i.'.ondragstart = function () {
        return false;
        };
        // Code pour récuperer les coordonés
        function elementPosition(a_'.$i.'){
          localStorage.setItem("position_'.$i.'", a_'.$i.');
          var b = a_'.$i.'.getBoundingClientRect();
          return {
            clientX: a_'.$i.'.offsetLeft,
            clientY: a_'.$i.'.offsetTop,
            clientHeight_'.$i.': ball_'.$i.'.offsetHeight,
            viewportX_'.$i.': (b.x || b.left),
            viewportY_'.$i.': (b.y || b.top)
          }
        };
        var mon_element = document.getElementById("'.$i.'");
        mon_element.addEventListener("click", function () {
          var position = elementPosition(mon_element);
          localStorage.setItem("clientX_'.$i.'", position.clientX);
          localStorage.setItem("clientY_'.$i.'", position.clientY);
          localStorage.setItem("viewportX_'.$i.'", position.viewportX);
          localStorage.setItem("viewportY_'.$i.'", position.viewportY);
          localStorage.setItem("clientHeight_'.$i.'", ball_'.$i.'.clientHeight);
        });
      });      
        $(window).click(function()
        {
        ball_'.$i.'.classList.remove("maclasse_");
        $("#'.$i.'").click(function(event)
        {
        ball_'.$i.'.onmousedown = function (event) {
        function moveAt(pageX, pageY) {
            ball_'.$i.'.style.left = pageX - ball_'.$i.'.offsetWidth / 2 + "px";
            ball_'.$i.'.style.top = pageY - ball_'.$i.'.offsetHeight / 2 + "px";
          }
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY)
          }
        document.addEventListener("mousemove", onMouseMove);
        ball_'.$i.'.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove);
        ball_'.$i.'.classList.remove("newclass");
        };
        }
        ball_'.$i.'.classList.add("maclasse_");
        event.stopPropagation();
        }
        )
        });'); ?>
          <?php
          echo "<script src='javascript/image_$i.js'></script>";
          ?>
        </div>
      <?php endforeach ?>
      </div>
</body>
</html>