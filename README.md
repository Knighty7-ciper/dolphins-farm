# Dolphins Farm

A modern, responsive static website for Dolphins Farm - a sustainable agricultural brand. Built with React, Vite, and Material UI (Material Design 3).

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Material UI](https://img.shields.io/badge/MUI-6-007FFF?logo=mui)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)

## Features

- **Modern Tech Stack**: React 18 + Vite + TypeScript + Material UI v6
- **Material Design 3**: Google's latest design system with custom color palette
- **Atomic Design Architecture**: Scalable component organization (atoms, molecules, organisms)
- **Responsive Design**: Mobile-first approach with persistent navigation
- **GitHub Pages Ready**: Automated deployment via GitHub Actions
- **SEO Optimized**: Meta tags, semantic HTML, and accessibility features

## Design System

### Colors (Google Palette)
- **Primary**: #4285F4 (Blue)
- **Secondary**: #EA4335 (Red)
- **Success**: #34A853 (Green)
- **Warning**: #FBBC05 (Yellow)

### Typography
- Font Family: Roboto (via Google Fonts)
- Hierarchical heading system with consistent weights

## Project Structure

```
dolphins-farm/
├── public/
├── src/
│   ├── components/
│   │   ├── atoms/          # Basic UI elements (Button, Card, Logo, Badge)
│   │   ├── molecules/      # Combinations of atoms (NavItem, StatCard, CropCard, TourCard)
│   │   ├── organisms/      # Complex components (AppBar, Sidebar, Hero)
│   │   └── templates/       # Page layouts (PageLayout)
│   ├── pages/              # Route pages (Home, Crops, Tours)
│   ├── theme/              # MUI theme configuration
│   ├── App.tsx             # Main application component
│   └── main.tsx           # Entry point
├── .github/
│   └── workflows/         # CI/CD configuration
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Deployment

The project is configured for automatic deployment to GitHub Pages via GitHub Actions.

1. Push to the `main` branch
2. The workflow will automatically build and deploy

To manually deploy:

```bash
npm run deploy
```

## Pages

- **Home**: Hero section, stats, featured crops, and call-to-action
- **Crops**: Browse all organic produce with category filtering
- **Tours**: View and book farm tour experiences

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License
