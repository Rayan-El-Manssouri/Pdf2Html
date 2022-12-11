 
        var ball_249 = document.getElementById('249')
        ball_249.style.left =  localStorage.getItem('IamgeLeft_249') ;
        ball_249.style.top = localStorage.getItem('IamgeTop_249');
        ball_249.onmousedown = function(event) {
            let shiftX = event.clientX - ball_249.getBoundingClientRect().left;
            let shiftY = event.clientY - ball_249.getBoundingClientRect().top;
            ball_249.style.zIndex = 1000;
            document.body.append(ball_249);
            moveAt(event.pageX, event.pageY);
            // Déplace la balle aux cordonnées (pageX, pageY)
            // Prenant en compte les changements initiaux
            function moveAt(pageX, pageY) {
              ball_249.style.left = pageX - shiftX + 'px';
              ball_249.style.top = pageY - shiftY + 'px';
              localStorage.setItem('IamgeLeft_249', ball_249.style.left);
              localStorage.setItem('IamgeTop_249', ball_249.style.top);
            }  
            function onMouseMove(event) {
              ball_249.style.cursor = 'move';
              moveAt(event.pageX, event.pageY);
            }
            // déplace la balle à l’évènement mousemove
            document.addEventListener('mousemove', onMouseMove);
          
            // dépose la balle, enlève les gestionnaires d’évènements dont on a pas besoin
            ball_249.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              ball_249.onmouseup = null;
              ball_249.style.cursor = 'default';
            };
          };
          ball_249.ondragstart = function() {
            return false;
          };
        