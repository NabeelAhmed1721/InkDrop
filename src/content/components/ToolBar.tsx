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
          {/* <div>Url: {url}</div> */}
          {/* <div>Activated: {isActivated ? 'yes' : 'no'}</div> */}
          <div className={styles.button}>
            <Menu size={24} strokeWidth={1} />
          </div>
          <div className={styles.toolContainer}>
            <div className={styles.tool}>
              <Plus size={24} strokeWidth={1} />
              New Note
            </div>
            <div className={styles.tool}>
              <Edit2 size={24} strokeWidth={1} />
              Draw
            </div>
          </div>
          <div className={styles.button}>
            <X size={24} strokeWidth={1} onClick={() => setActivated(false)} />
          </div>
        </div>
      </Draggable>
    </div>
  ) : null;
}
