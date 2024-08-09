import Image from "next/image";

type PhotoMeProps = {
  size: number;
};

export const PhotoMe = ({ size }: PhotoMeProps) => {
  return (
    <div
      className={`w-[${size}px] h-[${size}px] rounded-full overflow-hidden bg-gray-800 animate-spin-no-infinite`}
    >
      <Image
        src="/assets/me.png"
        priority
        width={size}
        height={size}
        alt="photo of me"
      />
    </div>
  );
};
