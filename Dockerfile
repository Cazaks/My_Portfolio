# Stage 1: Build the React application
FROM node:22-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the project
COPY . .

# Build the production application
RUN npm run build


# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Remove Nginx's default website
RUN rm -rf /usr/share/nginx/html/*

# Copy our custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the React production build
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

















