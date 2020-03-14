#specify base image
FROM node:alpine

#install dependencies
COPY ./ ./
RUN npm install

#default command to run
CMD ["npm","start"]
