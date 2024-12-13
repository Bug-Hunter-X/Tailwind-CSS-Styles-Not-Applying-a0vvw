```javascript
// ... your Tailwind CSS configuration ...

module.exports = {
  // ... other config options ...
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './public/**/*.html'], // Added './public/**/*.html' to include templates if placed in 'public' directory
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3498db', // Example custom color
      },
    },
  },
  plugins: [],
};
```