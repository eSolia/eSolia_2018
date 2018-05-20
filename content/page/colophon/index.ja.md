---
author: イソリア
date: 2018-05-06T07:07:27+09:00
publishdate: 2018-05-06T07:07:27+09:00
description: イソリア 奥付 - 当サイトが利用するテクノロジー
draft: false
slug: colophon
title: 当サイト奥付
subtitle: 巨人の肩の上にのる矮人
weight: 10
menusection: Site
type: colophonpage
alternatelocales:
  - en-US
tags:
  - 奥付
  - 援用
  - 認知
  - 技術
  - タイポグラフィー
  - ホスティング
  - AWS
  - Route53
  - Webfaction
  - Hugo
  - Go言語
  - Go
  - Humans.txt
  - マークダウン
  - Markdown
  - Bulma
  - Typekit
  - Ryo Gothic
topics:
  - 当サイト
images:
  - /img/hugo-logo.png
  - /img/noto.png
  - /img/webfaction-logo.png
  - /img/eSolia-Chicklet-Color-1024px.png
---

## ヒストリー

<figure class="image is-128x128 is-pulled-left is-hidden-mobile">
<img class="" data-caption="イソリアロゴ" alt="イソリアロゴ画像" src="/img/eSolia-Chicklet-Color.svg" >
</figure>

[巨人の肩の上にのる矮人](https://ja.wikipedia.org/wiki/%E5%B7%A8%E4%BA%BA%E3%81%AE%E8%82%A9%E3%81%AE%E4%B8%8A)という西洋の比喩表現がありますが、このサイトもその例外ではありません。
以前のイソリアのサイトは「Rapidweaver」や「Typo3」にて作成されたものでした。各システムにはそれぞれの強みがありましたが、様々な理由から私達が利用していたそういったシステムには、アップグレードや依存関係などに関連するいくつかの脆弱性がありました。

<figure class="image is-256x256 is-hidden-tablet">
<img class="" data-caption="イソリアロゴ" alt="イソリアロゴ画像" src="/img/eSolia-Chicklet-Color.svg" >
</figure>

## 静的サイトジェネレータ

2014年に当サイトの作成を検討した時には、コンテンツファイル、スクリプトプログラムおよび画像ファイルから簡単に作られる「静的サイトジェネレータ」を考慮しました。
しかしながらこれらのシステムも、利用するための前提条件が多く、完全な開発環境を求めらる次第です。この複雑さは、サーバーやデーターベースを必要とする動的CMSの運用と、同様のものでした。

## ヒューゴについて

そこで、[Hugo](http://gohugo.io)と言う優れた静的サイトジェネレーターを発見し、選定しました。その関連サイトにて、このように紹介される:

> ヒューゴは優れた点はなんといってもスピードとそのパフォーマンスです。サイトを構成するための時間を最短にするための細心の注意が払われており、数秒でほとんどのセットアップが出来てしまいます。

ヒューゴが何故そんなに早いのかというとそれは、WindowsやMac、Linux向けのGo言語で書かれたシングル・バイナリー構成であることが挙げられるでしょう。 ユーザはシステムに沿った一つのファイルをインストールし、そして[マークダウン](https://ja.wikipedia.org/wiki/Markdown) 形式コンテンツ、HTMLテンプレート、CSS、Javascript ファイルで構成されたフォルダを統合するだけです。敢えていうならウェブホストに出来上がったサイトをアップロードする時間よりも、ヒューゴを使いサイトをファイルから作成する方がよっぽど早く完成できてしまいます。その驚くべき早さたるや、ソフトウェアエンジニア達の偉業とも言えるでしょう。

<figure class="">
<img class="" width="400" data-caption="Hugo ロゴ" alt="Hugo ロゴの画像" src="/img/hugo-logo.png" >
</figure>

_Hugoは、イソリア推薦SSGです。_

心から感謝を贈りたいと言う方々がいます。Hugoクリエーターの[スティーブ フランキア 氏](http://spf13.com) ([@spf13](https://github.com/spf13))、開発リードを取っている[ビョーン エリック ペデルセン 氏](http://bep.is) ([@bep](https://github.com/bep))、プロジェクト[関係者の皆様](https://github.com/spf13/hugo/graphs/contributors)、[ディスカッションフォーラム](http://discuss.hugo.io)の方々、そして、[Go言語チーム](http://golang.org/CONTRIBUTORS)の皆様にも。

## 当サイトの見た目

このウェブサイトの外観・デザインは、いくつかのコンポーネントから出来てます。まずは、["Bulma"](https://bulma.io)をベースにしてます。これについて： 

> Bulmaは、Flexboxを基板にして10万人の開発者が使っているオープンソースCSSフレームワークです。

サイト見た目の統一性、又はモバイルユーザのサポートを元にしてます。どんな種類のサイトでも、良いスタート地点です。

フォントですが、主にAdobe Typekitの[Ryo Gothic](https://typekit.com/fonts/ryo-gothic-plusn) を使ってます。[こちらも](https://typekit.com/colophons/fwz4gtk)ご参照に。

アイコンですが、[Font Awesome](https://fontawesome.com/icons?d=gallery)を使ってます。

写真や画像は主にイソリア社長のコグレー昨です。 

## データ

ホームページのショートポスト一覧とプロジェクト一覧は、又、[ニュース一覧](https://esolia.com/post) や [成功事例のプロジェクト一覧](https://esolia.com/success-stories) のパージについて、表示データを弊社のクラウド型データーベースの[PROdb](https://esolia.com/prodb)から引っ張ってます。[お問い合わせ](https://esolia.com/info-request) フォームも、PROdbへデータを書き込んでます。それから、スパム防止対策のため、Google [Re-Captcha](https://www.google.com/recaptcha/intro/android.html)を使ってお問い合わせフォームをスパマーから守ってます。

## ホスティング

このサイトの日本語版も英語版も、[Amazon AWS「S3」](https://aws.amazon.com/jp/s3/?nc1=h_ls) オブジェクトストレージでホスティングし、
同社のコンテンツ配信ネットワーク (CDN)[「CloudFront」](https://aws.amazon.com/jp/cloudfront/?nc1=h_ls)でグローバルにご提供してます。又、[ドメインネームシステム (DNS)](https://aws.amazon.com/jp/route53/what-is-dns/)は堅牢かつ高速な[「Route53」](https://aws.amazon.com/route53/), を利用しています。

このサイトの[レポジトリ](https://github.com/eSolia/eSolia)は[Github(ギットハブ)](https://github.com)にてホストされています。

## 我々は Humans(.txt) だ

[``Humans.txt``](/humans.txt) ファイルをご存知でしょうか。[Humans.txt](http://humanstxt.org)はウェブサイトの奥付（サイト作製には何を実際に使ったかなど）の作る方法を比較的標準化しようとする試みであり、また検索エンジンのクローラープログラムに指示するrobots.txtととも関係してます。

<figure class="">
<img class="" width="400" data-caption="Humans.txt Logo" alt="Humans.txt Logo" src="/img/humans-txt-large-logo2.png" >
</figure>

[クリック](/humans.txt)すると単純なテキストのみの形式で、この奥付ページと基本的に同じ内容の情報が表示されます。

## ありがとう!

通常世の中のウェブサイトはこの様な「どのサービスを利用しているか」などの内容を記載することは多くはないと思いますが、どの様なサイトであれ上記の様な色々なサービスの恩恵を受けて完成されていることを忘れてはいけません。

最後に、沢山の時間を費やししてくれたイソリアのみんなにありがとう。

_さぁ、仕事に戻ろう！_
