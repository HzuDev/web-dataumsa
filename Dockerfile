# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Enable corepack and prepare pnpm 9 (matching lockfileVersion: 9.0)
RUN corepack enable && corepack prepare pnpm@9 --activate

# Copy package.json and lock files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Build the static site
RUN pnpm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy the built artifacts from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
