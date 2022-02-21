FROM node:16

WORKDIR /app

ENV PORT 4173
ENV HOST 0.0.0.0

COPY package*.json ./

RUN npm ci 

COPY . .

RUN npm run build

EXPOSE 4173

CMD [ "npm" , "start" ]