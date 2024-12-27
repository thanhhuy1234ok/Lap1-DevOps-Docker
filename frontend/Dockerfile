FROM node:23-alpine3.19

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Set working directory
WORKDIR /home/src/app

# Copy package.json and install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy the rest of the application
COPY frontend .

# Expose port and start the app
EXPOSE 5173
CMD ["npm", "start"]