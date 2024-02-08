import React, { useState } from "react";
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isWritingNote, setIsWritingNote] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setIsWritingNote(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isWritingNote && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onClick={() => setIsWritingNote(true)}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isWritingNote ? 3 : 1}
        />
        <Zoom in={isWritingNote}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
