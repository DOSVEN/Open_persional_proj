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
-- Table structure for table `hocsinh`
--

DROP TABLE IF EXISTS `hocsinh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hocsinh` (
  `MaHS` char(20) NOT NULL,
  `TenHS` char(20) DEFAULT NULL,
  `TenLop` char(20) DEFAULT NULL,
  `ngaysinh` date DEFAULT NULL,
  `diachi` char(20) DEFAULT NULL,
  PRIMARY KEY (`MaHS`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hocsinh`
--

LOCK TABLES `hocsinh` WRITE;
/*!40000 ALTER TABLE `hocsinh` DISABLE KEYS */;
INSERT INTO `hocsinh` VALUES ('1','Pham Van 1','hoa sữa','2018-05-02','Thanh Xuân'),('10','Pham Van 0','hoa hồng','2018-05-16','Đống Đa'),('11','Tran Van 1','hoa sữa','2018-01-18','Thanh Xuân'),('12','Tran Van 2','hoa mai','2018-12-15','Hoàn Kiếm'),('13','Tran Van 3','hoa mai','2018-06-24','Ba Đình'),('14','Tran Van 4','hoa sữa','2018-03-12','Hai Bà Trưng'),('15','Tran Van 5','hoa hồng','2018-06-17','Ba Đình'),('16','Tran Van 6','hoa hồng','2018-05-26','Đống Đa'),('17','Tran Van 7','hoa sữa','2018-04-12','Đống Đa'),('18','Tran Van 8','hoa hồng','2018-10-08','Đống Đa'),('19','Tran Van 9','hoa hồng','2018-11-08','Đống Đa'),('2','Pham Van 2','hoa mai','2018-09-08','Ba Đình'),('20','Tran Van 0','hoa hồng','2018-07-08','Ba Đình'),('21','Dang Van 1','hoa sữa','2018-08-08','Ba Đình'),('22','Dang Van 2','hoa hồng','2018-07-08','Ba Đình'),('23','Dang Van 3','hoa mai','2018-07-08','Ba Đình'),('24','Dang Van 4','hoa mai','2018-04-08','Hai Bà Trưng'),('25','Dang Van 5','hoa mai','2018-04-08','Đống Đa'),('26','Dang Van 6','hoa sữa','2018-01-08','Thanh Xuân'),('27','Dang Van 7','hoa hồng','2018-01-09','Thanh Xuân'),('28','Dang Van 8','hoa mai','2018-02-09','Thanh Xuân'),('29','Dang Van 9','hoa hồng','2018-02-09','Thanh Xuân'),('3','Pham Van 3','hoa sữa','2018-03-09','Thanh Xuân'),('30','Dang Van 0','hoa mai','2018-03-09','Hai Bà Trưng'),('4','Pham Van 4','hoa mai','2018-06-09','Đống Đa'),('5','Pham Van 5','hoa hồng','2018-11-09','Đống Đa'),('6','Pham Van 6','hoa mai','2018-12-09','Hoàn Kiếm'),('7','Pham Van 7','hoa sữa','2018-12-09','Hoàn Kiếm'),('8','Pham Van 8','hoa mai','2018-10-09','Hoàn Kiếm'),('9','Pham Van 9','hoa mai','2018-11-09','Hoàn Kiếm');
/*!40000 ALTER TABLE `hocsinh` ENABLE KEYS */;
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
