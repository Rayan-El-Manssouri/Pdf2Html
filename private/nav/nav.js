function nav_recul_Text(){
    document.getElementById("Home").addEventListener("mouseout", mouseOut);
    var Home = document.getElementById("Home_2");
    Home.classList.add("Accueil_2")
    Home.style.zIndex = 10000000;

    function mouseOut(){
        Home.classList.remove("Accueil_2")
    }
}
function Importer(){
    document.getElementById("Importer").addEventListener("mouseout", mouseOut);
    var Home = document.getElementById("Importer_2");
    Home.classList.add("Importer_2")
    Home.style.zIndex = 10000000;
    function mouseOut(){
        Home.classList.remove("Importer_2")
    }
}


function Importer_image_2(){
    var Image_sidebar = document.getElementById("Image_sidebar");
    var Logo_Image_sidebar = document.getElementById("Importer");

    if(Image_sidebar.classList.contains("Importer_image_2")){
        Image_sidebar.classList.remove("Importer_image_2");
        test = 1;
        localStorage.setItem("opacity", test);
        Logo_Image_sidebar.classList.remove("Border_span_importer_image");

    }else{
        Image_sidebar.classList.add("Importer_image_2");
        Logo_Image_sidebar.classList.add("Border_span_importer_image");

        test = 0
        localStorage.setItem("opacity", test);
    }
}


var Image_sidebar = document.getElementById("Image_sidebar");
var Logo_Image_sidebar = document.getElementById("Importer");
if(localStorage.getItem("opacity") == 0){
    Image_sidebar.classList.add("Importer_image_2");
    Logo_Image_sidebar.classList.add("Border_span_importer_image");

}else{
    Image_sidebar.classList.remove("Importer_image_2");
    Logo_Image_sidebar.classList.remove("Border_span_importer_image");
}




function Generation(){
    document.getElementById("|_|").addEventListener("mouseout", mouseOut);
    var Home = document.getElementById("|_|_2");
    Home.classList.add("text_overflow_generation")
    function mouseOut(){
        Home.classList.remove("text_overflow_generation")
    }
    Home.style.zIndex = 10000000;

}
function Text(){
    document.getElementById("Text").addEventListener("mouseout", mouseOut);
    var Home = document.getElementById("Text_2");
    Home.classList.add("Text_2_classe")
    Home.style.zIndex = 10000000;

    function mouseOut(){
        Home.classList.remove("Text_2_classe")
    }
}
function Code(){
    document.getElementById("Code").addEventListener("mouseout", mouseOut);
    var Home = document.getElementById("Code_2");
    Home.classList.add("Code_2_classe")
    Home.style.zIndex = 10000000;
    function mouseOut(){
        Home.classList.remove("Code_2_classe")
    }
}
function deconnecter_2(){
    document.getElementById("deconnecter").addEventListener("mouseout", mouseOut);
    var Home = document.getElementById("deconnecter_2");
    Home.classList.add("texte_deconnecter_2")
    Home.style.zIndex = 10000000;

    function mouseOut(){
        Home.classList.remove("texte_deconnecter_2")
    }
}