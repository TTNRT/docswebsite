---
title: Requesting user data
description: This page will go over on requesting a user's profile from the API backend
---

## Information
The myTT API has some routes for it to operate, but can also grab your account data based on your account ID. This is can be done with a simple URL request and your data will popup instantly!

## How to do it
To request your account data, open your preferred browser or API viewer. Enter the URL as defined below.

```
https://my.ttnrtsite.me/api/user/USER_ID
```

The variable `USER_ID` is your account ID that you have when you created your account.

:::note
For context on this variable, it's from the database in a row called `id`. When you call a number, the database will check if the account associated with the id exists. If the account doesn't exist, then the account is not in the database. Note that the number id ranges from `1` to `100`. So, if your user ID is 2, then use the number 2 in your URL.
:::

The complete URL will look something like this.

```
https://my.ttnrtsite.me/api/user/1
```

The response will look something like this.

```json
{
  id: 1,
  username: "john_doe",
  fullname: "John Doe",
  createdAt": "2024-11-06T22:01:36.000Z",
  avatar: "https://my.ttnrtsite.me/usericon.png"
}
```

You can see a part of the account information, this includes the ID, username, full name, creation date, and the avatar (is a gravatar URL). Other parts may be hidden from you to protect the user's privacy, which can be their email in this case.

## What you can do with it
Using this, you can share your profile by using a script to fetch the data or a similar way to do it. Note that not all data cannot be seen or will be appended to whatever you add the data to. If you want to have a profile banner on your website using the API, you can do so by going to the "Profile banner" in the "myTT" section of our documentation! Again, it's up to you on how you're going to use it!