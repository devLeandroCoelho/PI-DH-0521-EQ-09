CREATE DATABASE  IF NOT EXISTS `desapeguei` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `desapeguei`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: desapeguei
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `anuncios`
--

DROP TABLE IF EXISTS `anuncios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anuncios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) NOT NULL,
  `usuarios_id` int NOT NULL,
  `categoria_id` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status_id` int NOT NULL,
  `descricao` varchar(500) NOT NULL,
  `valor` double NOT NULL,
  `localizacao` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Anuncios_Usuários_idx` (`usuarios_id`),
  KEY `fk_Anuncios_Categoria1_idx` (`categoria_id`),
  KEY `fk_Anuncios_Status1_idx` (`status_id`),
  CONSTRAINT `fk_Anuncios_Categoria1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`),
  CONSTRAINT `fk_Anuncios_Status1` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`),
  CONSTRAINT `fk_Anuncios_Usuários` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anuncios`
--

LOCK TABLES `anuncios` WRITE;
/*!40000 ALTER TABLE `anuncios` DISABLE KEYS */;
INSERT INTO `anuncios` VALUES (1,'Tablet Acer',1,6,'2021-09-25 03:47:03','2021-09-25 03:47:03',2,'Vendo Tablet Iconia Acer7. Esta quase novo apenas arranhões normais de uso',278.9,'Florianópolis/SC'),(2,'Playstation 4',2,6,'2021-09-25 03:58:57','2021-09-25 03:58:57',2,'Vendo Play 4. Varios jogos digitais e 2 controles',1599.9,'São Paulo/SP'),(3,'Mesa de Escritório',3,2,'2021-09-25 04:03:46','2021-09-25 04:03:46',2,'Vendo Mesa de escritorio Preta com tampo Branco. Tem um pequeno arranhão na parte lateral',199.75,'Fortaleza/CE'),(4,'Cadeira Gamer',4,1,'2021-09-25 04:03:46','2021-09-25 04:03:46',2,'Vendo Cadeira GaMeR. Meu filho não passou de ano e com isso não vai mais jogar',899,'Porto Alegre/RS'),(5,'Armario de Ferro',1,3,'2021-09-25 04:03:46','2021-09-25 04:03:46',2,'Vendo armário de ferro. Com o encerramento da empresa estou liquidando todos os móveis. IMPERDíVEL!',455.1,'Blumenau/SC'),(6,'Notebook HP',2,6,'2021-09-25 04:08:13','2021-09-25 04:08:13',2,'Vendo meu notebook HP DV4-1880BR. Aceito apenas em dinheiro',1998.5,'Bauru/SP'),(7,'Notebook Acer',3,6,'2021-09-25 04:08:13','2021-09-25 04:08:13',2,'Vendo notebook novo na caixa. CPU i5 com 16Gb de Ram',4000,'Fortaleza/CE'),(8,'Note Dell',4,6,'2021-09-25 04:08:13','2021-09-25 04:08:13',2,'Vendo notebook usado para retirada de peças. Display está quebrado',1000.5,'Porto Alegre/RS'),(9,'Notebook Avell',2,6,'2021-09-25 04:08:13','2021-09-25 04:08:13',2,'Vendo notebook gamer. i7 com 32 GB de Ram SSD de 256GB e um HD de 2 Tb.',2050.49,'Florianópolis/SC'),(15,'Cama Box Casal',1,4,'2021-09-25 04:12:07','2021-09-25 04:12:07',2,'Vendo cama Casal sem colchão',359.9,'Blumenau/SC'),(16,'Cama de Solteiro',3,4,'2021-09-25 04:12:07','2021-09-25 04:12:07',2,'Vendo cama de Solteiro com colchão',400,'Porto Alegre/RS'),(17,'Beliche',2,4,'2021-09-25 04:12:07','2021-09-25 04:12:07',2,'Vendo Beliche, acompanha os 2 colchões de solteiro',750.99,'Bauru/SP'),(18,'Cama Queen',4,4,'2021-09-25 04:12:07','2021-09-25 04:12:07',2,'Vendo cama tamanho Queen',650,'Florianópolis/SC'),(19,'Cama King size',3,4,'2021-09-25 04:12:07','2021-09-25 04:12:07',2,'Vendo cama King Size',1000,'Brasilia/DF'),(20,'Phone de Ouvidos Razer Game',2,5,'2021-09-25 04:15:29','2021-09-25 04:15:29',2,'Vendo novo na caixa Fone de ouvido gamer',2000.99,'Brasilia/DF'),(21,'Luminária de cabeceira',1,5,'2021-09-25 04:15:29','2021-09-25 04:15:29',2,'Acopanha lampada Led',120,'Brasilia/DF'),(22,'Fone de Ouvido Beats',3,5,'2021-09-25 04:15:29','2021-09-25 04:15:29',2,'Vendo Fone Beats. Tem que trocar a borrachinha do fone direito',130,'Bauru/SP');
/*!40000 ALTER TABLE `anuncios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `anuncios_favoritos`
--

DROP TABLE IF EXISTS `anuncios_favoritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anuncios_favoritos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuarios_id` int NOT NULL,
  `anuncios_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_AnunciosFavoritos_Usuarios1_idx` (`usuarios_id`),
  KEY `fk_AnunciosFavoritos_Anuncios1_idx` (`anuncios_id`),
  CONSTRAINT `fk_AnunciosFavoritos_Anuncios1` FOREIGN KEY (`anuncios_id`) REFERENCES `anuncios` (`id`),
  CONSTRAINT `fk_AnunciosFavoritos_Usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anuncios_favoritos`
--

LOCK TABLES `anuncios_favoritos` WRITE;
/*!40000 ALTER TABLE `anuncios_favoritos` DISABLE KEYS */;
INSERT INTO `anuncios_favoritos` VALUES (1,1,1),(25,1,2),(26,1,3),(27,1,4),(28,1,5),(29,1,19),(36,2,19),(37,3,3),(38,3,21);
/*!40000 ALTER TABLE `anuncios_favoritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Cadeiras'),(2,'Mesas'),(3,'Armários'),(4,'Camas'),(5,'Acessórios'),(6,'Eletrônicos');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagem_anuncios`
--

DROP TABLE IF EXISTS `imagem_anuncios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagem_anuncios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imagem` varchar(100) NOT NULL,
  `anuncio_id` int NOT NULL,
  `capa` char(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagem_anuncios`
--

LOCK TABLES `imagem_anuncios` WRITE;
/*!40000 ALTER TABLE `imagem_anuncios` DISABLE KEYS */;
INSERT INTO `imagem_anuncios` VALUES (2,'/imagem0123.jpg',1,'S'),(3,'/img0123.jpg',1,'N'),(4,'/img234.jpg',1,'N'),(5,'/modelo123.jpg',1,'N'),(6,'/modelo123.jpg',2,'S'),(7,'/modelo123.jpg',2,'N'),(8,'/modelo123.jpg',3,'S'),(9,'/modelo123.jpg',3,'N'),(10,'/modelo123.jpg',3,'N'),(11,'/modelo123.jpg',4,'S'),(12,'/modelo123.jpg',4,'N'),(13,'/modelo123.jpg',5,'S'),(14,'/modelo123.jpg',5,'N'),(15,'/modelo123.jpg',5,'N'),(16,'/modelo123.jpg',5,'N'),(17,'/modelo123.jpg',6,'S'),(18,'/modelo123.jpg',7,'S'),(19,'/modelo123.jpg',8,'S'),(20,'/modelo123.jpg',9,'S'),(21,'/modelo123.jpg',10,'S'),(22,'/modelo123.jpg',11,'S'),(23,'/modelo123.jpg',12,'S'),(24,'/modelo123.jpg',13,'S'),(25,'/modelo123.jpg',14,'S'),(26,'/modelo123.jpg',15,'S'),(27,'/modelo123.jpg',16,'S'),(28,'/modelo123.jpg',17,'S'),(29,'/modelo123.jpg',18,'S'),(30,'/modelo123.jpg',19,'S'),(31,'/modelo123.jpg',20,'S'),(32,'/modelo123.jpg',21,'S'),(33,'/modelo123.jpg',22,'S');
/*!40000 ALTER TABLE `imagem_anuncios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'Iniciado'),(2,'Publicado'),(3,'Pausado'),(4,'Cancelado'),(5,'Vendido');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `telefone` varchar(12) NOT NULL,
  `endereco` varchar(45) NOT NULL,
  `senha` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Sergio','11987654321','Rua Banda Mel, 123','secret'),(2,'Myllena','11991234596','Rua Victor Konder, 149','secret'),(3,'Lenix','11 977653426','Rua Italo Romanes, 8988','secret'),(4,'Leandro ','48988547455','Rua Visconde de Taunay, 173','secret');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-01 21:53:31
