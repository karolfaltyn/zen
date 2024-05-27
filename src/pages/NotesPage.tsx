import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Note } from "../components/Note";
import { Button } from "../components/ui/button";

export const NotePage = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [newNote, setNewNote] = useState<string>("");
  const [charCount, setCharCount] = useState<number>(0);

  // Retrieve notes from local storage on initial load
  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes && storedNotes !== "[]") {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Save notes to local storage whenever notes state changes
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  const addNote = () => {
    if (newNote.trim() && newNote.length <= 500) {
      setNotes([...notes, newNote]);
      setNewNote("");
      setCharCount(0);
    }
  };

  const handleNewNoteChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    if (event.target.value.length <= 500) {
      setNewNote(event.target.value);
      setCharCount(event.target.value.length);
    }
  };

  const deleteNote = (index: number) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const editNote = (index: number, newNote: string) => {
    const updatedNotes = notes.map((note, i) => (i === index ? newNote : note));
    setNotes(updatedNotes);
  };

  return (
    <div className="container">
      <Navbar />
      <main className="flex justify-center">
        <div className="w-full sm:w-3/4 lg:w-1/2">
          <h1 className="mb-10 flex justify-center font-sarabun text-2xl font-medium text-[#444] dark:text-[#fafafa]">
            Notes
          </h1>
          <div>
            <textarea
              value={newNote}
              onChange={handleNewNoteChange}
              placeholder="Add new note"
              className="w-full rounded border bg-gray-100 p-2 text-black dark:bg-[#444] dark:text-white"
            />
            <div className="mb-8 mt-2 flex items-center justify-between">
              <span className="font-sarabun text-[#999]">
                {charCount}/500 characters
              </span>
              <Button onClick={addNote}>Add</Button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {notes.map((note, index) => (
              <Note
                key={index}
                note={note}
                index={index}
                onDelete={deleteNote}
                onEdit={editNote}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
