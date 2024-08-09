import { getAppointmentByDate } from "@/lib/prisma";
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
  return new NextResponse(JSON.stringify(appointments), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
