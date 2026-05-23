@AGENTS.md

# ngfl — Nigerian Fantasy Football League

A mobile-first fantasy football app for the **Nigerian Professional Football League (NPFL)**. Follows the same core mechanics as the Premier League Fantasy (FPL): pick a squad, earn points based on real-match player performance, compete in leagues.

## Tech Stack

- **Framework:** Expo SDK 56 + Expo Router (file-based routing)
- **React Native:** 0.85.3 / React 19
- **Styling:** NativeWind v4 (Tailwind CSS for React Native) — use `className` everywhere, not `StyleSheet`
- **Language:** TypeScript (strict)
- **Navigation:** `expo-router` with native tabs (`NativeTabs` on mobile, custom web tab bar)
- **Animations:** `react-native-reanimated` v4

## Project Structure

```
src/
  app/           # Expo Router screens (file = route)
    _layout.tsx  # Root layout — imports global.css, wraps in ThemeProvider
    index.tsx    # Home / squad screen
    explore.tsx  # Placeholder (to be replaced)
  components/
    app-tabs.tsx        # Native tab bar (iOS/Android)
    app-tabs.web.tsx    # Web tab bar
    themed-text.tsx     # Text with dark/light theme color
    themed-view.tsx     # View with dark/light background
  constants/
    theme.ts     # Color palette, spacing scale, font definitions
  hooks/
    use-theme.ts         # Returns current Colors object for scheme
    use-color-scheme.ts  # Re-exports RN useColorScheme
  global.css     # Tailwind directives + CSS custom properties (fonts)
```

## Styling Rules

- **Always use NativeWind `className` props** — do not use `StyleSheet.create` for new code.
- Tailwind config is at `tailwind.config.js`; content glob is `./src/**/*.{ts,tsx}`.
- `ThemedText` / `ThemedView` are utility wrappers for dark/light color theming; prefer them over raw `Text`/`View` when color-scheme awareness is needed.

## Fantasy Football Domain

The app mirrors FPL mechanics applied to the NPFL:

- **Squad:** 15 players (2 GK, 5 DEF, 5 MID, 3 FWD) picked within a budget
- **Gameweek:** Each NPFL match round is a gameweek; players earn points for goals, assists, clean sheets, saves, bonus points, etc.
- **Captain / Vice-Captain:** Double points for the captain; vice-captain doubles if captain doesn't play
- **Transfers:** 1 free transfer per gameweek; extra transfers cost 4 points
- **Chips:** Wildcard, Bench Boost, Triple Captain, Free Hit (same as FPL)
- **Leagues:** Global, classic (cumulative), and head-to-head mini-leagues
- **Clubs:** All NPFL clubs (e.g. Enyimba, Rangers, Remo Stars, Kano Pillars, etc.)
- **Player positions:** GK, DEF, MID, FWD

## Key Screens (planned)

| Route | Purpose |
|---|---|
| `/` | My Squad — view/manage selected 15 players |
| `/transfers` | Transfer market — browse players, make transfers |
| `/points` | Gameweek points breakdown |
| `/leagues` | My leagues + global standings |
| `/fixtures` | NPFL fixture list by gameweek |
| `/player/[id]` | Player detail — stats, form, ownership |

## Development Notes

- Expo SDK 56 has changed significantly — always read https://docs.expo.dev/versions/v56.0.0/ before using any Expo API.
- `babel.config.js` and `metro.config.js` are required for NativeWind; do not remove them.
- `nativewind-env.d.ts` provides TypeScript types for `className` prop — do not remove it.
- The `@/*` path alias resolves to `src/*`; `@/assets/*` resolves to `assets/*`.
