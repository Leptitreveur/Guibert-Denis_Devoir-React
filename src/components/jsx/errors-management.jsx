export const validateId = (id) => {
    let isValid = true;
    let errors = [];

    if (!/^[a-z]*$/.test(id)) {
        errors.push("[ snakecase ] > norme de nommage non respectée");
        isValid = false;
    }
    if (/[!:;/*\-+]/.test(id)) {
        errors.push("[ caractères spéciaux ] > non autorisés");
        isValid = false;
    }
    if (/\s/.test(id)) {
        errors.push("[ espaces ] > non autorisés");
        isValid = false;
    }

    if (errors.length > 0) {
        console.warn("( Realisation card id is : ", id, " ) =\n\n Erreurs trouvées :\n" + errors.map(error => "\t" + error).join("\n"), "\n ______________________________________________________________________");
    }

    return isValid;
};
