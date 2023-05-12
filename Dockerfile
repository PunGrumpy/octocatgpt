FROM node:20-slim
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm 
RUN pnpm install
COPY . .
RUN pnpm build
