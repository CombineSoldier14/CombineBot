# Stage 1: Build the project
FROM node:22 AS build

WORKDIR /docker

COPY . /docker

RUN npm install
RUN npm run build

# Stage 2: Run the project
FROM node:22

WORKDIR /docker

ENV NODE_ENV=production

COPY --from=build /docker/package.json /docker/package.json
COPY --from=build /docker/package-lock.json /docker/package-lock.json
COPY --from=build /docker/output /docker

RUN npm install --only=production

CMD ["npm", "run", "start"]
