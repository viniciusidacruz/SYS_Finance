interface ContentProps {
  data: {
    id: string;
    value: string;
    option: string;
  };
  onEdit: () => void;
  onDelete: () => void;
}

export default ContentProps;
