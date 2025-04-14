module.exports = {
  apps: [{
    name: "insignia-count",
    script: "bunx",
    args: "serve dist -l 5173",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '200M',
    env: {
      PM2_SERVE_PATH: "./.next",
      PM2_SERVE_PORT: 5173,
      PM2_SERVE_SPA: "true",
      NODE_ENV: "production"
    },
    log_date_format: "YYYY-MM-DD HH:mm:ss",
    error_file: "./logs/pm2-error.log",
    out_file: "./logs/pm2-output.log",
    time: true
  }]
};
