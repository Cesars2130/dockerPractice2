# Usa una imagen de Node.js
FROM node:22.11.0

WORKDIR /index

# Copia los archivos de configuración y de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente a la imagen
COPY . .

# Expone el puerto en el que la API escuchará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]
