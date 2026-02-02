# Componentes

- **¿Qué es un componente?:** Un componente es una función que devuelve código HTML con lógica. Un componente _debería ser_ la mínima unidad de lógica posible. Los componentes son la unidad fundamental en React. Se definen como *bloques de código reutilizables e independientes* que encapsulan su propia lógica, estado y UI. Piénsalos como piezas de Lego que puedes combinar para construir interfaces complejas.

## Tipos de componentes: Clases vs. Funciones:

- **Componentes de Clase:** Son clases de JavaScript que extienden React.Component y tienen un método render() que devuelve JSX.

- **Componentes Funcionales:** Son funciones de JavaScript que reciben props (propiedades) como argumento y devuelven JSX.

- **Reutilización y Composición:** La principal ventaja de los componentes es su reutilización. Puedes crear un componente una vez y usarlo múltiples veces en diferentes partes de tu aplicación. Además, los componentes se pueden componer, lo que significa que puedes anidar componentes dentro de otros para construir UIs más complejas, manteniendo el código organizado y modular.

- **Propiedades (Props):** Las "props" son la forma en que los componentes se comunican entre sí. **Son datos que se pasan desde un componente padre a un componente hijo**, y son de solo lectura (inmutables) dentro del componente hijo.

- **JSX (JavaScript XML):** Se introduce JSX como una extensión de sintaxis de JavaScript que permite escribir estructuras de UI de manera similar a HTML dentro del código JavaScript. JSX no es HTML directamente, sino una forma de describir cómo debería verse la UI, y que React lo transpila a llamadas a funciones de JavaScript.

- **Ciclo de vida (introducción):** Se hace una mención breve al ciclo de vida de los componentes, que son las diferentes fases por las que pasa un componente (montaje, actualización, desmontaje). Los **Hooks** (**useEffect**) son la forma de manejar estos ciclos de vida en componentes funcionales.

