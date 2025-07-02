# Portfolio Website

A modern, responsive portfolio website inspired by architectural design principles. Built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, minimalist design with smooth animations
- **Interactive Navigation**: Smooth scrolling and mobile-friendly navigation
- **Project Showcase**: Grid layout for displaying your work with hover effects
- **Performance Optimized**: Fast loading with optimized images and animations
- **Cross-browser Compatible**: Works on all modern browsers

## File Structure

```
portfolio-site/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── images/             # Your project images (optional)
└── README.md           # This file
```

## Getting Started

1. **Clone or Download**: Get the files to your local machine
2. **Customize Content**: 
   - Edit `index.html` to add your personal information
   - Replace project images with your own work
   - Update project descriptions and titles
3. **Test Locally**: Open `index.html` in your browser to preview

## Customization Guide

### Personal Information
Edit the following sections in `index.html`:
- Hero section title and subtitle
- About section content
- Contact information
- Footer text

### Projects
To add or modify projects:
1. Find the `projects-grid` section in `index.html`
2. Copy the `project-item` structure
3. Update the image source, title, and description
4. Add your own project images to the `images/` folder

### Styling
- Colors: Edit CSS variables in `styles.css`
- Fonts: Change the Google Fonts import in `index.html`
- Layout: Modify grid settings in the CSS

## Hosting on GitHub Pages

### Method 1: Using GitHub Pages (Recommended)

1. **Create a GitHub Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio-site.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "GitHub Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Your site will be available at**: `https://yourusername.github.io/portfolio-site`

### Method 2: Using GitHub Desktop

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Create a new repository
3. Add your portfolio files
4. Publish to GitHub
5. Enable GitHub Pages in repository settings

## Custom Domain (Optional)

To use a custom domain:
1. Purchase a domain from a domain registrar
2. In your GitHub repository settings, add your custom domain
3. Configure DNS settings with your domain provider
4. Add a `CNAME` file to your repository with your domain name

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Use compressed images (JPEG for photos, PNG for graphics)
2. **Image Sizes**: Keep images under 500KB for faster loading
3. **Lazy Loading**: Images load as you scroll (already implemented)
4. **Minify Files**: Consider minifying CSS and JS for production

## Troubleshooting

### Images Not Loading
- Check image file paths
- Ensure images are in the correct folder
- Verify image file names match exactly

### Styling Issues
- Clear browser cache
- Check for CSS syntax errors
- Verify all CSS files are linked correctly

### GitHub Pages Not Working
- Ensure repository is public
- Check GitHub Pages settings
- Wait a few minutes for deployment

## Contributing

Feel free to fork this project and customize it for your needs. If you make improvements, consider sharing them!

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help with customization or hosting, check out:
- [GitHub Pages Documentation](https://pages.github.com/)
- [HTML/CSS Tutorials](https://developer.mozilla.org/en-US/docs/Web)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

**Happy coding! 🚀**
