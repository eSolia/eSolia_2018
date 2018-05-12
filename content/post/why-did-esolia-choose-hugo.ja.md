---
authorkey: rickcogley
author: Rick Cogley
date: 2018-05-01T07:07:27+09:00
publishdate: 2018-05-01T07:07:27+09:00
description: イソリアからのブログポスト、イソリアが何故Hugoと言うサイトジェネレーターを選択したのか。
draft: false
slug: why-did-esolia-choose-hugo
layout: post
title: 何故Hugoを選択したのか?
subtitle: パフォーマンスを重視した静的サイトジェネレータ
postsummary: かつてイソリアは様々なシステムを利用してウェブサイトの作製と公開を行ってきたが、最新のウェブサイト再構築プロジェクトに静的サイトゲネレーターHugoを選択した。ヒューゴは使いやすく、早いでけでなく、Mac、Windows、Linuxへのインストールと管理が容易である。
alternatelocales:
  - en-US
tags:
  - Hugo
  - 静的サイトジェネレータ
  - パーフォマンス
  - クロスプラットホーム
  - セキュリティ
  - SSG
  - Golang
topics:
  - サイト
authors:
  - Rick Cogley
images:
  - /img/eSolia-Post-Hugo-Flow-ja.png
  - /img/hugo-logo.png
  - /img/eSolia-Chicklet-Color-1024px.png  
---

{{< blogbox >}}

## 背景

イソリアはかつて様々なシステムを利用して、当社ウェブサイトを作製し出版してきました。例えば、Microsoft FrontPage、IBM ホームページビルダー、Macromedia DreamWeaverやRealmac Software RapidWeaver等、PCのローカルハードディスクにインストールする「ビルダー」タイプのアプリケーション。また、WordPress、Drupal、Typo3などサーバ側で動作するCMSタイプのシステムも多く利用してきました。

しかし、データベースを必要としないサイトであれば、「静的」サイトゲネレーターで十分なはずです。静的ウェブサイトは、HTML、CSS、Javascript ファイルで構成されています。開発者はこれらのサイトを手動で作成し、FTPやSSHでウェブサーバーにアップし公開します。

## 静的サイトジェネレータの利点

イソリアでは様々なウェブページを管理してますが、特にCMSを必要としていません。データベースを用いてサイトを自動的に発行する必要がなければ、CMSへの投資をする必要がありません。我々は、セキュリティとパーフォマンスが充実した静的サイトを採用しました。

簡単ですが、動的CMSでホストされているものと静的ウェブサイトに関して考慮されるべき事項を次の表に示します。

_項目_  |静的    | 動的CMS
----------|----------|------
_パフォーマンス_    |良い       |中〜高
_セキュリティ_       |非常に良い    |中〜低
_インフラストラクチャ_       |単純    |より複雑
_バックアップ_     |容易     |より難しい
_データ駆動化_  |いいえ     |はい
_コンテンツ更新_  |ファイル単位    |ダッシュボード
_視覚スタイル_   | どの様なものも   |テーマによる
_アップグレード_    |任意   |継続的かつ脆弱

## 一般の静的サイトジェネレータの難しいところ

昨今のオープンソース「静的サイトジェネレータ」(SSG)は、何らかのアプリケーションをMacやPCにインストールして、HTMLテンプレート、CSS、Javascript、メディア ファイルと、マークダウン形式コンテンツを合体させサイトを構成するだけです。SSGの難しいところは、Perl、RubyやPythonのようなプログラミング言語の環境が必要となります。

従ってSSGは、必要な開発環境とその環境に必要なサポートプログラムを管理し続けるオーバーヘッドも負担しなければなりません。面倒なことにOSのアップデートをするだけで環境が破壊される可能性も多いにある。つまり、OSも開発環境も常に最新の状態を保っていなければ、サイトのコンテンツ更新ができない。

もう一つの問題は、サイトの作成にかかる時間です。SSGは一つ一つファイルを見て再構成しなければならないため、時間が必要です。

## どうすれば良い？ Hugoの登場!

<figure class="is-pulled-right is-hidden-mobile">
<img class="" width="200" data-caption="Hugo Logo" alt="Hugo Logo 画像" src="/img/hugo-logo.png" >
</figure>

<figure class="is-hidden-tablet">
<img class="" width="200" data-caption="Hugo Logo" alt="Hugo Logo 画像" src="/img/hugo-logo.png" >
</figure>

当社ではとにかく、「簡単に使える」、「シンプルな開発環境」、「早く構築できる」と言う条件を満たすSSGをじっくり探しました。その条件に合う、モダンなGo言語で開発された[Hugo](http://gohugo.io)と言う優れた静的サイトジェネレータを発見し、選定しました。その上に、簡単にWindows, MacやLinuxにインストールができます。

Hugoクリエーターの[スティーブ フランキア 氏](http://spf13.com) ([@spf13](https://github.com/spf13)) 、リード開発者の[ビョーン エリック ペーデルセン](http://bepsays.com/en/) や、ヒューゴの作成に携わり沢山の苦労を形にしてくれた[関係者の皆様](https://github.com/spf13/hugo/graphs/contributors)が、極めて早いサイトの作製を可能にしたのである。

結果的に、Hugoサイトはミリセカンド単位のファイルから作製される。一般的にはファイル作製の時間よりも、出来上がったファイルをウェブサーバーにアップロードする時間がとても長い！

Hugoは一つの実行可能ファイルで提供されているため、簡単にWindows, MacやLinuxにインストールができます。またその一つのファイルに、必要な物全てが含まれています。

現在、Hugoのオーペンソース [コミュニティー](http://discuss.gohugo.io/latest) がとても良く、[開発](https://github.com/gohugoio) もアクティブに進んでいます。是非ご参考ください。

## Hugoを使うには

Hugoを使うにはウェブデザイナーが、cssとjavascriptやHugoが特別に理解できるコード(ページのタイトル、キーワードなど)を参照するhtmlの「テンプレート」ファイルを作製します。
コンテンツは、[マークダウン](http://daringfireball.net/projects/markdown/)形式のテキストファイルで作ります。

サイトをジェネレーションするには、Hugoを実行することによって数ミリセカンド後、Hugoがコンテンツとテンプレートを統合させて、ファイルがサイトフォルダーに出力されて完成します。最後にそのフォルダーをウェブサーバーに転送します。

<figure class="image-container">
<img class="materialboxed responsive-img" width="500" data-caption="Hugoフロー図" alt="Hugoという静的コンテンツゲネレーションの、ワークフロー図。" src="/img/eSolia-Post-Hugo-Flow-ja.png" >
<figcaption><em>Hugoのフロー図</em></figcaption>
</figure>

## 弊社やお客様サイトにはHugoを使っているか

多くのSSGをテストをした時、Hugoの簡単さとパーフォーマンスに驚き、当社の全てのサイト又はお客様のサイトの構築に使用することとしました。
現状、イソリアの[英語](http://esolia.com) と [日本語](http://esolia.co.jp) のサイト（二回ずつ）、お客様のサイト ([その1](http://j-vad.jp/), [その2](http://j-pvad.jp/))、又はイソリア社長 Rick Cogleyの[メイン](https://rick.cogley.info/) と [ライブ](http://live.cogley.info/)サイト。

### 静的サイトにどうしてもデータが必要な場合にはどうする？

静的ウェブサイトのページに、データの一覧（人、件、組織、住所、注文など）が必要な場合、イソリアのクラウド型データベース[PROdb](/prodb)はおすすめです。セキュリティが強くて、且つ、PROdbにて簡単にご自分自信で管理もできます。

## eSoliaにお任せを!

お持ちのサイトを立て直しご検討中であれば、弊社の[ウェブサイトデザイン](/website-design)ページをご参照にし、ご遠慮なくイソリアに[お任せください](http://esolia.co.jp/info-request)。

