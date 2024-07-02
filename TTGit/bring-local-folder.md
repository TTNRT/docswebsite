# Bring a local folder to remote repo

This page will discuss on how to add your local folder to your remote Git repo from TTGit. For this to work you should have the following:

* A repository on TTGit
* A local folder to work with
* Your account username and password
* The git-scm client

### Creating your folder

To start off, you should have a empty folder created somewhere on your computer. Keep it safe to protect your privacy. Once you have on, you can open a terminal interface app and go into the folder. For this tutorial, we are using Linux. Once your inside the folder, go to your TTGit profile and select your repository that you want to use.

### Initialize the local directory

Once you find your repository you are going to use, go back to your terminal app and type in this command.

{% hint style="info" %}
Make sure to have the Git client installed! If you don't have it, go the official website and install it for your correct operating system.&#x20;
{% endhint %}

```bash
git init
```

After you have initialize your folder with git, you can add your files. To do this, type these commands.

```bash
git add .
```

```bash
git commit -m "My first ever commit!"
```

You can change the message to whatever you want. It's best to keep it formal if you have group that works on project or something.

### Remote the repo

Once you have your data inside the commit, you are ready to add your repository to your folder. Go back to TTGit with your repository opened. Find the URL of the repository near the 3 dots button. It should look something like this.

<figure><img src="../.gitbook/assets/git-url.png" alt=""><figcaption><p>Figure 1: Git URL example</p></figcaption></figure>

Copy that URL and keep note of it. Once you have it, go back to your terminal app and type this command.

{% hint style="warning" %}
Make sure to have your username and email for authorizing to push your commit. If you didn't do it yet, follow our "Setup your Git client" guide before proceeding.
{% endhint %}

```bash
git remote add origin <remote repository URL>
```

Replace `<remote repository URL>` with your URL you kept note of. You should also verify your remote origin as well. Type this command to do so.

```bash
git remote -v
```

### Push your changes

It's time to push your changes! Before doing so, let's look at your branch name. Your branch name is important when pushing your changes. The default name is `main` . If your branch name is different, change the name with this command.

```bash
git branch -m YOUR_BRANCH_NAME
```

And then push it to that branch you created.

```bash
git push origin -u YOUR_BRANCH_NAME
```

If you don't have to change anything, you can push your changes using the command below.

```bash
git push origin master
```

### Troubleshooting

If you end up with errors like "Updates were rejected because the remote contains work that you do not have locally", this is normally because that the remote repo is recently created manually. Make sure you are not overwriting anything on the remote end before you force push local git folder to it using. You can fix it using this flag with your push command. It would look like this.

```bash
git push origin -u -f YOUR_BRANCH_NAME
```

If you also want to add a branch without the need of using the push command while committing your changes, you can use this command below, which will allow you to checkout your changes without the need of using the `-u` part of the git command. Make sure to change the branch name to the one you put in for your repo after creating it.

```bash
git checkout -b main
```

### Sources

* [Rejected updates](https://stackoverflow.com/questions/39399804/updates-were-rejected-because-the-tip-of-your-current-branch-is-behind-its-remot)
* [Bring local folder to git](https://superuser.com/questions/1412078/bring-a-local-folder-to-remote-git-repo)