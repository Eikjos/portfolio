type ShadowProps = {
  top: number;
  left: number;
};

const ShadowContainer = ({ top, left }: ShadowProps) => {
  return (
    <div
      className={`absolute bg-primary opacity-45 rounded-full animate-ping -z-10 w-[150px] h-[150px]`}
      style={{
        top: `${top}%`,
        left: `${left}%`,
      }}
    ></div>
  );
};

export { ShadowContainer };
