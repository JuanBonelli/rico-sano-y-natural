import { Disciplina } from "../enums/Disciplina";
import { Sexo } from "../enums/Sexo";
import { Plan } from "./Plan";

export class Paciente {
    private nombre: string;
    private apellido: string;
    private fechaNacimiento: Date;
    private sexo: Sexo;
    private disciplina: Disciplina;
    private planes: Plan[];

    constructor(
        nombre: string,
        apellido: string,
        fechaNacimiento: Date,
        sexo: Sexo,
        disciplina: Disciplina,
        // planes: Plan[]
    ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo;
        this.disciplina = disciplina;
        this.planes = [];
    }

    public asignarPlan = (plan: Plan) => {
        this.planes.push(plan);
    }

    public getEdad = () : number => {
        var today = new Date();
        var birthDate = this.fechaNacimiento;
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
}