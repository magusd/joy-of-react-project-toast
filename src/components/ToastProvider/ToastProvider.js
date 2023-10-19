import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]); // [ { text: '...', variant: '...' }
  const value = React.useMemo(() => {
    return [
      toastList,
      setToastList,
    ];
  }, [toastList]);

  return (<ToastContext.Provider value={value}>
    {children}
  </ToastContext.Provider>);
}

export default ToastProvider;
