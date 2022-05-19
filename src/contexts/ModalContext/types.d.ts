import { ReactNode } from "react";

interface ModalContextProps {
  modal: {
    edit: boolean;
    delete: boolean;
  };
  setModal: ({ edit: boolean, delete: boolean }) => void;
  handleOpenEdit: () => void;
  handleCloseEdit: () => void;
  handleOpenDelete: () => void;
  handleCloseDelete: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

export { ModalContextProps, ModalProviderProps };
