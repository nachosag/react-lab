# ¿Qué son los Custom Hooks?

Son funciones de JavaScript cuya particularidad es que **utilizan otros hooks de React** internamente. Permiten **extraer lógica repetitiva** de los componentes y encapsularla en una función reutilizable. Los Custom Hooks surgen de la necesidad de compartir lógica de estado entre componentes. La convención principal es que **su nombre debe comenzar con la palabra `use`** (ej. `useMyCustomHook`). Esto ayuda a React a entender que se están utilizando hooks dentro de ellos y aplica las "reglas de los hooks" (ej., llamarlos solo en la parte superior de un componente funcional o en otro custom hook).

## Problema que resuelven

Los custom hooks ofrecen una forma **más limpia y directa** de compartir funcionalidad con estado.

## Ventajas

- **Reutilización de lógica:** Permiten no repetir el mismo código con `useState`, `useEffect`, etc., en múltiples componentes.
- **Claridad y legibilidad del código:** Hacen que los componentes sean más cortos y fáciles de entender, ya que la lógica compleja se abstrae en el custom hook
- **Mantenibilidad:** Si cambia la lógica solo hay que modificar el custom hook en un solo lugar.
- **Separación de preocupaciones:** Ayudan a separar la lógica de negocio y de estado de la lógica de UI del componente.
- **Testing más fácil:** La lógica dentro de un custom hook puede ser probada de forma aislada, sin necesidad de renderizar el componente completo.
