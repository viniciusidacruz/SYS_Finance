import { ReactNode } from "react";

interface ModalContextProps {
  modal: {
    edit: boolean;
    delete: boolean;
    editCategory: boolean;
    count: boolean;
    data: any;
  };
  setModal: ({
    edit: boolean,
    delete: boolean,
    data: object,
    editCategory: boolean,
    count: boolean,
  }) => void;
  handleOpenCount: () => void;
  handleCloseCount: () => void;
  handleOpenEdit: (value: any) => void;
  handleCloseEdit: () => void;
  handleOpenDelete: (value: Record<string, object>) => void;
  handleCloseDelete: () => void;
  handleOpenEditCategory: (value: Record<string, object>) => void;
  handleCloseEditCategory: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

export { ModalContextProps, ModalProviderProps };
