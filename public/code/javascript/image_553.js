 
        var ball_553 = document.getElementById('553')
        ball_553.style.left =  localStorage.getItem('IamgeLeft_553') ;
        ball_553.style.top = localStorage.getItem('IamgeTop_553');
     
        ball_553.addEventListener('contextmenu', (e)=>{
          var menu_click_droit_id_553 = document.getElementById('menu_click_droit_id_553')
         e.preventDefault();
         menu_click_droit_id_553.style.display = 'block';
         menu_click_droit_id_553.style.position = 'absolute';
         menu_click_droit_id_553.style.top = e.clientY + 'px';
         menu_click_droit_id_553.style.left = e.clientX + 'px';
         menu_click_droit_id_553.addEventListener('contextmenu', (e) => {
          e.preventDefault();
         })
       })

     


       document.addEventListener('click', () => {
        menu_click_droit_id_553.style.display = 'none';
       })
        ball_553.onmousedown = function(event) {
            let shiftX = event.clientX - ball_553.getBoundingClientRect().left;
            let shiftY = event.clientY - ball_553.getBoundingClientRect().top;
            ball_553.style.zIndex = 1000;
            document.body.append(ball_553);
            moveAt(event.pageX, event.pageY);
            // Déplace la balle aux cordonnées (pageX, pageY)
            // Prenant en compte les changements initiaux
            function moveAt(pageX, pageY) {
              ball_553.style.left = pageX - shiftX + 'px';
              ball_553.style.top = pageY - shiftY + 'px';
              localStorage.setItem('IamgeLeft_553', ball_553.style.left);
              localStorage.setItem('IamgeTop_553', ball_553.style.top);
            }  
            function onMouseMove(event) {
              ball_553.style.cursor = 'move';
              moveAt(event.pageX, event.pageY);
            }
            // déplace la balle à l’évènement mousemove
            document.addEventListener('mousemove', onMouseMove);
          
            // dépose la balle, enlève les gestionnaires d’évènements dont on a pas besoin
            ball_553.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              ball_553.onmouseup = null;
              ball_553.style.cursor = 'default';
            };
          };
          ball_553.ondragstart = function() {
            return false;
          };
        