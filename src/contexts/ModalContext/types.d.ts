import { ReactNode } from "react";

interface ModalContextProps {
  modal: {
    edit: boolean;
    delete: boolean;
    editCategory: boolean;
    data: any;
  };
  setModal: ({
    edit: boolean,
    delete: boolean,
    data: object,
    editCategory: boolean,
  }) => void;
  handleOpenEdit: (value: object) => void;
  handleCloseEdit: () => void;
  handleOpenDelete: (value: {}) => void;
  handleCloseDelete: () => void;
  handleOpenEditCategory: (value: EditProps) => void;
  handleCloseEditCategory: () => void;
}

interface EditProps {
  id: string;
  option: string;
  value: string;
}

interface ModalProviderProps {
  children: ReactNode;
}

export { ModalContextProps, ModalProviderProps };
