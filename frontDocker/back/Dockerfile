# Usa una imagen de Node.js
FROM node:16

WORKDIR /index

# Copia los archivos de configuración y de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente a la imagen
COPY . .

RUN npm run build

# Expone el puerto en el que la API escuchará
EXPOSE 4000

# Comando para iniciar la aplicación
CMD ["node", "index.js"]
