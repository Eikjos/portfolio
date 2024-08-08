"use client";

import { AppointmentData } from "@/types/appointment";
import { zodResolver } from "@hookform/resolvers/zod";
import { fr } from "date-fns/locale";
import daysjs from "dayjs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { TimePicker } from "../molecules/time-picker";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Form } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const AppointmentSchema = z.object({
  subject: z.string().min(1, "Required"),
  message: z.string().min(1, "Required"),
  email: z.string().min(1, "Required"),
  date: z.date({ required_error: "Required" }),
}) satisfies z.ZodType<AppointmentData>;

const Appointment = () => {
  const [date, setDate] = useState<Date>();
  const form = useForm<AppointmentData>({
    resolver: zodResolver(AppointmentSchema),
    defaultValues: {
      subject: "",
      message: "",
      email: "",
      date: undefined,
    },
  });

  const onChangeDate = (value: Date | undefined) => setDate(value!);

  const onSubmit = (value: AppointmentData) => {
    console.log(value);
  };

  return (
    <div className="w-1/2 mx-auto p-10 flex flex-row gap-10 rounded-2xl shadow-xl shadow-gray-900 bg-secondary">
      <div>
        <Calendar
          mode="single"
          locale={fr}
          disabled={{
            before: daysjs().add(3, "day").toDate(),
            dayOfWeek: [6, 0],
          }}
          selected={date}
          onSelect={onChangeDate}
          className="text-white border-2 border-white p-4 rounded-lg"
        />
        <TimePicker
          className="mt-5"
          values={[
            new Date(),
            new Date(),
            new Date(),
            new Date(),
            new Date(),
            new Date(),
            new Date(),
            new Date(),
            new Date(),
            new Date(),
            new Date(),
            new Date(),
          ]}
        />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/2">
          <h3 className="text-2xl text-white font-semibold">Contactez-moi</h3>
          <Input
            name="subject"
            control={form.control}
            type="text"
            label="Sujet"
            className="mt-2"
            placeholder="Sujet"
          />
          <Textarea
            name="message"
            control={form.control}
            label="Message"
            placeholder="Message"
            className="mt-4"
          />
          <Input
            name="email"
            type="email"
            control={form.control}
            label="Adresse mail"
            placeholder="Adresse mail"
            className="mt-2"
          />
          <p className="text-white mt-4 text-xs">
            Je vous recontacterais le plutôt possible pour confirmer le
            rendez-vous.
          </p>
          <div className="mt-10">
            <Button className="w-full" type="submit">
              Confirmer
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export { Appointment };
