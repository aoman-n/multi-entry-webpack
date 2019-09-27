## Read me!

エントリーポイントを2つ用意してバンドルファイルを分割し、一つのファイルサイズを小さくすることが目的。

## usage

install
```
npm install
```

run
```
npm run dev
```

## Constitution

build後のファイルをpublic/に配置
```
public
├── bundle
│   ├── login.js
│   ├── main.js
│   └── vendor.js
├── index.html
└── login.html
```

login.js, main.jsはそれぞれのエンドポイントのバンドルファイル。
vendor.jsはnode_modules/配下のモジュールを切り出し、index.htmlとlogin.html共通で使用している。

## serverのルーティング

- /login -> login.htmlを返す。
- /*     -> index.htmlを返す。

login.htmlではbuttonをクリックすると、ローカルストレージにtokenを保存して`/`へ遷移する。
index.htmlではローカルストレージに保存されたtokenを表示する。
（ログインしたときにtokenを引き継いでmainページへとアクセスすることを想定）

### 課題

- 現状webpack-dev-serverで立ち上げることが出来ないため方法を探す。
