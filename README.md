# MicroServices

## Description

 A Rockeseat project based on educational course systems, it has a microservice for Purchases (Where is stored all informations about purchases, payments, products, etc) and Classroom (Where is stored all informations about students, class, courses, etc)

 ## Main concept

 This project uses NestJS (A NodeJS framework) on backend side, using Microservices for each part of the application (Both built in GraphQL). After building each microservice, it uses Apache Kafka and Apollo Federation to establish the communication between both of them.

It also uses a Docker-compose file with all our utilities (Postgres database, apache kafka and zookeeper) and an Auth0 authorization system.

## Technical details

* NodeJS
* GraphQL
* NestJS
* Typescript
* PrismaORM
* Docker-compose
* Auth0
* Apache Kafka
* Apollo Federation
* Postgres

## How to use

After cloning this project, run this command on the root of the project:
```
docker-compose up -d
```

After running docker compose, run this command on all of the directories:
```
pnpm install && pnpm run start:dev
```
Alright, now you need to open your browser on "http://locahost:3002/graphql"

  thank you

