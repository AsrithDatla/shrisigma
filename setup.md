# Setup Instructions

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

1. **Navigate to the project directory:**
```bash
cd sigma
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create environment file (optional):**
```bash
cp .env.example .env.local
```

4. **Start development server:**
```bash
npm run dev
```

5. **Open in browser:**
Visit `http://localhost:3000`

## Required Images

Make sure to add these images to the `public/images/` directory:

### Logo and Branding
- `new-logo.webp` - Main hospital logo
- `brand1.webp` - Brand image
- `fav.ico` - Favicon
- `footer-logo.png` - Footer logo

### Banner Images
- `home/knee-bannerr.jpg` - Desktop knee banner
- `home/knee-banner.jpg` - Mobile knee banner  
- `home/piles-banner.jpg` - Piles treatment banner
- `home/24by7.jpg` - 24/7 services banner

### Service Images
- `services/piles-treatment.jpg`
- `services/cardiology.jpg`
- `services/orthopedics.jpg`
- `services/gynecology.jpg`
- `services/neuroscience.jpg`
- `services/urology.jpg`

### Service Icons
- `services/piles-icon.svg`
- `services/cardiology-icon.svg`
- `services/orthopedics-icon.svg`
- `services/gynecology-icon.svg`
- `services/neuroscience-icon.svg`
- `services/urology-icon.svg`

### Doctor Images
- `doctors/dr-rajesh-kumar.jpg`
- `doctors/dr-priya-sharma.jpg`
- `doctors/dr-anil-reddy.jpg`
- `doctors/dr-sunitha-rao.jpg`
- `doctors/dr-vikram-singh.jpg`
- `doctors/dr-kavitha-menon.jpg`

### Testimonial Images
- `testimonials/patient-1.jpg`
- `testimonials/patient-2.jpg`
- `testimonials/patient-3.jpg`
- `testimonials/patient-4.jpg`

### Insurance Cards
- `Cards/FHPL.png`
- `Cards/Health India TPA.png`
- `Cards/Manipal Cigna.png`
- `Cards/Medi Assist.png`
- `Cards/National Insurance.png`
- `Cards/Star Health.png`
- `Cards/ICICI Lombard.png`
- `Cards/HDFC ERGO.png`

### Other Images
- `about-hospital.jpg` - About section image
- `stars.png` - Rating stars
- `lasik/SVG/Asset 6.svg` - Phone icon

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Deployment

The project is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Traditional hosting with Node.js support

## Troubleshooting

### Common Issues:

1. **TypeScript errors**: Run `npm install` to ensure all dependencies are installed
2. **Image not loading**: Check if images exist in `public/images/` directory
3. **Styling issues**: Ensure Tailwind CSS is properly configured
4. **Build errors**: Check for any missing dependencies or syntax errors

### Getting Help:
- Check the console for error messages
- Ensure all required images are in place
- Verify Node.js version compatibility