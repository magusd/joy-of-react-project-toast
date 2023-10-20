import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import useEscapeKey from '../../hooks/useEscapeKey';

import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {

  const { toastList, dismissToast, dismissAllToast } = React.useContext(ToastContext);
  console.log(toastList);
  console.log(dismissAllToast);

  useEscapeKey(dismissAllToast);

  return (
    <ol className={styles.wrapper}>
      {toastList.map((toast, index) => {
        return (
          <li className={styles.toastWrapper} key={index}>
            <Toast dismiss={() => { dismissToast(index) }}
              variant={toast.variant}
            >
              {toast.text}
            </Toast>
          </li>)
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
