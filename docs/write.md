# WDI Write Phase
_Generated: 2026-05-23_
_Task: 4-Tab Navigation — ngfl Fantasy Football_

## Goal
Build a 4-tab bottom navigation for the ngfl app using Expo Router's file-based routing. Tabs are: Squad/Points (home), Leagues, Fixtures, and Settings. The navigation must work on both mobile (NativeTabs) and web (custom tab bar), use expo-symbols for icons, and be styled with NativeWind v4.

## Task Breakdown

### Routing
- 🟢 T1 — Rename/restructure routes into a `(tabs)` route group so Expo Router scopes the tab layout
- 🟢 T2 — Create the 4 screen files: `index.tsx` (Squad), `leagues.tsx`, `fixtures.tsx`, `settings.tsx`
- 🟢 T3 — Create `(tabs)/_layout.tsx` as the tab layout entry point

### Tab Navigation Components
- 🟡 T4 — Update `app-tabs.tsx` (mobile/native) to declare all 4 tabs with correct names, labels, and expo-symbols icons
- 🟡 T5 — Update `app-tabs.web.tsx` (web) to declare all 4 tabs with correct hrefs and labels
- 🟢 T6 — Update root `_layout.tsx` to route into the `(tabs)` group cleanly

### Screens (Placeholder UI)
- 🟢 T7 — Squad/Points screen — basic layout with heading and points placeholder
- 🟢 T8 — Leagues screen — basic layout with heading
- 🟢 T9 — Fixtures screen — basic layout with heading
- 🟢 T10 — Settings screen — basic layout with heading

### Cleanup
- 🟢 T11 — Remove `explore.tsx` (replaced by new routes)
- 🟢 T12 — Update `app.json` if any slug/scheme needs updating (verify only)

## Dependencies
- T3 (tab layout) must exist before T4/T5 (tab components reference route names)
- T1 (route group) must exist before T2, T3, T7–T10
- T4/T5 must be done before the navigation is testable

## Risks & Unknowns
- Expo Router SDK 56 `NativeTabs` API may differ from earlier versions — must verify trigger `name` values match route file names exactly
- `expo-symbols` icon names differ per platform (iOS SF Symbols vs Android/web Material) — need correct mappings for all 4 tabs
- Web tab bar positioning (top vs bottom) is a design decision

## Task Index (for review)
| ID  | Task | Group | Complexity |
|-----|------|-------|------------|
| T1  | Create `(tabs)` route group | Routing | 🟢 Small |
| T2  | Create 4 screen files | Routing | 🟢 Small |
| T3  | Create `(tabs)/_layout.tsx` | Routing | 🟢 Small |
| T4  | Update `app-tabs.tsx` (mobile) | Navigation | 🟡 Medium |
| T5  | Update `app-tabs.web.tsx` (web) | Navigation | 🟡 Medium |
| T6  | Update root `_layout.tsx` | Routing | 🟢 Small |
| T7  | Squad/Points screen | Screens | 🟢 Small |
| T8  | Leagues screen | Screens | 🟢 Small |
| T9  | Fixtures screen | Screens | 🟢 Small |
| T10 | Settings screen | Screens | 🟢 Small |
| T11 | Remove `explore.tsx` | Cleanup | 🟢 Small |
| T12 | Verify `app.json` | Cleanup | 🟢 Small |
