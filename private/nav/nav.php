<?php echo "<link rel='stylesheet' href='http://localhost/Pdf2Html/private/nav/nav.css'>" ?>
<?php echo "<link rel='icon' href='http://localhost/Pdf2Html/private/src/logo.png'>" ?>
<?php require_once '../private/chargement/chargement.php' ?>
<?php echo '<script type="text/javascript" src="http://localhost/Pdf2Html/private/chargement/chargement.js"></script>' ?>
<?php 
require_once '../private/bdd/connect.php';
$database = new Database();
error_reporting(0);
$query1 = "SELECT * FROM image";
$data1 = $database->read($query1);
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
                <?php foreach($data1 as $dataV2): ?>
                    <img class="image image_grid" src="<?=$dataV2['src']?>">
                <?php endforeach; ?>
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
            $query = "INSERT INTO `image`(`src`) VALUES ('$file_dest')";
            $data = $database->read($query);
            if(move_uploaded_file($file_tmp_name, $file_dest)){
                $query2 = "SELECT MAX(Id) as id FROM image";
                $data2 = $database->read($query2);
                header("Location: index.php");
            }
            header("Location: index.php");
        };
        ?>
    </div>
    <script type="text/javascript" src="http://localhost/Pdf2Html/private/nav/nav.js"></script>
</nav>