import { Calificacion } from "../enums/Calificacion";
import { Bebida } from "./Bebida";
import { Colacion } from "./Colacion";
import { Comida } from "./Comida";
import { Duracion } from "./Duracion";
import { Objetivo } from "./Objetivo";
import { Profesional } from "./Profesional";

export class Plan {
    private profesional: Profesional;
    private edadPaciente: number;
    private pesoPaciente: number;
    private cinturaPaciente: number;
    private duracion: Duracion;
    private comidas: Comida[];
    private colaciones: Colacion[];
    private bebidas: Bebida[];
    private objetivos : Objetivo[];

    constructor(
        profesional: Profesional,
        edadPaciente: number,
        pesoPaciente: number,
        cinturaPaciente: number,
        duracion: Duracion,
        comidas: Comida[],
        colaciones: Colacion[],
        bebidas: Bebida[],
        objetivos: Objetivo[]
    ) {
        this.profesional = profesional;
        this.edadPaciente = edadPaciente;
        this.pesoPaciente = pesoPaciente;
        this.cinturaPaciente = cinturaPaciente;
        this.duracion = duracion;
        this.comidas = comidas;
        this.colaciones = colaciones;
        this.bebidas = bebidas;
        this.objetivos = objetivos;
    }

    public generarEvaluacion = () : Calificacion => {
        let cantidadCompletada = 0;
        this.objetivos.forEach(objetivo => {
            if(objetivo.estaCompletado()) cantidadCompletada++
        });

        let porcentaje = (cantidadCompletada / this.objetivos.length) * 100;

        let evaluacion : Calificacion;
        if(porcentaje === 100) evaluacion = Calificacion.EXCELENTE
        else if(porcentaje >= 60) evaluacion = Calificacion.MUY_BUENA
        else if(porcentaje >= 50) evaluacion = Calificacion.BUENA
        else evaluacion = Calificacion.REGULAR

        return evaluacion
    }

    public obtenerCantidadDeComidas = () : number => {
        return this.duracion.getComidas();
    }
}