FROM node:carbon

LABEL MAINTAINER = "Anthony GW <anthony.waithaka@andela.com>"

LABEL application="quickgym-frontend"

WORKDIR /app

# add files
ADD ./dist/quickgym app/

ADD ./server.js app/server.js

RUN npm i -g express

ENV NODE_PATH="/usr/local/lib/node_modules/"

RUN chmod +x app/server.js

CMD app/server.js
