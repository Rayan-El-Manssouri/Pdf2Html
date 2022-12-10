 
        var ball_156 = document.getElementById('156')
        ball_156.style.left =  localStorage.getItem('IamgeLeft_156') ;
        ball_156.style.top = localStorage.getItem('IamgeTop_156');
        ball_156.onmousedown = function(event) {
            ball_156.style.cursor = 'move';
            let shiftX = event.clientX - ball_156.getBoundingClientRect().left;
            let shiftY = event.clientY - ball_156.getBoundingClientRect().top;
            ball_156.style.zIndex = 1000;
            document.body.append(ball_156);
            moveAt(event.pageX, event.pageY);
            // Déplace la balle aux cordonnées (pageX, pageY)
            // Prenant en compte les changements initiaux
            function moveAt(pageX, pageY) {
              ball_156.style.left = pageX - shiftX + 'px';
              ball_156.style.top = pageY - shiftY + 'px';
              localStorage.setItem('IamgeLeft_156', ball_156.style.left);
              localStorage.setItem('IamgeTop_156', ball_156.style.top);
            }  
            function onMouseMove(event) {
              moveAt(event.pageX, event.pageY);
            }
            // déplace la balle à l’évènement mousemove
            document.addEventListener('mousemove', onMouseMove);
          
            // dépose la balle, enlève les gestionnaires d’évènements dont on a pas besoin
            ball_156.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              ball_156.onmouseup = null;
              ball_156.style.cursor = 'default';
            };
          };
          ball_156.ondragstart = function() {
            return false;
          };
        