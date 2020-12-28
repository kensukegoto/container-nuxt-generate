FROM node:lts
# nuxt
RUN mkdir -p /nuxt
COPY ctr-nuxt-gen-2 /nuxt
WORKDIR /nuxt
RUN yarn install
# volume
RUN mkdir -p /volume
# express
RUN mkdir -p /app
COPY app /app
WORKDIR /app
RUN yarn install
EXPOSE 8080
CMD [ "node", "index.js" ]