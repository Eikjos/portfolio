type Props = {
  name: string;
  startDate: Date;
  endDate: Date;
  address?: string;
  etablishment?: string;
  index: number;
};

const HistoryItem = ({
  name,
  startDate,
  endDate,
  address,
  etablishment,
  index,
}: Props) => {
  function formatDate(date: Date) {
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${year}`;
  }

  return (
    <div
      className={`flex ${
        index % 2 == 0 ? "flex-col-reverse" : "flex-col"
      } gap-5 relative min-w-[300px]`}
    >
      <div className="h-20 px-5">
        <span className="text-primary text-bold text-lg  block text-center mb-3">
          {name}
        </span>
        {etablishment && address && (
          <p className="text-xs text-center">
            {etablishment}, {address}
          </p>
        )}

        <span className="mt-2 block text-center text-sm align-text-bottom text-primary">
          {formatDate(startDate)} - {formatDate(endDate)}
        </span>
      </div>

      <div className="border-b-2 border-primary"></div>

      <div className="h-20 px-5 flex flex-col justify-center"></div>

      <div className="w-2 h-2 rounded-full bg-secondary absolute left-1/2 top-[48%] border-2 border-primary"></div>
    </div>
  );
};

export { HistoryItem };
