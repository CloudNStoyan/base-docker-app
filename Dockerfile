FROM node AS client-build

WORKDIR /app/client

COPY ./client /app/client/

RUN npm install

RUN ["npm", "run", "build"]

FROM node AS server-build

WORKDIR /app/server

COPY ./server /app/server/

RUN npm install

ARG SERVER_PORT

ENV PORT=${SERVER_PORT}

RUN ["npm", "run", "build"]

FROM node

WORKDIR /app/server

RUN apt-get -y update && apt-get -y install nginx && apt-get -y install bash

COPY nginx.conf /etc/nginx/sites-enabled/default

COPY --from=client-build /app/client/dist /app/client/dist

COPY --from=server-build /app/server/ .

CMD service nginx start & npm start