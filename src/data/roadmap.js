// src/data/roadmap.js
export const roadmapData = [
  {
    fase: "Fase 1",
    titulo: "Fundamentos de React",
    ejercicios: [
      { id: "saludo", nombre: "Ejercicio 1: Saludo Simple (Props)" },
      { id: "contador", nombre: "Ejercicio 2: Contador (useState)" },
      { id: "tareas-estaticas", nombre: "Ejercicio 3: Lista de Tareas (Maps & Keys)" },
      { id: "tarjetas-usuarios", nombre: "Mini App: Tarjetas de Usuarios" }
    ]
  },
  {
    fase: "Fase 2",
    titulo: "Hooks y Routing",
    ejercicios: [
      { id: "temporizador", nombre: "Ejercicio 1: Temporizador (useEffect)" },
      { id: "reducer", nombre: "Ejercicio 2: Contador Pro (useReducer)" },
      { id: "localstorage", nombre: "Ejercicio 3: Custom Hook useLocalStorage" },
      { id: "dashboard-routing", nombre: "Mini App: Dashboard con Routing" }
    ]
  },
  {
    fase: "Fase 4",
    titulo: "Manejo de Estado Global y Estilos",
    ejercicios: [
      { id: "tema-context", nombre: "Ejercicio 1: Tema Global (Context API)" },
      { id: "zustand-store", nombre: "Ejercicio 2: Store Minimalista (Zustand)" },
      { id: "tailwind-card", nombre: "Ejercicio 3: Estilos con Tailwind" },
      { id: "tablero-global", nombre: "Mini App: Tablero de Tareas Global" }
    ]
  },
  {
    fase: "Fase 6",
    titulo: "Fetching de Datos y Testing",
    ejercicios: [
      { id: "fetch-basico", nombre: "Ejercicio 1: Fetch con useEffect" },
      { id: "react-query", nombre: "Ejercicio 2: Sincronización con React Query" },
      { id: "test-unitario", nombre: "Ejercicio 3: Test Unitario (Vitest + RTL)" },
      { id: "pokedex", nombre: "Mini App: Pokedex Remota con Cache" }
    ]
  },
  {
    fase: "Fase 8",
    titulo: "Frameworks y Temas Avanzados",
    ejercicios: [
      { id: "nextjs-ssr", nombre: "Ejercicio 1: SSR + SSG en Next.js" },
      { id: "error-boundary", nombre: "Ejercicio 2: Error Boundary" },
      { id: "framer-motion", nombre: "Ejercicio 3: Animaciones con Framer Motion" },
      { id: "blog-nextjs", nombre: "Mini App: Blog con Next.js + ISR" }
    ]
  }
];