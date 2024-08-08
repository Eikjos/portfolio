import * as React from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";

type InputProps<TFieldValues extends FieldValues> = {
  control?: Control<TFieldValues, any>;
  name?: FieldPath<TFieldValues>;
  label?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "name">;

const Input = <T extends FieldValues>({
  className,
  type,
  label,
  control,
  name,
  ...props
}: InputProps<T>) => {
  return (
    <FormField
      control={control}
      name={name!}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className="text-white">{label}</FormLabel>
          <FormControl>
            <input
              type={type}
              className="text-secondary flex h-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              {...props}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

Input.displayName = "Input";

export { Input };
