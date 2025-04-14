# Insignia-Count Deployment Guide

This guide explains how to run the Next.js application on port 5173 in both development and production environments.

## Development Mode

To run the application in development mode on port 5173:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

This will start the Next.js development server on http://localhost:5173.

## Production Deployment

### Building the Application

First, build the application:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

### Running in Production

There are two ways to run the application in production:

#### 1. Using PM2 (Recommended for Server Deployment)

To start the application with PM2:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

This uses PM2 to manage the Node.js process, with automatic restarts and logging.

To stop the application:

```bash
npm run stop
# or
yarn stop
# or
pnpm stop
# or
bun stop
```

#### 2. Using Next.js Start Command Directly

If you prefer to run Next.js directly without PM2:

```bash
npm run start:next
# or
yarn start:next
# or
pnpm start:next
# or
bun start:next
```

## Configuration Details

- The application runs on port 5173 (instead of the default Next.js port 3000)
- PM2 configuration is stored in `ecosystem.config.cjs`
- Logs are stored in the `logs/` directory

## Notes for Nginx Configuration

If you're using Nginx as a reverse proxy, here's a simple configuration to proxy requests to your Next.js application:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:5173\;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Replace `yourdomain.com` with your actual domain name.
