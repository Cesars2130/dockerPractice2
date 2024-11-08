# Usa una imagen de Node.js
FROM node:16

# Define el directorio de trabajo en la imagen
WORKDIR /app

# Copia los archivos de configuración y de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente a la imagen
COPY . .

# Expone el puerto en el que la API escuchará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "index.js"]
