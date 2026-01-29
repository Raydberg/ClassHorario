const generateId = () => crypto.randomUUID();

export const data = [
    {
        "id": generateId(),
        "day": "Martes",
        "course": "Anl.Algoritmo Y Estrategias de Programacion",
        "hour": "19:30-21:00",
        "type": "Virtual",
        "salon": "Virtual",
        "lugar": "Virtual"
    },
    {
        "id": generateId(),
        "day": "Jueves",
        "course": "Anl.Algoritmo Y Estrategias de Programacion",
        "hour": "19:30-22:40",
        "type": "Virtual",
        "salon": "Virtual",
        "lugar": "Virtual"
    },
    {
        "id": generateId(),
        "day": "Sabado",
        "course": "Arquitectura del Computador",
        "hour": "17:50-19:20",
        "type": "Presencial",
        "salon": "B209",
        "lugar": "San Isidro Edificio B"
    },
    {
        "id": generateId(),
        "day": "Sabado",
        "course": "Arquitectura del Computador",
        "hour": "19:30-22:40",
        "type": "Presencial",
        "salon": "A407",
        "lugar": "San Isidro Edificio A"
    },
    {
        "id": generateId(),
        "day": "Domingo",
        "course": "Base de Datos",
        "hour": "7:30-9:00",
        "type": "Presencial",
        "salon": "B206",
        "lugar": "San Isidro Edificio B"
    },
    {
        "id": generateId(),
        "day": "Domingo",
        "course": "Base de Datos",
        "hour": "9:10-12:20",
        "type": "Presencial",
        "salon": "B303",
        "lugar": "San Isidro Edificio B"
    }
];
