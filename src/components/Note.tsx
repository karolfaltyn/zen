import { useState } from "react";
import { Button } from "../components/ui/button";

interface NoteProps {
  note: string;
  index: number;
  onDelete: (index: number) => void;
  onEdit: (index: number, newNote: string) => void;
}

export const Note: React.FC<NoteProps> = ({
  note,
  index,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note);

  const handleEditStart = () => {
    setIsEditing(true);
  };

  const handleEditChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length <= 1500) {
      setEditedNote(event.target.value);
    }
  };

  const handleEditSave = () => {
    onEdit(index, editedNote);
    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setEditedNote(note);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col rounded border p-4 shadow-md">
      {isEditing ? (
        <div>
          <textarea
            value={editedNote}
            onChange={handleEditChange}
            className="w-full rounded border bg-gray-100 p-2 text-black dark:bg-[#444] dark:text-white"
          />
          <div className="mt-2 flex flex-col items-center justify-between sm:flex-row">
            <span className="mb-2 font-sarabun text-[#999]">
              {editedNote.length}/1500 characters
            </span>
            <div className="flex justify-center gap-2">
              <Button onClick={handleEditSave}>Save</Button>
              <Button variant="outline" onClick={handleEditCancel}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-between gap-4 ">
          <p className="whitespace-pre-wrap break-words">{note}</p>
          <div className="flex flex-row justify-center gap-2">
            <Button onClick={handleEditStart}>Edit</Button>
            <Button variant="secondary" onClick={() => onDelete(index)}>
              Delete
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
