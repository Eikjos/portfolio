import { HistoryItem } from "@/components/atoms/history-item";
import { getExperiences } from "@/lib/prisma";

const ProfesionalExperiencesComponent = async () => {
  const data = await getExperiences();
  return (
    <>
      <h2 className="text-center text-2xl font-bold">
        Profesional experiences
      </h2>
      <div className="flex flex-row items-center mt-10 justify-center px-5 overflow-x-auto max-h-80 mx-auto py-10">
        {data.map((d, index) => (
          <HistoryItem
            key={index}
            name={d.position}
            address={d.address}
            startDate={d.startDate}
            endDate={d.endDate}
            etablishment={d.enterprise}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export { ProfesionalExperiencesComponent };
