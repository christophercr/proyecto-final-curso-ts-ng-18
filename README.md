# Proyecto Final

Lucía trabaja en una gran empresa tecnológica como reclutadora y tiene que revisar muchas solicitudes todos los días para
encontrar el mejor talento posible para su empresa. Para ayudarla a hacerlo de manera eficiente, utiliza una pequeña aplicación
que muestra toda la información relevante de los candidatos en una tabla:

<img src="https://github.com/christophercr/proyecto-final-curso-ts-ng-18/blob/main/current-application.png" alt="current app">

Últimamente, Lucía ha estado aún más ocupada porque su empresa comenzó a recibir muchas más solicitudes de muy buenos candidatos.
La tabla se llenó demasiado de información y necesita una mejor manera de filtrar las solicitudes entrantes.
¿Puedes ayudarla a construir una versión nueva y optimizada de su aplicación de reclutamiento?

## Requerimientos

Después de algunas charlas con Lucía, lo que a ella le gustaría es lo siguiente:

### 1. Ver la lista con todas las solicitudes mostrando los siguientes datos:

| Dato                   | Tipo                                                    |
|------------------------|---------------------------------------------------------|
| Nombre completo        | `string`                                                |
| Email                  | `string`                                                |
| Edad                   | `number` (calculado a partir de la fecha de nacimiento) |
| Años de experiencia    | `number`                                                |
| Puesto solicitado      | `string`                                                |
| Estado de la solicitud | `aprobado` - `rechazado` - `en espera`                  |
| Fecha de la solicitud  | `date`                                                  |

### 2. Ordenar por:

- Puesto solicitado
- Años de experiencia
- Fecha de solicitud

### 3. Filtrar por:

- Nombre
- Estado (`aprobado` - `rechazado` - `en espera`)
- Puesto solicitado

### 4. Poder editar cualquier solicitud para corregir datos incorrectos y/o modificar el estado de la solicitud.

- **El único dato que no es posible modificar es la fecha de solicitud.**
- **Preferentemente, el formulario de modificaciones se mostrará en una pantalla distinta a la de la lista de
  solicitudes**
- **Todos los campos son obligatorios. Además debería tener las siguientes validaciones para asegurar que los datos
  ingresados son correctos.**

| Dato            | Validaciones                  |
|-----------------|-------------------------------|
| Nombre completo | No más de 40 caracteres       |
| Email           | Formato de email válido       |
| Edad            | Mayor de 17 años, menor de 65 |

### 5. Poder registrar nuevas solicitudes rellenando un formulario con los datos requeridos.

- **Preferentemente, el formulario se mostrará en una pantalla distinta a la de la lista de solicitudes.**
- **Todos los campos son obligatorios. Además debería tener las validaciones necesarias para asegurar que los datos
  ingresados son correctos.**

| Dato                   | Validaciones                                                                                           |
|------------------------|--------------------------------------------------------------------------------------------------------|
| Nombre completo        | No más de 40 caracteres                                                                                |
| Email                  | Formato de email válido                                                                                |
| Edad                   | Mayor de 17 años, menor de 65                                                                          |
| Estado de la solicitud | `en espera` (sólo puede tener ese valor)                                                               |
| Fecha de la solicitud  | Fecha válida en formato DD/MM/AAAA (sólo puede ser fecha anterior o igual al día actual, nunca futura) |

Lucía está abierta a cualquier mejora de la interfaz de usuario que consideres conveniente.