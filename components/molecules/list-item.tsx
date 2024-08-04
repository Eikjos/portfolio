import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type ListItemProps = {
  title: string;
  imageUrl: string | StaticImport;
  imageAlt: string;
};

const ListItem = ({ title, imageUrl, imageAlt }: ListItemProps) => {
  return (
    <div className="flex flex-row w-full p-2 gap-4 items-center bg-gradient-to-tr from-gray-800/50 to-gray-700 rounded-md hover:animate-pulse">
      <Image src={imageUrl} width={35} height={35} alt={imageAlt} />
      <span className="text-lg font-sm text-white">{title}</span>
    </div>
  );
};

export { ListItem };
