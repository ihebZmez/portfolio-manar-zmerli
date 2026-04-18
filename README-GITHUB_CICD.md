Perfect! Let’s go step by step to set up your Invoice project with GHCR and GitHub Actions for full CI/CD with Docker. I’ll make it exact and ready to use.

Step 0 — Prerequisites

You already have a GitHub repo:
https://github.com/ihebZm/invoce_C_Fac_version4.git

You have a production VM ready with Docker and Docker Compose.

You have access to secrets: SSH key, server IP, etc.

Step 1 — Create a Personal Access Token for GHCR

Go to GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic) → Generate new token

Scopes:

write:packages

read:packages

repo (so it can read private repos if needed)

Copy the token — we will save it as a secret in the repo.

Step 2 — Add GitHub Secrets for CI/CD

Go to your repo → Settings → Secrets and Variables → Actions → New repository secret

Add these secrets:

Name Value
GHCR_TOKEN the token you just generated
SERVER_IP your production VM IP
SERVER_USER ubuntu (or your server user)
SERVER_SSH_KEY private key for SSH login

Create .github/workflows/deploy.yml

✅ This will automatically:

Build a Docker image for your project

Push it privately to GHCR

SSH into your server

Pull the latest image

Restart your container

Run migrations safely

Step 6 — Test Locally (Optional)

For local testing:

docker build -t invoce-local:latest .
docker run -p 8848:9000 -v $(pwd):/var/www/html invoce-local:latest
