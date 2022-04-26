FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./

# envs
ENV REDIS_HOST=$GCP_REDIS_HOST
ENV REDIS_PORT=$GCP_REDIS_PORT
ENV REDIS_AUTH=$GCP_REDIS_REDIS_AUTH
ENV DEV_ID=$GCP_DEV_ID
ENV AUTH_KEY=$GCP_AUTH_KEY

# If you are building your code for production
RUN npm ci

# Bundle app source
COPY . .

EXPOSE 8080
RUN npm run build
CMD NODE_ENV=production npm run start