---
title: Information
---
This page will go over the use and what you can do with the TTNRT API

## What the API is about
The TTNRT API allows users to access data from all across the TTNRT network and can grab data such their account data on MyTT, services list, and many more! When you send a request to the main page of the API site, you can get a response that would look something like this.

```json
{
  "status": 200,
  "message": "Hello world!"
}
```

Notice that the format is in JSON. However, other routes might have arrays in them. For example, if you request something that is fetched from the database, it will be in array format. An example of this would look something like this.

```json
{
  "status": 200,
  "data": [
    {
      "id": 0,
      "username": "johndoe",
      "email": "johndoe123@mail.com",
      "fullname": "John Doe",
      "createdon": "2025-04-29"
    }
  ]
}
```

## How you can request it
You may request a route that is available to you using a GET or POST request if one of them require any of them. If there is GET request, you can access it anywhere, even inside your browser (if the browser has support for JSON viewing)! You can also use an API viewer such as Postmon to access the site as well!

:::caution
Please do not spam or send too many requests at one time! You will be ratelimited for 15 minutes or longer should you do this! Some routes may have this feature with them, so please keep in mind on how many requests you send to the server!
:::

## What it should be used for
Even though the API is free to use, you should notice some limitations and what you should expect if you use it too much. Since this service is using the MySQL database, it's important not to send too much requests the server. This is so that other users can access the database as well on other websites that have to utilize it. You may get a rate limit error if you spam the server too much, so make sure to have common sense when you use the API!

## Support and help
If you need any help on using the API, you should contact via our email or our Discord server. If there is website issue such as a proxy error or an outage, you should also email us!