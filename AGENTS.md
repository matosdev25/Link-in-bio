# AGENTS.md — Reglas estrictas para Codex

Este proyecto es una página **link-in-bio personalizada para MatosDev / Martin Matos**, enfocada en mobile-first, estilo iOS 26 / liquid glass, conectada visualmente con la marca MatosDev.

El objetivo de este archivo es evitar cambios innecesarios, rediseños no solicitados, invenciones y consumo excesivo de tokens.

---

## 1. Regla principal

Haz **exactamente lo que se pide**.

No inventes.
No rediseñes.
No optimices partes no solicitadas.
No cambies estructura, textos, iconos, colores, layout o lógica si el usuario no lo pidió de forma explícita.

Si una instrucción es ambigua, pregunta antes de asumir.

---

## 2. Prioridad del proyecto

La prioridad absoluta es la versión mobile.

El diseño debe verse bien principalmente en:

* iPhone 14 Pro Max
* iPhone 15/16
* Pantallas mobile entre 390px y 430px de ancho

Desktop solo debe funcionar como contenedor centrado o preview tipo mobile.

---

## 3. Identidad visual

La página debe sentirse como:

* MatosDev
* Martin Matos
* Street tech
* Digital studio
* iOS 26 / liquid glass
* Premium, limpio y moderno

La estética base es:

* Background principal claro tipo papel/grid inspirado en la web principal de MatosDev.
* Cards y pills claros, translúcidos, tipo liquid glass.
* Acentos rojos MatosDev.
* Negro/gris oscuro para textos.
* Verde/azul solo para Monexity cuando corresponda.

---

## 4. Prohibido inventar diseño

No agregar estilos visuales nuevos sin pedirlo.

Evitar:

* Morados genéricos
* Rosados genéricos
* Gradientes SaaS random
* Cards negras pesadas
* Glassmorphism oscuro genérico
* Iconos diferentes a los existentes
* Nuevas animaciones innecesarias
* Nuevas secciones no solicitadas
* Nuevos textos comerciales no aprobados
* Logos inventados
* Imágenes inventadas
* Links inventados

Si falta un dato, usa placeholder claro o pregunta.

---

## 5. Cambios visuales

Cuando el usuario pida un cambio visual:

1. Modifica solo el componente afectado.
2. Mantén el layout general.
3. No cambies otros componentes.
4. No cambies textos no mencionados.
5. No cambies la paleta global salvo que se pida.
6. No cambies iconos salvo que se pida.
7. No cambies tamaños globales salvo que sea necesario para arreglar el problema indicado.

Antes de tocar un archivo, identifica:

* Qué componente contiene el área afectada.
* Si el contenido viene de un array/config.
* Si el estilo viene de una clase reutilizable o de CSS global.

---

## 6. Iconos

No reemplazar iconos existentes sin autorización.

Si el usuario pide cambiar color de un icono:

* Cambia solo color.
* No cambies el icono.
* No cambies tamaño.
* No cambies posición.
* Si el icono es SVG, revisar `stroke`, `fill` y `currentColor`.

Si una key de icono contiene guion, debe ir entre comillas:

```ts
"map-pin": MapPin,
"external-link": ExternalLink,
"calendar-days": CalendarDays,
```

Nunca usar:

```ts
map-pin: MapPin,
```

porque rompe TypeScript/JavaScript.

---

## 7. Hero

El hero es una sección delicada. No rediseñar sin petición explícita.

Elementos actuales esperados:

* Label: `/ STUDIO DIGITAL`
* Foto de perfil
* Nombre: `Martin Matos`
* Icono verificado en rojo MatosDev
* Texto en 2 líneas:

  * `💻 Founder @MatosDev`
  * `🚀 Creador de Monexity`
* Descripción:

  * `Desarrollo webs, sistemas y contenido digital para negocios que quieren verse más profesionales.`
* Stats en pills:

  * `+15 Proyectos`
  * `Colón, Panamá 🇵🇦`
  * `Webs`
  * `SaaS`
  * `Branding`
* Botones:

  * `Agendar llamada`
  * `WhatsApp`

No mover foto, nombre, descripción ni botones si el usuario no lo pide.

---

## 8. Stats / pills del hero

Los stats deben usar estilo iOS 26 / liquid glass:

* Capsule/pill
* Fondo blanco translúcido
* Backdrop blur
* Borde claro sutil
* Sombra suave
* Texto oscuro legible
* Acentos rojos MatosDev si aplica

Organización esperada:

Primera fila:

* `+15 Proyectos`
* `Colón, Panamá 🇵🇦`

Segunda fila:

* `Webs`
* `SaaS`
* `Branding`

`Webs`, `SaaS` y `Branding` deben ser elementos separados, no un solo texto con separadores.

---

## 9. Navbar inferior

El navbar inferior debe mantenerse mobile-first y estilo iOS 26 / liquid glass.

Reglas:

* No rediseñar completo sin pedirlo.
* No reemplazar iconos por otros diferentes.
* Iconos inactivos: gris oscuro o negro suave.
* Item activo general: rojo MatosDev.
* Monexity puede tener acento verde/azul, pero solo en su item.
* No cambiar nombres:

  * Inicio
  * Proyectos
  * Monexity
  * Agenda
  * Contacto

La lógica debe permitir scroll suave hacia las secciones internas.

Si se usa scroll spy, debe actualizar el item activo según la sección visible.

---

## 10. Logos

Los logos públicos del proyecto deben vivir en:

```txt
public/assets/logos/projects/
```

Estructura esperada:

```txt
public/assets/logos/projects/matosdev/
public/assets/logos/projects/monexity/
public/assets/logos/projects/vibex/
public/assets/logos/projects/grafik2/
public/assets/logos/projects/eureka/
public/assets/logos/projects/asumlex/
```

No inventar nombres de archivos.

Antes de referenciar un logo:

1. Revisar el nombre real del archivo.
2. Usar la ruta pública correcta.
3. Mantener `object-contain`.
4. No deformar.
5. No cambiar el logo.

Si un SVG da problema con `next/image`, usar `<img>` solo para ese caso.

---

## 11. Contenido y textos

No cambiar textos sin instrucción explícita.

No traducir.
No reescribir.
No agregar slogans.
No agregar emojis.
No agregar bullets.
No agregar claims comerciales.

Si el usuario pide un texto exacto, copiarlo exactamente.

---

## 12. Archivos y alcance

Antes de modificar:

1. Leer el archivo afectado.
2. Entender la estructura.
3. Hacer el cambio mínimo.
4. Evitar tocar archivos no relacionados.

No hacer refactors grandes para un cambio pequeño.

No mover componentes salvo que se pida.

No instalar paquetes salvo que el usuario lo autorice.

---

## 13. Rendimiento y limpieza

Mantener el código limpio, pero sin refactors innecesarios.

Priorizar:

* Componentes simples
* Arrays/config editables
* Clases reutilizables cuando ya existen
* Evitar duplicación excesiva solo si el cambio es pequeño

No crear abstracciones complejas sin necesidad.

---

## 14. Optimización de tokens

Para ahorrar tokens:

* No expliques de más.
* No pegues archivos completos si solo cambiaste unas líneas.
* No hagas análisis largos.
* No listes todo el proyecto.
* No propongas mejoras no solicitadas.
* No ejecutes comandos largos si no se pidieron.
* No hagas build, lint, tests ni screenshots salvo que el usuario lo pida.

Respuesta final esperada después de cada tarea:

```txt
Listo.

Archivos modificados:
- archivo 1
- archivo 2

Cambios realizados:
- cambio puntual 1
- cambio puntual 2

No ejecuté build, lint ni tests.
```

---

## 15. Comandos

No ejecutar automáticamente:

```bash
npm run build
npm run lint
npm test
npm audit fix --force
```

Solo ejecutar si el usuario lo pide explícitamente.

Si hay un error visible en pantalla, corregirlo con el cambio mínimo.

---

## 16. Errores

Cuando haya un error de compilación:

1. Leer el mensaje exacto.
2. Corregir el archivo y línea indicada.
3. No aprovechar para rediseñar.
4. No tocar otros archivos.
5. No ejecutar comandos extra salvo que se pida.

---

## 17. Regla anti-invención

Si el usuario pide:

* “Cambia el color”
* “Arregla el navbar”
* “Acomoda los stats”
* “Usa este logo”
* “Corrige este error”

Entonces solo hacer eso.

No añadir:

* nuevas secciones
* nuevos iconos
* nuevos textos
* nuevas animaciones
* nuevos colores
* nuevas librerías
* nuevas rutas
* nuevos componentes innecesarios

---

## 18. Confirmación final

Al terminar cualquier tarea, responder con:

* Archivos modificados.
* Qué se cambió.
* Qué no se tocó.
* Confirmación de que no se ejecutaron build/lint/tests si aplica.

No escribir explicaciones largas.

---

## 19. Checklist antes de finalizar

Antes de responder, verificar:

* ¿Hice exactamente lo pedido?
* ¿Cambié algo que no me pidieron?
* ¿Inventé algún texto, color, icono, link o layout?
* ¿Ejecuté comandos que no debía?
* ¿El cambio es mobile-first?
* ¿El diseño sigue la línea MatosDev / iOS 26 / liquid glass?
* ¿La respuesta final es corta y clara?

Si alguna respuesta es negativa, corregir antes de entregar.
