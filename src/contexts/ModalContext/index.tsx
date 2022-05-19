import { createContext, useState } from "react";

import { ModalContextProps, ModalProviderProps } from "./types";

export const ModalContext = createContext({} as ModalContextProps);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modal, setModal] = useState({
    edit: false,
    delete: false,
  });

  const handleOpenEdit = () => setModal({ ...modal, edit: true });
  const handleCloseEdit = () => setModal({ ...modal, edit: false });

  const handleOpenDelete = () => setModal({ ...modal, delete: true });
  const handleCloseDelete = () => setModal({ ...modal, delete: false });

  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
        handleOpenEdit,
        handleCloseEdit,
        handleOpenDelete,
        handleCloseDelete,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
