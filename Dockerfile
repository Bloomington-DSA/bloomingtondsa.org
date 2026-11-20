# Use a lightweight Node.js image
FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4324
EXPOSE 4324

CMD ["node", "./dist/server/entry.mjs"]