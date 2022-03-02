---
templateKey: 'about-page'
path: /getting_started
title: Mocopaを始める
---

ここではMocopaを使ってBlenderを操作できるようにするまでの一連の流れをご紹介します。

## Mocopaアプリをインストールする
Mocopaを使うためにはAndroid5.1.1以上が搭載されたスマートフォンに専用アプリをインストールする必要があります。GitHubのリポジトリにおいてある.apkをインストールしてください。提供元不明のアプリのインストールとなりますので、使用は**自己責任**でお願いします。

1. Android端末で[Releases Page](https://github.com/simasimataiyo/Mocopa/releases)にアクセスし、Assetsをタップしてリストを開き.apkファイルをダウンロードします。
   
![GitHub Releases Page](/img/tutorial_github_asset.jpg)

2. 「ファイル」アプリ等でダウンロードしたMocopa.apkをタップするとインストールが始まります。提供元不明アプリのインストールのためセキュリティの警告が出ると思います。指示にしたがってインストール許可を設定してください。

## BlenderにI/F Joinerアドオンをインストールする
Mocopaアプリは通信プロトコルにOpen Sound Control(OSC)を用いており、Blenderが動いているコンピュータに対してLAN経由でOSCメッセージと呼ばれるデータを送信します。OSCメッセージはアドレスパターンと引数の二つのデータを格納しており、モジュール毎に固有のアドレスパターンを設定することでどのモジュールからOSCメッセージが送られてきたかを判別できます。

ここではBlender用アドオンI/F Joinerをインストールして、BlenderにOSC通信とOSCメッセージに対するオペレータ(bpy.ops)紐づけ機能を追加します。

![System overall](/img/system_overall.jpg)


1. [Releases Page](https://github.com/simasimataiyo/IFJoiner/releases)から.zipファイルをダウンロードします。
   
![GitHub Release Page](/img/tutorial_github_ifjoiner.jpg)

2. Blenderを起動しトップバーから「Edit」→「Preference」を開きます

![GitHub Release Page](/img/if_002.jpg)

3. Preferenceウィンドウ左側メニューから「Add-ons」→ウィンドウ右上「Install」ボタンをクリックしダウンロードしたzipファイルをインストールします。

![GitHub Release Page](/img/if_003.jpg)
![GitHub Release Page](/img/if_003_2.jpg)

4. 「Community」が選択された状態でInterface: I/F Joinerがアドオンリストに追加されていること確認したら，チェックを入れて有効化します。

![GitHub Release Page](/img/if_004.jpg)

インストールが完了したら、一度Blenderを再起動してください。

## Mocopaの接続先を設定する
Mocopa使用時は、Android端末がBlenderを起動しているPCと同じLANに接続している必要があります。必ずWi-Fiの接続と接続先を確認してください。

Mocopaを起動すると下図の画面が表示されます。
![GitHub Release Page](/img/mocopa_start.jpg)

IP AddressにはBlenderが起動しているコンピュータのローカルIPアドレスを、Port NumberにはI/F Joinerのサーバ設定のポート番号と同じ値を入力します。

コンピュータのローカルIPアドレスとポート番号を確認するには、Blenderの3DViewのプロパティシェルフに追加される「I/F Joiner」タブを開きます。IP Addressには自動的にコンピュータのローカルIPアドレスが入力されているはずです。Port Numberはデフォルトで10000になっています。

![GitHub Release Page](/img/if_005.jpg)

入力が完了したら、「Connect」をタップしてコントローラー画面に移動します。

## コントローラ画面の編集
初期状態のコントローラー画面にはまっさらな状態です。ここにウィジェットを配置し，その上にモジュールが重ねることで使えるようになります。

![Mocopa empty control screen](/img/mocopa_empty_control.jpg)

### グリッドの設定
初回起動時はグリッドの設定を調整することをおすすめします。

右上の黄色いペンボタンをタップすると、編集モードになり2つのボタンとグリッドタイルが表示されます。
「Grid Settings」をタップするとグリッドの設定メニューが開きます。

![Mocopa grid settings](/img/mocopa_grid_settings.jpg)

設定項目は以下の通りです。
- Module Size
  - モジュールの最小サイズは**20mm×20mm**になります。これにあわせて、ディスプレイサイズに関わらずタイルの大きさも自動的に調整されるようになっていますが、多少の誤差が生じることがあります。モジュールを使用する際にはタイルと大きさがぴったりになるように微調整してください。

- Column Count
  - グリッドの列の本数を指定します．
- Row Count
  - グリッドの行の本数を指定します．
- Position
  - グリッドの位置を調整します．X-Coordは横の位置、Y-Coordは縦の位置を指定します。

### ウィジェットの配置とOSCアドレスパターンの指定
ここではおためしスターターセットを使用することを想定して、キーモジュールに対応するボタンウィジェットを配置します。

編集モード中に「Add Module」をタップすると配置できるウィジェットリストが開きます。「Button」をタップすると画面中央にウィジェットが1つ追加されます。

![Mocopa grid settings](/img/mocopa_add_module.jpg)

編集モード中はウィジェットをドラッグすることで移動させることができます。またグリッドタイルにスナップします。

ウィジェットを一回タップするとウィジェット毎の設定メニューが開きます。

![Mocopa grid settings](/img/module_settings.jpg)

- Setting OSC Message
  - OSCメッセージのアドレスパターンを指定します。「/」(スラッシュ)から始まる文字列を入力してください。編集モード中はモジュール右下にアドレスパターンが表示されています。
- Rotate Module
  - ボタンをタップするたび時計回り・反時計回りに90度ずつ回転します。
- Apply
  - 設定できたら必ずタップしてください。設定メニューが閉じます。
- Delete 
  - このモジュールを削除します。

ウィジェットの配置と設定が終わったら、右上の黄色いペンボタンをタップして編集モードから抜けます。

![Mocopa grid settings](/img/mocopa_control_on_btn.jpg)

## I/F Joinerでウィジェットと実行するオペレータの紐づけ

Blenderに戻り、I/F Joinerでウィジェットと実行するオペレータの紐づけを設定します。ここではあらかじめ用意している設定テンプレートファイルを使用しますが、bpyやOSCの知識がある方は手作業で設定することも可能です。詳しくはI/F Joinerの[README](https://github.com/simasimataiyo/IFJoiner)をご覧ください。

1. 先ほどダウンロードしたifjoiner.zipを展開します。展開したフォルダ内にTemplateフォルダが入っています。Templateフォルダを開いて「key_press_and_release.json」があるか確認してください。

![GitHub Release Page](/img/if_007.jpg)

2. I/FJoinerのPreferenceを表示し、「Import Message Map from .json」 をクリックし、上記で確認した「key_press_and_release.json」を指定しインポートします。

![GitHub Release Page](/img/if_008.jpg)

3. Message Map（紐づけ設定）が1つ追加されます。赤線部で囲った部分に、先に設定したウィジェットのアドレスパターンを入力します。

![GitHub Release Page](/img/if_009.jpg)

4. 設定できたら「Save」を押して設定ファイルを保存します。**保存した後に**左下のハンバーガーメニュから「Save Preference」をクリックすると、次回起動時に保存した設定ファイルから自動的に読み込みます。

![GitHub Release Page](/img/if_010.jpg)

## OSCサーバを起動する
全ての設定が一通り完了したので、I/F JoinerのOSCサーバを起動して通信します。

3DViewのプロパティシェルフにある「I/F Joiner」タブを開き、「Start」ボタンをクリックします。「Stop」に変われば起動中です。「Stop」ボタンをクリックするとOSCサーバが停止します。

![GitHub Release Page](/img/if_011.jpg)

## モジュールをAndroid端末に取り付ける
モジュールを組み立ててパネルを作ります。平らな場所に置き、凹凸を合わせて押し込みます。
組み立てたパネルを挟み込むために必ずクリップモジュールを組み込んでください。

![GitHub Release Page](/img/mocopa_module_connect.jpg)

クリップモジュールで端末を挟み込み、ウィジェットとモジュールが重なるように調整します。

![GitHub Release Page](/img/module_on_mocopa.jpg)

キーモジュールを押してBlenderが反応すれば（全選択・全選択解除が起こるはず）成功です！！

## 次の段階に進む
Mocopaを使うための基本的な操作をこれでマスターしました。

MocopaアプリやI/F Joinerのより詳しい情報はAppページやGitHubのページをご覧ください。

[App](/app)

[MocopaのGitHubページ](https://github.com/simasimataiyo/Mocopa)

[I/F JoinerのGitHubページ](https://github.com/simasimataiyo/IFJoiner)

Mocopaのモジュールについて詳しく見るにはModulesページをご覧ください

[Modules](/modules)
