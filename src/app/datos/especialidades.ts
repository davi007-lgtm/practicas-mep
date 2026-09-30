import { Especialidad } from './especialidad.modelo';
import { especialidad3015 } from './3015';
import { especialidad3016 } from './especialidad3016';

// Todas las especialidades que tiene la aplicación
export const especialidades: Especialidad[] = [especialidad3015, especialidad3016];

// Busca una especialidad por su código DGEC. Si el código no existe,
// devuelve la primera para no dejar la página sin datos.
export function buscarEspecialidad(codigo: string): Especialidad {
  const encontrada = especialidades.find((una) => una.codigo === codigo);
  return encontrada ? encontrada : especialidades[0];
}
