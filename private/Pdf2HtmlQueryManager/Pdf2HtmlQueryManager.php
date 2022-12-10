<?php 
// Paramètres de connexion à la base de données
$host = "localhost";
$dbname = "pdf2html";
$username = "root2";
$password = "Rayan.200";
// Création d'une instance de l'objet PDO pour se connecter à la base de données
$pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
// Classe pour gérer les requêtes SQL pour Pdf2Html
class Pdf2HtmlQueryManager {
    // La connexion PDO à la base de données
    private $pdo;

    // Constructeur prenant en paramètre la connexion PDO
    public function __construct($pdo) {
      $this->pdo = $pdo;
    }

    // Fonction pour récupérer tous les images de la base de données
    public function getAllImage() {
      // Préparation de la requête SQL
      $stmt = $this->pdo->prepare("SELECT * FROM image");
      // Exécution de la requête
      $stmt->execute();
      // Récupération et retour des résultats
      return $stmt->fetchAll();
    }
  }
?>