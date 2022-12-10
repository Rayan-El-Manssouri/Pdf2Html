
        var ball_150 = document.getElementById('150');
        // On récupere tous les valeurs de l'event localStorage enregistrer afin de les attribuers
        ball_150.style.height = localStorage.getItem('clientHeight_150') + 'px';
        ball_150.style.width = localStorage.getItem('clientWidth_150') + 'px';
        ball_150.style.left = localStorage.getItem('clientX_150') + 'px';
        ball_150.style.top = localStorage.getItem('clientY_150') + 'px';
        ball_150.style.position = 'absolute';
        ball_150.style.zIndex = 1000;

        // Evenement mouseup
        $('.ball_150').mouseup(function(event) {
        var ball_150 = document.getElementById('150');
        ball_150.style.cursor = 'auto';
        })
        // Evenement mousemove
        $('.ball_150').mousemove(function(event)
        {
          ball_150.style.cursor = 'move';
          document.body.appendChild(ball_150);
          // variable qui va gérer le déplacement de l'image
          var CheckPosition = (function () {
            var executed = false;
            return function () {
              if (!executed) {
                executed = true;
                if (localStorage.getItem('viewportX') != '') {
                  ball_150.style.left = localStorage.getItem('viewportX_150') + 'px';
                  ball_150.style.top = localStorage.getItem('viewportY_150') + 'px';
                }
              }
            };
          })();
          // Déclaration de la variable
          CheckPosition();
          ball_150.onmousedown = function (event) {
            moveAt(event.pageX, event.pageY);
            function moveAt(pageX, pageY) {
            ball_150.style.left = pageX - ball_150.offsetWidth / 2 + 'px';
            ball_150.style.top = pageY - ball_150.offsetHeight / 2 + 'px';
            }
            function onMouseMove(event) {
            moveAt(event.pageX, event.pageY)
            }
       
            document.addEventListener('mousemove', onMouseMove);
            ball_150.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            ball_150.classList.add('maclasse_');

            ball_150.onmouseup = null;
          };
        };
        ball_150.ondragstart = function () {
        return false;
        };
        // Code pour récuperer les coordonés
        function elementPosition(a_150){
          localStorage.setItem('position_150', a_150);
          var b = a_150.getBoundingClientRect();
          return {
            clientX: a_150.offsetLeft,
            clientY: a_150.offsetTop,
            clientHeight_150: ball_150.offsetHeight,
            viewportX_150: (b.x || b.left),
            viewportY_150: (b.y || b.top)
          }
        };
        var mon_element = document.getElementById('150');
        mon_element.addEventListener('click', function () {
          var position = elementPosition(mon_element);
          localStorage.setItem('clientX_150', position.clientX);
          localStorage.setItem('clientY_150', position.clientY);
          localStorage.setItem('viewportX_150', position.viewportX);
          localStorage.setItem('viewportY_150', position.viewportY);
          localStorage.setItem('clientHeight_150', ball_150.clientHeight);
        });
      });      
        $(window).click(function()
        {
        ball_150.classList.remove('maclasse_');
        ball_150.click(function(event)
        {
        ball_150.onmousedown = function (event) {
        function moveAt(pageX, pageY) {
            ball_150.style.left = pageX - ball_150.offsetWidth / 2 + 'px';
            ball_150.style.top = pageY - ball_150.offsetHeight / 2 + 'px';
        }
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY)
          }
        document.addEventListener('mousemove', onMouseMove);
        ball_150.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        ball_150.classList.remove('newclass');
        };
        }
        ball_150.classList.add('maclasse_');
        event.stopPropagation();
        }
        )
        });