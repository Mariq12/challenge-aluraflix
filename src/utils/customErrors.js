export const errortypes = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
];

export const messages = {
    title: {
        valueMissing: "El campo título no puede estar vacío.",
        tooShort: "El título debe tener al menos 3 caracteres.",
    },
    category: {
        valueMissing: "Por favor, seleccione un equipo.",
    },
    photo: {
        valueMissing: "El campo foto no puede estar vacío.",
        typeMismatch: "Por favor, ingrese una URL válida de una imagen.",
        tooShort: "La URL de la foto debe tener al menos 3 caracteres.",
    },
    link: {
        valueMissing: "El campo video no puede estar vacío.",
        typeMismatch: "Por favor, ingrese una URL válida.",
        tooShort: "La URL del video debe tener al menos 3 caracteres.",
    },
    description: {
        valueMissing: "El campo descripción no puede estar vacío.",
        tooShort: "La descripción debe tener al menos 10 caracteres.",
    },
};
