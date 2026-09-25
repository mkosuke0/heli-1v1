# Heli 1v1

Discordアクティビティとして遊べる、ビル街のヘリコプター1対1対戦ゲームです。ブラウザでも同じルームコードを使って2人で遊べます。

## 起動

Node.js 20.19以降と pnpm が必要です。

```powershell
pnpm install
pnpm dev
```

`http://localhost:5173` を開き、「ソロ練習」でBotと対戦できます。2人対戦を試すときは別々のブラウザタブで同じルームコードを入力するか、招待リンクを共有してください。

本番用ビルド:

```powershell
pnpm build
pnpm start
```

`PORT` 環境変数で待受ポートを変更できます。サーバーは静的ファイル、`/ws` WebSocket、`/health` を同じポートから提供します。ホスティング先はWebSocketを有効にし、HTTPS/WSSを利用してください。

## Discordアクティビティとして設定

この作業フォルダーの `.env` には、作成済みアプリのID `1552853971285319816` を `VITE_DISCORD_CLIENT_ID` として設定済みです。これは公開用IDで、クライアントシークレットはこのゲームでは使いません。

1. このフォルダーで `pnpm install`、`pnpm build`、`pnpm start` を実行します。ローカルの `http://localhost:5173/health` が `{"ok":true}` を返すことを確認します。
2. 動作確認には、ゲームを起動したままHTTPS対応トンネルを用意します。Cloudflare Tunnelを使う場合は別のターミナルで `cloudflared tunnel --url http://localhost:5173` を実行し、表示された `https://...trycloudflare.com` のホスト名を控えます。本番運用では、同じNode.jsサーバーをHTTPS/WSSとWebSocket Upgradeに対応したホストに置きます。静的サイト専用ホストだけでは対戦サーバーは動きません。
3. [Discord Developer Portalの該当アプリ](https://discord.com/developers/applications/1552853971285319816) → **Activities → URL Mappings** に `PREFIX: /`、`TARGET: トンネルまたは本番ホストのドメイン` を登録します。TARGETには `https://` や末尾のファイル名を入れません。`/ws` は同じドメイン・同じサーバーへWebSocket接続できる必要があります。ルートの `/` マッピングでゲーム画面と `/ws` を同じホストに転送できます。
4. **Activities → Settings** で **Enable Activities** をオンにし、**Supported Platforms** でDesktop/Webを有効にします。このゲームはキーボードとマウスを前提にしています。
5. Discordのユーザー設定 → **詳細設定 → Developer Mode** をオンにし、音声チャンネルやチャットのApp Launcherから **Heli 1v1** を起動します。友達も同じアクティビティに参加すると、インスタンスIDを使って同じ対戦ルームに入ります。

未認証のアクティビティを友達とテストする場合は、Developer Portalの **App Testers** にその友達を追加し、友達側で招待を承諾してもらいます。必要に応じて友達側で **Application Test Mode** に上記IDを入力します。トンネルのURLは起動ごとに変わるため、変わったらURL Mappingも更新してください。

## 操作

| 操作 | キー |
| --- | --- |
| スロットル（上昇・下降） | W / S |
| ロール（左・右） | Q / E |
| ヨー（左・右） | A / D |
| ピッチ（機首上げ・機首下げ） | 左Shift / 左Ctrl |
| マウス操縦 | 画面クリック後、縦でピッチ・横でヨー。Escで解除 |
| コックピット視点 | 右クリック長押し |
| 機銃・リロード | 左クリック・R |
| フレア | F |
| 無誘導ロケット | 1 |
| ロックオンミサイル | 2（照準内に敵を保持してロック） |

## バランスと拡張

武器、体力、移動、リキャスト、ラウンド数は [`shared/config.js`](shared/config.js) にまとめています。機銃は100発のマガジン、無限リロード、直撃約30発で撃墜です。全部位で体力を共有します。ビル配置は [`shared/map.js`](shared/map.js)、武器判定と対戦進行は [`server/game.js`](server/game.js)、機体・街・エフェクトは [`src/scene.js`](src/scene.js) にあります。

ピッチとロールには角度制限を設けていないため、キーを押し続けると宙返りやバレルロールができます。3人称のレティクルは銃口からの実際の射線と遮蔽物・敵機との交点へ投影しています。
画面右上の「⚙ 操作設定」からマウス感度をスライダーまたは数値で0.2～3.0倍に調整できます。設定はブラウザに保存されます。マウス入力時のヨー・ピッチの最高旋回速度はキー操作と同じです。左Shiftで機首上げ、左Ctrlで機首下げです。

飛行は重力と機体上方向のローター推力で計算します。水平姿勢なら無入力で高度を維持し、傾けると揚力の一部が水平方向へ移り、逆さでは無入力でも降下します。

クライアントからは操作入力だけを送信し、命中、ダメージ、クールダウン、勝敗はサーバーで計算します。公開サービスとして運用する際は、Discord OAuthなどによる参加者認証とレート制限を追加してください。

## 確認

```powershell
pnpm test
pnpm smoke
```

`smoke` は起動中のサーバーに2クライアントで接続する通信テストです。
