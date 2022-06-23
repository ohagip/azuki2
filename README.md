Frontend Starter Kit
====================

## Engines
```
node: 16.15.1
npm: 8.11.0
```

## Setup
```
npm ci
```

## Scripts
- `start` devと同じ
- `dev` 開発スタート（ローカルサーバ起動、ファイル監視）
- `build:dev` ビルド（開発）
- `build:stg` ビルド（ステージング）
- `build:prd` ビルド（本番）

## Directory
```
├ env [環境設定]
├ public [公開ソース]
├ src [開発ソース]
│ ├ css
│ │ ├ pages/**/* [各ページファイル]
│ │ └ app.scss [エントリーポイント]
│ ├ html
│ │ └ pages/**/* [エントリーポイント]
│ └ js
│ │ └ pages/* [エントリーポイント]
│ └ static [静的ファイル]
└ webpack
    ├ common.js
    ├ dev.js
    └ prod.js
```

## Git
- `main|master` 本番
- `develop` 開発
- `feature/**` 機能開発 or 開発者（直接developもOK）

## 開発環境のみビルドされるコード
以下のディレクトリ内のコードは開発環境のみビルドします。
- src/html/pages/dev/
- src/js/pages/dev/

## JavaScript
エディタの設定でファイル保存時にPrettierを実行してください。  
TypeScriptも利用可能です。

## Style design
[FLOCSS](https://github.com/hiloki/flocss) をベースに設計しています。  
Block、Element、Modifierはそれぞれ`_`、`-`で接続します。
```
Block_Element
Block_Element-Modifier
```
独自ルールとして各ページでのみ設定するスタイルについては  
プレフィックスをつけず各ページclassのセレクタを利用します。
```
.page-{{pageId}} {
  .sample {}
}
```
メンテナンスを考慮し、なるべく以下の点に注意してください。
- セレクタにタグを使用しない
- ネストを利用してセレクタを複数階層にしない
```scss
// NG
.sampleParent {
  .p {
    .sampleChild {}
  }
}

// OK
.sample_child {} // 設計ルールにそった感じにする
.sample > img {} // 親子セレクタやあきらかにタグが限定できるときはOK
```
