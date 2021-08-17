export interface TModalProps {
  className?: string;
  handleClickAddItem: ({
    description,
    startDatetime,
    endDatetime,
  }: {
    description: string;
    startDatetime: string;
    endDatetime: string;
  }) => void;
}
