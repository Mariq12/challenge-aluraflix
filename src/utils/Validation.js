// validateForm.js
export const validateForm = (formData) => {
    const errors = {};

    // Validaciones para el campo título
    if (!formData.title) {
        errors.title = 'El título es obligatorio.';
    } else if (formData.title.length < 5) {
        errors.title = 'El título debe tener al menos 5 caracteres.';
    }

    // Validaciones para el campo categoría
    if (!formData.team) {
        errors.team = 'La categoría es obligatoria.';
    } else if (formData.team.length < 3) {
        errors.team = 'La categoría debe tener al menos 3 caracteres.';
    }

    // Validaciones para el campo imagen
    if (!formData.photo) {
        errors.photo = 'La imagen es obligatoria.';
    } else if (formData.photo.length < 5) {
        errors.photo = 'La imagen debe tener al menos 5 caracteres.';
    }

    // Validaciones para el campo video
    if (!formData.link) {
        errors.link = 'El enlace del video es obligatorio.';
    } else if (formData.link.length < 5) {
        errors.link = 'El enlace del video debe tener al menos 5 caracteres.';
    }

    // Validaciones para el campo descripción
    if (!formData.description) {
        errors.description = 'La descripción es obligatoria.';
    } else if (formData.description.length < 10) {
        errors.description = 'La descripción debe tener al menos 10 caracteres.';
    }

    return errors;
};
