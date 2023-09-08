import { Calificacion } from "../enums/Calificacion";
import { TipoComida } from "../enums/TipoComida";
import { TipoComposicion } from "../enums/TipoComposicion";
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
    private objetivos: Objetivo[];

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

    public generarEvaluacion(): Calificacion {
        let cantidadCompletada = this.objetivos.filter(objetivo => objetivo.estaCompletado()).length;

        let porcentaje = (cantidadCompletada / this.objetivos.length) * 100;

        let evaluacion: Calificacion;
        if (porcentaje === 100) evaluacion = Calificacion.EXCELENTE
        else if (porcentaje >= 60) evaluacion = Calificacion.MUY_BUENA
        else if (porcentaje >= 50) evaluacion = Calificacion.BUENA
        else evaluacion = Calificacion.REGULAR

        return evaluacion
    }

    public obtenerCantidadDeComidas(): number {
        return this.duracion.getComidas();
    }

    public obtenerCantidadDeComidasPorTipo(tipoComida: TipoComida): number {
        let comidasFiltradas: Comida[] = this.comidas.filter(comida => comida.getTipo() === tipoComida);

        return comidasFiltradas.length;
    }

    public esFuerteEnProteinas(tipoComposicion: TipoComposicion, porcentajeMinimo: number){
        return this.tipoComposicionTienePromedioDe(tipoComposicion, porcentajeMinimo);
    }

    public esBienVerde(tipoComposicion: TipoComposicion, porcentajeMinimo: number){
        return this.tipoComposicionTienePromedioDe(tipoComposicion, porcentajeMinimo);
    }

    private tipoComposicionTienePromedioDe(tipoComposicion: TipoComposicion, porcentajeMinimo: number) {
        let sumatoriaProteinas: number = 0;
        let cantidadProteinas: number = 0;

        let comidasAC = this.comidas.filter(comida => comida.getTipo() === TipoComida.ALMUERZO_CENA);
        comidasAC.forEach(comida => {
            comida.getComposicion()?.forEach(composicion => {
                if (composicion.getTipo() === tipoComposicion) {
                    sumatoriaProteinas += composicion.getPorcentaje();
                    cantidadProteinas++;
                }
            });
        })

        let promedioProteinas: number = sumatoriaProteinas / cantidadProteinas;

        return (promedioProteinas >= porcentajeMinimo);

    }

    public obtenerCantidadColaciones(): number {
        return this.colaciones.length;
    }

    public obtenerCantidadBebidas(): number {
        return this.bebidas.length;
    }

}