export class Objetivo {
    private nombre: string;
    private descripcion: string;
    private completado: boolean;

    constructor(
        nombre: string,
        descripcion: string,
        completado: boolean
    ) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.completado = completado;
    }

    public estaCompletado = () : boolean => {
        return this.completado;
    }
}