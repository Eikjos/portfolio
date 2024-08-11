import prisma, { getAppointmentByDate } from "@/lib/prisma";
import { AppointmentData } from "@/types/appointment";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get("date");
  if (!date) {
    return new NextResponse(JSON.stringify({ error: "Invalid Date" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  const appointments = await getAppointmentByDate(new Date(date as string));
  return NextResponse.json(appointments);
}

export async function POST(request: NextRequest) {
  const value = (await request.json()) as AppointmentData;
  await prisma.appointment.create({ data: { ...value } });
  try {
    // sendContactMail(value);
  } catch (e) {
    return new NextResponse(JSON.stringify({ message: "Error occured" }), {
      status: 500,
    });
  }
  return new NextResponse();
}
