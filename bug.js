```javascript
// ... your Tailwind CSS configuration ...

module.exports = {
  // ... other config options ...
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // This line may be incorrect if your template files are in a different directory
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