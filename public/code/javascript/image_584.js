 
        var ball_584 = document.getElementById('584')
        ball_584.style.left =  localStorage.getItem('IamgeLeft_584') ;
        ball_584.style.top = localStorage.getItem('IamgeTop_584');
     
        ball_584.addEventListener('contextmenu', (e)=>{
          var menu_click_droit_id_584 = document.getElementById('menu_click_droit_id_584')
         e.preventDefault();
         menu_click_droit_id_584.style.display = 'block';
         menu_click_droit_id_584.style.position = 'absolute';
         menu_click_droit_id_584.style.top = e.clientY + 'px';
         menu_click_droit_id_584.style.left = e.clientX + 'px';
         menu_click_droit_id_584.addEventListener('contextmenu', (e) => {
          e.preventDefault();
         })
       })

     


       document.addEventListener('click', () => {
        menu_click_droit_id_584.style.display = 'none';
       })
        ball_584.onmousedown = function(event) {
            let shiftX = event.clientX - ball_584.getBoundingClientRect().left;
            let shiftY = event.clientY - ball_584.getBoundingClientRect().top;
            ball_584.style.zIndex = 1000;
            document.body.append(ball_584);
            moveAt(event.pageX, event.pageY);
            // Déplace la balle aux cordonnées (pageX, pageY)
            // Prenant en compte les changements initiaux
            function moveAt(pageX, pageY) {
              ball_584.style.left = pageX - shiftX + 'px';
              ball_584.style.top = pageY - shiftY + 'px';
              localStorage.setItem('IamgeLeft_584', ball_584.style.left);
              localStorage.setItem('IamgeTop_584', ball_584.style.top);
            }  
            function onMouseMove(event) {
              ball_584.style.cursor = 'move';
              moveAt(event.pageX, event.pageY);
            }
            // déplace la balle à l’évènement mousemove
            document.addEventListener('mousemove', onMouseMove);
          
            // dépose la balle, enlève les gestionnaires d’évènements dont on a pas besoin
            ball_584.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              ball_584.onmouseup = null;
              ball_584.style.cursor = 'default';
            };
          };
          ball_584.ondragstart = function() {
            return false;
          };
        