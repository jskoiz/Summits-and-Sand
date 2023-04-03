// PageTitleContext.js
import { createContext, useContext, useState } from "react";

const PageTitleContext = createContext();

export const usePageTitle = () => {
  return useContext(PageTitleContext);
};

export const PageTitleProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("Home");

  return (
    <PageTitleContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
};
