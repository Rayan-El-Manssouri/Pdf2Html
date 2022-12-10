 
        var ball_154 = document.getElementById('154')
        ball_154.style.left =  localStorage.getItem('IamgeLeft_154') ;
        ball_154.style.top = localStorage.getItem('IamgeTop_154');
        ball_154.onmousedown = function(event) {
            ball_154.style.cursor = 'move';
            let shiftX = event.clientX - ball_154.getBoundingClientRect().left;
            let shiftY = event.clientY - ball_154.getBoundingClientRect().top;
            ball_154.style.zIndex = 1000;
            document.body.append(ball_154);
            moveAt(event.pageX, event.pageY);
            // Déplace la balle aux cordonnées (pageX, pageY)
            // Prenant en compte les changements initiaux
            function moveAt(pageX, pageY) {
              ball_154.style.left = pageX - shiftX + 'px';
              ball_154.style.top = pageY - shiftY + 'px';
              localStorage.setItem('IamgeLeft_154', ball_154.style.left);
              localStorage.setItem('IamgeTop_154', ball_154.style.top);
            }  
            function onMouseMove(event) {
              moveAt(event.pageX, event.pageY);
            }
            // déplace la balle à l’évènement mousemove
            document.addEventListener('mousemove', onMouseMove);
          
            // dépose la balle, enlève les gestionnaires d’évènements dont on a pas besoin
            ball_154.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              ball_154.onmouseup = null;
              ball_154.style.cursor = 'default';
            };
          };
          ball_154.ondragstart = function() {
            return false;
          };
        