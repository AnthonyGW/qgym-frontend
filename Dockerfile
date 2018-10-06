FROM node:carbon

LABEL MAINTAINER = "Anthony GW <anthony.waithaka@andela.com>"

LABEL application="quickgym-frontend"

WORKDIR /app

# add files
ADD dist/quickgym app/

ADD server.js app/

RUN npm i -g express

ENV NODE_PATH="/usr/local/lib/node_modules/"

CMD node server.js
