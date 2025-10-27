# Use official nginx image to serve static site
FROM nginx:alpine


# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*


# Copy site files into nginx html dir
COPY . /usr/share/nginx/html/


# Optional: copy a custom nginx config if present
# COPY nginx.conf /etc/nginx/conf.d/default.conf


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]