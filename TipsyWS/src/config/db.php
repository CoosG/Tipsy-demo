<?php
    class db{
        // Properties
        private $dbhost = 'sql10.freemysqlhosting.net';
        private $dbuser = 'sql10308756';
        private $dbpass = 'TSxH5CXLpy';
        private $dbname = 'sql10308756';

        //Connect
        public function connect(){
            $mysql_connect_str = "mysql:host=$this->dbhost;dbname=$this->dbname";
            $dbConnection = new PDO($mysql_connect_str, $this->dbuser, $this->dbpass);
            $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $dbConnection;
        }
    }
