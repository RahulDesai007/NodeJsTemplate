FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD [ "node", "app.js" ]

# FROM node:9-slim
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 8000
# CMD [ "node", "app.js" ]