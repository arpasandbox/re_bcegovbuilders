# BCE Gov Builders - Construction Website

A modern, responsive construction company website built with Vite, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design** - Beautiful, professional UI with smooth animations
- 📱 **Fully Responsive** - Mobile-ready design that works on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal loading speeds
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🎯 **Complete Sections**:
  - Responsive Navbar with mobile menu
  - Full-screen Hero section
  - Services showcase
  - Past Performance portfolio
  - Certifications display
  - About Us section
  - Contact Us form
  - Footer with links

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- **Vite** - Next-generation frontend tooling
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── PastPerformance.tsx
│   ├── Certifications.tsx
│   ├── AboutUs.tsx
│   ├── ContactUs.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
└── style.css
```

## Customization

- Update colors in `tailwind.config.js`
- Modify content in each component file
- Add your own images and assets to the `public` folder
- Customize animations in component files

## License

MIT

