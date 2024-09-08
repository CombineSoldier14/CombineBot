FROM node:22

WORKDIR /CombineJS

RUN npm install

CMD ["node", "index.js"]
