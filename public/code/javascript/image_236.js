 
        var ball_236 = document.getElementById('236')
        ball_236.style.left =  localStorage.getItem('IamgeLeft_236') ;
        ball_236.style.top = localStorage.getItem('IamgeTop_236');
        ball_236.onmousedown = function(event) {
            let shiftX = event.clientX - ball_236.getBoundingClientRect().left;
            let shiftY = event.clientY - ball_236.getBoundingClientRect().top;
            ball_236.style.zIndex = 1000;
            document.body.append(ball_236);
            moveAt(event.pageX, event.pageY);
            // Déplace la balle aux cordonnées (pageX, pageY)
            // Prenant en compte les changements initiaux
            function moveAt(pageX, pageY) {
              ball_236.style.left = pageX - shiftX + 'px';
              ball_236.style.top = pageY - shiftY + 'px';
              localStorage.setItem('IamgeLeft_236', ball_236.style.left);
              localStorage.setItem('IamgeTop_236', ball_236.style.top);
            }  
            function onMouseMove(event) {
              ball_236.style.cursor = 'move';
              moveAt(event.pageX, event.pageY);
            }
            // déplace la balle à l’évènement mousemove
            document.addEventListener('mousemove', onMouseMove);
          
            // dépose la balle, enlève les gestionnaires d’évènements dont on a pas besoin
            ball_236.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              ball_236.onmouseup = null;
              ball_236.style.cursor = 'default';
            };
          };
          ball_236.ondragstart = function() {
            return false;
          };
        