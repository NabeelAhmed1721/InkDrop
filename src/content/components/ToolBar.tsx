/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useContext } from 'react';
import Draggable from 'react-draggable';
import styles from '../styles/ToolBar.module.css';
import { Menu, X, Edit2, Plus } from 'react-feather';
import { v4 as uuidv4 } from 'uuid';
import { InkDropContext } from '../lib/InkDropContext';

type ToolBarProps = {
  activated: boolean;
};

export default function ToolBar({ activated }: ToolBarProps) {
  const [context, setContext] = useContext(InkDropContext);
  const [isActivated, setActivated] = useState(activated);

  function handleNewNote() {
    setContext({
      ...context,
      notes: [
        ...context.notes,
        {
          id: uuidv4(),
          text: 'something',
          x: 100,
          y: 100 + window.scrollY,
        },
      ],
    });
  }

  function handleDraw() {
    setContext({
      ...context,
      enableDraw: !context.enableDraw,
    });
  }

  return isActivated ? (
    <div className={styles.wrapper}>
      <Draggable>
        <div className={styles.container}>
          <div className={styles.button}>
            <Menu size={24} strokeWidth={1} />
          </div>
          <div className={styles.toolContainer}>
            <button className={styles.tool} onClick={handleNewNote}>
              <Plus size={24} strokeWidth={1} />
              New Note
            </button>
            <button className={styles.tool} onClick={handleDraw}>
              <Edit2 size={24} strokeWidth={1} />
              {context.enableDraw ? 'Finish Drawing' : 'Draw'}
            </button>
          </div>
          <div className={styles.button}>
            <X size={24} strokeWidth={1} onClick={() => setActivated(false)} />
          </div>
        </div>
      </Draggable>
    </div>
  ) : null;
}
