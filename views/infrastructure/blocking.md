---
eleventyNavigation:
    parent: infrastructure
    title: Blocking
layout: "website.njk"
---

# Blocking
When it comes to attacks, we have to take extra steps to prevent network attacks or, in this case, DDOS attacks. For this, we use a GeoIP database system to block a certain country that can pose a threat to us. This is mostly done on Cloudflare or on the origin server.

## Why we do this
For one, most countrys around the globe can attack websites with DDOS attacks, by sending packets to that server and taking it down. While this is not typical in our current modern day web, at any time, a attack can occur. Our websites and site locations are configured to utilize and block countrys that show a threat to us. A seperate plan would have to block the IP the attack came from.

## How it works
The country would have to send a request to the site location via a web browser or simailer system that will send requests back and back on their private network. Once a request is send, the web server will log it to the origin server and show extra details based on the request it sent. If the country is on the blacklist, their request will be blocked or redirected to a seprate page showing that their country or IP is blocked and cannot accpect their request. Depending on what we use, this process might be different based on their choosing.