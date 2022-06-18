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
-- Table structure for table `phuhuynh`
--

DROP TABLE IF EXISTS `phuhuynh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phuhuynh` (
  `MaHS` char(20) NOT NULL,
  `TenPH` char(20) DEFAULT NULL,
  `TenHS` char(20) DEFAULT NULL,
  `diachi` char(20) DEFAULT NULL,
  PRIMARY KEY (`MaHS`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phuhuynh`
--

LOCK TABLES `phuhuynh` WRITE;
/*!40000 ALTER TABLE `phuhuynh` DISABLE KEYS */;
INSERT INTO `phuhuynh` VALUES ('1','Pham Huynh 1','Pham Van 1','Thanh Xuân'),('10','Pham Huynh 0','Pham Van 0','Đống Đa'),('11','Tran Huynh 1','Tran Van 1','Thanh Xuân'),('12','Tran Huynh 2','Tran Van 2','Hoàn Kiếm'),('13','Tran Huynh 3','Tran Van 3','Ba Đình'),('14','Tran Huynh 4','Tran Van 4','Hai Bà Trưng'),('15','Tran Huynh 5','Tran Van 5','Ba Đình'),('16','Tran Huynh 6','Tran Van 6','Đống Đa'),('17','Tran Huynh 7','Tran Van 7','Đống Đa'),('18','Tran Huynh 8','Tran Van 8','Đống Đa'),('19','Tran Huynh 9','Tran Van 9','Đống Đa'),('2','Pham Huynh 2','Pham Van 2','Ba Đình'),('20','Tran Huynh 0','Tran Van 0','Ba Đình'),('21','Dang Huynh 1','Dang Van 1','Ba Đình'),('22','Dang Huynh 2','Dang Van 2','Ba Đình'),('23','Dang Huynh 3','Dang Van 3','Ba Đình'),('24','Dang Huynh 4','Dang Van 4','Hai Bà Trưng'),('25','Dang Huynh 5','Dang Van 5','Đống Đa'),('26','Dang Huynh 6','Dang Van 6','Thanh Xuân'),('27','Dang Huynh 7','Dang Van 7','Thanh Xuân'),('28','Dang Huynh 8','Dang Van 8','Thanh Xuân'),('29','Dang Huynh 9','Dang Van 9','Thanh Xuân'),('3','Pham Huynh 3','Pham Van 3','Thanh Xuân'),('30','Dang Huynh 0','Dang Van 0','Hai Bà Trưng'),('4','Pham Huynh 4','Pham Van 4','Đống Đa'),('5','Pham Huynh 5','Pham Van 5','Đống Đa'),('6','Pham Huynh 6','Pham Van 6','Hoàn Kiếm'),('7','Pham Huynh 7','Pham Van 7','Hoàn Kiếm'),('8','Pham Huynh 8','Pham Van 8','Hoàn Kiếm'),('9','Pham Huynh 9','Pham Van 9','Hoàn Kiếm');
/*!40000 ALTER TABLE `phuhuynh` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-04 22:38:09
