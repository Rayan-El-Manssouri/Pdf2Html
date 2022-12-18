<?php echo "<link rel='stylesheet' href='http://localhost/Pdf2Html/private/nav/nav.css'>" ?>
<?php echo "<link rel='icon' href='http://localhost/Pdf2Html/private/src/logo.png'>" ?>
<?php require_once '../private/chargement/chargement.php' ?>
<?php echo '<script type="text/javascript" src="http://localhost/Pdf2Html/private/chargement/chargement.js"></script>' ?>
<?php 
require_once '../private/bdd/connect.php';
$database = new Database();
error_reporting(0);

$query4 = "SELECT * FROM image_stockage";
$data5 = $database->read($query4);
?>

<nav class="logo">
    <ul>
        <li><a href="http://localhost/Pdf2Html/public/index.php"><p><span class="material-symbols-outlined" id="Home" onmouseover="nav_recul_Text()" style="position: absolute; top: 40px;">Home</span></p></a></li>
        <li><a ><p><span class="material-symbols-outlined" id="Importer" onmouseover="Importer()" onclick="Importer_image_2()"  style="position: absolute; top: 200px;">add_photo_alternate</span> </p></a></li><li><a href=""><p>
        <span class="material-symbols-outlined" onmouseover="Generation()" id="|_|" style="position: absolute; top: 300px;">border_color</span> </p></a></li>
        <li><a href=""><p><span class="material-symbols-outlined" id="Text" onmouseover="Text()" style="position: absolute; top: 400px;">edit_note</span> </p></a></li>
        <li><a href=""><p><span class="material-symbols-outlined" id="Code" onmouseover="Code()" style="position: absolute; top: 500px;">code</span> </p></a></li>
        <li><a href=""><p><span class="material-symbols-outlined" style="position: absolute; top: 850px;" id="deconnecter" onmouseover="deconnecter_2()">Logout</span> </p></a></li>
    </ul>
    <span class="Accueil" style="" id="Home_2">Acceuille</span>
    <span class="Importer" id="Importer_2">Importer des images</span>
    <span class="texte_generation" id="|_|_2">Génration de |_|</span>
    <span class="texte_generation_text" id="Text_2">Text</span>
    <span class="texte_code" id="Code_2">Génération de Code</span>
    <span class="texte_deconnecter" id="deconnecter_2">Ce déconnecter</span>
    <div class="Importer_image" id="Image_sidebar">
        <h1>Veuillez déposer votre photo ici.</h1>
        <form method="post" enctype="multipart/form-data">
            <label class="label" for="file">
                Importer
                <input id="file"  onchange="this.form.submit();" type="file" name="fichier">
            </label>
            <div class="separation"></div>
        </form>
        <div class="scrollbar">
            <div class="Image_grid">
                <?php foreach($data5 as $dataV2): ?>
                    <?php 
                       $i = $dataV2['Id']; 
                       $src = $dataV2['src']; 

                    ?>
                    <img class="image image_grid" id="img_2_<?=$i?>" src="<?=$dataV2['src']?>"  >
                    <form method="POST" class="formulaire_generate"  id="clickdroit_2_<?=$i?>">
                        <div class="clickdroit_2">
                            <input type="submit" value="Importer" name="generate"   id="generation_<?=$dataV2['Id']?>" >
                            <input type="submit" value="Suprimmer" name="supprimer">
                            <input type="hidden" value="<?=$i?>" name="hidden_id">
                            <input type="hidden" value="<?=$src?>" name="hidden_src">
                        </div>
                    </form>
                    <script type="text/javascript">
                            const img_<?=$i?> = document.getElementById("img_2_<?=$i?>")
                            img_<?=$i?>.addEventListener("contextmenu", (e)=>{
                                const clickdroit_<?=$i?> = document.getElementById("clickdroit_2_<?=$i?>");
                                clickdroit_<?=$i?>.style.display = 'block';
                                clickdroit_<?=$i?>.style.top = e.clientY + 'px';
                                clickdroit_<?=$i?>.style.left = e.clientX + 'px';
                                e.preventDefault();
                            })
                            document.addEventListener("click", ()=>{
                                const clickdroit_<?=$i?> = document.getElementById("clickdroit_2_<?=$i?>");

                                clickdroit_<?=$i?>.style.display = 'none';

                            })
                        </script>
                <?php endforeach; ?>
                <?php 
                    if(isset($_POST['generate'])){
                        $query7 = "SELECT * FROM `image_stockage` WHERE Id='".$_POST['hidden_id']."' ";
                        $data7 = $database->read($query7);
                        $query6 = "INSERT INTO `image`(`src`) VALUES ('".$data7[0]['src']."')";
                        $data6 = $database->read($query6);
                        ?>
                        <script>
                            location.replace("")
                        </script>
                        <?php
                    }
                ?>
                   <script type="text/javascript">
                    function generate_<?=$dataV2['Id']?>(){
                        const generation_<?=$dataV2['Id']?> = generation_<?=$dataV2['Id']?>.document.getElementById("generation_<?=$dataV2['Id']?>");
                        generation_<?=$dataV2['Id']?>.click();
                    }
                </script>
            </div>
        </div>
        <?php 
        if(!empty($_FILES)){
            mkdir("src");
            $file_name = $_FILES['fichier']['name'];
            $file_type = $_FILES['fichier']['type'];
            $file_tmp_name = $_FILES['fichier']['tmp_name'];
            $time = time();
            $file_dest = 'src/' .$time .$file_name;
            if(move_uploaded_file($file_tmp_name, $file_dest )){
                $query = "INSERT INTO `image_stockage`(`src`) VALUES ('$file_dest')";
                $data2 = $database->read($query);
                $query2 = "SELECT MAX(Id) as id FROM image";
                $data2 = $database->read($query2);
                ?>
                <script>
                    location.replace("")
                </script>
                <?php
            }
        };

        if(!empty($_POST['supprimer'])){
            $query8 = "SELECT * FROM  `image_stockage` WHERE Id='".$_POST['hidden_id']."' ";
            $data8 = $database->read($query8);

            $src = $data8[0]['src'];
            unlink($src);
            $query7 = "DELETE FROM `image_stockage` WHERE Id='".$_POST['hidden_id']."' ";
            $data7 = $database->read($query7);
            $query10 = "DELETE FROM `image` WHERE src='".$_POST['hidden_src']."' ";
            $data10 = $database->read($query10);

            ?>
            <script>
                location.replace("http://localhost/Pdf2Html/public/index.php")
            </script>
            <?php
        }
        ?>
    </div>
    <script type="text/javascript" src="http://localhost/Pdf2Html/private/nav/nav.js"></script>
</nav>