import { Card } from "@/components/templates/card";
import { Presentation } from "@/components/templates/presentation";

export default function Home() {
  return (
    <>
      <div className="pt-14">
        <Presentation />
        <div className="flex flex-row mx-auto gap-10 w-2/3 justify-center mt-16">
          <Card title="Compétences">
            <div className="flex flex-row w-full p-2 gap-4 items-center bg-gradient-to-br from-indigo-100 to-indigo-300 rounded-md">
              <div className="w-10 h-10 bg-indigo-500"></div>
              <span className="text-lg font-medium text-indigo-900">React</span>
            </div>
            <div className="flex flex-row w-full p-2 gap-4 items-center bg-gradient-to-br from-indigo-100 to-indigo-300 rounded-md">
              <div className="w-10 h-10 bg-indigo-500"></div>
              <span className="text-lg font-medium text-indigo-900">React</span>
            </div>
            <div className="flex flex-row w-full p-2 gap-4 items-center bg-gradient-to-br from-indigo-100 to-indigo-300 rounded-md">
              <div className="w-10 h-10 bg-indigo-500"></div>
              <span className="text-lg font-medium text-indigo-900">React</span>
            </div>
            <div className="flex flex-row w-full p-2 gap-4 items-center bg-gradient-to-br from-indigo-100 to-indigo-300 rounded-md">
              <div className="w-10 h-10 bg-indigo-500"></div>
              <span className="text-lg font-medium text-indigo-900">React</span>
            </div>
            <div className="flex flex-row w-full p-2 gap-4 items-center bg-gradient-to-br from-indigo-100 to-indigo-300 rounded-md">
              <div className="w-10 h-10 bg-indigo-500"></div>
              <span className="text-lg font-medium text-indigo-900">React</span>
            </div>
            <div className="flex flex-row w-full p-2 gap-4 items-center bg-gradient-to-br from-indigo-100 to-indigo-300 rounded-md">
              <div className="w-10 h-10 bg-indigo-500"></div>
              <span className="text-lg font-medium text-indigo-900">React</span>
            </div>
          </Card>
          <Card title="Projets">
            <div className="flex flex-row w-full p-2 gap-4 items-center bg-gradient-to-br from-indigo-100 to-indigo-300 rounded-md">
              <div className="w-10 h-10 bg-indigo-500"></div>
              <span className="text-lg font-medium text-indigo-900">React</span>
            </div>
            <div className="flex flex-row w-full p-2 gap-4 items-center bg-gradient-to-br from-indigo-100 to-indigo-300 rounded-md">
              <div className="w-10 h-10 bg-indigo-500"></div>
              <span className="text-lg font-medium text-indigo-900">React</span>
            </div>
            <div className="flex flex-row w-full p-2 gap-4 items-center bg-gradient-to-br from-indigo-100 to-indigo-300 rounded-md">
              <div className="w-10 h-10 bg-indigo-500"></div>
              <span className="text-lg font-medium text-indigo-900">React</span>
            </div>
          </Card>
          <Card title="Expériences">
            <div className="flex flex-row w-full p-2 gap-4 items-center bg-gradient-to-br from-indigo-100 to-indigo-300 rounded-md">
              <div className="w-10 h-10 bg-indigo-500"></div>
              <span className="text-lg font-medium text-indigo-900">React</span>
            </div>
            <div className="flex flex-row w-full p-2 gap-4 items-center bg-gradient-to-br from-indigo-100 to-indigo-300 rounded-md">
              <div className="w-10 h-10 bg-indigo-500"></div>
              <span className="text-lg font-medium text-indigo-900">React</span>
            </div>
            <div className="flex flex-row w-full p-2 gap-4 items-center bg-gradient-to-br from-indigo-100 to-indigo-300 rounded-md">
              <div className="w-10 h-10 bg-indigo-500"></div>
              <span className="text-lg font-medium text-indigo-900">React</span>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
