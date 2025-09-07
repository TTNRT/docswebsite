---
title: Deployment configs
description: Here are some deployment configuration examples on whatever static site generator that is supported by TTPages.
---

## Jekyll
```yaml
steps:
    build_site:
        image: ruby
        when:
            - event: manual
            - event: push
        commands:
            - chmod -R a+w .
            - gem install bundler
            - bundle install
            - bundle exec jekyll build
    push_site:
        image: git.ttnrtsite.me/actions/woodpecker-deploypages:latest
        when:
            - event: manual
            - event: push
        settings:
            files: _site
            username: username
            token:
                from_secret: token
            email:
                from_secret: email
            repo: username/username.ttnrtsite.io
```

## Eleventty
:::note
This section is incomplete!
:::

## Hugo
:::note
This section is incomplete!
:::

## AstroJS
```yaml
steps:
    build_site:
        image: node
        when:
            - event: manual
            - event: push
        commands:
            - chmod -R a+w .
            - npm i
            - npm run build
            - rm -rf node_modules
    push_site:
        image: git.ttnrtsite.me/actions/woodpecker-deploypages:latest
        when:
            - event: manual
            - event: push
        settings:
            files: dist
            username: username
            token:
                from_secret: token
            email:
                from_secret: email
            repo: username/username.ttnrtsite.io
```

## NextJS
:::note
This section is incomplete!
:::

## NuxtJS
:::note
This section is incomplete!
:::