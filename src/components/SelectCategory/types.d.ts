export interface IContentProps {
  options: IOptionsProps[];
  handleChangeOptions: (category: string) => void;
}

interface IOptionsProps {
  title: string;
  value: string;
}
