# AI Use Cases Platform

An immersive, VR/metaverse-style website showcasing AI use cases across various industries. Experience the evolution of AI through interactive timelines featuring past, present, and future perspectives.

## Features

- 🎨 **Immersive Design**: Fantasy-like VR/metaverse aesthetic with animated backgrounds
- 🎯 **Interactive Use Cases**: Click on different industry boxes to explore AI applications
- 📹 **Timeline Videos**: Each use case features 3 videos (Past, Now, Future)
- ✨ **Animated Elements**: Floating particles, glowing effects, and smooth transitions
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices

## Use Cases Included

- 🏥 Healthcare
- 💼 Business
- 📚 Education
- ⚽ Sports
- 💰 Finance
- 🚗 Transportation
- 🎬 Entertainment
- 🌾 Agriculture

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yaraabdullah/ai-use-cases.git
cd ai-use-cases
```

2. Open `index.html` in your web browser, or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Navigate to `http://localhost:8000` in your browser

## Adding Videos

To add videos to each use case:

1. Open `detail.js`
2. Find the `videoData` object
3. Replace `YOUR_VIDEO_ID_HERE` with actual YouTube video IDs or embed URLs
4. For YouTube videos, you can use the format: `https://www.youtube.com/embed/VIDEO_ID`
5. For direct video files, you can use the video URL directly

Example:
```javascript
healthcare: {
    past: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    now: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    future: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
}
```

## Project Structure

```
ai-use-cases/
├── index.html          # Main homepage
├── detail.html         # Detail page with videos
├── styles.css          # Main stylesheet
├── detail.css          # Detail page styles
├── script.js           # Homepage JavaScript
├── detail.js           # Detail page JavaScript
└── README.md           # This file
```

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #00f0ff;
    --secondary-color: #ff00ff;
    --accent-color: #00ff88;
}
```

### Adding New Use Cases
1. Add a new box in `index.html`:
```html
<div class="use-case-box" data-field="newfield">
    <div class="box-content">
        <div class="icon">🔧</div>
        <h2>New Field</h2>
        <p>Description</p>
        <div class="glow"></div>
    </div>
</div>
```

2. Add video data in `detail.js`:
```javascript
newfield: {
    past: 'VIDEO_URL',
    now: 'VIDEO_URL',
    future: 'VIDEO_URL'
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for use.

## Contributing

Feel free to submit issues and enhancement requests!

