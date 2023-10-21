import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';
import VisuallyHidden from '../VisuallyHidden';

function ToastShelf() {
  const { toastList, dismissToast } = React.useContext(ToastContext);



  return (
    <ol className={styles.wrapper}
      role="region" aria-live="polite" aria-atomic="true" aria-label="Notifications"
    >
      {toastList.map((toast, index) => {
        return (
          <li className={styles.toastWrapper} key={index}>
            <Toast dismiss={() => { dismissToast(index) }}
              variant={toast.variant}
            >
              <VisuallyHidden>{toast.variant}</VisuallyHidden>
              {toast.text}
            </Toast>
          </li>)
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
