---
title: Requesting user data
description: This page will go over on requesting a user's profile from the API backend
---

## Information
The myTT API has some routes for it to operate, but can also grab your account data based on your account ID. This is can be done with a simple URL request and your data will popup instantly!

## How to do it
You can request your account data in two different ways: Using the API route, or from our website. The following sections should give you an idea on how you can view your profile information.

### Using the API
To request your account data, open your preferred browser or API viewer. Enter the URL as defined below.

```
https://my.ttnrtsite.me/user_profile?id=USER_ID
```

The variable `USER_ID` is your account ID that you have when you created your account. When you call a number, the database will check if the account associated with the id exists. If the account doesn't exist, then the account is not in the database. Note that the number id ranges from `1` to `100`. So, if your user ID is 2, then use the number 2 in your URL.

The complete URL will look something like this.

```
https://my.ttnrtsite.me/user_profile?id=1
```

#### Responses
The JSON schema below is how the response will be layed out as. A more detailed JSON schema for the response can also be found [here](/user_data_schema.json). Note that the information in the schema JSON file may be a bit different compared to the example response shown below. You are free to use the schema file as much as you want. If you have any questions about it, please let us know by submitting an issue to the documentation repository.

```json
{
  "id": number,
  "username": string,
  "full_name": string,
  "roles": string[] | null,
  "profile": {
    "about_me_markdown": string,
    "about_me_html": string,
    "color_banner": string,
    "private": boolean,
    "gravatar_uri": string
  },
  "created_since": string
}
```

Using this information that we have from the schema above, we can create an example of the response that you will get from the API.

```json
{
  "id": 1,
  "username": "john_doe",
  "full_name": "John Doe",
  "roles": ["Employee"],
  "profile": {
    "about_me_markdown": "**Hello world**",
    "about_me_html": "<strong>Hello world</strong>",
    "color_banner": "#2986cc",
    "private": false,
    "gravatar_uri": "https://ttnrtsite.me/logos/ttnrtlogo_v3.png"
  },
  "created_since": "2026-01-16T15:02:35.000Z"
}
```

You can see a part of the account information, this includes the ID, username, full name, creation date, and the avatar (is a gravatar URL). Other parts may be hidden from you to protect the user's privacy, which can be their email in this case.

#### Error messages
If the user decides to hide their profile data from others by setting the `private` flag to `true`, then you will get this error message instead.

```json
{
  "message": "This user has set their profile information to be private for all users!"
}
```

If the user that you were looking for doesn't exist in our database, then you will get this error message instead.
```json
{
  "message": "User account doesn't exist!"
}
```

If the user that you were looking has their account disabled, then you will get this error message instead.
```json
{
  "message": "User account is disabled! Sorry about that!"
}
```

### Using our website
To request your account data, open your preferred browser. Enter the URL as defined below.

```
https://ttnrtsite.me/user_profile?id=USER_ID
```

The variable `USER_ID` is your account ID that you have when you created your account. When you call a number, the database will check if the account associated with the id exists. If the account doesn't exist, then the account is not in the database. Note that the number id ranges from `1` to `100`. So, if your user ID is 2, then use the number 2 in your URL.

The complete URL will look something like this.

```
https://ttnrtsite.me/user_profile?id=1
```

#### Responses
Unlike the API route, our website uses the API route in order to fetch the user's profile information, and then appends it to the profile page in HTML format. Of course, there's going to be error-based responses that will come up, but the outcome is the same thing. You don't need to have the JSON schema that we have included with the API. Instead, all of the data will be gathered based on the response from the API, to which it is appended to the profile page as a template, and then the information is displayed in it's true form and fashion. Below is an example on how the profile will look like.

:::note
There should a screenshot here, right? Maybe we didn't add it yet? You can help us out by editing this page!
:::

You can see a part of the account information, this includes the ID, username, full name, creation date, and the avatar (is a gravatar URL). Other parts may be hidden from you to protect the user's privacy, which can be their email in this case.

#### Error messages

:::note
These error messages will come out as a JSON response in order to be compliant with our 500 error message page, meaning that the response output will be somewhat different compared to the responses below. If there isn't any error messages from the API, then you might get a error message that would look like this.

```json
{
  "message": "Server didn't respond correctly! Try again later!"
}
```

This would sometimes occur if the server happens to go down for some reason, or if it's due to a web server failure that we didn't catch in time. In any case, the error messages will be different as they would normally be.
:::

If the user decides to hide their profile data from others by setting the `private` flag to `true`, then you will get this error message instead.

```json
{
  "message": "This user has set their profile information to be private for all users!"
}
```

If the user that you were looking for doesn't exist in our database, then you will get this error message instead.
```json
{
  "message": "User account doesn't exist!"
}
```

If the user that you were looking has their account disabled, then you will get this error message instead.
```json
{
  "message": "User account is disabled! Sorry about that!"
}
```

## What you can do with it
Using this, you can share your profile by using a script to fetch the data or a similar way to do it. Note that not all data cannot be seen or will be appended to whatever you add the data to. If you want to have a profile banner on your website using the API, you can do so by going to the "Profile banner" in the "myTT" section of our documentation! Again, it's up to you on how you're going to use it!

