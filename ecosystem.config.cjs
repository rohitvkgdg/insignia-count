module.exports = {
  apps: [{
    name: "insignia-count",
    script: "node_modules/next/dist/bin/next",
    args: "start",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '200M',
    env: {
      PORT: 5173,
      NODE_ENV: "production"
    },
    log_date_format: "YYYY-MM-DD HH:mm:ss",
    error_file: "./logs/pm2-error.log",
    out_file: "./logs/pm2-output.log",
    time: true
  }]
};
