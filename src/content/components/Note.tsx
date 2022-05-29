import { useContext, useEffect, useState } from 'react';
import { X } from 'react-feather';
import Draggable, { ControlPosition } from 'react-draggable';
import styles from '../styles/Note.module.css';
import { InkDropContext } from '../lib/InkDropContext';

export type NoteProps = {
  id: string;
  text: string;
  x?: number;
  y?: number;
};

export default function Note({ id, text, x = 0, y = 0 }: NoteProps) {
  const [context, setContext] = useContext(InkDropContext);
  const [noteText, setNoteText] = useState(text);
  const [position, setPosition] = useState<ControlPosition>({ x, y });

  useEffect(() => {
    const currentData = context.notes.find((note) => note.id === id);

    if (currentData) {
      setContext({
        ...context,
        notes: [
          ...context.notes.filter((note) => note.id !== id),
          { ...currentData, x: position.x, y: position.y },
        ],
      });
    }
  }, [position]);

  useEffect(() => {
    const currentData = context.notes.find((note) => note.id === id);

    if (currentData) {
      setContext({
        ...context,
        notes: [
          ...context.notes.filter((note) => note.id !== id),
          { ...currentData, text: noteText },
        ],
      });
    }
  }, [noteText]);

  function handleDeleteNote() {
    setContext({
      ...context,
      notes: [...context.notes.filter((note) => note.id !== id)],
    });
  }

  return (
    <Draggable
      handle=".noteHandle"
      position={position}
      onDrag={(_, { x, y }) => setPosition({ x, y })}
    >
      <div key={id} className={styles.container}>
        <div className={`${styles.header} noteHandle`}>
          <button className={styles.deleteButton} onClick={handleDeleteNote}>
            <X size={24} strokeWidth={1} />
          </button>
        </div>
        <textarea
          className={styles.content}
          value={noteText}
          onChange={(event) => setNoteText(event.target.value)}
        />
      </div>
    </Draggable>
  );
}
