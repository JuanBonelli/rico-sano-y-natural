import { TipoComida } from "../enums/TipoComida";
import { Composicion } from "./Composicion";

export class Comida {
    private nombre: string;
    private tipo: TipoComida;
    private descripcion: string;
    private composicion: Composicion[] | null;

    constructor(
        nombre: string,
        tipo: TipoComida,
        descripcion: string,
        composicion: Composicion[] | null
    ) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.composicion = composicion;
    }

    public getTipo = () : TipoComida => {
        return this.tipo;
    }  

    public getComposicion = () : Composicion[] | null => {
        return this.composicion;
    }
}