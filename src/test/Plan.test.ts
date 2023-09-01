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
            TipoComida.DESAYUNO,
            "2 Tostada con queso crema",
            null
        ),
        new Comida(
            "Fideos y Milanesa",
            TipoComida.ALMUERZO,
            "1 Porcion de Fideos y 1 Milanesa y 1 Vegetal",
            [
                new Composicion(
                    "Fideos",
                    30,
                    TipoComposicion.CARBOHIDRATO
                ),
                new Composicion(
                    "Milanesa",
                    60,
                    TipoComposicion.PROTEINA
                ),
                new Composicion(
                    "Brocoli",
                    10,
                    TipoComposicion.VERDURA
                )
            ]
        ),
        new Comida(
            "Tostada",
            TipoComida.MERIENDA,
            "2 Tostada con queso crema",
            null
        ),
        new Comida(
            "Tostada",
            TipoComida.CENA,
            "2 Tostada con queso crema",
            [
                new Composicion(
                    "Arroz",
                    30,
                    TipoComposicion.CARBOHIDRATO
                ),
                new Composicion(
                    "Pollo",
                    60,
                    TipoComposicion.PROTEINA
                ),
                new Composicion(
                    "Brocoli",
                    10,
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

test("La calificacion del plan es Buena", () => {
    expect(plan.generarEvaluacion()).toBe(Calificacion.BUENA);


})

test("La cantidad de comidas del plan alimenticio esd de 60", () => {
    expect(plan.obtenerCantidadDeComidas()).toBe(60);
})