#State 1
FROM node:14.2.0-alpine3.10 as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
#RUN npm install angular-in-memory-web-api
COPY . .
RUN npm run build


#Stage 2
#FROM nginx:1.16.0-alpine as prod-step
FROM nginx
COPY --from=build-step /app/dist/App /usr/share/nginx/html
#COPY ./nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 4000
#CMD ["nginx", "-g", "daemon off;"]