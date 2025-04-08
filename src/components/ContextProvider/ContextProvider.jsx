import React, { useState, useContext } from "react";
export const SearchContext = React.createContext();

export const useSearchHistory = () => {
  return useContext(SearchContext);
};
export default function ({ children }) {
  const [value, setValue] = useState("");

  return (
    <SearchContext.Provider value={{ value, setValue }}>
      {children}
    </SearchContext.Provider>
  );
}
