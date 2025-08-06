# Shri Sigma Hospitals - Official Website

A modern, responsive website for Shri Sigma Hospitals, a premier multispecialty healthcare facility located in Madhapur, Hyderabad. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🏥 About Shri Sigma Hospitals

Shri Sigma Hospitals is a leading healthcare institution providing world-class medical services with state-of-the-art technology and experienced specialists across multiple medical specialties.

**Location:** Beside Karachi Bakery, Madhapur, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana - 500081

**Contact:** 
- Main: +91 88582 34345
- Emergency/Appointments: +91 89777 63308
- Email: info@shrisigmahospitals.com

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Inter & Poppins (Google Fonts)
- **Analytics:** Google Analytics & Google Tag Manager
- **Deployment:** Vercel (recommended)

## 📋 Features

### 🎨 Modern Design
- Responsive design optimized for all devices
- Professional healthcare-focused UI/UX
- Smooth animations and transitions
- Accessibility compliant (WCAG guidelines)

### 🏥 Medical Specialties (17 Specialties)
- Cardiology
- Orthopedics  
- Gynecology
- Neuroscience
- Urology
- Piles Treatment (Laser Proctology)
- General Surgery
- General Medicine
- Critical Care
- ENT
- Pulmonology
- Diabetes Treatment
- Plastic Surgery
- Physiotherapy
- Nutrition & Diet
- Laser Surgery

### 📱 Key Pages
- **Homepage** - Hero banner, services overview, about section
- **About Hospital** - Detailed hospital information
- **Specialties** - Individual pages for each medical specialty
- **Doctors** - Medical team profiles
- **Patient Testimonials** - Real Google reviews
- **Healthcare Blog** - Medical articles and health tips
- **Contact Us** - Contact forms and location details
- **Career Opportunities** - Job applications
- **Legal Pages** - Terms & Conditions, Privacy Policy

### 🔧 Technical Features
- **SEO Optimized** - Meta tags, structured data, sitemap
- **Performance Optimized** - Image optimization, lazy loading
- **Mobile-First** - Responsive design for all screen sizes
- **Form Integration** - Contact forms with backend integration
- **Google Analytics** - Comprehensive tracking setup
- **Insurance Partners** - Slider showcasing accepted insurance

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone <repository-url>
cd shri-sigma-hospitals
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory:
```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=https://shrisigmahospitals.com
```

### 4. Run Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### 5. Build for Production
```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📁 Project Structure

```
shri-sigma-hospitals/
├── public/
│   ├── images/           # Static images and assets
│   └── favicon.ico       # Site favicon
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Homepage
│   │   ├── about-hospital-madhapur-hyderabad/
│   │   ├── specialities/
│   │   ├── best-doctors-madhapur-hyderabad/
│   │   ├── patient-testimonials-madhapur-hyderabad/
│   │   ├── healthcare-blog-hyderabad/
│   │   ├── contact-us-madhapur-hyderabad/
│   │   ├── career-opportunities-hyderabad/
│   │   ├── terms-and-conditions/
│   │   └── privacy-policy/
│   └── components/      # Reusable React components
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── HeroBanner.tsx
│       ├── ContactForm.tsx
│       ├── TestimonialsSection.tsx
│       ├── ServicesSection.tsx
│       ├── AboutSection.tsx
│       ├── DoctorsSection.tsx
│       ├── FAQSection.tsx
│       ├── InsuranceSlider.tsx
│       ├── SpecialtyPageTemplate.tsx
│       ├── StickyIcons.tsx
│       ├── BackToTop.tsx
│       └── GoogleAnalytics.tsx
├── tailwind.config.js   # Tailwind CSS configuration
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🎨 Design System

### Colors
- **Primary Blue:** #1e40af (hospital-blue)
- **Primary Green:** #059669 (hospital-green)  
- **Accent Yellow:** #f59e0b (hospital-yellow)
- **Accent Teal:** #0d9488 (hospital-teal)
- **Gray Scale:** Custom gray palette for text and backgrounds

### Typography
- **Display Font:** Poppins (headings)
- **Body Font:** Inter (body text)
- **Responsive sizing:** Mobile-first approach

### Components
- **Buttons:** Multiple variants (primary, secondary, outline)
- **Cards:** Soft shadows with hover effects
- **Forms:** Modern styling with validation states
- **Navigation:** Responsive with mobile menu

## 📱 Mobile Optimization

The website is fully optimized for mobile devices with:
- **Responsive Design** - Works on all screen sizes
- **Touch-Friendly** - Optimized for touch interactions
- **Fast Loading** - Optimized images and code splitting
- **Mobile Navigation** - Collapsible menu for mobile
- **Form Optimization** - Mobile-friendly form inputs

## 🔍 SEO Features

- **Meta Tags** - Comprehensive meta descriptions and titles
- **Structured Data** - Schema markup for healthcare
- **Sitemap** - XML sitemap for search engines
- **Open Graph** - Social media sharing optimization
- **Page Speed** - Optimized for Core Web Vitals
- **Mobile-First** - Mobile-friendly design

## 📊 Analytics & Tracking

- **Google Analytics 4** - Comprehensive user tracking
- **Google Tag Manager** - Tag management system
- **Conversion Tracking** - Form submissions and calls
- **Performance Monitoring** - Core Web Vitals tracking

## 🔧 Form Integration

All forms are integrated with the existing backend:
- **Contact Forms** - Homepage and contact page
- **Career Applications** - Job application form
- **Appointment Booking** - Specialty page forms
- **Newsletter Signup** - Email subscription

### Form Endpoints
- Homepage Form: `https://shrisigmahospitals.com/inc/homepage_form`
- Contact Form: `https://shrisigmahospitals.com/inc/contact_form`
- Career Form: `https://shrisigmahospitals.com/inc/career_form`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `out` folder to your web server
3. Configure your web server to serve the static files

## 🧪 Testing

### Run Tests
```bash
npm run test
# or
yarn test
```

### Lighthouse Audit
Run Lighthouse audits to check:
- Performance
- Accessibility  
- Best Practices
- SEO

## 📈 Performance Optimization

- **Image Optimization** - Next.js Image component with WebP
- **Code Splitting** - Automatic code splitting by Next.js
- **Lazy Loading** - Components and images load on demand
- **Caching** - Proper caching headers for static assets
- **Minification** - CSS and JavaScript minification

## 🔒 Security

- **HTTPS** - SSL certificate required
- **Content Security Policy** - CSP headers recommended
- **Form Validation** - Client and server-side validation
- **Environment Variables** - Sensitive data in environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📞 Support

For technical support or questions:
- **Email:** info@shrisigmahospitals.com
- **Phone:** +91 89777 63308

## 📄 License

This project is proprietary and confidential. All rights reserved by Shri Sigma Hospitals.

---

**Built with ❤️ for better healthcare accessibility**

*Last Updated: February 2025*