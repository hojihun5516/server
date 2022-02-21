## declare base image - node 16 
FROM node:16.13.1-alpine3.13 AS builder 
## make work directory and copy files 
WORKDIR /app 
COPY . . 
## project dependency install 
RUN npm install
RUN npm run build

FROM node:16.13.1-alpine3.13
WORKDIR /usr/src/app 
COPY --from=builder /app ./ 
EXPOSE 3000 
CMD ["npm", "run", "start:prod"]