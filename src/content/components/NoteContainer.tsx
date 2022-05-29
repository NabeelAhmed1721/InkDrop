import styles from '../styles/NoteContainer.module.css';
import { Note } from '.';
import { useContext } from 'react';
import { InkDropContext } from '../lib/InkDropContext';

export default function NoteContainer() {
  const [context] = useContext(InkDropContext);

  return (
    <div className={styles.container}>
      {context.notes.map(({ id, text, x, y }) => (
        <Note key={id} id={id} text={text} x={x} y={y} />
      ))}
    </div>
  );
}
