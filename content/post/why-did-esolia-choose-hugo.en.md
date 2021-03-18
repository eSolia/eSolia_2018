---
authorkey: rickcogley
author: Rick Cogley
date: 2018-05-01T07:07:27+09:00
description: Why eSolia chose the static site generator Hugo - a blog post from eSolia Inc.
draft: false
slug: why-did-esolia-choose-hugo
layout: post
title: Why Did eSolia Choose Hugo?
subtitle: A static site generator optimized for performance
alternatelocales:
  - ja-JP
tags:
  - Hugo
  - Static Site Generator
  - Performance
  - Cross-platform
  - Security
  - SSG
  - Golang
topics:
  - Site
authors:
  - Rick Cogley
images:
  - /img/eSolia-Post-Hugo-Flow-en.png
  - /img/hugo-logo.png
  - /img/eSolia-Chicklet-Color-1024px.png  
---

{{< blogbox >}}

## The History

eSolia has used various systems to generate and publish our websites over the years. We've used several standalone website "builder" apps that you run on a local PC or Mac, such as Microsoft's FrontPage, IBM Home Page Builder, Macromedia DreamWeaver and Realmac RapidWeaver. And we've used a couple of server-side CMS systems as well: WordPress, Drupal, and Typo3.

However, when a site does not _need_ to be driven by a database, then a class of site known as a "static" site should be more than sufficient. Static websites are comprised simply of html, css, javascript and multi-media files. Many developers author these sites manually, and copy them up to a web server via FTP or SSH for serving.

## Benefits of Static

eSolia has many web pages, but, none of them really _require_ us to use a CMS. If a site has no need for transactions in a database to be driving the content visitors see in a dynamic manner, then why add the overhead of a CMS? We decided to put weight on the superior security and performance of a static site.

A simple comparison between static sites and CMSs is as follows:

_Aspect_  |Static    | CMS
----------|----------|------
_Performance_    |Best       |Lower
_Security_       |Highest    |Lower
_Infrastructure_       |Simpler    |More Complex
_Backup_     |Easy     |More Difficult
_Data Driven_  |No     |Yes
_Content Update_  |Via Files    |Access Dashboard
_Visual Style_   |Any    |Themes
_Upgrades_    |As You Like   |Continual & Fragile

## The Trouble with Some Static Site Generators

These days, open source "static site generators" (SSGs) are all the rage, and use some kind of application you install on your Mac or PC to weave together html template files, content files usually written in markdown, css files for style, javascript scripts for UI tricks, and your media files like photos and videos. The problem with certain SSGs is that you have to install and maintain a programming language like Perl, Ruby or Python on your system, to get them working.

Most SSGs therefore come with the overhead of maintaining a development environment for a required programming language, and all its myriad dependencies. What that really means is the environment has to be _kept_ updated, and that trouble will likely occur when you upgrade or patch the OS. Sometimes, this can get really difficult and irritating. Your site then cannot be updated until you get everything installed just right.

Another potential problem with SSGs is build performance. It may take a fair amount of time to generate the site, because SSGs generally have to iterate through all your files and build each page, every time you update.

## A Solution: Enter Hugo

<figure class="is-pulled-right is-hidden-mobile">
<img class="" width="200" data-caption="Hugo Logo" alt="Graphic of the Hugo Logo" src="/img/hugo-logo.png" >
</figure>

<figure class="is-hidden-tablet">
<img class="" width="200" data-caption="Hugo Logo" alt="Graphic of the Hugo Logo" src="/img/hugo-logo.png" >
</figure>

We did a lot of searching for an SSG which would be easy to use, and fast when building the site. [Hugo](http://gohugo.io), written in the modern "Go" language, fits that requirement perfectly, and is easy to install for Mac, Linux or Windows. The [project](https://github.com/gohugoio) was founded by [Steve Francia](http://spf13.com) ([@spf13](https://github.com/spf13)), the development is led by [Bjørn Erik Pedersen](http://bepsays.com/en/) with [contributions from many](https://github.com/spf13/hugo/graphs/contributors), resulting in an _insanely great_ static site generator in terms of speed and performance.

As a result, most Hugo sites build in milliseconds; in fact it usually takes longer to sync them to your web host (via rsync or ftp) than it does to generate the site files!

Hugo is distributed as a single executable binary file, which you can easily install on Windows, Mac or Linux. There _are_ no dependencies, since it's just the one file, that contains everything you need.

Hugo's open source [community](http://discuss.gohugo.io/latest) is vibrant, [development](https://github.com/gohugoio) is actively proceeding, and we'd love to welcome new users to the fold. Please join in!

## Using Hugo

To use Hugo, a web designer builds html "template" files that reference css and javascript, as well as various variables that Hugo understands (like the title, description or keywords of the page). Content files are written in [Markdown](http://daringfireball.net/projects/markdown/) text format. The designer then simply runs Hugo to merge folders of content text files, into the HTML templates, CSS and Javascript files. The result, in a few milliseconds, is a fully-built website folder that can be transferred to a web host via several standard methods.

<figure class="">
<img class="" width="500" data-caption="Hugo High-level flow" alt="Diagram showing high level flow for Hugo static site generator" src="/img/eSolia-Post-Hugo-Flow-en.png" >
<figcaption><em>Hugo High-level Flow</em></figcaption>
</figure>

## Hugo for eSolia and Client Sites

When we tested various SSGs, we liked Hugo's ease-of-use and excellent performance so much that we decided to re-build a few of our sites, and some client sites using it. So far we have built our main [English](http://esolia.com) and [Japanese](http://esolia.co.jp) sites in it twice, some client sites ([example a](http://j-vad.jp/), [example b](http://j-pvad.jp/en/)), and CEO Rick Cogley's [main](https://rick.cogley.info/) and [live](http://live.cogley.info/) sites. 

### What if You Need Data for your Static Site? 

If data-driven content is needed for your static site, we use our secure cloud database [PROdb](/prodb) for that purpose, displaying for example lists of people, cases, organizations, contact info, orders and so on. Once the link is set up, you can easily manage the lists yourself in our PROdb interface. 

## Ask eSolia

If you're considering Hugo as a solution for re-doing your own website, read about our [web design](/website-design) services, and please feel free to [contact eSolia](/info-request) for professional help.
