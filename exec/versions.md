# 버전 정보

마지막 업데이트 날짜: 2023-08-18 <br>
작성자: 김예진

> **목차**
>
> 1. [Spring Boot 관련 버전](#1-spring-boot-관련-버전)
>    1. [스프링부트](#스프링부트)
>    2. [자바](#자바)
>    3. [의존성](#의존성)
>       1. [Spring Boot](#spring-boot)
>       2. [Tool](#tool)
>       3. [Database](#database)
>       4. [JWT](#jwt)
>       5. [Chatting](#chatting)
> 2. [React 관련 버전](#2-react-관련-버전)
>    1. [Node.js 버전](#nodejs-버전)
>    1. [React 의존성](#react-의존성)
> 3. [도커 설정](#3-도커-설정)
>    1. [Redis, MySQL, RabbitMQ](#redis-mysql-rabbitmq)
>    1. [JVM](#jvm)
>    1. [Node](#node)

# 1. Spring Boot 관련 버전

## 스프링부트

- Spring boot 3.1.2

## 자바

- Java 17
- SDK corretto-17 (amazon version 17.0.8)

## 의존성

### Spring Boot

- implementation 'org.springframework.boot:spring-boot-starter-web:3.1.2'
- implementation 'io.openvidu:openvidu-java-client:2.28.0'
- implementation 'io.openvidu:openvidu-parent:2.0.0'
- testImplementation 'org.springframework.boot:spring-boot-starter-test:3.1.2'
- implementation 'org.springframework.boot:spring-boot-starter-oauth2-client:3.1.2'
- implementation 'org.springframework.boot:spring-boot-starter-security:3.1.0'
- implementation 'org.springframework.boot:spring-boot-starter-validation:3.1.2'
- implementation 'org.springframework.security:spring-security-config:6.0.1'
- testImplementation 'org.springframework.security:spring-security-test:6.1.2'

### Tool

- compileOnly 'org.projectlombok:lombok:1.18.28'
- annotationProcessor 'org.projectlombok:lombok:1.18.28'
- developmentOnly 'org.springframework.boot:spring-boot-devtools:3.1.2'
- implementation 'org.springdoc:springdoc-openapi-starter-webmvc-ui:2.1.0'
- implementation 'me.paulschwarz:spring-dotenv:4.0.0'
- implementation 'com.fasterxml.jackson.core:jackson-databind:2.15.2'

### Database

- implementation 'org.springframework.boot:spring-boot-starter-data-jpa:3.1.2'
- runtimeOnly 'com.mysql:mysql-connector-j:8.0.33'
- implementation 'org.springframework.boot:spring-boot-starter-data-redis:3.1.2'

### JWT

- implementation 'io.jsonwebtoken:jjwt-api:0.11.5'
- implementation 'io.jsonwebtoken:jjwt-impl:0.11.5'
- implementation 'io.jsonwebtoken:jjwt-jackson:0.11.5'

### Chatting

- implementation 'org.springframework.boot:spring-boot-starter-websocket:3.1.2'
- implementation 'org.springframework.boot:spring-boot-starter-amqp:3.1.2'
- implementation 'org.springframework.boot:spring-boot-starter-reactor-netty:3.1.2'
- implementation 'org.springframework:spring-messaging:6.0.11'
- implementation 'org.springframework.security:spring-security-messaging:6.1.0'

# 2. React 관련 버전

## Node.js 버전

v18.16.0

## React 의존성

- "@emotion/react": "^11.11.1"
- "@emotion/styled": "^11.11.0"
- "@mui/icons-material": "^5.14.1"
- "@mui/lab": "^5.0.0-alpha.138"
- "@mui/material": "^5.14.2"
- "@reduxjs/toolkit": "^1.9.5"
- "@testing-library/jest-dom": "^5.17.0"
- "@testing-library/react": "^13.4.0"
- "@testing-library/user-event": "^13.5.0"
- "@types/jest": "^29.5.3"
- "@types/node": "^20.4.5"
- "@types/react": "^18.2.18"
- "@types/react-dom": "^18.2.7"
- "axios": "^1.4.0"
- "js-cookie": "^3.0.5"
- "react": "^18.2.0"
- "react-dom": "^18.2.0"
- "react-redux": "^8.1.2"
- "react-router-dom": "^6.14.2"
- "react-scripts": "5.0.1"
- "redux-persist": "^6.0.0"
- "typescript": "^4.9.5"
- "web-vitals": "^2.1.4"

# 3. 도커 설정

## Redis, MySQL, RabbitMQ

```yml
version: '3.8'
services:
  redis:
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
    image: "rabbitmq:3.12"
    ports:
      - "5672:5672"
      - "15672:15672"
      - "61613:61613"
```

## JVM

```yml
```

## Node
```yml
```
