FROM node:20-slim
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
ENV NODE_ENV="production"
RUN pnpm build
COPY . .
