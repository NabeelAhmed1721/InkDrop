/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import Draggable from 'react-draggable';
import styles from '../styles/ToolBar.module.css';
import { Menu, X, Edit2, Plus } from 'react-feather';

type ToolBarProps = {
  activated: boolean;
};

export default function ToolBar({ activated }: ToolBarProps) {
  const [isActivated, setActivated] = useState(activated);

  return isActivated ? (
    <div className={styles.wrapper}>
      <Draggable>
        <div className={styles.container}>
          <div className={styles.button}>
            <Menu size={24} strokeWidth={1} />
          </div>
          <div className={styles.toolContainer}>
            <button className={styles.tool} onClick={() => alert('ok')}>
              <Plus size={24} strokeWidth={1} />
              New Note
            </button>
            <button className={styles.tool}>
              <Edit2 size={24} strokeWidth={1} />
              Draw
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
