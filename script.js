// Define the elements
const noteTitleInput = document.getElementById('title');
const noteTextInput = document.getElementById('note');
const addNoteButton = document.querySelector('.addNote');
const notesContainer = document.querySelector('.notes-container');

// Define the notes array
let notes = [];

// Add event listener to the add note button
addNoteButton.addEventListener('click', () => {
  // Get the title and note values
  const title = noteTitleInput.value.trim();
  const note = noteTextInput.value.trim();

  // Check if the title and note are not empty
  if (title && note) {
    // Create a new note object
    const newNote = {
      title,
      note
    };

    // Add the new note to the notes array
    notes.push(newNote);

    // Clear the input fields
    noteTitleInput.value = '';
    noteTextInput.value = '';

    // Render the new note
    renderNotes();
  }
});

// Render the notes
function renderNotes() {
  // Clear the notes container
  notesContainer.innerHTML = '';

  // Loop through the notes array and create a new note element for each note
  notes.forEach((note, index) => {
    const noteElement = document.createElement('div');
    noteElement.className = 'note';

    const titleElement = document.createElement('h2');
    titleElement.textContent = note.title;

    const noteTextElement = document.createElement('p');
    noteTextElement.textContent = note.note;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerHTML = '&times;';
    deleteButton.addEventListener('click', () => {

      notes.splice(index, 1);

      // Render the notes again
      renderNotes();
    });

    noteElement.appendChild(titleElement);
    noteElement.appendChild(noteTextElement);
    noteElement.appendChild(deleteButton);

    notesContainer.appendChild(noteElement);
  });
}

// Render the notes initially
renderNotes(); 