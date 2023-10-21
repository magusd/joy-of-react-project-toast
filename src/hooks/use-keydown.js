import React from 'react';

export default function useKeyDown(key, callback) {
    React.useEffect(() => {
        const dismissAll = document.addEventListener('keydown', function (event) {
            if (event.key === key) {
                callback(event);
            }
        });

        return () => {
            document.removeEventListener('keydown', dismissAll);
        };
    }, [key, callback]);
}