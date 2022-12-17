 
        var ball_277 = document.getElementById('277')
        ball_277.style.left =  localStorage.getItem('IamgeLeft_277') ;
        ball_277.style.top = localStorage.getItem('IamgeTop_277');
     
        ball_277.addEventListener('contextmenu', (e)=>{
          var menu_click_droit_id_277 = document.getElementById('menu_click_droit_id_277')
         e.preventDefault();
         menu_click_droit_id_277.style.display = 'block';
         menu_click_droit_id_277.style.position = 'absolute';
         menu_click_droit_id_277.style.top = e.clientY + 'px';
         menu_click_droit_id_277.style.left = e.clientX + 'px';
         menu_click_droit_id_277.addEventListener('contextmenu', (e) => {
          e.preventDefault();
         })
       })

     


       document.addEventListener('click', () => {
        menu_click_droit_id_277.style.display = 'none';
       })
        ball_277.onmousedown = function(event) {
            let shiftX = event.clientX - ball_277.getBoundingClientRect().left;
            let shiftY = event.clientY - ball_277.getBoundingClientRect().top;
            ball_277.style.zIndex = 1000;
            document.body.append(ball_277);
            moveAt(event.pageX, event.pageY);
            // Déplace la balle aux cordonnées (pageX, pageY)
            // Prenant en compte les changements initiaux
            function moveAt(pageX, pageY) {
              ball_277.style.left = pageX - shiftX + 'px';
              ball_277.style.top = pageY - shiftY + 'px';
              localStorage.setItem('IamgeLeft_277', ball_277.style.left);
              localStorage.setItem('IamgeTop_277', ball_277.style.top);
            }  
            function onMouseMove(event) {
              ball_277.style.cursor = 'move';
              moveAt(event.pageX, event.pageY);
            }
            // déplace la balle à l’évènement mousemove
            document.addEventListener('mousemove', onMouseMove);
          
            // dépose la balle, enlève les gestionnaires d’évènements dont on a pas besoin
            ball_277.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              ball_277.onmouseup = null;
              ball_277.style.cursor = 'default';
            };
          };
          ball_277.ondragstart = function() {
            return false;
          };
        