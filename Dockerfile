FROM node:12-alpine
WORKDIR /ISS-CLIENT
COPY package*.json ./
RUN npm install 
COPY . .
RUN ls
EXPOSE 3000
CMD ["npm", "start"]

