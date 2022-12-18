 
        var ball_586 = document.getElementById('586')
        ball_586.style.left =  localStorage.getItem('IamgeLeft_586') ;
        ball_586.style.top = localStorage.getItem('IamgeTop_586');
     
        ball_586.addEventListener('contextmenu', (e)=>{
          var menu_click_droit_id_586 = document.getElementById('menu_click_droit_id_586')
         e.preventDefault();
         menu_click_droit_id_586.style.display = 'block';
         menu_click_droit_id_586.style.position = 'absolute';
         menu_click_droit_id_586.style.top = e.clientY + 'px';
         menu_click_droit_id_586.style.left = e.clientX + 'px';
         menu_click_droit_id_586.addEventListener('contextmenu', (e) => {
          e.preventDefault();
         })
       })

     


       document.addEventListener('click', () => {
        menu_click_droit_id_586.style.display = 'none';
       })
        ball_586.onmousedown = function(event) {
            let shiftX = event.clientX - ball_586.getBoundingClientRect().left;
            let shiftY = event.clientY - ball_586.getBoundingClientRect().top;
            ball_586.style.zIndex = 1000;
            document.body.append(ball_586);
            moveAt(event.pageX, event.pageY);
            // Déplace la balle aux cordonnées (pageX, pageY)
            // Prenant en compte les changements initiaux
            function moveAt(pageX, pageY) {
              ball_586.style.left = pageX - shiftX + 'px';
              ball_586.style.top = pageY - shiftY + 'px';
              localStorage.setItem('IamgeLeft_586', ball_586.style.left);
              localStorage.setItem('IamgeTop_586', ball_586.style.top);
            }  
            function onMouseMove(event) {
              ball_586.style.cursor = 'move';
              moveAt(event.pageX, event.pageY);
            }
            // déplace la balle à l’évènement mousemove
            document.addEventListener('mousemove', onMouseMove);
          
            // dépose la balle, enlève les gestionnaires d’évènements dont on a pas besoin
            ball_586.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              ball_586.onmouseup = null;
              ball_586.style.cursor = 'default';
            };
          };
          ball_586.ondragstart = function() {
            return false;
          };
        