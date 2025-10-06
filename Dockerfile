# Base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

COPY . .
COPY .env.local .
COPY .env.production .

RUN npm install -g pnpm

RUN pnpm install
RUN pnpm build


FROM nginx:1.23.3-alpine
COPY --from=0 /app/dist /usr/share/nginx/html

EXPOSE 8000