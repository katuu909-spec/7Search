# 7桁検索アプリ

Xの投稿テキストからFC2動画の7桁IDを抽出・検索するアプリです。

---

## GitHubに保管してiPadで使う

### ステップ1: GitHubアカウントの準備

1. [github.com](https://github.com) にアクセス
2. アカウントがない場合は「Sign up」で新規登録
3. ログインする

### ステップ2: 新しいリポジトリを作成

1. 右上の「+」→「New repository」をクリック
2. Repository name に `7digit-search` など好きな名前を入力
3. 「Public」を選択
4. 「Create repository」をクリック
5. 作成後のページに表示されるURL（例: `https://github.com/あなたのユーザー名/7digit-search`）をメモ

### ステップ3: ターミナルでプロジェクトをGitHubにアップロード

1. ターミナル（またはVS Codeのターミナル）を開く
2. 以下のコマンドを順に実行（`あなたのユーザー名` と `リポジトリ名` は実際の値に置き換える）:

```bash
cd /Users/masukatsu/Desktop/AICoding/search
git init
git add .
git commit -m "初回コミット"
git branch -M main
git remote add origin https://github.com/あなたのユーザー名/リポジトリ名.git
git push -u origin main
```

3. GitHubのユーザー名とパスワード（またはPersonal Access Token）を入力してアップロード

### ステップ4: GitHub Pagesを有効にする

1. GitHubのリポジトリページを開く
2. 上部メニュー「Settings」をクリック
3. 左メニュー「Pages」をクリック
4. 「Source」で「Deploy from a branch」を選択
5. 「Branch」で「main」を選び、「/ (root)」を選択
6. 「Save」をクリック
7. 1〜2分待つと、ページ上部に「Your site is live at https://あなたのユーザー名.github.io/リポジトリ名/」と表示される

### ステップ5: iPadで使う

1. iPadのSafari（またはChrome）を開く
2. アドレスバーに `https://あなたのユーザー名.github.io/リポジトリ名/` を入力
3. ホーム画面に追加: 共有ボタン →「ホーム画面に追加」→ アプリのように使える

---

## Chrome拡張機能として使う

サーバーを起動せず、Chromeのツールバーからいつでも使えます。

### インストール手順

1. Chromeで `chrome://extensions/` を開く
2. 右上の「**デベロッパーモード**」をONにする
3. 「**パッケージ化されていない拡張機能を読み込む**」をクリック
4. このプロジェクトのフォルダ（`search`）を選択
5. ツールバーに拡張機能アイコンが表示される

### 使い方

1. Chromeツールバーの拡張機能アイコンをクリック
2. ポップアップが開いたら、Xの投稿テキストを貼り付け
3. 「7桁を抽出」をクリック
4. 抽出されたIDの「FC2動画」または「Google」ボタンで検索

---

## 従来の起動方法

### 方法1: Node.js でサーバー起動

```bash
npm start
```

ブラウザで http://localhost:3000 を開く。

### 方法2: ファイルを直接開く

`index.html` をブラウザにドラッグ＆ドロップするか、ダブルクリックで開く。
