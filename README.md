MUSIC-STATUS-ON-SLACK
====

slackのステータスを現在itunesで視聴してる曲の情報にする

## Setup
### nodejsの取得
https://nodejs.org/en/

### ソースコード取得
```
git clone https://github.com/iyu/music-status-on-slack.git
```

### ビルド
```
cd music-status-on-slack
npm ci
npm run build
```

### 実行
```
SLACK_TOKEN=[slackトークン] npm start
```
