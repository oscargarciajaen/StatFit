# Órbita 2: sistema visual de [nombre de tu aplicación]

## Enlaces

| Qué | Enlace |
|---|---|
| Archivo de Figma (versión "Entrega Órbita 2") |[Figma](https://www.figma.com/board/IcZvX4Xtxl3MfiwXri3zAS/User-flow---user-persona?node-id=0-1&t=4EeZpnEMsEBBXzai-0)|
| Prototipo PC (enlace que empieza por `figma.com/proto/`) |[Mockup](https://www.figma.com/design/RqiIGZY7iPJUw13sSzmsHh/interfaz-web-del-proyecto-oscar?node-id=245-251&t=4fnFTvszD0pPlwEg-0)|
| Prototipo Movil (enlace que empieza por `figma.com/proto/`) |[Mockup](https://www.figma.com/design/RqiIGZY7iPJUw13sSzmsHh/interfaz-web-del-proyecto-oscar?node-id=304-245&t=xPQrJym04pCvMDtq-0)|
| Proyecto de Google Stitch (solo si lo has usado) |[Hecho con Google Stitch](https://www.figma.com/design/RqiIGZY7iPJUw13sSzmsHh/interfaz-web-del-proyecto-oscar?node-id=155-8&p=f&t=4fnFTvszD0pPlwEg-0)|

## Dónde está cada cosa en Figma

| Entregable | Página y sección del archivo |
|---|---|
| Inventario de decisiones |[Decisiones](https://www.figma.com/board/IcZvX4Xtxl3MfiwXri3zAS/User-flow---user-persona?node-id=72-408&t=KgkDdP7UBL3hDILv-0) |
| Wireframes rediseñados |[Hecho con Google Stitch](https://www.figma.com/design/RqiIGZY7iPJUw13sSzmsHh/interfaz-web-del-proyecto-oscar?node-id=155-8&p=f&t=4fnFTvszD0pPlwEg-0)|
| Componentes |[Componentes](https://www.figma.com/design/RqiIGZY7iPJUw13sSzmsHh/interfaz-web-del-proyecto-oscar?node-id=223-9&p=f&t=4fnFTvszD0pPlwEg-0)|
| Mockups del happy path |[PC](https://www.figma.com/design/RqiIGZY7iPJUw13sSzmsHh/interfaz-web-del-proyecto-oscar?node-id=245-251&t=4fnFTvszD0pPlwEg-0) - [Movil](https://www.figma.com/design/RqiIGZY7iPJUw13sSzmsHh/interfaz-web-del-proyecto-oscar?node-id=302-9&p=f&t=JJTQkwmFAw59CI4Y-0)|
| Pantalla principal en el segundo ancho |[Pantalla principal modo Tablet](https://www.figma.com/design/RqiIGZY7iPJUw13sSzmsHh/interfaz-web-del-proyecto-oscar?node-id=340-3713&t=JJTQkwmFAw59CI4Y-0)|
| Pantallas en modo oscuro |[Mockup con modo oscuro](https://www.figma.com/design/RqiIGZY7iPJUw13sSzmsHh/interfaz-web-del-proyecto-oscar?node-id=245-251&t=4fnFTvszD0pPlwEg-0)|
| Guía de estilo |[Varibles](https://www.figma.com/design/RqiIGZY7iPJUw13sSzmsHh/interfaz-web-del-proyecto-oscar?node-id=245-251&view=variables&t=4fnFTvszD0pPlwEg-0)|

## Lista de comprobación de Figma

- [x] Variables en dos colecciones (primitivos y semánticos), con alias, modos claro y oscuro, ámbito, descripción y sintaxis de código.
- [x] Estilos de texto, efecto y retícula vinculados a las variables.
- [x] Componentes con Auto layout, variables, propiedades y variantes de estado.
- [x] Mockups construidos enteros con Auto layout y espacios sacados de variables.
- [x] Pantalla principal en un segundo ancho, con los mismos componentes.
- [x] Modo oscuro aplicado con el selector de modo.
- [x] Prototipo que recorre el happy path completo.
- [x] Prueba 1 superada: al cambiar `color/primary`, cambian todas las pantallas a la vez.
- [x] Prueba 2 superada: con todos los mockups en modo oscuro, nada desaparece contra el fondo.

## Resumen de decisiones

### Rediseño de los wireframes
He realizado cambios significativos en todas las pantallas puesto que he buscado un diseño visualmente más atractivo y que respetase la jerarquía de la información.

### Color

#### Modo Oscuro (default)

Mi modo oscuro cuenta con:

**Color-primary** -->  <span style="background-color: #52FFB8; display: inline-block; width: 20px; height: 20px;">&nbsp;</span>

Elegido porque los colores verdosos recuerdan a la naturaleza y a lo sano, por lo que en una app de gimnasio no puede faltar.

**Color-surface** -->  <span style="background-color: #CABAC8; display: inline-block; width: 20px; height: 20px;">&nbsp;</span>

Este tono grisacio beneficia a la página ya que transmite seriedad y calma, dos sensaciones muy importantes para entrenar.

**Color-on-surface** -> <span style="background-color: #2F323A; display: inline-block; width: 20px; height: 20px;">&nbsp;</span>

Este tono oscuro da transmite una seriedad mayor ya que los gimnasios normalmente presentan estos colores oscuros, además transmite elegancia, ya que un cuerpo estético se ve elegante.

**Color-background** -> <span style="background-color: #1F2228; display: inline-block; width: 20px; height: 20px;">&nbsp;</span>

Este color más oscuro nos genera una diferencia entre secciones ya que nos permite ver con mayor claridad las diferentes secciones de cada página.

#### Modo Claro

Mi modo claro cuenta con:

**Color-primary** -> <span style="background-color: #CBD4C2; display: inline-block; width: 20px; height: 20px;">&nbsp;</span>

Un tono verde suave y desaturado. Mantiene el vínculo con la naturaleza y la salud, pero adaptado de forma óptima a superficies claras para evitar la fatiga visual o el deslumbramiento.

**Color-surface** -->  <span style="background-color: #FFFCFF; display: inline-block; width: 20px; height: 20px;">&nbsp;</span>  

Un blanco roto sutil. Aporta limpieza, claridad y amplitud a las tarjetas y componentes principales de la interfaz, haciendo que la lectura de las rutinas de entrenamiento o las estadísticas físicas sea cómoda.

**Color-on-surface** --> <span style="background-color: #50514F; display: inline-block; width: 20px; height: 20px;">&nbsp;</span>  

Un gris grafito oscuro. Se utiliza para los textos y elementos interactivos sobre las superficies claras, garantizando un contraste óptimo para la accesibilidad y transmite esa seriedad y profesionalidad que requiere una aplicación de gimnsasio.

**Color-background** --> <span style="background-color: #989B9E; display: inline-block; width: 20px; height: 20px;">&nbsp;</span> 

Un gris que al igual que su equivalente en el modo oscuro, ayuda a delimitar los fondos y a separar visualmente las diferentes secciones de cada página, permitiendo al usuario navegar con claridad entre los distintos bloques de contenido.

### Tipografía
La tipografia es Inter y los pesos son 700, 500 y 400.

### Espaciado y retícula
Los espaciados son multiplos de 4 y 8 y la reticula es 12 en pc y 4 en Móvil.

### Componentes
Los componentes han sido creados en el modelo para Pc creando variantes para el modelo de móvil.

### Responsive y modo oscuro
Para el segundo ancho teniendo en cuenta que use como referencia el modo para pc, lo hice algo más pequeño para las necesidades de la pantalla de la tablet, las variables fueron creadas antes de empezar con el mockup para poder crear el modo oscuro y el modo claro.

## Uso de IA
Resumen en dos o tres frases de cómo has usado la IA en la órbita (o "no he usado ninguna herramienta de IA"). El detalle está en el [CHANGELOG.md](CHANGELOG.md).

## Lo que ha quedado pendiente
El autolayaut no funciona del todo aunque he intentado hacerlo lo mejor posible.