# ¿Qué es el `useState`?

El `useState` es un **hook** de React que sirve para **manejar el estado de un componente**. Permite que un componente "recuerde" información y se vuelva a renderizar cuando esa información cambia.

## Funcionamiento

`useState` retorna un array con dos elementos:

1. La variable de estado actual
2. Una función para ctualizar ese estado

El valor inicial se pasa como argumento a `useState`.
Para actualizar el estado, se usa la función setter. Est re-renderiza el componente con el nuevo valor.

**Importante:** Se puede tener múltiples llamadas a `useState` dentro de un mismo componente funcional para manejar diferentes piezas de estado de forma independiente.

Cuando la **actualización del estado depende del valor previo**, es buena práctica pasar una función al setter en lugar del valor directo (ej., `setCount(prevCount => prevCount + 1)`).

Esto es crucial porque `useState` **no garantiza que el count actual esté actualizado** en el momento de la llamada si hay múltiples actualizaciones pendientes o asincronía. La función `prevCount` siempre asegura que se trabaja con el estado más reciente.

Por último, `useState` es una función asíncrona por razones de optimización para agrupar renders.