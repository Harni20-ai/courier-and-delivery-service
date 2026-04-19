# SwiftDelivery Template Documentation

## Introduction
SwiftDelivery is a premium, modern courier and delivery service website template built with clean, semantic HTML5, CSS3, and modular JavaScript. It features a responsive design, dark mode, and RTL support.

## File Structure
- `assets/css/`: Contains styling files.
  - `style.css`: Main theme styles and variables.
  - `dark-mode.css`: Overrides for dark theme.
  - `rtl.css`: Layout adjustments for RTL languages.
- `assets/js/`: Contains interaction scripts.
  - `main.js`: Global site logic.
  - `dashboard.js`: Dashboard-specific functionality.
- `pages/`: All HTML pages.

## Customization
### Colors
You can change the global color scheme by modifying the CSS variables in `assets/css/style.css`:
```css
:root {
  --color-primary: #4f46e5;
  --color-secondary: #60a5fa;
  /* ... */
}
```

### Dark Mode
The dark mode is triggered by adding the `.dark-mode` class to the `<body>` element. This is handled automatically by the toggle in the header.

### RTL Support
RTL can be enabled by setting `dir="rtl"` on the `<html>` or `<body>` tag. The template includes `rtl.css` which handles the necessary layout mirrors.

## Pages Overview
- **Home**: Hero section with illustration, features overview, and CTA.
- **Booking**: Multi-step scheduling form.
- **Services**: Detailed list of delivery options.
- **Dashboards**: Separate views for Users and Administrators.
- **Contact**: Functional-ready contact form with location details.

## Icons
This template uses **FontAwesome 6** for icons. You can find more icons at [fontawesome.com](https://fontawesome.com).

## Fonts
- **Poppins**: Used for headings.
- **Inter**: Used for body text.
Both are served via Google Fonts.
