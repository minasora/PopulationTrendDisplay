[English](./README.md)

# 人口動向の視覚化

このプロジェクトは [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
によってブートストラップされた [Next.js](https://nextjs.org/)
プロジェクトです。このプロジェクトは、日本の人口動向を視覚化することを目的としており、各都道府県のデータを折れ線グラフで表現します。

## 始めに

まず、開発サーバーを実行します：

```bash
npm install
npm run dev
```

http://localhost:3000 をブラウザで開いて、結果を確認してください。

ドキュメントを参照するには、以下のコマンドを実行します：

```bash
npm run storybook
```

アプリケーションをテストするには、以下のコマンドを実行します：

```bash
npm run test
```

プロジェクトの詳細については、[プロジェクトドキュメント](https://population-trend-display-document.vercel.app/?path=/docs/stories-introduction--docs)
をご覧ください。

## 特徴

- **データ視覚化:** 折れ線グラフを使用して人口動向データを視覚化します。
- **都道府県別データ:** 各都道府県の人口動向データを表示します。
- **レスポンシブデザイン:** アプリケーションはレスポンシブデザインで、すべてのデバイスで動作するように設計されています。
- **ドキュメント:** コンポーネントとその使用例をドキュメント化するためにStorybookを使用しています。
- **テスト:** アプリケーションのテストにはJestを使用しています。
- **型の安全性:** TypeScriptを使用して型の安全性を確保しています。

## 技術スタック

- **Framework**: [Next.js](https://nextjs.org/)
- **CSS**: [Tailwind CSS](https://tailwindcss.com/)
- **Testing**: [Jest](https://jestjs.io/)
- **Documentation + Component Testing**: [Storybook](https://storybook.js.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Deployment**: [Vercel](https://vercel.com/)

## Todo

- [ ] テストを追加
- [ ] i18n
