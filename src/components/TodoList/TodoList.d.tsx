import { TItemData } from "../../pages/App/App.d";

export interface TTodoListProps {
  className?: string;
  todoData: TItemData[];
  handleClickItem: (itemID: number) => void;
}
