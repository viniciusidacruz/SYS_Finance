import { createContext, useState } from "react";

import { ModalContextProps, ModalProviderProps } from "./types";

export const ModalContext = createContext({} as ModalContextProps);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modal, setModal] = useState({
    edit: false,
    delete: false,
    data: {},
  });

  const handleOpenEdit = (data: {}) => {
    setModal({ ...modal, edit: true, data: { ...modal.data, data } });
  };
  const handleCloseEdit = () => setModal({ ...modal, edit: false });

  const handleOpenDelete = (data: {}) =>
    setModal({ ...modal, delete: true, data: { ...modal.data, data } });

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
