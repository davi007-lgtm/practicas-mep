import { Especialidad } from './especialidad.modelo';

// Práctica de la Prueba Nacional 2026 - Desarrollo de Aplicaciones Móviles (3015)
// IMPORTANTE: "correcta" usa el orden ORIGINAL de las opciones (0 = A, 1 = B, 2 = C).
// Si mezclas las opciones al mostrarlas, guarda el orden mezclado para comparar bien.
// Los indicadores se asignaron siguiendo el orden y la cantidad de ítems de la tabla de especificaciones.
// Los textos de los indicadores del 2.1 de Soporte (Décimo) están abreviados.

// Subáreas
const TI = 'Tecnologías de la información aplicada al desarrollo de aplicaciones móviles';
const EMP = 'Emprendimiento e innovación aplicada al desarrollo de aplicaciones móviles';
const DES = 'Desarrollo de aplicaciones móviles y bases de datos';
const SOP = 'Soporte y seguridad de aplicaciones móviles';

// Indicadores de logro (nombre corto = subárea + nivel + número)
const I = {
  // TI - Décimo
  ti1: '1.1 Identifica las herramientas que proporciona el entorno web para la comunicación, mensajería instantánea y visualización de imágenes.',
  ti2: '2.1 Distingue los elementos de la base de datos.',
  ti3: '3.1 Identifica tipos de análisis de datos.',
  // Emprendimiento - Undécimo
  em11: '1.1 Discrimina los elementos a tomar en cuenta al emprender un proyecto.',
  em21: '2.1 Propone soluciones a problemas reales de la comunidad considerando los tipos de formas jurídicas asociativas de la economía social solidaria.',
  em31: '3.1 Compara los tipos de empresas que interactúan en el sistema financiero y económico nacional.',
  em41: '4.1 Examina las áreas de acción y los requerimientos que establecen las instituciones de apoyo para el desarrollo y consolidación del emprendimiento.',
  em42: '4.2 Identifica los procesos requeridos para la formalización del emprendimiento en las instituciones de apoyo.',
  // Desarrollo - Décimo
  d10_11: '1.1 Describe conceptos de computación y programación.',
  d10_12: '1.2 Distingue los principios lógicos y fundamentos de la programación.',
  d10_13: '1.3 Realiza la resolución de problemas aplicando los principios lógicos.',
  d10_21: '2.1 Identifica la sintaxis y semántica requeridas en el uso del lenguaje de programación.',
  d10_22: '2.2 Interpreta líneas de código para la solución de problemas.',
  // Soporte - Décimo
  s10_11: '1.1 Compara los tipos de componentes para dispositivos móviles.',
  s10_21: '2.1 Discrimina las acciones que ejecuta durante la intervención de equipos portátiles y otros dispositivos para el mantenimiento preventivo.',
  s10_22: '2.2 Identifica características, requerimientos técnicos y necesidades operativas de los tipos de impresoras disponibles en el mercado nacional.',
  s10_31: '3.1 Reconoce los conceptos básicos relacionados con la gestión de contraseñas y defensa activa.',
  s10_32: '3.2 Describe los planes de contingencia ante desastres.',
  // Desarrollo - Undécimo
  d11_11: '1.1 Distingue factores que influyen en el servicio al cliente.',
  d11_21: '2.1 Diferencia ciudadanía digital y equidad social.',
  d11_31: '3.1 Identifica las características de las bases de datos con Firebase.',
  d11_32: '3.2 Interpreta usos de sintaxis requeridas en la gestión de bases de datos.',
  // Soporte - Undécimo
  s11_11: '1.1 Reconocer conceptos y principios eléctricos relacionados con la eficiencia energética.',
  s11_21: '2.1 Identifica las características de los protocolos y la comunicación de red.',
  s11_22: '2.2 Diferencia los modelos de referencia de red (TCP/IP y OSI).',
  s11_31: '3.1 Identifica conceptos relacionados con calidad del software.',
  s11_32: '3.2 Diferencia estrategias requeridas para el logro en la calidad del software.',
  // Desarrollo - Duodécimo
  d12_11: '1.1 Menciona los elementos relacionados con el diseño de componentes de software.',
  d12_12: '1.2 Identifica las reglas utilizadas en el diseño de la interfaz de usuario.',
  d12_21: '2.1 Distingue los principios de la privacidad del diseño.',
  d12_22: '2.2 Discrimina los aspectos más relevantes de la evaluación del impacto de la privacidad.',
  d12_31: '3.1 Identifica conceptos relacionados con el modelado orientado a objetos.',
  // Soporte - Duodécimo
  s12_11: '1.1 Identifica las características de los árboles de expansión.',
  s12_12: '1.2 Describe el funcionamiento del protocolo de árboles de expansión.',
  s12_13: '1.3 Resuelve problemas de configuración de los árboles de expansión.',
  s12_21: '2.1 Reconoce las tendencias del diseño seguro en el desarrollo de los tipos de aplicaciones.',
  s12_22: '2.2 Distingue las funcionalidades, beneficios y vulnerabilidades de la seguridad de aplicaciones.',
};

export const especialidad3015: Especialidad = {
  codigo: '3015',
  nombre: 'Desarrollo de Aplicaciones Móviles',
  duracionMinutos: 180,
  preguntas: [
    // ===== I. TI aplicada al desarrollo de apps móviles - DÉCIMO (1-5) =====
    {
      id: 1, nivel: 'Décimo', subarea: TI, indicador: I.ti1,
      texto: 'Una empresa de desarrollo móvil desea establecer un canal de comunicación interna entre sus colaboradores. El equipo necesita enviar mensajes de manera inmediata desde computadoras y dispositivos móviles, permitiendo conversaciones individuales y grupales. ¿Cuál herramienta del entorno web responde mejor a esta necesidad?',
      opciones: ['Servicio de mensajería instantánea', 'Editor de imágenes', 'Hoja de cálculo'],
      correcta: 0,
      justificacion: 'La mensajería instantánea permite comunicación inmediata individual y grupal mediante servicios web.',
    },
    {
      id: 2, nivel: 'Décimo', subarea: TI, indicador: I.ti1,
      texto: 'Un diseñador de aplicaciones necesita mostrar a los integrantes de un equipo una galería de fotografías almacenadas en Internet. Los usuarios deben poder acceder a las imágenes desde diferentes dispositivos mediante un navegador. ¿Cuál recurso del entorno web resulta más apropiado?',
      opciones: ['Servicio de transferencia de archivos', 'Plataforma de visualización y almacenamiento de imágenes', 'Consola de administración de bases de datos'],
      correcta: 1,
      justificacion: 'Una plataforma de visualización y almacenamiento de imágenes permite acceder a galerías desde distintos dispositivos mediante Internet.',
    },
    {
      id: 3, nivel: 'Décimo', subarea: TI, indicador: I.ti2,
      texto: 'Un equipo está diseñando la base de datos de una aplicación para una tienda. Se necesita almacenar información sobre clientes, productos y pedidos. El estudiante propone organizar la información en tablas relacionadas. ¿Cuál elemento representa una colección estructurada de datos relacionados dentro de una base de datos relacional?',
      opciones: ['Tabla', 'Consulta', 'Formulario'],
      correcta: 0,
      justificacion: 'En una base de datos relacional, una tabla organiza registros y campos relacionados.',
    },
    {
      id: 4, nivel: 'Décimo', subarea: TI, indicador: I.ti2,
      texto: 'En una base de datos de una aplicación existe una tabla llamada Clientes. Cada cliente posee un número único que permite distinguirlo de todos los demás registros. ¿Qué elemento debe utilizarse para identificar de manera única cada registro?',
      opciones: ['Campo calculado', 'Clave primaria', 'Consulta'],
      correcta: 1,
      justificacion: 'La clave primaria identifica de forma única cada registro de una tabla.',
    },
    {
      id: 5, nivel: 'Décimo', subarea: TI, indicador: I.ti3,
      texto: 'Una empresa dispone de los registros mensuales de ventas de una aplicación durante los últimos tres años. La gerencia desea conocer cómo han cambiado las ventas a través del tiempo para determinar si existe una tendencia de crecimiento o disminución. ¿Qué tipo de análisis resulta más adecuado?',
      opciones: ['Análisis descriptivo de tendencias', 'Análisis de instalación de software', 'Análisis de configuración de hardware'],
      correcta: 0,
      justificacion: 'El análisis de tendencias permite observar cambios de una variable a través del tiempo.',
    },

    // ===== II. Emprendimiento e innovación - UNDÉCIMO (6-10) =====
    {
      id: 6, nivel: 'Undécimo', subarea: EMP, indicador: I.em11,
      texto: 'Un estudiante desea desarrollar una aplicación móvil para ayudar a pequeños comercios de su comunidad a controlar sus inventarios. Antes de iniciar el desarrollo, decide investigar quiénes serían los usuarios, qué problema presentan y qué solución estarían dispuestos a utilizar. ¿Qué elemento del emprendimiento está considerando principalmente?',
      opciones: ['Identificación de una necesidad de mercado', 'Selección del sistema operativo', 'Configuración del dispositivo móvil'],
      correcta: 0,
      justificacion: 'Identificar una necesidad del mercado permite determinar qué problema puede convertirse en una oportunidad de emprendimiento.',
    },
    {
      id: 7, nivel: 'Undécimo', subarea: EMP, indicador: I.em21,
      texto: 'Un grupo de personas de una comunidad desea crear una iniciativa para comercializar productos elaborados localmente. Buscan organizarse de manera asociativa, generar beneficios para sus integrantes y contribuir al desarrollo de la comunidad. ¿Cuál alternativa representa mejor una forma de organización relacionada con la economía social solidaria?',
      opciones: ['Organización asociativa orientada al beneficio colectivo', 'Empresa creada exclusivamente para beneficio de un único propietario', 'Actividad informal sin organización ni responsabilidades definidas'],
      correcta: 0,
      justificacion: 'La economía social solidaria promueve formas asociativas orientadas al beneficio colectivo.',
    },
    {
      id: 8, nivel: 'Undécimo', subarea: EMP, indicador: I.em31,
      texto: 'Una persona desarrolladora desea crear formalmente un negocio dedicado a producir aplicaciones móviles. Está analizando las diferentes formas empresariales disponibles antes de registrar su emprendimiento. ¿Qué aspecto debe comparar principalmente para elegir la forma jurídica adecuada?',
      opciones: ['Tipo de empresa, responsabilidades y forma de organización', 'Marca y modelo del teléfono utilizado para programar', 'Cantidad de aplicaciones instaladas en el equipo'],
      correcta: 0,
      justificacion: 'La elección de la forma empresarial requiere comparar responsabilidades, organización y características jurídicas.',
    },
    {
      id: 9, nivel: 'Undécimo', subarea: EMP, indicador: I.em41,
      texto: 'Un emprendedor desarrolla una idea de negocio tecnológico y desea acceder a capacitación, asesoría y posibles mecanismos de apoyo para consolidarla. ¿Qué debe hacer antes de solicitar estos servicios?',
      opciones: ['Identificar las instituciones de apoyo y los requisitos que establecen', 'Comprar equipos informáticos sin analizar las necesidades', 'Publicar la aplicación sin realizar ningún proceso previo'],
      correcta: 0,
      justificacion: 'Las instituciones de apoyo establecen áreas de acción y requisitos que deben conocerse antes de solicitar sus servicios.',
    },
    {
      id: 10, nivel: 'Undécimo', subarea: EMP, indicador: I.em42,
      texto: 'Una persona ha desarrollado una aplicación móvil que comenzará a comercializar como parte de su emprendimiento. Para operar formalmente debe realizar diferentes trámites ante las instituciones correspondientes. ¿Qué proceso describe mejor esta situación?',
      opciones: ['Formalización del emprendimiento', 'Depuración del código fuente', 'Compilación de la aplicación'],
      correcta: 0,
      justificacion: 'La realización de trámites para operar formalmente corresponde a la formalización del emprendimiento.',
    },

    // ===== III. Desarrollo de apps móviles y bases de datos - DÉCIMO (11-19) =====
    {
      id: 11, nivel: 'Décimo', subarea: DES, indicador: I.d10_11,
      texto: 'Un estudiante recibe el siguiente problema: una aplicación debe calcular el total de tres productos cuyos precios son introducidos por el usuario. Antes de escribir código, organiza los pasos necesarios para recibir los datos, sumarlos y mostrar el resultado. ¿Qué concepto está aplicando?',
      opciones: ['Algoritmo', 'Interfaz gráfica', 'Sistema operativo'],
      correcta: 0,
      justificacion: 'Un algoritmo organiza una secuencia de pasos para resolver un problema.',
    },
    {
      id: 12, nivel: 'Décimo', subarea: DES, indicador: I.d10_12,
      texto: 'Un programa debe realizar una acción solamente cuando una determinada condición sea verdadera. ¿Qué principio lógico permite representar esta situación?',
      opciones: ['Selección', 'Secuencia de imágenes', 'Almacenamiento'],
      correcta: 0,
      justificacion: 'La selección permite ejecutar una acción condicionada al cumplimiento de una condición.',
    },
    {
      id: 13, nivel: 'Décimo', subarea: DES, indicador: I.d10_12,
      texto: 'Un estudiante diseña el siguiente algoritmo:',
      codigo: 'Inicio\n  Leer edad\n  Si edad >= 18 Entonces\n    Mostrar "Mayor de edad"\n  Fin Si\nFin',
      textoFinal: '¿Qué estructura lógica está utilizando?',
      opciones: ['Repetición', 'Selección', 'Secuencia de archivos'],
      correcta: 1,
      justificacion: 'El algoritmo utiliza una estructura condicional Si/Entonces.',
    },
    {
      id: 14, nivel: 'Décimo', subarea: DES, indicador: I.d10_13,
      texto: 'Una aplicación recibe una cantidad y debe determinar si el número es par o impar. ¿Cuál operación permite determinar si el número es divisible entre 2 sin dejar residuo?',
      opciones: ['División entera', 'Módulo', 'Potenciación'],
      correcta: 1,
      justificacion: 'El módulo permite determinar el residuo de una división y comprobar si un número es divisible entre otro.',
    },
    {
      id: 15, nivel: 'Décimo', subarea: DES, indicador: I.d10_13,
      texto: 'Se necesita calcular el promedio de tres calificaciones. El algoritmo debe recibir las tres notas, sumarlas y dividir el resultado entre tres. ¿Cuál expresión representa correctamente el cálculo?',
      opciones: ['(nota1 + nota2 + nota3) / 3', 'nota1 + nota2 + nota3 * 3', '(nota1 * nota2 * nota3) / 3'],
      correcta: 0,
      justificacion: 'El promedio se obtiene sumando las tres calificaciones y dividiendo el total entre tres.',
    },
    {
      id: 16, nivel: 'Décimo', subarea: DES, indicador: I.d10_21,
      texto: 'Una estudiante está programando una aplicación y escribe una instrucción que no respeta la estructura requerida por el lenguaje. El programa muestra un error antes de ejecutarse. ¿Qué tipo de problema está enfrentando principalmente?',
      opciones: ['Error de sintaxis', 'Error de diseño gráfico', 'Error de conectividad'],
      correcta: 0,
      justificacion: 'Una instrucción que no respeta la sintaxis requerida produce un error de sintaxis.',
    },
    {
      id: 17, nivel: 'Décimo', subarea: DES, indicador: I.d10_21,
      texto: 'Un programa se ejecuta correctamente, pero produce un resultado diferente al esperado porque una condición fue planteada incorrectamente. ¿Qué tipo de problema representa esta situación?',
      opciones: ['Error lógico', 'Error de compilación del sistema operativo', 'Error físico del dispositivo'],
      correcta: 0,
      justificacion: 'Si el programa ejecuta pero produce un resultado incorrecto por una condición mal planteada, se trata de un error lógico.',
    },
    {
      id: 18, nivel: 'Décimo', subarea: DES, indicador: I.d10_22,
      texto: 'Observe el siguiente pseudocódigo:',
      codigo: 'contador ← 0\nPara i ← 1 Hasta 4\n  contador ← contador + 1\nFin Para\nMostrar contador',
      textoFinal: '¿Qué valor mostrará el programa?',
      opciones: ['3', '4', '5'],
      correcta: 1,
      justificacion: 'El ciclo se ejecuta cuatro veces y el contador termina con valor 4.',
    },
    {
      id: 19, nivel: 'Décimo', subarea: DES, indicador: I.d10_22,
      texto: 'Observe:',
      codigo: 'numero ← 7\nSi numero > 10 Entonces\n  Mostrar "A"\nSi No\n  Mostrar "B"\nFin Si',
      textoFinal: '¿Qué mostrará el programa?',
      opciones: ['A', 'B', '10'],
      correcta: 1,
      justificacion: 'Como 7 no es mayor que 10, se ejecuta la alternativa y se muestra B.',
    },

    // ===== IV. Soporte y seguridad - DÉCIMO (20-29) =====
    {
      id: 20, nivel: 'Décimo', subarea: SOP, indicador: I.s10_11,
      texto: 'Una persona desea adquirir un teléfono para ejecutar aplicaciones con gráficos exigentes y realizar varias tareas simultáneamente. Está comparando dos dispositivos y observa que uno posee mayor cantidad de memoria RAM. ¿Qué función cumple principalmente la memoria RAM?',
      opciones: ['Almacenar temporalmente datos y programas en ejecución', 'Almacenar permanentemente fotografías aunque el dispositivo esté apagado', 'Proporcionar conexión física al cargador'],
      correcta: 0,
      justificacion: 'La RAM almacena temporalmente los datos y programas que están siendo utilizados.',
    },
    {
      id: 21, nivel: 'Décimo', subarea: SOP, indicador: I.s10_11,
      texto: 'Un técnico compara dos teléfonos. Uno posee un procesador con mayor capacidad de procesamiento que el otro. ¿Qué característica está evaluando?',
      opciones: ['Capacidad de procesamiento', 'Resolución de impresión', 'Tipo de papel compatible'],
      correcta: 0,
      justificacion: 'El procesador determina en gran medida la capacidad de procesamiento del dispositivo.',
    },
    {
      id: 22, nivel: 'Décimo', subarea: SOP, indicador: I.s10_11,
      texto: 'Un usuario necesita almacenar fotografías, videos y aplicaciones en un teléfono. ¿Qué componente determina principalmente la cantidad de información que puede conservarse de forma permanente?',
      opciones: ['Almacenamiento interno', 'Memoria RAM', 'Sensor de proximidad'],
      correcta: 0,
      justificacion: 'El almacenamiento interno conserva información de manera permanente.',
    },
    {
      id: 23, nivel: 'Décimo', subarea: SOP, indicador: I.s10_11,
      texto: 'Un dispositivo móvil posee una pantalla táctil que permite al usuario interactuar directamente con botones, menús e imágenes mostradas en pantalla. ¿Qué componente permite principalmente detectar el contacto realizado sobre la superficie?',
      opciones: ['Panel táctil', 'Procesador gráfico', 'Batería'],
      correcta: 0,
      justificacion: 'El panel táctil detecta la interacción realizada sobre la superficie de la pantalla.',
    },
    {
      id: 24, nivel: 'Décimo', subarea: SOP, indicador: I.s10_21,
      texto: 'Un técnico recibe una computadora portátil para mantenimiento preventivo. Antes de intervenirla, realiza una inspección visual, verifica conexiones, limpia componentes y comprueba el funcionamiento general. ¿Cuál es el propósito principal de estas acciones?',
      opciones: ['Prevenir fallas y mantener el equipo en condiciones adecuadas de funcionamiento', 'Eliminar permanentemente todos los archivos del usuario', 'Sustituir obligatoriamente todos los componentes internos'],
      correcta: 0,
      justificacion: 'El mantenimiento preventivo busca evitar fallas y conservar el equipo en condiciones adecuadas.',
    },
    {
      id: 25, nivel: 'Décimo', subarea: SOP, indicador: I.s10_21,
      texto: 'Un teléfono presenta acumulación de suciedad en sus conectores. El técnico decide realizar una limpieza utilizando procedimientos adecuados antes de que aparezca una falla. ¿Qué tipo de mantenimiento está realizando?',
      opciones: ['Correctivo', 'Preventivo', 'Recuperativo'],
      correcta: 1,
      justificacion: 'Limpiar un componente antes de que falle es una acción preventiva.',
    },
    {
      id: 26, nivel: 'Décimo', subarea: SOP, indicador: I.s10_22,
      texto: 'Una pequeña empresa necesita imprimir documentos de texto de manera frecuente y a un costo reducido por página. ¿Qué tipo de impresora resulta generalmente apropiado para este escenario?',
      opciones: ['Impresora láser', 'Impresora fotográfica especializada', 'Impresora de etiquetas exclusivamente'],
      correcta: 0,
      justificacion: 'La impresora láser es apropiada para grandes volúmenes de documentos de texto y suele ofrecer bajo costo por página.',
    },
    {
      id: 27, nivel: 'Décimo', subarea: SOP, indicador: I.s10_22,
      texto: 'Una empresa necesita imprimir fotografías con buena calidad de color y está dispuesta a utilizar cartuchos de tinta para obtener resultados adecuados. ¿Qué tipo de impresora responde mejor a esta necesidad?',
      opciones: ['Impresora de inyección de tinta', 'Impresora térmica de recibos', 'Impresora matricial'],
      correcta: 0,
      justificacion: 'La inyección de tinta es adecuada para impresión de imágenes y fotografías con buen color.',
    },
    {
      id: 28, nivel: 'Décimo', subarea: SOP, indicador: I.s10_31,
      texto: 'Una empresa desea fortalecer el acceso a una aplicación móvil. El administrador establece contraseñas largas, únicas y difíciles de adivinar y recomienda utilizar autenticación multifactor. ¿Qué práctica de seguridad está aplicando?',
      opciones: ['Gestión segura de credenciales', 'Desfragmentación de almacenamiento', 'Compresión de archivos'],
      correcta: 0,
      justificacion: 'Contraseñas robustas y autenticación multifactor forman parte de una gestión segura de credenciales.',
    },
    {
      id: 29, nivel: 'Décimo', subarea: SOP, indicador: I.s10_32,
      texto: 'Una empresa pierde temporalmente el acceso a sus servidores debido a una falla grave. Gracias a procedimientos previamente establecidos, puede restaurar sus servicios utilizando copias de respaldo y equipos alternos. ¿Qué concepto permite responder ante este tipo de situación?',
      opciones: ['Plan de contingencia', 'Diseño de interfaz', 'Prueba unitaria'],
      correcta: 0,
      justificacion: 'Un plan de contingencia establece procedimientos para mantener o recuperar servicios ante situaciones adversas.',
    },

    // ===== V. Desarrollo de apps móviles y bases de datos - UNDÉCIMO (30-35) =====
    {
      id: 30, nivel: 'Undécimo', subarea: DES, indicador: I.d11_11,
      texto: 'Una empresa recibe varias quejas porque los usuarios no reciben respuesta cuando reportan problemas con una aplicación. ¿Qué factor del servicio al cliente debe fortalecerse principalmente?',
      opciones: ['Capacidad de respuesta', 'Cantidad de memoria RAM del servidor', 'Resolución de pantalla del teléfono'],
      correcta: 0,
      justificacion: 'La capacidad de respuesta es fundamental cuando los usuarios reportan problemas y esperan atención.',
    },
    {
      id: 31, nivel: 'Undécimo', subarea: DES, indicador: I.d11_11,
      texto: 'Un equipo de desarrollo recopila las opiniones de los usuarios antes de lanzar una nueva versión de su aplicación y utiliza esa información para mejorar las funciones ofrecidas. ¿Qué factor favorece directamente un buen servicio al cliente?',
      opciones: ['Escucha y consideración de las necesidades del usuario', 'Eliminación de todos los canales de comunicación', 'Restricción de las opciones de soporte'],
      correcta: 0,
      justificacion: 'Escuchar las necesidades de los usuarios permite mejorar el servicio ofrecido.',
    },
    {
      id: 32, nivel: 'Undécimo', subarea: DES, indicador: I.d11_21,
      texto: 'Una institución desarrolla una aplicación que permite a las personas realizar trámites desde Internet. Para favorecer la equidad, considera que algunos usuarios tienen limitaciones de conectividad o requieren herramientas de accesibilidad. ¿Qué principio está aplicando?',
      opciones: ['Equidad social en el acceso a la tecnología', 'Exclusión tecnológica', 'Dependencia exclusiva de dispositivos de alta gama'],
      correcta: 0,
      justificacion: 'Considerar limitaciones de acceso y accesibilidad busca favorecer la equidad social.',
    },
    {
      id: 33, nivel: 'Undécimo', subarea: DES, indicador: I.d11_31,
      texto: 'Un equipo desarrolla una aplicación móvil que necesita almacenar información en la nube y sincronizar datos entre diferentes dispositivos. ¿Cuál servicio resulta apropiado para gestionar una base de datos orientada al desarrollo de aplicaciones?',
      opciones: ['Firebase', 'BIOS', 'HDMI'],
      correcta: 0,
      justificacion: 'Firebase ofrece servicios orientados al desarrollo de aplicaciones y almacenamiento/sincronización de datos.',
    },
    {
      id: 34, nivel: 'Undécimo', subarea: DES, indicador: I.d11_32,
      texto: 'Una aplicación utiliza una estructura de datos donde cada registro posee campos como nombre, correo y edad. El desarrollador necesita recuperar solamente los registros que cumplen una determinada condición. ¿Qué operación de consulta debe utilizar?',
      opciones: ['Filtrado de datos', 'Formateo de pantalla', 'Compilación'],
      correcta: 0,
      justificacion: 'Filtrar permite recuperar solamente los registros que cumplen una condición.',
    },
    {
      id: 35, nivel: 'Undécimo', subarea: DES, indicador: I.d11_32,
      texto: 'Una aplicación permite registrar nuevos usuarios en una base de datos. Cuando una persona completa el formulario y pulsa "Registrar", la información debe almacenarse como un nuevo registro. ¿Qué operación sobre los datos está realizando?',
      opciones: ['Inserción', 'Eliminación', 'Ordenamiento visual'],
      correcta: 0,
      justificacion: 'Registrar un nuevo usuario corresponde a insertar un nuevo registro.',
    },

    // ===== VI. Soporte y seguridad - UNDÉCIMO (36-43) =====
    {
      id: 36, nivel: 'Undécimo', subarea: SOP, indicador: I.s11_11,
      texto: 'Una empresa desea reducir el consumo eléctrico de sus equipos informáticos. Una de las medidas consiste en apagar los equipos cuando no están siendo utilizados durante períodos prolongados. ¿Qué principio está aplicando?',
      opciones: ['Uso eficiente de la energía', 'Incremento deliberado del consumo', 'Sobrecarga de los dispositivos'],
      correcta: 0,
      justificacion: 'Apagar equipos que no se utilizan reduce el consumo energético.',
    },
    {
      id: 37, nivel: 'Undécimo', subarea: SOP, indicador: I.s11_11,
      texto: 'Un técnico recomienda sustituir equipos antiguos por dispositivos que consumen menos energía y utilizar configuraciones de ahorro energético. ¿Cuál es el objetivo principal?',
      opciones: ['Reducir el consumo eléctrico manteniendo la funcionalidad necesaria', 'Aumentar el consumo para mejorar el rendimiento', 'Eliminar la necesidad de mantenimiento'],
      correcta: 0,
      justificacion: 'La eficiencia energética busca reducir consumo sin perder la funcionalidad necesaria.',
    },
    {
      id: 38, nivel: 'Undécimo', subarea: SOP, indicador: I.s11_21,
      texto: 'En una pequeña empresa, los equipos necesitan intercambiar información utilizando reglas comunes que permitan establecer cómo se transmiten y reciben los datos. ¿Qué elemento proporciona estas reglas?',
      opciones: ['Protocolos de comunicación', 'Resolución de pantalla', 'Sistema de archivos'],
      correcta: 0,
      justificacion: 'Los protocolos establecen reglas para la comunicación entre dispositivos.',
    },
    {
      id: 39, nivel: 'Undécimo', subarea: SOP, indicador: I.s11_21,
      texto: 'Una computadora necesita obtener automáticamente una dirección IP y otros parámetros de configuración de red al conectarse a la LAN de una empresa. ¿Qué protocolo cumple esta función?',
      opciones: ['DHCP', 'FTP', 'SMTP'],
      correcta: 0,
      justificacion: 'DHCP proporciona automáticamente parámetros como la dirección IP.',
    },
    {
      id: 40, nivel: 'Undécimo', subarea: SOP, indicador: I.s11_22,
      texto: 'Un estudiante está analizando los modelos utilizados para explicar la comunicación de datos en redes. Observa que uno de ellos divide la comunicación en siete capas. ¿A cuál modelo corresponde?',
      opciones: ['TCP/IP', 'OSI', 'HTTP'],
      correcta: 1,
      justificacion: 'El modelo OSI se representa tradicionalmente mediante siete capas.',
    },
    {
      id: 41, nivel: 'Undécimo', subarea: SOP, indicador: I.s11_22,
      texto: 'Un técnico utiliza el modelo TCP/IP para estudiar la comunicación entre una aplicación móvil y un servidor. ¿Qué característica diferencia principalmente a este modelo del modelo OSI?',
      opciones: ['TCP/IP utiliza cuatro capas en su representación tradicional', 'TCP/IP no contempla comunicación mediante redes', 'TCP/IP solamente se utiliza para conexiones Bluetooth'],
      correcta: 0,
      justificacion: 'La representación tradicional de TCP/IP utiliza cuatro capas.',
    },
    {
      id: 42, nivel: 'Undécimo', subarea: SOP, indicador: I.s11_31,
      texto: 'Antes de publicar una aplicación, el equipo verifica que sus funciones cumplan los requisitos definidos y que los resultados obtenidos sean los esperados. ¿Qué aspecto está evaluando principalmente?',
      opciones: ['Calidad del software', 'Capacidad de almacenamiento del teléfono', 'Diseño físico del dispositivo'],
      correcta: 0,
      justificacion: 'Verificar que el producto cumpla requisitos y produzca resultados esperados forma parte de la evaluación de calidad.',
    },
    {
      id: 43, nivel: 'Undécimo', subarea: SOP, indicador: I.s11_32,
      texto: 'Un equipo realiza pruebas durante diferentes etapas del desarrollo y corrige defectos antes de entregar el producto final. ¿Qué estrategia favorece directamente la calidad del software?',
      opciones: ['Pruebas y detección temprana de errores', 'Eliminación de todas las pruebas', 'Publicación inmediata sin validación'],
      correcta: 0,
      justificacion: 'Las pruebas y la detección temprana de defectos ayudan a prevenir problemas en el producto final.',
    },

    // ===== VII. Desarrollo de apps móviles y bases de datos - DUODÉCIMO (44-53) =====
    {
      id: 44, nivel: 'Duodécimo', subarea: DES, indicador: I.d12_11,
      texto: 'Un equipo diseña una aplicación móvil y decide dividirla en componentes independientes, de modo que cada uno tenga una función específica y pueda mantenerse con mayor facilidad. ¿Qué principio está aplicando?',
      opciones: ['Modularidad', 'Duplicación', 'Dependencia total'],
      correcta: 0,
      justificacion: 'Dividir el sistema en componentes con funciones específicas corresponde a la modularidad.',
    },
    {
      id: 45, nivel: 'Duodécimo', subarea: DES, indicador: I.d12_11,
      texto: 'Durante el diseño de una aplicación, el equipo establece claramente qué responsabilidad tendrá cada componente y cómo se comunicará con los demás. ¿Qué elemento del diseño está considerando?',
      opciones: ['Arquitectura y organización de componentes', 'Capacidad de la batería', 'Resolución de la cámara'],
      correcta: 0,
      justificacion: 'Definir responsabilidades y comunicación entre componentes forma parte de la arquitectura y organización del software.',
    },
    {
      id: 46, nivel: 'Duodécimo', subarea: DES, indicador: I.d12_12,
      texto: 'Una aplicación presenta botones con nombres claros, utiliza la misma posición para acciones equivalentes y mantiene una apariencia coherente entre sus pantallas. ¿Qué principio de diseño de interfaz está aplicando?',
      opciones: ['Consistencia', 'Aleatoriedad', 'Ocultamiento de controles'],
      correcta: 0,
      justificacion: 'Mantener patrones coherentes entre pantallas aplica el principio de consistencia.',
    },
    {
      id: 47, nivel: 'Duodécimo', subarea: DES, indicador: I.d12_12,
      texto: 'Un formulario móvil presenta textos pequeños, poco contraste y botones difíciles de identificar. El equipo decide modificarlo para que sea más fácil de utilizar por personas con diferentes necesidades. ¿Qué criterio debe priorizar?',
      opciones: ['Accesibilidad', 'Complejidad visual', 'Reducción de información útil'],
      correcta: 0,
      justificacion: 'La accesibilidad busca que la interfaz pueda ser utilizada por personas con distintas necesidades.',
    },
    {
      id: 48, nivel: 'Duodécimo', subarea: DES, indicador: I.d12_21,
      texto: 'Una aplicación solicita al usuario acceso a la ubicación, pero el equipo determina que esa información no es necesaria para la función que se está desarrollando. ¿Cuál debería ser la decisión más apropiada desde el enfoque de privacidad desde el diseño?',
      opciones: ['Solicitar igualmente el permiso para recopilar más información', 'Evitar recopilar el dato que no resulta necesario', 'Compartir automáticamente la ubicación con terceros'],
      correcta: 1,
      justificacion: 'La privacidad desde el diseño favorece evitar la recopilación de datos que no son necesarios.',
    },
    {
      id: 49, nivel: 'Duodécimo', subarea: DES, indicador: I.d12_21,
      texto: 'Una aplicación requiere información personal para funcionar. El equipo informa al usuario qué datos serán recopilados, para qué serán utilizados y evita recolectar información innecesaria. ¿Qué principio está aplicando?',
      opciones: ['Minimización y transparencia en el tratamiento de datos', 'Recopilación ilimitada de información', 'Ocultamiento del propósito del tratamiento'],
      correcta: 0,
      justificacion: 'Informar al usuario y limitar la recopilación corresponde a transparencia y minimización de datos.',
    },
    {
      id: 50, nivel: 'Duodécimo', subarea: DES, indicador: I.d12_22,
      texto: 'Antes de implementar una nueva función que recopilará información personal sensible, una organización analiza los posibles riesgos para los usuarios y establece medidas para reducirlos. ¿Qué proceso representa esta situación?',
      opciones: ['Evaluación del impacto sobre la privacidad', 'Diseño de logotipo', 'Optimización gráfica'],
      correcta: 0,
      justificacion: 'Analizar riesgos de privacidad antes de implementar una función corresponde a una evaluación de impacto.',
    },
    {
      id: 51, nivel: 'Duodécimo', subarea: DES, indicador: I.d12_22,
      texto: 'Una organización determina que una nueva aplicación puede generar riesgos relacionados con la privacidad de sus usuarios. Antes de ponerla en producción, documenta los riesgos, analiza sus consecuencias y establece medidas de mitigación. ¿Qué aspecto está atendiendo?',
      opciones: ['Gestión de riesgos de privacidad', 'Configuración de impresoras', 'Administración de memoria RAM'],
      correcta: 0,
      justificacion: 'Documentar riesgos, consecuencias y medidas de mitigación forma parte de la gestión de riesgos de privacidad.',
    },
    {
      id: 52, nivel: 'Duodécimo', subarea: DES, indicador: I.d12_31,
      texto: 'Un equipo utiliza una herramienta especializada para representar gráficamente las clases, relaciones y estructuras de un sistema antes de implementarlo. ¿Qué tipo de herramienta está utilizando?',
      opciones: ['Herramienta CASE', 'Antivirus', 'Compresor de archivos'],
      correcta: 0,
      justificacion: 'Las herramientas CASE apoyan el modelado y desarrollo mediante representaciones y herramientas especializadas.',
    },
    {
      id: 53, nivel: 'Duodécimo', subarea: DES, indicador: I.d12_31,
      texto: 'Observe la siguiente estructura:',
      codigo: '        Vehículo\n         /    \\\n  Automóvil  Motocicleta',
      textoFinal: 'Una aplicación define una clase general Vehículo y clases especializadas que heredan características de ella. ¿Qué concepto de modelado orientado a objetos representa?',
      opciones: ['Herencia', 'Sobrecarga de red', 'Fragmentación de datos'],
      correcta: 0,
      justificacion: 'Las clases especializadas que heredan características de una clase general representan herencia.',
    },

    // ===== VIII. Soporte y seguridad - DUODÉCIMO (54-60) =====
    {
      id: 54, nivel: 'Duodécimo', subarea: SOP, indicador: I.s12_11,
      texto: 'Una red LAN contiene varios switches conectados mediante enlaces redundantes. El administrador desea evitar que estas conexiones produzcan ciclos que afecten la comunicación. ¿Qué tecnología debe utilizar?',
      opciones: ['STP', 'DHCP', 'FTP'],
      correcta: 0,
      justificacion: 'STP evita ciclos en redes con enlaces redundantes.',
    },
    {
      id: 55, nivel: 'Duodécimo', subarea: SOP, indicador: I.s12_12,
      texto: 'Un administrador observa que varios switches participan en una red con enlaces redundantes. Para determinar qué enlace debe permanecer activo y cuáles deben bloquearse, utiliza un protocolo que construye lógicamente un árbol libre de bucles. ¿Cuál es su propósito principal?',
      opciones: ['Evitar bucles de capa 2', 'Asignar direcciones IP automáticamente', 'Cifrar los archivos almacenados'],
      correcta: 0,
      justificacion: 'El propósito principal de STP es evitar bucles de capa 2.',
    },
    {
      id: 56, nivel: 'Duodécimo', subarea: SOP, indicador: I.s12_13,
      texto: 'En una red con tres switches, uno de los enlaces redundantes está provocando problemas debido a una configuración incorrecta del árbol de expansión. El administrador revisa las prioridades y costos de los enlaces para determinar cuál debe quedar bloqueado. ¿Qué acción está realizando?',
      opciones: ['Resolución de un problema de configuración de STP', 'Configuración de un servidor DHCP', 'Instalación de una aplicación móvil'],
      correcta: 0,
      justificacion: 'Revisar prioridades y costos para corregir el comportamiento del árbol corresponde a solucionar una configuración de STP.',
    },
    {
      id: 57, nivel: 'Duodécimo', subarea: SOP, indicador: I.s12_13,
      texto: 'Un administrador necesita configurar correctamente una red redundante y desea garantizar que el switch elegido como raíz sea el que tenga las características apropiadas para la topología. ¿Qué parámetro de STP puede utilizar para influir en la elección del puente raíz?',
      opciones: ['Prioridad del puente', 'Dirección IP del servidor web', 'Nombre de usuario'],
      correcta: 0,
      justificacion: 'La prioridad del puente influye en la elección del puente raíz.',
    },
    {
      id: 58, nivel: 'Duodécimo', subarea: SOP, indicador: I.s12_21,
      texto: 'Un equipo desarrolla una aplicación móvil y decide considerar los riesgos de seguridad desde las primeras etapas del proyecto, en lugar de intentar corregirlos únicamente después de terminar el desarrollo. ¿Qué enfoque está aplicando?',
      opciones: ['Seguridad desde el diseño', 'Seguridad exclusivamente posterior al lanzamiento', 'Seguridad basada únicamente en pruebas manuales finales'],
      correcta: 0,
      justificacion: 'Considerar la seguridad desde las primeras etapas corresponde al enfoque de seguridad desde el diseño.',
    },
    {
      id: 59, nivel: 'Duodécimo', subarea: SOP, indicador: I.s12_21,
      texto: 'Una aplicación móvil almacena información de usuarios. El equipo implementa autenticación, controla los permisos y protege los datos para reducir el riesgo de acceso no autorizado. ¿Qué objetivo de seguridad está atendiendo principalmente?',
      opciones: ['Protección de la información y control de acceso', 'Aumento del consumo de almacenamiento', 'Eliminación de la interfaz de usuario'],
      correcta: 0,
      justificacion: 'Autenticación, permisos y protección de datos buscan impedir accesos no autorizados y proteger la información.',
    },
    {
      id: 60, nivel: 'Duodécimo', subarea: SOP, indicador: I.s12_22,
      texto: 'Durante una revisión de una aplicación web, el equipo identifica que una función recibe datos proporcionados por el usuario y los utiliza sin aplicar controles adecuados. Esto podría permitir que una persona malintencionada aproveche la entrada para alterar el comportamiento esperado del sistema. ¿Qué práctica resulta más apropiada para reducir este tipo de vulnerabilidad?',
      opciones: ['Validar y controlar las entradas recibidas', 'Permitir cualquier dato para facilitar el uso', 'Desactivar los mecanismos de autenticación'],
      correcta: 0,
      justificacion: 'La validación y control de entradas reduce riesgos asociados al procesamiento de datos no confiables.',
    },
  ],
};
