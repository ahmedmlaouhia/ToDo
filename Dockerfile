FROM node:16.13.2 

COPY . .

RUN npm ci 

RUN npm run build

CMD [ "npm" , "start" ]