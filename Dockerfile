# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy lockfile and package files
COPY package*.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build Next.js app
RUN pnpm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install pnpm in prod container
RUN npm install -g pnpm

# Copy app from builder
COPY --from=builder /app ./

# Install only production deps (optional but recommended)
RUN pnpm install --prod --frozen-lockfile

# Expose default Next.js port
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]
