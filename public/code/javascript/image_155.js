 
        var ball_155 = document.getElementById('155')
        ball_155.style.left =  localStorage.getItem('IamgeLeft_155') ;
        ball_155.style.top = localStorage.getItem('IamgeTop_155');
        ball_155.onmousedown = function(event) {
            ball_155.style.cursor = 'move';
            let shiftX = event.clientX - ball_155.getBoundingClientRect().left;
            let shiftY = event.clientY - ball_155.getBoundingClientRect().top;
            ball_155.style.zIndex = 1000;
            document.body.append(ball_155);
            moveAt(event.pageX, event.pageY);
            // Déplace la balle aux cordonnées (pageX, pageY)
            // Prenant en compte les changements initiaux
            function moveAt(pageX, pageY) {
              ball_155.style.left = pageX - shiftX + 'px';
              ball_155.style.top = pageY - shiftY + 'px';
              localStorage.setItem('IamgeLeft_155', ball_155.style.left);
              localStorage.setItem('IamgeTop_155', ball_155.style.top);
            }  
            function onMouseMove(event) {
              moveAt(event.pageX, event.pageY);
            }
            // déplace la balle à l’évènement mousemove
            document.addEventListener('mousemove', onMouseMove);
          
            // dépose la balle, enlève les gestionnaires d’évènements dont on a pas besoin
            ball_155.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              ball_155.onmouseup = null;
              ball_155.style.cursor = 'default';
            };
          };
          ball_155.ondragstart = function() {
            return false;
          };
        