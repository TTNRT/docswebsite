# TTNRT Docs
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
This website is deployed to Cloudflare Workers, a helpful system that allows us to host the website in it's static form and is the most trusted system on the internet that most people are relying on! If you are deploying your own version of this site to a worker, you can add your own version of this repository via the Cloudflare dashboard, or you can use the Wrangler CLI command!

> [!WARNING]
>
> Please make sure that you have changed the `wrangler.toml` file that is located in the root folder of the repository! Ensure that you have a domain that is on the Cloudflare network and is able to be accessed by the workflow system! The file should look like this.
> ```toml
>   name = "documentation-site"
>   compatibility_date = "2025-05-25"
>   preview_urls = true
>   routes = [
>       {pattern = "yourdomain.com", custom_domain = true }
>   ]
>
>   [assets]
>   directory = "./dist"
> ```

### Installing the packages
First of all, you need to install the package for the Wrangler CLI. To do that, type in the following command below!

```bash
npm install -g @cloudflare/wrangler
```

### Authenticate Wrangler
The next step is to authorize Wrangler with your existing Cloudflare account. To do that, type in the following command below!

```bash
wrangler login
```

When you do this, it will open your default browser and will ask you to authorize it with your cloudflare account. If you are not already logged in with it, make sure that you do that before running the command!

### Deploy the website
The last step is deploying your website to the worker system. To do that, type in the following command below!

```bash
wrangler deploy
```

If you want to preview your changes, type in the following command below!

```bash
wrangler dev
```

## Contributing to the documentation

> [!NOTE]
>
> The page for editing our documentation is not finished yet! If you want to suggest edit to a page, please contact us via email or by submitting an issue to this repository!

If you want to help out in improving our documentation, please see the page for it [here](src/content/docs/polices//contributions/editing-our-documentation.md)

## See it in action
The website can be found here: [docs.ttnrtsite.me](https://docs.ttnrtsite.me)