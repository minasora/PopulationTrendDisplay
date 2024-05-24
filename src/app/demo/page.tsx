"use client"

import ProvinceSelector from "@/components/ui/feature/ProvinceSelector";
import ToggleBtn from "@/components/ui/base/Toggler";
import Icon from "@/components/ui/base/Icon";
import {FaGithub} from "react-icons/fa6";
import 'intro.js/introjs.css';
import {useEffect} from 'react';
import introJs from 'intro.js';

export default async function Page() {

    useEffect(() => {
        const intro = introJs();
        intro.setOptions({
            steps: [
                {
                    intro: "このウェブサイトへようこそ！以下はこのウェブサイトの使用方法の紹介です。"
                },
                {
                    element: '.toggle-btn',
                    intro: "このボタンでライトモードとダークモードを切り替えます。"
                },
                {
                    element: '.icon',
                    intro: "ここでは、GitHubなどの外部サイトへのリンクを見つけることができます。"
                },
                {
                    intro: "このセレクターを使用して都道府県を選択し、その人口動向を確認できます。"
                },
                {
                    element: '.trend_display',
                    intro: "ここに選択した都道府県の人口動向が表示されます。"
                },
                {
                    element: '.map',
                    intro: "この地図には選択した都道府県が表示されます。"
                }
            ]
        });

        intro.start();
    }, []);

    return (
        <div className={"md:mt-32 md:h-screen min-h-screen"}>
            <div
                className="w-3/4 gap-5 mx-auto my-auto bg-white shadow-2xl select-none p-2 h-2/3 rounded-2xl dark:bg-slate-900">
                <div className="flex flex-row justify-between items-center h-8">
                    <ToggleBtn className="toggle-btn"/>
                    <Icon url={"https://github.com/minasora"} icon={FaGithub} className={"w-6 h-6 icon"}></Icon>
                </div>
                <ProvinceSelector/>
            </div>
        </div>
    );
}
