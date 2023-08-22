# How to Run

마지막 업데이트 날짜: 2023-08-18 <br>
작성자: 김예진

> **목차**
>
> 1. [Git Clone](#1-git-clone)
> 2. [환경변수 세팅](#2-환경변수-세팅)
>    1. [도커 환경변수 세팅](#2-1-도커-환경변수-세팅)
>    2. [application.yml 환경변수 세팅](#2-2-applicationyml-환경변수-세팅)
>       1. [`application.yml`에서 환경변수가 들어간 부분](#applicationyml에서-환경변수가-들어간-부분)
>       2. [환경변수에서 필요한 정보들을 받아오는 방법](#환경변수에서-필요한-정보들을-받아오는-방법)
>       3. [환경변수를 저장하는 방법 - `.env`파일 이용](#환경변수를-저장하는-방법---env파일-이용)
>       4. [환경변수를 등록하는 방법 - IntelliJ에 환경변수 등록하기](#환경변수를-등록하는-방법---intellij에-환경변수-등록하기)
> 3. [로컬에서 실행하기](#3-로컬에서-실행하기)
>    1. [도커 실행](#3-1-도커-실행)
>       1. [docker-compose 파일 실행](#docker-compose-파일-실행)
>       2. [Stomp 활성화](#stomp-활성화)
>    2. [IntelliJ 실행](#3-2-intellij-실행)
>    3. [Frontend 실행](#3-3-frontend-실행)
> 4. [EC2에 배포 후 실행하기](#4-ec2에-배포-후-실행하기)

# 1. Git Clone

```bash
git clone https://lab.ssafy.com/s09-webmobile1-sub2/S09P12A806.git
```
```bash
cd S09P12A806
```

# 2. 환경변수 세팅

## 2-1. 도커 환경변수 세팅

`docker-compose` 폴더 내부에 `.env`파일을 만들고 도커 실행을 위한 환경변수를 설정해야 합니다.

```yaml
MYSQL_USER=<mysql_user>
MYSQL_PASSWORD=<mysql_password>
MYSQL_DATABASE=<mysql_database>
MYSQL_ROOT_PASSWORD=<mysql_root_password>
```

MySQL과 관련된 환경변수를 설정할 때는 꺽쇠(<>) 사이에 해당 정보를 넣으면 됩니다. 도커 compose 파일을 실행하는 명령어를 입력하면 자동으로 `.env`파일에 담긴 환경변수를 읽어오기 때문에 꼭 compose 파일과 같은 경로에 `.env`파일을 위치시켜야 합니다.

## 2-2. application.yml 환경변수 세팅

### `application.yml`에서 환경변수가 들어간 부분
```yaml
spring:
  datasource:
    url: ${DB_URL}
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}

  data:
    redis:
      host: ${REDIS_HOST}

  security:
    oauth2.client:
      registration:
        google:
          clientId: ${GOOGLE_CLIENT_ID}
          clientSecret: ${GOOGLE_CLIENT_SECRET}
        naver:
          clientId: ${NAVER_CLIENT_ID}
          clientSecret: ${NAVER_CLIENT_SECRET}
        kakao:
          clientId: ${KAKAO_CLIENT_ID}
          clientSecret: ${KAKAO_CLIENT_SECRET}
          
jwt:
  secret:${JWT_SECTRET}

wehee:
  chat:
    stomp:
      username: ${STOMP_USERNAME}
      password: ${STOMP_PASSWORD}
```

`application.yml` 파일 내부에는 주로 DB 설정, OAuth2를 위한 client id/client secret 설정, 토큰 및 stomp 관련 설정과 관련된 환경변수가 암호화 되어 있습니다.

### 환경변수에서 필요한 정보들을 받아오는 방법
OAuth2를 이용해서 로그인을 한다면 각 provider마다 client id와 client secret을 발급받아야 합니다. 각 provider의 개발자 홈페이지에 들어가 애플리케이션을 만들고 필요한 정보들을 입력하면 쉽게 해당 정보들을 받을 수 있습니다.

### 환경변수를 저장하는 방법 - `.env`파일 이용
```yaml
DB_URL=<db_url>
DB_USERNAME=<db_username>
DB_PASSWORD=<db_password>
STOMP_USERNAME=<stomp_username>
STOMP_PASSWORD=<stomp_password>
GOOGLE_CLIENT_ID=<google_client_id>
GOOGLE_CLIENT_SECRET=<google_client_secret>
NAVER_CLIENT_ID=<naver_client_id>
NAVER_CLIENT_SECRET=<naver_client_secret>
KAKAO_CLIENT_ID=<kakao_client_id>
KAKAO_CLIENT_SECRET=<kakao_client_secret>
JWT_SECRET=<jwt_secret>
REDIS_HOST=<redis_host>
```

위의 `.env`파일을 만들고 Spring Boot 프로젝트의 resources 폴더 내부에 파일을 위치시킵니다. jar 파일 실행 시 자동으로 환경변수를 인식하게 하기 위해 새로운 의존성도 gradle에 추가해주어야 합니다.

```groovy
implementation 'me.paulschwarz:spring-dotenv:4.0.0'
```

### 환경변수를 등록하는 방법 - IntelliJ에 환경변수 등록하기

Spring Boot 프로젝트를 실행할 때 `application.yml`에서는 여러 가지 환경변수들을 관리할 수 있습니다. 이때 외부에 드러내기 민감한 정보들은 다음과 같이 변수로 보호해주는데요, 프로젝트 실행 시에는 어떻게든 이 환경 변수를 시스템에게 알려주어야 합니다.

![](images/dev01.png)

IntelliJ를 실행하면 우측 상단에 있는 Configuration 버튼을 클릭하고 `Edit Configurations...`를 선택해줍니다.

![](images/dev02.png)

환경 변수를 입력하기 위한 선택을 위해 `Modify options`를 클릭합니다.

![](images/dev03.png)

`Environment variables`를 선택합니다.

![](images/dev04.png)

이제 환경 변수를 등록할 수 있습니다. 여기에 환경변수를 등록합니다.

# 3. 로컬에서 실행하기

## 3-1. 도커 실행

프로젝트 폴더에 현재 위치해 있다고 가정한 상태에서 진행하겠습니다.

### docker-compose 파일 실행

```bash
docker-compose -f docker-compose/dependencies.yml up -d
```

### Stomp 활성화

밑의 명령어를 모두 입력합니다. `<rabbitmq conainer name or id>`에는 RabbitMQ 컨테이너의 이름 혹은 아이디를 입력합니다.

```bash
docker exec <rabbitmq container name or id> rabbitmq-plugins enable rabbitmq_management
```

```bash
docker exec -it <rabbitmq container name or id> bash
```

```bash
rabbitmq-plugins enable rabbitmq_stomp
```

## 3-2. IntelliJ 실행

[환경변수를 등록하는 방법 - IntelliJ에 환경변수 등록하기](#환경변수를-등록하는-방법---intellij에-환경변수-등록하기)를 참고해 필요한 환경변수를 모두 추가해줍니다. 그 후 `Run` 버튼을 눌러 백엔드 코드를 실행합니다.

## 3-3. Frontend 실행

프로젝트에 필요한 Node.js 버전을 확인 후(WeHee의 경우 `v18.16.0`입니다) 실행시킵니다. 우선 npm을 update한 후(혹은 `npm install` 후) 실행하면 됩니다.

```bash
cd fe
```

```bash
npm update
```

```bash
npm start
```

# 4. EC2에 배포 후 실행하기

### EC2 배포 안내

> [EC2 배포 안내]
>
> 9기 공통 프로젝트 클라우드 서버 안내드립니다.
>
> - 제공기간: 금일 ~ 공통 프로젝트 종료 시(종료 후 7일 이내 삭제 예정)
> - 서버 도메인: i9[팀ID].p.ssafy.io
> - 접속 방법: 제공된 인증키(.pem)를 사용하여 ubuntu 계정으로 SSH 접속서울1반 1팀의 CLI 접속 예: ssh -i I9A101T.pem [ubuntu@i9a101.p.ssafy.io](mailto:ubuntu@i9a101.p.ssafy.io)
>
> ※ 주의 사항 별도의 웹 콘솔 제공되지 않으며 원격 터미널만 접속 가능하므로 방화벽 설정에 주의 방화벽 기본 설정: 활성, 22번 포트만 접속 가능(첨부된 UFW 포트설정하기 참조)
>
> /home 및 시스템 디렉토리의 퍼미션 임의 변경 금지 퍼블릭 클라우드의 서버는 외부에서 쉽게 접근 가능하므로 중요한 파일 저장 및 계정, DB 등의 패스워드 설정에 주의 SSH 포트 차단, 공개키 삭제, 퍼미션 임의 변경 등으로 접속 불가 시 또는 해킹, 악성코드 감염 시 복구 불가(초기화 요청만 가능)

## 4-1. EC2와 연결하기

이 과정은 맥북에서 수행하는 것을 가정하고 합니다.

### Shell에서 접근하는 방법

```bash
cd .ssh
```


```bash
ssh i- <pem키 파일> ubuntu@<도메인>
```

### IntelliJ Big Data Tools로 접근하는 방법

1. IntelliJ에서 Big Data Tools 설치
2. EC2와 연결
   - ![](images/dev05.png)

## 4-2. 외부 개발

- 배포 내용
  1. MySQL
  2. Redis
  3. RabbitMQ

### 외부 개발 배포하기

1. EC2 인스턴스 내부에 `/home/ubuntu/databases` 폴더 생성

2. 외부 개발 내용 배포를 위한 `docker-compose.yml` 파일, `.env` 파일을 해당 폴더에 옮겨놓기

   ```yaml
   version: '3.8'
   services:
     redis:
       restart: always
       image: "redis:7.0"
       ports:
         - "6379:6379"
       volumes:
         - ./redis/data:/var/lib/mysql
         - ./redis/data/redis.conf:/var/lib/redis/redis.conf
       command: redis-server /var/lib/redis/redis.conf
     mysql:
       image: "mysql:8.0.34"
       restart: always
       ports:
         - "3306:3306"
       environment:
         MYSQL_USER: "${MYSQL_USER}"
         MYSQL_PASSWORD: "${MYSQL_PASSWORD}"
         MYSQL_DATABASE: "${MYSQL_DATABASE}"
         MYSQL_ROOT_PASSWORD: "${MYSQL_ROOT_PASSWORD}"
         TZ: Asia/Seoul
       command:
         - --character-set-server=utf8mb4
         - --collation-server=utf8mb4_unicode_ci
       volumes:
         - ./mysql-init-files/:/docker-entrypoint-initdb.d/
         - ./mysql/data:/var/lib/mysql
     rabbitmq-stomp:
       restart: always
       image: "rabbitmq:3.12"
       ports:
         - "5672:5672"
         - "15672:15672"
         - "61613:61613"
   ```

3. 


## 4-3. 자체 개발 - 백엔드

- 배포 내용: JVM + JAR

### 백엔드 배포하기
1. EC2 인스턴스 내부에 `/home/ubuntu/backend/libs` 폴더 생성

2. `bootJar 파일`, `application.yml` 파일, `.env` 파일을 해당 폴더에 옮겨놓기

3. `libs` 폴더 내부에 `entrypoint.sh` 파일 작성

   ```sh
   #!/bin/bash
   
   cd /home/libs
   
   set -eux
   
   export $(cat .env | xargs)
   java -jar <BootJar 파일명>
   ```

4. JVM 실행을 위한 docker-compose yaml 파일을 `/home/ubuntu/backend` 폴더 내부에 생성

   ```bash
   version: "3.8"
   services:
     backend:
       image: docker.io/library/openjdk:19-ea-19-jdk-slim-buster
       network_mode: host
       volumes:
         - ./libs:/home/libs
       command:
         - /home/libs/entrypoint.sh
   ```

5. Docker 명령어 실행

   ```bash
   cd /home/ubuntu/backend
   ```

   ```bash
   docker compose stop
   ```

   ```bash
   docker compose start
   ```

## 4-4. 자체 개발 - 프론트

- 배포 내용: Node + frontend

### 프론트 배포하기





