# Winged Delegates - Art Initiative Website

Welcome to the **Winged Delegates** website repository! This is a modern, immersive web platform designed to showcase community art contests and celebrate visual creativity in the Tenderloin district.

## 🎨 About Winged Delegates

Winged Delegates is a community-driven initiative dedicated to:
- **Discovering** and celebrating exceptional visual artworks
- **Hosting** regular art contests for emerging and established artists
- **Displaying** winning artworks on public street-visible TV screens in Tenderloin
- **Building** a vibrant artistic community

## 🌟 Website Features

### Three Main Sections

1. **Entry** - Initiative Overview
   - Mission and values of Winged Delegates
   - Key features and impact
   - Why artists should participate

2. **Contest Submission** - Entry Platform
   - Current contest information
   - Artist submission form
   - Submission guidelines and categories
   - Prize information

3. **About Us** - Organization Information
   - Leadership team and officers
   - Core values
   - Community contact information
   - Team member details and emails

### Design Inspiration

The website draws inspiration from **www.teamlab.art**, featuring:
- **Immersive dark aesthetic** with vibrant gradient accents
- **Smooth animations** and interactive hover effects
- **Minimalist navigation** with blur effects
- **Responsive design** for all device sizes
- **Gradient text** and layered visual hierarchy
- **Kinetic background animations** for dynamic feel

## 🛠️ Technical Stack

- **HTML5** - Semantic structure
- **CSS3** - Advanced styling with gradients, animations, and flexbox/grid layouts
- **JavaScript (Vanilla)** - Form handling, smooth scrolling, and interactive features
- **No Dependencies** - Pure frontend implementation

## 📁 File Structure

```
delegate/
├── index.html          # Main website structure
├── styles.css          # All styling and animations
├── script.js           # Interactivity and form handling
└── README.md           # This file
```

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/wingeddelegates/delegate.git
   cd delegate
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html
   # or
   start index.html
   ```

3. **Live Server (Optional)**
   - Install Live Server extension in VS Code
   - Right-click `index.html` and select "Open with Live Server"
   - Or use Python: `python -m http.server 8000`

### Deployment

#### GitHub Pages
1. Go to repository Settings
2. Navigate to "Pages"
3. Set source to `main` branch
4. Your site will be live at `https://wingeddelegates.github.io/delegate/`

#### Other Hosting Options
- **Netlify**: Connect GitHub repo, auto-deploys on push
- **Vercel**: Similar to Netlify, excellent performance
- **Traditional Hosting**: Upload files via FTP to any web server

## 📝 Customization Guide

### Update Organization Information

**In `index.html`:**

1. **Hero Section** (lines 26-33)
   - Modify hero title and subtitle

2. **Entry Section** (lines 47-70)
   - Update initiative description
   - Modify feature icons and descriptions

3. **Officers Section** (lines 139-178)
   - Update officer titles
   - Add/remove officer cards
   - Update email addresses

4. **Contact Information**
   - Update email addresses (lines 208-211)
   - Add social media links

### Customize Styling

**In `styles.css`:**

1. **Color Scheme** (Primary colors appear throughout)
   - Primary gradient: `#8a2be2` to `#00d4ff`
   - Modify RGB values for different colors

2. **Fonts**
   - Change font family: Look for `font-family` declaration (line 16)

3. **Animation Speed**
   - Modify `animation-duration` values (e.g., `15s`, `1s`)

4. **Section Background**
   - Adjust gradient overlays in individual sections

### Form Handling

**In `script.js`:**

The form currently shows a success notification. To connect to a backend:

```javascript
// In the form submission handler, replace console.log with:
fetch('/api/submit-artwork', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        artistName: artistName,
        email: email,
        artworkTitle: artworkTitle,
        artworkDescription: artworkDescription,
        medium: formData.get('medium')
    })
})
.then(response => response.json())
.then(data => showNotification('Submission successful!', 'success'));
```

## 🎯 Features & Functionality

### Interactive Elements

- ✨ **Smooth Scrolling** - Click navigation items for smooth page transitions
- 🎨 **Gradient Text** - Eye-catching title styling
- 🔄 **Hover Effects** - Cards lift and color-shift on hover
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile
- ✅ **Form Validation** - Email and required field checking
- 🔔 **Notifications** - Success/error messages for user actions
- 🌊 **Parallax Scrolling** - Background movement on scroll
- 📍 **Active Navigation** - Highlights current section in navigation

### Accessibility

- Semantic HTML structure
- ARIA-compatible form labels
- Keyboard-navigable links
- High contrast colors
- Mobile-friendly viewport settings

## 📧 Contact & Support

For questions about the website or Winged Delegates initiative:

- **Email**: hello@wingeddelegates.art
- **Submission Questions**: submit@wingeddelegates.art
- **Community Inquiries**: community@wingeddelegates.art

## 📄 License

This website template is created for Winged Delegates community initiative. 

## 🙏 Credits

- **Design Inspiration**: www.teamlab.art
- **Framework**: Custom HTML/CSS/JavaScript
- **Community**: Powered by the Winged Delegates collective

---

**Built with ❤️ for the Winged Delegates Community Art Initiative**

*Celebrating visual arts. Transforming public spaces. Empowering artists.*
