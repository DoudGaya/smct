# 🏗️ Smart City Tech - Comprehensive Build Prompt

Based on your inspiration images and content structure, here's a professional, comprehensive prompt to build your enterprise platform:

---

## **Project Overview**

Build a **professional, enterprise-grade website** for an integrated services company specializing in **Property Development, Engineering (Solar Energy), ICT Solutions, and Agro-Allied Services**. The design should be sophisticated, trustworthy, and optimized for B2B inquiries while maintaining visual inspiration from premium real estate platforms (Properto, Apartments).

### **Design Philosophy**
- **Clean, Professional Minimalism** - No excessive colors or emojis
- **Strategic Use of Icons** - Radix-UI icons only for enhanced UX
- **Dark & Light Theme Support** - Seamless switching with green accent color
- **Rich Typography** - Use serif fonts for headings, sans-serif for body
- **Generous Whitespace** - Let content breathe
- **Accessibility-First** - WCAG compliant, high contrast ratios

---

## **Technology Stack**

```
Frontend: Next.js 15+ (App Router)
Styling: Tailwind CSS + shadcn/ui components
Icons: Radix-UI Icons
Theme: Next-themes with localStorage persistence
Forms: React Hook Form + Zod validation
CMS-Ready: Structure for future content management
Analytics-Ready: Google Analytics integration points
```

---

## **Global Design System**

### **Color Palette**
| Element | Light Mode | Dark Mode |
|---------|-----------|----------|
| **Primary/Accent** | Green (oklch(0.65 0.22 142.5)) | Bright Green (oklch(0.72 0.22 142.5)) |
| **Background** | `#FFFFFF` | `#0F172A` (Slate-950) |
| **Foreground** | `#0F172A` | `#F1F5F9` |
| **Secondary** | `#F1F5F9` | `#1E293B` |
| **Muted** | `#94A3B8` | `#64748B` |
| **Borders** | `#E2E8F0` | `#334155` |

### **Typography**
- **Headings (H1-H4):** Serif font (existing Geist setup)
- **Body Text:** Sans-serif, 16px base
- **Navigation:** 14px, font-medium
- **Accent Text:** 12px uppercase tracking-wider for labels

### **Spacing & Layout**
- **Container:** Max-width 1400px with 6rem padding (mobile: 1.5rem)
- **Section Spacing:** 6rem vertical (mobile: 3rem)
- **Grid System:** 12-column responsive grid

---

## **Page Structure & Components**

### **1. Navigation Bar (Global)**

```tsx
// Components to create:
- Header with logo, nav links, CTA button
- Links: Home, About, Services, Contact
- Right section: Theme Switcher + Language Selector (optional)
- Mobile: Hamburger menu with slide-out nav
- Sticky header on scroll with subtle shadow
```

### **2. Home Page (`/`)**

#### **Hero Section**
```
- Full viewport height (80vh minimum)
- Split layout (40% text left, 60% visual right)
- Headline: "Integrated Solutions for a Modern World"
- Subheadline: "Your trusted partner in Property, Technology, Engineering, and Sustainable Enterprise."
- CTA Buttons: "Explore Our Services" (primary), "Learn More" (secondary)
- Subtle animated background gradient or geometric patterns
- Email capture form (optional secondary CTA)
```

#### **Three-Service Cards Section**
```
Grid layout (3 columns, responsive to 1-2 columns)
Cards should show:
  1. Property & Design
     - Icon: Building/House (Radix-UI)
     - Description: ~60 characters
     - Link: "/services#property"
  
  2. Engineering & Tech
     - Icon: Zap/Sun (Solar energy)
     - Description
     - Link: "/services#engineering"
  
  3. Sustainable Business
     - Icon: Leaf/Sprout
     - Description
     - Link: "/services#agro"

Card Design:
- Minimum height: 200px
- Hover: Subtle lift effect + border color change to accent
- Icon size: 48px
- Text hierarchy: Title (20px), description (14px)
```

#### **Value Proposition Section**
```
- Headline: "Why Choose Our Integrated Approach?"
- 4-5 key benefits (max 80 chars each)
- Layout: 2x2 or 1x4 grid
- Icon + Text per item
- Use checkmark, shield, or lightning icons
```

#### **Statistics/Metrics Section** (Optional)
```
- Years in Business
- Projects Completed
- Client Satisfaction Rate
- Team Members

Animation: Numbers count-up on scroll into view
```

#### **Testimonials/Trust Section**
```
- 2-3 client quotes
- Client name + company
- Carousel or static grid
- Star ratings (optional)
```

#### **CTA Banner Section**
```
- Full-width banner
- Dark background with accent accent
- Headline + subheadline
- Single CTA button with arrow icon
- Link to "/contact"
```

---

### **3. About Us Page (`/about`)**

#### **Hero Section (Smaller)**
```
- Headline: "Vision, Expertise, and Comprehensive Scope"
- Breadcrumb: Home > About
- Hero height: 50vh
```

#### **Mission & Vision Cards**
```
Side-by-side layout (2 columns):
- Mission card (left): Headline, icon, description
- Vision card (right): Headline, icon, description
- Cards have accent border-left
- Responsive to single column mobile
```

#### **Core Values Section**
```
- Grid of 4-6 value cards
- Each: Icon (48px) + Title + Description (max 100 chars)
- Light background on cards
```

#### **Operational Sectors**
```
Numbered section (1-4):
  1. Real Estate & Infrastructure
  2. Engineering & Security
  3. Information Technology
  4. Sustainable Ventures

Layout: Left-aligned text with icon on right (alternating)
Each item: Icon (40px) + Title + 2-3 bullet points
```

#### **Team Section** (Optional)
```
- "Meet Our Leadership"
- Grid of team members (3-4 per row)
- Image placeholder + name + title + brief bio
```

---

### **4. Services Page (`/services`)**

#### **Services Hero**
```
- Headline: "Comprehensive Professional Services"
- Tagline: "From property to technology to sustainability"
- Filter/Tab System (optional): "All / Property / Engineering / ICT / Agro-Allied"
```

#### **Service Category Sections** (Repeating Pattern)

**Layout Option A (Alternating):**
```
Row 1 (Odd):
- Left: Image/Icon (40% width)
- Right: Content (60% width)

Row 2 (Even):
- Left: Content (60% width)
- Right: Image/Icon (40% width)

Spacing: 4rem between rows
```

**Service Card Content:**
```
For each service:
- Category icon (64px, accent color)
- Title (H2)
- Description (max 300 chars)
- 3-5 bullet points (key offerings)
- "Learn More" button or CTA link
- Optional: "Related Services" links to other services
```

**Services to Create:**
1. Real Estate & Property Management
2. Interior & Exterior Design & Furnishing
3. Engineering, Energy & Security Solutions
4. Telecommunications & ICT Services
5. Commercial Agency & Sales
6. Agro-Allied Services

#### **Services Comparison Table** (Optional)
```
- Columns: Service Type, Key Features, Scope
- Sortable/Searchable
- Mobile: Collapse to cards
```

---

### **5. Contact Us Page (`/contact`)**

#### **Hero Section**
```
- Headline: "Partner With Us for Your Next Project"
- Tagline: "Let's build integrated solutions together"
```

#### **Two-Column Layout**
```
Left Column (40%):
- Contact Information
  * Address: [Placeholder]
  * Phone: [Placeholder] (clickable tel: link)
  * Email: [Placeholder] (clickable mailto: link)
  * Hours: [Placeholder]
- Social Links (LinkedIn, Twitter, etc.) with Radix-UI icons
- Map embed (Google Maps)

Right Column (60%):
- Contact Form
```

#### **Contact Form**
```
Fields:
- Full Name (required, text input)
- Email (required, email input with validation)
- Phone Number (optional, tel input)
- Company Name (optional)
- Subject of Inquiry (required, select dropdown)
  Options: "Property Services", "Engineering Solutions", 
           "ICT Services", "Agro-Allied", "General Inquiry", "Partnership"
- Message (required, textarea, min 20 chars)
- Checkbox: "I agree to privacy policy"
- Submit button

Validation:
- Real-time field validation
- Success toast/confirmation message
- Email notification to admin
- User receives confirmation email

Design:
- Clean, minimalist form
- Focus states with accent color border
- Disabled state on submit to prevent double-submit
- Loading state with spinner
```

#### **Privacy & Trust Section (Below Form)**
```
- Small text: "Your information is kept confidential..."
- Link to Privacy Policy
```

---

## **Reusable Components** (shadcn/ui based)

```
✓ Button (variants: primary, secondary, ghost, outline)
✓ Input (text, email, tel, textarea)
✓ Card
✓ Badge
✓ Separator
✓ Tabs
✓ Dropdown Menu
✓ Dialog/Modal
✓ Toast/Notification
✓ Checkbox
✓ Select
✓ Form (React Hook Form integration)
✓ Breadcrumb
✓ Hero Section (custom)
✓ Feature Card (custom)
✓ Service Section (custom)
✓ CTA Banner (custom)
✓ Footer (custom)
```

---

## **Global Components**

### **Header/Navigation**
```tsx
- Logo + Brand name on left
- Nav links: Home, About, Services, Contact
- Right: Theme switcher + Contact CTA button
- Responsive: Mobile hamburger menu
- Sticky on scroll with subtle shadow/border-bottom
- Active link styling with accent underline
```

### **Footer**
```tsx
- Footer content section:
  * Company name + brief tagline
  * Quick links: Home, About, Services, Contact
  * Legal: Privacy Policy, Terms & Conditions
  * Social icons (Radix-UI icons)
  * Copyright notice
  * Email subscription prompt (optional)

- Background: Subtle dark gradient or solid secondary color
- Text: Muted color for secondary content
- Responsive: Stack vertically on mobile
```

### **Breadcrumb Navigation**
```tsx
- Show on all non-home pages
- Format: Home > [Section] > [Page]
- Active page: Not clickable, styled differently
- Icons optional (use Radix-UI ChevronRight)
```

---

## **Animations & Interactions**

### **Entrance Animations**
- **Fade-in on scroll:** Sections fade in as they enter viewport
- **Slide-up:** Service cards slide up with stagger effect
- **Number count-up:** Statistics animate from 0 to final value
- **Duration:** 600-800ms, easing: ease-out

### **Interactive Hover States**
- **Links:** Accent color + underline slide
- **Buttons:** Smooth background color transition + slight scale
- **Cards:** Subtle lift (translate-y: -2px) + shadow increase
- **Icons:** Color change to accent on hover

### **Form Interactions**
- **Label animation:** Slide up and scale down on focus
- **Error state:** Shake animation + red border + error message
- **Success state:** Checkmark animation + success toast

---

## **SEO & Meta Tags**

For each page, implement:
```tsx
- Unique title tags (50-60 chars)
- Meta descriptions (150-160 chars)
- Open Graph tags (og:title, og:description, og:image)
- Twitter Card tags
- Canonical URLs
- Structured data (schema.org for Organization)
- Sitemap generation
- Robots.txt configuration
```

---

## **Performance Targets**

- **Lighthouse Score:** 90+
- **Core Web Vitals:** All green
- **Image Optimization:** Next.js Image component + WebP
- **Font Loading:** System fonts + Google Fonts with font-display: swap
- **Bundle Size:** Keep under 100KB initial JS

---

## **Folder Structure**

```
smartcity/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                 (Home)
│   ├── providers.tsx            (Theme Provider)
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── components/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── theme-switcher.tsx
│   │   ├── hero-section.tsx
│   │   ├── feature-card.tsx
│   │   ├── service-section.tsx
│   │   ├── cta-banner.tsx
│   │   └── ...
│   ├── globals.css
│   └── layout.css
├── public/
│   ├── images/
│   └── icons/
├── lib/
│   ├── cn.ts                   (classname utility)
│   └── ...
├── components/
│   └── ui/                      (shadcn/ui components)
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## **Next Steps**

1. **Create Layout Components** - Header, Footer, Breadcrumb
2. **Build Home Page** - Hero, services cards, CTAs
3. **Build About Page** - Mission/vision, sectors, values
4. **Build Services Page** - 6 service sections with rich content
5. **Build Contact Page** - Form with validation, map, info
6. **Add Animations** - Scroll triggers, hover effects
7. **SEO Optimization** - Meta tags, structured data, sitemap
8. **Testing & Optimization** - Lighthouse, accessibility, performance

---

This comprehensive prompt maintains **professional sophistication** while being **inspirational and conversion-focused**. Ready to start building? 🚀
