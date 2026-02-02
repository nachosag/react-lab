# Detección de cambios

Una SPA (Single Page Application) es una aplicación que tiene un único index.html con un elemento ``div`` con `id='root'` en el cual, dentro se cargará todo el código de React. Todo esto cambia de forma dinámica. Esto implca que debe haber una forma en la cual React detecta que hay un cambio. Sino, siempre veríamos lo mismo. 

## ¿Cómo React detecta los cambios?

React detecta los cambios a través de *triggers*, es decir, un evento, el cual, inicie la acción de render. Un *trigger* puede ser:

- Un botón
- El estado de un componente
- Un llamado a una API

Existen 2 tipos de *triggers*:

1. **Trigger Inicial o Renderizado Inicial:** Ocurre cuando un componente se **monta por primera vez** en el DOM (Document Object Model) de la página. Es el primer momento en que React "dibuja" el componente en la pantalla basándose en su estado y propiedades iniciales.

2. **Re-render o Re-renderizado:** Ocurre **después del renderizado inicial**, cuando hay **cambios en el "state" (estado) interno** de un componente o en las **"props" (propiedades)** que recibe de su componente padre. Cuando React detecta uno de estos cambios, no vuelve a construir la página desde cero. En su lugar, utiliza el **Virtual DOM** para comparar la nueva versión del componente con la anterior. Solo las partes que realmente han cambiado se "re-renderizan" y se aplican al DOM real, lo que hace que las actualizaciones sean rápidas y eficientes.

# ¿Qué es un commit?

Un commit en React es la aplicación de un cambio en el DOM (**No el Virtual DOM**).