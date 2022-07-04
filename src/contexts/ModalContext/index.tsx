import { createContext, useState } from "react";

import { ModalContextProps, ModalProviderProps } from "./types";

export const ModalContext = createContext({} as ModalContextProps);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modal, setModal] = useState({
    edit: false,
    delete: false,
    editCategory: false,
    count: false,
    data: {},
  });

  const handleOpenEdit = (data: {}) => {
    setModal({ ...modal, edit: true, data: { ...modal.data, data } });
  };

  const handleCloseEdit = () => setModal({ ...modal, edit: false });

  const handleOpenCount = () => {
    setModal({ ...modal, count: true });
  };

  const handleCloseCount = () => setModal({ ...modal, count: false });

  const handleOpenDelete = (data: {}) =>
    setModal({ ...modal, delete: true, data: { ...modal.data, data } });

  const handleCloseDelete = () => setModal({ ...modal, delete: false });

  const handleOpenEditCategory = (data: {}) => {
    setModal({ ...modal, editCategory: true, data: { ...modal.data, data } });
  };

  const handleCloseEditCategory = () =>
    setModal({ ...modal, editCategory: false });

  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
        handleOpenEdit,
        handleOpenCount,
        handleCloseEdit,
        handleCloseCount,
        handleOpenDelete,
        handleCloseDelete,
        handleOpenEditCategory,
        handleCloseEditCategory,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
