import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

function Calendar({ selected, setSelected }) {
  let footer = <p>Выбирете день.</p>;
  if (selected) {
    footer = <p>Срок исполнения до {format(selected, "dd.MM.yy")}.</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
}

export default Calendar;
