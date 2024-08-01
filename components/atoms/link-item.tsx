"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type LinkItemProps = {
  url: string;
  imgUrl: string;
  initialTop: number;
  initialLeft: number;
};

const LinkItem = ({ url, imgUrl, initialTop, initialLeft }: LinkItemProps) => {
  const [top, setTop] = useState<number>(initialTop);
  const [left, setLeft] = useState<number>(initialLeft);
  const [movingUp, setMovingUp] = useState<boolean>(false);
  const [movingLeft, setMovingLeft] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTop((prevTop) => {
        let newTop = prevTop;
        if (movingUp) {
          newTop -= 10;
          if (newTop <= 0) {
            newTop = 0;
            setMovingUp(false);
          }
        } else {
          newTop += 1;
          if (newTop >= 90) {
            newTop = 100;
            setMovingUp(true);
          }
        }
        return newTop;
      });

      setLeft((prevLeft) => {
        let newLeft = prevLeft;
        if (movingLeft) {
          newLeft -= 2;
          if (newLeft <= 0) {
            newLeft = 0;
            setMovingLeft(false);
          }
        } else {
          newLeft += 1;
          if (newLeft >= 90) {
            newLeft = 90;
            setMovingLeft(true);
          }
        }
        return newLeft;
      });
    }, 200);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [movingUp, movingLeft]);

  return (
    <a
      className="absolute"
      href={url}
      style={{
        top: `${top}%`,
        left: `${left}%`,
      }}
    >
      <Image src={imgUrl} alt="link img" width={50} height={50} />
    </a>
  );
};

export { LinkItem };
