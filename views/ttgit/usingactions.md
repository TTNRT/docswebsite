---
eleventyNavigation:
    parent: ttgit
    title: Using Actions
layout: "website.njk"
---

The use Gitea Actions (now called TTGit Actions) is a way to automate workflows much easier, rather than pushing files yourself to your repository. This service is **free without any charges**, which means that we will not pay or have usage on your account when using this service.

### Preparing your runner

For the use of TTGit Actions, you will need a runner, along with Docker installed on your computer. You should already have access to the actions tab in either your account page, or inside your repository, whatever one that suits you the best. Go to your account page, click on the "Actions" tab, and click on the "Runner" option.


![](/images/Actions_runner1.PNG)

In the runners page, you cans see that you have no runners listed on your account. To add one, you need get your registration token from the "Create new runner" dropdown button. The image below shows what it will look it on your screen.

![](/images/Actions_runner2.PNG)

If you click on the "How to start a runner" button, you will be redirected to the Gitea Docs site to setup your runner. In this case, we will use some parts of that page and use it here for a better process. If you lost your token, you can always click on the "Reset registration token" button to reset. Always make sure you copy it using the clipboard button next to your token. Keep note of it for the following steps.

### Downloading the runner

TTGit Actions uses a executable to run your runner. To download it to your computer, click [this](https://dl.gitea.com/act\_runner/) to get your runner file. Keep in mind that you need to specify your Operating System you are using. In this case, we will choose the Linux version.

{% admonition "info" %}
In case if you are using the Linux version, make sure you pick the correct architecture based on your system processer. For example, if your system is a Raspberry Pi, choose the ARM version. Otherwise, pick the AMD64 version. This also goes if you are using a Apple device.
{% endadmonition %}

It is recommended to download the latest version of the runner executable. Download your runner file to any location of your choosing.

{% admonition "warning" %}
Since the executable is marked as non-executable, you should use the `chmod` command (if using linux) to allow it to run correctly! The command will look like this:

```bash
chmod +x act_runner-x.x.x-linux-amd64
```
{% endadmonition %}

Once you downloaded your file and allowed it to execute, you can now register your runner!

### Registering your runner