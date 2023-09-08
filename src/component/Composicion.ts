import { TipoComposicion } from "../enums/TipoComposicion";

export class Composicion {
    private nombre: string;
    private porcentaje: number;
    private tipo: TipoComposicion;

    constructor(
        nombre: string,
        porcentaje: number,
        tipo: TipoComposicion
    ) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.tipo = tipo;
    }

    public getPorcentaje = () : number => {
        return this.porcentaje;
    }

    public getTipo = () : TipoComposicion => {
        return this.tipo;
    }
}