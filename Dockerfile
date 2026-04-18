# Stage 1: Build Next.js
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build   # generates /out

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=builder /app/out /usr/share/nginx/html

# Optional routing fix
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80