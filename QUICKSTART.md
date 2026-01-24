# Quick Start Guide

## 🚀 Get Your Portfolio Running in 5 Minutes

### Step 1: Install Dependencies

```bash
# Navigate to the project root
cd Portfolio

# Install root dependencies
npm install

# Install server dependencies
cd server && npm install && cd ..

# Install client dependencies
cd client && npm install && cd ..
```

### Step 2: Set Up Environment Variables

```bash
# Copy the example env file
cp server/.env.example server/.env

# Edit server/.env if needed (default values work for local development)
```

### Step 3: Start the Development Server

```bash
# From the root directory, run both frontend and backend
npm run dev
```

This will start:

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

## 📝 Next Steps After Installation

### 1. **Update Your Information**

- Edit `client/src/pages/Home.js` - Update your name and headline
- Edit `client/src/pages/Projects.js` - Add your actual projects
- Edit `client/src/components/Skills.js` - Update your skills
- Edit `client/src/components/Footer.js` - Add your social links

### 2. **Add Your Projects**

Replace the mock projects in `Projects.js` with your own:

```javascript
{
  id: 1,
  title: 'Your Project Title',
  description: 'Your project description',
  image: 'your-image-url',
  tags: ['React', 'Node.js', 'MongoDB'],
  github: 'https://github.com/yourusername/project',
  demo: 'https://project-live-link.com',
}
```

### 3. **Customize Colors** (Optional)

Edit `client/src/styles/index.css` to change the color scheme:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #ec4899;
  /* ... other colors ... */
}
```

### 4. **Add Your Photo** (Optional)

- Add your profile image to `client/src/assets/`
- Import and use it in the Hero component

## 🔗 Important Files to Edit

| File                              | Purpose               |
| --------------------------------- | --------------------- |
| `client/src/pages/Home.js`        | Home page content     |
| `client/src/pages/Projects.js`    | Portfolio projects    |
| `client/src/components/Skills.js` | Your skills           |
| `client/src/components/Hero.js`   | Hero section          |
| `client/src/components/Footer.js` | Footer & social links |
| `README.md`                       | Project documentation |

## 🚀 Deployment Guide

### Frontend (Vercel/Netlify)

**Vercel:**

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy

**Netlify:**

1. Build: `cd client && npm run build`
2. Deploy the `build` folder to Netlify

### Backend (Railway/Render)

1. Set up MongoDB Atlas (cloud database)
2. Update `.env` with MongoDB connection string
3. Deploy to Railway, Render, or Heroku

## 💡 Tips

- Use placeholder images from [unsplash.com](https://unsplash.com) or [placeholder.com](https://placeholder.com)
- Keep descriptions concise and impactful
- Highlight your best projects first
- Add meaningful tags to projects
- Test on mobile devices before deploying

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill the process using port 3000 or 5000
# Windows PowerShell:
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process

# macOS/Linux:
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9
```

### Dependencies Not Installing

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Express Documentation](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Framer Motion](https://www.framer.com/motion/)

## 🎉 You're Ready!

Your professional portfolio is now ready. Customize it with your information, add your projects, and deploy it to showcase your skills!

---

**Need help?** Check the main [README.md](README.md) for more detailed information.
