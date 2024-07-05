# Web server
On site, it is importent to serve a web server that can send content to the client in vise-versa. This process goes as far from proxying to serving web files. This list can include the following.

- HTML
- PHP
- JSON/JWT

Other types of content that can be served are:

- NodeJS server
- Docker server

## Forwarding to the internet
Our next approach is to send all of the data to the internet. In this case, forwarding the web server to a gateway. While most of our sites are mostly forwarded to a proxy server, some are forwarded using [Cloudflare tunnels](https://www.cloudflare.com/products/tunnel/), a system designed to forward any port or website server using it's own protocal system. Furthermore, all of our services are protected using the Cloudflare infrastructure, mainly through a CDN or DNS system. Requests are still sent back to the origin server in this case.

## General use
Usuallly a web server would have to only use static files, in case proxying is not available. Mostly, our configuration is set to use custom headers to inform the user that they are accessing a secure web server and that information is stored better. This is mostly possabile on most web server applications.

!!!info Notice
If you want to see what the actual headers are when accessing our sites, open your browsers dev tools window and check the "Network" tab. Once you refresh the page, you can select the page's URL to see it's headers. An example like this is shown below.

```
server: Cloudflare
X-Powered-By: Example name
```
!!!