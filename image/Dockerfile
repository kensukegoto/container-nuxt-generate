FROM node:lts

RUN mkdir -p /app
COPY app /app
WORKDIR /app
RUN yarn install
EXPOSE 8080
CMD [ "node", "index.js" ]