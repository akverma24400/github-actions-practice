
# ----------------- Stage 1 -----------------
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

# ----------------- Stage-2 -----------------

FROM node:22-slim AS runner

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

COPY package*.json ./ 

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
