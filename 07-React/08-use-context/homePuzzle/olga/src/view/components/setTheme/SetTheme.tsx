import { FC } from 'react';
import styles from './SetTheme.module.scss';

export const SetTheme: FC<{ theme: any; onClick: () => void }> = ({ theme, onClick }) => {
  const { color, backgroundColor } = theme;

  return (
    <button
      className={styles.themeButton}
      style={{ color, backgroundColor }}
      onClick={onClick}
    >
      Theme Button
    </button>
  );
};

export default SetTheme;
