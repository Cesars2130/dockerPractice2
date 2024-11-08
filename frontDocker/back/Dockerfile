# Usa una imagen de Node.js
FROM node:16

WORKDIR /app

# Copia los archivos de configuración y de dependencias
COPY package*.json tsconfig.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente a la imagen
COPY . .

# Compila el código TypeScript a JavaScript
RUN npm run build

# Expone el puerto en el que la API escuchará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]