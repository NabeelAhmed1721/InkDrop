import { useState } from 'react';
import Draggable from 'react-draggable';
import styles from '../styles/ToolBar.module.css';
import { X } from 'react-feather';

type ToolBarProps = {
  url: string;
  activated: boolean;
};

export default function ToolBar({ url, activated }: ToolBarProps) {
  const [isActivated, setActivated] = useState(activated);

  return isActivated ? (
    <div className={styles.wrapper}>
      <Draggable>
        <div className={styles.container}>
          {/* <div>Url: {url}</div> */}
          {/* <div>Activated: {isActivated ? 'yes' : 'no'}</div> */}
          <div />
          <div className={styles.closeButtonContainer}>
            <X size={24} strokeWidth={1} onClick={() => setActivated(false)} />
          </div>
        </div>
      </Draggable>
    </div>
  ) : null;
}
