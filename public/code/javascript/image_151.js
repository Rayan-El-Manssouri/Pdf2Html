
        var ball_151 = document.getElementById('151');
        // On récupere tous les valeurs de l'event localStorage enregistrer afin de les attribuers
        ball_151.style.height = localStorage.getItem('clientHeight_151') + 'px';
        ball_151.style.width = localStorage.getItem('clientWidth_151') + 'px';
        ball_151.style.left = localStorage.getItem('clientX_151') + 'px';
        ball_151.style.top = localStorage.getItem('clientY_151') + 'px';
        ball_151.style.position = 'absolute';
        ball_151.style.zIndex = 1000;

        // Evenement mouseup
        $('.ball_151').mouseup(function(event) {
        var ball_151 = document.getElementById('151');
        ball_151.style.cursor = 'auto';
        })
        // Evenement mousemove
        $('.ball_151').mousemove(function(event)
        {
          ball_151.style.cursor = 'move';
          document.body.appendChild(ball_151);
          // variable qui va gérer le déplacement de l'image
          var CheckPosition = (function () {
            var executed = false;
            return function () {
              if (!executed) {
                executed = true;
                if (localStorage.getItem('viewportX') != '') {
                  ball_151.style.left = localStorage.getItem('viewportX_151') + 'px';
                  ball_151.style.top = localStorage.getItem('viewportY_151') + 'px';
                }
              }
            };
          })();
          // Déclaration de la variable
          CheckPosition();
          ball_151.onmousedown = function (event) {
            moveAt(event.pageX, event.pageY);
            function moveAt(pageX, pageY) {
            ball_151.style.left = pageX - ball_151.offsetWidth / 2 + 'px';
            ball_151.style.top = pageY - ball_151.offsetHeight / 2 + 'px';
            }
            function onMouseMove(event) {
            moveAt(event.pageX, event.pageY)
            }
       
            document.addEventListener('mousemove', onMouseMove);
            ball_151.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            ball_151.classList.add('maclasse_');

            ball_151.onmouseup = null;
          };
        };
        ball_151.ondragstart = function () {
        return false;
        };
        // Code pour récuperer les coordonés
        function elementPosition(a_151){
          localStorage.setItem('position_151', a_151);
          var b = a_151.getBoundingClientRect();
          return {
            clientX: a_151.offsetLeft,
            clientY: a_151.offsetTop,
            clientHeight_151: ball_151.offsetHeight,
            viewportX_151: (b.x || b.left),
            viewportY_151: (b.y || b.top)
          }
        };
        var mon_element = document.getElementById('151');
        mon_element.addEventListener('click', function () {
          var position = elementPosition(mon_element);
          localStorage.setItem('clientX_151', position.clientX);
          localStorage.setItem('clientY_151', position.clientY);
          localStorage.setItem('viewportX_151', position.viewportX);
          localStorage.setItem('viewportY_151', position.viewportY);
          localStorage.setItem('clientHeight_151', ball_151.clientHeight);
        });
      });      
        $(window).click(function()
        {
        ball_151.classList.remove('maclasse_');
        ball_151.click(function(event)
        {
        ball_151.onmousedown = function (event) {
        function moveAt(pageX, pageY) {
            ball_151.style.left = pageX - ball_151.offsetWidth / 2 + 'px';
            ball_151.style.top = pageY - ball_151.offsetHeight / 2 + 'px';
        }
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY)
          }
        document.addEventListener('mousemove', onMouseMove);
        ball_151.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        ball_151.classList.remove('newclass');
        };
        }
        ball_151.classList.add('maclasse_');
        event.stopPropagation();
        }
        )
        });