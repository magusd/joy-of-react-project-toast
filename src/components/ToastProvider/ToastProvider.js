import React from 'react';
import useKeyDown from '../../hooks/use-keydown';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);


  const dismissToast = React.useCallback(function (index) {
    setToastList(toastList.map((t, i) => i !== index ? t : null).filter(Boolean))
  }, [toastList]);

  const createToast = React.useCallback(function (text, variant) {
    setToastList([...toastList, { text, variant }]);
  }, [toastList]);

  const value = React.useMemo(() => {
    return {
      toastList,
      createToast,
      dismissToast,

    };
  }, [toastList, dismissToast, createToast]);

  useKeyDown('Escape', () => {
    setToastList([]);
  });

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
