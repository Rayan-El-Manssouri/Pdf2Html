 
        var ball_278 = document.getElementById('278')
        ball_278.style.left =  localStorage.getItem('IamgeLeft_278') ;
        ball_278.style.top = localStorage.getItem('IamgeTop_278');
     
        ball_278.addEventListener('contextmenu', (e)=>{
          var menu_click_droit_id_278 = document.getElementById('menu_click_droit_id_278')
         e.preventDefault();
         menu_click_droit_id_278.style.display = 'block';
         menu_click_droit_id_278.style.position = 'absolute';
         menu_click_droit_id_278.style.top = e.clientY + 'px';
         menu_click_droit_id_278.style.left = e.clientX + 'px';
         menu_click_droit_id_278.addEventListener('contextmenu', (e) => {
          e.preventDefault();
         })
       })

     


       document.addEventListener('click', () => {
        menu_click_droit_id_278.style.display = 'none';
       })
        ball_278.onmousedown = function(event) {
            let shiftX = event.clientX - ball_278.getBoundingClientRect().left;
            let shiftY = event.clientY - ball_278.getBoundingClientRect().top;
            ball_278.style.zIndex = 1000;
            document.body.append(ball_278);
            moveAt(event.pageX, event.pageY);
            // Déplace la balle aux cordonnées (pageX, pageY)
            // Prenant en compte les changements initiaux
            function moveAt(pageX, pageY) {
              ball_278.style.left = pageX - shiftX + 'px';
              ball_278.style.top = pageY - shiftY + 'px';
              localStorage.setItem('IamgeLeft_278', ball_278.style.left);
              localStorage.setItem('IamgeTop_278', ball_278.style.top);
            }  
            function onMouseMove(event) {
              ball_278.style.cursor = 'move';
              moveAt(event.pageX, event.pageY);
            }
            // déplace la balle à l’évènement mousemove
            document.addEventListener('mousemove', onMouseMove);
          
            // dépose la balle, enlève les gestionnaires d’évènements dont on a pas besoin
            ball_278.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              ball_278.onmouseup = null;
              ball_278.style.cursor = 'default';
            };
          };
          ball_278.ondragstart = function() {
            return false;
          };
        