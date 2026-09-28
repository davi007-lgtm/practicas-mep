# Proyecto: práctica de pruebas nacionales (MEP Costa Rica)

Stack: Ionic + Angular standalone. Sin app.module.ts.
- Importa cada componente de Ionic de forma individual.
- Sin div en las plantillas: usa HTML semántico (main, section, article, header, footer, nav, ul, li, button, label).
- addIcons() para Ionicons. SCSS con anidación.
- Nombres de variables, métodos y archivos en español.
- Código simple para estudiante, con comentarios cortos. Sin RxJS complejo, sin librerías extra.
- Entrega archivos completos, no diffs.
- Interfaz en español.

Datos ya hechos (NO modificar): src/app/datos/especialidad.modelo.ts, src/app/datos/3015.ts (exporta especialidad3015), src/app/datos/2011.ts (exporta especialidad2011) y src/app/datos/especialidad3016.ts (exporta especialidad3016). Las especialidades disponibles están en src/app/datos/especialidades.ts, que es la única lista que hay que editar para agregar una nueva. Cada especialidad se guarda aparte en el localStorage con la llave "practica_<codigo>", así que el estudiante puede tener varias a la vez.
Cada Pregunta tiene: id, nivel, subarea, indicador, texto, codigo?, textoFinal?, opciones (3), correcta (0=A,1=B,2=C, orden original), justificacion.
Si una pregunta tiene codigo: mostrar texto, luego codigo en un <pre>, luego textoFinal.

Estado guardado en localStorage con clave "practica_<codigo>", con try/catch y campo "version".
Las respuestas se guardan como índice ORIGINAL de la opción (0-2).
Las opciones se mezclan una sola vez por pregunta y el orden mezclado se guarda (51 de 60 correctas son la A).
Modo examen: duración = especialidad.duracionMinutos. Se guarda la hora de fin (Date.now() + duración), nunca los segundos restantes.
Servicios en src/app/servicios/, páginas en src/app/paginas/.
Tema: SIEMPRE claro. No usar modo oscuro ni la paleta dark.system de Ionic. Fondo blanco, texto gris oscuro (#212529), color principal azul.
Estilo de cada ítem (como una prueba en pantalla): encabezado "N. Lea la siguiente información:", luego el enunciado, luego la pregunta en un párrafo aparte, y las opciones con círculo (radio) a la izquierda y letra "A) texto", "B) texto", "C) texto" según la posición mostrada (después de mezclar).
Aspecto del examen (inspirado en la plataforma oficial, sin copiar logos ni marcas; mostrar "Práctica no oficial"):
- Barra superior con pestañas: "i" (instrucciones), 1 a 60 y "Fin". Estados: pendiente = blanco; marcada = fondo amarillo verdoso; respondida = número tachado con una X verde; actual = fondo gris oscuro con texto blanco.
- Barra inferior con tres botones gris oscuro: ANTERIOR, MARCAR PREGUNTA, SIGUIENTE.
- Zoom (acercar, restablecer, alejar) arriba a la izquierda.
- Pantalla "Fin" con botón COMPLETAR SECCIÓN y confirmación con Aceptar y Cancelar.
Posición del examen: 0 = instrucciones, 1 a 60 = preguntas, 61 = fin.