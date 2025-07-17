# Use a simple nginx server to serve static files
FROM nginx:alpine

# Copy all your frontend files into nginx's default public folder
COPY . /usr/share/nginx/html

# Expose port 80 (default HTTP port)
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
