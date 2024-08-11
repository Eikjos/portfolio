import dayjs from "dayjs";
import { useState } from "react";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { twMerge } from "tailwind-merge";

type TimePickerProps<TFieldValues extends FieldValues> = {
  values: Date[];
  value?: Date;
  className?: string;
  name: Path<TFieldValues>;
  options?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
  register: UseFormRegister<TFieldValues>;
  errorMessage?: string;
};

const TimePicker = <T extends FieldValues>({
  values,
  className,
  register,
  name,
  options,
  errorMessage,
}: TimePickerProps<T>) => {
  const [currentValue, setCurrentValue] = useState<Date>();
  const { onChange } = register(name, options);
  const onChangeValue = (value: Date) => {
    onChange({ target: { name, value } });
    setCurrentValue(value);
    console.log(value);
  };

  return (
    <>
      {values.length == 0 ? (
        <div className="mt-4">
          <p className="text-xs">
            Veuillez sélectionner une date sur le calendrier pour voir les
            horaires disponibles.
          </p>
        </div>
      ) : (
        <div
          className={twMerge(
            "grid grid-flow-rows grid-cols-3 mt-2 gap-2 max-h-20 overflow-y-auto",
            className
          )}
        >
          {values.map((value, index) => (
            <div
              key={index}
              onClick={() => onChangeValue(value)}
              className={`text-center rounded-xl py-2 px-1 hover:cursor-pointer text-white ${
                currentValue === value ? "bg-blue-950" : ""
              }`}
            >
              {dayjs(value.toString()).format("HH:mm")}
            </div>
          ))}
        </div>
      )}
      {errorMessage ? (
        <span className="text-red-600 text-xs">{errorMessage}</span>
      ) : null}
    </>
  );
};

export { TimePicker };
