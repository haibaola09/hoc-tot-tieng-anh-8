# Multi-stage production build for Google Cloud Run
# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install all development and runtime dependencies
RUN npm ci

# Copy full application source
COPY . .

# Build Vite frontend assets and bundle Express backend into dist/server.cjs
RUN npm run build

# Stage 2: Runtime environment
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy package manifests to install production dependencies
COPY package*.json ./

# Install production dependencies only to minimize image size
RUN npm ci --only=production

# Copy compiled frontend and backend assets from builder phase
COPY --from=builder /app/dist ./dist

# Cloud Run injects the PORT environment variable dynamically (standardised to 8515 or 8080)
EXPOSE 8080

# Run the app
CMD ["npm", "start"]
