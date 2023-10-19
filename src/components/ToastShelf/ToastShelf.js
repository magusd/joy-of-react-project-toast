import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastList = [], setToastList }) {

  function removeToast(index) {
    setToastList(toastList.map((t, i) => i !== index ? t : null).filter(Boolean))
  }

  return (
    <ol className={styles.wrapper}>
      {toastList.map((toast, index) => {
        return (
          <li className={styles.toastWrapper}>
            <Toast dismiss={() => { removeToast(index) }} key={index} variant={toast.variant}>{toast.text}</Toast>
          </li>)
      })}
    </ol>
  );
}

export default ToastShelf;
