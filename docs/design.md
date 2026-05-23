# WDI Design Phase
_Generated: 2026-05-23_
_Status: APPROVED — 2026-05-23_

## Architecture

```
src/app/
  _layout.tsx          ← Root layout: global.css + ThemeProvider + AppTabs
  index.tsx            ← Tab 1: Squad & Points
  leagues.tsx          ← Tab 2: Leagues
  fixtures.tsx         ← Tab 3: Fixtures
  settings.tsx         ← Tab 4: Settings

src/components/
  app-tabs.tsx         ← Mobile (iOS/Android): NativeTabs with sf/md icons
  app-tabs.web.tsx     ← Web: expo-router/ui Tabs with custom nav bar
```

Flat route structure (no `(tabs)` group) — routes live directly in `src/app/`, matching the existing working pattern. `NativeTabs.Trigger name` maps to the filename (e.g. `name="leagues"` → `leagues.tsx`).

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Navigation (mobile) | `NativeTabs` from `expo-router/unstable-native-tabs` | Already installed, native OS tab bar |
| Navigation (web) | `Tabs/TabList/TabTrigger` from `expo-router/ui` | Expo Router's web tab primitive |
| Icons (mobile) | `NativeTabs.Trigger.Icon sf={…} md={…}` | Native SF Symbols (iOS) + Material Symbols (Android), no PNG needed |
| Styling | NativeWind v4 `className` | Project standard |

## Icon Mapping

| Tab | Route | iOS SF Symbol | Android Material |
|-----|-------|--------------|-----------------|
| Squad & Points | `index` | `person.3.fill` | `groups` |
| Leagues | `leagues` | `trophy.fill` | `emoji_events` |
| Fixtures | `fixtures` | `calendar` | `calendar_today` |
| Settings | `settings` | `gear` | `settings` |

All four symbol names verified against `sf-symbols-typescript` and `expo-symbols` android symbol catalog.

## Component Plan

### `src/app/_layout.tsx`
- Import `'@/global.css'`
- Wrap with `ThemeProvider` (dark/light support)
- Render `<AppTabs />` as the sole child

### `src/components/app-tabs.tsx` (mobile)
- `NativeTabs` with `tintColor` from theme
- 4× `NativeTabs.Trigger` with `sf` + `md` icon props
- Labels: "Squad", "Leagues", "Fixtures", "Settings"

### `src/components/app-tabs.web.tsx` (web)
- Top nav bar with brand name "ngfl" on the left
- 4 tab buttons; active tab highlighted via `isFocused`
- Styled with NativeWind `className`

### Screens (placeholder)
Each screen: `SafeAreaView > View` centred, shows tab title + "coming soon" body, styled with NativeWind. Ready to replace with real content.

## File Structure

**Modified:**
- `src/app/_layout.tsx` — restore AppTabs, fix global.css import
- `src/components/app-tabs.tsx` — add 4 tabs with sf/md icons
- `src/components/app-tabs.web.tsx` — add 4 tabs

**Created:**
- `src/app/leagues.tsx`
- `src/app/fixtures.tsx`
- `src/app/settings.tsx`

**Replaced:**
- `src/app/index.tsx` — Squad & Points placeholder

**Deleted:**
- `src/app/explore.tsx` — no longer a tab

## Visual Design Direction

- **Mobile:** Native OS tab bar at bottom — iOS renders system-style bottom bar with SF Symbols; Android renders Material 3 bottom nav with Material icons. No custom styling needed for the bar itself.
- **Web:** Horizontal nav bar pinned to the top, pill-shaped tab buttons, dark/light aware via `ThemedView`/`ThemedText`. Brand name "ngfl" left-aligned.
- **Screens:** Full-height `SafeAreaView`, white/dark background, tab title in `text-3xl font-bold`, muted subtitle below. Centred layout, no chrome.
- **Colors:** Inherit from `theme.ts` `Colors.light` / `Colors.dark` palette via `useTheme()`.

## Open Decisions
- [x] Route group vs flat routes → **flat** (matches current working pattern, simpler)
- [x] Icon approach → **sf + md** (no PNG files needed, native quality)
- [x] Web nav position → **top** (matches current web tab bar position)
