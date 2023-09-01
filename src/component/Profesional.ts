import { Especialidad } from "./Especialidad";
import { Paciente } from "./Paciente";

export class Profesional {
    private nombre: string;
    private apellido: string;
    private especialidad: Especialidad;
    private matricula: string;
    private pacientes: Paciente[];

    constructor(
        nombre: string,
        apellido: string,
        especialidad: Especialidad,
        matricula: string,
        // pacientes: Paciente[]
    ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad = especialidad;
        this.matricula = matricula;
        this.pacientes = [];
    }

    public asignarPaciente = (paciente: Paciente) => {
        this.pacientes.push(paciente);
    }

    


}