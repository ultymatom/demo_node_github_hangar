FROM node:16-alpine

WORKDIR /opt/run

COPY node_modules ./node_modules
COPY package.json .
COPY package-lock.json .
COPY app.js .

CMD ["npm", "start"]
