// import { Appointment, PrismaClient } from "@prisma/client";

// const prismaClientSingleton = () => {
//   return new PrismaClient();
// };

// declare const globalThis: {
//   prismaGlobal: ReturnType<typeof prismaClientSingleton>;
// } & typeof global;

// const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// export default prisma;

// if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

// export async function getExperiences() {
//   return await prisma.experience.findMany({
//     orderBy: [
//       {
//         startDate: "asc",
//       },
//     ],
//   });
// }

// export async function getDegrees() {
//   return await prisma.graduates.findMany({
//     orderBy: [
//       {
//         startDate: "asc",
//       },
//     ],
//   });
// }

// export async function getProjects() {
//   return await prisma.project.findMany({
//     orderBy: [
//       {
//         startDate: "asc",
//       },
//     ],
//   });
// }

// export async function getAppointmentByDate(date: Date): Promise<Appointment[]> {
//   return await prisma.appointment.findMany({
//     where: {
//       date: {
//         gte: new Date(date.setHours(0, 0, 0, 0)),
//         lt: new Date(date.setHours(23, 59, 59, 999)),
//       },
//     },
//   });
// }
