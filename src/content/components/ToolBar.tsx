import { useState } from 'react';
import styles from '../styles/ToolBar.module.css';

type ToolBarProps = {
  url: string;
  activated: boolean;
};

export default function ToolBar({ url, activated }: ToolBarProps) {
  const [isActivated, setActivated] = useState(activated);

  return isActivated ? (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>Url: {url}</div>
        <div>Activated: {isActivated ? 'yes' : 'no'}</div>
        <button onClick={() => setActivated(false)}>X</button>
      </div>
    </div>
  ) : null;
}
