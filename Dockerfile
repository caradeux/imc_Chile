# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

# Production stage
FROM node:18-alpine
WORKDIR /app
RUN npm install -g pnpm
COPY --from=builder /app ./
RUN pnpm install --prod --frozen-lockfile
EXPOSE 3000
CMD ["pnpm", "start"]
