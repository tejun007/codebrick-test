# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY ./app /app
RUN npm install
RUN npm run build

# production stage
FROM ubuntu:xenial

RUN apt-get update && apt-get install -y \
    nginx \
    && rm -rf /var/lib/apt/lists/*

COPY site.conf /etc/nginx/sites-available
RUN ln -s /etc/nginx/sites-available/site.conf /etc/nginx/sites-enabled

EXPOSE 80

COPY --from=build-stage /app/dist /app/dist/

CMD ["nginx", "-g", "daemon off;"]


