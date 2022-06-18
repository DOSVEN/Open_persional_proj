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
-- Table structure for table `solienlac`
--

DROP TABLE IF EXISTS `solienlac`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `solienlac` (
  `MaHS` char(20) NOT NULL,
  `TenHS` char(20) DEFAULT NULL,
  `TenGV` char(20) DEFAULT NULL,
  `TenLop` char(20) DEFAULT NULL,
  `TenPH` char(20) DEFAULT NULL,
  PRIMARY KEY (`MaHS`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solienlac`
--

LOCK TABLES `solienlac` WRITE;
/*!40000 ALTER TABLE `solienlac` DISABLE KEYS */;
INSERT INTO `solienlac` VALUES ('1','Pham Van 1','Nguyen Van A','Hoa sữa','Pham Huynh 1'),('10','Pham Van 0','Nguyen Van B','Hoa mai','Pham Huynh 0'),('11','Tran Van 1','Nguyen Van A','Hoa sữa','Tran Huynh 1'),('12','Tran Van 2','Nguyen Van C','Hoa hồng','Tran Huynh 2'),('13','Tran Van 3','Nguyen Van C','Hoa hồng','Tran Huynh 3'),('14','Tran Van 4','Nguyen Van A','Hoa sữa','Tran Huynh 4'),('15','Tran Van 5','Nguyen Van B','Hoa mai','Tran Huynh 5'),('16','Tran Van 6','Nguyen Van B','Hoa mai','Tran Huynh 6'),('17','Tran Van 7','Nguyen Van A','Hoa sữa','Tran Huynh 7'),('18','Tran Van 8','Nguyen Van B','Hoa mai','Tran Huynh 8'),('19','Tran Van 9','Nguyen Van B','Hoa mai','Tran Huynh 9'),('2','Pham Van 2','Nguyen Van C','Hoa hồng','Pham Huynh 2'),('20','Tran Van 0','Nguyen Van B','Hoa mai','Tran Huynh 0'),('21','Dang Van 1','Nguyen Van A','Hoa sữa','Dang Huynh 1'),('22','Dang Van 2','Nguyen Van B','Hoa mai','Dang Huynh 2'),('23','Dang Van 3','Nguyen Van C','Hoa hồng','Dang Huynh 3'),('24','Dang Van 4','Nguyen Van C','Hoa hồng','Dang Huynh 4'),('25','Dang Van 5','Nguyen Van C','Hoa hồng','Dang Huynh 5'),('26','Dang Van 6','Nguyen Van A','Hoa sữa','Dang Huynh 6'),('27','Dang Van 7','Nguyen Van B','Hoa mai','Dang Huynh 7'),('28','Dang Van 8','Nguyen Van C','Hoa hồng','Dang Huynh 8'),('29','Dang Van 9','Nguyen Van B','Hoa mai','Dang Huynh 9'),('3','Pham Van 3','Nguyen Van A','Hoa sữa','Pham Huynh 3'),('30','Dang Van 0','Nguyen Van C','Hoa hồng','Dang Huynh 0'),('4','Pham Van 4','Nguyen Van C','Hoa hồng','Pham Huynh 4'),('5','Pham Van 5','Nguyen Van B','Hoa mai','Pham Huynh 5'),('6','Pham Van 6','Nguyen Van C','Hoa hồng','Pham Huynh 6'),('7','Pham Van 7','Nguyen Van A','Hoa sữa','Pham Huynh 7'),('8','Pham Van 8','Nguyen Van C','Hoa hồng','Pham Huynh 8'),('9','Pham Van 9','Nguyen Van C','Hoa hồng','Pham Huynh 9');
/*!40000 ALTER TABLE `solienlac` ENABLE KEYS */;
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
