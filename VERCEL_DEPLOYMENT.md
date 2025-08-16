# Deploying to Vercel

## Step 1: Prepare Your Code

1. **Download your project files** from Replit:
   - Click the three dots menu in Replit
   - Select "Download as zip"
   - Extract the zip file on your computer

## Step 2: Create a GitHub Repository

1. **Go to GitHub.com** and create a new repository
2. **Upload your project** to the repository:
   - Drag and drop all your project files
   - Commit the changes

## Step 3: Deploy to Vercel

1. **Go to vercel.com** and sign up/login with your GitHub account
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure deployment settings**:
   - Framework Preset: `Vite`
   - Build Command: `vite build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## Step 4: Environment Variables (if needed)

If your portfolio uses any environment variables (like database connections), add them in Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add any required variables

## Step 5: Deploy

1. Click "Deploy"
2. Wait for the build to complete
3. Your portfolio will be live at a `.vercel.app` domain

## Custom Domain (Optional)

To use your own domain:
1. Go to project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update your domain's DNS settings as instructed

## Automatic Updates

Once connected to GitHub, Vercel will automatically redeploy your site whenever you push changes to your repository.

## Alternative: Direct Upload Method

If you don't want to use GitHub:
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

Your portfolio is now live and accessible worldwide!