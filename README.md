# DeployD

DeployD is a self-hosted deployment platform for frontend apps. Paste a public Git repository URL, and it clones the repo, runs the install and build steps, stores the output, and serves it on a subdomain.

## Services

| Folder | What it does | Port |
|---|---|---|
| `frontend/` | React dashboard | 5173 |
| `uploadService/` | Accepts deploy requests, clones and uploads the repo, queues the job | 3000 |
| `deployService/` | Worker that runs `npm install` / `npm run build` and uploads the build output | — |
| `reqHandler/` | Serves deployed sites by subdomain | 3001 |

## Requirements

- Node.js 20+
- Redis running at `redis://127.0.0.1:6379`
- An S3-compatible bucket (AWS S3 or Cloudflare R2)

## Setup

1. Start Redis:

   ```bash
   docker run -d --name deployd-redis -p 6379:6379 redis:latest
   ```

2. Create a `.env` file in `uploadService/`, `deployService/`, and `reqHandler/`:

   ```env
   ACCESS=your_access_key_id
   SECRET=your_secret_access_key
   ENDPOINT=https://your-account-id.r2.cloudflarestorage.com
   BUCKET=your-bucket
   REDIS_URL=redis://127.0.0.1:6379
   ```

3. Start each backend service:

   ```bash
   cd uploadService && npm install && npm run build && node dist/index.js   # port 3000
   cd deployService && npm install && npm run build && node dist/index.js
   cd reqHandler  && npm install && npm run build && node dist/index.js   # port 3001
   ```

4. Start the frontend:

   ```bash
   cd frontend && npm install && npm run dev   # http://localhost:5173
   ```

## Usage

Paste a public GitHub repo URL in the UI and click **Deploy Now**. When the build finishes, the site is served at `http://<id>.localhost:3001`.
