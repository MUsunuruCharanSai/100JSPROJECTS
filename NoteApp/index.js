
const app = document.getElementById("app");
const btn = document.getElementById("btn");

// Get saved notes
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Display saved notes
notes.forEach((content) => createNote(content));

function createNote(content = "") {
    const note = document.createElement("textarea");

    note.className = "note";
    note.placeholder = "Write your note...";
    note.value = content;

    // Save notes when typing
    note.addEventListener("input", saveNotes);

    // Delete note on double-click
    note.addEventListener("dblclick", () => {
        if (confirm("Delete this note?")) {
            note.remove();
            saveNotes();
        }
    });

    app.insertBefore(note, btn);
}

// Save all notes to localStorage
function saveNotes() {
    notes = Array.from(document.querySelectorAll(".note"))
        .map((note) => note.value);

    localStorage.setItem("notes", JSON.stringify(notes));
}

// Add a new note
btn.addEventListener("click", () => {
    createNote();
    saveNotes();
});
