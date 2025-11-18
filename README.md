# TTNRT Developer Documentation
The source code for our documentation website.

## Information
- Deploys to Cloudflare Workers
- Uses Markdown for the pages
- Uses Astro
    - Uses the Starlight template

## How to install it

### Running in Development mode
To run the website in development mode, type in the following command below!

```bash
npm run dev
```

### Building the website for production
To build the website data, type in the following command below!

```bash
npm run build
```

## Deployment
This website is deployed to GitHub Pages, a helpful system that allows us to host the website in it's static form and is the most trusted system on the internet that most people are relying on! If you are going to deploy your own version of this website, please follow the steps that are stated below!

1. Create your own fork of this repository or download it as a archive file and add it's contents to your new repository
2. Configure your domain that you will be using to host it on the internet. Since this repository contains a `CNAME` file in the `public/` directory, this step will be split into two parts.
    - Delete the `CNAME` file from the `public/` directory and then change the domain configuration in the configuration file. See more in this [section](#domain-configuration) to learn more about it!
    - Change the contents of the `CNAME` file in the `public/` directory to your own custom domain then change the domain configuration in the configuration file. See more in this [section](#domain-configuration) to learn more about it!
3. Commit your changes and you're done! Your site should be deployed to GitHub Pages in no time!

## Domain configuration
> [!NOTE]
>
> This section is incomplete! Please refer to the documentation for it [here](https://docs.astro.build/en/guides/deploy/github/) on the AstroJS website!

## Contributing to the documentation

> [!NOTE]
>
> The page for editing our documentation is not finished yet! If you want to suggest edit to a page, please contact us via email or by submitting an issue to this repository!

If you want to help out in improving our documentation, please see the page for it [here](src/content/docs/polices//contributions/editing-our-documentation.md)

## See it in action
The website can be found here: [docs.ttnrtsite.me](https://docs.ttnrtsite.me)
