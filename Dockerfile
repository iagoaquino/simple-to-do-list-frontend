# Use Node 20 (possui crypto.hash e recursos recentes)
FROM node:20-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar apenas arquivos de dependências primeiro (cache eficiente)
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o restante do código
COPY . .

# Expor a porta padrão do Vite
EXPOSE 5173

# Comando para rodar o dev server Vite
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]