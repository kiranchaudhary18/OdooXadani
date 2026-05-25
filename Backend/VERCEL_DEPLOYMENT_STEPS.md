# Vercel Deployment Checklist ✅

## Step 1: MongoDB Atlas Configuration
**This is critical for deployment to work!**

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign in to your account
3. Go to **Network Access** section
4. Click **Add IP Address**
5. Select **Allow Access from Anywhere** (0.0.0.0/0)
6. Confirm

## Step 2: Vercel Environment Variables

1. Go to your Vercel project: https://vercel.com/dashboard
2. Find your Backend project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

```
MONGO_URI=mongodb+srv://kiranchaudharycg_db_user:FPkrkL9aTZcPnZjy@cluster0.ioo0r6p.mongodb.net/odooxadani
JWT_SECRET=gearguard_production_secret_key_secure_2024
NODE_ENV=production
```

5. Click **Save**

## Step 3: Redeploy Backend

1. Go to **Deployments** tab
2. Find the latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete (green checkmark)

## Step 4: Update Frontend

Update `maintenance-frontend/.env`:
```
VITE_API_URL=https://your-vercel-backend-url/api
```

Replace `your-vercel-backend-url` with your actual Vercel URL

## Step 5: Test Registration

1. Go to your frontend URL
2. Try to sign up with test email
3. If you get error, check browser console for detailed error message

## Troubleshooting

### Still getting 500 error?

Check these:
1. ✅ MONGO_URI environment variable is set in Vercel
2. ✅ MongoDB Atlas allows access from 0.0.0.0/0
3. ✅ Database name is exactly "odooxadani"
4. ✅ Vercel deployment is successful (green checkmark)

### Check Backend Logs in Vercel
1. Go to Vercel Dashboard
2. Select your Backend project
3. Go to **Deployments**
4. Click on the latest deployment
5. Go to **Function Logs** tab
6. Try registration again and watch the logs

