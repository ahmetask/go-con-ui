### STAGE 1: Build ###
FROM node:12.8.1-slim as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

### STAGE 2: Production Environment ###
FROM node:12.8.1-slim
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
EXPOSE 80
CMD ["serve", "-p", "80", "-s", "."]
