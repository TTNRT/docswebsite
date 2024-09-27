---
eleventyNavigation:
    parent: ttspaces
    title: Port forwarding
layout: "website.njk"
---

# Port forwarding
This section will go over port forwarding that you can utilize with your Devspace.

## Pros and cons
Although it can be possible to forward ports outside your Devspace, there is some limitations you might have when you use it.

Pros:
- Able to access the port URL anywhere
- Forwards it perfectly

Cons:
- Not all URLs can be perfect
- Will need to be accessed through a fake subfolder that forwards the port you are looking for
- Stays up until a shutdown command or update occurs to the container

## Accessing your URL
The URL syntax for accessing your port would look like this:

```
https://{yourhostname}.ttnrtsite.io/port{portnumber}
```