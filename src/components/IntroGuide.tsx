"use client";
import React, { useEffect } from 'react';
import introJs from 'intro.js';
import 'intro.js/introjs.css';
import { useTheme } from 'next-themes';

const IntroGuide: React.FC = () => {
    const { theme } = useTheme();

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
                },
                {
                    element: '.zoom',
                    intro: "地図をズームイン、ズームアウトすることができます。"
                }
            ],
            tooltipClass:  'custom-tooltip-dark',
            highlightClass: 'custom-highlight-dark'
        });

        intro.start();
    }, [theme]);

    return null;
};

export default IntroGuide;
