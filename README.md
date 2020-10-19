# Hello tricolor

![Hello tricolor](https://github.com/vendelin8/hugo-theme-hello-tricolor/blob/master/images/screenshot.png?raw=true)

### DEMO - https://themes.gohugo.io/theme/hugo-theme-hello-tricolor/ <a id="demo" />

---

- [Hello tricolor](#hello-tricolor)
  - [DEMO - https://themes.gohugo.io/theme/hugo-theme-hello-tricolor/](#demo)
  - [Source](#source)
  - [Features](#features)
      - [Built-in shortcodes](#built-in-shortcodes)
      - [Code highlighting](#code-highlighting)
      - [Improved RSS Feed](#improved-rss-feed)
  - [How to start](#how-to-start)
  - [How to run your site](#how-to-run-your-site)
  - [How to configure](#how-to-configure)
  - [How to add a cover image to your posts](#how-to-add-a-cover-image-to-your-posts)
  - [How to display the Last Modified Date in your posts](#how-to-display-the-last-modified-date-in-your-posts)
  - [How to hide "Read more" button](#how-to-hide-read-more-button)
  - [Add-ons](#add-ons)
  - [How to (safely) edit the theme](#how-to-edit)
  - [Found a bug?](#bug)
  - [New cool idea or feature](#feature)
  - [`Hello tricolor` theme user?](#hello-tricolor-theme-user)
  - [Sponsoring](#sponsoring)
  - [License](#license)

### Source
This is a fork of [hugo-theme-hello-friend](https://github.com/panr/hugo-theme-hello-friend/). If you prefer a light-dark color scheme without the colorful version, you should try that one instead.

## Features

- **dark/light/colored mode**, depending on your preferences (colored is default, but you can change it)
- great reading experience thanks to [**Inter font**](https://rsms.me/inter/), made by [Rasmus Andersson](https://rsms.me/about/)
- nice code highlighting thanks to [**PrismJS**](https://prismjs.com)
- fully responsive

#### Built-in shortcodes

- **`image`** (prop required: **`src`**; props optional: **`alt`**, **`position`** (**left** is default | center | right), **`style`**)
  - eg: `{{< image src="/img/hello.png" alt="Hello tricolor" position="center" style="border-radius: 8px;" >}}`
- **`figure`** (same as `image`, plus few optional props: **`caption`**, **`captionPosition`** (left | **center** is default | right), **`captionStyle`**
  - eg: `{{< figure src="/img/hello.png" alt="Hello tricolor" position="center" style="border-radius: 8px;" caption="Hello tricolor!" captionPosition="right" captionStyle="color: red;" >}}`
- **`imgproc`** Hugo shortcode for image processing, plus additional **`position`** param [ left | center | right ] (optional).
  - eg: `{{< imgproc "img/hello.png" Resize "250x" center />}}`
  - More detailed info on processing commands at [https://gohugo.io/content-management/image-processing/](https://gohugo.io/content-management/image-processing/)
- **`code`** (prop required: **`language`**; props optional: **`title`**, **`id`**, **`expand`** (default "△"), **`collapse`** (default "▽"), **`isCollapsed`**)
  - eg:
  ```go
  {{< code language="css" title="Really cool snippet" id="1" expand="Show" collapse="Hide" isCollapsed="true" >}}
  pre {
    background: #1a1a1d;
    padding: 20px;
    border-radius: 8px;
    font-size: 1rem;
    overflow: auto;

    @media (--phone) {
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    code {
      background: none !important;
      color: #ccc;
      padding: 0;
      font-size: inherit;
    }
  }
  {{< /code >}}
  ```

#### Code highlighting

The theme is using PrismJS to color your code syntax. All you need to do is to
- indicate if you want to use it as a site or page param `addPrism` AND
- wrap you code like this:

<pre>
```html
  // your code here
```
</pre>

**Supported languages**: bash/shell, css, clike, javascript, apacheconf, actionscript, applescript, c, csharp, cpp, coffeescript, ruby, csp, css-extras, diff, django, docker, elixir, elm, markup-templating, erlang, fsharp, flow, git, go, graphql, less, handlebars, haskell, http, java, json, kotlin, latex, markdown, makefile, objectivec, ocaml, perl, php, php-extras, r, sql, processing, scss, python, jsx, typescript, toml, reason, textile, rust, sass, stylus, scheme, pug, swift, yaml, haml, twig, tsx, vim, visual-basic, wasm.

#### Improved RSS Feed

Some enhancements have been made to Hugo's [internal RSS](https://github.com/gohugoio/hugo/blob/25a6b33693992e8c6d9c35bc1e781ce3e2bca4be/tpl/tplimpl/embedded/templates/_default/rss.xml) generation code.

**A page's cover image now appears at the top of its feed display**. This image is set manually using [the cover params](#how-to-add-a-cover-image-to-your-posts). If unset, the RSS generator searches for the first image file in the page bundle whose name includes 'featured', 'cover', or 'thumbnail'.

**You can optionally display the full page content in your RSS feed** (default is Description or Summary data from Front Matter). Set `rssFullText = true` in your `config.toml` file to enable this option.

**You can choose a site image to be displayed when searching for your RSS feed.** Set `rssImage = "image/url/here"` in your `config.toml` file to enable this option.

## How to start

You can download the theme manually by going to [https://github.com/vendelin8/hugo-theme-hello-tricolor.git](https://github.com/vendelin8/hugo-theme-hello-tricolor.git) and pasting it to `themes/hello-tricolor` in your root directory.

You can also clone it directly to your Hugo folder:

```bash
$ git clone https://github.com/vendelin8/hugo-theme-hello-tricolor.git themes/hello-tricolor
```

If you don't want to make any radical changes, it's the best option, because you can get new updates when they are available. To do so, include it as a git submodule:

```bash
$ git submodule add https://github.com/vendelin8/hugo-theme-hello-tricolor.git themes/hello-tricolor
```

⚠️ **The theme needs at least Hugo version 0.74.x**.

## How to run your site

From your Hugo root directory run:

```
$ hugo server -t hello-tricolor
```

and go to `localhost:1313` in your browser. From now on all the changes you make will go live, so you don't need to refresh your browser every single time.

## How to configure

The theme doesn't require any advanced configuration. Just copy:

```toml
baseurl = "/"
languageCode = "en-us"
theme = "hello-tricolor"
paginate = 5

[params]
  # dir name of your blog content (default is `content/posts`).
  # the list of set content will show up on your index page (baseurl).
  contentTypeName = "posts"

  # "light", "dark" or "colored"
  defaultTheme = "colored"

  # if you set this to 0, only submenu trigger will be visible
  showMenuItems = 2

  # Show reading time in minutes for posts
  showReadingTime = false

  # Show table of contents at the top of your posts (defaults to false)
  # Alternatively, add this param to post front matter for specific posts
  # toc = true

  # Show full page content in RSS feed items
  #(default is Description or Summary metadata in the front matter)
  # rssFullText = true

[languages]
  [languages.en]
    title = "Hello tricolor"
    subtitle = "A simple colored theme for Hugo"
    keywords = ""
    copyright = ""
    menuMore = "Show more"
    writtenBy = "Written by"
    readMore = "Read more"
    readOtherPosts = "Read other posts"
    newerPosts = "Newer posts"
    olderPosts = "Older posts"
    minuteReadingTime = "min read"
    dateFormatSingle = "2006-01-02"
    dateFormatList = "2006-01-02"
    # leave empty to disable, enter display text to enable
    # lastModDisplay = ""

    [languages.en.params.logo]
      logoText = "hello tricolor"
      logoHomeLink = "/"
    # or
    #
    # path = "/img/your-example-logo.svg"
    # alt = "Your example logo alt text"

    [languages.en.menu]
      [[languages.en.menu.main]]
        identifier = "about"
        name = "About"
        url = "/about"
      [[languages.en.menu.main]]
        identifier = "showcase"
        name = "Showcase"
        url = "/showcase"
```

to `config.toml` file in your Hugo root directory and change params fields. In case you need, here's [a YAML version](https://gist.github.com/panr/8f9b363e358aaa33f6d353c77feee959).

**NOTE:** Please keep in mind that currently main menu doesn't support nesting.

### Easy to colorize

You can customize layout style like the following. Create a subitem with a name
- `index` for the main page
- `list` for any list of posts other than index
- `single` for a single post
- `terms` for taxonomy pages
- `_404` for 404.html

There you can add custom styling.

- `backgroundImage` sets css background-image
- `backgroundColor` sets css background-color. If neither `backgroundImage`, nor `backgroundColor` is set, there's a default color for each layout type
- `color` sets css text color
- `bodyStyle` will be written into the body whith the colored theme, eg. if you want not to repeat the background, you should do it here
- `style` is for any other styling in that layout type, eg. if you want an overlay for making the post readable, you should do it here
- `styleSheet` my contain a filename with additional css. The ending `.css` is not needed. You should consider it if you have heavy css code that would be hard to maintain condensed to a line

Example:

```toml
  [params.index]
    backgroundImage = "img/main/index.jpg"
    backgroundColor = "rgba(0, 140, 8, 0.5)"
    color = "white"
```

will set a background-image, background-color, and color for the index page.

One more possibility is to give custom stylesheet to distinct pages. That case, just set the `styleSheet` parameter before the content as the title and date.

The 404 Not found page can be localized with this feature to a single language or customized to speacial strings
Example:

```toml
  [params._404]
    backgroundImage = "img/main/404.jpg"
    backgroundColor = "rgba(255,140,0,0.5)"
    color = "white"
    title = "These are not the droids you're looking for..."
    subTitle = "Nothing to see here, please move along"
    tagsHeader = "What you're looking for maybe these tags will help you find."
```

## How to add a cover image to your posts

Adding a cover image to your post is simple and there are two options when you edit your `index.md` file in `content/posts/blog-entry-xy/index.md`:

* Use `cover = "/path/to/absolute/img.jpg"` to link an absolute image
  * Resulting in `https://www.yourpage.com/path/to/absolute/img.jpg`
* Use `cover = "img.jpg"` and `useRelativeCover = true` to link the image relative to the blog post folder
  * Resulting in `https://www.yourpage.com/posts/blog-entry-xy/img.jpg`
* Use `coverAlt = "description of image"` to add custom alt text to the cover image (defaults to post or page title as alt text)
* Use `coverCaption = "Image Credit to [Barry Bluejeans](https://unsplash.com/)"` to add a caption for the cover image.

## How to display the Last Modified Date in your posts

Add `lastModDisplay = "[your display text]"` to `config.toml` to enable last modified date on your posts. Note - an empty string value `""` does not display anything.

Example: `lastModDisplay = "Modified:"` --> "Modified: Jan 01, 0001"

:octocat: Hugo's `enableGitInfo` option is a nice complement to this feature.

## How to hide "Read more" button

In a post's front matter you have to add `hideReadMore` param set to `true`. This will result in that the post won't have "Read more" button in the list view.

## Add-ons

- **Archive** — Theme has built-in `archive` page for main content (see `contentTypeName` variable in config). If you need archive on your blog just copy https://github.com/vendelin8/hugo-theme-hello-tricolor/blob/master/exampleSite/content/archive.md to your `content` dir. If you need multilangual archives, duplicate `content/archive.md` and add `.Lang` variable, eg: `content/archive.pl.md` (remember to change `url` in duplicated file).
- **Comments** — for adding comments to your blog posts please take a look at `layouts/partials/comments.html` https://github.com/vendelin8/hugo-theme-terminal/blob/master/layouts/partials/comments.html.
- **Prepended `<head>`** — if you need to add something inside `<head>` element, and before any of the theme's `<script>` and `<link>` tags are declared, please take a look at `layouts/partial/prepended_head.html` https://github.com/vendelin8/hugo-theme-hello-tricolor/blob/master/layouts/partials/prepended_head.html
- **Extended `<head>`** — if you need to add something inside `<head>` element, after all of all of the theme's `<script>` and `<link>` tags are declared, please take a look at `layouts/partial/extended_head.html` https://github.com/vendelin8/hugo-theme-hello-tricolor/blob/master/layouts/partials/extended_head.html
- **Extended `<footer>`** — if you need to add something before end of `<body>` element, please take a look at `layouts/partial/extended_footer.html` https://github.com/vendelin8/hugo-theme-hello-tricolor/blob/master/layouts/partials/extended_footer.html

## How to (safely) edit the theme <a id="how-to-edit" />

If you have to override only some of the styles, you can do this easily by adding `static/style.css` in your root directory and point things you want to change.

To change something directly in the theme, you have to go to `themes/hello-tricolor` and modify the files.

First, you need to install Node dependencies. To do so, go to the theme directory (from your Hugo root directory):

```bash
 $ cd themes/hello-tricolor
```

 then run:

 ```bash
 $ npm install
 $ npm i yarn
 $ yarn
 ```

After you modified the files you can run webpack in watch mode:

```bash
$ yarn dev
```

or rebuild theme

```bash
$ yarn build
```

To see the changes (remember to restart `hugo server`).

## Found a bug? <a id="bug" />

If you spot any bugs, please use [Issue Tracker](https://github.com/vendelin8/hugo-theme-hello-tricolor/issues) or create a new [Pull Request](https://github.com/vendelin8/hugo-theme-hello-tricolor/pulls) to fix the issue.

## New cool idea or feature? <a id="feature" />

The theme is in constant development since 2019 and has got many cool features that helped many of you and made the theme better. But there were also many features that I wasn't sure about because I want to keep the theme as simple as possible.

So, let's say you have an idea of how to extend the theme. That's cool and you're welcome to do that, just follow these steps:

- fork the theme
- implement the feature
- write an instruction how to use the feature
- give a working example of the implementation for other users
- add info about your work to `COMMUNITY-FEATURES.md`
- make a PR with edited `COMMUNITY-FEATURES.md`

This will help keeping the theme close to its roots, and also allow anyone who wishes to improve it and match their needs, to do whatever they want.

Sounds OK? Cool, let's rock! 🤘

## `Hello tricolor` theme user?

I'd be happy to know more about you and what you are doing. If you want to share it, please make a contribution and [add your site to the list](https://github.com/vendelin8/hugo-theme-hello-tricolor/blob/master/USERS.md)! 🤗

## License

Copyright © 2020 Gergely Bódi (@vendelin8)

Original project copyright © 2019-2020 Radosław Kozieł (@panr)

The theme is released under the MIT License. Check the [original theme license](https://github.com/vendelin8/hugo-theme-hello-tricolor/blob/master/LICENSE.md) for additional licensing information.
