# Реквизитка

Компактная статическая визитка на Astro с разделами `/main/` и `/bank/`.

## Локальная разработка

```sh
npm ci
npm run dev
```

Скопируйте `.env.example` в `.env` и заполните локальные значения. Файл `.env` не добавляется в Git.

## Публикация через GitHub Pages

Workflow `.github/workflows/deploy.yml` собирает проект на push в `main` и публикует `dist/` в GitHub Pages. Задайте Actions repository variable `SITE_DOMAIN` и значения `PUBLIC_*` из `.env.example`; в CI `PUBLIC_SITE_URL` формируется из `SITE_DOMAIN`. Для `PUBLIC_CONTACT_FUNCTION_URL` укажите публичный URL существующей AWS Lambda Function URL; адрес виден посетителям сайта и не является секретом. Telegram-токен в репозиторий и frontend не добавлять.

Публикация с нового домена требует добавить его в CORS настройки AWS Lambda Function URL.

Production-сборка также генерирует canonical/Schema.org-метаданные, `robots.txt` и `sitemap.xml` на основе `PUBLIC_SITE_URL`.
