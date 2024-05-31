import { Footer, FooterProps } from "@/components/ui/layout/Footer";
import { Header, HeaderProps } from "@/components/ui/layout/Header";
import { BiLogoGithub } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export default async function Page() {
  const HeaderDefaults: HeaderProps = {
    heading: "都道府県別の人口動向",
    description:
      "RESAS APIから都道府県のリストを取得し、チェックボックスを動的に生成する機能を提供します。選択された都道府県の「人口構成」をRESAS APIから取得します。",
    buttons: [
      {
        href: "/demo",
        children: "デモを見る",
      },
      {
        href: "https://population-trend-display-document.vercel.app/",
        children: "ドキュメントを読める",
      },
    ],
    image: {
      src: "/title.png",
      alt: "Placeholder image",
      width: 600,
      height: 600,
    },
  };
  const FooterDefaults: FooterProps = {
    image: {
      src: "logo.svg",
      alt: "Logo image",
    },
    socialMediaLinks: [
      {
        title: "Github",
        url: "http://github.com/minasora",
        icon: <BiLogoGithub className="size-6" />,
      },
      {
        title: "X",
        url: "https://x.com/_minazuki_sora",
        icon: <FaXTwitter className="size-6 p-0.5" />,
      },
    ],
    footerText: "© 2024 Minasora. All rights reserved.",
  };
  return (
    <div>
      <Header {...HeaderDefaults} />
      <Footer {...FooterDefaults}></Footer>
    </div>
  );
}
