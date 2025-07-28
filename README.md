# Personal Website - Full-Stack Developer Portfolio

A clean, modern personal website built with Next.js 14, TypeScript, and Tailwind CSS. Features a minimalist design inspired by Uber's aesthetic with smooth animations and responsive layout.

## 🚀 Features

- **Modern Design**: Clean, minimalist UI with professional typography
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Subtle animations using Framer Motion
- **Dark/Light Theme**: Clean design with proper contrast
- **SEO Optimized**: Meta tags and proper semantic HTML
- **Performance**: Optimized for speed with Next.js 14
- **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter & Poppins (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update your personal details in the following files:
- `app/layout.tsx` - Meta tags and site title
- `components/Hero.tsx` - Hero section content
- `components/About.tsx` - About section content
- `components/Contact.tsx` - Contact information
- `components/Footer.tsx` - Footer links and social media

### Projects
Edit the projects array in `components/Projects.tsx` to showcase your own work:
```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description...",
    tech: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/username/project",
    featured: true
  },
  // Add more projects...
]
```

### Skills
Update your skills in `components/Skills.tsx`:
```typescript
const skillCategories = [
  {
    title: "Frontend",
    skills: ["Your", "Frontend", "Skills"]
  },
  // Update other categories...
]
```

### Colors and Styling
Customize the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#0ea5e9',
    // Update colors...
  }
}
```

## 📱 Sections

1. **Hero** - Introduction with call-to-action buttons
2. **About** - Personal introduction and highlights
3. **Skills** - Technical skills organized by category
4. **Projects** - Portfolio showcase with featured projects
5. **Contact** - Contact form and information
6. **Footer** - Social links and copyright

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
```bash
npm run build
npm start
```

## 📄 Environment Variables

Create a `.env.local` file for any environment variables:
```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## 🎯 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with Next.js automatic code splitting

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [hello@yourname.com](mailto:hello@yourname.com)

Project Link: [https://github.com/username/personal-website](https://github.com/username/personal-website)

---

Made with ❤️ using Next.js and Tailwind CSS # personal-website
# personal-website
