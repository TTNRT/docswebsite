---
title: Woodpecker CI
description: This section will go over on using the Woodpecker CI service.
---

:::note
The CI interface is only available for those who requested it. It is not available for public users. If you would like to request access to the CI, contact us using our email!
:::

## Requirements
Before you get excited on using our CI service, please make sure you have following below:

- TTGit account
- Requested an account for it
- Some knowledge on it, including workflows

With that out of the way, let's get started!

## Information
When you think of a workflow, you might say it's like the actions interface, expect it's more easier to operate and interact with. Creating your workflow is easy as it seams! If you want some examples, we got a repository with some you might like! Click [here](https://git.ttnrtsite.me/actions/woodpecker-ci) to find out. Submit an issue if see any problems with them!

## Setting up your repository
First off, you need to add your repository to the interface. In the image below, you can see how we add it to the system.

![ci-addingrepo](/images/ci-addingrepo.gif)

As you can see, it's very straightforward. You just have to connect your account to the service and find what repository you're looking for! If you want to add a secret token, you can do that. Remember to not share your secret!

:::note
If you want every repository that you set to use your token, you have set it in your user settings within the CI interface. Make sure you are using a token that is created from TTGit, in case you are doing push events. The image below will show on doing so.

![ci-secretadd](/images/ci-secretadd.gif)
:::

 
Now that you have added your repository to the CI interface, let's make our workflow!

## Making our workflow
Go back to your repository that you added to the CI interface. You want to add a file to the root folder of your repository, in this case it's website source code. If you want to go a bit more advanced with the CI interface, see the Woodpecker CI docs [here](https://woodpecker-ci.org/docs/intro).

To start off, we'll make a yaml file inside the repository. You should know on how the syntax goes, if not, lookup on Google on doing so. The file should be called `.woodpecker.yml` when you create it. Below is an example on how the workflow would look like.

```yaml
steps:
  greeting:
    image: ubuntu
    commands:
      - echo "Hello there! I'm a pipline that runs on TTGit"
      - echo "Use me for workflows when you need to!"
```

Note that this is a example and you can modify it however you like. For more examples, see [here](https://git.ttnrtsite.me/actions/woodpecker-ci). Once you save it, you are ready to test it out!

## Testing the workflow
Go back to the CI website and find your repository that is containing your workflow file. To run the workflow, you can:

1. When you push a commit
2. Manually running the workflow

For this, we will run it from the CI interface. The image below will show on running it, and the output of the workflow.

![ci-runworkflow](/images/ci-runworkflow.gif)

## Completed
If you made it this far, then congrats! You know on how to use the Woodpecker CI service! Got any questions? Contact our support team!