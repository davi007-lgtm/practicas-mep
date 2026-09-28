// Modelo de datos para las prácticas de pruebas nacionales

// Una pregunta de selección única (A, B, C)
export interface Pregunta {
  id: number;
  nivel: string;          // Décimo, Undécimo o Duodécimo
  subarea: string;        // Subárea de la tabla de especificaciones
  indicador: string;      // Indicador de logro de la tabla de especificaciones
  texto: string;          // Enunciado de la pregunta
  codigo?: string;        // Pseudocódigo o diagrama (mostrar en un <pre>)
  textoFinal?: string;    // Pregunta que va DESPUÉS del código (si hay código)
  opciones: string[];     // Siempre 3 opciones, en el orden original (A, B, C)
  correcta: number;       // Índice en el orden ORIGINAL: 0 = A, 1 = B, 2 = C
  justificacion: string;
}

// Una especialidad técnica completa
export interface Especialidad {
  codigo: string;            // Código DGEC, por ejemplo "3015"
  nombre: string;
  duracionMinutos: number;   // Duración de la prueba en modo examen
  preguntas: Pregunta[];
}
