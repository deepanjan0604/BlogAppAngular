FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app
COPY package.json /usr/local/app
RUN npm install
COPY . /usr/local/app
RUN npm run build


FROM nginx:alpine
COPY --from=build /usr/local/app/dist/BlogAppAngular /usr/share/nginx/html
EXPOSE 80
