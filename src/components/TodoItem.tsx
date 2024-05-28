import React, { useState } from "react";
import { Button } from "../components/ui/button";

interface TodoProps {
  todo: string;
  index: number;
  onDelete: (index: number) => void;
  onEdit: (index: number, newTodo: string) => void;
}

export const TodoItem: React.FC<TodoProps> = ({
  todo,
  index,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);
  const [isDone, setIsDone] = useState(false);

  const handleEditStart = () => {
    setIsEditing(true);
  };

  const handleEditChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length <= 500) {
      setEditedTodo(event.target.value);
    }
  };

  const handleEditSave = () => {
    onEdit(index, editedTodo);
    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setEditedTodo(todo);
    setIsEditing(false);
  };

  const handleDoneToggle = () => {
    setIsDone(!isDone);
  };

  return (
    <div className="flex flex-col rounded border p-4 shadow-md">
      {isEditing ? (
        <div>
          <textarea
            value={editedTodo}
            onChange={handleEditChange}
            className="w-full rounded border bg-gray-100 p-2 text-black dark:bg-[#444] dark:text-white"
          />
          <div className="mt-2 flex flex-col items-center justify-between sm:flex-row">
            <span className="mb-2 font-sarabun text-[#999]">
              {editedTodo.length}/500 characters
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
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p
            className={`whitespace-pre-wrap break-words ${
              isDone ? "line-through" : ""
            }`}
          >
            {todo}
          </p>
          <div className="flex flex-row justify-center gap-2 sm:flex-col xl:flex-row">
            <Button onClick={handleEditStart}>Edit</Button>
            <Button variant="secondary" onClick={() => onDelete(index)}>
              Delete
            </Button>
            <Button
              variant="outline"
              onClick={handleDoneToggle}
              style={{ textDecoration: isDone ? "line-through" : "none" }}
              className="text-md font-extrabold text-[#7f0102]"
            >
              {isDone ? <>&#9744;</> : <>&#9744;</>}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
