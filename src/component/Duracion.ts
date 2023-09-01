export class Duracion {
    private nombre: string;
    private dias: number;
    private comidas: number;

    constructor(
        nombre: string,
        dias: number,
        comidas: number
    ) {
        this.nombre = nombre;
        this.dias = dias;
        this.comidas = comidas;
    }

    public getComidas = () => {
        return this.comidas;
    }
}