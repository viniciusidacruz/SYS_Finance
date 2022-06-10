import { ReactNode } from "react";

interface ModalContextProps {
  modal: {
    edit: boolean;
    delete: boolean;
    data: any;
  };
  setModal: ({ edit: boolean, delete: boolean, data: object }) => void;
  handleOpenEdit: (value: any) => void;
  handleCloseEdit: () => void;
  handleOpenDelete: (value: any) => void;
  handleCloseDelete: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

export { ModalContextProps, ModalProviderProps };
