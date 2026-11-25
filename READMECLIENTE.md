# StatFit

## Backlog

Ordenadas de más a menos prioridad, según dependencias y aporte a la app.

### Hecho

1. **Listar grupos musculares**: base de todo el flujo de rutinas.
2. **Listar ejercicios de cada músculo**: depende del punto 1.
3. **Mostrar detalles de cada ejercicio**: completa el flujo de consulta.
4. **Registro**: flujo de registro
5. **Mensajes**: flujo de mensajes

### Siguiente bloque (funcionalidad núcleo)

1. **Calcular calorías**: segunda función principal de la app (`calorias.html`) e independiente del login.
2. **Calcular porcentaje de calorías por comida**: depende del cálculo de calorías, por eso va justo después.

### Personalización de la rutina

3. **Adición de pesos**: hace útil la rutina al registrar cuánto levantas.

### Extras

4. **Registrarse / iniciar sesión**
5. **Cambiar modo claro/oscuro**


## Mapa de pantallas y datos que muestran

* **Vista: Inicio**
  * **Datos:** Menú superior (Inicio, Ejercicios, Calorías y tema), mensaje de bienvenida, botones de acceso (*Inicia Sesión*, *Regístrate*), modalidades de rutinas (*Calistenia*, *Casa*, *Gimnasio*) y resumen rápido de calorías (consumidas con barra de progreso y calorias quemadas).
  * **Navegación:** Lleva a *Login/Registro*, *Creación de rutinas*, *Ejercicios* y *Calorías*.

* **Vista: Inicio de Sesión**
  * **Datos:** Menú superior común, formulario de acceso (correo electrónico y contraseña) y enlace a registro.
  * **Navegación:** Lleva a *Registro*, *Creación de rutinas*, *Ejercicios* y *Calorías*.

* **Vista: Registro**
  * **Datos:** Menú superior común, formulario de alta (nombre completo, correo electrónico, contraseña y confirmar contraseña) y enlace a inicio de sesión.
  * **Navegación:** Lleva a *Inicio de sesion*, *Creación de rutinas*, *Ejercicios* y *Calorías*.

* **Vista: Ejercicios**
  * **Datos:** Menú superior común, cabecera con acceso directo a crear rutina (*Crea aquí tu rutina*), modalidades de entrenamiento (*Calistenia*, *Casa*, *Gimnasio*) y listado de días/rutinas para registrar pesos (*Día de Pecho*, *Día de espalda*, *Día de pierna*, *Día de Full body*).
  * **Navegación:** Lleva al formulario/vista de *Creación de rutinas* y a la vista de *Registro de pesos* de cada día ademas de *Login/Registro*, *Creación de rutinas*, *Ejercicios* y *Calorías*.

* **Vista: Calorías**
    * **Datos:** Menú superior común, barras de progreso de comidas (*Desayuno* y tres bloques etiquetados como *Almuerzo*), selectores de datos personales (*KG*, *CM*, *años*, sexo/selector *Hombre >*, *Frecuencia*, *Objetivo*) y cálculo/total calórico mostrado.
    * **Navegación:** Lleva a *Inicio*, *Login/Registro*, *Ejercicios* y *Calorías*

* **Vista: Creación y Detalle de Rutinas**
  * **Datos:** Menú superior común, panel de visualización de rutina existente con su nombre (*Teta al fallo*) y listado de ejercicios con el número de series, y panel de *Crear Rutina* con (`+`) para añadir ejercicios.
  * **Navegación:** Lleva a *Inicio*, *Ejercicios*, *Calorías* o abre el selector para añadir ejercicios a la ranura (`+`).

## Hito 2

### Hecho

- 1º Crud de almacen.js.
- 2º Validación de registro.html. (parcialmente)
- 3º Validación de contacto.html. (parcialmente)
- 4º Guardado, actualizar y borrado.

| Campo | Condición para que sea válido | Mensaje de error |
|---|---|---|
| **Nombre** | Entre el mínimo y el máximo de caracteres | El nombre debe tener una longitud entre {min} y {max} |
| **Correo** | Tiene texto, `@`, texto, `.` y texto (ej: `a@b.com`) | El correo es obligatorio / El correo no es válido |
| **Contraseña** | Mínimo 8 caracteres, con al menos 1 mayúscula y 1 número | La contraseña es obligatoria / Mínimo 8 caracteres, con al menos 1 número y 1 mayúscula |
| **Confirmar contraseña** | Igual a la contraseña | Debes confirmar la contraseña / Las contraseñas no coinciden |
| **Fecha** | Formato `aaaa-mm-dd` y no mayor que la fecha máxima permitida | La fecha es obligatoria / El formato de la fecha debe ser dd/mm/aaaa / La fecha no puede ser mayor que la fecha máxima permitida |
| **Teléfono** | 9 dígitos que empiecen por 6, 7, 8 o 9 (obligatorio si prefiere llamada) | El teléfono es obligatorio si prefieres que te llamemos / Introduce un teléfono válido de 9 dígitos |
| **Motivo** | Tener una opción seleccionada | Selecciona un motivo de consulta |
| **Mensaje** | Entre el mínimo y el máximo de caracteres | El mensaje es obligatorio / El mensaje debe tener entre {min} y {max} caracteres |

### Falta

- La Cookie del formulario.

### ¿Que me ha costado más?

- Entender que solicitaba exactamente la práctica.
- Aprender el uso del localStorage.
