import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  const dismissToast = React.useCallback(function (index) {
    setToastList(toastList.map((t, i) => i !== index ? t : null).filter(Boolean))
  }, [toastList]);

  const createToast = React.useCallback(function (text, variant) {
    setToastList([...toastList, { text, variant }]);
  }, [toastList]);

  const dismissAllToast = React.useCallback(function () {
    setToastList([]);
  }, []);
  const value = React.useMemo(() => {
    return {
      toastList,
      createToast,
      dismissToast,
      dismissAllToast
    };
  }, [toastList, dismissToast, createToast, dismissAllToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
