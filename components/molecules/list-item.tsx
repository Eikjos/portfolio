"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type ListItemProps = {
  title: string;
  imageUrl: string | StaticImport;
  imageAlt: string;
  description?: string;
};

const ListItem = ({
  title,
  imageUrl,
  imageAlt,
  description,
}: ListItemProps) => {
  return (
    <div className="flex flex-col bg-gradient-to-tr from-gray-800/50 to-gray-700 rounded-md hover:animate-in">
      <div className="flex flex-row w-full p-2 gap-4 items-center ">
        <Image src={imageUrl} width={35} height={35} alt={imageAlt} />
        <span className="text-lg font-sm text-white">{title}</span>
      </div>
      {description ? (
        <div
          className="w-full animate-accordion-down p-4 text-xs"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      ) : null}
    </div>
  );
};

export { ListItem };
