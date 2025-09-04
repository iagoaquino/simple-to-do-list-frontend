FROM node:20-alpine

WORKDIR /app

#Dependencies installation
COPY package*.json ./
RUN npm install

#Folder preparation
COPY *.cjs .
COPY vite.config.ts .
COPY ./src ./src

#Exposed port
EXPOSE 5173

#Command execution
CMD ["npm", "run", "dev"]