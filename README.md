# sebasque.github.io

My personal site — about, portfolio, and blog. Built with Jekyll, deployed to GitHub Pages by GitHub Actions.

## Writing a post

```bash
./new-post "The title of my post"
```

That creates `_posts/YYYY-MM-DD-the-title-of-my-post.md` with the front matter filled in (and opens it in `$EDITOR` if you have one set). Write markdown below the front matter, then:

```bash
./publish "Add post about X"
```

That commits everything and pushes. GitHub Actions builds the site and it's live in about a minute.

### Front matter

```yaml
---
title: "Post title"
date: 2026-08-12
tags: [one, two]        # optional — these become /tags/ entries
description: One line.  # optional — shows on the blog index and in link previews
---
```

### Images

Put files in `assets/images/posts/` and link them relatively:

```markdown
![Alt text]({{ site.baseurl }}/assets/images/posts/photo.jpg)
```

Or use a `<figure>` with a `<figcaption>` for a caption. Add `class="wide"` to let it spill past the text column.

## Editing the rest of the site

| What | Where |
|---|---|
| Your name, tagline, email, social links | `_config.yml` |
| About page | `index.md` |
| Consulting page | `consulting.md` |
| Portfolio entries | `portfolio.html` |
| Colors, type, spacing | the two `:root` blocks at the top of `assets/css/main.css` |
| Favicon | `assets/favicon.svg` |

The portfolio page is blank for now. `portfolio.html` has a commented-out example of a project block — uncomment it and duplicate it per project. The `.work-entry` styles it uses are already in `assets/css/main.css`.

## Previewing locally (optional)

You don't need this — GitHub builds the site. But if you want a live preview, macOS system Ruby is too old, so install a current one first:

```bash
brew install ruby
```

Add it to your `PATH` (follow the note `brew` prints), then:

```bash
bundle install
bundle exec jekyll serve --livereload
```

Open http://localhost:4000.

## Writing from anywhere

Because the build runs on GitHub, you can also add a post entirely in the browser: go to the repo, `_posts` → **Add file** → **Create new file**, name it `YYYY-MM-DD-slug.md`, paste in front matter and text, and commit. Works from a phone.
