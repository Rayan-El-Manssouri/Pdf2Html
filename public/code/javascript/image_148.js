var ball_148 = document.getElementById("148");
        ball_148.style.height = localStorage.getItem("clientHeight_148") + "px";
        ball_148.style.width = localStorage.getItem("clientWidth_148") + "px";
        ball_148.style.left = localStorage.getItem("clientX_148") + "px";
        ball_148.style.top = localStorage.getItem("clientY_148") + "px";
        ball_148.style.position = "absolute";
        ball_148.style.zIndex = 1000;
        $("#148").mouseup(function(event) {
        var ball_148 = document.getElementById("148");
        ball_148.style.cursor = "auto";
        })
        $("#148").mousemove(function(event)
        {
          ball_148.style.cursor = "move";
          document.body.appendChild(ball_148);
          var CheckPosition = (function () {
            var executed = false;
            return function () {
              if (!executed) {
                executed = true;
                console.log(localStorage.getItem("clientX"));
                if (localStorage.getItem("viewportX") != "") {
                  ball_148.style.left = localStorage.getItem("viewportX_148") + "px";
                  ball_148.style.top = localStorage.getItem("viewportY_148") + "px";
                }
              }
            };
          })();
          CheckPosition();
          ball_148.onmousedown = function (event) {
            moveAt(event.pageX, event.pageY);
            function moveAt(pageX, pageY) {
            ball_148.style.left = pageX - ball_148.offsetWidth / 2 + "px";
            ball_148.style.top = pageY - ball_148.offsetHeight / 2 + "px";
            }
            function onMouseMove(event) {
            moveAt(event.pageX, event.pageY)
            }
            document.addEventListener("mousemove", onMouseMove);
            ball_148.onmouseup = function () {
            document.removeEventListener("mousemove", onMouseMove);
            ball_148.classList.remove("newclass");
            ball_148.onmouseup = null;
          };
        };
        ball_148.ondragstart = function () {
        return false;
        };
        // Code pour récuperer les coordonés
        function elementPosition(a_148){
          localStorage.setItem("position_148", a_148);
          var b = a_148.getBoundingClientRect();
          return {
            clientX: a_148.offsetLeft,
            clientY: a_148.offsetTop,
            clientHeight_148: ball_148.offsetHeight,
            viewportX_148: (b.x || b.left),
            viewportY_148: (b.y || b.top)
          }
        };
        var mon_element = document.getElementById("148");
        mon_element.addEventListener("click", function () {
          var position = elementPosition(mon_element);
          localStorage.setItem("clientX_148", position.clientX);
          localStorage.setItem("clientY_148", position.clientY);
          localStorage.setItem("viewportX_148", position.viewportX);
          localStorage.setItem("viewportY_148", position.viewportY);
          localStorage.setItem("clientHeight_148", ball_148.clientHeight);
        });
      });      
        $(window).click(function()
        {
        ball_148.classList.remove("maclasse_");
        $("#148").click(function(event)
        {
        ball_148.onmousedown = function (event) {
        function moveAt(pageX, pageY) {
            ball_148.style.left = pageX - ball_148.offsetWidth / 2 + "px";
            ball_148.style.top = pageY - ball_148.offsetHeight / 2 + "px";
          }
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY)
          }
        document.addEventListener("mousemove", onMouseMove);
        ball_148.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove);
        ball_148.classList.remove("newclass");
        };
        }
        ball_148.classList.add("maclasse_");
        event.stopPropagation();
        }
        )
        });