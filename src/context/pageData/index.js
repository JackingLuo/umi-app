import React, { createContext, useContext, useReducer } from 'react';
import reducerInfo from './reducer';

const PageDataContext = createContext();

PageDataContext.displayName = 'PageDataContext';

/** 子组件中直接引用useStore,TODO: const { store, dispatch } = usePageData();*/
export const usePageData = () => useContext(PageDataContext);

const PageDataContextProvider = ({ children }) => {
    const { reducer, initStore } = reducerInfo;
    const [store, dispatch] = useReducer(reducer, initStore);
    
    return (
        <PageDataContext.Provider value={{ store, dispatch }}>
            {children}
        </PageDataContext.Provider>
        
    );
};

export default PageDataContextProvider;