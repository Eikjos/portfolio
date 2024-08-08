import * as React from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";

type TextareaProps<TFieldValues extends FieldValues> = {
  label?: string;
  control?: Control<TFieldValues, any>;
  name?: FieldPath<TFieldValues>;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "name">;

const Textarea = <T extends FieldValues>({
  className,
  label,
  control,
  name,
  ...props
}: TextareaProps<T>) => {
  return (
    <FormField
      control={control}
      name={name!}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className="text-white">{label}</FormLabel>
          <FormControl>
            <textarea
              className="text-secondary flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
Textarea.displayName = "Textarea";

export { Textarea };
