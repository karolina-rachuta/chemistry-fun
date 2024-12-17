export const getNotes = (notes) =>
    JSON.parse(localStorage.getItem(notes)) || [];

export const saveNotes = (notes, updatedNotes) =>
    localStorage.setItem(notes, JSON.stringify(updatedNotes));

export const deleteNotes = (notes) =>
    localStorage.removeItem(notes);