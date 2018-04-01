---
authorkey: rickcogley
author: Rick Cogley
date: 2015-08-12T16:20:15+09:00
publishdate: 2015-08-12T16:20:15+09:00
description: イソリアから、eSolia.proのブログポスト、イソリアが何故Hugoと言うサイトジェネレーターを選択したのか。
draft: false
slug: why-did-esolia-choose-hugo
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

## Hugoの登場

<figure class="image-container">
<img class="materialboxed right responsive-img" width="300" data-caption="Hugo Logo" alt="Hugo Logo" src="/img/hugo-logo.png" >
</figure>

当社ではとにかく、「簡単に使える」、「シンプルな開発環境」、「早く構築できる」と言う条件を満たすSSGをじっくり探しました。その条件に合う、モダンなGo言語で開発された[Hugo](http://gohugo.io)と言う優れた静的サイトジェネレータを発見し、選定しました。

Windows、Mac、Linux等複数のOS向けにインストールが容易なアプリケーションとして提供されているだけなく、Hugoクリエーターの[スティーブ フランキア 氏](http://spf13.com) ([@spf13](https://github.com/spf13)) とヒューゴの作成に携わり沢山の苦労を形にしてくれた[関係者の皆様](https://github.com/spf13/hugo/graphs/contributors)が、極めて早いサイトの作製を可能にしたのである。

結果的に、Hugoサイトはミリセカンド単位のファイルから作製される。一般的にはファイル作製の時間よりも、出来上がったファイルをウェブサーバーにアップロードする時間がとても長い！

Hugoは一つの実行可能ファイルで提供されているため、簡単にWindows, MacやLinuxにインストールができます。またその一つのファイルに、必要な物全てが含まれています。

## Hugoを使うには

Hugoを使うにはウェブデザイナーが、cssとjavascriptやHugoが特別に理解できるコード(ページのタイトル、キーワードなど)を参照するhtmlの「テンプレート」ファイルを作製します。
コンテンツは、[マークダウン](http://daringfireball.net/projects/markdown/)形式のテキストファイルで作ります。

サイトをジェネレーションするには、Hugoを実行することによって数ミリセカンド後、Hugoがコンテンツとテンプレートを統合させて、ファイルがサイトフォルダーに出力されて完成します。最後にそのフォルダーをウェブサーバーに転送します。

<figure class="image-container">
<img class="materialboxed responsive-img" width="500" data-caption="Hugoフロー図" alt="Hugoという静的コンテンツゲネレーションの、ワークフロー図。" src="/img/eSolia-Post-Hugo-Flow-ja.png" >
<figcaption><em>Hugoのフロー図</em></figcaption>
</figure>

## イソリアのウェブサイトのどこでHugoを使っているか

多くのSSGをテストをした時、Hugoの簡単さとパーフォーマンスに驚き、当社の全てのサイトの構築に使用することとしました。現状、[英語](http://esolia.com) と [日本語](http://esolia.co.jp) のサイトや、ブログ[eSolia.pro](http://esolia.pro) でも使用されています。

2015年現在、Hugoのオーペンソース [コミュニティー](http://discuss.gohugo.io/latest) がとても良く、[開発](https://github.com/spf13/hugo) もアクティブに進んでいます。是非ご参考ください。

又、あなたのサイトをHugoで立て直したければ、ご縁量なくイソリアに[お任せください](http://esolia.co.jp/info-request)。
