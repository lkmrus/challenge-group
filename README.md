## Description

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Task

### Разработать GraphQL API для следующих сущностей:
Компания (Наименование, телефон), услуги (Наименование, описание).
В Компании может быть несколько услуг (связь Один ко Многим)
Требование к приложению:
- Любая реляционная/nosql база данных
- Доступ к БД через ORM (Code First, любой ORM)
- Подготовить конфигурацию(yml,dockerfile) для развертывания всей (сервисы, бд) инфраструктуры в docker-compose.
Исходный код приложения выложить на GitHub.

### How create module
- nest g module "company"
- nest g class "company/company.model" --no-spec
- nest g controller "company" --no-spec
- mkdir "./src/company/dto"
- touch "./src/company/dto/company.dto.ts"
- nest g service "company" --no-spec
