 
        var ball_585 = document.getElementById('585')
        ball_585.style.left =  localStorage.getItem('IamgeLeft_585') ;
        ball_585.style.top = localStorage.getItem('IamgeTop_585');
     
        ball_585.addEventListener('contextmenu', (e)=>{
          var menu_click_droit_id_585 = document.getElementById('menu_click_droit_id_585')
         e.preventDefault();
         menu_click_droit_id_585.style.display = 'block';
         menu_click_droit_id_585.style.position = 'absolute';
         menu_click_droit_id_585.style.top = e.clientY + 'px';
         menu_click_droit_id_585.style.left = e.clientX + 'px';
         menu_click_droit_id_585.addEventListener('contextmenu', (e) => {
          e.preventDefault();
         })
       })

     


       document.addEventListener('click', () => {
        menu_click_droit_id_585.style.display = 'none';
       })
        ball_585.onmousedown = function(event) {
            let shiftX = event.clientX - ball_585.getBoundingClientRect().left;
            let shiftY = event.clientY - ball_585.getBoundingClientRect().top;
            ball_585.style.zIndex = 1000;
            document.body.append(ball_585);
            moveAt(event.pageX, event.pageY);
            // Déplace la balle aux cordonnées (pageX, pageY)
            // Prenant en compte les changements initiaux
            function moveAt(pageX, pageY) {
              ball_585.style.left = pageX - shiftX + 'px';
              ball_585.style.top = pageY - shiftY + 'px';
              localStorage.setItem('IamgeLeft_585', ball_585.style.left);
              localStorage.setItem('IamgeTop_585', ball_585.style.top);
            }  
            function onMouseMove(event) {
              ball_585.style.cursor = 'move';
              moveAt(event.pageX, event.pageY);
            }
            // déplace la balle à l’évènement mousemove
            document.addEventListener('mousemove', onMouseMove);
          
            // dépose la balle, enlève les gestionnaires d’évènements dont on a pas besoin
            ball_585.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              ball_585.onmouseup = null;
              ball_585.style.cursor = 'default';
            };
          };
          ball_585.ondragstart = function() {
            return false;
          };
        