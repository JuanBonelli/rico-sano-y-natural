

## Rico, Sano y Natural

**Objetivo**
Se desea desarrollar un sistema que asista a los atletas de alto rendimiento con su preparación nutricional.

**Profesionales y pacientes**
El sistema será utilizado por los Profesionales (Nombre*, Apellido*, Especialidad*, Matrícula), encargados de diseñar el Plan Alimenticio, y por los Pacientes (Nombre*, Apellido*, Edad*, Sexo*, Disciplina*), encargados de seguir el plan.

**Planes alimenticios**
Cada vez que un Atleta comienza un Plan Alimenticio, el profesional asignado al plan registra los datos básicos del paciente (Edad, Peso Actual y Medida de cintura), y establece la duración del mismo. El plan puede ser realizado de forma semanal, quincenal o mensual.

**Objetivos del plan alimenticio**
Establecida la duración del Plan, se establecen una serie de objetivos a lograr.
El profesional deberá poder ejecutar la funcionalidad de “generar evaluación”, que involucra revisar cada uno de los objetivos y generar una calificación. La calificación podrá ser:
 - • Excelente: en caso de que todos los objetivos hayan sido cumplidos.
   • Muy buena: en caso de que se hayan cumplido más del 60%.
   • Buena: en caso de que se hayan cumplido entre el 50% y 60% de los objetivos.
   • Regular: para el resto de los casos.

**Comidas del plan alimenticio**
Cada plan alimenticio consta de una N cantidad de comidas, distribuidas a razón de 4 comidas al día (Desayuno, Almuerzo, Merienda y Cena).
La cantidad total de comidas variará de acuerdo a la duración del plan:

 - Si el plan es semanal serán 28 comidas 
 - Si es quincenal serán 60 
 - Si es mensual 120

Las comidas se pueden clasificar en dos tipos: Desayunos y Meriendas (DM), y Almuerzos y Cenas (AC).
Para los DM, solo será necesario registrar una descripción de la comida (Ej: Tostadas con queso untable), sin embargo, para los AC será necesario además registrar la composición de las mismas. Un plato de AC está compuesto de la siguiente manera:

 - 1 Proteína: Pollo, Carnes Rojas o Pescado 
 - 1 Carbohidrato: Fideos, Arroz, Quinoa, etc. ... 
 - 1 Porción de Vegetales: Vegetales verdes, crudos o cocidos

Dependiendo de las necesidades del atleta, la relación entre estos componentes puede variar. Por ejemplo, para aquellos atletas que requieran reducir su porcentaje de grasa corporal, la composición de su AC será de la siguiente manera: 30% Proteínas, 0% Carbohidratos y 70% Vegetales. Mientras que para aquellos que tengan como objetivo el desarrollo de masa muscular, la composición será similar la siguiente: 30% Proteínas, 20% Carbohidratos, 50% Vegetales.

**Colaciones del plan alimenticio**

El plan contempla, además, la ingesta de Colaciones: Comidas ligeras que se ingieren entre comidas. Cada plan tendrá asociada una lista de colaciones permitidas, asignadas por el profesional al momento de confeccionar el plan.
Análogamente se realizará el mismo proceso para las bebidas.
Una vez al mes, el Administrador de la plataforma realizará la carga o actualización de las colaciones y bebidas, lo que significa que el profesional no puede dar de alta nuevas colaciones y/o bebidas, sino que las selecciona de un listado pre-cargado.

## Requerimientos

El Sistema debe:
1. Permitir obtener la calificación final de un plan alimenticio, en base al cumplimiento de sus objetivos.
2. Permitir saber la cantidad total de comidas de un plan alimenticio.
3. Permitir saber la cantidad de comidas de un tipo en particular (DM/AC) de un plan alimenticio.
4. Permitir saber si el plan alimenticio es “fuerte en proteínas”: un plan alimenticio es “fuerte en proteínas” cuando el promedio de porcentaje de proteínas en todas las comidas AC es igual o superior al 50%.
5. Permitir saber si el plan alimenticio es “bien verde”: un plan alimenticio es “bien verde” cuando el promedio de porcentaje de vegetales en todas las comidas AC es superior al 35%.
6. Permitir saber la cantidad total de colaciones permitidas en un plan alimenticio.
7. Permitir saber la cantidad total de bebidas permitidas en un plan alimenticio.Rico, Sano y Natural
