# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose port 3000 (or whichever port your app uses)
EXPOSE 3000

# Command to run your app
CMD [ "node", "app.js" ]
