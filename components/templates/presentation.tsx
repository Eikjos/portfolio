import Image from "next/image";
import { PhotoMe } from "../molecules/photo-me";

export const Presentation = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col items-center gap-20 justify-center">
        <PhotoMe size={250} />
        <div className="flex flex-col md:w-1/2 gap-4 text-white w-3/4">
          <h1 className="font-semibold text-3xl border-b-2 pb-2">
            Thomas Hamelin
          </h1>
          <p>
            Je suis un développeur passionné avec une expertise avérée dans les
            technologies modernes, couvrant à la fois le développement back-end
            et front-end. Avec une solide expérience dans le développement
            d&apos;applications web et mobiles, je suis toujours à la recherche
            de nouveaux défis pour améliorer mes compétences et contribuer à des
            projets innovants.
          </p>
          <div className="mt-5 flex flex-row justify-end gap-4">
            <a
              href="https://www.linkedin.com/in/thomas-hamelin-74b919229/"
              target="_blank"
              className="hover:border-b-blue-900 hover:border-b-2 pb-2 hover:animate-shake text-sm md:text-md"
            >
              <div className="flex flex-row gap-2 items-center justify-center">
                <Image
                  width={20}
                  height={20}
                  src="/portfolio/assets/linkedin.png"
                  alt="liknkedin logo"
                />
                <span>Thomas Hamelin</span>
              </div>
            </a>
            <a
              href="https://github.com/Eikjos"
              target="_blank"
              className="hover:border-b-blue-900 hover:border-b-2 pb-2 hover:animate-shake text-sm md:text-md"
            >
              <div className="flex flex-row gap-2 items-center justify-center">
                <Image
                  width={20}
                  height={20}
                  src="/portfolio/assets/github.png"
                  alt="github logo"
                />
                <span>Thomas Hamelin</span>
              </div>
            </a>
            <a
              href="mailto:thomashamelin27@outlook.fr"
              className="hover:border-b-blue-900 hover:border-b-2 pb-2 rotate-0 hover:animate-shake text-sm md:text-md"
            >
              <div className="flex flex-row gap-2 items-center justify-center">
                <Image
                  width={20}
                  height={20}
                  src="/portfolio/assets/mail.png"
                  alt="mail logo"
                />
                <span>Thomas Hamelin</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
