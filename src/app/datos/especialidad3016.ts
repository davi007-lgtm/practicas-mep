import { Especialidad } from './especialidad.modelo';

// Práctica de la Prueba Nacional 2026 - Desarrollo Web (3016)
// IMPORTANTE: "correcta" usa el orden ORIGINAL de las opciones (0 = A, 1 = B, 2 = C).
// Si mezclas las opciones al mostrarlas, guarda el orden mezclado para comparar bien.
// Los indicadores y la ubicación de cada ítem siguen la tabla de especificaciones 2026 (60 ítems).
// Práctica NO oficial: las preguntas son de elaboración propia, no son ítems reales de la DGEC.

// Subáreas
const TI = 'Tecnologías de la información (TI)';
const PW = 'Programación para web';
const DS = 'Diseño de software';
const SOP = 'Soporte TI';
const EMP = 'Emprendimiento e innovación';

// Indicadores de logro (nombre corto = subárea + número)
const I = {
  // TI
  ti11: '1.1 Reconoce las herramientas de trabajo para el procesamiento y almacenamiento de la información, elaboración de multimedios, creación de formularios y hojas de cálculo en la nube.',
  ti12: '1.2 Interpreta la usabilidad de las herramientas de trabajo colaborativo para el procesamiento de la información, elaboración de multimedios, creación de formularios y hojas de cálculo en la nube.',
  ti21: '2.1 Aplica herramientas y metodologías disponibles para la presentación, visualización y análisis de bases de datos.',
  ti31: '3.1 Explica las características y el propósito de las guerras cibernéticas, los ataques y su funcionamiento.',
  ti41: '4.1 Explicar los métodos de autenticación fuerte y comportamientos seguros en línea para la protección de la privacidad de la organización.',
  ti51: '5.1 Diferencia los tipos de malware y código malicioso.',
  ti61: '6.1 Reconoce las cinco tendencias tecnológicas visionarias del siglo presente.',
  ti71: '7.1 Explica reglas de Ciberseguridad aplicadas al campo del aprendizaje automatizado.',
  // Programación para web
  pw11: '1.1 Explica los principios lógicos de programación algorítmica.',
  pw21: '2.1 Identifica características las etapas de evolución del internet y la web vigente.',
  pw22: '2.2 Distingue los atributos y componentes requeridos para el marcado de documentos web.',
  pw31: '3.1 Reconoce los conceptos de programación estructurada, algoritmos, pseudocódigo, operadores, y tipos de instrucciones.',
  pw41: '4.1 Compara las sintaxis de desarrollo para el uso de arreglos y objetos.',
  pw51: '5.1 Reconoce los elementos que conforma el entorno IDE para el trabajo de programación interpretada multiparadigma.',
  pw61: '6.1 Distingue las sintaxis de codificación de programas mediante el uso de flujo de datos y manejo de errores y excepciones.',
  pw71: '7.1 Explica las características de los fundamentos que integran el entorno de desarrollo POO.',
  pw81: '8.1 Identifica las sintaxis de desarrollo para elaboración de programas con estructuras de selección y repetición.',
  pw91: '9.1 Compara sintaxis de desarrollo para elaboración de programas web utilizando funciones y arreglos.',
  pw101: '10.1 Reconoce las secuencias de comandos para algoritmos, diagramas y pseudocódigos.',
  pw111: '11.1 Clasifica medidas preventivas contra situaciones de riesgo cibernético que atrae a la juventud.',
  pw121: '12.1 Describe sistemas de bases, características generales y usuarios finales que interactúan en las comunicaciones.',
  // Diseño de software
  ds11: '1.1 Reconoce actividades de los métodos de desarrollo ágil.',
  ds12: '1.2 Distingue modelos de desarrollo ágil.',
  ds21: '2.1 Identifica la simbología y componentes requeridos en el diseño de diagrama de sistemas.',
  ds31: '3.1 Identifica las características, componentes e importancia del diseño arquitectónico del software.',
  ds41: '4.1 Define los conceptos de diseño, implementación, pruebas y evolución del software.',
  ds42: '4.2 Describe las actividades más importantes relacionadas con el diseño e implementación de sistemas.',
  ds51: '5.1 Identifica las reglas utilizadas en el diseño de la interfaz de usuario.',
  ds52: '5.2 Explica los modelos, procesos, tareas y aspectos requeridos en el diseño de la interfaz de usuario del software.',
  ds61: '6.1 Describe los elementos prácticos que integran los fundamentos requeridos en el diseño web.',
  ds71: '7.1 Explica las etapas requeridas en la actividad del aseguramiento de la calidad del software.',
  ds81: '8.1 Reconoce software para la edición de fotografías digitales.',
  ds82: '8.2 Distingue herramientas para el diseño web.',
  ds91: '9.1 Identifica las netiquetas y su funcionamiento en la web.',
  // Soporte TI
  s11: '1.1 Identifica los componentes para la ejecución de labores de ensamble, actualización y reparación de computadores personales.',
  s21: '2.1 Compara características técnicas que asemejan y diferencian el sistema operativo licenciado y de código abierto.',
  s31: '3.1 Identifica las amenazas generales que justifican la implementación de seguridad básica en equipos, datos y redes.',
  s32: '3.2 Implementa procesos básicos de mantenimiento correctivo en la solución de problemas básicos de seguridad en equipos, datos y redes.',
  s41: '4.1 Reconoce los componentes de redes LAN y WAN en pequeñas y medianas empresas.',
  s51: '5.1 Diferencia los modelos de referencia de red (TCP/IP y OSI).',
  s61: '6.1 Diferencia las direcciones IPv4 (unicast, broadcast y multicast) e IPv6 (unicast, anycast, multicast).',
  s71: '7.1 Interpreta tecnologías de comunicación inalámbrica y los procedimientos para sustitución de dispositivos de hardware en computadoras portátiles.',
  s81: '8.1 Identifica conceptos y características de los dispositivos móviles y sistemas operativos.',
  s91: '9.1 Explica los procesos de conexión de los usuarios a las redes y el uso del correo electrónico en los dispositivos móviles.',
  // Emprendimiento
  e11: '1.1 Identifica habilidades y responsabilidades de la persona emprendedora.',
  e21: '2.1 Utiliza herramientas para la recolección de información que permita la detección de oportunidades de negocio.',
  e31: '3.1 Explica la diferencia entre atención y servicio al cliente.',
};

export const especialidad3016: Especialidad = {
  codigo: '3016',
  nombre: 'Desarrollo Web',
  duracionMinutos: 180,
  preguntas: [
    // ===== I. Tecnologías de la información (TI) (1-9) =====
    {
      id: 1, nivel: 'Décimo', subarea: TI, indicador: I.ti11,
      texto: 'Un grupo de estudiantes debe redactar un informe desde computadoras distintas. Necesitan editar el mismo documento al mismo tiempo, ver los cambios de los demás y que todo se guarde automáticamente en Internet. ¿Qué herramienta responde mejor a esta necesidad?',
      opciones: ['Un procesador de texto colaborativo en la nube', 'Un editor de texto instalado en una sola computadora', 'Una calculadora del sistema operativo'],
      correcta: 0,
      justificacion: 'Los procesadores de texto en la nube permiten edición simultánea y guardado automático en línea.',
    },
    {
      id: 2, nivel: 'Décimo', subarea: TI, indicador: I.ti12,
      texto: 'Una docente desea conocer la opinión de 40 estudiantes sobre una actividad y obtener un resumen automático de las respuestas. ¿Qué herramienta colaborativa resulta más útil y por qué?',
      opciones: ['Un editor de audio, porque permite grabar las opiniones', 'Un formulario en la nube, porque recopila respuestas en línea y las resume automáticamente', 'Un compresor de archivos, porque reduce el tamaño de las respuestas'],
      correcta: 1,
      justificacion: 'Los formularios en la nube recopilan respuestas de varias personas y generan resúmenes o gráficos automáticamente.',
    },
    {
      id: 3, nivel: 'Décimo', subarea: TI, indicador: I.ti21,
      texto: 'Una empresa tiene una hoja de cálculo con miles de registros de ventas y necesita resumir el total vendido por región y por mes para tomar decisiones. ¿Qué herramienta debe utilizar?',
      opciones: ['Un corrector ortográfico', 'Un editor de video', 'Una tabla dinámica'],
      correcta: 2,
      justificacion: 'Una tabla dinámica permite resumir y analizar grandes volúmenes de datos agrupándolos por categorías.',
    },
    {
      id: 4, nivel: 'Décimo', subarea: TI, indicador: I.ti21,
      texto: 'La gerencia desea observar de forma visual y rápida cómo evolucionaron las ventas mensuales durante el último año. ¿Qué recurso de visualización es más apropiado?',
      opciones: ['Un párrafo extenso con todas las cifras', 'Un gráfico de líneas', 'Una imagen decorativa'],
      correcta: 1,
      justificacion: 'El gráfico de líneas muestra claramente la evolución de un valor a través del tiempo.',
    },
    {
      id: 5, nivel: 'Décimo', subarea: TI, indicador: I.ti31,
      texto: 'Un país sufre un ataque coordinado contra su red eléctrica y sus sistemas bancarios. Se sospecha que fue realizado por un grupo respaldado por otro Estado con fines estratégicos. ¿Qué concepto describe mejor esta situación?',
      opciones: ['Guerra cibernética', 'Mantenimiento preventivo', 'Copia de seguridad'],
      correcta: 0,
      justificacion: 'La guerra cibernética consiste en ataques digitales entre Estados u organizaciones con objetivos estratégicos o políticos.',
    },
    {
      id: 6, nivel: 'Décimo', subarea: TI, indicador: I.ti41,
      texto: 'Una organización desea proteger el acceso a su sistema interno. ¿Cuál de las siguientes opciones representa un método de autenticación fuerte?',
      opciones: ['Usar la misma contraseña en todas las cuentas', 'Combinar la contraseña con un código temporal enviado al teléfono (autenticación multifactor)', 'Compartir la contraseña con un compañero de confianza'],
      correcta: 1,
      justificacion: 'La autenticación multifactor combina dos o más factores, lo que dificulta el acceso no autorizado.',
    },
    {
      id: 7, nivel: 'Décimo', subarea: TI, indicador: I.ti51,
      texto: 'Un usuario descarga un juego gratuito de un sitio desconocido. Aunque el juego funciona, en segundo plano abre una puerta trasera que permite a un atacante controlar el equipo. ¿A qué tipo de malware corresponde?',
      opciones: ['Gusano', 'Troyano', 'Adware'],
      correcta: 1,
      justificacion: 'Un troyano se hace pasar por un programa legítimo mientras ejecuta acciones maliciosas ocultas.',
    },
    {
      id: 8, nivel: 'Duodécimo', subarea: TI, indicador: I.ti61,
      texto: 'Una cadena de supermercados instala sensores conectados a Internet en sus refrigeradoras para monitorear la temperatura y enviar alertas automáticas cuando algo falla. ¿Qué tecnología emergente están utilizando?',
      opciones: ['Fax', 'Internet de las cosas (IoT)', 'Disquete'],
      correcta: 1,
      justificacion: 'El Internet de las cosas conecta objetos físicos con sensores a Internet para monitorear y automatizar procesos.',
    },
    {
      id: 9, nivel: 'Duodécimo', subarea: TI, indicador: I.ti71,
      texto: 'Una empresa entrena un modelo de aprendizaje automático con datos personales de sus clientes. ¿Qué regla de ciberseguridad debe aplicar?',
      opciones: ['Publicar los datos de entrenamiento para que cualquiera los revise', 'Desactivar los registros de acceso para que el sistema sea más rápido', 'Proteger o anonimizar los datos de entrenamiento y controlar quién accede al modelo'],
      correcta: 2,
      justificacion: 'En el aprendizaje automatizado se deben proteger los datos usados y restringir el acceso al modelo para evitar filtraciones y manipulaciones.',
    },

    // ===== II. Programación para web (10-30) =====
    {
      id: 10, nivel: 'Décimo', subarea: PW, indicador: I.pw11,
      texto: 'Un programa debe repetir un bloque de instrucciones mientras se cumpla una condición. ¿Qué estructura lógica permite lograrlo?',
      opciones: ['Secuencia', 'Selección', 'Iteración (repetición)'],
      correcta: 2,
      justificacion: 'La iteración o repetición ejecuta un bloque de instrucciones varias veces mientras se cumpla una condición.',
    },
    {
      id: 11, nivel: 'Décimo', subarea: PW, indicador: I.pw11,
      texto: 'Un estudiante escribe los pasos para calcular el área de un rectángulo. ¿Cuál es el orden lógico correcto del algoritmo?',
      opciones: ['Leer base y altura, multiplicarlas y mostrar el resultado', 'Mostrar el resultado, multiplicar y leer base y altura', 'Multiplicar, mostrar el resultado y leer base y altura'],
      correcta: 0,
      justificacion: 'Un algoritmo sigue una secuencia lógica: entrada de datos, proceso y salida del resultado.',
    },
    {
      id: 12, nivel: 'Décimo', subarea: PW, indicador: I.pw21,
      texto: '¿Qué característica distingue a la Web 2.0 de la Web 1.0?',
      opciones: ['Páginas estáticas de solo lectura', 'Participación de los usuarios, que crean y comparten contenido (blogs, redes sociales)', 'Uso exclusivo del correo electrónico'],
      correcta: 1,
      justificacion: 'La Web 2.0 se caracteriza por la interacción y la creación de contenido por parte de los usuarios.',
    },
    {
      id: 13, nivel: 'Décimo', subarea: PW, indicador: I.pw22,
      texto: 'Un desarrollador desea insertar una imagen en una página HTML. ¿Qué etiqueta y qué atributo debe utilizar para indicar la ruta de la imagen?',
      opciones: ['<image> con el atributo href', '<img> con el atributo src', '<pic> con el atributo link'],
      correcta: 1,
      justificacion: 'La etiqueta <img> inserta imágenes y su atributo src indica la ruta o dirección del archivo.',
    },
    {
      id: 14, nivel: 'Décimo', subarea: PW, indicador: I.pw31,
      texto: 'En JavaScript, ¿qué operador compara tanto el valor como el tipo de dos datos?',
      opciones: ['==', '===', '='],
      correcta: 1,
      justificacion: 'El operador === es de igualdad estricta: compara valor y tipo. El operador = asigna y == compara con conversión de tipo.',
    },
    {
      id: 15, nivel: 'Décimo', subarea: PW, indicador: I.pw41,
      texto: 'Observe el siguiente código en JavaScript:',
      codigo: `const frutas = ['manzana', 'pera', 'uva'];
console.log(frutas[1]);`,
      textoFinal: '¿Qué mostrará en la consola?',
      opciones: ['manzana', 'pera', 'uva'],
      correcta: 1,
      justificacion: 'Los índices de un arreglo inician en 0, por lo que frutas[1] corresponde a "pera".',
    },
    {
      id: 16, nivel: 'Décimo', subarea: PW, indicador: I.pw41,
      texto: 'Observe el siguiente objeto en JavaScript:',
      codigo: `const persona = { nombre: 'Ana', edad: 17 };
console.log(persona.nombre);`,
      textoFinal: '¿Qué mostrará en la consola?',
      opciones: ['nombre', '17', 'Ana'],
      correcta: 2,
      justificacion: 'Con la notación de punto se accede al valor de la propiedad, que en este caso es "Ana".',
    },
    {
      id: 17, nivel: 'Undécimo', subarea: PW, indicador: I.pw51,
      texto: 'Un programador necesita ejecutar su código línea por línea para encontrar dónde ocurre un error. ¿Qué elemento del entorno IDE debe utilizar?',
      opciones: ['Depurador (debugger)', 'Paleta de colores', 'Explorador de archivos'],
      correcta: 0,
      justificacion: 'El depurador permite ejecutar el código paso a paso e inspeccionar variables para localizar errores.',
    },
    {
      id: 18, nivel: 'Undécimo', subarea: PW, indicador: I.pw51,
      texto: '¿Qué función cumplen el resaltado de sintaxis y el autocompletado en un IDE?',
      opciones: ['Aumentan la velocidad de la conexión a Internet', 'Facilitan escribir código con mayor rapidez y menos errores', 'Sustituyen la necesidad de probar el programa'],
      correcta: 1,
      justificacion: 'Estas funciones ayudan a escribir código con más rapidez y a detectar errores de escritura.',
    },
    {
      id: 19, nivel: 'Undécimo', subarea: PW, indicador: I.pw61,
      texto: 'Observe el siguiente código en JavaScript:',
      codigo: `try {
  JSON.parse('{ dato: 1 }');
  console.log('OK');
} catch (error) {
  console.log('Error');
}`,
      textoFinal: 'El texto JSON no es válido porque la clave no lleva comillas. ¿Qué mostrará el programa?',
      opciones: ['OK', 'Error', 'No mostrará nada'],
      correcta: 1,
      justificacion: 'JSON.parse lanza una excepción con el texto inválido, se salta el console.log("OK") y se ejecuta el bloque catch.',
    },
    {
      id: 20, nivel: 'Undécimo', subarea: PW, indicador: I.pw61,
      texto: 'En el manejo de excepciones de JavaScript, ¿qué bloque se ejecuta siempre, haya ocurrido o no un error?',
      opciones: ['catch', 'finally', 'throw'],
      correcta: 1,
      justificacion: 'El bloque finally se ejecuta siempre después de try y catch, sin importar si hubo error.',
    },
    {
      id: 21, nivel: 'Undécimo', subarea: PW, indicador: I.pw71,
      texto: 'En la programación orientada a objetos, ¿qué es una clase?',
      opciones: ['Un error que ocurre durante la ejecución', 'Un tipo de base de datos', 'Una plantilla que define los atributos y métodos de los objetos'],
      correcta: 2,
      justificacion: 'Una clase es el molde a partir del cual se crean objetos con atributos y comportamientos.',
    },
    {
      id: 22, nivel: 'Undécimo', subarea: PW, indicador: I.pw71,
      texto: 'Un objeto mantiene sus atributos internos ocultos y solo permite modificarlos mediante métodos controlados. ¿Qué principio de la POO se aplica?',
      opciones: ['Herencia', 'Encapsulamiento', 'Polimorfismo'],
      correcta: 1,
      justificacion: 'El encapsulamiento oculta los detalles internos y controla el acceso a los datos mediante métodos.',
    },
    {
      id: 23, nivel: 'Undécimo', subarea: PW, indicador: I.pw81,
      texto: 'Observe el siguiente código en JavaScript:',
      codigo: `let suma = 0;
for (let i = 1; i <= 3; i++) {
  suma += i;
}
console.log(suma);`,
      textoFinal: '¿Qué valor mostrará el programa?',
      opciones: ['3', '6', '9'],
      correcta: 1,
      justificacion: 'El ciclo suma 1 + 2 + 3, por lo que el resultado es 6.',
    },
    {
      id: 24, nivel: 'Undécimo', subarea: PW, indicador: I.pw81,
      texto: 'Observe el siguiente código en JavaScript:',
      codigo: `const nota = 65;
if (nota >= 70) {
  console.log('Aprobado');
} else {
  console.log('Reprobado');
}`,
      textoFinal: '¿Qué mostrará el programa?',
      opciones: ['65', 'Aprobado', 'Reprobado'],
      correcta: 2,
      justificacion: 'Como 65 no es mayor o igual que 70, se ejecuta el bloque else y se muestra "Reprobado".',
    },
    {
      id: 25, nivel: 'Undécimo', subarea: PW, indicador: I.pw91,
      texto: 'Observe el siguiente código en JavaScript:',
      codigo: `const numeros = [1, 2, 3, 4];
const dobles = numeros.map(n => n * 2);
console.log(dobles);`,
      textoFinal: '¿Qué mostrará el programa?',
      opciones: ['[2, 4, 6, 8]', '[1, 2, 3, 4]', '[1, 4, 9, 16]'],
      correcta: 0,
      justificacion: 'El método map crea un nuevo arreglo aplicando la función a cada elemento, en este caso multiplicándolo por 2.',
    },
    {
      id: 26, nivel: 'Undécimo', subarea: PW, indicador: I.pw91,
      texto: 'Observe el siguiente código en JavaScript:',
      codigo: `const pares = [1, 2, 3, 4, 5, 6].filter(n => n % 2 === 0);
console.log(pares.length);`,
      textoFinal: '¿Qué valor mostrará el programa?',
      opciones: ['2', '3', '6'],
      correcta: 1,
      justificacion: 'filter conserva los números pares (2, 4 y 6), por lo que el arreglo resultante tiene 3 elementos.',
    },
    {
      id: 27, nivel: 'Duodécimo', subarea: PW, indicador: I.pw101,
      texto: 'En un diagrama de flujo, ¿qué figura se utiliza para representar una decisión?',
      opciones: ['Rectángulo', 'Óvalo', 'Rombo'],
      correcta: 2,
      justificacion: 'El rombo representa una decisión con caminos de salida según se cumpla o no una condición.',
    },
    {
      id: 28, nivel: 'Duodécimo', subarea: PW, indicador: I.pw101,
      texto: 'Observe el siguiente pseudocódigo:',
      codigo: `Inicio
  n ← 10
  Mientras n > 7 Hacer
    n ← n - 1
  Fin Mientras
  Mostrar n
Fin`,
      textoFinal: '¿Qué valor mostrará el programa?',
      opciones: ['6', '7', '10'],
      correcta: 1,
      justificacion: 'El ciclo reduce n de 10 a 7; cuando n vale 7 la condición n > 7 deja de cumplirse y se muestra 7.',
    },
    {
      id: 29, nivel: 'Duodécimo', subarea: PW, indicador: I.pw111,
      texto: 'Una adolescente recibe mensajes de un adulto desconocido que finge tener su edad, gana su confianza y le pide fotografías íntimas. ¿Qué medida preventiva es la más apropiada ante el grooming?',
      opciones: ['Enviar las fotografías para no perder la amistad', 'No compartir información ni imágenes con desconocidos y avisar a un adulto de confianza', 'Mantener la conversación en secreto para evitar problemas'],
      correcta: 1,
      justificacion: 'La prevención del grooming implica no compartir datos o imágenes con desconocidos, no ocultar la situación y pedir ayuda a un adulto de confianza.',
    },
    {
      id: 30, nivel: 'Duodécimo', subarea: PW, indicador: I.pw121,
      texto: 'En un sistema de bases de datos, ¿quién es el usuario final?',
      opciones: ['La persona que diseña la estructura y administra el servidor de la base de datos', 'El fabricante del equipo donde se almacena la información', 'La persona que consulta o registra información mediante una aplicación sin administrar la base de datos'],
      correcta: 2,
      justificacion: 'El usuario final utiliza la información a través de aplicaciones; el diseño y la administración corresponden a otros roles, como el administrador de la base de datos.',
    },

    // ===== III. Diseño de software (31-45) =====
    {
      id: 31, nivel: 'Décimo', subarea: DS, indicador: I.ds11,
      texto: 'En Scrum, ¿cómo se llama la reunión diaria y breve en la que el equipo sincroniza su trabajo?',
      opciones: ['Sprint Review', 'Daily Scrum', 'Product Backlog'],
      correcta: 1,
      justificacion: 'La Daily Scrum es la reunión diaria de corta duración en la que el equipo planifica el trabajo del día.',
    },
    {
      id: 32, nivel: 'Décimo', subarea: DS, indicador: I.ds12,
      texto: '¿Cuál de los siguientes es un modelo de desarrollo ágil?',
      opciones: ['Modelo en cascada', 'Modelo en V', 'Extreme Programming (XP)'],
      correcta: 2,
      justificacion: 'Extreme Programming es una metodología ágil; el modelo en cascada y el modelo en V son secuenciales tradicionales.',
    },
    {
      id: 33, nivel: 'Décimo', subarea: DS, indicador: I.ds21,
      texto: 'En un diagrama de casos de uso de UML, ¿qué representa la figura de un muñeco de palitos?',
      opciones: ['Una clase', 'Un actor', 'Un método'],
      correcta: 1,
      justificacion: 'En los diagramas de casos de uso, el muñeco representa a un actor: un usuario u otro sistema que interactúa con el sistema.',
    },
    {
      id: 34, nivel: 'Décimo', subarea: DS, indicador: I.ds31,
      texto: '¿Qué patrón arquitectónico divide una aplicación en Modelo, Vista y Controlador?',
      opciones: ['Arquitectura en pipeline', 'Microkernel', 'MVC'],
      correcta: 2,
      justificacion: 'MVC separa los datos (modelo), la presentación (vista) y la lógica de control (controlador).',
    },
    {
      id: 35, nivel: 'Décimo', subarea: DS, indicador: I.ds31,
      texto: '¿Por qué es importante el diseño arquitectónico de un software?',
      opciones: ['Porque reemplaza la necesidad de realizar pruebas', 'Porque define la estructura general y facilita el mantenimiento y la escalabilidad', 'Porque solamente define los colores de la interfaz'],
      correcta: 1,
      justificacion: 'La arquitectura establece la estructura general del sistema y apoya decisiones sobre mantenimiento, escalabilidad y rendimiento.',
    },
    {
      id: 36, nivel: 'Décimo', subarea: DS, indicador: I.ds41,
      texto: 'Después de entregar una aplicación, el equipo la modifica para corregir errores, adaptarla a nuevos requisitos y agregar funciones. ¿Qué concepto describe esta actividad?',
      opciones: ['Diseño', 'Implementación', 'Evolución del software'],
      correcta: 2,
      justificacion: 'La evolución (o mantenimiento) del software consiste en modificarlo después de su entrega para mantenerlo útil.',
    },
    {
      id: 37, nivel: 'Décimo', subarea: DS, indicador: I.ds42,
      texto: '¿Qué actividad corresponde a la implementación de un sistema?',
      opciones: ['Levantar requisitos mediante entrevistas', 'Convertir el diseño en código funcional', 'Definir el nombre comercial del producto'],
      correcta: 1,
      justificacion: 'La implementación transforma el diseño del sistema en código ejecutable.',
    },
    {
      id: 38, nivel: 'Undécimo', subarea: DS, indicador: I.ds51,
      texto: 'Una de las reglas de diseño de interfaces indica que se debe buscar consistencia. ¿Cuál ejemplo la aplica?',
      opciones: ['Cambiar los colores y la posición de los botones en cada pantalla', 'Ocultar los botones más utilizados', 'Usar los mismos colores, íconos y ubicación de controles en todas las pantallas'],
      correcta: 2,
      justificacion: 'La consistencia mantiene patrones uniformes en toda la interfaz, lo que facilita el aprendizaje y el uso.',
    },
    {
      id: 39, nivel: 'Undécimo', subarea: DS, indicador: I.ds52,
      texto: 'Antes de programar, el equipo dibuja bocetos sencillos de las pantallas para validarlos con los usuarios. ¿Qué proceso está realizando?',
      opciones: ['Depuración', 'Prototipado (wireframes)', 'Compilación'],
      correcta: 1,
      justificacion: 'Los bocetos o wireframes son prototipos de baja fidelidad que permiten validar la interfaz antes de desarrollarla.',
    },
    {
      id: 40, nivel: 'Undécimo', subarea: DS, indicador: I.ds61,
      texto: '¿Qué enfoque de diseño web permite que una página se adapte a diferentes tamaños de pantalla?',
      opciones: ['Diseño de ancho fijo', 'Diseño únicamente para impresión', 'Diseño responsivo (responsive)'],
      correcta: 2,
      justificacion: 'El diseño responsivo ajusta la disposición del contenido según el tamaño y tipo de dispositivo.',
    },
    {
      id: 41, nivel: 'Undécimo', subarea: DS, indicador: I.ds71,
      texto: 'Un equipo define qué pruebas realizará, los criterios de aceptación y las métricas con las que medirá la calidad del producto. ¿Qué etapa del aseguramiento de la calidad está ejecutando?',
      opciones: ['Mantenimiento de hardware', 'Planificación de la calidad', 'Diseño gráfico'],
      correcta: 1,
      justificacion: 'Definir pruebas, criterios y métricas corresponde a la planificación del aseguramiento de la calidad.',
    },
    {
      id: 42, nivel: 'Duodécimo', subarea: DS, indicador: I.ds81,
      texto: '¿Cuál de los siguientes programas se utiliza para la edición de fotografías digitales?',
      opciones: ['MySQL Workbench', 'Visual Studio Code', 'Adobe Photoshop'],
      correcta: 2,
      justificacion: 'Adobe Photoshop es un software de edición y retoque de imágenes y fotografías digitales.',
    },
    {
      id: 43, nivel: 'Duodécimo', subarea: DS, indicador: I.ds82,
      texto: '¿Qué herramienta se utiliza para diseñar prototipos de interfaces web?',
      opciones: ['Wireshark', 'Figma', 'PuTTY'],
      correcta: 1,
      justificacion: 'Figma es una herramienta de diseño de interfaces y prototipos; Wireshark analiza tráfico de red y PuTTY es un cliente de conexión remota.',
    },
    {
      id: 44, nivel: 'Duodécimo', subarea: DS, indicador: I.ds91,
      texto: '¿Cuál es una buena práctica de netiqueta?',
      opciones: ['Escribir los mensajes en mayúsculas para dar énfasis', 'Ser respetuoso y evitar las mayúsculas sostenidas, que se interpretan como gritos', 'Reenviar cadenas de mensajes sin verificar su contenido'],
      correcta: 1,
      justificacion: 'La netiqueta promueve el respeto y la claridad; escribir en mayúsculas sostenidas se interpreta como gritar.',
    },
    {
      id: 45, nivel: 'Duodécimo', subarea: DS, indicador: I.ds91,
      texto: 'En un foro escolar, un compañero comete un error al explicar un tema. ¿Qué actuación es acorde con la netiqueta?',
      opciones: ['Burlarse públicamente del error', 'Publicar los datos personales del compañero', 'Corregirlo de forma respetuosa y constructiva'],
      correcta: 2,
      justificacion: 'La netiqueta pide corregir con respeto y de manera constructiva, sin ofender ni exponer a otras personas.',
    },

    // ===== IV. Soporte TI (46-57) =====
    {
      id: 46, nivel: 'Décimo', subarea: SOP, indicador: I.s11,
      texto: '¿Qué componente de una computadora personal se encarga de ejecutar las instrucciones de los programas?',
      opciones: ['Fuente de poder', 'CPU (procesador)', 'Disco duro'],
      correcta: 1,
      justificacion: 'La CPU es la unidad que procesa y ejecuta las instrucciones de los programas.',
    },
    {
      id: 47, nivel: 'Décimo', subarea: SOP, indicador: I.s11,
      texto: 'Una computadora se vuelve muy lenta cuando se abren varios programas a la vez porque tiene poca memoria de trabajo. ¿Qué componente conviene ampliar?',
      opciones: ['Teclado', 'Tarjeta de sonido', 'Memoria RAM'],
      correcta: 2,
      justificacion: 'Ampliar la RAM permite mantener más programas y datos en uso al mismo tiempo.',
    },
    {
      id: 48, nivel: 'Décimo', subarea: SOP, indicador: I.s21,
      texto: '¿Cuál es una diferencia entre un sistema operativo de código abierto y uno licenciado?',
      opciones: ['El de código abierto permite consultar y modificar su código fuente según su licencia', 'El licenciado siempre es gratuito', 'El de código abierto no puede utilizarse en servidores'],
      correcta: 0,
      justificacion: 'En el software de código abierto el código fuente está disponible y puede modificarse bajo los términos de su licencia.',
    },
    {
      id: 49, nivel: 'Décimo', subarea: SOP, indicador: I.s31,
      texto: 'Un usuario recibe un correo que aparenta ser de su banco y le solicita ingresar su clave en un enlace. ¿Qué amenaza representa esta situación?',
      opciones: ['Sobrecalentamiento', 'Phishing', 'Fragmentación de disco'],
      correcta: 1,
      justificacion: 'El phishing suplanta a una entidad confiable para engañar al usuario y obtener sus datos.',
    },
    {
      id: 50, nivel: 'Décimo', subarea: SOP, indicador: I.s32,
      texto: 'Un equipo infectado con un virus muestra ventanas emergentes constantemente. ¿Qué acción de mantenimiento correctivo es la más apropiada?',
      opciones: ['Aislar el equipo de la red, ejecutar un antivirus actualizado y eliminar la amenaza', 'Desactivar el antivirus para que el equipo funcione más rápido', 'Seguir utilizando el equipo y compartir archivos con otros'],
      correcta: 0,
      justificacion: 'Se debe aislar el equipo para evitar la propagación y eliminar la amenaza con un antivirus actualizado.',
    },
    {
      id: 51, nivel: 'Undécimo', subarea: SOP, indicador: I.s41,
      texto: 'Una empresa conecta sus oficinas de San José y Cartago mediante servicios de un proveedor de telecomunicaciones. ¿Qué tipo de red permite esta conexión entre sedes distantes?',
      opciones: ['LAN', 'WAN', 'PAN'],
      correcta: 1,
      justificacion: 'Una WAN interconecta redes ubicadas en sitios geográficamente distantes.',
    },
    {
      id: 52, nivel: 'Undécimo', subarea: SOP, indicador: I.s51,
      texto: '¿Cuántas capas tiene el modelo de referencia OSI?',
      opciones: ['4', '5', '7'],
      correcta: 2,
      justificacion: 'El modelo OSI tiene siete capas, mientras que el modelo TCP/IP tradicional utiliza cuatro.',
    },
    {
      id: 53, nivel: 'Undécimo', subarea: SOP, indicador: I.s61,
      texto: 'En IPv4, ¿qué tipo de comunicación envía un mensaje a todos los dispositivos de una red?',
      opciones: ['Unicast', 'Broadcast', 'Anycast'],
      correcta: 1,
      justificacion: 'Broadcast envía la información a todos los dispositivos de la red; unicast es a un solo destino.',
    },
    {
      id: 54, nivel: 'Undécimo', subarea: SOP, indicador: I.s61,
      texto: 'En IPv6, ¿qué tipo de dirección identifica a varias interfaces y entrega el paquete a la más cercana?',
      opciones: ['Unicast', 'Anycast', 'Broadcast'],
      correcta: 1,
      justificacion: 'Anycast se asigna a varias interfaces y el paquete se entrega a la más cercana. IPv6 no utiliza broadcast.',
    },
    {
      id: 55, nivel: 'Duodécimo', subarea: SOP, indicador: I.s71,
      texto: '¿Qué tecnología inalámbrica de corto alcance se utiliza comúnmente para conectar audífonos o un ratón a una computadora portátil?',
      opciones: ['Ethernet', 'Bluetooth', 'VGA'],
      correcta: 1,
      justificacion: 'Bluetooth es una tecnología inalámbrica de corto alcance para conectar periféricos.',
    },
    {
      id: 56, nivel: 'Duodécimo', subarea: SOP, indicador: I.s81,
      texto: '¿Cuál de los siguientes sistemas operativos móviles es de código cerrado?',
      opciones: ['Android (AOSP)', 'iOS', 'Ubuntu Touch'],
      correcta: 1,
      justificacion: 'iOS es un sistema propietario de código cerrado; AOSP y Ubuntu Touch son de código abierto.',
    },
    {
      id: 57, nivel: 'Duodécimo', subarea: SOP, indicador: I.s91,
      texto: 'Una persona configura su correo en el teléfono y desea que los mensajes se mantengan sincronizados con el servidor en todos sus dispositivos. ¿Qué protocolo debe utilizar?',
      opciones: ['POP3', 'IMAP', 'FTP'],
      correcta: 1,
      justificacion: 'IMAP mantiene los mensajes en el servidor y los sincroniza entre dispositivos.',
    },

    // ===== V. Emprendimiento e innovación (58-60) =====
    {
      id: 58, nivel: 'Undécimo', subarea: EMP, indicador: I.e11,
      texto: '¿Cuál es una habilidad característica de una persona emprendedora?',
      opciones: ['Evitar tomar decisiones', 'Depender siempre de otras personas', 'Iniciativa y disposición para asumir riesgos calculados'],
      correcta: 2,
      justificacion: 'La iniciativa y la capacidad de asumir riesgos calculados son habilidades propias de quien emprende.',
    },
    {
      id: 59, nivel: 'Undécimo', subarea: EMP, indicador: I.e21,
      texto: 'Un emprendedor quiere conocer las necesidades de sus posibles clientes para detectar oportunidades de negocio. ¿Qué herramienta de recolección de información es más adecuada?',
      opciones: ['Contar las líneas de código de su aplicación', 'Una encuesta o entrevista a clientes potenciales', 'Revisar el hardware de su computadora'],
      correcta: 1,
      justificacion: 'Las encuestas y entrevistas permiten conocer directamente las necesidades del mercado.',
    },
    {
      id: 60, nivel: 'Undécimo', subarea: EMP, indicador: I.e31,
      texto: '¿Cuál enunciado explica correctamente la diferencia entre atención y servicio al cliente?',
      opciones: ['Son exactamente lo mismo', 'El servicio consiste únicamente en cobrar al cliente', 'La atención es el trato directo durante la interacción; el servicio es el conjunto de acciones que buscan satisfacer las necesidades del cliente'],
      correcta: 2,
      justificacion: 'La atención se refiere al trato en la interacción, y el servicio abarca todo lo que la empresa ofrece para satisfacer al cliente.',
    },
  ],
};
