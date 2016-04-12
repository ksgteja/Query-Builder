-- MySQL dump 10.13  Distrib 5.6.24, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: querybuilder
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.9-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `traffic_flow`
--

DROP TABLE IF EXISTS `traffic_flow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `traffic_flow` (
  `timestamp` bigint(20) NOT NULL,
  `destination_ip` varchar(45) DEFAULT NULL,
  `destination_vn` varchar(60) DEFAULT NULL,
  `direction_ingress` int(11) DEFAULT NULL,
  `destination_port` int(11) DEFAULT NULL,
  `protocol` int(11) DEFAULT NULL,
  `source_ip` varchar(45) DEFAULT NULL,
  `source_vn` varchar(45) DEFAULT NULL,
  `source_port` int(11) DEFAULT NULL,
  `sum_bytes_kb` int(11) DEFAULT NULL,
  `sum_packets` int(11) DEFAULT NULL,
  PRIMARY KEY (`timestamp`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `traffic_flow`
--

LOCK TABLES `traffic_flow` WRITE;
/*!40000 ALTER TABLE `traffic_flow` DISABLE KEYS */;
INSERT INTO `traffic_flow` VALUES (1460492602222000,'5.4.2.1','project1:virtual-network1',0,9113,2,'4.2.1.4','project1:virtual-network3',43451,23422,77645),(1460492702222000,'6.4.2.2','project1:virtual-network2',1,4432,9,'88.34.2.1','project1:virtual-network1',55342,44532,76452),(1460492802222000,'10.2.1.4','project1:virtual-network2',0,8876,5,'76.33.2.3','project1:virtual-network3',45323,65632,22342),(1460492902222000,'10.5.2.1','project2:virtual-network2',1,5632,7,'72.3.2.1','project1:virtual-network4',54123,87323,45642),(1461921360000000,'11.3.1.4','project1:virtual-network1',0,9115,5,'10.2.3.1','project2:virtual-network2',54134,23456,34567),(1461922360000000,'9.3.2.1','project2:virtual-network1',1,8712,4,'9.3.21.1','project3:virtual-network2',32213,54421,55332),(1461924460000000,'10.2.1.3','project1:virtual-network1',1,9117,6,'10.1.1.3','project2:virtual-network2',41322,15328,44000),(1461925360000000,'12.1.1.2','project2:virtual-network2',1,9112,3,'8.1.2.4','project1:virtual-network3',35123,14425,35678);
/*!40000 ALTER TABLE `traffic_flow` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-04-12 13:29:17
