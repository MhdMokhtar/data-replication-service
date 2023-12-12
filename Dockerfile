# Use Node.js version 14
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Nest.js dependencies
RUN npm install

# Copy the source code into the container
COPY . .

# Expose the app port
EXPOSE 3000

# Command to run the Nest.js application
CMD ["npm", "run", "start:prod"]
