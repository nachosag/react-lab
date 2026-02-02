# ¿Qué es el `useEffect`?

El `useEffect` es un **hook** de React que sirve para aplicar efectos secundarios. 

El `useEffect` acepta **dos** parámetros:

1. Una función a ejecutar.
2. Un arreglo de dependencias.

La función pasada se puede ejecutar cuando:

1. Se monta el componente.
2. Cada vez que se modifique alguno de los valores del arreglo de dependenci01as.

## ¿Cuándo utilizar el `useEffect`?

El `useEffect` se debe utilizar cuando:

- Queremos comunicarnos con un endpoint.
- Con operaciones asíncronas.
- Para controlar parámetros de entrada provenientes de un componente **padre**.

