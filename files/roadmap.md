# Roadmap de aprendizaje de React

A continuación se presenta un roadmap estructurado en **fases**, inspirado en el roadmap oficial de React de roadmap.sh, pero convertido en un documento explicativo y argumentado. Cada fase incluye **qué aprender**, **por qué** y **qué problemas resuelve** cada tecnología o concepto.

---

## 📍 Fase 0 — Prerrequisitos

Antes de entrar a React, el roadmap recomienda asegurar la bases.

### Tecnologías / conceptos a dominar

#### **JavaScript moderno (ES6+)**

**Problema que resuelve:** Permite escribir código más expresivo, modular y mantenible respecto a versiones antiguas del lenguaje.
**Conceptos clave:**

* `let` / `const`
* Arrow functions
* Destructuring
* Modules
* Promises / async-await
* Array methods (`map`, `filter`, `reduce`, etc.)

#### **NPM / PNPM / Yarn (Gestores de paquetes)**

**Problema que resuelven:** Permiten instalar y versionar dependencias del proyecto de forma reproducible.
**Conceptos clave:**

* `package.json`
* versionado semántico
* scripts

#### **Herramientas de bundling / build (Vite, Webpack, etc.)**

**Problema que resuelven:** Transforman el código fuente en una versión optimizada para el navegador.
**Conceptos clave:**

* módulos
* transpilers (ej: Babel)
* hot reload

---

## 📍 Fase 1 — Fundamentos de React

En esta fase se aprende cómo funciona React en su nivel más básico.

### Conceptos principales

#### **Componentes funcionales**

**Problema que resuelven:** Permiten dividir la UI en unidades reutilizables y testables.
**Conceptos clave:**

* funciones puras
* salida = JSX

#### **JSX**

**Problema que resuelve:** Permite escribir UI con sintaxis similar a HTML dentro de JavaScript.
**Conceptos clave:**

* transpile a `React.createElement`
* expresiones embebidas

#### **Props vs State**

**Problema que resuelven:** Distinguen información externa (props) de información interna mutable (state).
**Conceptos clave:**

* inmutabilidad
* flujo de datos unidireccional

#### **Renderizado condicional**

**Problema que resuelve:** Permite adaptar la UI según el estado o las props.

#### **Listas y Keys**

**Problema que resuelven:** Permiten renderizar colecciones sin inconsistencias en el DOM virtual.

#### **Eventos**

**Problema que resuelven:** Permiten capturar interacciones del usuario.

---

## 📍 Fase 2 — Hooks

React moderno usa hooks para manejar estado y side-effects.

### Hooks básicos

* `useState`: Manejo de estado local.
* `useEffect`: Manejo de efectos secundarios.

**Problemas que resuelven:**

* reemplazo de lifecycle methods de clases
* sincronización con el mundo externo (fetch, timers, DOM, etc.)

### Hooks comunes

* `useContext`: comparte estado global simple sin prop-drilling
* `useRef`: referencias a valores mutables o DOM
* `useCallback` / `useMemo`: optimizaciones de renderizado
* `useReducer`: estado complejo con lógica explícita

### Custom Hooks

**Problema que resuelven:**
Permiten **extraer lógica reutilizable** sin renderizar componentes adicionales.

---

## 📍 Fase 3 — Routing

Un proyecto real requiere navegación.

### Tecnologías destacadas

#### **React Router**

**Problema que resuelve:** Permite navegación declarativa en SPA.
**Conceptos clave:**

* rutas dinámicas
* loaders
* nested routes

#### **TanStack Router**

**Problema que resuelve:** Modelo basado más en data-loading y patterns modernos.

---

## 📍 Fase 4 — Manejo de Estado Global

React sólo soluciona el estado local; proyectos complejos requieren más.

### Opciones

#### **Context API**

**Problema que resuelve:** Evita el "prop drilling".

#### **Zustand**

**Problema que resuelve:** Estado global minimalista sin boilerplate.
**Conceptos clave:**

* stores
* acciones
* suscripción selectiva

#### **Jotai**

**Problema que resuelve:** Mantiene estado global como "átomos" independientes.

> Notas: Redux sigue existiendo pero el roadmap no lo enfatiza.

---

## 📍 Fase 5 — Estilos y UI

Todavía falta dar estilo.

### Opciones recomendadas

#### **CSS Modules**

**Problema que resuelve:** Evita colisiones de nombres en CSS.

#### **Tailwind CSS**

**Problema que resuelve:** Iteración rápida sin inventar nombres de clases.

#### **Component Libraries**

Proveen componentes listos para usar.

Ejemplos:

* Material UI
* Chakra UI
* Shadcn UI
* Radix UI
* Headless UI

**Problema que resuelven:** Aceleran construcción de UI consistente sin diseñar desde cero.

---

## 📍 Fase 6 — Fetching de Datos

Toda app real consume datos.

### Opciones destacadas

#### **Axios / Fetch (REST)**

**Problema que resuelven:** Hacer requests HTTP.

#### **React Query / SWR**

**Problema que resuelven:** Sincronizar estado remoto con UI.
**Conceptos clave:**

* caching
* revalidación
* polling

#### **GraphQL (Apollo / Relay / urql)**

**Problema que resuelve:** Consulta declarativa sobre API única.
**Conceptos clave:**

* queries
* mutations
* schema

---

## 📍 Fase 7 — Testing

React requiere testear UI y lógica.

### Tipos

* unit tests
* integration tests
* e2e tests

### Herramientas

#### **Jest / Vitest**

Testing de unidad.

#### **React Testing Library**

**Problema que resuelve:** Testear UI desde la perspectiva del usuario.

#### **Cypress / Playwright**

Testing End-to-End para flujos reales.

---

## 📍 Fase 8 — Frameworks sobre React

Para apps grandes conviene usar framework.

Ejemplos:

* **Next.js** (SSR/SSG, API routes)
* **Astro** (islands architecture)
* **React Native** (mobile)

**Problema que resuelven:**

* performance
* SEO
* routing avanzado
* asset optimization

---

## 📍 Fase 9 — Temas Avanzados

Cuando ya dominás lo anterior.

### Incluyen

* Suspense
* Portals
* Error Boundaries
* Animaciones (Framer Motion, react-spring)
* Server APIs

**Problema que resuelven:**
Casos avanzados de interacción, performance, UX y fallback.

---

## 📍 Fase 10 — Opcionales / Alternativos

El roadmap aclara que no hay orden rígido.

Opcionales:

* MobX
* Router alternativo
* Librerías UI adicionales

---

## 🎯 Conclusión

Este roadmap convierte el esquema visual en un recorrido argumentado y secuencial para aprender React en profundidad. La meta final es construir aplicaciones completas, testables, escalables y mantenibles.

