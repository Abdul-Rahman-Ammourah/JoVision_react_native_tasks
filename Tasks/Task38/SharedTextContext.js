import React, { createContext, useState } from 'react';

// Create a Context
const SharedTextContext = createContext();

// Create a Provider Component
export const SharedTextProvider = ({ children }) => {
    const [sharedText, setSharedText] = useState('');

    return (
        <SharedTextContext.Provider value={{ sharedText, setSharedText }}>
            {children}
        </SharedTextContext.Provider>
    );
};

export default SharedTextContext;
