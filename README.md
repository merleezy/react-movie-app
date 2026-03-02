# React Movie App

Tutorial-based movie app built while following JavaScript Mastery to learn modern react fundamentals.

## Tech
React, Tailwind CSS, Appwrite, TMDB API

## What I practiced
- React hooks (useState, useEffect)
- Debounced live search
- Conditional rendering
- Loading states + reuseable components
- External API integration (TMDB API)
- Backend persistence & trending searches (Appwrite)

## My additions
- Added a watchlist feature that allows users to save movies they want to watch later. It uses local storage to persist the watchlist across sessions.

## Quick start   
**Prerequisites:**   
- Node.js
- npm (node package manager)
- Git

**Cloning the repository:**   
```bash
git clone https://github.com/merleezy/react-movie-app.git
cd react-movie-app
```

**Installation:**   
   
Install the project dependencies using npm:   
```bash
npm install
```

**Set Up Environment Variables:**   
   
Create a `.env.local` file in the root of the project and add the following content:   
```env
VITE_TMDB_API_KEY=

VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
```
Replace the placeholders with your actual TMDB API key and Appwrite credentials.   

**Running the Application:**   
```bash
npm run dev
```   
   
Open your browser and navigate to `http://localhost:5173` to view the application.