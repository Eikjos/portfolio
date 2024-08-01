import { HistoryItem } from "@/components/atoms/history-item";
import { getProjects } from "@/lib/prisma";

const ProjectsComponent = async () => {
  const data = await getProjects();
  return (
    <div className="px-10">
      <h2 className="text-center text-2xl font-bold">Projects</h2>
      <div className="flex flex-row items-center mt-10 justify-center px-5 overflow-x-auto max-h-80 mx-auto py-10">
        {data.map((d, index) => (
          <HistoryItem
            key={index}
            name={d.name}
            startDate={d.startDate}
            endDate={d.endDate}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export { ProjectsComponent };
