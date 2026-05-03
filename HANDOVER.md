# PETS ROCK WORLD - Session Handover Document
## Generated: 2026-05-02

---

## 1. PROJECT OVERVIEW

**Brand**: PETS ROCK WORLD (rethemed from WRONG Store clone)
**Live URL**: https://www.pets-rock.world (Vercel deployment)
**GitHub Repo**: https://github.com/markchang78-blip/wrong-store
**Tech Stack**: React 19 + TypeScript + Vite + Tailwind CSS + shadcn/ui + Supabase
**Routing**: Hash routing (#home, #street, #news, #collections, #world)

---

## 2. LAST PENDING TASK (CRITICAL)

**Task**: Rename menu "Bite Pop" → "Pets Do Rock"
- ✅ Code modified in `/mnt/agents/output/app/src/components/DemoLayout.tsx` line 43
- ✅ Committed locally: `39ff988 fix: rename menu Bite Pop to Pets Do Rock`
- ❌ **NOT PUSHED TO GITHUB** — needs `git push origin main`
- **Blocker**: SSH key `~/.ssh/temp_github_key` is rejected by GitHub
- **Solution for new session**: Try HTTPS with token, or regenerate SSH key pair

---

## 3. CURRENT MENU NAMES (DemoLayout.tsx)

```
The Unlikely Entertainment  → #/world
Pets Do Rock                → #/collections
The Masterminds             → #/collections
Partners In Crime           → #/home
Pets Rock World             → #/street
Pets For Life               → #/news
Newsroom                    → #/news
```

---

## 4. KEY FILES & MODIFICATIONS

### A. `/mnt/agents/output/app/src/components/DemoLayout.tsx`
- **Navbar**: Hamburger menu on ALL screen sizes (no desktop text links)
- **Fullscreen Menu**: Red background `#C63B38`, left-text/right-image on desktop, stacked on mobile
- **Close button**: `close-x.png` (graffiti X) top-right corner
- **Footer**: `footer-combined.png` (graffiti "THE STREET IS OURS" overlaid on PR logo)
- **Copyright**: Fixed `bottom-[20px]`
- **Mobile footer logo**: `h-[50px]` with `px-5`

### B. `/mnt/agents/output/app/src/pages/HomePage.tsx` (Street page)
- **Hero Slider**: 3 slides, main image enlarged, side previews shrunk 50%
- **Corner frames**: 4 PNGs (`frame-tl.png`, `frame-tr.png`, `frame-bl.png`, `frame-br.png`) positioned outside image (`-top-8 -left-8` etc.)
- **Title section**: "Simply The Best Pins And Accessories For Everyone" moved into categories section
- **Category cards**: `aspect-[5/6]`, all images use `street-card.png`, text centered (title, description, link)
- **Background text**: "PRIME FIGURES" removed from hero

### C. `/mnt/agents/output/app/src/pages/CollectionsPage.tsx` (Bite POP page)
- **Hero**: Full-bleed image + doodle frame overlay (`frame-hero.png`)
- **Frame**: Inset 8px from edges, scaled 1.1x with `overflow: visible`
- **3 slides** for carousel testing
- **Landscape layout** on both mobile and desktop
- **Arrows** positioned outside frame (no page indicator)

### D. `/mnt/agents/output/app/src/pages/AboutPage.tsx` (The Unlikely Entertainment)
- Basic placeholder content

### E. `/mnt/agents/output/app/src/index.css`
- **Cursor**: `paw-cursor.png` (paw print cursor)
- **CSS rule**: `html a, html button { cursor: url('/paw-cursor.png') 24 24, pointer; }`
- **Grain overlay fix**: `.grain-overlay > header { position: sticky !important; }` (for sticky header)

---

## 5. CRITICAL CSS FIXES

### Grain Overlay z-index Issue
`.grain-overlay > * { position: relative }` was overriding `fixed` positioning for fullscreen menu.
**Fix**: Inline style `style={{ position: 'fixed' }}` or increase specificity.

### Sticky Header
`header` element wraps both `CountdownBanner` and `Navbar`.
Header must have `position: sticky` (NOT the children individually).

---

## 6. PUBLIC ASSETS (`/mnt/agents/output/app/public/`)

| File | Description |
|------|-------------|
| `menu-banner-desktop.png` | Desktop menu banner (landscape) |
| `thestisours.png` | "THE STREET IS OURS" graffiti text |
| `footer-combined.png` | Combined: PR logo + graffiti text (graffiti ON TOP) |
| `prlogo.png` | Browser favicon |
| `paw-cursor.png` | Paw print cursor (48x48, hotspot 24 24) |
| `close-x.png` | Graffiti X close button |
| `arrow-left.png` / `arrow-right.png` | Graffiti style arrows |
| `frame-tl.png` / `frame-tr.png` / `frame-bl.png` / `frame-br.png` | Hero corner decorations |
| `frame-hero.png` | Hero doodle frame overlay |
| `street-card.png` | Street page unified category image |
| `hero-slide-new.png` | Bite POP hero slide |
| `bk_04.png` | Background texture |

---

## 7. DESIGN TOKENS

- **Brand Red**: `#C63B38` (menu background, countdown banner)
- **Cursor**: `url('/paw-cursor.png') 24 24, default`
- **Graffiti Font**: Keep street/graffiti aesthetic throughout
- **Aspect Ratios**: Cards `5:6`, Hero frames `16:9`, Menu image ~`4:3`
- **Sticky Header Height**: ~100px (40px banner + 60px navbar)

---

## 8. GIT STATUS (Current)

```
Branch: main
Ahead of origin/main by 1 commit
Latest: 39ff988 fix: rename menu Bite Pop to Pets Do Rock
Remote: git@github.com:markchang78-blip/wrong-store.git
```

**Immediate action needed**: `git push origin main`

---

## 9. ENVIRONMENT INFO

```
VITE_SUPABASE_URL=https://ogyqmdhgrxnvnuotfieg.supabase.co
VITE_SUPABASE_KEY=sb_publishable_FveI9vssxrKvSp-gUFXPLg_pHlHPulC
```

---

## 10. KNOWN ISSUES

1. **GitHub push fails**: SSH key rejected. Need new auth method.
2. **Menu links**: Some link to same route (e.g., two items → #/collections, two → #/news). This is intentional per user request but may need separate pages later.

---

## 11. NEW SESSION RECOVERY STEPS

1. `cd /mnt/agents/output/app`
2. Check `git status` — should show 1 commit ahead
3. Try `git push origin main` — if fails:
   a. Check if token env var exists
   b. Or switch remote to HTTPS: `git remote set-url origin https://github.com/markchang78-blip/wrong-store.git`
   c. Or generate new SSH key pair and add to GitHub
4. Verify deployment on https://www.pets-rock.world
5. Continue with user's next request
