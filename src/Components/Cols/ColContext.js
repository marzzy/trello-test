import React from 'react';

const ColContext = React.createContext({
    colsData: null,
    colDispatch: () => { }
});

export default ColContext;
