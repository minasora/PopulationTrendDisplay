"use client";

import Image from "next/image";

type Links = {
    title: string;
    url: string;
};


type socialMediaLinks = Links & {
    icon: React.ReactNode;
};
type ImageProps = {
    src: string;
    alt?: string;
};

type Props = {
    image: ImageProps;
    socialMediaLinks: socialMediaLinks[];
    footerText: string;
};

export type Footer4Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Footer = (props: Footer4Props) => {
    const {image, footerText, socialMediaLinks} = {
        ...props,
    } as Props;
    return (
        <footer className="px-[5%] py-12 md:py-18 lg:py-20">
            <div className="container">
                <div
                    className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
                    <div className="lg:justify-self-start">
                        <Image src={image.src} alt={image.alt || "image"} width={50} height={50} className="inline-block"/>
                    </div>
                    <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
                        {socialMediaLinks.map((link, index) => (
                            <a
                                key={`${link.title}-${index}`}
                                href={link.url}
                                className="focus-visible:outline-none"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="h-px w-full bg-black dark:bg-white"/>
                <div
                    className="flex flex-col-reverse items-center justify-center justify-items-center pt-6 text-sm md:flex-row md:gap-x-6 md:pt-8">
                    <p className="mt-8 md:mt-0">{footerText}</p>
                </div>
            </div>
        </footer>
    );
};
