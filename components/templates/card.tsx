type CardProps = {
  title: string;
  children: React.ReactNode;
};

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="sha p-1 w-96 rounded-md  shadow-lg shadow-indigo-500/50">
      <div className="w-full h-full bg-white">
        <div className="border-b-2 border-b-indigo-200 p-4">
          <h2 className="font-medium text-2xl text-center text-indigo-800">
            {title}
          </h2>
        </div>
        <div className="m-2 overflow-y-scroll max-h-56 flex flex-col gap-2 scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );
};

export { Card };
