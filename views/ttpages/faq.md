---
eleventyNavigation:
    parent: ttpages
    title: FAQ on TTPages
layout: "website.njk"
---

> Q: What is it about?
>
> A: It's all about hosting static sites using TTGit's API and backend.

> Q: How does it work?
>
> A: The system works as a normal web serve would, expect it gathers data from TTGit to serve data from the repo you are requesting. The program is writen in golang and is proxyed through nginx

> Q: Is there support for custom domains?
>
> A: No. The code that is used for the software has no support for it.

> Q: Can I use static site generators with it?
>
> A: Right now, testing for that is not ready at this time. However, such deployment would use docker based CI interfaces.