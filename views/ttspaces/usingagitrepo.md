---
eleventyNavigation:
    parent: ttspaces
    title: Using a git repository
layout: "website.njk"
---

# Using a git repository
This page will cover on how to use your git providers with TTSpaces.

## Supported right now
Right now, we support any git source control provider that allows users to push their code with massive changes. Your devspace has git-scm preinstalled to utilize this function. Some providers that can be used are:

- GitHub
- GitLab
- TTGit
- Gitea
- Codeberg
- Forgejo

Some of these may require you to have a token if they require that, so you should their instructions if that is the case.

## Setting up your folder
If you followed our "Bring local folder" page, this section will apply to it. For this example, we will use a repository created on TTGit. Again, it doesn't matter which provider you are using, just as long you have their required way of authenticating with them.

Let's start off with cloning the repository.

```bash
git clone (repo to clone)
```

Once you have your cloned repository, open the folder containing your code. To make this work in the IDE editor, it's pretty straight forward. Click the hamburger icon on the sidebar to the left. Then click File --> Open folder. Find your folder with the cloned data. Once you found it, click "Ok" and it will open the folder inside the IDE editor. 

## Configuring Git
Before you commit any of your changes, you need to set up your git credentials. This includes your email and username, along with either using a password (not really recommended) or a fine-grine token (recommended). Follow our "setup git client" guide before you continue!

## Pushing your changes
Once you have your folder set up, you are ready to push your changes! For this guide, we'll use the terminal to push them. Note that the IDE editor has it's own git source control plugin, but that is up to you. Use on of the commands below to push your changes.

```bash
# Standard way
git push origin -u YOUR_BRANCH_NAME

# In case of errors
git push origin -u -f YOUR_BRANCH_NAME
```