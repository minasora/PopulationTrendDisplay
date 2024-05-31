"use client";
import React, { useEffect, useState } from "react";
import introJs from "intro.js";
import "intro.js/introjs.css";
import { useTheme } from "next-themes";

const IntroGuide: React.FC = () => {
  const { theme } = useTheme();
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startIntro = () => {
      const intro = introJs();
      intro.setOptions({
        steps: [
          {
            intro:
              "このウェブサイトへようこそ！以下はこのウェブサイトの使用方法の紹介です。",
          },
          {
            element: ".toggle-btn",
            intro: "このボタンでライトモードとダークモードを切り替えます。",
          },
          {
            element: ".icon",
            intro:
              "ここでは、GitHubなどの外部サイトへのリンクを見つけることができます。",
          },
          {
            element: ".searchbar",
            intro:
              "このセレクターを使用して都道府県を選択し、その人口動向を確認できます。",
          },
          {
            element: ".trend_display",
            intro: "ここに選択した都道府県の人口動向が表示されます。",
          },
          {
            element: ".map",
            intro: "この地図には選択した都道府県が表示されます。",
          },
          {
            element: ".zoom",
            intro: "地図をズームイン、ズームアウトすることができます。",
          },
        ],
        tooltipClass:
          theme === "dark" ? "custom-tooltip-dark" : "custom-tooltip-light",
        highlightClass:
          theme === "dark" ? "custom-highlight-dark" : "custom-highlight-light",
      });

      intro.start();
      setHasStarted(true);
      localStorage.setItem("hasSeenIntro", "true");
    };

    if (!hasStarted && !localStorage.getItem("hasSeenIntro")) {
      setTimeout(startIntro, 200);
    }
  }, [theme, hasStarted]);

  return null;
};

export default IntroGuide;
