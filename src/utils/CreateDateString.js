import { format } from "date-fns";

export const createDateString = () => {
  const currentDate = format(new Date(), "yyyy-MM-dd");
  return currentDate.toLocaleString();
};
