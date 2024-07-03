---
author: eSolia
date: 2022-10-21T08:38:37+09:00
description: eSolia Colophon - the technology behind this site.
draft: false
slug: colophon
title: eSolia Colophon
subtitle: On the shoulders of giants.
weight: 10
menusection: Site
type: colophonpage
alternatelocales:
  - ja-JP
tags:
  - Colophon
  - Attributions
  - Acknowledgements
  - Technical
  - Typography
  - Hosting
  - AWS
  - S3
  - Cloudfront
  - Route53
  - Ryo Gothic
  - Typekit
  - Hugo
  - Golang
  - Go
  - Humans.txt
  - Markdown
  - Bulma
topics:
  - Site
images:
  - /img/hugo-logo.png
  - /img/noto.png
  - /img/symbol_darkblue_bgtransparent 2_web.png
---

## History

<figure class="image is-128x128 is-pulled-left is-hidden-mobile">
<img class="" data-caption="eSolia Logo" alt="Graphic of the eSolia Chicklet Logo" src="/img/eSolia-Chicklet-Color.svg" >
</figure>

As they say, we "[stand on the shoulders of giants](https://en.wikipedia.org/wiki/Standing_on_the_shoulders_of_giants "Wikipedia article about etymology of standing on the shoulders of giants")", and this site is certainly no exception. We have built previous eSolia sites in Rapidweaver, Wordpress and Typo3, and the last one using Hugo. 

Other systems have their pluses of course, but for various reasons, each previous system we have used has had some fragility related to matters like upgrades or dependencies.

<figure class="image is-256x256 is-hidden-tablet">
<img class="" data-caption="eSolia Logo" alt="Graphic of the eSolia Chicklet Logo" src="/img/eSolia-Chicklet-Color.svg" >
</figure>

## Static Site Generators

When we were deciding upon a system to build _this_ site in, back in 2014, we considered various systems known as "static site generators", which allow you to weave a static website together from content files, script programs, and image files. However these static systems too have pre-requisites, in that a full development environment is required on the computer used to manage the site. This is as problematic as the requirements of a server-side CMS.

## Go Hugo

Enter [Hugo](http://gohugo.io), a better static site generator, about which we learn:

> Hugo is written for speed and performance. Great care has been taken to ensure that Hugo build time is as short as possible. We're talking milliseconds to build your entire site for most setups.

The reason Hugo's so fast is it's a single, binary program written in the "Go" language, that's been compiled for Windows, Mac and Linux. Users just install a single file appropriate to their system, then run it to merge their folders of content written in [Markdown](http://daringfireball.net/projects/markdown/) text format, HTML templates, CSS and Javascript files.

Let us just say that _it takes far longer to upload the site to our web host, than it does for Hugo to generate it_. Its speed is truly a remarkable software engineering feat.

<figure class="">
<img class="" width="400" data-caption="Hugo Logo" alt="Hugo Logo" src="/img/hugo-logo.png" >
</figure>

_Hugo is eSolia's preferred SSG._

So, a hearty "domo arigato" to Hugo founder [Steve Francia](http://spf13.com) ([@spf13](https://github.com/spf13)), lead developer [Bjørn Erik Pedersen](http://bep.is) ([@bep](https://github.com/bep)), and fantastic [contributors](https://github.com/spf13/hugo/graphs/contributors). Thanks also go to the Go language [team](http://golang.org/CONTRIBUTORS) itself, and the helpful folks on the Hugo [discussion forums](http://discuss.hugo.io)). 

## Site Look

The look of this site comes from a couple of different components.

First, the stylistic base of the site comes from a the css library called ["Bulma"](https://bulma.io). About Bulma: 

> Bulma is an open source CSS framework based on Flexbox and used by more than 100,000 developers.

It allows you to have consistency in your basic styles, responsiveness to support mobile users, and acts as a great starting point for any site.

As for **Type Faces**, the main one is [Ryo Gothic](https://typekit.com/fonts/ryo-gothic-plusn) from Adobe Typekit (see also the auto-generated [colophon](https://typekit.com/colophons/fwz4gtk) for more info). We got some hints also from [Web Typography](http://webtypography.net) as well. 

The **icons** you see are from [Font Awesome](https://fontawesome.com/icons?d=gallery). 

The **photos** and most graphics on this site are by Rick Cogley, unless otherwise noted.

## Data

For the short posts and project lists on the home page, [news archive](https://esolia.com/post) and [success stories](https://esolia.com/success-stories) pages, we are pulling information from our company ERP system running on [PROdb](https://esolia.com/prodb), our cloud database. The [Info Request](https://esolia.com/info-request) form pushes info a table in PROdb as well, to allow for some automation. Additionally, we are protecting the info request form with Google [Re-Captcha](https://www.google.com/recaptcha/intro/android.html). 

## Hosting

This site and its Japanese counterpart are hosted in Amazon AWS object storage [S3](https://aws.amazon.com/S3/) and delivered globally via Amazon's content delivery network (CDN) [CloudFront](https://aws.amazon.com). DNS is hosted on AWS [Route53](https://aws.amazon.com/route53/), a robust and fast DNS service.

The [repository](https://github.com/eSolia/eSolia) for this site is hosted at [Github](https://github.com).

## We're Humans(.txt)

We also have a [``humans.txt``](/humans.txt) file. [Humans.txt](http://humanstxt.org) is an attempt to standardize on a way of making a site colophon, in text format, and plays upon the ``robots.txt`` files that give directives about your site, to the search engine crawler programs that index it.

<figure class="">
<img class="" width="400" data-caption="Humans.txt Logo" alt="Humans.txt Logo" src="/img/humans-txt-large-logo2.png" >
</figure>

[Click](/humans.txt) it, and you'll see the same basic information as on this page, in a simple text only form.

## Thanks!

Sites don't always properly acknowledge contributions, but believe us, _every site on the Internet_ owes a debt of gratitude to many parties, other than the company that did the site design.

Finally, thanks also to team eSolia for the many hours working on content.  

_Now to get back to business!_

