---
title: Setting up TTPages
---

Follow this quick start guide to get your site up and running with TTPages.

## General requirements

To get started with this service, you should have:

1. A TTGit account
2. Static files (only HTML-based!)

## Setting up your repository

To start off, create your repository. You should have the following information for it below.

- Name: `<subdomain>.ttnrtsite.io` or other name (see option 1)
- Branch: `pages`
- Topic: `pages`

This section has two options that you can pick from, depending on your setup.

### Option one

Create your repo with any name you like. The repo should have a `pages` branch, along with the `pages` topic. Once you created the repo, you may upload your static data to it. Once done, go to this URL in this form. `https://<owner>.ttnrtsite.io/<reponame>/<path>`

-  `<reponame>` is your repository name
- `<owner>` is your username

### Option two

Create your repo, but with a name like this. `<owner>.ttnrtsite.io`. The repo should also have a `pages` branch, along with the `pages` topic. Once you created the repo, you may upload your static data to it. Once done, go to this URL in this form. `https://<owner>.ttnrtsite.io/`

- `<owner>` is your username

## FAQ
> Q: What is it about?
>
> A: It's all about hosting static sites using TTGit's API and backend.

> Q: How does it work?
>
> A: The system works as a normal web serve would, expect it gathers data from TTGit to serve data from the repo you are requesting. The program is written in golang and is proxyed through nginx

> Q: Is there support for custom domains?
>
> A: No. The code that is used for the software has no support for it.

> Q: Can I use static site generators with it?
>
> A: Right now, testing for that is not ready at this time. However, such deployment would use docker based CI interfaces.