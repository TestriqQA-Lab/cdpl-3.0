# TechEd Pro - EdTech Website

A modern, responsive EdTech website built with Next.js 15.2.0 and Tailwind CSS, designed for software testing and data science training institutes.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Course Showcase**: Dedicated sections for Software Testing, Data Science, and AI/ML courses
- **Interactive Components**: Hover effects, smooth transitions, and micro-interactions
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Built with Next.js for optimal performance

## 🛠 Tech Stack

- **Framework**: Next.js 15.2.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Image Optimization**: Next.js Image component

## 📦 Dependencies

### Core Dependencies
- Next.js 15.2.0
- React 19.0.0
- TypeScript 5.x
- Tailwind CSS 4.x

### UI & Animation Libraries
- Lucide React (Icons)
- Framer Motion (Animations)
- React Icons
- Tailwind Merge
- Tailwindcss Animate

### Additional Features
- React Slick (Carousels)
- Swiper (Sliders)
- Typewriter Effect
- React Calendly

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Extract the project files**
   ```bash
   unzip edtech-website-complete.zip
   cd edtech-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
edtech-website/
├── public/
│   ├── images/           # Course and hero images
│   └── icons/           # Icon assets
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── about-us/    # About page
│   │   ├── blog/        # Blog section
│   │   ├── careers/     # Careers page
│   │   ├── contact-us/  # Contact page
│   │   ├── courses/     # Courses section
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Homepage
│   ├── components/      # Reusable components
│   │   ├── Header.tsx   # Navigation header
│   │   └── Footer.tsx   # Site footer
│   └── lib/            # Utility functions
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 🎨 Design Features

### Homepage Sections
1. **Hero Section**: Eye-catching gradient background with call-to-action buttons
2. **Stats Section**: Key metrics and achievements
3. **Featured Courses**: Course cards with pricing and details
4. **Why Choose Us**: Benefits and features grid
5. **Testimonials**: Student success stories with rotating carousel
6. **CTA Section**: Final call-to-action with gradient background

### Course Categories
- **Software Testing**: Manual and automated testing courses
- **Data Science**: Python, SQL, and analytics training
- **AI & Machine Learning**: Advanced AI and ML algorithms

## 🔧 Customization

### Colors
The website uses a blue and purple gradient theme. You can customize colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... more shades
  }
}
```

### Content
- Update course information in `src/app/page.tsx`
- Modify company details in `src/components/Header.tsx` and `src/components/Footer.tsx`
- Replace images in `public/images/` directory

### Styling
- Global styles: `src/app/globals.css`
- Component-specific styles: Tailwind classes in component files

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: support@techedpro.com
- Documentation: Check the Next.js and Tailwind CSS documentation
- Issues: Create an issue in the repository

## 🔄 Updates

To update dependencies:
```bash
npm update
```

To update Next.js:
```bash
npm install next@latest react@latest react-dom@latest
```

---

**Built with ❤️ using Next.js and Tailwind CSS**
