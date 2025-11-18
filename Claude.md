# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Native + Expo application designed to scrape meal swipe and dining balance information from the FHU Campus Card Center website. The app displays dining dollars, lion bucks, meal swipes, and guest swipes for authenticated users.

**Key Stack:**
- **Framework:** Expo (React Native)
- **Language:** TypeScript
- **Routing:** Expo Router (file-based routing)
- **HTML Parsing:** Cheerio
- **Platform Support:** iOS, Android, and Web (with New Architecture enabled)

## Project Structure

```
├── app/                          # Main app directory (file-based routing)
│   ├── _layout.tsx              # Root navigation setup with theme provider
│   ├── (tabs)/                  # Tabbed navigation group
│   │   ├── _layout.tsx          # Tab navigation configuration
│   │   ├── index.tsx            # Home screen (main scraping UI)
│   │   └── explore.tsx          # Explore tab
│   ├── modal.tsx                # Modal screen example
│   └── exposed routes exported via expo-router
├── components/                   # Reusable UI components
│   ├── themed-*.tsx             # Theme-aware components
│   ├── haptic-tab.tsx           # Tab button with haptic feedback
│   └── ui/                      # UI primitives
├── constants/                    # App constants
│   └── theme.ts                 # Color theme definitions
├── hooks/                        # Custom React hooks
│   ├── use-color-scheme.ts      # Color scheme detection
│   └── use-theme-color.ts       # Theme color utilities
└── scripts/
    └── reset-project.js         # Project reset utility
```

## Development Commands

```bash
# Start development server (choose target via interactive menu)
npm start

# Run on specific platform
npm run android          # Android emulator
npm run ios            # iOS simulator
npm run web            # Web browser

# Linting
npm run lint

# Reset to example project structure
npm run reset-project
```

## Architecture Notes

### Navigation
- Uses **Expo Router** with file-based routing
- **Root Layout** (`_layout.tsx`): Sets up theme provider and root stack navigation
- **Tab Navigation**: Home and Explore tabs defined in `(tabs)/_layout.tsx`
- Dynamic theme support (light/dark mode) via `useColorScheme()` hook

### Scraping Flow
The main scraping logic is in `app/(tabs)/index.tsx`:

1. **Authentication:** Posts login credentials to `https://fhu.campuscardcenter.com/ch/login.html`
2. **Session Fetch:** Makes authenticated GET request to `https://fhu.campuscardcenter.com/ch/`
3. **HTML Parsing:** Uses Cheerio to extract balance data from `div[align=right]` elements
4. **Data Extraction:** Maps parsed HTML to four balance types (dining dollars, lion bucks, meal swipes, guest swipes)

**Critical:** The home screen contains hardcoded credentials in state initialization (lines 13-14). This is development-only and must be externalized before production.

### Theming
- Colors defined in `constants/theme.ts` with light/dark variants
- `useColorScheme()` hook (platform-specific: `.ts` for native, `.web.ts` for web)
- Theme-aware components inherit colors via `useThemeColor()` hook
- All styled components should use `ThemedText` and `ThemedView` for consistent theming

## Important Considerations

### Credentials Handling
- Currently stores credentials in component state (app/(tabs)/index.tsx:13-14)
- **Must** be moved to environment variables or secure storage before any real usage
- Never commit real credentials to the repository

### Cookie/Session Management
The scraper uses `credentials: "include"` in fetch requests to maintain session cookies. The app has `@react-native-cookies/cookies` as a dependency (available for advanced cookie handling if needed).

### Cross-Platform Specific Files
Platform-specific implementations use naming convention: `filename.platform.ts`
- `hooks/use-color-scheme.ts` (native)
- `hooks/use-color-scheme.web.ts` (web)
- `components/ui/icon-symbol.ios.tsx` (iOS specific)

This is an Expo pattern—the bundler automatically selects the correct file.

## Configuration Files

- **tsconfig.json:** Strict mode enabled, path alias `@/*` points to root
- **eslint.config.js:** Uses `eslint-config-expo` flat config
- **app.json:** Expo configuration with Android/iOS/Web settings, React Compiler enabled
- **package.json:** All expo and react-native dependencies pinned to specific versions

## Testing & Debugging

- Use `console.log` for debugging (visible in Expo CLI output)
- Check console output when testing the scraping functionality
- The app uses Expo's built-in development tools—use Expo Go or development builds
- No automated tests are currently configured; consider adding Jest/React Testing Library for features

## Common Development Tasks

**Adding a new screen:**
1. Create file in `app/` or `app/(tabs)/` following file-based routing conventions
2. Update `(tabs)/_layout.tsx` if adding to tab navigation
3. Use `ThemedText`/`ThemedView` for consistent styling

**Modifying scraping logic:**
- Update `scrapeWithLogin()` callback in `app/(tabs)/index.tsx`
- Test HTML parsing changes with `extractData()` function
- Add logging to debug fetch requests and responses

**Updating theme colors:**
- Edit `constants/theme.ts`
- Components automatically reflect changes via `useThemeColor()` hook
