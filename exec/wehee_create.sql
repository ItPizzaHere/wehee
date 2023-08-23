CREATE DATABASE  IF NOT EXISTS `wehee` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `wehee`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: wehee
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `chat_room`
--

DROP TABLE IF EXISTS `chat_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chat_room` (
  `chat_room_id` bigint NOT NULL AUTO_INCREMENT,
  `announcement` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` tinyint DEFAULT NULL,
  `closed` datetime(6) DEFAULT NULL,
  `created` datetime(6) DEFAULT NULL,
  `user_limit` int DEFAULT NULL,
  `max_age` int NOT NULL,
  `min_age` int NOT NULL,
  `target_gender` tinyint DEFAULT NULL,
  `target_mbtis` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`chat_room_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_time` datetime(6) DEFAULT NULL,
  `state` int DEFAULT NULL,
  `upload_time` datetime(6) DEFAULT NULL,
  `comment_post_id` int DEFAULT NULL,
  `comment_user_id` int DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `FKl73149mddirv7g3ywxobshajv` (`comment_post_id`),
  KEY `FKlet4rf8ml98vol705mni6pvx3` (`comment_user_id`),
  CONSTRAINT `FKl73149mddirv7g3ywxobshajv` FOREIGN KEY (`comment_post_id`) REFERENCES `post` (`post_id`),
  CONSTRAINT `FKlet4rf8ml98vol705mni6pvx3` FOREIGN KEY (`comment_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `deleted_comment`
--

DROP TABLE IF EXISTS `deleted_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deleted_comment` (
  `deleted_comment_id` int unsigned NOT NULL AUTO_INCREMENT,
  `comment_id` int unsigned DEFAULT NULL,
  `comment_post_id` int unsigned DEFAULT NULL,
  `comment_user_id` int unsigned DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  `upload_time` timestamp NULL DEFAULT NULL,
  `deleted_time` timestamp NULL DEFAULT NULL,
  `state` int DEFAULT NULL,
  PRIMARY KEY (`deleted_comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `deleted_post`
--

DROP TABLE IF EXISTS `deleted_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deleted_post` (
  `deleted_post_id` int unsigned NOT NULL AUTO_INCREMENT,
  `post_id` int unsigned DEFAULT NULL,
  `post_mbti_id` tinyint DEFAULT NULL,
  `title` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  `post_user_id` int unsigned DEFAULT NULL,
  `like_count` mediumint DEFAULT NULL,
  `hit` int unsigned DEFAULT NULL,
  `comment_count` int unsigned DEFAULT NULL,
  `upload_time` timestamp NULL DEFAULT NULL,
  `deleted_time` timestamp NULL DEFAULT NULL,
  `state` int DEFAULT NULL,
  PRIMARY KEY (`deleted_post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `hot_post`
--

DROP TABLE IF EXISTS `hot_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hot_post` (
  `rank` int DEFAULT NULL,
  `hot_post_id` int NOT NULL,
  PRIMARY KEY (`hot_post_id`),
  CONSTRAINT `FKmbglrpwwy2o8ihnxtx9iw9nav` FOREIGN KEY (`hot_post_id`) REFERENCES `post` (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `like`
--

DROP TABLE IF EXISTS `like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `like` (
  `like_id` int NOT NULL AUTO_INCREMENT,
  `like_post_id` int DEFAULT NULL,
  `like_user_id` int DEFAULT NULL,
  PRIMARY KEY (`like_id`),
  KEY `FKfplexk9vxqiggk53nluggfjk9` (`like_post_id`),
  KEY `FK6gf6lqliwptelrjyvc2liikxs` (`like_user_id`),
  CONSTRAINT `FK6gf6lqliwptelrjyvc2liikxs` FOREIGN KEY (`like_user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKfplexk9vxqiggk53nluggfjk9` FOREIGN KEY (`like_post_id`) REFERENCES `post` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `timestamp` datetime(6) DEFAULT NULL,
  `char_room_id` bigint DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `chat_room_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKo7a0fbp8u9bcnie2jvvu84htk` (`char_room_id`),
  KEY `FKnebwitbhvl9nq6mqsdlmb0v75` (`user_id`),
  KEY `FK5i8ac68n051032d9ga7gg6i85` (`chat_room_id`),
  CONSTRAINT `FK5i8ac68n051032d9ga7gg6i85` FOREIGN KEY (`chat_room_id`) REFERENCES `chat_room` (`chat_room_id`),
  CONSTRAINT `FKnebwitbhvl9nq6mqsdlmb0v75` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKo7a0fbp8u9bcnie2jvvu84htk` FOREIGN KEY (`char_room_id`) REFERENCES `chat_room` (`chat_room_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification` (
  `notification_id` int NOT NULL AUTO_INCREMENT,
  `browsed` bit(1) DEFAULT NULL,
  `is_post` bit(1) DEFAULT NULL,
  `origin_post_id` int DEFAULT NULL,
  `upload_time` datetime(6) DEFAULT NULL,
  `notification_receiver_user_id` int DEFAULT NULL,
  `notification_sender_user_id` int DEFAULT NULL,
  PRIMARY KEY (`notification_id`),
  KEY `FKo8obx353cpi345nh5so48hh63` (`notification_receiver_user_id`),
  KEY `FKlretnbyblukw05ft1ijonbh34` (`notification_sender_user_id`),
  CONSTRAINT `FKlretnbyblukw05ft1ijonbh34` FOREIGN KEY (`notification_sender_user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKo8obx353cpi345nh5so48hh63` FOREIGN KEY (`notification_receiver_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `post_id` int NOT NULL AUTO_INCREMENT,
  `comment_count` int DEFAULT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_time` datetime(6) DEFAULT NULL,
  `hit` int DEFAULT NULL,
  `like_count` int DEFAULT NULL,
  `post_mbti_id` tinyint DEFAULT NULL,
  `state` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `upload_time` datetime(6) DEFAULT NULL,
  `post_user_id` int DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `FK6yumdw9f1haa0jr4ifqvegrpj` (`post_user_id`),
  CONSTRAINT `FK6yumdw9f1haa0jr4ifqvegrpj` FOREIGN KEY (`post_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `refresh_token`
--

DROP TABLE IF EXISTS `refresh_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `refresh_token` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `provider_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `refresh_token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_fjmjlunf3lhwg0bkflgy0j161` (`provider_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scrap`
--

DROP TABLE IF EXISTS `scrap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scrap` (
  `scrap_id` int NOT NULL AUTO_INCREMENT,
  `scrap_post_id` int DEFAULT NULL,
  `scrap_user_id` int DEFAULT NULL,
  PRIMARY KEY (`scrap_id`),
  KEY `FK9te1davjmgha646dj3wnu8rch` (`scrap_post_id`),
  KEY `FK68dsxqwqbowe29tblgituvkne` (`scrap_user_id`),
  CONSTRAINT `FK68dsxqwqbowe29tblgituvkne` FOREIGN KEY (`scrap_user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FK9te1davjmgha646dj3wnu8rch` FOREIGN KEY (`scrap_post_id`) REFERENCES `post` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `birth` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birth_changed` bit(1) NOT NULL,
  `created` date DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` tinyint DEFAULT NULL,
  `gender_changed` bit(1) NOT NULL,
  `last_mbti_modified` date DEFAULT NULL,
  `mbti` tinyint DEFAULT NULL,
  `nickname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `profile` varchar(512) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` enum('GOOGLE','KAKAO','NAVER') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('ADMIN','GUEST','USER') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `withdrawal` bit(1) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK_7427i7s19gosvx92he9igbn7k` (`provider_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_tag`
--

DROP TABLE IF EXISTS `user_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_tag` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `role_status` enum('EXITED','EXPIRED','MEMBER','OUTCAST','OWNER') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `chat_room_id` bigint DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKdk1f73w6axsfc1w9epapxv411` (`chat_room_id`),
  KEY `FKcmdhkv9m4k56bcjm4duq5gdwi` (`user_id`),
  CONSTRAINT `FKcmdhkv9m4k56bcjm4duq5gdwi` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKdk1f73w6axsfc1w9epapxv411` FOREIGN KEY (`chat_room_id`) REFERENCES `chat_room` (`chat_room_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `voice_room`
--

DROP TABLE IF EXISTS `voice_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voice_room` (
  `voice_room_id` bigint NOT NULL AUTO_INCREMENT,
  `closed` datetime(6) DEFAULT NULL,
  `created` datetime(6) DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_limit` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`voice_room_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `voice_user_tag`
--

DROP TABLE IF EXISTS `voice_user_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voice_user_tag` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `voice_role_status` enum('EXITED','EXPIRED','LISTENER','OUTCAST','OWNER','SPEAKER') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `voice_room_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKjkv2vd635jjqjqxx5hwopc8j1` (`user_id`),
  KEY `FKcqx8j2xi2wekccw5lkhdyh93m` (`voice_room_id`),
  CONSTRAINT `FKcqx8j2xi2wekccw5lkhdyh93m` FOREIGN KEY (`voice_room_id`) REFERENCES `voice_room` (`voice_room_id`),
  CONSTRAINT `FKjkv2vd635jjqjqxx5hwopc8j1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping events for database 'wehee'
--
/*!50106 SET @save_time_zone= @@TIME_ZONE */ ;
/*!50106 DROP EVENT IF EXISTS `moveTable` */;
DELIMITER ;;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;;
/*!50003 SET character_set_client  = utf8mb4 */ ;;
/*!50003 SET character_set_results = utf8mb4 */ ;;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;;
/*!50003 SET @saved_time_zone      = @@time_zone */ ;;
/*!50003 SET time_zone             = 'SYSTEM' */ ;;
/*!50106 CREATE*/ /*!50117 DEFINER=`itpizza`@`%`*/ /*!50106 EVENT `moveTable` ON SCHEDULE EVERY 12 HOUR STARTS '2023-08-14 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO begin
        insert into deleted_comment(comment_id, comment_post_id, comment_user_id, content, upload_time, state, deleted_time)
        select comment_id, comment_post_id, comment_user_id, content, upload_time, state, deleted_time from comment where state != 0 and deleted_time <= date_add(now(), interval -1 day);
        delete from comment where state != 0 and deleted_time <= date_add(now(), interval -1 day);
        insert into deleted_post(post_id, post_mbti_id, title, content, post_user_id, like_count, hit, comment_count, upload_time, state, deleted_time)
        select post_id, post_mbti_id, title, content, post_user_id, like_count, hit, comment_count, upload_time, state, deleted_time from post
        where state != 0 and deleted_time <= date_add(now(), interval -1 day);
        delete from post where state != 0 and deleted_time <= date_add(now(), interval -1 day);
        delete from hot_post;
        insert into hot_post(`rank`, hot_post_id) select row_number() over(order by like_count desc, comment_count desc, hit desc, upload_time desc), post_id from post where state = 0 and upload_time>=date_add(now(), interval -1 day) order by like_count desc, comment_count desc, hit desc, upload_time desc LIMIT 16;
    end */ ;;
/*!50003 SET time_zone             = @saved_time_zone */ ;;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;;
/*!50003 SET character_set_client  = @saved_cs_client */ ;;
/*!50003 SET character_set_results = @saved_cs_results */ ;;
/*!50003 SET collation_connection  = @saved_col_connection */ ;;
DELIMITER ;
/*!50106 SET TIME_ZONE= @save_time_zone */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-18 10:08:26
