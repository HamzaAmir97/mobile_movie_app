EADC f[oMdrleleEoaswtGceineragnipetperrtomaifte pioos lnanst]ieoP,.n[rRaofelm,epwaplatetclu📥le-rsaetrlsul ]cptl,uaarceneddhoR[lEtdAeerDcsMhlEnik.oeml[doPgfRoiOreJmsE]yCwpTriothNjeAmcMtyEb]a,sed on the
:project-specific information

Support the Project 🌟  
Please consider giving this project a ⭐ STAR — it helps spread the word and motivates continued development.

<div align="center>
<table align="center>
<tr>
<td><img src="/screenshots/banner.png" alt="Project Banner" width="100%" /></td>
<tr/>
<table/>
<div/>

RN Movie App 🚀  
A cross-platform mobile app (iOS/Android/Web via Expo) to browse the latest movies, search titles, and view detailed movie pages. It also shows a trending list powered by Appwrite. Value: smooth UX on Expo + React Native with a modern design using NativeWind/Tailwind.

📚 Table of Contents  
- Project Purpose ✨  
- Features 📸🎯  
- Frontend & Backend Technologies Used 🛠  
- Project Structure 📂  
- Key Files 📁  
- Environment Variables 🔐  
- Getting Started 🚀  
- Usage Flow 💡  
- Deployment 🚢  
- Contributing 🤝  
- License 📄

## Project Purpose ✨
Deliver a simple, modern interface to explore movies from TMDB, perform quick searches, and view rich details (rating, genres, runtime, budget/revenue). The app highlights trending movies based on Appwrite-stored popularity data.

## Features 📸🎯
- Latest movies presented in a responsive grid ✅  
- Fast search with a sleek search bar ⚡  
- Full movie details: overview, rating, release year, genres, budget/revenue 🔒  
- Custom bottom tabs (Home, Search, Save, Profile)  
- Trending list sorted by Appwrite document counts  
- Modern UI/UX using NativeWind/Tailwind + Expo Router

## Frontend & Backend Technologies Used 🛠
![Expo](https://img.shields.io/badge/Expo-000000?logo=expo&logoColor=white)
![React_Native](https://img.shields.io/badge/React_Native-20232A?logo=react&logoColor=61DAFB)
![Expo_Router](https://img.shields.io/badge/Expo_Router-000000?logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![NativeWind](https://img.shields.io/badge/NativeWind-121212?logo=tailwindcss&logoColor=white)
![React_Navigation](https://img.shields.io/badge/React_Navigation-000000?logo=react&logoColor=white)
![Reanimated](https://img.shields.io/badge/Reanimated-000000?logo=react&logoColor=white)
![Gesture_Handler](https://img.shields.io/badge/Gesture_Handler-000000?logo=react&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-F02E65?logo=appwrite&logoColor=white)
![TMDB_API](https://img.shields.io/badge/TMDB_API-0D253F?logo=themoviedatabase&logoColor=01D277)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)
![Metro](https://img.shields.io/badge/Metro-20232A?logo=metro&logoColor=white)
![React_Native_Web](https://img.shields.io/badge/React_Native_Web-20232A?logo=react&logoColor=61DAFB)

## Project Structure 📂
```
mobile_movie_app/
├─ app/
│  ├─ (tabs)/
│  │  ├─ _layout.tsx
│  │  ├─ index.tsx
│  │  └─ profile.tsx
│  ├─ movie/
│  │  └─ [id].tsx
│  ├─ _layout.tsx
│  └─ globals.css
├─ assets/
│  ├─ icons/ (home.png, search.png, person.png, logo.png, save.png, star.png, play.png, arrow.png)
│  └─ images/ (bg.png, highlight.png, rankingGradient.png, logo.png)
├─ components/
│  ├─ MovieCard.tsx
│  ├─ SearchBar.tsx
│  └─ TrendingCard .tsx
├─ constants/
│  ├─ icons.ts
│  └─ images.ts
├─ interfaces/
│  └─ interfaces.d.ts
├─ services/
│  ├─ UseFecth.ts
│  ├─ api.ts
│  └─ appwrite.ts
├─ types/
│  └─ images.d.ts
├─ .vscode/settings.json
├─ app.json
├─ babel.config.js
├─ eslint.config.js
├─ metro.config.js
├─ tailwind.config.js
├─ tsconfig.json
├─ package.json
└─ README.md
```

## Key Files 📁
- `app/_layout.tsx` — Root stack navigation, wiring tabs and movie detail route.
- `app/(tabs)/_layout.tsx` — Bottom tab configuration and custom styling.
- `app/(tabs)/index.tsx` — Home screen: search entry, trending section, and latest movies grid.
- `app/movie/[id].tsx` — Movie details page (overview, rating, genres, runtime, budget/revenue).
- `components/MovieCard.tsx` — Movie card used in the grid.
- `components/SearchBar.tsx` — Reusable search bar component.
- `components/TrendingCard .tsx` — Trending movie card with masked index overlay.
- `services/api.ts` — TMDB API calls and headers configuration.
- `services/appwrite.ts` — Appwrite client and functions for trending data (count updates, queries).
- `services/UseFecth.ts` — Generic data-fetching React hook with loading/error state.
- `constants/icons.ts` — Centralized icon imports/exports.
- `constants/images.ts` — Centralized image imports/exports.
- `tailwind.config.js` — Theme and color palette for Tailwind/NativeWind.
- `metro.config.js` — Metro + NativeWind integration with `globals.css` input.
- `babel.config.js` — Babel config for Expo + NativeWind.
- `app.json` — Expo app config (icons, splash screen, web bundler, plugins).
- `tsconfig.json` — TypeScript base config and path aliases.

## Environment Variables 🔐
```env
# TMDB
EXPO_PUBLIC_MOVIE_API_KEY=

# Appwrite
EXPO_PUBLIC_APPWRITE_PROJECT_ID=
EXPO_PUBLIC_APPWRITE_DATABASE_ID=
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=
```

## Getting Started 🚀
Setup

```bash
# 1) Install dependencies
npm install

# 2) Create .env in the project root and fill the variables above
#    (use your TMDB token and Appwrite project/database/collection IDs)

# 3) Start the development server
npm run start          # or: npx expo start

# Optional helpers
npm run android        # open on Android emulator/device
npm run ios            # open on iOS simulator (macOS only)
npm run web            # web build via react-native-web
```

## Usage Flow 💡
- Launch the app to see the Home screen with logo, Trending Movies (if Appwrite has data), and Latest Movies.
- Use the search bar to navigate to the search flow and fetch results from TMDB.
- Tap any movie card to open the details screen and view extended information.

## Deployment 🚢
```bash
# Recommended: EAS Build (requires Expo/EAS account)
npx expo login
npx expo whoami

# Prepare native projects (one-time if needed)
npx expo prebuild

# Build per platform
eas build --platform android
eas build --platform ios

# For web (static export)
npx expo export --platform web
```

## Contributing 🤝
- Fork → create a feature branch → commit changes → open a Pull Request.
- Prefer conventional commit messages when possible.
- Run linting locally before opening a PR:
```bash
npm run lint
```
- Follow code style and auto-organize imports (see `.vscode/settings.json`).

## License 📄
This project is open source. If no license file is present, usage is assumed to be for educational/experimental purposes. Consider adding a license (e.g., MIT) for clarity.
