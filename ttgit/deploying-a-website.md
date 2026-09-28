---
description: Follow this quick start guide to host your very own static-based website!
---

# Deploying a website

## General requirements

Before we get started, let's go over the requirements that you need to have!

1. A TTGit account
2. Static files (only HTML-based!)

## Part 1: Repository configuration

### Setting up your repository

To start off, create your repository. You should have the following information for it below.

* Name: `<subdomain>.ttnrtsite.io` or other name (see option 1)
* Branch: `pages`
* Topic: `pages`

Now we need to determine on how you want other users to access your website. This section has two options that you can pick from, depending on how you want your site to display or how you are building it. In addition, your website URL will be determined by whatever method you've used to deploy it.

If you want your website to be hosted as a root directory, your website URL will be `https://<owner>.ttnrtsite.io/<repo_name>/`, but you have to change your repository name to `<owner>.ttnrtsite.io` afterward! If you want to host your website as a directory, your website URL will be `https://<owner>.ttnrtsite.io/`, but you have to change your repository name to whatever name that you can think.

For example, the directory name would be shown as, `sub_path`, and your repository name would have to match the path name you are using. Using this example, the URL would look something like this: `https://user_name.ttnrtsite.io/sub_path/`.

If you have another directory that is located in the path name, you would have to add this at the end of the URL: `index.html`.

As for the variables that are shown here, `owner` is your username, and `repo_name` is the repository name where your website data is located at.

## Part 2: Deploying your website

There is two methods that are available to you in order to deploy your website.

### Method 1: Uploading the files using Git-SCM or the website interface

Before you can start uploading your static files to your repository, make sure that you've set the branch name to `pages` instead of the default one. Once you've added your static files, create a commit and a message with it, and then push your changes.

If you have a large number of files, you should use the Git-SCM interface rather then uploading them using the website interface as there is a file uploading limit in place in order to prevent the website from overloading. If you have only one or two files that you want to upload, you are free to upload them using the website interface instead of using the Git-SCM interface. Either way, you are free to choose which method that works best for you!

### Method 3: Using the CI interface

{% include "../.gitbook/includes/incomplete-section-alert.md" %}

## FAQ

If you have any questions on how to deploy your website to TTGit, here are some you might ask us about it!

{% include "../.gitbook/includes/incomplete-section-alert.md" %}
