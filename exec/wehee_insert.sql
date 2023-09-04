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
-- Dumping data for table `chat_room`
--

LOCK TABLES `chat_room` WRITE;
/*!40000 ALTER TABLE `chat_room` DISABLE KEYS */;
INSERT INTO `chat_room` VALUES (7,NULL,0,NULL,'2023-08-18 12:33:57.122000',10,100,0,3,'[\"ENFP\"]','엔프피 짝사랑 중인데요'),(8,NULL,1,NULL,'2023-08-18 12:34:15.564000',10,100,0,3,'[\"ENFP\"]','엔프피랑 썸타는 것 같긴한데'),(9,NULL,2,NULL,'2023-08-18 12:34:27.963000',10,100,0,3,'[\"ENFP\"]','원래 엔프피 맨날 놀러가?'),(10,NULL,4,NULL,'2023-08-18 12:34:51.730000',10,100,0,3,'[\"INFP\",\"ENFP\"]','엔프피/인프피 랑 재회할래요'),(11,NULL,0,NULL,'2023-08-18 12:35:51.719000',10,100,0,0,'[\"ISTJ\"]','ISTJ 좋아합니다'),(12,NULL,2,NULL,'2023-08-18 13:07:57.038000',10,100,0,3,'[\"ISTJ\",\"ESTJ\"]','잇티제 궁금합니다'),(13,NULL,1,NULL,'2023-08-18 13:08:10.640000',10,100,0,3,'[\"ESFP\"]','엣프피도 궁금해요'),(14,NULL,0,NULL,'2023-08-18 14:04:37.962000',10,100,0,0,'[\"ISTJ\"]','잇티제한테 고백할래요');
/*!40000 ALTER TABLE `chat_room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (24,'ddddd',NULL,0,'2023-08-18 12:21:31.924924',457,6),(25,'ddddd',NULL,0,'2023-08-18 12:21:34.877344',32,6),(26,'ㅎㅇ',NULL,0,'2023-08-18 13:06:19.043709',458,8),(27,'ㅎㅇ',NULL,0,'2023-08-18 13:06:22.408468',34,8),(28,'ㅇㅇㅇ\n',NULL,0,'2023-08-18 14:03:19.660343',459,9),(29,'ㅇ',NULL,0,'2023-08-18 14:03:22.627213',34,9);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `deleted_comment`
--

LOCK TABLES `deleted_comment` WRITE;
/*!40000 ALTER TABLE `deleted_comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `deleted_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `deleted_post`
--

LOCK TABLES `deleted_post` WRITE;
/*!40000 ALTER TABLE `deleted_post` DISABLE KEYS */;
/*!40000 ALTER TABLE `deleted_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `hot_post`
--

LOCK TABLES `hot_post` WRITE;
/*!40000 ALTER TABLE `hot_post` DISABLE KEYS */;
INSERT INTO `hot_post` VALUES (1,18),(3,19),(4,21),(12,22),(8,23),(10,24),(7,25),(2,26),(6,27),(13,28),(9,29),(15,30),(5,31),(11,32),(14,33),(16,34);
/*!40000 ALTER TABLE `hot_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `like`
--

LOCK TABLES `like` WRITE;
/*!40000 ALTER TABLE `like` DISABLE KEYS */;
INSERT INTO `like` VALUES (10,34,6),(11,458,9);
/*!40000 ALTER TABLE `like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES (7,'새로운 채팅이 시작되었습니다.','2023-08-18 12:33:57.143000',NULL,NULL,7),(8,'새로운 채팅이 시작되었습니다.','2023-08-18 12:34:15.583000',NULL,NULL,8),(9,'새로운 채팅이 시작되었습니다.','2023-08-18 12:34:27.984000',NULL,NULL,9),(10,'새로운 채팅이 시작되었습니다.','2023-08-18 12:34:51.749000',NULL,NULL,10),(11,'새로운 채팅이 시작되었습니다.','2023-08-18 12:35:51.729000',NULL,NULL,11),(12,'안녕하세요','2023-08-18 12:36:07.395000',NULL,6,11),(13,'네 ','2023-08-18 12:36:11.485000',NULL,7,11),(14,'안녕','2023-08-18 12:36:29.128000',NULL,6,11),(15,'새로운 채팅이 시작되었습니다.','2023-08-18 13:07:57.050000',NULL,NULL,12),(16,'새로운 채팅이 시작되었습니다.','2023-08-18 13:08:10.651000',NULL,NULL,13),(17,'안녕하세요 저 잇티제랑 사귀고 있는데요','2023-08-18 13:08:49.255000',NULL,8,12),(18,'네','2023-08-18 13:08:51.444000',NULL,7,12),(19,'새로운 채팅이 시작되었습니다.','2023-08-18 14:04:37.986000',NULL,NULL,14),(20,'잇티제 한테 고백할랭','2023-08-18 14:05:07.494000',NULL,9,14),(21,'못하겠음','2023-08-18 14:05:10.684000',NULL,7,14);
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,0,'나는 이상하게 전혀 생각이 안 들더라 뭔가 어? 하고 싶다 하다가도 금방 그 감정이 없어져서 걍 다른 일 하게 됨. 이걸 이성친구한테 말하니까 그냥 아직 외롭지 않아서 그런 거라고 하더라고. 연애는 외로우면 하고 싶어지는 건가?',NULL,56,4,1,0,'너네들은 연애하고 싶을 때가 언제야?','2023-08-16 09:21:36.012345',2),(2,0,'의외로 관계중심적 (enfp , infp , enfj 등) 사람들은 연애를 못하는 것 같음...\n\n서로 신경쓰고 눈치보느라 찌그락 빠그락... \n\n\n\n오히려 자기중심적 (istj, estj  등) 사람들끼리 만나면\n\n서로 바운더리 인정하고 쿨하게 각자 인생 살면서 연애하는듯 .. \n\n\n\n자기중심적 x 관계중심적이 만나면 그냥 헬이고...',NULL,57,8,1,0,'자기중심적인 사람들이 연애를 더 잘하는 것 같아','2023-08-16 10:23:45.543216',1),(3,0,'만약에 너네가 좋아하는 애있는데\n\n\n\n이미 내 생활 반경 안에 있는 친구라면\n\n\n\n예를들면 매주 고정 모임이 있어서 볼 수 있고 거리도 어느정도 가깝다면\n\n\n\n이 외의 날짜에도 어떻게든 약속을 잡는 편인지\n\n\n\n아니면 얘는 주말에 보니까 다른 애들이랑 놀아야지 하는지 궁금함\n\n\n\n어짜피 좋아한다고 해서 몰빵하지는 않으니까\n\n\n\n한번으로도 충분한 편인가 ?',NULL,3,3,1,0,'너네는 어떰 ?','2023-08-16 11:04:43.789247',2),(4,0,'ENFP - T (예민성 높은거) 인데 \n\n연애나 사람관계에서 상처받기 시작하면 그게 계속 굴러가...\n\n\n\n중간에 이성적으로 한 번 스스로를 다잡거나 하는 타이밍이 있어야 하는데\n\n그게 쉽지 않음. 딱 중간에 감정과 머리를... 식혀줘야하는데..\n\n인간관계에서 유독 취약함.. \n혹시 이런 사람들 극복방법 알려줄래?',NULL,24,9,1,0,'이성적이고 마음이 넓은 사람이 되고 싶어.','2023-08-16 11:22:33.789541',3),(5,0,'썸비슷하게타고 술자리도 몇번하고 하다가 직장때문에 뭔가 조심스러워서 연락만 길어지다가 서로 진전이없는거 같아서 내가 좀 식엇어 상대가 먼저 연락오면  몇번 받아주다 씹고 반복했더니 서로 일이주 연락안하기도 했는데 갑자기 한이틀전부터 또 끊어진 썸 붙이려는느낌?? 맛있는거 사준다고 날잡자하고하는데\n혹시 미움받는거 싫고 내가 맘뜬거같아서 이러는거 맞나?\n계속 마주쳐야하는사람이라\n그런건지',NULL,24,8,1,0,'서로 관심있다가','2023-08-16 11:30:45.775469',2),(6,0,'인간관계에 트러블이 생기거나 배신당하거나\n썸붕같은거 생기면 그날 잠을 못잔다..\n온갖생각 다들고 별의별 시나리오 머리속을 스치고\n오늘도 그런밤임 ㅅㅂ\n출근해야하는데..\n내일 또 표정관리 안되겠지 에휴..',NULL,74,3,1,0,'난 인간관계 스트레스에 너무 취약한거같음','2023-08-16 12:04:05.555555',2),(7,0,'격리때문',NULL,80,2,1,0,'인간이 우울증에왜걸리겟냐고','2023-08-16 12:05:54.222222',3),(8,0,'난 싸우는걸 굉장히 싫어한다.\n\n일반적으론 화를 내면 상대방이 상처를 입지만 난 내가 화를 내면서도 상대방이 기분 나쁠까 노심초사하여 상처도 내가 받기 때문에 화내는 걸 정말 혐오한다.\n나도 아닐땐 아니라고 따끔하게 말 할 수 있는 사람이 되고 싶다',NULL,12,6,1,0,'애인과 싸우기 싫다','2023-08-16 15:54:33.111111',3),(9,0,'솔직히 상대가 나한테 이성적인 호감이 있는지는 불확실한 상황인데\n\n일단 나란 사람 자체를 싫어하진 않음(이건 확신할 수 있음.)\n\n예쁘다고 말해도 되나???',NULL,10,1,1,0,'썸 단계에서 예쁘다고 말해도 되나?','2023-08-16 16:07:22.333333',2),(10,0,'난 엔프피인데 굳이 더 들어볼 필요도 없는 개소리라고 생각함.\n\n\n군대를 간것도 아닌데 너를 왜 기다려야 하며\n꽃잎 한장한장 뜯으면서 돌아온다 안온다 이지랄이라도 하라는건가\n그냥 일방적으로 그런말하는거 너무 이기적이라고 생각함.\n',NULL,35,7,1,0,'시간을 갖자 라는말 어케 생각함','2023-08-16 16:07:22.000456',2),(11,0,'나 기다리는거 존나 못참는 스타일인데 카톡하면 상대 답장 기다려야하잖음\n\n\n\n5분 넘어가면 아 이사람 얘기하기싫나? 이런 생각들고..',NULL,18,5,1,0,'니들도 카톡하는거 귀찮냐','2023-08-16 16:54:55.444444',1),(12,0,'친구 힘들다고 연락와서 밥이랑 술사주고 얘기들어주고 기분풀어서 보내줬는데 그뒤로 한달째 내연락 안읽음 도중에 두번보냈는데도 안읽음 연락하지 말라는거지??',NULL,39,3,1,0,' 안읽씹 한달이면 연락하지 말라는거지?','2023-08-17 00:11:22.333333',2),(13,0,'나 진지하게 이제 곧 20대 중반 진입하는데, 통장에 대충 5천 있거든?\n\n\n\n진짜 겁나게 열심히 모았는데, 막상 통장 보니까 그렇게 많이 모은거 같지가 않은거야...\n\n\n\n그래서 문득 궁금해져서 물어보는거야. 다들 20대 초반에 돈 얼마나 모았어?',NULL,86,5,1,0,'20대 초반에 돈 얼마나 모았어?','2023-08-17 02:34:56.111567',1),(14,0,'너무 착하고 순수하고 귀여워...\n한번씩 잔소리하면서 챙겨쥬는거 넘 감동',NULL,63,3,1,0,'잇프피 넘 좋앙ㅠㅠ','2023-08-17 04:55:23.021567',3),(15,0,'기준은 좀 딥한 고민이야 진지한 고민?..\n내가 가까운 이한테 고민 털기를 꺼려하거든 말했다가 너무 딥하면 상대방 입장에서 뭐라해줘야 하지 하고 곤란해할 거 같아서.. 아니면 나한테 이런 얘기 왜하지? 이럴까봐도 있고.. 그래서 궁금해 너흰 무슨 생각이 들어? 위로해주고 싶다 아니면 이런 얘기 왜 하지 이런 느낌이야?',NULL,45,5,1,0,'친구가 고민 말하면 무슨 생각 듦?','2023-08-17 05:21:08.654123',2),(16,0,'연락 쉽게 함? \n\n내가 찬 사람 \n\n내가 차인 사람 \n\n둘 다 가정하에 \n\n다시 연락하고 싶은 마음 들면 보통 어떻게함??',NULL,29,2,1,0,'근데 너네는 헤어진 사람한테 다시','2023-08-17 08:22:33.156723',2),(17,0,'들은 호감표시를 어떻게해?',NULL,97,1,1,0,'누구에게나 친절한사람','2023-08-17 09:54:33.210678',3),(18,0,'이게 엔프피 특인지 뭔지 모르겠지만 5년째 정식검사에서 엔프피 나오긴 함\n나도 그렿고 엔프피 전남친도 그랬는데 (우리 둘은 서로 이해했음) 사귈때 다른 여자나 남자랑 톡하거나 노는거 터치 안 함 스킨쉽만 안 하면 대화정도는 나이스하게 구는거라고 생각함 서로의 ex들 얘기도 함 과거니까 ㅇㅇ근데 솔직히 다른 유형이 보기엔 플러팅이지 싶다 그리고 이딴식으로 굴어서 그런가 환승 쉬움ㅋ전남친 환승해서 내가 차임ㅋㅎ',NULL,44,8,1,0,'내 성격의 장단점','2023-08-17 12:34:56.541059',1),(19,0,'인팁 여자애인데 나한테 군대 가기 전이랑 군대에 있을 때 여친 있었냐?\n또 지금은 여친 있냐? 여친 생기면 잘 해줄 거 같다 이러는 데 호감인가..?',NULL,30,7,1,0,'어케 생각함???','2023-08-17 14:54:21.541023',1),(20,0,'먼저 알아보고 같은길 동안 같이 걸으면서\n\n대화하고\n\n그리고 헤어질때 먼저 연락수단 물어보던데\n\n남친은 있는데 친구하고 싶대',NULL,8,2,1,0,'야간편의점 했을때 여자손님 길에서 마주쳤는데 뭐냐','2023-08-17 15:00:54.111235',3),(21,0,'INFJ 특성상 천천히 다가가야되므로 길게 보며 인내를 갖고 있는데... ',NULL,27,7,1,0,'ENFP랑 INFJ 궁합어때?','2023-08-17 18:20:33.555412',2),(22,0,'카톡잘되고 칼답에 리액션도 혜자인데\n만나자고하면 말돌리길래 그냥 놓을생각',NULL,34,3,1,0,'관심잇으면 먼저 만나자하겟지?','2023-08-17 19:32:45.654123',3),(23,0,'울팀에 INTP 고참 2명있는데\n\n가볍게 농담했는데 갑자기 진지빨더니\n\n이상한 팩트 찾아와서 공격함 ㅋㅋ\n\n이게 한두번이 아니고\n\n무슨 말만하면 아니 그게 아니고...\n\n이런 느낌으로 깔본다고 해야하나ㅋㅋ',NULL,271,4,13,0,'INTP은 나랑 안맞아 아오 ㅋㅋㅋ','2023-08-17 19:45:32.444521',2),(24,0,'철벽?\n거리두기?\n무시?\n부담스러워도 호의 다 받기?',NULL,18,4,1,0,'엔프피는 자기 짝사랑 상대가 너무 잘해줘서 부담스러우면 어떻개 행동함?','2023-08-17 20:24:32.777890',3),(25,0,'솔직히 상대가 나한테 이성적인 호감이 있는지는 불확실한 상황인데\n\n일단 나란 사람 자체를 싫어하진 않음(이건 확신할 수 있음.)\n\n예쁘다고 말해도 되나???',NULL,30,5,1,0,'썸 단계에서 예쁘다고 말해도 되나?','2023-08-17 21:22:11.444102',2),(26,0,'일단 저는 남자구요..(ENFP)  몇 달 전에 짝사랑중인 여자애(ISTJ) 한테 고백했 다가 차였습니다. 꽤 오랜시간동안 연락 안하고 지내다가 갑자기 걔가 먼저 연락을 했어요. 그러다 가 걔가 먼저 게임 같이 하자고 해서(게임 채팅으로) 최근에 같 이 게임 하고 있습니다. 솔직히 저는 아직 걔를 다 못 잊어서 아 직도 마음이 남아있는 상태입니다.이번에 진짜 마음 먹고 그 친구한테 다 시한번 제 마음을 이야기하고 싶은데 어떻게 하면 좋을까요..?',NULL,86,7,1,0,'저도 ENFP인데 상담좀 해주세요..','2023-08-17 22:44:52.321789',1),(27,0,'A랑 B는 둘다 내 친구고 둘이 사겼었어\n그런데 나중에 내 친구(a)랑 사귀는 내 친구(b)가 바람핀걸 알게됐어 그럼 어떻게 할거 같아..?\n\n모르는 척 한다..?\n아니면 당한 친구에게 말한다..?',NULL,41,6,1,0,'너네 친구가 바람피는거 알면 어떨거 같아...?','2023-08-18 01:23:45.741023',2),(28,0,'1. 말 개많음 tmi 폭발함\n2. 소심하고 말 못거는 사람 보면 관심가서 말 먼저 걸고 나중에 말 트면 희열느낌\n3. 완전찡찡댐\n4. 어떤 모임 가면 아는사람이 대부분이고 먼저 아는척함\n5. 모르는 사람 새로운 모임 너무 설렘\n6. 뇌절 자주함\n',NULL,30,3,1,0,'내 특징 써봄','2023-08-18 03:54:11.774102',1),(29,0,'꿈에서\n나를 아는 사람과 나를 모르는 사람, 내가 친구라고 부르는 모든 사람이 함께 수학여행을 갔다.\n각자 친한 사람 2-3명과 짝을 지어서 자유여행 하라는 선생님의 지시가 있었고\n다들 본인의 무리를 찾아서 모이는데\n내 친구들이 모두 나를 양보하더라.\n\n본인들은 정말 각별한 한 두명의 친구들이 있대.\n너는 저기 있는 애들이랑 다 친하니까 다른 애들한테로 가면 될거래\n그런식의 거절을 몇번 당하고 나니까\n모두 짝을 찾는 와중에 나만 혼자 있더라',NULL,63,4,9,0,'엔프피인 나의 비참함','2023-08-18 05:11:22.456321',2),(30,0,'enfp인데 친구가 많이 없어서 힘드네',NULL,103,2,4,0,'enfp가 사교성 최고 아니었어..?','2023-08-18 06:02:33.444102',2),(31,0,'ENFP 최대 아웃풋은 무조건 나지><',NULL,52,6,1,0,'ENFP 최대 아웃풋','2023-08-18 07:11:22.333456',3),(32,1,'진짜 아침 여섯시에 일어나서 운동도 하고 명상도 하고 책도 읽고 아무튼 다 할거야ㅎㅎㅎㅎ응원해주라',NULL,104,3,1,0,'나 오늘부터 미라클모닝 할거다','2023-08-18 09:20:11.654789',3),(33,0,'나 최근에 좋아하는 친구가 생겼는데 MBTI 물어봤더니 ISTJ라고 했어! 성격도 막 보니깐 찐 잇티제같고 근데 나랑 정반대라 그런가 어떻게 꼬셔야 하는 지 모르겠어ㅠㅠ ISTJ 여자친구 있는 친구들 도와주라',NULL,16,3,1,0,'잇티제 여자친구 있는 엔프피들 도와줘','2023-08-18 10:02:14.654789',1),(34,2,'어제 회사 사람들이랑 놀았고 오늘은 금요일이니깐 친구들이랑 놀러 가야징ㅎㅎ 너무 좋아>-<\n엔프피 친구들도 오늘 다 놀러 가지???',NULL,90,3,1,0,'우리 회사는 목요일에 회식한다!!','2023-08-18 11:28:15.654789',3),(457,1,'dddd',NULL,12,0,1,0,'ddd','2023-08-18 12:21:26.542638',6),(458,1,'하이',NULL,26,1,1,0,'엔프피','2023-08-18 13:06:16.256853',8),(459,1,'ㅇㅇㅇㅇ',NULL,9,0,1,0,'ㅇㅇ','2023-08-18 14:03:14.087109',9);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `refresh_token`
--

LOCK TABLES `refresh_token` WRITE;
/*!40000 ALTER TABLE `refresh_token` DISABLE KEYS */;
INSERT INTO `refresh_token` VALUES (1,'2963933228','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyOTYzOTMzMjI4Iiwicm9sZSI6IlVTRVIiLCJleHAiOjE2OTIxNTAzNDJ9.EguqQAdJSHQY--AvwsGb271bkm9FN_6Y7n_pFgmMdF8'),(2,'106878356693173966764','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDY4NzgzNTY2OTMxNzM5NjY3NjQiLCJyb2xlIjoiVVNFUiIsImV4cCI6MTY5MjI1MzIyM30.mJUQ2Pk8Hz6cNNqbZRxgzXzAwGgP9UIlqpXoGYYN-0U'),(3,'gHGs1Yo7kWxH3yx5gjweK2GOBxFMGb6MkeqSnQ_WilQ','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnSEdzMVlvN2tXeEgzeXg1Z2p3ZUsyR09CeEZNR2I2TWtlcVNuUV9XaWxRIiwicm9sZSI6IlVTRVIiLCJleHAiOjE2OTIyODQwMjN9.RkYqeUrJDYNM6BjUPPrv6wrdzIOog5S-LbeQ2cmU-PY'),(4,'110006085180036559324','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTAwMDYwODUxODAwMzY1NTkzMjQiLCJyb2xlIjoiVVNFUiIsImV4cCI6MTY5MjMzNTk5NX0.V5M0sLxWvhj80zGz6Ow4O_1s-IzXEen9y7ZOKyCPATE'),(5,'2946936290','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyOTQ2OTM2MjkwIiwicm9sZSI6IlVTRVIiLCJleHAiOjE2OTIzMzY0NTB9.d4YxWq3mtUr-KUV9MLx5ufOgNxf7Pa967RTXXnAQOGg'),(6,'5FPcq0oIwFZzTF4PtyeHwAazfMtUgNG_5Cmbcp60jCg','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1RlBjcTBvSXdGWnpURjRQdHllSHdBYXpmTXRVZ05HXzVDbWJjcDYwakNnIiwicm9sZSI6IlVTRVIiLCJleHAiOjE2OTIzMzg3MzR9.vyqusRB_XcNYYBjz6C15BZUNguWbNNIG3VbPLeer_LA'),(7,'114735110434737330168','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTQ3MzUxMTA0MzQ3MzczMzAxNjgiLCJyb2xlIjoiVVNFUiIsImV4cCI6MTY5MjM0MjExMn0.6HeuVQS08Az_E94UPCoEu0TvzdnhQ6QZqZHPrwFRoJ8');
/*!40000 ALTER TABLE `refresh_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `scrap`
--

LOCK TABLES `scrap` WRITE;
/*!40000 ALTER TABLE `scrap` DISABLE KEYS */;
INSERT INTO `scrap` VALUES (11,34,6),(12,34,8),(13,458,9);
/*!40000 ALTER TABLE `scrap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'0',_binary '\0','2023-08-16','parkstarboard@gmail.com',1,_binary '\0','2023-08-16',1,'엥프피','http://k.kakaocdn.net/dn/d4qqgP/btspVMoEict/uIUTSC6XP0aSA3VuYQrHoK/img_640x640.jpg','KAKAO','2963933228','USER',_binary '\0'),(2,'1998',_binary '\0','2023-08-17','0x847769a@gmail.com',1,_binary '\0','2023-08-17',1,'잠탱이','https://lh3.googleusercontent.com/a/AAcHTtcteYq7Neg6PnkVMQ7VsDtBkj1TMTqffhZbsZTq4RJ7=s96-c','GOOGLE','106878356693173966764','USER',_binary '\0'),(3,'2006',_binary '','2023-08-17','wu_hyun@naver.com',0,_binary '','2023-08-17',1,'하루살이','https://ssl.pstatic.net/static/pwe/address/img_profile.png','NAVER','gHGs1Yo7kWxH3yx5gjweK2GOBxFMGb6MkeqSnQ_WilQ','USER',_binary '\0'),(6,'2000',_binary '\0','2023-08-18','wereheere@gmail.com',1,_binary '','2023-08-18',1,'Jay','https://lh3.googleusercontent.com/a/AAcHTtcKfEGoI_b4lpGrRR7o83qk8qtDbnpklgink8pvatwV7A=s96-c','GOOGLE','110006085180036559324','USER',_binary '\0'),(7,'1998',_binary '\0','2023-08-18','yoo9168@naver.com',0,_binary '\0','2023-08-18',14,'여뉴','http://k.kakaocdn.net/dn/bsVWEU/btsox9GS21C/r5q3uhxemKQ4MBSzcySdc1/img_640x640.jpg','KAKAO','2946936290','USER',_binary '\0'),(8,'1998',_binary '\0','2023-08-18','dbdus1gh@naver.com',1,_binary '','2023-08-18',1,'R1qNtWaS','https://phinf.pstatic.net/contact/20220323_97/1648014005324DLv4N_PNG/profileImage.png','NAVER','5FPcq0oIwFZzTF4PtyeHwAazfMtUgNG_5Cmbcp60jCg','USER',_binary '\0'),(9,'2000',_binary '\0','2023-08-18','a806.itpizza@gmail.com',1,_binary '','2023-08-18',1,'빵빵이','https://lh3.googleusercontent.com/a/AAcHTtdcx31c-r8QWPDVaox0pq-VkzQ4zfkQqi3y_qKbgMdkrQ=s96-c','GOOGLE','114735110434737330168','USER',_binary '\0');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user_tag`
--

LOCK TABLES `user_tag` WRITE;
/*!40000 ALTER TABLE `user_tag` DISABLE KEYS */;
INSERT INTO `user_tag` VALUES (7,'OWNER',7,7),(8,'OWNER',8,7),(9,'OWNER',9,7),(10,'OWNER',10,7),(11,'OWNER',11,6),(12,'OWNER',12,8),(13,'OWNER',13,8),(14,'OWNER',14,9);
/*!40000 ALTER TABLE `user_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `voice_room`
--

LOCK TABLES `voice_room` WRITE;
/*!40000 ALTER TABLE `voice_room` DISABLE KEYS */;
/*!40000 ALTER TABLE `voice_room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `voice_user_tag`
--

LOCK TABLES `voice_user_tag` WRITE;
/*!40000 ALTER TABLE `voice_user_tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `voice_user_tag` ENABLE KEYS */;
UNLOCK TABLES;

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

-- Dump completed on 2023-08-18 14:17:55
