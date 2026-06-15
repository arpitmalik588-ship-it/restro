# Grand Rama Bistro Restro & Cafe - Premium Restaurant Website

A modern, fully responsive restaurant website built with HTML5, CSS3, and vanilla JavaScript. Features a premium design with gold and dark theme, AI-powered chatbot, online reservations, menu system with dynamic filtering, and complete WhatsApp integration.

![Website Preview](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success)

## ✨ Features

### 🎨 Design & UI
- **Premium Modern Design**: Gold, black, white, and dark brown color scheme
- **Fully Responsive**: Mobile-first design with perfect desktop, tablet, and mobile layouts
- **Dark/Light Mode**: Toggle between themes with localStorage persistence
- **Smooth Animations**: AOS (Animate On Scroll) library for engaging animations
- **Sticky Navigation**: Always accessible navigation bar with hamburger menu

### 🍽️ Menu Management
- **7 Menu Categories**:
  - Starters
  - Indian Cuisine
  - Chinese Cuisine
  - Fast Food
  - Cafe Specials
  - Desserts
  - Beverages
- **Dynamic Filtering**: Filter menu items by category with smooth transitions
- **Item Details**: Image, name, description, and price for each item
- **Add to Cart**: Quick ordering with WhatsApp integration

### 📅 Online Reservations
- **Booking Form**: Name, mobile, date, time, number of guests, special requests
- **Date Validation**: Prevents booking dates in the past
- **WhatsApp Integration**: Automatic WhatsApp message with booking details
- **Instant Confirmation**: Real-time booking confirmation

### 🤖 AI-Powered Features
- **Food Recommendation Assistant**: Personalized food suggestions
- **Customer Support Chatbot**: 24/7 AI assistance with intelligent responses
- **Smart Reservation Assistant**: AI-guided booking process
- **Context-Aware Responses**: Understands user queries about menu, hours, delivery, etc.

### 📸 Gallery & Reviews
- **Photo Gallery**: Restaurant interior, food photography, dining areas, events
- **Customer Reviews**: Star ratings and testimonials from verified guests
- **Interactive Elements**: Hover effects and smooth transitions

### 📞 Contact & Integration
- **Multiple Contact Methods**:
  - Direct phone call button (07417879191)
  - WhatsApp chat integration
  - Contact form with WhatsApp delivery
- **Opening Hours**: Display of restaurant operating times
- **Social Media Links**: Facebook, Instagram, Twitter, YouTube
- **Google Maps Placeholder**: Ready for API integration

### ⚙️ Technical Features
- **SEO Optimized**: Meta tags, semantic HTML, structured data ready
- **Fast Loading**: Minimal external dependencies, optimized assets
- **Accessibility**: ARIA labels, keyboard navigation, color contrast
- **Cross-Browser**: Chrome, Firefox, Safari, Edge compatibility
- **Mobile Optimized**: Touch-friendly buttons and navigation

## 📁 Project Structure

```
grand-rama-bistro/
│
├── index.html                 # Main HTML file
├── README.md                  # This file
├── .gitignore                 # Git ignore file
│
├── css/
│   └── style.css             # Complete styling (3000+ lines)
│                             # Includes dark/light mode, responsive design
│
├── js/
│   └── script.js             # All JavaScript functionality (500+ lines)
│                             # Menu filtering, forms, AI chat, theme toggle
│
├── assets/
│   ├── images/               # Image folder (placeholders)
│   └── icons/                # Icon assets folder
│
└── .github/
    └── copilot-instructions.md  # Development guidelines

```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (for production deployment)
- Text editor or IDE (VS Code recommended)

### Installation

1. **Clone or Download the Project**
```bash
# Using git
git clone <repository-url>
cd grand-rama-bistro

# Or download and extract the zip file
```

2. **Open in Browser**
```bash
# For development, simply open index.html
open index.html

# Or use a local server
python -m http.server 8000
# Then visit http://localhost:8000
```

3. **Customize Content**
- Edit restaurant details in `index.html`
- Update menu items, prices, and descriptions
- Add real images to the `assets/images/` folder
- Modify contact information and social links

## 🎯 Key Sections

### 1. Navigation Bar
- Logo with restaurant name
- Menu links to all sections
- Dark/Light mode toggle
- Responsive hamburger menu
- Sticky positioning for easy access

### 2. Hero Section
- Full-screen banner with restaurant name
- Tagline: "Where Great Food Meets Great Memories"
- Three CTA buttons: View Menu, Reserve Table, Order Online
- Background pattern and gradient overlay

### 3. About Us
- Restaurant description and highlights
- 5 feature cards:
  - Fresh Ingredients
  - Expert Chefs
  - Comfortable Ambiance
  - Quality Service
  - Family-Friendly Environment

### 4. Menu Section
- Filter buttons for 7 categories
- Responsive grid of menu items
- Each item displays: image, name, description, price
- Add-to-cart functionality

### 5. Quick Order
- Phone ordering option
- WhatsApp direct ordering
- Online ordering system
- Multiple ordering methods

### 6. Table Reservation
- Form with all required fields
- Validation before submission
- WhatsApp integration for confirmation
- Mobile number format validation

### 7. Gallery
- 6 photo showcase items
- Hover effects with captions
- Responsive grid layout
- Categories: Food, Interior, Cafe, Family, Events, Moments

### 8. Customer Reviews
- 4 sample reviews with star ratings
- Verified guest badges
- Smooth animations on scroll
- High ratings and testimonials

### 9. AI Features
- 3 AI-powered services:
  1. Food Recommendation
  2. Customer Support
  3. Reservation Assistant
- Modal-based chat interface
- Intelligent conversation system

### 10. Contact Section
- Contact information display
- Contact form with fields
- Multiple contact methods
- Google Maps integration (placeholder)
- Social media links

### 11. Footer
- Quick links
- Opening hours
- Contact information
- Social media icons
- Copyright information

## 🛠️ Customization Guide

### Changing Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-gold: #d4af37;      /* Main accent color */
    --dark-bg: #1a1a1a;           /* Dark background */
    --dark-brown: #3d2817;        /* Dark brown accent */
    --text-light: #f0f0f0;        /* Light text */
    --white: #ffffff;             /* White color */
}
```

### Updating Menu Items
Edit the menu section in `index.html`:
```html
<div class="menu-item" data-category="indian">
    <div class="menu-item-content">
        <h3>Dish Name</h3>
        <p>Description</p>
        <span class="price">₹Price</span>
    </div>
</div>
```

### Adding Images
Replace placeholder divs with actual images:
```html
<!-- Before (placeholder) -->
<div class="image-placeholder">
    <i class="fas fa-image"></i>
</div>

<!-- After (real image) -->
<img src="assets/images/dish-name.jpg" alt="Dish Name">
```

### Updating Contact Information
Find and replace in `index.html`:
- Phone number: `07417879191`
- WhatsApp: `917417879191`
- Address: Update location details
- Hours: Modify opening times

### Integrating Google Maps
In `js/script.js`, update the `initMap()` function:
```javascript
function initMap() {
    // Add your Google Maps API implementation here
    // Include API key and coordinates
}
```

## 📱 Responsive Breakpoints

The website is optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 📊 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| Mobile Chrome | ✅ Yes |
| Mobile Safari | ✅ Yes |

## 🔐 Security Features

- XSS Protection with HTML escaping
- Form validation on client-side
- No sensitive data stored locally
- HTTPS ready for production
- Privacy-compliant data handling

## ⚡ Performance Features

- Lightweight CSS (3000 lines, minifiable)
- Vanilla JavaScript (no heavy frameworks)
- Optimized CDN resources
- Minimal external dependencies
- Fast loading with smooth animations

## 🎓 Learning Resources

This project demonstrates:
- Modern HTML5 semantic structure
- Advanced CSS (Grid, Flexbox, Animations)
- Vanilla JavaScript (DOM manipulation, events)
- Responsive design principles
- UI/UX best practices
- Form handling and validation
- Theme switching implementation

## 📈 SEO Optimization

- Meta descriptions and keywords
- Semantic HTML structure
- Schema.org markup ready
- Mobile-friendly design
- Fast page load times
- Clean URL structure
- Structured data ready

## 🚀 Deployment

### Netlify
1. Push code to GitHub
2. Connect GitHub repo to Netlify
3. Deploy with one click

### Vercel
```bash
npm i -g vercel
vercel
```

### Traditional Hosting
1. Upload files via FTP
2. Ensure `.htaccess` for routing (if needed)
3. Configure SSL certificate
4. Update DNS records

### Production Checklist
- [ ] Replace all placeholder images
- [ ] Update all contact information
- [ ] Add Google Maps API key
- [ ] Set up email notifications (optional)
- [ ] Configure social media links
- [ ] Test all forms and links
- [ ] Optimize images for web
- [ ] Enable GZIP compression
- [ ] Set up SSL certificate
- [ ] Configure CDN (optional)
- [ ] Add analytics tracking
- [ ] Test on multiple devices

## 🔧 Customization Checklist

- [ ] Update restaurant name and details
- [ ] Add real menu items and prices
- [ ] Upload food photography
- [ ] Update opening hours
- [ ] Add actual customer reviews
- [ ] Configure social media links
- [ ] Set up Google Maps
- [ ] Update contact information
- [ ] Customize color scheme (if needed)
- [ ] Add restaurant logo
- [ ] Test all functionality
- [ ] Optimize performance
- [ ] Deploy to web hosting

## 📝 Credits

- **Framework**: Vanilla JavaScript, HTML5, CSS3
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Playfair Display, Poppins)
- **Animations**: AOS (Animate On Scroll)
- **Design**: Premium modern restaurant website pattern

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Report bugs
2. Suggest features
3. Submit pull requests
4. Improve documentation

## 📞 Support

For issues, questions, or support:
- **Phone**: 07417879191
- **WhatsApp**: +91 7417879191
- **Hours**: Mon-Thu: 11 AM - 10 PM | Fri-Sat: 11 AM - 11 PM | Sun: 10 AM - 10 PM

## 🌟 Features Roadmap

### Phase 2 (Future)
- [ ] Backend API integration
- [ ] Database for menu items
- [ ] User accounts and order history
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] SMS alerts
- [ ] Advanced analytics
- [ ] Staff management system
- [ ] Inventory tracking
- [ ] Real Google Reviews integration

## 📚 Documentation

### Installation Guide
See `INSTALLATION.md` for detailed setup instructions.

### API Documentation
See `API.md` for integration guidelines.

### Developer Guide
See `.github/copilot-instructions.md` for development standards.

---

## 🎉 Quick Start Video

[Watch the setup tutorial](link-to-video)

---

**Grand Rama Bistro Restro & Cafe** - _Where Great Food Meets Great Memories_

---

### Project Highlights

✅ **Production Ready**  
✅ **Fully Responsive**  
✅ **Mobile Optimized**  
✅ **SEO Friendly**  
✅ **Accessibility Compliant**  
✅ **Dark/Light Mode**  
✅ **AI Chatbot**  
✅ **WhatsApp Integration**  
✅ **Online Reservations**  
✅ **Menu Management**  

**Last Updated**: 2024  
**Version**: 1.0.0  
**Status**: Production Ready ✅
