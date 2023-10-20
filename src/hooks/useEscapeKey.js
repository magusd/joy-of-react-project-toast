import React from 'react';

export default function useEscapeKey(callback) {
    React.useEffect(() => {
        const dismissAll = document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                callback();
            }
        });

        return () => {
            document.removeEventListener('keydown', dismissAll);
        };
    });
}