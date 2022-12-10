
        var ball_149 = document.getElementById('149');
        // On récupere tous les valeurs de l'event localStorage enregistrer afin de les attribuers
        ball_149.style.height = localStorage.getItem('clientHeight_149') + 'px';
        ball_149.style.width = localStorage.getItem('clientWidth_149') + 'px';
        ball_149.style.left = localStorage.getItem('clientX_149') + 'px';
        ball_149.style.top = localStorage.getItem('clientY_149') + 'px';
        ball_149.style.position = 'absolute';
        ball_149.style.zIndex = 1000;

        // Evenement mouseup
        $('.ball_149').mouseup(function(event) {
        var ball_149 = document.getElementById('149');
        ball_149.style.cursor = 'auto';
        })
        // Evenement mousemove
        $('.ball_149').mousemove(function(event)
        {
          ball_149.style.cursor = 'move';
          document.body.appendChild(ball_149);
          // variable qui va gérer le déplacement de l'image
          var CheckPosition = (function () {
            var executed = false;
            return function () {
              if (!executed) {
                executed = true;
                if (localStorage.getItem('viewportX') != '') {
                  ball_149.style.left = localStorage.getItem('viewportX_149') + 'px';
                  ball_149.style.top = localStorage.getItem('viewportY_149') + 'px';
                }
              }
            };
          })();
          // Déclaration de la variable
          CheckPosition();
          ball_149.onmousedown = function (event) {
            moveAt(event.pageX, event.pageY);
            function moveAt(pageX, pageY) {
            ball_149.style.left = pageX - ball_149.offsetWidth / 2 + 'px';
            ball_149.style.top = pageY - ball_149.offsetHeight / 2 + 'px';
            }
            function onMouseMove(event) {
            moveAt(event.pageX, event.pageY)
            }
       
            document.addEventListener('mousemove', onMouseMove);
            ball_149.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            ball_149.classList.add('maclasse_');

            ball_149.onmouseup = null;
          };
        };
        ball_149.ondragstart = function () {
        return false;
        };
        // Code pour récuperer les coordonés
        function elementPosition(a_149){
          localStorage.setItem('position_149', a_149);
          var b = a_149.getBoundingClientRect();
          return {
            clientX: a_149.offsetLeft,
            clientY: a_149.offsetTop,
            clientHeight_149: ball_149.offsetHeight,
            viewportX_149: (b.x || b.left),
            viewportY_149: (b.y || b.top)
          }
        };
        var mon_element = document.getElementById('149');
        mon_element.addEventListener('click', function () {
          var position = elementPosition(mon_element);
          localStorage.setItem('clientX_149', position.clientX);
          localStorage.setItem('clientY_149', position.clientY);
          localStorage.setItem('viewportX_149', position.viewportX);
          localStorage.setItem('viewportY_149', position.viewportY);
          localStorage.setItem('clientHeight_149', ball_149.clientHeight);
        });
      });      
        $(window).click(function()
        {
        ball_149.classList.remove('maclasse_');
        ball_149.click(function(event)
        {
        ball_149.onmousedown = function (event) {
        function moveAt(pageX, pageY) {
            ball_149.style.left = pageX - ball_149.offsetWidth / 2 + 'px';
            ball_149.style.top = pageY - ball_149.offsetHeight / 2 + 'px';
        }
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY)
          }
        document.addEventListener('mousemove', onMouseMove);
        ball_149.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        ball_149.classList.remove('newclass');
        };
        }
        ball_149.classList.add('maclasse_');
        event.stopPropagation();
        }
        )
        });