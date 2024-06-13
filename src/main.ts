type Especialidad = 'Medico de familia' | 'Pediatra' | 'Cardiólogo';

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: 'John',
    apellidos: 'Doe',
    sexo: 'Male',
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: 'Medico de familia',
    edad: 44,
  },
  {
    id: 2,
    nombre: 'Jane',
    apellidos: 'Doe',
    sexo: 'Female',
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: 'Medico de familia',
    edad: 43,
  },
  {
    id: 3,
    nombre: 'Junior',
    apellidos: 'Doe',
    sexo: 'Male',
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: 'Pediatra',
    edad: 8,
  },
  {
    id: 4,
    nombre: 'Mary',
    apellidos: 'Wien',
    sexo: 'Female',
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: 'Medico de familia',
    edad: 20,
  },
  {
    id: 5,
    nombre: 'Scarlett',
    apellidos: 'Somez',
    sexo: 'Female',
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: 'Cardiólogo',
    edad: 30,
  },
  {
    id: 6,
    nombre: 'Brian',
    apellidos: 'Kid',
    sexo: 'Male',
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: 'Pediatra',
    edad: 11,
  },
];

/* Apartado 1 */

// a) Extraer la lista de paciente que están asignados a la especialidad de Pediatría
const obtenPacientesAsignadosAPediatria = (
  arrayPacientes: Pacientes[]
): Pacientes[] => {
  let fichaPediatra: Pacientes[] = [];
  for (let i = 0; i < arrayPacientes.length; i++) {
    let el = arrayPacientes[i];
    el.especialidad === 'Pediatra'
      ? (fichaPediatra = [...fichaPediatra, el])
      : '';
  }
  // Con while
  /* let i = 0;
  while (i < arrayPacientes.length) {
    let el = arrayPacientes[i];
    el.especialidad === 'Pediatra'
      ? (fichaPediatra = [...fichaPediatra, el])
      : '';
    i++;
  } */
  console.log('ficha asignados a pediatria');
  console.table(fichaPediatra);
  return fichaPediatra;
};

// b) Extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  fichaPediatra: Pacientes[]
): Pacientes[] => {
  let fichaPediatraMenorDeDiezAnios: Pacientes[] = [];
  for (let i = 0; i < fichaPediatra.length; i++) {
    const el = fichaPediatra[i];
    if (el.edad < 10) {
      fichaPediatraMenorDeDiezAnios = [...fichaPediatraMenorDeDiezAnios, el];
    }
  }
  console.log('ficha pediatria < 10 años');
  console.table(fichaPediatraMenorDeDiezAnios);
  return fichaPediatraMenorDeDiezAnios;
};

/* Apartado 2 */
// Protocolo de urgencia
const activarProtocoloUrgencia = (arrayPacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  for (let i = 0; i < arrayPacientes.length; i++) {
    const el = arrayPacientes[i];
    el.temperatura > 39.1 && el.frecuenciaCardiaca > 100
      ? (activarProctolo = true)
      : console.log('No se activa el protocolo de urgencia');
  }
  console.log(`activarProtocolo => ${activarProctolo}`);
  return activarProctolo;
};

document.addEventListener('DOMContentLoaded', () => {
  const fichaPediatra = obtenPacientesAsignadosAPediatria(pacientes);
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(fichaPediatra);
  activarProtocoloUrgencia(pacientes);
});
