const generateId = () => crypto.randomUUID();

export const dataMayo = [
    {
        "id": generateId(),
        "day": "Lunes",
        "course": "Analisis de algoritmos",
        "hour": "19:30-22:40",
        "type": "Virtual",
        "salon": "Virtual",
        "lugar": "Virtual"
    },
    {
        "id": generateId(),
        "day": "Viernes",
        "course": "Analisis de algoritmos",
        "hour": "19:30-21:00",
        "type": "Virtual",
        "salon": "Virtual",
        "lugar": "Virtual"
    }
];
