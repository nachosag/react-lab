# Ejercicios React — Fases 0 y 1

En esta sección se presentan ejercicios prácticos orientados a aprender y practicar las fases 0 y 1 del roadmap de React. Se incluyen **3 ejercicios pequeños** y **1 ejercicio grande** por grupo de fases.

---

## 📍 Fases cubiertas: 0 y 1

### 🎯 Objetivo

Practicar:

* JavaScript moderno
* JSX
* Componentes funcionales
* Props vs State
* Renderizado condicional
* Lists & Keys

---

## 🧩 Ejercicios pequeños (x3)

### **Ejercicio 1 — Componente de saludo simple**

Crear un componente `<Saludo />` que reciba por **props** el nombre del usuario y muestre:

> Hola, {nombre}!

**Puntos a practicar:** props, JSX.

---

### **Ejercicio 2 — Contador con `useState`**

Crear un componente `<Contador />` con un botón para incrementar un número.

Requisitos:

* valor inicial: 0
* botón incrementa en +1

**Puntos a practicar:** estado local, eventos.

---

### **Ejercicio 3 — Lista de tareas estática**

Crear un componente `<ListaTareas />` que renderice un array estático:

```js
['Comprar pan', 'Lavar ropa', 'Leer']
```

Usar **.map()** y **key**.

**Puntos a practicar:** listas, keys, JSX.

---

## 🧱 Ejercicio grande (x1)

### **Mini App: "Tarjetas de Usuarios"**

Construir una mini app que muestre una lista de usuarios en formato tarjeta.

#### Datos sugeridos

```js
[
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Luis', edad: 31 },
  { nombre: 'Carla', edad: 22 }
]
```

#### Requisitos funcionales

* Mostrar cada usuario como tarjeta.
* Botón para ocultar/mostrar la lista completa (**renderizado condicional**).
* Componente `<UsuarioCard />` reutilizable que reciba props.

#### Puntos clave a practicar

* JSX
* props
* composición de componentes
* estado (`useState`)
* condicionales
* renderizado de listas

#### Extensiones opcionales

* agregar un campo "ocupación"
* aplicar estilos
* agregar contador de likes por usuario

---

### ✅ Resultado esperado después de estas fases

El alumno debe ser capaz de:

* construir componentes
* pasar información por props
* manejar estado local
* reaccionar a eventos
* renderizar listas
* aplicar condicionales en JSX

---

## 📍 Fases cubiertas: 2 y 3

### 🎯 Objetivo

Practicar:

* Hooks (`useState`, `useEffect`, `useContext`, etc.)
* Custom hooks
* Routing con React Router o TanStack Router

---

## 🧩 Ejercicios pequeños (x3)

### **Ejercicio 1 — Temporizador con `useEffect`**

Crear un componente `<Temporizador />` que muestre los segundos transcurridos desde que se montó el componente.

**Requisitos:**

* usar `setInterval`
* limpiar el intervalo en el return del efecto

**Puntos a practicar:** efectos, cleanup, montaje y desmontaje.

---

### **Ejercicio 2 — Contador con `useReducer`**

Implementar un contador usando `useReducer` con acciones:

* `incrementar`
* `decrementar`
* `reset`

**Puntos a practicar:** reducers, actions, lógica pura.

---

### **Ejercicio 3 — Custom Hook: `useLocalStorage`**

Implementar un hook `useLocalStorage(key, valorInicial)` que:

* lea el valor desde localStorage
* si no existe, use el valor inicial
* sincronice cada actualización

**Puntos a practicar:** custom hooks, side effects.

---

## 🧱 Ejercicio grande (x1)

### **Mini App: "Pequeño Dashboard con Routing"**

Construir una pequeña app con navegación entre pantallas.

#### Secciones mínimas:

* `/` → pantalla Home
* `/usuarios` → lista de usuarios
* `/config` → configuración

#### Requisitos funcionales

* Navegación con React Router
* Componente `<Navbar />` para cambiar de ruta
* Usar un `useContext` para almacenar el tema visual (`light` | `dark`)
* Persistir el tema con `useLocalStorage`

#### Puntos clave a practicar

* routing declarativo
* nested routes (opcional)
* custom hooks
* context global
* side effects

#### Extensiones opcionales

* agregar parámetros dinámicos: `/usuarios/:id`
* fetch simulado para cargar usuarios
* agregar animaciones al cambio de pantalla

---

## 📍 Fases cubiertas: 4 y 5

### 🎯 Objetivo

Practicar:

* Manejo de estado global (Context, Zustand, Jotai)
* Estilos y librerías de componentes (CSS Modules, Tailwind, UI libs)

---

## 🧩 Ejercicios pequeños (x3)

### **Ejercicio 1 — Tema global con Context**

Crear un contexto `ThemeContext` con valores:

* `theme: 'light' | 'dark'`
* `toggleTheme()`

Integrar en un componente `<App />` y un botón que alterne el tema.

**Puntos a practicar:** context, provider, consumo de datos.

---

### **Ejercicio 2 — Store minimalista con Zustand**

Implementar un store `useCounterStore` con Zustand con acciones:

* `incrementar`
* `decrementar`

Mostrar el valor en un componente y actualizarlo desde otro para comprobar que comparten estado.

**Puntos a practicar:** stores, suscripciones selectivas.

---

### **Ejercicio 3 — Estilos con Tailwind**

Tomar un componente `<Card />` y darle estilos usando Tailwind.

Requisitos mínimos:

* borde
* padding
* shadow
* hover effect

**Puntos a practicar:** composición estética sin crear CSS manual.

---

## 🧱 Ejercicio grande (x1)

### **Mini App: "Tablero de Tareas Global"**

Construir una app que administre una lista de tareas usando estado global.

#### Requisitos funcionales

* Store global (Context, Zustand o Jotai)
* Acciones: agregar, completar, eliminar
* Contador de tareas pendientes
* Contador de tareas completadas
* Entrada de texto para agregar

#### Requisitos visuales

* Estilado con una de estas opciones:

  * Tailwind
  * CSS Modules
  * Chakra UI
  * Material UI

#### Puntos clave a practicar

* separación UI vs lógica
* estado global
* sincronización entre múltiples componentes
* diseño de UX básica

#### Extensiones opcionales

* persistencia en `localStorage`
* filtros: "todas | completadas | pendientes"
* estadísticas de productividad

---

## 📍 Fases cubiertas: 6 y 7

### 🎯 Objetivo

Practicar:

* Fetching de datos (REST / GraphQL)
* Sincronización de estado remoto (React Query / SWR)
* Testing (unit, integration, e2e)

---

## 🧩 Ejercicios pequeños (x3)

### **Ejercicio 1 — Fetch básico con `fetch()`**

Crear un componente `<Usuarios />` que haga petición a una API pública y muestre una lista.

**Requisitos:**

* usar `useEffect`
* manejar loading y error
* mostrar lista final

**Puntos a practicar:** estado remoto, side-effects.

---

### **Ejercicio 2 — React Query: sincronización automática**

Usar React Query para obtener posts desde una API.

**Requisitos:**

* `useQuery`
* revalidación automática
* estados: loading / error / success

**Puntos a practicar:** caching, data-sync, key-based queries.

---

### **Ejercicio 3 — Test unitario simple con Vitest + RTL**

Crear un test para un componente `<Button />` que verifique:

* render
* texto
* evento `onClick`

**Puntos a practicar:** testing de UI desde perspectiva del usuario.

---

## 🧱 Ejercicio grande (x1)

### **Mini App: "Pokedex Remota con Cache"**

Construir una mini app que consulte la API de Pokémon.

#### Requisitos funcionales

* pantalla con buscador
* listar pokemons
* caché de resultados
* detalle al hacer click

#### Requisitos técnicos

* usando React Query o SWR
* fetch desde REST
* estados: loading, error, empty

#### Testing mínimo

* tests para:

  * fetch exitoso (mockeado)
  * pantalla de error
  * interacción de usuario

#### Extensiones opcionales

* "infinite scroll"
* favoritos persistidos
* GraphQL alternativo

---

## 📍 Fases cubiertas: 8, 9 y 10

### 🎯 Objetivo

Practicar:

* Frameworks sobre React (Next.js, Astro, React Native)
* Temas avanzados (Suspense, Error Boundaries, Portals, Animaciones)
* Opcionales / alternativos

---

## 🧩 Ejercicios pequeños (x3)

### **Ejercicio 1 — Página con Next.js (SSR + SSG)**

Crear una página `/posts` que:

* use `getStaticProps()` para render estático
* muestre una lista de posts

**Puntos a practicar:** SSG, separación de server/client.

---

### **Ejercicio 2 — Error Boundary básico**

Crear un componente `<ErrorBoundary />` que capture errores en componentes hijos y muestre fallback.

**Puntos a practicar:** errores controlados en UI.

---

### **Ejercicio 3 — Animación con Framer Motion**

Animar la entrada y salida de un componente con:

* `initial`
* `animate`
* `exit`

**Puntos a practicar:** micro-interacciones que mejoran UX.

---

## 🧱 Ejercicio grande (x1)

### **Mini App: "Blog con Next.js + ISR + Detalle"**

Construir un pequeño blog usando Next.js.

#### Requisitos funcionales

* Página `/` con listado de posts
* Ruta dinámica `/posts/[id]`
* Enlaces entre páginas

#### Requisitos técnicos

* `getStaticProps()` + `getStaticPaths()`
* ISR (regeneración incremental) opcional
* fetch de API REST o GraphQL

#### Extensiones opcionales

* animaciones en navegación
* modo dark/light global
* buscador por título
* versión mobile o React Native

#### Bonus avanzado

* agregar `ErrorBoundary` para fallback
* usar `Suspense` en fetches experimentales

