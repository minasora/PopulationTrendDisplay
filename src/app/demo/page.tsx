import ProvinceSelector from "@/components/ui/feature/ProvinceSelector";
import { ThemeToggler } from "@/components/ui/base/ThemeToggler";
import Icon from "@/components/ui/base/Icon";
import { FaGithub } from "react-icons/fa6";
import "intro.js/introjs.css";
import IntroGuide from "@/components/IntroGuide";

export default async function Page() {
  return (
    <div className={"md:mt-32 md:h-screen min-h-screen"}>
      <div className="md:w-3/4 w-full  gap-5 mx-auto my-auto bg-white md:shadow-2xl select-none p-2 h-2/3 md:rounded-2xl dark:bg-slate-900">
        <div className="flex flex-row justify-between items-center h-8">
          <ThemeToggler />
          <Icon
            url={"https://github.com/minasora"}
            icon={FaGithub}
            className={"w-6 h-6 icon"}
          ></Icon>
        </div>
        <ProvinceSelector />
      </div>
      <IntroGuide />
    </div>
  );
}
