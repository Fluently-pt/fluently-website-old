# syntax = docker/dockerfile:1
# Build stage
ARG NODE_VERSION=18.16.0
FROM node:${NODE_VERSION}-slim as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage with a simple static file server
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
