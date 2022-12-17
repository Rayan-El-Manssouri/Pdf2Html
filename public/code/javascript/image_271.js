 
        var ball_271 = document.getElementById('271')
        ball_271.style.left =  localStorage.getItem('IamgeLeft_271') ;
        ball_271.style.top = localStorage.getItem('IamgeTop_271');
     
        ball_271.addEventListener('contextmenu', (e)=>{
          var menu_click_droit_id_271 = document.getElementById('menu_click_droit_id_271')
         e.preventDefault();
         menu_click_droit_id_271.style.display = 'block';
         menu_click_droit_id_271.style.position = 'absolute';
         menu_click_droit_id_271.style.top = e.clientY + 'px';
         menu_click_droit_id_271.style.left = e.clientX + 'px';
         menu_click_droit_id_271.addEventListener('contextmenu', (e) => {
          e.preventDefault();
         })
       })

     


       document.addEventListener('click', () => {
        menu_click_droit_id_271.style.display = 'none';
       })
        ball_271.onmousedown = function(event) {
            let shiftX = event.clientX - ball_271.getBoundingClientRect().left;
            let shiftY = event.clientY - ball_271.getBoundingClientRect().top;
            ball_271.style.zIndex = 1000;
            document.body.append(ball_271);
            moveAt(event.pageX, event.pageY);
            // Déplace la balle aux cordonnées (pageX, pageY)
            // Prenant en compte les changements initiaux
            function moveAt(pageX, pageY) {
              ball_271.style.left = pageX - shiftX + 'px';
              ball_271.style.top = pageY - shiftY + 'px';
              localStorage.setItem('IamgeLeft_271', ball_271.style.left);
              localStorage.setItem('IamgeTop_271', ball_271.style.top);
            }  
            function onMouseMove(event) {
              ball_271.style.cursor = 'move';
              moveAt(event.pageX, event.pageY);
            }
            // déplace la balle à l’évènement mousemove
            document.addEventListener('mousemove', onMouseMove);
          
            // dépose la balle, enlève les gestionnaires d’évènements dont on a pas besoin
            ball_271.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              ball_271.onmouseup = null;
              ball_271.style.cursor = 'default';
            };
          };
          ball_271.ondragstart = function() {
            return false;
          };
        