FROM node:22

WORKDIR /docker

COPY . /docker

RUN npm install

RUN tsc

RUN cd output

CMD ["node", "index.js"]
