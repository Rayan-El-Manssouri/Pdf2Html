 
        var ball_556 = document.getElementById('556')
        ball_556.style.left =  localStorage.getItem('IamgeLeft_556') ;
        ball_556.style.top = localStorage.getItem('IamgeTop_556');
     
        ball_556.addEventListener('contextmenu', (e)=>{
          var menu_click_droit_id_556 = document.getElementById('menu_click_droit_id_556')
         e.preventDefault();
         menu_click_droit_id_556.style.display = 'block';
         menu_click_droit_id_556.style.position = 'absolute';
         menu_click_droit_id_556.style.top = e.clientY + 'px';
         menu_click_droit_id_556.style.left = e.clientX + 'px';
         menu_click_droit_id_556.addEventListener('contextmenu', (e) => {
          e.preventDefault();
         })
       })

     


       document.addEventListener('click', () => {
        menu_click_droit_id_556.style.display = 'none';
       })
        ball_556.onmousedown = function(event) {
            let shiftX = event.clientX - ball_556.getBoundingClientRect().left;
            let shiftY = event.clientY - ball_556.getBoundingClientRect().top;
            ball_556.style.zIndex = 1000;
            document.body.append(ball_556);
            moveAt(event.pageX, event.pageY);
            // Déplace la balle aux cordonnées (pageX, pageY)
            // Prenant en compte les changements initiaux
            function moveAt(pageX, pageY) {
              ball_556.style.left = pageX - shiftX + 'px';
              ball_556.style.top = pageY - shiftY + 'px';
              localStorage.setItem('IamgeLeft_556', ball_556.style.left);
              localStorage.setItem('IamgeTop_556', ball_556.style.top);
            }  
            function onMouseMove(event) {
              ball_556.style.cursor = 'move';
              moveAt(event.pageX, event.pageY);
            }
            // déplace la balle à l’évènement mousemove
            document.addEventListener('mousemove', onMouseMove);
          
            // dépose la balle, enlève les gestionnaires d’évènements dont on a pas besoin
            ball_556.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              ball_556.onmouseup = null;
              ball_556.style.cursor = 'default';
            };
          };
          ball_556.ondragstart = function() {
            return false;
          };
        