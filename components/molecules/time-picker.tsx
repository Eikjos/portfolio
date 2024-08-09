import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

type TimePickerProps = {
  values: Date[];
  className?: string;
};

const TimePicker = ({ values, className }: TimePickerProps) => {
  if (values.length === 0) {
    return (
      <div className="mt-4">
        <p className="text-xs">
          Veuillez sélectionner une date sur le calendrier pour voir les
          horaires disponibles.
        </p>
      </div>
    );
  }
  return (
    <div
      className={twMerge(
        "grid grid-flow-rows grid-cols-3 mt-2 gap-2 max-h-20 overflow-y-auto",
        className
      )}
    >
      {values.map((value, index) => (
        <div
          key={index}
          className="text-center rounded-xl py-2 px-1 hover:cursor-pointer text-white"
        >
          {dayjs(value.toString()).format("HH:mm")}
        </div>
      ))}
    </div>
  );
};

export { TimePicker };
