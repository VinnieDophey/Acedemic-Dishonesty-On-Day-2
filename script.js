// Define the elements
const noteTitleInput = document.getElementById("title");
const noteTextInput = document.getElementById("note");
const addNoteButton = document.querySelector(".addNote");
const notesContainer = document.querySelector(".notes-container");

// Define the notes array
let notes = [];

// Add event listener to the add note button
addNoteButton.addEventListener("click", () => {
  // Get the title and note values
  const title = noteTitleInput.value.trim();
  const note = noteTextInput.value.trim();

  // Check if the title and note are not empty
  if (title && note) {
    // Create a new note object
    const newNote = {
      title,
      note,
    };

    // Add the new note to the notes array
    notes.push(newNote);

    // Clear the input fields
    noteTitleInput.value = "";
    noteTextInput.value = "";

    // Render the new note
    renderNotes();
  }
});

// Render the notes
function renderNotes() {
  // Clear the notes container
  notesContainer.innerHTML = "";

  // Loop through the notes array and create a new note element for each note
  notes.forEach((note, index) => {
    const noteElement = document.createElement("div");
    noteElement.className = "note";
    noteElement.id = index;
    const titleElement = document.createElement("h2");
    titleElement.textContent = note.title;
    // console.log(notes)
    const noteTextElement = document.createElement("p");
    noteTextElement.textContent = note.note;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.innerHTML = "&times;";
    deleteButton.addEventListener("click", () => {
      let input = prompt(
        "Are your really sure you want to delete this note? This action is irreversable (Y)"
      );
      if (input == "Y") {
        notes.splice(index, 1);
      } else {
        return;
      }

      // Render the notes again
      renderNotes();
    });

    noteElement.appendChild(titleElement);
    noteElement.appendChild(noteTextElement);
    noteElement.appendChild(deleteButton);

    notesContainer.appendChild(noteElement);
  });
}
var button = document.getElementById("my-button");
button.addEventListener("click", search);
function search() {
  // console.log(searched)

  const filrterd = notes.filter(filtering);

  const items = document.querySelectorAll(".note h2");

  items.forEach((item) => {
    item.style.backgroundColor = "";
  });
  items.forEach((item) => {
    filrterd.forEach((f) => {
      if (f.title === item.textContent) {
        item.style.backgroundColor = "yellow";
      } else if (f.title !== item.textContent) {
        item.style.backgroundColor = "white";
      } else {
        item.style.backgroundColor = "";
      }
    });
  });

  console.log(filrterd);
}

function filtering(items) {
  let searched = document.getElementById("textbox").value;

  return items.title === searched;
}
// Render the notes initially
renderNotes();
