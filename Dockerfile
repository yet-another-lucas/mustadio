FROM node

WORKDIR /

COPY . /

CMD npm install && npm start