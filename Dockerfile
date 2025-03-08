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

COPY --from=build /docker/output /docker/
COPY --from=build /docker/package.json /docker/package.json

# Any JSON files in the root directory we might need!
# i.e, info.json etc
COPY --from=build /docker/*.json /docker/

RUN npm install --omit=dev

CMD ["npm", "run", "start"]
