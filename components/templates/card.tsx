type CardProps = {
  title: string;
  children: React.ReactNode;
};

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="sha p-1 w-96 rounded-sm shadow-lg shadow-gray-900 bg-secondary">
      <div className="w-full h-full">
        <div className="border-b-2 border-b-indigo-200 p-4">
          <h2 className="font-medium text-2xl text-center text-white">
            {title}
          </h2>
        </div>
        <div className="m-2 overflow-y-scroll max-h-56 flex flex-col gap-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export { Card };
