"use client";

import { useToast } from "@/components/ui/use-toast";
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
  email: z.string().email("Adresse mail est incorrecte").min(1, "Required"),
  date: z.date({ required_error: "Required" }),
}) satisfies z.ZodType<AppointmentData>;

// const getAppointmentsByDate = async (
//   date: Date
// ): Promise<AppointmentEntity[]> => {
//   const response = await fetch(`/api/appointments?date=${date.toISOString()}`);
//   const appointments = (await response.json()) as AppointmentEntity[];
//   return appointments;
// };

const getAvailableDate = async (date: Date) => {
  // const appointments = await getAppointmentsByDate(date).then((items) =>
  //   items.map((item) => new Date(item.date))
  // );
  const startDate = new Date(date.setHours(9, 30, 0, 0));
  const endDate = new Date(date.setHours(17, 30, 0, 0));
  const invalidDates: Date[] = [
    new Date(date.setHours(12, 0, 0, 0)),
    new Date(date.setHours(12, 30, 0, 0)),
    new Date(date.setHours(13, 0, 0, 0)),
    new Date(date.setHours(13, 30, 0, 0)),
    new Date(date.setHours(14, 0, 0, 0)),
    // ...appointments,
  ];
  const initialValues = [];
  let currentDate = startDate;
  while (currentDate <= endDate) {
    if (!invalidDates.some((e) => e.getTime() === currentDate.getTime())) {
      initialValues.push(currentDate);
    }
    currentDate = daysjs(currentDate.toString()).add(30, "minute").toDate();
  }
  return initialValues;
};

const Appointment = () => {
  const [availableDates, setAvailablesDate] = useState<Date[]>([]);
  const [date, setDate] = useState<Date>();
  const { toast } = useToast();
  const form = useForm<AppointmentData>({
    resolver: zodResolver(AppointmentSchema),
    defaultValues: {
      subject: "",
      message: "",
      email: "",
      date: undefined,
    },
  });

  const onChangeDate = async (value: Date | undefined) => {
    setDate(value!);
    if (value === undefined) {
      setAvailablesDate([]);
    } else {
      getAvailableDate(value!).then((items) => {
        console.log("allo");
        setAvailablesDate(items);
      });
    }
  };

  const onSubmit = (value: AppointmentData) => {
    fetch("api/appointments", {
      method: "POST",
      body: JSON.stringify(value),
    })
      .then(() => {
        console.log("réussi");
        toast({
          title: "Demande de rendez-vous envoyée",
          description:
            "Je reviendrai vers vous au plus vite pour confirmer le rendez vous",
          duration: 3000,
        });
      })
      .catch(() => {
        console.log("échec");
      });
  };

  return (
    <div className="sm:w-5/6 md:w-2/3  w-full md:mx-auto md:p-10 p-4 flex md:flex-row flex-col gap-10 rounded-2xl shadow-xl shadow-gray-900 bg-secondary">
      <div className="mx-auto">
        <Calendar
          mode="single"
          locale={fr}
          disabled={[
            {
              before: daysjs().add(3, "day").toDate(),
            },
            { dayOfWeek: [0, 6] },
          ]}
          selected={date}
          onSelect={onChangeDate}
          className="text-white flex justify-center"
        />
        <TimePicker
          name="date"
          className="mt-5"
          values={availableDates}
          register={form.register}
          errorMessage={form.formState.errors.date?.message}
        />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="md:w-1/2 w-full"
        >
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
          <p className="text-white mt-4 text-sm">
            Je vous recontacterais le plus tôt possible pour confirmer le
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
