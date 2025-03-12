# syntax = docker/dockerfile:1
ARG NODE_VERSION=18.16.0
FROM node:${NODE_VERSION}-slim as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:${NODE_VERSION}-slim
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/server.js ./
COPY --from=build /app/package.json ./

# Only install production dependencies needed for the server
RUN npm install --omit=dev express compression

# Expose the port
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]