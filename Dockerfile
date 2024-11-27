FROM node:20-alpine

WORKDIR /app

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s"]