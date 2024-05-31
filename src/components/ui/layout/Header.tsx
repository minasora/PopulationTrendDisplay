"use client";

import Button from "@/components/ui/base/Button";
import Image from "next/image";

type Props = {
  heading: string;
  description: string;
  buttons: { href: string; children: string }[];
  image: { width: number; height: number; src: string; alt: string };
};

export type HeaderProps = React.ComponentPropsWithoutRef<"section"> & Props;

export const Header = (props: HeaderProps) => {
  const { heading, description, buttons, image } = {
    ...props,
  } as Props;
  return (
    <header className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              {buttons.map(({ href, children }, index) => (
                <Button key={index} href={href}>
                  {children}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </header>
  );
};


