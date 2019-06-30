# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY ./app /app
RUN npm install
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

RUN mkdir           /etc/nginx/conf
COPY mime.types     /etc/nginx/conf
COPY nginx.conf     /etc/nginx

COPY --from=build-stage /app/dist /app/dist

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


