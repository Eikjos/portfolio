import { HistoryItem } from "@/components/atoms/history-item";
import { getDegrees } from "@/lib/prisma";

const DegreesComponent = async () => {
  const data = await getDegrees();
  return (
    <div className="px-10">
      <h2 className="text-center text-2xl font-bold">
        Degrees and certificates
      </h2>
      <div className="flex flex-row items-center mt-10 justify-center px-5 overflow-x-auto max-h-80 mx-auto py-10">
        {data.map((d, index) => (
          <HistoryItem
            key={index}
            name={d.name}
            address={d.address}
            startDate={d.startDate}
            endDate={d.endDate}
            etablishment={d.institution}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export { DegreesComponent };
