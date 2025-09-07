# 🚀 Qiskit Fall Fest 2025 - University of Paris-Saclay

A modern, friendly, and easy-to-navigate website for the Qiskit Fall Fest 2025 event, featuring a quantum-themed design with Full_Illustration.png background and emoji assets.

## ✨ Features

### 🎨 Modern Design
- **Quantum-themed UI** with Full_Illustration.png as the hero background
- **Emoji integration** from the emojis folder (Atom, Badge, Circuit, Entanglement, etc.)
- **Friendly and intuitive navigation** with smooth scrolling
- **Responsive design** that works on all devices
- **Modern CSS animations** with quantum particle effects

### 📱 User-Friendly Interface
- **Clean hero section** with Call-to-Action buttons
- **Interactive schedule tabs** (Week 1: Foundations, Week 2: Applications, Week 3: Hackathon)
- **Speaker showcase** with badges and social links
- **Organizer profiles** with contact information
- **Registration section** with Google Forms integration
- **Sponsor highlights** with hover effects

### 🛠 Technical Features
- **Modern CSS Grid/Flexbox** layouts
- **Intersection Observer API** for scroll animations
- **Smooth scrolling navigation**
- **Mobile-responsive menu**
- **Parallax effects** on hero section
- **Animated counters** for statistics
- **SEO optimized** with Open Graph meta tags
- **Accessibility features** with keyboard navigation

## 🎯 Event Information

- **Event**: Qiskit Fall Fest 2025
- **Theme**: Celebrating 100 Years of Quantum Mechanics
- **Host**: University of Paris-Saclay
- **Duration**: 3 weeks (October-November 2025)
- **Registration**: Free
- **Languages**: English (French support available)

## 🎨 Design Assets Used

### Emoji Icons
- `Atom_01.png`, `Atom_02.png`, `Atom_03.png` - Scientific themes
- `Badge_01.png`, `Badge_02.png`, `Badge_03.png` - Achievement indicators
- `Circuit.png` - Quantum circuit representation
- `Entanglement.png` - Quantum entanglement visualization
- `Cat_01.png`, `Cat_02.png` - Community and team icons
- `IBM Quantum Logo.png` - Partner branding
- `Qiskit_01.png`, `Qiskit_02.png`, `Qiskit_03.png` - Framework branding
- `Text_*.png` series - Typography enhancements
- `Timeline_*.png` series - Event scheduling
- `Full_Illustration.png` - Main hero background

## 🚀 Local Development

```bash
# Start local server
python3 -m http.server 8000

# Visit http://localhost:8000
```

## 📧 Contact

For questions about the website or event:
- **Email**: qiskit-fall-fest@universite-paris-saclay.fr

---

**Made with ❤️ for the quantum computing community**

*Celebrating 100 Years of Quantum Mechanics (1925-2025)*

## About the Event

Welcome to the official website for **Qiskit Fall Fest 2025** hosted by the University of Paris-Saclay. This year, we celebrate the **100 Years of Quantum Mechanics** with an exciting program of workshops, lectures, and hands-on coding sessions.

### 🗓️ Event Details
- **Date:** October - November 2025
- **Location:** University of Paris-Saclay, France
- **Format:** Hybrid (Online lectures + In-person hackathon)
- **Cost:** Free registration

### 🎯 Target Audience
- Students in physics, computer science, and engineering
- Researchers interested in quantum computing
- Industry professionals
- Quantum computing enthusiasts

## Website Features

- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI** - Quantum-inspired design with particle animations
- 📋 **Integrated Registration** - Google Forms integration
- 👥 **Speaker Profiles** - Detailed information about our expert speakers
- 🗓️ **Interactive Schedule** - Complete event timeline
- 🏢 **Organizer Information** - Meet our dedicated team

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript** - Interactive functionality
- **Google Forms** - Registration system
- **GitHub Pages** - Free hosting

## Project Structure

```
fall-fest-2025/
├── index.html              # Main webpage
├── assets/
│   ├── css/
│   │   ├── main.css        # Main stylesheet
│   │   └── noscript.css    # Fallback styles
│   ├── js/
│   │   ├── main.js         # Main JavaScript
│   │   ├── jquery.min.js   # jQuery library
│   │   ├── browser.min.js  # Browser detection
│   │   ├── breakpoints.min.js # Responsive breakpoints
│   │   └── util.js         # Utility functions
│   └── images/
│       ├── speakers/       # Speaker photos
│       ├── organizers/     # Organizer photos
│       └── sponsors/       # Sponsor logos
├── README.md              # This file
└── _config.yml           # GitHub Pages configuration
```

## Setup Instructions

### For GitHub Pages Deployment

1. **Fork this repository** or create a new repository with these files
2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save the settings

3. **Update content**:
   - Replace speaker photos in `assets/images/speakers/`
   - Replace organizer photos in `assets/images/organizers/`
   - Update Google Form embed URL in `index.html`
   - Modify event details as needed

4. **Custom domain** (optional):
   - Add a `CNAME` file with your domain
   - Configure DNS settings

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/qiskit-fall-fest-2025.git
   cd qiskit-fall-fest-2025
   ```

2. **Serve locally**:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**:
   ```
   http://localhost:8000
   ```

## Customization Guide

### Adding Speakers

1. Add speaker photo to `assets/images/speakers/`
2. Update the speakers section in `index.html`:
   ```html
   <div class="speaker">
       <div class="speaker-image">
           <img src="assets/images/speakers/your-speaker.jpg" alt="Speaker Name" />
       </div>
       <div class="speaker-info">
           <h3>Speaker Name</h3>
           <p class="speaker-title">Title and Affiliation</p>
           <p class="speaker-bio">Biography...</p>
           <div class="speaker-links">
               <a href="#" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a>
           </div>
       </div>
   </div>
   ```

### Updating Schedule

Modify the schedule tables in the `index.html` file:
```html
<tr>
    <td>Date</td>
    <td>Event Title</td>
    <td>Time</td>
    <td>Speaker</td>
</tr>
```

### Google Form Integration

1. Create a Google Form for registration
2. Get the embed code
3. Replace the iframe src in the registration section:
   ```html
   <iframe src="YOUR_GOOGLE_FORM_EMBED_URL" 
           width="100%" 
           height="800" 
           frameborder="0">
   </iframe>
   ```

### Styling Customization

Key CSS variables in `assets/css/main.css`:
- Primary color: `#ff6b9d` (pink)
- Secondary color: `#4ecdc4` (teal)
- Background: Quantum-inspired gradient
- Fonts: Inter family

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## Performance Features

- Optimized images
- Minimal JavaScript
- CSS animations
- Progressive enhancement
- Mobile-first design

## Accessibility

- Semantic HTML structure
- ARIA labels
- Keyboard navigation
- High contrast colors
- Screen reader friendly

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions about the website or event:

- **Email:** qiskit-fall-fest-2025@universite-paris-saclay.fr
- **Website:** [Your GitHub Pages URL]
- **Repository:** [Your GitHub Repository URL]

## Acknowledgments

- IBM Quantum team for Qiskit Fall Fest program
- University of Paris-Saclay for hosting
- All speakers and organizers
- Design inspiration from HTML5 UP

---

**Built with ❤️ for the quantum computing community**
