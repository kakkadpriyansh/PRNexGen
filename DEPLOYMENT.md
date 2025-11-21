# PRNexGen Deployment Guide - Ubuntu VPS

## Prerequisites
- Ubuntu VPS (20.04 or later)
- Domain: prnexgen.in pointed to your VPS IP
- Root or sudo access

## Step 1: Initial Server Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install Nginx
sudo apt install -y nginx

# Install PM2 globally
sudo npm install -g pm2
```

## Step 2: Setup Application

```bash
# Create app directory
sudo mkdir -p /var/www/prnexgen
cd /var/www/prnexgen

# Clone repository
sudo git clone https://github.com/kakkadpriyansh/PRNexGen.git .
# Or if you prefer SSH:
# sudo git clone git@github.com:kakkadpriyansh/PRNexGen.git .

# Install dependencies
npm install

# Build the application
npm run build

# Set proper permissions
sudo chown -R $USER:$USER /var/www/prnexgen
```

## Step 3: Configure PM2

```bash
# Start application with PM2
pm2 start npm --name "prnexgen" -- start

# Save PM2 process list
pm2 save

# Setup PM2 to start on boot
pm2 startup
# Run the command that PM2 outputs

# Check status
pm2 status
pm2 logs prnexgen
```

## Step 4: Configure Nginx

```bash
# Create Nginx configuration
sudo nano /etc/nginx/sites-available/prnexgen.in
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name prnexgen.in www.prnexgen.in;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/prnexgen.in /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

## Step 5: Setup SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d prnexgen.in -d www.prnexgen.in

# Follow prompts and enter email when asked
# Choose option 2 to redirect HTTP to HTTPS

# Test auto-renewal
sudo certbot renew --dry-run
```

## Step 6: Configure Firewall

```bash
# Allow SSH, HTTP, and HTTPS
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

## Useful PM2 Commands

```bash
# View logs
pm2 logs prnexgen

# Restart application
pm2 restart prnexgen

# Stop application
pm2 stop prnexgen

# Delete from PM2
pm2 delete prnexgen

# Monitor
pm2 monit

# List all processes
pm2 list
```

## Updating the Application

```bash
cd /var/www/prnexgen

# Pull latest changes from GitHub
git pull origin main

# Install any new dependencies
npm install

# Rebuild
npm run build

# Restart with PM2
pm2 restart prnexgen
```

## Troubleshooting

### Check if app is running
```bash
pm2 status
curl http://localhost:3001
```

### Check Nginx status
```bash
sudo systemctl status nginx
sudo nginx -t
```

### View logs
```bash
pm2 logs prnexgen --lines 100
sudo tail -f /var/log/nginx/error.log
```

### Restart services
```bash
pm2 restart prnexgen
sudo systemctl restart nginx
```

## Environment Variables (Optional)

If you need environment variables:

```bash
# Create .env file
nano /var/www/prnexgen/.env
```

Add your variables:
```
NEXT_PUBLIC_SITE_URL=https://prnexgen.in
```

Then restart:
```bash
pm2 restart prnexgen
```

## Backup Strategy

```bash
# Backup application
sudo tar -czf prnexgen-backup-$(date +%Y%m%d).tar.gz /var/www/prnexgen

# Backup PM2 config
pm2 save
```

## Performance Optimization

```bash
# Enable Nginx gzip compression
sudo nano /etc/nginx/nginx.conf
```

Add inside `http` block:
```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;
```

```bash
sudo systemctl restart nginx
```

---

Your site should now be live at https://prnexgen.in 🚀
