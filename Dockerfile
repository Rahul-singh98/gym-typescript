FROM node:16.20.2-alpine AS prod

WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/local/bin

COPY --from=prod /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]