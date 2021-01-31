FROM nikolaik/python-nodejs:python3.9-nodejs14-alpine
# apkでライブラリ更新
RUN apk update && \
  apk add \
  curl \
  libxml2 \
  libstdc++
# AWS CLI
RUN pip3 install awscli
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