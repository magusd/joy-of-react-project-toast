import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from '../Toast/Toast';
import ToastShelf from '../ToastShelf/ToastShelf';
import { ToastContext } from '../ToastProvider/ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [toastText, setToastText] = React.useState('');
  const [toastVariant, setToastVariant] = React.useState('notice');
  const { createToast } = React.useContext(ToastContext);

  function handleSubmit(event) {
    event.preventDefault();
    createToast(toastText, toastVariant);
  }

  const showToast = toastText.length > 0 && toastVariant.length > 0;

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {showToast && (
        <Toast variant={toastVariant} >
          {toastText}
        </Toast>
      )}

      <ToastShelf />

      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea required id="message" value={toastText} onChange={(e) => setToastText(e.target.value)} className={styles.messageInput} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {
                VARIANT_OPTIONS.map((variant) => {
                  return <label htmlFor={`variant-${variant}`} key={`variant-${variant}`}>
                    <input
                      required
                      id={`variant-${variant}`}
                      type="radio"
                      name="variant"
                      value={variant}
                      onChange={(event) => setToastVariant(event.target.value)}
                      checked={toastVariant === variant}
                    />
                    {variant}
                  </label>
                })
              }

            </div>
          </div>


          <div className={styles.row}>
            <div className={styles.label} />

            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>

    </div>
  );
}

export default ToastPlayground;
