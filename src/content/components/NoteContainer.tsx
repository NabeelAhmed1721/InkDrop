import styles from '../styles/NoteContainer.module.css';

export default function NoteContainer() {
  return (
    <div className={styles.container}>
      <Note />
    </div>
  );
}

function Note() {
  return <div>ok</div>;
}
