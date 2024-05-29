import { createContext, useContext, useMemo, useState } from "react";

const SearchContext = createContext();

export const PageProvider = ({ children }) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const searchActions = useMemo(
    () => ({
      open() {
        setIsOpenSearch(true);
      },
      close() {
        setIsOpenSearch(false);
      },
    }),
    [],
  );

  return (
    <SearchContext.Provider value={{ isOpenSearch, searchActions }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const value = useContext(SearchContext);

  if (value === undefined) {
    throw new Error("useSearchContext should be used within PageProvider");
  }
  return value;
};
