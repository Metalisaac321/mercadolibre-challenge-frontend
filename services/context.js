import React, { useContext, createContext } from 'react';
export const AppContext = createContext(null);
import PropTypes from 'prop-types';

export const AppContextProvider = ({ children, initialData }) => {
  const [store, setStore] = React.useState(initialData);

  const values = React.useMemo(
    () => ({
      store,
      setStore,
    }),
    [store],
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.node,
  initialData: PropTypes.object,
};

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error('Error deploying App Context');
  }

  return context;
}

export default useAppContext;
