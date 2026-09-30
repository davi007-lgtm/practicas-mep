import { Especialidad } from './especialidad.modelo';

// Práctica de la Prueba Nacional 2026 - Desarrollo de Aplicaciones Móviles (3015)
// IMPORTANTE: "correcta" usa el orden ORIGINAL de las opciones (0 = A, 1 = B, 2 = C, 3 = D).
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
      texto: 'Una empresa desarrolla una aplicación para coordinar reuniones entre personas que trabajan desde diferentes lugares. Durante las reuniones necesitan comunicarse en tiempo real y observar a los participantes mediante Internet. ¿Cuál herramienta del entorno web responde directamente a esa necesidad?',
      opciones: ['Una plataforma de videoconferencia.', 'Un editor de imágenes.', 'Una hoja electrónica.', 'Un gestor de archivos comprimidos.'],
      correcta: 0,
      justificacion: 'Una plataforma de videoconferencia permite comunicarse y verse en tiempo real mediante Internet.',
    },
    {
      id: 2, nivel: 'Décimo', subarea: TI, indicador: I.ti3,
      texto: 'Un equipo de desarrollo analiza los datos registrados por una aplicación durante varios meses. Primero organiza los valores y luego determina qué ocurrió con el comportamiento de los usuarios durante ese período, sin intentar predecir lo que sucederá después. ¿Cuál tipo de análisis corresponde principalmente al procedimiento descrito?',
      opciones: ['Análisis predictivo.', 'Análisis de regresión.', 'Aprendizaje automatizado.', 'Análisis descriptivo.'],
      correcta: 3,
      justificacion: 'El análisis descriptivo organiza y resume lo ocurrido en el pasado, sin predecir el futuro.',
    },
    {
      id: 3, nivel: 'Décimo', subarea: TI, indicador: I.ti2,
      texto: 'Una empresa almacena la información de sus clientes mediante una tabla denominada CLIENTE. Cada fila contiene el nombre, teléfono y correo de una persona, mientras que las columnas representan las propiedades almacenadas. ¿Qué elemento representa una columna de esa tabla?',
      opciones: ['Registro.', 'Campo.', 'Relación.', 'Consulta.'],
      correcta: 1,
      justificacion: 'Cada columna de una tabla representa un campo (una propiedad o atributo almacenado).',
    },
    {
      id: 4, nivel: 'Décimo', subarea: TI, indicador: I.ti2,
      texto: 'Una empresa desea relacionar la tabla CLIENTE con la tabla PEDIDO. Para lograrlo, utiliza un atributo que identifica de manera única a cada cliente y puede utilizarse en otras tablas para establecer la relación. ¿Cuál elemento corresponde a esa función?',
      opciones: ['Registro.', 'Formulario.', 'Llave.', 'Informe.'],
      correcta: 2,
      justificacion: 'La llave identifica de forma única un registro y permite relacionar tablas entre sí.',
    },
    {
      id: 5, nivel: 'Décimo', subarea: TI, indicador: I.ti3,
      texto: 'Una organización estudia la cantidad de ventas obtenidas por su aplicación durante los últimos seis meses. El análisis busca conocer el comportamiento histórico de las ventas y resumir los datos obtenidos para apoyar una decisión administrativa. ¿Cuál propósito corresponde mejor al análisis realizado?',
      opciones: ['Describir y resumir información disponible.', 'Modificar automáticamente los registros.', 'Crear una conexión entre dispositivos.', 'Sustituir la base de datos utilizada.'],
      correcta: 0,
      justificacion: 'El análisis del comportamiento histórico busca describir y resumir la información disponible.',
    },

    // ===== II. Desarrollo de apps móviles y bases de datos - DÉCIMO (6-14) =====
    {
      id: 6, nivel: 'Décimo', subarea: DES, indicador: I.d10_11,
      texto: 'Una estudiante recibe el problema de determinar si un usuario puede acceder a una actividad según su edad. Antes de escribir las instrucciones del programa, establece los pasos que se deben seguir para obtener una solución. ¿Qué concepto está aplicando?',
      opciones: ['Depuración.', 'Algoritmo.', 'Compilación.', 'Interfaz.'],
      correcta: 1,
      justificacion: 'Un algoritmo es la secuencia de pasos que se establece para resolver un problema.',
    },
    {
      id: 7, nivel: 'Décimo', subarea: DES, indicador: I.d10_12,
      texto: 'Una aplicación debe mostrar el mensaje "Acceso permitido" solamente cuando la contraseña ingresada coincide con la registrada. ¿Qué estructura lógica permite controlar directamente esa situación?',
      opciones: ['Repetición.', 'Secuencia.', 'Selección.', 'Almacenamiento.'],
      correcta: 2,
      justificacion: 'La selección ejecuta una acción solamente si se cumple una condición.',
    },
    {
      id: 8, nivel: 'Décimo', subarea: DES, indicador: I.d10_12,
      texto: 'Un programa recibe tres números y necesita determinar cuál es el mayor. El desarrollador compara los valores entre sí para establecer cuál cumple la condición requerida. ¿Qué principio lógico está utilizando principalmente?',
      opciones: ['Iteración sin condición.', 'Comparación de valores.', 'Almacenamiento permanente.', 'Transferencia de archivos.'],
      correcta: 1,
      justificacion: 'Determinar el mayor de varios números se logra comparando los valores entre sí.',
    },
    {
      id: 9, nivel: 'Décimo', subarea: DES, indicador: I.d10_13,
      texto: 'Una aplicación calcula el importe de una compra multiplicando la cantidad de unidades por el precio de cada producto. ¿Cuál expresión representa adecuadamente la operación necesaria?',
      opciones: ['total = cantidad * precio', 'total = cantidad + precio', 'total = cantidad / precio', 'total = cantidad - precio'],
      correcta: 0,
      justificacion: 'El importe se obtiene multiplicando cantidad por precio.',
    },
    {
      id: 10, nivel: 'Décimo', subarea: DES, indicador: I.d10_13,
      texto: 'Una aplicación solicita la edad de una persona y debe determinar si tiene la edad mínima requerida para participar en una actividad. ¿Cuál alternativa representa mejor la lógica necesaria?',
      opciones: ['Repetir indefinidamente la solicitud de edad.', 'Comparar la edad ingresada con la edad mínima establecida.', 'Eliminar la edad después de ingresarla.', 'Convertir la edad en un texto sin realizar ninguna comparación.'],
      correcta: 1,
      justificacion: 'Para saber si cumple el requisito se compara la edad ingresada con la edad mínima.',
    },
    {
      id: 11, nivel: 'Décimo', subarea: DES, indicador: I.d10_21,
      texto: 'Durante una prueba se ejecuta el siguiente pseudocódigo:',
      codigo: 'total ← 10\ntotal ← total + 5\ntotal ← total * 2',
      textoFinal: '¿Cuál valor contiene total al finalizar la ejecución?',
      opciones: ['15', '20', '25', '30'],
      correcta: 3,
      justificacion: 'total inicia en 10, luego 10 + 5 = 15 y finalmente 15 * 2 = 30.',
    },
    {
      id: 12, nivel: 'Décimo', subarea: DES, indicador: I.d10_21,
      texto: 'Un estudiante analiza la siguiente instrucción:',
      codigo: 'resultado ← precio + cantidad',
      textoFinal: 'La aplicación debe calcular el costo de varios productos considerando su precio unitario y la cantidad adquirida. ¿Cuál problema presenta la instrucción?',
      opciones: ['Utiliza una operación que no representa el cálculo requerido.', 'La variable resultado no puede almacenar números.', 'La suma siempre produce un error de sintaxis.', 'El precio no puede utilizarse en una operación matemática.'],
      correcta: 0,
      justificacion: 'El costo total requiere multiplicar precio por cantidad; sumar no representa el cálculo requerido.',
    },
    {
      id: 13, nivel: 'Décimo', subarea: DES, indicador: I.d10_22,
      texto: 'Durante una prueba se ejecuta:',
      codigo: 'contador ← 1\nMientras contador ≤ 4 Hacer\n  mostrar(contador)\n  contador ← contador + 1\nFinMientras',
      textoFinal: '¿Qué valores se muestran durante la ejecución?',
      opciones: ['0, 1, 2, 3', '1, 2, 3, 4, 5', '1, 2, 3, 4', '4, 3, 2, 1'],
      correcta: 2,
      justificacion: 'El ciclo inicia en 1 y se repite mientras contador sea menor o igual a 4, mostrando 1, 2, 3 y 4.',
    },
    {
      id: 14, nivel: 'Décimo', subarea: DES, indicador: I.d10_22,
      texto: 'Un estudiante analiza el siguiente código:',
      codigo: 'nota ← 68\nSi nota ≥ 70 Entonces\n  mostrar("Aprobado")\nSino\n  mostrar("Reprobado")\nFinSi',
      textoFinal: '¿Cuál resultado corresponde a la ejecución?',
      opciones: ['Se muestran ambos mensajes.', 'Se muestra "Aprobado".', 'No se ejecuta ninguna instrucción.', 'Se muestra "Reprobado".'],
      correcta: 3,
      justificacion: 'Como 68 no es mayor ni igual a 70, se ejecuta la rama Sino y se muestra "Reprobado".',
    },

    // ===== III. Soporte y seguridad - DÉCIMO (15-24) =====
    {
      id: 15, nivel: 'Décimo', subarea: SOP, indicador: I.s10_11,
      texto: 'Una persona compara dos teléfonos para utilizar varias aplicaciones simultáneamente. Ambos tienen almacenamiento suficiente, pero uno dispone de mayor memoria RAM. ¿Qué ventaja está relacionada directamente con este componente?',
      opciones: ['Mayor resolución de la cámara.', 'Mayor capacidad de la tarjeta SIM.', 'Mayor capacidad para mantener aplicaciones y procesos activos.', 'Mayor alcance de la señal celular.'],
      correcta: 2,
      justificacion: 'La RAM permite mantener más aplicaciones y procesos activos al mismo tiempo.',
    },
    {
      id: 16, nivel: 'Décimo', subarea: SOP, indicador: I.s10_11,
      texto: 'Un técnico recibe un teléfono que se reinicia al utilizar aplicaciones que requieren una alta capacidad de procesamiento. Decide analizar primero los componentes internos y las características técnicas del dispositivo antes de sustituir piezas. ¿Qué procedimiento está realizando?',
      opciones: ['Instalación del sistema operativo.', 'Formateo del almacenamiento.', 'Configuración de la red inalámbrica.', 'Comparación y diagnóstico de componentes de hardware.'],
      correcta: 3,
      justificacion: 'Analizar componentes y características técnicas antes de sustituir piezas es diagnosticar el hardware.',
    },
    {
      id: 17, nivel: 'Décimo', subarea: SOP, indicador: I.s10_11,
      texto: 'Un teléfono funciona correctamente mientras permanece conectado al cargador, pero se apaga pocos minutos después de desconectarlo. ¿Cuál componente debería investigarse prioritariamente?',
      opciones: ['Micrófono.', 'Batería.', 'Altavoz.', 'Cámara.'],
      correcta: 1,
      justificacion: 'Si el equipo solo funciona conectado a la corriente, la falla apunta a la batería.',
    },
    {
      id: 18, nivel: 'Décimo', subarea: SOP, indicador: I.s10_11,
      texto: 'Dos dispositivos móviles tienen características similares, pero uno está diseñado para ejecutar tareas de procesamiento más exigentes debido a las características de su unidad central de procesamiento. ¿Cuál componente explica principalmente esa diferencia?',
      opciones: ['Procesador.', 'Sensor de proximidad.', 'Cámara frontal.', 'Tarjeta SIM.'],
      correcta: 0,
      justificacion: 'La unidad central de procesamiento es el procesador, que define la capacidad de procesamiento.',
    },
    {
      id: 19, nivel: 'Décimo', subarea: SOP, indicador: I.s10_21,
      texto: 'Antes de realizar mantenimiento preventivo a una computadora portátil, el técnico respalda la información, desconecta las fuentes de energía y verifica las características del equipo que va a intervenir. ¿Cuál razón justifica principalmente estas acciones?',
      opciones: ['Incrementar la velocidad de Internet.', 'Cambiar automáticamente el sistema operativo.', 'Reducir riesgos durante la intervención y proteger la información.', 'Mejorar la resolución de la pantalla.'],
      correcta: 2,
      justificacion: 'Respaldar, desconectar la energía y verificar el equipo reduce riesgos y protege la información.',
    },
    {
      id: 20, nivel: 'Décimo', subarea: SOP, indicador: I.s10_21,
      texto: 'Una computadora portátil presenta acumulación de polvo en las zonas de ventilación y temperaturas superiores a las habituales. No existen evidencias de daño físico en otros componentes. ¿Cuál acción es más coherente con el mantenimiento preventivo?',
      opciones: ['Aumentar permanentemente el brillo de la pantalla.', 'Eliminar las cuentas de usuario.', 'Deshabilitar las funciones de ahorro de energía.', 'Realizar una limpieza adecuada de las zonas de ventilación siguiendo procedimientos de seguridad.'],
      correcta: 3,
      justificacion: 'Limpiar la ventilación con procedimientos seguros previene el sobrecalentamiento y las fallas.',
    },
    {
      id: 21, nivel: 'Décimo', subarea: SOP, indicador: I.s10_22,
      texto: 'Una empresa necesita imprimir diariamente gran cantidad de documentos de texto. La velocidad de impresión y el costo operativo por página son aspectos importantes para seleccionar el equipo. ¿Qué criterio debe considerarse principalmente?',
      opciones: ['Las características y necesidades operativas de la impresora.', 'El tamaño físico del monitor.', 'La cantidad de aplicaciones instaladas.', 'El sistema de archivos del teléfono móvil.'],
      correcta: 0,
      justificacion: 'Velocidad y costo por página son características y necesidades operativas de la impresora.',
    },
    {
      id: 22, nivel: 'Décimo', subarea: SOP, indicador: I.s10_22,
      texto: 'Un pequeño estudio de diseño requiere imprimir fotografías y material gráfico donde la calidad del color es prioritaria. ¿Qué aspecto debe analizar antes de seleccionar la impresora?',
      opciones: ['La cantidad de núcleos del procesador de la computadora.', 'La velocidad del teclado utilizado.', 'La capacidad de la batería del teléfono.', 'La tecnología de impresión y la calidad que puede proporcionar.'],
      correcta: 3,
      justificacion: 'La calidad del color depende de la tecnología de impresión y de la calidad que ofrece la impresora.',
    },
    {
      id: 23, nivel: 'Décimo', subarea: SOP, indicador: I.s10_31,
      texto: 'Una persona utiliza la misma contraseña sencilla para su correo electrónico, plataforma educativa y otros servicios. ¿Cuál medida contribuye directamente a mejorar la seguridad de sus credenciales?',
      opciones: ['Utilizar una contraseña corta y fácil de recordar.', 'Utilizar contraseñas robustas y diferentes para los servicios importantes.', 'Compartir la contraseña con una persona de confianza.', 'Escribir la contraseña junto al equipo para no olvidarla.'],
      correcta: 1,
      justificacion: 'Las contraseñas robustas y distintas para cada servicio importante mejoran la seguridad de las credenciales.',
    },
    {
      id: 24, nivel: 'Décimo', subarea: SOP, indicador: I.s10_32,
      texto: 'Una empresa establece procedimientos alternativos, responsables, respaldos y acciones para mantener o recuperar sus operaciones cuando ocurre un desastre que afecta sus sistemas. ¿Qué concepto representa esta preparación?',
      opciones: ['Control de cambios.', 'Mantenimiento correctivo.', 'Plan de contingencia.', 'Diseño de interfaz.'],
      correcta: 2,
      justificacion: 'Un plan de contingencia define procedimientos, responsables y respaldos para recuperar operaciones ante un desastre.',
    },

    // ===== IV. Emprendimiento e innovación - UNDÉCIMO (25-29) =====
    {
      id: 25, nivel: 'Undécimo', subarea: EMP, indicador: I.em11,
      texto: 'Un estudiante quiere desarrollar una aplicación para pequeños comercios. Antes de invertir dinero, analiza el problema que pretende solucionar, las necesidades de los posibles clientes, los recursos disponibles y las condiciones del entorno. ¿Qué está haciendo principalmente?',
      opciones: ['Analizando elementos necesarios para emprender un proyecto.', 'Ejecutando una auditoría de software.', 'Configurando una red LAN.', 'Diseñando una base de datos.'],
      correcta: 0,
      justificacion: 'Analizar problema, clientes, recursos y entorno son elementos a considerar al emprender un proyecto.',
    },
    {
      id: 26, nivel: 'Undécimo', subarea: EMP, indicador: I.em21,
      texto: 'Un grupo de personas de una comunidad desea desarrollar conjuntamente una actividad económica basada en la cooperación y participación de sus integrantes. Antes de seleccionar una figura jurídica, analizan las alternativas existentes dentro de la economía social solidaria. ¿Cuál opción corresponde a una de las formas asociativas estudiadas en este contexto?',
      opciones: ['Franquicia individual.', 'Cooperativa.', 'Cuenta bancaria personal.', 'Sociedad accidental de usuarios.'],
      correcta: 1,
      justificacion: 'La cooperativa es una forma asociativa de la economía social solidaria basada en la cooperación.',
    },
    {
      id: 27, nivel: 'Undécimo', subarea: EMP, indicador: I.em31,
      texto: 'Una persona desea formalizar una empresa dedicada al desarrollo de aplicaciones. Para elegir la modalidad que utilizará, compara empresas según su actividad, forma jurídica, procedencia del capital y tamaño. ¿Qué está realizando?',
      opciones: ['Un análisis del sistema operativo.', 'Una prueba de usabilidad.', 'Una comparación de tipos de empresas.', 'Un análisis de vulnerabilidades.'],
      correcta: 2,
      justificacion: 'Comparar empresas por actividad, forma jurídica, capital y tamaño es comparar tipos de empresas.',
    },
    {
      id: 28, nivel: 'Undécimo', subarea: EMP, indicador: I.em41,
      texto: 'Una emprendedora dispone de una idea para una aplicación, pero necesita conocer las instituciones que pueden brindar acompañamiento, financiamiento u orientación para consolidar el proyecto. ¿Qué debería investigar?',
      opciones: ['Únicamente empresas de telefonía.', 'Solamente tiendas de aplicaciones.', 'Fabricantes de dispositivos móviles.', 'Instituciones de apoyo al emprendimiento.'],
      correcta: 3,
      justificacion: 'Las instituciones de apoyo al emprendimiento brindan acompañamiento, financiamiento y orientación.',
    },
    {
      id: 29, nivel: 'Undécimo', subarea: EMP, indicador: I.em42,
      texto: 'Un emprendimiento ha definido su modelo de negocio y ahora necesita cumplir con los requisitos establecidos por las instituciones correspondientes para comenzar formalmente sus operaciones. ¿Qué proceso debe realizar?',
      opciones: ['Formalización del emprendimiento.', 'Diseño de la interfaz.', 'Configuración de un servidor DNS.', 'Depuración del código.'],
      correcta: 0,
      justificacion: 'Cumplir los requisitos institucionales para operar formalmente es la formalización del emprendimiento.',
    },

    // ===== V. Desarrollo de apps móviles y bases de datos - UNDÉCIMO (30-35) =====
    {
      id: 30, nivel: 'Undécimo', subarea: DES, indicador: I.d11_11,
      texto: 'Una empresa recibe muchas consultas relacionadas con una aplicación móvil. Los usuarios indican que sus problemas son atendidos inicialmente, pero después no reciben información sobre el avance de la solución. ¿Qué factor del servicio al cliente está siendo afectado principalmente?',
      opciones: ['Diseño de la pantalla.', 'Seguimiento de la atención.', 'Capacidad del procesador.', 'Almacenamiento interno.'],
      correcta: 1,
      justificacion: 'Que los usuarios no reciban información sobre el avance de la solución indica falta de seguimiento de la atención.',
    },
    {
      id: 31, nivel: 'Undécimo', subarea: DES, indicador: I.d11_11,
      texto: 'Una empresa desarrolla una aplicación y desea establecer un proceso de atención que considere las necesidades del usuario, el análisis del mercado y estrategias para mejorar la satisfacción. ¿Cuál enfoque responde mejor a esa situación?',
      opciones: ['Concentrarse únicamente en las características del dispositivo.', 'Eliminar el seguimiento posterior a la atención.', 'Modificar exclusivamente los elementos visuales.', 'Gestionar el servicio considerando los factores que influyen en la experiencia del cliente.'],
      correcta: 3,
      justificacion: 'Un buen servicio se gestiona considerando los factores que influyen en la experiencia del cliente.',
    },
    {
      id: 32, nivel: 'Undécimo', subarea: DES, indicador: I.d11_21,
      texto: 'Una plataforma digital busca que las personas participen responsablemente en entornos tecnológicos y que las oportunidades de interacción no generen exclusión social. ¿Cuáles conceptos deben considerarse conjuntamente?',
      opciones: ['Encapsulamiento y herencia.', 'Servidor y cliente.', 'Ciudadanía digital y equidad social.', 'Compilación y depuración.'],
      correcta: 2,
      justificacion: 'La participación responsable corresponde a la ciudadanía digital y evitar la exclusión, a la equidad social.',
    },
    {
      id: 33, nivel: 'Undécimo', subarea: DES, indicador: I.d11_31,
      texto: 'Un desarrollador necesita que su aplicación almacene información de usuarios y que posteriormente pueda realizar operaciones sobre esos datos mediante los servicios de una plataforma de desarrollo en la nube. ¿Cuál alternativa corresponde al entorno estudiado para esta finalidad?',
      opciones: ['Un procesador de textos.', 'Firebase.', 'Un programa de edición gráfica.', 'Un controlador de impresora.'],
      correcta: 1,
      justificacion: 'Firebase es la plataforma en la nube para bases de datos orientadas al desarrollo de aplicaciones.',
    },
    {
      id: 34, nivel: 'Undécimo', subarea: DES, indicador: I.d11_32,
      texto: 'Una aplicación permite modificar el teléfono registrado de un usuario sin eliminar el resto de la información almacenada. ¿Cuál operación de gestión de datos corresponde?',
      opciones: ['Actualización de datos.', 'Formateo de la base de datos.', 'Eliminación del registro.', 'Creación de un nuevo sistema operativo.'],
      correcta: 0,
      justificacion: 'Modificar un dato existente sin borrar el resto es una actualización de datos.',
    },
    {
      id: 35, nivel: 'Undécimo', subarea: DES, indicador: I.d11_32,
      texto: 'Una aplicación ya no debe conservar un registro correspondiente a un usuario que solicitó eliminar su cuenta. ¿Cuál operación debe utilizarse?',
      opciones: ['Consulta.', 'Eliminación de datos.', 'Compilación.', 'Herencia.'],
      correcta: 1,
      justificacion: 'Quitar un registro de la base de datos corresponde a la eliminación de datos.',
    },

    // ===== VI. Soporte y seguridad - UNDÉCIMO (36-43) =====
    {
      id: 36, nivel: 'Undécimo', subarea: SOP, indicador: I.s11_11,
      texto: 'Durante una prueba de hardware, un módulo electrónico de un prototipo móvil trabaja con una diferencia de potencial de 12 V y circula una corriente de 0,5 A. El técnico necesita determinar la resistencia equivalente del circuito. ¿Cuál valor corresponde a la resistencia según la ley de Ohm?',
      opciones: ['6 Ω', '12 Ω', '24 Ω', '48 Ω'],
      correcta: 2,
      justificacion: 'Según la Ley de Ohm, R = V / I = 12 V / 0,5 A = 24 Ω.',
    },
    {
      id: 37, nivel: 'Undécimo', subarea: SOP, indicador: I.s11_11,
      texto: 'Una oficina desea disminuir el consumo innecesario de electricidad de sus equipos informáticos durante periodos en los que no están siendo utilizados. ¿Qué acción se relaciona directamente con la eficiencia energética?',
      opciones: ['Mantener todos los dispositivos encendidos permanentemente.', 'Utilizar configuraciones y prácticas que reduzcan el consumo innecesario.', 'Aumentar el brillo de todas las pantallas.', 'Desactivar las funciones de ahorro de energía.'],
      correcta: 1,
      justificacion: 'La eficiencia energética busca reducir el consumo innecesario mediante configuraciones y buenas prácticas.',
    },
    {
      id: 38, nivel: 'Undécimo', subarea: SOP, indicador: I.s11_21,
      texto: 'Dos dispositivos conectados a una red deben utilizar reglas comunes para determinar cómo se estructuran, transmiten e interpretan los mensajes que intercambian. ¿Qué elemento permite establecer esas reglas?',
      opciones: ['El sistema operativo.', 'El disco duro.', 'El monitor.', 'Los protocolos.'],
      correcta: 3,
      justificacion: 'Los protocolos establecen las reglas de comunicación entre dispositivos de una red.',
    },
    {
      id: 39, nivel: 'Undécimo', subarea: SOP, indicador: I.s11_22,
      texto: 'Un estudiante afirma que OSI y TCP/IP son exactamente iguales y que ambos utilizan la misma estructura de capas. ¿Cuál afirmación corrige mejor esa interpretación?',
      opciones: ['OSI funciona únicamente con redes inalámbricas.', 'TCP/IP no utiliza protocolos.', 'Ambos son modelos de referencia relacionados, pero presentan diferencias en su organización.', 'Los dos modelos son idénticos.'],
      correcta: 2,
      justificacion: 'OSI y TCP/IP son modelos de referencia relacionados, pero organizan sus capas de forma distinta.',
    },
    {
      id: 40, nivel: 'Undécimo', subarea: SOP, indicador: I.s11_22,
      texto: 'Un técnico necesita explicar cómo se produce el encapsulamiento de los datos y cómo se relacionan las distintas funciones de comunicación dentro de los modelos de referencia. ¿Cuál recurso conceptual resulta apropiado?',
      opciones: ['Los modelos OSI y TCP/IP.', 'Una impresora multifuncional.', 'Un editor de fotografías.', 'Un antivirus.'],
      correcta: 0,
      justificacion: 'El encapsulamiento y las funciones de comunicación se explican mediante los modelos OSI y TCP/IP.',
    },
    {
      id: 41, nivel: 'Undécimo', subarea: SOP, indicador: I.s11_31,
      texto: 'Una empresa define características que debe cumplir una aplicación, realiza revisiones, identifica defectos y establece controles para garantizar que el producto satisfaga los requisitos establecidos. ¿Con qué concepto trabaja principalmente?',
      opciones: ['Compresión.', 'Virtualización.', 'Calidad del software.', 'Enrutamiento.'],
      correcta: 2,
      justificacion: 'Definir requisitos, revisar y controlar defectos para satisfacer lo establecido es trabajar con calidad del software.',
    },
    {
      id: 42, nivel: 'Undécimo', subarea: SOP, indicador: I.s11_32,
      texto: 'Un equipo de desarrollo incorpora métodos, técnicas y controles para detectar problemas durante el desarrollo de una aplicación y reducir la posibilidad de entregar errores al cliente. ¿Qué enfoque está aplicando?',
      opciones: ['Estrategias para el logro de la calidad del software.', 'Configuración de una VLAN.', 'Administración de una impresora.', 'Diseño de un dispositivo móvil.'],
      correcta: 0,
      justificacion: 'Métodos, técnicas y controles para detectar errores durante el desarrollo son estrategias de calidad del software.',
    },
    {
      id: 43, nivel: 'Undécimo', subarea: SOP, indicador: I.s11_32,
      texto: 'Una organización compara diferentes mecanismos para garantizar la calidad de sus sistemas y selecciona aquellos que permiten verificar, controlar y mejorar el producto durante su desarrollo. ¿Cuál criterio está aplicando?',
      opciones: ['Cambiar el tipo de dispositivo utilizado.', 'Seleccionar estrategias de aseguramiento y logro de la calidad.', 'Aumentar la memoria RAM.', 'Modificar el protocolo de red.'],
      correcta: 1,
      justificacion: 'Elegir mecanismos que verifican, controlan y mejoran el producto es seleccionar estrategias de aseguramiento de la calidad.',
    },

    // ===== VII. Desarrollo de apps móviles y bases de datos - DUODÉCIMO (44-53) =====
    {
      id: 44, nivel: 'Duodécimo', subarea: DES, indicador: I.d12_11,
      texto: 'Durante el diseño de una aplicación, el equipo define botones, campos de entrada, menús y otros elementos mediante los cuales la persona usuaria interactuará con el sistema. ¿A qué corresponde principalmente este conjunto de elementos?',
      opciones: ['Medios de transmisión.', 'Servicios de red.', 'Componentes de la interfaz de usuario.', 'Dispositivos de almacenamiento.'],
      correcta: 2,
      justificacion: 'Botones, campos y menús son componentes de la interfaz de usuario.',
    },
    {
      id: 45, nivel: 'Duodécimo', subarea: DES, indicador: I.d12_11,
      texto: 'Antes de diseñar las pantallas de una aplicación, el equipo estudia quién utilizará el sistema, qué tareas realizará, qué información debe observar y en qué ambiente utilizará la aplicación. ¿Qué proceso está realizando?',
      opciones: ['Configuración de un switch.', 'Administración de una base de datos.', 'Prueba de hardware.', 'Análisis de la interfaz de usuario.'],
      correcta: 3,
      justificacion: 'Estudiar usuarios, tareas, información y ambiente de uso es parte del análisis de la interfaz de usuario.',
    },
    {
      id: 46, nivel: 'Duodécimo', subarea: DES, indicador: I.d12_12,
      texto: 'Una aplicación exige que el usuario recuerde códigos y secuencias diferentes para realizar tareas que podría completar mediante controles visibles. ¿Qué regla de diseño debería aplicarse para mejorar esa interacción?',
      opciones: ['Aumentar la cantidad de información que el usuario debe recordar.', 'Utilizar elementos diferentes para acciones equivalentes.', 'Reducir las necesidades de memorización del usuario.', 'Eliminar las indicaciones del sistema.'],
      correcta: 2,
      justificacion: 'Una buena interfaz reduce la carga de memoria del usuario mostrando controles visibles.',
    },
    {
      id: 47, nivel: 'Duodécimo', subarea: DES, indicador: I.d12_12,
      texto: 'En una aplicación, dos botones que realizan acciones similares presentan diferentes formas, ubicación y comportamiento dependiendo de la pantalla en la que aparecen. ¿Qué regla del diseño de interfaz debería revisarse?',
      opciones: ['Privacidad por defecto.', 'Encapsulamiento.', 'Disponibilidad.', 'Consistencia de la interfaz.'],
      correcta: 3,
      justificacion: 'Acciones similares deben verse y comportarse igual en todas las pantallas: consistencia de la interfaz.',
    },
    {
      id: 48, nivel: 'Duodécimo', subarea: DES, indicador: I.d12_21,
      texto: 'Durante el desarrollo de una aplicación que manejará datos personales, el equipo incorpora mecanismos de protección desde las primeras etapas del proyecto en lugar de agregarlos después de que la aplicación esté terminada. ¿Cuál principio de privacidad representa mejor esta decisión?',
      opciones: ['Privacidad únicamente después de un incidente.', 'Tratamiento posterior de riesgos.', 'Eliminación de controles preventivos.', 'Enfoque proactivo y preventivo.'],
      correcta: 3,
      justificacion: 'Incorporar la protección desde el inicio corresponde al enfoque proactivo y preventivo.',
    },
    {
      id: 49, nivel: 'Duodécimo', subarea: DES, indicador: I.d12_21,
      texto: 'Una aplicación debe proteger determinados datos personales incluso cuando el usuario no modifique manualmente las opciones de privacidad establecidas por el sistema. ¿Qué principio está relacionado directamente con esta situación?',
      opciones: ['Privacidad embebida.', 'Disponibilidad.', 'Privacidad por defecto.', 'Abstracción.'],
      correcta: 2,
      justificacion: 'La privacidad por defecto protege los datos sin que el usuario deba configurar nada.',
    },
    {
      id: 50, nivel: 'Duodécimo', subarea: DES, indicador: I.d12_22,
      texto: 'Antes de implementar una aplicación, el equipo identifica qué información será tratada, qué riesgos existen, cuál será el ciclo de vida de los datos y qué responsabilidades podrían generarse. ¿Qué proceso corresponde principalmente?',
      opciones: ['Prueba de rendimiento.', 'Revisión del código fuente.', 'Evaluación del impacto de privacidad.', 'Configuración del servidor.'],
      correcta: 2,
      justificacion: 'Identificar información tratada, riesgos, ciclo de vida y responsabilidades es una evaluación del impacto de privacidad.',
    },
    {
      id: 51, nivel: 'Duodécimo', subarea: DES, indicador: I.d12_22,
      texto: 'Una organización analiza qué sucede con la información personal desde el momento en que es recopilada hasta que deja de utilizarse. ¿Qué aspecto de la evaluación de impacto está examinando?',
      opciones: ['El ciclo de vida de los datos.', 'El patrón de diseño.', 'La visibilidad de los botones.', 'La configuración del monitor.'],
      correcta: 0,
      justificacion: 'Seguir la información desde su recopilación hasta que deja de usarse es analizar el ciclo de vida de los datos.',
    },
    {
      id: 52, nivel: 'Duodécimo', subarea: DES, indicador: I.d12_31,
      texto: 'Un equipo modela un sistema utilizando clases, objetos, atributos y operaciones antes de iniciar determinadas fases de construcción del software. ¿Qué concepto está aplicando?',
      opciones: ['Modelado orientado a objetos.', 'Transmisión inalámbrica.', 'Mantenimiento preventivo.', 'Gestión energética.'],
      correcta: 0,
      justificacion: 'Modelar con clases, objetos, atributos y operaciones es modelado orientado a objetos.',
    },
    {
      id: 53, nivel: 'Duodécimo', subarea: DES, indicador: I.d12_31,
      texto: 'Un equipo representa una clase Cliente con atributos como nombre, correo y telefono, además de operaciones que permiten modificar esos datos. ¿Qué está representando principalmente?',
      opciones: ['Un medio de transmisión.', 'Una topología de red.', 'Un patrón de energía.', 'Una clase dentro de un modelo orientado a objetos.'],
      correcta: 3,
      justificacion: 'Una clase agrupa atributos y operaciones dentro de un modelo orientado a objetos.',
    },

    // ===== VIII. Soporte y seguridad - DUODÉCIMO (54-60) =====
    {
      id: 54, nivel: 'Duodécimo', subarea: SOP, indicador: I.s12_11,
      texto: 'Una red tiene varios switches conectados mediante enlaces redundantes. El administrador necesita evitar que las tramas circulen indefinidamente debido a la existencia de caminos alternativos. ¿Qué propósito cumple STP en esta situación?',
      opciones: ['Asignar direcciones IP automáticamente.', 'Evitar bucles en la topología de conmutación.', 'Convertir nombres de dominio en direcciones IP.', 'Aumentar la velocidad física de los enlaces.'],
      correcta: 1,
      justificacion: 'STP evita bucles en redes de switches con enlaces redundantes.',
    },
    {
      id: 55, nivel: 'Duodécimo', subarea: SOP, indicador: I.s12_12,
      texto: 'En una red con enlaces redundantes, uno de los caminos permanece lógicamente bloqueado mientras otro se utiliza para el envío normal de las tramas. ¿Qué característica de STP explica principalmente este comportamiento?',
      opciones: ['La creación de una topología lógica libre de bucles.', 'La asignación automática de direcciones IPv6.', 'La resolución de nombres DNS.', 'La compresión de las tramas.'],
      correcta: 0,
      justificacion: 'STP bloquea lógicamente enlaces redundantes para crear una topología libre de bucles.',
    },
    {
      id: 56, nivel: 'Duodécimo', subarea: SOP, indicador: I.s12_13,
      texto: 'Un técnico modifica la configuración de varios switches. Después del cambio, aparecen problemas relacionados con los caminos redundantes y el tráfico de capa 2. Al revisar la red detecta que algunos parámetros de STP no corresponden con la topología esperada. ¿Qué acción es más adecuada?',
      opciones: ['Cambiar las contraseñas de los usuarios.', 'Desinstalar las aplicaciones móviles.', 'Sustituir todos los dispositivos de red.', 'Revisar y corregir la configuración de STP de acuerdo con la topología.'],
      correcta: 3,
      justificacion: 'Si los parámetros de STP no corresponden con la topología, se debe revisar y corregir su configuración.',
    },
    {
      id: 57, nivel: 'Duodécimo', subarea: SOP, indicador: I.s12_13,
      texto: 'En una red empresarial, un enlace que anteriormente permanecía bloqueado comienza a participar en el reenvío de tramas después de una modificación. ¿Cuál aspecto debe investigarse prioritariamente?',
      opciones: ['El estado y configuración de STP en los puertos afectados.', 'La resolución de la pantalla de las computadoras.', 'El tamaño de las bases de datos.', 'El sistema operativo de los teléfonos.'],
      correcta: 0,
      justificacion: 'El cambio en el estado de un enlace bloqueado se investiga revisando el estado y configuración de STP en los puertos.',
    },
    {
      id: 58, nivel: 'Duodécimo', subarea: SOP, indicador: I.s12_21,
      texto: 'Durante el desarrollo de una aplicación, el equipo valida las entradas del usuario, controla los permisos de acceso y aplica medidas para disminuir riesgos antes de poner el sistema en producción. ¿Qué enfoque describe mejor estas prácticas?',
      opciones: ['Diseño centrado exclusivamente en estética.', 'Diseño reactivo posterior a los incidentes.', 'Diseño sin controles de acceso.', 'Diseño seguro.'],
      correcta: 3,
      justificacion: 'Validar entradas, controlar permisos y reducir riesgos antes de producción es diseño seguro.',
    },
    {
      id: 59, nivel: 'Duodécimo', subarea: SOP, indicador: I.s12_22,
      texto: 'Una aplicación solicita información personal que no necesita, mantiene permisos excesivos y presenta mecanismos de control insuficientes. ¿Cuál interpretación es más adecuada?',
      opciones: ['La aplicación es segura porque funciona correctamente.', 'Existen posibles vulnerabilidades que deben ser identificadas y tratadas.', 'Los problemas descritos pertenecen únicamente al hardware.', 'Una aplicación solamente es vulnerable cuando deja de funcionar.'],
      correcta: 1,
      justificacion: 'Datos innecesarios, permisos excesivos y controles insuficientes son posibles vulnerabilidades por tratar.',
    },
    {
      id: 60, nivel: 'Duodécimo', subarea: SOP, indicador: I.s12_22,
      texto: 'Dos aplicaciones proporcionan funciones similares. Sin embargo, una incorpora controles de acceso, mecanismos para proteger información y medidas para reducir riesgos durante su funcionamiento. ¿Cuál afirmación describe mejor la situación?',
      opciones: ['La cantidad de funcionalidades determina por sí sola la seguridad.', 'Ambas aplicaciones necesariamente tienen el mismo nivel de protección.', 'Los mecanismos de seguridad pueden disminuir vulnerabilidades y riesgos asociados con la aplicación.', 'Los controles de seguridad solamente son necesarios cuando ocurre un incidente.'],
      correcta: 2,
      justificacion: 'Los mecanismos de seguridad reducen vulnerabilidades y riesgos de la aplicación.',
    },
  ],
};