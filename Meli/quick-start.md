# Quick start

## Preparing your repository

For the use of Meli pages, you should have the following below:

* Access to the Woodpecker Ci service
* A repo with static files (can be from a generator, if possible)

## Creating your site

Head over to the Meli site: [https://meli.ttnrtsite.me](https://meli.ttnrtsite.me). You should then login using the Gitea login method. Once you are logged in, create your organization as shown below.

![](/images/Melicreateorg.PNG)

Once you created your org, you can now create your site. Click on the "+" icon as shown below.

![](/images/MeliCreatesiteadd.PNG)

You can name your site anything you want, as long as you can access it. Create it using the image below.

![](/images/Melicreatesite.PNG)

After you created your site, create a branch named anything you want. Once done, you should keep note on your token created for you. The token is located in the "Tokens" tab. The name will be "first token". Copy your token, as you will need it for uploading your site. You should also have your site id as well. You can find it by clicking on the "How to upload" button inside your branch.

!!!warning Warning
Don't share your token with anyone! For your security, you should keep it in a safe place to keep it out from others!
!!!

## Uploading your files

Since Meli comes with a cli system that doesn't really use the actions system, we came up with two methods to push your site to the system.

1. Using the Woodpecker CI (faster)
2. Using a local computer (easier, but more differnet)

#### Using the woodpecker CI

!!! Notice
Make sure you have access to the CI interface. If not, give us an email and we will grant you access to the service.
!!!

You should already have a repo created with your static files pushed it. To start off, create a file inside the root folder. The name should be like this: `.woopeckerci.yml`

Once you created this file, you can add your commands needed to push your files to Meli. Below is an example of what it would look like.

```yaml
pipeline:
  build:
    # Use the official jekyll build container
    image: node
    secrets: [ cbtoken, cbmail ]
    commands:
      # Avoid permission denied errors
      - chmod -R a+w .
      # Set up git in a working way
      - git config --global --add safe.directory /woodpecker/src/git.ttnrtsite.me/<username>/<reponame>.git/<folder>
      - git config --global user.email "$CBMAIL"
      - git config --global user.name "CI Builder"
      # clone and move the target repo
      - git clone https://git.ttnrtsite.me/<username>/<reponame>.git
      - mv <reponame> <folder>
      - chmod -R a+w .
      - npx @getmeli/cli upload --url https://meli.ttnrtsite.me --site <site_id> --token <token> <folder>
```

You need to replace the following below

1. \<reponame> with your repo name
2. \<username> with your account username
3. \<folder> with your folder of choice
4. \<site\_id> with your site id you copied earlier.
5. \<token> with your token you also copied earlier

Once you made your changes, commit them to your repo. Go to the CI site and login using the Gitea login. Go to your repo you assigned to the CI. If your pipeline was successful, go back to the Meli site. You should see your site URL already working for you.

#### Using your local computer

!!! Notice
For this method to work, you need to have NodeJS installed on your computer. You can Google on how to do that.
!!!

For uploading your site, you need to have a folder with your static site data inside. Open a command line session where your static data is located. If you click on the "How to upload" button, you will get a command to upload your files. The command will look like this.

```bash
npx @getmeli/cli upload \
    --url https://meli.ttnrtsite.me \
    --site <site_id> \
    --token <token> \
    <path>
```

Note that your site id is already put in for you. You also need to note on your folder where your static files are located. For this, our folder is named "public". Run the command inside the command prompt you opened. If the command was successful, your site should be online!

## Sources

* [Meli docs](https://docs.meli.charlie-bravo.be/)