 
        var ball_587 = document.getElementById('587')
        ball_587.style.left =  localStorage.getItem('IamgeLeft_587') ;
        ball_587.style.top = localStorage.getItem('IamgeTop_587');
     
        ball_587.addEventListener('contextmenu', (e)=>{
          var menu_click_droit_id_587 = document.getElementById('menu_click_droit_id_587')
         e.preventDefault();
         menu_click_droit_id_587.style.display = 'block';
         menu_click_droit_id_587.style.position = 'absolute';
         menu_click_droit_id_587.style.top = e.clientY + 'px';
         menu_click_droit_id_587.style.left = e.clientX + 'px';
         menu_click_droit_id_587.addEventListener('contextmenu', (e) => {
          e.preventDefault();
         })
       })

     


       document.addEventListener('click', () => {
        menu_click_droit_id_587.style.display = 'none';
       })
        ball_587.onmousedown = function(event) {
            let shiftX = event.clientX - ball_587.getBoundingClientRect().left;
            let shiftY = event.clientY - ball_587.getBoundingClientRect().top;
            ball_587.style.zIndex = 1000;
            document.body.append(ball_587);
            moveAt(event.pageX, event.pageY);
            // Déplace la balle aux cordonnées (pageX, pageY)
            // Prenant en compte les changements initiaux
            function moveAt(pageX, pageY) {
              ball_587.style.left = pageX - shiftX + 'px';
              ball_587.style.top = pageY - shiftY + 'px';
              localStorage.setItem('IamgeLeft_587', ball_587.style.left);
              localStorage.setItem('IamgeTop_587', ball_587.style.top);
            }  
            function onMouseMove(event) {
              ball_587.style.cursor = 'move';
              moveAt(event.pageX, event.pageY);
            }
            // déplace la balle à l’évènement mousemove
            document.addEventListener('mousemove', onMouseMove);
          
            // dépose la balle, enlève les gestionnaires d’évènements dont on a pas besoin
            ball_587.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              ball_587.onmouseup = null;
              ball_587.style.cursor = 'default';
            };
          };
          ball_587.ondragstart = function() {
            return false;
          };
        