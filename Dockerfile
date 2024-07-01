# Use uma imagem base do nginx
FROM nginx:alpine

# Copie a configuração do servidor
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Define o ponto de entrada do container
CMD ["nginx", "-g", "daemon off;"]
