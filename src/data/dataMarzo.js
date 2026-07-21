const generateId = () => crypto.randomUUID();

export const dataMarzo = [
    {
        "id": generateId(),
        "day": "Martes",
        "course": "Analisis De Software",
        "hour": "19:30-22:40",
        "type": "Virtual",
        "salon": "Virtual",
        "lugar": "Virtual"
    },
    {
        "id": generateId(),
        "day": "Miercoles",
        "course": "Computacion Grafica",
        "hour": "19:30-22:40",
        "type": "Virtual",
        "salon": "Virtual",
        "lugar": "Virtual"
    },
    {
        "id": generateId(),
        "day": "Jueves",
        "course": "Analisis De Software",
        "hour": "19:30-21:00",
        "type": "Virtual",
        "salon": "Virtual",
        "lugar": "Virtual"
    },
    {
        "id": generateId(),
        "day": "Viernes",
        "course": "Computacion Grafica",
        "hour": "21:10-22:40",
        "type": "Virtual",
        "salon": "Virtual",
        "lugar": "Virtual"
    },
    // {
    //     "id": generateId(),
    //     "day": "Domingo",
    //     "course": "BD II y Big Data",
    //     "hour": "9:10-14:00",
    //     "type": "Virtual",
    //     "salon": "Virtual",
    //     "lugar": "Virtual"
    // },
];
