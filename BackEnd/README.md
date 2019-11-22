# SFAバックエンド

## １．開発環境

### １－１．AWSの設定

1. AWSコンソールからIAMの画面を開き、ユーザー「serverless」を作成する。
1. アクセス権限でAdministratorAccess権を付与する。
1. 認証情報タブから、「アクセスキーの作成」をクリックし、作成されたアクセスキーIDとシークレットアクセスキーをメモする

### １－２．依存モジュールのインストール

1. BackEndフォルダをカレントディレクトリとし、`npm install`コマンドを実行する

### １－３．Serverless Frameworkの設定

1. BackEndフォルダのpackage.json内の`svsinit`スクリプトの「アクセスID」「シークレットキー」に、上記でメモしたパラメータを設定する。
1. BackEndフォルダをカレントディレクトリとし、`npm run svsinit`コマンドを実行する

### １－４．デプロイ

1. `npm run deploy`コマンドを実行し、AWS環境へデプロイする


