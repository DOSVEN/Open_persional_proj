-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: btl
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `canbo`
--

DROP TABLE IF EXISTS `canbo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `canbo` (
  `MaCB` char(20) NOT NULL,
  `tenCB` char(20) DEFAULT NULL,
  `ngaysinh` date DEFAULT NULL,
  `diachi` char(20) DEFAULT NULL,
  `sdt` int DEFAULT NULL,
  PRIMARY KEY (`MaCB`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `canbo`
--

LOCK TABLES `canbo` WRITE;
/*!40000 ALTER TABLE `canbo` DISABLE KEYS */;
INSERT INTO `canbo` VALUES ('0','Hieu Van Truong','1969-08-08','Hanoi',123456789),('1','Nguyen Van A','1981-08-08','Hanoi',123456789),('10','Nguyen Van K','1982-08-08','Haiduong',123456789),('11','Ke Van Toan','1983-08-08','Hanoi',123456789),('12','Toan Van Ke','1984-08-08','Hanoi',123456789),('13','Van Toan Ke','1985-08-08','Hanoi',123456789),('2','Nguyen Van B','1986-08-08','Hanoi',123456789),('3','Nguyen Van C','1987-08-08','Bacgiang',123456789),('4','Nguyen Van D','1988-08-08','Hanam',123456789),('5','Nguyen Van E','1989-08-08','Hanam',123456789),('6','Nguyen Van F','1990-08-08','Bacgiang',123456789),('7','Nguyen Van G','1991-08-08','Haiduong',123456789),('8','Nguyen Van H','1992-08-08','Hanoi',123456789),('9','Nguyen Van I','1993-08-08','Hanoi',123456789);
/*!40000 ALTER TABLE `canbo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-04 22:38:08
