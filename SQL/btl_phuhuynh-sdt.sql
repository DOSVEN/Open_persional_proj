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
-- Table structure for table `phuhuynh-sdt`
--

DROP TABLE IF EXISTS `phuhuynh-sdt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phuhuynh-sdt` (
  `tenPH` char(20) NOT NULL,
  `sdt` int DEFAULT NULL,
  PRIMARY KEY (`tenPH`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phuhuynh-sdt`
--

LOCK TABLES `phuhuynh-sdt` WRITE;
/*!40000 ALTER TABLE `phuhuynh-sdt` DISABLE KEYS */;
INSERT INTO `phuhuynh-sdt` VALUES ('Dang Huynh 0',123456789),('Dang Huynh 1',123456789),('Dang Huynh 2',123456789),('Dang Huynh 3',123456789),('Dang Huynh 4',123456789),('Dang Huynh 5',123456789),('Dang Huynh 6',123456789),('Dang Huynh 7',123456789),('Dang Huynh 8',123456789),('Dang Huynh 9',123456789),('Pham Huynh 0',123456789),('Pham Huynh 1',123456789),('Pham Huynh 2',123456789),('Pham Huynh 3',123456789),('Pham Huynh 4',123456789),('Pham Huynh 5',123456789),('Pham Huynh 6',123456789),('Pham Huynh 7',123456789),('Pham Huynh 8',123456789),('Pham Huynh 9',123456789),('Tran Huynh 0',123456789),('Tran Huynh 1',123456789),('Tran Huynh 2',123456789),('Tran Huynh 3',123456789),('Tran Huynh 4',123456789),('Tran Huynh 5',123456789),('Tran Huynh 6',123456789),('Tran Huynh 7',123456789),('Tran Huynh 8',123456789),('Tran Huynh 9',123456789);
/*!40000 ALTER TABLE `phuhuynh-sdt` ENABLE KEYS */;
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
