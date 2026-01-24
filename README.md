# Professional MERN Portfolio

A modern, professional portfolio website built with the MERN stack (MongoDB, Express, React, Node.js). Perfect for showcasing your projects, skills, and experience to potential employers and clients.

## 🎨 Features

- **Modern Design**: Clean, professional UI with dark theme and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **Project Showcase**: Display your best projects with descriptions and links
- **Skills Section**: Highlight your technical skills with progress bars
- **Contact Form**: Functional contact form to receive messages
- **Dark Theme**: Eye-friendly dark theme with gradient accents
- **Fast Performance**: Optimized for speed and SEO

## 🛠 Tech Stack

### Frontend

- React 18
- React Router v6
- Framer Motion
- React Icons
- Axios
- CSS3 with CSS Variables

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- JWT Authentication

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install server dependencies**

```bash
cd server
npm install
```

3. **Install client dependencies**

```bash
cd ../client
npm install
```

4. **Create environment variables**

```bash
# In server folder, create .env file
cd ../server
cp .env.example .env

# Edit .env with your configuration
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

## 🚀 Running the Application

### Development Mode (Concurrent - Both Frontend & Backend)

```bash
# From root directory
npm run dev
```

### Running Separately

**Backend only:**

```bash
cd server
npm run dev
```

**Frontend only:**

```bash
cd client
npm start
```

The frontend will run on `http://localhost:3000` and backend on `http://localhost:5000`

## 📁 Project Structure

```
portfolio/
├── server/
│   ├── models/              # MongoDB schemas
│   ├── routes/              # API routes
│   ├── controllers/          # Route controllers
│   ├── index.js             # Server entry point
│   ├── package.json
│   └── .env                 # Environment variables
├── client/
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── styles/          # CSS files
│   │   ├── assets/          # Images and static files
│   │   ├── App.js           # Root component
│   │   └── index.js         # React entry point
│   ├── public/
│   └── package.json
└── README.md
```

## 🎯 Customization

### Update Your Information

1. Edit [client/src/pages/Home.js](client/src/pages/Home.js) - Update your name and bio
2. Edit [client/src/components/Hero.js](client/src/components/Hero.js) - Update headline
3. Edit [client/src/pages/Projects.js](client/src/pages/Projects.js) - Add your projects
4. Edit [client/src/components/Skills.js](client/src/components/Skills.js) - Update your skills
5. Edit [client/src/components/Footer.js](client/src/components/Footer.js) - Add social links

### Update Social Links

Update all social media links in:

- [client/src/components/Navbar.js](client/src/components/Navbar.js)
- [client/src/components/Footer.js](client/src/components/Footer.js)

## 🔌 API Endpoints

### Portfolio

- `GET /api/portfolio` - Get all portfolio items
- `GET /api/portfolio/:id` - Get specific portfolio item

### Contact

- `POST /api/contact` - Submit contact form

## 🎨 Color Scheme

The portfolio uses CSS variables for easy theming:

- Primary: `#6366f1` (Indigo)
- Secondary: `#ec4899` (Pink)
- Dark Background: `#0f172a`
- Card Background: `#1e293b`

To change colors, edit the `:root` variables in [client/src/styles/index.css](client/src/styles/index.css)

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🚀 Deployment

### Deploy Frontend (Vercel/Netlify)

1. Build the frontend: `cd client && npm run build`
2. Push to GitHub
3. Connect to Vercel/Netlify and deploy

### Deploy Backend (Heroku/Railway)

1. Set up MongoDB Atlas cloud database
2. Update MONGODB_URI in environment variables
3. Deploy using your preferred platform

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

Created with ❤️ for developers who want to showcase their skills

## 🤝 Contributing

Contributions are welcome! Feel free to fork and submit pull requests.

## 📧 Contact

If you have questions or suggestions, please feel free to reach out.

---

Happy Coding! 🚀
