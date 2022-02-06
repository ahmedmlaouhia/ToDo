FROM node:16.13.2 

WORKDIR /app

COPY . .

RUN npm ci 

RUN npm run build

CMD [ "npm" , "run" , "start" ]