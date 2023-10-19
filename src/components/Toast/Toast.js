import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ dismiss, variant = 'notice', children, ...delegated }) {
  if (!ICONS_BY_VARIANT[variant]) {
    throw new Error(`Invalid variant: ${variant}`);
  }
  const Icon = ICONS_BY_VARIANT[variant];
  return (
    <div className={`${styles.toast} ${styles[variant]}`} {...delegated}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {children}
      </p>
      <button className={styles.closeButton}>
        <X size={24} onClick={dismiss} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
