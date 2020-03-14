# i am going to use existing docker image as base image
FROM alpine
# Download and install dependency
RUN apk add --update redis
RUN apk add --update gcc
# Tell the image what to do when its starts as a container
CMD ["redis-server"]