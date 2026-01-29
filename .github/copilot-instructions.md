# React Lab - AI Coding Instructions

This is a **React learning laboratory** with a structured phase-based roadmap. The project demonstrates React fundamentals through exercise progression, using Vite + React Router for navigation.

## Project Architecture

**Core Structure:**
- `src/App.jsx` - Routes exercises via React Router (home page `/`, exercise details `/ejercicio/:id`)
- `src/pages/Home.jsx` - Displays phases from `src/data/roadmap.js`, expandable sections with exercise links
- `src/pages/Ejercicio.jsx` - Dynamic component loader based on exercise ID (maps IDs to imported components)
- `src/exercises/fase-XX/` - Phase-organized exercise components
- `src/data/roadmap.js` - Master exercise metadata (phases, exercise IDs, names)

**Key Design Decision:** The `EjercicioDetalle` component uses a static `componentes` object that maps exercise IDs to components. New exercises require:
1. Creating component file in `src/exercises/fase-XX/FileName.jsx`
2. Importing it in `src/pages/Ejercicio.jsx`
3. Adding entry to the `componentes` object with matching ID
4. Adding metadata to `roadmapData` in `src/data/roadmap.js`

## Development Workflow

**Essential Commands:**
- `pnpm dev` - Start Vite dev server (HMR enabled via `@vitejs/plugin-react-swc`)
- `pnpm build` - Production build to `dist/`
- `pnpm lint` - Run ESLint (flags unused variables except UPPERCASE_NAMES)
- `pnpm preview` - Preview production build locally

**Build Stack:**
- **Bundler:** Vite (config in `vite.config.js`)
- **React Compiler:** SWC (faster than Babel, handles JSX)
- **Package Manager:** pnpm (uses lockfile `pnpm-lock.yaml`)

## Code Conventions

**Component Style:**
- Functional components with hooks (React 19)
- Use `export default` for page-level components (Home.jsx, Saludo.jsx)
- Use named exports for reusable components (EjercicioDetalle)
- Props as function parameters without destructuring for simple cases (see `Saludo` component)

**Exercise Pattern Example** (`Saludo.jsx`):
```jsx
export default function Saludo({ nombre }) {
  return <h2>Hola, {nombre}!</h2>
}
```

**Styling:**
- Inline `style={{ }}` objects for layout (see Home.jsx sections)
- CSS modules pattern expected for component-specific styles (App.css exists)
- No CSS-in-JS framework configured

**Routing:**
- `react-router-dom` v7.13.0 (uses `BrowserRouter`, `Routes`, `Route`, `Link`)
- Exercise navigation via `useParams()` for `:id` param
- Internal links use `<Link>` component (not `<a>` tags)

## Critical Integration Points

1. **Exercise Registration:** All new exercises MUST have IDs matching:
   - Entry in `roadmapData` array (fase, titulo, exercise objects with id/nombre)
   - Mapping in `componentes` object in `Ejercicio.jsx`
   - Failure to sync causes "Ejercicio no encontrado" message

2. **React Router Configuration:**
   - Home page expands/collapses phases (state in Home.jsx)
   - Clicking exercise link navigates to `/ejercicio/{id}`
   - Invalid IDs render fallback message

3. **Data Flow:**
   - Home.jsx reads `roadmapData` → renders expandable sections
   - Click → React Router pushes to `/ejercicio/:id`
   - Ejercicio.jsx reads `:id` param → looks up component in `componentes` object

## ESLint Rules (Customized)

- **no-unused-vars:** Error level, but allows uppercase-prefix variables (e.g., `_unused`, `CONSTANT`)
- **react-hooks/exhaustive-deps:** Enforced via plugin (watch React Hook warnings in dev)
- **react-refresh/only-export-components:** Warns if exports aren't components

**Linting Practice:** Ensure `pnpm lint` passes before commit. SWC transpilation is fast, so HMR feedback is immediate.

## Dependencies Note

- **React 19.2.0** - Latest version, includes automatic JSX transformation
- **React Router 7.13.0** - Latest, used only for basic routing (no advanced features like loaders/actions)
- **Vite 7.2.4** - Fast dev server with instant HMR
- **pnpm** - Faster lockfile, strict peer dependency handling

Avoid adding state management (Zustand, Redux) until Phase 4 exercises call for it.
