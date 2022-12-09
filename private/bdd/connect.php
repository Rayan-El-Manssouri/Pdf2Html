<?php 
class Database
{
    private $host = "localhost";
    private $username = "root2";
    private $password = "Rayan.200";
    private $db = "pdf2html";

    function connect()
    {
        $connexion = mysqli_connect($this->host, $this->username, $this->password, $this->db);
        $connexion->set_charset("utf8");
        return $connexion;
    }

    function read($query)
    {
        $conn = $this->connect();
        $result = mysqli_query($conn, $query);

        if (!$result) {
            return false;
        } else {
            $data = false;
            while ($row = mysqli_fetch_assoc($result)) {
                $data[] = $row;
            }

            return $data;
        }

        function save($query)
        {
            $connexion = $this->connect();
            $result = mysqli_query($connexion, $query);

            if (!$result) {
                return false;
            } else {
                return true;
            }
        }
    }
}
?>