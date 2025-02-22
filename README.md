# Ananda Sai Soorisetty - Portfolio

Welcome to my personal portfolio website! This site showcases my skills, experience, and services as a Full-Stack Developer, UI/UX Designer, DevOps Engineer, and IT Consultant. Built with Angular 19 and deployed on GitHub Pages, it highlights my expertise in web development, cloud solutions, and digital marketing.

## 🌐 Live Site
[https://anandasaisoorisetty.github.io/](https://anandasaisoorisetty.github.io/)

## 📖 Overview
This portfolio is a single-page application (SPA) featuring:
- **Home**: Introduction with a profile image and call-to-action buttons.
- **About**: Details about my background and expertise.
- **Services**: Overview of my offerings (Web Development, UI/UX Design, DevOps & Cloud, Digital Marketing).
- **Experience**: Key projects and roles in UI/UX, DevOps, IT, and marketing.
- **Contact**: Buttons for WhatsApp, email, and social media (LinkedIn, GitHub, Behance) with SVG icons.
- **Ads Popup**: A portrait-oriented popup ad with a finance image, appearing on all screens with a WhatsApp contact link.

## 🛠️ Technologies Used
- **Frontend**: Angular 19, TypeScript, HTML5, CSS3
- **Styling**: Custom CSS with responsive design
- **Deployment**: GitHub Pages
- **Assets**: SVG icons (WhatsApp, Mail, LinkedIn, GitHub, Behance), custom images (`finance.jpg`, `profile.jpg`)
- **Version Control**: Git, GitHub

## 🚀 Features
- **Responsive Design**: Optimized for mobile, laptop, and TV screens.
- **Interactive Ads**: Portrait popup with a finance image (80% screen height), closable by clicking outside or a subtle close button.
- **Contact Section**: Side-by-side WhatsApp and Mail buttons (consistent size), smaller rectangular social media buttons with icons and text.
- **Accessibility**: Clean layout, high-contrast colors, and SVG icons for visual appeal.

## 📋 Setup Instructions
To run this project locally or contribute, follow these steps:

Clone the repository, install dependencies, run locally, build for production, and deploy to GitHub Pages as follows:
```bash
# Clone the Repository
git clone https://github.com/anandasaisoorisetty/anandasaisoorisetty.github.io.git
cd anandasaisoorisetty.github.io

# Install Dependencies
# Ensure you have Node.js (v20.18.0) and npm (v11.1.0) installed
npm install

# Run Locally
# Start the development server
ng serve
# Open http://localhost:4200/ in your browser

# Build for Production
# Generate the production build
ng build --configuration production --output-path dist
# Move files to the root for GitHub Pages
rm -rf assets/ 3rdpartylicenses.txt index.html main.*.js polyfills.*.js runtime.*.js styles.*.css
mv dist/* .

# Deploy to GitHub Pages
# Commit and push changes
git add .
git commit -m "Deployed latest changes"
git push origin main

📂 Project Structure
anandasaisoorisetty.github.io/
├── src/
│   ├── app/
│   │   ├── ads/                 # Ads popup component
│   │   ├── home/                # Main content (Home, About, Services, etc.)
│   │   └── ...                  # Other components (navbar, etc.)
│   ├── assets/                  # SVG icons and images
│   └── styles.css               # Global styles (footer)
├── angular.json                 # Angular configuration
├── package.json                 # Dependencies
└── README.md                    # This file

🤝 Contributing
Feel free to fork this repo, submit issues, or send pull requests with improvements!

📧 Contact
Reach out via:
💼 [LinkedIn](https://www.linkedin.com/in/anandasai/)  
📷 [Behance](https://www.behance.net/anandasaisoorisetty)  
💻 [GitHub](https://github.com/anandasaisoorisetty)  
📧 [Email](mailto:asoorisetty@gmail.com)  
📩 [WhatsApp](https://wa.me/919030444739) 

Built with 💻 by Ananda Sai Soorisetty © 2025