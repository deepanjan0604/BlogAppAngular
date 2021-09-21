FROM node:latest
WORKDIR /usr/local/app
COPY ./ /usr/local/app
COPY package.json /usr/local/app
RUN npm install
COPY . /usr/local/app
RUN npm run build


FROM nginx:latest
COPY --from=build /usr/local/app/dist/BlogAngularApp /usr/share/nginx/html
EXPOSE 80
