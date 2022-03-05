FROM node:16 as react_build

WORKDIR /app

COPY . /app/ 

RUN npm ci --silent

RUN npm run build 

FROM nginx

COPY --from=react_build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80 

CMD ["nginx","-g","daemon off;"]