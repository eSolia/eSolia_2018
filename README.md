# eSolia Inc English and Japanese Sites

README for our <https://esolia.com> & <https://esolia.co.jp> sites. 

Circle CI Status: [![CircleCI](https://circleci.com/gh/RickCogley/eSolia_2018.svg?style=svg)](https://circleci.com/gh/RickCogley/eSolia_2018)

## Latest iteration

As they say, we "[stand on the shoulders of giants](https://en.wikipedia.org/wiki/Standing_on_the_shoulders_of_giants "Wikipedia article about etymology of standing on the shoulders of giants")", and our site is no exception.

This iteration can be summarized as follows: 

* Still using the world's fastest static site generator "Hugo" to generate the site from templates, css, javascript and images. 
* Using Bulma CSS library, with extensions and custom components.
* Using Ryo Gothic for the type face, via Adobe Typekit. 
* Connecting to eSolia [PROdb](https://esolia.com/prodb) for data.  
* Using the Mac app Codekit to compile SCSS and Javascript.
* Photography and Graphics by eSolia CEO [Rick Cogley](http://rick.cogley.info). 
* Using local search powered by [Fuse.js](http://fusejs.io/), instead of Google Search.

### Go Hugo

[Hugo](http://gohugo.io) is a Static Site Generator, which makes it trivial to use html "templates" to merge your css, javascript, images and content written in the [Markdown](http://daringfireball.net/projects/markdown/) format, into a publishable website.

About Hugo, we learn:

> Hugo is written for speed and performance. Great care has been taken to ensure that Hugo build time is as short as possible. We're talking milliseconds to build your entire site for most setups.

In fact, it takes far longer to upload the site to your web space than it does for Hugo to generate it. At the very least, it saves you time and money in CI build minutes! 

Hugo is downloadable as a single binary file, written in Go, which means it will run on just about any platform, just by running the file. There are no complex installations and dependencies to deal with.

Hugo is eSolia's preferred SSG. 

### Site Look

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

The [repository](https://github.com/RickCogley/eSolia_2018) for this site is (obviously) hosted at [Github](https://github.com).

## TL;DR Thanks!

_Warm thanks and regards to:_

* Hugo Team - founder [Steve Francia](http://spf13.com) ([@spf13](https://github.com/spf13)), lead developer [Bjørn Erik Pedersen](http://bep.is) ([@bep](https://github.com/bep)), and fantastic [contributors](https://github.com/spf13/hugo/graphs/contributors). Thanks also go to the Go language [team](http://golang.org/CONTRIBUTORS) itself, and the helpful folks on the Hugo [discussion forums](http://discuss.hugo.io)).
* Bulma - by css guru [Jeremy Thomas](https://jgthms.com) ([@jgthms](https://github.com/jgthms)), extensions by [Wikiki](https://wikiki.github.io/form/slider/). 
* Ryo Gothic Plus by Grand Master [Masahiko Kozuka](https://typekit.com/designers/masahiko-kozuka) and new talent [Ryoko Nishizuka](https://typekit.com/designers/ryoko-nishizuka). 
* [Eddie Webb](https://edwardawebb.com/), [Kaushal Modi](https://scripter.co/), and [Josh Habdas](https://hackcabin.com/) for the various tutorials on implementing local site search in Fuze.js. 
* Bryan Jones for [CodeKit](https://codekitapp.com/about/).
* Joe Lust for [this tutorial](https://lustforge.com/2016/02/27/hosting-hugo-on-aws/) on S3 and CloudFront hosting, and to [Bjørn Erik Pedersen](http://bep.is) for [s3deploy](https://github.com/bep/s3deploy), making it super simple to put your changed site files on your local hard drive up to S3. 

## License

### Text Content License

Unless otherwise noted, the text content on this site is copyright eSolia Inc.

### Source License

Unless otherwise noted, the source content on this site is released under the [MIT License](http://opensource.org/licenses/MIT). 



