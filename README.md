# Shymohn Portfolio

Shymohnの作品・実績・活動をまとめたGitHub Pagesポートフォリオです。

**Live site:** https://shymohn99.github.io/portfolio/

## 構成

- `index.html` — セマンティックな本文とSEOメタ情報
- `css/style.css` — デザイントークン、レイアウト、レスポンシブ、モーション
- `js/main.js` — モバイルナビゲーションと軽量な表示アニメーション
- `assets/` — Projectカード用のSVGビジュアル
- `favicon.svg` — SHモノグラムのfavicon

## デザイン方針

- 既存のネイビー×えんじ、グリッド、軌道モチーフを継承
- Heroで活動領域と次の行動を明確化
- Selected Workを実績一覧より先に配置
- 強制ローダーや外部アニメーションライブラリを使わず、本文を常時表示
- `prefers-reduced-motion`、キーボードフォーカス、モバイル表示に対応

## 更新方法

作品を追加するときは、`index.html`内の `.project-card` を複製し、説明・タグ・リンク・画像を差し替えます。実績は `.achievement-list` 内の項目を更新します。

GitHub Pagesは `main` ブランチのルートから配信します。
