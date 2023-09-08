import { Disciplina } from "../enums/Disciplina"
import { Especialidad } from "../component/Especialidad"
import { Paciente } from "../component/Paciente"
import { Plan } from "../component/Plan"
import { Profesional } from "../component/Profesional"
import { Sexo } from "../enums/Sexo"
import { Duracion } from "../component/Duracion"
import { Comida } from "../component/Comida"
import { TipoComida } from "../enums/TipoComida"
import { Composicion } from "../component/Composicion"
import { TipoComposicion } from "../enums/TipoComposicion"
import { Colacion } from "../component/Colacion"
import { Bebida } from "../component/Bebida"
import { Objetivo } from "../component/Objetivo"
import { Calificacion } from "../enums/Calificacion"

var profesional = new Profesional(
    "Juan",
    "Bonelli",
    new Especialidad("Deportivo"),
    "23-45235143-9",
)

let paciente = new Paciente(
    "Julian",
    "Garcia",
    new Date("2023-05-24"),
    Sexo.MASCULINO,
    Disciplina.NATACION
)

profesional.asignarPaciente(paciente);

let plan = new Plan(
    profesional,
    paciente.getEdad(),
    90,
    82,
    new Duracion(
        "Quincenal",
        15,
        60
    ),
    [
        new Comida(
            "Tostada",
            TipoComida.DESAYUNO_MERIENDA,
            "2 Tostada con queso crema",
            null
        ),
        new Comida(
            "Fideos y Milanesa",
            TipoComida.ALMUERZO_CENA,
            "1 Porcion de Fideos y 1 Milanesa y 1 Vegetal",
            [
                new Composicion(
                    "Fideos",
                    10,
                    TipoComposicion.CARBOHIDRATO
                ),
                new Composicion(
                    "Milanesa",
                    60,
                    TipoComposicion.PROTEINA
                ),
                new Composicion(
                    "Brocoli",
                    30,
                    TipoComposicion.VERDURA
                )
            ]
        ),
        new Comida(
            "Tostada",
            TipoComida.DESAYUNO_MERIENDA,
            "2 Tostada con queso crema",
            null
        ),
        new Comida(
            "Tostada",
            TipoComida.ALMUERZO_CENA,
            "2 Tostada con queso crema",
            [
                new Composicion(
                    "Arroz",
                    10,
                    TipoComposicion.CARBOHIDRATO
                ),
                new Composicion(
                    "Pollo",
                    50,
                    TipoComposicion.PROTEINA
                ),
                new Composicion(
                    "Brocoli",
                    40,
                    TipoComposicion.VERDURA
                )
            ]
        )
    ],
    [
        Colacion.FRUTA,
        Colacion.HUEVO_DURO,
        Colacion.JAMON
    ],
    [
        Bebida.AGUA,
        Bebida.MATECOCIDO
    ],
    [
        new Objetivo(
            "Regular",
            "Regular la cantidad de comidas por dia",
            true
        ),

        new Objetivo(
            "Bajar",
            "Bajar 5 kilos la primer semana",
            true
        ),

        new Objetivo(
            "Bajar",
            "Bajar 20 kilos para la tercer semana",
            false
        ),

        new Objetivo(
            "Regular",
            "Regular la cantidad de porciones por comida",
            false
        )
    ]

)

paciente.asignarPlan(plan);

test("Req 1. La calificacion del plan es Buena", () => {
    expect(plan.generarEvaluacion()).toBe(Calificacion.BUENA);
})

test("Req 2. La cantidad de comidas del plan alimenticio esd de 60", () => {
    expect(plan.obtenerCantidadDeComidas()).toBe(60);
})

test("Req 3. El plan tiene un total de 2 comidas DM", () => {
    expect(plan.obtenerCantidadDeComidasPorTipo(TipoComida.DESAYUNO_MERIENDA)).toBe(2);
});

test("Req 4. El plan es fuerte en proteinas", () => {
    expect(plan.tienePromedioDe(TipoComposicion.PROTEINA, 50)).toBe(true);
});

test("Req 5. El plan alimenticio es bien verde", () => {
    expect(plan.tienePromedioDe(TipoComposicion.VERDURA, 35)).toBe(true);
})

test("Req 6. El plan tiene 3 colaciones.", () => {
    expect(plan.obtenerCantidadColaciones()).toBe(3);
})

test("Req 6. El plan tiene 2 bebidas.", () => {
    expect(plan.obtenerCantidadBebidas()).toBe(2);
})