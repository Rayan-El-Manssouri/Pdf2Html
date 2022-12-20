
              var Id_Text_23 = document.getElementById("text_23");
              Id_Text_23.style.left = localStorage.getItem("Left_23");
              Id_Text_23.style.top = localStorage.getItem("Top_23");

              var oWdgCursor_23 = function (sElement, sLimite) {
                var Id_Text_23 = document.getElementById("text_23");

                this.oLimite = null;
                
                this.oElement_23 = null;
                
                this.oLimite = document.getElementById(sLimite);
                this.bDrag = false;
                
                this.bError = false;
                
                this.sClassDrag = "oWdgCursorDrag";
                
                this.oPos = {x:0,y:0};
                
                this.moveDiv = this.moveDiv.bind(this); 
               
                this.getBoundingLimite = function(){
                  if(this.oLimite == document.documentElement){
                    return  {width:window.innerWidth, 
                             height:window.innerHeight,
                             top:this.oLimite.offsetTop,
                             left:this.oLimite.offsetLeft
                            }
                  }
                  return this.oLimite.getBoundingClientRect();
                }
                /**
                * Initialise les evenements
                */
                this.init = function (sLimite, sElement) {  
                  this.oElement_23 = document.getElementById(sElement); 
                  this.oLimite =(sLimite === undefined)? document.documentElement:document.getElementById(sLimite);
                  if(this.oElement_23 == null || this.oLimite == null){
                    return true;
                  }//if
                  this.oElement_23.addEventListener("mousedown", this.moveDiv);
                  this.oElement_23.addEventListener("touchstart", this.moveDiv);
                  return false;
                }//fct 
              
                this.bError = this.init(sLimite, sElement);
              }//fct
              
              oWdgCursor_23.prototype.moveDiv  = function (oEvent){
                oEvent.preventDefault();
                if(oEvent.type=="touchstart" || oEvent.type=="mousedown"){
                  this.bDrag = true;
                  var oTouch = oEvent,
                      oRect = this.oElement_23.getBoundingClientRect();
                  if(oEvent.type=="touchstart"){
                    oTouch = null;
                    
                    if (oEvent.targetTouches.length > 0 ) {
                      for(var i = 0; i < oEvent.targetTouches.length ; i++){

                        if(oEvent.targetTouches[i].target == this.oElement_23){
                          oTouch = oEvent.targetTouches[i];7
                          break;
                        }//if
                      }//for
                    }//if
                    if(oTouch==null){return}
                  } //if
                  this.oPos = {"left":(oTouch.clientX - oRect.left),"top": (oTouch.clientY - oRect.top)};
                  document.addEventListener("mouseup", this.moveDiv) ;
                  this.oElement_23.addEventListener("mouseup", this.moveDiv) ;
                  document.addEventListener("touchend", this.moveDiv) ; 
              
                  document.addEventListener("mousemove", this.moveDiv) ; 
                  document.addEventListener("touchmove", this.moveDiv) ; 
                }else if(oEvent.type=="touchend" || oEvent.type=="mouseup"){
                  this.bDrag = false;
                  this.oElement_23.classList.remove(this.sClassDrag)
                  document.removeEventListener("mousemove", this.moveDiv) ;
                  document.removeEventListener("touchmove", this.moveDiv) ;
                  document.removeEventListener("mouseup", this.moveDiv) ;
                  document.removeEventListener("touchend", this.moveDiv) ; 
                  this.oElement_23.removeEventListener("mouseup", this.moveDiv) ;
                  localStorage.setItem("Left_23", this.oElement_23.style.left);
                  localStorage.setItem("Top_23", this.oElement_23.style.top);

                }else if(oEvent.type=="touchmove" || oEvent.type=="mousemove"){
                  var oTouch = oEvent;
              
                  if(oEvent.type=="touchmove"){

                    oTouch = null;
                    if (oEvent.targetTouches.length > 0 ) {
                      for(var i = 0; i < oEvent.targetTouches.length ; i++){
                        if(oEvent.targetTouches[i].target == this.oElement_23){
                          oTouch = oEvent.targetTouches[i];

                          break;
                        }//if
                      }//for
                    }//if
                    if(oTouch==null){return}
                  }//if
                  if(this.bDrag == true){ 
                    this.oElement_23.classList.add(this.sClassDrag)
                    var oRect = this.getBoundingLimite(),
                        iWidth= this.oElement_23.offsetWidth,
                        iHeight = this.oElement_23.offsetHeight, 
                        iClientX = oTouch.clientX - oRect.left - this.oPos.left,
                        iClientY = oTouch.clientY- oRect.top - this.oPos.top 

                    ;
                    if(iClientX < 0 ){
                      iClientX = 0;
                    }else if(iClientX + iWidth > oRect.width){
                      iClientX = oRect.width - iWidth ;
                    }
                    if(iClientY < 0 ){
                      iClientY = 0;
                    }else if(iClientY + iHeight > oRect.height){
                      iClientY = oRect.height - iHeight ;
                    } 
                    this.oElement_23.style.left = iClientX+"px";
                    this.oElement_23.style.top  = iClientY+"px";
                    }//if
                  else{
                    this.oElement_23.classList.remove(this.sClassDrag)
                  }
                }//else if
              }//fct 
              
              document.addEventListener("DOMContentLoaded",function(){
                var oZone2_23 = new oWdgCursor_23("text_23"); 
              });