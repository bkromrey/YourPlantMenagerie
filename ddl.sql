-- MariaDB dump 10.19  Distrib 10.5.22-MariaDB, for Linux (x86_64)
--
-- Host: classmysql.engr.oregonstate.edu    Database: cs340_kromreyb
-- ------------------------------------------------------
-- Server version	10.6.17-MariaDB-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `FertilizingEvents`
--

DROP TABLE IF EXISTS `FertilizingEvents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `FertilizingEvents` (
  `eventID` int(11) NOT NULL AUTO_INCREMENT,
  `fertilizingDate` date NOT NULL,
  `plantID` int(11) NOT NULL,
  PRIMARY KEY (`eventID`,`plantID`),
  UNIQUE KEY `eventID_UNIQUE` (`eventID`),
  KEY `fk_FertilizingEvents_Plants1_idx` (`plantID`),
  CONSTRAINT `fk_FertilizingEvents_Plants1` FOREIGN KEY (`plantID`) REFERENCES `Plants` (`plantID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FertilizingEvents`
--

LOCK TABLES `FertilizingEvents` WRITE;
/*!40000 ALTER TABLE `FertilizingEvents` DISABLE KEYS */;
/*!40000 ALTER TABLE `FertilizingEvents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PlantSoils`
--

DROP TABLE IF EXISTS `PlantSoils`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PlantSoils` (
  `plantId` int(11) NOT NULL,
  `soilID` int(11) NOT NULL,
  PRIMARY KEY (`soilID`,`plantId`),
  KEY `fk_Plants_has_SoilTypes_SoilTypes1_idx` (`soilID`),
  KEY `fk_Plants_has_SoilTypes_Plants1_idx` (`plantId`),
  CONSTRAINT `fk_Plants_has_SoilTypes_Plants1` FOREIGN KEY (`plantId`) REFERENCES `Plants` (`plantID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Plants_has_SoilTypes_SoilTypes1` FOREIGN KEY (`soilID`) REFERENCES `SoilTypes` (`soilID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PlantSoils`
--

LOCK TABLES `PlantSoils` WRITE;
/*!40000 ALTER TABLE `PlantSoils` DISABLE KEYS */;
/*!40000 ALTER TABLE `PlantSoils` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PlantTypes`
--

DROP TABLE IF EXISTS `PlantTypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PlantTypes` (
  `plantTypeID` int(11) NOT NULL AUTO_INCREMENT,
  `commonName` varchar(150) NOT NULL,
  `toxicCat` tinyint(4) NOT NULL DEFAULT 0,
  `toxicDog` tinyint(4) NOT NULL DEFAULT 0,
  `preferredLight` enum('Low','Medium','High') DEFAULT NULL,
  `latinName` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`plantTypeID`),
  UNIQUE KEY `plantTypeID_UNIQUE` (`plantTypeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PlantTypes`
--

LOCK TABLES `PlantTypes` WRITE;
/*!40000 ALTER TABLE `PlantTypes` DISABLE KEYS */;
/*!40000 ALTER TABLE `PlantTypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Plants`
--

DROP TABLE IF EXISTS `Plants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Plants` (
  `plantID` int(11) NOT NULL AUTO_INCREMENT,
  `displayName` varchar(50) NOT NULL,
  `isInside` tinyint(1) NOT NULL DEFAULT 1,
  `currentLight` enum('Low','Medium','High') DEFAULT NULL,
  `plantTypeID` int(11) NOT NULL,
  `waterInterval` int(11) NOT NULL DEFAULT 7,
  `fertilizerInterval` int(11) DEFAULT 14,
  `plantedDate` date DEFAULT NULL,
  PRIMARY KEY (`plantID`,`plantTypeID`),
  UNIQUE KEY `plantID_UNIQUE` (`plantID`),
  KEY `fk_Plants_PlantType_idx` (`plantTypeID`),
  CONSTRAINT `fk_Plants_PlantType` FOREIGN KEY (`plantTypeID`) REFERENCES `PlantTypes` (`plantTypeID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Plants`
--

LOCK TABLES `Plants` WRITE;
/*!40000 ALTER TABLE `Plants` DISABLE KEYS */;
/*!40000 ALTER TABLE `Plants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SoilTypes`
--

DROP TABLE IF EXISTS `SoilTypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SoilTypes` (
  `soilID` int(11) NOT NULL AUTO_INCREMENT,
  `soilType` varchar(100) NOT NULL,
  `soilDescription` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`soilID`),
  UNIQUE KEY `soilID_UNIQUE` (`soilID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SoilTypes`
--

LOCK TABLES `SoilTypes` WRITE;
/*!40000 ALTER TABLE `SoilTypes` DISABLE KEYS */;
/*!40000 ALTER TABLE `SoilTypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `WateringEvents`
--

DROP TABLE IF EXISTS `WateringEvents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `WateringEvents` (
  `eventID` int(11) NOT NULL AUTO_INCREMENT,
  `wateringDate` date NOT NULL,
  `plantID` int(11) NOT NULL,
  PRIMARY KEY (`eventID`,`plantID`),
  UNIQUE KEY `wateringID_UNIQUE` (`eventID`),
  KEY `fk_WateringEvents_Plants1_idx` (`plantID`),
  CONSTRAINT `fk_WateringEvents_Plants1` FOREIGN KEY (`plantID`) REFERENCES `Plants` (`plantID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `WateringEvents`
--

LOCK TABLES `WateringEvents` WRITE;
/*!40000 ALTER TABLE `WateringEvents` DISABLE KEYS */;
/*!40000 ALTER TABLE `WateringEvents` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-16 18:44:08


-- Import sample data

INSERT INTO PlantTypes (
    commonName,
    toxicCat,
    toxicDog,
    preferredLight,
    latinName
)
VALUES (
    "Pothos",
    1,
    1,
    "Medium",
    "Epipremmum aureum"
),
(
    "String of Pearls",
    1,
    1,
    "High",
    "Senecio rowleyanus"
),
(
    "Sungold Tomatoes",
    1,
    1,
    "High",
    "Lycopersicon esculentum"
);


INSERT INTO SoilTypes (
    soilType,
    soilDescription
)
VALUES (
    "Houseplant Potting Mix",
    "pre-mix with compost"
),
(
    "sandy mix",
    "sandier soil mix good for succulents"
),
(
    "topsoil",
    "contains organic matter like leaves"
);



INSERT INTO Plants (
    displayName,
    isInside,
    currentLight,
    plantTypeID,
    waterInterval,
    fertilizerInterval,
    plantedDate 
)
VALUES (
    "Pothos in Living Room",
    1,
    "Medium",
    (SELECT PlantTypes.plantTypeID FROM PlantTypes WHERE commonName = "Pothos"),
    6,
    14,
    "2023-01-15"   
), 
(
    "Pothos in Dining Room",
    1,
    "Low",
    (SELECT PlantTypes.plantTypeID FROM PlantTypes WHERE commonName = "Pothos"),
    7,
    14,
    "2020-03-02"    
),
( 
    "String of Pearls",
    1,
    "High",
    (SELECT PlantTypes.plantTypeID FROM PlantTypes WHERE latinName = "Senecio rowleyanus"),
    7,
    0,
    "2024-04-17"
),
(
    "Orange Cherry Tomatoes",
    0,
    "High",
    (SELECT PlantTypes.plantTypeID FROM PlantTypes WHERE commonName = "Sungold Tomatoes"),
    1,
    28,
    "2024-06-01"
);




