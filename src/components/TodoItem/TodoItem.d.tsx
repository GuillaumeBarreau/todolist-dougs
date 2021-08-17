import { TItemData } from "../../pages/App/App.d";

export interface TTodoItemProps {
  className?: string;
  handleClickItem: () => void;
  timeEvent: string;
  element: TItemData;
}
