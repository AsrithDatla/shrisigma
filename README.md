# Shri Sigma Hospitals - Modern Website

A modern, responsive website for Shri Sigma Hospitals built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Performance Optimized**: Next.js Image optimization, code splitting
- **SEO Friendly**: Proper meta tags, structured data ready
- **Accessibility**: ARIA labels, keyboard navigation, screen reader friendly
- **Interactive Components**: 
  - Hero banner carousel
  - Contact form with validation
  - Doctor profiles slider
  - Patient testimonials
  - Insurance partners slider
  - Sticky contact icons

## Components

- `Header` - Navigation with dropdown menus
- `HeroBanner` - Auto-rotating image carousel
- `ContactForm` - Lead generation form
- `AboutSection` - Hospital information with stats
- `ServicesSection` - Medical specialties grid
- `DoctorsSection` - Doctor profiles with slider
- `TestimonialsSection` - Patient reviews carousel
- `InsuranceSlider` - Insurance partners display
- `Footer` - Site links and contact info
- `StickyIcons` - Floating call/WhatsApp buttons
- `GoogleAnalytics` - Tracking scripts

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
sigma/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── HeroBanner.tsx
│       ├── ContactForm.tsx
│       ├── AboutSection.tsx
│       ├── ServicesSection.tsx
│       ├── DoctorsSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── InsuranceSlider.tsx
│       ├── Footer.tsx
│       ├── StickyIcons.tsx
│       └── GoogleAnalytics.tsx
├── public/
│   └── images/
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Customization

### Colors
The hospital brand colors are defined in `tailwind.config.js`:
- `hospital-blue`: #2e2670
- `hospital-green`: #198754
- `hospital-yellow`: #fdd126
- `hospital-teal`: #10988c

### Images
Place all images in the `public/images/` directory and update the component imports accordingly.

### Content
Update the content in each component file to match your hospital's information.

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - State management and side effects
- **Next/Image** - Optimized image loading
- **Font Awesome** - Icons and symbols

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - Shri Sigma Hospitals