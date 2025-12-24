## PopX Authentication UI
A **pixel-perfect mobile authentication interface** built with React, featuring clean UI, smooth navigation, and a centered mobile layout.
This project demonstrates best practices in frontend development, focusing on usability, accessibility, and modern UI patterns.

## Live Demo
Website Link: https://popx-clone.netlify.app/

## Screens Implemented

- Welcome Screen
- Create Account
- Login
- Account Settings

The mobile app interface is centered on the webpage to simulate a real mobile experience on desktop.

## Tech Stack

- React (Vite)
- Tailwind CSS
- React Router DOM
- JavaScript (ES6+)

## Features

- Pixel-perfect UI based on provided designs
- Mobile-first layout with centered app container
- Floating input labels (PopX style)
- Clean form components
- Client-side validation
- Proper button and link semantics
- Seamless page navigation (no reloads)
- Responsive and accessible design

## Authentication Flow

- Create Account → Account Settings
- Login → Account Settings

For demo purposes, authentication is simulated on the client side without backend integration.

## Validation

- Basic client-side validation is implemented using:
- Native HTML attributes (required, minLength)
- Simple state-based checks to enable/disable submit buttons
- This keeps the code clean while improving user experie

## Project Structure
```
src/
├── assets/
├── pages/
│   ├── Welcome.jsx
│   ├── Register.jsx
│   ├── Login.jsx
│   └── Account.jsx
├── routes/
│   └── AppRoutes.jsx
├── App.jsx
└── main.jsx
```

## UI Screenshots
<img width="450" height="800" alt="screencapture-localhost-5173-2025-12-24-12_20_30" src="https://github.com/user-attachments/assets/3b1900e0-fec2-4665-9ce9-0452831c2516" />
<img width="450" height="800" alt="screencapture-localhost-5173-register-2025-12-24-12_16_37" src="https://github.com/user-attachments/assets/f3d67ab3-b2c4-47c9-a29a-bd976b536385" />
<img width="450" height="800" alt="screencapture-localhost-5173-login-2025-12-24-12_19_56" src="https://github.com/user-attachments/assets/cfabba99-b2af-40eb-a211-3d855711c497" />
<img width="450" height="800" alt="screencapture-localhost-5173-account-2025-12-24-12_17_39" src="https://github.com/user-attachments/assets/dd0862b1-d1b0-492d-b12a-1631caff4624" />


