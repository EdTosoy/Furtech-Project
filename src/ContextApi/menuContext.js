import React, { useState, createContext } from "react";
export const MenuContext = createContext();
export const MenuProvider = (props) => {
  const [dropMenu, setDropMenu] = useState(false);
  return (
    <MenuContext.Provider value={[dropMenu, setDropMenu]}>
      {props.children}
    </MenuContext.Provider>
  );
};
