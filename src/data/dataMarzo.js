const generateId = () => crypto.randomUUID();

export const dataMarzo = [
    {
        "id": generateId(),
        "day": "Miercoles",
        "course": "POO",
        "hour": "19:30-21:00",
        "type": "Virtual",
        "salon": "Virtual",
        "lugar": "Virtual"
    },
    {
        "id": generateId(),
        "day": "Miercoles",
        "course": "POO",
        "hour": "21:00-22:40",
        "type": "Virtual",
        "salon": "Virtual",
        "lugar": "Virtual"
    },
    {
        "id": generateId(),
        "day": "Viernes",
        "course": "POO",
        "hour": "21:10-22:40",
        "type": "Presencial",
        "salon": "B209",
        "lugar": "San Isidro Edificio B"
    },
    {
        "id": generateId(),
        "day": "Domingo",
        "course": "Base de Datos",
        "hour": "7:30-12:20",
        "type": "Presencial",
        "salon": "B206",
        "lugar": "San Isidro Edificio B"
    }
];
