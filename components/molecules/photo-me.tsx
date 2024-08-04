import Image from "next/image";

type PhotoMeProps = {
  size: number;
};

export const PhotoMe = ({ size }: PhotoMeProps) => {
  return (
    <div
      className={`w-[${size}px] h-[${size}px] rounded-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-green-700 animate-spin-no-infinite`}
    >
      <Image
        src="/assets/me.png"
        width={size}
        height={size}
        alt="photo of me"
      />
    </div>
  );
};
