export const getNotes = (note: string): string[] => {
    let stored = localStorage.getItem(note);
    return stored ? (JSON.parse(stored) as string[]) : [];
};

export const saveNotes = (notes: string, updatedNotes: string[]): void =>
    localStorage.setItem(notes, JSON.stringify(updatedNotes));

export const deleteNotes = (notes: string): void =>
    localStorage.removeItem(notes);
